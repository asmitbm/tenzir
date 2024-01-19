"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=o(n),u=r,c=s["".concat(p,".").concat(u)]||s[u]||k[u]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[s]="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>N,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(m)for(var n of m(t))o.call(t,n)&&d(e,n,t[n]);return e},k=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&m)for(var a of m(e))t.indexOf(a)<0&&o.call(e,a)&&(n[a]=e[a]);return n};const c={sidebar_custom_props:{operator:{source:!0}}},N="metrics",f={unversionedId:"operators/metrics",id:"operators/metrics",title:"metrics",description:"Retrieves metrics events from a Tenzir node.",source:"@site/docs/operators/metrics.md",sourceDirName:"operators",slug:"/operators/metrics",permalink:"/next/operators/metrics",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/metrics.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"measure",permalink:"/next/operators/measure"},next:{title:"nics",permalink:"/next/operators/nics"}},g={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--live</code>",id:"--live",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.metrics.cpu</code>",id:"tenzirmetricscpu",level:3},{value:"<code>tenzir.metrics.disk</code>",id:"tenzirmetricsdisk",level:3},{value:"<code>tenzir.metrics.memory</code>",id:"tenzirmetricsmemory",level:3},{value:"<code>tenzir.metrics.operator</code>",id:"tenzirmetricsoperator",level:3},{value:"<code>tenzir.metrics.process</code>",id:"tenzirmetricsprocess",level:3},{value:"Examples",id:"examples",level:2}],y={toc:h},b="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(b,k(s(s({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"metrics"}),"metrics"),(0,a.kt)("p",null,"Retrieves metrics events from a Tenzir node."),(0,a.kt)("h2",s({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"metrics [--live]\n")),(0,a.kt)("h2",s({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics")," operator retrieves metrics events from a Tenzir node."),(0,a.kt)("h3",s({},{id:"--live"}),(0,a.kt)("inlineCode",{parentName:"h3"},"--live")),(0,a.kt)("p",null,"Work on all metrics events as they are generated in real-time instead of on\nmetrics events persisted at a Tenzir node."),(0,a.kt)("h2",s({},{id:"schemas"}),"Schemas"),(0,a.kt)("p",null,"Tenzir collects metrics with the following schemas."),(0,a.kt)("h3",s({},{id:"tenzirmetricscpu"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.metrics.cpu")),(0,a.kt)("p",null,"Contains a measurement of CPU utilization."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"loadavg_1m")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"double")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The load average over the last minute.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"loadavg_5m")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"double")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The load average over the last 5 minutes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"loadavg_15m")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"double")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The load average over the last 15 minutes.")))),(0,a.kt)("h3",s({},{id:"tenzirmetricsdisk"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.metrics.disk")),(0,a.kt)("p",null,"Contains a measurement of disk space usage."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"path")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The byte measurements below refer to the filesystem on which this path is located.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"total_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The total size of the volume, in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"used_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The number of bytes occupied on the volume.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"free_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The number of bytes still free on the volume.")))),(0,a.kt)("h3",s({},{id:"tenzirmetricsmemory"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.metrics.memory")),(0,a.kt)("p",null,"Contains a measurement of the available memory on the host."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"total_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The total available memory, in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"used_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The amount of memory used, in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"free_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The amount of free memory, in bytes.")))),(0,a.kt)("h3",s({},{id:"tenzirmetricsoperator"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.metrics.operator")),(0,a.kt)("p",null,"Contains input and output measurements over some amount of time for a single\noperator instantiation."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"pipeline_id")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the pipeline where the associated operator is from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"hidden")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"True if the pipeline is running for the explorer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"operator_id")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the operator inside the pipeline referenced above.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"source")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"True if this is the first operator in the pipeline.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"transformation")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"True if this is neither the first nor the last operator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"sink")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"True if this is the last operator in the pipeline.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"internal")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"bool")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"True if the data flow is considered to internal to Tenzir.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"time")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The time when this event was emitted (immediately after the collection period).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The timespan over which this data was collected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"starting_duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The time spent to start the operator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"processing_duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The time spent processing the data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"scheduled_duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"duration")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The time that the operator was scheduled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"input")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"record")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Measurement of the incoming data stream.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"output")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"record")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Measurement of the outgoing data stream.")))),(0,a.kt)("p",null,"The records ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," have the following schema:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"unit")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The type of the elements, which is ",(0,a.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"bytes")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"events"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"elements")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"Number of elements that were seen during the collection period.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"approx_bytes")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"An approximation for the number of bytes transmitted.")))),(0,a.kt)("h3",s({},{id:"tenzirmetricsprocess"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tenzir.metrics.process")),(0,a.kt)("p",null,"Contains a measurement of the amount of memory used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-node")," process."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"current_memory_usage")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The memory currently used by this process.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"peak_memory_usage")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The peak amount of memory, in bytes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"swap_space_usage")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),(0,a.kt)("inlineCode",{parentName:"td"},"uint64")),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The amount of swap space, in bytes. Only available on Linux systems.")))),(0,a.kt)("h2",s({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Show the CPU usage over the last hour:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.cpu"\n| where timestamp > 1 hour ago\n| put timestamp, percent=loadavg_1m\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2023-12-21T12:00:32.631102",\n  "percent": 0.40478515625\n}\n{\n  "timestamp": "2023-12-21T11:59:32.626043",\n  "percent": 0.357421875\n}\n{\n  "timestamp": "2023-12-21T11:58:32.620327",\n  "percent": 0.42578125\n}\n{\n  "timestamp": "2023-12-21T11:57:32.614810",\n  "percent": 0.50390625\n}\n{\n  "timestamp": "2023-12-21T11:56:32.609896",\n  "percent": 0.32080078125\n}\n{\n  "timestamp": "2023-12-21T11:55:32.605871",\n  "percent": 0.5458984375\n}\n'))),(0,a.kt)("p",null,"Get the current memory usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.memory"\n| sort timestamp desc\n| tail 1\n| put current_memory_usage\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "current_memory_usage": 1083031552\n}\n'))),(0,a.kt)("p",null,"Show the total pipeline ingress in bytes for every day over the last week,\nexcluding pipelines run in the Explorer:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.operator"\n| where timestamp > 1 week ago\n| where hidden == false && source == true\n| summarize bytes=sum(output.approx_bytes) by timestamp resolution 1 day\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2023-11-08T00:00:00.000000",\n  "bytes": 79927223\n}\n{\n  "timestamp": "2023-11-09T00:00:00.000000",\n  "bytes": 51788928\n}\n{\n  "timestamp": "2023-11-10T00:00:00.000000",\n  "bytes": 80740352\n}\n{\n  "timestamp": "2023-11-11T00:00:00.000000",\n  "bytes": 75497472\n}\n{\n  "timestamp": "2023-11-12T00:00:00.000000",\n  "bytes": 55497472\n}\n{\n  "timestamp": "2023-11-13T00:00:00.000000",\n  "bytes": 76546048\n}\n{\n  "timestamp": "2023-11-14T00:00:00.000000",\n  "bytes": 68643200\n}\n'))),(0,a.kt)("p",null,"Show the three operator instantiations that produced the most events in total\nand their pipeline IDs:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.operator"\n| where output.unit == "events"\n| summarize events=max(output.elements) by pipeline_id, operator_id\n| sort events desc\n| head 3\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "pipeline_id": "13",\n  "operator_id": 0,\n  "events": 391008694\n}\n{\n  "pipeline_id": "12",\n  "operator_id": 0,\n  "events": 246914949\n}\n{\n  "pipeline_id": "0",\n  "operator_id": 1,\n  "events": 83013294\n}\n'))),(0,a.kt)("p",null,"Get the disk usage over time:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.disk"\n| sort timestamp\n| put timestamp, used_bytes\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2023-12-21T12:52:32.900086",\n  "used_bytes": 461834444800\n}\n{\n  "timestamp": "2023-12-21T12:53:32.905548",\n  "used_bytes": 461834584064\n}\n{\n  "timestamp": "2023-12-21T12:54:32.910918",\n  "used_bytes": 461840302080\n}\n{\n  "timestamp": "2023-12-21T12:55:32.916200",\n  "used_bytes": 461842751488\n}\n'))),(0,a.kt)("p",null,"Get the memory usage over time:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-c"}),'metrics\n| where #schema == "tenzir.metrics.memory"\n| sort timestamp\n| put timestamp, used_bytes\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2023-12-21T13:08:32.982083",\n  "used_bytes": 48572645376\n}\n{\n  "timestamp": "2023-12-21T13:09:32.986962",\n  "used_bytes": 48380682240\n}\n{\n  "timestamp": "2023-12-21T13:10:32.992494",\n  "used_bytes": 48438878208\n}\n{\n  "timestamp": "2023-12-21T13:11:32.997889",\n  "used_bytes": 48491839488\n}\n{\n  "timestamp": "2023-12-21T13:12:33.003323",\n  "used_bytes": 48529952768\n}\n'))))}v.isMDXComponent=!0}}]);