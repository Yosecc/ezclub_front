import{r as e,d as a,i as s,j as t,l as i,F as n,S as l,U as r,H as o,e as c,b as d,h as u,k as p,a8 as v,G as m,O as g,I as h,L as f,o as y,P as b,g as k,T as x,C}from"./vendor.435948fe.js";import{_ as j}from"./V-PhotosSwipe.6a58c2c1.js";import{_ as w}from"./V-IconWrap.vue_vue&type=style&index=0&lang.c74f8ca0.js";import{i as _}from"./darkModeState.010a41bc.js";import{a as q}from"./activePanelState.66f70896.js";import{u as S}from"./useDropdown.9dc4bfe3.js";import{_ as M,a as I,b as V,c as $,d as L,e as A,f as U}from"./ActivityPanel.vue_vue&type=style&index=0&lang.ec1ed57b.js";import{_ as E,a as P}from"./SearchPanel.vue_vue&type=style&index=0&lang.3a098275.js";import{_ as O,a as N}from"./search-4-dark.12f0bf0d.js";import{_ as z}from"./having-coffee.04024dbb.js";import{s as F}from"./sidebarLayoutState.c7ec3620.js";import{s as T}from"./sleep.2a252ff4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import"./V-Dropdown.3004e9ea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./index.ff49a0f4.js";import"./Companies.5246daaa.js";import"./fastpizza.1e58d0ec.js";import"./AnimatedLogo.030703f2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import"./userPopovers.f4b9fc60.js";const B=e("none");function D(e){B.value===e?B.value="none":B.value=e}const W={class:"sidebar-panel is-messages"},H={class:"messages-header"},G=i("h3",{class:"no-mb"},"Chat",-1),R={class:"menu-toggle has-chevron"},J=i("span",{class:"rotate"},[i("i",{"aria-hidden":"true",class:"icon-line-top"}),i("i",{"aria-hidden":"true",class:"icon-line-center"}),i("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),X={class:"inner"},K={class:"is-new-conversation"},Q=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),Y=i("span",null,"New Conversation",-1),Z={id:"conversations-list",class:"animated preFadeInUp fadeInUp"},ee={class:"recent-user"},ae={class:"user-container"},se={class:"recipient-meta"};var te=a({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["addConversation","selectConversation"],setup:(e,{emit:a})=>(c,d)=>(s(),t("div",W,[i("div",H,[G,i("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",onClick:d[1]||(d[1]=e=>n(D)("messages"))},[i("span",R,[i("span",{class:[["none"!==n(B)&&"active"],"icon-box-toggle"]},[J],2)])])]),i("div",X,[i("div",K,[i("button",{id:"start-conversation",class:"button v-button is-primary is-raised is-rounded is-fullwidth",onClick:d[2]||(d[2]=()=>a("addConversation"))},[Q,Y])]),i("ul",Z,[(s(!0),t(l,null,r(e.conversations,(n=>(s(),t("li",{key:n.id,class:[e.selectedConversationId===n.id&&"is-active"],onClick:()=>a("selectConversation",n.id)},[i("div",ee,[i("div",ae,[i("img",{class:"is-user",src:n.avatar,alt:"",onErrorOnce:d[3]||(d[3]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"])]),i("div",se,[i("span",null,o(n.name),1),i("span",null,o(n.lastMessage),1)])])],10,["onClick"])))),128))])])]))});const ie={class:"mobile-subsidebar is-messaging"},ne={class:"inner"},le=i("div",{class:"sidebar-title"},[i("h3",null,"Messages")],-1),re={id:"mobile-conversations-list",class:"animated preFadeInUp fadeInUp"},oe={class:"recent-user"},ce={class:"user-container"},de={class:"recipient-meta"};var ue=a({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["selectConversation"],setup:(e,{emit:a})=>(n,c)=>(s(),t("div",ie,[i("div",ne,[le,i("ul",re,[(s(!0),t(l,null,r(e.conversations,(n=>(s(),t("li",{key:n.id,class:[e.selectedConversationId===n.id&&"is-active"],onClick:()=>a("selectConversation",n.id)},[i("div",oe,[i("div",ce,[i("img",{class:"is-user",src:n.avatar,alt:"",onErrorOnce:c[1]||(c[1]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"])]),i("div",de,[i("span",null,o(n.name),1),i("span",null,o(n.lastMessage),1)])])],10,["onClick"])))),128))])])]))});const pe={class:"inner"},ve={class:"collapsed-menu"},me={class:"menu-toggle has-chevron"},ge=i("span",{class:"rotate"},[i("i",{"aria-hidden":"true",class:"icon-line-top"}),i("i",{"aria-hidden":"true",class:"icon-line-center"}),i("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),he={class:"collapsed-add"},fe=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),ye={class:"collapsed-conversations"},be={class:"user-container"};var ke=a({expose:[],props:{conversations:{type:Array,default:()=>[]},selectedConversationId:{type:Number,default:0}},emits:["addConversation","selectConversation"],setup:(e,{emit:a})=>(o,c)=>(s(),t("div",{class:[["messages"!==n(B)&&"is-active"],"collapsed-messaging"]},[i("div",pe,[i("div",ve,[i("div",{class:"vuero-hamburger nav-trigger push-resize messages-push",onClick:c[1]||(c[1]=e=>n(D)("messages"))},[i("span",me,[i("span",{class:[["none"!==n(B)&&"active"],"icon-box-toggle"]},[ge],2)])])]),i("div",he,[i("a",{class:"button collapse-add-button is-primary",onClick:c[2]||(c[2]=()=>a("addConversation"))},[fe])]),i("ul",ye,[(s(!0),t(l,null,r(e.conversations,(n=>(s(),t("li",{key:n.id,class:[e.selectedConversationId===n.id&&"is-active"],onClick:()=>a("selectConversation",n.id)},[i("div",be,[i("img",{class:"is-user",src:n.avatar,alt:"",onErrorOnce:c[3]||(c[3]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"])])],10,["onClick"])))),128))])])],2))});const xe={class:"toolbar ml-auto"},Ce={class:"toolbar-link"},je={class:"dark-mode ml-auto"},we=i("span",null,null,-1),_e={class:"toolbar-notifications is-hidden-mobile"},qe=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),Se=i("span",{class:"new-indicator pulsate"},null,-1),Me={class:"dropdown-menu",role:"menu"},Ie={class:"dropdown-content"},Ve={class:"heading"},$e=i("div",{class:"heading-left"},[i("h6",{class:"heading-title"},"Notifications")],-1),Le={class:"heading-right"},Ae=m(" See all "),Ue=v('<ul class="notification-list"><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                      class=&quot;user-photo&quot;\r\n                      alt=&quot;&quot;\r\n                      src=&quot;/demo/avatars/7.jpg&quot;\r\n                      @error.once=&quot;\r\n                        $event.target.src =\r\n                          &#39;https://via.placeholder.com/150x150&#39;\r\n                      &quot;\r\n                    /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                      class=&quot;user-photo&quot;\r\n                      alt=&quot;&quot;\r\n                      src=&quot;/demo/avatars/12.jpg&quot;\r\n                      @error.once=&quot;\r\n                        $event.target.src =\r\n                          &#39;https://via.placeholder.com/150x150&#39;\r\n                      &quot;\r\n                    /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                      class=&quot;user-photo&quot;\r\n                      alt=&quot;&quot;\r\n                      src=&quot;/demo/avatars/13.jpg&quot;\r\n                      @error.once=&quot;\r\n                        $event.target.src =\r\n                          &#39;https://via.placeholder.com/150x150&#39;\r\n                      &quot;\r\n                    /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                      class=&quot;user-photo&quot;\r\n                      alt=&quot;&quot;\r\n                      src=&quot;/demo/avatars/25.jpg&quot;\r\n                      @error.once=&quot;\r\n                        $event.target.src =\r\n                          &#39;https://via.placeholder.com/150x150&#39;\r\n                      &quot;\r\n                    /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul>',1),Ee=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1);var Pe=a({expose:[],emits:["close"],setup(a,{emit:l}){const{locale:r}=c(),o=e(null),v=S(o),m=d((()=>{switch(r.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";case"en":default:return"/images/icons/flags/united-states-of-america.svg"}}));return(e,a)=>{const r=u("RouterLink");return s(),t("div",xe,[i("div",Ce,[i("label",je,[i("input",{type:"checkbox",checked:!n(_),onChange:a[1]||(a[1]=e=>{_.value=!e.target.checked})},null,40,["checked"]),we])]),i("a",{class:"toolbar-link right-panel-trigger",onClick:a[2]||(a[2]=e=>q.value="languages")},[i("img",{src:n(m),alt:""},null,8,["src"])]),i("div",_e,[i("div",{ref:o,class:"dropdown is-spaced is-dots is-right dropdown-trigger"},[i("div",{class:"is-trigger","aria-haspopup":"true",onClick:a[3]||(a[3]=(...e)=>n(v).toggle&&n(v).toggle(...e))},[qe,Se]),i("div",Me,[i("div",Ie,[i("div",Ve,[$e,i("div",Le,[i(r,{class:"notification-link",to:{name:"sidebar-layouts-profile-notifications"}},{default:p((()=>[Ae])),_:1})])]),Ue])])],512)]),i("a",{id:"hide-chat-side",class:"toolbar-link",onClick:a[4]||(a[4]=e=>l("close"))},[Ee])])}}});const Oe={class:"sidebar-layout"},Ne=i("div",{class:"app-overlay"},null,-1),ze=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),Fe=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:grid"},null,-1),Te=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"},null,-1),Be=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:cpu"},null,-1),De=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:message-circle"},null,-1),We=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"},null,-1),He=i("li",null,[i("a",{href:"#"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"})])],-1),Ge=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:activity"},null,-1),Re=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:grid"},null,-1),Je=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:box"},null,-1),Xe=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:cpu"},null,-1),Ke=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:message-circle"},null,-1),Qe={class:"right-panel-trigger"},Ye=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather-search"},null,-1),Ze=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather-x"},null,-1),ea=i("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:settings"},null,-1);var aa=a({expose:[],props:{theme:{type:String,default:"default"}},setup(a){const n=a;g();const l=e(!1);return e(!1),(e,a)=>{const r=L,o=A,c=M,d=u("RouterLink"),v=I,m=E,g=V,y=$,b=P;return s(),t("div",Oe,[Ne,h(" Mobile navigation "),i(c,{"is-open":l.value,onToggle:a[1]||(a[1]=e=>l.value=!l.value)},{default:p((()=>[i(r),i(o)])),_:1},8,["is-open"]),h(" Mobile sidebar links "),i(v,{"is-open":l.value,onToggle:a[3]||(a[3]=e=>l.value=!l.value)},{links:p((()=>[i("li",null,[i(d,{to:{name:"sidebar-dashboards"}},{default:p((()=>[ze])),_:1})]),i("li",null,[i(d,{to:{name:"sidebar-layouts"}},{default:p((()=>[Fe])),_:1})]),i("li",null,[i(d,{to:{name:"elements"}},{default:p((()=>[Te])),_:1})]),i("li",null,[i(d,{to:{name:"components"}},{default:p((()=>[Be])),_:1})]),i("li",null,[i(d,{to:{name:"messaging-v1"}},{default:p((()=>[De])),_:1})])])),"bottom-links":p((()=>[i("li",null,[i("a",{onClick:a[2]||(a[2]=e=>q.value="search")},[We])]),He])),_:1},8,["is-open"]),i(m,{theme:n.theme},{links:p((()=>[h(" Dashboards "),i("li",null,[i(d,{to:{name:"sidebar-dashboards"}},{default:p((()=>[Ge])),_:1})]),h(" Layouts "),i("li",null,[i(d,{to:{name:"sidebar-layouts"}},{default:p((()=>[Re])),_:1})]),h(" Elements "),i("li",null,[i(d,{to:{name:"elements"}},{default:p((()=>[Je])),_:1})]),h(" Components "),i("li",null,[i(d,{to:{name:"components"}},{default:p((()=>[Xe])),_:1})]),h(" Messaging "),i("li",null,[i(d,{to:{name:"messaging-v1"}},{default:p((()=>[Ke])),_:1})])])),"bottom-links":p((()=>[h(" Search "),i("li",Qe,[i("a",{"data-content":"Search",onClick:a[4]||(a[4]=e=>q.value="search")},[Ye]),i("a",{class:"is-hidden is-inactive",onClick:a[5]||(a[5]=e=>q.value="none")},[Ze])]),h(" Settings "),i("li",null,[i(d,{id:"open-settings",to:{name:"sidebar-layouts-profile-settings"},"data-content":"Settings"},{default:p((()=>[ea])),_:1})]),h(" Profile Dropdown "),i("li",null,[i(o,{up:""})])])),_:1},8,["theme"]),i(g),i(y),i(b),f(e.$slots,"default",{isMobileSidebarOpen:l.value})])}}});const sa={class:"page-content-wrapper"},ta={class:"page-content chat-content"},ia={class:"page-title has-text-centered is-hidden"},na={class:"menu-toggle has-chevron"},la=i("span",{class:"rotate"},[i("i",{"aria-hidden":"true",class:"icon-line-top"}),i("i",{"aria-hidden":"true",class:"icon-line-center"}),i("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),ra=i("h1",{class:"title is-5"},"Messages",-1),oa={class:"is-chat animated preFadeInUp fadeInUp"},ca={class:"chat-header"},da={class:"control"},ua=i("div",{class:"easy-autocomplete"},[i("input",{id:"users-autocpl",type:"text",class:"input",placeholder:"Start typing a name",autofocus:""})],-1),pa=i("div",{class:"icon"},[i("span",null,"To:")],-1),va=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),ma={class:"chat-body-wrap"},ga={id:"chat-body",class:"chat-body"},ha={key:0,class:"no-messages"},fa=i("img",{class:"light-image",src:O,alt:""},null,-1),ya=i("img",{class:"dark-image",src:N,alt:""},null,-1),ba=i("div",{class:"text"},[i("h3",null,"No messages yet"),i("p",null,"Start the conversation by typing a message")],-1),ka={key:0,class:"divider-container"},xa={class:"divider"},Ca={class:"avatar"},ja={class:"msg"},wa={class:"msg-inner"},_a={class:"avatar is-online"},qa={class:"msg is-image"},Sa={class:"image-container"},Ma=i("div",{class:"image-overlay"},null,-1),Ia={class:"image-actions"},Va={class:"actions-inner"},$a=i("div",{class:"action download"},[i("span",{class:"iconify","data-icon":"feather:download"})],-1),La=i("span",{class:"iconify","data-icon":"feather:maximize"},null,-1),Aa={class:"avatar"},Ua={class:"msg is-link-image"},Ea={class:"image"},Pa={class:"link-badge"},Oa={class:"link-body"},Na={class:"link-title"},za={class:"avatar is-online"},Fa={class:"msg is-link"},Ta={class:"link-meta"},Ba={href:"#"},Da=i("div",{class:"loader is-loading"},null,-1),Wa={class:"chat-side-header"},Ha={class:"chat-side-content is-single"},Ga={class:"user-pic"},Ra={key:0,class:"user-name"},Ja={key:1,class:"user-job-title"},Xa=i("div",{class:"side-actions"},[i("a",{class:"button v-button is-rounded"},[i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"fas fa-phone"})]),i("span",null,"Audio Call")]),i("a",{class:"button v-button is-rounded"},[i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"fas fa-video"})]),i("span",null,"Video Call")])],-1),Ka=i("div",{class:"detail-photos"},[i("div",{class:"detail-photo-title"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-image"},[i("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),i("path",{d:"M21 15l-5-5L5 21"})]),m(" Shared photos ")]),i("div",{class:"detail-photo-grid"},[h(' <img\r\n                          src="/demo/photos/demo-apps/1.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/2.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/3.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/4.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/5.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/6.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/7.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/8.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/9.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/10.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/11.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        />\r\n                        <img\r\n                          src="/demo/photos/demo-apps/12.jpg"\r\n                          alt=""\r\n                          @error.once="\r\n                            $event.target.src =\r\n                              \'https://via.placeholder.com/1600x900\'\r\n                          "\r\n                        /> ')]),i("a",{class:"view-more"},"View More")],-1),Qa={class:"message-field-wrapper"},Ya={class:"control"},Za={class:"add-content"},es=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),as=i("div",{class:"dropdown-menu",role:"menu"},[i("div",{class:"dropdown-content"},[i("a",{class:"dropdown-item"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:video"}),i("div",{class:"meta"},[i("span",null,"Video"),i("span",null,"Embed a video")])]),i("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:image"}),i("div",{class:"meta"},[i("span",null,"Images"),i("span",null,"Upload pictures")])]),i("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:link"}),i("div",{class:"meta"},[i("span",null,"Link"),i("span",null,"Post a link")])]),i("hr",{class:"dropdown-divider"}),i("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:file"}),i("div",{class:"meta"},[i("span",null,"File"),i("span",null,"Upload a file")])])])],-1),ss=i("div",{class:"add-emoji"},[i("div",{class:"button"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:smile"})])],-1),ts=i("input",{id:"chat-input",class:"input is-rounded",type:"text",placeholder:"Write a message ..."},null,-1),is=i("div",{class:"send-message"},[i("div",{class:"button v-button is-primary is-raised is-rounded"}," Send ")],-1),ns=i("div",{class:"typing-indicator"},[i("img",{src:"/images/icons/typing.gif",alt:""})],-1),ls={class:"\r\n                is-chat-placeholder\r\n                animated\r\n                preFadeInUp\r\n                fadeInUp\r\n                is-hidden\r\n              "},rs={class:"caption"},os=i("div",{class:"text"},[i("h3",null,"Nothing to show"),i("p",null,"Select an existing conversation or start a new one"),i("a",{id:"new-chat",class:"\r\n                      button\r\n                      v-button\r\n                      is-solid is-outlined is-big is-rounded\r\n                    "}," Start a new conversation ")],-1),cs=i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1);var ds=a({expose:[],setup(a){const c=[{id:1,name:"Henry G.",lastMessage:"3 minutes ago",avatar:"/demo/avatars/10.jpg"},{id:2,name:"Melany W.",lastMessage:"30 minutes ago",avatar:"/demo/avatars/25.jpg"},{id:3,name:"Tara S.",lastMessage:"1 day ago",avatar:"/demo/avatars/13.jpg"},{id:4,name:"Esteban C.",lastMessage:"1 day ago",avatar:"/demo/avatars/18.jpg"},{id:5,name:"Alice C.",lastMessage:"2 days ago",avatar:"/demo/avatars/7.jpg"}],u=e(null),v=S(u),m=e(!1),g=e(!0),f=e(0),_=e([]),q=e(!1),M=d((()=>{const e=c.find((e=>e.id===f.value));return 0===f.value||!e||g.value?{id:0,name:"",lastMessage:"",avatar:"/images/avatars/placeholder.jpg"}:e}));return y((()=>{B.value="messages",f.value=1})),b({title:"Messaging chat - Sidebar - Vuero"}),k((async()=>{if(0!==f.value){g.value=!0,await T(1e3);try{const{data:e}=await C.get(`/api/conversation${f.value}.json`);e.messages&&e.messages.message&&(_.value=e.messages.message)}catch(e){console.error(e)}g.value=!1}else _.value=[]})),k((()=>{const e="messages"===B.value;document.querySelectorAll(".view-wrapper").forEach((a=>{!1===e?a.classList.remove("is-pushed-full"):a.classList.contains("is-pushed-full")||a.classList.add("is-pushed-full")}))}),{flush:"post"}),(e,a)=>{const d=te,y=ue,b=ke,k=j,C=w,S=Pe,I=aa;return s(),t(I,{theme:n(F)},{default:p((({isMobileSidebarOpen:e})=>[i(x,{name:"slide-x"},{default:p((()=>["messages"===n(B)?(s(),t(d,{key:0,conversations:c,"selected-conversation-id":f.value,onAddConversation:a[1]||(a[1]=()=>{f.value=0,m.value=!m.value}),onSelectConversation:a[2]||(a[2]=e=>{m.value=!1,f.value=e})},null,8,["selected-conversation-id"])):h("v-if",!0)])),_:1}),i(x,{name:"slide-x"},{default:p((()=>[e?(s(),t(y,{key:0,conversations:c,"selected-conversation-id":f.value,onSelectConversation:a[3]||(a[3]=e=>{m.value=!1,f.value=e})},null,8,["selected-conversation-id"])):h("v-if",!0)])),_:2},1024),i(b,{conversations:c,"selected-conversation-id":f.value,onAddConversation:a[4]||(a[4]=()=>{f.value=0,m.value=!m.value}),onSelectConversation:a[5]||(a[5]=e=>{m.value=!1,f.value=e})},null,8,["selected-conversation-id"]),i("div",{id:"vuero-messaging",class:["view-wrapper",["none"===n(B)&&"is-pushed-messages"]]},[i("div",sa,[i("div",ta,[i("div",ia,[i("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:a[6]||(a[6]=e=>n(D)("messages"))},[i("span",na,[i("span",{class:[["none"!==n(B)&&"active"],"icon-box-toggle"]},[la],2)])]),ra]),h(" Chat Card "),i("div",oa,[h(" Header "),i("div",ca,[i("div",{class:[[!m.value&&"is-hidden"],"is-autocomplete"]},[i("div",da,[ua,pa,i("div",{class:"hide",onClick:a[7]||(a[7]=e=>m.value=!1)},[va])])],2)]),i("div",ma,[h(" Chat Body "),i("ol",ga,[0===_.value.length?(s(),t("li",ha,[fa,ya,ba])):h("v-if",!0),(s(!0),t(l,null,r(_.value,(e=>(s(),t("li",{key:e.id,class:["system"===e.type&&"divider-container","system"!==e.type&&e.sender]},[h(" System messages "),"system"===e.type?(s(),t("li",ka,[i("div",xa,[i("span",null,o(e.content.text),1)])])):"msg"===e.type?(s(),t(l,{key:1},[h(" Text messages "),i("div",Ca,[i("img",{src:e.avatar,draggable:"false",alt:""},null,8,["src"])]),i("div",ja,[i("div",wa,[i("p",null,o(e.content.text),1)]),i("time",null,o(e.content.time),1)])],64)):"image"===e.type?(s(),t(l,{key:2},[h(" Image messages "),i("div",_a,[i("img",{src:e.avatar,draggable:"false",alt:""},null,8,["src"])]),i("div",qa,[i("div",Sa,[i(k,{items:[{src:e.content.image_url,thumbnail:e.content.image_url,w:600,h:400,alt:"optional alt attribute for thumbnail image"}],"thumbnail-radius":"full"},null,8,["items"]),Ma,i("div",Ia,[i("div",Va,[$a,i("a",{href:e.content.image_url,class:"action messaging-popup"},[La],8,["href"])])])])])],64)):"imagelink"===e.type?(s(),t(l,{key:3},[h(" Link image messages "),i("div",Aa,[i("img",{src:e.avatar,draggable:"false",alt:""},null,8,["src"])]),i("div",Ua,[i("figure",Ea,[i("img",{src:e.content.link_image,alt:""},null,8,["src"]),i("div",Pa,[i("img",{src:e.content.link_badge,alt:""},null,8,["src"])])]),i("div",Oa,[i("span",Na,o(e.content.text),1),i("small",null,o(e.content.subtext),1)])])],64)):"link"===e.type?(s(),t(l,{key:4},[h(" Link text messages "),i("div",za,[i("img",{src:e.avatar,draggable:"false",alt:""},null,8,["src"])]),i("div",Fa,[i(C,{icon:"feather:link"}),i("p",Ta,[i("span",null,o(e.content.text),1),i("a",Ba,o(e.content.subtext),1)])])],64)):h("v-if",!0)],2)))),128)),i("li",{class:["chat-loader",[g.value&&"is-active"]]},[Da],2)]),h(" Chat side "),i("div",{class:[[q.value&&"is-mobile-active"],"chat-side"]},[i("div",Wa,[i(S,{onClose:a[8]||(a[8]=e=>q.value=!1)})]),i("div",Ha,[i("div",Ga,[i("img",{id:"user-details-image",src:n(M).avatar,alt:"",onErrorOnce:a[9]||(a[9]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),i("img",{id:"user-details-badge",class:"is-badge",src:U,alt:"",onErrorOnce:a[10]||(a[10]=e=>e.target.src="https://via.placeholder.com/150x150")},null,32)]),n(M).name?(s(),t("h4",Ra,o(n(M).name),1)):h("v-if",!0),n(M).lastMessage?(s(),t("p",Ja,o(n(M).lastMessage),1)):h("v-if",!0),Xa,Ka])],2)]),i("div",Qa,[i("div",Ya,[i("div",Za,[i("div",{ref:u,class:"dropdown dropdown-trigger is-up"},[i("div",null,[i("div",{class:"button","aria-haspopup":"true",onClick:a[11]||(a[11]=(...e)=>n(v).toggle&&n(v).toggle(...e))},[es])]),as],512)]),ss,ts,is]),ns])]),i("div",ls,[i("div",rs,[i("img",{src:z,alt:"",onErrorOnce:a[12]||(a[12]=e=>e.target.src="https://via.placeholder.com/150x150")},null,32),os])])])])],2),i("a",{class:[[q.value&&"is-mobile-active"],"chat-side-fab"],onClick:a[13]||(a[13]=e=>q.value=!q.value)},[cs],2)])),_:1},8,["theme"])}}});export default ds;
