"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>D});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var m=n.createContext({}),M=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=M(e.components);return n.createElement(m.Provider,{value:t},e.children)},w="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),w=M(a),d=c,D=w["".concat(m,".").concat(d)]||w[d]||s[d]||r;return a?n.createElement(D,o(o({ref:t},l),{},{components:a})):n.createElement(D,o({ref:t},l))}));function D(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[w]="string"==typeof e?e:c,o[1]=i;for(var M=2;M<r;M++)o[M]=a[M];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>x,default:()=>T,frontMatter:()=>D,metadata:()=>p,toc:()=>f});var n=a(3905),c=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&l(e,a,t[a]);if(i)for(var a of i(t))M.call(t,a)&&l(e,a,t[a]);return e},s=(e,t)=>r(e,o(t)),d=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&M.call(e,n)&&(a[n]=e[n]);return a};const D={sidebar_position:3},x="Data Aging",p={unversionedId:"about/use-cases/data-aging",id:"about/use-cases/data-aging",title:"Data Aging",description:"When working with data at rest, two big topics that arise from a security",source:"@site/docs/about/use-cases/data-aging.md",sourceDirName:"about/use-cases",slug:"/about/use-cases/data-aging",permalink:"/docs/about/use-cases/data-aging",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about/use-cases/data-aging.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Unified Detection",permalink:"/docs/about/use-cases/unified-detection"},next:{title:"Try",permalink:"/docs/try/"}},A={},f=[],u={toc:f},X="wrapper";function T(e){var t=e,{components:a}=t,c=d(t,["components"]);return(0,n.kt)(X,s(w(w({},u),c),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",w({},{id:"data-aging"}),"Data Aging"),(0,n.kt)("p",null,"When working with data at rest, two big topics that arise from a security\noperations perspective:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Manage retention span to maximize retrospective detection capabilities"),(0,n.kt)("li",{parentName:"ol"},"Comply with data residency requirements and privacy regulations")),(0,n.kt)("p",null,"Often, these two topics conflict each other: security teams want maximum\nretention spans to find advanced attacks retroactively once intelligence becomes\npublic. The recent watershed events, like SolarWinds and log4j, demonstrate that\npost-hoc detection must now span ",(0,n.kt)("em",{parentName:"p"},"months to years")," to successfully uncover deep\ninfiltrations. Conversely, security data contains often personal information and\nfalls under strict regulations that prohibit unfettered use. There exists a\nstrict upper bound on storing specific security event data for retrospective\ndetection."),(0,n.kt)("p",null,(0,n.kt)("figure",w({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.kt)("svg",w({parentName:"figure"},{viewBox:"0 0 598.001 252.081",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXGtX20hcdTAwMTL9nl/BMl/H2u7q937jYTO8nzFcdDtzOMKWwcHYji1sYE7++942XHUwMDA0SbZcdTAwMTWZXHUwMDAwWbOLT1x1MDAxZaCW2q2uulW3qqv771x1MDAwZlx1MDAwYlx1MDAwYovxbTda/NfCYnRTXHUwMDBiW816L1x1MDAxYy7+7q9cdTAwMGaiXr/ZaaOJRr/3O9e92ujOizju9v/1z3+G3W6QPFx1MDAxNdQ6V/dPRq3oKmrHfdz7b/y+sPD36N/0d7VazW4/XHUwMDFh3T5qSL5MMinGL+902qNvNkwozYglNzT7q/i2OKqjtVx1MDAxMbb6UdLiLy2e9mjVnn08WVx1MDAxZl59PfpcXKuYnVvLk69tNFutw/i2NVx1MDAxYVS/g1x1MDAxN0na+nGvc1x1MDAxOVx1MDAxZDfr8Vx1MDAwNVr52PW8p3qd6/OLdtTvZ57pdMNaM77111x1MDAxOHu8XHUwMDFhts9HfSRXbvxsc1x1MDAxOViSxlklXHUwMDFkWWfpsdl3IDRcdTAwMWJcdTAwMWLKSqfV6fmh/MZGn2QwZ2Ht8lx1MDAxYyNq11x1MDAxZu+Je2G731xye5BPct/w4SVJXHUwMDA1ipzVXFw4LoQmo1x1MDAxZm+5iJrnXHUwMDE3sb9HXHUwMDA00lx1MDAxOctcdTAwMThcdTAwMTekpNRKJsOJRnLgXHUwMDFjUuLCmmTgflx1MDAxMN31eqJcdTAwMTGjq7VNuz68Xlx1MDAwZY/Kg6W9ob492LmwevGh/a/0lLbrXHUwMDBmU9q+brWS1/NccuWUsiXPXFx36+G9VnCthWLGSYUpfWxvNduX4921OrXLRJFGV7/9Pl1/8fh05eUmV3k5SculU5LPrL1Xsusqd9tnXHUwMDFmLy6OO9ebXHUwMDAz9WllIOdcXHvJXHUwMDA2mFx1MDAwNMs0lFx1MDAxN79YkdVeK1x1MDAwM80lJ2KWkZbPUeXfalFd1sNJNeZcdTAwMDEpMkw555QwUqRcdTAwMTQxUWNcdTAwMWJIaziz3Fx1MDAxYcgkbVNcdTAwMWXUXHUwMDE46NNcXMvUXHUwMDE4X0yL/06eftAoerjy7dcod3I57McrnaurZoxcdTAwMGX3Os12PP5gP1x1MDAwZXvxUq/XXHUwMDE5XkRhfbw1atdz27q+u+xkJT8tJHoz+uXx579+n3p3KV+o/jMpzqTDXHUwMDBm6f+fjGhmXS6ijSEjrTOzI3r7eL3XLlx1MDAxZq32d3pcdTAwMDdU2jw0Rqx151x1MDAxZNEmYEpcdTAwMDOwUlx1MDAwYq2tU1x1MDAxOURLXHUwMDBlp+GAeLJSSK+Nr4NpyN9o41x1MDAxZI63XHUwMDFmQk5CmptcdTAwMDBa4fw4SHFNpCYgTULgJdQrOKZ3SC88XHUwMDE10rlcIlx1MDAxZDVOXGLz5Vx1MDAwMC1zXHUwMDAxraDjypBVM1x1MDAwM9rsfHJcdTAwMWJ89bjFXHUwMDBm1afK2bBcdTAwMWFcdTAwMGZOwnlcdTAwMDe0XGKUdlx1MDAxMu5ZKmeZXHUwMDFiwzNcYp51WnHFlFXWvlxunF2gYa+ZdNZaT+qnXHUwMDEwTa5cdTAwMDPwUCGN4eBMXHUwMDEyt05cdTAwMTBNzfBHOW3f8TxcdTAwMDd4LuVcbtV/JsX5UoDmKf876aG5kZrT7Fx1MDAxMeNmZbfbiFcvWyftYfN2XVZXmpXPc1x1MDAwZWhOgZTAqjTgQDBgJoNo4Vx1MDAxY5q1YVx1MDAwZbEjXHUwMDEw416JdcvAMVx1MDAxOGyMXHUwMDE3VkOqXHUwMDE083/EtFx1MDAwYsCqXHUwMDA14lx1MDAwM1x1MDAwMoUjMYloUDihhKB3RM9cdTAwMDOi80XqP6Vxab5cdTAwMTSgSVBcdTAwMWWgwewt4Vx1MDAxYmfHcyXuXHUwMDE5ulx1MDAxYe7tXHJae+UtY1xcbze0c45nMG5lSZOTUlxix8ZcdTAwMTJA1lx1MDAwNT4u9SlcdTAwMWE//69cdTAwMDNmXHUwMDE2aM+EJCmJL0zFQIl/psAwa1x1MDAwNGdaOZZJ2z2gWcJcdTAwMDXALL2DeT7AnCfSUeOEMJ9cYuZeVIvvtXlcbqJJ5FJuqIcj4czsgD6XzcNcctVcdTAwMGJVY4u+XHUwMDFjlfvdm9W9w3lcdTAwMDO0XHUwMDBlSEH3XHUwMDA1Zlx1MDAxNHpcdTAwMDWfPFx1MDAwNnBcdTAwMTZA51x1MDAxOKJcdTAwMWXHQV+NzVwiXFyKQCtrjJZGMEXmeVx1MDAwZZuxUDb4JMaJTYI6de27S4bKOFx1MDAwYk6hp6L4TaZpiXJcdTAwMTmjT3PgjzWzh4Ar3drRie1090/7cfnraWNvf6n61lx1MDAxNFx1MDAxMsZcdTAwMDHsXHUwMDEwSsdcdTAwMThcdTAwMWO5nlhz8Fxuqch7XHUwMDFjKIKj5+jjXHUwMDBmVyDkXHUwMDE0nZxQSTNyjsw9RSPnx2GM3MFys11vts+nOIOcljfjZmTe7c/ihFx1MDAxYVYwXHUwMDFmslx1MDAxYXZUXHUwMDAxtjNDdlA9+Fxcj6PN1b3+x161XHUwMDE2Lf9R3s9bXHUwMDE2vFxia1x1MDAxN9e96L9PXHUwMDBiXHUwMDExNnvCbfwqqNHpXHUwMDE0qH+eXHUwMDEw5TlpgFx1MDAwYsYsw0/P8lx1MDAxOVxy3qBcdTAwMDZN4YXGXHUwMDA0llmurXZcbpFcdTAwMWGbXHUwMDEy5Fx1MDAxMblRXHUwMDA2yTDOXHUwMDE0JzmRhuWc+USxkkVLK/KsxrdUtFx1MDAxMpWrXz5eq42jo2hlYzHRr8XNq53uZXRekZ/Wylx1MDAxZr/sXHUwMDFlnq2srrTTN5hWnZZcdTAwMDdn5vbqdjV2XHUwMDA3lcZcdTAwMTWl6K5/sUH/Sn+sXHUwMDFmWFNq7yydXHUwMDFjlZf3XHUwMDBlTn5cdTAwMTn3hLg4XHUwMDA0qfB5NyWTdyNcbtJcdTAwMDJcbk3GIcZU2XySXHUwMDExgZSGSWu5X+/horg7dFx1MDAwNOorXHUwMDAxXHUwMDEw0F9jlTaZXHUwMDFlnVxi8Fx1MDAxN1x1MDAwNFx1MDAxOVwi0VxmMW1Rj1xixJRRPq3lXHUwMDAzXHUwMDFklk14XHUwMDEx44EhJVxiaFx1MDAxNIozV2w5XHUwMDAzp0DOtSRcdTAwMGJPzMd6s4C3xixcdTAwMDA4WiqmXHUwMDBiXHUwMDA3J1x1MDAwM2BcdTAwMTRcdTAwMDO0wnLldHa9jHO8qzTcXHUwMDEyXGImXrZw9rjUXHUwMDAxk6R93Gm1pmx3zFx1MDAwNJpJWFx1MDAwNbhlP7HF3UF8wlx1MDAxM3/nlIbBMlnhwpgxcGNYXHUwMDExXHUwMDEy3MDjXHUwMDE292dcdTAwMDJuuFx1MDAxNqDTilsjs6tcdFx1MDAwZbLALJCCKMBurJ2lP8OJXHUwMDExhqdcdTAwMTDEJtnn+1ZcdTAwMTVYr0j4Nlx1MDAxODrjZlx1MDAxYVx1MDAxZoHoQ6HBXHUwMDFjrMxMXHUwMDFml4GCpVx1MDAxNFx1MDAwZYI3kkP6xd3pQPjUXHUwMDBi91x1MDAwYm+QRqa/XHUwMDEyQj2HRlx0XHUwMDFizXxG1lx1MDAxNL+vloGDjFx1MDAxNTr12sLGUz3QXHUwMDE4T//IXHUwMDEwXHUwMDAyxVx1MDAxOeRcdTAwMDFttrhcdTAwMTfOQMNLwGNl+sNcdTAwMWJzqTiHblx1MDAxMvgkXr2oQ1x1MDAwYvWzUmKWrFx1MDAwMP1KXHUwMDE4/H1/NiCH14XGOFx1MDAwYjpQrICSXHUwMDAwXrgy0oCmgZ7pbIdcdTAwMTAwrFxu5It+hY9RizpcdTAwMDRcdTAwMDI4XHUwMDEz5Gk2gmylM1xuWDKBxMRh4F5DoY6F8IVcZqFdvlx1MDAxMsdX5Fx1MDAxOKaEcGMyhlx1MDAxYiVuYVx1MDAwMVx1MDAxMTBcboTtVNTns6jZXHUwMDBmarbMXHUwMDBmMnYw31B3gHL2XGL/ptpZ21x1MDAxN5dfTlx1MDAwZW7b1fowKm2et5vzXHUwMDE2UI1zM1x1MDAwMi+C0Vx1MDAwNuhgm21cdTAwMTKajLiZfVbN1m+NRmNcdTAwMWFcdTAwMTXTgVx1MDAwNoOA9cHXasanLIlcdTAwMGJcdTAwMDVcdTAwMTfkfGZcdTAwMDeuwymVXHUwMDA0LI9UjMNcXML2JFx1MDAwM3xLVGxO8lxmoadDU1x1MDAxM1xyKr9cdTAwMWNcZmaerHxcdTAwMDIsbj/90bg7qKxcdTAwMWZcdTAwMGb57k3tqmeW+9VovmFBqWLF0eIyy1x1MDAwN0LNUUjhT6ay9Cx5XHUwMDAzODXEJbCaU3X9PW8wXHUwMDAz2V+Me82xNO+LUv6UIMfun8lH5Vx1MDAwMtGl6lx1MDAxOMaBKFx1MDAxOUy2REA7M1x1MDAxMoel8FK3hmFFL5dMt9xcdTAwMGK/6FZrvpGoXHUwMDA1XHUwMDBmXHUwMDFjglx1MDAxNI6gU3DtsmWZ4Fx1MDAxMYHybIJcdTAwMTD5XHUwMDE4OLBXQmmAaZbaXHUwMDE5Y1x1MDAxOMj4XHUwMDE0h5V/y3eH5Vx1MDAxY8YnXWHu4LRT6utduXeztLN3KE+rK80v5bNfv6iU8vzvWFx1MDAxZmO4ucKe3vpitsDlZv9cdTAwMTHIXHUwMDE5RFx1MDAwZmJ2U1CWW+H514a52Tm5NHqzdMm6g9K8m1x1MDAwMlxutGU+UMLHqGxcdTAwMWVRXHUwMDEyIdBSiLSUwLxcdTAwMGKev/j0XHUwMDFjWyBtgOBcdTAwMWaRgVx1MDAxZlxipSSSrC/bwDGmhbZmtFx1MDAxMp5KaD4sLzs8TbKIub5cdTAwMWKCuTdcdTAwMDR5yuA/XHUwMDEzavBSZoBzlstcdMgxn4dxs5Pz2mD10q3d/bF9d/RRtT7x85Xyenve7Vx1MDAwMIdcdTAwMWSQXHUwMDEyXHUwMDEwslx1MDAxY8Fhds3PU1x1MDAwMkGkXHUwMDE1I8stXCLMVzFcdTAwMDNcXFx1MDAwNCRcdTAwMDVYh7VcdTAwMTZA0VN2alxid1x1MDAxZsNK7Zcg07W53ylcdTAwMDGRz9S5nFx1MDAxNer/N0uQXHUwMDFh8sNGvPX7zUS71Vx1MDAxZZ2vd86OPi6Xj0/L4ZK9U+n4u9GpXfvxl5hfZtKM+1xyXHUwMDE3hGHzVO5u8Tzs4lx1MDAxZVx1MDAxYoCp+/ynUUZcdDiLiVl5YzYoV1x1MDAxMf2nNKGDL2aEmGLjl5PiVb9cdTAwMTgh7OxkpHRrbyrDu7XOxUpHdFx1MDAwZfTSyvn+1vxcdTAwMWIhZa3AtEvJhMhWwngjJDHxfnFXcZvOq72wXHUwMDE18ml0n42WXGIwhJuyqol7rFKMXHUwMDExd9pYJ1MlJFx1MDAwZnaIRvk/Sbao3u3/w1x1MDAwZb1lRpKvXHUwMDEwXHUwMDBmrWOq8HLmgOWbXHUwMDAzy6w0XGJ/Z7dcdTAwMDenn7cu97dcdTAwMWLNWr2/ZyvRXHUwMDFhL23Ul+ffXHUwMDFlXHUwMDE4XHUwMDBiwFx1MDAxYuvfViW9PNpcdTAwMDNrmF9nXHUwMDE0iE9eh5QoXG6kU04rZ8CL+LTEOsFHMryNMY6RXHUwMDAwP02VRN1bXHUwMDAzQZrjr3onJW/dXHUwMDE45KqD/5QmNeGJxiCObuJptsDmW1x1MDAwMkfaXHUwMDE4X1IwsyXYqmg1+LJcdTAwMWSWPpvqxvawXHUwMDE1d6g657tauFx1MDAxY1x1MDAwYkhk/trBc8pg07WQj/hWXHUwMDEzi1x1MDAwN9wxaWDu6SmrXHUwMDA3z1qf+jlINjrt+LB5d7/0mrlaXHSvmq3bjDxGuofJWVxy43Bhr9eJo1pcZkX7s73bgNeIeulcdTAwMTntR6PiPFxiQmSeX2o1z9ujXHUwMDEwXHUwMDE475V+XHUwMDA0Wlx1MDAxYjdrYevxhriT2upcXMOIQnTYW5/Ad6fXPG+2w9ZR0eh+XG5XMjf7XHUwMDA3T8/BNUVqXHUwMDBic+FKwL7ofurI1lFvo1KT+83IUv96vnElUjhcdTAwMWFcdTAwMTX3+lpcdTAwMTby7so5XHUwMDA00mk4vKRTNVO2kEypNndcYlx1MDAwM0Ch2fSs3jyiLKnTKkJZrXPVbcFV1aKpuErxjF+Dq9R4flxuSU7kXHUwMDFmjaDAfEDgnnLYyVx1MDAwZvNcdTAwMTNzXHQl5Vjg0p8ssFxiUcT9ITmSaaaetYvjh1Xzqf0jP/BgICiWfHFeXHUwMDAxI1x1MDAxNX9cXC1cdTAwMWZbvbtnljrqanu5uX9ycvhcboz08Znk6YXZ0qlcdTAwMTntvFx1MDAwZqZcdTAwMWVbvk1cZvS/7VxcXHUwMDBmo9p1XHUwMDBmKvVn2zuy+XCpY2P6Ifxza/KZXHUwMDFhv/pcdTAwMWT+QlkluX7CJprN+vH+zfVlybGNLVx1MDAxYrVcdTAwMWJRqU003+hcdTAwMTeWXHUwMDA3XFxzbqTy+93l+CYuXHUwMDE2jFx1MDAxNtqNP0pLO5vvVmcqXHUwMDAxXHUwMDBiXHUwMDE1qSlcdTAwMDX5wlx1MDAwNkpqJn1VLmJcdTAwMGY1xVx1MDAxMpBccqyyTjvms5fS8omNmlx1MDAxY2OEqeaiyDScXHUwMDBm+Nbx4PjubKdxpL9cdTAwMGW7w041WnnFXHUwMDEyrTdcdTAwMWOVvuZRSC4wwupRJa4/cYFnapMnxV3UIcdcdTAwMTPMXGKjJTnpq7uf192zKnjyuFx1MDAwNrHc/T/Kr1xuSv2Exbrh1e5cdTAwMGXd7m2CrVx1MDAwYru2tjz4Wt6e8/pcdTAwMWRhTCBcdTAwMDU+1vjdP9n6UiF9OfpoldT4o/fE8zb/5FL4KbZl0pZwZmCGirPgb8OWzODxkzTFd4//j+n83mVufH0n/4+fo/WG5Vx1MDAxNnNzQZz5MvfZXHUwMDFke/XGhkuf+yfmojW8ua5cdTAwMGW+XFzT1ZyfwKmsP+Myj9ZL7/ZcdTAwMDU55jdcIlx1MDAxMEn5OvHytDWoyXiZmFx1MDAwMlxyY0/bXHUwMDBi+1bi5Uaz3YyjXHUwMDA1hD3zXHUwMDEyMWdG9FOkXHUwMDE5XHUwMDFjK78kXFwpY3xB/+yeLK6WVoVcdTAwMTSb5cOjs3KlXFxZ22a0Pt/o0oI97JQhx41cdTAwMTJjWV7FXHUwMDAzMdom5ZwxPGUz5481a2GEXHUwMDAzxS9izXZfy2qzXV1cdTAwMGbZXeOkVumc3SxV5s7TvbPm/z3W7HQua+ZwXtpIo2c3NitcdTAwMDdLRkeXN8tcdTAwMWJRX3dcdTAwMDby+GZ/e2fOjVxyaTBj8oXEwvl9aGPGRlx1MDAwN84v8DMlXHUwMDFj5CTyy0tenTdcdTAwMGJnraPiXCK2XHUwMDE3NyaPXU9Jw/24oCijgnOWhnurpDz3yFx1MDAxYc1zWbmPf63RTzi1dOfL4cZp+2vvlFxy+1x1MDAwN1V+wWrDT7VfheREYk/aSlx1MDAwNtrAuFx1MDAxMkqTdYax8YPFpVxm/OZaXHUwMDAzUu60zK9an5pIn8pcdTAwMWRsVE8j/nG9WFx1MDAwNc5qZZTz50rmXHUwMDFjRaxcdTAwMDLhdyn7ijXrfMg+QVx1MDAxZcgqf3j+vC8n/8+zgkBcdTAwMGLydXvG+XMmrMnsU9fB6MBSLoXCXHUwMDBmSlx1MDAxNm57L41cbmMhcU80QCyzx1x1MDAwNpjAaM2NZFx1MDAxY21guqawO1xuhJVcdTAwMTAg48JcdTAwMTeeXHUwMDEyz1xmz1x1MDAwNdxyXHUwMDA31XfM+Vxu6MLuVOB1zlx1MDAxZiOBR/xcdTAwMTjTvU0qbSFnXHT8aXJk/FkuXHUwMDE2w+PZslnuK8ilI6VcdTAwMTg3/tQ5XtShXHUwMDBlXGLOXHUwMDE4tFxcIVx1MDAwMsBMZc+ok4H10ZFifktcdTAwMTBcdTAwMDFBRd1RQGSEdor8XHUwMDAx0zazr8BcdTAwMTM0XHJcdPlcdTAwMDM8uCVTuHne+NM8fKbfXHRnYIiSdfL7kVvu5c3wslx1MDAxNipQ+KpQPKiAJWVcdTAwMTC/I1xuXHUwMDE50zvuz4Rh2lchgl5cdTAwMTaeXHUwMDE2MFx1MDAxYnv88PD8YtjtXHUwMDFlxjBcdTAwMTGL35fuXHUwMDE2XHUwMDA3zWi4PH3rud99/uHBY3nXXHUwMDEwjVb8vn349lx1MDAxZjh68OYifQ==",(0,n.kt)("defs",{parentName:"svg"},(0,n.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M92.355 91.24c2.55-.74 6.42-.62 8.99.26 2.57.87 5.32 2.97 6.45 4.99 1.12 2.03 1.08 4.56.28 7.15-.8 2.59-2.81 6.71-5.07 8.39-2.25 1.67-5.83 1.91-8.46 1.66-2.64-.24-5.39-1.26-7.35-3.14-1.96-1.87-4.07-5.67-4.44-8.12-.36-2.45.31-4.42 2.25-6.59s7.36-5.37 9.39-6.4c2.03-1.03 2.66-.16 2.78.21m2.77 1.97c2.17.42 4.53 1.21 6.02 3.1 1.48 1.88 3.12 5.3 2.88 8.22-.24 2.91-2.04 7.37-4.31 9.25-2.27 1.89-6.49 2.26-9.31 2.06-2.81-.21-5.29-1.52-7.57-3.29-2.28-1.77-5.68-4.86-6.12-7.32-.43-2.46 1.75-5.39 3.51-7.43 1.76-2.04 4.56-3.74 7.04-4.8 2.47-1.07 6.49-1.45 7.79-1.58 1.31-.14.3.26.05.76"})),(0,n.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M96.884 113.924c-.1 4.65-1.67 24.17-1.92 29.18m.84-26.93c-.2 4.81-1.61 24.15-1.77 28.48M94.366 145.637c1.78 2.85 9.83 14.78 11.97 17.8m-10.13-18.83c1.57 2.43 7.4 14.08 9.19 16.95M91.61 143.5c-1.65 2.95-7.74 14.24-9.22 17.03m7.78-18.08c-1.83 2.69-7.19 13.81-8.49 16.44"})),(0,n.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M80.459 129.917c2.75-1.47 13.22-7.71 15.8-9.23m-17.26 8.42c2.73-1.8 14.03-8.43 16.79-10.12"})),(0,n.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M96.053 120.065c1.9 2.23 9.13 10.47 10.99 12.43m-12.21-13c1.81 1.87 9.66 8.93 11.68 11.21"})),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"#00a4f1",strokeWidth:"0",d:"m86.415 75.407 20.167-1.499 1.457 18.608-17.924 1.95"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M87.315 72.412c7.742 1.854 12.58.564 19.86-.26m-18.68.989c6.933.045 14.959.51 18.867.016m.345.931c.802 6.061-.416 8.414.862 17.674m-.556-18.932c.644 4.244-.766 9.514 1.01 20.59m.194-.995c-6.36-.32-10.86 1.29-22.828 2.27m21.06-2.173c-3.794 1.021-8.312.422-19.11.63m-.649-1.063c1.59-4.874-1.114-10.274 1.628-18.45m-1.573 20.5c.008-7.213.017-12.856-.2-19.882"}))),(0,n.kt)("path",w({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M78.885 94.585c6.859-.133 33.845-.254 40.456-.67m-41.978-.11c6.799-.521 34.485-1.41 41.193-1.57"})),(0,n.kt)("g",w({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#f1f2f2",strokeWidth:".5",d:"M412.89 24.908s0 0 0 0m0 0s0 0 0 0m.07 7.66c-.36-3.58 2.7-5.38 7.62-11.45m-8.66 11.56c2.2-3.33 3.8-4.77 8.53-10.68m-7.38 18.13c6.45-7.43 9.9-15.05 13.24-20.97m-15.37 18.44c5.78-5.65 12.47-12.55 17.96-17.56m-14.81 22.3c3.61-3.44 9.08-12.49 20.51-23.83m-22.26 26.42c5.79-7.25 11.25-13.81 20.83-25.91m-20.87 30.81c8.95-9.16 15.46-17.36 29.27-31.37m-29.8 31.49c10.4-11.71 19.94-22.7 28.65-31.53m-26.21 37.86c5.67-11.05 15.7-19.37 30.96-40.23m-31.94 39.6c8.87-12.32 20.3-23.47 32.47-38.45m-32.83 46.54c9.51-15.01 23.25-27.55 41.95-48.58m-43.58 46.47c11.3-9.83 20.5-23.09 42.81-46.72m-39.94 52.64c15.43-17.37 31.16-36.15 45.72-52.79m-48.2 53.78c18.03-21.79 37.61-40.88 45.8-53.11m-45.14 58.03c16.74-19.63 33.03-39.29 50.61-59.3m-51.13 60.49c15.08-17.28 30.73-36.12 52.9-58.96m-52.77 63.57c14.76-13.18 27.93-30.22 56.71-65.5m-55.93 67.24c20.66-24.78 40.99-48.68 57.87-67.04m-59.98 74.15c15.66-18.19 29.07-33.76 65.77-74.56m-63.79 72.7c15.46-16.81 30.54-35.26 62.57-72.41m-64.98 79.93c22.96-30.09 47.97-54.69 70.51-80.88m-68.38 80.5c18.47-22.15 37.58-42.8 68.38-79.86m-66.43 84.79c23.18-25.6 46.05-54.32 74.02-84.86m-76.72 85.49c27.34-29.76 53.7-61.23 75.53-84.69m-75.11 90.94c21.79-26.4 42.66-50.14 79.03-90.91m-77.94 91.3c18.01-20.69 34.6-41.96 78.38-92.7m-79.17 99.3c30.37-35.67 57.65-67.43 85.97-100.68m-84.86 98.98c19.69-24.38 40.77-47.59 83.5-97.4m-85.3 103.34c30.8-33.11 62.13-69.62 92.22-101.35m-90.73 102.9c26.32-31.69 54.39-61.82 88.92-104.4m-90.48 110.53c34.52-43.71 72.9-84.73 97.52-110.04m-96.17 108.57c21.37-24.58 42.63-49.84 93.52-107.7m-92.61 112.86c35.39-39.99 67.73-80.43 98.63-112.93m-99.27 113.32c27.5-30.89 53.86-62.36 99.7-112.87m-101.54 120.35c37.22-42.38 73.9-86.32 107.26-119.43m-107.07 119.9c38.7-43.7 75.86-86.82 105.3-121.2m-103 126.27c39.42-48.28 80.79-94.18 109.51-124.94m-110.5 124.83c29.93-36.68 59.12-71.1 109.08-126.48m-110.39 133.64c33.13-36.59 66.18-75.83 115.09-132.87m-115.06 131.86c26.51-26.65 49.15-54.64 115.89-131.02m-114.01 135.77c40.29-45.54 79.94-94.66 120.1-136.6m-121.12 137.44c40.85-44.93 80.6-89.91 119.45-137.61m-120.76 144.75c32.34-35.15 60.07-67.59 124.28-145.58m-122.69 144.32c35.43-40.96 71.43-81.27 123.63-141.54m-124.1 148.63c35.74-43.54 75.84-86.73 130.34-147.94m-130.25 147.68c28.42-30.65 55.75-60.74 129.83-149.38m-130.43 154.41c49.65-56.29 99.75-112.63 134.1-153.03m-132.53 154.91c25.42-33.86 52.98-65.67 133.1-155.1m-132.35 161.95c39.72-50.32 81.87-99.52 138.34-160.68m-140.64 159.67c54.35-61.81 108.79-125.3 141.1-160.67m-139.85 167.02c44.74-50.2 89.01-101.53 143.11-165.12m-143.33 164.44c48.11-53.81 93.6-107.27 143.5-165.42m-144.04 171.17c53.82-56.37 101.16-116.14 150.49-170.24m-150.36 170.39c43.51-48.51 86.16-99.5 148.3-171.74m-146.94 179.21c56.21-70.7 115.15-136.09 151.37-178.02m-152.27 176.3c49.04-56.25 98.34-112.8 152.42-175.61m-153.68 184.01c38.56-44.7 80.59-92.63 157.75-181.92m-159.44 181.51c40.58-45.82 82.14-93.51 160.63-181.83m-161.63 190.07c58.39-69.71 117.41-135.35 167.5-190.73m-166.65 189.09c63.75-74.11 127.69-148.08 166.14-189.01m-165.43 196.21c63.54-70.28 122.06-143.78 167.08-195.26m-166.61 195.51c54.34-65.9 110.5-131.27 167.42-194.85m-169.07 201.51c48.88-53.8 94.55-107.39 174.37-198.62m-174.39 197.55c44.06-52.24 87.62-103.24 173.49-198.33m-171.86 200.52c44.01-49.74 89.32-101.72 174.36-196.2m-172.69 197.7c56.11-65.32 112.16-130.3 172.27-199.14m-171.58 202.46c48.3-55.96 98.98-114.03 176.08-201.96m-174.57 202.85c65.63-75.47 131.04-150.16 174.5-201.62m-171.84 201.01c37.33-38.18 74.27-82.07 173.19-193.93m-170.95 194.91c56.5-66.25 113.7-132.99 169.56-196.84m-166.78 197.68c65.16-70.87 129.3-146.44 168.06-189.19m-168.66 189.42c53-60.25 106.73-121.52 167.11-191.45m-161.39 195.65c56.79-71.91 114.59-136.36 162.39-190.99m-163.02 188.62c32.53-38.83 67.91-78.1 162.22-186.43m-159.57 188.16c43.31-47.42 85.31-95.44 159.5-183.95m-158.9 184.57c61.25-69.71 122.58-141.5 159.89-182.65m-155.01 184.27c48.19-60.06 99.25-117.05 154.27-177.52m-155.78 177.53c48.36-52.94 96.62-108.85 155.55-178.52m-149.23 177.37c36.86-44.07 79.94-90.26 149.04-171.79m-149.71 172.59c32.08-34.96 62.34-71.03 150.8-173.17m-147.31 174.86c30.61-34.82 58.95-71.08 145.71-166.67m-145.05 166.88c47.03-51.88 93.46-104.86 145.5-167.59M449.9 239.998c31-35.96 64.11-74.64 139.45-162.07m-141.27 162.9c45.12-53.19 91.86-106.05 141.83-163.34M453.6 242.358c45.86-56.82 98.63-116.37 136.71-158.83m-138.29 156.86c34.09-38.15 68.46-75.3 138.15-156.32m-132.34 156.44c35.25-38.24 69.12-81.13 130.82-151.53m-130.6 152.15c30.85-33.85 59.29-67.3 132.24-150.71m-128.33 152.15c35.05-36.05 62.39-71.83 129.18-144.76m-127.08 143.15c30.3-33.24 58.08-67.68 125.43-145.37m-120.12 145.24c39.78-49.83 84.04-95.31 120.56-137m-120.68 136.81c35.72-41.24 73.07-84.04 120.33-138.64M471.5 241.038c44.67-46.92 84.02-94.38 116.24-133.12m-114.02 134.72c39.77-47.34 82.2-93.66 115.01-133.66m-110.47 132.19c39.73-38.66 75.74-81.16 111.33-125.52m-110.58 127.2c29.77-35.85 60.87-70.82 109.73-127.76m-105 126.45c35.16-37.37 65.61-77.88 104.53-122.63m-103.9 123.29c37.47-45.44 77.69-91.87 104.83-122.71m-101.38 123.55c37.08-42.08 69.31-81.93 100.29-118.08m-99.26 117.51c21.36-23.43 42.56-48.09 100.89-116.07m-95.15 114.78c35.55-38.45 70.21-80 95.98-107.04m-96.35 107.63c22.48-25.77 43.63-51.65 95.94-109.39m-92.92 112.18c19.53-24.82 38.06-45.21 92.01-107.43m-90.86 105.39c25.03-27.7 50.43-55.99 91.5-103.47m-84.09 104.29c22.5-29.26 45.74-55.39 83.16-99.12m-83.38 97.26c27.2-34.17 57.65-68.52 84.03-95.59m-77.45 94.93c29.57-34.81 58.79-67.64 79.11-89.79m-79.34 89.7c26.71-31.44 53.83-62.78 77.32-89.31m-72.26 90.21c16.65-22.42 33.67-40.67 73.3-86.11m-73.43 85.93c22.23-25.67 41.83-48.89 73.47-83.67m-66.87 84.69c14.61-20.83 28.9-39.91 66.8-78.7m-68.97 76.36c21.62-22.47 41.79-44.26 68.69-76.22m-63.07 74.51c21.92-23.08 45.25-48.88 61.66-67.25m-60.72 69.16c22.18-24.82 42.49-48.55 62.65-72.02m-58.69 69.56c24.18-24.18 44.14-48.53 59-62.15m-56.5 63.48c13.32-13.81 25.64-31.25 54.62-63.34m-48.12 61.72c7.69-8.99 18.56-22.38 47.51-57.81m-49.19 60.21c17.06-18.94 32.51-39.73 49.94-59m-45.36 56.65c16.04-18.5 33.45-37.41 46.29-50.63m-45.08 51.46c12.14-13.18 24.79-27.01 44.85-50.28m-39.31 52.29c10.76-14.19 16.63-21.41 37.41-48.27m-37.88 47.34c14.74-18.24 29.51-33.51 39.05-46.24m-32.87 44.57c9.06-12.3 23.76-25 31.93-39.39m-32.3 39.19c12.75-14.56 25.37-28.59 33.75-37.43m-26.13 36.21c7.25-11.17 19.13-20.82 26.63-29.88m-26.24 29.31c7.52-9.91 17.96-20.36 26.37-30.12m-19.52 28.19c5.65-5.94 13.99-16.26 17.21-21.43m-17.51 23.03c5.19-7.84 10.16-15.2 19.73-22.89m-16.27 24.26c7.24-6.97 10.36-13 16.4-20.17m-15.45 18.89c2.15-4.14 5.79-8.11 14.23-17.27"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M409.53 30.448c-.1 28.82-.48 141.36-.54 173.39-.05 32.03-1.46 14.19.23 18.77 1.68 4.57 3.06 5.81 9.89 8.68 6.84 2.88 16.98 6.76 31.12 8.56 14.13 1.79 36.26 2.42 53.7 2.19 17.44-.24 37.82-1.58 50.95-3.6 13.12-2.03 22.38-5.6 27.8-8.53 5.42-2.94 3.95-5.14 4.71-9.09.75-3.96-.06 14.85-.17-14.65-.1-29.5-.28-133.08-.46-162.38-.19-29.29 1.22-9.45-.63-13.37-1.85-3.93-4.4-7.68-10.47-10.15-6.08-2.48-12.62-3.13-25.97-4.68-13.34-1.55-37.61-4.19-54.12-4.62-16.51-.43-31.82.18-44.94 2.05-13.12 1.87-26.85 6.34-33.78 9.18-6.93 2.85-6.6 6.48-7.8 7.9-1.19 1.41.5.64.61.61m-1.6-1.04c.25 28.36 3.01 139.95 3.04 172.28.04 32.33-4.25 16.65-2.84 21.7 1.41 5.04 3.97 6.31 11.31 8.55 7.33 2.24 18.43 3.33 32.7 4.87 14.27 1.55 35.77 4.32 52.91 4.4 17.15.07 37.23-2.02 49.96-3.92 12.73-1.9 21.26-5 26.41-7.49 5.16-2.49 3.44-3.42 4.51-7.45 1.07-4.02 1.75 12.98 1.91-16.72.16-29.7-.42-132.27-.94-161.48-.52-29.22.19-9.61-2.18-13.81-2.36-4.2-5.96-8.86-12-11.41-6.04-2.55-11.41-2.38-24.24-3.91-12.83-1.52-36.5-4.96-52.75-5.23-16.25-.27-31.36 1.52-44.76 3.64-13.41 2.12-29.02 6.28-35.66 9.1-6.65 2.81-3.04 6.38-4.22 7.81-1.18 1.43-2.74.57-2.88.76"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"M517.856 9.85c12.92.27 26.91 3.28 37.37 5.08 10.47 1.8 20.02 3.3 25.45 5.73 5.42 2.42 8.5 5.87 7.12 8.8-1.38 2.93-7.98 6.31-15.39 8.78-7.41 2.48-17.37 4.89-29.05 6.07-11.68 1.17-27.25 1.21-41.04.99-13.78-.21-29.24-1.23-41.67-2.28-12.42-1.04-24.68-1.83-32.87-3.99-8.19-2.17-14.12-6.02-16.27-8.99-2.15-2.98-1-6.36 3.36-8.87 4.36-2.5 12.73-4.41 22.81-6.16 10.08-1.75 23.32-3.71 37.66-4.36 14.35-.65 39.77.5 48.43.47 8.65-.04 4.04-1.03 3.51-.65m-66.4.57c11.36-1.63 29.02-1.54 42.65-1.54 13.63 0 27.2-.02 39.12 1.51 11.93 1.54 24.79 4.98 32.43 7.68 7.63 2.7 12.53 5.65 13.37 8.52.83 2.86-2.61 6.4-8.37 8.68-5.75 2.27-15.55 3.4-26.17 4.96-10.62 1.56-24.28 3.64-37.56 4.37-13.27.74-29.05.87-42.09.03-13.03-.83-26.44-3.02-36.11-5.03-9.68-2.01-17.54-4.58-21.95-7.02-4.42-2.44-6.83-4.99-4.56-7.62 2.26-2.63 9.73-5.69 18.14-8.17 8.41-2.47 26.67-5.76 32.32-6.68 5.66-.91 1.21.65 1.59 1.18"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M515.686 9.99c13.03.43 27.29 2.75 37.93 4.64 10.65 1.89 20.42 4.18 25.94 6.7 5.51 2.52 8 5.64 7.14 8.41-.85 2.76-5.35 6.09-12.27 8.2-6.93 2.11-17.57 3.14-29.29 4.48-11.71 1.34-27.22 3.37-40.99 3.56-13.76.19-29.18-1.41-41.6-2.44-12.42-1.03-24.69-1.59-32.91-3.74-8.23-2.15-13.89-6.25-16.44-9.17-2.56-2.91-2.85-5.65 1.09-8.32 3.94-2.67 12.89-5.62 22.54-7.69 9.66-2.08 21.96-4.01 35.42-4.75 13.45-.75 37.43.07 45.3.27 7.87.2 2.19.49 1.94.93m-13.56-.33c13.15-.14 29.39-.51 41.27.64 11.87 1.15 23.16 3.41 29.97 6.25 6.82 2.85 10.5 7.97 10.93 10.81.43 2.85-2.55 4.1-8.37 6.26-5.82 2.15-15.38 5-26.54 6.67-11.15 1.67-26.5 2.68-40.4 3.35-13.89.68-29.8 1.41-42.96.69-13.17-.72-26.96-2.88-36.01-5.01-9.05-2.12-14.71-4.79-18.29-7.73-3.57-2.95-5.66-7.5-3.16-9.95 2.5-2.45 9.19-2.97 18.14-4.76 8.96-1.79 23.1-4.47 35.59-5.98 12.48-1.51 32.54-2.66 39.33-3.08 6.78-.42 1.29.29 1.39.57"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M127.52 129.97c43.42.24 216.91.84 260.25.85m-258.3-1.91c43.31-.03 214.38-.2 257.24.22"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m385.04 130.86-11.87 5.73.56-15.66 11.25 8.78"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M386.67 128.85c-2.21 1.21-6.38 2.01-12.23 5.7m11.87-5.09c-3.1 1.56-7.85 3.62-12.58 5.88m.23.64c.06-3.97-.75-8.89-.65-13.87m-.65 13.92c.94-5.88.81-10.08.7-13.65m-1.09.35c6.9 3.06 11.16 5.86 15.41 6.81m-14.22-6.17c3.77.5 7.48 2.25 12.57 5.55m.68.21s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M499.925 152.174c-4.73-4.62-23.23-23.94-27.64-28.3m26.15 27.61c-4.44-4.53-19.77-22.12-24.07-26.67"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m472.815 123.194 15.3 8.81-7.96 5.95-7.58-12.8"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M475.215 123.314c2.67 3.54 10.27 4.86 13.04 7.18m-14.26-5.27c5.02 1.11 9.31 3.35 14.44 5.39m-.85.37c-3.78 3.78-7.74 7.23-8.82 8.49m9.35-8.78c-2.9 3.44-6.63 5.38-8.75 8.46m.04-.49c-1.07-2.58-2.68-7.08-4.01-15.29m3.83 15.5c-2.72-5.68-3.99-11.6-5.49-14.63m.63.57s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M500.041 152.135c-8.08 3.05-39.72 16.26-47.87 19.24m49.73-20.26c-8.25 2.6-42.66 15.06-50.74 18.34"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m449.371 169.805 10.76-9.64 7.98 10.85-17.9-2.05"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M451.231 169.315c3.44-4.41 4.83-6.94 11.22-10.39m-11.04 10.5c2.8-1.86 4.93-5.23 10.42-11.22m-.23.83c2.03 4.46 3.06 8.16 4.64 11.87m-4.03-12.18c1.05 5.22 2.98 9.74 3.71 12.23m1.23-1.83c-5.23 2.58-13.14 1.55-16.53-.5m14.87 1.37c-3.63.48-6.45.61-14.4-.79m.07.25s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M499.324 151.713c2.34-6.4 11.15-32.53 13.56-39.13m-11.56 38.29c2.26-6.69 8.56-33.09 10.59-39.89"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m511.514 109.353 4.23 16.11-11.53-3.57 5.86-12.15"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M512.404 110.933c1.31 4.53 1.36 6.12 2.55 13.82m-3.06-13.57c1.12 5.47 1.71 10.49 2.72 14.77m1.09-.17c-6.21-.44-10.85-2.17-13.82-2.51m13.09 1.87c-4.41.09-9.95-1.38-12.91-3m-1.05-.77c2.82-1.06 7.26-3.16 10.74-10.9m-9.88 12.12c3.82-3.97 5.65-7.47 9.69-12.17m.35.56s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M500.488 151.51c2.31 2.27 10.78 10.96 12.98 13.39m-13.96-14.39c2.19 2.45 10.97 13.44 13.27 15.73"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m511.268 166.79-6.58-6.11 6.23-4.89 3.06 11.33"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M512.848 166.64c-3.03-.91-4.72-2.3-8.47-3.61m8.07 3.49c-1.68-1.25-3.52-1.75-8.93-4.55m1.03 1.21c.73-2.32 2.21-3.16 5.53-6.64m-6.42 5.6c1.99-1.72 3.81-3.3 6.52-5.31m-.15.82c1.59 2.07 1.03 6.09 2.03 9.29m-2.11-9.53c1.61 2.98 2.21 6.59 3.12 8.76m-.29.07s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",w({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M499.118 150.947c8.64-3.53 44.52-17.58 53.21-21.05m-51.36 23.38c8.43-3.38 41.66-18.7 50.44-22.42"})),(0,n.kt)("path",w({parentName:"g"},{fill:"#c92a2a",fillRule:"evenodd",strokeWidth:"0",d:"m549.598 130.537-7.03 11.61-6.81-10.99 17.27-1.73"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#c92a2a",d:"M550.728 130.907c-4.26 2.67-7.54 7.09-8.52 12.35m9.21-12.32c-3.95 3.99-7.8 9.43-10.27 10.67m-.48-.07c.02-2.75-.87-6.02-5.28-11.01m5.59 11.75c-1.88-3.95-2.67-8.53-4.87-11.86m0-1.06c6.99 1.21 13.32 1.08 13.92.56m-13.97 1.18c5.3-.75 8.93-1.03 15.67.1m-.32-.34s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",w({parentName:"svg"},{x:"82.5",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 170)"}),"Data Protection"),(0,n.kt)("text",w({parentName:"svg"},{x:"82.5",y:"43",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(10 170)"}),"Officer"),(0,n.kt)("text",w({parentName:"svg"},{x:"39.5",y:"14",fill:"#c92a2a",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(208 105.823)"}),"compliance"),(0,n.kt)("text",w({parentName:"svg"},{x:"39",y:"18",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(459 53.333)"}),"Security"),(0,n.kt)("text",w({parentName:"svg"},{x:"39",y:"43",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(459 53.333)"}),"Data"),(0,n.kt)("g",w({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"#fa5252",strokeWidth:"0",d:"m247.661 72.007-17.52 26.91 38.47 1.11-18.88-30.3"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M249.901 72.257c-5.58 7.69-13.66 14.83-18.65 26.55m17.74-28.81c-8.62 11.01-15.54 23.13-19.64 28.19m-.96 1.46c12.07-.78 25.37-.82 37.6-.99m-37.15.44c13.09-.48 23.48.16 38.77.08m-.99 1.64c-3.4-9.25-8.42-16.06-17.77-30.02m18.42 28.62c-6.54-10.79-12.86-22.43-18.5-28.86m.39-.24s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",w({parentName:"svg"},{x:"3.5",y:"19",fontFamily:"Helvetica, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(245.433 75.88)"}),"!"),(0,n.kt)("text",w({parentName:"svg"},{x:"46.5",y:"14",fill:"#c92a2a",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(451.5 211.133)"}),"finite space"),(0,n.kt)("g",w({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"#fa5252",strokeWidth:"0",d:"m500.16 182.209-19.5 26.59 36.1 3.16-17.61-29.87"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"#000",d:"M499.19 183.259c-7.24 4.6-10.69 12.1-18.88 26.71m18.63-28.52c-4.91 5.49-8.41 11.33-20.37 29.45m-1.21-1.5c8.46 1.5 16.51 2.71 39.75 2.8m-37.26-1.44c11.88.16 24.87-1.05 37.86-1.47m.93 2.66c-5.97-7.8-10.75-17.36-21.23-30.61m19.25 29.64c-6.73-10.5-13.45-22.96-17.61-29.22m-.44-.38s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",w({parentName:"svg"},{x:"3.5",y:"19",fontFamily:"Helvetica, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(494.882 186.942)"}),"!"),(0,n.kt)("g",w({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",w({parentName:"g"},{fill:"#f8ed00",strokeWidth:"0",d:"m98.015 74.796-1.63 6.35-6.63 1.42 5.88 1.41-3.09 6.15 5.71-4.01 6.06 3.56-4.07-6.02 5.5-2.04-6.11-.66-1.62-6.16"})),(0,n.kt)("path",w({parentName:"g"},{fill:"none",stroke:"transparent",d:"M98.015 74.796c-.53 2.04-1.05 4.09-1.63 6.35m1.63-6.35c-.5 1.96-1.01 3.92-1.63 6.35m0 0c-2.65.57-5.3 1.13-6.63 1.42m6.63-1.42c-2.18.46-4.36.93-6.63 1.42m0 0c1.44.34 2.88.69 5.88 1.41m-5.88-1.41c1.47.35 2.95.71 5.88 1.41m0 0c-1.09 2.16-2.17 4.33-3.09 6.15m3.09-6.15-3.09 6.15m0 0c1.33-.93 2.66-1.86 5.71-4.01m-5.71 4.01c2.14-1.5 4.28-3 5.71-4.01m0 0 6.06 3.56m-6.06-3.56c1.99 1.17 3.97 2.33 6.06 3.56m0 0c-1.44-2.14-2.89-4.27-4.07-6.02m4.07 6.02c-1.59-2.36-3.18-4.71-4.07-6.02m0 0c1.4-.53 2.81-1.05 5.5-2.04m-5.5 2.04c1.84-.69 3.68-1.37 5.5-2.04m0 0c-2.16-.24-4.32-.47-6.11-.66m6.11.66c-2.08-.23-4.15-.45-6.11-.66m0 0c-.48-1.82-.95-3.64-1.62-6.16m1.62 6.16c-.39-1.48-.78-2.96-1.62-6.16m0 0s0 0 0 0m0 0s0 0 0 0"})))))),(0,n.kt)("p",null,"How can we implement a successful detection and response strategy in\nthis spectrum? By making the spectrum transparent and fully controllable. In\nVAST, we developed a declarative compaction approach to perform ",(0,n.kt)("a",w({parentName:"p"},{href:"/docs/use/transform"}),"fine-grained\ntransformation")," of historical data to control\nretention span and manage finite storage. Compaction operates in two dimensions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Temporal"),": temporal compaction defines what to do with data as a function\nof age. For example, a policy may dictate a maximum retention of 1 week for\nevents containing URIs and 3 months for events containing IP addresses\nrelated to network connections. However, these retention windows could be\nbroadened when pseudonomyzing or anonymizing the relevant fields. VAST not\nonly supports deletion of data after exceeding a configured age, but also\ntransforming the data with a set of transformations (such as hashing,\nencrypting, permuting). The intuitive declarative definition makes it easy to\nexpress data residency regulations in a shareable form, e.g., with data\nprotection officers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Spatial"),": Traditionally, reaching a storage budget triggers deletion of\nthe oldest (or least-recently-used) data. This is a binary decision to throw\naway a subset of events. What if you could only throw away the irrelevant\nparts and keep the information that might still be useful for longitudinal\ninvestigations? What if you could aggregate multiple events into a single\none that captures valuable information? Imagine, for example, to halve the\nspace utilization of events with network flow information and keeping them 6\nmonths longer; or imagine you could roll up a set of flows into a traffic\nmatrix that only captures who communicated with whom in a given timeframe."),(0,n.kt)("p",{parentName:"li"},"By incrementally elevating data into more space-efficient representations,\nspatial compaction gives you a much more powerful mechanism to achieve long\nretention periods while working with high-volume telemetry."))),(0,n.kt)("admonition",w({},{title:"Key Benefits",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"In summary, VAST's data aging capabilities have the following benefits:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Easy Compliance"),": VAST makes it easy to implement and share compliance\npolicies. The configuration of temporal compaction is a human-readable file\nthat clearly states what happens with the data at what age.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gradual Event Decay"),": instead of deleting old data as a whole, VAST offers\nan incremental approach to reduce size and information content of events. For\nexample, first filter out unneeded fields, then aggregate the smaller events\ninto an event summary, and delete the summary at last. Being able to express\nevent decay in this gradual way is the Goldilocks approach of managing utility\nof security telemetry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Dynamic Aging"),": When only considering age as input for deleting old data,\nhigh-volume data source also dictate the retention span for low-volume event\nstreams, because they can consume orders of magnitude more space. VAST's\nweighted aging makes it possible to define a ",(0,n.kt)("em",{parentName:"p"},"relative")," importance of events\nto each other. By assigning higher age weights to low-volume-but-important\ndata sources (e.g., alerts), we can selectively increase their retention span.\nThis unique age prioritization makes it easy to define importance of events\nindependent of the event mix.")))))}T.isMDXComponent=!0}}]);