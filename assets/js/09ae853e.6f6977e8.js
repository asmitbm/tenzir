"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",authors:"dominiklohmann",date:new Date("2022-01-27T00:00:00.000Z"),last_updated:new Date("2022-07-15T00:00:00.000Z"),tags:["release","transforms","query"]},o=void 0,s={permalink:"/blog/vast-v1.0",source:"@site/blog/vast-v1.0/index.md",title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"transforms",permalink:"/blog/tags/transforms"},{label:"query",permalink:"/blog/tags/query"}],readingTime:3.195,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.0",description:"VAST v1.0 \u2013 New Year, New Versioning Scheme",authors:"dominiklohmann",date:"2022-01-27T00:00:00.000Z",last_updated:"2022-07-15T00:00:00.000Z",tags:["release","transforms","query"]},prevItem:{title:"VAST v1.1",permalink:"/blog/vast-v1.1"}},l={authorsImageUrls:[void 0]},p=[{value:"Query events based on their import time",id:"query-events-based-on-their-import-time",level:2},{value:"Omit <code>null</code> fields in the JSON export",id:"omit-null-fields-in-the-json-export",level:2},{value:"Selection and Projection Transform Steps",id:"selection-and-projection-transform-steps",level:2},{value:"Threat Bus 2022.01.27",id:"threat-bus-20220127",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to announce ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.0.0"},"VAST v1.0"),"!"),(0,r.kt)("p",null,"This release brings a new approach to software versioning for Tenzir. We laid\nout the semantics in detail in a new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/blob/v1.0.0/VERSIONING.md"},"VERSIONING"),"\ndocument."),(0,r.kt)("h2",{id:"query-events-based-on-their-import-time"},"Query events based on their import time"),(0,r.kt)("p",null,"The new ",(0,r.kt)("a",{parentName:"p",href:"https://vast.io/docs/understand/language/expressions#meta-extractor"},(0,r.kt)("inlineCode",{parentName:"a"},"#import_time")," extractor")," allows for exporting\nevents based on the time they arrived at VAST. Most of the time, this timestamp\nis not far away from the timestamp of when the event occurred, but in certain\ncases the two may deviate substantially, e.g., when ingesting historical events\nfrom several years ago."),(0,r.kt)("p",null,"For example, to export all Suricata alerts that arrived at VAST on New Years Eve\nas JSON, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json '#type == \"suricata.alert\" && #import_time >= 2021-12-31 && #import_time < 2022-01-01'\n")),(0,r.kt)("p",null,"This differs from the ",(0,r.kt)("a",{parentName:"p",href:"https://vast.io/docs/understand/language/expressions#type-extractor"},(0,r.kt)("inlineCode",{parentName:"a"},":timestamp")," type extractor")," that\nqueries all events that contain a type ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp"),", which is an alias for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"time")," type.  By convention, the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," type represents the event time\nembedded in the data itself. However, the import time  is not part of the event\ndata itself, but rather part of metadata of every batch of events that VAST\ncreates."),(0,r.kt)("h2",{id:"omit-null-fields-in-the-json-export"},"Omit ",(0,r.kt)("inlineCode",{parentName:"h2"},"null")," fields in the JSON export"),(0,r.kt)("p",null,"VAST renders all fields defined in the schema when exporting events as JSON. A\ncommon option for many tools that handle JSON is to skip rendering ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\nfields, and the new ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-nulls")," option to the JSON export does exactly that."),(0,r.kt)("p",null,"To use it on a case-by-case basis, add this flag to any JSON export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vast export json --omit-nulls '<query>'\n\n# This also works when attaching to a matcher.\nvast matcher attach json --omit-nulls <matcher>\n")),(0,r.kt)("p",null,"To always enable it, add this to your ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.yaml")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vast:\n  import:\n    omit-nulls: true\n")),(0,r.kt)("h2",{id:"selection-and-projection-transform-steps"},"Selection and Projection Transform Steps"),(0,r.kt)("admonition",{title:"Transforms \u2192 Pipelines",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("a",{parentName:"p",href:"/blog/vast-v2.2"},"VAST v2.2"),", we renamed ",(0,r.kt)("em",{parentName:"p"},"transforms")," to ",(0,r.kt)("em",{parentName:"p"},"pipelines"),", and\n",(0,r.kt)("em",{parentName:"p"},"transform steps")," to ",(0,r.kt)("em",{parentName:"p"},"pipeline operators"),". This caused several configuration key\nchanges. Please keep this in mind when reading the example below and consult the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/understand/language/pipelines"},"documentation")," for the\nup-to-date syntax.")),(0,r.kt)("p",null,"Reshaping data during import and export is a common use case that VAST now\nsupports. The two new built-in transform steps allow for filtering columns and\nrows. Filtering columns (",(0,r.kt)("em",{parentName:"p"},"projection"),") takes a list of column names as input,\nand filtering rows (",(0,r.kt)("em",{parentName:"p"},"selection"),")  works with an arbitrary query expression."),(0,r.kt)("p",null,"Here\u2019s a usage example that sanitizes data leaving VAST during a query. If any\nstring field in an event contains the value ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"secret-username"),", VAST\nwill not include the event in the result set. The example below applies this\nsanitization only to the events  ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.dns")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.http"),", as defined\nin the section ",(0,r.kt)("inlineCode",{parentName:"p"},"transform-triggers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  # Specify and name our transforms, each of which are a list of configured\n  # transform steps. Transform steps are plugins, enabling users to write more\n  # complex transformations in native code using C++ and Apache Arrow.\n  transforms:\n     # Prevent events with certain strings to be exported, e.g., "tenzir" or\n     # "secret-username".\n     remove-events-with-secrets:\n       - select:\n           expression: \':string !in ["tenzir", "secret-username"]\'\n\n  # Specify whether to trigger each transform at server- or client-side, on\n  # import or export, and restrict them to a list of event types.\n  transform-triggers:\n    export:\n      # Apply the remove-events-with-secrets transformation server-side on\n      # export to the suricata.dns and suricata.http event types.\n      - transform: remove-events-with-secrets\n        location: server\n        events:\n          - suricata.dns\n          - suricata.http\n')),(0,r.kt)("h2",{id:"threat-bus-20220127"},"Threat Bus 2022.01.27"),(0,r.kt)("p",null,"Thanks to a contribution from Sascha Steinbiss\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satta"},"@satta"),"), Threat Bus only reports failure when\ntransforming a sighting context if the return code of the transforming program\nindicates failure."),(0,r.kt)("p",null,"A small peek behind the curtain: We\u2019re building the next generation of Threat\nBus as part of VAST. We will continue to develop and maintain Threat Bus and its\napps for the time being."),(0,r.kt)("p",null,"Threat Bus 2022.01.27 is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/releases/tag/2022.01.27"},"\ud83d\udc49\nhere"),"."))}u.isMDXComponent=!0}}]);