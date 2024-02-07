#!/usr/bin/env nu

# The expected input schema:
let config = {
  editions: list<{
    name: string
    static: bool
    upload-package-to-github: bool
    package-stores: list<string>
    image-registries: list<string>
  }>
  aliases: list<string>
  container-tags: list<string>
  release-tag: string
}

def upload_packages [
  name: string
  package_stores: list<string>
  aliases # annotation breaks in nu 0.78 : list<string>
  copy: bool = false
  git_tag = null
] {
  let pkg_dir = (nix --accept-flake-config --print-build-logs build --impure $".#($name)^package" --no-link --print-out-paths)
  let debs = (glob $"($pkg_dir)/*.deb")
  let pkgs = (glob $"($pkg_dir)/*.pkg")
  let tgzs = (glob $"($pkg_dir)/*.tar.gz")
  for store in $package_stores {
    let type = ($store | split row ':' | get 0)
    # rclone expects remote ids to be capitalized in environment variables.
    with-env { $"RCLONE_CONFIG_($type | str screaming-snake-case)_TYPE": $type } {
      let run = {|label: string xs: list|
        for x in $xs {
          let dest = $"($store)/($label)/($x | path basename)"
          print $"::notice copying artifact to ($dest)"
          rclone -q copyto $x $dest
          for alias in $aliases {
            # TODO: Add a suffix to alias paths in case we have more than one
            # artifact.
            let alias_path = $"($store)/($label)/($name)-($alias).($x | path parse | get extension)"
            print $"::notice copying artifact to ($alias_path)"
            rclone -q copyto $dest $alias_path
          }
        }
      }
      do $run "debian" $debs
      do $run "macOS" $pkgs
      do $run "tarball" $tgzs
    }
  }
  if $copy {
    print $"::notice copying artifacts to /packages/{debian,tarball}"
    mkdir ./packages/debian ./packages/tarball
    for deb in $debs {
      cp -v $deb ./packages/debian
    }
    for pkg in $pkgs {
      cp -v $pkg ./packages/macOS
    }
    for tgz in $tgzs {
      cp -v $tgz ./packages/tarball
    }
    if $git_tag != null {
      let os = (uname -s)
      if $os == "Linux" {
        cp ($debs | get 0) $"($name)-amd64-linux.deb"
        print $"::attaching ($name)-amd64-linux.deb to ($git_tag)"
        gh release upload $git_tag $"($name)-amd64-linux.deb" --clobber
        cp ($tgzs | get 0) $"($name)-x86_64-linux.tar.gz"
        print $"::attaching ($name)-x86_64-linux.tar.gz to ($git_tag)"
        gh release upload $git_tag $"($name)-x86_64-linux.tar.gz" --clobber
      }
      if $os == "Darwin" {
        cp ($pkgs | get 0) $"($name)-arm64-darwin.pkg"
        print $"::attaching ($name)-arm64-darwin.pkg to ($git_tag)"
        gh release upload $git_tag $"($name)-arm64-darwin.pkg" --clobber
      }
    }
  }
}

def push_images [
  name: string
  image_registries: list<string>
  container_tags # annotation breaks in nu 0.78 : list<string>
] {
  let os = (uname -s)
  if ($os != "Linux" or $image_registries == [] or $container_tags == []) {
    return
  }
  # We always push two images: `tenzir` and `tenzir-node`.
  let image_name = ($name | str replace "static" "slim")
  let node_image_name = ($image_name | str replace "tenzir" "tenzir-node")
  let repo_name = ($name | str replace "-static" "")
  let node_repo_name = ($repo_name | str replace "tenzir" "tenzir-node")
  let tag_suffix = if ($name | str contains "-static") {"-slim"} else {""}
  nix --accept-flake-config run --impure $".#stream-($image_name)-image" | zstd -fo tenzir.tar.zst
  nix --accept-flake-config run --impure $".#stream-($node_image_name)-image" | zstd -fo tenzir-node.tar.zst
  for reg in $image_registries {
    for repo in [$repo_name $node_repo_name] {
      for tag in $container_tags {
        let dest = $"docker://($reg)/tenzir/($repo):($tag)($tag_suffix)"
        print $"::notice pushing ($dest)"
        skopeo copy $"docker-archive:./($repo).tar.zst" $dest
      }
    }
  }
}

def attribute_name [
  edition: record
] {
  $"($edition.name)(if $edition.static {"-static"} else {""})"
}

export def run [
  cfg: record<
    editions: list<record<
      name: string
      static: bool
      upload-package-to-github: bool
      package-stores: list<string>
      image-registries: list<string>
    >>
    aliases: list<string>
    container-tags: list<string>
    git-tag: string
  >
] {
  # Run local effects by building all requested editions.
  if ($cfg.git-tag? != null) {
    $env.TENZIR_DEV_BUILD = 1
  }
  let targets = ($cfg.editions | each {|e| $".#(attribute_name $e)" })
  print $"::notice building ($targets)"
  nix --accept-flake-config --print-build-logs build --impure --no-link ...$targets
  # Run remote effects by uploading packages and images.
  for e in $cfg.editions {
    let stores = (if ($e.package-stores? == null) {[]} else {$e.package-stores})
    let aliases = (if ($cfg.aliases? == null) {[]} else $cfg.aliases)
    let copy = (if ($e.upload-package-to-github? == null) {false} else {$e.upload-package-to-github})
    upload_packages (attribute_name $e) $stores $aliases $copy $cfg.git-tag?
    let registries = (if ($e.image-registries? == null) {[]} else {$e.image-registries})
    let container_tags = (if ($cfg.container-tags? == null) {[]} else {$cfg.container-tags})
    push_images (attribute_name $e) $registries $container_tags
  }
}

def main [
  cfg?: string
] {
  let jcfg = (if ($cfg == null or $cfg == "-") {
    cat
  } else {
    $cfg
  } | from json)
  run $jcfg
}
