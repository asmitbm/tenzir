"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9622],{52991:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(67294),r=n(34334),i=n(53438),c=n(39960),s=n(13919),a=n(95999);const u="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return o.createElement(c.Z,{href:t,className:(0,r.Z)("card padding--lg",u)},n)}function p(e){let{href:t,icon:n,title:i,description:c}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,r.Z)("text--truncate",l),title:i},n," ",i),c&&o.createElement("p",{className:(0,r.Z)("text--truncate",m),title:c},c))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?o.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const r=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return o.createElement(p,{href:n.href,icon:r,title:n.label,description:null==c?void 0:c.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const n=(0,i.jA)();return o.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return o.createElement(g,e);const c=(0,i.MN)(t);return o.createElement("section",{className:(0,r.Z)("row",n)},c.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(b,{item:e})))))}},71105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(83117),r=(n(67294),n(3905)),i=(n(61839),n(52991));const c={},s="Contribute",a={unversionedId:"contribute/README",id:"contribute/README",title:"Contribute",description:"This section explains how to contribute to the VAST project. As an open-source",source:"@site/docs/contribute/README.md",sourceDirName:"contribute",slug:"/contribute/",permalink:"/docs/contribute/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/contribute/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Sigma",permalink:"/docs/understand/query-language/frontends/sigma"},next:{title:"Code of Conduct",permalink:"/docs/contribute/code-of-conduct"}},u={},l=[],m={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribute"},"Contribute"),(0,r.kt)("p",null,"This section explains how to contribute to the VAST project. As an open-source\nproject with the aim to build a community, we encourage contributions of any\nkind: new code, documentation enhancements, feature requests, suggestions for\nimprovements, or simply just feedback. We strive to make our development\nas transparent as possible. If you have any questions about the process, please\ndo not hesitate to reach out to us in ",(0,r.kt)("a",{parentName:"p",href:"http://slack.tenzir.com"},"Community Slack"),"\nor by opening a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/discussions"},"GitHub Discussion"),"."),(0,r.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);