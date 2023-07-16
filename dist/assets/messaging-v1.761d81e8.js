import{r as a,d as e,h as s,i,l,F as t,R as n,S as o,H as r,e as c,b as d,k as u,ab as v,j as p,G as m,L as g,P as h,o as f,O as y,g as b,K as k,T as C,C as x}from"./vendor.4454b83d.js";import{_ as w}from"./V-PhotosSwipe.f21d7aba.js";import{_}from"./V-IconWrap.vue_vue&type=style&index=0&lang.d8a62e5f.js";import{i as j}from"./darkModeState.f2041097.js";import{a as S}from"./activePanelState.06305d42.js";import{u as M}from"./useDropdown.659338b4.js";import{_ as V,a as I,b as A,c as L,d as U,e as E,f as O}from"./ActivityPanel.vue_vue&type=style&index=0&lang.0a7bbc23.js";import{_ as P,a as N}from"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import{_ as z,a as F}from"./search-4-dark.12f0bf0d.js";import{_ as T}from"./having-coffee.04024dbb.js";import{s as B}from"./sidebarLayoutState.66d5e66f.js";import{s as W}from"./sleep.2a252ff4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./index.7241005a.js";import"./Companies.884a83b7.js";import"./fastpizza.1e58d0ec.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const R=a("none");function D(a){R.value===a?R.value="none":R.value=a}const G={class:"sidebar-panel is-messages"},H={class:"messages-header"},$=l("h3",{class:"no-mb"},"Chat",-1),q={class:"menu-toggle has-chevron"},J=l("span",{class:"rotate"},[l("i",{"aria-hidden":"true",class:"icon-line-top"}),l("i",{"aria-hidden":"true",class:"icon-line-center"}),l("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),K={class:"inner"},X={class:"is-new-conversation"},Q=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),Y=l("span",null,"New Conversation",-1),Z={id:"conversations-list",class:"animated preFadeInUp fadeInUp"},aa={class:"recent-user"},ea={class:"user-container"},sa={class:"recipient-meta"};var ia=e({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["addConversation","selectConversation"],setup:(a,{emit:e})=>(c,d)=>(s(),i("div",G,[l("div",H,[$,l("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",onClick:d[1]||(d[1]=a=>t(D)("messages"))},[l("span",q,[l("span",{class:[["none"!==t(R)&&"active"],"icon-box-toggle"]},[J],2)])])]),l("div",K,[l("div",X,[l("button",{id:"start-conversation",class:"button v-button is-primary is-raised is-rounded is-fullwidth",onClick:d[2]||(d[2]=()=>e("addConversation"))},[Q,Y])]),l("ul",Z,[(s(!0),i(n,null,o(a.conversations,(t=>(s(),i("li",{key:t.id,class:[a.selectedConversationId===t.id&&"is-active"],onClick:()=>e("selectConversation",t.id)},[l("div",aa,[l("div",ea,[l("img",{class:"is-user",src:t.avatar,alt:"",onErrorOnce:d[3]||(d[3]=a=>a.target.src="https://via.placeholder.com/150x150")},null,40,["src"])]),l("div",sa,[l("span",null,r(t.name),1),l("span",null,r(t.lastMessage),1)])])],10,["onClick"])))),128))])])]))});const la={class:"mobile-subsidebar is-messaging"},ta={class:"inner"},na=l("div",{class:"sidebar-title"},[l("h3",null,"Messages")],-1),oa={id:"mobile-conversations-list",class:"animated preFadeInUp fadeInUp"},ra={class:"recent-user"},ca={class:"user-container"},da={class:"recipient-meta"};var ua=e({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["selectConversation"],setup:(a,{emit:e})=>(t,c)=>(s(),i("div",la,[l("div",ta,[na,l("ul",oa,[(s(!0),i(n,null,o(a.conversations,(t=>(s(),i("li",{key:t.id,class:[a.selectedConversationId===t.id&&"is-active"],onClick:()=>e("selectConversation",t.id)},[l("div",ra,[l("div",ca,[l("img",{class:"is-user",src:t.avatar,alt:"",onErrorOnce:c[1]||(c[1]=a=>a.target.src="https://via.placeholder.com/150x150")},null,40,["src"])]),l("div",da,[l("span",null,r(t.name),1),l("span",null,r(t.lastMessage),1)])])],10,["onClick"])))),128))])])]))});const va={class:"inner"},pa={class:"collapsed-menu"},ma={class:"menu-toggle has-chevron"},ga=l("span",{class:"rotate"},[l("i",{"aria-hidden":"true",class:"icon-line-top"}),l("i",{"aria-hidden":"true",class:"icon-line-center"}),l("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),ha={class:"collapsed-add"},fa=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),ya={class:"collapsed-conversations"},ba={class:"user-container"};var ka=e({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["addConversation","selectConversation"],setup:(a,{emit:e})=>(r,c)=>(s(),i("div",{class:[["messages"!==t(R)&&"is-active"],"collapsed-messaging"]},[l("div",va,[l("div",pa,[l("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",onClick:c[1]||(c[1]=a=>t(D)("messages"))},[l("span",ma,[l("span",{class:[["none"!==t(R)&&"active"],"icon-box-toggle"]},[ga],2)])])]),l("div",ha,[l("a",{class:"button collapse-add-button is-primary",onClick:c[2]||(c[2]=()=>e("addConversation"))},[fa])]),l("ul",ya,[(s(!0),i(n,null,o(a.conversations,(t=>(s(),i("li",{key:t.id,class:[a.selectedConversationId===t.id&&"is-active"],onClick:()=>e("selectConversation",t.id)},[l("div",ba,[l("img",{class:"is-user",src:t.avatar,alt:"",onErrorOnce:c[3]||(c[3]=a=>a.target.src="https://via.placeholder.com/150x150")},null,40,["src"])])],10,["onClick"])))),128))])])],2))});const Ca={class:"toolbar ml-auto"},xa={class:"toolbar-link"},wa={class:"dark-mode ml-auto"},_a=l("span",null,null,-1),ja={class:"toolbar-notifications is-hidden-mobile"},Sa=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),Ma=l("span",{class:"new-indicator pulsate"},null,-1),Va={class:"dropdown-menu",role:"menu"},Ia={class:"dropdown-content"},Aa={class:"heading"},La=l("div",{class:"heading-left"},[l("h6",{class:"heading-title"},"Notifications")],-1),Ua={class:"heading-right"},Ea=m(" See all "),Oa=v('<ul class="notification-list"><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul>',1),Pa=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1);var Na=e({expose:[],emits:["close"],setup(e,{emit:n}){const{locale:o}=c(),r=a(null),v=M(r),m=d((()=>{switch(o.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";case"en":default:return"/images/icons/flags/united-states-of-america.svg"}}));return(a,e)=>{const o=p("RouterLink");return s(),i("div",Ca,[l("div",xa,[l("label",wa,[l("input",{type:"checkbox",checked:!t(j),onChange:e[1]||(e[1]=a=>{j.value=!a.target.checked})},null,40,["checked"]),_a])]),l("a",{class:"toolbar-link right-panel-trigger",onClick:e[2]||(e[2]=a=>S.value="languages")},[l("img",{src:t(m),alt:""},null,8,["src"])]),l("div",ja,[l("div",{ref:r,class:"dropdown is-spaced is-dots is-right dropdown-trigger"},[l("div",{class:"is-trigger","aria-haspopup":"true",onClick:e[3]||(e[3]=(...a)=>t(v).toggle&&t(v).toggle(...a))},[Sa,Ma]),l("div",Va,[l("div",Ia,[l("div",Aa,[La,l("div",Ua,[l(o,{class:"notification-link",to:{name:"sidebar-layouts-profile-notifications"}},{default:u((()=>[Ea])),_:1})])]),Oa])])],512)]),l("a",{id:"hide-chat-side",class:"toolbar-link",onClick:e[4]||(e[4]=a=>n("close"))},[Pa])])}}});const za={class:"sidebar-layout"},Fa=l("div",{class:"app-overlay"},null,-1),Ta=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),Ba=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:grid"},null,-1),Wa=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"},null,-1),Ra=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:cpu"},null,-1),Da=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:message-circle"},null,-1),Ga=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"},null,-1),Ha=l("li",null,[l("a",{href:"#"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"})])],-1),$a=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:activity"},null,-1),qa=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:grid"},null,-1),Ja=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:box"},null,-1),Ka=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:cpu"},null,-1),Xa=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:message-circle"},null,-1),Qa={class:"right-panel-trigger"},Ya=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather-search"},null,-1),Za=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather-x"},null,-1),ae=l("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:settings"},null,-1);var ee=e({expose:[],props:{theme:{type:String,default:"default"}},setup(e){const t=e;h();const n=a(!1);return a(!1),(a,e)=>{const o=U,r=E,c=V,d=p("RouterLink"),v=I,m=P,h=A,f=L,y=N;return s(),i("div",za,[Fa,l(c,{"is-open":n.value,onToggle:e[1]||(e[1]=a=>n.value=!n.value)},{default:u((()=>[l(o),l(r)])),_:1},8,["is-open"]),l(v,{"is-open":n.value,onToggle:e[3]||(e[3]=a=>n.value=!n.value)},{links:u((()=>[l("li",null,[l(d,{to:{name:"sidebar-dashboards"}},{default:u((()=>[Ta])),_:1})]),l("li",null,[l(d,{to:{name:"sidebar-layouts"}},{default:u((()=>[Ba])),_:1})]),l("li",null,[l(d,{to:{name:"elements"}},{default:u((()=>[Wa])),_:1})]),l("li",null,[l(d,{to:{name:"components"}},{default:u((()=>[Ra])),_:1})]),l("li",null,[l(d,{to:{name:"messaging-v1"}},{default:u((()=>[Da])),_:1})])])),"bottom-links":u((()=>[l("li",null,[l("a",{onClick:e[2]||(e[2]=a=>S.value="search")},[Ga])]),Ha])),_:1},8,["is-open"]),l(m,{theme:t.theme},{links:u((()=>[l("li",null,[l(d,{to:{name:"sidebar-dashboards"}},{default:u((()=>[$a])),_:1})]),l("li",null,[l(d,{to:{name:"sidebar-layouts"}},{default:u((()=>[qa])),_:1})]),l("li",null,[l(d,{to:{name:"elements"}},{default:u((()=>[Ja])),_:1})]),l("li",null,[l(d,{to:{name:"components"}},{default:u((()=>[Ka])),_:1})]),l("li",null,[l(d,{to:{name:"messaging-v1"}},{default:u((()=>[Xa])),_:1})])])),"bottom-links":u((()=>[l("li",Qa,[l("a",{"data-content":"Search",onClick:e[4]||(e[4]=a=>S.value="search")},[Ya]),l("a",{class:"is-hidden is-inactive",onClick:e[5]||(e[5]=a=>S.value="none")},[Za])]),l("li",null,[l(d,{id:"open-settings",to:{name:"sidebar-layouts-profile-settings"},"data-content":"Settings"},{default:u((()=>[ae])),_:1})]),l("li",null,[l(r,{up:""})])])),_:1},8,["theme"]),l(h),l(f),l(y),g(a.$slots,"default",{isMobileSidebarOpen:n.value})])}}});const se={class:"page-content-wrapper"},ie={class:"page-content chat-content"},le={class:"page-title has-text-centered is-hidden"},te={class:"menu-toggle has-chevron"},ne=l("span",{class:"rotate"},[l("i",{"aria-hidden":"true",class:"icon-line-top"}),l("i",{"aria-hidden":"true",class:"icon-line-center"}),l("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),oe=l("h1",{class:"title is-5"},"Messages",-1),re={class:"is-chat animated preFadeInUp fadeInUp"},ce={class:"chat-header"},de={class:"control"},ue=l("div",{class:"easy-autocomplete"},[l("input",{id:"users-autocpl",type:"text",class:"input",placeholder:"Start typing a name",autofocus:""})],-1),ve=l("div",{class:"icon"},[l("span",null,"To:")],-1),pe=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),me={class:"chat-body-wrap"},ge={id:"chat-body",class:"chat-body"},he={key:0,class:"no-messages"},fe=l("img",{class:"light-image",src:z,alt:""},null,-1),ye=l("img",{class:"dark-image",src:F,alt:""},null,-1),be=l("div",{class:"text"},[l("h3",null,"No messages yet"),l("p",null,"Start the conversation by typing a message")],-1),ke={key:0,class:"divider-container"},Ce={class:"divider"},xe={class:"avatar"},we={class:"msg"},_e={class:"msg-inner"},je={class:"avatar is-online"},Se={class:"msg is-image"},Me={class:"image-container"},Ve=l("div",{class:"image-overlay"},null,-1),Ie={class:"image-actions"},Ae={class:"actions-inner"},Le=l("div",{class:"action download"},[l("span",{class:"iconify","data-icon":"feather:download"})],-1),Ue=l("span",{class:"iconify","data-icon":"feather:maximize"},null,-1),Ee={class:"avatar"},Oe={class:"msg is-link-image"},Pe={class:"image"},Ne={class:"link-badge"},ze={class:"link-body"},Fe={class:"link-title"},Te={class:"avatar is-online"},Be={class:"msg is-link"},We={class:"link-meta"},Re={href:"#"},De=l("div",{class:"loader is-loading"},null,-1),Ge={class:"chat-side-header"},He={class:"chat-side-content is-single"},$e={class:"user-pic"},qe={key:0,class:"user-name"},Je={key:1,class:"user-job-title"},Ke=l("div",{class:"side-actions"},[l("a",{class:"button v-button is-rounded"},[l("span",{class:"icon is-small"},[l("i",{"aria-hidden":"true",class:"fas fa-phone"})]),l("span",null,"Audio Call")]),l("a",{class:"button v-button is-rounded"},[l("span",{class:"icon is-small"},[l("i",{"aria-hidden":"true",class:"fas fa-video"})]),l("span",null,"Video Call")])],-1),Xe=l("div",{class:"detail-photos"},[l("div",{class:"detail-photo-title"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-image"},[l("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l("path",{d:"M21 15l-5-5L5 21"})]),m(" Shared photos ")]),l("div",{class:"detail-photo-grid"}),l("a",{class:"view-more"},"View More")],-1),Qe={class:"message-field-wrapper"},Ye={class:"control"},Ze={class:"add-content"},as=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),es=l("div",{class:"dropdown-menu",role:"menu"},[l("div",{class:"dropdown-content"},[l("a",{class:"dropdown-item"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:video"}),l("div",{class:"meta"},[l("span",null,"Video"),l("span",null,"Embed a video")])]),l("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:image"}),l("div",{class:"meta"},[l("span",null,"Images"),l("span",null,"Upload pictures")])]),l("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:link"}),l("div",{class:"meta"},[l("span",null,"Link"),l("span",null,"Post a link")])]),l("hr",{class:"dropdown-divider"}),l("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:file"}),l("div",{class:"meta"},[l("span",null,"File"),l("span",null,"Upload a file")])])])],-1),ss=l("div",{class:"add-emoji"},[l("div",{class:"button"},[l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:smile"})])],-1),is=l("input",{id:"chat-input",class:"input is-rounded",type:"text",placeholder:"Write a message ..."},null,-1),ls=l("div",{class:"send-message"},[l("div",{class:"button v-button is-primary is-raised is-rounded"}," Send ")],-1),ts=l("div",{class:"typing-indicator"},[l("img",{src:"/images/icons/typing.gif",alt:""})],-1),ns={class:"\r\n                is-chat-placeholder\r\n                animated\r\n                preFadeInUp\r\n                fadeInUp\r\n                is-hidden\r\n              "},os={class:"caption"},rs=l("div",{class:"text"},[l("h3",null,"Nothing to show"),l("p",null,"Select an existing conversation or start a new one"),l("a",{id:"new-chat",class:"\r\n                      button\r\n                      v-button\r\n                      is-solid is-outlined is-big is-rounded\r\n                    "}," Start a new conversation ")],-1),cs=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1);var ds=e({expose:[],setup(e){const c=[{id:1,name:"Henry G.",lastMessage:"3 minutes ago",avatar:"/demo/avatars/10.jpg"},{id:2,name:"Melany W.",lastMessage:"30 minutes ago",avatar:"/demo/avatars/25.jpg"},{id:3,name:"Tara S.",lastMessage:"1 day ago",avatar:"/demo/avatars/13.jpg"},{id:4,name:"Esteban C.",lastMessage:"1 day ago",avatar:"/demo/avatars/18.jpg"},{id:5,name:"Alice C.",lastMessage:"2 days ago",avatar:"/demo/avatars/7.jpg"}],v=a(null),p=M(v),m=a(!1),g=a(!0),h=a(0),j=a([]),S=a(!1),V=d((()=>{const a=c.find((a=>a.id===h.value));return 0===h.value||!a||g.value?{id:0,name:"",lastMessage:"",avatar:"/images/avatars/placeholder.jpg"}:a}));return f((()=>{R.value="messages",h.value=1})),y({title:"Messaging chat - Sidebar - Vuero"}),b((async()=>{if(0!==h.value){g.value=!0,await W(1e3);try{const{data:a}=await x.get(`/api/conversation${h.value}.json`);a.messages&&a.messages.message&&(j.value=a.messages.message)}catch(a){console.error(a)}g.value=!1}else j.value=[]})),b((()=>{const a="messages"===R.value;document.querySelectorAll(".view-wrapper").forEach((e=>{!1===a?e.classList.remove("is-pushed-full"):e.classList.contains("is-pushed-full")||e.classList.add("is-pushed-full")}))}),{flush:"post"}),(a,e)=>{const d=ia,f=ua,y=ka,b=w,x=_,M=Na,I=ee;return s(),i(I,{theme:t(B)},{default:u((({isMobileSidebarOpen:a})=>[l(C,{name:"slide-x"},{default:u((()=>["messages"===t(R)?(s(),i(d,{key:0,conversations:c,"selected-conversation-id":h.value,onAddConversation:e[1]||(e[1]=()=>{h.value=0,m.value=!m.value}),onSelectConversation:e[2]||(e[2]=a=>{m.value=!1,h.value=a})},null,8,["selected-conversation-id"])):k("",!0)])),_:1}),l(C,{name:"slide-x"},{default:u((()=>[a?(s(),i(f,{key:0,conversations:c,"selected-conversation-id":h.value,onSelectConversation:e[3]||(e[3]=a=>{m.value=!1,h.value=a})},null,8,["selected-conversation-id"])):k("",!0)])),_:2},1024),l(y,{conversations:c,"selected-conversation-id":h.value,onAddConversation:e[4]||(e[4]=()=>{h.value=0,m.value=!m.value}),onSelectConversation:e[5]||(e[5]=a=>{m.value=!1,h.value=a})},null,8,["selected-conversation-id"]),l("div",{id:"vuero-messaging",class:["view-wrapper",["none"===t(R)&&"is-pushed-messages"]]},[l("div",se,[l("div",ie,[l("div",le,[l("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:e[6]||(e[6]=a=>t(D)("messages"))},[l("span",te,[l("span",{class:[["none"!==t(R)&&"active"],"icon-box-toggle"]},[ne],2)])]),oe]),l("div",re,[l("div",ce,[l("div",{class:[[!m.value&&"is-hidden"],"is-autocomplete"]},[l("div",de,[ue,ve,l("div",{class:"hide",onClick:e[7]||(e[7]=a=>m.value=!1)},[pe])])],2)]),l("div",me,[l("ol",ge,[0===j.value.length?(s(),i("li",he,[fe,ye,be])):k("",!0),(s(!0),i(n,null,o(j.value,(a=>(s(),i("li",{key:a.id,class:["system"===a.type&&"divider-container","system"!==a.type&&a.sender]},["system"===a.type?(s(),i("li",ke,[l("div",Ce,[l("span",null,r(a.content.text),1)])])):"msg"===a.type?(s(),i(n,{key:1},[l("div",xe,[l("img",{src:a.avatar,draggable:"false",alt:""},null,8,["src"])]),l("div",we,[l("div",_e,[l("p",null,r(a.content.text),1)]),l("time",null,r(a.content.time),1)])],64)):"image"===a.type?(s(),i(n,{key:2},[l("div",je,[l("img",{src:a.avatar,draggable:"false",alt:""},null,8,["src"])]),l("div",Se,[l("div",Me,[l(b,{items:[{src:a.content.image_url,thumbnail:a.content.image_url,w:600,h:400,alt:"optional alt attribute for thumbnail image"}],"thumbnail-radius":"full"},null,8,["items"]),Ve,l("div",Ie,[l("div",Ae,[Le,l("a",{href:a.content.image_url,class:"action messaging-popup"},[Ue],8,["href"])])])])])],64)):"imagelink"===a.type?(s(),i(n,{key:3},[l("div",Ee,[l("img",{src:a.avatar,draggable:"false",alt:""},null,8,["src"])]),l("div",Oe,[l("figure",Pe,[l("img",{src:a.content.link_image,alt:""},null,8,["src"]),l("div",Ne,[l("img",{src:a.content.link_badge,alt:""},null,8,["src"])])]),l("div",ze,[l("span",Fe,r(a.content.text),1),l("small",null,r(a.content.subtext),1)])])],64)):"link"===a.type?(s(),i(n,{key:4},[l("div",Te,[l("img",{src:a.avatar,draggable:"false",alt:""},null,8,["src"])]),l("div",Be,[l(x,{icon:"feather:link"}),l("p",We,[l("span",null,r(a.content.text),1),l("a",Re,r(a.content.subtext),1)])])],64)):k("",!0)],2)))),128)),l("li",{class:["chat-loader",[g.value&&"is-active"]]},[De],2)]),l("div",{class:[[S.value&&"is-mobile-active"],"chat-side"]},[l("div",Ge,[l(M,{onClose:e[8]||(e[8]=a=>S.value=!1)})]),l("div",He,[l("div",$e,[l("img",{id:"user-details-image",src:t(V).avatar,alt:"",onErrorOnce:e[9]||(e[9]=a=>a.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),l("img",{id:"user-details-badge",class:"is-badge",src:O,alt:"",onErrorOnce:e[10]||(e[10]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32)]),t(V).name?(s(),i("h4",qe,r(t(V).name),1)):k("",!0),t(V).lastMessage?(s(),i("p",Je,r(t(V).lastMessage),1)):k("",!0),Ke,Xe])],2)]),l("div",Qe,[l("div",Ye,[l("div",Ze,[l("div",{ref:v,class:"dropdown dropdown-trigger is-up"},[l("div",null,[l("div",{class:"button","aria-haspopup":"true",onClick:e[11]||(e[11]=(...a)=>t(p).toggle&&t(p).toggle(...a))},[as])]),es],512)]),ss,is,ls]),ts])]),l("div",ns,[l("div",os,[l("img",{src:T,alt:"",onErrorOnce:e[12]||(e[12]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),rs])])])])],2),l("a",{class:[[S.value&&"is-mobile-active"],"chat-side-fab"],onClick:e[13]||(e[13]=a=>S.value=!S.value)},[cs],2)])),_:1},8,["theme"])}}});export default ds;
