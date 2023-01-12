"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const o={title:"Parquet & Feather: Enabling Open Investigations",authors:["mavam","dispanser"],date:new Date("2022-10-07T00:00:00.000Z"),last_updated:new Date("2023-01-10T00:00:00.000Z"),tags:["arrow","parquet","feather"]},i=void 0,s={permalink:"/blog/parquet-and-feather-enabling-open-investigations",source:"@site/blog/parquet-and-feather-enabling-open-investigations/index.md",title:"Parquet & Feather: Enabling Open Investigations",description:"Apache Parquet is the common denominator for structured data at rest.",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"arrow",permalink:"/blog/tags/arrow"},{label:"parquet",permalink:"/blog/tags/parquet"},{label:"feather",permalink:"/blog/tags/feather"}],readingTime:5.195,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Co-Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"},{name:"Thomas Peiselt",title:"Data Engineer",url:"https://github.com/dispanser",email:"thomas@tenzir.com",imageURL:"https://github.com/dispanser.png",key:"dispanser"}],frontMatter:{title:"Parquet & Feather: Enabling Open Investigations",authors:["mavam","dispanser"],date:"2022-10-07T00:00:00.000Z",last_updated:"2023-01-10T00:00:00.000Z",tags:["arrow","parquet","feather"]},prevItem:{title:"VAST v2.3.1",permalink:"/blog/vast-v2.3.1"},nextItem:{title:"A Git Retrospective",permalink:"/blog/a-git-retrospective"}},l={authorsImageUrls:[void 0,void 0]},h=[{value:"Why Parquet and Feather?",id:"why-parquet-and-feather",level:2},{value:"Parquet&#39;s Little Brother",id:"parquets-little-brother",level:2},{value:"Parquet and Feather in VAST",id:"parquet-and-feather-in-vast",level:2},{value:"Imbuing Domain Semantics",id:"imbuing-domain-semantics",level:2}],p={toc:h};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet")," is the common denominator for structured data at rest.\nThe data science ecosystem has long appreciated this. But infosec? Why should\nyou care about Parquet when building a threat detection and investigation\nplatform? In this blog post series we share our opinionated view on this\nquestion. In the next three blog posts, we"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"describe how VAST uses Parquet and its little brother ",(0,r.kt)("a",{parentName:"li",href:"https://arrow.apache.org/docs/python/feather.html"},"Feather")),(0,r.kt)("li",{parentName:"ol"},"benchmark the two formats against each other for typical workloads"),(0,r.kt)("li",{parentName:"ol"},"share our experience with all the engineering gotchas we encountered along\nthe way")),(0,r.kt)("admonition",{title:"Parquet & Feather: 1/3",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is blog post is part of a 3-piece series on Parquet and Feather."),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"This blog post"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-writing-security-telemetry/"},"Writing Security Telemetry")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-data-engineering-woes/"},"Data Engineering Woes")))),(0,r.kt)("h2",{id:"why-parquet-and-feather"},"Why Parquet and Feather?"),(0,r.kt)("p",null,"Parquet is the de-facto standard for storing structured data in a format\nconducive for analytics. Nearly all analytics engines support reading Parquet\nfiles to load a dataset in memory for subsequent analysis."),(0,r.kt)("p",null,"The data science community has long built on this foundation, but the majority\nof infosec tooling ",(0,r.kt)("a",{parentName:"p",href:"/docs/about/vision#the-soc-architecture-maze"},"does not build on an open\nfoundation"),". Too many\nproducts hide their data behind silos, either wrapped behind a SaaS with a thin\nAPI, or in a custom format that requires cumbersome ETL pipelines. Nearly all\nadvanced use cases require full access to the data. Especially when\nthe goal is developing realtime threat detection and response systems."),(0,r.kt)("p",null,'Security is a data problem. But how should we represent that data? This is where\nParquet enters the picture. As a vendor-agnostic storage format for structured\nand nested data, it decouples storage from analytics. This is where SIEM\nmonoliths fail: they offer a single black box that tightly couples data\nacquisition and processing capabilities. Providing a thin "open" API is not really\nopen, as it prevents high-bandwidth data access that is needed for advanced\nanalytics workloads.'),(0,r.kt)("p",null,"Open storage prevents vendor-lock-in. When any tool can work with the data, you\nbuild a sustainable foundation for implementing future use cases. For example,\nwith Parquet's column encryption, you can offload fine-grained compliance use\ncases to a dedicated application. Want to try out a new analytics engine? Just\npoint it to the Parquet files."),(0,r.kt)("h2",{id:"parquets-little-brother"},"Parquet's Little Brother"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/feather.html"},"Feather"),' is Parquet\'s little brother. It emerged while building a\nproof of concept for "fast, language-agnostic data frame storage for Python\n(pandas) and R." The format is a thin layer on top of ',(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/ipc.html#ipc"},"Arrow\nIPC"),", making it conducive for\nmemory mapping and zero-copy usage. On the spectrum of speed and\nspace-efficiency, think of it this way:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parquet vs. Feather",src:a(81161).Z+"#gh-light-mode-only",width:"1255",height:"637"}),"\n",(0,r.kt)("img",{alt:"Parquet vs. Feather",src:a(89911).Z+"#gh-dark-mode-only",width:"1255",height:"637"})),(0,r.kt)("p",null,"Before Feather existed, VAST had its own storage format that was 95% like\nFeather, minus a thin framing. (We called it the ",(0,r.kt)("em",{parentName:"p"},"segment store"),".)"),(0,r.kt)("p",null,"Wait, but Feather is an in-memory format and Parquet an on-disk format. You\ncannot compare them! Fair point, but don't forget transparent Zstd compression.\nFor some schemas, we barely notice a difference (e.g., PCAP), whereas for\nothers, Parquet stores boil down to a fraction of their Feather equivalent."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/blog/parquet-and-feather-writing-security-telemetry/"},"next blog post")," goes into these details. For now, we\nwant to stress that Feather is in fact a reasonable format for data at rest,\neven when looking at space utilization alone."),(0,r.kt)("h2",{id:"parquet-and-feather-in-vast"},"Parquet and Feather in VAST"),(0,r.kt)("p",null,"VAST can store event data as Parquet or Feather. The unit of storage scaling is\na ",(0,r.kt)("em",{parentName:"p"},"partition"),". In Arrow terms, a partition is a persisted form of an ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/data.html#tables"},"Arrow\nTable"),", i.e., a concatenation of ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/python/data.html#record-batches"},"Record\nBatches"),". A partition has thus a fixed schema. VAST's ",(0,r.kt)("a",{parentName:"p",href:"/docs/understand/architecture/plugins#store"},"store\nplugin")," determines how a partition writes its buffered record\nbatches to disk. The diagram below illustrates the architecture:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Parquet Analytics",src:a(62283).Z+"#gh-light-mode-only",width:"2222",height:"1666"}),"\n",(0,r.kt)("img",{alt:"Parquet Analytics",src:a(5499).Z+"#gh-dark-mode-only",width:"2222",height:"1666"})),(0,r.kt)("p",null,"This architecture makes it easy to point an analytics application directly to\nthe store files, without the need for ETLing it into a dedicated warehouse, such\nas Spark or Hadoop."),(0,r.kt)("p",null,"The event data thrown at VAST has quite some variety of schemas. During\ningestion, VAST first demultiplexes the heterogeneous stream of events into\nmultiple homogeneous streams, each of which has a unique schema. VAST buffers\nevents until the partition hits a pre-configured event limit (e.g., 1M) or until\na timeout occurs (e.g., 60m). Thereafter, VAST writes the partition in one shot\nand persists it."),(0,r.kt)("p",null,"The buffering provides optimal freshness of the data, as it enables queries run\non not-yet-persisted data. But it also sets an upper bound on the partition\nsize, given that it must fit in memory in its entirety. In the future, we plan\nto make this freshness trade-off explicit, making it possible to write out\nlarger-than-memory stores incrementally."),(0,r.kt)("h2",{id:"imbuing-domain-semantics"},"Imbuing Domain Semantics"),(0,r.kt)("p",null,"In a ",(0,r.kt)("a",{parentName:"p",href:"/blog/apache-arrow-as-platform-for-security-data-engineering"},"past blog")," we described how VAST uses Arrow's extensible\ntype system to add richer semantics to the data. This is how the value of VAST\ntranscends through the analytics stack. For example, VAST has native IP address\ntypes that you can show up in Python as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/ipaddress.html"},"ipaddress")," instance. This\navoids friction in the data exchange process. Nobody wants to spend time\nconverting bytes or strings into the semantic objects that are ultimately need\nfor the analysis."),(0,r.kt)("p",null,"Here's how ",(0,r.kt)("a",{parentName:"p",href:"/docs/understand/data-model/type-system"},"VAST's type system")," looks\nlike:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Type System",src:a(97802).Z+"#gh-light-mode-only",width:"1480",height:"881"}),"\n",(0,r.kt)("img",{alt:"Type System",src:a(35255).Z+"#gh-dark-mode-only",width:"1480",height:"881"})),(0,r.kt)("p",null,"There exist two major classes of types: ",(0,r.kt)("em",{parentName:"p"},"basic"),", stateless types with a static\nstructure and a-priori known representation, and ",(0,r.kt)("em",{parentName:"p"},"complex"),", stateful types that\ncarry additional runtime information. We map this type system without\ninformation loss to Arrow:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Type System",src:a(25554).Z+"#gh-light-mode-only",width:"1562",height:"880"}),"\n",(0,r.kt)("img",{alt:"Type System",src:a(90151).Z+"#gh-dark-mode-only",width:"1562",height:"880"})),(0,r.kt)("p",null,"VAST converts enum, address, and subnet types to\n",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/Columnar.html#extension-types"},"extension-types"),". All types are self-describing and part\nof the record batch meta data. Conversion is bi-directional. Both Parquet and\nFeather support fully nested structures in this type system. In theory. Our\nthird blog post in this series describes the hurdles we had to overcome to make\nit work in practice."),(0,r.kt)("p",null,"In the next blog post, we perform a quantitative analysis of the two formats: how\nwell do they compress the original data? How much space do they take up in\nmemory? How much CPU time do I pay for how much space savings? In the meantime,\nif you want to learn more about Parquet, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/blog/2022/10/05/arrow-parquet-encoding-part-1/"},"blog post\nseries")," from the Arrow team."))}c.isMDXComponent=!0},5499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parquet-analytics.dark-4b411e1c136b37f650016d0264784f18.png"},62283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parquet-analytics.light-88e5228731d4212c798f5d29067aba32.png"},89911:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parquet-vs-feather.dark-621c3e9318a436f1ad3a62532bee2c85.png"},81161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/parquet-vs-feather.light-086e1e69a7925ccfb08200f2cd2ed54e.png"},90151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type-system-arrow.dark-cb064b1597c92be8cc8b6b1fecd68735.png"},25554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type-system-arrow.light-4318e010fb5f8cbedacc9a0763c40772.png"},35255:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type-system-vast.dark-04b3677dd5ce4eab895b0c35b3bc427d.png"},97802:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/type-system-vast.light-995b5f4bd96e9b9a63318b45c4368bd7.png"}}]);