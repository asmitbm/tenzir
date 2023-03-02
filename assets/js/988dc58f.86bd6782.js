"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88302:(e,t,r)=>{r.d(t,{ZP:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={toc:[]},y="wrapper";function b(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(y,d(c(c({},f),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",c({},{title:"Commercial Plugin",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"This feature is available as commercial ",(0,n.kt)("a",c({parentName:"p"},{href:"/docs/understand/architecture/plugins"}),"plugin")," that runs on top\nopen-source VAST. Please ",(0,n.kt)("a",c({parentName:"p"},{href:"https://tenzir.com/contact-us"}),"contact us")," if you'd like to try it out.")))}b.isMDXComponent=!0},80345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>w,frontMatter:()=>y,metadata:()=>h,toc:()=>k});var n=r(3905),o=r(88302),a=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,p(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={sidebar_position:3},b="AWS with Pro version",h={unversionedId:"setup/deploy/aws-pro",id:"setup/deploy/aws-pro",title:"AWS with Pro version",description:"Before running VAST Pro on AWS, you should refer to the [deployment",source:"@site/docs/setup/deploy/aws-pro.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/aws-pro",permalink:"/docs/setup/deploy/aws-pro",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/deploy/aws-pro.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Ansible",permalink:"/docs/setup/deploy/ansible"},next:{title:"Tune",permalink:"/docs/setup/tune"}},v={},k=[],g={toc:k},O="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,m(d(d({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"aws-with-pro-version"}),"AWS with Pro version"),(0,n.kt)(o.ZP,{mdxType:"CommercialPlugin"}),(0,n.kt)("p",null,"Before running VAST Pro on AWS, you should refer to the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/setup/deploy/aws"}),"deployment\nguide")," of the base stack."),(0,n.kt)("p",null,"To enable the use of Commercial features such as matchers you need to use the\nVAST Pro image:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set up the version you plan to use and the activate the ",(0,n.kt)("inlineCode",{parentName:"li"},"pro")," plugins in\nthe ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file:")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"VAST_CLOUD_PLUGINS=pro\nVAST_VERSION=latest\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Authenticate and download the Pro image from Tenzir's private repository:")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"./vast-cloud pro.login pro.pull-image\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure the deployment as explained in the ",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/setup/deploy/aws"}),"deployment\nguide"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"VAST_PEERED_VPC_ID=vpc-059a7ec8aac174fc9\nVAST_CIDR=172.31.48.0/24\nVAST_AWS_REGION=eu-north-1\nVAST_IMAGE=tenzir/vast-pro\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(Re)Deploy the vast server:")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"./vast-cloud deploy -a\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verify that you are running VAST Pro (commercial features such as ",(0,n.kt)("inlineCode",{parentName:"li"},"matcher"),"\nshould appear in the ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins")," list of the response)")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'./vast-cloud run-lambda -c "vast version"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Start (or restart) the VAST server:")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"./vast-cloud [re]start-vast-server\n")),(0,n.kt)("p",null,"You can now use commercial features such as\n",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/use/detect/cloud-matchers"}),"matchers")," in the Cloud!"))}w.isMDXComponent=!0}}]);