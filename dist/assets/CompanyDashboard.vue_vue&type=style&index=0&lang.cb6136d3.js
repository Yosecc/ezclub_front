import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.ace90716.js";import{_ as a}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.65196f7a.js";import{_ as s}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.70762942.js";import{_ as t}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.7c1f0ea7.js";import{_ as i}from"./UIWidget.vue_vue&type=script&setup=true&lang.8c17a225.js";import{_ as r}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35a108.js";import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.f850d095.js";import{_ as l}from"./V-Block.vue_vue&type=script&setup=true&lang.606db9d9.js";import{z as d,d as o,I as c,h as p,o as u,i as v,k as h,j as m,E as y,H as g,a8 as b,F as f}from"./vendor.d343baf9.js";import{t as k}from"./themeColors.4f0e93f3.js";import{p as x,o as w}from"./personalScoreGauge.330340a8.js";import{p as _}from"./userPopovers.f4b9fc60.js";const j={series:[{data:[21,22,10,28,16,21,13,30,35,41,36,26]}],chart:{height:180,type:"bar",toolbar:{show:!1},sparkline:{enabled:!0}},colors:[k.accent,k.primary,k.info],plotOptions:{bar:{columnWidth:"30px",distributed:!0,endingShape:"rounded"}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,labels:{show:!1},padding:{left:0,right:0}}]},I={series:[{name:"New Users",data:[44,55,57,56,61,58,63,60,66]},{name:"Renewals",data:[76,85,101,98,87,105,91,114,94]},{name:"Resigns",data:[35,41,36,26,45,48,52,53,41]}],chart:{height:180,type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},colors:[k.primary,k.accent,k.info],grid:{show:!1,padding:{left:0,right:0}},dataLabels:{enabled:!1},stroke:{width:[2],curve:"smooth"},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,labels:{show:!1},padding:{left:0,right:0}}],tooltip:{x:{show:!1,format:"dd/MM/yy HH:mm"}}},P=[{x:"Jan",y:322},{x:"Feb",y:459},{x:"Mar",y:212},{x:"Apr",y:345},{x:"May",y:111},{x:"Jun",y:189},{x:"Jul",y:498},{x:"Aug",y:612},{x:"Sep",y:451},{x:"Oct",y:248},{x:"Nov",y:306},{x:"Dec",y:366}],M=[{x:"Jan",y:25},{x:"Feb",y:49},{x:"Mar",y:36},{x:"Apr",y:84},{x:"May",y:64},{x:"Jun",y:131},{x:"Jul",y:48},{x:"Aug",y:144},{x:"Sep",y:96},{x:"Oct",y:11},{x:"Nov",y:31},{x:"Dec",y:8}],S=d({series:[],chart:{height:235,type:"bar",toolbar:{show:!1}},colors:[k.accent,k.primary],dataLabels:{enabled:!1},noData:{text:"Loading..."},xaxis:{type:"category",tickPlacement:"on",labels:{rotate:-45,rotateAlways:!0}}});const T={searchable:!1,perPageSelect:!1,perPage:10,columns:[{select:0,hidden:!0},{select:1,render:function(e,a,s){return`\n          <div class="v-avatar">\n              <img class="avatar" src="${e}" alt="">\n          </div>\n      `},sortable:!1},{select:2,render:function(e,a,s){return`<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${e}</span>`}},{select:3,render:function(e,a,s){return`<span class="light-text">${e}</span>`}},{select:4,render:function(e,a,s){return`\n          <div class="status is-${e}">\n              <i aria-hidden="true" class="fas fa-circle"></i>\n              <span class="is-capitalize">${e}</span>\n          </div>\n      `}},{select:5,render:function(e,a,s){return`<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Manage</button></div>`},sortable:!1}],data:{headings:["ID","Picture","Name","Position","Status","Actions"],data:[[0,"/demo/avatars/8.jpg","Erik Kovalsky","Product Manager","busy",!0],[1,"/demo/avatars/7.jpg","Alice Carasca","Software Engineer","offline",!0],[2,"/demo/avatars/13.jpg","Tara Svenson","UI/UX Designer","offline",!0],[3,"/demo/avatars/5.jpg","Mary Lebowski","Project Manager","available",!0],[5,"/demo/avatars/27.jpg","Carmen Escudero","HR Manager","offline",!0]]}},U={class:"business-dashboard company-dashboard"},A=b('<div class="company-header is-dark-card-bordered is-dark-bg-6"><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-users-alt is-dark-primary"></i><span class="dark-inverted">162</span><p>New Users</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-diamond-alt is-dark-primary"></i><span class="dark-inverted">$1,835.41</span><p>Daily Income</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-briefcase-alt is-dark-primary"></i><span class="dark-inverted">378</span><p>Completed Projects</p></div></div><div class="header-item is-dark-bordered-12"><div class="item-inner"><i aria-hidden="true" class="lnil lnil-ticket is-dark-primary"></i><span class="dark-inverted">192</span><p>Active Tickets</p></div></div></div>',1),C={class:"columns is-multiline"},D={class:"column is-4"},W={class:"dashboard-card is-company"},z=h("button",{class:"button icon-button is-circle is-dark-outlined"},[h("span",{class:"icon is-small"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"})])],-1),J=b('<h3 class="dark-inverted">U Learning</h3><p>Online Courses</p><div class="description"><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fac ista esse non inportuna. </p></div><div class="company-stats is-dark-bordered-12"><div class="company-stat"><div><span>Posts</span><span class="dark-inverted">864</span></div></div><div class="company-stat"><div><span>Projects</span><span class="dark-inverted">261</span></div></div><div class="company-stat"><div><span>Followers</span><span class="dark-inverted">32K</span></div></div></div>',4),L={class:"column is-4"},R={class:"dashboard-card is-base-chart"},$=b('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>New</span><span class="current">153</span></div><div class="revenue-stat"><span>Renewals</span><span class="dark-inverted">641</span></div><div class="revenue-stat"><span>Resigns</span><span class="dark-inverted">64</span></div></div></div>',1),F={class:"chart-container"},N={class:"column is-4"},O={class:"dashboard-card is-base-chart"},V=b('<div class="content-box"><div class="revenue-stats is-dark-bordered-12"><div class="revenue-stat"><span>Facebook</span><span class="current">64K</span></div><div class="revenue-stat"><span>Instagram</span><span class="dark-inverted">78K</span></div><div class="revenue-stat"><span>Twitter</span><span class="dark-inverted">25K</span></div></div></div>',1),B={class:"chart-container"},K={class:"column is-12"},E={class:"column is-3"},H={class:"gauge-wrap"},X=h("div",{class:"widget-content"},[h("p",null,"Your score has been calculated based on the latest metrics")],-1),Y={class:"column is-6"},G={class:"dashboard-card"},q=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Subscriptions")],-1),Q={class:"column is-3"},Z=h("div",{class:"widget-toolbar"},[h("div",{class:"left"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"})])]),h("div",{class:"center"},[h("h3",null,"October 2020")]),h("div",{class:"right"},[h("a",{class:"action-icon"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})])])],-1),ee=h("table",{class:"calendar"},[h("thead",null,[h("tr",null,[h("th",{scope:"col"},"Mon"),h("th",{scope:"col"},"Tue"),h("th",{scope:"col"},"Wed"),h("th",{scope:"col"},"Thu"),h("th",{scope:"col"},"Fri"),h("th",{scope:"col"},"Sat"),h("th",{scope:"col"},"Sun")])]),h("tbody",null,[h("tr",null,[h("td",{class:"prev-month"},"29"),h("td",{class:"prev-month"},"30"),h("td",{class:"prev-month"},"31"),h("td",null,"1"),h("td",null,"2"),h("td",null,"3"),h("td",null,"4")]),h("tr",null,[h("td",null,"5"),h("td",null,"6"),h("td",null,"7"),h("td",null,"8"),h("td",null,"9"),h("td",null,"10"),h("td",null,"11")]),h("tr",null,[h("td",null,"12"),h("td",null,"13"),h("td",null,"14"),h("td",null,"15"),h("td",null,"16"),h("td",null,"17"),h("td",{class:"current-day"},"18")]),h("tr",null,[h("td",null,"19"),h("td",null,"20"),h("td",null,"21"),h("td",null,"22"),h("td",null,"23"),h("td",null,"24"),h("td",null,"25")]),h("tr",null,[h("td",null,"26"),h("td",null,"27"),h("td",null,"28"),h("td",null,"29"),h("td",null,"30"),h("td",null,"31"),h("td",{class:"next-month"},"1")])])],-1),ae={class:"column is-12"},se={class:"dashboard-card is-tickets"},te=h("div",{class:"card-head"},[h("h3",{class:"dark-inverted"},"Pending Tickets"),h("a",{class:"action-link"},"View All")],-1),ie={class:"ticket-list"},re=f("Manage"),ne=f("Manage"),le=f("Manage"),de=f("Manage");var oe=o({expose:[],setup:d=>(c((async()=>{setTimeout((()=>{S.series=[{name:"Orders",data:P}]}),1e3),setTimeout((()=>{S.series=[...S.series,{name:"Abandonned",data:M}]}),2500)})),(d,o)=>{const c=e,b=p("apexchart"),f=a,k=s,P=t,M=i,oe=r,ce=p("tippy"),pe=n,ue=l;return u(),v("div",U,[A,h("div",C,[h("div",D,[h("div",W,[h(c,{size:"big",picture:"/demo/photos/brands/udemy.svg","picture-dark":"/demo/photos/brands/udemy-dark.svg"},{badge:m((()=>[z])),_:1}),J])]),h("div",L,[h("div",R,[$,h("div",F,[h(b,{id:"users-chart",height:y(I).chart.height,type:y(I).chart.type,series:y(I).series,options:y(I)},null,8,["height","type","series","options"])])])]),h("div",N,[h("div",O,[V,h("div",B,[h(b,{id:"shares-chart",height:y(j).chart.height,type:y(j).chart.type,series:y(j).series,options:y(j)},null,8,["height","type","series","options"])])])]),h("div",K,[g(" Datatable "),h(f,{options:y(T)},null,8,["options"])]),h("div",E,[g("Widget"),h(M,{class:"gauge-widget",straight:""},{header:m((()=>[h(k,{title:"Gauge Widget"})])),body:m((()=>[h("div",H,[h(P,{class:"gauge-holder",options:y(x),onReady:y(w)},null,8,["options","onReady"])]),X])),_:1})]),h("div",Y,[h("div",G,[q,h(b,{id:"bar-chart",height:y(S).chart.height,type:y(S).chart.type,series:y(S).series,options:y(S)},null,8,["height","type","series","options"])])]),h("div",Q,[g("Widget"),h(M,{class:"picker-widget",straight:""},{header:m((()=>[Z])),body:m((()=>[ee])),_:1})]),h("div",ae,[h("div",se,[te,h("div",ie,[g("Ticket"),h(ue,{title:"[#45651] Cannot save changes to user profile",subtitle:"Iam not able to save changes I make to my user profile. When\r\n                  I click on the save button, it simply says failed.",infratitle:"Updated 5 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(ce,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(oe,{user:y(_).user31},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/31.jpg"})])),_:1})])),action:m((()=>[h(pe,{color:"primary",raised:""},{default:m((()=>[re])),_:1})])),_:1}),g("Ticket"),h(ue,{title:"[#45783] Cannot create a new opportunity",subtitle:"when I try to create a new opportunity, Iam redirected to a\r\n                  404 page after clicking the action button.",infratitle:"Updated 2 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(ce,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(oe,{user:y(_).user23},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/23.jpg"})])),_:1})])),action:m((()=>[h(pe,{color:"primary",raised:""},{default:m((()=>[ne])),_:1})])),_:1}),g("Ticket"),h(ue,{title:"[#45723] Payment fails when using PayPal",subtitle:"When I try to use PayPal as a payment method, it spins\r\n                  forever and I get an error message after that.",infratitle:"Updated 30 minutes ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(ce,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(oe,{user:y(_).user32},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/32.jpg"})])),_:1})])),action:m((()=>[h(pe,{color:"primary",raised:""},{default:m((()=>[le])),_:1})])),_:1}),g("Ticket"),h(ue,{title:"[#45862] Cannot find the assets in the theme folder",subtitle:"I followed the documentation but Iam not able to locate the\r\n                  assets in the main folder. Can I get some help?",infratitle:"Updated 6 hours ago","m-responsive":"",class:"is-dark-bordered-12"},{icon:m((()=>[h(ce,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:m((()=>[h(oe,{user:y(_).user13},null,8,["user"])])),default:m((()=>[h(c,{size:"medium",picture:"/demo/avatars/13.jpg"})])),_:1})])),action:m((()=>[h(pe,{color:"primary",raised:""},{default:m((()=>[de])),_:1})])),_:1})])])])])])})});export{oe as _};
