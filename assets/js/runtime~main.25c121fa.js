(()=>{"use strict";var e,a,d,b,f,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=c,r.c=t,e=[],r.O=(a,d,b,f)=>{if(!d){var c=1/0;for(i=0;i<e.length;i++){d=e[i][0],b=e[i][1],f=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&f||c>=f)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,f<c&&(c=f));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,b,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var c={};a=a||[null,d({}),d([]),d(d)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(f,c),f},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({0:"e75be8b4",30:"8c39a99e",52:"43d1f236",53:"935f2afb",79:"23e9801a",94:"29dc197e",126:"13ce5257",238:"befbf297",264:"6d71c6e1",265:"fa81048f",354:"0b5c16f0",392:"de4787e9",436:"d6db9b0a",547:"d6e975a6",649:"7a4626a7",696:"15f75c5c",697:"0d48ad12",774:"12f26f77",778:"f6ef3423",784:"92b7c6cc",805:"4f8c0b8f",892:"8afbcb21",940:"fece26ca",973:"ea3cf842",975:"4f066016",1141:"d700bc26",1146:"b0d31037",1176:"be7f5006",1247:"33232263",1287:"eda617dc",1347:"74706d9b",1382:"915f967b",1393:"926024a6",1445:"1a29f8c9",1527:"dcb5fe88",1557:"f6f548d3",1601:"2f9c49ac",1649:"b888cc3c",1695:"b25679a6",1704:"b9cff02a",1737:"51043d28",1897:"46ccf277",1907:"0aa08435",1963:"d5495f85",2012:"dab6274c",2205:"49610ff9",2211:"956015b2",2272:"10b03419",2299:"a2570e22",2354:"14da5c76",2402:"4d2578b8",2441:"ea90771a",2524:"799614ab",2532:"d628f6ac",2595:"a36ffa01",2675:"38196ae4",2677:"4182bc82",2697:"25c08d2c",2799:"2be83f12",2823:"be1cbec8",2842:"28f44b45",2938:"67545522",3058:"0b00ed1b",3119:"a6e485cf",3126:"e8e4543d",3202:"0605e29e",3239:"392b1d3a",3256:"1dd5d7a0",3303:"c6d1a8d2",3354:"1bc3f855",3361:"9ba19d54",3554:"f3e520d4",3610:"83b08f11",3658:"180bfc4f",3682:"843244e4",3749:"cf155248",3811:"8205b5ae",3828:"82c3608b",3829:"4d101a71",3830:"a28521eb",3882:"8aa14ab8",3946:"a9769f6b",3962:"b4b2627e",3965:"43f55309",3970:"04fbbdc2",4008:"2c84989c",4109:"4b9284cd",4112:"0dfbf3b0",4128:"a09c2993",4171:"6c18ff08",4194:"50e2b989",4196:"95c99d92",4214:"8d8104b4",4279:"b8e90fec",4323:"b858bac3",4378:"20517dbb",4428:"afc8ade6",4485:"afbc42ac",4497:"7df44fae",4516:"56a4a2ae",4546:"6beea597",4566:"a73a0e3f",4609:"c1ff2bff",4615:"983dd9cf",4665:"db8879b3",4689:"102a5ed3",4715:"c0f50d54",4753:"ae0c3aaa",4905:"57042459",5e3:"b0acb65d",5081:"84af69ef",5090:"47c7af8a",5101:"36f10c62",5133:"4dd838f1",5158:"0544dd98",5211:"0ead0253",5451:"6bee5e29",5479:"b81f9dd7",5497:"0f1c37ab",5504:"b9279e93",5523:"7446c4ee",5575:"9c2458d0",5621:"caff9ef1",5639:"cff15f4e",5652:"825635bc",5672:"61dc6d0f",5686:"ced3b520",5687:"3f383611",5826:"a630df03",5894:"7e63da9a",5957:"004a50ca",5968:"e3499e12",6012:"a2d8b8b6",6085:"30a18b33",6149:"24aa57a5",6198:"700c8371",6199:"efd2cf03",6268:"2c4f620e",6329:"54c82979",6347:"39b0ea21",6368:"b9d17dc1",6388:"621f4b02",6411:"97ae10ab",6452:"1d62a97b",6464:"64bffb67",6478:"f0c5680f",6540:"ead081aa",6559:"46159d12",6598:"7bb735b0",6709:"0e9828f8",6727:"eb945afa",6827:"855bbc46",6855:"fbb00b49",6953:"67b32cb3",6974:"ed982374",7039:"c05d2e7f",7072:"f219dfb0",7082:"4e7d025b",7099:"aaad64a3",7105:"7a3d7f56",7114:"d9430cee",7168:"34140d9c",7197:"b904a4f5",7235:"4f366223",7309:"109bae49",7312:"53062d6a",7362:"618ada16",7431:"d81ce23a",7451:"597040e7",7469:"58300b87",7511:"153dfb3c",7543:"f25d48a1",7557:"09453f11",7639:"0d9ee793",7643:"9d98d0fa",7665:"825b8d42",7770:"7ddceb1c",7815:"ea0e2209",7818:"c4da9eb2",7918:"17896441",7920:"1a4e3797",7930:"0d8eb4ce",7959:"87c407db",8007:"3839e5fa",8011:"7776a642",8022:"332395be",8036:"f8ab0b8e",8059:"a8491093",8078:"a87ff71a",8155:"e730996c",8162:"61e33376",8172:"c9340476",8194:"8513aa73",8277:"7891f847",8406:"5b3c518a",8412:"ea620728",8435:"561534d7",8444:"bea5ad5c",8482:"30e0ecd2",8566:"047a5078",8568:"cf672314",8585:"6e871c86",8592:"common",8630:"c9bd862a",8631:"28a8ae78",8787:"ef17534e",9066:"a7392012",9072:"5b979ebf",9159:"64b6586f",9165:"8a599154",9220:"f9780055",9252:"7745a97b",9403:"150d8ac8",9436:"7412ad8f",9442:"e63358b1",9475:"8801d336",9514:"1be78505",9646:"5dd4d34f",9653:"f6d77d49",9685:"1de78933",9691:"f8cba72b",9693:"ea2fb62a",9735:"4ba7e5a3",9743:"57c97d00",9767:"f4d6084a",9776:"373f6370",9791:"b729ba14",9840:"37d83f58",9869:"d7a8c414"}[e]||e)+"."+{0:"cd85d645",30:"5e594595",52:"bffb5757",53:"786701b7",79:"2d4e9518",94:"e78c6cf6",126:"7f598302",238:"964cd2e7",264:"e8d82188",265:"056e9a84",354:"78940ef7",392:"7d06afd5",436:"19b00562",547:"6ae8ab7d",649:"09642833",696:"2951e430",697:"2f7cf820",774:"93ac654c",778:"567b5a7d",784:"6d99ac53",805:"2a941833",892:"efe80965",940:"e5fc9be3",973:"9635499f",975:"c8cfdd0e",1141:"8d31fc73",1146:"4003a58c",1176:"765d8d33",1247:"5054a9aa",1287:"72466e42",1347:"90f747e2",1382:"6f4de653",1393:"ff0c19d5",1445:"0ff8437a",1527:"b45af3e0",1557:"eca13288",1601:"377534d5",1649:"8ac3dca3",1695:"c274bcba",1704:"a6fb62b5",1737:"7b663aba",1897:"66e509e6",1907:"e006a74a",1963:"942c001b",2012:"cd2cfba6",2205:"fe8c2d50",2211:"b03d7775",2272:"14be90cb",2299:"a81767ce",2354:"0914551e",2402:"468e0bd7",2441:"2472690f",2524:"00c61bec",2532:"3aca4f0f",2595:"5cabab32",2675:"c439d174",2677:"c9d41162",2697:"c9f4c365",2799:"e3c9a681",2823:"eef8c018",2842:"4c1cc8dc",2938:"ef04a86f",3058:"395c5af8",3119:"94493840",3126:"43d2597e",3202:"c82fe348",3239:"e582023c",3256:"4816d962",3303:"e026f3ff",3354:"65890b61",3361:"bb4aaf27",3554:"02023095",3610:"0680f271",3658:"934d13cd",3682:"0e41f512",3749:"6a64c444",3811:"86578268",3828:"8d8c1a74",3829:"87fd58b8",3830:"886e685f",3882:"77bbe632",3946:"bc1a31df",3962:"2900404f",3965:"4a06c965",3970:"50142c56",4008:"7b069fce",4109:"04c935fc",4112:"c8165be0",4128:"8614889a",4171:"f31d8308",4194:"d5254541",4196:"e3f12153",4214:"ab3387a4",4279:"80cd0cb0",4323:"2534e37c",4378:"52ab7c3f",4428:"5d073af8",4485:"eaf71bcc",4497:"fb33c413",4516:"02717226",4546:"cdfe961e",4566:"406dc3f0",4609:"aadcbebd",4615:"46ba6410",4665:"4a9c1d89",4689:"75f9143d",4715:"0ce07b91",4753:"a6a5b2a1",4905:"7f4b694d",4972:"07838973",5e3:"5d76ed63",5081:"461cfaf2",5090:"c0dabc72",5101:"05824aff",5133:"200d57ba",5158:"ccebb92c",5211:"0a709b61",5451:"f5b020b1",5479:"e19c66b0",5497:"effcb065",5504:"4dcaf044",5523:"e8a7951d",5575:"16cfaba9",5621:"43979731",5639:"c14fcb52",5652:"f304e110",5672:"7a608e77",5686:"83ba5485",5687:"b01dab4f",5826:"5f1ff9d8",5894:"6f252ded",5957:"579b65f8",5968:"3adac8c4",6012:"4ae6cdc8",6085:"a433a512",6149:"c1134653",6198:"f53717ee",6199:"51c1086e",6268:"538415e8",6329:"1b5d4fa7",6347:"fb54901f",6368:"3b5cfa05",6388:"1df182f9",6411:"27408424",6452:"18c96e58",6464:"bfa27dc1",6478:"8d9b639a",6540:"6cfd463d",6559:"34dbad25",6598:"5d0bea86",6709:"7117e639",6727:"eadefdaa",6780:"4f608607",6827:"adc8cf77",6855:"8352f690",6945:"3c9a2a2b",6953:"adb7b55f",6974:"b3fa54a5",7039:"2df56815",7072:"ffcfc0da",7082:"0855f49b",7099:"64c05e89",7105:"37cf0c8a",7114:"2d25d6ba",7168:"857b44d4",7197:"9b243aa0",7235:"b456c1d9",7309:"efd14b5c",7312:"3405ab01",7362:"3ab96b20",7431:"dbb95458",7451:"b01486a7",7469:"9afbf94c",7511:"cc164c31",7543:"5d43fabd",7557:"ab93de62",7639:"60e3d814",7643:"1ea915a6",7665:"998b8b41",7770:"91a61c15",7815:"54229a88",7818:"52d4433b",7918:"601e1390",7920:"63966db4",7930:"49719d0a",7959:"85771c0d",8007:"49e6b132",8011:"8f667a58",8022:"0fac1db6",8036:"1d5ad968",8059:"37b75db0",8078:"e986f773",8155:"8b3f7867",8162:"02f6da26",8172:"5e37e2ce",8194:"4632a2c7",8277:"53cf76ca",8406:"e282479b",8412:"f508ab48",8435:"eae773ae",8444:"e02c6993",8482:"c8886f8d",8566:"45d947ef",8568:"594ad4cd",8585:"b17c9064",8592:"d7733c53",8630:"4d748159",8631:"55cbfd0c",8787:"8dbe979f",8894:"38b57a5e",9066:"f19c1a17",9072:"41a24657",9159:"c8f68d96",9165:"95008706",9220:"96713874",9252:"8d55d8b8",9403:"50db780a",9436:"d1f81da4",9442:"72b6bf01",9475:"0c5162a5",9514:"9a660bfb",9646:"3d376866",9653:"c0640c81",9685:"a9a35975",9691:"b0624854",9693:"6e879b86",9735:"d7769809",9743:"40d055ec",9767:"57ead40a",9776:"39aa16f0",9791:"b407c980",9840:"55adfd19",9869:"f92d7ac1"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},f="obsidian-plugin-docs:",r.l=(e,a,d,c)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+d),t.src=e),b[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var f=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/obsidian-plugin-docs/",r.gca=function(e){return e={17896441:"7918",33232263:"1247",57042459:"4905",67545522:"2938",e75be8b4:"0","8c39a99e":"30","43d1f236":"52","935f2afb":"53","23e9801a":"79","29dc197e":"94","13ce5257":"126",befbf297:"238","6d71c6e1":"264",fa81048f:"265","0b5c16f0":"354",de4787e9:"392",d6db9b0a:"436",d6e975a6:"547","7a4626a7":"649","15f75c5c":"696","0d48ad12":"697","12f26f77":"774",f6ef3423:"778","92b7c6cc":"784","4f8c0b8f":"805","8afbcb21":"892",fece26ca:"940",ea3cf842:"973","4f066016":"975",d700bc26:"1141",b0d31037:"1146",be7f5006:"1176",eda617dc:"1287","74706d9b":"1347","915f967b":"1382","926024a6":"1393","1a29f8c9":"1445",dcb5fe88:"1527",f6f548d3:"1557","2f9c49ac":"1601",b888cc3c:"1649",b25679a6:"1695",b9cff02a:"1704","51043d28":"1737","46ccf277":"1897","0aa08435":"1907",d5495f85:"1963",dab6274c:"2012","49610ff9":"2205","956015b2":"2211","10b03419":"2272",a2570e22:"2299","14da5c76":"2354","4d2578b8":"2402",ea90771a:"2441","799614ab":"2524",d628f6ac:"2532",a36ffa01:"2595","38196ae4":"2675","4182bc82":"2677","25c08d2c":"2697","2be83f12":"2799",be1cbec8:"2823","28f44b45":"2842","0b00ed1b":"3058",a6e485cf:"3119",e8e4543d:"3126","0605e29e":"3202","392b1d3a":"3239","1dd5d7a0":"3256",c6d1a8d2:"3303","1bc3f855":"3354","9ba19d54":"3361",f3e520d4:"3554","83b08f11":"3610","180bfc4f":"3658","843244e4":"3682",cf155248:"3749","8205b5ae":"3811","82c3608b":"3828","4d101a71":"3829",a28521eb:"3830","8aa14ab8":"3882",a9769f6b:"3946",b4b2627e:"3962","43f55309":"3965","04fbbdc2":"3970","2c84989c":"4008","4b9284cd":"4109","0dfbf3b0":"4112",a09c2993:"4128","6c18ff08":"4171","50e2b989":"4194","95c99d92":"4196","8d8104b4":"4214",b8e90fec:"4279",b858bac3:"4323","20517dbb":"4378",afc8ade6:"4428",afbc42ac:"4485","7df44fae":"4497","56a4a2ae":"4516","6beea597":"4546",a73a0e3f:"4566",c1ff2bff:"4609","983dd9cf":"4615",db8879b3:"4665","102a5ed3":"4689",c0f50d54:"4715",ae0c3aaa:"4753",b0acb65d:"5000","84af69ef":"5081","47c7af8a":"5090","36f10c62":"5101","4dd838f1":"5133","0544dd98":"5158","0ead0253":"5211","6bee5e29":"5451",b81f9dd7:"5479","0f1c37ab":"5497",b9279e93:"5504","7446c4ee":"5523","9c2458d0":"5575",caff9ef1:"5621",cff15f4e:"5639","825635bc":"5652","61dc6d0f":"5672",ced3b520:"5686","3f383611":"5687",a630df03:"5826","7e63da9a":"5894","004a50ca":"5957",e3499e12:"5968",a2d8b8b6:"6012","30a18b33":"6085","24aa57a5":"6149","700c8371":"6198",efd2cf03:"6199","2c4f620e":"6268","54c82979":"6329","39b0ea21":"6347",b9d17dc1:"6368","621f4b02":"6388","97ae10ab":"6411","1d62a97b":"6452","64bffb67":"6464",f0c5680f:"6478",ead081aa:"6540","46159d12":"6559","7bb735b0":"6598","0e9828f8":"6709",eb945afa:"6727","855bbc46":"6827",fbb00b49:"6855","67b32cb3":"6953",ed982374:"6974",c05d2e7f:"7039",f219dfb0:"7072","4e7d025b":"7082",aaad64a3:"7099","7a3d7f56":"7105",d9430cee:"7114","34140d9c":"7168",b904a4f5:"7197","4f366223":"7235","109bae49":"7309","53062d6a":"7312","618ada16":"7362",d81ce23a:"7431","597040e7":"7451","58300b87":"7469","153dfb3c":"7511",f25d48a1:"7543","09453f11":"7557","0d9ee793":"7639","9d98d0fa":"7643","825b8d42":"7665","7ddceb1c":"7770",ea0e2209:"7815",c4da9eb2:"7818","1a4e3797":"7920","0d8eb4ce":"7930","87c407db":"7959","3839e5fa":"8007","7776a642":"8011","332395be":"8022",f8ab0b8e:"8036",a8491093:"8059",a87ff71a:"8078",e730996c:"8155","61e33376":"8162",c9340476:"8172","8513aa73":"8194","7891f847":"8277","5b3c518a":"8406",ea620728:"8412","561534d7":"8435",bea5ad5c:"8444","30e0ecd2":"8482","047a5078":"8566",cf672314:"8568","6e871c86":"8585",common:"8592",c9bd862a:"8630","28a8ae78":"8631",ef17534e:"8787",a7392012:"9066","5b979ebf":"9072","64b6586f":"9159","8a599154":"9165",f9780055:"9220","7745a97b":"9252","150d8ac8":"9403","7412ad8f":"9436",e63358b1:"9442","8801d336":"9475","1be78505":"9514","5dd4d34f":"9646",f6d77d49:"9653","1de78933":"9685",f8cba72b:"9691",ea2fb62a:"9693","4ba7e5a3":"9735","57c97d00":"9743",f4d6084a:"9767","373f6370":"9776",b729ba14:"9791","37d83f58":"9840",d7a8c414:"9869"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)d.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>b=e[a]=[d,f]));d.push(b[2]=f);var c=r.p+r.u(a),t=new Error;r.l(c,(d=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var f=d&&("load"===d.type?"missing":d.type),c=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",t.name="ChunkLoadError",t.type=f,t.request=c,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var b,f,c=d[0],t=d[1],o=d[2],n=0;if(c.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(d);n<c.length;n++)f=c[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();