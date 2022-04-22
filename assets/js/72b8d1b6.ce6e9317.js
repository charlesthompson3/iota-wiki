"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11107],{88619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],m={description:"The Spammer tool lets you add messages to the tangle when running GoShimmer.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","spammer","add messages","interval","tangle"]},o="Spammer API Methods",p={unversionedId:"apis/spammer",id:"apis/spammer",title:"Spammer API Methods",description:"The Spammer tool lets you add messages to the tangle when running GoShimmer.",source:"@site/external/goshimmer/documentation/docs/apis/spammer.md",sourceDirName:"apis",slug:"/apis/spammer",permalink:"/goshimmer/apis/spammer",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/apis/spammer.md",tags:[],version:"current",frontMatter:{description:"The Spammer tool lets you add messages to the tangle when running GoShimmer.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","spammer","add messages","interval","tangle"]},sidebar:"docs",previous:{title:"Faucet API Methods",permalink:"/goshimmer/apis/faucet"},next:{title:"Tools API Methods",permalink:"/goshimmer/apis/tools"}},s={},d=[{value:"<code>/spammer</code>",id:"spammer",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - <code>ToggleSpammer()</code>",id:"client-lib---togglespammer",level:4},{value:"Response examples",id:"response-examples",level:4},{value:"Results",id:"results",level:4}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spammer-api-methods"},"Spammer API Methods"),(0,l.kt)("p",null,"The Spammer tool lets you add messages to the tangle when running GoShimmer.\n",(0,l.kt)("strong",{parentName:"p"},"Note:")," Make sure you enable the ",(0,l.kt)("strong",{parentName:"p"},"spammer plugin")," before interacting with the API."),(0,l.kt)("p",null,"The API provides the following functions and endpoints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#spammer"},"/spammer"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---togglespammer"},"ToggleSpammer()"))),(0,l.kt)("h2",{id:"spammer"},(0,l.kt)("inlineCode",{parentName:"h2"},"/spammer")),(0,l.kt)("p",null,"In order to start the spammer, you need to send GET requests to a ",(0,l.kt)("inlineCode",{parentName:"p"},"/spammer")," API endpoint with the following parameters:"),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"cmd")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Action to perform. One of two possible values: ",(0,l.kt)("inlineCode",{parentName:"td"},"start")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"stop"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"rate")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Messages per time unit. Only applicable when ",(0,l.kt)("inlineCode",{parentName:"td"},"cmd=start"),". (default: 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"unit")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the unit for the spam rate: message per minute or second. One of two possible values: ",(0,l.kt)("inlineCode",{parentName:"td"},"mpm")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"mps"),". (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"mps"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"imif")," (Inter Message Issuing Function)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter indicating time interval between issued messages. Possible values: ",(0,l.kt)("inlineCode",{parentName:"td"},"poisson"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"uniform"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("p",null,"Description of ",(0,l.kt)("inlineCode",{parentName:"p"},"imif")," values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"poisson")," - emit messages modeled with Poisson point process, whose time intervals are exponential variables with mean 1/rate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uniform")," - issues messages at constant rate ")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/spammer?cmd=start&rate=100'\ncurl --location 'http://localhost:8080/spammer?cmd=start&rate=100&imif=uniform&unit=mpm'\ncurl --location 'http://localhost:8080/spammer?cmd=stop'\n")),(0,l.kt)("h4",{id:"client-lib---togglespammer"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"ToggleSpammer()")),(0,l.kt)("p",null,"Spammer can be enabled and disabled via ",(0,l.kt)("inlineCode",{parentName:"p"},"ToggleSpammer(enable bool, rate int, imif string) (*jsonmodels.SpammerResponse, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'res, err := goshimAPI.ToggleSpammer(true, 100, "mps", "uniform")\nif err != nil {\n    // return error\n}\n\n// will print the response\nfmt.Println(res.Message)\n')),(0,l.kt)("h4",{id:"response-examples"},"Response examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"message": "started spamming messages"}\n')),(0,l.kt)("h4",{id:"results"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Message with resulting message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,k=u["".concat(o,".").concat(g)]||u[g]||d[g]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);