"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,u=l["".concat(p,".").concat(f)]||l[f]||m[f]||a;return r?n.createElement(u,s(s({ref:t},d),{},{components:r})):n.createElement(u,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>g,frontMatter:()=>u,metadata:()=>v,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>a(e,s(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const u={},h="from",v={unversionedId:"understand/operators/sources/from",id:"understand/operators/sources/from",title:"from",description:"Produces events by combining a connector and a format.",source:"@site/docs/understand/operators/sources/from.md",sourceDirName:"understand/operators/sources",slug:"/understand/operators/sources/from",permalink:"/docs/next/understand/operators/sources/from",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/sources/from.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"export",permalink:"/docs/next/understand/operators/sources/export"},next:{title:"load",permalink:"/docs/next/understand/operators/sources/load"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,m(l(l({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"from"}),"from"),(0,n.kt)("p",null,"Produces events by combining a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/connectors/"}),"connector")," and a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/formats/"}),"format"),"."),(0,n.kt)("h2",l({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"from <connector> [read <format>]\nread <format> [from <connector>]\n")),(0,n.kt)("h2",l({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator produces events at the beginning of a pipeline by bringing\ntogether a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/connectors/"}),"connector")," and a ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/formats/"}),"format"),"."),(0,n.kt)("p",null,"Some connectors have a default format, and some formats have a default\nconnector. This enables a shorter syntax, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"read json")," uses the\n",(0,n.kt)("inlineCode",{parentName:"p"},"stdin")," connector and ",(0,n.kt)("inlineCode",{parentName:"p"},"from stdin")," the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,n.kt)("inlineCode",{parentName:"p"},"load <connector> | parse <format>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a lot more complex. We\nrecommend always using ",(0,n.kt)("inlineCode",{parentName:"p"},"from")," or ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/operators/sources/read"}),(0,n.kt)("inlineCode",{parentName:"a"},"read"))," over ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/operators/sources/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load"))," and\n",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/operators/transformations/parse"}),(0,n.kt)("inlineCode",{parentName:"a"},"parse")),"."),(0,n.kt)("h3",l({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/connectors/"}),"connector")," used to load bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h3",l({},{id:"format"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/next/understand/formats/"}),"format")," used to parse events from the loaded bytes."),(0,n.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,n.kt)("h2",l({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read bytes from stdin and parse them as JSON."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"from stdin read json\nfrom file stdin read json\nfrom file - read json\nfrom - read json\n")),(0,n.kt)("p",null,"Read bytes from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," and parse them as Suricata.\nNote that the ",(0,n.kt)("inlineCode",{parentName:"p"},"file")," connector automatically assigns the Suricata parser for\n",(0,n.kt)("inlineCode",{parentName:"p"},"eve.json")," files when no other parser is specified."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"from file path/to/eve.json\nfrom file path/to/eve.json read suricata\n")))}g.isMDXComponent=!0}}]);