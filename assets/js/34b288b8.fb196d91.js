"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3795],{65211:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=s(83117),a=(s(67294),s(3905));s(61839);const i={sidebar_position:2},r="Snapshotting",o={unversionedId:"use/integrate/threatbus/understand/snapshotting",id:"use/integrate/threatbus/understand/snapshotting",title:"Snapshotting",description:"Traditional pub/sub only broadcasts the current de-facto state of a system.",source:"@site/docs/use/integrate/threatbus/understand/snapshotting.md",sourceDirName:"use/integrate/threatbus/understand",slug:"/use/integrate/threatbus/understand/snapshotting",permalink:"/docs/use/integrate/threatbus/understand/snapshotting",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use/integrate/threatbus/understand/snapshotting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Subscriptions and Message Passing",permalink:"/docs/use/integrate/threatbus/understand/subscription-message-passing"},next:{title:"Plugins",permalink:"/docs/use/integrate/threatbus/understand/plugins/"}},u={},p=[{value:"Requesting Snapshots",id:"requesting-snapshots",level:2},{value:"Point-To-Point Forwarding",id:"point-to-point-forwarding",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:p};function h(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snapshotting"},"Snapshotting"),(0,a.kt)("p",null,"Traditional pub/sub only broadcasts the current de-facto state of a system.\nPublished messages are either processed by a subscriber or not. Once a message\nhas passed the bus, it will not be published again."),(0,a.kt)("p",null,"This is problematic when it comes to security content, such as indicators of\ncompromise (IOCs). The relevance of IOCs usually spikes shortly after they get\nknown and then decays over time. In a usual pub/sub system, new subscribers will\nnot see previously published messages, even though they might still be very\nrelevant to them."),(0,a.kt)("p",null,"Threat Bus addresses this with the snapshot feature: ",(0,a.kt)("strong",{parentName:"p"},"New subscribers can ask\nfor a historic snapshot of security content.")),(0,a.kt)("h2",{id:"requesting-snapshots"},"Requesting Snapshots"),(0,a.kt)("p",null,"Requesting a snapshot is part of the subscription interface for clients.\nThe subscription data structure looks as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"@dataclass\nclass Subscription:\n  topic: str\n  snapshot: timedelta\n")),(0,a.kt)("p",null,"In case the requested ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot")," time delta is greater than zero, Threat Bus\nforwards the request to all plugins. How this request is handled is up to the\nimplementing plugin."),(0,a.kt)("h2",{id:"point-to-point-forwarding"},"Point-To-Point Forwarding"),(0,a.kt)("p",null,"Instead of publishing requested snapshot data again, Threat Bus uses a\npoint-to-point transmission model. Only the application that requests a snapshot\ngets to see the snapshot. That prevents all other subscribers from eventually\nseeing messages more than once."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Snapshotting is implemented by the application plugins. When a new subscriber\nasks for a snapshot, Threat Bus forwards the request to all implementing\nplugins. Apps ",(0,a.kt)("strong",{parentName:"p"},"optionally")," implement the snapshot feature."),(0,a.kt)("p",null,"For example, the MISP plugin implements such a handler. When Threat Bus invokes\nthe handler, the plugin performs a MISP API search for IOCs in the requested\ntime range. All found items are then passed back to the bus for distribution."))}h.isMDXComponent=!0}}]);