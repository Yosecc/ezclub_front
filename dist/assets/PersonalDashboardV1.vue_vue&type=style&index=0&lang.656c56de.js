import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as s}from"./V-IconBox.vue_vue&type=script&setup=true&lang.336954e9.js";import{_ as t}from"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import{t as i}from"./themeColors.4f0e93f3.js";import{d as o,o as r,h as l,k as n,j as d,D as c,a6 as p,i as u,E as h}from"./vendor.7d033f41.js";const v={series:[{name:"Returning",data:[31,40,28,51,42,109,100]},{name:"Newcomers",data:[11,32,45,32,34,52,41]},{name:"Abandonned",data:[78,53,36,10,14,5,2]}],chart:{height:295,type:"area",toolbar:{show:!1}},colors:[i.accent,i.info,i.green],title:{text:"Customers",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},g={series:[76],title:{text:"Team Efficiency"},chart:{height:455,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[i.accent,i.secondary,i.orange,i.purple,i.info],plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:-2,fontSize:"22px"}}}},grid:{padding:{top:80}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},m={series:[{name:"Ratio",data:[2.3,3.1,4,10.1,4]}],chart:{height:265,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["May","Jun","Jul","Aug","Sep"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},colors:[i.green,i.secondary,i.orange],title:{text:"Profit Evolution",align:"left"}},y={class:"personal-dashboard personal-dashboard-v1"},b={class:"dashboard-header"},f=n("div",{class:"start"},[n("h3",null,"Welcome back, Erik Kovalsky"),n("p",null,"We're very happy to see you again on your personal dashboard.")],-1),k={class:"end"},x=h("View Reports"),_=h("Manage Store"),w={class:"dashboard-body"},T={class:"columns is-multiline"},j={class:"column is-6"},E={class:"dashboard-card"},S=n("h4",{class:"dark-inverted"},"Your Quick Stats",-1),B={class:"quick-stats"},Z={class:"quick-stats-inner"},q={class:"quick-stat"},A=n("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"},null,-1),L={class:"quick-stat"},M=n("i",{"aria-hidden":"true",class:"lnil lnil-handshake"},null,-1),V={class:"quick-stat"},C=n("i",{"aria-hidden":"true",class:"lnil lnil-diamond-alt"},null,-1),F={class:"quick-stat"},R=n("i",{"aria-hidden":"true",class:"lnil lnil-bank"},null,-1),z={class:"column is-6"},D={class:"dashboard-card"},H=p('<div class="column is-4"><div class="dashboard-card is-upgrade"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="cta-content"><h4>Hey Erik, you&#39;re doing great.</h4><p class="white-text"> Start using our team and project management tools </p><a class="link inverted-text">Learn More</a></div></div></div>',1),W={class:"column is-4"},Y={class:"dashboard-card is-gauge"},I={class:"people"},J={class:"column is-4"},N={class:"dashboard-card"};var O=o({expose:[],setup:i=>(i,o)=>{const p=e,h=a,O=s,$=t,K=u("apexchart");return r(),l("div",y,[n("div",b,[n(p,{picture:"/demo/avatars/8.jpg",size:"large"}),f,n("div",k,[n(h,{dark:"3"},{default:d((()=>[x])),_:1}),n(h,{color:"primary",elevated:""},{default:d((()=>[_])),_:1})])]),n("div",w,[n("div",T,[n("div",j,[n("div",E,[S,n("div",B,[n("div",Z,[n("div",q,[n($,{title:"2,870",subtitle:"Sales this month",center:"","m-responsive":"","t-responsive":""},{icon:d((()=>[n(O,{color:"purple",rounded:""},{default:d((()=>[A])),_:1})])),_:1})]),n("div",L,[n($,{title:"131",subtitle:"New users",center:"","m-responsive":"","t-responsive":""},{icon:d((()=>[n(O,{color:"orange",rounded:""},{default:d((()=>[M])),_:1})])),_:1})]),n("div",V,[n($,{title:"$398,49",subtitle:"Earned today",center:"","m-responsive":"","t-responsive":""},{icon:d((()=>[n(O,{color:"green",rounded:""},{default:d((()=>[C])),_:1})])),_:1})]),n("div",F,[n($,{title:"$6542,31",subtitle:"Total balance",center:"","m-responsive":"","t-responsive":""},{icon:d((()=>[n(O,{color:"info",rounded:""},{default:d((()=>[R])),_:1})])),_:1})])])])])]),n("div",z,[n("div",D,[n(K,{height:c(v).chart.height,type:c(v).chart.type,series:c(v).series,options:c(v)},null,8,["height","type","series","options"])])]),H,n("div",W,[n("div",Y,[n("div",I,[n(p,{picture:"/demo/avatars/21.jpg"}),n(p,{initials:"SC",color:"h-purple"}),n(p,{picture:"/demo/avatars/39.jpg"})]),n(K,{height:c(g).chart.height,type:c(g).chart.type,series:c(g).series,options:c(g)},null,8,["height","type","series","options"])])]),n("div",J,[n("div",N,[n(K,{height:c(m).chart.height,type:c(m).chart.type,series:c(m).series,options:c(m)},null,8,["height","type","series","options"])])])])])])}});export{O as _};
