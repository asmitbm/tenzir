"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=l(n),c=r,h=b["".concat(s,".").concat(c)]||b[c]||m[c]||i;return n?a.createElement(h,u(u({ref:t},p),{},{components:n})):a.createElement(h,u({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[b]="string"==typeof e?e:r,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>v,frontMatter:()=>h,metadata:()=>f,toc:()=>k});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>i(e,u(t)),c=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const h={},d="RabbitMQ Backbone Plugin",f={unversionedId:"use/integrate/threatbus/understand/plugins/backbones/rabbitmq",id:"use/integrate/threatbus/understand/plugins/backbones/rabbitmq",title:"RabbitMQ Backbone Plugin",description:"The RabbitMQ plugin enables Threat Bus to use",source:"@site/docs/use/integrate/threatbus/understand/plugins/backbones/rabbitmq.md",sourceDirName:"use/integrate/threatbus/understand/plugins/backbones",slug:"/use/integrate/threatbus/understand/plugins/backbones/rabbitmq",permalink:"/docs/use/integrate/threatbus/understand/plugins/backbones/rabbitmq",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/integrate/threatbus/understand/plugins/backbones/rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"In-Memory Backbone Plugin",permalink:"/docs/use/integrate/threatbus/understand/plugins/backbones/in-mem"},next:{title:"Plugin Development",permalink:"/docs/use/integrate/threatbus/understand/plugins/plugin-development"}},g={},k=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Parameter Explanation",id:"parameter-explanation",level:3},{value:"queue.name_suffix",id:"queuename_suffix",level:5},{value:"queue.name_join_symbol",id:"queuename_join_symbol",level:4},{value:"queue.durable",id:"queuedurable",level:4},{value:"queue.auto_delete",id:"queueauto_delete",level:4},{value:"queue.lazy",id:"queuelazy",level:4},{value:"queue.exclusive",id:"queueexclusive",level:4},{value:"queue.max_items",id:"queuemax_items",level:4}],y={toc:k},q="wrapper";function v(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(q,m(b(b({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",b({},{id:"rabbitmq-backbone-plugin"}),"RabbitMQ Backbone Plugin"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com"}),"RabbitMQ")," plugin enables Threat Bus to use\nRabbitMQ as message broker backbone. RabbitMQ provides a reliable,\nhigh-performance message passing infrastructure for indicator delivery within\nThreat Bus. Using this backbone plugin, Threat Bus relays all messages through a\nRabbitMQ endpoint. As a result, Threat Bus can scale horizontally via RabbitMQ."),(0,a.kt)("p",null,"This plugin simplifies network segregation and the communication trust model.\nThreat Bus requires no trust between the connected applications. Connected apps\nonly need to know one Threat Bus endpoint, while Threat Bus itself only needs\nto know a RabbitMQ endpoint."),(0,a.kt)("p",null,"The plugin implements the minimal\n",(0,a.kt)("a",b({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/backbonespecs.py"}),"backbone specs"),"\nfor Threat Bus backbone plugins."),(0,a.kt)("h2",b({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Install the RabbitMQ backbone plugin via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-bash"}),"pip install threatbus-rabbitmq\n")),(0,a.kt)("h2",b({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"The plugin requires some configuration parameters, as described in the example\nexcerpt from a Threat Bus ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," file below."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-yaml"}),'...\nplugins:\n  backbones:\n    rabbitmq:\n      host: localhost\n      port: 5672\n      username: guest\n      password: guest\n      vhost: /\n      exchange_name: threatbus\n      queue:\n        name_suffix: "my_suffix" # this defaults to \'hostname\' if left blank\n        name_join_symbol: . # queue will be named "threatbus" + join_symbol + name_suffix\n        durable: true\n        auto_delete: false\n        lazy: true\n        exclusive: false\n        max_items: 100000 # optional. remove property / set to 0 to allow infinite length\n...\n')),(0,a.kt)("h3",b({},{id:"parameter-explanation"}),"Parameter Explanation"),(0,a.kt)("p",null,"While most parameters are self-explanatory, like ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"port"),", others\nrequire some further explanation as described below."),(0,a.kt)("h5",b({},{id:"queuename_suffix"}),"queue.name_suffix"),(0,a.kt)("p",null,"Each Threat Bus host binds its own queue to the RabbitMQ exchange. The name of\nthat queue should not overlap with the queue names from other Threat Bus\ninstances (i.e., in a shared RabbitMQ host scenario). Hence, queue names are by\ndefault suffixed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," of the Threat Bus instance that binds to\nthem. Use the option ",(0,a.kt)("inlineCode",{parentName:"p"},"queue.name_suffix")," to override the name-suffix of queues\nwith a user-specified value, instead of the hostname."),(0,a.kt)("h4",b({},{id:"queuename_join_symbol"}),"queue.name_join_symbol"),(0,a.kt)("p",null,"The plugin creates a\n",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/tutorials/amqp-concepts.html#exchange-fanout"}),"fanout exchange"),"\nand binds a queue to it on the RabbitMQ host. The option ",(0,a.kt)("inlineCode",{parentName:"p"},"name_join_symbol"),"\nprovides some flexibility to the user when it comes to the naming of these\nresources."),(0,a.kt)("p",null,"For example, if your organization has a naming scheme to always concatenate\nresource names based on their domain via ",(0,a.kt)("inlineCode",{parentName:"p"},"_"),", you can specify that here. The\nresulting queue name with then be e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus_<queue.name_suffix>"),"."),(0,a.kt)("h4",b({},{id:"queuedurable"}),"queue.durable"),(0,a.kt)("p",null,"Sets the ",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/queues.html#properties"}),"queue property")," for\ndurable queues. If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", queues will survive RabbitMQ broker restarts."),(0,a.kt)("h4",b({},{id:"queueauto_delete"}),"queue.auto_delete"),(0,a.kt)("p",null,"Sets the ",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/queues.html#properties"}),"queue property")," to\nauto-delete queues. If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", these queues will be cleared from the RabbitMQ\nhost when Threat Bus disconnects."),(0,a.kt)("h4",b({},{id:"queuelazy"}),"queue.lazy"),(0,a.kt)("p",null,"If set, Threat Bus will declare all queues as\n",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/lazy-queues.html"}),"lazy"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", RabbitMQ shifts\nqueue contents to disk early and optimizes for memory management."),(0,a.kt)("h4",b({},{id:"queueexclusive"}),"queue.exclusive"),(0,a.kt)("p",null,"Sets the ",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/queues.html#properties"}),"queue property")," for\nexclusive queues. If ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", a RabbitMQ queue can only be used by one connection\nand is deleted after that connection closes."),(0,a.kt)("h4",b({},{id:"queuemax_items"}),"queue.max_items"),(0,a.kt)("p",null,"Limits the ",(0,a.kt)("a",b({parentName:"p"},{href:"https://www.rabbitmq.com/maxlength.html"}),"maximum amount")," of items in\na RabbitMQ queue."))}v.isMDXComponent=!0}}]);