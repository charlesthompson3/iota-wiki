"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84065],{84612:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",image:"/img/Banner/banner_wasp_using_docker.png",keywords:["Smart Contracts","Running a node","docker","image","build","configure","arguments"]},s="Docker (Standalone)",u={unversionedId:"guide/chains_and_nodes/docker_standalone",id:"guide/chains_and_nodes/docker_standalone",title:"Docker (Standalone)",description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",source:"@site/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/docker_standalone.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/docker_standalone",permalink:"/smart-contracts/guide/chains_and_nodes/docker_standalone",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/docker_standalone.md",tags:[],version:"current",frontMatter:{description:"How to run a Wasp node in using Docker. Build the image, configure it, run it.",image:"/img/Banner/banner_wasp_using_docker.png",keywords:["Smart Contracts","Running a node","docker","image","build","configure","arguments"]},sidebar:"tutorialSidebar",previous:{title:"Running a Node",permalink:"/smart-contracts/guide/chains_and_nodes/running-a-node"},next:{title:"Configuring wasp-cli",permalink:"/smart-contracts/guide/chains_and_nodes/wasp-cli"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Running a Wasp Node",id:"running-a-wasp-node",level:2},{value:"Configuration",id:"configuration",level:3}],p={toc:l};function g(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-standalone"},"Docker (Standalone)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp Node using Docker",src:t(42497).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"This page describes the configuration of a single Wasp node in combination with Docker. If you followed the instructions in ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Running a Node"),", you can skip to ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/wasp-cli"},"Configuring wasp-cli"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"running-a-wasp-node"},"Running a Wasp Node"),(0,o.kt)("p",null,"Checkout the project, switch to 'develop' and build the main image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\ncd wasp\ndocker build -t wasp-node .\n")),(0,o.kt)("p",null,"The build process will copy the docker_config.json file into the image, which will be used when the node gets started."),(0,o.kt)("p",null,"By default, the build process will use ",(0,o.kt)("inlineCode",{parentName:"p"},"-tags rocksdb,builtin_static")," as a build argument. This argument can be modified with ",(0,o.kt)("inlineCode",{parentName:"p"},"--build-arg BUILD_TAGS=<tags>"),"."),(0,o.kt)("p",null,"Depending on the use case, Wasp requires a different GoShimmer hostname which can be changed at this part inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/docker_config.json"},"docker_config.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "nodeconn": {\n    "address": "goshimmer:5000"\n  },\n')),(0,o.kt)("p",null,"After the build process has finished, you can start your Wasp node by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run wasp-node\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After the build process has been completed, it is still possible to inject a different configuration file into a new container by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -v $(pwd)/alternative_docker_config.json:/etc/wasp_config.json wasp-node\n")),(0,o.kt)("p",null,"You can also add further configuration using arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run wasp-node --nodeconn.address=alt_goshimmer:5000\n")),(0,o.kt)("p",null,"To get a list of all available arguments, run the node with the argument '--help'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run wasp-node --help\n")))}g.isMDXComponent=!0},42497:function(e,n,t){n.Z=t.p+"assets/images/banner_wasp_using_docker-f65ddb8d20cc101767281e95f48eaa5e.png"},3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,f=p["".concat(s,".").concat(g)]||p[g]||l[g]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);