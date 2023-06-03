"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49247:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};var l=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e};function d({children:e,hidden:t,className:n}){return r.createElement("div",p({role:"tabpanel",className:(0,a.Z)(o.tabItem,n)},{hidden:t}),e)}},54023:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(67294),a=n(86010),o=n(37287),l=n(16550),i=n(63962),u=n(69920),s=n(15801),c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))m.call(t,n)&&y(e,n,t[n]);return e},g=(e,t)=>p(e,d(t));function h(e){return function(e){var t,n;return null!=(n=null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function w(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:h(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k({value:e,tabValues:t}){return t.some((t=>t.value===e))}function O({queryString:e=!1,groupId:t}){const n=(0,l.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(g(v({},n.location),{search:t.toString()}))}),[a,n])]}function T(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=w(e),[l,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!k({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=O({queryString:n,groupId:a}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,s.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=u?u:p;return k({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var E=n(35710);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=Object.defineProperty,S=Object.defineProperties,P=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&A(e,n,t[n]);if(V)for(var n of V(t))I.call(t,n)&&A(e,n,t[n]);return e},C=(e,t)=>S(e,P(t));function q({className:e,block:t,selectedValue:n,selectValue:l,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(s(t),l(a))},p=e=>{var t,n;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;r=null!=(t=u[n])?t:u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=null!=(n=u[t])?n:u[u.length-1];break}}null==r||r.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:o})=>r.createElement("li",C(N({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:p,onClick:c},o),{className:(0,a.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function L({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function M(e){const t=T(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",x.tabList)},r.createElement(q,N(N({},e),t)),r.createElement(L,N(N({},e),t)))}function R(e){const t=(0,E.Z)();return r.createElement(M,N({key:String(t)},e))}},98167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>T,frontMatter:()=>y,metadata:()=>g,toc:()=>w});var r=n(3905),a=n(54023),o=n(49247),l=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e},b=(e,t)=>i(e,u(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={},v="Setup",g={unversionedId:"setup/README",id:"setup/README",title:"Setup",description:"This section describes VAST from an operator perspective. We cover the",source:"@site/docs/setup/README.md",sourceDirName:"setup",slug:"/setup/",permalink:"/docs/next/setup/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/setup/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Process Argus Flow Logs",permalink:"/docs/next/try/process-argus-flow-logs"},next:{title:"Download",permalink:"/docs/next/setup/download"}},h={},w=[{value:"Run VAST",id:"run-vast",level:2}],k={toc:w},O="wrapper";function T(e){var t=e,{components:n}=t,l=m(t,["components"]);return(0,r.kt)(O,b(f(f({},k),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"setup"}),"Setup"),(0,r.kt)("p",null,"This section describes VAST from an ",(0,r.kt)("strong",{parentName:"p"},"operator perspective"),". We cover the\ndifferent stages of the setup process that ultimately yield a running VAST\ninstance. You have several options to enter the setup pipeline, based on what\nintermediate artifact you would like to begin with."),(0,r.kt)("mermaid",f({},{value:'flowchart LR\n  classDef action fill:#00a4f1,stroke:none,color:#eee\n  classDef artifact fill:#bdcfdb,stroke:none,color:#222\n  %% Actions\n  download(Download):::action\n  build(Build):::action\n  install(Install):::action\n  deploy(Deploy):::action\n  configure(Configure):::action\n  tune(Tune):::action\n  monitor(Monitor):::action\n  %% Artifacts\n  source([Source Code]):::artifact\n  binary([Binary]):::artifact\n  deployable([Package/Image]):::artifact\n  instance([Instance]):::artifact\n  %% Edges\n  download --\x3e source\n  download --\x3e binary\n  download --\x3e deployable\n  source --\x3e build\n  build --\x3e binary\n  binary --\x3e install\n  install --\x3e deployable\n  deployable --\x3e deploy\n  deploy --\x3e instance\n  instance <--\x3e configure\n  instance <--\x3e tune\n  instance <--\x3e monitor\n  %% Links\n  click download "setup/download" "Download VAST"\n  click build "setup/build" "Build VAST"\n  click install "setup/install" "Install VAST"\n  click deploy "setup/deploy" "Deploy VAST"\n  click configure "setup/configure" "Configure VAST"\n  click tune "setup/tune" "Tune VAST"\n  click monitor "setup/monitor" "Monitor VAST"'})),(0,r.kt)("admonition",f({},{title:"Quick Start",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Want hands-on experience with VAST? Then continue with a quick tour below. \ud83d\udc47")),(0,r.kt)("h2",f({},{id:"run-vast"}),"Run VAST"),(0,r.kt)("p",null,"To get up and running quickly, we recommend using the static binary or Docker\nimage:"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"static",label:"Static Binary",default:!0,mdxType:"TabItem"},"If you have a Linux at your fingertips, just download and extract our package with a static binary:",(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),'mkdir /opt/vast\ncd /opt/vast\nwget https://github.com/tenzir/vast/releases/latest/download/vast-linux-static.tar.gz\nmkdir -p /opt/vast\ntar xzf vast-linux-static.tar.gz -C /opt/vast\nexport PATH="/opt/vast/bin:$PATH" # based on your shell, e.g., fish_add_path /opt/vast/bin\nvast start\n'))),(0,r.kt)(o.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},"For a container deployment, use our official Docker image:",(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"docker pull tenzir/vast\nmkdir -p /tmp/db # persistent state\ndocker run -dt --name=vast --rm -p 5158:5158 -v /tmp/db:/var/lib/vast \\\n  tenzir/vast start\n")))),(0,r.kt)("p",null,"Now that you have running VAST node, you can start ingesting data."))}T.isMDXComponent=!0}}]);