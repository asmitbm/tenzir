"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Quickstart",s={unversionedId:"try/quickstart",id:"try/quickstart",title:"Quickstart",description:"This notebook showcases the key use cases of VAST in an interactive manner.",source:"@site/docs/try/quickstart.md",sourceDirName:"try",slug:"/try/quickstart",permalink:"/docs/try/quickstart",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/try/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Try",permalink:"/docs/try/"},next:{title:"Setup",permalink:"/docs/setup/"}},l={},c=[{value:"Install VAST",id:"install-vast",level:2},{value:"Start a VAST node",id:"start-a-vast-node",level:2},{value:"Ingest data",id:"ingest-data",level:2},{value:"Run queries",id:"run-queries",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"This notebook showcases the key use cases of VAST in an interactive manner."),(0,a.kt)("admonition",{title:"Work in Progress",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This page is work in progress. It is the first example of a ",(0,a.kt)("a",{parentName:"p",href:"/docs/contribute/notebooks"},"notebook-based\napproach of writing user\nguides"),", but the content and\nCI-workflow is not fully fleshed out. Stay tuned.")),(0,a.kt)("h2",{id:"install-vast"},"Install VAST"),(0,a.kt)("p",null,"First, let\u2019s get a VAST binary to play with. The easiest way to ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup"},"setup\nVAST")," is downloading a static binary on Linux."),(0,a.kt)("p",null,"Following the instructions to add ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/vast/bin")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", test\nwhether you are ready to use VAST:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast version\n")),(0,a.kt)("h2",{id:"start-a-vast-node"},"Start a VAST node"),(0,a.kt)("p",null,"Begin with starting a VAST node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast start\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[14:12:09.207] VAST v2.1.0 is listening on localhost:42000\n")),(0,a.kt)("p",null,"This command creates a listening socket at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:42000")," that you can now\ninteract with client commands from other terminals."),(0,a.kt)("p",null,"Test the connection with a new command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "current-memory-usage": 10322685460480,\n  "database-path": "/tmp/vast",\n  "in-memory-table-slices": 0,\n  "peak-memory-usage": 645167841280\n}\n')),(0,a.kt)("h2",{id:"ingest-data"},"Ingest data"),(0,a.kt)("p",null,"After we have a VAST node to interact with, let\u2019s ingest some data."),(0,a.kt)("p",null,"We ",(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1mPJYVGKTk86P2JU3KD-WFz8tUkTLK095?usp=sharing"},"prepared a dataset")," derived from one day of the M57\nrecording and injected with malicious traffic from malware-trafic-analysis.net,\nadjusting timestamps such that the malware activity occurs in the same day as\nthe background noise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /tmp\ncurl -OL TODO\nvast import pcap < dataset/PCAP/*.pcap\nvast import zeek < dataset/Zeek/*.log\nvast import suricata < dataset/Suricata/eve.json\n")),(0,a.kt)("h2",{id:"run-queries"},"Run queries"),(0,a.kt)("p",null,"With a loaded VAST node, we can now answer some questions."))}u.isMDXComponent=!0}}]);