"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={},k="nic",v={unversionedId:"connectors/nic",id:"version-Tenzir v4.0/connectors/nic",title:"nic",description:"Reads bytes from a network interface card (NIC).",source:"@site/versioned_docs/version-Tenzir v4.0/connectors/nic.md",sourceDirName:"connectors",slug:"/connectors/nic",permalink:"/connectors/nic",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.0/connectors/nic.md",tags:[],version:"Tenzir v4.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"kafka",permalink:"/connectors/kafka"},next:{title:"stdin",permalink:"/connectors/stdin"}},y={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-s|--snaplen &lt;count&gt;</code>",id:"-s--snaplen-count",level:3},{value:"Examples",id:"examples",level:2}],h={toc:b},O="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(u(u({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"nic"}),"nic"),(0,r.kt)("p",null,"Reads bytes from a network interface card (NIC)."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"nic <iface> [-s|--snaplen <count>]\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nic")," loader uses libpcap to acquire packets from a network interface and\npacks them into blocks of bytes that represent PCAP packet records."),(0,r.kt)("p",null,"The received first packet triggers also emission of PCAP file header such that\ndownstream operators can treat the packet stream as valid PCAP capture file."),(0,r.kt)("p",null,"The default parser for the ",(0,r.kt)("inlineCode",{parentName:"p"},"nic")," loader is ",(0,r.kt)("a",u({parentName:"p"},{href:"/formats/pcap"}),(0,r.kt)("inlineCode",{parentName:"a"},"pcap")),"."),(0,r.kt)("h3",u({},{id:"-s--snaplen-count"}),(0,r.kt)("inlineCode",{parentName:"h3"},"-s|--snaplen <count>")),(0,r.kt)("p",null,"Sets the snapshot length of the captured packets."),(0,r.kt)("p",null,"This value is an upper bound on the packet size. Packets larger than this size\nget truncated to ",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," bytes."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"262144"),"."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read PCAP packets from ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from nic eth0\n")),(0,r.kt)("p",null,"Perform the equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"tcpdump -i en0 -w trace.pcap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"load nic en0 | save file trace.pcap\n")))}g.isMDXComponent=!0}}]);