import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.e23c671a.js";import{_ as t}from"./V-Dropdown.7e196bf4.js";import{o as i,h as r,j as l,k as o,d as n,R as d,Q as c,F as p,J as h,E as u,D as g,a6 as m,i as v,P as y}from"./vendor.d0c8bc4f.js";import{_ as f}from"./V-Control.46cc2837.js";import{_ as b}from"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import{_ as w}from"./V-Tag.vue_vue&type=script&setup=true&lang.39ace96b.js";import{t as k}from"./themeColors.4f0e93f3.js";import{d as x,f as A,e as T}from"./apex-formatters.ba7d0592.js";const S={},_=o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-reload"})]),o("div",{class:"meta"},[o("span",null,"Reload"),o("span",null,"Reload chart")])],-1),z=o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-users-alt"})]),o("div",{class:"meta"},[o("span",null,"Customers"),o("span",null,"View customer reports")])],-1),B=o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-gift-alt-1"})]),o("div",{class:"meta"},[o("span",null,"Products"),o("span",null,"View product reports")])],-1),R=o("hr",{class:"dropdown-divider"},null,-1),O=o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media"},[o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-bank"})]),o("div",{class:"meta"},[o("span",null,"Finance"),o("span",null,"View financial reports")])],-1);S.render=function(e,s){const a=t;return i(),r(a,{icon:"feather:more-vertical",spaced:"",right:""},{content:l((()=>[_,z,B,R,O])),_:1})};const j={class:"flex-table-cell is-media is-grow","data-th":""},L={class:"item-name dark-inverted is-font-alt is-weight-600"},I={class:"item-meta"},V={class:"flex-table-cell","data-th":"Date"},W={class:"light-text"},C={class:"flex-table-cell","data-th":"Amount"},F={class:"dark-inverted is-weight-600"},Y={class:"flex-table-cell","data-th":"Status"},M={class:"flex-table-cell","data-th":"Tracking"},K={key:0,class:"action-link is-pushed-mobile"},Z={key:1,class:"light-text is-pushed-mobile"},N={class:"flex-table-cell cell-end","data-th":"Actions"},P=u("View Order");var D=n({expose:[],props:{rows:{type:Array,required:!0}},setup:a=>(t,n)=>{const u=e,g=w,m=s;return i(!0),r(c,null,d(a.rows,(e=>(i(),r("div",{key:e.id,class:"flex-table-item"},[o("div",j,[o(u,{picture:e.picture,size:"medium",squared:""},null,8,["picture"]),o("div",null,[o("span",L,p(e.username),1),o("span",I,[o("span",null,p(e.orderId),1)])])]),o("div",V,[o("span",W,p(e.date),1)]),o("div",C,[o("span",F,"$"+p(e.amount),1)]),o("div",Y,["paid"===e.status?(i(),r(g,{key:0,color:"green",rounded:"",label:"Paid"})):h("",!0),"pending"===e.status?(i(),r(g,{key:1,color:"orange",rounded:"",label:"Pending"})):h("",!0)]),o("div",M,[e.tracking?(i(),r("a",K,p(e.tracking),1)):(i(),r("span",Z,"N/A"))]),o("div",N,[o(m,{class:"is-pushed-mobile","dark-outlined":""},{default:l((()=>[P])),_:1})])])))),128)}});const E={series:[65],chart:{height:160,type:"radialBar",offsetX:-15,offsetY:-10,toolbar:{show:!1}},colors:[k.accent,k.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:k.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:x}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},J={series:[{name:"Returning",data:[318.42,407.16,284.12,517,452.45,1209.34,1010.11]},{name:"Newcomers",data:[112.42,324.45,457.5,312.75,342.45,527.56,414.75]},{name:"Abandonned",data:[787.89,534.46,365.78,107.45,145.78,54.42,27.12]}],chart:{height:250,type:"area",offsetY:-10,toolbar:{show:!1}},colors:[k.accent,k.info,k.primary],legend:{position:"bottom",horizontalAlign:"center",show:!1},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"},y:{formatter:A}}},q={series:[65],chart:{height:140,type:"radialBar",offsetX:-10,toolbar:{show:!1}},colors:[k.primary],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:k.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:k.primary,fontSize:"16px",offsetY:5}}}},labels:["Progress"]},$={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[k.primary],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:A}}},H={series:[57],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.accent],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},X={series:[36],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.primary],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},G={series:[88],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.green],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},Q={chart:{id:"sparkline1",type:"line",height:60,sparkline:{enabled:!0},group:"sparklines"},series:[{name:"Sales",data:[2565,6126,4271,5249,2245,4424,1752,3996,976,2157]}],stroke:{curve:"smooth",width:[3]},markers:{size:0},yaxis:{min:0,labels:{minWidth:100}},tooltip:{fixed:{enabled:!0,position:"right"},x:{show:!1}},colors:[k.info]},U={chart:{id:"sparkline2",type:"line",height:60,sparkline:{enabled:!0},group:"sparklines"},series:[{name:"Income",data:[12.2,14.5,2.5,47.5,32.5,44.5,14.8,55.5,41.3,69.7]}],stroke:{curve:"smooth",width:[3]},markers:{size:0},yaxis:{min:0,labels:{minWidth:100}},tooltip:{fixed:{enabled:!0,position:"right"},x:{show:!1},y:{formatter:T}},colors:[k.purple]},ee={chart:{id:"sparkline3",type:"line",height:60,sparkline:{enabled:!0},group:"sparklines"},series:[{name:"New Orders",data:[4457,4533,7274,3272,5876,3271,4614,3553,4835,1579]}],stroke:{curve:"smooth",width:[3]},markers:{size:0},tooltip:{fixed:{enabled:!0,position:"right"},x:{show:!1}},colors:[k.green],xaxis:{crosshairs:{width:1}},yaxis:{min:0,labels:{minWidth:100}}},se={chart:{id:"sparkline4",type:"line",height:60,sparkline:{enabled:!0},group:"sparklines"},series:[{name:"Abandonned",data:[1412,725,427,655,145,325,197,584,424,651]}],stroke:{curve:"smooth",width:[3]},markers:{size:0},tooltip:{fixed:{enabled:!0,position:"right"},x:{show:!1}},colors:[k.orange],xaxis:{crosshairs:{width:1}},yaxis:{min:0,labels:{minWidth:100}}},ae={series:[31],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[k.info],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},te={series:[53],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[k.primary],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},ie={series:[84],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[k.green],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},re=["Last week","Last 30 days","Last 60 days","Last 90 days"],le=[{id:0,picture:"/demo/avatars/8.jpg",username:"Erik K.",orderId:"#158456",date:"Oct 31, 2020",amount:863.42,status:"paid",tracking:"TR-7295"},{id:1,picture:"/demo/avatars/22.jpg",username:"Jimmy H.",orderId:"#15893",date:"Oct 31, 2020",amount:128,status:"paid",tracking:"TR-6259"},{id:2,picture:"/demo/avatars/25.jpg",username:"Melany W.",orderId:"#155848",date:"Oct 31, 2020",amount:236.79,status:"pending",tracking:null},{id:3,picture:"/demo/avatars/12.jpg",username:"Joshua S.",orderId:"#154736",date:"Oct 30, 2020",amount:98.31,status:"paid",tracking:"TR-48951"},{id:4,picture:"/demo/avatars/13.jpg",username:"Tara S.",orderId:"#158315",date:"Oct 30, 2020",amount:112,status:"paid",tracking:"TR-48555"}],oe={class:"ecommerce-dashboard ecommerce-dashboard-v1"},ne={class:"dashboard-header"},de=o("div",{class:"start"},[o("h3",{class:"dark-inverted"},"Welcome back, Erik Kovalsky"),o("p",null,"We're very happy to see you again on your dashboard.")],-1),ce={class:"end"},pe=u("View Reports"),he=u("Manage Shop"),ue={class:"columns is-multiline"},ge={class:"column is-3"},me={class:"dashboard-tile"},ve={class:"tile-head"},ye=o("h3",null,"Total Sales",-1),fe=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:gift"},null,-1),be={class:"dashboard-tile-inner"},we=o("div",{class:"left"},[o("span",{class:"dark-inverted"},"641.4K")],-1),ke={class:"right"},xe={class:"column is-3"},Ae={class:"dashboard-tile"},Te={class:"tile-head"},Se=o("h3",null,"Total Income",-1),_e=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:dollar-sign"},null,-1),ze={class:"dashboard-tile-inner"},Be=o("div",{class:"left"},[o("span",{class:"dark-inverted"},"$389.9K")],-1),Re={class:"right"},Oe={class:"column is-3"},je={class:"dashboard-tile"},Le={class:"tile-head"},Ie=o("h3",null,"New Orders",-1),Ve=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"},null,-1),We={class:"dashboard-tile-inner"},Ce=o("div",{class:"left"},[o("span",{class:"dark-inverted"},"371")],-1),Fe={class:"right"},Ye={class:"column is-3"},Me={class:"dashboard-tile"},Ke={class:"tile-head"},Ze=o("h3",null,"Abandonned",-1),Ne=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:shopping-cart"},null,-1),Pe={class:"dashboard-tile-inner"},De=o("div",{class:"left"},[o("span",{class:"dark-inverted"},"29")],-1),Ee={class:"right"},Je={class:"column is-6"},qe={class:"stat-widget line-stats-widget is-straight"},$e={class:"widget-head"},He=o("h3",{class:"dark-inverted"},"Revenue",-1),Xe=m('<div class="line-stats"><div class="line-stat"><span>This Month</span><span class="current">$75,648.43</span></div><div class="line-stat"><span>Last Month</span><span class="dark-inverted">$91,512.18</span></div></div>',1),Ge={class:"column is-6"},Qe={class:"stat-widget area-stats-widget is-straight"},Ue={class:"widget-head"},es=o("h3",{class:"dark-inverted"},"Customers",-1),ss=m('<div class="area-stats"><div class="area-stat"><span>New Customers</span><span class="current">249</span></div><div class="area-stat"><span>Returning</span><span class="dark-inverted">684</span></div></div>',1),as={class:"column is-6"},ts={class:"stat-widget flex-stat-widget is-straight"},is={class:"chart-media"},rs=o("div",{class:"meta"},[o("h4",{class:"dark-inverted"},"Product Returns"),o("span",{class:"is-dark-primary"},"Avg. 642"),o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria. ")],-1),ls={class:"chart-container"},os={class:"column is-6"},ns={class:"stat-widget flex-stat-widget is-straight has-fullheight"},ds={class:"chart-media"},cs=o("div",{class:"meta"},[o("h4",{class:"dark-inverted"},"Customer Engagement"),o("span",{class:"is-dark-primary"},"+34.2%"),o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria. ")],-1),ps={class:"chart-container"},hs={class:"column is-6"},us={class:"stat-widget grouped-stat-widget is-straight"},gs=o("div",{class:"widget-head"},[o("h3",{class:"dark-inverted"},"Shipping Stats")],-1),ms={class:"chart-group"},vs={class:"group"},ys={class:"group-content"},fs={class:"chart-container"},bs=o("span",{class:"dark-inverted"},"36.8K",-1),ws=o("p",null,"Free Shipping",-1),ks={class:"group"},xs={class:"group-content"},As={class:"chart-container"},Ts=o("span",{class:"dark-inverted"},"292.3K",-1),Ss=o("p",null,"Ground Shipping",-1),_s={class:"group"},zs={class:"group-content"},Bs={class:"chart-container"},Rs=o("span",{class:"dark-inverted"},"108.2K",-1),Os=o("p",null,"Next Day Air",-1),js={class:"column is-6"},Ls={class:"stat-widget grouped-stat-widget is-straight"},Is=o("div",{class:"widget-head"},[o("h3",{class:"dark-inverted"},"Customer Support")],-1),Vs={class:"chart-group"},Ws={class:"group"},Cs={class:"group-content"},Fs={class:"chart-container is-gauge"},Ys=o("span",{class:"dark-inverted"},"641",-1),Ms=o("p",null,"Active Tickets",-1),Ks={class:"group"},Zs={class:"group-content"},Ns={class:"chart-container is-gauge"},Ps=o("span",{class:"dark-inverted"},"84",-1),Ds=o("p",null,"Escalated",-1),Es={class:"group"},Js={class:"group-content"},qs={class:"chart-container is-gauge"},$s=o("span",{class:"dark-inverted"},"1,749",-1),Hs=o("p",null,"Closed Tickets",-1),Xs={class:"column is-12"},Gs={class:"table-header"},Qs=o("h3",{class:"dark-inverted"},"Recent Orders",-1),Us={class:"flex-table"},ea=o("div",{class:"flex-table-header"},[o("span",{class:"is-grow"},"Customer"),o("span",null,"Date"),o("span",null,"Amount"),o("span",null,"Status"),o("span",null,"Tracking"),o("span",{class:"cell-end"},"Actions")],-1);var sa=n({expose:[],setup:t=>(t,n)=>{const d=e,c=s,p=a,h=v("apexchart"),u=S,m=v("Multiselect"),w=f,k=b,x=D;return i(),r("div",oe,[o("div",ne,[o(d,{picture:"/demo/avatars/8.jpg",size:"large"}),de,o("div",ce,[o(c,{dark:"3"},{default:l((()=>[pe])),_:1}),o(c,{color:"primary",elevated:""},{default:l((()=>[he])),_:1})])]),o("div",ue,[o("div",ge,[o("div",me,[o("div",ve,[ye,o(p,{color:"info",rounded:""},{default:l((()=>[fe])),_:1})]),o("div",be,[we,o("div",ke,[o(h,{id:"spark1",height:g(Q).chart.height,type:g(Q).chart.type,series:g(Q).series,options:g(Q)},null,8,["height","type","series","options"])])])])]),o("div",xe,[o("div",Ae,[o("div",Te,[Se,o(p,{color:"purple",rounded:""},{default:l((()=>[_e])),_:1})]),o("div",ze,[Be,o("div",Re,[o(h,{id:"spark2",height:g(U).chart.height,type:g(U).chart.type,series:g(U).series,options:g(U)},null,8,["height","type","series","options"])])])])]),o("div",Oe,[o("div",je,[o("div",Le,[Ie,o(p,{color:"green",rounded:""},{default:l((()=>[Ve])),_:1})]),o("div",We,[Ce,o("div",Fe,[o(h,{id:"spark3",height:g(ee).chart.height,type:g(ee).chart.type,series:g(ee).series,options:g(ee)},null,8,["height","type","series","options"])])])])]),o("div",Ye,[o("div",Me,[o("div",Ke,[Ze,o(p,{color:"orange",rounded:""},{default:l((()=>[Ne])),_:1})]),o("div",Pe,[De,o("div",Ee,[o(h,{id:"spark4",height:g(se).chart.height,type:g(se).chart.type,series:g(se).series,options:g(se)},null,8,["height","type","series","options"])])])])]),o("div",Je,[o("div",qe,[o("div",$e,[He,o(u)]),Xe,o(h,{id:"line-stats-widget-chart",height:g($).chart.height,type:g($).chart.type,series:g($).series,options:g($)},null,8,["height","type","series","options"])])]),o("div",Ge,[o("div",Qe,[o("div",Ue,[es,o(u)]),ss,o(h,{id:"area-stats-widget-chart",height:g(J).chart.height,type:g(J).chart.type,series:g(J).series,options:g(J)},null,8,["height","type","series","options"])])]),o("div",as,[o("div",ts,[o("div",is,[rs,o("div",ls,[o(h,{id:"flex-stat-circle",height:g(q).chart.height,type:g(q).chart.type,series:g(q).series,options:g(q)},null,8,["height","type","series","options"])])])])]),o("div",os,[o("div",ns,[o("div",ds,[cs,o("div",ps,[o(h,{id:"flex-stat-radial",height:g(E).chart.height,type:g(E).chart.type,series:g(E).series,options:g(E)},null,8,["height","type","series","options"])])])])]),o("div",hs,[o("div",us,[gs,o("div",ms,[o("div",vs,[o("div",ys,[o("div",fs,[o(h,{id:"widget-group-radial-1",height:g(ae).chart.height,type:g(ae).chart.type,series:g(ae).series,options:g(ae)},null,8,["height","type","series","options"])]),bs,ws])]),o("div",ks,[o("div",xs,[o("div",As,[o(h,{id:"widget-group-radial-2",height:g(te).chart.height,type:g(te).chart.type,series:g(te).series,options:g(te)},null,8,["height","type","series","options"])]),Ts,Ss])]),o("div",_s,[o("div",zs,[o("div",Bs,[o(h,{id:"widget-group-radial-3",height:g(ie).chart.height,type:g(ie).chart.type,series:g(ie).series,options:g(ie)},null,8,["height","type","series","options"])]),Rs,Os])])])])]),o("div",js,[o("div",Ls,[Is,o("div",Vs,[o("div",Ws,[o("div",Cs,[o("div",Fs,[o(h,{id:"widget-group-radial-4",height:g(H).chart.height,type:g(H).chart.type,series:g(H).series,options:g(H)},null,8,["height","type","series","options"])]),Ys,Ms])]),o("div",Ks,[o("div",Zs,[o("div",Ns,[o(h,{id:"widget-group-radial-5",height:g(X).chart.height,type:g(X).chart.type,series:g(X).series,options:g(X)},null,8,["height","type","series","options"])]),Ps,Ds])]),o("div",Es,[o("div",Js,[o("div",qs,[o(h,{id:"widget-group-radial-6",height:g(G).chart.height,type:g(G).chart.type,series:g(G).series,options:g(G)},null,8,["height","type","series","options"])]),$s,Hs])])])])]),o("div",Xs,[o("div",Gs,[Qs,o(k,{class:"is-minimal-select"},{default:l((()=>[o(w,null,{default:l((()=>[o(m,{modelValue:g(0),"onUpdate:modelValue":n[1]||(n[1]=e=>y(0)?(0).value=e:null),options:g(re),placeholder:"Select an option","max-height":145},null,8,["modelValue","options"])])),_:1})])),_:1})]),o("div",Us,[ea,o(x,{rows:g(le)},null,8,["rows"])])])])])}});export{sa as _};