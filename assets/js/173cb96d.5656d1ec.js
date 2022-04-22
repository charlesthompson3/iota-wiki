"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62332],{51597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",image:"/img/Identity_icon.png",keywords:["Identity","guide","TOC","overview","reference"]},d="IOTA Identity Framework Guide",c={unversionedId:"introduction",id:"introduction",title:"IOTA Identity Framework Guide",description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",source:"@site/external/identity.rs/documentation/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/identity.rs/introduction",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/introduction.md",tags:[],version:"current",frontMatter:{description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",image:"/img/Identity_icon.png",keywords:["Identity","guide","TOC","overview","reference"]},sidebar:"docs",next:{title:"Introduction to Decentralized Identity",permalink:"/identity.rs/decentralized_identity"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Chapter 2: Decentralized Identity",id:"chapter-2-decentralized-identity",level:3},{value:"Chapter 3.1: Decentralized Identifiers (DID)",id:"chapter-31-decentralized-identifiers-did",level:3},{value:"Chapter 3.2: Verifiable Credentials (VC)",id:"chapter-32-verifiable-credentials-vc",level:3},{value:"Chapter 3.3: DID Communications (DID Comm)",id:"chapter-33-did-communications-did-comm",level:3},{value:"Chapter 3.4: Advanced Concepts",id:"chapter-34-advanced-concepts",level:3},{value:"Chapter 4: Programming Languages",id:"chapter-4-programming-languages",level:3},{value:"Chapter 5: Specification",id:"chapter-5-specification",level:3},{value:"Chapter 6: Glossary",id:"chapter-6-glossary",level:3},{value:"Chapter 7: Contribute",id:"chapter-7-contribute",level:3},{value:"Chapter 8: Contact",id:"chapter-8-contact",level:3},{value:"Chapter 9: FAQ",id:"chapter-9-faq",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-identity-framework-guide"},"IOTA Identity Framework Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/identity.rs/raw/dev/.meta/identity_banner.png",alt:"IOTA Identity"})),(0,a.kt)("p",null,"The IOTA Identity framework implements the most common standards and patterns for Decentralized Identity in both a DLT agnostic and ",(0,a.kt)("inlineCode",{parentName:"p"},"iota")," method specification manner. It is designed to work for Identity for People, Organizations, Things, and Objects acting as a unifying-layer of trust between everyone and everything."),(0,a.kt)("p",null,"In this guide, we will go through the most important concepts that developers will need to know to utilize IOTA Identity to its full potential. The guide is programming language agnostic, with language-specific guides located in Chapter 4."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"chapter-2-decentralized-identity"},"Chapter 2: Decentralized Identity"),(0,a.kt)("p",null,"Describes the concept of Decentralized or Self-Sovereign Identities (SSI), how it applies to People, Organizations and Things, and why IOTA is used. "),(0,a.kt)("h3",{id:"chapter-31-decentralized-identifiers-did"},"Chapter 3.1: Decentralized Identifiers (DID)"),(0,a.kt)("p",null,"Explains the DID standard from W3C and how to manipulate DID Documents."),(0,a.kt)("h3",{id:"chapter-32-verifiable-credentials-vc"},"Chapter 3.2: Verifiable Credentials (VC)"),(0,a.kt)("p",null,"Explains the VC standard from W3C, how to create and revoke VCs, and how to use Verifiable Presentations."),(0,a.kt)("h3",{id:"chapter-33-did-communications-did-comm"},"Chapter 3.3: DID Communications (DID Comm)"),(0,a.kt)("p",null,"This chapter covers the DID Comm standard, which is being developed by the Decentralized Identity Foundation (DIF). It also describes the different messages agents may send each other and what the expected responses may look like."),(0,a.kt)("h3",{id:"chapter-34-advanced-concepts"},"Chapter 3.4: Advanced Concepts"),(0,a.kt)("p",null,"This chapter is meant for those that want to push the IOTA Identity framework to its limits, utilizing the more complex, yet more flexible lower-level libraries, allowing developers to optimize their implementation, take control over storage/security, and add features to the framework. "),(0,a.kt)("h3",{id:"chapter-4-programming-languages"},"Chapter 4: Programming Languages"),(0,a.kt)("p",null,'While the framework itself is developed in the Rust programming language, we also provide bindings, or "Foreign Function Interfaces" (FFI), to other languages. These will have separate getting started sections, making the rest of the guide language agnostic, focusing on the conceptual level. '),(0,a.kt)("h3",{id:"chapter-5-specification"},"Chapter 5: Specification"),(0,a.kt)("p",null,"While IOTA Identity implements many existing standards, it also adds some additional features we would like to standardize ourselves. This chapter covers these features and how they work in great detail. These are not light reads and can be skipped. "),(0,a.kt)("h3",{id:"chapter-6-glossary"},"Chapter 6: Glossary"),(0,a.kt)("p",null,"A list of all terminology used in this guide, the framework, and all materials surrounding it. "),(0,a.kt)("h3",{id:"chapter-7-contribute"},"Chapter 7: Contribute"),(0,a.kt)("p",null,"A simple guide on how to contribute to the framework."),(0,a.kt)("h3",{id:"chapter-8-contact"},"Chapter 8: Contact"),(0,a.kt)("p",null,"How to contact the maintainers."),(0,a.kt)("h3",{id:"chapter-9-faq"},"Chapter 9: FAQ"),(0,a.kt)("p",null,"Overview of the most Frequently Asked Questions and their answers."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);