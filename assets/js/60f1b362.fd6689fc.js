"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11405:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="drop",p={unversionedId:"understand/language/operators/drop",id:"understand/language/operators/drop",title:"drop",description:"Drops individual fields having the configured extractors from the input or",source:"@site/docs/understand/language/operators/drop.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/drop",permalink:"/docs/understand/language/operators/drop",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/language/operators/drop.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Operators",permalink:"/docs/understand/language/operators/"},next:{title:"extend",permalink:"/docs/understand/language/operators/extend"}},s={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Extractors",id:"extractors",level:3},{value:"Example",id:"example",level:2},{value:"YAML Syntax Example",id:"yaml-syntax-example",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop"},"drop"),(0,a.kt)("p",null,"Drops individual fields having the configured extractors from the input or\nentire schemas."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"drop")," operator is the dual to ",(0,a.kt)("a",{parentName:"p",href:"select"},(0,a.kt)("inlineCode",{parentName:"a"},"select")),", which selects a given set\nof fields from the output."),(0,a.kt)("h2",{id:"synopsis"},"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"drop EXTRACTORS[, \u2026]\n")),(0,a.kt)("h3",{id:"extractors"},"Extractors"),(0,a.kt)("p",null,"The extractors of the fields or schemas to drop."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Drop the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"source_ip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dest_ip"),", and all schemas of type\n",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.dns"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"drop source_ip, dest_ip, :suricata.dns\n")),(0,a.kt)("h2",{id:"yaml-syntax-example"},"YAML Syntax Example"),(0,a.kt)("admonition",{title:"Deprecated",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The YAML syntax is deprecated since VAST v3.0, and will be removed in a future\nrelease. Please use the pipeline syntax instead.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"drop:\n  fields:\n    # Remove the source_ip and dest_ip columns if they exist\n    - source_ip\n    - dest_ip\n  schemas:\n    # Drop all suricata.dns events in their entirety\n    - suricata.dns\n")))}u.isMDXComponent=!0}}]);