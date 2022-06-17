import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.2afd81f7.js";import{d as i,o as s,i as t,S as a,U as l,k as o,G as r,j as c,H as d,E as n}from"./vendor.31bd1321.js";import{_ as p,a as u}from"./ListWidgetSingle.vue_vue&type=script&setup=true&lang.221aedc9.js";import{_ as m}from"./V-Dropdown.02630225.js";import{_ as g,c as v,d as h,t as f,a as y,b as w}from"./todoList.8dce24e6.js";const x={class:"flex-meta is-light"},j={href:"#"},_={class:"flex-end"},T=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),M=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1);var W=i({expose:[],props:{users:{type:Array,required:!0,default:[]},squared:{type:Boolean,default:!1}},setup:i=>(c,d)=>{const n=e;return s(),t("div",null,[(s(!0),t(a,null,l(i.users,(e=>(s(),t("div",{key:e.id,class:"inner-list-item media-flex-center"},[o(n,{picture:e.picture,squared:i.squared},null,8,["picture","squared"]),o("div",x,[o("a",j,r(e.name),1),o("span",null,r(e.position),1)]),o("div",_,[e.progress<0?(s(),t("a",{key:0,href:"#",class:"go-icon is-down","data-content":e.progress+"%"},[T],8,["data-content"])):(s(),t("a",{key:1,href:"#",class:"go-icon is-up","data-content":"+"+e.progress+"%"},[M],8,["data-content"]))])])))),128))])}});const b={},L=o("a",{href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-cloud-download"})]),o("div",{class:"meta"},[o("span",null,"Download"),o("span",null,"Download this file")])],-1),q=o("a",{href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-cloud-upload"})]),o("div",{class:"meta"},[o("span",null,"Upload"),o("span",null,"Upload a new version")])],-1),V=o("hr",{class:"dropdown-divider"},null,-1),k=o("a",{href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-lock"})]),o("div",{class:"meta"},[o("span",null,"Permissions"),o("span",null,"Manage file permissions")])],-1),S=o("a",{href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-share"})]),o("div",{class:"meta"},[o("span",null,"Share"),o("span",null,"Share this file")])],-1),A=o("hr",{class:"dropdown-divider"},null,-1),D=o("a",{href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})]),o("div",{class:"meta"},[o("span",null,"Delete"),o("span",null,"Delete this file")])],-1);b.render=function(e,i){const a=m;return s(),t(a,{icon:"feather:more-vertical",dots:"",right:"",spaced:""},{content:c((()=>[L,q,V,k,S,A,D])),_:1})};const E={class:"flex-meta is-light"},P={href:"#"},U={class:"flex-end"};var z=i({expose:[],props:{files:{type:Array,required:!0,default:[]}},setup:e=>(i,c)=>{const d=b;return s(),t("div",null,[(s(!0),t(a,null,l(e.files,(e=>(s(),t("div",{key:e.id,class:"inner-list-item media-flex-center"},[o("img",{class:"image-icon",src:e.icon,alt:""},null,8,["src"]),o("div",E,[o("a",P,r(e.name),1),o("span",null,r(e.type),1)]),o("div",U,[o(d)])])))),128))])}});const I={class:"icon-timeline"},B={class:"timeline-content"};var C=i({expose:[],props:{items:{type:Array,required:!0,default:[]},squared:{type:Boolean,default:!1},colored:{type:Boolean,default:!1}},setup:e=>(i,c)=>(s(),t("div",I,[(s(!0),t(a,null,l(e.items,(i=>(s(),t("div",{key:i.id,class:"timeline-item"},[o("div",{class:["timeline-icon",[e.squared&&"is-squared",e.colored&&"is-"+i.color]]},[i.picture?(s(),t("img",{key:0,class:"avatar",src:i.picture,alt:"",onErrorOnce:c[1]||(c[1]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"])):(s(),t("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":i.icon},null,8,["data-icon"]))],2),o("div",B,[o("p",null,r(i.title),1),o("span",null,r(i.time),1)])])))),128))]))});const F=[{id:0,icon:"/images/icons/files/zip-format.svg",name:"theme.zip",type:"Zipped folder"},{id:1,icon:"/images/icons/files/doc-2.svg",name:"project_outline.doc",type:"MS Word file"},{id:2,icon:"/images/icons/files/pdf.svg",name:"requirements_v3.pdf",type:"PDF file"},{id:3,icon:"/images/icons/files/sheet.svg",name:"project_budget.xsls",type:"MS Excel file"},{id:4,icon:"/images/icons/files/ai.svg",name:"wireframes.ai",type:"Illustrator file"},{id:5,icon:"/images/icons/files/sheet.svg",name:"invoice_recap.xsls",type:"MS Excel file"}],G=[{id:6,icon:"/images/icons/files/ai.svg",name:"header.ai",type:"Illustrator file"},{id:7,icon:"/images/icons/files/ai.svg",name:"section.ai",type:"Illustrator file"},{id:8,icon:"/images/icons/files/ai.svg",name:"footer.ai",type:"Illustrator file"},{id:9,icon:"/images/icons/files/zip-format.svg",name:"theme_assets.zip",type:"Zipped folder"},{id:10,icon:"/images/icons/files/doc-2.svg",name:"team_structure.doc",type:"MS Word file"},{id:11,icon:"/images/icons/files/doc-2.svg",name:"meeting_notes.doc",type:"MS Word file"}],J=[{id:0,picture:"/demo/avatars/31.jpg",name:"Yasseene Amzi",position:"Business Analyst",progress:18},{id:1,picture:"/demo/avatars/5.jpg",name:"Mary Lebowski",position:"Project Manager",progress:22},{id:2,picture:"/demo/avatars/8.jpg",name:"Erik Kovalsky",position:"Product Manager",progress:-12},{id:3,picture:"/demo/avatars/32.jpg",name:"Jonathan Krugger",position:"Product Manager",progress:32},{id:4,picture:"/demo/avatars/21.jpg",name:"Elizabeth Fisher",position:"Mobile Developer",progress:-4},{id:5,picture:"/demo/avatars/21.jpg",name:"Tara Svenson",position:"UI/UX Designer",progress:32}],K=[{id:0,icon:"feather:chrome",color:"info",name:"Browsers",category:"Technology",users:[{id:2,picture:"/demo/avatars/12.jpg"},{id:5,picture:""},{id:11,picture:"/demo/avatars/40.jpg"},{id:100,picture:"https://via.placeholder.com/150x150"},{id:101,picture:"https://via.placeholder.com/150x150"},{id:102,picture:"https://via.placeholder.com/150x150"},{id:103,picture:"https://via.placeholder.com/150x150"},{id:104,picture:"https://via.placeholder.com/150x150"}]},{id:1,icon:"feather:wind",color:"green",name:"Natural Ecosystems",category:"Environment",users:[{id:1,picture:"/demo/avatars/9.jpg"},{id:3,picture:"/demo/avatars/8.jpg"}]},{id:2,icon:"feather:cpu",color:"orange",name:"Computer Chips",category:"Technology",users:[{id:0,picture:"/demo/avatars/7.jpg"},{id:21,picture:"/demo/avatars/23.jpg"}]},{id:3,icon:"feather:music",color:"purple",name:"Modal Improvisation",category:"Music",users:[{id:7,picture:"/demo/avatars/18.jpg"},{id:6,picture:"/demo/avatars/13.jpg"},{id:3,picture:"/demo/avatars/8.jpg"},{id:100,picture:"https://via.placeholder.com/150x150"},{id:101,picture:"https://via.placeholder.com/150x150"},{id:102,picture:"https://via.placeholder.com/150x150"},{id:103,picture:"https://via.placeholder.com/150x150"},{id:104,picture:"https://via.placeholder.com/150x150"}]},{id:4,icon:"feather:monitor",color:"yellow",name:"Old Movies",category:"Entertainment",users:[{id:28,picture:"/demo/avatars/32.jpg"},{id:20,picture:""}]},{id:5,icon:"feather:github",color:"purple",name:"Git Management",category:"Technology",users:[{id:10,picture:"/demo/avatars/27.jpg"},{id:16,picture:"/demo/avatars/16.jpg"},{id:25,picture:"/demo/avatars/29.jpg"},{id:100,picture:"https://via.placeholder.com/150x150"},{id:101,picture:"https://via.placeholder.com/150x150"},{id:102,picture:"https://via.placeholder.com/150x150"},{id:103,picture:"https://via.placeholder.com/150x150"},{id:104,picture:"https://via.placeholder.com/150x150"},{id:105,picture:"https://via.placeholder.com/150x150"},{id:106,picture:"https://via.placeholder.com/150x150"}]}],O=[{id:0,icon:"feather:phone-call",picture:null,title:"Call Danny at Colby's",time:"Today - 11:30am",color:"primary"},{id:1,icon:"feather:phone-call",picture:"/demo/avatars/7.jpg",title:"Meeting with Alice",time:"Today - 01:00pm",color:""},{id:2,icon:"feather:message-circle",picture:null,title:"Answer Annie's message",time:"Today - 01:45pm",color:"info"},{id:3,icon:"feather:mail",picture:null,title:"Send new campaign",time:"Today - 02:30pm",color:"success"},{id:4,icon:"feather:smile",picture:null,title:"Project review",time:"Today - 03:30pm",color:""},{id:5,icon:"feather:phone-call",picture:null,title:"Call Trisha Jackson",time:"Today - 05:00pm",color:"orange"},{id:6,icon:"feather:feather",picture:null,title:"Write proposal for Don",time:"Today - 06:00pm",color:"yellow"}],Z={class:"columns is-multiline widget-demo-columns half-columns"},H={class:"column is-4"},N={class:"column is-4"},X={class:"column is-4"},Y={class:"column is-4"},Q={class:"column is-4"},R={class:"column is-4"},$={class:"column is-4"},ee={class:"column is-4"},ie={class:"column is-4"},se={class:"column is-4"},te={class:"column is-4"},ae={class:"column is-4"};var le=i({expose:[],setup:e=>(e,i)=>{const a=W,l=p,r=z,m=g,x=w,j=u,_=C;return s(),t("div",Z,[d("List Widget V1a"),o("div",H,[o(l,{title:"User Progress",straight:"",class:"list-widget-v1"},{default:c((()=>[o(a,{users:n(J)},null,8,["users"])])),_:1})]),d("List Widget V1b"),o("div",N,[o(l,{title:"User Progress",straight:"",class:"list-widget-v1"},{default:c((()=>[o(a,{users:n(J),squared:""},null,8,["users"])])),_:1})]),d("List Widget V2"),o("div",X,[o(m,{title:"Files",straight:"",class:"list-widget-v2"},{tab1:c((()=>[o(r,{files:n(F)},null,8,["files"])])),tab2:c((()=>[o(r,{files:n(G)},null,8,["files"])])),_:1})]),d("List Widget V1a"),o("div",Y,[o(l,{title:"Todo",straight:"",class:"list-widget-v1"},{default:c((()=>[o(x,{todos:n(v),color:"warning"},null,8,["todos"])])),_:1})]),d("List Widget V1a"),o("div",Q,[o(l,{title:"Todo",straight:"",class:"list-widget-v1"},{default:c((()=>[o(x,{todos:n(h),color:"info"},null,8,["todos"])])),_:1})]),d("List Widget V2"),o("div",R,[o(m,{title:"Todo",straight:"",labels:["All","Mine"],class:"list-widget-v2"},{tab1:c((()=>[o(x,{todos:n(f)},null,8,["todos"])])),tab2:c((()=>[o(x,{todos:n(y)},null,8,["todos"])])),_:1})]),d("List Widget V1a"),o("div",$,[o(l,{title:"Topics",straight:"",class:"list-widget-v1"},{default:c((()=>[o(j,{topics:n(K),rounded:""},null,8,["topics"])])),_:1})]),d("List Widget V1a"),o("div",ee,[o(l,{title:"Topics",straight:"",class:"list-widget-v1"},{default:c((()=>[o(j,{topics:n(K)},null,8,["topics"])])),_:1})]),d("List Widget V2"),o("div",ie,[o(m,{title:"Topics",straight:"",class:"list-widget-v2"},{tab1:c((()=>[o(j,{topics:n(K)},null,8,["topics"])])),tab2:c((()=>[o(j,{topics:n(K)},null,8,["topics"])])),_:1})]),d("List Widget V1a"),o("div",se,[o(l,{title:"Timeline",straight:"",class:"list-widget-v3"},{default:c((()=>[o(_,{items:n(O)},null,8,["items"])])),_:1})]),d("List Widget V1a"),o("div",te,[o(l,{title:"Timeline",straight:"",class:"list-widget-v3"},{default:c((()=>[o(_,{items:n(O),squared:""},null,8,["items"])])),_:1})]),d("List Widget V1a"),o("div",ae,[o(l,{title:"Timeline",straight:"",class:"list-widget-v3"},{default:c((()=>[o(_,{items:n(O),squared:"",colored:""},null,8,["items"])])),_:1})])])}});export{le as _};
