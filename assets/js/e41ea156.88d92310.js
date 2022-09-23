"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1744],{52991:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(67294),s=r(34334),c=r(53438),i=r(39960),o=r(13919),a=r(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,s.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",m),title:c},r," ",c),i&&n.createElement("p",{className:(0,s.Z)("text--truncate",u),title:i},i))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:r}=e;const s=(0,o.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:s,title:r.label,description:null==i?void 0:i.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(E,{item:e})))))}},83029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var n=r(83117),s=(r(67294),r(3905)),c=(r(61839),r(52991));const i={},o="Use",a={unversionedId:"use/README",id:"use/README",title:"Use",description:"This section describes VAST from a user perspective. We cover the following",source:"@site/docs/use/README.md",sourceDirName:"use",slug:"/use/",permalink:"/docs/use/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Monitor",permalink:"/docs/setup/monitor"},next:{title:"Run",permalink:"/docs/use/run/"}},l={},m=[],u={toc:m};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use"},"Use"),(0,s.kt)("p",null,"This section describes VAST from a ",(0,s.kt)("strong",{parentName:"p"},"user perspective"),". We cover the following\ntopics:"),(0,s.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);