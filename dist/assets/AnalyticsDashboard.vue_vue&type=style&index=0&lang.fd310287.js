import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import{_ as s}from"./V-Progress.vue_vue&type=script&setup=true&lang.6413a6bc.js";import{_ as e}from"./ContactWidget.vue_vue&type=script&setup=true&lang.ec46a433.js";import{_ as t}from"./UIWidget.vue_vue&type=script&setup=true&lang.2d73cbba.js";import{_ as l}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.3e452e62.js";import{_ as i}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.59338b5f.js";import{n as r,_ as n}from"./notificationList.9cfbb141.js";import{t as o}from"./themeColors.4f0e93f3.js";import{f as d}from"./followers.e3342b9c.js";import{d as c,h as p,i as u,l as h,k as v,F as f,a8 as g,G as m,j as y,H as b}from"./vendor.7d5213a2.js";const w={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[o.green],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(a){return"$"+a}}}},k={series:[57,86],chart:{height:220,type:"radialBar",offsetY:-10},colors:[o.accent,o.green],plotOptions:{radialBar:{startAngle:-135,endAngle:135,inverseOrder:!0,dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10},value:{show:!0,fontWeight:600,color:o.lightText,fontSize:"16px",offsetY:-5},total:{show:!0,fontSize:"14px",fontWeight:500,color:o.lightText}},hollow:{margin:15,size:"75%"},track:{strokeWidth:"100%"}}},stroke:{lineCap:"round"},labels:["Efficiency","Productivity"]},x=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}].map((a=>({name:a.name,data:a.data.map((a=>a-70))}))),_={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[o.accent,o.purple,o.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:x,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(a){return a+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+70}}}},z={series:[65],chart:{height:160,type:"radialBar",toolbar:{show:!1}},colors:[o.accent],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10,color:o.lightText},value:{show:!0,fontWeight:600,color:o.purple,fontSize:"16px",offsetY:-5}}}},labels:["Growth"]},j={class:"finance-dashboard analytics-dashboard"},S={class:"columns"},W={class:"column is-9"},T={class:"columns is-multiline"},A={class:"column is-4"},F={class:"dashboard-tile"},L={class:"tile-head"},M=h("h3",{class:"dark-inverted"},"Transactions",-1),O=h("i",{"aria-hidden":"true",class:"fas fa-gem"},null,-1),C=g('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+6.4% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>since last month</span></div>',2),P={class:"column is-4"},B={class:"dashboard-tile"},I={class:"tile-head"},Y=h("h3",{class:"dark-inverted"},"Subscriptions",-1),G=h("i",{"aria-hidden":"true",class:"fas fa-user-plus"},null,-1),J=g('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-2.1% <i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i></span><span>going down</span></div>',2),N={class:"column is-4"},R={class:"dashboard-tile"},U={class:"tile-head"},V=h("h3",{class:"dark-inverted"},"Referals",-1),$=h("i",{"aria-hidden":"true",class:"fas fa-bullhorn"},null,-1),E=g('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+4.2% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>going up</span></div>',2),q={class:"column is-8"},D={class:"dashboard-card"},H=g('<div class="card-head"><h3 class="dark-inverted">Revenue</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',2),K={class:"column is-4"},Q={class:"dashboard-card"},X=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Goal Overview")],-1),Z={class:"radial-wrap"},aa=g('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>',1),sa={class:"column is-4"},ea={class:"dashboard-card"},ta=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Sales")],-1),la={class:"progress-block"},ia=h("div",{class:"value"},[h("span",{class:"dark-inverted"},"78%")],-1),ra=h("div",{class:"progress-foot"},[h("span",{class:"text-h-green"},[m("+6.4% "),h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),h("span",null,"since last month")],-1),na={class:"column is-8"},oa={class:"dashboard-card"},da=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Profit")],-1),ca={class:"column is-3"},pa=h("div",{class:"widget-toolbar"},[h("div",{class:"left"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),h("div",{class:"center"},[h("h3",null,"October 2020")]),h("div",{class:"right"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),ua=h("table",{class:"calendar"},[h("thead",null,[h("tr",null,[h("th",{scope:"col"},"Mon"),h("th",{scope:"col"},"Tue"),h("th",{scope:"col"},"Wed"),h("th",{scope:"col"},"Thu"),h("th",{scope:"col"},"Fri"),h("th",{scope:"col"},"Sat"),h("th",{scope:"col"},"Sun")])]),h("tbody",null,[h("tr",null,[h("td",{class:"prev-month"},"29"),h("td",{class:"prev-month"},"30"),h("td",{class:"prev-month"},"31"),h("td",null,"1"),h("td",null,"2"),h("td",null,"3"),h("td",null,"4")]),h("tr",null,[h("td",null,"5"),h("td",null,"6"),h("td",null,"7"),h("td",null,"8"),h("td",null,"9"),h("td",null,"10"),h("td",null,"11")]),h("tr",null,[h("td",null,"12"),h("td",null,"13"),h("td",null,"14"),h("td",null,"15"),h("td",null,"16"),h("td",null,"17"),h("td",{class:"current-day"},"18")]),h("tr",null,[h("td",null,"19"),h("td",null,"20"),h("td",null,"21"),h("td",null,"22"),h("td",null,"23"),h("td",null,"24"),h("td",null,"25")]),h("tr",null,[h("td",null,"26"),h("td",null,"27"),h("td",null,"28"),h("td",null,"29"),h("td",null,"30"),h("td",null,"31"),h("td",{class:"next-month"},"1")])])],-1),ha={class:"widget-content"},va=m(" Great News! "),fa=m(", "),ga=m(" and "),ma=m(" are now following you. Take some time to look at their profile. ");var ya=c({expose:[],setup:o=>(o,c)=>{const g=a,m=y("apexchart"),x=s,ya=e,ba=t,wa=l,ka=i,xa=n;return p(),u("div",j,[h("div",S,[h("div",W,[h("div",T,[h("div",A,[h("div",F,[h("div",L,[M,h(g,{color:"primary",size:"small",rounded:""},{default:v((()=>[O])),_:1})]),C])]),h("div",P,[h("div",B,[h("div",I,[Y,h(g,{color:"orange",size:"small",rounded:""},{default:v((()=>[G])),_:1})]),J])]),h("div",N,[h("div",R,[h("div",U,[V,h(g,{color:"green",size:"small",rounded:""},{default:v((()=>[$])),_:1})]),E])]),h("div",q,[h("div",D,[H,h(m,{id:"revenue-chart",height:f(w).chart.height,type:f(w).chart.type,series:f(w).series,options:f(w)},null,8,["height","type","series","options"])])]),h("div",K,[h("div",Q,[X,h("div",Z,[h(m,{id:"goal-gauge",height:f(k).chart.height,type:f(k).chart.type,series:f(k).series,options:f(k)},null,8,["height","type","series","options"]),aa])])]),h("div",sa,[h("div",ea,[ta,h("div",la,[ia,h(x,{size:"tiny",value:78}),ra,h(m,{id:"radial-circle",class:"circle-chart-wrapper",height:f(z).chart.height,type:f(z).chart.type,series:f(z).series,options:f(z)},null,8,["height","type","series","options"])])])]),h("div",na,[h("div",oa,[da,h(m,{id:"profit-chart",height:f(_).chart.height,type:f(_).chart.type,series:f(_).series,options:f(_)},null,8,["height","type","series","options"])])])])]),h("div",ca,[h(ya,{picture:"/demo/avatars/8.jpg",username:"Erik K.",email:"erikkovalsky@vuero.io",company:"Vuero Ltd.",position:"Product Manager",location:"Los Angeles, CA",phone:"+1 444-5156",squared:"",reversed:"",straight:""}),h(ba,{class:"picker-widget",straight:""},{header:v((()=>[pa])),body:v((()=>[ua])),_:1}),h(ba,{class:"text-widget",straight:""},{header:v((()=>[h(wa,{title:"New Followers",avatars:f(d)},null,8,["avatars"])])),body:v((()=>[h("div",ha,[h("p",null,[va,h("span",null,b(f(d)[0].name),1),fa,h("span",null,b(f(d)[1].name),1),ga,h("span",null,b(f(d)[2].name),1),ma])])])),_:1}),h(ba,{class:"list-widget",straight:""},{header:v((()=>[h(ka,{title:"Notifications"})])),body:v((()=>[h(xa,{notifications:f(r)},null,8,["notifications"])])),_:1})])])])}});export{ya as _};
