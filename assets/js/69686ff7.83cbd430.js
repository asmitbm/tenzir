"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>u,metadata:()=>v,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const u={},y="rename",v={unversionedId:"operators/transformations/rename",id:"version-Tenzir v4.5/operators/transformations/rename",title:"rename",description:"Renames fields and types.",source:"@site/versioned_docs/version-Tenzir v4.5/operators/transformations/rename.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/rename",permalink:"/operators/transformations/rename",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/operators/transformations/rename.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"read",permalink:"/operators/transformations/read"},next:{title:"repeat",permalink:"/operators/transformations/repeat"}},k={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;name=extractor&gt;...</code>",id:"nameextractor",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},g="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(g,d(m(m({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"rename"}),"rename"),(0,n.kt)("p",null,"Renames fields and types."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename <name=extractor>...\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rename")," operator assigns new names to fields or types. Renaming only\nmodifies metadata and is therefore computationally inexpensive. The operator\nhandles nested field extractors as well, but cannot perform field reordering,\ne.g., by hoisting nested fields into the top level."),(0,n.kt)("p",null,"Renaming only takes place if the provided extractor on the right-hand side of\nthe assignment resolves to a field or type. Otherwise the assignment does\nnothing. If no extractors match, ",(0,n.kt)("inlineCode",{parentName:"p"},"rename")," degenerates to ",(0,n.kt)("a",m({parentName:"p"},{href:"/operators/transformations/pass"}),(0,n.kt)("inlineCode",{parentName:"a"},"pass")),"."),(0,n.kt)("h3",m({},{id:"nameextractor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<name=extractor>...")),(0,n.kt)("p",null,"An assignment of the form ",(0,n.kt)("inlineCode",{parentName:"p"},"name=extractor")," renames the field or type identified\nby ",(0,n.kt)("inlineCode",{parentName:"p"},"extractor")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Rename events of type ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.flow")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"connection"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename connection=:suricata.flow\n")),(0,n.kt)("p",null,"Assign new names to the fields ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dest_ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=src_ip, dst=dest_ip\n")),(0,n.kt)("p",null,"Give the nested field ",(0,n.kt)("inlineCode",{parentName:"p"},"orig_h")," nested under the record ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," the name ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=id.orig_h\n")),(0,n.kt)("p",null,"Same as above, but consider fields at any nesting hierarchy:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"rename src=orig_h\n")))}O.isMDXComponent=!0}}]);