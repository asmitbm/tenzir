"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[851],{76284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(83117),r=(a(67294),a(3905));a(61839);const i={},s="AWS",o={unversionedId:"understand/architecture/cloud/aws",id:"understand/architecture/cloud/aws",title:"AWS",description:"Architecture Choices",source:"@site/docs/understand/architecture/cloud/aws.md",sourceDirName:"understand/architecture/cloud",slug:"/understand/architecture/cloud/aws",permalink:"/docs/understand/architecture/cloud/aws",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/understand/architecture/cloud/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/docs/understand/architecture/plugins"},next:{title:"Type System",permalink:"/docs/understand/data-model/type-system"}},c={},l=[{value:"Architecture Choices",id:"architecture-choices",level:2},{value:"VPC Infrastructure",id:"vpc-infrastructure",level:2},{value:"Images and Registries",id:"images-and-registries",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws"},"AWS"),(0,r.kt)("h2",{id:"architecture-choices"},"Architecture Choices"),(0,r.kt)("p",null,"The AWS architecture builds on serverless principles to deliver a scalable\ncloud-native deployment option. To combine continuously running services with\ndynamic ad-hoc tasks, we use Lambda and Fargate as building blocks for on-demand\nquery capacity while continuously ingesting data."),(0,r.kt)("p",null,"Specifically, we embed the long-running VAST server in a Fargate task\ndefinition, which allows for flexible resource allocation based on compute\nresource needs. VAST mounts EFS storage for maximum flexibility and\npay-as-you-go scaling. The VAST client performs short-running ad-hoc tasks, like\ningesting a file or running query. We map such actions to Lambda functions."),(0,r.kt)("h2",{id:"vpc-infrastructure"},"VPC Infrastructure"),(0,r.kt)("p",null,"The provided Terraform script creates the following architecture within a given\nVPC:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7913347/177141492-b99cce77-3c10-4740-bbdc-4fc2f43b8abc.png",alt:"VAST VPC Architecture"})),(0,r.kt)("p",null,"The assumption is that the VPC has an Internet Gateway attached. Given a CIDR\nblock within this VPC, Terraform creates two subnets:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"VAST Subnet"),": a private subnet where the VAST nodes and other security\ntools run."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Gateway Subnet"),": a public subnet to talk to other AWS services and the\nInternet")),(0,r.kt)("p",null,"To resolve the IP address of the VAST server and other appliances, we use AWS\nCloud Map as a service discovery provider."),(0,r.kt)("h2",{id:"images-and-registries"},"Images and Registries"),(0,r.kt)("p",null,"Both Lambda and Fargate deploy VAST as a Docker image. They use the official\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tenzir/vast"},"tenzir/vast")," image with extra layers\ncontaining tooling such as:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Image"),(0,r.kt)("th",{parentName:"tr",align:null},"Tooling"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lambda only"),(0,r.kt)("td",{parentName:"tr",align:null},"the Lambda Runtime Interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lambda only"),(0,r.kt)("td",{parentName:"tr",align:null},"the AWS and other CLI tools (jq...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lambda & Fargate"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS specific schemas and concepts")))),(0,r.kt)("p",null,"For that reason, our toolchain builds a Lambda and a Fargate specific image\nlocally and pushes it to a private ECR repository."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7913347/174258069-695b358b-30d0-4599-b0eb-53f0acf04a41.png",alt:"Docker Workflow"})))}d.isMDXComponent=!0}}]);