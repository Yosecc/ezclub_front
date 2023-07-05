import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as e}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.d708440c.js";import{_ as s}from"./V-Dropdown.f5015e73.js";import{h as i,i as t,k as l,l as r,d,r as n,F as o,ab as c,j as u,G as p}from"./vendor.4454b83d.js";import{_ as v}from"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import{_ as m}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import{_ as h}from"./V-AnimatedCheckbox.vue_vue&type=style&index=0&lang.5112369f.js";import{_ as g}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as f}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.58b5fdfb.js";import{t as b}from"./themeColors.4f0e93f3.js";import{p as k}from"./userPopovers.f4b9fc60.js";const y={},j=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-whiteboard-alt-2"})]),r("div",{class:"meta"},[r("span",null,"View"),r("span",null,"View project board")])],-1),_=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})]),r("div",{class:"meta"},[r("span",null,"Edit"),r("span",null,"Edit project")])],-1),w=r("hr",{class:"dropdown-divider"},null,-1),V=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-checkmark-circle"})]),r("div",{class:"meta"},[r("span",null,"Tasks"),r("span",null,"View pending tasks")])],-1),x=r("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-hierchy-alt"})]),r("div",{class:"meta"},[r("span",null,"Team"),r("span",null,"View project team")])],-1);y.render=function(a,e){const r=s;return i(),t(r,{class:"end-action",icon:"feather:more-vertical",spaced:"",right:""},{content:l((()=>[j,_,w,V,x])),_:1})};const T={series:[{name:"Pending",data:[31,40,28,51,42,109,100]},{name:"Completed",data:[11,32,45,32,34,52,41]},{name:"Blocked",data:[78,53,36,10,14,5,2]}],chart:{height:295,type:"area",toolbar:{show:!1}},colors:[b.accent,b.info,b.green],legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},U=[{name:"Design",data:[44,55,57,56,61,58,63,60,66]},{name:"Development",data:[76,85,101,98,87,105,91,114,94]},{name:"Management",data:[35,41,36,26,45,48,52,53,41]}].map((a=>({name:a.name,data:a.data.map((a=>a-70))}))),A={chart:{height:250,type:"bar",toolbar:{show:!1}},colors:[b.accent,b.purple,b.green],legend:{position:"top"},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:U,xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{labels:{formatter:function(a){return a+70}}},fill:{opacity:1},tooltip:{y:{formatter:function(a){return a+"hrs"}}}},C=[{id:18,picture:"/demo/avatars/18.jpg",initials:"EC",color:"info"},{id:16,picture:"/demo/avatars/16.jpg",initials:"JG",color:"success"},{id:23,picture:"/demo/avatars/23.jpg",initials:"IV",color:"warning"}],D=[{id:21,picture:"/demo/avatars/21.jpg",initials:"EF",color:"info"},{id:32,picture:"/demo/avatars/32.jpg",initials:"JK",color:"success"}],M=[{id:112,picture:null,initials:"NL",color:"success"}],z=[{id:13,picture:"/demo/avatars/13.jpg",initials:"TS",color:"info"},{id:25,picture:"/demo/avatars/25.jpg",initials:"MW",color:"success"},{id:38,picture:"/demo/avatars/38.jpg",initials:"CD",color:"warning"}],S={class:"personal-dashboard personal-dashboard-v2"},P={class:"columns is-multiline"},E={class:"column is-12"},L={class:"dashboard-header"},Z=c('<div class="user-meta is-dark-bordered-12"><h3 class="title is-4 is-narrow is-bold">Welcome back, Erik K.</h3><p class="light-text">It&#39;s really nice to see you again</p></div><div class="user-action"><h3 class="title is-2 is-narrow">3</h3><p class="light-text">Tasks are pending review</p><a class="action-link">View Tasks</a></div><div class="cta h-hidden-tablet-p"><div class="media-flex inverted-text"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><p class="white-text"> Start using our team and project management tools </p></div><a class="link inverted-text">Learn More</a></div>',3),q={class:"column is-8"},F={class:"dashboard-card has-margin-bottom"},I=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Active Projects"),r("a",{class:"action-link"},"View All")],-1),B={class:"active-projects"},G={class:"dashboard-card"},J=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Task Completion"),r("a",{class:"action-link"},"Reports")],-1),R={class:"dashboard-card"},H=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Team Efficiency"),r("a",{class:"action-link"},"Reports")],-1),N={class:"column is-4"},W={class:"dashboard-card"},X=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"My Team"),r("a",{class:"action-link"},"View All")],-1),K={class:"active-team"},O={class:"user-list"},Q=c('<div class="user-list-info"><div class="name dark-inverted">Esteban C.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),Y=c('<div class="user-list-info"><div class="name dark-inverted">Sara Connor</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),$=c('<div class="user-list-info"><div class="name dark-inverted">Tara S.</div><div class="position">UI/UX Designer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),aa=c('<div class="user-list-info"><div class="name dark-inverted">Naomi Liversky</div><div class="position">Frontend developer</div></div><div class="user-list-icons"><a><i aria-hidden="true" class="fas fa-phone"></i></a><a><i aria-hidden="true" class="fas fa-video"></i></a></div>',2),ea={class:"dashboard-card"},sa=r("div",{class:"card-head"},[r("h3",{class:"dark-inverted"},"Todo Today"),r("a",{class:"action-link"},"View All")],-1),ia={class:"active-list"},ta={class:"checkboxes-list"},la={class:"list-item"},ra=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Call Mr. Markstrom"),r("span",null,"Review the project initial wireframes")],-1),da={class:"list-item"},na=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Finish wireframes"),r("span",null,"Make all requested changes and publish")],-1),oa={class:"list-item"},ca=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Update timesheets"),r("span",null,"Update all the team timesheets")],-1),ua={class:"list-item"},pa=r("div",{class:"item-meta"},[r("span",{class:"dark-inverted"},"Request payout"),r("span",null,"send project invoice to client")],-1),va={class:"dashboard-card"},ma=r("img",{class:"light-image",src:"/assets/chart-guy.d32336d2.svg",alt:""},null,-1),ha=r("img",{class:"dark-image",src:"/assets/chart-guy-dark.e63079f9.svg",alt:""},null,-1),ga=p(" Go Premium ");var fa=d({expose:[],setup(s){const d=n(["value_2"]);return(s,n)=>{const c=a,p=e,b=y,j=v,_=u("apexchart"),w=m,V=u("tippy"),x=h,U=g,fa=f;return i(),t("div",S,[r("div",P,[r("div",E,[r("div",L,[r(c,{picture:"/demo/avatars/8.jpg",badge:"/images/icons/flags/united-states-of-america.svg",size:"xl"}),Z])]),r("div",q,[r("div",F,[I,r("div",B,[r(j,{title:"Delivery App Project",subtitle:"Updated 30m ago",center:""},{icon:l((()=>[r(c,{picture:"/demo/photos/apps/1.jpg",badge:"/images/icons/stacks/illustrator.svg",size:"medium",squared:""})])),action:l((()=>[r(p,{avatars:o(C),size:"small"},null,8,["avatars"]),r(b)])),_:1}),r(j,{title:"Health and Fitness Dashboard",subtitle:"Updated 5h ago",center:""},{icon:l((()=>[r(c,{picture:"/demo/photos/apps/2.png",badge:"/images/icons/stacks/reactjs.svg",size:"medium",squared:""})])),action:l((()=>[r(p,{avatars:o(D),size:"small"},null,8,["avatars"]),r(b)])),_:1}),r(j,{title:"Learning Tracker Dashboard",subtitle:"Updated 7h ago",center:""},{icon:l((()=>[r(c,{picture:"/demo/photos/apps/3.png",badge:"/images/icons/stacks/angular.svg",size:"medium",squared:""})])),action:l((()=>[r(p,{avatars:o(M),size:"small"},null,8,["avatars"]),r(b)])),_:1}),r(j,{title:"Banking App Dashboard",subtitle:"Updated 10h ago",center:""},{icon:l((()=>[r(c,{picture:"/demo/photos/apps/4.png",badge:"/images/icons/stacks/js.svg",size:"medium",squared:""})])),action:l((()=>[r(p,{avatars:o(z),size:"small"},null,8,["avatars"]),r(b)])),_:1})])]),r("div",G,[J,r(_,{id:"completion-chart",height:o(T).chart.height,type:o(T).chart.type,series:o(T).series,options:o(T)},null,8,["height","type","series","options"])]),r("div",R,[H,r(_,{id:"efficiency-chart",height:o(A).chart.height,type:o(A).chart.type,series:o(A).series,options:o(A)},null,8,["height","type","series","options"])])]),r("div",N,[r("div",W,[X,r("div",K,[r("ul",O,[r("li",null,[r(V,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(w,{user:o(k).user18},null,8,["user"])])),default:l((()=>[r(c,{picture:"/demo/avatars/18.jpg"})])),_:1}),Q]),r("li",null,[r(V,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(w,{user:o(k).user120},null,8,["user"])])),default:l((()=>[r(c,{initials:"SC",color:"h-orange"})])),_:1}),Y]),r("li",null,[r(V,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(w,{user:o(k).user13},null,8,["user"])])),default:l((()=>[r(c,{picture:"/demo/avatars/13.jpg"})])),_:1}),$]),r("li",null,[r(V,{class:"has-help-cursor",interactive:"",offset:[0,10]},{content:l((()=>[r(w,{user:o(k).user121},null,8,["user"])])),default:l((()=>[r(c,{initials:"NL",color:"success"})])),_:1}),aa])])])]),r("div",ea,[sa,r("div",ia,[r("div",ta,[r("div",la,[r(x,{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=a=>d.value=a),value:"value_1"},null,8,["modelValue"]),ra]),r("div",da,[r(x,{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=a=>d.value=a),value:"value_2"},null,8,["modelValue"]),na]),r("div",oa,[r(x,{modelValue:d.value,"onUpdate:modelValue":n[3]||(n[3]=a=>d.value=a),value:"value_3"},null,8,["modelValue"]),ca]),r("div",ua,[r(x,{modelValue:d.value,"onUpdate:modelValue":n[4]||(n[4]=a=>d.value=a),value:"value_4"},null,8,["modelValue"]),pa])])])]),r("div",va,[r(fa,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:l((()=>[ma,ha])),action:l((()=>[r(U,{color:"primary",elevated:""},{default:l((()=>[ga])),_:1})])),_:1})])])])])}}});export{fa as _};
