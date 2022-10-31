"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},o="Build Environment",l={unversionedId:"contribute/build-environment",id:"contribute/build-environment",title:"Build Environment",description:"Use Nix as Reproducible Development Environment",source:"@site/docs/contribute/build-environment.md",sourceDirName:"contribute",slug:"/contribute/build-environment",permalink:"/docs/contribute/build-environment",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/contribute/build-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Coding Style",permalink:"/docs/contribute/coding-style"},next:{title:"Changelog",permalink:"/docs/contribute/changelog"}},c={},u=[{value:"Use Nix as Reproducible Development Environment",id:"use-nix-as-reproducible-development-environment",level:2},{value:"Static Builds",id:"static-builds",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-environment"},"Build Environment"),(0,i.kt)("h2",{id:"use-nix-as-reproducible-development-environment"},"Use Nix as Reproducible Development Environment"),(0,i.kt)("p",null,"The dependencies for a dynamic build can be fetched by running ",(0,i.kt)("inlineCode",{parentName:"p"},"nix develop"),"\nfrom the topmost directory in the source tree."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"direnv")," tool is able to automate this process, create an ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc"),"\nwith the content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"use flake\n")),(0,i.kt)("p",null,"and it will automatically add the dependencies to your shell environment when\nyou move into the source directory."),(0,i.kt)("p",null,"If you want to silence the messages about binary caches you can use a variation\nof ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc")," that invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," with a lower verbosity setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'use_flake2() {\n  watch_file flake.nix\n  watch_file flake.lock\n  mkdir -p "$(direnv_layout_dir)"\n  eval "$(nix --quiet --quiet print-dev-env --profile "$(direnv_layout_dir)/flake-profile" "$@")"\n}\n\nuse_flake2\n')),(0,i.kt)("p",null,"The VAST repository comes with a set of CMake configure and build presets that\ncan be used in this environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-release"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This build environment is currently only tested on Linux.")),(0,i.kt)("h3",{id:"static-builds"},"Static Builds"),(0,i.kt)("p",null,"Static binaries require a that the dependencies were built in static mode as\nwell. That means we need to use a different environment, you can enter it with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nix develop .#vast-static\n")),(0,i.kt)("p",null,"The CMake presets for that mode are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-release"))))}p.isMDXComponent=!0}}]);