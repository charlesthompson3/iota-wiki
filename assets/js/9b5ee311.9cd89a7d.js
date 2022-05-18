"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47932],{44458:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={description:"Install the IOTA Identity Rust Library or its WASM binding in a few simple steps",image:"/img/Identity_icon.png",sidebar_label:"Install the Library",title:"Install the Library",keywords:["Identity","install","npm","cargo","Rust","WASM"]},o=void 0,p={unversionedId:"getting_started/install",id:"getting_started/install",title:"Install the Library",description:"Install the IOTA Identity Rust Library or its WASM binding in a few simple steps",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/getting_started/install.mdx",sourceDirName:"getting_started",slug:"/getting_started/install",permalink:"/identity.rs/getting_started/install",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/getting_started/install.mdx",tags:[],version:"current",frontMatter:{description:"Install the IOTA Identity Rust Library or its WASM binding in a few simple steps",image:"/img/Identity_icon.png",sidebar_label:"Install the Library",title:"Install the Library",keywords:["Identity","install","npm","cargo","Rust","WASM"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/getting_started/overview"},next:{title:"Create a DID Document",permalink:"/identity.rs/getting_started/create_and_publish"}},u={},d=[{value:"Rust",id:"rust",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Include the Library",id:"include-the-library",level:3},{value:"Latest Stable Release",id:"latest-stable-release",level:4},{value:"Development Release",id:"development-release",level:4},{value:"WASM",id:"wasm",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Install the Library",id:"install-the-library",level:3},{value:"Latest Stable Release",id:"latest-stable-release-1",level:4},{value:"Development Release",id:"development-release-1",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Cargo"))),(0,i.kt)("h3",{id:"include-the-library"},"Include the Library"),(0,i.kt)("p",null,"You can include the IOTA Identity Library in your project by adding it as a dependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,i.kt)("h4",{id:"latest-stable-release"},"Latest Stable Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of this repository. It is ",(0,i.kt)("strong",{parentName:"p"},"stable")," and will have ",(0,i.kt)("strong",{parentName:"p"},"changelogs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "main"}\n')),(0,i.kt)("h4",{id:"development-release"},"Development Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,i.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,i.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "dev"}\n')),(0,i.kt)("p",null,"You can find detailed installation instructions in the ",(0,i.kt)("a",{parentName:"p",href:"../libraries/rust/getting_started"},"Getting Started With Rust")," section."),(0,i.kt)("h2",{id:"wasm"},"WASM"),(0,i.kt)("h3",{id:"requirements-1"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Npm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node.js"))),(0,i.kt)("h3",{id:"install-the-library"},"Install the Library"),(0,i.kt)("p",null,"You can install the WASM binding of the IOTA Identity Library using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),(0,i.kt)("h4",{id:"latest-stable-release-1"},"Latest Stable Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of this repository. It is ",(0,i.kt)("strong",{parentName:"p"},"stable")," and will have ",(0,i.kt)("strong",{parentName:"p"},"changelogs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm\n")),(0,i.kt)("h4",{id:"development-release-1"},"Development Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,i.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,i.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/identity-wasm@dev\n")),(0,i.kt)("p",null,"You can find detailed installation instructions in the ",(0,i.kt)("a",{parentName:"p",href:"../libraries/wasm/getting_started"},"Getting Started With WASM")," section."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);