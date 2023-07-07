"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20864],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>h,default:()=>b,frontMatter:()=>f,metadata:()=>k,toc:()=>g});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e},c=(e,n)=>o(e,i(n)),m=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={},h="Get Started",k={unversionedId:"get-started",id:"version-Tenzir v4.0-rc6/get-started",title:"Get Started",description:"Tenzir is a distributed platform for processing and storing security event data",source:"@site/versioned_docs/version-Tenzir v4.0-rc6/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/get-started",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0-rc6/get-started.md",tags:[],version:"Tenzir v4.0-rc6",frontMatter:{},sidebar:"docsSidebar",next:{title:"Setup Guides",permalink:"/setup-guides"}},y={},g=[{value:"Create a free account",id:"create-a-free-account",level:2},{value:"Explore the demo environment",id:"explore-the-demo-environment",level:2},{value:"Onboard your own node",id:"onboard-your-own-node",level:2},{value:"Up Next",id:"up-next",level:2}],v={toc:g},_="wrapper";function b(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(_,c(d(d({},v),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"get-started"}),"Get Started"),(0,r.kt)("admonition",d({},{title:"What is Tenzir?",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Tenzir is a distributed platform for processing and storing security event data\nin a pipeline dataflow model.")),(0,r.kt)("h2",d({},{id:"create-a-free-account"}),"Create a free account"),(0,r.kt)("p",null,"Create an account for the best user experience. Everyone can freely use\nthe ",(0,r.kt)("a",d({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Community Edition"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",d({parentName:"li"},{href:"https://app.tenzir.com"}),"app.tenzir.com")),(0,r.kt)("li",{parentName:"ol"},"Sign in with your identity provider or create an account")),(0,r.kt)("p",null,"There are no strings attached: you can always delete your account via ",(0,r.kt)("em",{parentName:"p"},"Account"),"\n\u2192 ",(0,r.kt)("em",{parentName:"p"},"Delete Account"),". You do not have to create an account if you just want to use\nthe command line interface and do not need pipeline management features."),(0,r.kt)("h2",d({},{id:"explore-the-demo-environment"}),"Explore the demo environment"),(0,r.kt)("p",null,"Let's run a few example ",(0,r.kt)("a",d({parentName:"p"},{href:"/language/pipelines"}),"pipelines"),". Follow along by\ncopying the below examples and pasting them into the\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://app.tenzir.com/explorer"}),"Explorer"),". Our first first pipeline produces\njust a single event: the version of the Tenzir node:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"version\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "version": "v4.0.0-rc2-34-g9197f7355e",\n  "plugins": [\n    {\n      "name": "compaction",\n      "version": "bundled"\n    },\n    {\n      "name": "inventory",\n      "version": "bundled"\n    },\n    {\n      "name": "kafka",\n      "version": "bundled"\n    },\n    {\n      "name": "matcher",\n      "version": "bundled"\n    },\n    {\n      "name": "netflow",\n      "version": "bundled"\n    },\n    {\n      "name": "parquet",\n      "version": "bundled"\n    },\n    {\n      "name": "pcap",\n      "version": "bundled"\n    },\n    {\n      "name": "pipeline-manager",\n      "version": "bundled"\n    },\n    {\n      "name": "platform",\n      "version": "bundled"\n    },\n    {\n      "name": "web",\n      "version": "bundled"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"(Output may vary based on your actual version.)")),(0,r.kt)("admonition",d({},{title:"Explorer vs. Documentation",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"On this site we display the data in JSON. In the Explorer, you can enjoy a\nricher display in an interactive table. You can also produce the outputs here by\ninvoking ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir <pipeline>")," on the ",(0,r.kt)("a",d({parentName:"p"},{href:"/command-line"}),"command line")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -it tenzir/tenzir <pipeline>")," when using Docker.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/sources/version"}),(0,r.kt)("inlineCode",{parentName:"a"},"version"))," operator is a\n",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/sources/"}),"source"),", i.e., it outputs data but doesn't have\nany input. Tenzir also comes with a storage engine. The\n",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/sources/export"}),(0,r.kt)("inlineCode",{parentName:"a"},"export"))," operator emits all stored data at a\nnode. Pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," to ",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/transformations/head"}),(0,r.kt)("inlineCode",{parentName:"a"},"head"))," to retrieve\n10 events:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"export | head\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-18T08:23:45.304758",\n  "flow_id": 1851826916903734,\n  "pcap_cnt": 54742,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "8.249.125.254",\n  "src_port": 80,\n  "dest_ip": "10.6.2.101",\n  "dest_port": 49789,\n  "proto": "TCP",\n  "event_type": "fileinfo",\n  "community_id": null,\n  "fileinfo": {\n    "filename": "/d/msdownload/update/software/defu/2021/06/am_delta_patch_1.339.1962.0_5e6a00734b4809bcfd493118754d0ea1cd64798e.exe",\n    "magic": null,\n    "gaps": false,\n    "state": "CLOSED",\n    "md5": null,\n    "sha1": null,\n    "sha256": null,\n    "stored": false,\n    "file_id": null,\n    "size": 2,\n    "tx_id": 0,\n    "start": 0,\n    "end": 1\n  },\n  "http": {\n    "hostname": "au.download.windowsupdate.com",\n    "url": "/d/msdownload/update/software/defu/2021/06/am_delta_patch_1.339.1962.0_5e6a00734b4809bcfd493118754d0ea1cd64798e.exe",\n    "http_port": null,\n    "http_user_agent": "Microsoft-Delivery-Optimization/10.0",\n    "http_content_type": "application/octet-stream",\n    "http_method": "GET",\n    "http_refer": null,\n    "protocol": "HTTP/1.1",\n    "status": 206,\n    "redirect": null,\n    "length": 2,\n    "xff": null,\n    "content_range": {\n      "raw": "bytes 0-1/360888",\n      "start": 0,\n      "end": 1,\n      "size": 360888\n    }\n  },\n  "app_proto": "http",\n  "metadata": {\n    "flowints": {\n      "http.anomaly.count": null,\n      "tcp.retransmission.count": null\n    },\n    "flowbits": [\n      "ET.INFO.WindowsUpdate",\n      "exe.no.referer"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"(Only 1 out of 10 shown.)")),(0,r.kt)("admonition",d({},{title:"Demo Dataset",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"We pre-loaded the demo node in the app with ",(0,r.kt)("a",d({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," and\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," logs derived from the M57 dataset. We also use\nthat dataset in our ",(0,r.kt)("a",d({parentName:"p"},{href:"/user-guides"}),"user guides"),".")),(0,r.kt)("p",null,"Let's filter the dataflow and keep only Suricata alerts using the\n",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/transformations/where"}),(0,r.kt)("inlineCode",{parentName:"a"},"where"))," operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'export\n| where #schema == "suricata.alert"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-17T13:52:05.695469",\n  "flow_id": 1868285155318879,\n  "pcap_cnt": 143,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "14.1.112.177",\n  "src_port": 38376,\n  "dest_ip": "198.71.247.91",\n  "dest_port": 123,\n  "proto": "UDP",\n  "event_type": "alert",\n  "community_id": null,\n  "alert": {\n    "app_proto": null,\n    "action": "allowed",\n    "gid": 1,\n    "signature_id": 2017919,\n    "rev": 2,\n    "signature": "ET DOS Possible NTP DDoS Inbound Frequent Un-Authed MON_LIST Requests IMPL 0x03",\n    "category": "Attempted Denial of Service",\n    "severity": 2,\n    "source": {\n      "ip": null,\n      "port": null\n    },\n    "target": {\n      "ip": null,\n      "port": null\n    },\n    "metadata": {\n      "created_at": [\n        "2014_01_03"\n      ],\n      "updated_at": [\n        "2014_01_03"\n      ]\n    }\n  },\n  "flow": {\n    "pkts_toserver": 2,\n    "pkts_toclient": 0,\n    "bytes_toserver": 468,\n    "bytes_toclient": 0,\n    "start": "2021-11-17T13:52:05.695391",\n    "end": null,\n    "age": null,\n    "state": null,\n    "reason": null,\n    "alerted": null\n  },\n  "payload": null,\n  "payload_printable": null,\n  "stream": null,\n  "packet": null,\n  "packet_info": {\n    "linktype": null\n  },\n  "app_proto": "failed"\n}\n')),(0,r.kt)("p",null,"(Only 1 out of 19 shown.)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," operator takes an ",(0,r.kt)("a",d({parentName:"p"},{href:"/language/expressions"}),"expression")," as argument,\nwhich combines rich-typed predicates with AND, OR, and NOT. Here's a more\nelaborate example:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"export\n| where 10.10.5.0/25 && (orig_bytes > 1 Mi || duration > 30 min)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "ts": "2021-11-19T06:30:30.918301",\n  "uid": "C9T8pykxdsT7iSrc9",\n  "id": {\n    "orig_h": "10.10.5.101",\n    "orig_p": 50046,\n    "resp_h": "87.120.8.190",\n    "resp_p": 9090\n  },\n  "proto": "tcp",\n  "service": null,\n  "duration": "5.09m",\n  "orig_bytes": 1394538,\n  "resp_bytes": 95179,\n  "conn_state": "S1",\n  "local_orig": null,\n  "local_resp": null,\n  "missed_bytes": 0,\n  "history": "ShADad",\n  "orig_pkts": 5046,\n  "orig_ip_bytes": 1596390,\n  "resp_pkts": 5095,\n  "resp_ip_bytes": 298983,\n  "tunnel_parents": null,\n  "community_id": "1:UPodR2krvvXUGhc/NEL9kejd7FA=",\n  "_write_ts": null\n}\n{\n  "ts": "2021-11-19T07:05:44.694927",\n  "uid": "ChnTjeQncxZrb0ZWg",\n  "id": {\n    "orig_h": "10.10.5.101",\n    "orig_p": 50127,\n    "resp_h": "87.120.8.190",\n    "resp_p": 9090\n  },\n  "proto": "tcp",\n  "service": null,\n  "duration": "54.81s",\n  "orig_bytes": 1550710,\n  "resp_bytes": 97122,\n  "conn_state": "S1",\n  "local_orig": null,\n  "local_resp": null,\n  "missed_bytes": 0,\n  "history": "ShADadww",\n  "orig_pkts": 5409,\n  "orig_ip_bytes": 1767082,\n  "resp_pkts": 5477,\n  "resp_ip_bytes": 316206,\n  "tunnel_parents": null,\n  "community_id": "1:aw0CtkT7YikUZWyqdHwgLhqJXxU=",\n  "_write_ts": null\n}\n{\n  "ts": "2021-11-19T06:30:15.910850",\n  "uid": "CxuTEOgWv2Z74FCG6",\n  "id": {\n    "orig_h": "10.10.5.101",\n    "orig_p": 50041,\n    "resp_h": "87.120.8.190",\n    "resp_p": 9090\n  },\n  "proto": "tcp",\n  "service": null,\n  "duration": "36.48m",\n  "orig_bytes": 565,\n  "resp_bytes": 507,\n  "conn_state": "S1",\n  "local_orig": null,\n  "local_resp": null,\n  "missed_bytes": 0,\n  "history": "ShADad",\n  "orig_pkts": 78,\n  "orig_ip_bytes": 3697,\n  "resp_pkts": 77,\n  "resp_ip_bytes": 3591,\n  "tunnel_parents": null,\n  "community_id": "1:r337wYxbKPDv5Vkjoz3gGuld1bs=",\n  "_write_ts": null\n}\n'))),(0,r.kt)("p",null,"The above example extracts connections from the subnet 10.10.5.0/25 that either\nhave sent more than 1 MiB or lasted longer than 30 minutes."),(0,r.kt)("p",null,"Aside from filtering, you can also perform aggregations with\n",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/transformations/summarize"}),(0,r.kt)("inlineCode",{parentName:"a"},"summarize")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'export\n| #schema == "suricata.alert"\n| summarize count=count(src_ip) by severity\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{\n  "alert.severity": 1,\n  "count": 134644\n}\n{\n  "alert.severity": 2,\n  "count": 26780\n}\n{\n  "alert.severity": 3,\n  "count": 179713\n}\n'))),(0,r.kt)("p",null,"For counting field values, ",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/transformations/top"}),(0,r.kt)("inlineCode",{parentName:"a"},"top"))," and\n",(0,r.kt)("a",d({parentName:"p"},{href:"/operators/transformations/rare"}),(0,r.kt)("inlineCode",{parentName:"a"},"rare"))," come in handy:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'export\n| where #schema == "zeek.notice"\n| top msg\n| head 5\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{"msg": "SSL certificate validation failed with (certificate has expired)", "n": 2201}\n{"msg": "SSL certificate validation failed with (unable to get local issuer certificate)", "n": 1600}\n{"msg": "SSL certificate validation failed with (self signed certificate)", "n": 603}\n{"msg": "Detected SMB::FILE_WRITE to admin file share \'\\\\\\\\10.5.26.4\\\\C$\\\\WINDOWS\\\\h48l10jxplwhq9eowyecjmwg0nxwu72zblns1l3v3c6uu6p6069r4c4c5yjwv_e7.exe\'", "n": 339}\n{"msg": "SSL certificate validation failed with (certificate is not yet valid)", "n": 324}\n'))),(0,r.kt)("p",null,"This was just a quick tour. The ",(0,r.kt)("a",d({parentName:"p"},{href:"/user-guides"}),"user guides")," cover a lot more\nmaterial. Next, we'll explain how to deploy a node so that you can work with\nyour own data."),(0,r.kt)("h2",d({},{id:"onboard-your-own-node"}),"Onboard your own node"),(0,r.kt)("p",null,"Adding a node takes just few minutes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",d({parentName:"li"},{href:"https://app.tenzir.com/configurator"}),"configurator"),"."),(0,r.kt)("li",{parentName:"ol"},"Download a configuration file for your node."),(0,r.kt)("li",{parentName:"ol"},"Install your node by follow the ",(0,r.kt)("a",d({parentName:"li"},{href:"/setup-guides/deploy-a-node/"}),"deployment\ninstructions"),".")),(0,r.kt)("h2",d({},{id:"up-next"}),"Up Next"),(0,r.kt)("p",null,"Now that you got a first impression of Tenzir pipelines, and perhaps already\na node of your own, dive deeper by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"following the ",(0,r.kt)("a",d({parentName:"li"},{href:"/user-guides"}),"user guides")," with step-by-step tutorials of\ncommon use cases"),(0,r.kt)("li",{parentName:"ul"},"learning more about the ",(0,r.kt)("a",d({parentName:"li"},{href:"/language"}),"language"),", ",(0,r.kt)("a",d({parentName:"li"},{href:"/operators"}),"operators"),",\n",(0,r.kt)("a",d({parentName:"li"},{href:"/connectors"}),"connectors"),", ",(0,r.kt)("a",d({parentName:"li"},{href:"/formats"}),"formats"),", and the ",(0,r.kt)("a",d({parentName:"li"},{href:"/data-model"}),"data\nmodel")),(0,r.kt)("li",{parentName:"ul"},"understanding ",(0,r.kt)("a",d({parentName:"li"},{href:"/why-tenzir"}),"why")," we built Tenzir and how it compares to\nother systems")),(0,r.kt)("p",null,"Don't forget that we're here to help! If you have any questions, swing by our\nfriendly ",(0,r.kt)("a",d({parentName:"p"},{href:"/discord"}),"community Discord")," or open a ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/discussions"}),"GitHub\ndiscussion"),"."))}b.isMDXComponent=!0}}]);