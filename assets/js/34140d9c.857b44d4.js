"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7168],{3636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>N,default:()=>T,frontMatter:()=>y,metadata:()=>E,toc:()=>M});var i=n(7462),o=n(7294),s=n(3905),r=(n(1839),n(6010)),a=n(3438),d=n(9960),l=n(3919),c=n(5999);const u="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return o.createElement(d.Z,{href:t,className:(0,r.Z)("card padding--lg",u)},n)}function g(e){let{href:t,icon:n,title:i,description:s}=e;return o.createElement(h,{href:t},o.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:i},n," ",i),s&&o.createElement("p",{className:(0,r.Z)("text--truncate",p),title:s},s))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?o.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function x(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return o.createElement(g,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(x,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,a.jA)();return o.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return o.createElement(b,e);const i=(0,a.MN)(t);return o.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(k,{item:e})))))}const y={},N="Editor extensions",E={unversionedId:"editor/extensions/index",id:"editor/extensions/index",title:"Editor extensions",description:"Editor extensions let you customize the experience of editing notes in Obsidian. This page explains what editor extensions are, and when to use them.",source:"@site/docs/editor/extensions/index.md",sourceDirName:"editor/extensions",slug:"/editor/extensions/",permalink:"/obsidian-plugin-docs/editor/extensions/",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/editor/extensions/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Editor",permalink:"/obsidian-plugin-docs/editor/"},next:{title:"State management",permalink:"/obsidian-plugin-docs/editor/extensions/state-management"}},v={},M=[{value:"Do I need an editor extension?",id:"do-i-need-an-editor-extension",level:2},{value:"Registering editor extensions",id:"registering-editor-extensions",level:2}],C={toc:M};function T(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"editor-extensions"},"Editor extensions"),(0,s.kt)("p",null,"Editor extensions let you customize the experience of editing notes in Obsidian. This page explains what editor extensions are, and when to use them."),(0,s.kt)("p",null,"Obsidian uses CodeMirror 6 (CM6) to power the Markdown editor. Just like Obsidian, CM6 has plugins of its own, called ",(0,s.kt)("em",{parentName:"p"},"extensions"),". In other words, an Obsidian ",(0,s.kt)("em",{parentName:"p"},"editor extension")," is the same thing as a ",(0,s.kt)("em",{parentName:"p"},"CodeMirror 6 extension"),"."),(0,s.kt)("p",null,"The API for building editor extensions is a bit unconventional and requires that you have a basic understanding of its architecture before you get started. This section aims to give you enough context and examples for you to get started. If you want to learn more about building editor extensions, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://codemirror.net/docs/"},"CodeMirror 6 documentation"),"."),(0,s.kt)("h2",{id:"do-i-need-an-editor-extension"},"Do I need an editor extension?"),(0,s.kt)("p",null,"Building editor extensions can be challenging, so before you start building one, consider whether you really need it."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you want to change how to convert Markdown to HTML in the Reading view, consider building a ",(0,s.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/editor/markdown-post-processing"},"Markdown post processor"),"."),(0,s.kt)("li",{parentName:"ul"},"If you want to change how the document looks and feels in Live Preview, you need to build an editor extension.")),(0,s.kt)("h2",{id:"registering-editor-extensions"},"Registering editor extensions"),(0,s.kt)("p",null,"CodeMirror 6 (CM6) is a powerful engine for editing code using web technologies. At its core, the editor itself has a minimal set of features. Any features you'd expect from a modern editor are available as ",(0,s.kt)("em",{parentName:"p"},"extensions")," that you can pick and choose. While Obsidian comes with many of these extensions out-of-the-box, you can also register your own."),(0,s.kt)("p",null,"To register an editor extension, use ",(0,s.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/reference/typescript/classes/Plugin_2#registereditorextension"},"registerEditorExtension")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"onload")," method of your Obsidian plugin:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"onload() {\n  this.registerEditorExtension([examplePlugin, exampleField]);\n}\n")),(0,s.kt)("p",null,"While CM6 supports several types of extensions, two of the most common ones are ",(0,s.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/editor/extensions/view-plugins"},"View plugins")," and ",(0,s.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/editor/extensions/state-fields"},"State fields"),"."),(0,s.kt)(w,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}T.isMDXComponent=!0}}]);