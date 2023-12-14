"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,d=f["".concat(s,".").concat(u)]||f[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={sidebar_custom_props:{format:{parser:!0,printer:!0}}},h="feather",y={unversionedId:"formats/feather",id:"formats/feather",title:"feather",description:"Reads and writes the Feather file format.",source:"@site/docs/formats/feather.md",sourceDirName:"formats",slug:"/formats/feather",permalink:"/next/formats/feather",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/feather.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"csv",permalink:"/next/formats/csv"},next:{title:"grok",permalink:"/next/formats/grok"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],g={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(k,m(f(f({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"feather"}),"feather"),(0,n.kt)("p",null,"Reads and writes the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather")," file format."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"feather\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"feather")," format provides both a parser and a printer for Feather files."),(0,n.kt)("p",null,(0,n.kt)("a",f({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather")," is a thin layer on top of ",(0,n.kt)("a",f({parentName:"p"},{href:"https://arrow.apache.org/docs/python/ipc.html#ipc"}),"Arrow\nIPC"),", making it\nconducive for memory mapping and zero-copy usage scenarios."),(0,n.kt)("admonition",f({},{title:"MMAP Parsing",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"When using the parser with the ",(0,n.kt)("a",f({parentName:"p"},{href:"/next/connectors/file"}),(0,n.kt)("inlineCode",{parentName:"a"},"file"))," connector, we\nrecommend passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"--mmap")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," to give the parser full control\nover the reads, which leads to better performance and memory usage.")),(0,n.kt)("p",null,"Tenzir writes Feather files with Zstd compression enables. Our blog has a ",(0,n.kt)("a",f({parentName:"p"},{href:"../../../../blog/parquet-and-feather-writing-security-telemetry/"}),"post\nwith an in-depth analysis")," about the effect of Zstd\ncompression."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Feather file via the ",(0,n.kt)("a",f({parentName:"p"},{href:"/next/operators/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from file --mmap /tmp/data.feather read feather\n")))}O.isMDXComponent=!0}}]);