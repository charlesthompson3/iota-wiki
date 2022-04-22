"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[53427],{70430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={description:"Official IOTA Streams which can be used to easily integrate an IOTA Wallet into your application",image:"/img/logo/wallet_light.png",keywords:["requirements","streams","channels","software","library","rust","nodejs"]},s="Welcome",c={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Official IOTA Streams which can be used to easily integrate an IOTA Wallet into your application",source:"@site/external/streams/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/streams/welcome",editUrl:"https://github.com/iotaledger/streams/edit/develop/external/streams/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Streams which can be used to easily integrate an IOTA Wallet into your application",image:"/img/logo/wallet_light.png",keywords:["requirements","streams","channels","software","library","rust","nodejs"]},sidebar:"docs",next:{title:"Overview",permalink:"/streams/overview"}},u={},p=[{value:"Joining the discussion",id:"joining-the-discussion",level:2},{value:"What you will find here",id:"what-you-will-find-here",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"This is the documentation for the official IOTA Streams software. You can read more about core principles behind IOTA Streams in the following blog ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-streams-alpha-7e91ee326ac0/"},"post"),"."),(0,o.kt)("p",null,"Streams is an organizational tool for structuring and navigating secure data through the Tangle. Streams organizes data by ordering it in a uniform and interoperable structure. Needless to say, it is also based on our official ",(0,o.kt)("em",{parentName:"p"},"one source code of truth")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"IOTA Rust library"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This library is in active development. The library targets the Chrysalis network and does not work with the IOTA legacy network."))),(0,o.kt)("p",null,"More information about Chrysalis components is available at ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/welcome"},"documentation portal"),"."),(0,o.kt)("h2",{id:"joining-the-discussion"},"Joining the discussion"),(0,o.kt)("p",null,"If you want to get involved in discussions about this library, or you're looking for support, go to the #streams-discussion channel on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord"),"."),(0,o.kt)("h2",{id:"what-you-will-find-here"},"What you will find here"),(0,o.kt)("p",null,"This documentation has five paths:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Overview: a detailed overview of the streams library."),(0,o.kt)("li",{parentName:"ol"},"Libraries: all available programming languages and their resources."),(0,o.kt)("li",{parentName:"ol"},"The Specification: detailed explanation requirements and functionality."),(0,o.kt)("li",{parentName:"ol"},"Contribute: how you can work on the streams software."),(0,o.kt)("li",{parentName:"ol"},"Get in touch: join the community and become part of the X-Team!")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);