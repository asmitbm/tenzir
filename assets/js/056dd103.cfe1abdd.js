"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Open Source flow monitor"},s="Process Argus Flow Logs",l={unversionedId:"try/process-argus-flow-logs",id:"try/process-argus-flow-logs",title:"Process Argus Flow Logs",description:"Open Source flow monitor",source:"@site/docs/try/process-argus-flow-logs.md",sourceDirName:"try",slug:"/try/process-argus-flow-logs",permalink:"/docs/try/process-argus-flow-logs",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/try/process-argus-flow-logs.md",tags:[],version:"current",frontMatter:{description:"Open Source flow monitor"},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/docs/try/quickstart"},next:{title:"Setup",permalink:"/docs/setup/"}},i={},p=[{value:"Read network data",id:"read-network-data",level:2},{value:"Convert Argus to CSV",id:"convert-argus-to-csv",level:2},{value:"Ingest Argus CSV output",id:"ingest-argus-csv-output",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"process-argus-flow-logs"},"Process Argus Flow Logs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qosient.com/argus/index.shtml"},"Argus")," is an open-source flow monitor\nthat computes a variety of connection statistics."),(0,a.kt)("p",null,"The UNIX tool ",(0,a.kt)("inlineCode",{parentName:"p"},"argus")," processes either ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/formats/pcap"},"PCAP")," or\n",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/formats/netflow"},"NetFlow")," data and generates binary output.\nThe companion utility ",(0,a.kt)("inlineCode",{parentName:"p"},"ra")," transforms this binary output into a textual form\nthat VAST can parse."),(0,a.kt)("p",null,"Ingesting Argus data involves the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Read PCAP or NetFlow data with ",(0,a.kt)("inlineCode",{parentName:"li"},"argus")),(0,a.kt)("li",{parentName:"ol"},"Convert the binary Argus data into CSV with ",(0,a.kt)("inlineCode",{parentName:"li"},"ra")),(0,a.kt)("li",{parentName:"ol"},"Pipe the ",(0,a.kt)("inlineCode",{parentName:"li"},"ra")," output to ",(0,a.kt)("inlineCode",{parentName:"li"},"vast"))),(0,a.kt)("h2",{id:"read-network-data"},"Read network data"),(0,a.kt)("p",null,"To read a PCAP file, pass a file via ",(0,a.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argus -r trace\n")),(0,a.kt)("p",null,"To read from standard input, use ",(0,a.kt)("inlineCode",{parentName:"p"},"-r -"),". Similarly, to write to standard\noutput, use ",(0,a.kt)("inlineCode",{parentName:"p"},"-w -"),"."),(0,a.kt)("h2",{id:"convert-argus-to-csv"},"Convert Argus to CSV"),(0,a.kt)("p",null,"Converting ",(0,a.kt)("inlineCode",{parentName:"p"},"argus")," output to CSV requires the following flags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c ,")," to enable CSV mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-L0")," to print a header with field names once"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-n")," suppress port nubmer to service conversions")),(0,a.kt)("p",null,"The first column contains the timestamp, but unfortunately the default format\ndoesn't contain dates. Changing the timestamp format requires passing a\ncustom configuration file via ",(0,a.kt)("inlineCode",{parentName:"p"},"-F ra.conf")," with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'RA_TIME_FORMAT="%y-%m-%d+%T.%f"\n')),(0,a.kt)("p",null,"Finally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s +a,b,c,...")," flag includes list of field names that should be\nappended after the default fields. Consult the manpage of ",(0,a.kt)("inlineCode",{parentName:"p"},"ra")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s"),"\nsection for valid field names."),(0,a.kt)("p",null,"Put together, the following example generates valid CSV output for a PCAP file\ncalled ",(0,a.kt)("inlineCode",{parentName:"p"},"trace.pcap"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argus -r trace.pcap -w - |\n  ra -F ra.conf -L0 -c , -n -s +spkts,dpkts,load,pcr\n")),(0,a.kt)("p",null,"This generates the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv"},"StartTime,Flgs,Proto,SrcAddr,Sport,Dir,DstAddr,Dport,TotPkts,TotBytes,State,SrcPkts,DstPkts,Load,PCRatio\n09-11-18+09:00:03.914398, e        ,udp,192.168.1.1,626,   ->,224.0.0.1,626,1,75,INT,1,0,0.000000,-0.000000\n09-11-18+09:00:20.093410, e        ,lldp,00:22:2d:81:db:10,0,   ->,01:80:c2:00:00:0e,0,1,118,INT,1,0,0.000000,-0.000000\n09-11-18+09:00:21.486288, e        ,arp,192.168.1.102,,  who,192.168.1.1,,2,106,CON,1,1,0.000000,-0.000000\n09-11-18+09:00:21.486539, e        ,udp,192.168.1.102,68,  <->,192.168.1.1,67,2,689,CON,1,1,0.000000,-0.000000\n09-11-18+09:00:33.914396, e        ,udp,192.168.1.1,626,   ->,224.0.0.1,626,1,75,REQ,1,0,0.000000,-0.000000\n09-11-18+09:00:50.208499, e        ,lldp,00:22:2d:81:db:10,0,   ->,01:80:c2:00:00:0e,0,1,118,REQ,1,0,0.000000,-0.000000\n09-11-18+09:01:03.914408, e        ,udp,192.168.1.1,626,   ->,224.0.0.1,626,1,75,REQ,1,0,0.000000,-0.000000\n09-11-18+09:01:20.323835, e        ,lldp,00:22:2d:81:db:10,0,   ->,01:80:c2:00:00:0e,0,1,118,REQ,1,0,0.000000,-0.000000\n09-11-18+09:01:33.914414, e        ,udp,192.168.1.1,626,   ->,224.0.0.1,626,1,75,REQ,1,0,0.000000,-0.000000\n")),(0,a.kt)("h2",{id:"ingest-argus-csv-output"},"Ingest Argus CSV output"),(0,a.kt)("p",null,"Since VAST has ",(0,a.kt)("a",{parentName:"p",href:"/docs/understand/formats/csv"},"CSV support"),", ingesting Argus CSV\noutput only requires an adequate schema. VAST already ships with an argus schema\ncontaining a type ",(0,a.kt)("inlineCode",{parentName:"p"},"argus.record")," that covers all fields from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ra")," man page."),(0,a.kt)("p",null,"The following command imports a file ",(0,a.kt)("inlineCode",{parentName:"p"},"argus.csv"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"vast import -t argus.record csv < argus.csv\n")),(0,a.kt)("p",null,"Alternatively, this UNIX pipe processes a PCAP trace without intermediate file\nand ships the data directly to VAST:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"argus -r trace.pcap -w - |\n  ra -F ra.conf -L0 -c , -n -s +spkts,dpkts,load,pcr |\n  vast import -t argus.record csv\n")))}c.isMDXComponent=!0}}]);