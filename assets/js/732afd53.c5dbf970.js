"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[25638],{59013:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java","reference"]},s="Welcome",c={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",source:"@site/content/build/wallet.rs/production/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/wallet.rs/welcome",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"The official IOTA Wallet Library Software can be used to integrate an IOTA Wallet into your application.",image:"/img/logo/wallet_light.png",keywords:["requirements","wallet","software","library","rust","python","nodejs","java","reference"]},sidebar:"docs",next:{title:"Overview",permalink:"/wallet.rs/overview"}},u={},p=[{value:"wallet.rs",id:"walletrs",level:2},{value:"Stronghold and wallet.rs",id:"stronghold-and-walletrs",level:3},{value:"IOTA 1.5 (Chrysalis) in a Nutshell",id:"iota-15-chrysalis-in-a-nutshell",level:2},{value:"Testnet",id:"testnet",level:2},{value:"What You Will Find Here",id:"what-you-will-find-here",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to the official IOTA Wallet Library Software documentation. You can use our documentation to help streamline integrating an IOTA Wallet into your applications. If you want to learn more about the IOTA client libraries, you can check out our ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/the-new-iota-client-libraries-harder-better-faster-stronger/"},"blog post")," on how they work."),(0,o.kt)("h2",{id:"walletrs"},"wallet.rs"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," is a general wallet library written in Rust. It is currently utilized by our wallet software, ",(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly"),", and other software components across the IOTA ecosystem. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," contains all of the specs to safely build wallets or integrations that require value-based transfers, such as exchanges and pay-as-you-go systems. Additionally, amongst other features, ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," includes account state management and backup, account creation, and transferring tokens. ",(0,o.kt)("inlineCode",{parentName:"p"},"wallets.rs")," is also based on our official ",(0,o.kt)("em",{parentName:"p"},"one-source-code-of-truth")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library")," and can be integrated with the ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-6ce55d311d7c/"},"Stronghold enclave")," to achieve a maximum level of security."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can use Stronghold to store account data of the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs"),". It integrates the best security practices and is open-source."))),(0,o.kt)("h3",{id:"stronghold-and-walletrs"},"Stronghold and wallet.rs"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, developers no longer need to use a self-generated seed anymore. By default, the security of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," creates and stores the encrypted seed, at rest. Additionally, it is not possible to extract the seed from ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," as a security measure. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," also uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots are further secured with a password."),(0,o.kt)("h2",{id:"iota-15-chrysalis-in-a-nutshell"},"IOTA 1.5 (Chrysalis) in a Nutshell"),(0,o.kt)("p",null,"For some background, you can checkout our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/introduction/what_is_chrysalis"},"Developer Guide to Chrysalis")," which explains all of the main concepts behind the IOTA Chrysalis in detail."),(0,o.kt)("p",null,"You can also read our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/overview"},"Chrysalis documentation")," to learn the history of versions between IOTA 1.0 and Chrysalis."),(0,o.kt)("h2",{id:"testnet"},"Testnet"),(0,o.kt)("p",null,"To join the Chrysalis public devnet, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-phase-2-testnet-out-now/"},"blog post"),". You can also learn more about the different Chrysalis components in our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome/"},"Chrysalis documentation portal"),"."),(0,o.kt)("h2",{id:"what-you-will-find-here"},"What You Will Find Here"),(0,o.kt)("p",null,"This documentation has four paths:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/overview"},"Overview"),": a detailed overview of the wallet library. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/libraries/overview"},"Libraries"),": all available programming languages and their resources."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/specification"},"Specification"),": a detailed explanation requirements and functionality."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/contribute"},"Contribute"),": how you can work on the wallet software, get in touch, join the community and become part of the X-Team!")))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);