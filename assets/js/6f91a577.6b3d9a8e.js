"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={sidebar_position:1},o="Pipelines",p={unversionedId:"understand/query-language/pipelines",id:"understand/query-language/pipelines",title:"Pipelines",description:"A pipeline is chain of operators that represents a dataflow. An",source:"@site/docs/understand/query-language/pipelines.md",sourceDirName:"understand/query-language",slug:"/understand/query-language/pipelines",permalink:"/docs/understand/query-language/pipelines",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/query-language/pipelines.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Expressions",permalink:"/docs/understand/query-language/expressions"},next:{title:"Operators",permalink:"/docs/understand/query-language/operators/"}},s={},l=[{value:"Define a pipeline",id:"define-a-pipeline",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pipelines"},"Pipelines"),(0,a.kt)("p",null,"A pipeline is chain of ",(0,a.kt)("a",{parentName:"p",href:"operators"},"operators")," that represents a dataflow. An\noperator consumes data, performs a transformation, and produces new data,\npossibly with a different schema. Think of it as UNIX pipes where output from\none command is input to the next."),(0,a.kt)("h2",{id:"define-a-pipeline"},"Define a pipeline"),(0,a.kt)("p",null,"Add a uniquely named pipeline under the key ",(0,a.kt)("inlineCode",{parentName:"p"},"vast.pipelines")," in the\nconfiguration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'vast:\n  pipelines:\n     example:\n       - hash:\n           field: src_ip\n           out: pseudonym\n           salt: "B3IwnumKPEJDAA4u"\n       - summarize:\n           group-by:\n             - src_ip\n             - dest_ip\n           aggregate:\n             flow.pkts_toserver: sum\n             flow.pkts_toclient: sum\n             flow.bytes_toserver: sum\n             flow.bytes_toclient: sum\n             flow.start: min\n             flow.end: max\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," pipeline consists of two operators, ",(0,a.kt)("inlineCode",{parentName:"p"},"hash")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"summarize"),"\nthat execute in sequential order."))}c.isMDXComponent=!0}}]);