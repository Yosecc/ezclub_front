import{d as a,r as s,o as i,i as e,k as n,D as t,a7 as l,u as o,H as c,j as r,F as d,G as p,E as u,K as v,Q as m,e as g,S as h,Z as f,P as y}from"./vendor.0a671356.js";import{u as b}from"./useDropdown.77607dc4.js";import{_ as x}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5a91b6d4.js";import{_ as q}from"./inputsLayaut.vue_vue&type=style&index=0&lang.5a3d9cb5.js";import{_ as j}from"./V-Button.vue_vue&type=script&setup=true&lang.86e7bf66.js";import{_ as k}from"./V-Dropdown.8f29eb52.js";import{a as w,g as T,u as V,o as _}from"./index.9c671a97.js";import{b as C,c as A}from"./Companies.c77a53e7.js";import{a as z}from"./activePanelState.ab4ec9b0.js";import{_ as M,a as P,b as S}from"./fastpizza.1e58d0ec.js";const O=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),$=n("span",{class:"new-indicator pulsate"},null,-1),D=l('<div class="navbar-dropdown is-boxed is-right"><div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div><div class="inner has-slimscroll"><ul class="notification-list"><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\n                  class=&quot;user-photo&quot;\n                  alt=&quot;&quot;\n                  src=&quot;/demo/avatars/7.jpg&quot;\n                  @error.once=&quot;\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\n                  &quot;\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\n                  class=&quot;user-photo&quot;\n                  alt=&quot;&quot;\n                  src=&quot;/demo/avatars/12.jpg&quot;\n                  @error.once=&quot;\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\n                  &quot;\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!-- &lt;img\n                  class=&quot;user-photo&quot;\n                  alt=&quot;&quot;\n                  src=&quot;/demo/avatars/13.jpg&quot;\n                  @error.once=&quot;\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\n                  &quot;\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left">\x3c!--  &lt;img\n                  class=&quot;user-photo&quot;\n                  alt=&quot;&quot;\n                  src=&quot;/demo/avatars/25.jpg&quot;\n                  @error.once=&quot;\n                    $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\n                  &quot;\n                /&gt; --\x3e</div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul></div></div>',1);var U=a({expose:[],setup(a){const l=s(null),o=b(l);return(a,s)=>(i(),e("div",{ref:l,class:"\n      navbar-item\n      has-dropdown\n      is-notification is-hidden-tablet is-hidden-desktop\n    "},[n("a",{class:"navbar-link is-arrowless",onClick:s[1]||(s[1]=(...a)=>t(o).toggle&&t(o).toggle(...a))},[O,$]),D],512))}});const E={key:0,class:"dropdown-head"},L={class:"meta"},N={role:"menuitem",class:"dropdown-item is-media w-100"},B=n("hr",{class:"dropdown-divider"},null,-1),J={class:"dropdown-item is-button"},F=u(" Logout ");var W=a({expose:[],setup(a){const{cookies:l}=o();c((()=>{C().then((a=>{w(u,"locations_id",A.value.locations),null!=l.get("locations_id")&&(T(u.value,"locations_id").model=l.get("locations_id"))}))}));const u=s([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-12",change:function(a){l.set("locations_id",this.model)}}]);return(a,s)=>{const l=x,o=q,c=j,v=k;return i(),e(v,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:r((({toggle:a})=>[n("a",{class:"is-trigger dropdown-trigger","aria-haspopup":"true",onClick:a},[n(l,{picture:"https://picsum.photos/200/200"})],8,["onClick"])])),content:r((()=>[t(V)?(i(),e("div",E,[n(l,{picture:"https://picsum.photos/200/200"}),n("div",L,[n("span",null,d(t(V).name),1),p(" <span>Product Manager</span> ")])])):p("v-if",!0),n("div",N,[n(o,{class:"w-100","inputs-step":u.value},null,8,["inputs-step"])]),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-user-alt"></i>\n        </div>\n        <div class="meta">\n          <span>Profile</span>\n          <span>View your profile</span>\n        </div>\n      </a> '),p(' <hr class="dropdown-divider" /> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-briefcase"></i>\n        </div>\n        <div class="meta">\n          <span>Projects</span>\n          <span>All my projects</span>\n        </div>\n      </a> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-users-alt"></i>\n        </div>\n        <div class="meta">\n          <span>Team</span>\n          <span>Manage your team</span>\n        </div>\n      </a> '),p(' <hr class="dropdown-divider" /> '),p(' <a href="#" role="menuitem" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-cog"></i>\n        </div>\n        <div class="meta">\n          <span>Settings</span>\n          <span>Account settings</span>\n        </div>\n      </a> '),B,n("div",J,[n(c,{class:"logout-button",icon:"feather:log-out",color:"danger",role:"menuitem",raised:"",fullwidth:"",onClick:s[1]||(s[1]=a=>t(_)())},{default:r((()=>[F])),_:1})])])),_:1})}}});const I={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Y={class:"container"},G={class:"navbar-brand"},H={class:"brand-start"},K=n("span",null,null,-1),Q=n("span",null,null,-1),X=n("span",null,null,-1);var Z=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:s}){const t=a;return(a,l)=>(i(),e("nav",I,[n("div",Y,[p(" Brand "),n("div",G,[p(" Mobile menu toggler icon "),n("div",H,[n("div",{class:["navbar-burger",[t.isOpen&&"is-active"]],onClick:l[1]||(l[1]=a=>s("toggle"))},[K,Q,X],2)]),v(a.$slots,"brand")])])]))}});const R={class:"inner"},aa={class:"icon-side-menu"},sa=n("li",null,[n("a",{href:"/"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),ia={class:"bottom-icon-side-menu"};var ea=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:s}){const t=a;return(a,l)=>(i(),e(m,null,[n("div",{class:[[t.isOpen&&"is-active"],"mobile-main-sidebar"]},[n("div",R,[n("ul",aa,[v(a.$slots,"links",{},(()=>[sa]))]),n("ul",ia,[v(a.$slots,"bottom-links")])])],2),t.isOpen?(i(),e("div",{key:0,class:"mobile-overlay",onClick:l[1]||(l[1]=a=>s("toggle"))})):p("v-if",!0)],64))}}),na="/images/icons/flags/united-states-of-america.svg";const ta={class:"right-panel"},la={class:"right-panel-head"},oa=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),ca={class:"right-panel-body has-slimscroll"},ra={class:"languages-boxes"},da={class:"language-box"},pa={class:"language-option"},ua=n("div",{class:"language-option-inner"},[n("img",{src:na,alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),va={class:"language-box"},ma={class:"language-option"},ga=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/france.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ha={class:"language-box"},fa={class:"language-option"},ya=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/spain.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ba={class:"language-box"},xa={class:"language-option"},qa=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/germany.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ja={class:"language-box"},ka={class:"language-option"},wa=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/mexico.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Ta={class:"language-box"},Va={class:"language-option"},_a=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/china.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Ca=n("div",{class:"img-wrap has-text-centered"},[n("img",{class:"light-image",src:"/assets/languages.7b1df35e.svg",alt:""}),n("img",{class:"dark-image",src:"/assets/languages-dark.e1954b48.svg",alt:""})],-1);var Aa=a({expose:[],setup(a){const{locale:s,t:l}=g();return(a,o)=>(i(),e("div",{id:"languages-panel",class:[["languages"===t(z)&&"is-active"],"right-panel-wrapper is-languages"]},[n("div",{class:"panel-overlay",onClick:o[1]||(o[1]=a=>z.value="none")}),n("div",ta,[n("div",la,[n("h3",null,d(t(l)("select-language")),1),n("a",{class:"close-panel",onClick:o[2]||(o[2]=a=>z.value="none")},[oa])]),n("div",ca,[n("div",ra,[n("div",da,[n("div",pa,[h(n("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"en",checked:""},null,512),[[f,t(s)]]),ua])]),n("div",va,[n("div",ma,[h(n("input",{"onUpdate:modelValue":o[4]||(o[4]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"fr"},null,512),[[f,t(s)]]),ga])]),n("div",ha,[n("div",fa,[h(n("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"es"},null,512),[[f,t(s)]]),ya])]),n("div",ba,[n("div",xa,[h(n("input",{"onUpdate:modelValue":o[6]||(o[6]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"de"},null,512),[[f,t(s)]]),qa])]),n("div",ja,[n("div",ka,[h(n("input",{"onUpdate:modelValue":o[7]||(o[7]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"es-MX"},null,512),[[f,t(s)]]),wa])]),n("div",Ta,[n("div",Va,[h(n("input",{"onUpdate:modelValue":o[8]||(o[8]=a=>y(s)?s.value=a:null),type:"radio",name:"language_selection",value:"zh-CN"},null,512),[[f,t(s)]]),_a])])]),Ca])])],2))}});const za={class:"right-panel"},Ma={class:"right-panel-head"},Pa=n("h3",null,"Activity",-1),Sa=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Oa={class:"tabs-wrapper is-triple-slider is-squared"},$a={class:"tabs-inner"},Da={class:"tabs"},Ua=n("span",null,"Team",-1),Ea=n("span",null,"Projects",-1),La=n("span",null,"Schedule",-1),Na=n("li",{class:"tab-naver"},null,-1),Ba={class:"right-panel-body"},Ja=l('<div class="team-card">\x3c!-- &lt;V-Avatar\n                picture=&quot;/demo/avatars/12.jpg&quot;\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\n              /&gt; --\x3e<div class="meta"><span>Joshua S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Las Vegas, NV </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Fa=l('<div class="team-card">\x3c!-- &lt;V-Avatar\n                picture=&quot;/demo/avatars/25.jpg&quot;\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\n              /&gt; --\x3e<div class="meta"><span>Melany W.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> San Jose, CA </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Wa=l('<div class="team-card">\x3c!-- &lt;V-Avatar\n                picture=&quot;/demo/avatars/18.jpg&quot;\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\n              /&gt; --\x3e<div class="meta"><span>Esteban C.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Miami, FL </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Ia=l('<div class="team-card">\x3c!-- &lt;V-Avatar\n                picture=&quot;/demo/avatars/13.jpg&quot;\n                badge=&quot;/images/icons/flags/united-states-of-america.svg&quot;\n              /&gt; --\x3e<div class="meta"><span>Tara S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> New York, NY </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),Ya={class:"project-card"},Ga={class:"project-inner"},Ha=n("div",{class:"meta"},[n("span",null,"The slicer project"),n("span",null,"getslicer.io")],-1),Ka=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Qa=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"31",max:"100"}," 31% "),n("div",{class:"foot-stats"},[n("span",null,"5 / 24"),n("div",{class:"avatar-stack"},[p('< V-Avatar size="small" picture="/demo/avatars/5.jpg" />\n                    <V-Avatar size="small" picture="/demo/avatars/7.jpg" />\n                    <V-Avatar size="small" picture="/demo/avatars/8.jpg" /> ')])])],-1),Xa={class:"project-card"},Za={class:"project-inner"},Ra=n("div",{class:"meta"},[n("span",null,"Metamovies reworked"),n("span",null,"metamovies.co")],-1),as=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),ss=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"84",max:"100"}," 84% "),n("div",{class:"foot-stats"},[n("span",null,"28 / 31"),n("div",{class:"avatar-stack"},[p(' <V-Avatar size="small" picture="/demo/avatars/13.jpg" />\n                    <V-Avatar size="small" picture="/demo/avatars/18.jpg" /> ')])])],-1),is={class:"project-card"},es={class:"project-inner"},ns=n("div",{class:"meta"},[n("span",null,"Fast Pizza redesign"),n("span",null,"fastpizza.com")],-1),ts=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),ls=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"60",max:"100"}," 60% "),n("div",{class:"foot-stats"},[n("span",null,"25 / 39"),n("div",{class:"avatar-stack"},[p('  <V-Avatar size="small" picture="/demo/avatars/7.jpg" />\n                    <V-Avatar size="small" picture="/demo/avatars/25.jpg" /> ')])])],-1),os=l('<div class="icon-timeline">\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon">\x3c!-- &lt;img\n                    class=&quot;avatar&quot;\n                    src=&quot;/demo/avatars/7.jpg&quot;\n                    alt=&quot;&quot;\n                    @error.once=&quot;\n                      $event.target.src = &#39;https://via.placeholder.com/150x150&#39;\n                    &quot;\n                  /&gt; --\x3e</div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div>\x3c!--Timeline item--\x3e<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1);var cs=a({expose:[],setup(a){const l=s("team");return(a,s)=>(i(),e("div",{id:"activity-panel",class:[["activity"===t(z)&&"is-active"],"right-panel-wrapper is-activity"]},[n("div",{class:"panel-overlay",onClick:s[1]||(s[1]=a=>z.value="none")}),n("div",za,[n("div",Ma,[Pa,n("a",{class:"close-panel",onClick:s[2]||(s[2]=a=>z.value="none")},[Sa])]),n("div",Oa,[n("div",$a,[n("div",Da,[n("ul",null,[n("li",{class:["team"===l.value&&"is-active"]},[n("a",{onClick:s[3]||(s[3]=a=>l.value="team")},[Ua])],2),n("li",{class:["projects"===l.value&&"is-active"]},[n("a",{onClick:s[4]||(s[4]=a=>l.value="projects")},[Ea])],2),n("li",{class:["schedule"===l.value&&"is-active"]},[n("a",{onClick:s[5]||(s[5]=a=>l.value="schedule")},[La])],2),Na])])]),n("div",Ba,[n("div",{id:"team-side-tab",class:["tab-content",["team"===l.value&&"is-active"]]},[p("Team Member"),Ja,p("Team Member"),Fa,p("Team Member"),Wa,p("Team Member"),Ia],2),n("div",{id:"projects-side-tab",class:["tab-content",["projects"===l.value&&"is-active"]]},[p("Project"),n("div",Ya,[n("div",Ga,[n("img",{class:"project-avatar",src:M,alt:"",onErrorOnce:s[6]||(s[6]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ha,Ka]),Qa]),p("Project"),n("div",Xa,[n("div",Za,[n("img",{class:"project-avatar",src:P,alt:"",onErrorOnce:s[7]||(s[7]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ra,as]),ss]),p("Project"),n("div",is,[n("div",es,[n("img",{class:"project-avatar",src:S,alt:"",onErrorOnce:s[8]||(s[8]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),ns,ts]),ls])],2),n("div",{id:"schedule-side-tab",class:["tab-content",["schedule"===l.value&&"is-active"]]},[p("Timeline"),os],2)])])])],2))}});export{Z as _,ea as a,Aa as b,cs as c,U as d,W as e,na as f};
