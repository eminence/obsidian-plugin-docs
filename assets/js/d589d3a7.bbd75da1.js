"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},p="Getting started",s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"This guide walks you through the steps needed with plugin development for Obsidian.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/obsidian-plugin-docs/getting-started",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/obsidian-plugin-docs/"},next:{title:"Anatomy of a plugin",permalink:"/obsidian-plugin-docs/plugin-anatomy"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Step 1: Download the Obsidian sample plugin",id:"step-1-download-the-obsidian-sample-plugin",children:[]},{value:"Step 2: Build the plugin",id:"step-2-build-the-plugin",children:[]},{value:"Step 3: Load the plugin in Obsidian",id:"step-3-load-the-plugin-in-obsidian",children:[]},{value:"Step 4: Update the plugin manifest",id:"step-4-update-the-plugin-manifest",children:[]},{value:"Step 5: Update the source code",id:"step-5-update-the-source-code",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This guide walks you through the steps needed with plugin development for Obsidian."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you prefer a video walkthrough, check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=9lA-jaMNS0k"},"Create Your Own Obsidian Plugin")," by ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UC9w43btR2UUsfR6ZUf3AlqQ"},"Antone Heyward"),".")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"NodeJS"))),(0,o.kt)("h2",{id:"step-1-download-the-obsidian-sample-plugin"},"Step 1: Download the Obsidian sample plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/obsidianmd/obsidian-sample-plugin"},"Obsidian Sample Plugin"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Use this template"),"."),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Repository name"),", enter the name of your plugin. Obsidian plugins are typically prefixed by ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-"),". For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create repository from template"),".")),(0,o.kt)("p",null,"You've now created your own repository based on the Obsidian sample plugin. Next, you'll download the source code on your local machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse to the repository you just created."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Code"),", and copy the path to your repository."),(0,o.kt)("li",{parentName:"ol"},"Open a terminal and navigate to the vault.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd path/to/vault/.obsidian/plugins\n"))),(0,o.kt)("li",{parentName:"ol"},"Download the source code into the plugins folder.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/marcusolsson/obsidian-instant-coffee.git\n")))),(0,o.kt)("h2",{id:"step-2-build-the-plugin"},"Step 2: Build the plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install dependencies.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,o.kt)("li",{parentName:"ol"},"Compile the source code. The following command generates a ",(0,o.kt)("inlineCode",{parentName:"li"},"main.js")," that contains the compiled version of your plugin.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")))),(0,o.kt)("h2",{id:"step-3-load-the-plugin-in-obsidian"},"Step 3: Load the plugin in Obsidian"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Preferences")," in Obsidian."),(0,o.kt)("li",{parentName:"ol"},"In the side menu, click ",(0,o.kt)("strong",{parentName:"li"},"Community plugins"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Installed plugins"),", enable the ",(0,o.kt)("strong",{parentName:"li"},"Sample Plugin")," by clicking the toggle button next to it.")),(0,o.kt)("p",null,"You're now running a custom plugin that you've built yourself. Nice! \ud83d\udcaa"),(0,o.kt)("p",null,'Though "Sample Plugin" is probably not the name you had in mind for your plugin. Let\'s change that.'),(0,o.kt)("h2",{id:"step-4-update-the-plugin-manifest"},"Step 4: Update the plugin manifest"),(0,o.kt)("p",null,"The plugin manifest, ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," is a file that contains information about your plugin, such as its name and version."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee")," directory that has been created, in a code editor, such as ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json")," in your editor."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," to your plugin ID, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"obsidian-instant-coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to the human-friendly name of the plugin, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"Instant coffee"),"."),(0,o.kt)("li",{parentName:"ol"},"If you'd like, then update ",(0,o.kt)("inlineCode",{parentName:"li"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"author"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"authorUrl")," as well.")),(0,o.kt)("p",null,"A plugin is an NodeJS package, which is configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". You shouldn't need to worry much about it for now. For now, we'll only update it to match the properties in the plugin manifest."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," in your editor."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"version")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"version")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," to match the ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"manifest.json"),"."),(0,o.kt)("li",{parentName:"ol"},"Restart Obsidian to reload your plugin.")),(0,o.kt)("h2",{id:"step-5-update-the-source-code"},"Step 5: Update the source code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"main.ts")," in your editor."),(0,o.kt)("li",{parentName:"ol"},"Find the lines of code that adds a ",(0,o.kt)("em",{parentName:"li"},"ribbon icon"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.addRibbonIcon('dice', 'Sample Plugin', () => {\n  new Notice('This is a notice!');\n});\n"))),(0,o.kt)("li",{parentName:"ol"},"Change the text for the notice. Feel free to come up with a text of your own.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new Notice('Hello, you!');\n"))),(0,o.kt)("li",{parentName:"ol"},"Restart Obsidian to reload your plugin."),(0,o.kt)("li",{parentName:"ol"},'Click the die icon in the sidebar. Make sure it says "Sample Plugin" when you hover it.')),(0,o.kt)("p",null,"Congratulations! \ud83c\udf89 You've successfully loaded and changed a custom plugin for Obsidian. \ud83d\ude80"),(0,o.kt)("p",null,"Feel free to modify the code from the sample plugin to see what it does. Once you're ready, learn more about the ",(0,o.kt)("a",{parentName:"p",href:"plugin-anatomy"},"anatomy of a plugin"),"."))}m.isMDXComponent=!0}}]);