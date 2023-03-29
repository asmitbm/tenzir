"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[747],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&d(e,a,t[a]);return e},c=(e,t)=>i(e,o(t)),u=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={title:"VAST v2.1",description:"VAST v2.1 - Tune VAST Databases",authors:"dominiklohmann",date:new Date("2022-07-07T00:00:00.000Z"),tags:["release","performance"]},h=void 0,g={permalink:"/blog/vast-v2.1",source:"@site/blog/vast-v2.1/index.md",title:"VAST v2.1",description:"VAST v2.1 - Tune VAST Databases",date:"2022-07-07T00:00:00.000Z",formattedDate:"July 7, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v2.1",description:"VAST v2.1 - Tune VAST Databases",authors:"dominiklohmann",date:"2022-07-07T00:00:00.000Z",tags:["release","performance"]},prevItem:{title:"VAST v2.2",permalink:"/blog/vast-v2.2"},nextItem:{title:"Apache Arrow as Platform for Security Data Engineering",permalink:"/blog/apache-arrow-as-platform-for-security-data-engineering"}},k={authorsImageUrls:[void 0]},b=[{value:"New Project Site",id:"new-project-site",level:2},{value:"Performance Improvements",id:"performance-improvements",level:2},{value:"Rebuild VAST Databases",id:"rebuild-vast-databases",level:2}],v={toc:b},y="wrapper";function w(e){var t=e,{components:r}=t,i=u(t,["components"]);return(0,n.kt)(y,c(m(m({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v2.1.0"}),"VAST v2.1")," is out! This release comes with a particular\nfocus on performance and reducing the size of VAST databases. It brings a new\nutility for optimizing databases in production, allowing existing deployments to\ntake full advantage of the improvements after upgrading."),(0,n.kt)("h2",m({},{id:"new-project-site"}),"New Project Site"),(0,n.kt)("p",null,"VAST has new project site: ",(0,n.kt)("a",m({parentName:"p"},{href:"https://vast.io"}),"vast.io"),". We ported all\ndocumentation from ",(0,n.kt)("inlineCode",{parentName:"p"},"https://docs.tenzir.com"),", added a lot of new content, and\nrestructured the reading experience along the user journey."),(0,n.kt)("p",null,"You can find the Threat Bus documentation in ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/use/integrate/threatbus"}),"Use VAST \u2192 Integrate \u2192 Threat\nBus"),". Threat Bus is now officially in\nmaintainance mode: we are only supporting existing features with bugfixes. That\nsaid, Threat Bus will resurface in a new shape with its existing functionality\nintegrated into VAST itself. Stay tuned."),(0,n.kt)("h2",m({},{id:"performance-improvements"}),"Performance Improvements"),(0,n.kt)("p",null,"VAST now compresses data with ",(0,n.kt)("a",m({parentName:"p"},{href:"http://www.zstd.net"}),"Zstd"),". The default\nconfiguration achieves over 2x space savings. When transferring data between\nclient and server processes, compression reduces the amount of transferred data\nby up to 5x."),(0,n.kt)("p",null,"Additionally, VAST now compresses on-disk indexes with Zstd, resulting in a\n50-80% size reduction depending on the type of indexes used."),(0,n.kt)("p",null,"This allowed us to increase the default partition size from 1,048,576 to\n4,194,304 events",(0,n.kt)("sup",m({parentName:"p"},{id:"fnref-1-11be5a"}),(0,n.kt)("a",m({parentName:"sup"},{href:"#fn-1-11be5a",className:"footnote-ref"}),"1")),", and the default number of events in a single batch from 1,024\nto 65,536, resulting in a massive performance increase at the cost of a ~20%\nlarger memory footprint at peak loads. Use the option ",(0,n.kt)("inlineCode",{parentName:"p"},"vast.max-partition-size"),"\nto tune this space-time tradeoff."),(0,n.kt)("p",null,"To benchmark this, we used ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/satta/speeve"}),(0,n.kt)("inlineCode",{parentName:"a"},"speeve"))," to generate 20 EVE JSON files\ncontaining 8,388,608 events each",(0,n.kt)("sup",m({parentName:"p"},{id:"fnref-2-11be5a"}),(0,n.kt)("a",m({parentName:"sup"},{href:"#fn-2-11be5a",className:"footnote-ref"}),"2")),". We spawned a VAST server process and ran\n20 VAST client processes in parallel, with one process per file."),(0,n.kt)("p",null,"We observed a reduction of ",(0,n.kt)("strong",{parentName:"p"},"up to 73%")," of disk space utilization:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Database Size",src:a(19617).Z+"#gh-light-mode-only",width:"3000",height:"2100"}),"\n",(0,n.kt)("img",{alt:"Database Size",src:a(80856).Z+"#gh-dark-mode-only",width:"3000",height:"2100"})),(0,n.kt)("p",null,"In addition, we were able to scale the ingest rate by almost ",(0,n.kt)("strong",{parentName:"p"},"6x")," due to the\nhigher batch size and the reduced memory usage per batch:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ingest Rate",src:a(3443).Z+"#gh-light-mode-only",width:"3000",height:"2100"}),"\n",(0,n.kt)("img",{alt:"Ingest Rate",src:a(28386).Z+"#gh-dark-mode-only",width:"3000",height:"2100"})),(0,n.kt)("p",null,"The table below summaries the benchmarks:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"VAST v2.0"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"VAST v2.1"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Change"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Ingest Duration"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"1,650 s"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"242 s"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"-85.3%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Ingest Rate"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"101,680 events/s"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"693,273 events/s"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"+581.8%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Index Size"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"14,791 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"5,721 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"-61.3%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Store Size"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"37,656 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"8,491 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"-77.5%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"Database Size"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"52,446 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"14,212 MiB"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"-72.9%")))),(0,n.kt)("admonition",m({},{title:"Compressed Filesystems",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The above benchmarks ran on filesystems without compression. We expect the gain\nfrom compression to be smaller when using compressed filesystems like\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://btrfs.wiki.kernel.org/index.php/Main_Page"}),(0,n.kt)("inlineCode",{parentName:"a"},"btrfs")),".")),(0,n.kt)("h2",m({},{id:"rebuild-vast-databases"}),"Rebuild VAST Databases"),(0,n.kt)("p",null,"The new changes to VAST's internal data format only apply to newly ingested\ndata. To retrofit changes, we introduce a new ",(0,n.kt)("inlineCode",{parentName:"p"},"rebuild")," command with this\nrelease. A rebuild effectively re-ingests events from existing partitions and\natomically replaces them with partitions of the new format."),(0,n.kt)("p",null,"This makes it possible to upgrade persistent state to a newer version, or\nrecreate persistent state after changing configuration parameters, e.g.,\nswitching from the Feather to the Parquet store backend (that will land in\nv2.2). Rebuilding partitions also recreates their sparse indexes that\naccellerate query execution. The process takes place asynchronously in the\nbackground."),(0,n.kt)("p",null,"We recommend running ",(0,n.kt)("inlineCode",{parentName:"p"},"vast rebuild")," to upgrade your VAST v1.x partitions to VAST\nv2.x partitions to take advantage of the new compression and an improved\ninternal representation."),(0,n.kt)("p",null,"This is how you run it:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"vast rebuild [--all] [--undersized] [--parallel=<number>] [<expression>]\n")),(0,n.kt)("p",null,"A rebuild is not only useful when upgrading outdated partitions, but also when\nchanging parameters of up-to-date partitions. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--all")," flag to extend a\nrebuild operation to ",(0,n.kt)("em",{parentName:"p"},"all")," partitions. (Internally, VAST versions the partition\nstate via FlatBuffers. An outdated partition is one whose version number is not\nthe newest.)"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--undersized")," flag causes VAST to only rebuild partitions that are under\nthe configured partition size limit ",(0,n.kt)("inlineCode",{parentName:"p"},"vast.max-partition-size"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--parallel")," options is a performance tuning knob. The parallelism level\ncontrols how many sets of partitions to rebuild in parallel. This value defaults\nto 1 to limit the CPU and memory requirements of the rebuilding process, which\ngrow linearly with the selected parallelism level."),(0,n.kt)("p",null,"An optional expression allows for restricting the set of partitions to rebuild.\nVAST performs a catalog lookup with the expression to identify the set of\ncandidate partitions. This process may yield false positives, as with regular\nqueries, which may cause unaffected partitions to undergo a rebuild. For\nexample, to rebuild outdated partitions containing ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.flow")," events\nolder than 2 weeks, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"vast rebuild '#type == \"suricata.flow\" && #import_time < 2 weeks ago'\n")),(0,n.kt)("div",m({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",m({parentName:"ol"},{id:"fn-1-11be5a"}),"VAST v2.0 failed to write its partitions to disk with the defaults for\nv2.1 because the on-disk size exceeded the maximum possible size of a\nFlatBuffers table, which VAST internally uses to have an open standard for its\npersistent state.",(0,n.kt)("a",m({parentName:"li"},{href:"#fnref-1-11be5a",className:"footnote-backref"}),"\u21a9")),(0,n.kt)("li",m({parentName:"ol"},{id:"fn-2-11be5a"}),"This resulted in 167,772,160 events, with a total of 200'917'930 unique\nvalues with a schema distribution of 80.74% ",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.flow"),", 7.85%\n",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.dns"),", 5.35% ",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.http"),", 4.57% ",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.fileinfo"),", 1.04%\n",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.tls"),", 0.41% ",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.ftp"),", and 0.04% ",(0,n.kt)("inlineCode",{parentName:"li"},"suricata.smtp"),".",(0,n.kt)("a",m({parentName:"li"},{href:"#fnref-2-11be5a",className:"footnote-backref"}),"\u21a9")))))}w.isMDXComponent=!0},28386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rate-dark-026fc75f7f0a93ae2734813a1c870feb.png"},3443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rate-light-0c19006b81ccac4f390f70ba73d0072a.png"},80856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storage-dark-701aea7c53efb6a69eeb91d2903dbe29.png"},19617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/storage-light-cdbfe9d3c7df930476bfdabb5e5f4df8.png"}}]);