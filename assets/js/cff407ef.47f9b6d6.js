"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>N,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>i(e,o(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const h={title:"Tenzir v4.1",authors:["dominiklohmann"],date:new Date("2023-08-31T00:00:00.000Z"),last_updated:new Date("2023-12-12T00:00:00.000Z"),tags:["release","pipelines","operators","app"]},w=void 0,f={permalink:"/blog/tenzir-v4.1",source:"@site/blog/tenzir-v4.1/index.md",title:"Tenzir v4.1",description:"After our successful launch of app.tenzir.com of Tenzir v4.0 at",date:"2023-08-31T00:00:00.000Z",formattedDate:"August 31, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"pipelines",permalink:"/blog/tags/pipelines"},{label:"operators",permalink:"/blog/tags/operators"},{label:"app",permalink:"/blog/tags/app"}],readingTime:3.825,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Tenzir v4.1",authors:["dominiklohmann"],date:"2023-08-31T00:00:00.000Z",last_updated:"2023-12-12T00:00:00.000Z",tags:["release","pipelines","operators","app"]},prevItem:{title:"Tenzir v4.2",permalink:"/blog/tenzir-v4.2"},nextItem:{title:"A First Look at ES|QL",permalink:"/blog/a-first-look-at-esql"}},k={authorsImageUrls:[void 0]},g=[{value:"Pausing Pipelines",id:"pausing-pipelines",level:2},{value:"Sigma Operator",id:"sigma-operator",level:2},{value:"Show Operator",id:"show-operator",level:2},{value:"Compress and Decompress Operators",id:"compress-and-decompress-operators",level:2},{value:"Small Things",id:"small-things",level:2}],M={toc:g},x="wrapper";function N(e){var t=e,{components:r}=t,i=u(t,["components"]);return(0,a.kt)(x,c(m(m({},M),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After our successful launch of ",(0,a.kt)("a",m({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com")," of Tenzir v4.0 at\nBlack Hat, ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v4.1.0"}),"the new v4.1 release")," continues with several\nenhancements based on early feedback. We bring to you a (i) new mechanism to\npause pipelines, (ii) a new operator to match Sigma rules, (iii) new operators\nfor in-pipeline (de)compression, and (iv) a revamp of the ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," operator."),(0,a.kt)("p",null,(0,a.kt)("figure",m({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,a.kt)("svg",m({parentName:"figure"},{viewBox:"0 0 300 100",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO2YW2/aSFx1MDAxNIDf+Vx1MDAxNYi+NnTul741KWmTqKttyVx1MDAwNjarKnLtXHUwMDAxW1x1MDAxONvrXHUwMDBiJKry33fsXHUwMDEwj7FxXHUwMDEyVKFaylx1MDAxYVx08LnMmct3fFx1MDAwZfzs9fuD9C5Sg/f9gbq1Ld9zYms9eJvLVypOvDDQKlTcJ2FcdTAwMTbbhaWbplHy/t07K4qGxmtoh8tcdTAwMDdP5aulXG7SRNv+o+/7/Z/FezWW73tRolxu80JRXHRG68I/wqCIXHUwMDBiIVx1MDAwN1xiU1wiWGnhJVx1MDAxZnWwVDlaPbP8RFx1MDAxOU0uXHUwMDFh+N+m+PMkWDlri95NL4/j5dVcdTAwMTiZqDPP98fpnf+wKst2s7gypySNw4WaeE7qaj2pyUu/JNTrN15xmM3dQCX56mEpXHIjy/bSu1xcXHUwMDA2QCm1gnkxhpHc5pEqXHUwMDE2uVx1MDAwN6rcP8Q+XHT9MM5jv1x1MDAwMUAwRU30XHUwMDFmlr2Y6ylcdTAwMDROaZPGVpBEVqxPxNitN6tcdTAwMTJmaFd5czfdliWq2FrCXHUwMDE4w1BgUSryXHUwMDE40ZlTXHUwMDFj8Xezn7G1VGe5R5D5fnVLXHUwMDAyZ7MljyhcdTAwMThcdTAwMTjQRnJvXHUwMDE2kduPKlx1MDAxMJlcYlnkWFx1MDAwZsdccpnEXGJRICDAstT7XrCoh/dDe2FcYulVYjW41O47oYSAt1GJSI4kRC+HMpral/MrKlx1MDAxNufjM2v22Vx1MDAxZKnRJG6Bslx1MDAwNtdvQ1x1MDAxMrEhxvqdcFx0haRyXHUwMDFiUFx1MDAwNIZcdTAwMTJcdTAwMTCBtFx1MDAwMlFcdTAwMDT5r+DasHlEXHUwMDE10yFcdTAwMDNcdTAwMDBcdTAwMTPMpVx1MDAxMFRcdTAwMDDAmug+YbNBmTFKXHUwMDEwXHUwMDEwXHUwMDAwdVx1MDAxMGVO9ObugXJlm604PfZcdTAwMDLHXHUwMDBi5nVcdTAwMTdcdTAwMTU4LVx1MDAxYd9K0pNwufRSPY0/Qy9I61x1MDAxNsW4XHUwMDFm4jhcXLvKauyFXHUwMDFluVVcdTAwMTflw5lcdTAwMDKQX+Zb39BV3JTfv7/dad1+qvlcdTAwMDX5UIsg11xcSoKkNnxuvK3ozcH3cq9Mvlf9bHvCPFH5MKpcdTAwMGLLysc5gFxiXHUwMDEwaDL+uYfMqTtdXHUwMDFjWyr+xP3JXHUwMDE3hzP75Dw96nrlo3tUPiWkLpSHrnxcYmisXHUwMDE45LSLpU9KzsxcdTAwMDPuQKXvXHQqXHTAuiejXHUwMDFjvJjKazX7m0y+xl5cdTAwMDbdm1x1MDAxZsnsXCKepna3S1x1MDAxZsV0m0n0S0y+gSp/NXncgSNp4FxipcSMcdjJTmxfXHUwMDFjX0v52rIm+1x1MDAxNozWvCR14WNeXHUwMDEyXHUwMDAwXHThUFx1MDAxYUaeS0uxyNwjcf3XeXxzdPYps5kjfNbxtCSNXHUwMDFl9PelpYRcdTAwMTJhxv/PyleTlU+0cVx1MDAxNTzqXHUwMDA1XHUwMDEz6Vx1MDAxM5FcYsqXXHUwMDE3TM+69U9X5OPN19F1ki6vL25Or0TX2zi2R1x1MDAxYsdx/jp0XHUwMDFiXHUwMDA3ud52XHUwMDBlaGXnO5OhuoWSzMzrUG1cdTAwMWNcdTAwMTCtWFxu/fCUurN4+a+LL/9erEbrLLj9cJklY/6N+jZfd7tgMISGXHUwMDEyMSwpRFxiY1xut1x1MDAxMUV4XGKogFx1MDAxMnOAhVx1MDAwNLg+sb2IbdiU/2HAoVx1MDAxMFx1MDAxMFx0veNcdTAwMDJcdTAwMTFcZsWu/zDgUFxurPs8ziRcdTAwMDJcZklap5noXHUwMDE2XHUwMDEwcVSZY3dgRlxiXG6+XHUwMDA3zK+y3DSP+Dn3dnBcdTAwMGUx3n6raa2dvY3/wIqicapBKYFcdTAwMWKsPLU+3pE4s+JcdTAwMWH0NvzlT1x1MDAxMlVwet+7/1x1MDAwZjlz6E0ifQ==",(0,a.kt)("defs",{parentName:"svg"},(0,a.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,a.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#0086e5",strokeLineCap:"round",strokeWidth:"4",d:"M64.23 12.11c6.7 1.76 14.13 7.85 18.48 13.61 4.34 5.76 7.17 13.47 7.6 20.95.44 7.47-1.42 17.33-4.98 23.91-3.55 6.58-9.79 12.45-16.35 15.57-6.57 3.12-15.85 3.72-23.04 3.15-7.19-.58-14.46-2.42-20.11-6.61-5.65-4.19-11.27-11.71-13.81-18.54-2.54-6.82-3.1-15.36-1.44-22.39 1.66-7.04 6.16-14.72 11.42-19.81 5.25-5.09 12.2-9.48 20.11-10.73s22.03 2.08 27.36 3.26c5.33 1.17 4.81 3.24 4.62 3.76m-16.22-7.36c6.68.91 14.1 4.32 19.19 9.54 5.09 5.22 9.58 14.36 11.36 21.79 1.79 7.42 1.51 16.06-.66 22.76-2.18 6.71-6.57 13.11-12.4 17.48-5.83 4.37-15.08 8.31-22.57 8.74-7.49.43-16.28-2.54-22.38-6.17-6.1-3.63-10.88-9.38-14.23-15.61-3.34-6.23-6.25-14.66-5.83-21.78.42-7.12 3.91-15.3 8.36-20.93 4.45-5.63 11.83-10.06 18.35-12.88 6.53-2.82 17.32-3.62 20.8-4.03 3.47-.42.19.75.06 1.55"})),(0,a.kt)("g",m({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,a.kt)("path",m({parentName:"g"},{fill:"#0086e5",strokeWidth:"0",d:"m35.294 32.205 31.32 10.78 6.43 7.59-1.08-1.23-15.98 10.02-11.57 6.16-7.01 1.52-5.55-5.26 5.42-31.02"})),(0,a.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#0086e5",strokeWidth:"4",d:"M36.994 31.445c5.84 3.11 34.12 11.34 33.86 17.33-.26 6-29.63 21.51-35.43 18.65-5.8-2.86.62-29.91.64-35.8m-.19-.94c6.25 3.39 36.8 13.86 37.12 19.67.33 5.81-29.02 18.69-35.15 15.21-6.14-3.49-1.59-30.1-1.67-36.12"}))),(0,a.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#e89400",strokeLineCap:"round",strokeWidth:"4",d:"M165.35 12.48c6.49 2.14 12.99 9.57 17.11 15.6 4.11 6.03 7.26 13.64 7.56 20.56.3 6.93-2 14.84-5.75 20.97-3.74 6.13-10.14 12.47-16.72 15.8-6.57 3.33-15.64 5.03-22.72 4.18-7.07-.85-14.29-4.79-19.74-9.26-5.44-4.48-10.69-10.87-12.92-17.6-2.24-6.74-2.27-15.87-.48-22.81 1.78-6.93 5.88-14.03 11.17-18.8 5.3-4.78 12.99-8.71 20.62-9.85 7.63-1.14 20.71 2.04 25.17 2.99 4.46.95 1.95 2.22 1.58 2.7m-6.37-3.4c6.61 1.85 12.81 5.63 17.08 11.29 4.28 5.66 7.9 15.47 8.57 22.66.67 7.19-1.3 14.04-4.54 20.48-3.25 6.44-8.8 14.64-14.93 18.13-6.14 3.49-14.34 3.69-21.88 2.79-7.55-.89-17.2-4.08-23.4-8.15-6.19-4.07-11.72-9.84-13.78-16.27-2.06-6.44-.36-15.05 1.42-22.33 1.78-7.28 4.29-16.29 9.25-21.35 4.95-5.06 13.25-7.61 20.49-9.01 7.24-1.4 19.1.16 22.94.61 3.83.45.29 1.55.07 2.07"})),(0,a.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#e89400",strokeLineCap:"round",strokeWidth:"4",d:"M144.87 28.99c-.07 6.59-.1 33.75-.25 40.55m-1.28-38.46c-.26 6.74-.36 33.11.14 39.76M159.64 30.77c.13 6.59.3 32.58.25 39.26m-1.37-39.9c.04 6.75.86 34.99.88 41.45"})),(0,a.kt)("path",m({parentName:"svg"},{fill:"none",stroke:"#737373",strokeLineCap:"round",strokeWidth:"4",d:"M247.36 9.45c6.74-1.14 15.08 1.43 21.26 5.07 6.18 3.63 12.1 10.33 15.8 16.76 3.71 6.43 6.85 14.66 6.43 21.84-.42 7.19-4.3 15.7-8.95 21.29-4.65 5.59-12.14 9.88-18.94 12.23-6.79 2.36-15.07 3.45-21.83 1.89-6.77-1.57-13.64-6.29-18.76-11.29-5.13-5-10.54-11.76-12.01-18.71-1.47-6.95.39-16.36 3.2-23 2.8-6.64 6.62-12.53 13.62-16.84 6.99-4.32 22.72-7.9 28.34-9.06 5.61-1.16 5.71 1.49 5.34 2.11m5.27.74c6.62 2.53 13.84 10.76 17.95 17.21 4.11 6.45 6.92 14.74 6.73 21.5-.19 6.75-3.91 13.38-7.89 19.02-3.97 5.63-9.42 11.39-15.96 14.78-6.55 3.39-16.17 6.59-23.3 5.56-7.13-1.04-14.32-6.91-19.47-11.78-5.15-4.86-9.14-10.53-11.42-17.43-2.29-6.9-3.99-17.1-2.28-23.98 1.72-6.88 6.71-12.59 12.56-17.3 5.85-4.7 15.25-9.98 22.56-10.93 7.31-.95 17.93 4.2 21.32 5.23 3.4 1.03-.44.26-.94.97"})),(0,a.kt)("g",m({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,a.kt)("path",m({parentName:"g"},{fill:"#737373",strokeWidth:"0",d:"m234.716 32.808-2.37 27.62 2.42 3.34 3.78 2.84 8.56.73 12.93.02 4.96-2.9 1.31-5.3 4.3-9.03-1.16-11.58-6.47-5.1-6.48-3.57-22.31 3.64"})),(0,a.kt)("path",m({parentName:"g"},{fill:"none",stroke:"#737373",strokeWidth:"4",d:"M234.106 32.918c.2 5.33-6.03 27.12-1.05 32.28 4.99 5.16 25.68 4.13 30.97-1.32 5.3-5.45 5.79-26.1.79-31.39-5-5.29-25.37-.53-30.78-.35m-.77-.34c.15 5.54-6.62 29.55-1.08 35.02 5.54 5.46 28.85 3.35 34.33-2.23 5.48-5.59 4.12-25.87-1.44-31.3-5.57-5.42-26.66-1.15-31.93-1.24"})))))),(0,a.kt)("h2",m({},{id:"pausing-pipelines"}),"Pausing Pipelines"),(0,a.kt)("p",null,"Tenzir now supports pausing pipelines. Previously, users were able to deploy and\nstart pipelines, and to let them run until they completed (or failed) or\nmanually stopped. With new paused state, we now have the following five possible\nstates of a pipeline:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Created"),": The pipeline was created, but never started"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Running"),": The pipeline is processing data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Paused"),": A running pipeline has been suspended but still retains its\nin-memory state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Stopped"),": A pipeline is not running and has no in-memory state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Failed"),": The pipeline stopped unexpectedly")),(0,a.kt)("p",null,"Pausing suspends a pipeline in an instant, causing its execution to stop. When a\npaused pipeline is started, it resumes right where it left off as opposed to\nrestarting all the way from the beginning."),(0,a.kt)("p",null,"We're also making use of this feature in the app with a new pause action button.\nA new tab bar at the top makes it easy to see all pipeline states at a glance.\nThese features will be enabled in the coming days in the app. Here's a sneak\npreview of a mock from our designer:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pause Feature Mock",src:n(59306).Z,width:"1376",height:"290"})),(0,a.kt)("p",null,"You can also pause a pipeline through the API. Use the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://docs.tenzir.com/api#/paths/~1pipeline~1update/post"}),"/pipeline/update\nendpoint")," with the new ",(0,a.kt)("inlineCode",{parentName:"p"},"pause")," action to suspend a pipeline.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," action resumes a pipeline that is currently paused."),(0,a.kt)("h2",m({},{id:"sigma-operator"}),"Sigma Operator"),(0,a.kt)("p",null,"The experimental ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/operators/sigma"}),(0,a.kt)("inlineCode",{parentName:"a"},"sigma")," operator")," executes ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma\nrules")," on its input and outputs matching events. The operator can\nwork both on files and on directories of rules. Rule directories may be updated\nwhile the operator is running, so that adding a new rule to an already deployed\npipeline is as simple as dropping a Sigma rule into the configured directory."),(0,a.kt)("p",null,"Consider the ",(0,a.kt)("inlineCode",{parentName:"p"},"sigma")," operator as one concrete instance of ",(0,a.kt)("a",m({parentName:"p"},{href:"https://docs.tenzir.com/use-cases/unified-detection"}),"security content\nexecution")," that we enable live and retrospectively. For\nexample, you can perform historical matching via ",(0,a.kt)("inlineCode",{parentName:"p"},"export | sigma")," and streaming\nexecution over a Kafka source via ",(0,a.kt)("inlineCode",{parentName:"p"},"from kafka --topic events | sigma"),". Now that\nwe have the capability in place, we are working on a unified interface to live\nand retro matching."),(0,a.kt)("h2",m({},{id:"show-operator"}),"Show Operator"),(0,a.kt)("p",null,"The experimental ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/operators/show"}),(0,a.kt)("inlineCode",{parentName:"a"},"show")," operator")," supersedes the\n",(0,a.kt)("inlineCode",{parentName:"p"},"version")," operator. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"show <aspect>")," to show various aspects of a Tenzir\nnode. The following aspects are currently available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build"),": shows compile-time build information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config"),": shows all current configuration options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectors"),": shows all available ","[connectors][connectors-docs]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),": shows information about build-time dependencies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fields"),": shows all fields of existing tables at a remote node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"formats"),": shows all available ","[formats][formats-docs]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operators"),": shows all available ","[operators][operators-docs]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"partitions"),": shows all table partitions of a remote node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pipelines"),": shows all managed pipelines of a remote node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"plugins"),": shows all loaded plugins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"types"),": shows all known types at a remote node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version"),": shows the Tenzir version.")),(0,a.kt)("p",null,"This enables powerful introspection use-cases. Here are some examples that we\nfound useful at Tenzir."),(0,a.kt)("p",null,"Show all running pipelines with an ingress of over 10 MiB:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"show pipelines\n| where total.ingress.num_approx_bytes > 10 Mi\n")),(0,a.kt)("p",null,"Show the memory usage of the node's catalog by schema in descending order:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"show partitions\n| summarize memory_usage=sum(memory_usage) by schema\n| sort memory_usage desc\n")),(0,a.kt)("p",null,"Print the configured endpoint of the node (returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if not customized):"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"show config\n| put tenzir.endpoint\n")),(0,a.kt)("h2",m({},{id:"compress-and-decompress-operators"}),"Compress and Decompress Operators"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/operators/compress"}),(0,a.kt)("inlineCode",{parentName:"a"},"compress"))," and ",(0,a.kt)("a",m({parentName:"p"},{href:"/next/operators/decompress"}),(0,a.kt)("inlineCode",{parentName:"a"},"decompress"))," operators\nmake it easy to read and write compressed data. The operator uses Apache Arrow's\ncompression utilities under the hood, and transparently supports all options\nthat Apache Arrow supports for streaming compression. The currently supported\ncodecs are ",(0,a.kt)("inlineCode",{parentName:"p"},"brotli"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bz2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lz4"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"zstd"),"."),(0,a.kt)("p",null,"For example, the following pipeline creates a Gzip-compressed NDJSON file that\ncontains all events that were previously imported at the node:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"export\n| write json --compact-output\n| compress gzip\n| save file /tmp/backup.json.gz\n")),(0,a.kt)("h2",m({},{id:"small-things"}),"Small Things"),(0,a.kt)("p",null,"We're constantly polishing the node's pipeline execution engine, and improving\nthe app's usability. Since the last release, we've improved pipeline execution\nto make slow pipelines return their first results faster, and have improved the\nrendering of the Explorer's results table for small result sets. The inline help\nin the Explorer's pipeline editor is now more reliable."))}N.isMDXComponent=!0},59306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pause-mock-6ddc0f8bb5b47d0f11af6c2291c704b7.png"}}]);