"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6513],{32390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));n(61839);const i={sidebar_position:2},s="Components",r={unversionedId:"understand/architecture/components",id:"understand/architecture/components",title:"Components",description:"VAST uses the actor model to structure the application logic into",source:"@site/docs/understand/architecture/components.md",sourceDirName:"understand/architecture",slug:"/understand/architecture/components",permalink:"/docs/understand/architecture/components",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/architecture/components.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Actor Model",permalink:"/docs/understand/architecture/actor-model"},next:{title:"Plugins",permalink:"/docs/understand/architecture/plugins"}},c={},l=[{value:"Singleton Components",id:"singleton-components",level:2},{value:"CATALOG",id:"catalog",level:3},{value:"SCHEDULER",id:"scheduler",level:3},{value:"Multi-instance Components",id:"multi-instance-components",level:2},{value:"LOADER",id:"loader",level:3},{value:"SOURCE",id:"source",level:3},{value:"PARTITION",id:"partition",level:3},{value:"QUERY",id:"query",level:3},{value:"SINK",id:"sink",level:3},{value:"DUMPER",id:"dumper",level:3}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("p",null,"VAST uses the ",(0,o.kt)("a",{parentName:"p",href:"actor-model"},"actor model")," to structure the application logic into\nindividual components. Each component maps to an actor, which has a strongly\ntyped messaging interface that the compiler enforces. All actor components\nexecute concurrently, but control flow within a component is sequential. It's\npossible that a component uses other helper components internally to achieve\nmore concurrency."),(0,o.kt)("p",null,"In other words, a component is a microservice within the application. Most\ncomponents are multi-instance in that the runtime can spawn them multiple times\nfor horizontal scaling. Only a few components are singletons where at most one\ninstance can exist, e.g., because they guard access to an underlying resource."),(0,o.kt)("p",null,"The diagram below illustrates VAST's key components in the dataflow between\nthem:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Components",src:n(46252).Z+"#gh-light-mode-only",width:"2730",height:"2026"}),"\n",(0,o.kt)("img",{alt:"Components",src:n(94747).Z+"#gh-dark-mode-only",width:"2730",height:"2026"})),(0,o.kt)("p",null,"By convention, we use ALL-CAPS naming for actor components and represent them as\ncircles. Red circles are singletons and blue circles multi-instance actors. We\nalso did not show process boundaries in this diagram, as the actor model allows\nus to ",(0,o.kt)("a",{parentName:"p",href:"actor-model#flexible-distribution"},"draw them flexibly"),", based on the\nrequirements of the deployment environment."),(0,o.kt)("admonition",{title:"Work in Progress",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The implementation lags behind above sketched architecture in a few places. We\ndescribe the desired state here to expose the dataflow dependecies more clearly.\nFor example, the query engine is not yet pluggable, LOADER and DUMPER are\nintegrated into SOURCE and SINK, dense indexes are not yet configurable, and\npartition building currently still takes place within the query engine.")),(0,o.kt)("h2",{id:"singleton-components"},"Singleton Components"),(0,o.kt)("p",null,"Singleton components have a special restriction in that VAST can spawn at most\none instance of them. This restriction exists because such a component mutates\nan underlying resource. To avoid data races in the presence of writes, wrapping\nthe resources behind an actor implicitly squentializes accesses, given that\nactors process one message at a time."),(0,o.kt)("h3",{id:"catalog"},"CATALOG"),(0,o.kt)("p",null,"The catalog is the central component that sits both paths, read and write. It\nhas the two key functions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Partition Management"),": the catalog is the owner of ",(0,o.kt)("em",{parentName:"li"},"partitions"),", each of\nwhich consists of a concatenation of record batches encoded in a format\nsuitable for persistence, plus optional sparse and dense indexes. Other\ncomponents can add and remove partitions."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Query Entry Point"),": user queries arrive at the catalog, which returns a\nset of candidate partitions for each query by looking up partition metadata\nand, if available, performing lookups in sub-linear index structures (such\nas Bloom filters). The query result consists of a URI that points to the\npartition and a small amount of partition metadata. The catalog also forwards\na query to all active partitions to include data in partitions that\nare still under construction.")),(0,o.kt)("h3",{id:"scheduler"},"SCHEDULER"),(0,o.kt)("p",null,"The scheduler is the central component in the query engine that drives query\nexecution. Scheduling concerns the loading and evicting of in-memory partitions\nthat can answer queries concurrently, with the goal to achieve minimum partition\nthrashing."),(0,o.kt)("p",null,"Why does thrashing occur? Typical workloads in security analytics (especially\nwhen executing security content) exhibit a high rate of point queries. This\nresults in a large overlap of relevant partitions among a given set of queries.\nIn the most naive case of serial query execution, VAST would process all\npartitions sequentially, i.e., loading one from disk, run the query, evict it\nagain. If we have a total of P partitions and Q queries waiting in line to\nbe executed, we would perform P \u2a09 Q partition load and evict operations. In\npractice, each query only needs to access a subset of partitions. The catalog is\nthe component that determines the candidate set for a given query. For an\nincreasing number of queries, the overlap of partitions turns out to be large.\nThis is where scheduler benefit kicks in: by sorting the to-be-processed\npartitions by the number of queries outstanding queries that access them, we can\ncreate optimal I/O access patterns."),(0,o.kt)("h2",{id:"multi-instance-components"},"Multi-instance Components"),(0,o.kt)("p",null,"Multi-instance components exist at various place in the path of the data. They\noften operate stateless and implement pure (side-effect-free) functions. In case\nthey own state, there is no dependency to other state of the same instance. For\nexample, a component may operate on a single file, but the whole system operates\non many distributed files, each of which represented by a single instance."),(0,o.kt)("h3",{id:"loader"},"LOADER"),(0,o.kt)("admonition",{title:"Not Yet Implemented",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This component is not yet implemented. Until then, the ",(0,o.kt)("a",{parentName:"p",href:"#SOURCE"},"SOURCE"),"\nperforms both I/O and subsequent input parsing.")),(0,o.kt)("h3",{id:"source"},"SOURCE"),(0,o.kt)("p",null,"The source transforms a stream of framed bytes into Arrow record batches, and\nthen relays them to an active partition. A source actor wraps a pluggable\n",(0,o.kt)("em",{parentName:"p"},"reader")," for a given input format, e.g., JSON, CSV, or PCAP."),(0,o.kt)("h3",{id:"partition"},"PARTITION"),(0,o.kt)("p",null,"There two types of partitions, ",(0,o.kt)("em",{parentName:"p"},"active")," and ",(0,o.kt)("em",{parentName:"p"},"passive"),", that share the same actor\ninterface. The difference is that active partitions are mutable and in the\nprocess of being built, whereas passive partitions are immutable and only\nrespond to query operations."),(0,o.kt)("p",null,'The active partition takes as input a sequence of Arrow record batches until it\nis "full." There exists one partition instance per schema, so the stream of\nrecord batches gets demultiplexed over a set of actors. Each active partition\nkeeps writing record batches into its store until either a timeout fires or the\nstore reaches a configured size. The active partition then hands the ownership\nof the resulting partition the catalog and starts over with a new partition.'),(0,o.kt)("p",null,"In addition to translating the in-memory record batch representation into a\npersistent format, the active partition also builds indexes to accelerate\nqueries."),(0,o.kt)("h3",{id:"query"},"QUERY"),(0,o.kt)("p",null,'Every query a user submits has a corresponding query actor that tracks its\nexecution. The interface of the query actor allows for extracting results in a\npull-based fashion, e.g., users can ask "give me 100 more results".'),(0,o.kt)("h3",{id:"sink"},"SINK"),(0,o.kt)("p",null,"The sink transforms a stream of Arrow record batches into a sequence of bytes\nusing a pluggable ",(0,o.kt)("em",{parentName:"p"},"writer")," for a given output format, e.g., JSON, CSV, or PCAP."),(0,o.kt)("h3",{id:"dumper"},"DUMPER"),(0,o.kt)("admonition",{title:"Not Yet Implemented",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This component is not yet implemented. Until then, the ",(0,o.kt)("a",{parentName:"p",href:"#SINK"},"SINK"),"\nperforms both output formatting and subsequent I/O.")))}u.isMDXComponent=!0},94747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/components.dark-0e6ad7d4d296e5b9d1610f4a3f57ea62.png"},46252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/components.light-1fe3c88a90f783ccb9aee1b6a115d606.png"}}]);