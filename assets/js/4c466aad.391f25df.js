"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>O,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const d={title:"The New REST API",authors:["lava","mavam"],date:new Date("2023-01-26T00:00:00.000Z"),last_updated:new Date("2023-02-08T00:00:00.000Z"),image:"/img/blog/rest-api-deployment-single.excalidraw.svg",tags:["frontend","rest","api","architecture"]},g=void 0,b={permalink:"/blog/the-new-rest-api",source:"@site/blog/the-new-rest-api/index.md",title:"The New REST API",description:"As of v2.4 VAST ships with a new web plugin that",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"frontend",permalink:"/blog/tags/frontend"},{label:"rest",permalink:"/blog/tags/rest"},{label:"api",permalink:"/blog/tags/api"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:6.92,hasTruncateMarker:!0,authors:[{name:"Benno Evers",title:"Principal Engineer",url:"https://github.com/lava",email:"benno@tenzir.com",imageURL:"https://github.com/lava.png",key:"lava"},{name:"Matthias Vallentin",title:"Co-Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"The New REST API",authors:["lava","mavam"],date:"2023-01-26T00:00:00.000Z",last_updated:"2023-02-08T00:00:00.000Z",image:"/img/blog/rest-api-deployment-single.excalidraw.svg",tags:["frontend","rest","api","architecture"]},prevItem:{title:"From Slack to Discord",permalink:"/blog/from-slack-to-discord"},nextItem:{title:"Parquet & Feather: Data Engineering Woes",permalink:"/blog/parquet-and-feather-data-engineering-woes"}},h={authorsImageUrls:[void 0,void 0]},v=[],y={toc:v},w="wrapper";function O(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(w,m(u(u({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of ",(0,a.kt)("a",u({parentName:"p"},{href:"/blog/vast-v2.4"}),"v2.4")," VAST ships with a new ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/understand/architecture/plugins"}),"plugin")," that\nprovides a ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/use/integrate/rest-api"}),"REST API"),". The ",(0,a.kt)("a",u({parentName:"p"},{href:"/api"}),"API documentation")," describes the\navailable endpoints also provides an\n",(0,a.kt)("a",u({parentName:"p"},{href:"https://spec.openapis.org/oas/latest.html"}),"OpenAPI")," spec for download. This\nblog post shows how we built the API and what you can do with it."))}O.isMDXComponent=!0}}]);