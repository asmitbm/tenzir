"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30517],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>v});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(v,s(s({ref:n},c),{},{components:r})):t.createElement(v,s({ref:n},c))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>v,metadata:()=>h,toc:()=>y});var t=r(3905),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&c(e,r,n[r]);if(a)for(var r of a(n))p.call(n,r)&&c(e,r,n[r]);return e},d=(e,n)=>i(e,s(n)),f=(e,n)=>{var r={};for(var t in e)l.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&a)for(var t of a(e))n.indexOf(t)<0&&p.call(e,t)&&(r[t]=e[t]);return r};const v={},m="version",h={unversionedId:"operators/sources/version",id:"version-Tenzir v4.0/operators/sources/version",title:"version",description:"Returns a single event displaying version information of Tenzir.",source:"@site/versioned_docs/version-Tenzir v4.0/operators/sources/version.md",sourceDirName:"operators/sources",slug:"/operators/sources/version",permalink:"/operators/sources/version",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/operators/sources/version.md",tags:[],version:"Tenzir v4.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"show",permalink:"/operators/sources/show"},next:{title:"Transformations",permalink:"/operators/transformations/"}},b={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--dev</code>",id:"--dev",level:3},{value:"Examples",id:"examples",level:2}],g={toc:y},O="wrapper";function k(e){var n=e,{components:r}=n,o=f(n,["components"]);return(0,t.kt)(O,d(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",u({},{id:"version"}),"version"),(0,t.kt)("p",null,"Returns a single event displaying version information of Tenzir."),(0,t.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{}),"version [--dev]\n")),(0,t.kt)("h2",u({},{id:"description"}),"Description"),(0,t.kt)("p",null,"The version operator returns detailed information about Tenzir. The output of\nthe operator has the following schema:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{}),"record {\n  // The version number of Tenzir.\n  version: string,\n  // A list of plugins. Excludes builtins.\n  plugins: list<record {\n    // The plugin name.\n    name: string,\n    // The version of the plugin.\n    version: string,\n  }>,\n}\n")),(0,t.kt)("h3",u({},{id:"--dev"}),(0,t.kt)("inlineCode",{parentName:"h3"},"--dev")),(0,t.kt)("p",null,"Add additional, developer-facing information to the output of the operator. With\n",(0,t.kt)("inlineCode",{parentName:"p"},"--dev")," set, the operator's output has the following schema:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{}),"record {\n  // The version number of Tenzir.\n  version: string,\n  // Build information for Tenzir.\n  build: record {\n    // The configured build type; one of Debug, RelWithDebInfo or Release.\n    type: string,\n    // A hash that uniquely describes the Tenzir build tree.\n    tree_hash: string,\n    // Whether assertions are enabled.\n    assertions: bool,\n    // Information about enabled sanitizers.\n    sanitizers: record {\n      // Whether ASan is enabled.\n      address: bool,\n      // Whether UBSan is enabled.\n      undefined_behavior: bool,\n    },\n  },\n  // A list of plugins. Includes builtins.\n  plugins: list<record {\n    // The plugin name.\n    name: string,\n    // The version of the plugin.\n    version: string,\n    // The types of the plugins, e.g., printer and parser.\n    types: list<string>,\n    // The kind of the plugin; one of static, dynamic, or builtin.\n    kind: string,\n  }>,\n\n}\n")),(0,t.kt)("h2",u({},{id:"examples"}),"Examples"),(0,t.kt)("p",null,"Get the version of your Tenzir process."),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{}),"version\n")),(0,t.kt)("p",null,"Get extended version information of the remote Tenzir node."),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{}),"remote version --dev\n")))}k.isMDXComponent=!0}}]);