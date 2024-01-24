"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91893],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[f]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(p)for(var t of p(r))l.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="parse",y={unversionedId:"operators/parse",id:"version-Tenzir v4.7/operators/parse",title:"parse",description:"Applies a parser to the string stored in a given field.",source:"@site/versioned_docs/version-Tenzir v4.7/operators/parse.md",sourceDirName:"operators",slug:"/operators/parse",permalink:"/Tenzir v4.7/operators/parse",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/operators/parse.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"nics",permalink:"/Tenzir v4.7/operators/nics"},next:{title:"pass",permalink:"/Tenzir v4.7/operators/pass"}},b={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],O={toc:g},h="wrapper";function k(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(h,u(f(f({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"parse"}),"parse"),(0,n.kt)("p",null,"Applies a parser to the string stored in a given field."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"parse <input> <parser> <args>...\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," operator parses a given ",(0,n.kt)("inlineCode",{parentName:"p"},"<input>")," field of type ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," using\n",(0,n.kt)("inlineCode",{parentName:"p"},"<parser>")," and replaces this field with the result. ",(0,n.kt)("inlineCode",{parentName:"p"},"<parser>")," can be one of the\nparsers in ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.7/formats"}),"formats"),"."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Parse ",(0,n.kt)("a",f({parentName:"p"},{href:"/Tenzir%20v4.7/formats/cef"}),"CEF")," from the Syslog messages stored in ",(0,n.kt)("inlineCode",{parentName:"p"},"test.log"),",\nreturning only the result from CEF parser."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from test.log read syslog | parse content cef | yield content\n")))}k.isMDXComponent=!0}}]);