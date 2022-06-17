import{_ as e}from"./V-Action.vue_vue&type=script&setup=true&lang.d9ad8790.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.2afd81f7.js";import{_ as s}from"./GraphDropdown.0fc4b2a9.js";import{_ as a}from"./V-Block.vue_vue&type=script&setup=true&lang.aed64b1f.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.56502a24.js";import{_ as r}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.830ef7c4.js";import{_ as o}from"./V-IconButton.vue_vue&type=script&setup=true&lang.de1be67a.js";import{d as l,h as n,o as c,i as d,H as p,k as u,j as h,E as f,a7 as v,F as m}from"./vendor.31bd1321.js";import{t as g}from"./themeColors.4f0e93f3.js";import{p as y}from"./userPopovers.f4b9fc60.js";function b(e,t){const s=[[.4,.3,1,.9,2.9,1.9,2.5,.9,1.2,.7,1.9,.5,1.3,.9,1.7,.2,.7,.5],[.2,.3,.8,.7,2.2,1.6,2.3,.7,1.1,.5,1.2,.5,1,.4,1.5,.2,.6,2]];let a=0;const i=[];let r=new Date("11 Nov 2020").getTime();for(;a<t;)i.push([r,s[e][a]]),r+=864e5,a++;return i}const k={chart:{type:"area",height:350,foreColor:"#999",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:[g.green,g.accent,g.green],stroke:{curve:"smooth",width:3},title:{text:"Bitcoin (BTC) Price Chart",align:"left"},dataLabels:{enabled:!1},series:[{name:"Expected",data:b(0,18)},{name:"Real",data:b(1,18)}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:0,offsetY:-5},tooltip:{enabled:!0}},grid:{show:!1,padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e+"%"}}},legend:{position:"top",horizontalAlign:"center"},fill:{type:"solid",fillOpacity:.7}},_={series:[54],chart:{height:220,type:"radialBar"},colors:[g.accent,g.orange,g.orange],title:{text:"Bitcoin (BTC) Evolution",align:"left"},plotOptions:{radialBar:{dataLabels:{name:{offsetY:15,fontSize:"13px",fontFamily:"Roboto, sans-serif",color:g.lightText,formatter:function(){return["(30 days)"]}},value:{color:g.accent,offsetY:-20,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500"}}}},labels:["Median Ratio"]},x={series:[67],title:{text:"Bitcoin (BTC) Popularity"},chart:{height:225,type:"radialBar",toolbar:{show:!1}},colors:[g.green,g.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:g.lightText,offsetY:80},value:{offsetY:40,fontSize:"18px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},B={class:"banking-dashboard banking-dashboard-v3"},C={class:"dashboard-header"},T=u("div",{class:"left"},[u("span",null,"Latest Bitcoin (BTC) Price Chart"),u("div",{class:"currency"},[u("span",{class:"amount is-positive dark-inverted"},"$10584.30")])],-1),w={class:"right"},j={class:"buttons"},z=m("Hour"),L=m("Day"),A=m("Week"),V=m("Month"),M=m("Year"),R={class:"columns"},P={class:"column is-8"},S=v('<div class="dashboard-tiles">\x3c!--Tile--\x3e<div class="dashboard-tile"><span>Market Cap</span><span class="dark-inverted">$129,992,260,090</span></div>\x3c!--Tile--\x3e<div class="dashboard-tile"><span>Volume 24h</span><span class="dark-inverted">$453,178 K</span></div>\x3c!--Tile--\x3e<div class="dashboard-tile"><span>Low/high 24h</span><span class="dark-inverted">$10,212 - $10,584</span></div></div>',1),q={class:"dashboard-card"},F={class:"columns is-multiline"},O={class:"column is-6"},Y={class:"dashboard-card"},W={class:"column is-6"},$={class:"dashboard-card"},D={class:"column is-4"},I={class:"dashboard-card is-side"},E=u("div",{class:"currency-description"},[u("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum, inquam, fallare, Torquate. Quid censes in Latino fore? Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter, turpiter cenabat; Duo Reges: constructio interrete. ")],-1),H={class:"button-wrap"},K=m("Buy BTC"),N=m("Compare"),X={class:"dashboard-card is-side"},G=u("div",{class:"subheading-wrap"},[u("h4",{class:"subheading dark-inverted"},"Followers"),u("a",{href:"#",class:"action-link"},"View All")],-1),Q={class:"people"},U={class:"dashboard-card is-side"},J=u("div",{class:"subheading-wrap"},[u("h4",{class:"subheading dark-inverted"},"Popular Coins"),u("a",{href:"#",class:"action-link"},"View All")],-1);var Z=l({expose:[],setup:l=>(l,v)=>{const m=e,g=n("apexchart"),b=t,Z=s,ee=a,te=i,se=r,ae=n("tippy"),ie=o;return c(),d("div",B,[p("Header"),u("div",C,[T,u("div",w,[u("div",j,[u(m,{dark:"3"},{default:h((()=>[z])),_:1}),u(m,{dark:"3"},{default:h((()=>[L])),_:1}),u(m,{dark:"3",active:""},{default:h((()=>[A])),_:1}),u(m,{dark:"3"},{default:h((()=>[V])),_:1}),u(m,{dark:"3"},{default:h((()=>[M])),_:1})])])]),p("Body"),u("div",R,[u("div",P,[p("Tiles"),S,p("Chart"),u("div",q,[u(g,{id:"currency-chart",height:f(k).chart.height,type:f(k).chart.type,series:f(k).series,options:f(k)},null,8,["height","type","series","options"])]),u("div",F,[u("div",O,[u("div",Y,[u(g,{id:"radial-chart",height:f(_).chart.height,type:f(_).chart.type,series:f(_).series,options:f(_)},null,8,["height","type","series","options"])])]),u("div",W,[u("div",$,[u(g,{id:"radial-gauge",height:f(x).chart.height,type:f(x).chart.type,series:f(x).series,options:f(x)},null,8,["height","type","series","options"])])])])]),u("div",D,[p("Info"),u("div",I,[u(ee,{title:"Bitcoin",subtitle:"BTC",center:"","m-responsive":""},{icon:h((()=>[u(b,{picture:"/images/icons/cryptocurrencies/btc.svg"})])),action:h((()=>[u(Z)])),_:1}),E,u("div",H,[u(te,{color:"primary",elevated:""},{default:h((()=>[K])),_:1}),u(te,{"dark-outlined":""},{default:h((()=>[N])),_:1})])]),u("div",X,[G,u("div",Q,[u(ae,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(se,{user:f(y).user21},null,8,["user"])])),default:h((()=>[u(b,{picture:"/demo/avatars/21.jpg"})])),_:1}),u(ae,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(se,{user:f(y).user120},null,8,["user"])])),default:h((()=>[u(b,{initials:"SC",color:"h-purple"})])),_:1}),u(ae,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(se,{user:f(y).user7},null,8,["user"])])),default:h((()=>[u(b,{picture:"/demo/avatars/7.jpg"})])),_:1}),u(ae,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(se,{user:f(y).user124},null,8,["user"])])),default:h((()=>[u(b,{initials:"AT",color:"success"})])),_:1}),u(ae,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(se,{user:f(y).user31},null,8,["user"])])),default:h((()=>[u(b,{picture:"/demo/avatars/31.jpg"})])),_:1}),u(b,{initials:"50K",color:"h-yellow"})])]),u("div",U,[J,u(ee,{title:"Monero",subtitle:"XMR",center:""},{icon:h((()=>[u(b,{picture:"/images/icons/cryptocurrencies/xmr.svg",size:"small"})])),action:h((()=>[u(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(ee,{title:"Litecoin",subtitle:"LTC",center:""},{icon:h((()=>[u(b,{picture:"/images/icons/cryptocurrencies/ltc.svg",size:"small"})])),action:h((()=>[u(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(ee,{title:"ChainLink",subtitle:"LINK",center:""},{icon:h((()=>[u(b,{picture:"/images/icons/cryptocurrencies/link.svg",size:"small"})])),action:h((()=>[u(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(ee,{title:"Binance Coin",subtitle:"BNB",center:""},{icon:h((()=>[u(b,{picture:"/images/icons/cryptocurrencies/bnb.svg",size:"small"})])),action:h((()=>[u(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1})])])])])}});export{Z as _};
