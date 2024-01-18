"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>x});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>a(e,c(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={},y="context create",v={unversionedId:"operators/sources/context-create",id:"version-Tenzir v4.6/operators/sources/context-create",title:"context create",description:"Creates a new context.",source:"@site/versioned_docs/version-Tenzir v4.6/operators/sources/context-create.md",sourceDirName:"operators/sources",slug:"/operators/sources/context-create",permalink:"/Tenzir v4.6/operators/sources/context-create",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.6/operators/sources/context-create.md",tags:[],version:"Tenzir v4.6",frontMatter:{},sidebar:"docsSidebar",previous:{title:"api",permalink:"/Tenzir v4.6/operators/sources/api"},next:{title:"context delete",permalink:"/Tenzir v4.6/operators/sources/context-delete"}},b={},x=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name&gt;</code>",id:"name",level:3},{value:"<code>&lt;context-type&gt;</code>",id:"context-type",level:3},{value:"Examples",id:"examples",level:2}],h={toc:x},k="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(k,d(u(u({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"context-create"}),"context create"),(0,n.kt)("p",null,"Creates a new context."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"context create <name> <context-type>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"context create")," creates contexts\u2014a flexible mechanism for data enrichment.\nReturns information about the created context."),(0,n.kt)("h3",u({},{id:"name"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<name>")),(0,n.kt)("p",null,"The name of the new context. The name must not yet be used by any other context."),(0,n.kt)("h3",u({},{id:"context-type"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<context-type>")),(0,n.kt)("p",null,"The context type for the new context. Context types are plugins."),(0,n.kt)("p",null,"Available options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lookup-table"),": an in-memory hash table with a single key column for enriching\nwith arbitrary data.")),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"lookup-table")," context called ",(0,n.kt)("inlineCode",{parentName:"p"},"feodo"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"context create feodo lookup-table\n")))}O.isMDXComponent=!0}}]);