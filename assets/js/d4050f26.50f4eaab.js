"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var o=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n};const m={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},k="tcp",y={unversionedId:"connectors/tcp",id:"connectors/tcp",title:"tcp",description:"Loads bytes from a TCP or TLS connection.",source:"@site/docs/connectors/tcp.md",sourceDirName:"connectors",slug:"/connectors/tcp",permalink:"/next/connectors/tcp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/tcp.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"stdout",permalink:"/next/connectors/stdout"},next:{title:"zmq",permalink:"/next/connectors/zmq"}},v={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"<code>-c,--connect</code> (Loader)",id:"-c--connect-loader",level:3},{value:"<code>-l,--listen</code> (Saver)",id:"-l--listen-saver",level:3},{value:"<code>-o,--listen-once</code>",id:"-o--listen-once",level:3},{value:"<code>--tls</code>",id:"--tls",level:3},{value:"<code>--certfile</code>",id:"--certfile",level:3},{value:"<code>--keyfile</code>",id:"--keyfile",level:3},{value:"Examples",id:"examples",level:2}],b={toc:h},g="wrapper";function O(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,o.kt)(g,u(d(d({},b),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",d({},{id:"tcp"}),"tcp"),(0,o.kt)("p",null,"Loads bytes from a TCP or TLS connection."),(0,o.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,o.kt)("p",null,"Loader:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"tcp [-c|--connect] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,o.kt)("p",null,"Saver:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"tcp [-l|--listen] [-o|--listen-once]\n    [--tls] [--certfile] [--keyfile] <endpoint>\n")),(0,o.kt)("h2",d({},{id:"description"}),"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp")," loader establishes a TCP or TLS connection and reads bytes from it."),(0,o.kt)("p",null,"It can either connect to a remote endpoint, or listen on a given address and\nwait for incoming connections."),(0,o.kt)("h3",d({},{id:"endpoint"}),(0,o.kt)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,o.kt)("p",null,"The address of the remote endpoint to connect to when using ",(0,o.kt)("inlineCode",{parentName:"p"},"--connect"),", and the\nbind address when using ",(0,o.kt)("inlineCode",{parentName:"p"},"--listen"),"."),(0,o.kt)("h3",d({},{id:"-c--connect-loader"}),(0,o.kt)("inlineCode",{parentName:"h3"},"-c,--connect")," (Loader)"),(0,o.kt)("p",null,"Connect to ",(0,o.kt)("inlineCode",{parentName:"p"},"<endpoint>")," instead of listening at it."),(0,o.kt)("h3",d({},{id:"-l--listen-saver"}),(0,o.kt)("inlineCode",{parentName:"h3"},"-l,--listen")," (Saver)"),(0,o.kt)("p",null,"Listen at ",(0,o.kt)("inlineCode",{parentName:"p"},"<endpoint>")," instead of connecting to it."),(0,o.kt)("h3",d({},{id:"-o--listen-once"}),(0,o.kt)("inlineCode",{parentName:"h3"},"-o,--listen-once")),(0,o.kt)("p",null,"When listening to a socket, only process a single connection instead of looping\nover all connecting clients forever."),(0,o.kt)("p",null,"Requires a loader or saver with ",(0,o.kt)("inlineCode",{parentName:"p"},"--listen"),"."),(0,o.kt)("h3",d({},{id:"--tls"}),(0,o.kt)("inlineCode",{parentName:"h3"},"--tls")),(0,o.kt)("p",null,"Wrap the connection into a TLS secured stream."),(0,o.kt)("h3",d({},{id:"--certfile"}),(0,o.kt)("inlineCode",{parentName:"h3"},"--certfile")),(0,o.kt)("p",null,"Path to a ",(0,o.kt)("inlineCode",{parentName:"p"},".pem")," file containing the TLS certificate for the server."),(0,o.kt)("p",null,"Ignored unless ",(0,o.kt)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,o.kt)("h3",d({},{id:"--keyfile"}),(0,o.kt)("inlineCode",{parentName:"h3"},"--keyfile")),(0,o.kt)("p",null,"Path to a ",(0,o.kt)("inlineCode",{parentName:"p"},".pem")," file containing the private key for the certificate."),(0,o.kt)("p",null,"Ignored unless ",(0,o.kt)("inlineCode",{parentName:"p"},"--tls")," is also specified."),(0,o.kt)("h2",d({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"Read raw bytes by connecting to a TCP endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:8000\n")),(0,o.kt)("p",null,"Test this locally by spinning up a local server with ",(0,o.kt)("inlineCode",{parentName:"p"},"socat"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"echo foo | socat TCP-LISTEN:8000 stdout\n")),(0,o.kt)("p",null,"Listen on localhost and wait for incoming TLS connections:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{}),"load tcp://127.0.0.1:4000 --tls --certfile key_and_cert.pem --keyfile key_and_cert.pem -k\n")),(0,o.kt)("p",null,"The above example uses a self-signed certificate that can be generated like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl req -x509 -newkey rsa:2048 -keyout key_and_cert.pem -out key_and_cert.pem -days 365 -nodes\n")),(0,o.kt)("p",null,"Test the endpoint locally by issuing a TLS connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"openssl s_client 127.0.0.1:4000\n")))}O.isMDXComponent=!0}}]);