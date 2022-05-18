"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21168],{39288:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={description:"Bee uses the Toml standard as a configuration file. The default configuration file is `config.toml`. You can change the configuration file's path or name  by using the `-c` or `--config` flag.",image:"/img/logo/bee_logo.png",keywords:["REST","API","configuration","Toml","config"]},o="Configuration",d={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Bee uses the Toml standard as a configuration file. The default configuration file is `config.toml`. You can change the configuration file's path or name  by using the `-c` or `--config` flag.",source:"@site/external/bee/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/bee/configuration",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/dev/external/bee/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"Bee uses the Toml standard as a configuration file. The default configuration file is `config.toml`. You can change the configuration file's path or name  by using the `-c` or `--config` flag.",image:"/img/logo/bee_logo.png",keywords:["REST","API","configuration","Toml","config"]},sidebar:"mySidebar",previous:{title:"Using Docker",permalink:"/bee/getting_started/docker"},next:{title:"Set Up a Node",permalink:"/bee/setup_a_node"}},m={},s=[{value:"Node",id:"node",level:2},{value:"Logger",id:"logger",level:2},{value:"Outputs",id:"outputs",level:3},{value:"Network",id:"network",level:2},{value:"Peering",id:"peering",level:4},{value:"Protocol",id:"protocol",level:2},{value:"Coordinator",id:"coordinator",level:3},{value:"public_key_ranges",id:"public_key_ranges",level:4},{value:"Workers",id:"workers",level:3},{value:"REST API",id:"rest-api",level:2},{value:"Snapshot",id:"snapshot",level:2},{value:"Pruning",id:"pruning",level:2},{value:"Storage",id:"storage",level:2},{value:"Storage",id:"storage-1",level:3},{value:"Env",id:"env",level:3},{value:"Tangle",id:"tangle",level:2},{value:"Mqtt",id:"mqtt",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Auth",id:"auth",level:3}],k={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Bee uses the Toml standard as a configuration file. If you are unsure about syntax, you can have a look at the ",(0,l.kt)("a",{parentName:"p",href:"https://toml.io"},"official Toml specifications"),"."),(0,l.kt)("p",null,"The default configuration file is ",(0,l.kt)("inlineCode",{parentName:"p"},"config.toml"),". You can change the configuration file's path or name  by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," flag."),(0,l.kt)("p",null,"For example: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bee -c config_example.toml\n")),(0,l.kt)("h2",{id:"node"},"Node"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"identity"),(0,l.kt)("td",{parentName:"tr",align:"left"},"hex representation of an Ed25519 keypair. Can be generated with the ",(0,l.kt)("inlineCode",{parentName:"td"},"bee p2p-identity")," tool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alias"),(0,l.kt)("td",{parentName:"tr",align:"left"},"alias for your node. Shows up in dashboard"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"bech32_hrp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"network address identifier"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"network_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"network identifier"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,l.kt)("h2",{id:"logger"},"Logger"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"target_width"),(0,l.kt)("td",{parentName:"tr",align:"left"},"width of the target section of a log"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"level_width"),(0,l.kt)("td",{parentName:"tr",align:"left"},"width of the level section of a log"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#outputs"},"outputs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"config for different log filters"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array")))),(0,l.kt)("h3",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"standard stream or file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"level_filter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"log level filter of an output"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"target_filter"),(0,l.kt)("td",{parentName:"tr",align:"left"},"log target filters of an output"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"target_exclusions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"log target exclusions of an output"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"color_enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"output is colored if enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[logger]\ntarget_width = 42\nlevel_width = 5\n[[logger.outputs]]\ncolor_enabled  = true\nname           = "stdout"\nlevel_filter   = "info" # other possible values are: "error", "warn", "info", "debug", "trace"\ntarget_filters = ["bee_network"] \n[[logger.outputs]]\nname              = "error.log"\nlevel_filter      = "error"\ntarget_exclusions = ["bee_network"] \n')),(0,l.kt)("h2",{id:"network"},"Network"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"bind_address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the address/es the networking layer tries binding to"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string","[Multiaddr]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"reconnect_interval_secs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the automatic reconnect interval in seconds for known peers"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max_unknown_peers"),(0,l.kt)("td",{parentName:"tr",align:"left"},"max count of allowed unknown peers"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#peering"},"peering")),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of static peers"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of tables")))),(0,l.kt)("h4",{id:"peering"},"Peering"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"libp2p formatted address(PeerID can be found on the dashboard or in the logs. It starts with ",(0,l.kt)("inlineCode",{parentName:"td"},"12D3"),")"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"alias"),(0,l.kt)("td",{parentName:"tr",align:"left"},"alias of the peer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[network]\nbind_address             = "/ip4/0.0.0.0/tcp/15600"\nreconnect_interval_secs  = 30\nmax_unknown_peers        = 4\n\n[network.peering]\n[[network.peering.peers]]\naddress = "/ip4/192.0.2.0/tcp/15600/p2p/PeerID"\nalias   = "some peer"\n[[network.peering.peers]]\naddress = "/ip6/2001:db8::/tcp/15600/p2p/PeerID"\nalias   = "another peer"\n[[network.peering.peers]]\naddress = "/dns/example.com/tcp/15600/p2p/PeerID"\nalias   = "yet another peer"\n')),(0,l.kt)("h2",{id:"protocol"},"Protocol"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"minimum_pow_score"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the minimum pow score"),(0,l.kt)("td",{parentName:"tr",align:"left"},"float","[f64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#coordinator"},"coordinator")),(0,l.kt)("td",{parentName:"tr",align:"left"},"coordinator configs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#workers"},"workers")),(0,l.kt)("td",{parentName:"tr",align:"left"},"worker configs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"table")))),(0,l.kt)("h3",{id:"coordinator"},"Coordinator"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"public_key_count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number of public keys"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#public_key_ranges"},"public_key_ranges")),(0,l.kt)("td",{parentName:"tr",align:"left"},"public key ranges"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of tables")))),(0,l.kt)("h4",{id:"public_key_ranges"},"public_key_ranges"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,l.kt)("td",{parentName:"tr",align:"left"},"public key"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"start"),(0,l.kt)("td",{parentName:"tr",align:"left"},"start"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"end"),(0,l.kt)("td",{parentName:"tr",align:"left"},"end"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")))),(0,l.kt)("h3",{id:"workers"},"Workers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message_worker_cache"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"status_interval"),(0,l.kt)("td",{parentName:"tr",align:"left"},"status interval in ms"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ms_sync_count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"milestone sync count"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[protocol]\nminimum_pow_score = 4000\nhandshake_window = 10\n[protocol.coordinator]\npublic_key_count  = 2\n[[protocol.coordinator.public_key_ranges]]\npublic_key  = "7205c145525cee64f1c9363696811d239919d830ad964b4e29359e6475848f5a"\nstart       = 0\nend         = 0\n[[protocol.coordinator.public_key_ranges]]\npublic_key  = "e468e82df33d10dea3bd0eadcd7867946a674d207c39f5af4cc44365d268a7e6"\nstart       = 0\nend         = 0\n[[protocol.coordinator.public_key_ranges]]\npublic_key  = "0758028d34508079ba1f223907ac3bb5ce8f6bdccc6b961c7c85a2f460b30c1d"\nstart       = 0\nend         = 0\n[protocol.workers]\nmessage_worker_cache = 10000\nstatus_interval = 10\nms_sync_count = 200\n')),(0,l.kt)("h2",{id:"rest-api"},"REST API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"binding_port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"binding port for rest API"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u16]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"binding_ip_addr"),(0,l.kt)("td",{parentName:"tr",align:"left"},"binding address for rest API"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string","[IpAddr]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"feature_proof_of_work"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enable pow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"white_flag_solidification_timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"white flag solidification timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"public_routes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"API routes which should be public"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"allowed_ips"),(0,l.kt)("td",{parentName:"tr",align:"left"},"list of whitelisted IPs"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string","[IpAddr]")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[rest_api]\nbinding_port          = 14265\nbinding_ip_addr       = "0.0.0.0"\nfeature_proof_of_work = true\npublic_routes         = [\n    "/api/v1/peers",\n    "/api/v1/addresses/:address",\n    "/api/v1/addresses/ed25519/:address",\n    "/health",\n    "/api/v1/info",\n    "/api/v1/messages/:messageId",\n    "/api/v1/messages/:messageId/children",\n    "/api/v1/messages/:messageId/metadata",\n    "/api/v1/messages/:messageId/raw",\n    "/api/v1/messages",\n    "/api/v1/milestones/:milestoneIndex",\n    "/api/v1/milestones/:milestoneIndex/utxo-changes",\n    "/api/v1/outputs/:outputId",\n    "/api/v1/addresses/:address/outputs",\n    "/api/v1/addresses/ed25519/:address/outputs",\n    "/api/v1/peers/:peerId",\n    "/api/v1/peers",\n    "/api/v1/peers/:peerId",\n    "/api/v1/messages",\n    "/api/v1/messages",\n    "/api/v1/tips",\n    "/api/v1/receipts",\n    "/api/v1/receipts/:milestoneIndex",\n    "/api/v1/treasury",\n    "/api/v1/transactions/:transactionId/included-message",\n    "/api/plugins/debug/whiteflag",\n]\nallowed_ips = [\n    "127.0.0.1",\n    "::1"\n]\nwhite_flag_solidification_timeout = 2\n')),(0,l.kt)("h2",{id:"snapshot"},"Snapshot"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"full_path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"path to the full snapshot file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delta_path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"path to the delta snapshot file"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"download_urls"),(0,l.kt)("td",{parentName:"tr",align:"left"},"list of download URLs for the snapshot"),(0,l.kt)("td",{parentName:"tr",align:"left"},"array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"depth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the depth, respectively the starting point, at which a snapshot of the ledger is generated"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"interval_synced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"interval, in milestones, at which snapshot files are created if the node is sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"interval_unsynced"),(0,l.kt)("td",{parentName:"tr",align:"left"},"interval, in milestones, at which snapshot files are created if the node is unsync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[snapshot]\nfull_path         = "./snapshots/alphanet/full_snapshot.bin"\ndelta_path        = "./snapshots/alphanet/delta_snapshot.bin"\ndownload_urls     = [\n  "https://dbfiles.testnet.chrysalis2.com/",\n]\ndepth             = 50\ninterval_synced   = 50\ninterval_unsynced = 1000\n')),(0,l.kt)("h2",{id:"pruning"},"Pruning"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"enable pruning"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of milestone cones to keep in the database"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"prune_receipts"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to delete old receipts data from the database"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"[pruning]\nenabled         = true\ndelay           = 60480\nprune_receipts  = false\n")),(0,l.kt)("h2",{id:"storage"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"path to the database"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_if_missing"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_missing_column_families"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enable_statistics"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"increase_parallelism"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[i32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"optimize_for_point_lookup"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"optimize_level_style_compaction"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"optimize_universal_style_compaction"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_advise_random_on_open"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_allow_concurrent_memtable_write"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_allow_mmap_reads"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_allow_mmap_writes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_atomic_flush"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_bytes_per_sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_compaction_readahead_size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_max_write_buffer_number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[i32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_write_buffer_size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_db_write_buffer_size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_disable_auto_compactions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_unordered_write"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_use_direct_io_for_flush_and_compaction"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#storage-1"},"storage")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_compaction_style"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_compression_type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#env"},"env")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"table")))),(0,l.kt)("h3",{id:"storage-1"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fetch_edge_limit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fetch_index_limit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fetch_output_id_limit"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iteration_budget"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[usize]")))),(0,l.kt)("h3",{id:"env"},"Env"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_background_threads"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[i32]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_high_priority_background_threads"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[i32]")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[storage]\npath = "./storage/alphanet"\ncreate_if_missing = true\ncreate_missing_column_families = true\nenable_statistics = false\nincrease_parallelism = 4 # defaults to the number of cpu cores\noptimize_for_point_lookup = 67108864 # 64 MiB\noptimize_level_style_compaction = 0\noptimize_universal_style_compaction = 0\nset_advise_random_on_open = true\nset_allow_concurrent_memtable_write = true\nset_allow_mmap_reads = false\nset_allow_mmap_writes = false\nset_atomic_flush = false\nset_bytes_per_sync = 0\nset_compaction_readahead_size = 0\nset_max_write_buffer_number = 2\nset_write_buffer_size = 67108864 # 64 MiB\nset_db_write_buffer_size = 67108864 # 64 MiB\nset_disable_auto_compactions = false\nset_unordered_write = true\nset_use_direct_io_for_flush_and_compaction = true\nset_compaction_style = "Fifo" # other possible values are: "Level", "Universal"\nset_compression_type = "None" # other possible values are: "Snappy", "Zlib", "Bz2", "Lz4", "Lz4hc", "Zstd"\n[storage.storage]\nfetch_edge_limit = 1000\nfetch_index_limit = 1000\nfetch_output_id_limit = 1000\niteration_budget = 100\n[storage.env]\nset_background_threads = 4 # defaults to the number of cpu cores\nset_high_priority_background_threads = 2\n')),(0,l.kt)("h2",{id:"tangle"},"Tangle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"below_max_depth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"TO-DO"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"[tangle]\nbelow_max_depth = 15\n")),(0,l.kt)("h2",{id:"mqtt"},"Mqtt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[mqtt]\naddress = "tcp://localhost:1883"\n')),(0,l.kt)("h2",{id:"dashboard"},"Dashboard"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dashboard port"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u16]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"auth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dashboard auth"),(0,l.kt)("td",{parentName:"tr",align:"left"},"table")))),(0,l.kt)("h3",{id:"auth"},"Auth"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"session_timeout"),(0,l.kt)("td",{parentName:"tr",align:"left"},"expiration time of the authentication in seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer","[u64]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password_salt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password salt. Can be generated with the ",(0,l.kt)("inlineCode",{parentName:"td"},"bee password")," tool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"password_hash"),(0,l.kt)("td",{parentName:"tr",align:"left"},"password hash. Can be generated with the ",(0,l.kt)("inlineCode",{parentName:"td"},"bee password")," tool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[dashboard]\nport  = 8081\n[dashboard.auth]\nsession_timeout = 86400\nuser            = "admin"\npassword_salt   = "0000000000000000000000000000000000000000000000000000000000000000"\npassword_hash   = "0000000000000000000000000000000000000000000000000000000000000000"\n')))}g.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),g=r,f=k["".concat(o,".").concat(g)]||k[g]||s[g]||l;return a?n.createElement(f,i(i({ref:e},m),{},{components:a})):n.createElement(f,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);