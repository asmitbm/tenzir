"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},20614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>i(e,l(t)),u=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={},v="xsv",k={unversionedId:"formats/xsv",id:"version-Tenzir v4.0-rc9/formats/xsv",title:"xsv",description:"Reads and writes lines with separated values.",source:"@site/versioned_docs/version-Tenzir v4.0-rc9/formats/xsv.md",sourceDirName:"formats",slug:"/formats/xsv",permalink:"/formats/xsv",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc9/formats/xsv.md",tags:[],version:"Tenzir v4.0-rc9",frontMatter:{},sidebar:"docsSidebar",previous:{title:"tsv",permalink:"/formats/tsv"},next:{title:"zeek-json",permalink:"/formats/zeek-json"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field-sep&gt;</code>",id:"field-sep",level:3},{value:"<code>&lt;list-sep&gt;</code>",id:"list-sep",level:3},{value:"<code>&lt;null-value&gt;</code>",id:"null-value",level:3},{value:"Examples",id:"examples",level:2}],g={toc:b},y="wrapper";function N(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(y,m(d(d({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"xsv"}),"xsv"),(0,n.kt)("p",null,"Reads and writes lines with separated values."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"csv\nssv\ntsv\nxsv <field-sep> <list-sep> <null-value>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"xsv")," format is a generalization of ",(0,n.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Comma-separated_values"}),"comma-separated values (CSV)")," data\nin tabular form with a more flexible separator specification supporting tabs,\ncommas, and spaces. The first line in an XSV file is the header that describes\nthe field names. The remaining lines contain concrete values. One line\ncorresponds to one event, minus the header."),(0,n.kt)("p",null,"The following table juxtaposes the available XSV configurations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Format"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Field Separator"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"List Separator"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Null Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/formats/csv"}),(0,n.kt)("inlineCode",{parentName:"a"},"csv"))),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},",")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},";")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"empty")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/formats/ssv"}),(0,n.kt)("inlineCode",{parentName:"a"},"ssv"))),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"<space>")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},",")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"-"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("a",d({parentName:"td"},{href:"/formats/tsv"}),(0,n.kt)("inlineCode",{parentName:"a"},"tsv"))),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"\\t")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},",")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"-"))))),(0,n.kt)("p",null,"Like the ",(0,n.kt)("a",d({parentName:"p"},{href:"/formats/json"}),(0,n.kt)("inlineCode",{parentName:"a"},"json"))," parser, the XSV parser infers types automatically.\nConsider this piece of CSV data:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-csv"}),"ip,sn,str,rec.a,rec.b\n1.2.3.4,10.0.0.0/8,foo bar,-4.2,/foo|bar/\n")),(0,n.kt)("p",null,"Here's the schema that the parser infers from the above data:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml",metastring:"title=test.schema",title:"test.schema"}),"record:\n  - ip: ip\n  - sn: subnet\n  - str: string\n  - record:\n    - a: double\n    - b: pattern\n")),(0,n.kt)("p",null,"Note that nested records have dot-separated field names."),(0,n.kt)("h3",d({},{id:"field-sep"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field-sep>")),(0,n.kt)("p",null,"Specifies the string that separates fields."),(0,n.kt)("h3",d({},{id:"list-sep"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<list-sep>")),(0,n.kt)("p",null,"Specifies the string that separates list elements ",(0,n.kt)("em",{parentName:"p"},"within")," a field."),(0,n.kt)("h3",d({},{id:"null-value"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<null-value>")),(0,n.kt)("p",null,"Specifies the string that denotes an absent value."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read CSV from stdin:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from stdin read csv\n")),(0,n.kt)("p",null,"Write a multi-schema stream of events to a directory in TSV format, with one\nfile per unique schema:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"to directory /tmp/result write tsv\n")))}N.isMDXComponent=!0}}]);