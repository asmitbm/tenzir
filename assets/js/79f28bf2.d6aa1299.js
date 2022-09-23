"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8882],{34424:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(83117),t=(n(67294),n(3905));n(61839);const s={},o="rename",i={unversionedId:"understand/query-language/operators/rename",id:"understand/query-language/operators/rename",title:"rename",description:"Renames schemas and fields according to a configured mapping.",source:"@site/docs/understand/query-language/operators/rename.md",sourceDirName:"understand/query-language/operators",slug:"/understand/query-language/operators/rename",permalink:"/docs/understand/query-language/operators/rename",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/operators/rename.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"identity",permalink:"/docs/understand/query-language/operators/identiy"},next:{title:"extend",permalink:"/docs/understand/query-language/operators/replace"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:l};function u(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"rename"},"rename"),(0,t.kt)("p",null,"Renames schemas and fields according to a configured mapping."),(0,t.kt)("h2",{id:"parameters"},"Parameters"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"schemas: <list>"),": a list of records containing the fields ",(0,t.kt)("inlineCode",{parentName:"li"},"from"),", and ",(0,t.kt)("inlineCode",{parentName:"li"},"to"),"\ncontaining the old and new schema names respectively."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"fields: <list>"),": a list of records containing the fields ",(0,t.kt)("inlineCode",{parentName:"li"},"from"),", and ",(0,t.kt)("inlineCode",{parentName:"li"},"to"),"\ncontaining the old and new field names respectively.")),(0,t.kt)("h2",{id:"example"},"Example"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"rename:\n  schemas:\n    - from: suricata.flow\n      to: suricata.renamed-flow\n  fields:\n    - from: src_port\n      to: source_port\n    - from: src_ip\n      to: source_address\n")))}u.isMDXComponent=!0}}]);