"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90525],{77195:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={},l="Data Marketplace",d={unversionedId:"data-marketplace/overview",id:"data-marketplace/overview",title:"Data Marketplace",description:"Data silos make it difficult to buy and sell data among different data points. To overcome this challenge, the Data Marketplace uses Masked Authenticated Messaging (MAM) channels to open up the data silos and allow users to make micropayments of IOTA tokens to the data owners in exchange for data.",source:"@site/external/blueprints/data-marketplace/overview.md",sourceDirName:"data-marketplace",slug:"/data-marketplace/overview",permalink:"/blueprints/data-marketplace/overview",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/external/blueprints/data-marketplace/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Application Blueprints",permalink:"/blueprints/introduction"},next:{title:"Application Architecture",permalink:"/blueprints/data-marketplace/architecture"}},c={},p=[{value:"Business case",id:"business-case",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Solution",id:"solution",level:2},{value:"Demo",id:"demo",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Data Marketplace API documentation",id:"data-marketplace-api-documentation",level:3},{value:"GitHub Repository",id:"github-repository",level:3},{value:"Client Library",id:"client-library",level:3},{value:"MAM Eloquently Explained",id:"mam-eloquently-explained",level:3},{value:"MAM GitHub Repository",id:"mam-github-repository",level:3}],u={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-marketplace"},"Data Marketplace"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data silos make it difficult to buy and sell data among different data points. To overcome this challenge, the Data Marketplace uses Masked Authenticated Messaging (MAM) channels to open up the data silos and allow users to make micropayments of IOTA tokens to the data owners in exchange for data.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This project uses Streams v0 (former MAM). Keep in mind that Streams v0 is deprecated and ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/streams/welcome"},"IOTA Streams")," should be used."))),(0,o.kt)("h2",{id:"business-case"},"Business case"),(0,o.kt)("p",null,"Data is one of the most fundamental ingredients in the machine economy and the connected world. It is the foundation of the Data \u2014 Information \u2014 Knowledge \u2014 Wisdom ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DIKW_pyramid"},"(DIKW) pyramid"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data pyramid",src:a(97151).Z,width:"1257",height:"593"})),(0,o.kt)("p",null,"The different layers of this pyramid all rely on data. For example, sensors on cars can lead to the wisdom that allows drivers to bypass congestion:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data:")," Sensors monitor the road and receive signals from the photons that reflect off the surface of their environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Information:")," Sensor data is used to extract meaningful information about the speed of the moving objects and their relative positions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Knowledge:")," Information is contextualized and distilled into knowledge, telling the drivers on the road via over-the-air \u200bupdates that the road may be congested due to a crash"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wisdom:")," Knowledge allows drivers to take an alternative route")),(0,o.kt)("p",null,"Over the next decade, more than 75 billion connected devices will be interacting in different manners. These devices will give rise to a machine economy where they will trade everything from storage to electricity and sensor data. The data trade in this pilot project will highlight and explore the potential in these developments. With the prospect of tens of billions of devices generating data, we will see a proliferation of data that is unmatched in history."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IoT devices",src:a(62083).Z,width:"1250",height:"703"})),(0,o.kt)("h2",{id:"challenges"},"Challenges"),(0,o.kt)("p",null,"The largest obstacle preventing the fulfillment of the grandeur envisaged by Big Data is the fact that the overwhelming majority of data remains locked in what is called data silos."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data silos",src:a(39725).Z,width:"705",height:"639"})),(0,o.kt)("p",null,"Data silos do not, or very rarely, share data outside their own closed environment. This environment leads to enormous quantities of wasted data. In fact, often, over 99% of data is lost to the void (",(0,o.kt)("a",{parentName:"p",href:"https://www.mckinsey.com/mgi/overview/in-the-news/by-2025-internet-of-things-applications-could-have-11-trillion-impact"},"source: McKinsey 2015"),"). This lost data could contain valuable information to any compensating party if it were in an open, decentralized data stream."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open data",src:a(33362).Z,width:"728",height:"600"})),(0,o.kt)("p",null,"There are several reasons for the cumbersome and wasteful status quo. On the one hand, data wants to be free in the sense that its storage and transmission costs less and less over time. On the other hand, large quantities of data are extremely valuable and are not free to generate. These diametrically opposed conditions cause a gridlock that needs to be broken in order for Big Data to become truly big. A major cause of this is the fact that, while data sharing is becoming cheaper from a technological perspective, it is prohibitively expensive to sell fine, granular data in real-time due to intermediary fees \u2014 not to mention all the red tape one has to cut through in order to complete a single data purchase. These conditions make real-time data trade all but impossible. By 2025 it is projected that around 95% of all data will be generated by IoT devices in real-time (",(0,o.kt)("a",{parentName:"p",href:"https://www.seagate.com/files/www-content/our-story/trends/files/idc-seagate-dataage-whitepaper.pdf"},"source: IDC 2017"),"), so this is a pressing issue."),(0,o.kt)("p",null,"A third obstacle is the lack of ensured authenticity and audit trails of data. Before the adoption of distributed ledger technologies, data transmission protocols and databases were susceptible to various attacks, including middleman attacks and data tampering. Data is only as valuable as it is valid. In short, if the data input is garbage, the output will also be garbage."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The IOTA Foundation launched the ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org"},"Data Marketplace")," as a proof of concept (PoC) and as an open innovation ecosystem."),(0,o.kt)("p",null,"As a non-profit organisation, the IOTA Foundation has developed this project to produce an open source technology and to empower other organisations to shape their own IOTA-enabled data marketplaces, with associated products and services."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Marketplace",src:a(94519).Z,width:"1600",height:"845"})),(0,o.kt)("p",null,"The growth of data marketplaces is an inevitable result of the IoT (Internet of Things) revolution. As physical assets such as ships, factories, vehicles, farms or buildings become digital, their digital twins will gradually act as secure data exchanges."),(0,o.kt)("p",null,"As data streams surge across silos and carry value across organisations, traditional value chains will transition into a web of value. This paradigm will be more complex to administer, forcing business to rethink their competitive play as part of these ecosystems. Data marketplaces will emerge as a means to exchange data, monetise data streams and provide the basis of new smart business models. We refer to this new wave of value creation, for the Internet of Everything, as the Economy of Things."),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"See this website for a ",(0,o.kt)("a",{parentName:"p",href:"https://data.iota.org/"},"demonstration of the application"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"data-marketplace-api-documentation"},(0,o.kt)("a",{parentName:"h3",href:"https://data.iota.org/static/docs"},"Data Marketplace API documentation")),(0,o.kt)("p",null,"Interact with the Data Marketplace through the REST API."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"github-repository"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/iotaledger/data-marketplace"},"GitHub Repository")),(0,o.kt)("p",null,"Read the code and some quickstart instructions to test this blueprint."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"client-library"},(0,o.kt)("a",{parentName:"h3",href:"https://wiki.iota.org/iota.rs/welcome"},"Client Library")),(0,o.kt)("p",null,"Learn how to use the iota client library to create, send, and receive transactions."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mam-eloquently-explained"},(0,o.kt)("a",{parentName:"h3",href:"https://blog.iota.org/introducing-masked-authenticated-messaging-e55c1822d50e"},"MAM Eloquently Explained")),(0,o.kt)("p",null,"Masked Authenticated Messaging is a second layer data communication protocol that adds functionality to publish and control access to an encrypted data stream, over the Tangle. Learn more about how MAM works."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mam-github-repository"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/iotaledger/mam.js"},"MAM GitHub Repository")),(0,o.kt)("p",null,"Read the code and some quickstart instructions to test MAM with JavaScript."),(0,o.kt)("hr",null))}h.isMDXComponent=!0},39725:function(e,t,a){t.Z=a.p+"assets/images/data-marketplace-data-silos-65420ca929dc74d32a3067d4a6076a01.png"},62083:function(e,t,a){t.Z=a.p+"assets/images/data-marketplace-iot-stats-166a90164806bb2320c7e8a8f4277253.png"},33362:function(e,t,a){t.Z=a.p+"assets/images/data-marketplace-open-data-5547ab6f56acba629bd6f63d3bc4ab83.png"},97151:function(e,t,a){t.Z=a.p+"assets/images/data-marketplace-otr-updates-2c07ba84dd86ea395f486d68e1437115.png"},94519:function(e,t,a){t.Z=a.p+"assets/images/data-marketplace-c56163b74032af3ab170837296a3fc3e.png"},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);