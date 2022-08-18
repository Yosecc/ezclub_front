import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import{_ as e}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.f1cce59c.js";import{_ as s}from"./V-Dropdown.e4c10296.js";import{o as i,i as t,j as l,k as r,d,r as o,h as n,H as c,E as u,a8 as p,F as v}from"./vendor.5bccebbb.js";import{_ as m}from"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import{_ as h}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import{_ as g}from"./V-AnimatedCheckbox.vue_vue&type=style&index=0&lang.b83a166b.js";import{_ as f}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as b}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.3bca87dd.js";import{t as k}from"./themeColors.4f0e93f3.js";import{p as j}from"./userPopovers.f4b9fc60.js";const y={},_=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-whiteboard-alt-2"})]),r("div",{class:"meta"},[r("span",null,"View"),r("span",null,"View project board")])],-1),w=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})]),r("div",{class:"meta"},[r("span",null,"Edit"),r("span",null,"Edit project")])],-1),V=r("hr",{class:"dropdown-divider"},null,-1),x=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-checkmark-circle"})]),r("div",{class:"meta"},[r("span",null,"Tasks"),r("span",null,"View pending tasks")])],-1),T=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-hierchy-alt"})]),r("div",{class:"meta"},[r("span",null,"Team"),r("span",null,"View project team")])],-1);y.render=function(a,e){const r=s;return i(),t(r,{class:"end-action",icon:"feather:more-vertical",spaced:"",right:""},{content:l((()=>[_,w,V,x,T])),_:1})};const U={series:[{name:"Pending",data:[31,40,28,51,42,109,100]},{name:"Completed",data:[11,32,45,32,34,52,41]},{name:"Blocked",data:[78,53,36,10,14,5,2]}],chart:{height:295,type:"area",toolbar:{show:!1}},colors:[k.accent,k.info,k.green],legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},A=[{name:"Design",data:[44,55,57,56,61,58,63,60,66]},{name:"Development",data:[76,85,101,98,87,105,91,114,94]},{name:"Management",data:[35,41,36,26,45,48,52,53,41]}].map((a=>({name:a.name,data:a.data.map((a=>a-70))}))),P={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[k.accent,k.purple,k.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:A,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(a){return a+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+"hrs"}}}},D=[{id:18,picture:"/demo/avatars/18.jpg",initials:"EC",color:"info"},{id:16,picture:"/demo/avatars/16.jpg",initials:"JG",color:"success"},{id:23,picture:"/demo/avatars/23.jpg",initials:"IV",color:"warning"}],C=[{id:21,picture:"/demo/avatars/21.jpg",initials:"EF",color:"info"},{id:32,picture:"/demo/avatars/32.jpg",initials:"JK",color:"success"}],L=[{id:112,picture:null,initials:"NL",color:"success"}],M=[{id:13,picture:"/demo/avatars/13.jpg",initials:"TS",color:"info"},{id:25,picture:"/demo/avatars/25.jpg",initials:"MW",color:"success"},{id:38,picture:"/demo/avatars/38.jpg",initials:"CD",color:"warning"}],z={class:"personal-dashboard personal-dashboard-v2"},S={class:"columns is-multiline"},E={class:"column is-12"},Z={class:"dashboard-header"},q=p('<div class="user-meta is-dark-bordered-12"><h3 class="title is-4 is-narrow is-bold">Welcome back, Erik K.</h3><p class="light-text">It&#39;s really nice to see you again</p></div><div class="user-action"><h3 class="title is-2 is-narrow">3</h3><p class="light-text">Tasks are pending review</p><a class="action-link">View Tasks</a></div><div class="cta h-hidden-tablet-p"><div class="media-flex inverted-text"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><p class="white-text"> Start using our team and project management tools </p></div><a class="link inverted-text">Learn More</a></div>',3),F={class:"column is-8"},I={class:"dashboard-card has-margin-bottom"},B=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Active Projects"),r("a",{class:"action-link"},"View All")],-1),H={class:"active-projects"},J={class:"dashboard-card"},R=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Task Completion"),r("a",{class:"action-link"},"Reports")],-1),G={class:"dashboard-card"},N=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Team Efficiency"),r("a",{class:"action-link"},"Reports")],-1),W={class:"column is-4"},X={class:"dashboard-card"},K=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"My Team"),r("a",{class:"action-link"},"View All")],-1),O={class:"active-team"},Q={class:"user-list"},Y=p('<div class="user-list-info"><div class="name dark-inverted">Esteban C.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),$=p('<div class="user-list-info"><div class="name dark-inverted">Sara Connor</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),aa=p('<div class="user-list-info"><div class="name dark-inverted">Tara S.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),ea=p('<div class="user-list-info"><div class="name dark-inverted">Naomi Liversky</div><div class="position">Frontend developer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),sa={class:"dashboard-card"},ia=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Todo Today"),r("a",{class:"action-link"},"View All")],-1),ta={class:"active-list"},la={class:"checkboxes-list"},ra={class:"list-item"},da=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Call Mr. Markstrom"),r("span",null,"Review the project initial wireframes")],-1),oa={class:"list-item"},na=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Finish wireframes"),r("span",null,"Make all requested changes and publish")],-1),ca={class:"list-item"},ua=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Update timesheets"),r("span",null,"Update all the team timesheets")],-1),pa={class:"list-item"},va=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Request payout"),r("span",null,"send project invoice to client")],-1),ma={class:"dashboard-card"},ha=r("img",{class:"light-image",src:"/assets/chart-guy.d32336d2.svg",alt:""},null,-1),ga=r("img",{class:"dark-image",src:"/assets/chart-guy-dark.e63079f9.svg",alt:""},null,-1),fa=v(" Go Premium ");var ba=d({expose:[],setup(s){const d=o(["value_2"]);return(s,o)=>{const p=a,v=e,k=y,_=m,w=n("apexchart"),V=h,x=n("tippy"),T=g,A=f,ba=b;return i(),t("div",z,[c("Personal Dashboard V2"),r("div",S,[r("div",E,[r("div",Z,[r(p,{picture:"/demo/avatars/8.jpg",badge:"/images/icons/flags/united-states-of-america.svg",size:"xl"}),q])]),r("div",F,[r("div",I,[B,r("div",H,[c("Project"),r(_,{title:"Delivery App Project",subtitle:"Updated 30m ago",center:""},{icon:l((()=>[r(p,{picture:"/demo/photos/apps/1.jpg",badge:"/images/icons/stacks/illustrator.svg",size:"medium",squared:""})])),action:l((()=>[r(v,{avatars:u(D),size:"small"},null,8,["avatars"]),r(k)])),_:1}),c("Project"),r(_,{title:"Health and Fitness Dashboard",subtitle:"Updated 5h ago",center:""},{icon:l((()=>[r(p,{picture:"/demo/photos/apps/2.png",badge:"/images/icons/stacks/reactjs.svg",size:"medium",squared:""})])),action:l((()=>[r(v,{avatars:u(C),size:"small"},null,8,["avatars"]),r(k)])),_:1}),c("Project"),r(_,{title:"Learning Tracker Dashboard",subtitle:"Updated 7h ago",center:""},{icon:l((()=>[r(p,{picture:"/demo/photos/apps/3.png",badge:"/images/icons/stacks/angular.svg",size:"medium",squared:""})])),action:l((()=>[r(v,{avatars:u(L),size:"small"},null,8,["avatars"]),r(k)])),_:1}),c("Project"),r(_,{title:"Banking App Dashboard",subtitle:"Updated 10h ago",center:""},{icon:l((()=>[r(p,{picture:"/demo/photos/apps/4.png",badge:"/images/icons/stacks/js.svg",size:"medium",squared:""})])),action:l((()=>[r(v,{avatars:u(M),size:"small"},null,8,["avatars"]),r(k)])),_:1})])]),r("div",J,[R,r(w,{id:"completion-chart",height:u(U).chart.height,type:u(U).chart.type,series:u(U).series,options:u(U)},null,8,["height","type","series","options"])]),r("div",G,[N,r(w,{id:"efficiency-chart",height:u(P).chart.height,type:u(P).chart.type,series:u(P).series,options:u(P)},null,8,["height","type","series","options"])])]),r("div",W,[r("div",X,[K,r("div",O,[r("ul",Q,[r("li",null,[r(x,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(V,{user:u(j).user18},null,8,["user"])])),default:l((()=>[r(p,{picture:"/demo/avatars/18.jpg"})])),_:1}),Y]),r("li",null,[r(x,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(V,{user:u(j).user120},null,8,["user"])])),default:l((()=>[r(p,{initials:"SC",color:"h-orange"})])),_:1}),$]),r("li",null,[r(x,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(V,{user:u(j).user13},null,8,["user"])])),default:l((()=>[r(p,{picture:"/demo/avatars/13.jpg"})])),_:1}),aa]),r("li",null,[r(x,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(V,{user:u(j).user121},null,8,["user"])])),default:l((()=>[r(p,{initials:"NL",color:"success"})])),_:1}),ea])])])]),r("div",sa,[ia,r("div",ta,[r("div",la,[c(" List item "),r("div",ra,[c(" Animated checkbox"),r(T,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=a=>d.value=a),value:"value_1"},null,8,["modelValue"]),da]),c(" List item "),r("div",oa,[c(" Animated checkbox"),r(T,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=a=>d.value=a),value:"value_2"},null,8,["modelValue"]),na]),c(" List item "),r("div",ca,[c(" Animated checkbox"),r(T,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=a=>d.value=a),value:"value_3"},null,8,["modelValue"]),ua]),c(" List item "),r("div",pa,[c(" Animated checkbox"),r(T,{modelValue:d.value,"onUpdate:modelValue":o[4]||(o[4]=a=>d.value=a),value:"value_4"},null,8,["modelValue"]),va])])])]),r("div",ma,[r(ba,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:l((()=>[ha,ga])),action:l((()=>[r(A,{color:"primary",elevated:""},{default:l((()=>[fa])),_:1})])),_:1})])])])])}}});export{ba as _};
