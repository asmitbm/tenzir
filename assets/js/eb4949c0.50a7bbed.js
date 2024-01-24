"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const h={sidebar_position:6},g="Transform data at rest",f={unversionedId:"user-guides/transform-data-at-rest",id:"version-Tenzir v4.8/user-guides/transform-data-at-rest",title:"Transform data at rest",description:"This feature is currently only available on the command line using the",source:"@site/versioned_docs/version-Tenzir v4.8/user-guides/transform-data-at-rest.md",sourceDirName:"user-guides",slug:"/user-guides/transform-data-at-rest",permalink:"/user-guides/transform-data-at-rest",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.8/user-guides/transform-data-at-rest.md",tags:[],version:"Tenzir v4.8",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Show available schemas",permalink:"/user-guides/show-available-schemas"},next:{title:"Execute Sigma rules",permalink:"/user-guides/execute-sigma-rules/"}},y={},k=[{value:"Delete old data when reaching storage quota",id:"delete-old-data-when-reaching-storage-quota",level:2},{value:"Transform old data when reaching storage quota",id:"transform-old-data-when-reaching-storage-quota",level:2},{value:"Transform data after exceeding a retention span",id:"transform-data-after-exceeding-a-retention-span",level:2},{value:"Trigger a compaction cycle manually",id:"trigger-a-compaction-cycle-manually",level:2}],b={toc:k},v="wrapper";function w(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(v,u(d(d({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"transform-data-at-rest"}),"Transform data at rest"),(0,a.kt)("admonition",d({},{title:"Currently CLI only",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This feature is currently only available on the command line using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir-ctl")," binary. We're working on bringing it back as an operator so that\nyou can also use it from the app.")),(0,a.kt)("p",null,"Tenzir provdides several features to transform historical data at a node."),(0,a.kt)("h2",d({},{id:"delete-old-data-when-reaching-storage-quota"}),"Delete old data when reaching storage quota"),(0,a.kt)("p",null,"The disk-monitoring feature enables periodic deletion of events based on\nutilized disk storage. To limit the disk space used by a node, configure a disk\nquota:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-node --disk-quota-high=1TiB\n")),(0,a.kt)("p",null,"Whenever a node detects that its database has exceeded the configured quota, it\nwill erase the oldest data. You can specify a corridor for the disk space usage\nby additionally providing the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--disk-quota-low"),". This can be used to\navoid running permanently at the upper limit and to instad batch the deletion\noperations together."),(0,a.kt)("p",null,"The full set of available options looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"tenzir:\n  start:\n    # Triggers removal of old data when the DB dir exceeds the disk budget.\n    disk-budget-high: 0K\n    # When the DB dir exceeds the budget, Tenzir erases data until the directory\n    # size falls below this value.\n    disk-budget-low: 0K\n    # Seconds between successive disk space checks.\n    disk-budget-check-interval: 90\n")),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"When using this method, we recommend placing the log file outside of the\ndatabase directory. It counts towards the size calculations, but cannot be\nautomatically deleted during a deletion cycle.")),(0,a.kt)("h2",d({},{id:"transform-old-data-when-reaching-storage-quota"}),"Transform old data when reaching storage quota"),(0,a.kt)("p",null,"Instead of deleting data periodically, a node can also trigger ",(0,a.kt)("strong",{parentName:"p"},"spatial\ncompaction")," when exceeding a given disk budget. A spatial compaction cycle\ntransforms data until disk usage falls below the budget, e.g., by removing\ncolumns or rows from certain events, or by deleting them entirely."),(0,a.kt)("p",null,"When the disk budget exceeds the configured threshold, the node decides what\ndata to compact. The compaction ",(0,a.kt)("em",{parentName:"p"},"mode")," defines how this happens. Currently,\nthere exists only one mode: ",(0,a.kt)("a",d({parentName:"p"},{href:"#weighted-age"}),"weighted age"),"."),(0,a.kt)("p",null,"This compaction mode selects all events according to a ",(0,a.kt)("em",{parentName:"p"},"weighted age"),". To\ncompute the weighted age, the node divides the actual age of an event with the\nweight assigned to this event type. For example, applying a weight of 100 to an\nevent that is 100 days old would yield a weighted age of 1 day. This causes it\nto be transformed after events that are 50 days old. Conversely, a weights less\nthan one results in an older weighted age, resulting in earlier consideration in\na compaction cycle."),(0,a.kt)("p",null,"The default weight is 1 for all event types. Here is an example configuration\nthat adjusts the weights:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"tenzir:\n  plugins: [compaction]\nplugins:\n  compaction:\n    space:\n      mode: weighted-age\n      interval: 6 hours\n      disk-budget-high: 10TiB\n      disk-budget-low:   8TiB\n      weights:\n        - weight: 0.1\n          types: [suricata.flow]\n          #pipeline: fancy_flow_compaction\n        - weight: 100\n          types: [suricata.alert]\n          #pipeline: fancy_alert_compaction\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline")," key for each type is optional. If present, the corresponding\npipeline processes all matching events. If absent, the nodes deletes matching\nevents."),(0,a.kt)("p",null,"Two additional keys are useful to fine-tune the behavior of the compaction\nplugin:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"compaction.space.scan-binary"),": an absolute path to a binary that should be\nexecuted to determine the current disk usage"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"compaction.space.step-size"),": adjust how many compaction candidates should be\nprocessed before re-checking the size of the database directory")),(0,a.kt)("h2",d({},{id:"transform-data-after-exceeding-a-retention-span"}),"Transform data after exceeding a retention span"),(0,a.kt)("p",null,"A node triggers ",(0,a.kt)("strong",{parentName:"p"},"temporal compaction")," according to a set of rules that define\nhow to transform events after they reach a specfic age. This declarative\nspecification makes it easy to express fine-grained data retention policies,\nwhich is often needed for regulatory requirements and compliance."),(0,a.kt)("p",null,"For each compaction cycle, the node processes all rules and identifies what\nsubset of the data has become subject to transformation. To this end, each rule\ndefines a ",(0,a.kt)("em",{parentName:"p"},"minimum")," age, i.e., a lower bound that must be exceeded before the\ncorresponding events undergo their configured pipeline."),(0,a.kt)("p",null,"To configure temporal compaction, provide a list of compaction rules under the\nkey ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.compaction.time")," in the configuration. A compaction rule defines\nthe minimum age using key ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),", the pipeline to apply with the key\n",(0,a.kt)("inlineCode",{parentName:"p"},"pipeline"),", the scope in terms of schema using the key ",(0,a.kt)("inlineCode",{parentName:"p"},"types"),", and a name to\nuniquely refer to the rule. Omitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," key causes temporal compaction\nrules to be applied to all schemas."),(0,a.kt)("p",null,"By default, a compaction rule consumes its input, i.e., it erases the original\nevents from the database and replaces them with the transformed events. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"preserve-input")," option can be specified on a temporal compaction rule to\noverride this behavior and to keep the input partitions available."),(0,a.kt)("admonition",d({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"A node applies each rule only once per partition and stores the applied rule\nname within the partition meta data. If you rename a rule in the configuration\nand reload a new compaction configuration, already compacted partitions will\nundergo another round of compaction.")),(0,a.kt)("p",null,"The pipelines referenced in the compaction configuration must be defined in your\nconfiguration."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'tenzir:\n  plugins: [compaction]\n  pipelines:\n    anonymize_urls: |\n      replace net.url="xxx"\n    aggregate_flows: |\n       summarize \n         pkts_toserver=sum(flow.pkts_toserver),\n         pkts_toclient=sum(flow.pkts_toclient),\n         bytes_toserver=sum(flow.bytes_toserver),\n         bytes_toclient=sum(flow.bytes_toclient),\n         start=min(flow.start),\n         end=max(flow.end)\n       by\n         timestamp,\n         src_ip,\n         dest_ip\n       resolution\n         10 mins\nplugins:\n  compaction:\n    time:\n      # How often to check the `after` condition below.\n      interval: 1 day\n      rules:\n        - after: 2 days\n          name: uri_scrubbing\n          pipeline: anonymize_urls\n          types:\n            - zeek.http\n            - suricata.http\n        - after: 7 days\n          name: flow_reduction\n          pipeline: aggregate_flows\n          keep: true\n          types:\n            - suricata.flow\n')),(0,a.kt)("h2",d({},{id:"trigger-a-compaction-cycle-manually"}),"Trigger a compaction cycle manually"),(0,a.kt)("p",null,"You can also interact with the compaction plugin on the command line, through\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"compaction")," subcommand. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," subcommand to show all configured\ncompaction rules:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-ctl compaction list\n")),(0,a.kt)("p",null,"You can then trigger a compaction manually via ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-ctl compaction run <rule>\n")),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," subcommand for an overview of the current status of the\ncompaction plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"tenzir-ctl status compaction\n")))}w.isMDXComponent=!0}}]);