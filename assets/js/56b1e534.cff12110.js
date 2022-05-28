"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76176],{6880:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),u=(r(67294),r(3905)),o=["components"],p={},i=void 0,l={unversionedId:"libraries/java/api/TransferOutput",id:"libraries/java/api/TransferOutput",title:"TransferOutput",description:"Transfer output.",source:"@site/content/build/wallet.rs/production/documentation/docs/libraries/java/api/TransferOutput.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/TransferOutput",permalink:"/wallet.rs/libraries/java/api/TransferOutput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/libraries/java/api/TransferOutput.mdx",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"TransferOutput(address, amount, output_kind): TransferOutput",id:"transferoutputaddress-amount-output_kind-transferoutput",level:3},{value:"getAmount(): long",id:"getamount-long",level:3},{value:"getAddress(): AddressWrapper",id:"getaddress-addresswrapper",level:3},{value:"getOutputKind(): OutputKind",id:"getoutputkind-outputkind",level:3}],c={toc:s};function f(t){var e=t.components,r=(0,a.Z)(t,o);return(0,u.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Transfer output."),(0,u.kt)("h3",{id:"transferoutputaddress-amount-output_kind-transferoutput"},"TransferOutput(address, amount, output_kind): ",(0,u.kt)("a",{parentName:"h3",href:"#transferoutput"},"TransferOutput")),(0,u.kt)("p",null,"Transfer output"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"address"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,u.kt)("td",{parentName:"tr",align:null},"The addres we want to send to")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"amount"),(0,u.kt)("td",{parentName:"tr",align:null},"long"),(0,u.kt)("td",{parentName:"tr",align:null},"The amount we want to send")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"output_kind"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"#outputkind"},"OutputKind")),(0,u.kt)("td",{parentName:"tr",align:null},"The kind of output we wish to use. Default used is SIGNATURE_LOCKED_SINGLE")))),(0,u.kt)("h3",{id:"getamount-long"},"getAmount(): long"),(0,u.kt)("p",null,"The output value."),(0,u.kt)("h3",{id:"getaddress-addresswrapper"},"getAddress(): ",(0,u.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,u.kt)("p",null,"The output address."),(0,u.kt)("h3",{id:"getoutputkind-outputkind"},"getOutputKind(): ",(0,u.kt)("a",{parentName:"h3",href:"#outputkind"},"OutputKind")),(0,u.kt)("p",null,"The output type"))}f.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,u=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=l(r),f=a,m=c["".concat(i,".").concat(f)]||c[f]||s[f]||u;return r?n.createElement(m,o(o({ref:e},d),{},{components:r})):n.createElement(m,o({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var u=r.length,o=new Array(u);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var l=2;l<u;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);