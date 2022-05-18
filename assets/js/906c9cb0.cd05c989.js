"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[41457],{43937:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],p={description:"How to configure your nodes' peers, neighbors, and auto-peering.",image:"/img/Banner/banner_hornet_peering.png",keywords:["IOTA Node","Hornet Node","configuration","peer","peering","identity","autopeering","explanation"]},d="Peering Configuration",l={unversionedId:"post_installation/peering",id:"post_installation/peering",title:"Peering Configuration",description:"How to configure your nodes' peers, neighbors, and auto-peering.",source:"@site/content/build/hornet/production/documentation/docs/post_installation/peering.md",sourceDirName:"post_installation",slug:"/post_installation/peering",permalink:"/hornet/post_installation/peering",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/mainnet/documentation/content/build/hornet/production/documentation/docs/post_installation/peering.md",tags:[],version:"current",frontMatter:{description:"How to configure your nodes' peers, neighbors, and auto-peering.",image:"/img/Banner/banner_hornet_peering.png",keywords:["IOTA Node","Hornet Node","configuration","peer","peering","identity","autopeering","explanation"]},sidebar:"mySidebar",previous:{title:"Core Configuration",permalink:"/hornet/post_installation/configuration"},next:{title:"How to Run Hornet as a Verifier Node",permalink:"/hornet/post_installation/run_as_a_verifier"}},s={},c=[{value:"Node Identity",id:"node-identity",level:2},{value:"Addressing Peer Neighbors",id:"addressing-peer-neighbors",level:2},{value:"Adding Node Peers",id:"adding-node-peers",level:2},{value:"Finding Neighbors",id:"finding-neighbors",level:2},{value:"Autopeering",id:"autopeering",level:2},{value:"Entry Node",id:"entry-node",level:3},{value:"Low/High Watermark",id:"lowhigh-watermark",level:3}],u={toc:c};function m(e){var n=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peering-configuration"},"Peering Configuration"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hornet Node Peering",src:t(4976).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"The IOTA network is a distributed network. It uses a gossip protocol to broadcast data among IOTA nodes. To participate in a network, each node has to establish a secure connection to other nodes in the network (to its peer neighbors), and mutually exchange messages."),(0,o.kt)("h2",{id:"node-identity"},"Node Identity"),(0,o.kt)("p",null,"Each node can be uniquely identified by a ",(0,o.kt)("inlineCode",{parentName:"p"},"peer identity"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Peer identity")," (also called ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId"),") is represented by a public\nand private key pair. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," is a cryptographic hash of a peer's public key, the ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," represents a verifiable link between the given peer and its public key. It enables individual peers to establish a secure communication channel as the hash can be used to verify an identity of the peer."),(0,o.kt)("p",null,"When Hornet is started for the first time, it will automatically generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," and save the identity's private key in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./p2pstore/identity.key")," file. Hornet will keep the generated identity between subsequent restarts."),(0,o.kt)("p",null,"Each time Hornet starts, the ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," is written to stdout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'2021-08-23T17:17:50Z    INFO      P2P       WARNING: never share your "p2pstore" folder as it contains your node\'s private key!\n2021-08-23T17:17:50Z    INFO      P2P       stored new private key for peer identity under "p2pstore/identity.key"\n2021-08-23T17:17:50Z    INFO      P2P     peer configured, ID: 12D3KooWQPA5woZRTT9ExAsq6gRrcPqf3bVn5M5taopJ5Uvhw4iz\n\n')),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," is an essential part of your ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," used to configure neighbors. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/dns/example.com/tcp/15600/p2p/12D3KooWHiPg9gzmy1cbTFAUekyLHQKQKvsKmhzB7NJ5xnhK4WKq"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWHiPg9gzmy1cbTFAUekyLHQKQKvsKmhzB7NJ5xnhK4WKq")," corresponds to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId"),". Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," is also visible on the start page of the dashboard."),(0,o.kt)("p",null,"However, you can pre-generate the identity if you want. This way, you can pre-communicate it to your peers before you even start your node."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"p2pidentity-gen")," CLI tool to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," which generates a private key file and logs the output to stdout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./hornet tools p2pidentity-gen\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Your p2p private key (hex):   64166cc2627c369283cb1dd8412b6259232653611a3ae5cfb52398c23cfaead76af7a3cb775895046b9f28f2cf2b4150a9fd5dfd0ecf5c8d94529818578f40a2\nYour p2p public key (hex):    6af7a3cb775895046b9f28f2cf2b4150a9fd5dfd0ecf5c8d94529818578f40a2\nYour p2p public key (base58): 8CZELJwB3aBzxJgnLMvvt1FirAwNN6jif9LavYTNHCty\nYour p2p PeerID:              12D3KooWH1vQ5SWtEUTVNCCCxxgGeoLZLVz1PnpCcjhcJXcGB9cu\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always take care of your ",(0,o.kt)("inlineCode",{parentName:"p"},"./p2pstore/identity.key")," file, since it contains the private key to your node's identity."))),(0,o.kt)("p",null,"You can find more information on the ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/peer-id/"},"libp2p docs page"),"."),(0,o.kt)("h2",{id:"addressing-peer-neighbors"},"Addressing Peer Neighbors"),(0,o.kt)("p",null,"To communicate to your peer neighbors, you will need an address to reach them. For that, Hornet uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiAddresses")," format (also known as ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"multiAddr")," is a convention on how to encode multiple layers of addressing information into a single path structure that is future-proof. Basically, ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," combines several pieces of information in a single human-readable and machine-optimized string, including network protocol and ",(0,o.kt)("a",{parentName:"p",href:"#node-identity"},(0,o.kt)("inlineCode",{parentName:"a"},"PeerId")),"."),(0,o.kt)("p",null,"For example, a node is reachable using IPv4 ",(0,o.kt)("inlineCode",{parentName:"p"},"100.1.1.1")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},"15600")," and its ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerId"),"\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWHjcCgWPnUEP8wNdbL2fx63Cmosk16xyZ25iUZagxmHb4"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," encoding of this information would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"/ip4/100.1.1.1/tcp/15600/p2p/12D3KooWHjcCgWPnUEP8wNdbL2fx63Cmosk16xyZ25iUZagxmHb4\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Consider how ",(0,o.kt)("inlineCode",{parentName:"p"},"ip4")," is used. A common mistake is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"ipv4"),"."))),(0,o.kt)("p",null,"If a node is reachable using a DNS name (for example ",(0,o.kt)("inlineCode",{parentName:"p"},"node01.iota.org"),"), then the given ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"/dns/node01.iota.org/tcp/15600/p2p/12D3KooWHjcCgWPnUEP8wNdbL2fx63Cmosk16xyZ25iUZagxmHb4\n")),(0,o.kt)("p",null,"You will need to find out your own ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," to give to your peers for neighboring. To do so, combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"peerId")," you received\nfrom the stdout when the Hornet node started up (or which was shown via the ",(0,o.kt)("inlineCode",{parentName:"p"},"p2pidentity-gen")," CLI tool), and your\nconfigured ",(0,o.kt)("inlineCode",{parentName:"p"},"p2p.bindAddress"),". Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"/ip4/<ip_address>"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"/dns/<hostname>")," segments with the actual information."),(0,o.kt)("p",null,"You can find more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/addressing/"},"libp2p docs page"),"."),(0,o.kt)("h2",{id:"adding-node-peers"},"Adding Node Peers"),(0,o.kt)("p",null,"Once you know your node's own ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr"),", it can be exchanged with other node owners to establish a mutual peer connection. We recommended several peer neighbors between 4-6 to get some degree of redundancy."),(0,o.kt)("h2",{id:"finding-neighbors"},"Finding Neighbors"),(0,o.kt)("p",null,"You can join the official IOTA Discord server and the ",(0,o.kt)("inlineCode",{parentName:"p"},"#nodesharing")," channel. There, you will be able to describe your node location (Europe,\nGermany, Asia, etc.), with your allocated high watermark resources and ask for neighbors."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not publicly disclose your node ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr")," to all readers but wait for an individual direct chat."))),(0,o.kt)("p",null,"You can add peers using the Hornet ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/post_installation#dashboard"},"dashboard"),". To do so, go to ",(0,o.kt)("em",{parentName:"p"},"Peers")," and click on ",(0,o.kt)("em",{parentName:"p"},"Add Peer"),". You can also add peers on the ",(0,o.kt)("a",{parentName:"p",href:"/hornet/post_installation/peering"},"peering.json")," file."),(0,o.kt)("p",null,"You can change the path or name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"peering.json")," file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--peeringConfig")," argument while\nexecuting the ",(0,o.kt)("inlineCode",{parentName:"p"},"hornet")," executable."),(0,o.kt)("p",null,"This is ",(0,o.kt)("inlineCode",{parentName:"p"},"peering.json")," example, with ",(0,o.kt)("inlineCode",{parentName:"p"},"ip4"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ip6")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peers": [\n    {\n      "alias": "Node1",\n      "multiAddress": "/ip4/192.0.2.0/tcp/15600/p2p/12D3KooWCKWcTWevORKa2KEBputEGASvEBuDfRDSbe8t1DWugUmL"\n    },\n    {\n      "alias": "Node2",\n      "multiAddress": "/ip6/2001:db8:3333:4444:5555:6666:7777:8888/tcp/16600/p2p/12D3KooWJDqHjhd8us8XdbKy1Adp5nV6XoI7XhjZbPWAfbAbkLbH"\n    },\n    {\n      "alias": "Node3",\n      "multiAddress": "/dns/example.com/tcp/15600/p2p/12D3KooWN7F4eRAYbavnasME8WGXwkrpzWWoZSXfNSEpudmWi9YP"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"autopeering"},"Autopeering"),(0,o.kt)("p",null,"Hornet also supports automatically finding peers through the ",(0,o.kt)("em",{parentName:"p"},"autopeering")," module. To minimize service distribution in case your autopeered peers are flaky, we recommend you only use autopeering if you have at least four static peers."),(0,o.kt)("p",null,"Autopeering is disabled by default. If you want to enable it, add ",(0,o.kt)("inlineCode",{parentName:"p"},'"Autopeering"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"node.enablePlugins"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The autopeering plugin will disclose your public IP address to possibly all nodes and entry points.\nDo not enable this plugin if you do not want this to happen!"))),(0,o.kt)("p",null,"Your node will use the specified entry nodes under ",(0,o.kt)("inlineCode",{parentName:"p"},"p2p.autopeering.entryNodes")," to find new peers. ",(0,o.kt)("inlineCode",{parentName:"p"},"entryNodes")," are also encoded as ",(0,o.kt)("inlineCode",{parentName:"p"},"multiaddr"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/ip4/45.12.34.43/udp/14626/autopeering/8CZELJwB3aBzxJgnLMvvt1FirAwNN6jif9LavYTNHCty\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"/autopeering")," portion defines the base58 encoded Ed25519 public key."),(0,o.kt)("p",null,"By default, Hornet will peer up to four autopeered peers and initiate a gossip protocol with them. Autopeered peers are not subject to connection trimming, the same way as mutually tethered peers are not either."),(0,o.kt)("h3",{id:"entry-node"},"Entry Node"),(0,o.kt)("p",null,"If you want to run your own node as an autopeering entry node, you should enable ",(0,o.kt)("inlineCode",{parentName:"p"},"p2p.autopeering.runAsEntryNode"),". The base58 encoded public key is in the output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"p2pidentity-gen")," Hornet tool. Alternatively, if you already have an identity in a ",(0,o.kt)("inlineCode",{parentName:"p"},"./p2pstore"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"p2pidentity-extract")," Hornet tool to extract it."),(0,o.kt)("h3",{id:"lowhigh-watermark"},"Low/High Watermark"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"p2p.connectionManager.highWatermark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"p2p.connectionManager.lowWatermark"),' configuration options define "watermark" points. Watermark points can be considered like a filling basin where if the ',(0,o.kt)("inlineCode",{parentName:"p"},"highWatermark")," is reached, water will be drained until it reaches the ",(0,o.kt)("inlineCode",{parentName:"p"},"lowWatermark")," again. Similarly, the connection manager within Hornet will start trimming away connections to peers if ",(0,o.kt)("inlineCode",{parentName:"p"},"highWatermark")," peers are connected until it reaches ",(0,o.kt)("inlineCode",{parentName:"p"},"lowWatermark")," count of peers. These watermarks exist for a certain buffer number of peers to be connected, which will not necessarily be targeted by the gossip protocol."))}m.isMDXComponent=!0},4976:function(e,n,t){n.Z=t.p+"assets/images/banner_hornet_peering-38c216346fcd5ad0f6280d4ffa8978fa.png"},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,r(r({ref:n},s),{},{components:t})):a.createElement(h,r({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);