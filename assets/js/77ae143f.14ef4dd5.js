"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11397],{46632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=["components"],o={},c="IOTA Wallet Library - Java binding",u={unversionedId:"libraries/java/getting_started",id:"libraries/java/getting_started",title:"IOTA Wallet Library - Java binding",description:"Java binding to the IOTA wallet library.",source:"@site/external/wallet.rs/documentation/docs/libraries/java/getting_started.md",sourceDirName:"libraries/java",slug:"/libraries/java/getting_started",permalink:"/wallet.rs/libraries/java/getting_started",editUrl:"https://github.com/iotaledger/wallet.rs/edit/mainnet/external/wallet.rs/documentation/docs/libraries/java/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/wallet.rs/libraries/python/api_reference"},next:{title:"Examples",permalink:"/wallet.rs/libraries/java/examples"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Documentation",id:"documentation",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-wallet-library---java-binding"},"IOTA Wallet Library - Java binding"),(0,i.kt)("p",null,"Java binding to the IOTA wallet library."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Ensure you have first installed the required dependencies for the library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/dev/README.md"},"here"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Clone project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/iotaledger/wallet.rs\n")),(0,i.kt)("p",null,"Build the rust library"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd wallet.rs/bindings/java/native\ncargo build\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Running an example usign gradle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd wallet.rs/bindings/java\n./gradlew examples:basic-app:test --info\n")),(0,i.kt)("p",null,"Make sure to make gradlew executable (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew"),")"),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/docs/specification"},"here"),"."))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);