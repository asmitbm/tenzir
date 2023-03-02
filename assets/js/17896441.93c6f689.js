(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{18808:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>et});var a=n(67294),r=n(17766),l=n(3211);const o=a.createContext(null);function c({children:e,content:t}){const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return a.createElement(o.Provider,{value:n},e)}function i(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:n,assets:l}=i();return a.createElement(r.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!=(e=l.image)?e:n.image})}var d=n(86010),m=n(13044),u=n(14699),p=n(2902),b=Object.defineProperty,f=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))E.call(t,n)&&y(e,n,t[n]);return e},L=(e,t)=>f(e,v(t));function N(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(p.Z,L(O({},t),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(p.Z,L(O({},n),{subLabel:a.createElement(u.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function C(){const{metadata:e}=i();return a.createElement(N,{previous:e.previous,next:e.next})}var w=n(24305),_=n(11128),k=n(96688),x=n(55116),j=n(98436),Z=n(44080),P=Object.defineProperty,T=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&I(e,n,t[n]);if(T)for(var n of T(t))U.call(t,n)&&I(e,n,t[n]);return e};const M={unreleased:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return a.createElement(u.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:a.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function B(e){const t=M[e.versionMetadata.banner];return a.createElement(t,A({},e))}function S({versionLabel:e,to:t,onClick:n}){return a.createElement(u.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:a.createElement("b",null,a.createElement(_.Z,{to:t,onClick:n},a.createElement(u.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function D({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,w.Z)(),{pluginId:r}=(0,k.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,j.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,k.Jo)(r),i=null!=o?o:(s=c).docs.find((e=>e.id===s.mainDocId));var s;return a.createElement("div",{className:(0,d.Z)(e,x.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(B,{siteTitle:n,versionMetadata:t})),a.createElement("div",{className:"margin-top--md"},a.createElement(S,{versionLabel:c.label,to:i.path,onClick:()=>l(c.name)})))}function V({className:e}){const t=(0,Z.E)();return t.banner?a.createElement(D,{className:e,versionMetadata:t}):null}function R({className:e}){const t=(0,Z.E)();return t.badge?a.createElement("span",{className:(0,d.Z)(e,x.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(u.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function F({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return a.createElement(u.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function z({lastUpdatedBy:e}){return a.createElement(u.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,e)}}," by {user}")}function q({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return a.createElement("span",{className:x.k.common.lastUpdated},a.createElement(u.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?a.createElement(F,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?a.createElement(z,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var G=n(41040),W=n(78741);const $={lastUpdated:"lastUpdated_vwxv"};var J=Object.defineProperty,Q=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))X.call(t,n)&&K(e,n,t[n]);if(Q)for(var n of Q(t))Y.call(t,n)&&K(e,n,t[n]);return e};function te(e){return a.createElement("div",{className:(0,d.Z)(x.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(W.Z,ee({},e))))}function ne({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:r}){return a.createElement("div",{className:(0,d.Z)(x.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},e&&a.createElement(G.Z,{editUrl:e})),a.createElement("div",{className:(0,d.Z)("col",$.lastUpdated)},(t||n)&&a.createElement(q,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:n})))}function ae(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,c=o.length>0,s=!!(t||n||l);return c||s?a.createElement("footer",{className:(0,d.Z)(x.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(te,{tags:o}),s&&a.createElement(ne,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var re=n(81564),le=n(2968);const oe={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var ce=Object.defineProperty,ie=Object.defineProperties,se=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,pe=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,be=(e,t)=>{for(var n in t||(t={}))me.call(t,n)&&pe(e,n,t[n]);if(de)for(var n of de(t))ue.call(t,n)&&pe(e,n,t[n]);return e},fe=(e,t)=>ie(e,se(t)),ve=(e,t)=>{var n={};for(var a in e)me.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&de)for(var a of de(e))t.indexOf(a)<0&&ue.call(e,a)&&(n[a]=e[a]);return n};function ge(e){var t=e,{collapsed:n}=t,r=ve(t,["collapsed"]);return a.createElement("button",fe(be({type:"button"},r),{className:(0,d.Z)("clean-btn",oe.tocCollapsibleButton,!n&&oe.tocCollapsibleButtonExpanded,r.className)}),a.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const he={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Ee({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:r}){const{collapsed:l,toggleCollapsed:o}=(0,re.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(he.tocCollapsible,!l&&he.tocCollapsibleExpanded,t)},a.createElement(ge,{collapsed:l,onClick:o}),a.createElement(re.z,{lazy:!0,className:he.tocCollapsibleContent,collapsed:l},a.createElement(le.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:r})))}const ye={tocMobile:"tocMobile_ITEo"};function Oe(){const{toc:e,frontMatter:t}=i();return a.createElement(Ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(x.k.docs.docTocMobile,ye.tocMobile)})}var Le=n(71378);function Ne(){const{toc:e,frontMatter:t}=i();return a.createElement(Le.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:x.k.docs.docTocDesktop})}var Ce=n(94804),we=n(47517);function _e({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(x.k.docs.docMarkdown,"markdown")},t&&a.createElement("header",null,a.createElement(Ce.Z,{as:"h1"},t)),a.createElement(we.Z,null,e))}var ke=n(22093),xe=n(94016),je=n(10433),Ze=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Ue=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ie=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Ue(e,n,t[n]);if(Pe)for(var n of Pe(t))He.call(t,n)&&Ue(e,n,t[n]);return e};function Ae(e){return a.createElement("svg",Ie({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Me={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Be(){const e=(0,je.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(_.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(Ae,{className:Me.breadcrumbHomeIcon})))}const Se={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};var De=Object.defineProperty,Ve=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,Fe=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,Ge=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,We=(e,t)=>{for(var n in t||(t={}))ze.call(t,n)&&Ge(e,n,t[n]);if(Fe)for(var n of Fe(t))qe.call(t,n)&&Ge(e,n,t[n]);return e},$e=(e,t)=>Ve(e,Re(t));function Je({children:e,href:t,isLast:n}){const r="breadcrumbs__link";return n?a.createElement("span",{className:r,itemProp:"name"},e):t?a.createElement(_.Z,{className:r,href:t,itemProp:"item"},a.createElement("span",{itemProp:"name"},e)):a.createElement("span",{className:r},e)}function Qe({children:e,active:t,index:n,addMicrodata:r}){return a.createElement("li",$e(We({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,a.createElement("meta",{itemProp:"position",content:String(n+1)}))}function Xe(){const e=(0,ke.s1)(),t=(0,xe.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(x.k.docs.docBreadcrumbs,Se.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Be,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(Qe,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Je,{href:t.href,isLast:r},t.label))})))):null}const Ye={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ke({children:e}){const t=function(){const{frontMatter:e,toc:t}=i(),n=(0,m.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(Oe,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Ne,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!t.hidden&&Ye.docItemCol)},a.createElement(V,null),a.createElement("div",{className:Ye.docItemContainer},a.createElement("article",null,a.createElement(Xe,null),a.createElement(R,null),t.mobile,a.createElement(_e,null,e),a.createElement(ae,null)),a.createElement(C,null))),t.desktop&&a.createElement("div",{className:"col col--3"},t.desktop))}function et(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(s,null),a.createElement(Ke,null,a.createElement(n,null))))}},41040:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(67294),r=n(14699),l=n(55116),o=n(86010);const c={iconEdit:"iconEdit_Z9Sw"};var i=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&u(e,n,t[n]);return e},b=(e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n};function f(e){var t=e,{className:n}=t,r=b(t,["className"]);return a.createElement("svg",p({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c.iconEdit,n),"aria-hidden":"true"},r),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function v({editUrl:e}){return a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(f,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),r=n(86010),l=n(11128);function o(e){const{permalink:t,title:n,subLabel:o,isNext:c}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},71378:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(67294),r=n(86010),l=n(2968);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var c=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))u.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>i(e,s(t)),v=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const g="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function E(e){var t=e,{className:n}=t,c=v(t,["className"]);return a.createElement("div",{className:(0,r.Z)(o.tableOfContents,"thin-scrollbar",n)},a.createElement(l.Z,f(b({},c),{linkClassName:g,linkActiveClassName:h})))}},2968:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var a=n(67294),r=n(57362),l=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&m(e,n,t[n]);return e},p=(e,t)=>o(e,c(t)),b=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};function f(e){const t=e.map((e=>p(u({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const n=e,{parentIndex:r}=n,l=b(n,["parentIndex"]);r>=0?t[r].children.push(l):a.push(l)})),a}function v({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const a=v({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[p(u({},e),{children:a})]:a}))}function g(e){const t=e.getBoundingClientRect();return t.top===t.bottom?g(e.parentNode):t}function h(e,{anchorTopOffset:t}){var n,a;const r=e.find((e=>g(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(g(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null}return null!=(a=e[e.length-1])?a:null}function E(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function y(e){const t=(0,a.useRef)(void 0),n=E();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=h(c,{anchorTopOffset:n.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}const O=a.memo((function e({toc:t,className:n,linkClassName:r,isChild:l}){return t.length?a.createElement("ul",{className:l?void 0:n},t.map((t=>a.createElement("li",{key:t.id},a.createElement("a",{href:`#${t.id}`,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:t.value}}),a.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:r}))))):null}));var L=Object.defineProperty,N=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&_(e,n,t[n]);if(N)for(var n of N(t))w.call(t,n)&&_(e,n,t[n]);return e},x=(e,t)=>{var n={};for(var a in e)C.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&N)for(var a of N(e))t.indexOf(a)<0&&w.call(e,a)&&(n[a]=e[a]);return n};function j(e){var t=e,{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:i,maxHeadingLevel:s}=t,d=x(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,r.L)(),u=null!=i?i:m.tableOfContents.minHeadingLevel,p=null!=s?s:m.tableOfContents.maxHeadingLevel,b=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,a.useMemo)((()=>v({toc:f(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:n,minHeadingLevel:u,maxHeadingLevel:p});return y((0,a.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:p}}),[o,c,u,p])),a.createElement(O,k({toc:b,className:l,linkClassName:o},d))}},77701:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),r=n(86010),l=n(11128);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c({permalink:e,label:t,count:n}){return a.createElement(l.Z,{href:e,className:(0,r.Z)(o.tag,n?o.tagWithCount:o.tagRegular)},t,n&&a.createElement("span",null,n))}},78741:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),r=n(86010),l=n(14699),o=n(77701);const c={tags:"tags_jXut",tag:"tag_QGVx"};function i({tags:e}){return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>a.createElement("li",{key:t,className:c.tag},a.createElement(o.Z,{label:e,permalink:t}))))))}},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=11748}}]);