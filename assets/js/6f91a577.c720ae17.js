"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Pipelines",p={unversionedId:"understand/query-language/pipelines",id:"understand/query-language/pipelines",title:"Pipelines",description:"A pipeline is chain of operators that represents a dataflow. An",source:"@site/docs/understand/query-language/pipelines.md",sourceDirName:"understand/query-language",slug:"/understand/query-language/pipelines",permalink:"/docs/understand/query-language/pipelines",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/pipelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/docs/understand/query-language/expressions"},next:{title:"Operators",permalink:"/docs/understand/query-language/operators/"}},s={},l=[{value:"Define a pipeline",id:"define-a-pipeline",level:2},{value:"Launch pipelines dynamically (experimental)",id:"launch-pipelines-dynamically-experimental",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipelines"},"Pipelines"),(0,r.kt)("p",null,"A pipeline is chain of ",(0,r.kt)("a",{parentName:"p",href:"operators"},"operators")," that represents a dataflow. An\noperator consumes data, performs a transformation, and produces new data,\npossibly with a different schema. Think of it as UNIX pipes where output from\none command is input to the next."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Query Language",src:n(43231).Z+"#gh-light-mode-only",width:"1258",height:"260"}),"\n",(0,r.kt)("img",{alt:"Query Language",src:n(94919).Z+"#gh-dark-mode-only",width:"1258",height:"260"})),(0,r.kt)("p",null,"The basic idea is that a query consists of two connected pieces: a ",(0,r.kt)("em",{parentName:"p"},"dataset")," to\nrepresent a data source and a ",(0,r.kt)("em",{parentName:"p"},"pipeline")," as a squence of operators to process\nthe data."),(0,r.kt)("p",null,"To date, a VAST ",(0,r.kt)("a",{parentName:"p",href:"expressions"},"expression")," takes the role of a dataset and you\ncan only ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/transform"},"define a pipeline")," statically in the YAML\nconfiguration. Being able to execute pipeline as part of the query is our most\nrequested feature, and we are actively working on bringing this ability into the\nquery language."),(0,r.kt)("h2",{id:"define-a-pipeline"},"Define a pipeline"),(0,r.kt)("p",null,"Add a uniquely named pipeline under the key ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.pipelines")," in the\nconfiguration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  pipelines:\n     example: |\n       hash --salt="B3IwnumKPEJDAA4u" src_ip\n       | summarize \n           pkts_toserver=sum(flow.pkts_toserver),\n           pkts_toclient=sum(flow.pkts_toclient),\n           bytes_toserver=sum(flow.bytes_toserver),\n           bytes_toclient=sum(flow.bytes_toclient),\n           start=min(flow.start),\n           end=max(flow.end)\n         by\n           src_ip,\n           dest_ip\n')),(0,r.kt)("p",null,"The above ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," pipeline consists of two operators, ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize"),"\nthat execute in sequential order."),(0,r.kt)("p",null,"Please consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/use/transform"},"section on data transformation")," on\nwhere you can deploy pipelines today. Have a look at ",(0,r.kt)("a",{parentName:"p",href:"operators"},"all available\noperators")," to better understand what you can do with the data."),(0,r.kt)("h2",{id:"launch-pipelines-dynamically-experimental"},"Launch pipelines dynamically (experimental)"),(0,r.kt)("p",null,"As an alternative to configuration file-based pipelines, the ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"import")," commands support launching a dynamically defined pipeline. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"export")," command and the data loaded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," command will provide the\nrespective beginning datasets."),(0,r.kt)("p",null,"This dynamic pipeline is an optional string parameter, with operators chained\nby the ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," delimiter. This pipeline can be put after an expression so it will\nonly be applied to the resulting dataset of that expression. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"export json 'src_ip == 192.168.1.104 | select timestamp, flow_id, src_ip,\ndest_ip, src_port | drop timestamp'")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import suricata < data/suricata/eve.json 'src_ip==147.32.84.165 &&\n(src_port==1181 || src_prt == 138) | select timestamp, flow_id, src_ip,\ndest_ip, src_port'")),(0,r.kt)("p",null,"Have a look at ",(0,r.kt)("a",{parentName:"p",href:"operators"},"all available operators")," for more details about the\nrespective pipeline operator string syntax. Please note that this feature is\nexperimental and the syntax may be subject to change."))}c.isMDXComponent=!0},94919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-language.dark-d71a0a71db8879757bfdaa7391801103.png"},43231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-language.light-c276650944e817ebe2dd109bf555d744.png"}}]);