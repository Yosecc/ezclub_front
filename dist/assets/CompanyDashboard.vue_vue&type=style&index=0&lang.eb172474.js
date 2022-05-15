import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.6997ebf4.js";import{_ as s}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.c66b7ec5.js";import{_ as a}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.08856eb7.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.7efdc1b1.js";import{_ as i}from"./UIWidget.vue_vue&type=script&setup=true&lang.ee642d79.js";import{_ as r}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.b79e6020.js";import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.2c6b8d85.js";import{_ as l}from"./V-Block.vue_vue&type=script&setup=true&lang.9c4c74e3.js";import{t as d}from"./themeColors.4f0e93f3.js";import{y as o,d as c,G as p,o as u,h as v,k as h,j as m,D as y,a6 as g,i as b,E as f}from"./vendor.ce9b165f.js";import{p as k,o as x}from"./personalScoreGauge.9cb502fb.js";import{p as w}from"./userPopovers.f4b9fc60.js";const _={series:[{data:[21,22,10,28,16,21,13,30,35,41,36,26]}],chart:{height:180,type:"bar",toolbar:{show:!1},sparkline:{enabled:!0}},colors:[d.accent,d.primary,d.info],plotOptions:{bar:{columnWidth:"30px",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,labels:{show:!1},padding:{left:0,right:0}}]},j={series:[{name:"New Users",data:[44,55,57,56,61,58,63,60,66]},{name:"Renewals",data:[76,85,101,98,87,105,91,114,94]},{name:"Resigns",data:[35,41,36,26,45,48,52,53,41]}],chart:{height:180,type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},colors:[d.primary,d.accent,d.info],grid:{show:!1,padding:{left:0,right:0}},dataLabels:{enabled:!1},stroke:{width:[2],curve:"smooth"},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,labels:{show:!1},padding:{left:0,right:0}}],tooltip:{x:{show:!1,format:"dd/MM/yy HH:mm"}}},P=[{x:"Jan",y:322},{x:"Feb",y:459},{x:"Mar",y:212},{x:"Apr",y:345},{x:"May",y:111},{x:"Jun",y:189},{x:"Jul",y:498},{x:"Aug",y:612},{x:"Sep",y:451},{x:"Oct",y:248},{x:"Nov",y:306},{x:"Dec",y:366}],I=[{x:"Jan",y:25},{x:"Feb",y:49},{x:"Mar",y:36},{x:"Apr",y:84},{x:"May",y:64},{x:"Jun",y:131},{x:"Jul",y:48},{x:"Aug",y:144},{x:"Sep",y:96},{x:"Oct",y:11},{x:"Nov",y:31},{x:"Dec",y:8}],M=o({series:[],chart:{height:235,type:"bar",toolbar:{show:!1}},colors:[d.accent,d.primary],dataLabels:{enabled:!1},noData:{text:"Loading..."},xaxis:{type:"category",tickPlacement:"on",labels:{rotate:-45,rotateAlways:!0}}});const S={searchable:!1,perPageSelect:!1,perPage:10,columns:[{select:0,hidden:!0},{select:1,render:function(e,s,a){return`\n          <div class="v-avatar">\n              <img class="avatar" src="${e}" alt="">\n          </div>\n      `},sortable:!1},{select:2,render:function(e,s,a){return`<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${e}</span>`}},{select:3,render:function(e,s,a){return`<span class="light-text">${e}</span>`}},{select:4,render:function(e,s,a){return`\n          <div class="status is-${e}">\n              <i aria-hidden="true" class="fas fa-circle"></i>\n              <span class="is-capitalize">${e}</span>\n          </div>\n      `}},{select:5,render:function(e,s,a){return`<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${a.dataIndex}">Manage</button></div>`},sortable:!1}],data:{headings:["ID","Picture","Name","Position","Status","Actions"],data:[[0,"/demo/avatars/8.jpg","Erik Kovalsky","Product Manager","busy",!0],[1,"/demo/avatars/7.jpg","Alice Carasca","Software Engineer","offline",!0],[2,"/demo/avatars/13.jpg","Tara Svenson","UI/UX Designer","offline",!0],[3,"/demo/avatars/5.jpg","Mary Lebowski","Project Manager","available",!0],[5,"/demo/avatars/27.jpg","Carmen Escudero","HR Manager","offline",!0]]}},U={class:"business-dashboard company-dashboard"},A=g('<div class="company-header is-dark-card-bordered is-dark-bg-6"><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-users-alt is-dark-primary"></i><span class="dark-inverted">162</span><p>New Users</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-diamond-alt is-dark-primary"></i><span class="dark-inverted">$1,835.41</span><p>Daily Income</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-briefcase-alt is-dark-primary"></i><span class="dark-inverted">378</span><p>Completed Projects</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-ticket is-dark-primary"></i><span class="dark-inverted">192</span><p>Active Tickets</p></div></div></div>',1),C={class:"columns is-multiline"},D={class:"column is-4"},T={class:"dashboard-card is-company"},J=h("button",{class:"button icon-button is-circle is-dark-outlined"},[h("span",{class:"icon is-small"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"})])],-1),L=g('<h3 class="dark-inverted">U Learning</h3><p>Online Courses</p><div class="description"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna. </p></div><div class="company-stats is-dark-bordered-12"><div class="company-stat"><div><span>Posts</span><span class="dark-inverted">864</span></div></div><div class="company-stat"><div><span>Projects</span><span class="dark-inverted">261</span></div></div><div class="company-stat"><div><span>Followers</span><span class="dark-inverted">32K</span></div></div></div>',4),R={class:"column is-4"},W={class:"dashboard-card is-base-chart"},$=g('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>New</span><span class="current">153</span></div><div class="revenue-stat"><span>Renewals</span><span class="dark-inverted">641</span></div><div class="revenue-stat"><span>Resigns</span><span class="dark-inverted">64</span></div></div></div>',1),z={class:"chart-container"},N={class:"column is-4"},O={class:"dashboard-card is-base-chart"},V=g('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>Facebook</span><span class="current">64K</span></div><div class="revenue-stat"><span>Instagram</span><span class="dark-inverted">78K</span></div><div class="revenue-stat"><span>Twitter</span><span class="dark-inverted">25K</span></div></div></div>',1),B={class:"chart-container"},F={class:"column is-12"},K={class:"column is-3"},E={class:"gauge-wrap"},G=h("div",{class:"widget-content"},[h("p",null,"Your score has been calculated based on the latest metrics")],-1),H={class:"column is-6"},X={class:"dashboard-card"},Y=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Subscriptions")],-1),q={class:"column is-3"},Q=h("div",{class:"widget-toolbar"},[h("div",{class:"left"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),h("div",{class:"center"},[h("h3",null,"October 2020")]),h("div",{class:"right"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),Z=h("table",{class:"calendar"},[h("thead",null,[h("tr",null,[h("th",{scope:"col"},"Mon"),h("th",{scope:"col"},"Tue"),h("th",{scope:"col"},"Wed"),h("th",{scope:"col"},"Thu"),h("th",{scope:"col"},"Fri"),h("th",{scope:"col"},"Sat"),h("th",{scope:"col"},"Sun")])]),h("tbody",null,[h("tr",null,[h("td",{class:"prev-month"},"29"),h("td",{class:"prev-month"},"30"),h("td",{class:"prev-month"},"31"),h("td",null,"1"),h("td",null,"2"),h("td",null,"3"),h("td",null,"4")]),h("tr",null,[h("td",null,"5"),h("td",null,"6"),h("td",null,"7"),h("td",null,"8"),h("td",null,"9"),h("td",null,"10"),h("td",null,"11")]),h("tr",null,[h("td",null,"12"),h("td",null,"13"),h("td",null,"14"),h("td",null,"15"),h("td",null,"16"),h("td",null,"17"),h("td",{class:"current-day"},"18")]),h("tr",null,[h("td",null,"19"),h("td",null,"20"),h("td",null,"21"),h("td",null,"22"),h("td",null,"23"),h("td",null,"24"),h("td",null,"25")]),h("tr",null,[h("td",null,"26"),h("td",null,"27"),h("td",null,"28"),h("td",null,"29"),h("td",null,"30"),h("td",null,"31"),h("td",{class:"next-month"},"1")])])],-1),ee={class:"column is-12"},se={class:"dashboard-card is-tickets"},ae=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Pending Tickets"),h("a",{class:"action-link"},"View All")],-1),te={class:"ticket-list"},ie=f("Manage"),re=f("Manage"),ne=f("Manage"),le=f("Manage");var de=c({expose:[],setup:d=>(p((async()=>{setTimeout((()=>{M.series=[{name:"Orders",data:P}]}),1e3),setTimeout((()=>{M.series=[...M.series,{name:"Abandonned",data:I}]}),2500)})),(d,o)=>{const c=e,p=b("apexchart"),g=s,f=a,P=t,I=i,de=r,oe=b("tippy"),ce=n,pe=l;return u(),v("div",U,[A,h("div",C,[h("div",D,[h("div",T,[h(c,{size:"big",picture:"/demo/photos/brands/udemy.svg","picture-dark":"/demo/photos/brands/udemy-dark.svg"},{badge:m((()=>[J])),_:1}),L])]),h("div",R,[h("div",W,[$,h("div",z,[h(p,{id:"users-chart",height:y(j).chart.height,type:y(j).chart.type,series:y(j).series,options:y(j)},null,8,["height","type","series","options"])])])]),h("div",N,[h("div",O,[V,h("div",B,[h(p,{id:"shares-chart",height:y(_).chart.height,type:y(_).chart.type,series:y(_).series,options:y(_)},null,8,["height","type","series","options"])])])]),h("div",F,[h(g,{options:y(S)},null,8,["options"])]),h("div",K,[h(I,{class:"gauge-widget",straight:""},{header:m((()=>[h(f,{title:"Gauge Widget"})])),body:m((()=>[h("div",E,[h(P,{class:"gauge-holder",options:y(k),onReady:y(x)},null,8,["options","onReady"])]),G])),_:1})]),h("div",H,[h("div",X,[Y,h(p,{id:"bar-chart",height:y(M).chart.height,type:y(M).chart.type,series:y(M).series,options:y(M)},null,8,["height","type","series","options"])])]),h("div",q,[h(I,{class:"picker-widget",straight:""},{header:m((()=>[Q])),body:m((()=>[Z])),_:1})]),h("div",ee,[h("div",se,[ae,h("div",te,[h(pe,{title:"[#45651] Cannot save changes to user profile",subtitle:"Iam not able to save changes I make to my user profile. When\n                  I click on the save button, it simply says failed.",infratitle:"Updated 5 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(oe,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(de,{user:y(w).user31},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/31.jpg"})])),_:1})])),action:m((()=>[h(ce,{color:"primary",raised:""},{default:m((()=>[ie])),_:1})])),_:1}),h(pe,{title:"[#45783] Cannot create a new opportunity",subtitle:"when I try to create a new opportunity, Iam redirected to a\n                  404 page after clicking the action button.",infratitle:"Updated 2 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(oe,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(de,{user:y(w).user23},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/23.jpg"})])),_:1})])),action:m((()=>[h(ce,{color:"primary",raised:""},{default:m((()=>[re])),_:1})])),_:1}),h(pe,{title:"[#45723] Payment fails when using PayPal",subtitle:"When I try to use PayPal as a payment method, it spins\n                  forever and I get an error message after that.",infratitle:"Updated 30 minutes ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(oe,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(de,{user:y(w).user32},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/32.jpg"})])),_:1})])),action:m((()=>[h(ce,{color:"primary",raised:""},{default:m((()=>[ne])),_:1})])),_:1}),h(pe,{title:"[#45862] Cannot find the assets in the theme folder",subtitle:"I followed the documentation but Iam not able to locate the\n                  assets in the main folder. Can I get some help?",infratitle:"Updated 6 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(oe,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(de,{user:y(w).user13},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/13.jpg"})])),_:1})])),action:m((()=>[h(ce,{color:"primary",raised:""},{default:m((()=>[le])),_:1})])),_:1})])])])])])})});export{de as _};
