"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88302:(e,t,a)=>{a.d(t,{ZP:()=>f});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&m(e,a,t[a]);return e},d=(e,t)=>i(e,o(t)),h=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const u={toc:[]},k="wrapper";function f(e){var t=e,{components:a}=t,r=h(t,["components"]);return(0,n.kt)(k,d(c(c({},u),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",c({},{title:"Commercial Plugin",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"This feature is available as commercial ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/understand/architecture/plugins"}),"plugin")," that runs on top\nopen-source VAST. Please ",(0,n.kt)("a",c({parentName:"p"},{href:"https://tenzir.com/contact-us"}),"contact us")," if you'd like to try it out.")))}f.isMDXComponent=!0},15232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>k,metadata:()=>g,toc:()=>v});var n=a(3905),r=a(88302),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&c(e,a,t[a]);return e},h=(e,t)=>o(e,l(t)),u=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const k={sidebar_position:0},f="Match Threat Intelligence",g={unversionedId:"use/detect/match-threat-intel",id:"use/detect/match-threat-intel",title:"Match Threat Intelligence",description:"Threat intelligence is security content that describes threats from various",source:"@site/docs/use/detect/match-threat-intel.md",sourceDirName:"use/detect",slug:"/use/detect/match-threat-intel",permalink:"/docs/use/detect/match-threat-intel",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/detect/match-threat-intel.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Introspect",permalink:"/docs/use/introspect/"},next:{title:"Cloud matchers",permalink:"/docs/use/detect/cloud-matchers"}},b={},v=[{value:"Start Matchers",id:"start-matchers",level:2},{value:"Server-side",id:"server-side",level:3},{value:"Client-side",id:"client-side",level:3},{value:"List Matchers",id:"list-matchers",level:2},{value:"Attach to Matchers",id:"attach-to-matchers",level:2},{value:"Add Indicators",id:"add-indicators",level:2},{value:"One-shot Import",id:"one-shot-import",level:3},{value:"Bulk Import",id:"bulk-import",level:3},{value:"Delete Indicators",id:"delete-indicators",level:2},{value:"Understand Matcher Modes",id:"understand-matcher-modes",level:2},{value:"Exact",id:"exact",level:3},{value:"Cuckoo",id:"cuckoo",level:3},{value:"DCSO Bloom",id:"dcso-bloom",level:3},{value:"Constructing a bloom matcher",id:"constructing-a-bloom-matcher",level:5},{value:"Importing bloom-generated binary filters",id:"importing-bloom-generated-binary-filters",level:4},{value:"Examples",id:"examples",level:2},{value:"IP Blocklists",id:"ip-blocklists",level:3}],N={toc:v},y="wrapper";function w(e){var t=e,{components:a}=t,i=u(t,["components"]);return(0,n.kt)(y,h(d(d({},N),i),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"match-threat-intelligence"}),"Match Threat Intelligence"),(0,n.kt)(r.ZP,{mdxType:"CommercialPlugin"}),(0,n.kt)("admonition",d({},{title:"Terminology: Threat Intelligence",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Threat intelligence is security content that describes threats from various\nperspectives. Practitioners typically distinguish strategic, operational, and\ntactical threat intelligence. We focus on the tactical data that decomposes into\n",(0,n.kt)("em",{parentName:"p"},"observables")," as singular data points, or more specifically ",(0,n.kt)("em",{parentName:"p"},"indicators of\ncompromise (IoCs)")," that reflect malicious activity.")),(0,n.kt)("p",null,"VAST can live-match threat intelligence against the incoming stream of events,\nproducing an alert feed of sightings. This feature fits into the bigger theme\nof a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/about/use-cases/unified-detection"}),"unified detection")," strategy\nwith a security-content-driven workflow."),(0,n.kt)("p",null,"VAST features ",(0,n.kt)("em",{parentName:"p"},"matchers")," that check whether specific field values exist in\ndynamic set of indicators. A successful match emits a ",(0,n.kt)("em",{parentName:"p"},"sighting")," as output.\nThis functionality resembles ",(0,n.kt)("a",d({parentName:"p"},{href:"https://suricata.readthedocs.io/en/latest/rules/datasets.html"}),"Suricata's datasets")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"https://docs.zeek.org/en/master/frameworks/intel.html"}),"Zeek's intel\nframework"),", but generalized to all security telemetry. Key\nmatcher features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Exact & Fuzzy Mode"),": controllable memory usage through multiple storage\nbackends, such as hash tables, Bloom filters, and Cuckoo filters.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Surgical Target Locking"),": fine-grained configuration options to dispatch\nmatchers to fields in the data, fully leveraging VAST's type system.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Composable Sighting Streams"),": mix-and-match sighting streams to combine\nthe results of matchers, e.g., fuse TLP:RED and inhouse indicators in one\nstream and OSINT and TLP:WHITE in a another one.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Full Control"),": flexible controls to add/remove indicators, perform\nbulk-imports, and save/restore binary matcher state."))),(0,n.kt)("p",null,"Working with matchers involves three separate steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"#start-matchers"}),"Start a matcher")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"#add-indicators"}),"Add"),"/",(0,n.kt)("a",d({parentName:"li"},{href:"#remove-indicators"}),"remove")," indicators"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",d({parentName:"li"},{href:"#attach-to-matchers"}),"Attach to the matcher")," to consume sightings")),(0,n.kt)("p",null,"VAST uniquely identifies matchers by their name, either as specified in the YAML\nconfiguration or on the command line. Whenever interacting with a matcher, you\nneed to pass the name as argument to all operations. The general pattern looks\nas follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher <command> [options] <name>\n")),(0,n.kt)("p",null,"VAST also supports executing operations on multiple matchers at once, e.g., to\na add an indicator to a many matchers. To this end, simply use a comma-separated\nlist for the positional ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," argument, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher add a,b,c ...")," to\nact on matchers ",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,n.kt)("admonition",d({},{title:"Requirements",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"To use matchers, make sure that your VAST distribution has the ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher")," plugin\navailable, e.g., by checking the output of ",(0,n.kt)("inlineCode",{parentName:"p"},"vast version"),":"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast -q --plugins=all version | jq .plugins.matcher\n"))),(0,n.kt)("h2",d({},{id:"start-matchers"}),"Start Matchers"),(0,n.kt)("p",null,"There exist two methods to start matchers:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Server-side: configure them in the ",(0,n.kt)("inlineCode",{parentName:"li"},"vast.yaml")," configuration"),(0,n.kt)("li",{parentName:"ol"},"Client-side: invoke ",(0,n.kt)("inlineCode",{parentName:"li"},"vast matcher start")," on the command line")),(0,n.kt)("p",null,"Method (1) produces ",(0,n.kt)("em",{parentName:"p"},"persistent")," matchers that survive restarts and flush their\nstate periodically; (2) produces ",(0,n.kt)("em",{parentName:"p"},"ephemeral")," matchers, which are functionally\nequivalent but require manual state management if persistence is desired."),(0,n.kt)("p",null,"A matcher operates in a specific ",(0,n.kt)("em",{parentName:"p"},"mode"),". Please consult the section ",(0,n.kt)("a",d({parentName:"p"},{href:"#understand-matcher-modes"}),"matcher\nmodes")," below to understand the trade-offs."),(0,n.kt)("h3",d({},{id:"server-side"}),"Server-side"),(0,n.kt)("p",null,"The configuration key ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins.matcher")," contains the configuration for\n",(0,n.kt)("em",{parentName:"p"},"persistent")," matchers, i.e., those that survice restarts and get periodically\npersisted."),(0,n.kt)("p",null,"Here is an example configuration snippet:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'plugins:\n  matcher:\n    # The amount of time to wait before triggering a write to disk for matchers\n    # "dirty" matchers, i.e., those that have been modified since the last\n    # write.\n    persistence-interval: 30 mins\n    # VAST automatically starts all matchers configured in this section.\n    matchers:\n      # An exact matcher that operates on fields.\n      hostnames:\n        mode: exact\n        match-fields:\n          - net.domain\n          - net.hostname\n      # A Cuckoo matcher that operates on all fields of type IP.\n      ips:\n        mode: cuckoo\n        match-types:\n          - ip\n      # A DCSO bloom matcher that operates on all fields of type string\n      iocs:\n        mode: dcso-bloom\n        match-types:\n          - string\n        capacity: 1000000\n        false-positive-probability: 0.001\n')),(0,n.kt)("p",null,"Adding a matcher means adding a new entry under the key ",(0,n.kt)("inlineCode",{parentName:"p"},"matchers"),"."),(0,n.kt)("p",null,"The matcher-global option ",(0,n.kt)("inlineCode",{parentName:"p"},"persistence-interval")," controls how fast a persist\noperation takes place after a state mutation. Regardless of the configured\nvalue, VAST persists all matchers with pending modifications on shutdown."),(0,n.kt)("h3",d({},{id:"client-side"}),"Client-side"),(0,n.kt)("p",null,"When deploying matchers, editing the server-side configuration can be unwieldy\nand result int undesired blind spots, because they require a restart of the\nserver for the configuration changes to take effect. This is why VAST also\nsupports spawning ",(0,n.kt)("em",{parentName:"p"},"ephemeral")," matchers via the CLI. Ephemeral matchers behave\nexactly like persistent matchers, with the only difference that the VAST server\ndoesn't manage their state. However, it is still possible to ",(0,n.kt)("a",d({parentName:"p"},{href:"#manage-matcher-state"}),"manually save/load\nthe matcher state"),"."),(0,n.kt)("p",null,"To start an ephemeral matcher, use ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher start"),". The command line\noptions are identical to the YAML keys. For example, to spawn the ",(0,n.kt)("inlineCode",{parentName:"p"},"iocs"),"\nmatcher configured above as ephemeral matcher, use this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher start \\\n  --mode=dcso-bloom \\\n  --capacity=1000000 \\\n  --false-positive-probability=0.001 \\\n  --match-types=string \\\n  iocs\n")),(0,n.kt)("h2",d({},{id:"list-matchers"}),"List Matchers"),(0,n.kt)("p",null,"To show the running matchers, use ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher list"),". Example output may look\nlike this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"hostnames (disabled with 0 clients)\nstrings (disabled with 0 clients)\nips (disabled with 0 clients)\n")),(0,n.kt)("p",null,"Matchers are ",(0,n.kt)("em",{parentName:"p"},"enabled")," when one or more clients are attached. See the next\nsection on how to attach to a matcher."),(0,n.kt)("h2",d({},{id:"attach-to-matchers"}),"Attach to Matchers"),(0,n.kt)("p",null,"Unless you attach to a matcher, it will not hook into the ingress event stream\nin order to conserve resources. A matcher is ",(0,n.kt)("em",{parentName:"p"},"enabled")," if it has at least one\nconnected client."),(0,n.kt)("p",null,"To attach to a matcher, you need to specified output format and the matcher\nname:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher attach csv hostnames\n")),(0,n.kt)("p",null,"The process will block and print all sightings in CSV format on standard\noutput, until it receives a termination signal, e.g., by pressing CTRL+C or\nsending it SIGINT."),(0,n.kt)("p",null,"In the common case, you don't want to repeat this for every matcher. To attach\nto multiple matchers with a single client, provide their names as\nlist:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher attach json hostnames,ips,iocs\n")),(0,n.kt)("p",null,"You will now receive sightings from all matchers in JSON format. There is no\nordering guarantee on the sighting output, as VAST fuses the sighting stream\nasynchronously to deliver optimal latency."),(0,n.kt)("h2",d({},{id:"add-indicators"}),"Add Indicators"),(0,n.kt)("p",null,"There exist two methods to populate matchers with content:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add a single indicator"),(0,n.kt)("li",{parentName:"ol"},"Bulk-import a set of indicators")),(0,n.kt)("h3",d({},{id:"one-shot-import"}),"One-shot Import"),(0,n.kt)("p",null,"Adding a single indicator involves passing it on the command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher add <matcher> <value> [context]\n")),(0,n.kt)("p",null,"For example, to add and IP address along with an opaque identifier to the\nmatcher ",(0,n.kt)("inlineCode",{parentName:"p"},"ips"),", use:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher add ips 6.6.6.6 opaque-id-42\n")),(0,n.kt)("p",null,"The context value ",(0,n.kt)("inlineCode",{parentName:"p"},"opaque-id-42")," will show in in all sightings for this\nindicator, e.g., to associate it with an external unique ID."),(0,n.kt)("admonition",d({},{title:"Context Usability",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"The context argument is only supported by the ",(0,n.kt)("em",{parentName:"p"},"exact")," matcher. Probabilistic\nmatchers cannot store the extra context data. Please consult the section on\n",(0,n.kt)("a",d({parentName:"p"},{href:"#understand-matcher-modes"}),"matcher modes")," to understand the inherent trade-offs.")),(0,n.kt)("h3",d({},{id:"bulk-import"}),"Bulk Import"),(0,n.kt)("p",null,"Adding large sets of indicators using ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher add")," does not scale,\nbecause the overhead of establishing a connection to the server dwarfs the time\nit takes to implant the indicator into the corresponding data structure. To\nimport large sets of indicators in bulk, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher import")," command."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher import")," command mirrors the interface of the ",(0,n.kt)("inlineCode",{parentName:"p"},"vast import"),"\ncommand. Instead of importing events into the database, it imports events\ncontaining ",(0,n.kt)("em",{parentName:"p"},"indicators")," and forwards them to selected matchers. Let's take a\nlook at an example incovation using the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://pulsedive.com/about/feed"}),"Pulsedive threat intelligence\nfeed"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Pulsedive feed without retired indicators and restricted to ip and ipv6 IoCs.\nfeed_url='https://pulsedive.com/premium/?key=&header=true&fields=id,type,risk,threats,feeds,usersubmissions,riskfactors,reference&types=ip,ipv6&risk=unknown,none,low,medium,high,critical&period=all&retired=false'\n\n# Ingest the feed into the matcher 'ips' we created above.\ncurl -sSL \"$feed_url\" |\n  vast matcher import -t pulsedive csv ips\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"curl")," command downloads a CSV and dumps it to STDOUT. The ",(0,n.kt)("inlineCode",{parentName:"p"},"vast matcher\nimport")," command reads CSV content by specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"csv")," as first positional\nargument. We are also telling VAST via ",(0,n.kt)("inlineCode",{parentName:"p"},"-t pulsedive")," that the data matches the\n",(0,n.kt)("inlineCode",{parentName:"p"},"pulsedive")," type (specified in the bundled ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsedive.schema"),"). After parsing,\nVAST forwards the parsed indicators to the matcher ",(0,n.kt)("inlineCode",{parentName:"p"},"ips"),"."),(0,n.kt)("p",null,"An additional ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/understand/data-model/taxonomies#concepts"}),"concepts\ndefinition")," for the\n",(0,n.kt)("inlineCode",{parentName:"p"},"matcher.indicator.value")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher.indicator.context")," fields for the\n",(0,n.kt)("inlineCode",{parentName:"p"},"pulsedive")," type lets the command know which fields to treat as ",(0,n.kt)("em",{parentName:"p"},"value")," and\noptional ",(0,n.kt)("em",{parentName:"p"},"context"),"."),(0,n.kt)("p",null,"The above example used a pre-filtered list from Pulsedive. However, import\nfilter expressions allow for doing the filtering on the fly using VAST's\nregular import filter expressions like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# The full Pulsedive feed.\nfeed_url='https://pulsedive.com/premium/?key=&header=true&fields=id,type,risk,threats,feeds,usersubmissions,riskfactors,reference&types=ip,ipv6,domain,url&risk=unknown,none,low,medium,high,critical&period=all&retired=true'\n\n# Ingest the feed into the matcher 'ips', but skip all retired indicators.\ncurl -sSL \"${feed_url}\" |\n  vast matcher import -t pulsedive csv ips \\\n    'risk != /:retired/ && type == /ip.*/\n")),(0,n.kt)("p",null,"The matcher plugin conveniently ships with a Pulsedive schema and concept\ndefinitions for use with the matcher plugin in\n",(0,n.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/share/vast/plugins/matcher/schema"),"."),(0,n.kt)("h2",d({},{id:"delete-indicators"}),"Delete Indicators"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"remove")," command is the dual to ",(0,n.kt)("inlineCode",{parentName:"p"},"add"),": it removes a single indicator value.\nFor example, to remove ",(0,n.kt)("inlineCode",{parentName:"p"},"6.6.6.6")," from the matcher ",(0,n.kt)("inlineCode",{parentName:"p"},"ips"),", invoke:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher remove ips 6.6.6.6\n")),(0,n.kt)("admonition",d({},{title:"Context Usability",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Not all matchers support deletion of indicators. Please consult the section on\n",(0,n.kt)("a",d({parentName:"p"},{href:"#understand-matcher-modes"}),"matcher modes")," to understand the inherent\ntrade-offs. :::"),(0,n.kt)("p",{parentName:"admonition"},"Bulk deletion is currently not possible, but you can ",(0,n.kt)("a",d({parentName:"p"},{href:"#manage-matcher-state"}),"manage the matcher state\nmanually"),", e.g., to externally constructed reload Bloom\nfilters."),(0,n.kt)("h2",d({parentName:"admonition"},{id:"manage-matcher-state"}),"Manage Matcher State"),(0,n.kt)("p",{parentName:"admonition"},"To simplify managing of large sets of indicators for operators, VAST supports\nclient-side modification of the underlying raw matcher state."),(0,n.kt)("p",{parentName:"admonition"},"For example, this allows you to compile a Bloom filter containing several\nmillions of indicators in your threat intelligence platform and synchronize the\ncontent for matching in VAST. Another use case involves dumping matcher state\nto replicate the matcher at another VAST instance."),(0,n.kt)("h3",d({parentName:"admonition"},{id:"saveload-state-at-the-client"}),"Save/load state at the client"),(0,n.kt)("p",{parentName:"admonition"},"To show the state of a specific matcher, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher save")," command:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher save ips > ips.state\n")),(0,n.kt)("p",{parentName:"admonition"},"The command writes the binary state of the matcher ",(0,n.kt)("inlineCode",{parentName:"p"},"ips")," to standard output,\nexpecting users to redirect it according to their needs. The state is portable,\nand you can copy it over to other machines as well."),(0,n.kt)("p",{parentName:"admonition"},"To replace the state of a running matcher, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher load")," command:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher load ips < ips.state\n")),(0,n.kt)("p",{parentName:"admonition"},"The command reads the binary state from standard input.")),(0,n.kt)("p",null,"You can also combine ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),' to migrate the state of one matcher,\ne.g., to perform a modification that you want to reverse later on, or to "fork"\na matcher. To migrate matcher ',(0,n.kt)("inlineCode",{parentName:"p"},"foo")," to matcher ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),", use:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher save foo | vast matcher load bar\n")),(0,n.kt)("p",null,":::"),(0,n.kt)("h2",d({},{id:"understand-matcher-modes"}),"Understand Matcher Modes"),(0,n.kt)("p",null,"Fundamentally, a matcher maintains set of indicators. The ",(0,n.kt)("em",{parentName:"p"},"mode")," controls how\nthe matcher stores the indicator data. The table below gives a quick summary\nabout the trade-offs when choosing a mode:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Mode"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Add"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Delete"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Context"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Space"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Exact"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"exact")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"O(n)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Cuckoo"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cuckoo")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2718"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"O((log(1/p) + 2) / load)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"DCSO bloom"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"dcso-bloom")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2714\ufe0e"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2718"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u2718"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"O(1.44 log(1/p))"))))),(0,n.kt)("h3",d({},{id:"exact"}),"Exact"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"exact")," mode maintains a key-value mapping in the form of a hash map using\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Hash_table#Robin_Hood_hashing"}),"robin hood hashing"),". Every key in the table represents the\nindicator item. The value is optional context that can be chosen freely."),(0,n.kt)("p",null,"The exact matcher supports all operations, at the cost of growing linearly with\nthe number of indicators."),(0,n.kt)("h3",d({},{id:"cuckoo"}),"Cuckoo"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"cuckoo")," mode summarizes the set of indicators in a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cuckoo_filter"}),"Cuckoo\nfilter"),"."),(0,n.kt)("p",null,"Compared to Bloom filters, Cuckoo filters have the following advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for deleting previously inserted elements"),(0,n.kt)("li",{parentName:"ul"},"Better false-positive probability as the filter load increases"),(0,n.kt)("li",{parentName:"ul"},"Smaller memory footprint for false-positive probabilities less than 3%."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"O(1)")," vs ",(0,n.kt)("em",{parentName:"li"},"O(k)")," operations, where ",(0,n.kt)("em",{parentName:"li"},"k")," is the number of hash functions in the\nBloom filter")),(0,n.kt)("admonition",d({},{title:"Deleting Elements",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"The delete operation comes with a caveat: it is only well-defined if the\nto-be-deleted item has been previously added. Otherwise the filter enters an\nundefined state and can produce false negatives in addition to false positives.\nVAST cannot enforce this pre-condition, so you must tread carefully when using\nit.")),(0,n.kt)("p",null,"The Cuckoo filter is currently not parameterizable. The size is always 128 MiB.\nIn the future, we will offer the same tuning knobs as the DCSO Bloom filter\nbelow."),(0,n.kt)("h3",d({},{id:"dcso-bloom"}),"DCSO Bloom"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"dcso-bloom")," mode stores the indicators in a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Bloom_filter"}),"Bloom filter"),"."),(0,n.kt)("p",null,"The two tuning knobs are ",(0,n.kt)("em",{parentName:"p"},"capacity")," (maximum number of items in the filter) and\n",(0,n.kt)("em",{parentName:"p"},"false-positive probability")," (chance of reporting an indicator not in the\nfilter). The two parameters dictate the space usage. Please consult Thomas\nHurst's ",(0,n.kt)("a",d({parentName:"p"},{href:"https://hur.st/bloomfilter/"}),"Bloom Filter Calculator")," for finding the\noptimal configuration for your use case."),(0,n.kt)("p",null,"The Bloom ftiler is complete C++ rebuild of DCSO's Bloom filter library\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/dcso/bloom"}),(0,n.kt)("inlineCode",{parentName:"a"},"bloom")),". VAST's implementation is\nbinary-compatible and uses the exact same method for FNV1 hashing and parameter\ncalculation, making it a drop-in replacement for ",(0,n.kt)("inlineCode",{parentName:"p"},"bloom")," users."),(0,n.kt)("h5",d({},{id:"constructing-a-bloom-matcher"}),"Constructing a bloom matcher"),(0,n.kt)("p",null,"To construct a ",(0,n.kt)("inlineCode",{parentName:"p"},"dcso-bloom")," matcher, use ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher start"),". The additional\nparameters ",(0,n.kt)("inlineCode",{parentName:"p"},"--false-positive-probability")," (",(0,n.kt)("inlineCode",{parentName:"p"},"-n"),") and ",(0,n.kt)("inlineCode",{parentName:"p"},"--capacity")," (",(0,n.kt)("inlineCode",{parentName:"p"},"-n"),") allow\nfor controlling the underlying Bloom filter:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher start --mode=dcso-bloom -p 0.1 -n 100 --match-fields=net.domain ns\nvast matcher add ns 1.1.1.1\nvast matcher add ns 8.8.8.8\n")),(0,n.kt)("h4",d({},{id:"importing-bloom-generated-binary-filters"}),"Importing bloom-generated binary filters"),(0,n.kt)("p",null,"In addition to controlling matcher content using the ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher add")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"matcher\nimport")," commands, you can provide a binary Bloom filter created by the Go\nutility ",(0,n.kt)("inlineCode",{parentName:"p"},"bloom"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"bloom create -p 0.1 -n 100 ns.bloom\necho 1.1.1.1,8.8.8.8 | bloom -s insert ns.bloom\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"bloom show ns.bloom")," to display a few statistics about the filter, such as\nthe number of elements, false-positive probability, number of hash functions,\nand bits used."),(0,n.kt)("p",null,"Finally, we hand the Bloom filter over to VAST and associate it with the\nmatcher called ",(0,n.kt)("inlineCode",{parentName:"p"},"ns"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast matcher load dns < ns.bloom\n")),(0,n.kt)("p",null,"See the section on ",(0,n.kt)("a",d({parentName:"p"},{href:"#manage-matcher-state"}),"matcher state management")," for\na more detailed discussion on loading binary state into the matcher."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"This section includes real-world examples to illustrate how the matcher works\nin practice."),(0,n.kt)("h3",d({},{id:"ip-blocklists"}),"IP Blocklists"),(0,n.kt)("p",null,"IP blocklists make up for a large share of low-level IoCs, often to represent\nattacker infrastructure, such as C2 servers."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"https://feodotracker.abuse.ch/"}),"Feodo Tracker")," from\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://abuse.ch"}),"abuse.ch")," represents one such blocklist that gets updated\nevery 5 minutes. Let's take a look:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'head -n 15 ipblocklist.csv\n################################################################\n# abuse.ch Feodo Tracker Botnet C2 IP Blocklist (CSV)          #\n# Last updated: 2021-08-17 15:00:42 UTC                        #\n#                                                              #\n# Terms Of Use: https://feodotracker.abuse.ch/blocklist/       #\n# For questions please contact feodotracker [at] abuse.ch      #\n################################################################\n#\n"first_seen_utc","dst_ip","dst_port","c2_status","last_online","malware"\n"2021-01-17 07:30:05","67.213.75.205","443","offline","2021-08-18","Dridex"\n"2021-01-17 07:44:46","51.178.161.32","4643","online","2021-08-18","Dridex"\n"2021-01-17 07:44:50","162.144.127.197","3786","online","2021-08-18","Dridex"\n"2021-01-17 07:45:55","111.230.104.169","3388","online","2021-08-18","Dridex"\n"2021-01-17 07:45:58","217.79.184.243","33443","online","2021-08-18","Dridex"\n"2021-01-17 07:47:59","46.101.90.205","4643","online","2021-08-18","Dridex"\n')),(0,n.kt)("p",null,"Before VAST can read this data, we need to tell VAST what type to use for it. We\nwrite an ",(0,n.kt)("inlineCode",{parentName:"p"},"abuse")," ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/understand/data-model/modules"}),"module")," for this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"module: abuse\ntypes:\n  feodo.blocklist:\n    record:\n      - first_seen_utc: time\n      - dst_ip: ip\n      - dst_port: port\n      - c2_status:\n          enum:\n            - online\n            - offline\n      - last_online: time\n      - malware: string\n")),(0,n.kt)("p",null,"In addition, you need to tell VAST what fields have the indicator data,\nconsisting of value and an optional context. To this end, you need to provide a\n",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/understand/data-model/taxonomies#concepts"}),"concept")," definition:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),"concepts:\n  matcher.indicator.value:\n    fields:\n      - abuse.feodo.blocklist.dst_ip\n  matcher.indicator.context:\n    fields:\n      - abuse.feodo.blocklist.malware\n")),(0,n.kt)("p",null,"Now we can translate the blocklist into a format that VAST can read, e.g., CSV\nor JSON. In the example below, we simply add a header to the plain text file to\ncreate a valid CSV. (Feodo also provides a CSV download, but we want to\nillustrate how you can easily perform a translation.)"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://feodotracker.abuse.ch/downloads/ipblocklist.csv |\n  tr -d '\\015' |\n  grep -v '^#' |\n  vast matcher import -t feodo.blocklist csv ips\n")),(0,n.kt)("p",null,"We throw in a ",(0,n.kt)("inlineCode",{parentName:"p"},"tr -d '\\015'")," to convert DOS linebreaks to UNIX and strip ",(0,n.kt)("inlineCode",{parentName:"p"},"#"),"\ncomments via ",(0,n.kt)("inlineCode",{parentName:"p"},"grep -v"),"."),(0,n.kt)("p",null,"The live matcher ",(0,n.kt)("inlineCode",{parentName:"p"},"ips")," is now armed with the Feodo blocklist and matches it on\nall IP addresses."))}w.isMDXComponent=!0}}]);