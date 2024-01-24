"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={},b="GeoIP",h={unversionedId:"contexts/geoip",id:"version-Tenzir v4.8/contexts/geoip",title:"GeoIP",description:"A context for enriching IP addresses with geographical data.",source:"@site/versioned_docs/version-Tenzir v4.8/contexts/geoip.md",sourceDirName:"contexts",slug:"/contexts/geoip",permalink:"/contexts/geoip",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.8/contexts/geoip.md",tags:[],version:"Tenzir v4.8",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contexts",permalink:"/contexts"},next:{title:"Lookup Table",permalink:"/contexts/lookup-table"}},v={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--db-path &lt;mmdb&gt;</code>",id:"--db-path-mmdb",level:3},{value:"<code>--field &lt;field&gt;</code>",id:"--field-field",level:3}],g={toc:y},O="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,u(s(s({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"geoip"}),"GeoIP"),(0,r.kt)("p",null,"A context for enriching IP addresses with geographical data."),(0,r.kt)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"context create <name> geoip [--db-path <mmdb>]\ncontext update <name> [--db-path <mmdb>]\ncontext delete <name>\nenrich <name> --field <field>\nlookup <name> --field <field>\n")),(0,r.kt)("h2",s({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"geoip")," context uses a ",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.maxmind.com/"}),"MaxMind")," database\nto perform IP address lookups."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"context update <name> --db-path <mmdb>")," to initialize the database at path\n",(0,r.kt)("inlineCode",{parentName:"p"},"<mmdb>"),". Omitting ",(0,r.kt)("inlineCode",{parentName:"p"},"--db-path")," causes a reload of a previously initialized\ndatabase file."),(0,r.kt)("h3",s({},{id:"--db-path-mmdb"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--db-path <mmdb>")),(0,r.kt)("p",null,"The path to the MaxMind database file."),(0,r.kt)("p",null,"You can provide any database in ",(0,r.kt)("a",s({parentName:"p"},{href:"https://maxmind.github.io/MaxMind-DB/"}),"MMDB\nformat"),"."),(0,r.kt)("h3",s({},{id:"--field-field"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--field <field>")),(0,r.kt)("p",null,"The name of the field to use as IP address lookup."),(0,r.kt)("p",null,"Only IP addresses and strings work with this context."))}k.isMDXComponent=!0}}]);