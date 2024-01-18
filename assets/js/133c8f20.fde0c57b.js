"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="replace",h={unversionedId:"operators/replace",id:"version-Tenzir v4.7/operators/replace",title:"replace",description:"Replaces the fields matching the given extractors with fixed values.",source:"@site/versioned_docs/version-Tenzir v4.7/operators/replace.md",sourceDirName:"operators",slug:"/operators/replace",permalink:"/operators/replace",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/operators/replace.md",tags:[],version:"Tenzir v4.7",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"repeat",permalink:"/operators/repeat"},next:{title:"save",permalink:"/operators/save"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;extractor=operand&gt;</code>",id:"extractoroperand",level:3},{value:"Examples",id:"examples",level:3}],k={toc:b},O="wrapper";function g(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,u(d(d({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"replace"}),"replace"),(0,n.kt)("p",null,"Replaces the fields matching the given extractors with fixed values."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace <extractor=operand>...\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," operator mutates existing fields by providing a new value."),(0,n.kt)("p",null,"The difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/extend"}),(0,n.kt)("inlineCode",{parentName:"a"},"extend"))," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"replace"),"\noverwrites existing fields, whereas ",(0,n.kt)("inlineCode",{parentName:"p"},"extend")," doesn't touch the input."),(0,n.kt)("h3",d({},{id:"extractoroperand"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<extractor=operand>")),(0,n.kt)("p",null,"The assignment consists of an ",(0,n.kt)("inlineCode",{parentName:"p"},"extractor")," that matches against existing fields\nand an ",(0,n.kt)("inlineCode",{parentName:"p"},"operand")," that defines the new field value."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"field")," does not exist in the input, the operator degenerates to\n",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/pass"}),(0,n.kt)("inlineCode",{parentName:"a"},"pass")),"."),(0,n.kt)("h3",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Replace the field the field ",(0,n.kt)("inlineCode",{parentName:"p"},"src_ip")," with a fixed value:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace src_ip=0.0.0.0\n")),(0,n.kt)("p",null,"Replace all IP address with a fixed value:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"replace :ip=0.0.0.0\n")))}g.isMDXComponent=!0}}]);