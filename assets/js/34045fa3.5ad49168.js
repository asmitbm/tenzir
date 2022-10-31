"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),g=a,f=c["".concat(u,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Query Language",i={unversionedId:"understand/query-language/README",id:"understand/query-language/README",title:"Query Language",description:"VAST query language (or VASTQL) allows for flexible extraction of events. It",source:"@site/docs/understand/query-language/README.md",sourceDirName:"understand/query-language",slug:"/understand/query-language/",permalink:"/docs/understand/query-language/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Taxonomies",permalink:"/docs/understand/data-model/taxonomies"},next:{title:"Expressions",permalink:"/docs/understand/query-language/expressions"}},u={},l=[{value:"Language Evolution",id:"language-evolution",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-language"},"Query Language"),(0,a.kt)("p",null,"VAST query language (or VASTQL) allows for flexible extraction of events. It\nis currently limited to the ",(0,a.kt)("a",{parentName:"p",href:"query-language/expressions"},"expression language")," to\nfilter a subset of data."),(0,a.kt)("h2",{id:"language-evolution"},"Language Evolution"),(0,a.kt)("p",null,"Moving forward, we plan to go beyond pure filter and add a pipeline-style\ndataflow processing engine. This engine exists partially today to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/use/transform"},"transform")," data, but needs further work to be\navailable for user queries."),(0,a.kt)("p",null,"The basic idea is that a query consists of two connected pieces: a ",(0,a.kt)("em",{parentName:"p"},"dataset")," to\nrepresent a data source and a ",(0,a.kt)("em",{parentName:"p"},"pipeline")," as a squence of operators to process\nthe data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Query Language",src:n(43231).Z+"#gh-light-mode-only",width:"1258",height:"260"}),"\n",(0,a.kt)("img",{alt:"Query Language",src:n(94919).Z+"#gh-dark-mode-only",width:"1258",height:"260"})),(0,a.kt)("p",null," To date, a VAST expression takes the role of a dataset and the pipeline is a\ntransformation. VAST implements a few operators as custom commands, such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"pivot")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"explore"),". Stay tuned."))}d.isMDXComponent=!0},94919:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-language.dark-d71a0a71db8879757bfdaa7391801103.png"},43231:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query-language.light-c276650944e817ebe2dd109bf555d744.png"}}]);