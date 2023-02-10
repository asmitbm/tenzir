"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},o="Ansible",s={unversionedId:"setup/deploy/ansible",id:"setup/deploy/ansible",title:"Ansible",description:"The Ansible role for VAST allows for easy integration of VAST into",source:"@site/docs/setup/deploy/ansible.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/ansible",permalink:"/docs/setup/deploy/ansible",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup/deploy/ansible.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"AWS",permalink:"/docs/setup/deploy/aws"},next:{title:"AWS with Pro version",permalink:"/docs/setup/deploy/aws-pro"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Variables",id:"variables",level:2},{value:"<code>config_file</code> (required)",id:"config_file-required",level:3},{value:"<code>read_write_paths</code>",id:"read_write_paths",level:3},{value:"<code>vast_archive</code>",id:"vast_archive",level:3},{value:"<code>vast_debian_package</code>",id:"vast_debian_package",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ansible"},"Ansible"),(0,r.kt)("p",null,"The Ansible role for VAST allows for easy integration of VAST into\nexisting Ansible setups. The role uses either the VAST Debian package or\nthe tarball installation method depending on which is appropriate for the\ntarget environment.\nThe role definition is in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/ansible/roles/vast"},(0,r.kt)("inlineCode",{parentName:"a"},"ansible/roles/vast")),"\ndirectory of the VAST repository. You need a local copy of this directory so you\ncan use it in your playbook."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example playbook shows how to run a VAST service on the machine\n",(0,r.kt)("inlineCode",{parentName:"p"},"example_vast_server"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- name: Deploy vast\n  become: true\n  hosts: example_vast_server\n  remote_user: example_ansible_user\n  roles:\n    - role: vast\n      vars:\n        config_file: ./vast.yaml\n        read_write_paths: [ /tmp ]\n        vast_archive: ./vast.tar.gz\n        vast_debian_package: ./vast.deb\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"config_file-required"},(0,r.kt)("inlineCode",{parentName:"h3"},"config_file")," (required)"),(0,r.kt)("p",null,"A path to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup/configure#configuration-files"},(0,r.kt)("inlineCode",{parentName:"a"},"vast.yaml"))," relative to\nthe playbook."),(0,r.kt)("h3",{id:"read_write_paths"},(0,r.kt)("inlineCode",{parentName:"h3"},"read_write_paths")),(0,r.kt)("p",null,"A list of paths that VAST shall be granted access to in addition to its own\nstate and log directories."),(0,r.kt)("h3",{id:"vast_archive"},(0,r.kt)("inlineCode",{parentName:"h3"},"vast_archive")),(0,r.kt)("p",null,"A tarball of VAST structured like those that can be downloaded from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases"},"GitHub\nReleases Page"),". This is used for target\ndistributions that are not based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"apt")," package manager."),(0,r.kt)("h3",{id:"vast_debian_package"},(0,r.kt)("inlineCode",{parentName:"h3"},"vast_debian_package")),(0,r.kt)("p",null,"A Debian package (",(0,r.kt)("inlineCode",{parentName:"p"},".deb"),"). This package is used for Debian and Debian based\nLinux distributions."))}u.isMDXComponent=!0}}]);