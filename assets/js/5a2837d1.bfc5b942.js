"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>N,frontMatter:()=>k,metadata:()=>f,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const k={sidebar_position:1},y="Docker Compose",f={unversionedId:"setup-guides/deploy-a-node/docker-compose",id:"version-Tenzir v4.7/setup-guides/deploy-a-node/docker-compose",title:"Docker Compose",description:"These instructions are unfortunately outdated. We plan to update them in the",source:"@site/versioned_docs/version-Tenzir v4.7/setup-guides/deploy-a-node/docker-compose.md",sourceDirName:"setup-guides/deploy-a-node",slug:"/setup-guides/deploy-a-node/docker-compose",permalink:"/setup-guides/deploy-a-node/docker-compose",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.7/setup-guides/deploy-a-node/docker-compose.md",tags:[],version:"Tenzir v4.7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/setup-guides/deploy-a-node/"},next:{title:"Ansible",permalink:"/setup-guides/deploy-a-node/ansible"}},g={},h=[{value:"Quick Start with Docker Compose",id:"quick-start-with-docker-compose",level:2},{value:"Override Files",id:"override-files",level:2}],b={toc:h},v="wrapper";function N(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,u(d(d({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"docker-compose"}),"Docker Compose"),(0,n.kt)("admonition",d({},{title:"Outdated",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"These instructions are unfortunately outdated. We plan to update them in the\nfuture. For now, please swing by our ",(0,n.kt)("a",d({parentName:"p"},{href:"/discord"}),"Discord")," for questions on the\nDocker Compose integrations.")),(0,n.kt)("p",null,"We offer a range of Docker Compose files for quickly getting up and running with\nTenzir. All mentioned files are in the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/tenzir/tenzir/tree/main/docker"}),(0,n.kt)("inlineCode",{parentName:"a"},"docker"))," directory of\nthe Tenzir repository, and require having the repository checked out locally."),(0,n.kt)("h2",d({},{id:"quick-start-with-docker-compose"}),"Quick Start with Docker Compose"),(0,n.kt)("p",null,"To get up and running with Tenzir in Docker Compose, simply run from the\n",(0,n.kt)("inlineCode",{parentName:"p"},"docker/compose")," directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"export COMPOSE_FILE=tenzir.yaml\ndocker compose up\n")),(0,n.kt)("p",null,"This fetches the latest version of Tenzir from Docker Hub."),(0,n.kt)("admonition",d({},{title:"Cached Images and Containers",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"By default, Docker aggressively caches images and containers. To prevent Docker\nfrom re-using an image, pass ",(0,n.kt)("inlineCode",{parentName:"p"},"--pull always")," (Compose v2.8+) to ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose\nup"),". Similarly, to prevent Docker from re-using an already built container, pass\n",(0,n.kt)("inlineCode",{parentName:"p"},"--force-recreate"),".")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose run")," command makes interacting with Tenzir inside Docker\nCompose easy:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Run `tenzir status` in the Docker Compose network.\ndocker compose run tenzir status\n\n# Import a Suricata Eve JSON file in the Docker Compose network.\n# NOTE: When piping to stdin, passing --no-TTY is required.\ndocker compose run --no-TTY tenzir import suricata < path/to/eve.json\n\n# Run a query against Tenzir.\n# NOTE: For commands that check whether input exists on stdin, passing\n# --interactive=false is required. This is a bug in Docker Compose.\ndocker compose run --interactive=false tenzir export json '#schema == \"suricata.alert\"'\n")),(0,n.kt)("p",null,"The Docker Compose network by default exposes Tenzir on port 5158, allowing for\nusers to connect to it from outside, e.g., with a local Tenzir binary."),(0,n.kt)("h2",d({},{id:"override-files"}),"Override Files"),(0,n.kt)("p",null,"Tenzir's integrations with other services are opt-in, i.e., not loaded by\ndefault. To opt into loading another service, specify its override file when\nstarting\nDocker Compose:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# Load both Tenzir and Zeek, and the import that sits between the two.\n# NOTE: The override file for Zeek does not exist yet, but we plan to add it in\n# the near future.\ndocker compose -f docker/compose/tenzir.yaml \\\n               -f docker/compose/zeek.yaml \\\n               -f docker/compose/zeek.tenzir-import.yaml \\\n               up\n")),(0,n.kt)("p",null,"We currently have the following override files:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"File"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/tenzir.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"The ",(0,n.kt)("inlineCode",{parentName:"td"},"tenzir")," service that starts up a Tenzir server including REST API.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/tenzir.volume.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Add persistent storage to Tenzir.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/tenzir.build.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Force Tenzir to be built from source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/quarto.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Build the Quarto image and run Bash inside.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/quarto.bind.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Bind mound the Tenzir respository.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/quarto.tenzir.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Apply settings to connect to the Tenzir service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/misp.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Start MISP with a basic initial setup.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"docker/compose/misp.proxy.yaml"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Add a reverse proxy for dynamic hostnames.")))))}N.isMDXComponent=!0}}]);