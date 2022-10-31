"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||s;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:0},o="Type System",i={unversionedId:"understand/data-model/type-system",id:"understand/data-model/type-system",title:"Type System",description:"One design goal of VAST is",source:"@site/docs/understand/data-model/type-system.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/type-system",permalink:"/docs/understand/data-model/type-system",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/data-model/type-system.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"AWS",permalink:"/docs/understand/architecture/cloud/aws"},next:{title:"Modules",permalink:"/docs/understand/data-model/modules"}},p={},l=[],d={toc:l};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-system"},"Type System"),(0,a.kt)("p",null,"One ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/architecture/design-goals"},"design goal")," of VAST is\nbeing expressive enough to capture the semantics of the domain. This led us to\ndevelop a rich type system for structured security data, inspired by the data\nmodel of the ",(0,a.kt)("a",{parentName:"p",href:"https://zeek.org"},"Zeek")," network security monitor."),(0,a.kt)("p",null,"Every type has zero or more ",(0,a.kt)("strong",{parentName:"p"},"attributes"),", which are free-form key-value pairs\nto enrich types with custom semantics. Fundamentally, types support\n",(0,a.kt)("strong",{parentName:"p"},"aliasing"),", which means you can give an existing type a new name. All types,\nincluding aliases, share a global identifier namespace. In this namespace, type\nnames must be unique."),(0,a.kt)("p",null,"There exist two major classes of types:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Basic"),": stateless types with a static structure and a-priori known representation"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Complex"),": stateful types that carry additional runtime information")),(0,a.kt)("p",null,"The diagram below illustrates the type system:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Type System",src:r(97802).Z+"#gh-light-mode-only",width:"1480",height:"881"}),"\n",(0,a.kt)("img",{alt:"Type System",src:r(35255).Z+"#gh-dark-mode-only",width:"1480",height:"881"})),(0,a.kt)("p",null,"There exists a one-to-one mapping of VAST's type system to Arrow's type system\nto ensure that transferred data is self-describing:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Type System",src:r(25554).Z+"#gh-light-mode-only",width:"1562",height:"880"}),"\n",(0,a.kt)("img",{alt:"Type System",src:r(90151).Z+"#gh-dark-mode-only",width:"1562",height:"880"})),(0,a.kt)("p",null,"Note that VAST attaches attributes to a top-plevel type instance, where Arrow\nonly allows type meta data for record fields. VAST converts enum, adress, and\nsubnet types to ",(0,a.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/Columnar.html#extension-types"},"extension-types"),"."),(0,a.kt)("admonition",{title:"More on Arrow & VAST",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to learn more about why VAST uses Apache Arrow, please read ",(0,a.kt)("a",{parentName:"p",href:"/blog/apache-arrow-as-platform-for-security-data-engineering"},"our\nblog post")," that\nexplains why we use Arrow as corner stone for data interoperability and\nrepresentation of the security domain model.")))}c.isMDXComponent=!0},90151:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/type-system-arrow.dark-cb064b1597c92be8cc8b6b1fecd68735.png"},25554:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/type-system-arrow.light-4318e010fb5f8cbedacc9a0763c40772.png"},35255:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/type-system-vast.dark-04b3677dd5ce4eab895b0c35b3bc427d.png"},97802:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/type-system-vast.light-995b5f4bd96e9b9a63318b45c4368bd7.png"}}]);