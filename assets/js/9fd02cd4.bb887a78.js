"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1590],{23355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(83117),o=(a(67294),a(3905));a(61839);const i={sidebar_position:0},r="Why VAST",s={unversionedId:"about/why-vast",id:"about/why-vast",title:"Why VAST",description:"VAST fills a gap when you need a highly embeddable data node for security",source:"@site/docs/about/why-vast.md",sourceDirName:"about",slug:"/about/why-vast",permalink:"/docs/about/why-vast",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about/why-vast.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"About",permalink:"/docs/about/"},next:{title:"Target Audience",permalink:"/docs/about/target-audience"}},l={},d=[{value:"VAST vs. SIEMs",id:"vast-vs-siems",level:2},{value:"VAST vs. Data Warehouses",id:"vast-vs-data-warehouses",level:2},{value:"VAST vs. Relational DBs",id:"vast-vs-relational-dbs",level:2},{value:"VAST vs. Document DBs",id:"vast-vs-document-dbs",level:2},{value:"VAST vs. Timeseries DBs",id:"vast-vs-timeseries-dbs",level:2},{value:"VAST vs. Key-Value DBs",id:"vast-vs-key-value-dbs",level:2},{value:"VAST vs. Graph DBs",id:"vast-vs-graph-dbs",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-vast"},"Why VAST"),(0,o.kt)("p",null,"VAST fills a gap when you need a highly embeddable data node for security\ntelemetry data that powers detection and response use cases:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Spectra",src:a(85102).Z+"#gh-light-mode-only",width:"1217",height:"872"}),"\n",(0,o.kt)("img",{alt:"Spectra",src:a(79109).Z+"#gh-dark-mode-only",width:"1217",height:"872"})),(0,o.kt)("p",null,"You can come from the route of generic analytics engines that lack\ndomain-specific features, but then need to bring together data engineers and\nsecurity architects to build a custom system. You can also come from the\ntraditional SIEM route that lack the embeddability to be placed at the edge\nclose to high-volume data sources, or that are shielded behind an opaque cloud\nservice with narrow API."),(0,o.kt)("p",null,"The raison d'\xeatre of VAST is that you can enjoy an open, embeddable security\nanalytics engine that serves as a foundation for a sustainable detection and\nresponse architecture. We dread vendor lock-in and therefore only use open\nstandards (e.g., Apache Arrow, Parquet, STIX) so that you remain in full\ncontrol of your telemetry data and security content."),(0,o.kt)("p",null,"There exist a lot of other systems out there, and you may ask yourself the\nquestion: why not use ",(0,o.kt)("em",{parentName:"p"},"X")," instead? To help answer this question, we offer a\nbrief guidance below when other systems might be a better fit."),(0,o.kt)("h2",{id:"vast-vs-siems"},"VAST vs. SIEMs"),(0,o.kt)("p",null,"Traditional SIEMs support basic search and a fixed set of analytical operations.\nFor moderate data volumes, the established SIEM use cases perform well. But when\nscaling up to high-volume telemetry data, traditional SIEMs fall behind and\ncosts often run out of control. Traditional SIEMs also lack good support for\nthreat hunting and raw exploratory data analysis. That's why more advanced use\ncases, such as feature extraction, model training, and detection engineering,\nrequire additional data-centric workbenches."),(0,o.kt)("p",null,"VAST ",(0,o.kt)("em",{parentName:"p"},"complements")," a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security_information_and_event_management"},"SIEM")," nicely with the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Offloading"),": route the high-volume telemetry to VAST that would otherwise\noverload your SIEM or be cost-prohibitive to ingest. By keeping the bulk of\nthe data in VAST, you remove bottlenecks and can selectively forward the\nactivity that matters to your SIEM.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Compliance"),": VAST supports fine-grained retention configuration to meet\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"},"GDPR")," and\nother regulatory requirements. When storage capacity needs careful management,\nVAST's ",(0,o.kt)("em",{parentName:"p"},"compaction")," feature allows for weighted ageing of your data, so that\nyou can specify relative importance of event types. Powerful ",(0,o.kt)("em",{parentName:"p"},"transforms"),"\nallow you to anonymize, pseudonymize, or encrypt specific fields\u2014either to\nsanitize ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_data"},"PII data")," on import, or\nad-hoc on export when data leaves VAST.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Science"),": The majority of SIEMs provide an API-only, low-bandwidth\naccess path to your security data. VAST is an ",(0,o.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Arrow"),"-native engine\nthat offers unfettered high-bandwidth access so that you can bring your own\nworkloads, with your own tools, e.g., to run iterative clustering algorithms\nor complex feature extraction in conjunction with machine learning."))),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Unlike a heavy-weight legacy SIEM, VAST is highly embeddable so that you can\nrun it everywhere: containerized in the public cloud, in the data center in the\nprivate cloud, on bare-metal appliances deep in the network, or at the edge.")),(0,o.kt)("h2",{id:"vast-vs-data-warehouses"},"VAST vs. Data Warehouses"),(0,o.kt)("p",null,"Data warehouses and\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_analytical_processing"},"OLAP")," engines\nseem like an appealing choice for immutable structured data. They offer\nsufficient ingest bandwidth, perform well on group-by and aggregation queries,\ncome frequently with advanced operations like joins, and often scale out well."),(0,o.kt)("p",null,"However, as a cornerstone for security operations, they fall short in supporting\nthe following relevant use cases where VAST has the edge:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Onboarding"),": it takes considerable effort to write and maintain\nschemas for the tables of the respective data sources. Since VAST is\npurpose-built for security data, integrations for key data sources and data\ncarriers exist out of the box.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rich Typing"),": modeling security event data with a generic database often\nreduces the values to strings or integers, as opposed to retaining\ndomain-specific semantics, such as IP addresses or port numbers. VAST offers a\nrich type system that can retain such semantics at ingest time, while also\ngiving you the ability to query the data with your own taxonomy at query time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fast Search"),": typical query patterns are (1) automatically triggered point\nqueries for tactical threat intelligence, arriving at a high rate and often in\nbulk, of which the majority are true negatives, (2) regular expression search\nfor finding patterns in command line invocations, URLs, or opaque string\nmessages, and (3) group-by and aggregations when hunting for threats or when\nperforming threshold-based detections. Data warehouses work well for (3) but\nrarely for (1) and (2) as well."))),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Data warehouses may be well-suited for raw data processing, but a data backbone\nfor security operations has a lot more domain-specific demands. The required\nheavy lifting to bridge this gap is cost and time prohibitive for any security\noperations center. This is why we built VAST.")),(0,o.kt)("h2",{id:"vast-vs-relational-dbs"},"VAST vs. Relational DBs"),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("a",{parentName:"p",href:"#vast-vs-data-warehouses"},"OLAP")," workloads,\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_transaction_processing"},"OLTP")," workloads\nhave strong transactional and consistency guarantees, e.g., when performing\ninserts, updates, and deletes. These extra guarantees come at a cost of\nthroughput and latency when working with large datasets, but are rarely needed\nin security analytics (e.g., ingestion is an append-only operation). In a domain\nof incomplete data, VAST trades correctness for performance and availability,\ni.e., throttles a data source with backpressure instead of falling behind and\nrisking out-of-memory scenarios."),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you aim to perform numerous modifications on a small subset of event data,\nwith medium ingest rates, relational databases, like PostgreSQL or MySQL, might\nbe a better fit. VAST's columnar data representation is ill-suited for row-level\nmodifications.")),(0,o.kt)("h2",{id:"vast-vs-document-dbs"},"VAST vs. Document DBs"),(0,o.kt)("p",null,"Document DBs, such as MongoDB, offer worry-free ingestion of unstructured\ndata. They scale well horizontally and flexible querying."),(0,o.kt)("p",null,"However, they might not be the best choice for the data plane in security\noperations, for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Vertical Scaling"),': when co-locating a storage engine next to high-volume\ndata sources, e.g., on a network appliance together with a network monitor,\nCPU and memory constraints coupled with a non-negligible IPS overhead prohibit\nscaling horizontally to build a "cluster in a box."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Analytical Workloads"),": the document-oriented storage does not perform well\nfor analytical workloads, such as group-by and aggregation queries. But such\nanalytics are very common in interactive threat hunting scenarios and in\nvarious threshold-based detections. VAST leverages Arrow for columnar data\nrepresentation and partially for query execution.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Economy of Representation"),": security telemetry data exhibits a lot of\nrepetitiveness between events, such as similar IP addresses, URL prefixes, or\nlog message formats. This data compresses much better when transposed into a\ncolumnar format, such as Parquet."))),(0,o.kt)("p",null,"A special case of document DBs are full-text search engines, such as\nElasticSearch or Solr. The unit of input is typically unstructured text. The\nsearch engine uses (inverted) indexes and ranking methods to return the most\nrelevant results for a given combination of search terms."),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Most of the security telemetry arrives as structured log/event data, as opposed\nto unstructured textual data. If your primary use case involves working with\ntext, VAST might not be a good fit. That said, needle-in-haystack search\nand other information retrieval techniques are still relevant for security\nanalytics, for which VAST has basic support.")),(0,o.kt)("h2",{id:"vast-vs-timeseries-dbs"},"VAST vs. Timeseries DBs"),(0,o.kt)("p",null,"Timeseries databases share a lot in common with ",(0,o.kt)("a",{parentName:"p",href:"#vast-vs-data-warehouses"},"OLAP\nengines"),", but put center data organization around\ntime."),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you plan to access your event data through time domain and need to model the\nmajority of data as series, a timeseries DBs may suit the bill. If you access\ndata through other (spatial) attributes, like IP addresses or domains, a\ntraditional timeseries DB might not be good fit\u2014especially for high-cardinality\nattributes. If your analysis involve running more complex detections, or\ninclude needle-in-haystack searches, VAST might be a better fit.")),(0,o.kt)("h2",{id:"vast-vs-key-value-dbs"},"VAST vs. Key-Value DBs"),(0,o.kt)("p",null,"A key-value store performs a key-based point or range lookup to retrieve one or\nmore values. Security telemetry is high-dimensional data and there are many more\ndesired entry points than a single key besides time, e.g., IP address,\napplication protocol, domain name, or hash value."),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Key-value stores alone are not suitable as foundation for running security\nanalytics workloads. There are narrow use cases where key-value stores can\nfacilitate certain capabilities, e.g., when processing watch lists. (VAST offers\na ",(0,o.kt)("em",{parentName:"p"},"matcher")," plugin for this purpose.)")),(0,o.kt)("h2",{id:"vast-vs-graph-dbs"},"VAST vs. Graph DBs"),(0,o.kt)("p",null,"Graph databases are purpose-built for answering complex queries over networks of\nnodes and their relationships, such as finding shortest paths, measuring node\ncentrality, or identifying connected components. While networks and\ncommunication patterns can naturally be represented as graphs, traditional\nsecurity analytics query patterns may not benefit from a graph representation."),(0,o.kt)("admonition",{title:"Recommendation",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If graph-centric queries dominate your use case, VAST is not the right execution\nengine. VAST can still prove valuable as foundation for graph analytics by\nstoring the raw telemetry and feeding it (via Arrow) into graph engines that\nsupport ad-hoc data frame analysis.")))}c.isMDXComponent=!0},79109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spectra.dark-88493f8d984aec0f40613b601b3941f2.png"},85102:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spectra.light-e95fef0bdbf3bee3306a395ec431dacc.png"}}]);