import{_ as e}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.d6e6a0fa.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.68215769.js";import{_ as l}from"./UIWidget.vue_vue&type=script&setup=true&lang.94b3ac06.js";import{_ as a}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.5dde98d6.js";import{_ as s}from"./V-Tag.vue_vue&type=script&setup=true&lang.a0cbaab0.js";import{d as i,o,i as r,k as n,S as d,U as c,G as u,h as p,H as g,j as m,E as h,F as y}from"./vendor.01c5c571.js";import{i as v,_ as b}from"./menuList.3824fd79.js";import{_ as f}from"./UIWidgetToolbarIcon.vue_vue&type=script&setup=true&lang.873d82e0.js";import{_ as w}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bdc086ca.js";import{n as _,_ as W}from"./notificationList.8e8b92d5.js";import{p as x,o as T}from"./personalScoreGauge.77c9a6da.js";import{f as j}from"./followers.e3342b9c.js";import{t as k}from"./themeColors.4f0e93f3.js";const S={class:"widget-content"},q={class:"tags"};var C=i({expose:[],props:{tags:{type:Array,required:!0}},setup:e=>(t,l)=>{const a=s;return o(),r("div",S,[n("div",q,[(o(!0),r(d,null,c(e.tags,(e=>(o(),r(a,{key:e.id,color:e.color,curved:"",outlined:!e.popular,label:e.title},null,8,["color","outlined","label"])))),128))])])}});const I={class:"icon-toolbar"};var F=i({expose:[],props:{tabs:{type:Array,required:!0},currentTab:{type:Number,default:0}},setup:e=>(t,l)=>(o(),r("div",I,[(o(!0),r(d,null,c(e.tabs,((t,l)=>(o(),r("div",{key:t.id,class:"toolbar-icon"},[n("a",{class:["inner-icon",{"is-active":e.currentTab===l}],onClick:t=>e.currentTab=l},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":t.icon},null,8,["data-icon"])],10,["onClick"])])))),128))]))});const M={class:"calendar-widget-inner"},U={class:"date"};var Z=i({expose:[],props:{days:{type:Array,required:!0}},setup:e=>(t,l)=>(o(),r("div",M,[(o(!0),r(d,null,c(e.days,(e=>(o(),r("div",{key:e.id,class:"calendar-square"},[n("div",U,[n("span",null,u(e.date),1),n("span",null,u(e.name),1)])])))),128))]))});const A={class:"widget-content"},H={class:"sender-block"},L={class:"sender-block-inner"},P={class:"meta"},E={class:"exerpt"},G=n("i",{"aria-hidden":"true",class:"fas fa-circle"},null,-1),B=n("p",null," Where are we in terms of design? We need to review the new screens. ",-1);var N=i({expose:[],props:{title:{type:String,required:!0,default:"Design Project"},user:{type:String,required:!0,default:"Alice C."},picture:{type:String,required:!0,default:""},time:{type:String,required:!0,default:"28 minutes ago"}},setup:e=>(t,l)=>{const a=w;return o(),r("div",A,[n("div",H,[n("div",L,[n(a,{picture:e.picture},null,8,["picture"]),n("div",P,[n("span",null,u(e.user)+" just sent you an inbox message.",1)])]),n("div",E,[n("h5",null,[G,n("span",null,u(e.title),1)]),B,n("small",null,u(e.time),1)])])])}});const V=[{id:0,title:"Politics",popular:!1,color:"primary"},{id:1,title:"Economy",popular:!0,color:"primary"},{id:2,title:"Finance",popular:!1,color:"primary"},{id:3,title:"Environment",popular:!1,color:"primary"},{id:4,title:"Food",popular:!1,color:"primary"},{id:5,title:"Technology",popular:!0,color:"primary"}],Y=[{id:0,title:"Family",popular:!1,color:"primary"},{id:1,title:"Home",popular:!0,color:"primary"},{id:2,title:"Health",popular:!1,color:"primary"},{id:3,title:"Business",popular:!1,color:"primary"},{id:4,title:"Personal",popular:!1,color:"primary"},{id:5,title:"Utility",popular:!0,color:"primary"}],D=[{id:0,icon:"feather:activity"},{id:1,icon:"feather:search"},{id:2,icon:"feather:file-text"},{id:3,icon:"feather:home"}],R=[{id:0,name:"Monday",date:"22"},{id:1,name:"Tuesday",date:"23"},{id:2,name:"Wednesday",date:"24"},{id:3,name:"Thursday",date:"25"}],$={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chart:{height:"200px",width:"100%",type:"line",toolbar:{show:!1}},colors:[k.accent,k.purple,k.orange],grid:{show:!1,padding:{left:-20,right:0}},padding:{bottom:0,left:0,right:0},legend:{show:!1,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1,offsetX:-40}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},J={class:"columns is-multiline widget-demo-columns"},O={class:"column is-3"},X={class:"gauge-wrap"},z=n("div",{class:"widget-content"},[n("p",null,"Your score has been calculated based on the latest metrics")],-1),K={class:"widget-content"},Q=y(" Great News! "),ee=y(", "),te=y(" and "),le=y(" are now following you. Take some time to look at their profile. "),ae=n("div",{class:"field"},[n("div",{class:"control"},[n("input",{type:"text",class:"input",placeholder:"Search..."}),n("button",{class:"searcv-button"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})])]),n("div",{class:"topics"},[n("a",null,"#Politics"),n("a",null,"#Movies"),n("a",null,"#Tech")])],-1),se={class:"column is-3"},ie=n("div",{class:"widget-toolbar"},[n("div",{class:"left"},[n("a",{class:"action-icon"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),n("div",{class:"center"},[n("h3",null,"October 2020")]),n("div",{class:"right"},[n("a",{class:"action-icon"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),oe=n("table",{class:"calendar"},[n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Mon"),n("th",{scope:"col"},"Tue"),n("th",{scope:"col"},"Wed"),n("th",{scope:"col"},"Thu"),n("th",{scope:"col"},"Fri"),n("th",{scope:"col"},"Sat"),n("th",{scope:"col"},"Sun")])]),n("tbody",null,[n("tr",null,[n("td",{class:"prev-month"},"29"),n("td",{class:"prev-month"},"30"),n("td",{class:"prev-month"},"31"),n("td",null,"1"),n("td",null,"2"),n("td",null,"3"),n("td",null,"4")]),n("tr",null,[n("td",null,"5"),n("td",null,"6"),n("td",null,"7"),n("td",null,"8"),n("td",null,"9"),n("td",null,"10"),n("td",null,"11")]),n("tr",null,[n("td",null,"12"),n("td",null,"13"),n("td",null,"14"),n("td",null,"15"),n("td",null,"16"),n("td",null,"17"),n("td",{class:"current-day"},"18")]),n("tr",null,[n("td",null,"19"),n("td",null,"20"),n("td",null,"21"),n("td",null,"22"),n("td",null,"23"),n("td",null,"24"),n("td",null,"25")]),n("tr",null,[n("td",null,"26"),n("td",null,"27"),n("td",null,"28"),n("td",null,"29"),n("td",null,"30"),n("td",null,"31"),n("td",{class:"next-month"},"1")])])],-1),re={class:"column is-3"},ne=n("div",{class:"widget-content"},[n("p",null,[y(" You have an upcoming payment for your recurring subscription fee due on "),n("span",null,"Sept 20, 2020"),y(". ")])],-1),de=n("div",{class:"progress-wrap"},[n("progress",{class:"progress is-primary is-tiny",max:"100"}," 55% ")],-1),ce={class:"column is-3"},ue={class:"widget-content"},pe=n("div",{class:"has-text-centered"},[n("div",{class:"stat-number"},[n("span",null,[y("$1638,42 "),n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),n("span",null,"Earned from Sales")])],-1),ge=n("div",{class:"widget-content"},[n("p",null,[y(" You currently have more than "),n("span",null,"10 unread messages"),y(" in your inbox. It could be a good time to check them out. ")])],-1);var me=i({expose:[],setup:s=>(s,i)=>{const d=e,c=t,y=l,w=a,k=C,S=F,q=Z,I=b,M=f,U=N,A=W,H=p("apexchart");return o(),r("div",J,[g("Widget Column"),n("div",O,[g("Widget"),n(y,{class:"gauge-widget"},{header:m((()=>[n(d,{title:"Gauge Widget"})])),body:m((()=>[n("div",X,[n(c,{class:"gauge-holder",options:h(x),onReady:h(T)},null,8,["options","onReady"])]),z])),_:1}),g("Widget"),n(y,{class:"text-widget"},{header:m((()=>[n(w,{title:"New Followers",avatars:h(j)},null,8,["avatars"])])),body:m((()=>[n("div",K,[n("p",null,[Q,n("span",null,u(h(j)[0].name),1),ee,n("span",null,u(h(j)[1].name),1),te,n("span",null,u(h(j)[2].name),1),le])])])),_:1}),g("Widget"),n(y,{class:"search-widget"},{body:m((()=>[ae])),_:1}),g("Widget"),n(y,{class:"video-widget"},{body:m((()=>[g(' <UIWidgetMovie picture="/demo/photos/widgets/1.jpg" views="38,274" /> ')])),_:1}),g("Widget"),n(y,{class:"tags-widget"},{body:m((()=>[n(k,{tags:h(V)},null,8,["tags"])])),_:1})]),g("Widget Column"),n("div",se,[g("Widget"),n(y,{class:"icon-toolbar-widget"},{header:m((()=>[n(S,{tabs:h(D)},null,8,["tabs"])])),_:1}),g("Widget"),n(y,{class:"calendar-widget"},{header:m((()=>[n(q,{days:h(R)},null,8,["days"])])),_:1}),g("Widget"),n(y,{class:"picker-widget"},{header:m((()=>[ie])),body:m((()=>[oe])),_:1}),g("Widget"),n(y,{class:"icon-list-widget"},{body:m((()=>[n(I,{list:h(v)},null,8,["list"])])),_:1})]),g("Widget Column"),n("div",re,[g("Widget"),n(y,{class:"text-widget"},{header:m((()=>[n(M,{title:"Payment"})])),body:m((()=>[ne])),_:1}),g("Widget"),n(y,{class:"image-widget"},{body:m((()=>[g(' <img\r\n            src="/demo/photos/widgets/2.jpg"\r\n            alt=""\r\n            @error.once="\r\n              $event.target.src = \'https://via.placeholder.com/400x300\'\r\n            "\r\n          /> '),de])),_:1}),g("Widget"),n(y,{class:"inbox-widget"},{header:m((()=>[n(d,{title:"Inbox"})])),body:m((()=>[n(U)])),_:1})]),g("Widget Column"),n("div",ce,[g("Widget"),n(y,{class:"tags-widget"},{header:m((()=>[n(d,{title:"Labels"})])),body:m((()=>[n(k,{tags:h(Y)},null,8,["tags"])])),_:1}),g("Widget"),n(y,{class:"list-widget"},{header:m((()=>[n(d,{title:"Labels"})])),body:m((()=>[n(A,{notifications:h(_)},null,8,["notifications"])])),_:1}),g("Widget"),n(y,{class:"stats-widget"},{header:m((()=>[n(d,{title:""})])),body:m((()=>[n("div",ue,[pe,n(H,{id:"trend-chart",class:"stat-chart",height:h($).chart.height,type:h($).chart.type,series:h($).series,options:h($)},null,8,["height","type","series","options"])])])),_:1}),g("Widget"),n(y,{class:"text-widget"},{header:m((()=>[n(M,{title:"Messages",icon:"feather:message-square"})])),body:m((()=>[ge])),_:1})])])}});export{me as _};
