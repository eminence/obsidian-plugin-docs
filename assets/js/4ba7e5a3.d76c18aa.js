"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9735],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:9999},s="Contribute to this site",u={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contribute to this site",description:"Thanks for considering contributing to the project!",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/obsidian-plugin-docs/contribute",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/contribute.md",tags:[],version:"current",sidebarPosition:9999,frontMatter:{sidebar_position:9999},sidebar:"docs",previous:{title:"Manifest reference",permalink:"/obsidian-plugin-docs/manifest"}},p=[{value:"Style guide",id:"style-guide",children:[]},{value:"The four types of documentation",id:"the-four-types-of-documentation",children:[{value:"Tutorials",id:"tutorials",children:[]},{value:"Guides",id:"guides",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribute-to-this-site"},"Contribute to this site"),(0,i.kt)("p",null,"Thanks for considering contributing to the project!"),(0,i.kt)("p",null,"There's a link at the bottom of every page that says ",(0,i.kt)("strong",{parentName:"p"},"Edit this page"),". If you click it, you're taken to that docs page on GitHub where you can edit and submit a change right away."),(0,i.kt)("h2",{id:"style-guide"},"Style guide"),(0,i.kt)("p",null,"This site uses the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/style"},"Google developer documentation style guide")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/style-guide/welcome/"},"Microsoft Style Guide"),"."),(0,i.kt)("p",null,"If you see anything that violates any of these style guides, please let me know by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marcusolsson/obsidian-plugin-docs/issues/new"},"creating an issue on GitHub"),"."),(0,i.kt)("h2",{id:"the-four-types-of-documentation"},"The four types of documentation"),(0,i.kt)("p",null,"This site hosts four types of documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorials")," are ",(0,i.kt)("em",{parentName:"li"},"learning-oriented"),": they take the reader through a series of steps to complete a project. For example, ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/getting-started/create-your-first-plugin"},"Create your first plugin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Guides")," are ",(0,i.kt)("em",{parentName:"li"},"goal-oriented"),": they provide step-by-step instructions for how to solve a specific problem. For example, ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/guides/settings"},"Settings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reference")," is ",(0,i.kt)("em",{parentName:"li"},"information-oriented"),": its only job is to describe. For example, ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/api/classes/Plugin_2"},"Plugin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Concepts")," is ",(0,i.kt)("em",{parentName:"li"},"understanding-oriented"),": they deepen the reader's understanding in a topic. For example, ",(0,i.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/concepts/workspace"},"Workspace"),".")),(0,i.kt)("p",null,"For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.divio.com/"},"The documentation system")," by ",(0,i.kt)("a",{parentName:"p",href:"https://www.divio.com/"},"Divio"),"."),(0,i.kt)("h3",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"Each tutorial should have the following structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Description of what the reader will have accomplished after the tutorial."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Prerequisites")," section that describes what the reader needs to complete the tutorial."),(0,i.kt)("li",{parentName:"ol"},'Headings for each step that start with "Step X \u2014 " (that\'s an ',(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dash#Em_dash"},"em-dash"),'), followed by a sentence in imperative form. For example, "Step 3 \u2014 Submit plugin for review".'),(0,i.kt)("li",{parentName:"ol"},"Closing section that summarizes what the reader has accomplished, and where they can go next.")),(0,i.kt)("h3",{id:"guides"},"Guides"),(0,i.kt)("p",null,"Each guide should have the following structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Description of the guide."),(0,i.kt)("li",{parentName:"ol"},"Summary of what the reader will build or learn in the guide."),(0,i.kt)("li",{parentName:"ol"},"Full code example"),(0,i.kt)("li",{parentName:"ol"},"Detailed explanation of the code example")),(0,i.kt)("p",null,"The code block for the full code example must have a title with the filename, for example ",(0,i.kt)("inlineCode",{parentName:"p"},'title="main.ts"'),"."),(0,i.kt)("p",null,"The example must be complete: the reader can copy-paste it into their own editor and run it without modifications."),(0,i.kt)("p",null,"For simpler code examples, use ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting"},"line highlighting")," to draw the reader's attention to the important parts."),(0,i.kt)("p",null,"For more complex code examples you may add one or more code blocks that duplicate sections of the full example, to allow for a more detailed explanation."))}d.isMDXComponent=!0}}]);