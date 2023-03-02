"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>w,frontMatter:()=>b,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const b={title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",authors:"dominiklohmann",date:new Date("2022-01-27T00:00:00.000Z"),last_updated:new Date("2022-07-15T00:00:00.000Z"),tags:["release","transforms","query"]},d=void 0,g={permalink:"/blog/vast-v1.0",source:"@site/blog/vast-v1.0/index.md",title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"transforms",permalink:"/blog/tags/transforms"},{label:"query",permalink:"/blog/tags/query"}],readingTime:3.195,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",authors:"dominiklohmann",date:"2022-01-27T00:00:00.000Z",last_updated:"2022-07-15T00:00:00.000Z",tags:["release","transforms","query"]},prevItem:{title:"VAST v1.1",permalink:"/blog/vast-v1.1"}},v={authorsImageUrls:[void 0]},y=[],h={toc:y},O="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,m(u(u({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are happy to announce ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v1.0.0"}),"VAST v1.0"),"!"),(0,n.kt)("p",null,"This release brings a new approach to software versioning for Tenzir. We laid\nout the semantics in detail in a new ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/tenzir/vast/blob/v1.0.0/VERSIONING.md"}),"VERSIONING"),"\ndocument."))}w.isMDXComponent=!0}}]);