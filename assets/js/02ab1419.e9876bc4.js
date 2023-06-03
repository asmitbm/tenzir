"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&l(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>a(e,c(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_label:"-"},b="dash",y={unversionedId:"understand/connectors/dash",id:"understand/connectors/dash",title:"dash",description:"The dash connector (written as -) is an alias for the stdin",source:"@site/docs/understand/connectors/dash.md",sourceDirName:"understand/connectors",slug:"/understand/connectors/dash",permalink:"/docs/next/understand/connectors/dash",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/connectors/dash.md",tags:[],version:"current",frontMatter:{sidebar_label:"-"},sidebar:"docsSidebar",previous:{title:"Connectors",permalink:"/docs/next/understand/connectors/"},next:{title:"directory",permalink:"/docs/next/understand/connectors/directory"}},O={},h=[],v={toc:h},g="wrapper";function w(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,u(p(p({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"dash"}),"dash"),(0,n.kt)("p",null,"The dash connector (written as ",(0,n.kt)("inlineCode",{parentName:"p"},"-"),") is an alias for the ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/connectors/stdin"}),(0,n.kt)("inlineCode",{parentName:"a"},"stdin")),"\nloader and ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/connectors/stdout"}),(0,n.kt)("inlineCode",{parentName:"a"},"stdout"))," saver."))}w.isMDXComponent=!0}}]);