"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44651],{44412:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],l={description:"In this section you will find an overview of all the crates that make up Bee.",image:"/img/logo/bee_logo.png",keywords:["troubleshooting","rust","crate"]},s="Overview",c={unversionedId:"crate_overview",id:"crate_overview",title:"Overview",description:"In this section you will find an overview of all the crates that make up Bee.",source:"@site/external/bee/documentation/docs/crate_overview.md",sourceDirName:".",slug:"/crate_overview",permalink:"/bee/crate_overview",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/dev/external/bee/documentation/docs/crate_overview.md",tags:[],version:"current",frontMatter:{description:"In this section you will find an overview of all the crates that make up Bee.",image:"/img/logo/bee_logo.png",keywords:["troubleshooting","rust","crate"]},sidebar:"mySidebar",previous:{title:"Set Up a Node",permalink:"/bee/setup_a_node"},next:{title:"API Reference",permalink:"/bee/api_reference"}},p={},u=[{value:"bee-api",id:"bee-api",level:2},{value:"bee-common",id:"bee-common",level:2},{value:"bee-common",id:"bee-common-1",level:3},{value:"bee-common-derive",id:"bee-common-derive",level:3},{value:"bee-crypto",id:"bee-crypto",level:2},{value:"bee-ledger",id:"bee-ledger",level:2},{value:"bee-message",id:"bee-message",level:2},{value:"bee-gossip",id:"bee-gossip",level:2},{value:"bee-pow",id:"bee-pow",level:2},{value:"bee-protocol",id:"bee-protocol",level:2},{value:"bee-runtime",id:"bee-runtime",level:2},{value:"bee-signing",id:"bee-signing",level:2},{value:"bee-storage",id:"bee-storage",level:2},{value:"bee-storage",id:"bee-storage-1",level:4},{value:"bee-storage-rocksdb",id:"bee-storage-rocksdb",level:4},{value:"bee-storage-sled",id:"bee-storage-sled",level:4},{value:"bee-storage-test",id:"bee-storage-test",level:4}],b={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this section you will find an overview of all the crates that make up Bee.  "),(0,i.kt)("h2",{id:"bee-api"},"bee-api"),(0,i.kt)("p",null,"The default REST API implementation for the IOTA Bee node software."),(0,i.kt)("h2",{id:"bee-common"},"bee-common"),(0,i.kt)("h3",{id:"bee-common-1"},"bee-common"),(0,i.kt)("p",null,"Common utilities used across the bee framework."),(0,i.kt)("h3",{id:"bee-common-derive"},"bee-common-derive"),(0,i.kt)("p",null,"Derive macros for the ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-common")," crate."),(0,i.kt)("h2",{id:"bee-crypto"},"bee-crypto"),(0,i.kt)("p",null,"TO-DO"),(0,i.kt)("h2",{id:"bee-ledger"},"bee-ledger"),(0,i.kt)("p",null,"All types and features required to compute and maintain the ledger state."),(0,i.kt)("h2",{id:"bee-message"},"bee-message"),(0,i.kt)("p",null,"Implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GalRogozinski/protocol-rfcs/blob/message/text/0017-message/0017-message.md"},"RFC: Message"),"."),(0,i.kt)("h2",{id:"bee-gossip"},"bee-gossip"),(0,i.kt)("p",null,"Networking functionality and types for nodes and clients participating in the IOTA protocol built on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"libp2p"),"."),(0,i.kt)("h2",{id:"bee-pow"},"bee-pow"),(0,i.kt)("p",null,"Provides Proof of Work utilities for the IOTA protocol."),(0,i.kt)("h2",{id:"bee-protocol"},"bee-protocol"),(0,i.kt)("p",null,"All types and workers enabling the IOTA protocol."),(0,i.kt)("h2",{id:"bee-runtime"},"bee-runtime"),(0,i.kt)("p",null,"Runtime components and utilities for the bee framework."),(0,i.kt)("h2",{id:"bee-signing"},"bee-signing"),(0,i.kt)("p",null,"IOTA signing primitives."),(0,i.kt)("h2",{id:"bee-storage"},"bee-storage"),(0,i.kt)("h4",{id:"bee-storage-1"},"bee-storage"),(0,i.kt)("p",null,"A general purpose storage backend crate with a key:value abstraction API."),(0,i.kt)("h4",{id:"bee-storage-rocksdb"},"bee-storage-rocksdb"),(0,i.kt)("p",null,"A bee-storage implementation for the ",(0,i.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB")," backend."),(0,i.kt)("h4",{id:"bee-storage-sled"},"bee-storage-sled"),(0,i.kt)("p",null,"A bee-storage implementation for the ",(0,i.kt)("a",{parentName:"p",href:"https://dbdb.io/db/sled"},"Sled")," backend."),(0,i.kt)("h4",{id:"bee-storage-test"},"bee-storage-test"),(0,i.kt)("p",null,"A crate to test storage implementation generically."))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);