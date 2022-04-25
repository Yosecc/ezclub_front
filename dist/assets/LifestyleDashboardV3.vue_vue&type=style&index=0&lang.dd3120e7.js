import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.33fcd2c5.js";import{_ as s}from"./WidgetDropdown.0aecc4e4.js";import{_ as e}from"./UIWidget.vue_vue&type=script&setup=true&lang.72b05625.js";import{_ as l}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.aaf67d01.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.b5cfc3e8.js";import{_ as i}from"./UIWidgetToolbarFollowers.vue_vue&type=script&setup=true&lang.7c64e474.js";import{d as r,h as o,o as n,i as d,k as c,G as u,j as h,D as p,E as m,F as v}from"./vendor.512b7acb.js";import{t as g}from"./themeColors.4f0e93f3.js";import{d as y}from"./apex-formatters.c1b13750.js";import{p as f,o as b}from"./personalScoreGauge.00971afe.js";import{f as w}from"./followers.e3342b9c.js";function x(a,s,e){let l=0;const t=[];for(;l<s;){const s=Math.floor(Math.random()*(e.max-e.min+1))+e.min;t.push([a,s]),a+=864e5,l++}return t}const k={series:[{name:"Tonic",data:x(new Date("Oct 11 2020 GMT").getTime(),20,{min:10,max:60})},{name:"Tantra",data:x(new Date("Oct 11 2020 GMT").getTime(),20,{min:10,max:60})},{name:"Vital",data:x(new Date("Oct 11 2020 GMT").getTime(),30,{min:10,max:60})}],chart:{height:280,type:"scatter",zoom:{type:"xy"},toolbar:{show:!1}},colors:[g.accent,g.primary,g.purple],dataLabels:{enabled:!1,show:!1},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},xaxis:{show:!1,type:"datetime"},yaxis:{show:!1,max:70},legend:{show:!1,position:"top",horizontalAlign:"center"}},T={series:[{name:"Condition (pt)",data:[31,40,28,51,42,109,100]}],chart:{type:"area",height:280,offsetX:20,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},grid:{show:!1},stroke:{width:[2,2,2],curve:"straight"},colors:[g.primary],labels:["Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yaxis:{opposite:!0},legend:{horizontalAlign:"left"}},_={series:[{name:"Variation (pt)",data:[23,26,10,7,11,18,16]}],chart:{height:280,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:y,offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},grid:{show:!1},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:y}},colors:[g.purple]},D={series:[{name:"Progress (pt)",data:[31,40,28,51,42,109,100]}],chart:{type:"area",height:280,offsetX:20,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},grid:{show:!1},stroke:{width:[2,2,2],curve:"smooth"},colors:[g.primary],labels:["Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yaxis:{opposite:!0},legend:{horizontalAlign:"left"}},j={class:"lifestyle-dashboard lifestyle-dashboard-v3"},M=c("div",{class:"illustration-header"},[c("div",{class:"header-image"},[c("img",{src:"/assets/doctor.aa04a7c3.svg",alt:""})]),c("div",{class:"header-meta"},[c("h3",null,"Today's Summary"),c("p",null,"Monitor your activity and keep improving your weak points."),c("div",{class:"summary-stats"},[c("div",{class:"summary-stat"},[c("span",null,"900 kcal"),c("span",null,"Burnt today")]),c("div",{class:"summary-stat"},[c("span",null,"2300 kcal"),c("span",null,"Eaten today")]),c("div",{class:"summary-stat"},[c("span",null,"10,864"),c("span",null,"Steps walked")]),c("div",{class:"summary-stat"},[c("span",null,"2% fat"),c("span",null,"Burnt today")]),c("div",{class:"summary-stat h-hidden-tablet-p"},[c("span",null,"8.4 km"),c("span",null,"distance today")])])])],-1),S={class:"columns is-multiline is-flex-tablet-p"},W={class:"column is-3"},B={class:"health-tile"},O={class:"tile-head"},L=c("i",{"aria-hidden":"true",class:"fas fa-tint"},null,-1),C=c("h4",null,[c("span",{class:"dark-inverted"},"114/90"),c("span",null,"Min/Max")],-1),F=c("h3",{class:"dark-inverted"},"Blood",-1),I=c("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ",-1),R={class:"column is-3"},Y={class:"health-tile"},z={class:"tile-head"},G=c("i",{"aria-hidden":"true",class:"fas fa-heart"},null,-1),E=c("h4",null,[c("span",{class:"dark-inverted"},"112"),c("span",null,"Bpm")],-1),A=c("h3",{class:"dark-inverted"},"Heart Rate",-1),J=c("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ",-1),N={class:"column is-3"},V={class:"health-tile"},P={class:"tile-head"},U=c("i",{"aria-hidden":"true",class:"fas fa-pump-medical"},null,-1),H=c("h4",null,[c("span",{class:"dark-inverted"},"12/14"),c("span",null,"units")],-1),X=c("h3",{class:"dark-inverted"},"Blood Pressure",-1),q=c("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ",-1),K={class:"column is-3"},Q={class:"health-tile"},Z={class:"tile-head"},$=c("i",{"aria-hidden":"true",class:"fas fa-weight"},null,-1),aa=c("h4",null,[c("span",{class:"dark-inverted"},"60.4"),c("span",null,"lbs")],-1),sa=c("h3",{class:"dark-inverted"},"Weight",-1),ea=c("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit Illis videtur. ",-1),la={class:"columns is-multiline"},ta={class:"column is-9"},ia={class:"columns is-multiline"},ra={class:"column is-6"},oa={class:"dashboard-card"},na={class:"card-head"},da=c("h3",{class:"dark-inverted"},"Overall Condition",-1),ca=c("div",{class:"chart-meta"},[c("p",null,[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"}),m(" Your overall condition is very good. Make it even better. "),c("a",{class:"is-dark-primary"},"Read how")])],-1),ua={class:"column is-6"},ha={class:"dashboard-card"},pa={class:"card-head"},ma=c("h3",{class:"dark-inverted"},"Energy Report",-1),va=c("div",{class:"chart-meta"},[c("p",null,[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"}),m(" Your energy seems a bit unstable. You can improve it. "),c("a",{class:"is-dark-primary"},"Read how")])],-1),ga={class:"column is-6"},ya={class:"dashboard-card"},fa={class:"card-head"},ba=c("h3",{class:"dark-inverted"},"Oxygenation",-1),wa=c("div",{class:"chart-meta"},[c("p",null,[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"}),m(" Your oxygen seems a bit unstable. You can improve it. "),c("a",{class:"is-dark-primary"},"Read how")])],-1),xa={class:"column is-6"},ka={class:"dashboard-card"},Ta={class:"card-head"},_a=c("h3",{class:"dark-inverted"},"Overall Progress",-1),Da=c("div",{class:"chart-meta"},[c("p",null,[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"}),m(" Your overall condition is very good. Make it even better. "),c("a",{class:"is-dark-primary"},"Read how")])],-1),ja={class:"column is-3"},Ma=c("div",{class:"field"},[c("div",{class:"control"},[c("input",{type:"text",class:"input",placeholder:"Search..."}),c("button",{class:"searcv-button"},[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})])]),c("div",{class:"topics"},[c("a",null,"#Health"),c("a",null,"#Cardio"),c("a",null,"#Nutrition")])],-1),Sa=c("div",{class:"widget-toolbar"},[c("div",{class:"left"},[c("a",{class:"action-icon"},[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),c("div",{class:"center"},[c("h3",null,"October 2020")]),c("div",{class:"right"},[c("a",{class:"action-icon"},[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),Wa=c("table",{class:"calendar"},[c("thead",null,[c("tr",null,[c("th",{scope:"col"},"Mon"),c("th",{scope:"col"},"Tue"),c("th",{scope:"col"},"Wed"),c("th",{scope:"col"},"Thu"),c("th",{scope:"col"},"Fri"),c("th",{scope:"col"},"Sat"),c("th",{scope:"col"},"Sun")])]),c("tbody",null,[c("tr",null,[c("td",{class:"prev-month"},"29"),c("td",{class:"prev-month"},"30"),c("td",{class:"prev-month"},"31"),c("td",null,"1"),c("td",null,"2"),c("td",null,"3"),c("td",null,"4")]),c("tr",null,[c("td",null,"5"),c("td",null,"6"),c("td",null,"7"),c("td",null,"8"),c("td",null,"9"),c("td",null,"10"),c("td",null,"11")]),c("tr",null,[c("td",null,"12"),c("td",null,"13"),c("td",null,"14"),c("td",null,"15"),c("td",null,"16"),c("td",null,"17"),c("td",{class:"current-day"},"18")]),c("tr",null,[c("td",null,"19"),c("td",null,"20"),c("td",null,"21"),c("td",null,"22"),c("td",null,"23"),c("td",null,"24"),c("td",null,"25")]),c("tr",null,[c("td",null,"26"),c("td",null,"27"),c("td",null,"28"),c("td",null,"29"),c("td",null,"30"),c("td",null,"31"),c("td",{class:"next-month"},"1")])])],-1),Ba={class:"gauge-wrap"},Oa=c("div",{class:"widget-content"},[c("p",null,"Your score has been calculated based on the latest metrics")],-1),La={class:"widget-content"},Ca=m(" Great News! "),Fa=m(", "),Ia=m(" and "),Ra=m(" are now friends with you. Take some time to look at their profile. ");var Ya=r({expose:[],setup:r=>(r,m)=>{const g=a,y=s,x=o("apexchart"),Ya=e,za=l,Ga=t,Ea=i;return n(),d("div",j,[M,c("div",S,[u("Tile"),c("div",W,[c("div",B,[c("div",O,[c(g,{color:"primary"},{default:h((()=>[L])),_:1}),C]),F,I])]),u("Tile"),c("div",R,[c("div",Y,[c("div",z,[c(g,{color:"primary"},{default:h((()=>[G])),_:1}),E]),A,J])]),u("Tile"),c("div",N,[c("div",V,[c("div",P,[c(g,{color:"primary"},{default:h((()=>[U])),_:1}),H]),X,q])]),u("Tile"),c("div",K,[c("div",Q,[c("div",Z,[c(g,{color:"primary"},{default:h((()=>[$])),_:1}),aa]),sa,ea])])]),c("div",la,[c("div",ta,[c("div",ia,[u("Dashboard Card"),c("div",ra,[c("div",oa,[c("div",na,[da,c(y)]),ca,c(x,{id:"overall-chart",height:p(T).chart.height,type:p(T).chart.type,series:p(T).series,options:p(T)},null,8,["height","type","series","options"])])]),u("Dashboard Card"),c("div",ua,[c("div",ha,[c("div",pa,[ma,c(y)]),va,c(x,{id:"energy-chart",height:p(k).chart.height,type:p(k).chart.type,series:p(k).series,options:p(k)},null,8,["height","type","series","options"])])]),u("Dashboard Card"),c("div",ga,[c("div",ya,[c("div",fa,[ba,c(y)]),wa,c(x,{id:"overall-chart",height:p(_).chart.height,type:p(_).chart.type,series:p(_).series,options:p(_)},null,8,["height","type","series","options"])])]),u("Dashboard Card"),c("div",xa,[c("div",ka,[c("div",Ta,[_a,c(y)]),Da,c(x,{id:"progress-chart",height:p(D).chart.height,type:p(D).chart.type,series:p(D).series,options:p(D)},null,8,["height","type","series","options"])])])])]),c("div",ja,[u("Widget"),c(Ya,{class:"search-widget"},{body:h((()=>[Ma])),_:1}),u("Widget"),c(Ya,{class:"picker-widget"},{header:h((()=>[Sa])),body:h((()=>[Wa])),_:1}),u("Widget"),c(Ya,{class:"gauge-widget"},{header:h((()=>[c(za,{title:"Gauge Widget"})])),body:h((()=>[c("div",Ba,[c(Ga,{class:"gauge-holder",options:p(f),onReady:p(b)},null,8,["options","onReady"])]),Oa])),_:1}),u("Widget"),c(Ya,{class:"text-widget"},{header:h((()=>[c(Ea,{title:"New Friends",avatars:p(w)},null,8,["avatars"])])),body:h((()=>[c("div",La,[c("p",null,[Ca,c("span",null,v(p(w)[0].name),1),Fa,c("span",null,v(p(w)[1].name),1),Ia,c("span",null,v(p(w)[2].name),1),Ra])])])),_:1})])])])}});export{Ya as _};
