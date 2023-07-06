"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>h,default:()=>O,frontMatter:()=>k,metadata:()=>f,toc:()=>y});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const k={},h="json",f={unversionedId:"formats/json",id:"formats/json",title:"json",description:"Reads and writes JSON.",source:"@site/docs/formats/json.md",sourceDirName:"formats",slug:"/formats/json",permalink:"/next/formats/json",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/formats/json.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"feather",permalink:"/next/formats/feather"},next:{title:"netflow",permalink:"/next/formats/netflow"}},N={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--schema=&lt;schema&gt;</code> (Parser)",id:"--schemaschema-parser",level:3},{value:"<code>--selector=&lt;field[:prefix]&gt;</code> (Parser)",id:"--selectorfieldprefix-parser",level:3},{value:"<code>--no-infer</code> (Parser)",id:"--no-infer-parser",level:3},{value:"<code>--unnest-separator=&lt;string&gt;</code> (Parser)",id:"--unnest-separatorstring-parser",level:3},{value:"<code>--ndjson</code> (Parser)",id:"--ndjson-parser",level:3},{value:"<code>--pretty</code> (Printer)",id:"--pretty-printer",level:3},{value:"<code>--omit-nulls</code> (Printer)",id:"--omit-nulls-printer",level:3},{value:"<code>--omit-empty-records</code> (Printer)",id:"--omit-empty-records-printer",level:3},{value:"<code>--omit-empty-lists</code> (Printer)",id:"--omit-empty-lists-printer",level:3},{value:"<code>--omit-empty</code> (Printer)",id:"--omit-empty-printer",level:3},{value:"Examples",id:"examples",level:2}],v={toc:y},g="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(g,c(d(d({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"json"}),"json"),(0,r.kt)("p",null,"Reads and writes JSON."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Parser:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"json [--schema=<schema>] [--selector=<field[:prefix]>] [--unnest-separator=<string>]\n     [--no-infer] [--ndjson]\n")),(0,r.kt)("p",null,"Printer:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"json [--pretty] [--omit-nulls] [--omit-empty-records] [--omit-empty-lists]\n     [--omit-empty]\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," format provides a parser and printer for JSON and ",(0,r.kt)("a",d({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"}),"line-delimited\nJSON")," objects."),(0,r.kt)("h3",d({},{id:"--schemaschema-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--schema=<schema>")," (Parser)"),(0,r.kt)("p",null,"Provide the name of a ",(0,r.kt)("a",d({parentName:"p"},{href:"/next/data-model/schemas"}),"schema")," to be used by the\nparser."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--schema")," option is incompatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector")," option."),(0,r.kt)("h3",d({},{id:"--selectorfieldprefix-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--selector=<field[:prefix]>")," (Parser)"),(0,r.kt)("p",null,"Designates a field value as schema name with an optional dot-separated prefix."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("a",d({parentName:"p"},{href:"/next/formats/suricata"}),"Suricata EVE JSON")," format includes a field\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," that contains the event type. Setting the selector to\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type:suricata")," causes an event with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," for the field\n",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," to map onto the schema ",(0,r.kt)("inlineCode",{parentName:"p"},"suricata.flow"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector")," option is incompatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--schema")," option."),(0,r.kt)("h3",d({},{id:"--no-infer-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--no-infer")," (Parser)"),(0,r.kt)("p",null,"The JSON parser automatically infers types in the input JSON."),(0,r.kt)("p",null,"The flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-infer")," toggles this behavior, and requires the user to provide an\ninput schema for the JSON to explicitly parse into, e.g., using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--selector"),"\noption."),(0,r.kt)("p",null,"Schema inference happens on a best-effort basis, and is constantly being\nimproved to match Tenzir's type system."),(0,r.kt)("h3",d({},{id:"--unnest-separatorstring-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--unnest-separator=<string>")," (Parser)"),(0,r.kt)("p",null,"A delimiter that, if present in keys, causes values to be treated as values of\nnested records."),(0,r.kt)("p",null,"A popular example of this is the ",(0,r.kt)("a",d({parentName:"p"},{href:"/next/formats/zeek-json"}),"Zeek JSON")," format. It includes\nthe fields ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"id.resp_p")," at the\ntop-level. The data is best modeled as an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," record with four nested fields\n",(0,r.kt)("inlineCode",{parentName:"p"},"orig_h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"orig_p"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_h"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"resp_p"),"."),(0,r.kt)("p",null,"Without an unnest separator, the data looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id.orig_h" : "1.1.1.1",\n  "id.orig_p" : 10,\n  "id.resp_h" : "1.1.1.2",\n  "id.resp_p" : 5\n}\n')),(0,r.kt)("p",null,"With the unnest separator set to ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", Tenzir reads the events like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "id" : {\n    "orig_h" : "1.1.1.1",\n    "orig_p" : 10,\n    "resp_h" : "1.1.1.2",\n    "resp_p" : 5\n  }\n}\n')),(0,r.kt)("h3",d({},{id:"--ndjson-parser"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--ndjson")," (Parser)"),(0,r.kt)("p",null,"Treat the input as newline-delimited JSON (NDJSON)."),(0,r.kt)("p",null,"NDJSON requires that exactly one event exists per line. This allows for better\nerror recovery in cases of malformed input, as unlike for the regular JSON\nparser malformed lines can be skipped."),(0,r.kt)("p",null,"Popular examples of NDJSON include the Suricat Eve JSON and the Zeek Streaming\nJSON formats. Tenzir supports ","[",(0,r.kt)("inlineCode",{parentName:"p"},"suricata"),"][suricata.md]"," and\n","[",(0,r.kt)("inlineCode",{parentName:"p"},"zeek-json"),"][zeek-json.md]"," parsers out of the box that utilize this mechanism."),(0,r.kt)("h3",d({},{id:"--pretty-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--pretty")," (Printer)"),(0,r.kt)("p",null,"Tenzir defaults to line-delimited JSON output (JSONL or NDJSON). The ",(0,r.kt)("inlineCode",{parentName:"p"},"--pretty"),"\nflag switches to a tree-structured representation."),(0,r.kt)("h3",d({},{id:"--omit-nulls-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-nulls")," (Printer)"),(0,r.kt)("p",null,"Strips ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," fields from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "a": null\n  "b": [42, null, 43],\n  "c": {\n    "d": null\n    "e": 42\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-nulls"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "b": 42,\n  "c": {\n    "e": 42\n  }\n}\n')),(0,r.kt)("h3",d({},{id:"--omit-empty-records-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-records")," (Printer)"),(0,r.kt)("p",null,"Strips empty records from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "w": null\n  "x": {},\n  "y": {\n    "z": {}\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-records"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "w": 42,\n}\n')),(0,r.kt)("h3",d({},{id:"--omit-empty-lists-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty-lists")," (Printer)"),(0,r.kt)("p",null,"Strips empty lists from the input."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "m": []\n  "n": {},\n  "o": {\n    "p": []\n  }\n}\n')),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-empty-lists"),", this example becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "m": {},\n  "o": {}\n}\n')),(0,r.kt)("h3",d({},{id:"--omit-empty-printer"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--omit-empty")," (Printer)"),(0,r.kt)("p",null,"This options combines all other ",(0,r.kt)("inlineCode",{parentName:"p"},"--omit-*")," options."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read JSON from stdin, either NDJSON or tree-structured:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"read json\n")),(0,r.kt)("p",null,"Write compact JSON without empty fields to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"write json --omit-empty to file /tmp/result.json\n")),(0,r.kt)("p",null,"Pretty-print JSON in tree-structured form to stdout:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"write json --pretty\n")))}O.isMDXComponent=!0}}]);