"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={description:"Open source NSM and IDS/IPS"},i="Suricata",s={unversionedId:"understand/formats/suricata",id:"understand/formats/suricata",title:"Suricata",description:"Open source NSM and IDS/IPS",source:"@site/docs/understand/formats/suricata.md",sourceDirName:"understand/formats",slug:"/understand/formats/suricata",permalink:"/docs/understand/formats/suricata",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/formats/suricata.md",tags:[],version:"current",frontMatter:{description:"Open source NSM and IDS/IPS"},sidebar:"docsSidebar",previous:{title:"PCAP",permalink:"/docs/understand/formats/pcap"},next:{title:"Zeek",permalink:"/docs/understand/formats/zeek"}},p={},c=[{value:"Input",id:"input",level:2},{value:"Ingest from a UNIX domain socket",id:"ingest-from-a-unix-domain-socket",level:3}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"suricata"},"Suricata"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://suricata.io"},"Suricata")," network security monitor converts network\ntraffic into a stream of metadata events and provides a rule matching engine to\ngenerate alerts."),(0,a.kt)("p",null,"Suricata emits events in the ",(0,a.kt)("a",{parentName:"p",href:"https://suricata.readthedocs.io/en/latest/output/eve/eve-json-output.html"},"EVE JSON")," format, which is ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_streaming#Line-delimited_JSON"},"line-delimited\nJSON"),"\naccording to a fixed schema. The output is a single stream of events where the\n",(0,a.kt)("inlineCode",{parentName:"p"},"event_type")," field disambiguates the event type."),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"import suricata")," command format consumes EVE JSON logs. The command\ndemultiplexes the JSON stream according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"event_type")," field."),(0,a.kt)("p",null,"Here's an ",(0,a.kt)("inlineCode",{parentName:"p"},"eve.log")," sample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2011-08-12T14:52:57.716360+0200","flow_id":1031464864740687,"pcap_cnt":83,"event_type":"alert","src_ip":"147.32.84.165","src_port":1181,"dest_ip":"78.40.125.4","dest_port":6667,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2017318,"rev":4,"signature":"ET CURRENT_EVENTS SUSPICIOUS IRC - PRIVMSG *.(exe|tar|tgz|zip)  download command","category":"Potentially Bad Traffic","severity":2},"flow":{"pkts_toserver":27,"pkts_toclient":35,"bytes_toserver":2302,"bytes_toclient":4520,"start":"2011-08-12T14:47:24.357711+0200"},"payload":"UFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K","payload_printable":"PRIVMSG #zarasa48 : smss.exe (368)\\r\\n","stream":0,"packet":"AB5J2xnDCAAntbcZCABFAABMGV5AAIAGLlyTIFSlTih9BASdGgvw0QvAxUWHdVAY+rCL4gAAUFJJVk1TRyAjemFyYXNhNDggOiBzbXNzLmV4ZSAoMzY4KQ0K","packet_info":{"linktype":1}}\n{"timestamp":"2011-08-12T14:55:22.154618+0200","flow_id":2247896271051770,"pcap_cnt":775,"event_type":"dns","src_ip":"147.32.84.165","src_port":1141,"dest_ip":"147.32.80.9","dest_port":53,"proto":"UDP","dns":{"type":"query","id":553,"rrname":"irc.freenode.net","rrtype":"A","tx_id":0}}\n{"timestamp":"2011-08-12T16:59:22.181050+0200","flow_id":472067367468746,"pcap_cnt":25767,"event_type":"fileinfo","src_ip":"74.207.254.18","src_port":80,"dest_ip":"147.32.84.165","dest_port":1046,"proto":"TCP","http":{"hostname":"www.nmap.org","url":"/","http_user_agent":"Mozilla/4.0 (compatible)","http_content_type":"text/html","http_method":"GET","protocol":"HTTP/1.1","status":301,"redirect":"http://nmap.org/","length":301},"app_proto":"http","fileinfo":{"filename":"/","magic":"HTML document, ASCII text","gaps":false,"state":"CLOSED","md5":"70041821acf87389e40ddcb092004184","sha1":"10395ab3566395ca050232d2c1a0dbad69eb5fd2","sha256":"2e4c462b3424afcc04f43429d5f001e4ef9a28143bfeefb9af2254b4df3a7c1a","stored":true,"file_id":1,"size":301,"tx_id":0}}\n')),(0,a.kt)("p",null,"Import the log as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast import suricata < eve.log\n")),(0,a.kt)("h3",{id:"ingest-from-a-unix-domain-socket"},"Ingest from a UNIX domain socket"),(0,a.kt)("p",null,"Instead of writing to a file, Suricata can also log to a UNIX domain socket that\nVAST reads from. This requires the following settings in your ",(0,a.kt)("inlineCode",{parentName:"p"},"suricata.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"outputs:\n  - eve-log:\n    enabled: yes\n    filetype: unix_stream\n    filename: eve.sock\n")),(0,a.kt)("p",null,"To import from a UNIX domain socket, combine netcat with a ",(0,a.kt)("inlineCode",{parentName:"p"},"vast import"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nc -vlkU eve.sock | vast import suricata\n")))}d.isMDXComponent=!0}}]);