"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return r?o.createElement(f,c(c({ref:t},m),{},{components:r})):o.createElement(f,c({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<n;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var o=r(3905),a=Object.defineProperty,n=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>n(e,c(t)),d=(e,t)=>{var r={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r};const f={title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",authors:"mavam",image:"/img/blog/slack-to-discord.excalidraw.svg",date:new Date("2023-02-09T00:00:00.000Z"),tags:["community","chat","discord"]},g=void 0,b={permalink:"/blog/from-slack-to-discord",source:"@site/blog/from-slack-to-discord/index.md",title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"community",permalink:"/blog/tags/community"},{label:"chat",permalink:"/blog/tags/chat"},{label:"discord",permalink:"/blog/tags/discord"}],readingTime:.785,hasTruncateMarker:!0,authors:[{name:"Matthias Vallentin",title:"Founder & CEO",url:"https://github.com/mavam",email:"matthias@tenzir.com",imageURL:"https://github.com/mavam.png",key:"mavam"}],frontMatter:{title:"From Slack to Discord",description:"Moving our community chat from Slack to Discord",authors:"mavam",image:"/img/blog/slack-to-discord.excalidraw.svg",date:"2023-02-09T00:00:00.000Z",tags:["community","chat","discord"]},prevItem:{title:"VAST v3.0",permalink:"/blog/vast-v3.0"},nextItem:{title:"The New REST API",permalink:"/blog/the-new-rest-api"}},h={authorsImageUrls:[void 0]},y=[],v={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,o.kt)(k,u(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are moving our community chat from Slack to Discord. Why? TL;DR: because\nDiscord has better support for community building. VAST is not the first project\nthat abandons Slack. ",(0,o.kt)("a",p({parentName:"p"},{href:"https://blog.meilisearch.com/from-slack-to-discord-our-migration/"}),"Numerous")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://appwrite.io/"}),"open-source"),"\n",(0,o.kt)("a",p({parentName:"p"},{href:"https://www.deepset.ai/blog/migration-to-discord"}),"projects")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://sst.dev/blog/moving-to-discord.html"}),"have")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://www.qovery.com/blog/feedback-from-slack-to-discord-13-months-later"}),"done")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://neo4j.com/blog/neo4j-community-is-migrating-from-slack-to-discord/"}),"the")," ",(0,o.kt)("a",p({parentName:"p"},{href:"https://discord.com/open-source"}),"same"),"."))}O.isMDXComponent=!0}}]);