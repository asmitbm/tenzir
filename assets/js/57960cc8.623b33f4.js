"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37971],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||s;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50142:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>d,metadata:()=>v,toc:()=>h});var n=t(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>s(e,a(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const d={},y="shell",v={unversionedId:"operators/sources/shell",id:"version-Tenzir v4.0-rc1/operators/sources/shell",title:"shell",description:"Executes a system command and hooks its stdout into the pipeline.",source:"@site/versioned_docs/version-Tenzir v4.0-rc1/operators/sources/shell.md",sourceDirName:"operators/sources",slug:"/operators/sources/shell",permalink:"/operators/sources/shell",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc1/operators/sources/shell.md",tags:[],version:"Tenzir v4.0-rc1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read",permalink:"/operators/sources/read"},next:{title:"version",permalink:"/operators/sources/version"}},b={},h=[],O={toc:h},g="wrapper";function j(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(g,f(u(u({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"shell"}),"shell"),(0,n.kt)("p",null,"Executes a system command and hooks its stdout into the pipeline."),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/transformations/shell"}),(0,n.kt)("inlineCode",{parentName:"a"},"shell")," as transformation")," for usage\ninstructions. The difference to the transformation is that the source operator\nignores the command's stdin."))}j.isMDXComponent=!0}}]);