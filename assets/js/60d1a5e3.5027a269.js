"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14763],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83530:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>k});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,s(r)),f=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={},y="load",v={unversionedId:"understand/operators/sources/load",id:"version-VAST v3.1/understand/operators/sources/load",title:"load",description:"The load operator acquires raw bytes from a connector.",source:"@site/versioned_docs/version-VAST v3.1/understand/operators/sources/load.md",sourceDirName:"understand/operators/sources",slug:"/understand/operators/sources/load",permalink:"/understand/operators/sources/load",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-VAST v3.1/understand/operators/sources/load.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"from",permalink:"/understand/operators/sources/from"},next:{title:"read",permalink:"/understand/operators/sources/read"}},b={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],h={toc:k},O="wrapper";function g(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(O,u(d(d({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"load"}),"load"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," operator acquires raw bytes from a ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/connectors/"}),"connector"),"."),(0,n.kt)("admonition",d({},{title:"Expert Operator",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," operator is a lower-level building block of the ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sources/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," and\n",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sources/read"}),(0,n.kt)("inlineCode",{parentName:"a"},"read"))," operators. Only use this if you need to operate on raw bytes.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"load <connector>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," operator emits raw bytes."),(0,n.kt)("p",null,"Notably, it cannot be used together with operators that expect events as input,\nbut rather only with operators that expect bytes, e.g.,\n",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/transformations/parse"}),(0,n.kt)("inlineCode",{parentName:"a"},"parse"))," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/operators/sinks/save"}),(0,n.kt)("inlineCode",{parentName:"a"},"save")),"."),(0,n.kt)("h3",d({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"/understand/connectors/"}),"connector")," used to load bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read bytes from stdin:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"load stdin\n")),(0,n.kt)("p",null,"Read bytes from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file path/to/eve.json\n")))}g.isMDXComponent=!0}}]);