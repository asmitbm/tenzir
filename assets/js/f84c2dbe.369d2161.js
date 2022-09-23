"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3683],{23776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));n(61839);const o={},i="summarize",l={unversionedId:"understand/query-language/operators/summarize",id:"understand/query-language/operators/summarize",title:"summarize",description:"The summarize operator bundles input records according to a grouping",source:"@site/docs/understand/query-language/operators/summarize.md",sourceDirName:"understand/query-language/operators",slug:"/understand/query-language/operators/summarize",permalink:"/docs/understand/query-language/operators/summarize",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/operators/summarize.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"select",permalink:"/docs/understand/query-language/operators/select"},next:{title:"where",permalink:"/docs/understand/query-language/operators/where"}},s={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Grouping",id:"grouping",level:3},{value:"Time Resolution",id:"time-resolution",level:3},{value:"Aggregate Functions",id:"aggregate-functions",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summarize"},"summarize"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize")," operator bundles input records according to a grouping\nexpression and applies an aggregation function over each group."),(0,r.kt)("p",null,"The extent of a group depends on the pipeline input. For import and export\npipelines, a group comprises a single batch (configurable as\n",(0,r.kt)("inlineCode",{parentName:"p"},"vast.import.batch-size"),"). For compaction, a group comprises an entire partition\n(configurable as ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.max-partition-size"),")."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize")," operator has grouping and aggregation options. The general\nstructure looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"summarize:\n  group-by:\n    # inputs\n  time-resolution:\n    # bucketing for temporal grouping\n  aggregate:\n    # output \n")),(0,r.kt)("h3",{id:"grouping"},"Grouping"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"group-by")," option specifies a list of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/understand/query-language/expressions#extractors"},"extractors")," that\nshould form a group. VAST internally calculates the combined hash for all\nextractors for every row and puts the data into buckets for subsequent\naggregation."),(0,r.kt)("h3",{id:"time-resolution"},"Time Resolution"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"time-resolution")," option specifies an optional duration value that specifies\nthe tolerance when comparing time values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"group-by")," section. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"01:48")," is rounded down to ",(0,r.kt)("inlineCode",{parentName:"p"},"01:00")," when a 1-hour ",(0,r.kt)("inlineCode",{parentName:"p"},"time-resolution")," is used."),(0,r.kt)("h3",{id:"aggregate-functions"},"Aggregate Functions"),(0,r.kt)("p",null,"Aggregate functions compute a single value of one or more columns in a given\ngroup. Fields that neither occur in an aggregation function nor in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"group-by")," list are dropped from the output."),(0,r.kt)("p",null,"The following aggregation functions are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum"),": Computes the sum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min"),": Computes the minimum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max"),": Computes the maxiumum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any"),": Computes the disjunction (OR) of all grouped values. Requires the\nvalues to be booleans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),": Computes the conjunction (AND) of all grouped values. Requires the\nvalues to be booleans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distinct"),": Creates a sorted list of all unique grouped values that are not\nnil. If the values are lists, operates on the all values inside the lists\nrather than the lists themselves."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample"),": Takes the first of all grouped values that is not nil."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),": Counts all grouped values that are not nil.")),(0,r.kt)("p",null,"There exist three ways to configure an aggregation function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Long form: Specify a list of input extractors explicitly.\noutput_field_name:\n  aggregation_function:\n    - input_extractor_1\n    - ...\n    - input_extractor_n\n\n# Long form: Specify a single input extractor.\noutput_field_name:\n  aggregation_function: input_extractor\n\n# Short form: Input extractor equals output field name.\noutput_field_name: aggregation_function\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"summarize:\n  group-by:\n    - timestamp\n    - proto\n    - event_type\n  time-resolution: 1 hour\n  aggregate:\n    timestamp_min:\n      min: timestamp\n    timestamp_max:\n      max: timestamp\n    pkts_toserver: sum\n    pkts_toclient: sum\n    bytes_toserver: sum\n    bytes_toclient: sum\n    start: min\n    end: max\n    alerted: any\n    ips:\n      distinct:\n        - src_ip\n        - dest_ip\n")))}m.isMDXComponent=!0}}]);