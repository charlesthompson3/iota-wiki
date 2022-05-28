"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23994],{74375:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={description:"History behind the development of the Stronghold Engine library that reflects upon previous revisions and the lessons learnt.",image:"/img/logo/Stronghold_icon.png",keywords:["development","history","crate","snapshot","transaction","vault"]},l="Stronghold Engine Retrospective Document",h={unversionedId:"retrospective",id:"retrospective",title:"Stronghold Engine Retrospective Document",description:"History behind the development of the Stronghold Engine library that reflects upon previous revisions and the lessons learnt.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/retrospective.md",sourceDirName:".",slug:"/retrospective",permalink:"/stronghold.rs/retrospective",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation/content/build/stronghold.rs/develop/documentation/docs/retrospective.md",tags:[],version:"current",frontMatter:{description:"History behind the development of the Stronghold Engine library that reflects upon previous revisions and the lessons learnt.",image:"/img/logo/Stronghold_icon.png",keywords:["development","history","crate","snapshot","transaction","vault"]},sidebar:"mySidebar",previous:{title:"Stronghold Engineering Specification",permalink:"/stronghold.rs/specs/engineering"},next:{title:"Contribute to the project",permalink:"/stronghold.rs/contribute"}},d={},c=[{value:"Authors: Tensor Programming - \tensor@tauri.studio",id:"authors-tensor-programming---tensortauristudio",level:4},{value:"Addendum",id:"addendum",level:2}],u={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stronghold-engine-retrospective-document"},"Stronghold Engine Retrospective Document"),(0,r.kt)("h4",{id:"authors-tensor-programming---tensortauristudio"},"Authors: Tensor Programming - \\",(0,r.kt)("a",{parentName:"h4",href:"mailto:tensor@tauri.studio"},"tensor@tauri.studio")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Abstract:"))),(0,r.kt)("p",null,"This document will detail the development of the Stronghold Engine library for IOTA's Stronghold project. It will briefly touch upon the different revisions of this project and the lessons that were learned from each revision. It will also discuss some of the rationale with regards to the implementation decisions that were made along the way. This document is meant to be a high level overview but it will contain some lower level explanations where appropriate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Development History and Breakdown:"))),(0,r.kt)("p",null,"Stronghold Engine originally started its life as a full featured security platform. The original impetus for building the software involved the idea of a Virtual Machine/Runtime which would allow a user to store data securely.  The entire state of the VM could be offloaded into a Snapshot/Image file ",(0,r.kt)("em",{parentName:"p"},"a le smalltalk"),". This implementation was meant to contain a few other features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P2P networking layer"),(0,r.kt)("li",{parentName:"ul"},"Secret sharing protocols"),(0,r.kt)("li",{parentName:"ul"},"ASN1/X509 libraries"),(0,r.kt)("li",{parentName:"ul"},"hybrid logical clocks"),(0,r.kt)("li",{parentName:"ul"},"homomorphic cryptography"),(0,r.kt)("li",{parentName:"ul"},"A Cryptographic Primitives DSL (Domain Specific Language)"),(0,r.kt)("li",{parentName:"ul"},"CRDTs (conflict replicated data types)")),(0,r.kt)("p",null,"The Elixir programming language was initially picked because it was a natural choice for these concepts. Elixir's macro system would allow the DSL to be as flexible and simple as needed to be. Also, OTP contains native libraries for dealing with keys and other cryptographic systems. Elixir\u2019s actor model and the existing Erlang Virtual Machine (BEAM) could be leveraged in such a way that it could stand in for the virtual machine. Elixir also has an intuitive means of communicating with lower level languages such as Rust, C, and C++ allowing modules to be written in other languages."),(0,r.kt)("p",null,"Unfortunately, this revision had to be scrapped because it would have been difficult to run the daemon on mobile devices.  Mobile applications are less available compared to desktop or web apps due to restrictions from their OSes.  Also, Elixir has little support for Android and almost no support for iOS.  Solutions such as Lumen and JInterface were considered but a choice was made to scrap the project due to its development costs."),(0,r.kt)("p",null,"The project went back to the drawing board and Rust was chosen as the primary language for the new revision. A prototype was quickly built out as a simple secret storage system. The system contained few of the original ideas and it offloaded the data into JSON format before encrypting it with OpenSSL. The main purpose of this build was to audit the potential of Rust in this domain. Rust was found to be well suited to the use case of this system. While pieces of the language would have made a couple of the original ideas more difficult to implement, Rust did open the door to other features which would have been harder to build with Elixir."),(0,r.kt)("p",null,"This second build transformed into a memory database system. This storage layer was made to be secure, transactional, and ACID based with a deduplicated and verifiable data storage memory caching system. Features included:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DEFLATE, LZ4 and LXMA compression"),(0,r.kt)("li",{parentName:"ul"},"XChaCha20-Poly1305 encryption via sodiumoxide"),(0,r.kt)("li",{parentName:"ul"},"ZPAQ chunking for Data Deduplication"),(0,r.kt)("li",{parentName:"ul"},"AEAD checksum metadata system")),(0,r.kt)("p",null,"Data could be stored in multiple formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"binary blobs"),(0,r.kt)("li",{parentName:"ul"},"persistent maps"),(0,r.kt)("li",{parentName:"ul"},"addressable hashing buckets"),(0,r.kt)("li",{parentName:"ul"},"content versioned objects"),(0,r.kt)("li",{parentName:"ul"},"virtual file system")),(0,r.kt)("p",null,"Ultimately there were some problems with this revision; it was very opinionated, dependency heavy, and it ran like a full blown database solution rather than a security platform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Background on the Final Revision:"))),(0,r.kt)("p",null,"A couple important lessons were learned from building the three different revisions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The storage system didn\u2019t need to be complicated, it just needed to be secure."),(0,r.kt)("li",{parentName:"ul"},"It would be better if the abstractions were not opinionated and were open to extension."),(0,r.kt)("li",{parentName:"ul"},"The system should include a small dependency footprint for IoT and Embedded support."),(0,r.kt)("li",{parentName:"ul"},"There was no reason to reinvent the wheel as many of the features could be implemented via existing libraries and tools.")),(0,r.kt)("p",null,"Stronghold Engine needed to be small, extensible, and secure if it was going to fit the use case that IOTA wanted and doing things this way meant that many of the features could be generalized into interfaces. Rather than a full scale platform, Stronghold Engine would be better suited as a set of modular libraries. A final revision was mapped out as a library that was split into multiple crates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Primitives Crate"),(0,r.kt)("li",{parentName:"ul"},"Random Crate"),(0,r.kt)("li",{parentName:"ul"},"Crypto Crate"),(0,r.kt)("li",{parentName:"ul"},"Vault Crate"),(0,r.kt)("li",{parentName:"ul"},"Snapshot Crate")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Primitives Crate:"))),(0,r.kt)("p",null,"The core principle behind the primitives crate hinged on implementing a bunch of traits (interfaces) which could be used to define cryptographic primitives. Each primitive contains an info data structure for describing the constraints of the algorithm and at least one trait. These primitives range from Random Number Generators to Cipher Algorithms, Hashing Algorithms and Key Derivation Functions. In this way, a developer should be able to slot in a bit of logic and have it work with the rest of the library."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Random Crate:"))),(0,r.kt)("p",null,"The random crate is exactly as it sounds; it uses the RNG (random number generator) traits defined in the primitives crate to implement logic for a secure random number generator. A little bit of C code was used when creating this crate because all of the major platforms already have battle tested RNG libraries. This C code is bridged with Rust using CC, a ",(0,r.kt)("inlineCode",{parentName:"p"},"build.rs")," file and Rust\u2019s FFI (foreign function interface).  Thus far, random contains logic for Windows, MacOS, iOS, Linux, and a cavalcade of BSD flavors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Crypto Crate:"))),(0,r.kt)("p",null,"The Crypto crate contains five encryption algorithms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Poly1305"),(0,r.kt)("li",{parentName:"ul"},"ChaCha20"),(0,r.kt)("li",{parentName:"ul"},"XChaCha20"),(0,r.kt)("li",{parentName:"ul"},"ChaCha20-Poly1305"),(0,r.kt)("li",{parentName:"ul"},"XChaCha20-Poly1305")),(0,r.kt)("p",null,"Poly1305 and ChaCha20 were defined first which gave way to the other three variations. The internal rules were defined using Rust macros so that they would be composable. Each of these algorithms also implements some of the traits from the primitives crate which makes them extremely easy to swap out and change should the need arise."),(0,r.kt)("p",null,"A fuzz client was created to match the results of the library\u2019s XChaCha20-Poly1305 and ChaCha20-Poly1305 algorithms to libsodium\u2019s counterparts. The fuzzer has been run with up to ten billion inputs and there hasn\u2019t been any reported variance between the implementations. XChaCha20-Poly1305 and ChaCha20-Poly1305 were used because they also verify the other algorithms indirectly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Vault Crate:"))),(0,r.kt)("p",null,"The Vault crate contains logic and abstractions for the storage layer of this system. Importantly, the storage layer doesn\u2019t actually define a standard shape for storing the data, instead it defines a method of reading, writing and viewing the data and the system may use any in-memory data collection type. For instance, the Proof of Concept Command Line Tool uses a hashmap wrapped in a RwLock and an Arc as its memory based data storage and the data itself is cached as bytes in that hashmap. The secure data should not be saved in any kind of persistent database; instead persistence is achieved through snapshots as detailed below."),(0,r.kt)("p",null,"Vault defines a format of ordered chains where in each Record contains an ID, a Transaction, some metadata, a counter and the sealed data. Each of these chains starts out with a single Initial Transaction type that contains no data aside from the owner's ID. Every proceeding transaction must be a direct descendant of this transaction for it to be valid. Also, the counter is incremented every time an event occurs on the data. In this way, the system can determine which piece of data is the latest version while still maintaining a history of the data\u2019s state over time."),(0,r.kt)("p",null,"Because the data is versioned, a chain should ideally maintain data that is related. For example, if a key is placed into the first Data Transaction of a chain, the proceeding transactions should be metadata or changes to the key. Revocation Transactions can also be created to revoke a transaction.  In this way, the vault can stage a proposed deletion for some transaction before the data is deleted. When a garbage collection is preformed, the Revocation transaction and the corresponding Data Transaction are removed from the vault."),(0,r.kt)("p",null,"The data in the Vault can be encrypted using either symmetric encryption or asymmetric encryption. With symmetric encryption, a key is assigned to each chain and that key is needed to unlock the data.  With asymmetric encryption, the key can be defined as a private key and each of the transaction\u2019s IDs could be a public key. A secure random nonce is generated and the data is sealed using the key and the nonce. The nonce is then concatenated to the sealed bytes where it is stored in the data structure. Also, the data in each transaction is a non-descript vector of bytes. As a result of this, it is entirely possible to a complex data structure into the Transaction so long as it can be converted to a binary format."),(0,r.kt)("p",null,"A Base64 encoder/decoder was also created. This base64 encoder uses a url/file safe character set. Information regarding this character set can be found in RFC 4648 from the internet society. As a small side note, if an ID contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," character it can cause issues for the CLI. Wrapping the ID in quotes should resolve this issue though."),(0,r.kt)("p",null,"The Vault crate includes a fuzz client. The main purpose of this fuzzer is to test the crate and see how it holds up to random inputs and random transactions. The Fuzzer generates a key and then creates a specified amount of clients. Each client is given a unique random ID along with its own data chain. The clients perform random transactions upon their chains based on a value generated by the random number generator. Also a machine object has the ability to randomly take ownership of a foreign chain at any time. Two global storage hashmaps are created and after a specified amount of cycles, the fuzz client checks to see if they are still consistent. This fuzz client was tested for a stretch of 2 days without issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Snapshot Crate:"))),(0,r.kt)("p",null,"The final major crate of this library suite is the snapshot crate.  This crate defines a method for storing the state of the system into a file format. This file can be transferred between different Stronghold Engine devices. This file format can be extended and changed as needed to make it more secure and more appropriate for the system being used. The snapshot layer currently also uses sodiumoxide\u2019s secretstream algorithm which uses XChaCha20-Poly1305 to encrypt and decrypt the data.  A user\u2019s password is required to encrypt and decrypt the snapshot."),(0,r.kt)("p",null,"Data is read into the snapshot crate by way of a byte buffer.  A single hexadecimal signature is written to the file\u2019s head along with the file\u2019s version number. A salt is generated and it is used along with the user\u2019s inputted password to derive a unique key. The Key is used to create a header and a push stream; the header is written to the file and the push stream is used to encrypt the incoming data. The databuffer\u2019s data is read in as 256 byte chunks and it is encrypted in the stream before it is written to the file. Decryption of the snapshot follows the opposite steps: a user supplies a password, the salt is read from the file and the password and salt are used to derive a key.  The header is then read from the file and used with the key to generate a pull stream.  As the data is fed through this stream and it is decrypted back into a plaintext format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Command Line Proof of Concept:"))),(0,r.kt)("p",null,"To show off the features of this set of libraries, an MVP command line tool was created. This CLI is bare bones and based heavily off of the vault fuzz client. Its main purpose is to show off the libraries in a minimal yet meaningful manner. The structure of this application follows a kind of server/client pattern.  The state of the database is maintained in a hashmap wrapped in a RwLock and an Arc which is globally available via a lazy static macro. On the frontend, there is a client which contains the client ID and a Vault structure.  The Vault structure contains the client\u2019s key and a data view so that it can interact with the data. The key implements a provider which inherits from the box provider trait and this is where the encryption algorithm is defined. The client and the backend are connected through a simple connection structure with some basic logic to access the state hashmap."),(0,r.kt)("p",null,"Unlike the original vault fuzz client, this application needs to upload and offload its data to and from a snapshot. To achieve this, a snapshot structure was made; it consists of the client\u2019s id and key as well as the database\u2019s hashmap. Each time a user runs this CLI they must submit a password to unlock the snapshot so that the state can be loaded into the application. The id and key are used to create a new client and a garbage collection operation is executed to recreate the data chain from the incoming data. This operation creates a new Initial Transaction and it iterates through each of the transactions to verify that they are owned by the owner.  Any foreign data is discarded in this process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Future Development Options:"))),(0,r.kt)("p",null,"A few of the original ideas never made it into the final revision of the Engine but this is for the best. There are still a couple ways forward for this library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secondary Keys/Passwords - Currently the snapshot can only be decrypted with a single password. More passwords could be added to create a blob of permissioned data."),(0,r.kt)("li",{parentName:"ul"},"Homomorphic Encryption - If the data in the snapshot and the system used a Homomorphic encryption standard; operations could be performed without decrypting the data first."),(0,r.kt)("li",{parentName:"ul"},"Key and Snapshot separation - Right now in the CLI example, the secret key is encrypted with the snapshot. In the future it might be better to keep that key separate from the snapshot. An encrypted archive could be used to combine a key file with the snapshot for instance."),(0,r.kt)("li",{parentName:"ul"},"Asymmetric encryption - This was mentioned above; the IDs on the data could be public keys derived from the secret key on the vault."),(0,r.kt)("li",{parentName:"ul"},"Multi-bucket storage.  Since each vault is a set of versioned data, the data in a vault should be related. As such it makes sense to add an extension to allow for a single user to maintain multiple vaults."),(0,r.kt)("li",{parentName:"ul"},"Accommodations for more complex data structures inside of the transactions. The ability to store an entire hashmap in a single transaction is possible right now but other complex data structures could see support as well."),(0,r.kt)("li",{parentName:"ul"},"Hashed Owner IDs. Currently, all transactions that are owned by a single owner contain the same owner ID. It may be beneficial to instead derive the owner ID of a transaction based off of the owner's secret key, their original ID and the counter.")),(0,r.kt)("p",null,"Most of these concepts could be implemented as independent libraries or by extending the existing crates. An audit should also be performed to make sure that the model is completely safe from attackers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Personal Concluding Thoughts")),(0,r.kt)("p",null,"I found working on this project was a learning experience; it was interesting and a nice change of pace. Developing the Engine forced me to examine aspects of cryptography that I had only barely been exposed to in the past. While I have worked on Cryptocurrency platforms such as Steem, I've never worked with secure data this closely. Some of my initial assumptions were either wrong or incomplete and by the end of this development process I had a much more thorough understanding of cryptography as a whole."),(0,r.kt)("p",null,"I do believe that  Engine is a very strong starting line for the Stronghold platform. The future developers will be able to use it effectively in their projects and I look forward to seeing how they extend it. I thank IOTA for giving me the opportunity to work on this project and I wish them luck going forward."),(0,r.kt)("h2",{id:"addendum"},"Addendum"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Architectural changes"))),(0,r.kt)("p",null,"The Random, Crypto and Primitives crates were removed from the engine in favor of IOTA\u2019s Crypto.rs library.  There were some pain points in implementing crypto.rs due to it being immature at the time but it has now taken over the logic that was delegated to the aforementioned crates. The versioning system was also removed from the engine due to a lack of use by the implementing libraries. The versioning abstraction has now been delegated to the end user for the sake of simplicity and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Location.counter")," API was added to facilitate this. "),(0,r.kt)("p",null,"The Vault logic was completely re-written for the sake of simplifying the core and also increasing the general performance of the library.  Along these lines, a new crate was introduced called Runtime which adds so-called ",(0,r.kt)("inlineCode",{parentName:"p"},"guarded types"),".  The guarded types make it so that any piece of data which is placed into the vault is protected from memory based attacks and other potential misuses. A global allocator was also added to zero out all of the memory when it gets dropped from use. Runtime relies heavily on libsodium for these features. "),(0,r.kt)("p",null,"A new Client was defined which uses the Riker Actor model - though it should be noted that Riker is to be removed in favor of Actix.  The Client provides a generic interface for using the various engine pieces and it was extended with Cryptographic Procedures. These procedures allow implementers to call cryptographic operations on the vault\u2019s internal data without exposing the data. For example, the vault could contain a seed for a wallet; a procedure could be called to generate the secret key and return the public key. "),(0,r.kt)("p",null,"Snapshot was only slightly modified, in that it was given a compression engine; LZ4, and it now uses ephemeral keys rather than direct passwords for the encryption.  A user puts in their password, a key is derived from that password, a shared key is derived from this new key and then it is used to encrypt the data into the snapshot file format. Outside of those changes, the snapshot format is roughly the same as it was before except it now also uses crypto.rs for its encryption algorithms."),(0,r.kt)("p",null,"The final major crate that was added to stronghold is the p2p-communications crate.  The p2p crate uses libp2p to set up the noise protocol and it mirrors the client interface.  This system allows users to trigger procedures on remote strongholds and synchronize their snapshots between these remote systems.  Eventually, they will also offer a borrowing mechanism that uses references to allow remote users to \u201cuse\u201d secrets without having them on their local system. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Future Development Options"))),(0,r.kt)("p",null,"Going forward, the team on stronghold has discussed a couple features which can be written into the library prior to its release. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A DSL for allowing users to define their own procedures using a set of given cryptographic primitives.  This would effectively allow outside users to define their own procedures without exposing the secrets to malicious actors. "),(0,r.kt)("li",{parentName:"ul"},"A set of macros to easily allow devs to add new procedures to the system.  The object of this system would be to make it easier for developers to plug in new procedures without having to create large sweeping changes.  For example, a developer could simply annotate a function and on compilation, the system would generate the appropriate code and boilerplate. "),(0,r.kt)("li",{parentName:"ul"},"Migration from Riker to Actix.  Unfortunately, the Riker actor model library has been left stranded by its contributors. Rather than taking ownership of the library and working to maintain it in the IOTA foundation, a decision was made to move forward with using Actix inside of the stronghold client. "),(0,r.kt)("li",{parentName:"ul"},"Continued development on the p2p crate. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Addendum Concluding Thoughts")),(0,r.kt)("p",null,"Many of the same take-aways mentioned above still apply here. Stronghold, all and all, was a very interesting project to work on. I am confident that the new team will be able to take it forward all the way to release. I am satisfied that I was able to work on this project up until this point and I look forward to seeing how it progresses towards the RC."))}p.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=o,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);