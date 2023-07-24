"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),o=r(86010),a=r(22093),i=r(11128),c=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:r,description:a}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},t," ",r),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function m({item:e}){var t;const r=(0,a.Wl)(e);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const o=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==i?void 0:i.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&O(e,r,t[r]);if(b)for(var r of b(t))g.call(t,r)&&O(e,r,t[r]);return e};function k({className:e}){const t=(0,a.jA)();return n.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,h({},e));const i=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},90934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>v,toc:()=>O});var n=r(3905),o=r(79215),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>i(e,c(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={},b="Operators",v={unversionedId:"operators",id:"version-Tenzir v4.0-rc9/operators",title:"Operators",description:"An operator is the execution building block of a",source:"@site/versioned_docs/version-Tenzir v4.0-rc9/operators.md",sourceDirName:".",slug:"/operators",permalink:"/operators",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc9/operators.md",tags:[],version:"Tenzir v4.0-rc9",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/language/expressions"},next:{title:"Sources",permalink:"/operators/sources/"}},g={},O=[],h={toc:O},k="wrapper";function w(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(m(m({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"operators"}),"Operators"),(0,n.kt)("p",null,"An ",(0,n.kt)("em",{parentName:"p"},"operator")," is the execution building block of a\n",(0,n.kt)("a",m({parentName:"p"},{href:"/language/pipelines"}),"pipeline"),"."),(0,n.kt)("p",null,"There exist four types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Source"),": produces data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sink"),": consumes data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Transformation"),": produces and consumes data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"User-defined"),": aliases a pipeline as operator")),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);