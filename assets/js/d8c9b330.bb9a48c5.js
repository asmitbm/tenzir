"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{format:{parser:!0}}},h="grok",k={unversionedId:"formats/grok",id:"formats/grok",title:"grok",description:"Parses a string using a grok-pattern, backed by regular expressions.",source:"@site/docs/formats/grok.md",sourceDirName:"formats",slug:"/formats/grok",permalink:"/next/formats/grok",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/grok.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{format:{parser:!0}}},sidebar:"docsSidebar",previous:{title:"feather",permalink:"/next/formats/feather"},next:{title:"json",permalink:"/next/formats/json"}},g={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;input_pattern&gt;</code>",id:"input_pattern",level:3},{value:"<code>--raw</code>",id:"--raw",level:3},{value:"<code>--include-unnamed</code>",id:"--include-unnamed",level:3},{value:"<code>--indexed-captures</code>",id:"--indexed-captures",level:3},{value:"<code>--pattern-definitions &lt;additional_patterns&gt;</code>",id:"--pattern-definitions-additional_patterns",level:3},{value:"Examples",id:"examples",level:2}],y={toc:b},N="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,u(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"grok"}),(0,r.kt)("inlineCode",{parentName:"h1"},"grok")),(0,r.kt)("p",null,"Parses a string using a ",(0,r.kt)("inlineCode",{parentName:"p"},"grok"),"-pattern, backed by regular expressions."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"grok [--raw] [--include-unnamed] [--indexed-captures]\n     [--pattern-definitions <additional_patterns>]\n     <input_pattern>\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"grok")," uses a regular expression based parser similar to the\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html"}),"Logstash ",(0,r.kt)("inlineCode",{parentName:"a"},"grok")," plugin"),"\nin Elasticsearch. Tenzir ships with the same built-in patterns as Elasticsearch,\nfound ",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/logstash-plugins/logstash-patterns-core/tree/main/patterns/ecs-v1"}),"here"),"."),(0,r.kt)("p",null,"In short, ",(0,r.kt)("inlineCode",{parentName:"p"},"<input_pattern>")," consists of replacement fields, that look like\n",(0,r.kt)("inlineCode",{parentName:"p"},"%{SYNTAX[:SEMANTIC[:CONVERSION]]}"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"SYNTAX")," is a reference to a pattern,\neither built-in or user-defined through ",(0,r.kt)("inlineCode",{parentName:"p"},"--pattern-defintions"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"SEMANTIC")," is an identifier that names the field in the parsed record.\n",(0,r.kt)("inlineCode",{parentName:"p"},"CONVERSION")," is either ",(0,r.kt)("inlineCode",{parentName:"p"},"infer")," (default), ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," (default with ",(0,r.kt)("inlineCode",{parentName:"p"},"--raw"),"),\n",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,r.kt)("p",null,"The supported regular expression syntax is the only supported by\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.boost.org/doc/libs/1_81_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html"}),"Boost.Regex"),",\nwhich is effectively Perl-compatible."),(0,r.kt)("h3",c({},{id:"input_pattern"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<input_pattern>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"grok")," pattern used for matching. Must match the input in its entirety."),(0,r.kt)("h3",c({},{id:"--raw"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--raw")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"grok")," attempts to do type inference to the parsed fields.\nThis behavior can be accessed explicitly by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONVERSION")," option\nin a replacement field to ",(0,r.kt)("inlineCode",{parentName:"p"},"infer"),"."),(0,r.kt)("p",null,"To disable type inference, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--raw"),"."),(0,r.kt)("h3",c({},{id:"--include-unnamed"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--include-unnamed")),(0,r.kt)("p",null,"By default, only fields that were given a name with ",(0,r.kt)("inlineCode",{parentName:"p"},"SEMANTIC"),", or with\nthe regular expression named capture syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"(?<name>...)")," are included\nin the resulting record."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--include-unnamed"),", replacement fields without a ",(0,r.kt)("inlineCode",{parentName:"p"},"SEMANTIC")," are included\nin the output, using their ",(0,r.kt)("inlineCode",{parentName:"p"},"SYNTAX")," value as the record field name."),(0,r.kt)("h3",c({},{id:"--indexed-captures"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--indexed-captures")),(0,r.kt)("p",null,"All subexpression captures are included in the output, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SEMANTIC")," used\nas the field name if possible, and the capture index otherwise."),(0,r.kt)("h3",c({},{id:"--pattern-definitions-additional_patterns"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--pattern-definitions <additional_patterns>")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<additional_patterns>")," can contain a user-defined newline-delimited list\nof patterns, where a line starts with the pattern name, followed by a space,\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"grok"),"-pattern for that pattern. For example, the built-in pattern\n",(0,r.kt)("inlineCode",{parentName:"p"},"INT")," is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"INT (?:[+-]?(?:[0-9]+))\n")),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Parse a fictional HTTP request log:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'# Example input:\n# 55.3.244.1 GET /index.html 15824 0.043\ngrok "%{IP:client} %{WORD:method} %{URIPATHPARAM:request} %{NUMBER:bytes} %{NUMBER:duration}\n')))}v.isMDXComponent=!0}}]);