"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76195],{96853:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={title:"Become a node operator",description:"Running a node is the best way to use IOTA. This topic provides a checklist of steps for running a reliable node.",image:"/img/participate/banner/banner_node_operator.png"},u="Getting started as a node operator",l={unversionedId:"support-the-network/become-a-node-operator",id:"support-the-network/become-a-node-operator",title:"Become a node operator",description:"Running a node is the best way to use IOTA. This topic provides a checklist of steps for running a reliable node.",source:"@site/internal/participate/support-the-network/become-a-node-operator.md",sourceDirName:"support-the-network",slug:"/support-the-network/become-a-node-operator",permalink:"/participate/support-the-network/become-a-node-operator",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/participate/support-the-network/become-a-node-operator.md",tags:[],version:"current",lastUpdatedAt:1648709788,formattedLastUpdatedAt:"3/31/2022",frontMatter:{title:"Become a node operator",description:"Running a node is the best way to use IOTA. This topic provides a checklist of steps for running a reliable node.",image:"/img/participate/banner/banner_node_operator.png"},sidebar:"participate",previous:{title:"About Nodes",permalink:"/participate/support-the-network/about-nodes"},next:{title:"Node Software",permalink:"/participate/support-the-network/node-software"}},c={},p=[{value:"Setting up a reliable architecture",id:"setting-up-a-reliable-architecture",level:2},{value:"Securing your device",id:"securing-your-device",level:2},{value:"Securing SSH logins",id:"securing-ssh-logins",level:3},{value:"Blocking unnecessary ports",id:"blocking-unnecessary-ports",level:3},{value:"Choosing a node software",id:"choosing-a-node-software",level:3},{value:"Deciding whether to enable remote proof of work",id:"deciding-whether-to-enable-remote-proof-of-work",level:3},{value:"Load balancing",id:"load-balancing",level:3}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-as-a-node-operator"},"Getting started as a node operator"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Node Operator",src:o(23622).Z,width:"862",height:"200"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Running a node is the best way to use IOTA. By doing so, you have direct access to the Tangle instead of having to connect to and trust someone else's node, and you help the IOTA network to become more distributed. This topic provides a checklist of steps for running a reliable node.")),(0,a.kt)("h2",{id:"setting-up-a-reliable-architecture"},"Setting up a reliable architecture"),(0,a.kt)("p",null,"To handle high rates of transactions per second, nodes need enough computational power to run reliably, including the following minimum requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A dual-core CPU"),(0,a.kt)("li",{parentName:"ul"},"2 GB RAM"),(0,a.kt)("li",{parentName:"ul"},"SSD storage")),(0,a.kt)("p",null,"The amount of storage you need will depend on whether you plan on pruning transactions from your local database."),(0,a.kt)("h2",{id:"securing-your-device"},"Securing your device"),(0,a.kt)("p",null,"The security of the device that's running your node is important to stop attackers from gaining access to it. You should consider doing the following before running a node on your device:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Securing SSH logins"),(0,a.kt)("li",{parentName:"ul"},"Blocking unnecessary ports")),(0,a.kt)("h3",{id:"securing-ssh-logins"},"Securing SSH logins"),(0,a.kt)("p",null,"If you log into your device through SSH, you should use measures to protect it from unauthorized access. Many guides have been written about this subject. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://blog.devolutions.net/2017/04/10-steps-to-secure-open-ssh"},"10 Steps to Secure Open SSH"),"."),(0,a.kt)("h3",{id:"blocking-unnecessary-ports"},"Blocking unnecessary ports"),(0,a.kt)("p",null,"Attackers can abuse any open ports on your device."),(0,a.kt)("p",null,"To secure your device against attacks on unused open ports, you should close all ports except those that are in use. To do so, you can use a firewall."),(0,a.kt)("p",null,"All operating systems include firewall options. By having a firewall in place, you can completely block unused and unnecessary ports."),(0,a.kt)("h3",{id:"choosing-a-node-software"},"Choosing a node software"),(0,a.kt)("p",null,"To join an IOTA network, you need to run one of the available node software."),(0,a.kt)("p",null,"For a description of each node software as well as links to guides and tutorials for running them, see ",(0,a.kt)("a",{parentName:"p",href:"/participate/support-the-network/node-software"},(0,a.kt)("strong",{parentName:"a"},"Node software")),"."),(0,a.kt)("h3",{id:"deciding-whether-to-enable-remote-proof-of-work"},"Deciding whether to enable remote proof of work"),(0,a.kt)("p",null,"When you're configuring your node, you may have the option to allow it to do proof of work. When this feature is enabled, clients can ask your node to do remote proof of work."),(0,a.kt)("p",null,"Proof of work takes time and uses your node's computational power. So, you may want to keep this feature disabled by default."),(0,a.kt)("h3",{id:"load-balancing"},"Load balancing"),(0,a.kt)("p",null,"If you run more than one node, it's best practice to make sure that API requests are distributed among all of them. To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer."),(0,a.kt)("p",null,"This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. But, on the backend, the nodes with the biggest amount of unused computational power will process the request and return the response."))}h.isMDXComponent=!0},23622:function(e,t,o){t.Z=o.p+"assets/images/banner_node_operator-59739e24859e6e809a67644a655c4155.png"},3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=r,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);