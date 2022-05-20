import{_ as e}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.6c0e7446.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.e8accd94.js";import{_ as l}from"./UIWidget.vue_vue&type=script&setup=true&lang.1965149d.js";import{_ as a}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.51222ca0.js";import{_ as s}from"./V-Tag.vue_vue&type=script&setup=true&lang.39ace96b.js";import{d as i,o,h as r,k as n,Q as d,R as c,F as u,j as p,i as m,D as h,E as g}from"./vendor.d0c8bc4f.js";import{i as y,_ as v}from"./menuList.41d7ba1f.js";import{_ as b}from"./UIWidgetToolbarIcon.vue_vue&type=script&setup=true&lang.b5095216.js";import{_ as f}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{n as w,_}from"./notificationList.f3008603.js";import{p as x,o as T}from"./personalScoreGauge.93c41459.js";import{f as j}from"./followers.e3342b9c.js";import{t as k}from"./themeColors.4f0e93f3.js";const S={class:"widget-content"},q={class:"tags"};var W=i({expose:[],props:{tags:{type:Array,required:!0}},setup:e=>(t,l)=>{const a=s;return o(),r("div",S,[n("div",q,[(o(!0),r(d,null,c(e.tags,(e=>(o(),r(a,{key:e.id,color:e.color,curved:"",outlined:!e.popular,label:e.title},null,8,["color","outlined","label"])))),128))])])}});const F={class:"icon-toolbar"};var I=i({expose:[],props:{tabs:{type:Array,required:!0},currentTab:{type:Number,default:0}},setup:e=>(t,l)=>(o(),r("div",F,[(o(!0),r(d,null,c(e.tabs,((t,l)=>(o(),r("div",{key:t.id,class:"toolbar-icon"},[n("a",{class:["inner-icon",{"is-active":e.currentTab===l}],onClick:t=>e.currentTab=l},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":t.icon},null,8,["data-icon"])],10,["onClick"])])))),128))]))});const Z={class:"calendar-widget-inner"},M={class:"date"};var A=i({expose:[],props:{days:{type:Array,required:!0}},setup:e=>(t,l)=>(o(),r("div",Z,[(o(!0),r(d,null,c(e.days,(e=>(o(),r("div",{key:e.id,class:"calendar-square"},[n("div",M,[n("span",null,u(e.date),1),n("span",null,u(e.name),1)])])))),128))]))});const L={class:"widget-content"},P={class:"sender-block"},U={class:"sender-block-inner"},C={class:"meta"},E={class:"exerpt"},H=n("i",{"aria-hidden":"true",class:"fas fa-circle"},null,-1),B=n("p",null," Where are we in terms of design? We need to review the new screens. ",-1);var D=i({expose:[],props:{title:{type:String,required:!0,default:"Design Project"},user:{type:String,required:!0,default:"Alice C."},picture:{type:String,required:!0,default:""},time:{type:String,required:!0,default:"28 minutes ago"}},setup:e=>(t,l)=>{const a=f;return o(),r("div",L,[n("div",P,[n("div",U,[n(a,{picture:e.picture},null,8,["picture"]),n("div",C,[n("span",null,u(e.user)+" just sent you an inbox message.",1)])]),n("div",E,[n("h5",null,[H,n("span",null,u(e.title),1)]),B,n("small",null,u(e.time),1)])])])}});const G=[{id:0,title:"Politics",popular:!1,color:"primary"},{id:1,title:"Economy",popular:!0,color:"primary"},{id:2,title:"Finance",popular:!1,color:"primary"},{id:3,title:"Environment",popular:!1,color:"primary"},{id:4,title:"Food",popular:!1,color:"primary"},{id:5,title:"Technology",popular:!0,color:"primary"}],N=[{id:0,title:"Family",popular:!1,color:"primary"},{id:1,title:"Home",popular:!0,color:"primary"},{id:2,title:"Health",popular:!1,color:"primary"},{id:3,title:"Business",popular:!1,color:"primary"},{id:4,title:"Personal",popular:!1,color:"primary"},{id:5,title:"Utility",popular:!0,color:"primary"}],R=[{id:0,icon:"feather:activity"},{id:1,icon:"feather:search"},{id:2,icon:"feather:file-text"},{id:3,icon:"feather:home"}],V=[{id:0,name:"Monday",date:"22"},{id:1,name:"Tuesday",date:"23"},{id:2,name:"Wednesday",date:"24"},{id:3,name:"Thursday",date:"25"}],Y={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chart:{height:"200px",width:"100%",type:"line",toolbar:{show:!1}},colors:[k.accent,k.purple,k.orange],grid:{show:!1,padding:{left:-20,right:0}},padding:{bottom:0,left:0,right:0},legend:{show:!1,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1,offsetX:-40}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},J={class:"columns is-multiline widget-demo-columns"},O={class:"column is-3"},Q={class:"gauge-wrap"},X=n("div",{class:"widget-content"},[n("p",null,"Your score has been calculated based on the latest metrics")],-1),$={class:"widget-content"},z=g(" Great News! "),K=g(", "),ee=g(" and "),te=g(" are now following you. Take some time to look at their profile. "),le=n("div",{class:"field"},[n("div",{class:"control"},[n("input",{type:"text",class:"input",placeholder:"Search..."}),n("button",{class:"searcv-button"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})])]),n("div",{class:"topics"},[n("a",null,"#Politics"),n("a",null,"#Movies"),n("a",null,"#Tech")])],-1),ae={class:"column is-3"},se=n("div",{class:"widget-toolbar"},[n("div",{class:"left"},[n("a",{class:"action-icon"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),n("div",{class:"center"},[n("h3",null,"October 2020")]),n("div",{class:"right"},[n("a",{class:"action-icon"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),ie=n("table",{class:"calendar"},[n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Mon"),n("th",{scope:"col"},"Tue"),n("th",{scope:"col"},"Wed"),n("th",{scope:"col"},"Thu"),n("th",{scope:"col"},"Fri"),n("th",{scope:"col"},"Sat"),n("th",{scope:"col"},"Sun")])]),n("tbody",null,[n("tr",null,[n("td",{class:"prev-month"},"29"),n("td",{class:"prev-month"},"30"),n("td",{class:"prev-month"},"31"),n("td",null,"1"),n("td",null,"2"),n("td",null,"3"),n("td",null,"4")]),n("tr",null,[n("td",null,"5"),n("td",null,"6"),n("td",null,"7"),n("td",null,"8"),n("td",null,"9"),n("td",null,"10"),n("td",null,"11")]),n("tr",null,[n("td",null,"12"),n("td",null,"13"),n("td",null,"14"),n("td",null,"15"),n("td",null,"16"),n("td",null,"17"),n("td",{class:"current-day"},"18")]),n("tr",null,[n("td",null,"19"),n("td",null,"20"),n("td",null,"21"),n("td",null,"22"),n("td",null,"23"),n("td",null,"24"),n("td",null,"25")]),n("tr",null,[n("td",null,"26"),n("td",null,"27"),n("td",null,"28"),n("td",null,"29"),n("td",null,"30"),n("td",null,"31"),n("td",{class:"next-month"},"1")])])],-1),oe={class:"column is-3"},re=n("div",{class:"widget-content"},[n("p",null,[g(" You have an upcoming payment for your recurring subscription fee due on "),n("span",null,"Sept 20, 2020"),g(". ")])],-1),ne=n("div",{class:"progress-wrap"},[n("progress",{class:"progress is-primary is-tiny",max:"100"}," 55% ")],-1),de={class:"column is-3"},ce={class:"widget-content"},ue=n("div",{class:"has-text-centered"},[n("div",{class:"stat-number"},[n("span",null,[g("$1638,42 "),n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),n("span",null,"Earned from Sales")])],-1),pe=n("div",{class:"widget-content"},[n("p",null,[g(" You currently have more than "),n("span",null,"10 unread messages"),g(" in your inbox. It could be a good time to check them out. ")])],-1);var me=i({expose:[],setup:s=>(s,i)=>{const d=e,c=t,g=l,f=a,k=W,S=I,q=A,F=v,Z=b,M=D,L=_,P=m("apexchart");return o(),r("div",J,[n("div",O,[n(g,{class:"gauge-widget"},{header:p((()=>[n(d,{title:"Gauge Widget"})])),body:p((()=>[n("div",Q,[n(c,{class:"gauge-holder",options:h(x),onReady:h(T)},null,8,["options","onReady"])]),X])),_:1}),n(g,{class:"text-widget"},{header:p((()=>[n(f,{title:"New Followers",avatars:h(j)},null,8,["avatars"])])),body:p((()=>[n("div",$,[n("p",null,[z,n("span",null,u(h(j)[0].name),1),K,n("span",null,u(h(j)[1].name),1),ee,n("span",null,u(h(j)[2].name),1),te])])])),_:1}),n(g,{class:"search-widget"},{body:p((()=>[le])),_:1}),n(g,{class:"video-widget"},{body:p((()=>[])),_:1}),n(g,{class:"tags-widget"},{body:p((()=>[n(k,{tags:h(G)},null,8,["tags"])])),_:1})]),n("div",ae,[n(g,{class:"icon-toolbar-widget"},{header:p((()=>[n(S,{tabs:h(R)},null,8,["tabs"])])),_:1}),n(g,{class:"calendar-widget"},{header:p((()=>[n(q,{days:h(V)},null,8,["days"])])),_:1}),n(g,{class:"picker-widget"},{header:p((()=>[se])),body:p((()=>[ie])),_:1}),n(g,{class:"icon-list-widget"},{body:p((()=>[n(F,{list:h(y)},null,8,["list"])])),_:1})]),n("div",oe,[n(g,{class:"text-widget"},{header:p((()=>[n(Z,{title:"Payment"})])),body:p((()=>[re])),_:1}),n(g,{class:"image-widget"},{body:p((()=>[ne])),_:1}),n(g,{class:"inbox-widget"},{header:p((()=>[n(d,{title:"Inbox"})])),body:p((()=>[n(M)])),_:1})]),n("div",de,[n(g,{class:"tags-widget"},{header:p((()=>[n(d,{title:"Labels"})])),body:p((()=>[n(k,{tags:h(N)},null,8,["tags"])])),_:1}),n(g,{class:"list-widget"},{header:p((()=>[n(d,{title:"Labels"})])),body:p((()=>[n(L,{notifications:h(w)},null,8,["notifications"])])),_:1}),n(g,{class:"stats-widget"},{header:p((()=>[n(d,{title:""})])),body:p((()=>[n("div",ce,[ue,n(P,{id:"trend-chart",class:"stat-chart",height:h(Y).chart.height,type:h(Y).chart.type,series:h(Y).series,options:h(Y)},null,8,["height","type","series","options"])])])),_:1}),n(g,{class:"text-widget"},{header:p((()=>[n(Z,{title:"Messages",icon:"feather:message-square"})])),body:p((()=>[pe])),_:1})])])}});export{me as _};
