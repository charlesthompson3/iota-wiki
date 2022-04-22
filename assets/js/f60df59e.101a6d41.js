"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11917],{54868:function(t,l,e){e.r(l),e.d(l,{assets:function(){return k},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return d},metadata:function(){return r},toc:function(){return s}});var n=e(83117),a=e(80102),u=(e(67294),e(3905)),o=["components"],d={description:"This page describes the standard payloads layout and different types of payloads that it includes.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.3StandardPayloadsLayout",keywords:["dRNG","payload size","payload type","node","timestamp"]},i="2.3 Standard Payloads Layout",r={unversionedId:"2.3 Standard Payloads Layout",id:"2.3 Standard Payloads Layout",title:"2.3 Standard Payloads Layout",description:"This page describes the standard payloads layout and different types of payloads that it includes.",source:"@site/external/IOTA-2.0-Research-Specifications/2.3 Standard Payloads Layout.md",sourceDirName:".",slug:"/2.3StandardPayloadsLayout",permalink:"/IOTA-2.0-Research-Specifications/2.3StandardPayloadsLayout",editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/external/IOTA-2.0-Research-Specifications/2.3 Standard Payloads Layout.md",tags:[],version:"current",frontMatter:{description:"This page describes the standard payloads layout and different types of payloads that it includes.",image:"/img/logo/Coordicide_Logo_Black.png",slug:"2.3StandardPayloadsLayout",keywords:["dRNG","payload size","payload type","node","timestamp"]},sidebar:"tutorialSidebar",previous:{title:"2.2 Message Layout",permalink:"/IOTA-2.0-Research-Specifications/2.2MessageLayout"},next:{title:"2.4 Data Flow",permalink:"/IOTA-2.0-Research-Specifications/2.4DataFlow"}},k={},s=[{value:"2.3.1 Introduction",id:"231-introduction",level:2},{value:"2.3.2 Payload Definition Guideline",id:"232-payload-definition-guideline",level:2},{value:"2.3.3 Parameters",id:"233-parameters",level:2},{value:"2.3.4 User-defined Payloads",id:"234-user-defined-payloads",level:2},{value:"2.3.5 Core Payloads",id:"235-core-payloads",level:2},{value:"2.3.5.1 Pure Data Payload",id:"2351-pure-data-payload",level:3},{value:"2.3.5.2 Transaction Payload",id:"2352-transaction-payload",level:3},{value:"2.3.5.3 FPC Statement",id:"2353-fpc-statement",level:3},{value:"2.3.5.4 dRNG Beacon Payloads",id:"2354-drng-beacon-payloads",level:3},{value:"2.3.5.5 dRNG Application Message",id:"2355-drng-application-message",level:3},{value:"2.3.5.6 dRNG DKG Payload",id:"2356-drng-dkg-payload",level:3},{value:"2.3.5.7 Salt Declaration Payload",id:"2357-salt-declaration-payload",level:3},{value:"2.3.5.8 Indexations payload",id:"2358-indexations-payload",level:3}],p={toc:s};function c(t){var l=t.components,e=(0,a.Z)(t,o);return(0,u.kt)("wrapper",(0,n.Z)({},p,e,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"23-standard-payloads-layout"},"2.3 Standard Payloads Layout"),(0,u.kt)("h2",{id:"231-introduction"},"2.3.1 Introduction"),(0,u.kt)("p",null,"Payloads may contain arbitrary data up to ",(0,u.kt)("inlineCode",{parentName:"p"},"MAX_PAYLOAD_SIZE"),", which allows building additional protocols on top of the base protocol in the same way as TCP/IP allows to define additional protocols on top of its generic data segment."),(0,u.kt)("p",null,"Payloads may recursively contain other payloads, that enables the creation of higher-level protocols based on the same concepts of layers, as in traditional software and network architecture."),(0,u.kt)("p",null,"Payloads other than transactions are, by definition, always liked with a level of knowledge 3."),(0,u.kt)("p",null,"The Standard payload Layout specification depends on the following specification:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/IOTA-2.0-Research-Specifications/2.2MessageLayout"},"2.2 - Message Layout"))),(0,u.kt)("h2",{id:"232-payload-definition-guideline"},"2.3.2 Payload Definition Guideline"),(0,u.kt)("p",null,"Each payload shall be described by the ",(0,u.kt)("inlineCode",{parentName:"p"},"uint32")," ",(0,u.kt)("strong",{parentName:"p"},"payload type")," field. To separate user-defined payloads from essential core payloads and allow future extension of the protocol, the first four places (types 0-255) are reserved for core payload definitions, and all user-defined payloads that do not restrict this rule shall be discarded."),(0,u.kt)("p",null,"Additionally, all payloads shall start with the following fields, in the presented order (Table 2.3.1)."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The type of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload."))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.1:")," Required fields of a payload."),(0,u.kt)("h2",{id:"233-parameters"},"2.3.3 Parameters"),(0,u.kt)("p",null,"The Table 2.3.2 presents the parameter list that each node must know.\n| Name | Description | Value |\n| -----| ------ | ----------- |\n|",(0,u.kt)("inlineCode",{parentName:"p"},"MAX_PAYLOAD_SIZE")," | The maximum allowed payload size in bytes. Determined by the difference between ",(0,u.kt)("inlineCode",{parentName:"p"},"MAX_MESSAGE_SIZE")," (defined in ",(0,u.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/2.2MessageLayout"},"Section 2.2 - Message Layout"),") and the total size of the remaining message fields. | 65157 |"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.2:")," Standard Payload Layout parameters."),(0,u.kt)("h2",{id:"234-user-defined-payloads"},"2.3.4 User-defined Payloads"),(0,u.kt)("p",null,"A node may choose to interpret user-defined payloads by listening to its specific ",(0,u.kt)("strong",{parentName:"p"},"payload type")," (possibly via third-party code/software). If a node does not know a certain ",(0,u.kt)("strong",{parentName:"p"},"payload type"),", it simply treats it as arbitrary data."),(0,u.kt)("h2",{id:"235-core-payloads"},"2.3.5 Core Payloads"),(0,u.kt)("p",null,"The core protocol defines several payloads that every node needs to interpret and process in order to participate in the network.\nAll core payloads, along with their types, are listed in the Table 2.3.3."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Payload Name"),(0,u.kt)("th",null,"Payload Type")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Pure data"),(0,u.kt)("td",null,"value 1")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Transaction"),(0,u.kt)("td",null,"value 0")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"FPC statement"),(0,u.kt)("td",null,"value 2")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"dRNG Application Message"),(0,u.kt)("td",null,"value 3")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"dRNG DKG"),(0,u.kt)("td",null,"value 4")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"dRNG Beacon"),(0,u.kt)("td",null,"value 5")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"dRNG Collective Beacon"),(0,u.kt)("td",null,"value 6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Salt Declaration"),(0,u.kt)("td",null,"value 7")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Indexation"),(0,u.kt)("td",null,"value 8"))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.3:")," List of all core payloads with its corresponding types.*"),(0,u.kt)("h3",{id:"2351-pure-data-payload"},"2.3.5.1 Pure Data Payload"),(0,u.kt)("p",null,"Pure data payloads allow to send unsigned messages (Table 2.3.4). "),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 1")," to denote a ",(0,u.kt)("i",null,"Data Payload"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Data"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"The raw data payload."))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.4:")," Pure data payload."),(0,u.kt)("h3",{id:"2352-transaction-payload"},"2.3.5.2 Transaction Payload"),(0,u.kt)("p",null,"The ledger state is changed through transactions payloads or value transfers. More details on transactions could be found in ",(0,u.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/5.1UTXO"},"Section 5.1 - UTXO")," specification.\nThe detailed description of transaction payload's serialized form is presented in Table 2.3.5."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 0")," to denote a ",(0,u.kt)("i",null,"Transaction Payload"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Essence ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Transaction Essence"),(0,u.kt)("blockquote",null,"Describes the essence data making up a transaction."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version number of the ",(0,u.kt)("i",null,"Transaction Essence"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Timestamp"),(0,u.kt)("td",null,"time"),(0,u.kt)("td",null,"The timestamp of the ",(0,u.kt)("i",null,"Transaction")," creation.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Access Mana Pledge nodeID"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The nodeID to which access mana of the ",(0,u.kt)("i",null,"Transaction")," is pledged.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Consensus Mana Pledge nodeID"),(0,u.kt)("td",null,"ByteArray32]"),(0,u.kt)("td",null,"The nodeID to which consensus mana of the ",(0,u.kt)("i",null,"Transaction")," is pledged.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Inputs Count"),(0,u.kt)("td",null,"uint16"),(0,u.kt)("td",null,"The amount of inputs proceeding.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Inputs ",(0,u.kt)("code",null,"anyOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",null,(0,u.kt)("summary",null,"UTXO Input"),(0,u.kt)("blockquote",null,"Describes an input which references an unspent transaction output to consume."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Input Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 0")," to denote an ",(0,u.kt)("i",null,"UTXO Input"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Transaction ID"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The BLAKE2b-256 hash of the transaction from which the UTXO comes from.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Transaction Output Index"),(0,u.kt)("td",null,"uint16"),(0,u.kt)("td",null,"The index of the output on the referenced transaction to consume.")))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Outputs Count"),(0,u.kt)("td",null,"uint16"),(0,u.kt)("td",null,"The amount of outputs proceeding.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Outputs ",(0,u.kt)("code",null,"anyOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",null,(0,u.kt)("summary",null,"SigLockedSingleOutput"),(0,u.kt)("blockquote",null,"Describes a deposit to a single address which is unlocked via a signature."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Output Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 0")," to denote a ",(0,u.kt)("i",null,"SigLockedSingleOutput"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Address ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",null,(0,u.kt)("summary",null,"Ed25519 Address"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Address Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 0")," to denote an ",(0,u.kt)("i",null,"Ed25519 Address"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Address"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The raw bytes of the Ed25519 address which is a BLAKE2b-256 hash of the Ed25519 public key.")))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"BLS Address"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Address Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 1")," to denote a ",(0,u.kt)("i",null,"BLS Address"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Address"),(0,u.kt)("td",null,"ByteArray[49]"),(0,u.kt)("td",null,"The raw bytes of the BLS address which is a BLAKE2b-256 hash of the BLS public key.")))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Amount"),(0,u.kt)("td",null,"uint64"),(0,u.kt)("td",null,"The amount of tokens to deposit with this ",(0,u.kt)("i",null,"SigLockedSingleOutput")," output.")))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Length"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The length in bytes of the optional payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Payload ",(0,u.kt)("code",null,"optOneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",null,(0,u.kt)("summary",null,"Indexation Payload")))))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Unlock Blocks Count"),(0,u.kt)("td",null,"uint16"),(0,u.kt)("td",null,"The count of unlock blocks proceeding. Must match count of specified inputs.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Unlock Blocks ",(0,u.kt)("code",null,"anyOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Signature Unlock Block"),(0,u.kt)("blockquote",null,"Defines an unlock block containing signature(s) unlocking input(s)."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Unlock Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 0")," to denote a ",(0,u.kt)("i",null,"Signature Unlock Block"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Signature ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",null,(0,u.kt)("summary",null,"Ed25519 Signature"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 1")," to denote an ",(0,u.kt)("i",null,"Ed25519 Signature"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Public key"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The public key of the Ed25519 keypair which is used to verify the signature.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature"),(0,u.kt)("td",null,"ByteArray[64]"),(0,u.kt)("td",null,"The signature signing the serialized ",(0,u.kt)("i",null,"Transaction Essence"),".")))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"BLS Signature"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 1")," to denote a ",(0,u.kt)("i",null,"BLS Signature"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"The signature signing the serialized ",(0,u.kt)("i",null,"Transaction Essence"),".")))))))),(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Reference Unlock Block"),(0,u.kt)("blockquote",null,"References a previous unlock block in order to substitute the duplication of the same unlock block data for inputs which unlock through the same data."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Unlock Type"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"value 1")," to denote a ",(0,u.kt)("i",null,"Reference Unlock Block"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Reference"),(0,u.kt)("td",null,"uint16"),(0,u.kt)("td",null,"Represents the index of a previous unlock block."))))))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.5:")," Transaction payload."),(0,u.kt)("h3",{id:"2353-fpc-statement"},"2.3.5.3 FPC Statement"),(0,u.kt)("p",null,"Opinions on conflicts of transactions and timestamps of the messages, mainly issued by high mana nodes. Details regarding FPC see ",(0,u.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.3FastProbabilisticConsensus"},"Section 6.3 - Fast Probabilistic Consensus")," specification."),(0,u.kt)("p",null,"The Table 2.3.6 describes the entirety of a ",(0,u.kt)("i",null,"FPC statement"),"'s serialized form."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the FPC statement payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"2")," to denote a ",(0,u.kt)("i",null,"FPC statement Payload"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the FPC statement payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Conflicts Count"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The number of conflicts proceeding.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Conflicts ",(0,u.kt)("code",null,"optOneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Conflict"),(0,u.kt)("blockquote",null,"Describes a voting details in a given round for a transaction conflict."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"TransactionID"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The ID of the conflicting transaction.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Opinion"),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Represents the node's opinion value over the conflict in a given round."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Value"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The node's opinion value in a given round.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Round"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The round number.")))))))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Timestamps Count"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The number of timestamp voting proceeding.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Timestamps ",(0,u.kt)("code",null,"optOneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Timestamp"),(0,u.kt)("blockquote",null,"Describes the voting details over the timestamp for a given message and round."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"MessageID"),(0,u.kt)("td",null,"ByteArray[32]"),(0,u.kt)("td",null,"The ID of the message that contains the timestamp.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Opinion"),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Represents the node's opinion value over the conflict in a given round."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Value"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The node's opinion value in a given round.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Round"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The round number."))))))))))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.6:")," FPC statement."),(0,u.kt)("h3",{id:"2354-drng-beacon-payloads"},"2.3.5.4 dRNG Beacon Payloads"),(0,u.kt)("p",null,"Messages that contain randomness (issued by the dRNG committee nodes). A single ",(0,u.kt)("inlineCode",{parentName:"p"},"Beacon")," message is not sufficient to reveal the random number. Instead, ",(0,u.kt)("inlineCode",{parentName:"p"},"sigThreshold")," or more ",(0,u.kt)("inlineCode",{parentName:"p"},"Beacon")," messages are needed for the random number to be revealed. To recover the random number from the individual ",(0,u.kt)("inlineCode",{parentName:"p"},"Beacon")," messages, all nodes in the network would need to perform Lagrange interpolation. To avoid that, the committee nodes produce a ",(0,u.kt)("inlineCode",{parentName:"p"},"CollectiveBeacon"),", which contains a pre-computed random number (meaning that the committee nodes perform the Lagrange interpolation on their own). More information in ",(0,u.kt)("a",{parentName:"p",href:"/IOTA-2.0-Research-Specifications/6.5dRNG"},"Section 6.5 - Distributed Random Number Generator"),".\nThe Table 2.3.7 describes the dRNG ",(0,u.kt)("inlineCode",{parentName:"p"},"Beacon")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"CollectiveBeacon")," payload's serialized form."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"6")," to denote a ",(0,u.kt)("i",null,"Collective Beacon")," payload or to ",(0,u.kt)("strong",null,"5")," for ",(0,u.kt)("i",null,"Beacon")," payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"InstanceID"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The identifier of the dRNG instance."))),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"dRNG subpayload ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"TypeBeacon"),(0,u.kt)("blockquote",null,"Defines payload data for Beacon payload type."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Round"),(0,u.kt)("td",null,"uint64"),(0,u.kt)("td",null,"The round of the current beacon.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"PartialPK"),(0,u.kt)("td",null,"ByteArray[96]"),(0,u.kt)("td",null,"The public key of the issuer.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"PartialSignature"),(0,u.kt)("td",null,"ByteArray[96]"),(0,u.kt)("td",null,"The collective signature of the current beacon.")))),(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"TypeCollectiveBeacon"),(0,u.kt)("blockquote",null,"Defines payload data for CollectiveBeacon payload type."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Round"),(0,u.kt)("td",null,"uint64"),(0,u.kt)("td",null,"The round of the current beacon.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"PrevSignature"),(0,u.kt)("td",null,"ByteArray[96]"),(0,u.kt)("td",null,"The collective signature of the previous beacon.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature"),(0,u.kt)("td",null,"ByteArray[96]"),(0,u.kt)("td",null,"The collective signature of the current beacon.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"DistributedPK"),(0,u.kt)("td",null,"ByteArray[48]"),(0,u.kt)("td",null,"The distributed public key."))))))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.7 dRNG:")," beacon payload."),(0,u.kt)("h3",{id:"2355-drng-application-message"},"2.3.5.5 dRNG Application Message"),(0,u.kt)("p",null,"A message used by a node to declare its willingness to participate in the committee selection process. Any node can issue an application message. However, low mana nodes are unlikely to be selected; hence, they can decide to not take part in sending application messages. The payload's serialized form is described in Table 2.3.8."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"3")," to denote a ",(0,u.kt)("i",null,"Application Message")," payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"InstanceID"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The identifier of the dRNG instance.")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.8:")," dRNG application message payload."),(0,u.kt)("h3",{id:"2356-drng-dkg-payload"},"2.3.5.6 dRNG DKG Payload"),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"Deal messages")," exchanged to produce a public/private collective key during the DKG phase (Table 2.3.9). The ",(0,u.kt)("inlineCode",{parentName:"p"},"Deal messages")," are issued by the nodes that qualified for the dRNG committee participation ","."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"4")," to denote a ",(0,u.kt)("i",null,"Deal Message")," payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"InstanceID"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The identifier of the dRNG instance.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"FromIndex"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The index of the dealer.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ToIndex"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The index of the verifier.")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Deal ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"EncryptedDeal"),(0,u.kt)("blockquote",null,"An encrypted share struct."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Dhkey"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"An ephemeral Diffie-Hellman key.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Nonce"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"The nonce used in AES-GCM.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"EncryptedShare"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"The ciphertext of the share.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Threshold"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The threshold of the secret sharing protocol (decided during committee selection).")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Commitments"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null,"The commitments of the polynomial used to derive the share."))))))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.9:")," dRNG DKG payload."),(0,u.kt)("h3",{id:"2357-salt-declaration-payload"},"2.3.5.7 Salt Declaration Payload"),(0,u.kt)("p",null,"The salt declaration payload is used by nodes to declare their initial salt. In a salt declaration message, the declaring node includes the fields specified in Table 2.3.10."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Name"),(0,u.kt)("th",null,"Type"),(0,u.kt)("th",null,"Description")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Size"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The size of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Payload Type"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"Set to ",(0,u.kt)("strong",null,"7")," to denote a ",(0,u.kt)("i",null,"Salt declaration"),".")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Version"),(0,u.kt)("td",null,"uint8"),(0,u.kt)("td",null,"The version of the payload.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"NodeID"),(0,u.kt)("td",null,"uint32"),(0,u.kt)("td",null,"The declaring node ID (which may be different from the node ID of the issuer of the message).")),(0,u.kt)("tr",null,(0,u.kt)("td",{valign:"top"},"Salt ",(0,u.kt)("code",null,"oneOf")),(0,u.kt)("td",{colspan:"2"},(0,u.kt)("details",{open:"true"},(0,u.kt)("summary",null,"Salt"),(0,u.kt)("blockquote",null,"The public salt of the requester defined."),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Name")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Type")),(0,u.kt)("td",null,(0,u.kt)("b",null,"Description"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Bytes"),(0,u.kt)("td",null,"ByteArray"),(0,u.kt)("td",null," The value of the salt.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ExpTime"),(0,u.kt)("td",null,"time"),(0,u.kt)("td",null,"The expiration time of the salt.")))))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Timestamp"),(0,u.kt)("td",null,"time"),(0,u.kt)("td",null,"The timestamp of the payload, which shall be close to the timestamp of its containing message.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"Signature"),(0,u.kt)("td",null,"test"),(0,u.kt)("td",null,"The node signature, that ensures all 'redeclarations' would be malicious."))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.10:")," Salt declaration payload."),(0,u.kt)("h3",{id:"2358-indexations-payload"},"2.3.5.8 Indexations payload"),(0,u.kt)("p",null,"Allows the addition of an index to the encapsulating message, as well as some arbitrary data.\nNodes will expose an API that will enable the querying of messages by the index.\nAdding those capabilities may open nodes to DOS attack vectors:"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"Proliferation of index keys that may blow up the node's DB"),(0,u.kt)("li",{parentName:"ol"},"Proliferation of messages associated with the same index")),(0,u.kt)("p",null,"Node implementations may provide weak guarantees regarding the completion of indexes to address the above scenarios."),(0,u.kt)("p",null,"Besides the index, the payload will also have a data field.\nA message that has been attached to the Tangle has several useful properties: verifying that the content of the data did not change\nand determining the approximate time it was published by checking timestamps. If the payload will be incorporated under\nthe ",(0,u.kt)("inlineCode",{parentName:"p"},"signed transaction payload"),", the content will be signed as well."),(0,u.kt)("p",null,"The structure of the payload is presented in Table 2.3.11."),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Name"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Description"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Size"),(0,u.kt)("td",{parentName:"tr",align:null},"uint32"),(0,u.kt)("td",{parentName:"tr",align:null},"The size of the payload.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Payload Type"),(0,u.kt)("td",{parentName:"tr",align:null},"uint32"),(0,u.kt)("td",{parentName:"tr",align:null},"Set to ",(0,u.kt)("strong",null,"8")," to denote an ",(0,u.kt)("i",null,"Indexation payload"),".")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Version"),(0,u.kt)("td",{parentName:"tr",align:null},"uint8"),(0,u.kt)("td",{parentName:"tr",align:null},"The version of the payload.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Index"),(0,u.kt)("td",{parentName:"tr",align:null},"ByteArray"),(0,u.kt)("td",{parentName:"tr",align:null},"The index key of the message.")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"Data"),(0,u.kt)("td",{parentName:"tr",align:null},"ByteArray"),(0,u.kt)("td",{parentName:"tr",align:null},"Data we are attaching.")))),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Table 2.3.11:")," Indexations payload."),(0,u.kt)("p",null,"Note that ",(0,u.kt)("inlineCode",{parentName:"p"},"index")," field should be 1 to 64 bytes long for the payload to be valid. The ",(0,u.kt)("inlineCode",{parentName:"p"},"data")," may have a length of 0."))}c.isMDXComponent=!0},3905:function(t,l,e){e.d(l,{Zo:function(){return k},kt:function(){return c}});var n=e(67294);function a(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){a(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function d(t,l){if(null==t)return{};var e,n,a=function(t,l){if(null==t)return{};var e,n,a={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(a[e]=t[e]);return a}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var i=n.createContext({}),r=function(t){var l=n.useContext(i),e=l;return t&&(e="function"==typeof t?t(l):o(o({},l),t)),e},k=function(t){var l=r(t.components);return n.createElement(i.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(t,l){var e=t.components,a=t.mdxType,u=t.originalType,i=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),p=r(e),c=a,h=p["".concat(i,".").concat(c)]||p[c]||s[c]||u;return e?n.createElement(h,o(o({ref:l},k),{},{components:e})):n.createElement(h,o({ref:l},k))}));function c(t,l){var e=arguments,a=l&&l.mdxType;if("string"==typeof t||a){var u=e.length,o=new Array(u);o[0]=p;var d={};for(var i in l)hasOwnProperty.call(l,i)&&(d[i]=l[i]);d.originalType=t,d.mdxType="string"==typeof t?t:a,o[1]=d;for(var r=2;r<u;r++)o[r]=e[r];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"}}]);