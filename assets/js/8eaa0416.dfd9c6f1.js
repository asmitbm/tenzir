"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68078],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>y,frontMatter:()=>k,metadata:()=>h,toc:()=>f});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))m.call(t,a)&&s(e,a,t[a]);return e},c=(e,t)=>i(e,l(t)),u=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const k={},g="sigma",h={unversionedId:"operators/transformations/sigma",id:"version-Tenzir v4.5/operators/transformations/sigma",title:"sigma",description:"Filter the input with Sigma rules and output matching events.",source:"@site/versioned_docs/version-Tenzir v4.5/operators/transformations/sigma.md",sourceDirName:"operators/transformations",slug:"/operators/transformations/sigma",permalink:"/operators/transformations/sigma",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.5/operators/transformations/sigma.md",tags:[],version:"Tenzir v4.5",frontMatter:{},sidebar:"docsSidebar",previous:{title:"shell",permalink:"/operators/transformations/shell"},next:{title:"sort",permalink:"/operators/transformations/sort"}},N={},f=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;rule.yaml&gt;</code>",id:"ruleyaml",level:3},{value:"<code>&lt;directory&gt;</code>",id:"directory",level:3},{value:"<code>--refresh-interval &lt;refresh-interval&gt;</code>",id:"--refresh-interval-refresh-interval",level:3},{value:"Examples",id:"examples",level:2}],b={toc:f},v="wrapper";function y(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(v,c(d(d({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"sigma"}),"sigma"),(0,n.kt)("p",null,"Filter the input with ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma rules")," and output matching events."),(0,n.kt)("admonition",d({},{title:"Experimental",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"This operator is experimental and subject to change without notice, even in\nminor or patch releases.")),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sigma <rule> [--refresh-interval <refresh-interval>]\nsigma <directory> [--refresh-interval <refresh-interval>]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma")," operator executes ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma rules")," on\nits input. If a rule matches, the operator emits a ",(0,n.kt)("inlineCode",{parentName:"p"},"tenzir.sigma")," event that\nwraps the input record into a new record along with the matching rule. The\noperator discards all events that do not match the provided rules."),(0,n.kt)("p",null,"For each rule, the operator transpiles the YAML into an\n",(0,n.kt)("a",d({parentName:"p"},{href:"/language/expressions"}),"expression")," and instantiates a\n",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/transformations/where"}),(0,n.kt)("inlineCode",{parentName:"a"},"where"))," operator, followed by ",(0,n.kt)("a",d({parentName:"p"},{href:"/operators/transformations/put"}),(0,n.kt)("inlineCode",{parentName:"a"},"put"))," to generate an output.\nHere's how the transpilation works. The Sigma rule YAML format requires a\n",(0,n.kt)("inlineCode",{parentName:"p"},"detection")," attribute that includes a map of named sub-expression called ",(0,n.kt)("em",{parentName:"p"},"search\nidentifiers"),". In addition, ",(0,n.kt)("inlineCode",{parentName:"p"},"detection")," must include a final ",(0,n.kt)("inlineCode",{parentName:"p"},"condition")," that\ncombines search identifiers using boolean algebra (AND, OR, and NOT) or\nsyntactic sugar to reference groups of search expressions, e.g., using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"1/all of *")," or plain wildcard syntax. Consider the following ",(0,n.kt)("inlineCode",{parentName:"p"},"detection"),"\nembedded in a rule:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'detection:\n  foo:\n    a: 42\n    b: "evil"\n  bar:\n    c: 1.2.3.4\n  condition: foo or not bar\n')),(0,n.kt)("p",null,"We translate this rule piece by building a symbol table of all keys (",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),"). Each sub-expression is a valid expression in itself:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"foo"),": ",(0,n.kt)("inlineCode",{parentName:"li"},'a == 42 && b == "evil"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"bar"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"c == 1.2.3.4"))),(0,n.kt)("p",null,"Finally, we combine the expression according to ",(0,n.kt)("inlineCode",{parentName:"p"},"condition"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-c"}),'(a == 42 && b == "evil") || ! (c == 1.2.3.4)\n')),(0,n.kt)("p",null,"We parse the YAML string values according to Tenzir's richer data model, e.g.,\nthe expression ",(0,n.kt)("inlineCode",{parentName:"p"},"c: 1.2.3.4")," becomes a field named ",(0,n.kt)("inlineCode",{parentName:"p"},"c")," and value ",(0,n.kt)("inlineCode",{parentName:"p"},"1.2.3.4")," of\ntype ",(0,n.kt)("inlineCode",{parentName:"p"},"ip"),", rather than a ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),". Sigma also comes with its own ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma-specification/blob/main/Taxonomy_specification.md"}),"event\ntaxonomy"),"\nto standardize field names. The ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma")," operator currently does not normalize\nfields according to this taxonomy but rather takes the field names verbatim from\nthe search identifier."),(0,n.kt)("p",null,"Sigma uses ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma-specification/blob/main/Sigma_specification.md#value-modifiers"}),"value\nmodifiers"),"\nto select a concrete relational operator for given search predicate. Without a\nmodifier, Sigma uses equality comparison (",(0,n.kt)("inlineCode",{parentName:"p"},"=="),") of field and value. For example,\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"contains")," modifier changes the relational operator to substring search, and\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"re")," modifier switches to a regular expression match. The table below shows\nwhat modifiers the ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma")," operator supports, where \u2705 means implemented, \ud83d\udea7 not\nyet implemented but possible, and \u274c not yet supported:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Modifier"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Use"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"sigmac"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Tenzir"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"contains")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"perform a substring search with the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"startswith")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"match the value as a prefix"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"endswith")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"match the value as a suffix"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"base64")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"encode the value with Base64"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"base64offset")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"encode value as all three possible Base64 variants"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16le"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"wide")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16 little endian"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16be")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16 big endian"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"re")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"interpret the value as regular expression"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cidr")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"interpret the value as a IP CIDR"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"all")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"changes the expression logic from OR to AND"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"lt")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare less than (",(0,n.kt)("inlineCode",{parentName:"td"},"<"),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"lte")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare less than or equal to (",(0,n.kt)("inlineCode",{parentName:"td"},"<="),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"gt")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare greater than (",(0,n.kt)("inlineCode",{parentName:"td"},">"),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"gte")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare greater than or equal to (",(0,n.kt)("inlineCode",{parentName:"td"},">="),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"expand")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"expand value to placeholder strings, e.g., ",(0,n.kt)("inlineCode",{parentName:"td"},"%something%")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c")))),(0,n.kt)("h3",d({},{id:"ruleyaml"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<rule.yaml>")),(0,n.kt)("p",null,"The rule to match."),(0,n.kt)("p",null,"This invocation transpiles ",(0,n.kt)("inlineCode",{parentName:"p"},"rule.yaml")," at the time of pipeline creation."),(0,n.kt)("h3",d({},{id:"directory"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<directory>")),(0,n.kt)("p",null,"The directory to watch."),(0,n.kt)("p",null,"This invocation watches a directory and attempts to parse each contained file as\na Sigma rule. The ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma")," operator matches if ",(0,n.kt)("em",{parentName:"p"},"any")," of the contained rules\nmatch, effectively creating a disjunction of all rules inside the directory."),(0,n.kt)("h3",d({},{id:"--refresh-interval-refresh-interval"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--refresh-interval <refresh-interval>")),(0,n.kt)("p",null,"How often the Sigma operator looks at the specified rule or directory of rules\nto update its internal state."),(0,n.kt)("p",null,"Defaults to 5 seconds."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Apply a Sigma rule to an EVTX file using\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/omerbenamram/evtx"}),(0,n.kt)("inlineCode",{parentName:"a"},"evtx_dump")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"evtx_dump -o jsonl file.evtx | tenzir 'read json | sigma rule.yaml'\n")),(0,n.kt)("p",null,"Apply a Sigma rule over historical data in a node from the last day:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | where :timestamp > 1 day ago | sigma rule.yaml\n")),(0,n.kt)("p",null,"Watch a directory of Sigma rules and apply all of them on a continuous stream of\nSuricata events:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from file --follow read suricata | sigma /tmp/rules/\n")),(0,n.kt)("p",null,"When you add a new file to ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp/rules"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma")," operator transpiles it and\nwill match it on all subsequent inputs."))}y.isMDXComponent=!0}}]);