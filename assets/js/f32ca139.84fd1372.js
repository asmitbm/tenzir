"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7821],{70406:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(83117),a=(o(67294),o(3905));o(61839);const r={sidebar_position:6},s="Notebooks",i={unversionedId:"contribute/notebooks",id:"contribute/notebooks",title:"Notebooks",description:"We use Jupyter notebooks as vehicle for self-contained",source:"@site/docs/contribute/notebooks.md",sourceDirName:"contribute",slug:"/contribute/notebooks",permalink:"/docs/contribute/notebooks",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/contribute/notebooks.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Documentation",permalink:"/docs/contribute/documentation"},next:{title:"Request for Comments (RFC)",permalink:"/docs/contribute/rfc"}},p={},l=[{value:"Run the notebooks",id:"run-the-notebooks",level:2},{value:"Add a notebook",id:"add-a-notebook",level:3},{value:"Embed the notebooks in the website",id:"embed-the-notebooks-in-the-website",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notebooks"},"Notebooks"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter.org/"},"Jupyter notebooks")," as vehicle for self-contained\nguides that illustrate how to use VAST."),(0,a.kt)("p",null,"Our repositories contains a few examples in the directory\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/notebooks")),". These notebooks (will) run in CI and\nproduce outputs as side effect, which we capture and include in the\ndocumentation under the section ",(0,a.kt)("a",{parentName:"p",href:"/docs/try"},"Try VAST"),"."),(0,a.kt)("h2",{id:"run-the-notebooks"},"Run the notebooks"),(0,a.kt)("p",null,"Our notebook stack consists of Jupyter, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mwouts/jupytext"},"jupytext"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://nbconvert.readthedocs.io/en/latest/"},"nbconvert")," to run notebooks and convert their outputs."),(0,a.kt)("p",null,"The execution of a notebook is a two-step process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run then notebook and capture outputs in the correpsponding *.ipynb file."),(0,a.kt)("li",{parentName:"ol"},"Translate the *.ipynb file to Markdown, suitable for embedding in the docs.")),(0,a.kt)("p",null,"Ideally, we would go directly to the Markdown output for the docs, but jupytext\nonly captures outputs when converting to ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ipynb"),". So we use nbconvert\nafterwards to translate the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ipynb")," files to Markdown."),(0,a.kt)("p",null,"The Makefile in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/notebooks"))," relies  up Python virtual\nenvironment with all needed dependencies. To run the notebooks and capture their\noutput, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ipynb")," target:"),(0,a.kt)("p",null,"Make sure your have ",(0,a.kt)("a",{parentName:"p",href:"https://python-poetry.org/"},"Poetry")," installed, which we use\nfor Python dependency management. To execute the above steps in sequence, enter\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/notebooks")," directory and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,a.kt)("p",null,"You can also trigger the phases manually. First translate to ",(0,a.kt)("inlineCode",{parentName:"p"},"*.ipynb"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make ipynb\n")),(0,a.kt)("p",null,"Thereafter, convert to Markdown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make md\n")),(0,a.kt)("h3",{id:"add-a-notebook"},"Add a notebook"),(0,a.kt)("admonition",{title:"Markdown Notebooks",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All notebooks in our repository are in ",(0,a.kt)("a",{parentName:"p",href:"https://jupytext.readthedocs.io/en/latest/formats.html#jupytext-markdown"},"Jupytext Markdown"),"\nformat. This format is a subset of the Docusaurus Markdown we use in our\ndocumentation, which makes for a harmonious experience of writing docs and user\nguides.")),(0,a.kt)("p",null,"To add a new notebook, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Place the notebook in the directory ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tenzir/vast/tree/master/examples/notebooks"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/notebooks")),"."),(0,a.kt)("li",{parentName:"ol"},"Add potential dependencies in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," file for Poetry."),(0,a.kt)("li",{parentName:"ol"},"Run the notebook as mentioned in the above section.")),(0,a.kt)("h2",{id:"embed-the-notebooks-in-the-website"},"Embed the notebooks in the website"),(0,a.kt)("p",null,"To integrate notebooks including outputs into the website, we second step of the\nabove conversion."),(0,a.kt)("p",null,"To recreate the outputs from a notebook run with Markdown, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"web"),"\ndirectory and execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"notebooks")," target:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd web\nmake notebooks\n")),(0,a.kt)("p",null,"This triggers the notebook execution as described in the previous section\nand copies the output markdown files over to the website directory. You can now\n",(0,a.kt)("a",{parentName:"p",href:"documentation"},"build the website")," with updated notebooks as usual."))}d.isMDXComponent=!0}}]);