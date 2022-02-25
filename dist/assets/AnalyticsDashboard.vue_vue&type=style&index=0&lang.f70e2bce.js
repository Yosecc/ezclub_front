import{_ as s}from"./V-IconBox.vue_vue&type=script&setup=true&lang.7215798f.js";import{_ as a}from"./V-Progress.vue_vue&type=script&setup=true&lang.d60f2cc6.js";import{_ as e}from"./ContactWidget.vue_vue&type=script&setup=true&lang.085a8869.js";import{_ as t}from"./UIWidget.vue_vue&type=script&setup=true&lang.5180f18c.js";import{_ as l}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.ab89f4e7.js";import{_ as i}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.0804d5d1.js";import{n as r,_ as n}from"./notificationList.f38789b3.js";import{t as o}from"./themeColors.4f0e93f3.js";import{f as d}from"./followers.e3342b9c.js";import{d as c,o as p,h as u,k as h,j as v,D as f,W as g,G as m,i as y,J as b}from"./vendor.20c6e26b.js";const w={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[o.green],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(s){return"$"+s}}}},k={series:[57,86],chart:{height:220,type:"radialBar",offsetY:-10},colors:[o.accent,o.green],plotOptions:{radialBar:{startAngle:-135,endAngle:135,inverseOrder:!0,dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10},value:{show:!0,fontWeight:600,color:o.lightText,fontSize:"16px",offsetY:-5},total:{show:!0,fontSize:"14px",fontWeight:500,color:o.lightText}},hollow:{margin:15,size:"75%"},track:{strokeWidth:"100%"}}},stroke:{lineCap:"round"},labels:["Efficiency","Productivity"]},x=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}].map((s=>({name:s.name,data:s.data.map((s=>s-70))}))),_={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[o.accent,o.purple,o.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:x,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(s){return s+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(s){return s+70}}}},z={series:[65],chart:{height:160,type:"radialBar",toolbar:{show:!1}},colors:[o.accent],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10,color:o.lightText},value:{show:!0,fontWeight:600,color:o.purple,fontSize:"16px",offsetY:-5}}}},labels:["Growth"]},W={class:"finance-dashboard analytics-dashboard"},j={class:"columns"},S={class:"column is-9"},T={class:"columns is-multiline"},A={class:"column is-4"},L={class:"dashboard-tile"},M={class:"tile-head"},O=h("h3",{class:"dark-inverted"},"Transactions",-1),F=h("i",{"aria-hidden":"true",class:"fas fa-gem"},null,-1),C=g('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+6.4% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>since last month</span></div>',2),P={class:"column is-4"},B={class:"dashboard-tile"},I={class:"tile-head"},J=h("h3",{class:"dark-inverted"},"Subscriptions",-1),Y=h("i",{"aria-hidden":"true",class:"fas fa-user-plus"},null,-1),G=g('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-2.1% <i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i></span><span>going down</span></div>',2),N={class:"column is-4"},R={class:"dashboard-tile"},U={class:"tile-head"},V=h("h3",{class:"dark-inverted"},"Referals",-1),$=h("i",{"aria-hidden":"true",class:"fas fa-bullhorn"},null,-1),D=g('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+4.2% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>going up</span></div>',2),E={class:"column is-8"},q={class:"dashboard-card"},K=g('<div class="card-head"><h3 class="dark-inverted">Revenue</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',2),H={class:"column is-4"},Q={class:"dashboard-card"},X=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Goal Overview")],-1),Z={class:"radial-wrap"},ss=g('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>',1),as={class:"column is-4"},es={class:"dashboard-card"},ts=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Sales")],-1),ls={class:"progress-block"},is=h("div",{class:"value"},[h("span",{class:"dark-inverted"},"78%")],-1),rs=h("div",{class:"progress-foot"},[h("span",{class:"text-h-green"},[m("+6.4% "),h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),h("span",null,"since last month")],-1),ns={class:"column is-8"},os={class:"dashboard-card"},ds=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Profit")],-1),cs={class:"column is-3"},ps=h("div",{class:"widget-toolbar"},[h("div",{class:"left"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),h("div",{class:"center"},[h("h3",null,"October 2020")]),h("div",{class:"right"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),us=h("table",{class:"calendar"},[h("thead",null,[h("tr",null,[h("th",{scope:"col"},"Mon"),h("th",{scope:"col"},"Tue"),h("th",{scope:"col"},"Wed"),h("th",{scope:"col"},"Thu"),h("th",{scope:"col"},"Fri"),h("th",{scope:"col"},"Sat"),h("th",{scope:"col"},"Sun")])]),h("tbody",null,[h("tr",null,[h("td",{class:"prev-month"},"29"),h("td",{class:"prev-month"},"30"),h("td",{class:"prev-month"},"31"),h("td",null,"1"),h("td",null,"2"),h("td",null,"3"),h("td",null,"4")]),h("tr",null,[h("td",null,"5"),h("td",null,"6"),h("td",null,"7"),h("td",null,"8"),h("td",null,"9"),h("td",null,"10"),h("td",null,"11")]),h("tr",null,[h("td",null,"12"),h("td",null,"13"),h("td",null,"14"),h("td",null,"15"),h("td",null,"16"),h("td",null,"17"),h("td",{class:"current-day"},"18")]),h("tr",null,[h("td",null,"19"),h("td",null,"20"),h("td",null,"21"),h("td",null,"22"),h("td",null,"23"),h("td",null,"24"),h("td",null,"25")]),h("tr",null,[h("td",null,"26"),h("td",null,"27"),h("td",null,"28"),h("td",null,"29"),h("td",null,"30"),h("td",null,"31"),h("td",{class:"next-month"},"1")])])],-1),hs={class:"widget-content"},vs=m(" Great News! "),fs=m(", "),gs=m(" and "),ms=m(" are now following you. Take some time to look at their profile. ");var ys=c({expose:[],setup:o=>(o,c)=>{const g=s,m=y("apexchart"),x=a,ys=e,bs=t,ws=l,ks=i,xs=n;return p(),u("div",W,[h("div",j,[h("div",S,[h("div",T,[h("div",A,[h("div",L,[h("div",M,[O,h(g,{color:"primary",size:"small",rounded:""},{default:v((()=>[F])),_:1})]),C])]),h("div",P,[h("div",B,[h("div",I,[J,h(g,{color:"orange",size:"small",rounded:""},{default:v((()=>[Y])),_:1})]),G])]),h("div",N,[h("div",R,[h("div",U,[V,h(g,{color:"green",size:"small",rounded:""},{default:v((()=>[$])),_:1})]),D])]),h("div",E,[h("div",q,[K,h(m,{id:"revenue-chart",height:f(w).chart.height,type:f(w).chart.type,series:f(w).series,options:f(w)},null,8,["height","type","series","options"])])]),h("div",H,[h("div",Q,[X,h("div",Z,[h(m,{id:"goal-gauge",height:f(k).chart.height,type:f(k).chart.type,series:f(k).series,options:f(k)},null,8,["height","type","series","options"]),ss])])]),h("div",as,[h("div",es,[ts,h("div",ls,[is,h(x,{size:"tiny",value:78}),rs,h(m,{id:"radial-circle",class:"circle-chart-wrapper",height:f(z).chart.height,type:f(z).chart.type,series:f(z).series,options:f(z)},null,8,["height","type","series","options"])])])]),h("div",ns,[h("div",os,[ds,h(m,{id:"profit-chart",height:f(_).chart.height,type:f(_).chart.type,series:f(_).series,options:f(_)},null,8,["height","type","series","options"])])])])]),h("div",cs,[h(ys,{picture:"/demo/avatars/8.jpg",username:"Erik K.",email:"erikkovalsky@vuero.io",company:"Vuero Ltd.",position:"Product Manager",location:"Los Angeles, CA",phone:"+1 444-5156",squared:"",reversed:"",straight:""}),h(bs,{class:"picker-widget",straight:""},{header:v((()=>[ps])),body:v((()=>[us])),_:1}),h(bs,{class:"text-widget",straight:""},{header:v((()=>[h(ws,{title:"New Followers",avatars:f(d)},null,8,["avatars"])])),body:v((()=>[h("div",hs,[h("p",null,[vs,h("span",null,b(f(d)[0].name),1),fs,h("span",null,b(f(d)[1].name),1),gs,h("span",null,b(f(d)[2].name),1),ms])])])),_:1}),h(bs,{class:"list-widget",straight:""},{header:v((()=>[h(ks,{title:"Notifications"})])),body:v((()=>[h(xs,{notifications:f(r)},null,8,["notifications"])])),_:1})])])])}});export{ys as _};
