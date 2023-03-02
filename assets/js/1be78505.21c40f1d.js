"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,9343],{60321:(e,t,a)=>{a.r(t),a.d(t,{default:()=>at});var n=a(67294),r=a(86010),o=a(17766),l=a(55116),i=a(53178),c=a(22093),s=a(44080),d=a(92827),m=a(32687),u=a(14699),b=a(37287),p=a(10442);const f={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,a]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},n)=>{const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:t>=o?(l(),a(!1)):t<e?a(!1):t+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,a(!1))})),{shown:t,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",l.k.common.backToTopButton,f.backToTopButton,e&&f.backToTopButtonShow),type:"button",onClick:t})}var v=a(16550),E=a(13044),g=a(57362),y=a(28902),k=Object.defineProperty,_=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,C=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&C(e,a,t[a]);if(_)for(var a of _(t))S.call(t,a)&&C(e,a,t[a]);return e};function w(e){return n.createElement("svg",O({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const x={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N({onClick:e}){return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",x.collapseSidebarButton),onClick:e},n.createElement(w,{className:x.collapseSidebarButtonIcon}))}var P=a(15080),T=a(3211);const B=Symbol("EmptyContext"),j=n.createContext(B);function Z({children:e}){const[t,a]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:t,setExpandedItem:a})),[t]);return n.createElement(j.Provider,{value:r},e)}var L=a(81564),A=a(94016),H=a(11128),M=a(35710),F=Object.defineProperty,W=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,V=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&V(e,a,t[a]);if(W)for(var a of W(t))R.call(t,a)&&V(e,a,t[a]);return e},U=(e,t)=>{var a={};for(var n in e)D.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&W)for(var n of W(e))t.indexOf(n)<0&&R.call(e,n)&&(a[n]=e[n]);return a};function K({categoryLabel:e,onClick:t}){return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function G(e){var t=e,{item:a,onItemClick:o,activePath:i,level:s,index:d}=t,m=U(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:h}=a,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,g.L)(),E=function(e){const t=(0,M.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0),[e,t])}(a),y=(0,c._F)(a,i),k=(0,A.Mg)(h,i),{collapsed:_,setCollapsed:I}=(0,L.u)({initialState:()=>!!p&&(!y&&a.collapsed)}),{expandedItem:S,setExpandedItem:C}=function(){const e=(0,n.useContext)(j);if(e===B)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),O=(e=!_)=>{C(e?null:d),I(e)};return function({isActive:e,collapsed:t,updateCollapsed:a}){const r=(0,T.D9)(e);(0,n.useEffect)((()=>{e&&!r&&t&&a(!1)}),[e,r,t,a])}({isActive:y,collapsed:_,updateCollapsed:O}),(0,n.useEffect)((()=>{p&&null!=S&&S!==d&&v&&I(!0)}),[p,S,d,I,v]),n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},f)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(H.Z,z({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":y}),onClick:p?e=>{null==o||o(a),h?O(!1):(e.preventDefault(),O())}:()=>{null==o||o(a)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?null!=E?E:"#":E},m),b),h&&p&&n.createElement(K,{categoryLabel:b,onClick:e=>{e.preventDefault(),O()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(_e,{items:u,tabIndex:_?-1:0,onItemClick:o,activePath:i,level:s+1})))}var Y=a(55602),q=a(81815);const X={menuExternalLink:"menuExternalLink_NmtK"};var J=Object.defineProperty,Q=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,te=(e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ae=(e,t)=>{for(var a in t||(t={}))$.call(t,a)&&te(e,a,t[a]);if(Q)for(var a of Q(t))ee.call(t,a)&&te(e,a,t[a]);return e},ne=(e,t)=>{var a={};for(var n in e)$.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&Q)for(var n of Q(e))t.indexOf(n)<0&&ee.call(e,n)&&(a[n]=e[n]);return a};function re(e){var t=e,{item:a,onItemClick:o,activePath:i,level:s,index:d}=t,m=ne(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:f}=a,h=(0,c._F)(a,i),v=(0,Y.Z)(u);return n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},n.createElement(H.Z,ae(ae({className:(0,r.Z)("menu__link",!v&&X.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:f,"aria-current":h?"page":void 0,to:u},v&&{onClick:o?()=>o(a):void 0}),m),b,!v&&n.createElement(q.Z,null)))}const oe={menuHtmlItem:"menuHtmlItem_M9Kj"};function le({item:e,level:t,index:a}){const{value:o,defaultStyle:i,className:c}=e;return n.createElement("li",{className:(0,r.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),i&&[oe.menuHtmlItem,"menu__list-item"],c),key:a,dangerouslySetInnerHTML:{__html:o}})}var ie=Object.defineProperty,ce=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,me=(e,t,a)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ue=(e,t)=>{for(var a in t||(t={}))se.call(t,a)&&me(e,a,t[a]);if(ce)for(var a of ce(t))de.call(t,a)&&me(e,a,t[a]);return e},be=(e,t)=>{var a={};for(var n in e)se.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&ce)for(var n of ce(e))t.indexOf(n)<0&&de.call(e,n)&&(a[n]=e[n]);return a};function pe(e){var t=e,{item:a}=t,r=be(t,["item"]);switch(a.type){case"category":return n.createElement(G,ue({item:a},r));case"html":return n.createElement(le,ue({item:a},r));default:return n.createElement(re,ue({item:a},r))}}var fe=Object.defineProperty,he=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ge=(e,t,a)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ye=(e,t)=>{for(var a in t||(t={}))ve.call(t,a)&&ge(e,a,t[a]);if(he)for(var a of he(t))Ee.call(t,a)&&ge(e,a,t[a]);return e},ke=(e,t)=>{var a={};for(var n in e)ve.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&he)for(var n of he(e))t.indexOf(n)<0&&Ee.call(e,n)&&(a[n]=e[n]);return a};const _e=(0,n.memo)((function(e){var t=e,{items:a}=t,r=ke(t,["items"]);return n.createElement(Z,null,a.map(((e,t)=>n.createElement(pe,ye({key:t,item:e,index:t},r)))))})),Ie={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Se({path:e,sidebar:t,className:a}){const o=function(){const{isActive:e}=(0,P.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&a(0===t)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",Ie.menu,o&&Ie.menuWithAnnouncementBar,a)},n.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},n.createElement(_e,{items:t,activePath:e,level:1})))}const Ce={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};const Oe=n.memo((function({path:e,sidebar:t,onCollapse:a,isHidden:o}){const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:i}}}=(0,g.L)();return n.createElement("div",{className:(0,r.Z)(Ce.sidebar,l&&Ce.sidebarWithHideableNavbar,o&&Ce.sidebarHidden)},l&&n.createElement(y.Z,{tabIndex:-1,className:Ce.sidebarLogo}),n.createElement(Se,{path:e,sidebar:t}),i&&n.createElement(N,{onClick:a}))}));var we=a(56981),xe=a(15554);const Ne=({sidebar:e,path:t})=>{const a=(0,xe.e)();return n.createElement("ul",{className:(0,r.Z)(l.k.docs.docSidebarMenu,"menu__list")},n.createElement(_e,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};const Pe=n.memo((function(e){return n.createElement(we.Zo,{component:Ne,props:e})}));var Te=Object.defineProperty,Be=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Le=(e,t,a)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ae=(e,t)=>{for(var a in t||(t={}))je.call(t,a)&&Le(e,a,t[a]);if(Be)for(var a of Be(t))Ze.call(t,a)&&Le(e,a,t[a]);return e};function He(e){const t=(0,E.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Oe,Ae({},e)),r&&n.createElement(Pe,Ae({},e)))}const Me={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function Fe({toggleSidebar:e}){return n.createElement("div",{className:Me.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},n.createElement(w,{className:Me.expandButtonIcon}))}const We={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function De({children:e}){var t;const a=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==a?void 0:a.name)?t:"noSidebar"},e)}function Re({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:a}){const{pathname:o}=(0,v.TH)(),[i,c]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{i&&c(!1),a((e=>!e))}),[a,i]);return n.createElement("aside",{className:(0,r.Z)(l.k.docs.docSidebarContainer,We.docSidebarContainer,t&&We.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(We.docSidebarContainer)&&t&&c(!0)}},n.createElement(De,null,n.createElement("div",{className:(0,r.Z)(We.sidebarViewport,i&&We.sidebarViewportHidden)},n.createElement(He,{sidebar:e,path:o,onCollapse:s,isHidden:i}),i&&n.createElement(Fe,{toggleSidebar:s}))))}const Ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ze({hiddenSidebarContainer:e,children:t}){const a=(0,d.V)();return n.createElement("main",{className:(0,r.Z)(Ve.docMainContainer,(e||!a)&&Ve.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",Ve.docItemWrapper,e&&Ve.docItemWrapperEnhanced)},t))}const Ue={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function Ke({children:e}){const t=(0,d.V)(),[a,r]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:Ue.docsWrapper},n.createElement(h,null),n.createElement("div",{className:Ue.docPage},t&&n.createElement(Re,{sidebar:t.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}),n.createElement(ze,{hiddenSidebarContainer:a},e)))}var Ge=a(37549),Ye=a(68190),qe=Object.defineProperty,Xe=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,$e=(e,t,a)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,et=(e,t)=>{for(var a in t||(t={}))Je.call(t,a)&&$e(e,a,t[a]);if(Xe)for(var a of Xe(t))Qe.call(t,a)&&$e(e,a,t[a]);return e};function tt(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(Ye.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function at(e){const{versionMetadata:t}=e,a=(0,c.hI)(e);if(!a)return n.createElement(Ge.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(tt,et({},e)),n.createElement(o.FG,{className:(0,r.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(Ke,null,i)))))}},37549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(14699),o=a(17766),l=a(32687);function i(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(l.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);