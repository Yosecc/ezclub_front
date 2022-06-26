import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.9e6a0d72.js";import{_ as s}from"./V-Progress.vue_vue&type=script&setup=true&lang.9db154ee.js";import{_ as e}from"./ContactWidget.vue_vue&type=script&setup=true&lang.b467659c.js";import{_ as t}from"./UIWidget.vue_vue&type=script&setup=true&lang.a8906b87.js";import{_ as l}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.0664723d.js";import{_ as i}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.06412552.js";import{n as r,_ as n}from"./notificationList.cb2d66bb.js";import{d as o,h as d,o as c,i as h,k as p,H as u,j as v,E as g,a7 as f,F as m,G as b}from"./vendor.073d5183.js";import{t as y}from"./themeColors.4f0e93f3.js";import{f as w}from"./followers.e3342b9c.js";const k={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[y.green],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(a){return"$"+a}}}},x={series:[57,86],chart:{height:220,type:"radialBar",offsetY:-10},colors:[y.accent,y.green],plotOptions:{radialBar:{startAngle:-135,endAngle:135,inverseOrder:!0,dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10},value:{show:!0,fontWeight:600,color:y.lightText,fontSize:"16px",offsetY:-5},total:{show:!0,fontSize:"14px",fontWeight:500,color:y.lightText}},hollow:{margin:15,size:"75%"},track:{strokeWidth:"100%"}}},stroke:{lineCap:"round"},labels:["Efficiency","Productivity"]},_=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}].map((a=>({name:a.name,data:a.data.map((a=>a-70))}))),W={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[y.accent,y.purple,y.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:_,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(a){return a+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+70}}}},z={series:[65],chart:{height:160,type:"radialBar",toolbar:{show:!1}},colors:[y.accent],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!0,fontSize:"14px",fontWeight:500,offsetY:-10,color:y.lightText},value:{show:!0,fontWeight:600,color:y.purple,fontSize:"16px",offsetY:-5}}}},labels:["Growth"]},T={class:"finance-dashboard analytics-dashboard"},j={class:"columns"},S={class:"column is-9"},C={class:"columns is-multiline"},A={class:"column is-4"},D={class:"dashboard-tile"},F={class:"tile-head"},L=p("h3",{class:"dark-inverted"},"Transactions",-1),M=p("i",{"aria-hidden":"true",class:"fas fa-gem"},null,-1),O=f('<div class="tile-body"><span class="dark-inverted">8,637</span></div><div class="tile-foot"><span class="text-h-green">+6.4% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>since last month</span></div>',2),P={class:"column is-4"},B={class:"dashboard-tile"},I={class:"tile-head"},Y=p("h3",{class:"dark-inverted"},"Subscriptions",-1),G=p("i",{"aria-hidden":"true",class:"fas fa-user-plus"},null,-1),J=f('<div class="tile-body"><span class="dark-inverted">1,378</span></div><div class="tile-foot"><span class="text-h-red">-2.1% <i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i></span><span>going down</span></div>',2),N={class:"column is-4"},R={class:"dashboard-tile"},E={class:"tile-head"},U=p("h3",{class:"dark-inverted"},"Referals",-1),V=p("i",{"aria-hidden":"true",class:"fas fa-bullhorn"},null,-1),$=f('<div class="tile-body"><span class="dark-inverted">1,911</span></div><div class="tile-foot"><span class="text-h-green">+4.2% <i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i></span><span>going up</span></div>',2),q={class:"column is-8"},H={class:"dashboard-card"},K=f('<div class="card-head"><h3 class="dark-inverted">Revenue</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',2),Q={class:"column is-4"},X={class:"dashboard-card"},Z=p("div",{class:"card-head"},[p("h3",{class:"dark-inverted"},"Goal Overview")],-1),aa={class:"radial-wrap"},sa=f('<div class="radial-stats is-dark-bordered-12"><div class="radial-stat is-dark-bordered-12"><span>Completed</span><span class="dark-inverted">1,223</span></div><div class="radial-stat"><span>In Progress</span><span class="dark-inverted">467</span></div></div>',1),ea={class:"column is-4"},ta={class:"dashboard-card"},la=p("div",{class:"card-head"},[p("h3",{class:"dark-inverted"},"Sales")],-1),ia={class:"progress-block"},ra=p("div",{class:"value"},[p("span",{class:"dark-inverted"},"78%")],-1),na=p("div",{class:"progress-foot"},[p("span",{class:"text-h-green"},[m("+6.4% "),p("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trending-up"})]),p("span",null,"since last month")],-1),oa={class:"column is-8"},da={class:"dashboard-card"},ca=p("div",{class:"card-head"},[p("h3",{class:"dark-inverted"},"Profit")],-1),ha={class:"column is-3"},pa=p("div",{class:"widget-toolbar"},[p("div",{class:"left"},[p("a",{class:"action-icon"},[p("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),p("div",{class:"center"},[p("h3",null,"October 2020")]),p("div",{class:"right"},[p("a",{class:"action-icon"},[p("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),ua=p("table",{class:"calendar"},[p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Mon"),p("th",{scope:"col"},"Tue"),p("th",{scope:"col"},"Wed"),p("th",{scope:"col"},"Thu"),p("th",{scope:"col"},"Fri"),p("th",{scope:"col"},"Sat"),p("th",{scope:"col"},"Sun")])]),p("tbody",null,[p("tr",null,[p("td",{class:"prev-month"},"29"),p("td",{class:"prev-month"},"30"),p("td",{class:"prev-month"},"31"),p("td",null,"1"),p("td",null,"2"),p("td",null,"3"),p("td",null,"4")]),p("tr",null,[p("td",null,"5"),p("td",null,"6"),p("td",null,"7"),p("td",null,"8"),p("td",null,"9"),p("td",null,"10"),p("td",null,"11")]),p("tr",null,[p("td",null,"12"),p("td",null,"13"),p("td",null,"14"),p("td",null,"15"),p("td",null,"16"),p("td",null,"17"),p("td",{class:"current-day"},"18")]),p("tr",null,[p("td",null,"19"),p("td",null,"20"),p("td",null,"21"),p("td",null,"22"),p("td",null,"23"),p("td",null,"24"),p("td",null,"25")]),p("tr",null,[p("td",null,"26"),p("td",null,"27"),p("td",null,"28"),p("td",null,"29"),p("td",null,"30"),p("td",null,"31"),p("td",{class:"next-month"},"1")])])],-1),va={class:"widget-content"},ga=m(" Great News! "),fa=m(", "),ma=m(" and "),ba=m(" are now following you. Take some time to look at their profile. ");var ya=o({expose:[],setup:o=>(o,f)=>{const m=a,y=d("apexchart"),_=s,ya=e,wa=t,ka=l,xa=i,_a=n;return c(),h("div",T,[p("div",j,[p("div",S,[p("div",C,[u("Dashboard Tile"),p("div",A,[p("div",D,[p("div",F,[L,p(m,{color:"primary",size:"small",rounded:""},{default:v((()=>[M])),_:1})]),O])]),u("Dashboard Tile"),p("div",P,[p("div",B,[p("div",I,[Y,p(m,{color:"orange",size:"small",rounded:""},{default:v((()=>[G])),_:1})]),J])]),u("Dashboard Tile"),p("div",N,[p("div",R,[p("div",E,[U,p(m,{color:"green",size:"small",rounded:""},{default:v((()=>[V])),_:1})]),$])]),u("Dashboard Card"),p("div",q,[p("div",H,[K,p(y,{id:"revenue-chart",height:g(k).chart.height,type:g(k).chart.type,series:g(k).series,options:g(k)},null,8,["height","type","series","options"])])]),u("Dashboard Card"),p("div",Q,[p("div",X,[Z,p("div",aa,[p(y,{id:"goal-gauge",height:g(x).chart.height,type:g(x).chart.type,series:g(x).series,options:g(x)},null,8,["height","type","series","options"]),sa])])]),u("Dashboard Card"),p("div",ea,[p("div",ta,[la,p("div",ia,[ra,p(_,{size:"tiny",value:78}),na,p(y,{id:"radial-circle",class:"circle-chart-wrapper",height:g(z).chart.height,type:g(z).chart.type,series:g(z).series,options:g(z)},null,8,["height","type","series","options"])])])]),u("Dashboard Card"),p("div",oa,[p("div",da,[ca,p(y,{id:"profit-chart",height:g(W).chart.height,type:g(W).chart.type,series:g(W).series,options:g(W)},null,8,["height","type","series","options"])])])])]),p("div",ha,[u("Widget"),p(ya,{picture:"/demo/avatars/8.jpg",username:"Erik K.",email:"erikkovalsky@vuero.io",company:"Vuero Ltd.",position:"Product Manager",location:"Los Angeles, CA",phone:"+1 444-5156",squared:"",reversed:"",straight:""}),u("Widget"),p(wa,{class:"picker-widget",straight:""},{header:v((()=>[pa])),body:v((()=>[ua])),_:1}),u("Widget"),p(wa,{class:"text-widget",straight:""},{header:v((()=>[p(ka,{title:"New Followers",avatars:g(w)},null,8,["avatars"])])),body:v((()=>[p("div",va,[p("p",null,[ga,p("span",null,b(g(w)[0].name),1),fa,p("span",null,b(g(w)[1].name),1),ma,p("span",null,b(g(w)[2].name),1),ba])])])),_:1}),u("Widget"),p(wa,{class:"list-widget",straight:""},{header:v((()=>[p(xa,{title:"Notifications"})])),body:v((()=>[p(_a,{notifications:g(r)},null,8,["notifications"])])),_:1})])])])}});export{ya as _};
