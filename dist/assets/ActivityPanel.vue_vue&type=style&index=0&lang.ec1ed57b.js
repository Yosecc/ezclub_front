import{d as a,r as s,i,j as e,l as n,F as t,a8 as l,u as o,o as c,k as r,H as d,I as p,G as u,L as v,S as m,e as g,W as h,$ as f,Q as y}from"./vendor.435948fe.js";import{u as b}from"./useDropdown.9dc4bfe3.js";import{_ as x}from"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import{_ as q}from"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import{_ as j}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{_ as k}from"./V-Dropdown.3004e9ea.js";import{a as w,g as _,c as T,u as V,o as C}from"./index.ff49a0f4.js";import{a as A,c as z,s as M}from"./Companies.5246daaa.js";import{a as S}from"./activePanelState.66f70896.js";import{_ as P,a as $,b as O}from"./fastpizza.1e58d0ec.js";const L=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),U=n("span",{class:"new-indicator pulsate"},null,-1),D=l('<div class="navbar-dropdown is-boxed is-right"><div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div><div class="inner has-slimscroll"><ul class="notification-list"><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                  class=&quot;user-photo&quot;\r\n                  alt=&quot;&quot;\r\n                  src=&quot;/demo/avatars/7.jpg&quot;\r\n                  @error.once=&quot;\r\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\r\n                  &quot;\r\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                  class=&quot;user-photo&quot;\r\n                  alt=&quot;&quot;\r\n                  src=&quot;/demo/avatars/12.jpg&quot;\r\n                  @error.once=&quot;\r\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\r\n                  &quot;\r\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\r\n                  class=&quot;user-photo&quot;\r\n                  alt=&quot;&quot;\r\n                  src=&quot;/demo/avatars/13.jpg&quot;\r\n                  @error.once=&quot;\r\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\r\n                  &quot;\r\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!--  &lt;img\r\n                  class=&quot;user-photo&quot;\r\n                  alt=&quot;&quot;\r\n                  src=&quot;/demo/avatars/25.jpg&quot;\r\n                  @error.once=&quot;\r\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\r\n                  &quot;\r\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul></div></div>',1);var N=a({expose:[],setup(a){const l=s(null),o=b(l);return(a,s)=>(i(),e("div",{ref:l,class:"\r\n      navbar-item\r\n      has-dropdown\r\n      is-notification is-hidden-tablet is-hidden-desktop\r\n    "},[n("a",{class:"navbar-link is-arrowless",onClick:s[1]||(s[1]=(...a)=>t(o).toggle&&t(o).toggle(...a))},[L,U]),D],512))}});const B={key:0},E={key:0,class:"dropdown-head"},J={class:"meta"},W={key:0},F={role:"menuitem",class:"dropdown-item is-media w-100"},I=n("hr",{class:"dropdown-divider"},null,-1),Y={class:"dropdown-item is-button"},G=u(" Logout ");var H=a({expose:[],setup(a){const{cookies:l}=o();c((()=>{A().then((a=>{w(u,"locations_id",z.value.locations),null!=l.get("locations_id")&&(_(u.value,"locations_id").model=l.get("locations_id"))}))}));const u=s([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-12",change:function(a){M(this.model),window.location.reload()}}]);return(a,s)=>{const l=x,o=q,c=j,v=k;return i(),e(v,{right:"",spaced:"",class:"user-dropdown profile-dropdown mb-5"},{button:r((({toggle:a})=>[n("a",{class:"is-trigger dropdown-trigger",style:{display:"block",background:"transparent","text-align":"center"},"aria-haspopup":"true",onClick:a},[n(l,{picture:"https://picsum.photos/200/200"}),t(_)(u.value,"locations_id").values.length?(i(),e("p",B,d(t(T)(u.value,"locations_id").name),1)):p("v-if",!0)],8,["onClick"])])),content:r((()=>[t(V)?(i(),e("div",E,[n(l,{picture:"https://picsum.photos/200/200"}),n("div",J,[n("span",null,d(t(V).name),1),t(_)(u.value,"locations_id").values.length?(i(),e("span",W,d(t(T)(u.value,"locations_id").name),1)):p("v-if",!0)])])):p("v-if",!0),n("div",F,[n(o,{class:"w-100","inputs-step":u.value},null,8,["inputs-step"])]),p('  <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-user-alt"></i>\n        </div>\n        <div class="meta">\n          <span>Profile</span>\n          <span>View your profile</span>\n        </div>\n      </a> '),p(' <hr class="dropdown-divider" /> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-briefcase"></i>\n        </div>\n        <div class="meta">\n          <span>Projects</span>\n          <span>All my projects</span>\n        </div>\n      </a> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-users-alt"></i>\n        </div>\n        <div class="meta">\n          <span>Team</span>\n          <span>Manage your team</span>\n        </div>\n      </a> '),p(' <hr class="dropdown-divider" /> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-cog"></i>\n        </div>\n        <div class="meta">\n          <span>Settings</span>\n          <span>Account settings</span>\n        </div>\n      </a> '),I,n("div",Y,[n(c,{class:"logout-button",icon:"feather:log-out",color:"danger",role:"menuitem",raised:"",fullwidth:"",onClick:s[1]||(s[1]=a=>t(C)())},{default:r((()=>[G])),_:1})])])),_:1})}}});const Q={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},X={class:"container"},K={class:"navbar-brand"},R={class:"brand-start"},Z=n("span",null,null,-1),aa=n("span",null,null,-1),sa=n("span",null,null,-1);var ia=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:s}){const t=a;return(a,l)=>(i(),e("nav",Q,[n("div",X,[p(" Brand "),n("div",K,[p(" Mobile menu toggler icon "),n("div",R,[n("div",{class:["navbar-burger",[t.isOpen&&"is-active"]],onClick:l[1]||(l[1]=a=>s("toggle"))},[Z,aa,sa],2)]),v(a.$slots,"brand")])])]))}});const ea={class:"inner"},na={class:"icon-side-menu"},ta=n("li",null,[n("a",{href:"/"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),la={class:"bottom-icon-side-menu"};var oa=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:s}){const t=a;return(a,l)=>(i(),e(m,null,[n("div",{class:[[t.isOpen&&"is-active"],"mobile-main-sidebar"]},[n("div",ea,[n("ul",na,[v(a.$slots,"links",{},(()=>[ta]))]),n("ul",la,[v(a.$slots,"bottom-links")])])],2),t.isOpen?(i(),e("div",{key:0,class:"mobile-overlay",onClick:l[1]||(l[1]=a=>s("toggle"))})):p("v-if",!0)],64))}}),ca="/images/icons/flags/united-states-of-america.svg";const ra={class:"right-panel"},da={class:"right-panel-head"},pa=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ua={class:"right-panel-body has-slimscroll"},va={class:"languages-boxes"},ma={class:"language-box"},ga={class:"language-option"},ha=n("div",{class:"language-option-inner"},[n("img",{src:ca,alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),fa={class:"language-box"},ya={class:"language-option"},ba=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/france.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),xa={class:"language-box"},qa={class:"language-option"},ja=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/spain.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ka={class:"language-box"},wa={class:"language-option"},_a=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/germany.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Ta={class:"language-box"},Va={class:"language-option"},Ca=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/mexico.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Aa={class:"language-box"},za={class:"language-option"},Ma=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/china.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Sa=n("div",{class:"img-wrap has-text-centered"},[n("img",{class:"light-image",src:"/assets/languages.e0fe0d4d.svg",alt:""}),n("img",{class:"dark-image",src:"/assets/languages-dark.503c0ba0.svg",alt:""})],-1);var Pa=a({expose:[],setup(a){const{locale:s,t:l}=g();return(a,o)=>(i(),e("div",{id:"languages-panel",class:[["languages"===t(S)&&"is-active"],"right-panel-wrapper is-languages"]},[n("div",{class:"panel-overlay",onClick:o[1]||(o[1]=a=>S.value="none")}),n("div",ra,[n("div",da,[n("h3",null,d(t(l)("select-language")),1),n("a",{class:"close-panel",onClick:o[2]||(o[2]=a=>S.value="none")},[pa])]),n("div",ua,[n("div",va,[n("div",ma,[n("div",ga,[h(n("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"en",checked:""},null,512),[[f,t(s)]]),ha])]),n("div",fa,[n("div",ya,[h(n("input",{"onUpdate:modelValue":o[4]||(o[4]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"fr"},null,512),[[f,t(s)]]),ba])]),n("div",xa,[n("div",qa,[h(n("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"es"},null,512),[[f,t(s)]]),ja])]),n("div",ka,[n("div",wa,[h(n("input",{"onUpdate:modelValue":o[6]||(o[6]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"de"},null,512),[[f,t(s)]]),_a])]),n("div",Ta,[n("div",Va,[h(n("input",{"onUpdate:modelValue":o[7]||(o[7]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"es-MX"},null,512),[[f,t(s)]]),Ca])]),n("div",Aa,[n("div",za,[h(n("input",{"onUpdate:modelValue":o[8]||(o[8]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"zh-CN"},null,512),[[f,t(s)]]),Ma])])]),Sa])])],2))}});const $a={class:"right-panel"},Oa={class:"right-panel-head"},La=n("h3",null,"Activity",-1),Ua=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Da={class:"tabs-wrapper is-triple-slider is-squared"},Na={class:"tabs-inner"},Ba={class:"tabs"},Ea=n("span",null,"Team",-1),Ja=n("span",null,"Projects",-1),Wa=n("span",null,"Schedule",-1),Fa=n("li",{class:"tab-naver"},null,-1),Ia={class:"right-panel-body"},Ya=l('<div class="team-card">\x3c!-- &lt;V-Avatar\r\n                picture=&quot;/demo/avatars/12.jpg&quot;\r\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\r\n              /&gt; --\x3e<div class="meta"><span>Joshua S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Las Vegas, NV </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Ga=l('<div class="team-card">\x3c!-- &lt;V-Avatar\r\n                picture=&quot;/demo/avatars/25.jpg&quot;\r\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\r\n              /&gt; --\x3e<div class="meta"><span>Melany W.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> San Jose, CA </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Ha=l('<div class="team-card">\x3c!-- &lt;V-Avatar\r\n                picture=&quot;/demo/avatars/18.jpg&quot;\r\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\r\n              /&gt; --\x3e<div class="meta"><span>Esteban C.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Miami, FL </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Qa=l('<div class="team-card">\x3c!-- &lt;V-Avatar\r\n                picture=&quot;/demo/avatars/13.jpg&quot;\r\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\r\n              /&gt; --\x3e<div class="meta"><span>Tara S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> New York, NY </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Xa={class:"project-card"},Ka={class:"project-inner"},Ra=n("div",{class:"meta"},[n("span",null,"The slicer project"),n("span",null,"getslicer.io")],-1),Za=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),as=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"31",max:"100"}," 31% "),n("div",{class:"foot-stats"},[n("span",null,"5 / 24"),n("div",{class:"avatar-stack"},[p('< V-Avatar size="small" picture="/demo/avatars/5.jpg" />\r\n                    <V-Avatar size="small" picture="/demo/avatars/7.jpg" />\r\n                    <V-Avatar size="small" picture="/demo/avatars/8.jpg" /> ')])])],-1),ss={class:"project-card"},is={class:"project-inner"},es=n("div",{class:"meta"},[n("span",null,"Metamovies reworked"),n("span",null,"metamovies.co")],-1),ns=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),ts=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"84",max:"100"}," 84% "),n("div",{class:"foot-stats"},[n("span",null,"28 / 31"),n("div",{class:"avatar-stack"},[p(' <V-Avatar size="small" picture="/demo/avatars/13.jpg" />\r\n                    <V-Avatar size="small" picture="/demo/avatars/18.jpg" /> ')])])],-1),ls={class:"project-card"},os={class:"project-inner"},cs=n("div",{class:"meta"},[n("span",null,"Fast Pizza redesign"),n("span",null,"fastpizza.com")],-1),rs=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),ds=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"60",max:"100"}," 60% "),n("div",{class:"foot-stats"},[n("span",null,"25 / 39"),n("div",{class:"avatar-stack"},[p('  <V-Avatar size="small" picture="/demo/avatars/7.jpg" />\r\n                    <V-Avatar size="small" picture="/demo/avatars/25.jpg" /> ')])])],-1),ps=l('<div class="icon-timeline">\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon">\x3c!-- &lt;img\r\n                    class=&quot;avatar&quot;\r\n                    src=&quot;/demo/avatars/7.jpg&quot;\r\n                    alt=&quot;&quot;\r\n                    @error.once=&quot;\r\n                      $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\r\n                    &quot;\r\n                  /&gt; --\x3e</div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1);var us=a({expose:[],setup(a){const l=s("team");return(a,s)=>(i(),e("div",{id:"activity-panel",class:[["activity"===t(S)&&"is-active"],"right-panel-wrapper is-activity"]},[n("div",{class:"panel-overlay",onClick:s[1]||(s[1]=a=>S.value="none")}),n("div",$a,[n("div",Oa,[La,n("a",{class:"close-panel",onClick:s[2]||(s[2]=a=>S.value="none")},[Ua])]),n("div",Da,[n("div",Na,[n("div",Ba,[n("ul",null,[n("li",{class:["team"===l.value&&"is-active"]},[n("a",{onClick:s[3]||(s[3]=a=>l.value="team")},[Ea])],2),n("li",{class:["projects"===l.value&&"is-active"]},[n("a",{onClick:s[4]||(s[4]=a=>l.value="projects")},[Ja])],2),n("li",{class:["schedule"===l.value&&"is-active"]},[n("a",{onClick:s[5]||(s[5]=a=>l.value="schedule")},[Wa])],2),Fa])])]),n("div",Ia,[n("div",{id:"team-side-tab",class:["tab-content",["team"===l.value&&"is-active"]]},[p("Team Member"),Ya,p("Team Member"),Ga,p("Team Member"),Ha,p("Team Member"),Qa],2),n("div",{id:"projects-side-tab",class:["tab-content",["projects"===l.value&&"is-active"]]},[p("Project"),n("div",Xa,[n("div",Ka,[n("img",{class:"project-avatar",src:P,alt:"",onErrorOnce:s[6]||(s[6]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ra,Za]),as]),p("Project"),n("div",ss,[n("div",is,[n("img",{class:"project-avatar",src:$,alt:"",onErrorOnce:s[7]||(s[7]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),es,ns]),ts]),p("Project"),n("div",ls,[n("div",os,[n("img",{class:"project-avatar",src:O,alt:"",onErrorOnce:s[8]||(s[8]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),cs,rs]),ds])],2),n("div",{id:"schedule-side-tab",class:["tab-content",["schedule"===l.value&&"is-active"]]},[p("Timeline"),ps],2)])])])],2))}});export{ia as _,oa as a,Pa as b,us as c,N as d,H as e,ca as f};
