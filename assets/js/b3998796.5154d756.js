"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042],{52894:(e,t,n)=>{n.d(t,{ZP:()=>s});var i=n(83117),o=(n(67294),n(3905));const a={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Missing Documentation",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This part of the documentation is not yet written. Stay tuned.")))}s.isMDXComponent=!0},760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=n(83117),o=(n(67294),n(3905)),a=(n(61839),n(52894));const s={"sidebar-position":1},d="Modules",r={unversionedId:"understand/data-model/modules",id:"understand/data-model/modules",title:"Modules",description:"Type Definition Rules",source:"@site/docs/understand/data-model/modules.md",sourceDirName:"understand/data-model",slug:"/understand/data-model/modules",permalink:"/docs/understand/data-model/modules",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/data-model/modules.md",tags:[],version:"current",frontMatter:{"sidebar-position":1},sidebar:"docsSidebar",previous:{title:"Type System",permalink:"/docs/understand/data-model/type-system"},next:{title:"Taxonomies",permalink:"/docs/understand/data-model/taxonomies"}},l={},p=[{value:"Type Definition Rules",id:"type-definition-rules",level:2},{value:"Module Directory Lookup",id:"module-directory-lookup",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)(a.ZP,{mdxType:"MissingDocumentation"}),(0,o.kt)("h2",{id:"type-definition-rules"},"Type Definition Rules"),(0,o.kt)("p",null,"All defined type names and aliases share one ",(0,o.kt)("em",{parentName:"p"},"global")," identifier namespace.\nIntroducing a new type definition or alias adds a symbol to this namespace. The\nfollowing rules exist to make manipulation of the namespace manageable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VAST processes all directories of the ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option ",(0,o.kt)("em",{parentName:"p"},"in order"),",\ncreating a union of all type definitions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Within")," a specified module directory, all type definitions must be unique,\ni.e., no types can have the same name.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Across")," directories, later definitions can override existing ones from\nprevious directories. This allows users to adapt existing types by providing\nan alternate definition in a separate module directory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resolving aliases to custom types follows a 2-phase lookup, which makes it\npossible to use a custom type and define it afterwards in the module file.\nThe 2-phase lookup only works within a module directory."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"VAST processes all directories ",(0,o.kt)("em",{parentName:"p"},"recursively"),". This means you are free to split\nthe content over a directory structure of your choice.")),(0,o.kt)("h2",{id:"module-directory-lookup"},"Module Directory Lookup"),(0,o.kt)("p",null,"VAST ships with modules containing type definitions and aliases for common\nformats, such as Zeek or Suricata logs. Pre-installed modules reside in\n",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", and additional search paths for user-provided modules\ncan be set in the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.yaml")," by adjusting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs")," option."),(0,o.kt)("p",null,"VAST looks at module directories in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/module")," for system-wide module files bundled with VAST,\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>")," is the platform-specific directory for data files, e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"<install-prefix>/share"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/modules")," for system-wide configuration, where\n",(0,o.kt)("inlineCode",{parentName:"p"},"<sysconfdir>")," is the platform-specific directory for configuration files,\ne.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/vast/modules")," for user-specific configuration. VAST respects the\nXDG base directory specification and its environment variables.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"An ordered, comma-separated list of directories passed using\n",(0,o.kt)("inlineCode",{parentName:"p"},"--module-dirs=path/to/modules")," on the command line. This corresponds to the\noption ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.module-dirs"),"."))),(0,o.kt)("admonition",{title:"Changing VAST modules",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend to avoid making changes to module files in\n",(0,o.kt)("inlineCode",{parentName:"p"},"<datadir>/vast/modules"),", as this can break updates to VAST. If you need to make\nadaptations of builtin types, you can modify them in your own module directory\nwith the help of record type operations.")))}u.isMDXComponent=!0}}]);