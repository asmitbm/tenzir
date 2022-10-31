"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4388],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(n),s=l,N=u["".concat(d,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},686:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:0},i="Expressions",p={unversionedId:"understand/query-language/expressions",id:"understand/query-language/expressions",title:"Expressions",description:"VAST's expression language makes it easy to describe a relevant subset of",source:"@site/docs/understand/query-language/expressions.md",sourceDirName:"understand/query-language",slug:"/understand/query-language/expressions",permalink:"/docs/understand/query-language/expressions",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/expressions.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Query Language",permalink:"/docs/understand/query-language/"},next:{title:"Pipelines",permalink:"/docs/understand/query-language/pipelines"}},d={},m=[{value:"Connectives",id:"connectives",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Relational Operators",id:"relational-operators",level:3},{value:"Type Compatibility",id:"type-compatibility",level:3},{value:"Extractors",id:"extractors",level:3},{value:"Field Extractor",id:"field-extractor",level:4},{value:"Examples",id:"examples",level:5},{value:"Type Extractor",id:"type-extractor",level:4},{value:"Examples",id:"examples-1",level:5},{value:"Meta Extractor",id:"meta-extractor",level:4},{value:"Examples",id:"examples-2",level:5},{value:"Value Predicates",id:"value-predicates",level:3},{value:"Values",id:"values",level:2}],o={toc:m};function k(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"expressions"},"Expressions"),(0,l.kt)("p",null,'VAST\'s expression language makes it easy to describe a relevant subset of\ninterest over structured data. The "easy" part is that VAST expressions operate\non multiple different schemas at once, as opposed to traditional expressions\nthat apply to a single, fixed schema. The language captures this heterogeneity\nwith ',(0,l.kt)("a",{parentName:"p",href:"#extractors"},"extractors"),"."),(0,l.kt)("p",null,"An ",(0,l.kt)("em",{parentName:"p"},"expression")," is a function over an event that evaluates to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", indicating whether it qualifies as result. Expression operands are\neither sub-expressions or predicates, and can be composed via ",(0,l.kt)("em",{parentName:"p"},"conjunctions"),"\n(",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),"), ",(0,l.kt)("em",{parentName:"p"},"disjunctions")," (",(0,l.kt)("inlineCode",{parentName:"p"},"||"),"), and ",(0,l.kt)("em",{parentName:"p"},"negations")," (",(0,l.kt)("inlineCode",{parentName:"p"},"!"),")."),(0,l.kt)("p",null,"The following diagram shows an example expression in tree form:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Spectra",src:n(47092).Z+"#gh-light-mode-only",width:"1407",height:"916"}),"\n",(0,l.kt)("img",{alt:"Spectra",src:n(91389).Z+"#gh-dark-mode-only",width:"1407",height:"916"})),(0,l.kt)("p",null,"When written out, it looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"(dport <= 1024 || :addr in 10.0.0.0/8) && ! (#type == /zeek.*/)\n")),(0,l.kt)("p",null,"In this example, the predicate operands ",(0,l.kt)("inlineCode",{parentName:"p"},"dport"),", ",(0,l.kt)("inlineCode",{parentName:"p"},":addr"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"#type")," represent\n",(0,l.kt)("a",{parentName:"p",href:"#extractors"},"extractors")," that resolve to a set of matching fields at runtime."),(0,l.kt)("p",null,"Let's take a look at the expression components in more depth."),(0,l.kt)("h2",{id:"connectives"},"Connectives"),(0,l.kt)("p",null,"There exist three logical connectives that connect sub-expressions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&&"),": the logical AND between two expressions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"||"),": the logical OR between two expressions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!"),": the logical NOT of one expression")),(0,l.kt)("h2",{id:"predicates"},"Predicates"),(0,l.kt)("p",null,"A predicate has the form ",(0,l.kt)("inlineCode",{parentName:"p"},"LHS")," ",(0,l.kt)("inlineCode",{parentName:"p"},"op")," ",(0,l.kt)("inlineCode",{parentName:"p"},"RHS"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"LHS")," denotes the left-hand\nside operand and ",(0,l.kt)("inlineCode",{parentName:"p"},"RHS")," the right-hand side operand. The relational operator\n",(0,l.kt)("inlineCode",{parentName:"p"},"op")," is ",(0,l.kt)("a",{parentName:"p",href:"#type-compatibility"},"typed"),", i.e., only a subset of the cross product\nof operand types is valid."),(0,l.kt)("p",null,"An operand is either an ",(0,l.kt)("a",{parentName:"p",href:"#extractors"},"extractor")," or a ",(0,l.kt)("a",{parentName:"p",href:"#values"},"value"),". The\ntyping can often only inferred at runtime when schema information is available."),(0,l.kt)("h3",{id:"relational-operators"},"Relational Operators"),(0,l.kt)("p",null,"The following operators separate two operands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<"),": less than"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<="),": less equal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">="),": greater equal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"=="),": equal to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!="),": not equal to"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"in"),": in  ",(0,l.kt)("em",{parentName:"li"},"(left to right)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!in"),": not in ",(0,l.kt)("em",{parentName:"li"},"(left to right)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ni"),": in ",(0,l.kt)("em",{parentName:"li"},"(right to left)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!ni"),": not in ",(0,l.kt)("em",{parentName:"li"},"(right to left)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~"),": match"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!~"),": not match")),(0,l.kt)("h3",{id:"type-compatibility"},"Type Compatibility"),(0,l.kt)("p",null,"The table below illustrates a partial function over the cross product of\navailable types. Each letter in a cell denotes a set of operators:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"E"),": equality operators ",(0,l.kt)("inlineCode",{parentName:"li"},"=="),", ",(0,l.kt)("inlineCode",{parentName:"li"},"!=")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"R"),": range operators ",(0,l.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"li"},">="),", ",(0,l.kt)("inlineCode",{parentName:"li"},">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"M"),": membership operators ",(0,l.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"!in"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ni"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"!ni"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Bool")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Integer")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Count")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Real")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Duration")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Time")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"String")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Pattern")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Address")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Subnet")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Enum")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"List")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Map")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Bool")),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Count")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Real")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Duration")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Time")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ER"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Pattern")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Address")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Subnet")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Enum")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"List")),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"EM"),(0,l.kt)("td",{parentName:"tr",align:null},"M")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"EM")))),(0,l.kt)("h3",{id:"extractors"},"Extractors"),(0,l.kt)("p",null,"An ",(0,l.kt)("em",{parentName:"p"},"extractor")," retrieves a certain aspect of an event. When looking up an\nexpression, VAST ",(0,l.kt)("em",{parentName:"p"},"binds")," the extractor to a specific record field, i.e., maps it\nto the corresponding numeric column offset in the schema. ",(0,l.kt)("strong",{parentName:"p"},"Binding an expression\nimplicitly creates a disjunction of all matching fields."),' We find that this\nexistential qualification is the natural user experience when "extracting" data\ndeclaratively.'),(0,l.kt)("p",null,"VAST has the following extractor types:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#field-extractor"},"Field"),": extracts all fields whose name match a given\nrecord field name.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#type-extractor"},"Type"),": extracts all event types that have a field of a\ngiven type.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#meta-extractor"},"Meta"),": matches on the type name or field name of a layout\ninstead of the values contained in actual events."))),(0,l.kt)("h4",{id:"field-extractor"},"Field Extractor"),(0,l.kt)("p",null,"Field extractors have the form ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"x.y.z")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," match on\nrecord field names. The access fields in nested records. Using a type name as\nleftmost element before a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is also possible."),(0,l.kt)("p",null,"A field extractor has ",(0,l.kt)("em",{parentName:"p"},"suffix")," semantics. It is possible to just write ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," to\naccess ",(0,l.kt)("inlineCode",{parentName:"p"},"x.y.z"),". In fact, writing ",(0,l.kt)("inlineCode",{parentName:"p"},"z")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"*.z")," and creates a\ndisjunction of all fields ending in ",(0,l.kt)("inlineCode",{parentName:"p"},"z"),"."),(0,l.kt)("h5",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ts > 1 day ago"),": events with a record field ",(0,l.kt)("inlineCode",{parentName:"li"},"ts")," from the last 24h hours"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zeek.conn.id.orig_h in 192.168.0.0/24"),": connections with source IP in\n192.168.0.0/24"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"orig_bytes >= 10Ki"),": events with a field ",(0,l.kt)("inlineCode",{parentName:"li"},"orig_bytes")," greater or equal to\n10 * 2^10.")),(0,l.kt)("h4",{id:"type-extractor"},"Type Extractor"),(0,l.kt)("p",null,"Type extractors have the form ",(0,l.kt)("inlineCode",{parentName:"p"},":T")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," is the type of a field. Type\nextractors work for all ",(0,l.kt)("a",{parentName:"p",href:"/docs/understand/data-model/type-system"},"basic\ntypes")," and user-defined aliases."),(0,l.kt)("p",null,"A search for type ",(0,l.kt)("inlineCode",{parentName:"p"},":T")," includes all aliased types. For example, given the alias\n",(0,l.kt)("inlineCode",{parentName:"p"},"port")," that maps to ",(0,l.kt)("inlineCode",{parentName:"p"},"count"),", then the ",(0,l.kt)("inlineCode",{parentName:"p"},":count")," type extractor will also consider\ninstances of type ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),". However, a ",(0,l.kt)("inlineCode",{parentName:"p"},":port")," query does not include ",(0,l.kt)("inlineCode",{parentName:"p"},":count"),"\ntypes because an alias is a strict refinement of an existing type."),(0,l.kt)("h5",{id:"examples-1"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":timestamp > 1 hour ago"),": events with a ",(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," alias in the last hour"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":addr == 6.6.6.6"),": events with any field of type ",(0,l.kt)("inlineCode",{parentName:"li"},"addr")," equal to 6.6.6.6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":count > 42M"),": events where ",(0,l.kt)("inlineCode",{parentName:"li"},"count")," values is greater than 42M"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"evil" in :string'),": events where any ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," field contains the substring\n",(0,l.kt)("inlineCode",{parentName:"li"},"evil"))),(0,l.kt)("h4",{id:"meta-extractor"},"Meta Extractor"),(0,l.kt)("p",null,"Meta extractors have the forms ",(0,l.kt)("inlineCode",{parentName:"p"},"#E")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"E")," is from the fixed set of tokens\n",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"field"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"import_time"),". They work on the event metadata (e.g., their\nschema) instead of the value domain."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#type"),": on the event name in a schema"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#field"),": matches on the field names of a record"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#import_time"),": matches on the ingestion time when event arrived at the server")),(0,l.kt)("h5",{id:"examples-2"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'#type == "zeek.conn"'),": events of type ",(0,l.kt)("inlineCode",{parentName:"li"},"zeek.conn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"suricata" in #type'),": events that have ",(0,l.kt)("inlineCode",{parentName:"li"},"suricata")," in their type name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'#field == "community_id"'),": events that have a field with name ",(0,l.kt)("inlineCode",{parentName:"li"},"community_id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#import_time > 1 hour ago"),": events that have been imported within the last\nhour")),(0,l.kt)("h3",{id:"value-predicates"},"Value Predicates"),(0,l.kt)("p",null,"Predicates with type extractors and equality operators can be written tersely\nas ",(0,l.kt)("strong",{parentName:"p"},"value predicates"),". That is, if a predicate has the form ",(0,l.kt)("inlineCode",{parentName:"p"},":T == X")," where\n",(0,l.kt)("inlineCode",{parentName:"p"},"X")," is a value and ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," the type of ",(0,l.kt)("inlineCode",{parentName:"p"},"X"),", it suffices to write ",(0,l.kt)("inlineCode",{parentName:"p"},"X"),".\nThe predicate parser deduces the type of ",(0,l.kt)("inlineCode",{parentName:"p"},"X")," automatically in this case."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"6.6.6.6")," is a valid predicate and expands to ",(0,l.kt)("inlineCode",{parentName:"p"},":addr == 6.6.6.6"),".\nThis allows for quick type-based point queries, such as\n",(0,l.kt)("inlineCode",{parentName:"p"},'(6.6.6.6 || 80/tcp) && "evil"'),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Value predicates of type ",(0,l.kt)("inlineCode",{parentName:"p"},"subnet")," expand more broadly. Given a subnet\n",(0,l.kt)("inlineCode",{parentName:"p"},"10.0.0.0/8"),", the parser expands this to:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},":subnet == 10.0.0.0/8 || :addr in 10.0.0.0/8\n")),(0,l.kt)("p",{parentName:"admonition"},"This makes it easier to search for IP addresses belonging to a specific subnet.")),(0,l.kt)("h2",{id:"values"},"Values"),(0,l.kt)("p",null,"Every ",(0,l.kt)("a",{parentName:"p",href:"/docs/understand/data-model/type-system"},"type")," has a corresponding\nvalue syntax in the expression language."),(0,l.kt)("p",null,"Here is an over view of basic types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Identifier"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"none")),(0,l.kt)("td",{parentName:"tr",align:null},"Denotes an absent or invalid value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"nil"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"F"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"A 64-bit signed integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-42"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"+3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:null},"A 64-bit unsigned integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"42"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"real")),(0,l.kt)("td",{parentName:"tr",align:null},"A 64-bit double (IEEE 754)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-0.7"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1.337"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"duration")),(0,l.kt)("td",{parentName:"tr",align:null},"A time span (nanosecond granularity)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-3us"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"24h"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time")),(0,l.kt)("td",{parentName:"tr",align:null},"A time point (nanosecond granularity)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"now"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1h ago"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2020-01-01+10:42:00"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A sequence of characters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"foo"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:null},"A regular expression"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/fo*.bar$/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addr")),(0,l.kt)("td",{parentName:"tr",align:null},"An IPv4 or IPv6 address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"::1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"10.0.0.1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2001:db8::"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"subnet")),(0,l.kt)("td",{parentName:"tr",align:null},"An IPv4 or IPv6 subnet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"::1/128"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"10.0.0.0/8"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2001:db8::/32"))))),(0,l.kt)("p",null,"Complex types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Identifier"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Data"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"An ordered sequence of values where each element has type ",(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[1, 2, 3]"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"map")),(0,l.kt)("td",{parentName:"tr",align:null},"An associate array which maps keys to values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{x -> a, y -> b, z -> c}"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"record")),(0,l.kt)("td",{parentName:"tr",align:null},"a product type with one or more named fields"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<x: a, y: b, z: c>"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"<a, b, c>"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"<>"))))))}k.isMDXComponent=!0},91389:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/expressions.dark-c1e4c6415600b2159d14b84beb1c70c1.png"},47092:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/expressions.light-fa79620f3103d8d18a44ab17e1cdb09a.png"}}]);