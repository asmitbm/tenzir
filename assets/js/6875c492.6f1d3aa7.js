(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8610],{83028:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),r=a(14699),l=a(2902);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},20588:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),r=a(36081),l=a(23007);function o({items:e,component:t=l.Z}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(r.n,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}},69522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var n=a(67294),r=a(86010),l=a(14699),o=a(41599),s=a(17766),i=a(55116),c=a(11128),g=a(1503),m=a(83028),u=a(68190),p=a(20588),d=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&f(e,a,t[a]);if(b)for(var a of b(t))E.call(t,a)&&f(e,a,t[a]);return e};function w(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function k({tag:e}){const t=w(e);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:t}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function Z({tag:e,items:t,sidebar:a,listMetadata:r}){const o=w(e);return n.createElement(g.Z,{sidebar:a},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:e.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:t}),n.createElement(m.Z,{metadata:r}))}function P(e){return n.createElement(s.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(k,v({},e)),n.createElement(Z,v({},e)))}},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=11748}}]);