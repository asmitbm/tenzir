"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,c=m["".concat(l,".").concat(d)]||m[d]||g[d]||i;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"VAST v1.1",description:"VAST v1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:new Date("2022-03-03T00:00:00.000Z"),last_updated:new Date("2022-07-15T00:00:00.000Z"),tags:["release","compaction","query"]},o=void 0,s={permalink:"/blog/vast-v1.1",source:"@site/blog/vast-v1.1/index.md",title:"VAST v1.1",description:"VAST v1.1 - Compaction & Query Language Frontends",date:"2022-03-03T00:00:00.000Z",formattedDate:"March 3, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:5.995,truncated:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.1",description:"VAST v1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:"2022-03-03T00:00:00.000Z",last_updated:"2022-07-15T00:00:00.000Z",tags:["release","compaction","query"]},prevItem:{title:"VAST v1.1.1",permalink:"/blog/vast-v1.1.1"},nextItem:{title:"VAST v1.0",permalink:"/blog/vast-v1.0"}},l={authorsImageUrls:[void 0]},p=[{value:"Query Language Plugins",id:"query-language-plugins",level:2},{value:"Compaction Plugin",id:"compaction-plugin",level:2},{value:"Updates to Transform Steps",id:"updates-to-transform-steps",level:2},{value:"Aggregate Step",id:"aggregate-step",level:3},{value:"Rename Step",id:"rename-step",level:3},{value:"Project and Select Steps",id:"project-and-select-steps",level:3},{value:"Deprecations",id:"deprecations",level:2}],u={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dear community, we are excited to announce ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.1.0"},"VAST v1.1"),",\nwhich ships with exciting new features: ",(0,r.kt)("em",{parentName:"p"},"query language plugins")," to exchange the\nquery expression frontend, and ",(0,r.kt)("em",{parentName:"p"},"compaction")," as a mechanism for expressing\nfine-grained data retention policies and gradually aging out data instead of\nsimply deleting it."),(0,r.kt)("h2",{id:"query-language-plugins"},"Query Language Plugins"),(0,r.kt)("p",null,"VAST features ",(0,r.kt)("a",{parentName:"p",href:"https://vast.io/docs/understand-vast/architecture/plugins#query-language"},"a new query language plugin\ntype"),"\nthat makes it possible to exchange the querying frontend, that is, replace the\nlanguage in which the user writes queries. This makes it easier to integrate\nVAST into specific domains without compromising the policy-neutral system core."),(0,r.kt)("p",null,"The first instance of the query language plugin is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/plugins/sigma"},(0,r.kt)("inlineCode",{parentName:"a"},"sigma"),"\nplugin"),", which make it\npossible to pass ",(0,r.kt)("a",{parentName:"p",href:"https://vast.io/docs/understand-vast/query-language/frontends/sigma"},"Sigma\nrules")," as\ninput instead of a standard VAST query expression. Prior to this plugin, VAST\nattempted to parse a query as Sigma rule first, and if that failed, tried to\nparse it as a VAST expression. The behavior changed in that VAST now always\ntries to interpret user input as VAST expression, and if that fails, goes\nthrough all other loaded query language plugins."),(0,r.kt)("p",null,"Moving forward, we will make it easier for integrators to BYO query language and\nleverage VAST as an execution engine. We have already\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/pull/2075"},"experimented")," with\n",(0,r.kt)("a",{parentName:"p",href:"https://substrait.io"},"Substrait"),", a cross-language protobuf spec for query\nplans. The vision is that users can easily connect ",(0,r.kt)("em",{parentName:"p"},"any")," query language that\ncompiles into Substrait, and VAST takes the query plan as binary substrait blob.\nSubstrait is still a very young project, but if the Arrow integration starts to\nmature, it has the potential to enable very powerful types of queries without\nmuch heavy lifting on our end. We already use the Arrow Compute API to implement\ngeneric grouping and aggregation during compaction, which allows us to avoid\nhand-roll and optimize compute kernels for standard functions."),(0,r.kt)("h2",{id:"compaction-plugin"},"Compaction Plugin"),(0,r.kt)("p",null,"Compaction is a feature to perform fine-grained transformation of historical\ndata to manage a fixed storage budget. This gives operators full control over\nshrinking data gradually\u2014both from a temporal and spatial angle:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spatial"),": Traditionally, reaching a storage budget triggers deletion of the\noldest (or least-recently-used) data. This is a binary decision to throw away a\nsubset of events. It does not differentiate the utility of data within an event.\nWhat if you could only throw away the irrelevant parts and keep the information\nthat might still be useful for longitudinal investigations? What if you could\naggregate multiple events into a single one that captures valuable information?\nImagine, for example, halving the space utilization of events with network flow\ninformation and keeping them 6 months longer; or imagine you could roll up a set\nof flows into a traffic matrix that only captures who communicated with whom in\na given timeframe."),(0,r.kt)("p",null,"By incrementally elevating data into more space-efficient representations,\ncompaction gives you a much more powerful mechanism to achieve long retention\nperiods while working with high-volume telemetry."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Temporal"),": data residency regulations often come with compliance policies\nwith maximum retention periods, e.g., data containing personal data. For\nexample, a policy may dictate a maximum retention of 1 week for events\ncontaining URIs and 3 months for events containing IP addresses related to\nnetwork connections. However, these retention windows could be broadened when\npseudonomyzing or anonymizing the relevant fields."),(0,r.kt)("p",null,"Compaction has a policy-based approach to specify these temporal constraints in\na clear, declarative fashion."),(0,r.kt)("p",null,"Compaction supersedes both the disk monitor and aging, being able to cover the\nentire functionality of their behaviors in a more configurable way. The disk\nmonitor remains unchanged and the experimental aging feature is deprecated (see\nbelow)."),(0,r.kt)("h2",{id:"updates-to-transform-steps"},"Updates to Transform Steps"),(0,r.kt)("h3",{id:"aggregate-step"},"Aggregate Step"),(0,r.kt)("admonition",{title:"Transforms \u2192 Pipelines",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In VAST v2.2, we will rename ",(0,r.kt)("em",{parentName:"p"},"transforms")," to ",(0,r.kt)("em",{parentName:"p"},"pipelines"),", and\n",(0,r.kt)("em",{parentName:"p"},"transform steps")," to ",(0,r.kt)("em",{parentName:"p"},"pipeline operators"),". This causes several configuration key\nchanges. Additionally, we will rename the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," operator to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/understand-vast/query-language/operators/summarize"},(0,r.kt)("inlineCode",{parentName:"a"},"summarize")),". Please keep this in mind when reading the example\nbelow and consult the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/understand-vast/query-language/pipelines"},"documentation")," for the\nup-to-date syntax.")),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," transform step plugin allows for reducing data with an\naggregation operation over a group of columns."),(0,r.kt)("p",null,'Aggregation is a two-step process of first bucketing data in groups of values,\nand then executing an aggregation function that computes a single value over the\nbucket. The functionality is in line with what standard execution engines offer\nvia "group-by" and "aggregate".'),(0,r.kt)("p",null,"Based on how the transformation is invoked in VAST, the boundary for determining\nwhat goes into a grouping can be a table slice (e.g., during import/export) or\nan entire partition (during compaction)."),(0,r.kt)("p",null,"How this works is best shown on example data. Consider the following events\nrepresenting flow data that contain a source IP address, a start and end\ntimestamp, the number of bytes per flow, a boolean flag whether there is an\nassociated alert, and a unique identifier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"source_ip": "10.0.0.1", "num_bytes": 87122, "start": "2022-02-22T10:36:40", "end": "2022-02-22T10:36:47", "alerted": false, "unique_id": 1}\n{"source_ip": "10.0.0.2", "num_bytes": 62335, "start": "2022-02-22T10:36:43", "end": "2022-02-22T10:36:48", "alerted": false, "unique_id": 2}\n{"source_ip": "10.0.0.1", "num_bytes": 640, "start": "2022-02-22T10:36:46", "end": "2022-02-22T10:36:47", "alerted": true, "unique_id": 3}\n{"source_ip": "10.0.0.1", "num_bytes": 2162, "start": "2022-02-22T10:36:49", "end": "2022-02-22T10:36:51", "alerted": false, "unique_id": 4}\n')),(0,r.kt)("p",null,"We can now configure a transformation that groups the events by their source IP\naddress, takes the sum of the number of bytes, the minimum of the start\ntimestamp, the maximum of the end timestamp, and the disjunction of the alerted\nflag. Since the unique identifier cannot be aggregated in a meaningful manner,\nit  is discarded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  transforms:\n    example-aggregation:\n      - aggregate:\n          group-by:\n            - source_ip\n          sum:\n            - num_bytes\n          min:\n            - start\n          max:\n            - end\n          any:\n            - alerted\n")),(0,r.kt)("p",null,"After applying the transform, the resulting events will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"source_ip": "10.0.0.1", "num_bytes": 89924, "start": "2022-02-22T10:36:40", "end": "2022-02-02T10:36:51", "alerted": true}\n{"source_ip": "10.0.0.2", "num_bytes": 62335, "start": "2020-11-06T10:36:43", "end": "2020-02-22T10:36:48", "alerted": false}\n')),(0,r.kt)("p",null,"Unlike the built-in transform steps, ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate")," is a separate open-source\nplugin that needs to be manually enabled in your ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.yaml")," configuration to be\nusable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  plugins:\n    - aggregate\n")),(0,r.kt)("h3",{id:"rename-step"},"Rename Step"),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"rename")," transform step is a built-in that allows for changing the name\nof the schema of data. This is particularly useful when a transformation changes\nthe shape of the data. E.g., an aggregated ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.flow")," should likely be\nrenamed because it is of a different layout."),(0,r.kt)("p",null,"This is how you configure the transform step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rename:\n  layout-names:\n    - from: suricata.flow\n      to: suricata.aggregated_flow\n")),(0,r.kt)("h3",{id:"project-and-select-steps"},"Project and Select Steps"),(0,r.kt)("p",null,"The built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," transform steps now drop table slices where\nno columns and rows match the configuration respectively instead of leaving the\ndata untouched."),(0,r.kt)("h2",{id:"deprecations"},"Deprecations"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"msgpack")," encoding no longer exists. As we integrate deeper with Apache\nArrow, the ",(0,r.kt)("inlineCode",{parentName:"p"},"arrow")," encoding is now the only option. Configuration options for\n",(0,r.kt)("inlineCode",{parentName:"p"},"msgpack")," will be removed in an upcoming major release. On startup, VAST now\nwarns if any of the deprecated options are in use."),(0,r.kt)("p",null,"VAST\u2019s ",(0,r.kt)("em",{parentName:"p"},"aging")," feature never made it out of the experimental stage: it only\nerased data without updating the index correctly, leading to unnecessary lookups\ndue to overly large candidate sets and miscounts in the statistics. Because\ntime-based compaction is a superset of the aging functionality (that also\nupdates the index correctly), we will remove aging in a future release. VAST now\nwarns on startup if it\u2019s configured to run aging."))}g.isMDXComponent=!0}}]);