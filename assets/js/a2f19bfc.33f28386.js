"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},r="SIEM Offloading",s={unversionedId:"about-vast/use-cases/siem-offloading",id:"about-vast/use-cases/siem-offloading",title:"SIEM Offloading",description:"There is a trend towards a second SIEM, and [it's not",source:"@site/docs/about-vast/use-cases/siem-offloading.md",sourceDirName:"about-vast/use-cases",slug:"/about-vast/use-cases/siem-offloading",permalink:"/docs/about-vast/use-cases/siem-offloading",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about-vast/use-cases/siem-offloading.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"SOC Federation",permalink:"/docs/about-vast/use-cases/soc-federation"},next:{title:"Unified Detection",permalink:"/docs/about-vast/use-cases/unified-detection"}},l={},c=[],d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"siem-offloading"},"SIEM Offloading"),(0,o.kt)("p",null,"There is ",(0,o.kt)("a",{parentName:"p",href:"https://corelight.com/blog/one-siem-is-not-enough"},"a trend towards a second SIEM"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/anton-on-security/living-with-multiple-siems-c7fea37c5020"},"it's not\nnew"),". Benefits include cost savings, new analytical\ncapabilities, higher visibility, improved detection in a modern engine. And most\nimportantly, ",(0,o.kt)("em",{parentName:"p"},"incremental deployability"),": you can add a new system without\ndisrupting existing services."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SIEM Offloading",src:n(62846).Z+"#gh-light-mode-only",width:"1866",height:"947"}),"\n",(0,o.kt)("img",{alt:"SIEM Offloading",src:n(39322).Z+"#gh-dark-mode-only",width:"1866",height:"947"})),(0,o.kt)("p",null,"When you realize that you need to deploy two SIEMs, you are basically taking the\nfirst step towards a distributed architecture. While it's possible to run the\noffloading engine centrally, this is the time to re-evaluate your strategy. How\nto comply best with data residency regulations? How do I break down silos? How\ncan I support threat hunting and detection engineering?"),(0,o.kt)("p",null,"SIEM offloading with a new engine does not mean you have to immediately adopt a\nfully decentralized architecture. You can also build your own lakehouse\narchitecture with VAST, thanks to a standardized data plane via ",(0,o.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Apache\nArrow"),". In fact, it makes sense to centralize\nheavy-duty analytics that require a lot of horse power. But you can also push a\nlot of front-line detection deep into the edge."),(0,o.kt)("admonition",{title:"Key Benefits",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using VAST in front of your SIEM has the following benefits:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reduced cost"),": VAST cuts your bill by absorbing the load of the heavy\nhitters while you can keep using the long tail of integrated data sources\nwithout disruption."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Higher performance"),": VAST's system architecture has a strict separation\nof read and write path that scale independently, making it possible to\noperate the system under continuous inbound load. Compared to legacy SIEMs,\nVAST is a resource-efficient, embeddable telemetry engine that offers 10-100x\ningestion bandwidth, and executes queries with\ninteractive latencies."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reduce Lock-in"),": VAST stores all event data in an open, analytics-friendly\nformat (",(0,o.kt)("a",{parentName:"li",href:"https://parquet.apache.org"},"Parquet"),") that makes it easy to BYO\ndetection workloads."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Easy compliance"),': VAST\'s powerful transforms allow you to perform\nfine-grained field-level modifications to anonymize, pseudonymize, or encrypt\nsensitive data. With compaction, you can specify retention periods (e.g.,\n"anonymize URLs after 7 days") and define a multi-level roll-up strategy to\nage data gracefully.'))))}u.isMDXComponent=!0},39322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/siem-offloading.dark-26c5bbde14fa24256c36bf21c2afab74.png"},62846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/siem-offloading.light-6613c3034c2fa6aa7e6bc7e662aa42aa.png"}}]);