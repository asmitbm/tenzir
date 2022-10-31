"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6981],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:1},l="Build",o={unversionedId:"setup/build",id:"setup/build",title:"Build",description:"Like many C++ projects, VAST uses CMake to manage the build",source:"@site/docs/setup/build.md",sourceDirName:"setup",slug:"/setup/build",permalink:"/docs/setup/build",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Download",permalink:"/docs/setup/download"},next:{title:"Install",permalink:"/docs/setup/install/"}},p={},s=[{value:"Dependencies",id:"dependencies",level:2},{value:"Nix Environment",id:"nix-environment",level:3},{value:"Compile",id:"compile",level:2},{value:"Test",id:"test",level:2},{value:"Install",id:"install",level:2},{value:"Clean",id:"clean",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build"},"Build"),(0,r.kt)("p",null,"Like many C++ projects, VAST uses ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org"},"CMake")," to manage the build\nprocess. Aside from a modern C++20 compiler, you need to ensure availability of\nthe dependencies in the table below."),(0,r.kt)("p",null,"We provide ",(0,r.kt)("a",{parentName:"p",href:"#nix"},"Nix")," expressions for deterministic builds."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("admonition",{title:"SPDX SBOM",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Every ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases"},"release")," of VAST includes an\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_bill_of_materials"},"SBOM")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://spdx.dev"},"SPDX")," format that includes a comprehensive listing of all\ndependencies and versions."),(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest/download/VAST.spdx"},"Download the ",(0,r.kt)("strong",{parentName:"a"},"latest SBOM")," here"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dependency"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C++ Compiler"),(0,r.kt)("td",{parentName:"tr",align:"center"},"C++20 required"),(0,r.kt)("td",{parentName:"tr",align:null},"VAST is tested to compile with GCC >= 10.0 and Clang >= 13.0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://cmake.org"},"CMake")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 3.19"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross-platform tool for building, testing and packaging software.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/actor-framework/actor-framework"},"CAF")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 0.17.6"),(0,r.kt)("td",{parentName:"tr",align:null},"Implementation of the actor model in C++. (Bundled as submodule.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://google.github.io/flatbuffers/"},"FlatBuffers")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 1.12.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory-efficient cross-platform serialization library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://arrow.apache.org"},"Apache Arrow")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 8.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for in-memory data representation. Must be built with Compute, Zstd and Parquet enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jbeder/yaml-cpp"},"yaml-cpp")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 0.6.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for reading YAML configuration files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/simdjson/simdjson"},"simdjson")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 0.7"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for high-performance JSON parsing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gabime/spdlog"},"spdlog")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for logging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://fmt.dev"},"fmt")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 7.1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for formatted text output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Cyan4973/xxHash"},"xxHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 0.8.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for computing fast hash digests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Tessil/robin-map"},"robin-map")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 0.6.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Fast hash map and hash set using robin hood hashing. (Bundled as subtree.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/FastFloat/fast_float"},"fast_float")),(0,r.kt)("td",{parentName:"tr",align:"center"},">= 3.2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Required for parsing floating point numbers. (Bundled as submodule.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.tcpdump.org"},"libpcap")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Required for PCAP import, export, and pivoting to and from PCAP traces.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://stiffstream.com/en/products/restinio.html"},"restinio")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Required for providing a REST API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zeek/broker"},"broker")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Required to build the Broker plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"http://www.doxygen.org"},"Doxygen")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Required to build documentation for libvast.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jgm/pandoc"},"Pandoc")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Required to build manpage for VAST.")))),(0,r.kt)("p",null,"The minimum specified versions reflect those versions that we use in CI and\nmanual testing. Older versions may still work in select cases."),(0,r.kt)("h3",{id:"nix-environment"},"Nix Environment"),(0,r.kt)("p",null,"We provide a Nix flake you can use to setup an environment in which all\ndependencies are available. Running ",(0,r.kt)("inlineCode",{parentName:"p"},"nix develop")," inside the main source\ndirectory will get you there."),(0,r.kt)("p",null,"You can also delegate the entire build process to Nix with by invoking\n",(0,r.kt)("inlineCode",{parentName:"p"},"nix build"),", but be aware that this method does not support incremental\nbuilds in case you plan to make changes to the source code."),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("p",null,"Building VAST involves the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest"},"Download the latest release"),"\nor clone the repository recursively:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/tenzir/vast\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the build with CMake. For faster builds, we recommend passing\n",(0,r.kt)("inlineCode",{parentName:"p"},"-G Ninja")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd vast\ncmake -B build\n# CMake defaults to a "Debug" build. When performance matters, use "Release"\ncmake -B build -DCMAKE_BUILD_TYPE=Release  \n')),(0,r.kt)("p",{parentName:"li"},"Optionally, you can use the CMake TUI to visually configure the build:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ccmake build\n")),(0,r.kt)("p",{parentName:"li"},"The source tree also contains a set of CMake presets that combine various\nconfiguration options into curated build flavors. You can list them with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --list-presets\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the executable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --build build --target all\n")))),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"After you have built the executable, run the unit and integration tests to\nverify that your build works as expected:"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run component-level unit tests:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ctest --test-dir build\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run end-to-end integration tests:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --build build --target integration\n")))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Install VAST system-wide.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cmake --install build\n")))),(0,r.kt)("admonition",{title:"Customize Installation",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you prefer to install into a custom install prefix, install with ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefix\n/path/to/install/prefix"),". To remove debug symbols from the installed binaries\nand libraries, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--strip"),". To install only files relevant for running VAST\nand not for plugin development pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--component Runtime"),".")),(0,r.kt)("h2",{id:"clean"},"Clean"),(0,r.kt)("p",null,"In case you want to make changes to your build environment, we recommend\ndeleting the build tree entirely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf build\n")),(0,r.kt)("p",null,"This avoids subtle configuration glitches of transitive dependencies. For\nexample, CMake doesn't disable assertions when switching from a ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug")," to\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," build, but would do so when starting with a fresh build of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"Release"),"."))}m.isMDXComponent=!0}}]);