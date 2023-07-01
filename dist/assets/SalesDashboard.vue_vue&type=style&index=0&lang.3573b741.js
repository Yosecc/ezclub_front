import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as a}from"./WidgetDropdown.120e8c38.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.87807f98.js";import{_ as l}from"./UIWidget.vue_vue&type=script&setup=true&lang.e4d115d4.js";import{s as i,a as r,b as o,c as d,r as n}from"./revenueAreaChart.b32804a8.js";import{t as c}from"./themeColors.4f0e93f3.js";import{A as h,d as p,o as u,h as v,i as g,l as y,k as m,F as b,a9 as f,j as x,G as k}from"./vendor.6c78dc37.js";import{p as w,o as _}from"./personalScoreGauge.d4916a41.js";const S={series:[65],chart:{height:155,type:"radialBar",toolbar:{show:!1}},colors:[c.info],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:c.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:c.info,fontSize:"16px",offsetY:5}}}},labels:["Progress"]},j={series:[31],chart:{height:100,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[c.info],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},B={series:[53],chart:{height:100,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[c.purple],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},A={series:[84],chart:{height:100,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[c.green],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},O=[{x:"Jan",y:322},{x:"Feb",y:459},{x:"Mar",y:212},{x:"Apr",y:345},{x:"May",y:111},{x:"Jun",y:189},{x:"Jul",y:498},{x:"Aug",y:612},{x:"Sep",y:451},{x:"Oct",y:248},{x:"Nov",y:306},{x:"Dec",y:366}],L=[{x:"Jan",y:25},{x:"Feb",y:49},{x:"Mar",y:36},{x:"Apr",y:84},{x:"May",y:64},{x:"Jun",y:131},{x:"Jul",y:48},{x:"Aug",y:144},{x:"Sep",y:96},{x:"Oct",y:11},{x:"Nov",y:31},{x:"Dec",y:8}],M=h({series:[],chart:{height:205,type:"bar",toolbar:{show:!1}},colors:[c.accent,c.green],dataLabels:{enabled:!1},noData:{text:"Loading..."},xaxis:{type:"category",tickPlacement:"on",labels:{rotate:-45,rotateAlways:!0}}}),z={class:"finance-dashboard sales-dashboard"},J={class:"dashboard-header"},T=y("div",{class:"start"},[y("h3",{class:"dark-inverted"},"Welcome back, Erik Kovalsky"),y("p",null,"We're very happy to see you again on your dashboard.")],-1),W={class:"end"},D=k("View Reports"),R=k("Transactions"),Y={class:"spark-tiles"},F={class:"columns is-multiline"},P={class:"column is-3"},V={class:"spark-tile"},$={class:"column is-3"},C={class:"spark-tile"},N={class:"column is-3"},G={class:"spark-tile"},I={class:"column is-3"},q={class:"spark-tile"},E={class:"column is-7"},K={class:"dashboard-card"},U=f('<div class="card-head"><h3 class="dark-inverted">Revenue Overview</h3></div><div class="revenue-stats"><div class="revenue-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div><div class="revenue-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',2),H={class:"column is-5"},Q={class:"dashboard-card flex-chart"},X={class:"chart-media"},Z=y("div",{class:"meta"},[y("h4",{class:"dark-inverted"},"Sales Revenue"),y("span",{class:"is-dark-primary"},"$8,641.26"),y("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria. ")],-1),ss={class:"chart-container"},es={class:"dashboard-card flex-chart"},as=y("div",{class:"card-head"},[y("h3",{class:"dark-inverted"},"Additional Stats")],-1),ts={class:"chart-group"},ls={class:"group"},is={class:"group-content"},rs={class:"chart-container"},os=y("span",{class:"dark-inverted"},"264",-1),ds=y("p",null,"New Deals",-1),ns={class:"group"},cs={class:"group-content"},hs={class:"chart-container"},ps=y("span",{class:"dark-inverted"},"1,203",-1),us=y("p",null,"Proposals",-1),vs={class:"group"},gs={class:"group-content"},ys={class:"chart-container"},ms=y("span",{class:"dark-inverted"},"3,078",-1),bs=y("p",null,"Closed Deals",-1),fs={class:"column is-3"},xs={class:"widget gauge-widget is-straight"},ks={class:"widget-toolbar"},ws=y("div",{class:"left"},[y("h3",{class:"is-bigger"},"Personal Score")],-1),_s={class:"right"},Ss={class:"gauge-wrap"},js=y("div",{id:"gauge-holder",class:"gauge-holder"},null,-1),Bs=y("div",{class:"widget-content"},[y("p",null,"Your score has been calculated based on the latest metrics")],-1),As={class:"column is-6"},Os={class:"dashboard-card"},Ls=y("div",{class:"card-head"},[y("h3",{class:"dark-inverted"},"Orders Summary")],-1),Ms={class:"column is-3"},zs=y("div",{class:"widget-toolbar"},[y("div",{class:"left"},[y("a",{class:"action-icon"},[y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),y("div",{class:"center"},[y("h3",null,"October 2020")]),y("div",{class:"right"},[y("a",{class:"action-icon"},[y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),Js=y("table",{class:"calendar"},[y("thead",null,[y("tr",null,[y("th",{scope:"col"},"Mon"),y("th",{scope:"col"},"Tue"),y("th",{scope:"col"},"Wed"),y("th",{scope:"col"},"Thu"),y("th",{scope:"col"},"Fri"),y("th",{scope:"col"},"Sat"),y("th",{scope:"col"},"Sun")])]),y("tbody",null,[y("tr",null,[y("td",{class:"prev-month"},"29"),y("td",{class:"prev-month"},"30"),y("td",{class:"prev-month"},"31"),y("td",null,"1"),y("td",null,"2"),y("td",null,"3"),y("td",null,"4")]),y("tr",null,[y("td",null,"5"),y("td",null,"6"),y("td",null,"7"),y("td",null,"8"),y("td",null,"9"),y("td",null,"10"),y("td",null,"11")]),y("tr",null,[y("td",null,"12"),y("td",null,"13"),y("td",null,"14"),y("td",null,"15"),y("td",null,"16"),y("td",null,"17"),y("td",{class:"current-day"},"18")]),y("tr",null,[y("td",null,"19"),y("td",null,"20"),y("td",null,"21"),y("td",null,"22"),y("td",null,"23"),y("td",null,"24"),y("td",null,"25")]),y("tr",null,[y("td",null,"26"),y("td",null,"27"),y("td",null,"28"),y("td",null,"29"),y("td",null,"30"),y("td",null,"31"),y("td",{class:"next-month"},"1")])])],-1);var Ts=p({expose:[],setup:c=>(u((()=>{setTimeout((()=>{M.series=[{name:"Orders",data:O}]}),1e3),setTimeout((()=>{M.series=[...M.series,{name:"Abandonned",data:L}]}),2500)})),(c,h)=>{const p=s,u=e,f=x("apexchart"),k=a,O=t,L=l;return v(),g("div",z,[y("div",J,[y(p,{size:"large",picture:"/demo/avatars/8.jpg"}),T,y("div",W,[y(u,{dark:"3"},{default:m((()=>[D])),_:1}),y(u,{color:"primary",elevated:""},{default:m((()=>[R])),_:1})])]),y("div",Y,[y("div",F,[y("div",P,[y("div",V,[y(f,{id:"spark1",height:b(i).chart.height,type:b(i).chart.type,series:b(i).series,options:b(i)},null,8,["height","type","series","options"])])]),y("div",$,[y("div",C,[y(f,{id:"spark2",height:b(r).chart.height,type:b(r).chart.type,series:b(r).series,options:b(r)},null,8,["height","type","series","options"])])]),y("div",N,[y("div",G,[y(f,{id:"spark3",height:b(o).chart.height,type:b(o).chart.type,series:b(o).series,options:b(o)},null,8,["height","type","series","options"])])]),y("div",I,[y("div",q,[y(f,{id:"spark4",height:b(d).chart.height,type:b(d).chart.type,series:b(d).series,options:b(d)},null,8,["height","type","series","options"])])]),y("div",E,[y("div",K,[U,y(f,{id:"revenue-chart",height:b(n).chart.height,type:b(n).chart.type,series:b(n).series,options:b(n)},null,8,["height","type","series","options"])])]),y("div",H,[y("div",Q,[y("div",X,[Z,y("div",ss,[y(f,{id:"radial-circle",height:b(S).chart.height,type:b(S).chart.type,series:b(S).series,options:b(S)},null,8,["height","type","series","options"])])])]),y("div",es,[as,y("div",ts,[y("div",ls,[y("div",is,[y("div",rs,[y(f,{id:"group-radial-1",height:b(j).chart.height,type:b(j).chart.type,series:b(j).series,options:b(j)},null,8,["height","type","series","options"])]),os,ds])]),y("div",ns,[y("div",cs,[y("div",hs,[y(f,{id:"group-radial-2",height:b(B).chart.height,type:b(B).chart.type,series:b(B).series,options:b(B)},null,8,["height","type","series","options"])]),ps,us])]),y("div",vs,[y("div",gs,[y("div",ys,[y(f,{id:"group-radial-3",height:b(A).chart.height,type:b(A).chart.type,series:b(A).series,options:b(A)},null,8,["height","type","series","options"])]),ms,bs])])])])]),y("div",fs,[y("div",xs,[y("div",ks,[ws,y("div",_s,[y(k)])]),y("div",Ss,[js,y(O,{options:b(w),onReady:b(_)},null,8,["options","onReady"])]),Bs])]),y("div",As,[y("div",Os,[Ls,y(f,{id:"bar-chart",height:b(M).chart.height,type:b(M).chart.type,series:b(M).series,options:b(M)},null,8,["height","type","series","options"])])]),y("div",Ms,[y(L,{class:"picker-widget",straight:""},{header:m((()=>[zs])),body:m((()=>[Js])),_:1})])])])])})});export{Ts as _};
