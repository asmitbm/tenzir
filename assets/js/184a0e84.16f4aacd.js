"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>o(e,p(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="replace",h={unversionedId:"operators/replace",id:"operators/replace",title:"replace",description:"Replaces the fields matching the given extractors with fixed values.",source:"@site/docs/operators/replace.md",sourceDirName:"operators",slug:"/operators/replace",permalink:"/next/operators/replace",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/replace.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"repeat",permalink:"/next/operators/repeat"},next:{title:"save",permalink:"/next/operators/save"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor=operand&gt;</code>",id:"extractoroperand",level:3},{value:"Examples",id:"examples",level:3}],k={toc:b},x="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(x,u(d(d({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"replace"}),"replace"),(0,n.kt)("p",null,"Replaces the fields matching the given extractors with fixed values."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace <extractor=operand>...\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," operator mutates existing fields by providing a new value."),(0,n.kt)("p",null,"The difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/next/operators/extend"}),(0,n.kt)("inlineCode",{parentName:"a"},"extend"))," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"replace"),"\noverwrites existing fields, whereas ",(0,n.kt)("inlineCode",{parentName:"p"},"extend")," doesn't touch the input."),(0,n.kt)("h3",d({},{id:"extractoroperand"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor=operand>")),(0,n.kt)("p",null,"The assignment consists of an ",(0,n.kt)("inlineCode",{parentName:"p"},"extractor")," that matches against existing fields\nand an ",(0,n.kt)("inlineCode",{parentName:"p"},"operand")," that defines the new field value."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," does not exist in the input, the operator degenerates to\n",(0,n.kt)("a",d({parentName:"p"},{href:"/next/operators/pass"}),(0,n.kt)("inlineCode",{parentName:"a"},"pass")),"."),(0,n.kt)("h3",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Replace the field the field ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," with a fixed value:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace src_ip=0.0.0.0\n")),(0,n.kt)("p",null,"Replace all IP address with a fixed value:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace :ip=0.0.0.0\n")))}O.isMDXComponent=!0}}]);