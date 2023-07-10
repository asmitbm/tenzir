"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||p;return r?n.createElement(u,o(o({ref:t},s),{},{components:r})):n.createElement(u,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>P,frontMatter:()=>u,metadata:()=>k,toc:()=>v});var n=r(3905),a=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>p(e,o(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const u={},h="pcap",k={unversionedId:"formats/pcap",id:"formats/pcap",title:"pcap",description:"Reads and writes raw network packets in PCAP file format.",source:"@site/docs/formats/pcap.md",sourceDirName:"formats",slug:"/formats/pcap",permalink:"/next/formats/pcap",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/pcap.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"parquet",permalink:"/next/formats/parquet"},next:{title:"ssv",permalink:"/next/formats/ssv"}},y={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-e|--emit-file-header</code> (Parser)",id:"-e--emit-file-header-parser",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},g="wrapper";function P(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,f(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"pcap"}),"pcap"),(0,n.kt)("p",null,"Reads and writes raw network packets in ",(0,n.kt)("a",d({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file format."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("p",null,"Parser:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"pcap [-e|--emit-file-header]\n")),(0,n.kt)("p",null,"Printer:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"pcap\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," parser converts raw bytes representing a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://datatracker.ietf.org/doc/id/draft-gharris-opsawg-pcap-00.html"}),"PCAP")," file into\nevents, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," printer generates a PCAP file from events."),(0,n.kt)("admonition",d({},{title:"PCAPNG",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The current implementation does ",(0,n.kt)("em",{parentName:"p"},"not")," support ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.ietf.org/archive/id/draft-tuexen-opsawg-pcapng-05.html"}),"PCAPNG"),". Please\n",(0,n.kt)("a",d({parentName:"p"},{href:"/discord"}),"reach out")," if you would like to see support.")),(0,n.kt)("p",null,"The structured representation of packets has the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.packet")," schema:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"pcap.packet:\n  record:\n    - linktype: uint64\n    - time:\n        timestamp: time\n    - captured_packet_length: uint64\n    - original_packet_length: uint64\n    - data: string\n")),(0,n.kt)("h3",d({},{id:"-e--emit-file-header-parser"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-e|--emit-file-header")," (Parser)"),(0,n.kt)("p",null,"Emit a ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap.file_header")," event that represents the the PCAP file header. If present,\nthe parser injects this additional event before the subsequent stream of\npackets."),(0,n.kt)("p",null,"Emitting this extra event makes it possible to seed the ",(0,n.kt)("inlineCode",{parentName:"p"},"pcap")," printer with a\nfile header from the input. This allows for controlling the timestamp formatting\n(microseconds vs. nanosecond granularity) and byte order in the packet headers."),(0,n.kt)("p",null,"Use this option when you would like to reproduce the identical trace file layout\nof the PCAP input."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read packets from a PCAP file:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file /tmp/trace.pcap read pcap\n")),(0,n.kt)("p",null,"Read packets from the ",(0,n.kt)("a",d({parentName:"p"},{href:"/next/connectors/nic"}),"network interface")," ",(0,n.kt)("inlineCode",{parentName:"p"},"eth0"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from nic eth0 read pcap\n")),(0,n.kt)("p",null,(0,n.kt)("a",d({parentName:"p"},{href:"/next/operators/transformations/decapsulate"}),"Decapsulate")," packets in a PCAP\nfile:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"read pcap | decapsulate\n")))}P.isMDXComponent=!0}}]);