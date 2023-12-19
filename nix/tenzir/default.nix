{callPackage, ...} @ args: let
  pkgFun = {
    self,
    lib,
    stdenv,
    callPackage,
    pname,
    tenzir-source,
    cmake,
    ninja,
    pkg-config,
    poetry,
    lld,
    boost,
    caf,
    curl,
    libpcap,
    arrow-cpp,
    fast_float,
    flatbuffers,
    fluent-bit,
    protobuf,
    grpc,
    spdlog,
    libyamlcpp,
    simdjson,
    robin-map,
    jemalloc,
    libunwind,
    xxHash,
    rabbitmq-c,
    yara,
    rdkafka,
    cppzmq,
    libmaxminddb,
    re2,
    tenzir-functional-test-deps,
    tenzir-integration-test-deps,
    dpkg,
    restinio,
    pfs,
    versionLongOverride ? null,
    versionShortOverride ? null,
    extraPlugins ? [],
    symlinkJoin,
    runCommand,
    makeWrapper,
    extraCmakeFlags ? [],
    disableTests ? true,
    pkgsBuildHost,
  }: let
    inherit (stdenv.hostPlatform) isMusl isStatic;

    versionLongOverride' = lib.removePrefix "v" versionLongOverride;
    versionShortOverride' = lib.removePrefix "v" versionShortOverride;
    versionFallback = (builtins.fromJSON (builtins.readFile ./../../version.json)).tenzir-version-fallback;
    versionLong =
      if (versionLongOverride != null)
      then versionLongOverride'
      else versionFallback;
    versionShort =
      if (versionShortOverride != null)
      then versionShortOverride'
      else versionLong;

    extraPlugins' = map (x: "extra-plugins/${baseNameOf x}") extraPlugins;
    bundledPlugins =
      [
        "plugins/gcs"
        "plugins/fluent-bit"
        "plugins/kafka"
        "plugins/nic"
        "plugins/parquet"
        "plugins/sigma"
        "plugins/velociraptor"
        "plugins/web"
        "plugins/zmq"
      ]
      # Temporarily disable yara on the static mac build because of issues
      # building protobufc.
      ++ lib.optionals (!(stdenv.isDarwin && isStatic)) [
        "plugins/yara"
      ]
      ++ extraPlugins';
  in
    stdenv.mkDerivation ({
        inherit pname;
        version = versionLong;
        src = tenzir-source;

        postUnpack = ''
          mkdir -p source/extra-plugins
          for plug in ${lib.concatStringsSep " " extraPlugins}; do
            cp -R $plug source/extra-plugins/$(basename $plug)
          done
          chmod -R u+w source/extra-plugins
        '';

        outputs = ["out"] ++ lib.optionals isStatic ["package"];

        nativeBuildInputs = [
          cmake
          ninja
          dpkg
          protobuf
          poetry
        ] ++ lib.optionals stdenv.isDarwin [
          lld
        ];
        propagatedNativeBuildInputs = [pkg-config];
        buildInputs = [
          fast_float
          fluent-bit
          grpc
          libpcap
          libunwind
          libyamlcpp
          libmaxminddb
          protobuf
          rabbitmq-c
          rdkafka
          cppzmq
          re2
          restinio
        ] ++ lib.optionals stdenv.isLinux [
          pfs
        ] ++ lib.optionals (!(stdenv.isDarwin && isStatic)) [
          yara
        ];
        propagatedBuildInputs = [
          arrow-cpp
          boost
          caf
          curl
          flatbuffers
          robin-map
          simdjson
          spdlog
          xxHash
        ] ++ lib.optionals isMusl [
          jemalloc
        ];

        env.POETRY_VIRTUALENVS_IN_PROJECT = 1;
        cmakeFlags =
          [
            "-DCMAKE_FIND_PACKAGE_PREFER_CONFIG=ON"
            "-DCAF_ROOT_DIR=${caf}"
            "-DTENZIR_EDITION_NAME=${lib.toUpper pname}"
            "-DTENZIR_VERSION_TAG=v${versionLong}"
            "-DTENZIR_VERSION_SHORT=v${versionShort}"
            "-DTENZIR_ENABLE_RELOCATABLE_INSTALLATIONS=${lib.boolToString isStatic}"
            "-DTENZIR_ENABLE_BACKTRACE=ON"
            "-DTENZIR_ENABLE_JEMALLOC=${lib.boolToString isMusl}"
            "-DTENZIR_ENABLE_MANPAGES=OFF"
            "-DTENZIR_ENABLE_BUNDLED_AND_PATCHED_RESTINIO=OFF"
            "-DTENZIR_ENABLE_FLUENT_BIT_SO_WORKAROUNDS=OFF"
            "-DTENZIR_PLUGINS=${lib.concatStringsSep ";" bundledPlugins}"
          ]
          ++ lib.optionals isStatic [
            "-DBUILD_SHARED_LIBS:BOOL=OFF"
            #"-DCMAKE_INTERPROCEDURAL_OPTIMIZATION:BOOL=ON"
            "-DCPACK_GENERATOR=${if stdenv.isDarwin then "productbuild" else "TGZ;DEB"}"
            "-DTENZIR_ENABLE_STATIC_EXECUTABLE:BOOL=ON"
            "-DTENZIR_PACKAGE_FILE_NAME_SUFFIX=static"
            "-DTENZIR_ENABLE_BACKTRACE=${lib.boolToString (!stdenv.isDarwin)}"
          ]
          ++ lib.optionals stdenv.hostPlatform.isx86_64 [
            "-DTENZIR_ENABLE_SSE3_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSSE3_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSE4_1_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSE4_1_INSTRUCTIONS=ON"
            # AVX and up is disabled for compatibility.
            "-DTENZIR_ENABLE_AVX_INSTRUCTIONS=OFF"
            "-DTENZIR_ENABLE_AVX2_INSTRUCTIONS=OFF"
          ]
          ++ lib.optionals stdenv.isDarwin (
          let
            compilerName =
              if stdenv.cc.isClang
              then "clang"
              else if stdenv.cc.isGNU
              then "gcc"
              else "unknown";
            # ar with lto support
            ar = stdenv.cc.bintools.targetPrefix + {
              "clang" = "ar";
              "gcc" = "gcc-ar";
              "unknown" = "ar";
            }."${compilerName}";
            # ranlib with lto support
            ranlib = stdenv.cc.bintools.targetPrefix + {
              "clang" = "ranlib";
              "gcc" = "gcc-ranlib";
              "unknown" = "ranlib";
            }."${compilerName}";
          in [
            # Want's to install into the users home, but that would be the
            # builder in the Nix context, and that doesn't make sense.
            "-DTENZIR_ENABLE_INIT_SYSTEM_INTEGRATION=OFF"
          ])
          ++ lib.optionals disableTests [
            "-DTENZIR_ENABLE_UNIT_TESTS=OFF"
          ]
          ++ extraCmakeFlags;

        # TODO: Fix LTO on darwin by passing these commands by their original
        # executable names "llvm-ar" and "llvm-ranlib". Should work with
        # `readlink -f $AR` to find the correct ones.
        #preConfigure = lib.optionalString stdenv.isDarwin ''
        #  cmakeFlagsArray+=("-DCMAKE_C_COMPILER_AR=$(command -v $AR)")
        #  cmakeFlagsArray+=("-DCMAKE_CXX_COMPILER_AR=$(command -v $AR)")
        #  cmakeFlagsArray+=("-DCMAKE_C_COMPILER_RANLIB=$(command -v $RANLIB)")
        #  cmakeFlagsArray+=("-DCMAKE_CXX_COMPILER_RANLIB=$(command -v $RANLIB)")
        #'';

        hardeningDisable = lib.optionals isStatic [
          "fortify"
          "pic"
        ];

        postBuild = lib.optionalString isStatic ''
          ${pkgsBuildHost.nukeReferences}/bin/nuke-refs bin/*
        '';
        fixupPhase = lib.optionalString isStatic ''
          rm -rf $out/nix-support
        '';

        doCheck = false;
        checkTarget = "test";

        dontStrip = true;

        doInstallCheck = false;
        installCheckInputs = tenzir-functional-test-deps ++ tenzir-integration-test-deps;
        # TODO: Investigate why the disk monitor test fails in the build sandbox.
        installCheckPhase = ''
          PATH="${placeholder "out"}/bin:$PATH" bats -T -j $NIX_BUILD_CORES ../tenzir/functional-test
          python ../tenzir/integration/integration.py \
            --app ${placeholder "out"}/bin/tenzir-ctl \
            --disable "Disk Monitor"
        '';

        passthru = rec {
          plugins = callPackage ./plugins {tenzir = self;};
          withPlugins = plugins': let
            actualPlugins = plugins' plugins;
          in
            if isStatic
            then
              self.override {
                extraPlugins = map (x: x.src) actualPlugins;
              }
            else
              symlinkJoin {
                name = "tenzir";
                paths = [self actualPlugins];
              };
        };

        meta = with lib; {
          description = "Open Source Security Data Pipelines";
          homepage = "https://www.tenzir.com/";
          # Set mainProgram so that all editions work with `nix run`.
          mainProgram = "tenzir";
          license = licenses.bsd3;
          platforms = platforms.unix;
          maintainers = with maintainers; [tobim];
        };
      }
      # allowedRequisites does not work on darwin.
      // lib.optionalAttrs (isStatic && stdenv.isLinux) {
        allowedRequisites = ["out"];
      }
      // lib.optionalAttrs isStatic {
        __noChroot = stdenv.isDarwin;

        installPhase = ''
          runHook preInstall
          PATH=$PATH:/usr/bin
          cmake --install . --component Runtime
          cmakeFlagsArray+=(
            "-UCMAKE_INSTALL_BINDIR"
            "-UCMAKE_INSTALL_SBINDIR"
            "-UCMAKE_INSTALL_INCLUDEDIR"
            "-UCMAKE_INSTALL_OLDINCLUDEDIR"
            "-UCMAKE_INSTALL_MANDIR"
            "-UCMAKE_INSTALL_INFODIR"
            "-UCMAKE_INSTALL_DOCDIR"
            "-UCMAKE_INSTALL_LIBDIR"
            "-UCMAKE_INSTALL_LIBEXECDIR"
            "-UCMAKE_INSTALL_LOCALEDIR"
            "-DCMAKE_INSTALL_PREFIX=/opt/tenzir"
          )
          echo "cmake flags: $cmakeFlags ''${cmakeFlagsArray[@]}"
          cmake "$cmakeDir" $cmakeFlags "''${cmakeFlagsArray[@]}"
          cmake --build . --target package
          rm -rf package/_CPack_Packages
          install -m 644 -Dt $package package/*
          runHook postInstall
        '';
      });
  self = callPackage pkgFun ({self = self;} // args);
in
  self
