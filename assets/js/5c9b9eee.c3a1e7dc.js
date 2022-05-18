"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84479],{80981:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","Guarded type","memory","allocated","secret"]},s="Structure: Runtime",p={unversionedId:"structure/engine/runtime",id:"structure/engine/runtime",title:"Structure: Runtime",description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",source:"@site/external/stronghold.rs/documentation/docs/structure/engine/runtime.md",sourceDirName:"structure/engine",slug:"/structure/engine/runtime",permalink:"/stronghold.rs/structure/engine/runtime",draft:!1,editUrl:"https://github.com/iotaledger/stronghold.rs/edit/dev/external/stronghold.rs/documentation/docs/structure/engine/runtime.md",tags:[],version:"current",frontMatter:{description:"Runtime aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system. The crate provides three primary Types for guarding data; GuardedVec, Guarded, and Secret.",image:"/img/logo/Stronghold_icon.png",keywords:["rust","crate","Guarded type","memory","allocated","secret"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Store",permalink:"/stronghold.rs/structure/engine/store"},next:{title:"Structure: Communication",permalink:"/stronghold.rs/structure/p2p"}},u={},d=[],m={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure-runtime"},"Structure: Runtime"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/runtime"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rs/stronghold-runtime"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://crates.io/crates/stronghold-runtime"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-runtime.svg",alt:null})))))),(0,i.kt)("p",null,(0,i.kt)("h1",{parentName:"p"},"Stronghold runtime system utilities"),(0,i.kt)("p",{parentName:"p"},"This crate aims to provide utilities for performing computations as securely as possible with respect to the underlying operating system."),(0,i.kt)("p",{parentName:"p"},"The crate provides three primary Types for guarding data; ",(0,i.kt)("inlineCode",{parentName:"p"},"GuardedVec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Guarded"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret"),". Here are the primary concerns centered around this library:"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"guarded memory allocations"),(0,i.kt)("li",{parentName:"ul"},"assists with read/write protecting sensitive data"),(0,i.kt)("li",{parentName:"ul"},"zeroes the allocated memory when handing it back to the operating system"),(0,i.kt)("li",{parentName:"ul"},"uses canary and garbage values to protect the memory pages."),(0,i.kt)("li",{parentName:"ul"},"leverages NACL ",(0,i.kt)("inlineCode",{parentName:"li"},"libsodium")," for use on all supported platforms.")),(0,i.kt)("p",{parentName:"p"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GuardedVec")," type is used for protecting variable-length secrets allocated on the heap. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Guarded")," type is used for protecting fixed-length secrets allocated on the heap. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," type is used for guarding secrets allocated to the stack."),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"GuardedVec")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Guarded")," include the following guarantees:"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Causes segfault upon access without using a borrow."),(0,i.kt)("li",{parentName:"ul"},"Protected using mprotect:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Prot::NoAccess")," - when the box has no current borrows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Prot::ReadOnly")," - when the box has at least one current immutable borrow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Prot::ReadWrite")," - when the box has a current mutable borrow (can only have one at a time)."))),(0,i.kt)("li",{parentName:"ul"},"The allocated memory uses guard pages both proceeding and following the memory. Overflows and large underflows cause immediate termination of the program."),(0,i.kt)("li",{parentName:"ul"},"A canary proceeds the memory location to detect smaller underflows.  The program will drop the underlying memory and terminate if detected."),(0,i.kt)("li",{parentName:"ul"},"The Memory is locked with ",(0,i.kt)("inlineCode",{parentName:"li"},"mlock"),"."),(0,i.kt)("li",{parentName:"ul"},"When the memory is freed, ",(0,i.kt)("inlineCode",{parentName:"li"},"munlock")," is called."),(0,i.kt)("li",{parentName:"ul"},"The memory is zeroed when no longer in use via ",(0,i.kt)("inlineCode",{parentName:"li"},"sodium_free"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Guarded")," types can be compared in constant time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Guarded")," types can not be printed using ",(0,i.kt)("inlineCode",{parentName:"li"},"Debug"),"."),(0,i.kt)("li",{parentName:"ul"},"The interior data of a ",(0,i.kt)("inlineCode",{parentName:"li"},"Guarded")," type may not be ",(0,i.kt)("inlineCode",{parentName:"li"},"Clone"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"GuardedVec")," includes serialization which converts the data into a vector before its serialized by serde. Upon deserialization, the data is returned back to a new GuardedVec.")),(0,i.kt)("p",{parentName:"p"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," type provides fewer security features:"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"The Memory is locked with ","[",(0,i.kt)("inlineCode",{parentName:"li"},"mlock"),"]","."),(0,i.kt)("li",{parentName:"ul"},"When the memory is freed, ","[",(0,i.kt)("inlineCode",{parentName:"li"},"munlock"),"]"," is called."),(0,i.kt)("li",{parentName:"ul"},"the memory is zeroed out when no longer in use."),(0,i.kt)("li",{parentName:"ul"},"values are compared in constant time."),(0,i.kt)("li",{parentName:"ul"},"values are prevented from being Debugged."),(0,i.kt)("li",{parentName:"ul"},"Values can not be cloned.")),(0,i.kt)("h2",{parentName:"p"},"Zeroing Allocator"),(0,i.kt)("p",{parentName:"p"},"For the sake of providing a method of clearing out memory after it is used, the runtime also implements a zeroing allocator in the form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZeroingAlloc")," struct. This global allocator is merely a wrapper around the standard rust memory allocator which just adds a memory zeroing step to the dealloc process. The memory is zeroed by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sodium_memzero")," function prior to being deallocated. ")),(0,i.kt)("p",null,"The primary components are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Guarded")," - A guarded type for protecting fixed-length secrets allocated on the heap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GuardedVec")," - A guarded type for protecting variable-length secrets allocated on the heap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret")," - A Type for guarding secrets allocated to the stack."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ZeroingAlloc")," - A Zeroing Allocator which wraps the standard memory allocator. This allocator zeroes out memory when it is dropped.")))}c.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);