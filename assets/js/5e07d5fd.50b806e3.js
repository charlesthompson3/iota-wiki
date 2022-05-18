"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10069],{49833:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={},p=void 0,l={unversionedId:"libraries/java/api/MqttTopicManager",id:"libraries/java/api/MqttTopicManager",title:"MqttTopicManager",description:"withTopic(topic): MqttTopicManager",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttTopicManager.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MqttTopicManager",permalink:"/iota.rs/libraries/java/api/MqttTopicManager",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/MqttTopicManager.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"withTopic(topic): MqttTopicManager",id:"withtopictopic-mqtttopicmanager",level:3},{value:"withTopics(topics): MqttTopicManager",id:"withtopicstopics-mqtttopicmanager",level:3},{value:"unsubscribe(): void",id:"unsubscribe-void",level:3}],m={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"withtopictopic-mqtttopicmanager"},"withTopic(topic): ",(0,i.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,i.kt)("p",null,"Add a new topic to the list."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#topic"},"Topic")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"withtopicstopics-mqtttopicmanager"},"withTopics(topics): ",(0,i.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,i.kt)("p",null,"Add a collection of topics to the list."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topics"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#topic"},"Topic[]")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"unsubscribe-void"},"unsubscribe(): void"),(0,i.kt)("p",null,"Unsubscribe from the given topics.\nIf no topics were provided, the function will unsubscribe from every subscribed topic."))}d.isMDXComponent=!0},3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,o(o({ref:e},u),{},{components:r})):n.createElement(f,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);