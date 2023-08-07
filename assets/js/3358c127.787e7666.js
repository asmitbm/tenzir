"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),v=i,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=v;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},84116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,s(t)),v=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={},m="serve",b={unversionedId:"operators/sinks/serve",id:"version-Tenzir v4.0/operators/sinks/serve",title:"serve",description:"Make events available under the [/serve REST API",source:"@site/versioned_docs/version-Tenzir v4.0/operators/sinks/serve.md",sourceDirName:"operators/sinks",slug:"/operators/sinks/serve",permalink:"/operators/sinks/serve",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/operators/sinks/serve.md",tags:[],version:"Tenzir v4.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"save",permalink:"/operators/sinks/save"},next:{title:"to",permalink:"/operators/sinks/to"}},k={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--buffer-size &lt;buffer-size&gt;</code>",id:"--buffer-size-buffer-size",level:3},{value:"<code>&lt;serve-id&gt;</code>",id:"serve-id",level:3},{value:"Examples",id:"examples",level:2}],y={toc:h},g="wrapper";function O(e){var t=e,{components:r}=t,i=v(t,["components"]);return(0,n.kt)(g,d(u(u({},y),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"serve"}),"serve"),(0,n.kt)("p",null,"Make events available under the ",(0,n.kt)("a",u({parentName:"p"},{href:"/api#/paths/~1serve/post"}),(0,n.kt)("inlineCode",{parentName:"a"},"/serve")," REST API\nendpoint"),"."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"serve [--buffer-size <buffer-size>] <serve-id>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"serve")," operator bridges between pipelines and the corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"/serve"),"\nREST API endpoint."),(0,n.kt)("p",null,"Pipelines ending with the ",(0,n.kt)("inlineCode",{parentName:"p"},"serve")," operator exit when all events have been\ndelivered over the corresponding endpoint."),(0,n.kt)("h3",u({},{id:"--buffer-size-buffer-size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--buffer-size <buffer-size>")),(0,n.kt)("p",null,"The buffer size specifies the maximum number of events to keep in the ",(0,n.kt)("inlineCode",{parentName:"p"},"serve"),"\noperator to make them instantly available in the corresponding endpoint before\nthrottling the pipeline execution."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"64Ki"),"."),(0,n.kt)("h3",u({},{id:"serve-id"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<serve-id>")),(0,n.kt)("p",null,"The serve id is an identifier that uniquely identifies the operator. The ",(0,n.kt)("inlineCode",{parentName:"p"},"serve"),"\noperator errors when receiving a duplicate serve id."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Zeek conn.log, 100 events at a time:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"tenzir 'from file path/to/conn.log read zeek-tsv | serve zeek-conn-logs'\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'curl \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{"serve_id": "zeek-conn-logs", "continuation_token": null, "timeout": "1s", "max_events": 100}\' \\\n  http://localhost:5160/api/v0/serve\n')),(0,n.kt)("p",null,"This will return up to 100 events, or less if the specified timeout of 1 second\nexpired."),(0,n.kt)("p",null,"Subsequent results for further events must specify a continuation token. The\ntoken is included in the response under ",(0,n.kt)("inlineCode",{parentName:"p"},"next_continuation_token")," if there are\nfurther events to be retrieved from the endpoint."))}O.isMDXComponent=!0}}]);