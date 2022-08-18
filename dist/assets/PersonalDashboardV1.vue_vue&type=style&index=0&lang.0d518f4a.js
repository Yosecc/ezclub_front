import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as s}from"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import{_ as t}from"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import{d as i,h as o,o as r,i as l,H as n,k as d,j as c,E as p,a8 as u,F as h}from"./vendor.5bccebbb.js";import{t as v}from"./themeColors.4f0e93f3.js";const g={series:[{name:"Returning",data:[31,40,28,51,42,109,100]},{name:"Newcomers",data:[11,32,45,32,34,52,41]},{name:"Abandonned",data:[78,53,36,10,14,5,2]}],chart:{height:295,type:"area",toolbar:{show:!1}},colors:[v.accent,v.info,v.green],title:{text:"Customers",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},m={series:[76],title:{text:"Team Efficiency"},chart:{height:455,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[v.accent,v.secondary,v.orange,v.purple,v.info],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:80}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},y={series:[{name:"Ratio",data:[2.3,3.1,4,10.1,4]}],chart:{height:265,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["May","Jun","Jul","Aug","Sep"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},colors:[v.green,v.secondary,v.orange],title:{text:"Profit Evolution",align:"left"}},b={class:"personal-dashboard personal-dashboard-v1"},f={class:"dashboard-header"},k=d("div",{class:"start"},[d("h3",null,"Welcome back, Erik Kovalsky"),d("p",null,"We're very happy to see you again on your personal dashboard.")],-1),x={class:"end"},_=h("View Reports"),w=h("Manage Store"),T={class:"dashboard-body"},S={class:"columns is-multiline"},j={class:"column is-6"},B={class:"dashboard-card"},C=d("h4",{class:"dark-inverted"},"Your Quick Stats",-1),E={class:"quick-stats"},Z={class:"quick-stats-inner"},q={class:"quick-stat"},A=d("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"},null,-1),V={class:"quick-stat"},F=d("i",{"aria-hidden":"true",class:"lnil lnil-handshake"},null,-1),H={class:"quick-stat"},L=d("i",{"aria-hidden":"true",class:"lnil lnil-diamond-alt"},null,-1),M={class:"quick-stat"},R=d("i",{"aria-hidden":"true",class:"lnil lnil-bank"},null,-1),z={class:"column is-6"},D={class:"dashboard-card"},W=u('<div class="column is-4"><div class="dashboard-card is-upgrade"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="cta-content"><h4>Hey Erik, you&#39;re doing great.</h4><p class="white-text"> Start using our team and project management tools </p><a class="link inverted-text">Learn More</a></div></div></div>',1),Y={class:"column is-4"},I={class:"dashboard-card is-gauge"},J={class:"people"},N={class:"column is-4"},O={class:"dashboard-card"};var P=i({expose:[],setup:i=>(i,u)=>{const h=e,v=a,P=s,$=t,K=o("apexchart");return r(),l("div",b,[n("Personal Dashboard V1"),n("Header"),d("div",f,[d(h,{picture:"/demo/avatars/8.jpg",size:"large"}),k,d("div",x,[d(v,{dark:"3"},{default:c((()=>[_])),_:1}),d(v,{color:"primary",elevated:""},{default:c((()=>[w])),_:1})])]),n("Body"),d("div",T,[d("div",S,[n("Card"),d("div",j,[d("div",B,[C,d("div",E,[d("div",Z,[n("Stat"),d("div",q,[d($,{title:"2,870",subtitle:"Sales this month",center:"","m-responsive":"","t-responsive":""},{icon:c((()=>[d(P,{color:"purple",rounded:""},{default:c((()=>[A])),_:1})])),_:1})]),n("Stat"),d("div",V,[d($,{title:"131",subtitle:"New users",center:"","m-responsive":"","t-responsive":""},{icon:c((()=>[d(P,{color:"orange",rounded:""},{default:c((()=>[F])),_:1})])),_:1})]),n("Stat"),d("div",H,[d($,{title:"$398,49",subtitle:"Earned today",center:"","m-responsive":"","t-responsive":""},{icon:c((()=>[d(P,{color:"green",rounded:""},{default:c((()=>[L])),_:1})])),_:1})]),n("Stat"),d("div",M,[d($,{title:"$6542,31",subtitle:"Total balance",center:"","m-responsive":"","t-responsive":""},{icon:c((()=>[d(P,{color:"info",rounded:""},{default:c((()=>[R])),_:1})])),_:1})])])])])]),n("Card"),d("div",z,[d("div",D,[d(K,{height:p(g).chart.height,type:p(g).chart.type,series:p(g).series,options:p(g)},null,8,["height","type","series","options"])])]),n("Card"),W,n("Card"),d("div",Y,[d("div",I,[d("div",J,[d(h,{picture:"/demo/avatars/21.jpg"}),d(h,{initials:"SC",color:"h-purple"}),d(h,{picture:"/demo/avatars/39.jpg"})]),d(K,{height:p(m).chart.height,type:p(m).chart.type,series:p(m).series,options:p(m)},null,8,["height","type","series","options"])])]),n("Card"),d("div",N,[d("div",O,[d(K,{height:p(y).chart.height,type:p(y).chart.type,series:p(y).series,options:p(y)},null,8,["height","type","series","options"])])])])])])}});export{P as _};
