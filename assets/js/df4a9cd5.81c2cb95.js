"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[542],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l="Linux",u={unversionedId:"setup-vast/install/linux",id:"setup-vast/install/linux",title:"Linux",description:"Use our pre-built build packages or [build",source:"@site/docs/setup-vast/install/linux.md",sourceDirName:"setup-vast/install",slug:"/setup-vast/install/linux",permalink:"/docs/setup-vast/install/linux",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/setup-vast/install/linux.md",tags:[],version:"current",lastUpdatedBy:"Dominik Lohmann",lastUpdatedAt:1653311453,formattedLastUpdatedAt:"5/23/2022",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/setup-vast/install/"},next:{title:"macOS",permalink:"/docs/setup-vast/install/macos"}},p={},c=[{value:"systemd",id:"systemd",level:2},{value:"Prepare the host system",id:"prepare-the-host-system",level:3},{value:"Configure the unit",id:"configure-the-unit",level:3},{value:"Distribution Support",id:"distribution-support",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux"},"Linux"),(0,i.kt)("p",null,"Use our ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup-vast/download#packages"},"pre-built build packages")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup-vast/build"},"build\nfrom source")," to install VAST on any Linux distribution."),(0,i.kt)("p",null,"To deploy VAST as system service, you can use our ",(0,i.kt)("a",{parentName:"p",href:"#systemd"},"systemd\nconfiguration"),"."),(0,i.kt)("h2",{id:"systemd"},"systemd"),(0,i.kt)("p",null,"VAST has native ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"systemd\nsupport")," for running as\nsystem service. The service is sandboxed and runs with limited privileges."),(0,i.kt)("h3",{id:"prepare-the-host-system"},"Prepare the host system"),(0,i.kt)("p",null,"Please note that all subsequent commands require ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,i.kt)("inlineCode",{parentName:"p"},"vast"),". You can create them as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --system --user-group vast\n")),(0,i.kt)("p",null,"Make sure that you don't grant any special rights to this user, e.g., do not\nenable ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," or other privileged commands. Once the user exists, you should\ncreate the directory for VAST's persistent data and change the permissions such\nthat it is owned by the new ",(0,i.kt)("inlineCode",{parentName:"p"},"vast")," user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/vast\nchown -R vast:vast /var/lib/vast\n")),(0,i.kt)("p",null,"The systemd unit passes a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"vast.yaml")," configuration\nfile to the VAST process. Make sure that the new user can read the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast.yaml"),"."),(0,i.kt)("h3",{id:"configure-the-unit"},"Configure the unit"),(0,i.kt)("p",null,"Before you begin, find the line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart=")," at the very bottom\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,i.kt)("inlineCode",{parentName:"p"},"vast")," binary and configuration\nfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-config"},"ExecStart=/path/to/vast start\n")),(0,i.kt)("p",null,"In case your VAST deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"CapabilityBoundingSet=CAP_NET_RAW\nAmbientCapabilities=CAP_NET_RAW\n")),(0,i.kt)("p",null,"Then link the unit file to your systemd search path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl link vast.service\n")),(0,i.kt)("p",null,"To have the service start up automatically on system boot, ",(0,i.kt)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,i.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable vast\nsystemctl start vast\n")),(0,i.kt)("h2",{id:"distribution-support"},"Distribution Support"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Community contributions wanted!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are striving to bring VAST into the package managers of all major Linux\ndistributions. Unfortunately we can do so only at a best-effort basis, but\nwe much appreciate community contributions."))))}m.isMDXComponent=!0}}]);