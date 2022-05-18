"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93138],{72034:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=n(76018),l=n(54501),i=["components"],s={keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},u="Calling Functions",d={unversionedId:"guide/schema/call",id:"guide/schema/call",title:"Calling Functions",description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/call.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/call",permalink:"/smart-contracts/guide/schema/call",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/call.mdx",tags:[],version:"current",frontMatter:{keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Descriptors",permalink:"/smart-contracts/guide/schema/funcdesc"},next:{title:"Posting Asynchronous Requests",permalink:"/smart-contracts/guide/schema/post"}},m={},p=[],f={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-functions"},"Calling Functions"),(0,o.kt)("p",null,"Synchronous function calls between smart contracts act very similar to how normal function\ncalls work in any programming language, but with a slight twist. With normal function\ncalls you share all the global memory that you can access with every function that you\ncall. However, when calling a smart contract function you can only access the memory\nassigned to that specific smart contract. Remember, each smart contract runs in its own\nsandbox environment. Therefore, the only way to share data between smart contracts that\ncall each other is through function parameters and return values."),(0,o.kt)("p",null,"Synchronous calls can only be made between contracts that are running on the same contract\nchain. The IOTA Smart Contracts host knows about all the contracts it is running on a chain, and therefore\nis able to dispatch the call to the correct contract function. The function descriptor is\nused to specify the call parameters (if any) through its ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," proxy, and to invoke the\nfunction through its ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," interface."),(0,o.kt)("p",null,"In addition, when the function that is called is not a ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/views"},"View"),", it is possible\nto pass tokens to the function call through this interface. Note that the only way to call\na function and properly pass tokens to it ",(0,o.kt)("em",{parentName:"p"},"within the same chain")," is through the function\ndescriptor. Otherwise, the incoming() function will not register any incoming tokens."),(0,o.kt)("p",null,"When the call is made, the calling function will be paused and wait for the called\nfunction to complete. After completion, it may access the returned values (if any) through\nthe ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/results"},(0,o.kt)("inlineCode",{parentName:"a"},"results")," proxy")," of the function descriptor."),(0,o.kt)("p",null,"When calling a function from a View function, it is only possible to call other View\nfunctions. The ScFuncs interface enforces this at compile-time through the IOTA Smart Contracts function\ncontext that needs to be passed to the function that creates the function descriptor."),(0,o.kt)("p",null,"Here's how a smart contract would tell a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to divide\nthe 1000 tokens it passes to the function:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.Divide(ctx)\nf.Func.TransferIotas(1000).Call()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::divide(ctx);\nf.func.transfer_iotas(1000).call();\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.divide(ctx);\nf.func.transferIotas(1000).call();\n")))),(0,o.kt)("p",null,"And here is how a smart contract would ask a ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to\nreturn the dispersion factor for a specific address:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.GetFactor(ctx)\nf.Params.Address().SetValue(address)\nf.Func.Call()\nfactor := f.Results.Factor().Value()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::get_factor(ctx);\nf.params.address().set_value(&address);\nf.func.call();\nlet factor = f.results.factor().value();\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.getFactor(ctx);\nf.params.address().setValue(address);\nf.func.call();\nlet factor = f.results.factor().value();\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a function descriptor for the desired function."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"params")," proxy in the function descriptor to set any required parameters."),(0,o.kt)("li",{parentName:"ol"},"Direct the ",(0,o.kt)("inlineCode",{parentName:"li"},"func")," member of the function descriptor to call the associated function"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"results")," proxy in the function descriptor to retrieve any results we are\ninterested in.")),(0,o.kt)("p",null,'The function descriptors assume that the function to be called is associated with the\ndefault Hname of the contract, in this case ScHname::new("dividend"). If you deployed the\ncontract that contains the function you want to call under a different name, then you\nwould have to provide its associated Hname to the ',(0,o.kt)("inlineCode",{parentName:"p"},"func")," member through the of_contract()\nmember function like this:"),(0,o.kt)(c.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'altContract := NewScHname("alternateName")\nf := dividend.ScFuncs.Divide(ctx)\nf.Func.OfContract(altContract).TransferIotas(1000).Call()\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let alt_contract = ScHname::new("alternateName");\nlet f = dividend::ScFuncs::divide(ctx);\nf.func.of_contract(alt_contract).transfer_iotas(1000).call();\n'))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'let altContract = ScHname.fromString("alternateName");\nlet f = dividend.ScFuncs.divide(ctx);\nf.func.ofContract(altContract).transferIotas(1000).call();\n')))),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/post"},"next section")," we will look at how we can request smart contract functions in a\ndifferent chain to be executed in a similar way."))}h.isMDXComponent=!0},54501:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),o="tabItem_OmH5";function c(e){var t=e.children,n=e.hidden,c=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:n},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),o=n(5730),c=n(20636),l=n(76602),i=n(63735),s=n(86010),u="tabList_uSqn",d="tabItem_LplD";function m(e){var t,n,o,m=e.lazy,p=e.block,f=e.defaultValue,h=e.values,g=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),N=T.tabGroupChoices,x=T.setTabGroupChoices,S=(0,r.useState)(w),C=S[0],O=S[1],I=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=N[g];null!=Z&&Z!==C&&b.some((function(e){return e.value===Z}))&&O(Z)}var F=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==C&&(E(t),O(a),null!=g&&x(g,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:F,onClick:F},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);