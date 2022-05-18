"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45242],{31611:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),o=["components"],r={description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",image:"/img/chain0.png",keywords:["state","transitions","balances","digital assets","UTXO","transitions","explanation"]},c="State, Transitions, and State Anchoring",l={unversionedId:"guide/core_concepts/states",id:"guide/core_concepts/states",title:"State, Transitions, and State Anchoring",description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/states.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/states",permalink:"/smart-contracts/guide/core_concepts/states",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/states.md",tags:[],version:"current",frontMatter:{description:"The state of the chain consists of balances of native IOTA digital assets and a collection of key/value pairs which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.",image:"/img/chain0.png",keywords:["state","transitions","balances","digital assets","UTXO","transitions","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Consensus",permalink:"/smart-contracts/guide/core_concepts/consensus"},next:{title:"Anatomy of a Smart Contract",permalink:"/smart-contracts/guide/core_concepts/smart-contract-anatomy"}},h={},d=[{value:"State of the Chain",id:"state-of-the-chain",level:2},{value:"Digital Assets on the Chain",id:"digital-assets-on-the-chain",level:2},{value:"The Data State",id:"the-data-state",level:2},{value:"Anchoring the State",id:"anchoring-the-state",level:2},{value:"State Transitions",id:"state-transitions",level:2}],u={toc:d};function p(t){var e=t.components,r=(0,s.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-transitions-and-state-anchoring"},"State, Transitions, and State Anchoring"),(0,i.kt)("h2",{id:"state-of-the-chain"},"State of the Chain"),(0,i.kt)("p",null,"The state of the chain consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Balances of the native IOTA digital assets, colored tokens. The chain acts as a custodian for those funds."),(0,i.kt)("li",{parentName:"ul"},"A collection of arbitrary key/value pairs, the data state, which represents use case-specific data stored in the chain by its smart contracts outside the UTXO ledger.")),(0,i.kt)("p",null,"The state of the chain is an append-only (immutable) data structure maintained by the distributed consensus of its validators."),(0,i.kt)("h2",{id:"digital-assets-on-the-chain"},"Digital Assets on the Chain"),(0,i.kt)("p",null,"The native L1 accounts of IOTA UTXO ledger are represented by addresses, each controlled by the entity holding the corresponding private / public key pair. The L1 account is a collection of UTXOs belonging to the address."),(0,i.kt)("p",null,"Similarly, the chain holds all tokens entrusted to it in one special UTXO, the state output (see above) which is always located in the address controlled by the chain.\nIt is similar to how a bank holds all deposits in its vault. This way, the chain (entity controlling the state output) becomes a custodian for the assets owned by its clients, in the same sense the bank\u2019s client owns the money deposited in the bank."),(0,i.kt)("p",null,"We call the consolidated assets held in the chain ",(0,i.kt)("em",{parentName:"p"},"total assets on-chain"),", which are contained in the state output of the chain."),(0,i.kt)("h2",{id:"the-data-state"},"The Data State"),(0,i.kt)("p",null,"The data state of the chain consists of the collection of key/value pairs. Each key and each value are arbitrary byte arrays."),(0,i.kt)("p",null,"In its persistent form, the data state is stored in the key/value database outside the UTXO ledger and maintained by the validator nodes of the chain.\nThe state stored in the database is called a ",(0,i.kt)("em",{parentName:"p"},"solid state"),"."),(0,i.kt)("p",null,"The virtual state is an in-memory collection of key/value pairs which can become solid upon being committed to the database. An essential property of the virtual state is the possibility to have several virtual states in parallel as candidates, with a possibility for one of them to be solidified."),(0,i.kt)("p",null,"The data state in any form has: a state hash, a timestamp, and a state index.\n(State hash is usually a Merkle root, but it can be any hashing function of all data contained in the data state)"),(0,i.kt)("p",null,"The data state and the on-chain assets are both contained in one atomic unit on the ledger: the state UTXO. The state hash can only be changed by the same entity which controls the funds (the committee). So, the state mutation (state transition) of the chain is an atomic event between funds and the data state."),(0,i.kt)("h2",{id:"anchoring-the-state"},"Anchoring the State"),(0,i.kt)("p",null,"The data state is stored outside the ledger, on the distributed database maintained by validators nodes."),(0,i.kt)("p",null,"Anchoring the state means placing the hash of the data state into one special transaction and one special UTXO (an output), and adding it (confirming) on the UTXO ledger."),(0,i.kt)("p",null,"The UTXO ledger guarantees that at every moment there is ",(0,i.kt)("em",{parentName:"p"},"exactly one")," such output for each chain on the UTXO ledger. We call this output the ",(0,i.kt)("em",{parentName:"p"},"state output")," (or state anchor), and the containing transaction ",(0,i.kt)("em",{parentName:"p"},"state transaction")," (or anchor transaction) of the chain."),(0,i.kt)("p",null,"The state output is controlled (i.e. can be unlocked/consumed) by the entity running the chain."),(0,i.kt)("p",null,"With the anchoring mechanism the UTXO ledger supports the IOTA Smart Contracts chain the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Guarantees global consensus on the state of the chain"),(0,i.kt)("li",{parentName:"ul"},"Makes the state immutable and tamper-proof"),(0,i.kt)("li",{parentName:"ul"},"Makes the state consistent (see below)")),(0,i.kt)("p",null,"The state output contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identity of the chain (alias address)"),(0,i.kt)("li",{parentName:"ul"},"Hash of the data state"),(0,i.kt)("li",{parentName:"ul"},"State index, which is incremented with each next state output, the state transition (see below)")),(0,i.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,i.kt)("p",null,"The Data state is updated by mutations of its key/value pairs. Each mutation is either setting a value for a key, or deleting a key (and associated value). Any update to the data state can be reduced to the partially ordered sequence of mutations."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"block")," is the collection of mutations to the data state which are applied in a transition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"next data state = apply(current data state, block)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"state transition")," in the chain occurs atomically, together with the movement of the chain's assets, and the update of the state hash to the hash of the new data state in the transaction which consumes previous state output and produces next state output."),(0,i.kt)("p",null,"At any moment of time, the data state of the chain is a result of applying the historical sequence of blocks, starting from the empty data state. Hence, blockchain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"State transitions",src:a(25615).Z,width:"862",height:"404"})),(0,i.kt)("p",null,"On the UTXO ledger (L1), the history of the state is represented as a sequence (chain) of UTXOs, each holding chain\u2019s assets in a particular state and the anchoring hash of the data state. Note that not all the state's transition history may be available: due to practical reasons the older transaction may be pruned in the snapshot process. The only thing that is guaranteed is that the tip of the chain of UTXOs is always available (which includes the latest data state)."),(0,i.kt)("p",null,'The blocks and state outputs which anchor the state are computed by the Virtual Machine (VM) which is a deterministic processor or "black box". The VM is responsible for the consistency of state transition and the state itself.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chain",src:a(55429).Z,width:"862",height:"1026"})))}p.isMDXComponent=!0},25615:function(t,e,a){e.Z=a.p+"assets/images/chain0-e50bd2d788a80b19620bc79b7ce5d1eb.png"},55429:function(t,e,a){e.Z=a.p+"assets/images/chain1-c34062ece66a9cd12ba9c67efc0575d4.png"},3905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return p}});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,i=t.originalType,c=t.parentName,h=r(t,["components","mdxType","originalType","parentName"]),u=l(a),p=s,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,o(o({ref:e},h),{},{components:a})):n.createElement(m,o({ref:e},h))}));function p(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:s,o[1]=r;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);