"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>g,metadata:()=>y,toc:()=>d});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const g={title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:new Date("2022-03-25T00:00:00.000Z"),tags:["release","compaction","query"]},v=void 0,y={permalink:"/blog/vast-v1.1.1",source:"@site/blog/vast-v1.1.1/index.md",title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",date:"2022-03-25T00:00:00.000Z",formattedDate:"March 25, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:.635,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:"2022-03-25T00:00:00.000Z",tags:["release","compaction","query"]},prevItem:{title:"VAST v1.1.2",permalink:"/blog/vast-v1.1.2"},nextItem:{title:"VAST v1.1",permalink:"/blog/vast-v1.1"}},b={authorsImageUrls:[void 0]},d=[],h={toc:d},O="wrapper";function k(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,m(u(u({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dear community, we are excited to announce ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v1.1.1"}),"VAST\nv1.1.1"),"."),(0,n.kt)("p",null,"This release contains some important bug fixes on top of everything included in\nthe ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v1.1.0"}),"VAST v1.1")," release."))}k.isMDXComponent=!0}}]);