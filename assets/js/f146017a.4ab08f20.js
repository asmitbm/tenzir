"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5},i="Documentation",l={unversionedId:"contribute/documentation",id:"contribute/documentation",title:"Documentation",description:"The VAST documentation resides inside [our main GitHub",source:"@site/docs/contribute/documentation.md",sourceDirName:"contribute",slug:"/contribute/documentation",permalink:"/docs/contribute/documentation",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/contribute/documentation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Changelog",permalink:"/docs/contribute/changelog"},next:{title:"Notebooks",permalink:"/docs/contribute/notebooks"}},s={},c=[{value:"Build and view locally",id:"build-and-view-locally",level:2},{value:"Write content",id:"write-content",level:2},{value:"Edit diagrams",id:"edit-diagrams",level:2},{value:"Cater to dark mode",id:"cater-to-dark-mode",level:2},{value:"Scale images",id:"scale-images",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The VAST documentation resides inside ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast"},"our main GitHub\nrepository")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/web/docs"},(0,r.kt)("inlineCode",{parentName:"a"},"/web/docs")),".\nWe use ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," as website framework."),(0,r.kt)("h2",{id:"build-and-view-locally"},"Build and view locally"),(0,r.kt)("p",null,"To view the entire site (including the documentation) locally,\nchange to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/web/"},(0,r.kt)("inlineCode",{parentName:"a"},"/web")),"\ndirectory and invoke ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"yarn")),", or to be on the safe side,\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install --frozen-lockfile")," to avoid pollution from global dependencies.\nThen build and serve the site via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,r.kt)("p",null,"Browse to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," to view the site. Docusaurus should spawn\nyour default browser automatically upon invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,r.kt)("h2",{id:"write-content"},"Write content"),(0,r.kt)("p",null,"Docusaurus uses an ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"enhanced flavor of\nMarkdown")," that allows for\nembedding richer content elements, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Callouts/admonitions"),"\nfor block notes, infos, and warnings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/react"},"React JSX components")," via\n",(0,r.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"MDX"),", specifically via the built-in UI component library\n",(0,r.kt)("a",{parentName:"li",href:"https://infima.dev/"},"Infima")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/math-equations"},"Math equations"),"\nvia ",(0,r.kt)("a",{parentName:"li",href:"https://katex.org/"},"KaTeX"))),(0,r.kt)("p",null,"We encourage making judicious use of these extras for an optimal reading\nexperience."),(0,r.kt)("h2",{id:"edit-diagrams"},"Edit diagrams"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://excalidraw.com"},"Excalidraw")," as primary tool to create sketches\nof architectural diagrams. It is open source and has a neat collaboration\nfeature: the ability to ",(0,r.kt)("em",{parentName:"p"},"embed the source code")," of the sketch into the exported\nPNG or SVG images."),(0,r.kt)("p",null,"This means the editing workflow looks as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("a",{parentName:"li",href:"https://excalidraw.com"},"https://excalidraw.com")," and click ",(0,r.kt)("em",{parentName:"li"},"Upload")," in the top left"),(0,r.kt)("li",{parentName:"ol"},"Select the PNG or SVG you would like to edit"),(0,r.kt)("li",{parentName:"ol"},"Make your edits in Excalidraw"),(0,r.kt)("li",{parentName:"ol"},"Re-export the drawing in size ",(0,r.kt)("strong",{parentName:"li"},"2x")," and ",(0,r.kt)("strong",{parentName:"li"},'check the box "Embed scene"'))),(0,r.kt)("p",null,'The last part is crucial: If you don\'t check "Embed scene" it will no longer be\nable to recover the original diagram source.'),(0,r.kt)("admonition",{title:"Transparent Background",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If possible, ",(0,r.kt)("em",{parentName:"p"},"uncheck"),' the box "Background" to generate a transparent\nbackground, as it makes images fit in more seamlessly.')),(0,r.kt)("h2",{id:"cater-to-dark-mode"},"Cater to dark mode"),(0,r.kt)("p",null,"Our setup makes it easy to render different images whether light or dark mode is\ntoggled. We use the same CSS that GitHub supports, i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"#gh-dark-mode-only"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"#gh-light-mode-only"),"."),(0,r.kt)("p",null,"Here's an example to include one image that exists in two variants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"![Image Description](/path/to/dark.png#gh-dark-mode-only)\n![Image Description](/path/to/light.png#gh-light-mode-only)\n")),(0,r.kt)("h2",{id:"scale-images"},"Scale images"),(0,r.kt)("p",null,"We're making use of the alt text in Markdown images in combination with some\nCSS3 features to specify a maximum width:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"![alt #width500](/path/to/img)\n")),(0,r.kt)("p",null,"The suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"#width500")," gets picked up by the following CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'img[alt$="#width500"]{\n  max-width: 500px;\n  display: block;\n}\n')),(0,r.kt)("p",null,"We currently support the following classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#width300")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#width400")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#width500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#width600"))),(0,r.kt)("p",null,"This should hopefully cover the majority of use cases."))}u.isMDXComponent=!0}}]);