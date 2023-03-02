"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7514],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},M=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),M=r,u=d["".concat(m,".").concat(M)]||d[M]||s[M]||i;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=M;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}M.displayName="MDXCreateElement"},7564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>D,frontMatter:()=>u,metadata:()=>w,toc:()=>x});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e},s=(e,t)=>i(e,l(t)),M=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const u={},k="Sigma",w={unversionedId:"understand/language/frontends/sigma",id:"understand/language/frontends/sigma",title:"Sigma",description:"The Sigma query frontend makes it possible to execute [Sigma",source:"@site/docs/understand/language/frontends/sigma.md",sourceDirName:"understand/language/frontends",slug:"/understand/language/frontends/sigma",permalink:"/docs/understand/language/frontends/sigma",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/language/frontends/sigma.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Frontends",permalink:"/docs/understand/language/frontends/"},next:{title:"VAST",permalink:"/docs/understand/language/frontends/vast"}},g={},x=[{value:"Usage",id:"usage",level:2},{value:"Search Identifiers",id:"search-identifiers",level:3},{value:"Taxonomy",id:"taxonomy",level:3},{value:"Comparison",id:"comparison",level:2},{value:"Expressiveness",id:"expressiveness",level:2},{value:"Compatibility",id:"compatibility",level:2}],f={toc:x},N="wrapper";function D(e){var t=e,{components:a}=t,r=M(t,["components"]);return(0,n.kt)(N,s(d(d({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"sigma"}),"Sigma"),(0,n.kt)("p",null,"The Sigma query frontend makes it possible to execute ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma"}),"Sigma\nrules")," in VAST. This means you can\nprovide a Sigma rule instead of a\n",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/understand/language/expressions"}),"VAST expression")," when querying data.\nFor example:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export json < sigma-rule.yaml\n")),(0,n.kt)("p",null,"Sigma defines a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma/wiki/Specification"}),"YAML-based rule language")," along with a compiler\nthat transforms rules into the native query languages of SIEM systems. VAST\ntakes a different approach and compiles the Sigma query directly into a native\nquery expression, without going through the Python tooling provided by the\nSigmaHQ project. This has numerous advantages in exploiting the richer type\nsystem of VAST. The translation process looks as follows:"),(0,n.kt)("p",null,(0,n.kt)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.kt)("svg",d({parentName:"figure"},{viewBox:"0 0 491.76 460",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXFlT48ZcdTAwMTZ+n1/hy61KJVWx0vsyVXlgt1xyXHUwMDFlXHUwMDE4YNhuUpQsy7ZAtowkwDiZ/36PxFwiyZa8sI0h8cNcZpZa3ae7v+9sfeS/PpVKS+Ft3176XFxaslx1MDAwN5bpOk3fvFn6Nbp+bfuB4/XgXHUwMDE2ib9cdTAwMDfelW/FLTth2Fx1MDAwZj7/9pvZ71x1MDAxYslThuV17560Xbtr98JcdTAwMDDa/lx1MDAwZr6XSn/F/6bG8m0rNHtt145cdTAwMWaIbyXDYYpGr37xevHQWirJlGCP951gXHJGXHUwMDBi7SbcbJluYCd3oktLazbabTTXT3eqdrldXHUwMDBmV1pBa3c5XHUwMDE5tOW47n5468ZCXHUwMDA1XHUwMDFlTCS5XHUwMDE3hL53YVx1MDAxZjnNsFx1MDAxM1x0NXK96Cnfu2p3enZcdTAwMTBknvH6puWEt9E1lEzublx1MDAwNT6XkitcdTAwMDP4RlnyPXqCXHUwMDEyNDL2qud6fjT2f1H8SUZvmNZFXHUwMDFiROg1021M1sJJm5uHXHUwMDE5iaTfju20OyFcXExdXHUwMDBi7HhVsdCKXCJcdTAwMDJcdTAwMGL/eCdcdTAwMWGhX23G+/tneua95v3MXHUwMDFmNjzZcnx/5XtcImvUfn1cdTAwMTQqabhkIFx1MDAxM9qD8HFcdTAwMTKpXHUwMDFkPt3YvsW6Va2sdvbRLW6fXHUwMDFmta5Wl1x1MDAxZdt9/zW/27uHh7h8aJqDUz6o7VxcXHRiKb+1bGVHeVx1MDAxON/0fe8m1e/9X8n8r/pNM7xfMimwYkrCqpHH+67Tu4CbvSvXTa551kWC3U8pgccok5l/ii2pfVx1MDAxOSFcdTAwMGLHmFxuojWZmS35a7nYbEmtcMxcdTAwMTZKJrFlMlUwN81Ga5wqUowzhYpRpnDEXHUwMDE1IVrpZ1x1MDAxMYVMJ8pcdTAwMDTMacxcdTAwMTmmc2Au2Vxcr1x1MDAxN+47w1hcdTAwMDSVubphdlx1MDAxZPc2s0MxXHUwMDE4YcX2nXbXTK9pYMOQcVx1MDAxZjzTeNl12lx1MDAxMVqXLJiE7WeAXHUwMDFjOmBCXHUwMDFlXHUwMDFidJ1mM21cdTAwMTcskMCEPv3qLFxu3fOdttMz3YOMgFx1MDAxM4k12Vx1MDAxNpFCelx1MDAxMYQ1VVxiMTUzv25cdTAwMGbP29Xy+Ylgna3D9lx1MDAwZT5eXHUwMDFmntZcdTAwMTacXyPWiLHnWaOW2UCIP9lcdTAwMWFRQVx0x0T8IGN0t429fXfH7NePv1x1MDAxZaNcdTAwMTZcdTAwMGKuvn7brNXdfKtcdTAwMTFcdTAwMTPl9Y3RxH5Ptq63j4LlXbW3VdWd20tT1kjtRY3cPFxu50lGTqtcIlx1MDAxNkpcdTAwMWU5hCiF42kknLx7i0nC1FxuxyTkr2Hk2DhcdTAwMDHHjVx1MDAxY9FSXHUwMDEzyujzXGL4rozc4fL+wZvauClmYtTGxfJNpFUsb1x1MDAwZa2ETE1hhFhYXCJcdTAwMDa+o1Czm7eT5s6l/63GSOVruVtcdTAwMGZcdTAwMGY20Y65t+DMXCLYXHUwMDEwUiNcdTAwMDWgpoRlfUkuuSFcdTAwMTXEnIRzKnFqrZ5k+XCLtEiO5dPCkJxpLlx1MDAwNFNaUz1OQ6yVXHUwMDAxVo8rSlx1MDAwNFx1MDAxNzzF1Fx1MDAwN1Ziilx1MDAxMbSguaxM6Ld3rJeH1rByenp4zI5ZeHO971x1MDAxZKVMwZI4OFwiK73dun9yska2yjdr55WbVrrB5c2X4W5l2VxcO3VrVdPdWFx1MDAxYjTKJ+lcdTAwMDady+FecMnZXHUwMDA2vjlAtevAXHJcdTAwMWT+aFx1MDAwMt9IPyAudLKMc+iHIDT9cMXpNZ1ee/RcdTAwMTG71yy445pBuOp1u05cYmLsek4vXHUwMDFjbVx1MDAxMfe7XHUwMDFjXHUwMDE5145tNnN6LrzXj7rL7mLyVylBc/TBhpSSK8lcdTAwMThlTCokXHUwMDFm7/35a/7TXHUwMDA2QE5qoVx1MDAxMIPQRUGon+mOY0NcdTAwMDGmXGLWXHUwMDA0nC7QutP7Q1x1MDAxNEHMXHT7QKFbsFx1MDAxMlx0o+JcdTAwMWWFMpSmmDDoUVOqp3WIkYEppZG+12DlXHUwMDAx/pnupDCIpJwooahGhKpp/TFuUCwoXHUwMDEzXGLmSiWSme5cdTAwMTRcdTAwMDGWacnAp1x1MDAwN0klwdPFY6AguICZUCqQZjTbXHUwMDFmM5hgXHUwMDEyhuJcYprIqeuHXHUwMDA1aCNcdTAwMDTScVxyXHUwMDEz1lxuZVdPYYNyTaRgSEksXHSZ2p9cdTAwMDZIaKJcdTAwMTnDWCOEcVY+SVxyXHJLKmGjQULOpi5fpKpcdTAwMTBH4G5JgkBbyux2XGJcdLpcdTAwMTTaXHUwMDAw+6KxxCzdXHUwMDAxXHUwMDAwuaRYSkBcdTAwMGXPolx1MDAwZqQjsG6ghSl4eWQ6WKA7fOedUFx1MDAwNLBcdTAwMTlcdTAwMDFcdTAwMGIzqGCgY1x0XHUwMDAwXHUwMDA2up1BOm5gXHUwMDAyXHUwMDBiRzWsNUeYZblcdTAwMTZcckVcdTAwMTjXXFxcdTAwMGJcdTAwMDJcdTAwMTRiU/tcdTAwMDN4XHUwMDAx2zhDXHUwMDEyMKNcdTAwMTO7XHUwMDFhfcogOiBcdTAwMTgxyjnYXYamY49zQykqXHUwMDAxzVxiXHUwMDAxwkRGvDIwXHUwMDA3OI2VXHUwMDE0XHUwMDFjJi1ALU7rXHUwMDEwpktgK4CaXHUwMDFjpiyy3CjD8iHQKUJcdTAwMDBcdTAwMTlhu1x1MDAwNJlcbmZcdTAwMDabXHUwMDBiuGdcdTAwMTiBemGgmLP9YUMjXHSbpFhkWem03pTBXGK007EpXHUwMDE2sIeZ3lx1MDAxOOBcYkDHeIRMmMW03sqgV5BcdTAwMDC3mkV4XHUwMDA1bsKksrtcdTAwMGL8XHUwMDA39Vx1MDAwNStcdTAwMGLrx4iaSrVZXHUwMDE18af0/0X+mu26Tj/IddkkqKZCl1xyiIepQjppMc1l27pccmreQSNw98yVTbe55TTWW4NFd9mIIajQXHUwMDA0c1x1MDAwNWqSpmKU2Gnj2tDpz/OctlZOpFx1MDAwNDZcdTAwMDLYL8DfXHUwMDAyolx1MDAxMlwidF56kFx1MDAxYcBzXHUwMDAyO8KiTyraeMhkcCTBQuD36bJlfJS5kidcdTAwMWYgXHUwMDFikck/jXJcdTAwMTBcZlx1MDAwNtNcdTAwMTSx2Vx1MDAxM1x1MDAxMjvfgjNcdTAwMDUh4GB7wypXreDszJFqwTlcYq5cYkNcInJCwICTlG2MOSjQxPzENNaFvtlcdTAwMGL6plx1MDAwZnDKSVPIXHUwMDFjso2lKcDbXHUwMDAxk8Nlfi4+RZ69W+umLrp2zVtp2sOb6pZe//bG0VxuRYq8XTZjzVxmXzhjXHUwMDFmev2iVEZmXHUwMDE2o3mLWJKJXHUwMDA0vFNcdTAwMDA5XGYsPvRcIlxiXHUwMDAyXHUwMDBmcMjI7GmLyXnXheRcdTAwMWYjI2fE6plZ+YLcxEw5eYKZiFx1MDAxNFx1MDAxZco3ZW/Dork1f1HMn1x1MDAxMuy+jmGWg6eYd9ZVkF6zaFx1MDAxZMz+Ut5xw5vlXHUwMDEyQJc6I4db82RcdTAwMTTQXFxur0g1n8nPLeS3SG3lmIGliiuF1OxcdTAwMDZ2ssvxLlxiztFcdTAwMGYkOCZMUYRcdTAwMTRLLMRcdTAwMDckeL36bXV7/bYudeekb8vB1em3ei+P4GXwfZiCwFx1MDAwMzx4XHUwMDFh5UJwKtHwQHluMFx1MDAxYeVcdTAwMWKQwlxmaS2m6IBcIqEmx2dpoZCBcJSSIVx1MDAwNFx1MDAwMm5YLcWoXHUwMDFhXHUwMDE3a0yKf5S+KXboi9WNXHUwMDE2XHUwMDFjKc7J7OpGk71ccvRcclHlXX89Xlxy6vtdPPRcdTAwMTZb3fBRf+KZNWeW3WRNc1xc3WAhXGZJgc1RVlx1MDAwZnRcdTAwMWPLOXNUXHUwMDEwv1NcdTAwMDSs51pKIcZ9e1x1MDAxY2VUorzgu9RGKadcdTAwMWQjgyNcIjUlXHUwMDFh9IRmqWgl48Qn4zw48U2An1x1MDAxNVx1MDAwMkw//9ErlVqeXHUwMDE3/18qmZHluPuz8bn0x5J97bh/LEVcdTAwMTdcdTAwMWGmf9/GgoFccmJQg0XfwV9vOnFPUTclzy/1vDBqnVx1MDAxYiMoUbQ3mZDBtVvhK1x1MDAwNFxmbzHrJ+lcdTAwMGZVnJKLssRMaTl7Su7ER6s3l9uD7uFW1epcdTAwMGbkdXtZiPelPph4XHUwMDFk9UEkNu6gx2mUiM7RXHUwMDFlmFx1MDAxYZhEJVx1MDAwMoIgjLFKaYlcdTAwMDf1oYG8XFwz8SPr9F5Hf/BZ9cfPZun334E0pZ9+KjWiP1x1MDAxZkjzS+nvv0v/Kf1sRVx1MDAxN+9cdPNLriqIjuZcblx1MDAxNvotdMGcM5hI68lcdTAwMTWAKFVROuZcdTAwMWNoxVx1MDAwNSFk9oJ0bZV9dV4/98Ljfb29+cVarVx1MDAxZpZcdTAwMTeb3ZSBRZ6Q7GPxISiGhXhegYRcdTAwMTLK1lwix2mgI1x1MDAxOf2cXGYgkdkmmo7SXlxuzbFk+U5Dyp8+22tUPNKgm9fDltLbvcZOv/9aufDN/sZuuP7V2vDarip3Lk5cdTAwMWJcdTAwMTfDvZR3P2p6XHUwMDFlb8yQXG7XVFx1MDAxMfzq1edcdTAwMTjzwpc1QClorLmYozZv8oJk2dExrc6Vby9cdTAwMDA/XHUwMDA0n5hcZuf4RfgxMSuOUV7Z0FidXHUwMDEw5jSOZVxuXCL5Z9Hg5fPic1x1MDAwMrjARIJdpEIxXGKLOVx1MDAxMTTTaEKafNf0L6/sMHJccjdsM+zY+Vx1MDAwZTFGmSdfrFx1MDAwNHCKmVx1MDAxOLWGOdI+x+KxYk4zQlRU4TE7p0Nv+Si4Wrs9XHUwMDEzrlM1OXHWdyvh+7Z4krxcdTAwMDGj6YhFyzlkXHUwMDE2I4ZRj/FcdTAwMWTdVYBg/PJ8n2z23swyTYMyK4SykIhSKudcYs3Cwc7ZXHUwMDE33z5v7ZjnZ6LaMXc3LrZcdTAwMTdcdTAwMWPKgn5cdTAwMTAoQ9yHtFJk2pHux4VycVx1MDAxY8KQwlRiOjuUW22zfnp2vlx1MDAxMa40rKFv7bDD7dNFf9VPylx1MDAwZlx1MDAwMmXYSlx1MDAwNNFcYnrzYGTxoUzBSeN0XHUwMDBl9+LkyLtod2pcdTAwMDP+xVx1MDAxOVx1MDAxZV20zru9i8NcdTAwMDU/vadcdTAwMWF/XGYgU1x1MDAxY5WKkteIJt47jjFTXHUwMDEyM0rZ7Kmhg8rRXuXy4sK93Dv0NWbdzeMuX2wkM8Q/XHUwMDA2kiGuwVx1MDAxYYLot89cdTAwMGa9XHUwMDAzKGuBXHUwMDE4XHUwMDE3fI6SKvOksr/WrdxSN8R13z/uVYOby1x1MDAwNYcy/igxXHUwMDFmpYoxpdG/jnKOd4GZgK2cXHUwMDE5yJe1duA2WzubTYtcdTAwMGaOl2vuaqPuLDiQ6UeJ+FxiwZKCmP9cdTAwMDJ5/LddiCbRe3kzXHUwMDAz2aHLu11n1+2s7lx1MDAxZUpycIyqXHUwMDA3dmPBgcw+SLxHKEdYqKmvevxcdTAwMDNxXHUwMDFjvVxuiqLXZGZcdTAwMGb4uqRR6ba2a2rofT3aOWipRpks+OtcdTAwMTJMfJCAL4pqNFxiWvBjYP9cdTAwMDQoXHUwMDE3V1xuXHUwMDEyilx1MDAwNIt+nWZmKPe5dbVSo6zlWpXwdFx1MDAxMFxmXHSuni04lOVHifgkiUo7XHUwMDBiqoDeM5LvsCUrN7XDr2SrX/E65yu73e56pX+RrGX+wX6cnaLaUFxiS0FcdNgsLmV2h1x1MDAxOULRO+CKUn5f2jy2P1wi5yyaTFx1MDAwMtYoQLBcdTAwMTLMbExcdTAwMDTI2Fx1MDAwZkn96NqA6TVk2arqO1x1MDAxNDKtMbCJjlx1MDAxNVx1MDAxMMZcbqX4LUOqosRcdTAwMWJBs4Tko1xizMjxgpVpXHUwMDBmR+d33HXSXHUwMDFhNH1cIi8yV1x1MDAwYo7gn1Q+lj6XT0A7R1FZXCL5RFx1MDAxM1FUXGZDxrcxSVx1MDAwN1KhXHUwMDE5p3PkUCa/j/DD8V50ck7iXyWAueJcdTAwMWPlwTPvRYyKlZDbXHUwMDE2Uj71l+RSNVx1MDAxZXna51H9I4Yl16lf0pqTwe/4reen8zJcdTAwMTLQXHUwMDFl2NZVaE/j3VtUgT6I8ulhpeJVWjL7/f1cdTAwMTDWaOmhKmnp2rFvVvLf749e8f90T/aIVXZcXMz0/dP3/1x1MDAwM+GEfWwifQ==",(0,n.kt)("defs",{parentName:"svg"},(0,n.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"#00a4f1",strokeWidth:"0",d:"m44.37 10.03 135.92-.64 4.9 6.24 4.66 6.77 1.16 38.26-5.65 5.93-11.69 4.01L38.8 67.09l-4.25-.42-4.16-8.95-.72-36.58 5.74-8.73 2.1-.94 5.8-2.59"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M45 10c34.97-2.91 74.47-.35 130 0M45 10c27.97-1.62 53.54-1.53 130 0m0 0c9.79-1.03 15.27 4.38 15 15m-15-15c10.3 2.25 14.08 6.98 15 15m0 0c-.09 9.46.55 21.9 0 30m0-30c1.13 8.88.91 19.61 0 30m0 0c-1.66 9.46-4.12 15.3-15 15m15-15c-1.97 8.83-6.8 14.19-15 15m0 0c-31.65 1.28-63.39-.63-130 0m130 0c-35.77-.12-72.78.46-130 0m0 0c-10.97-1.32-13.62-5.5-15-15m15 15c-10.57.8-15.65-4.89-15-15m0 0c1.07-9.69.04-19.76 0-30m0 30c-.35-10.61-.06-23.56 0-30m0 0c1.88-9.76 6.87-13.02 15-15M30 25c.79-7.84 2.94-15.98 15-15"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"38",y:"25",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(72 22)"}),"Sigma"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"#fab005",strokeWidth:"0",d:"m43.55 130.82 137.43 1.65 6.03-.34 4.57 8.86-2.46 40.11-4.63 8.13-11.37.62-134.07-.89-7.29-2.74-.89-9.6-2.45-35.5 6.17-8.35 2.37-2.16 6.09-.85"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M45 130c29.64-1.42 57.86 1.17 130 0m-130 0c37.25.32 74.54-1.24 130 0m0 0c9.8.92 15.89 4.28 15 15m-15-15c10.83-1.08 13.16 5.41 15 15m0 0c-1.76 11.03-1.15 19.07 0 30m0-30c-.29 5.96-.57 13.76 0 30m0 0c1.53 8.4-6.35 14.7-15 15m15-15c-.28 10.54-5.11 12.76-15 15m0 0c-27.26 1.38-55.98-1.65-130 0m130 0c-33.87-.72-68.64-1.27-130 0m0 0c-9.43-1.42-14.23-5.15-15-15m15 15c-12-1.21-13-5.22-15-15m0 0c-1.9-6.24.63-14.12 0-30m0 30c-.83-9.05.28-19.35 0-30m0 0c.72-10.42 3.63-15.31 15-15m-15 15c-.27-9.1 2.91-14.24 15-15"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"37",y:"25",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(73 142)"}),"VAST"),(0,n.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"#f1f2f2",strokeWidth:"0",d:"M12.4 267.15 10.96 417.3l-.05 17.7 1.79 4.71 15.84 3.53 30.4 6.42 57.37-.79 57.48-.57 17.41-4.17 14.09-6.35 4.22-3.96-2.82-1.34 1.81-166.61-2.87-.49-4.85-2.07-6.13-3.38-18.43-4.7-67.35-3.83-52.3 1.81-21.68 2.4-20.18 7.78-4.38 2.64"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M11.54 267.85c.23 24.84.87 120.95.73 148.58-.13 27.63-3.11 12.82-1.54 17.2 1.57 4.38 3.11 6.58 10.97 9.1 7.86 2.52 20.56 4.87 36.2 6.05 15.64 1.17 38.55 1.47 57.65 1.02 19.11-.45 42.28-2.13 56.98-3.72 14.69-1.6 25.43-3.7 31.2-5.83 5.77-2.12 2.6-3.35 3.42-6.91.82-3.57 1.33 11.06 1.52-14.48.2-25.55.14-113.38-.35-138.8-.48-25.42-.38-10.29-2.56-13.72-2.19-3.43-4.1-5.09-10.55-6.85-6.44-1.76-13.52-2.25-28.12-3.72-14.6-1.47-41.51-4.86-59.48-5.1-17.97-.25-33.9 1.84-48.34 3.65-14.43 1.81-30.51 5.03-38.27 7.21-7.76 2.18-6.63 4.68-8.29 5.87-1.67 1.19-1.63 1.12-1.69 1.27M10 266.95c.14 24.96.78 122.5 1.29 150.4.52 27.91.05 13.18 1.82 17.04 1.76 3.87 1.48 3.63 8.78 6.13 7.3 2.51 19.24 7.56 35.01 8.89 15.77 1.33 40.27-.62 59.59-.89 19.31-.26 41.89.69 56.28-.69 14.39-1.39 24.06-4.98 30.07-7.64 6.01-2.65 4.86-4.6 5.99-8.3 1.14-3.71.78 11.21.79-13.93.01-25.15-.37-111.56-.73-136.96-.36-25.39.71-11.68-1.44-15.41-2.15-3.74-4.58-5.36-11.46-6.99-6.89-1.63-15.24-1.89-29.86-2.79-14.61-.9-39.68-2-57.84-2.61-18.17-.61-36.47-2.6-51.15-1.05-14.68 1.54-29.4 7.73-36.92 10.33-7.52 2.6-6.99 4.69-8.2 5.25-1.22.56.73-1.74.93-1.89"}))),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"#fff",strokeWidth:"0",d:"M71.207 250.6c11.79-1.32 28.61-1.74 43.07-1.51 14.46.23 30.88 1.66 43.69 2.88 12.81 1.22 24.64 2.57 33.17 4.44 8.52 1.88 15.4 4.4 17.97 6.81 2.57 2.41 1.17 5.4-2.55 7.67-3.73 2.26-10.56 4.16-19.79 5.92-9.23 1.76-22.33 3.52-35.59 4.64-13.26 1.12-29.52 1.97-43.99 2.06-14.48.1-30.2-.45-42.87-1.49-12.66-1.04-24.98-2.52-33.14-4.75-8.17-2.22-13.43-5.96-15.86-8.6-2.44-2.64-2.18-5.17 1.27-7.23 3.45-2.06 9.7-3.55 19.43-5.15 9.73-1.61 32-3.49 38.94-4.48 6.93-.98 2.19-1.66 2.66-1.41m71.94.24c12.77.73 26.46 4.04 35.9 6.13 9.45 2.08 16.89 4.21 20.76 6.4 3.87 2.19 5.22 4.48 2.47 6.76-2.74 2.28-10.52 4.97-18.94 6.91-8.43 1.94-19.03 3.82-31.61 4.74-12.58.91-29.64.7-43.9.77-14.26.07-28.88.3-41.67-.34-12.79-.65-25.72-1.8-35.08-3.54-9.36-1.73-17.13-4.19-21.1-6.86-3.97-2.68-5.46-6.71-2.74-9.19 2.71-2.49 10.43-4.01 19.03-5.73 8.59-1.73 20.17-3.62 32.53-4.6 12.37-.98 27.4-1.39 41.66-1.28 14.27.1 36.74 1.69 43.92 1.93s-.24-.29-.83-.48"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M64.927 252.48c11.53-1.07 29.07-1.83 43.21-2.08s28.76-.15 41.61.59c12.85.74 25.99 1.9 35.47 3.85 9.48 1.94 17.67 5.4 21.41 7.84 3.74 2.44 3.63 4.64 1.01 6.8-2.61 2.16-8.41 4.22-16.71 6.15-8.3 1.93-20.32 4.29-33.11 5.44-12.79 1.15-29.46 1.38-43.62 1.47-14.17.09-28.39-.12-41.39-.93-13-.8-27.24-1.95-36.6-3.9-9.37-1.94-16.1-5.45-19.61-7.76-3.52-2.31-4.15-3.95-1.49-6.09 2.67-2.15 7.58-4.69 17.46-6.8 9.87-2.11 33.52-5.01 41.79-5.86 8.27-.84 7.25.41 7.81.77m46.42-1.88c13.74.1 29.51.23 41.17 1.7s22.19 4.53 28.78 7.11c6.58 2.58 10.02 6.02 10.75 8.35.73 2.34-.68 3.65-6.39 5.67-5.7 2.02-17.08 4.91-27.84 6.45-10.76 1.53-23.22 2.33-36.73 2.76-13.51.43-30.09-.04-44.32-.19-14.24-.15-29.52.78-41.07-.69-11.56-1.47-21.31-5.83-28.25-8.11-6.95-2.28-12.79-3.22-13.4-5.55-.62-2.33 4.06-6.01 9.71-8.43 5.64-2.41 13.43-4.69 24.16-6.05 10.74-1.37 26.28-1.59 40.27-2.15 13.98-.56 36.59-1.41 43.64-1.23 7.04.18-1.01 2.17-1.38 2.31"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"38.5",y:"25",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(71.407 292)"}),"Data"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M109.22 70.88c-.17 9.84-.32 49.36-.31 59.12m2.11-59.71c.18 9.96.51 51.21.03 61.25"})),(0,n.kt)("path",d({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m109.09 129.96-3.64-13.2 11.11.53-5.47 16.22"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M112.15 130.18c-3.03-3.62-5.52-6.46-7.26-12.79m5.48 13.83c-1.42-4.77-3.76-8.44-5.73-12.98m-.66-1.41c3.71 1.26 8.13.33 13.17.07m-12.25.72c3.59-.02 7.4.96 12.54.07m.04.05c-1.24 4.44-4.19 6.33-5.56 12.64m6-11.78c-2.19 1.84-3.37 4.25-6.37 13.34m-.5-.4s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M109.25 188.9c-.04 9.96-.15 50.58-.19 60.83m2-58.79c.38 10.15.16 50.62.22 60.19"})),(0,n.kt)("path",d({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m110.42 250.51-4.86-14.33 12.7 2.87-7.73 12.2"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M109.91 249.96c-.52-3.44-1.17-4.43-5.2-13.02m6.07 13.54c-.44-3.08-3.16-6.2-6.04-12.31m-.8-1.16c5.48 1.58 9.95-.69 14.08.26m-12.71.42c3.22.5 7.49-.67 12.91.06m-.22-1.68c-3.15 3.75-3.5 9.85-6.74 14.27m5.9-12.82c-1.06 4.61-3.92 9.56-5.46 13.51m-.42.1s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",d({parentName:"svg"},{y:"9.847",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"detection:"),(0,n.kt)("text",d({parentName:"svg"},{y:"22.694",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"  foo:"),(0,n.kt)("text",d({parentName:"svg"},{y:"35.542",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"    a: 42"),(0,n.kt)("text",d({parentName:"svg"},{y:"48.389",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),'    b: "evil"'),(0,n.kt)("text",d({parentName:"svg"},{y:"61.236",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"  bar:"),(0,n.kt)("text",d({parentName:"svg"},{y:"74.083",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"    c: 1.2.3.4"),(0,n.kt)("text",d({parentName:"svg"},{y:"86.93",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 10)"}),"  condition: foo or not bar"),(0,n.kt)("text",d({parentName:"svg"},{y:"10.128",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"10.503",style:{whiteSpace:"pre"},transform:"translate(210 150)"}),'(a == 42 && b == "evil") || ! (c == 1.2.3.4)'),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"#868e96",strokeWidth:"0",d:"m38.757 333.655 143 2.66-.75 27.25-139.97-.78"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",d:"M39.847 333.375c48.77 1.22 96.46-.83 140.83-.27m-141.08.89c54.35 1.73 107.09.84 141.05 1.41m-.53.69c-1.21 6.36 1.64 11.19-1.23 25.65m.83-27.92c.76 6.69 1.23 14.05.32 28.77m-.93-.38c-31.84 1.34-68.78-.52-139.64.08m140.08 1.19c-53.16-1.52-105.13-1.63-140.48.3m-1.08.81c1.81-8.78 2.76-17.42 3.49-31.81m-2.22 30.63c.25-7.8.81-14 1.45-28.12"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"54.5",y:"10",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"10.947",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(55.407 341.785)"}),"Parquet or Feather"),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M40.357 363.135c4.63-1.34 9.85-1.43 14.66-.78m-14.48.85c3.58-.52 7.6.13 13 .02m-.81.32c2.93 17.5.23 37.39-.45 71.21m1.92-72.36c.34 17.87-.3 33.43-.83 71.03m1.82-.68c-6.76-1.34-11.65-.35-14.18-.44m12.54.04c-3.29.02-8.26 1.24-13.98-.03m.04.53c1.62-29.57 2.54-57.96-1.27-69.74m1.22 68.71c1.01-22.09 1.6-42.7-.22-69.6"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M54.257 362.975c2.72.3 6.79.88 13.22-.53m-13.15.69c3.14.04 7.56-.85 14.02-.49m.32 1.81c-1.64 19.02-1.34 40.13 1.21 67.08m-2.36-67.99c.58 19.01-.47 37.99 1.03 69.83m-.68-1.04c-4.94.27-7.59 1.68-14.44.27m14.04.54c-3.77-1.02-6.24-.78-14.03.33m.53-.04c-2.25-13.37-2.69-30.81.26-70.34m-1.29 69.9c-.44-15.84 1.04-33.64.4-69.28"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M68.097 361.695c3.56-.12 7.35.62 13.47.66m-13.31.22c3.26.56 5.47.57 13.51.28m1.81-1.4c-3.11 25.87-3.72 54.46-2.92 70.94m2.01-68.75c-.43 13.25-1.1 28.37-.17 68.74m-1.04-.94c-3.66.99-6.05.86-13.73.83m14.54-.01c-6.13 1.13-11.07-.04-13.67-.15m-.04-.89c1.03-27.78-2.12-52.8-.34-69.75m-.1 70.34c.83-23.92-.54-50.39.72-68.26"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M80.817 363.325c4.57.55 9.97-.9 14.66-1.64m-13.78 1.62c6.11-.96 11.58-.73 14.28-.06m-1.4-1.48c.56 16.25 3.57 33.49.94 69.1m1.25-67.95c-1.32 22.36-.49 46.52-1.26 69.59m-.94-.03c-4.49 1.37-10.1.08-13.17 1.29m13.99-1.57c-2.26.32-6.91 1.36-14.15 1.22m-.89.94c-.46-23.09 1.86-41.16.25-70.31m.34 69.54c2.16-19.91 1.08-36.95 1.74-70.25"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M96.447 361.615c5.12.85 8.21.85 12.36 2.43m-12.38-.82c4.14.04 9.41-.33 13.94-.85m-1.48-.63c-.03 26.67.35 47.96-.9 71.62m2.05-70.77c-.13 19.13 1 36.4-.41 71.11m-.03-1.27c-2.75-.26-8.19-.29-12.71-.37m12.43 1.42c-3.06-1.27-5.34-1.47-12.78-.8m.94-1.9c-3.37-18.88-1.49-41.72-.31-68.7m-.46 71.21c-1.52-15.26-.02-28.11-.25-70.12"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M108.737 363.895c5.13-1.51 9.53-2.27 16.43-.28m-14.82-1.2c4.91.13 9.45.72 13.15.64m-.63-1.9c2.54 27.24.19 53.44 1.62 70.86m-.77-69.77c1.43 27.48.4 52.94 1.11 70.51m-1.27 1.13c-3.88-1.31-7.67-.15-14.37-1.99m15.42.55c-6.1.92-11.23.86-14.8.36m-1.9-1.59c2.87-21.39 1.24-43.72 1.3-70.38m1.21 71.38c-.4-20.95.94-43.77-.12-68.87"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M125.017 362.355c1.65.12 4 1.81 13.72 1.14m-15.2-.27c4.02-.46 8.4-.94 14.64.15m-1.9 1.38c.02 13.98-.64 31.28.86 69.56m.23-70.89c1.23 26 .35 54.35.51 69.04m1.13-.16c-4.14-.06-5.84-.27-15.99 1.21m14.55-1.2c-2.12-.06-5.34.5-13.64.7m-1.59.09c1.33-17.16 2.28-32.1-.38-69.91m1.38 69.02c.94-12.88.56-27.47 1.13-69.43"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M137.477 362.445c4.74-.87 11.17 1.06 15.14-.07m-14.27.27c4.87.67 9.62.48 14.15-.33m1.38-.78c-2.72 16.75-1.75 35.31-.44 72.98m-.89-71.14c-1.17 21.04.14 43.2-.96 68.45m-.16.78c-3.92 1.27-8.02-.6-12.79-.86m12.8 1.73c-3.22-.12-5.67-.74-13.3-1.24m.09.86c-.93-25.55-.32-55.26.09-72.25m-.98 72.87c.98-26.95.6-53.52.57-71.1"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M151.567 362.355c2.26 1.74 7.22 1.18 13.93 1.46m-13.73-.96c5.67-.57 10.55.43 13.67-.43m-.78-.03c-1.24 18.33-.09 36.64 2.98 70.65m-1.14-70.66c-1.25 20.98-1 39.42-1.55 70.18m.78-.29c-2.69-.26-8.42 1.19-14.86-.67m15.73.51c-5.65.47-11.86.8-15.24 1.22m.86-1.86c1.5-13.4-1.71-26.3-2.25-67.1m2.87 69.18c.02-24.95.04-49.91-1.1-71.76"})),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M165.477 361.685c7.01 1.97 11.77.72 15.46 1.97m-14.96-.41c2.97-.17 7.43-.9 13.57-.82m-.03-1.56c1.66 16.43 2.61 34.21.65 71.54m-.66-69.9c1.76 17.49.53 33.79.18 70.03m-.29 1.23c-5.51-1.89-9.36-2.04-14.67.42m14.51-.77c-2.95-.47-6.13-1.04-12.78-1.33m-1.86 1.96c.49-18.71 1.61-34.2 2.9-70.24m-.82 69.53c.02-16.97-.37-34.67-1.76-70.11"})),(0,n.kt)("text",d({parentName:"svg"},{y:"14",fill:"#1864ab",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(29.802 90.05)"}),"transpile"),(0,n.kt)("text",d({parentName:"svg"},{y:"14",fill:"#e67700",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(32.884 205.434)"}),"execute")))),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"To use the Sigma frontend, ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/setup/configure#plugins"}),"install the ",(0,n.kt)("inlineCode",{parentName:"a"},"sigma"),"\nplugin"),". Then use the ",(0,n.kt)("inlineCode",{parentName:"p"},"vast export")," command\nto provide a Sigma rule on standard input:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export <format> < sigma-rule.yaml\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<format>")," placeholder represents an output format, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"csv"),",\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"sigma-rule.yaml")," a file containing a Sigma rule."),(0,n.kt)("h3",d({},{id:"search-identifiers"}),"Search Identifiers"),(0,n.kt)("p",null,"The Sigma rule YAML format requires a ",(0,n.kt)("inlineCode",{parentName:"p"},"detection")," attribute that includes a map\nof named sub-expression called ",(0,n.kt)("em",{parentName:"p"},"search identifiers"),". In addition, ",(0,n.kt)("inlineCode",{parentName:"p"},"detection"),"\nmust include a final ",(0,n.kt)("inlineCode",{parentName:"p"},"condition")," that combines search identifiers using boolean\nalgebra (AND, OR, and NOT) or syntactic sugar to reference groups of search\nexpressions, e.g., using the ",(0,n.kt)("inlineCode",{parentName:"p"},"1/all of *")," or plain wildcard syntax."),(0,n.kt)("p",null,"Consider the following Sigma ",(0,n.kt)("inlineCode",{parentName:"p"},"detection")," embedded in a rule:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-yaml"}),'detection:\n  foo:\n    a: 42\n    b: "evil"\n  bar:\n    c: 1.2.3.4\n  condition: foo or not bar\n')),(0,n.kt)("p",null,"VAST translates this rule piece by building a symbol table of all keys (",(0,n.kt)("inlineCode",{parentName:"p"},"foo"),"\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),"). Each sub-expression is a valid VAST expression itself:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"foo"),": ",(0,n.kt)("inlineCode",{parentName:"li"},'a == 42 && b == "evil"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"bar"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"c == 1.2.3.4"))),(0,n.kt)("p",null,"Finally, VAST combines the expression according to the ",(0,n.kt)("inlineCode",{parentName:"p"},"condition"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-c"}),'(a == 42 && b == "evil") || ! (c == 1.2.3.4)\n')),(0,n.kt)("admonition",d({},{title:"Rich YAML Typing",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Because VAST has a beefed up YAML parser that performs type inference, the YAML\nsnippet ",(0,n.kt)("inlineCode",{parentName:"p"},"c: 1.2.3.4")," is parsed as a key-value pair with types ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"address"),". This means that we get the rich type system of VAST for free.")),(0,n.kt)("h3",d({},{id:"taxonomy"}),"Taxonomy"),(0,n.kt)("p",null,"Sigma comes with a ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma/wiki/Taxonomy"}),"taxonomy")," to\nfacilitate rule sharing by standardizing field names of the supported data\nsources."),(0,n.kt)("admonition",d({},{title:"Missing Definitions",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"VAST currently does not ship with a taxonomy to transparently map the canonical\nSigma fields to an equivalent in VAST. We will ship the missing mappings in the\nfuture. To date, you must either use VAST concepts to re-implement the mappings\nor wait until we have provided them.")),(0,n.kt)("h2",d({},{id:"comparison"}),"Comparison"),(0,n.kt)("p",null,"VAST and Sigma have many commonalities. They both support flexible construction\nof search expressions using boolean algebra (AND, OR, NOT) and offer multiple\nways to define predicates and sub-expression. But there also exist differences\nin expressiveness and intent. This section compares the two systems."),(0,n.kt)("h2",d({},{id:"expressiveness"}),"Expressiveness"),(0,n.kt)("p",null,"The majority of rule definitions include combinations of exact string lookups,\nsubstring searches, or pattern matches. Sigma uses\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma/wiki/Specification#value-modifiers"}),"modifiers"),"\nto select a concrete operator for given search predicate. Without a modifier\nspecification, Sigma uses equality comparison (",(0,n.kt)("inlineCode",{parentName:"p"},"=="),") of field and value. For\nexample, the ",(0,n.kt)("inlineCode",{parentName:"p"},"contains")," modifier changes the operator to substring search, and\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"re"),' modifier switches to a regular expression match. The now "legacy" sigma\ncompiler lacks support for ordering relationships, such as less-than comparison\nof numerical values, e.g., ',(0,n.kt)("inlineCode",{parentName:"p"},"x < 42")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp >= 2021-02"),". The\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/pySigma"}),"pySigma")," project addresses this with the\nadditional modifiers ",(0,n.kt)("inlineCode",{parentName:"p"},"lt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lte"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"gt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"gte"),"."),(0,n.kt)("h2",d({},{id:"compatibility"}),"Compatibility"),(0,n.kt)("p",null,"VAST's support for Sigma is still in the early stages and does not support the\nfull ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/SigmaHQ/sigma/wiki/Specification"}),"language specification"),'. Most notable, the concept of a\n"value" is different:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VAST does not yet offer case-insensitive string search"),(0,n.kt)("li",{parentName:"ul"},"VAST does not yet treat ",(0,n.kt)("inlineCode",{parentName:"li"},"*")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"?")," wildcards in strings as wildcards")),(0,n.kt)("p",null,"The table below shows the current implementation status of modifiers, where \u2705\nmeans implemented, \ud83d\udea7 not yet implemented but possible, and \u274c not yet supported\nby VAST's query engine:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Modifier"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Use"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"sigmac"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"VAST"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"contains")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"perform a substring search with the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"startswith")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"match the value as a prefix"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"endswith")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"match the value as a suffix"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"base64")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"encode the value with Base64"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"base64offset")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"encode value as all three possible Base64 variants"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16le"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"wide")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16 little endian"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16be")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16 big endian"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"utf16")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"transform the value to UTF16"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"re")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"interpret the value as regular expression"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\ud83d\udea7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"cidr")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"interpret the value as a IP CIDR"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"all")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"changes the expression logic from OR to AND"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"lt")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare less than (",(0,n.kt)("inlineCode",{parentName:"td"},"<"),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"lte")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare less than or equal to (",(0,n.kt)("inlineCode",{parentName:"td"},"<="),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"gt")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare greater than (",(0,n.kt)("inlineCode",{parentName:"td"},">"),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"gte")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"compare greater than or equal to (",(0,n.kt)("inlineCode",{parentName:"td"},">="),") the value"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"expand")),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"expand value to placeholder strings, e.g., ",(0,n.kt)("inlineCode",{parentName:"td"},"%something%")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u274c")))))}D.isMDXComponent=!0}}]);