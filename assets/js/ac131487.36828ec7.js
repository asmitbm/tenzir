"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>j,frontMatter:()=>d,metadata:()=>v,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={},y="json",v={unversionedId:"formats/yaml",id:"formats/yaml",title:"json",description:"Reads and writes YAML.",source:"@site/docs/formats/yaml.md",sourceDirName:"formats",slug:"/formats/yaml",permalink:"/next/formats/yaml",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"xsv",permalink:"/next/formats/xsv"},next:{title:"zeek-json",permalink:"/next/formats/zeek-json"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],g={toc:O},k="wrapper";function j(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,m(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"json"}),"json"),(0,n.kt)("p",null,"Reads and writes YAML."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"yaml\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"yaml")," format provides a parser and printer for YAML documents and streams."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Print Tenzir's configuration as YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"show config | write yaml\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"---\ntenzir:\n  allow-unsafe-pipelines: true\n  endpoint: my-custom-endpoint:42\n...\n")),(0,n.kt)("p",null,"Convert the Tenzir configuration file to CSV:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"from file ~/.config/tenzir/tenzir.yml | flatten | write csv\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-tsv"}),"tenzir.allow-unsafe-pipelines,tenzir.endpoint\ntrue,my-custom-endpoint:42\n")))}j.isMDXComponent=!0}}]);