"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4666],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),k=r,b=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return o?n.createElement(b,i(i({ref:t},u),{},{components:o})):n.createElement(b,i({ref:t},u))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},53328:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:6},i="Notebooks",s={unversionedId:"develop-vast/contributing/notebooks",id:"develop-vast/contributing/notebooks",title:"Notebooks",description:"We use Jupyter notebooks as vehicle for self-contained",source:"@site/docs/develop-vast/contributing/notebooks.md",sourceDirName:"develop-vast/contributing",slug:"/develop-vast/contributing/notebooks",permalink:"/docs/develop-vast/contributing/notebooks",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/develop-vast/contributing/notebooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/docs/develop-vast/contributing/documentation"},next:{title:"Security Policy",permalink:"/docs/develop-vast/contributing/security"}},p={},l=[{value:"Add a notebook",id:"add-a-notebook",level:3},{value:"Run the notebooks",id:"run-the-notebooks",level:3},{value:"Embed the notebooks in the website",id:"embed-the-notebooks-in-the-website",level:2}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notebooks"},"Notebooks"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter notebooks")," as vehicle for self-contained\nguides that illustrate how to use VAST. These notebooks (will) run in CI and\nproduce outputs as side effect, which we capture and include in the\ndocumentation under the section\n",(0,r.kt)("a",{parentName:"p",href:"/docs/try-vast"},"Try VAST"),"."),(0,r.kt)("admonition",{title:"TL;DR",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you just want to make sure the notebooks still work after having made any\nchanges, it suffices to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," in the directory\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/notebooks")),".")),(0,r.kt)("h3",{id:"add-a-notebook"},"Add a notebook"),(0,r.kt)("p",null,"To add a new notebook, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place the notebook in the directory ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/notebooks")),"."),(0,r.kt)("li",{parentName:"ol"},"Add potential dependencies that the notebook requires to the Makefile in the\nsame directory."),(0,r.kt)("li",{parentName:"ol"},"Convert the notebook to Markdown via ",(0,r.kt)("inlineCode",{parentName:"li"},"jupytext --to markdown notebook.ipynb"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the notebook as mentioned in the next section.")),(0,r.kt)("admonition",{title:"Markdown Notebooks",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All notebooks in our repository are in ",(0,r.kt)("a",{parentName:"p",href:"https://jupytext.readthedocs.io/en/latest/formats.html#jupytext-markdown"},"Jupytext Markdown"),"\nformat. This format is a subset of the Docusaurus Markdown of this\ndocumentation, which makes for a harmonious experience of writing docs and user\nguides.")),(0,r.kt)("h3",{id:"run-the-notebooks"},"Run the notebooks"),(0,r.kt)("p",null,"Our notebook stack consists of Jupyter, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mwouts/jupytext"},"jupytext"),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://nbconvert.readthedocs.io/en/latest/"},"nbconvert")," to run notebooks and convert their outputs."),(0,r.kt)("p",null,"The Makefile in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,r.kt)("inlineCode",{parentName:"a"},"examples/notebooks"))," sets up Python virtual\nenvironment with all needed dependencies. To run the notebooks and capture their\noutput, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ipynb")," target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/notebooks\nmake ipynb\n")),(0,r.kt)("p",null,"Thereafter, you can convert the notebook with outputs into Markdown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make md\n")),(0,r.kt)("p",null,"Just running ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," executes both steps in order."),(0,r.kt)("h2",{id:"embed-the-notebooks-in-the-website"},"Embed the notebooks in the website"),(0,r.kt)("p",null,"To integrate notebooks including outputs into the website, we leverage the\nMarkdown conversion from above."),(0,r.kt)("p",null,"To recreate the outputs from a notebook run with Markdown, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),"\ndirectory and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"notebooks")," target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd web\nmake notebooks\n")),(0,r.kt)("p",null,"This triggers the notebook execution as described in the previous section\nand copies the output markdown files over to the website directory. You can now\n",(0,r.kt)("a",{parentName:"p",href:"documentation"},"build the website")," with updated notebooks as usual."))}c.isMDXComponent=!0}}]);