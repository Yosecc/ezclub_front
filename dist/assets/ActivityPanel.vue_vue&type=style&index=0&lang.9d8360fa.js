import{u as a}from"./useDropdown.c66a6279.js";import{d as i,r as s,o as e,h as l,k as n,D as t,W as c,u as o,z as d,j as r,J as p,K as v,G as u,I as m,L as g,e as h,F as f,U as y,X as b}from"./vendor.d1a3c89d.js";import{_ as k}from"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import{a as w,c as j,_ as x}from"./Companies.449438e9.js";import{_ as C}from"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import{_}from"./V-Dropdown.0747f2f0.js";import{s as T,g as V,u as S,o as z}from"./index.5b8a83ef.js";import{a as A}from"./activePanelState.a69051ae.js";import{_ as O,a as U,b as D}from"./fastpizza.c9124eb0.js";const M=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),J=n("span",{class:"new-indicator pulsate"},null,-1),L=c('<div class="navbar-dropdown is-boxed is-right"><div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div><div class="inner has-slimscroll"><ul class="notification-list"><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul></div></div>',1);var N=i({expose:[],setup(i){const c=s(null),o=a(c);return(a,i)=>(e(),l("div",{ref:c,class:"\r\n      navbar-item\r\n      has-dropdown\r\n      is-notification is-hidden-tablet is-hidden-desktop\r\n    "},[n("a",{class:"navbar-link is-arrowless",onClick:i[1]||(i[1]=(...a)=>t(o).toggle&&t(o).toggle(...a))},[M,J]),L],512))}});const E={key:0,class:"dropdown-head"},P={class:"meta"},W={role:"menuitem",class:"dropdown-item is-media w-100"},B=n("hr",{class:"dropdown-divider"},null,-1),F={class:"dropdown-item is-button"},I=u(" Logout ");var $=i({expose:[],setup(a){const{cookies:i}=o();d((()=>{w().then((a=>{T(c,"locations_id",j.value.locations),null!=i.get("locations_id")&&(V(c.value,"locations_id").model=i.get("locations_id"))}))}));const c=s([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-12",change:function(a){i.set("locations_id",this.model)}}]);return(a,i)=>{const s=k,o=x,d=C,u=_;return e(),l(u,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:r((({toggle:a})=>[n("a",{class:"is-trigger dropdown-trigger","aria-haspopup":"true",onClick:a},[n(s,{picture:"https://picsum.photos/200/200"})],8,["onClick"])])),content:r((()=>[t(S)?(e(),l("div",E,[n(s,{picture:"https://picsum.photos/200/200"}),n("div",P,[n("span",null,p(t(S).name),1)])])):v("",!0),n("div",W,[n(o,{class:"w-100","inputs-step":c.value},null,8,["inputs-step"])]),B,n("div",F,[n(d,{class:"logout-button",icon:"feather:log-out",color:"danger",role:"menuitem",raised:"",fullwidth:"",onClick:i[1]||(i[1]=a=>t(z)())},{default:r((()=>[I])),_:1})])])),_:1})}}});const X={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Y={class:"container"},q={class:"navbar-brand"},G={class:"brand-start"},K=n("span",null,null,-1),H=n("span",null,null,-1),Q=n("span",null,null,-1);var R=i({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:i}){const s=a;return(a,t)=>(e(),l("nav",X,[n("div",Y,[n("div",q,[n("div",G,[n("div",{class:["navbar-burger",[s.isOpen&&"is-active"]],onClick:t[1]||(t[1]=a=>i("toggle"))},[K,H,Q],2)]),m(a.$slots,"brand")])])]))}});const Z={class:"inner"},aa={class:"icon-side-menu"},ia=n("li",null,[n("a",{href:"/"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),sa={class:"bottom-icon-side-menu"};var ea=i({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:i}){const s=a;return(a,t)=>(e(),l(g,null,[n("div",{class:[[s.isOpen&&"is-active"],"mobile-main-sidebar"]},[n("div",Z,[n("ul",aa,[m(a.$slots,"links",{},(()=>[ia]))]),n("ul",sa,[m(a.$slots,"bottom-links")])])],2),s.isOpen?(e(),l("div",{key:0,class:"mobile-overlay",onClick:t[1]||(t[1]=a=>i("toggle"))})):v("",!0)],64))}}),la="/images/icons/flags/united-states-of-america.svg";const na={class:"right-panel"},ta={class:"right-panel-head"},ca=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),oa={class:"right-panel-body has-slimscroll"},da={class:"languages-boxes"},ra={class:"language-box"},pa={class:"language-option"},va=n("div",{class:"language-option-inner"},[n("img",{src:la,alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ua={class:"language-box"},ma={class:"language-option"},ga=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/france.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ha={class:"language-box"},fa={class:"language-option"},ya=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/spain.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ba={class:"language-box"},ka={class:"language-option"},wa=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/germany.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ja={class:"language-box"},xa={class:"language-option"},Ca=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/mexico.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),_a={class:"language-box"},Ta={class:"language-option"},Va=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/china.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Sa=n("div",{class:"img-wrap has-text-centered"},[n("img",{class:"light-image",src:"/assets/languages.e0fe0d4d.svg",alt:""}),n("img",{class:"dark-image",src:"/assets/languages-dark.503c0ba0.svg",alt:""})],-1);var za=i({expose:[],setup(a){const{locale:i,t:s}=h();return(a,c)=>(e(),l("div",{id:"languages-panel",class:[["languages"===t(A)&&"is-active"],"right-panel-wrapper is-languages"]},[n("div",{class:"panel-overlay",onClick:c[1]||(c[1]=a=>A.value="none")}),n("div",na,[n("div",ta,[n("h3",null,p(t(s)("select-language")),1),n("a",{class:"close-panel",onClick:c[2]||(c[2]=a=>A.value="none")},[ca])]),n("div",oa,[n("div",da,[n("div",ra,[n("div",pa,[f(n("input",{"onUpdate:modelValue":c[3]||(c[3]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"en",checked:""},null,512),[[y,t(i)]]),va])]),n("div",ua,[n("div",ma,[f(n("input",{"onUpdate:modelValue":c[4]||(c[4]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"fr"},null,512),[[y,t(i)]]),ga])]),n("div",ha,[n("div",fa,[f(n("input",{"onUpdate:modelValue":c[5]||(c[5]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"es"},null,512),[[y,t(i)]]),ya])]),n("div",ba,[n("div",ka,[f(n("input",{"onUpdate:modelValue":c[6]||(c[6]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"de"},null,512),[[y,t(i)]]),wa])]),n("div",ja,[n("div",xa,[f(n("input",{"onUpdate:modelValue":c[7]||(c[7]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"es-MX"},null,512),[[y,t(i)]]),Ca])]),n("div",_a,[n("div",Ta,[f(n("input",{"onUpdate:modelValue":c[8]||(c[8]=a=>b(i)?i.value=a:null),type:"radio",name:"language_selection",value:"zh-CN"},null,512),[[y,t(i)]]),Va])])]),Sa])])],2))}});const Aa={class:"right-panel"},Oa={class:"right-panel-head"},Ua=n("h3",null,"Activity",-1),Da=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Ma={class:"tabs-wrapper is-triple-slider is-squared"},Ja={class:"tabs-inner"},La={class:"tabs"},Na=n("span",null,"Team",-1),Ea=n("span",null,"Projects",-1),Pa=n("span",null,"Schedule",-1),Wa=n("li",{class:"tab-naver"},null,-1),Ba={class:"right-panel-body"},Fa=c('<div class="team-card"><div class="meta"><span>Joshua S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Las Vegas, NV </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Melany W.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> San Jose, CA </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Esteban C.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Miami, FL </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Tara S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> New York, NY </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',4),Ia={class:"project-card"},$a={class:"project-inner"},Xa=n("div",{class:"meta"},[n("span",null,"The slicer project"),n("span",null,"getslicer.io")],-1),Ya=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),qa=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"31",max:"100"}," 31% "),n("div",{class:"foot-stats"},[n("span",null,"5 / 24"),n("div",{class:"avatar-stack"})])],-1),Ga={class:"project-card"},Ka={class:"project-inner"},Ha=n("div",{class:"meta"},[n("span",null,"Metamovies reworked"),n("span",null,"metamovies.co")],-1),Qa=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Ra=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"84",max:"100"}," 84% "),n("div",{class:"foot-stats"},[n("span",null,"28 / 31"),n("div",{class:"avatar-stack"})])],-1),Za={class:"project-card"},ai={class:"project-inner"},ii=n("div",{class:"meta"},[n("span",null,"Fast Pizza redesign"),n("span",null,"fastpizza.com")],-1),si=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),ei=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"60",max:"100"}," 60% "),n("div",{class:"foot-stats"},[n("span",null,"25 / 39"),n("div",{class:"avatar-stack"})])],-1),li=c('<div class="icon-timeline"><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div><div class="timeline-item"><div class="timeline-icon"></div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1);var ni=i({expose:[],setup(a){const i=s("team");return(a,s)=>(e(),l("div",{id:"activity-panel",class:[["activity"===t(A)&&"is-active"],"right-panel-wrapper is-activity"]},[n("div",{class:"panel-overlay",onClick:s[1]||(s[1]=a=>A.value="none")}),n("div",Aa,[n("div",Oa,[Ua,n("a",{class:"close-panel",onClick:s[2]||(s[2]=a=>A.value="none")},[Da])]),n("div",Ma,[n("div",Ja,[n("div",La,[n("ul",null,[n("li",{class:["team"===i.value&&"is-active"]},[n("a",{onClick:s[3]||(s[3]=a=>i.value="team")},[Na])],2),n("li",{class:["projects"===i.value&&"is-active"]},[n("a",{onClick:s[4]||(s[4]=a=>i.value="projects")},[Ea])],2),n("li",{class:["schedule"===i.value&&"is-active"]},[n("a",{onClick:s[5]||(s[5]=a=>i.value="schedule")},[Pa])],2),Wa])])]),n("div",Ba,[n("div",{id:"team-side-tab",class:["tab-content",["team"===i.value&&"is-active"]]},[Fa],2),n("div",{id:"projects-side-tab",class:["tab-content",["projects"===i.value&&"is-active"]]},[n("div",Ia,[n("div",$a,[n("img",{class:"project-avatar",src:O,alt:"",onErrorOnce:s[6]||(s[6]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Xa,Ya]),qa]),n("div",Ga,[n("div",Ka,[n("img",{class:"project-avatar",src:U,alt:"",onErrorOnce:s[7]||(s[7]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ha,Qa]),Ra]),n("div",Za,[n("div",ai,[n("img",{class:"project-avatar",src:D,alt:"",onErrorOnce:s[8]||(s[8]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),ii,si]),ei])],2),n("div",{id:"schedule-side-tab",class:["tab-content",["schedule"===i.value&&"is-active"]]},[li],2)])])])],2))}});export{R as _,ea as a,za as b,ni as c,N as d,$ as e,la as f};
