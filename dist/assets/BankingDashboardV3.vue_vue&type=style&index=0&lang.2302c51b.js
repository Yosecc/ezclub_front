import{_ as e}from"./V-Action.vue_vue&type=script&setup=true&lang.0bd63d87.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as s}from"./GraphDropdown.6e90daa9.js";import{_ as a}from"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as r}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.95b9c245.js";import{_ as o}from"./V-IconButton.vue_vue&type=script&setup=true&lang.d82f5fa8.js";import{t as n}from"./themeColors.4f0e93f3.js";import{p as l}from"./userPopovers.f4b9fc60.js";import{d as c,o as d,h as p,k as u,j as h,D as f,a6 as v,i as m,E as g}from"./vendor.7d033f41.js";function y(e,t){const s=[[.4,.3,1,.9,2.9,1.9,2.5,.9,1.2,.7,1.9,.5,1.3,.9,1.7,.2,.7,.5],[.2,.3,.8,.7,2.2,1.6,2.3,.7,1.1,.5,1.2,.5,1,.4,1.5,.2,.6,2]];let a=0;const i=[];let r=new Date("11 Nov 2020").getTime();for(;a<t;)i.push([r,s[e][a]]),r+=864e5,a++;return i}const b={chart:{type:"area",height:350,foreColor:"#999",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:[n.green,n.accent,n.green],stroke:{curve:"smooth",width:3},title:{text:"Bitcoin (BTC) Price Chart",align:"left"},dataLabels:{enabled:!1},series:[{name:"Expected",data:y(0,18)},{name:"Real",data:y(1,18)}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:0,offsetY:-5},tooltip:{enabled:!0}},grid:{show:!1,padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e+"%"}}},legend:{position:"top",horizontalAlign:"center"},fill:{type:"solid",fillOpacity:.7}},k={series:[54],chart:{height:220,type:"radialBar"},colors:[n.accent,n.orange,n.orange],title:{text:"Bitcoin (BTC) Evolution",align:"left"},plotOptions:{radialBar:{dataLabels:{name:{offsetY:15,fontSize:"13px",fontFamily:"Roboto, sans-serif",color:n.lightText,formatter:function(){return["(30 days)"]}},value:{color:n.accent,offsetY:-20,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500"}}}},labels:["Median Ratio"]},_={series:[67],title:{text:"Bitcoin (BTC) Popularity"},chart:{height:225,type:"radialBar",toolbar:{show:!1}},colors:[n.green,n.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:n.lightText,offsetY:80},value:{offsetY:40,fontSize:"18px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},B={class:"banking-dashboard banking-dashboard-v3"},x={class:"dashboard-header"},C=u("div",{class:"left"},[u("span",null,"Latest Bitcoin (BTC) Price Chart"),u("div",{class:"currency"},[u("span",{class:"amount is-positive dark-inverted"},"$10584.30")])],-1),w={class:"right"},j={class:"buttons"},T=g("Hour"),z=g("Day"),L=g("Week"),A=g("Month"),V=g("Year"),M={class:"columns"},R={class:"column is-8"},P=v('<div class="dashboard-tiles"><div class="dashboard-tile"><span>Market Cap</span><span class="dark-inverted">$129,992,260,090</span></div><div class="dashboard-tile"><span>Volume 24h</span><span class="dark-inverted">$453,178 K</span></div><div class="dashboard-tile"><span>Low/high 24h</span><span class="dark-inverted">$10,212 - $10,584</span></div></div>',1),S={class:"dashboard-card"},q={class:"columns is-multiline"},O={class:"column is-6"},Y={class:"dashboard-card"},D={class:"column is-6"},F={class:"dashboard-card"},W={class:"column is-4"},$={class:"dashboard-card is-side"},E=u("div",{class:"currency-description"},[u("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum, inquam, fallare, Torquate. Quid censes in Latino fore? Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter, turpiter cenabat; Duo Reges: constructio interrete. ")],-1),I={class:"button-wrap"},K=g("Buy BTC"),N=g("Compare"),X={class:"dashboard-card is-side"},G=u("div",{class:"subheading-wrap"},[u("h4",{class:"subheading dark-inverted"},"Followers"),u("a",{href:"#",class:"action-link"},"View All")],-1),H={class:"people"},Q={class:"dashboard-card is-side"},U=u("div",{class:"subheading-wrap"},[u("h4",{class:"subheading dark-inverted"},"Popular Coins"),u("a",{href:"#",class:"action-link"},"View All")],-1);var J=c({expose:[],setup:n=>(n,c)=>{const v=e,g=m("apexchart"),y=t,J=s,Z=a,ee=i,te=r,se=m("tippy"),ae=o;return d(),p("div",B,[u("div",x,[C,u("div",w,[u("div",j,[u(v,{dark:"3"},{default:h((()=>[T])),_:1}),u(v,{dark:"3"},{default:h((()=>[z])),_:1}),u(v,{dark:"3",active:""},{default:h((()=>[L])),_:1}),u(v,{dark:"3"},{default:h((()=>[A])),_:1}),u(v,{dark:"3"},{default:h((()=>[V])),_:1})])])]),u("div",M,[u("div",R,[P,u("div",S,[u(g,{id:"currency-chart",height:f(b).chart.height,type:f(b).chart.type,series:f(b).series,options:f(b)},null,8,["height","type","series","options"])]),u("div",q,[u("div",O,[u("div",Y,[u(g,{id:"radial-chart",height:f(k).chart.height,type:f(k).chart.type,series:f(k).series,options:f(k)},null,8,["height","type","series","options"])])]),u("div",D,[u("div",F,[u(g,{id:"radial-gauge",height:f(_).chart.height,type:f(_).chart.type,series:f(_).series,options:f(_)},null,8,["height","type","series","options"])])])])]),u("div",W,[u("div",$,[u(Z,{title:"Bitcoin",subtitle:"BTC",center:"","m-responsive":""},{icon:h((()=>[u(y,{picture:"/images/icons/cryptocurrencies/btc.svg"})])),action:h((()=>[u(J)])),_:1}),E,u("div",I,[u(ee,{color:"primary",elevated:""},{default:h((()=>[K])),_:1}),u(ee,{"dark-outlined":""},{default:h((()=>[N])),_:1})])]),u("div",X,[G,u("div",H,[u(se,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(te,{user:f(l).user21},null,8,["user"])])),default:h((()=>[u(y,{picture:"/demo/avatars/21.jpg"})])),_:1}),u(se,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(te,{user:f(l).user120},null,8,["user"])])),default:h((()=>[u(y,{initials:"SC",color:"h-purple"})])),_:1}),u(se,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(te,{user:f(l).user7},null,8,["user"])])),default:h((()=>[u(y,{picture:"/demo/avatars/7.jpg"})])),_:1}),u(se,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(te,{user:f(l).user124},null,8,["user"])])),default:h((()=>[u(y,{initials:"AT",color:"success"})])),_:1}),u(se,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:h((()=>[u(te,{user:f(l).user31},null,8,["user"])])),default:h((()=>[u(y,{picture:"/demo/avatars/31.jpg"})])),_:1}),u(y,{initials:"50K",color:"h-yellow"})])]),u("div",Q,[U,u(Z,{title:"Monero",subtitle:"XMR",center:""},{icon:h((()=>[u(y,{picture:"/images/icons/cryptocurrencies/xmr.svg",size:"small"})])),action:h((()=>[u(ae,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(Z,{title:"Litecoin",subtitle:"LTC",center:""},{icon:h((()=>[u(y,{picture:"/images/icons/cryptocurrencies/ltc.svg",size:"small"})])),action:h((()=>[u(ae,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(Z,{title:"ChainLink",subtitle:"LINK",center:""},{icon:h((()=>[u(y,{picture:"/images/icons/cryptocurrencies/link.svg",size:"small"})])),action:h((()=>[u(ae,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),u(Z,{title:"Binance Coin",subtitle:"BNB",center:""},{icon:h((()=>[u(y,{picture:"/images/icons/cryptocurrencies/bnb.svg",size:"small"})])),action:h((()=>[u(ae,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1})])])])])}});export{J as _};
