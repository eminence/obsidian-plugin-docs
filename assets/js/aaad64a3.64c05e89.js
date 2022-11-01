"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7099],{7902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),l=(n(7294),n(3905));n(1839);const a={},r="Component",s={unversionedId:"reference/typescript/classes/Component",id:"reference/typescript/classes/Component",title:"Component",description:"Constructor",source:"@site/docs/reference/typescript/classes/Component.md",sourceDirName:"reference/typescript/classes",slug:"/reference/typescript/classes/Component",permalink:"/obsidian-plugin-docs/reference/typescript/classes/Component",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/reference/typescript/classes/Component.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ButtonComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/ButtonComponent"},next:{title:"DropdownComponent",permalink:"/obsidian-plugin-docs/reference/typescript/classes/DropdownComponent"}},i={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"load",id:"load",level:3},{value:"onload",id:"onload",level:3},{value:"unload",id:"unload",level:3},{value:"onunload",id:"onunload",level:3},{value:"addChild",id:"addchild",level:3},{value:"removeChild",id:"removechild",level:3},{value:"register",id:"register",level:3},{value:"registerEvent",id:"registerevent",level:3},{value:"registerDomEvent",id:"registerdomevent",level:3},{value:"registerDomEvent",id:"registerdomevent-1",level:3},{value:"registerDomEvent",id:"registerdomevent-2",level:3},{value:"registerScopeEvent",id:"registerscopeevent",level:3},{value:"registerInterval",id:"registerinterval",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"component"},"Component"),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"constructor();\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"load"},"load"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"load(): void;\n")),(0,l.kt)("p",null,"Load this component and its children"),(0,l.kt)("h3",{id:"onload"},"onload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onload(): void;\n")),(0,l.kt)("p",null,"Override this to load your component"),(0,l.kt)("h3",{id:"unload"},"unload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"unload(): void;\n")),(0,l.kt)("p",null,"Unload this component and its children"),(0,l.kt)("h3",{id:"onunload"},"onunload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onunload(): void;\n")),(0,l.kt)("p",null,"Override this to unload your component"),(0,l.kt)("h3",{id:"addchild"},"addChild"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"addChild<T extends Component>(component: T): T;\n")),(0,l.kt)("p",null,"Adds a child component, loading it if this component is loaded"),(0,l.kt)("h3",{id:"removechild"},"removeChild"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"removeChild<T extends Component>(component: T): T;\n")),(0,l.kt)("p",null,"Removes a child component, unloading it"),(0,l.kt)("h3",{id:"register"},"register"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"register(cb: () => any): void;\n")),(0,l.kt)("p",null,"Registers a callback to be called when unloading"),(0,l.kt)("h3",{id:"registerevent"},"registerEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerEvent(eventRef: EventRef): void;\n")),(0,l.kt)("p",null,"Registers an event to be detached when unloading"),(0,l.kt)("h3",{id:"registerdomevent"},"registerDomEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerDomEvent<K extends keyof WindowEventMap>(el: Window, type: K, callback: (this: HTMLElement, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;\n")),(0,l.kt)("p",null,"Registers an DOM event to be detached when unloading"),(0,l.kt)("h3",{id:"registerdomevent-1"},"registerDomEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerDomEvent<K extends keyof DocumentEventMap>(el: Document, type: K, callback: (this: HTMLElement, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;\n")),(0,l.kt)("p",null,"Registers an DOM event to be detached when unloading"),(0,l.kt)("h3",{id:"registerdomevent-2"},"registerDomEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerDomEvent<K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;\n")),(0,l.kt)("p",null,"Registers an DOM event to be detached when unloading"),(0,l.kt)("h3",{id:"registerscopeevent"},"registerScopeEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerScopeEvent(keyHandler: KeymapEventHandler): void;\n")),(0,l.kt)("p",null,"Registers an key event to be detached when unloading"),(0,l.kt)("h3",{id:"registerinterval"},"registerInterval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"registerInterval(id: number): number;\n")),(0,l.kt)("p",null,"Registers an interval (from setInterval) to be cancelled when unloading\nUse {@link window.setInterval} instead of {@link setInterval} to avoid TypeScript confusing between NodeJS vs Browser API"))}c.isMDXComponent=!0}}]);