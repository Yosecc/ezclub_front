import{u as a}from"./useDropdown.dfad556c.js";import{d as i,r as s,o as e,h as l,k as n,E as t,W as c,j as o,K as d,L as r,H as p,J as v,N as u,e as g,G as m,U as h,X as f}from"./vendor.e3a29b40.js";import{_ as y}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{_ as b}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{_ as k}from"./V-Dropdown.7404a3e2.js";import{u as w,o as j}from"./index.e69f2eb2.js";import{a as x}from"./activePanelState.5a49edcb.js";import{_ as C,a as _,b as T}from"./fastpizza.1e58d0ec.js";const V=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),S=n("span",{class:"new-indicator pulsate"},null,-1),O=c('<div class="navbar-dropdown is-boxed is-right"><div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div><div class="inner has-slimscroll"><ul class="notification-list"><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul></div></div>',1);var z=i({expose:[],setup(i){const c=s(null),o=a(c);return(a,i)=>(e(),l("div",{ref:c,class:"\n      navbar-item\n      has-dropdown\n      is-notification is-hidden-tablet is-hidden-desktop\n    "},[n("a",{class:"navbar-link is-arrowless",onClick:i[1]||(i[1]=(...a)=>t(o).toggle&&t(o).toggle(...a))},[V,S]),O],512))}});const A={key:0,class:"dropdown-head"},U={class:"meta"},M={class:"dropdown-item is-button"},N=p(" Logout ");var E=i({expose:[],setup:a=>(a,i)=>{const s=y,c=b,p=k;return e(),l(p,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:o((({toggle:a})=>[n("a",{class:"is-trigger dropdown-trigger","aria-haspopup":"true",onClick:a},[n(s,{picture:"https://picsum.photos/200/200"})],8,["onClick"])])),content:o((()=>[t(w)?(e(),l("div",A,[n(s,{picture:"https://picsum.photos/200/200"}),n("div",U,[n("span",null,d(t(w).name),1)])])):r("",!0),n("div",M,[n(c,{class:"logout-button",icon:"feather:log-out",color:"danger",role:"menuitem",raised:"",fullwidth:"",onClick:i[1]||(i[1]=a=>t(j)())},{default:o((()=>[N])),_:1})])])),_:1})}});const J={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},D={class:"container"},L={class:"navbar-brand"},P={class:"brand-start"},W=n("span",null,null,-1),B=n("span",null,null,-1),$=n("span",null,null,-1);var F=i({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:i}){const s=a;return(a,t)=>(e(),l("nav",J,[n("div",D,[n("div",L,[n("div",P,[n("div",{class:["navbar-burger",[s.isOpen&&"is-active"]],onClick:t[1]||(t[1]=a=>i("toggle"))},[W,B,$],2)]),v(a.$slots,"brand")])])]))}});const X={class:"inner"},Y={class:"icon-side-menu"},q=n("li",null,[n("a",{href:"/"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),G={class:"bottom-icon-side-menu"};var H=i({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(a,{emit:i}){const s=a;return(a,t)=>(e(),l(u,null,[n("div",{class:[[s.isOpen&&"is-active"],"mobile-main-sidebar"]},[n("div",X,[n("ul",Y,[v(a.$slots,"links",{},(()=>[q]))]),n("ul",G,[v(a.$slots,"bottom-links")])])],2),s.isOpen?(e(),l("div",{key:0,class:"mobile-overlay",onClick:t[1]||(t[1]=a=>i("toggle"))})):r("",!0)],64))}}),K="/images/icons/flags/united-states-of-america.svg";const I={class:"right-panel"},Q={class:"right-panel-head"},R=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Z={class:"right-panel-body has-slimscroll"},aa={class:"languages-boxes"},ia={class:"language-box"},sa={class:"language-option"},ea=n("div",{class:"language-option-inner"},[n("img",{src:K,alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),la={class:"language-box"},na={class:"language-option"},ta=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/france.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ca={class:"language-box"},oa={class:"language-option"},da=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/spain.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ra={class:"language-box"},pa={class:"language-option"},va=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/germany.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ua={class:"language-box"},ga={class:"language-option"},ma=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/mexico.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ha={class:"language-box"},fa={class:"language-option"},ya=n("div",{class:"language-option-inner"},[n("img",{src:"/images/icons/flags/china.svg",alt:""}),n("div",{class:"indicator"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ba=n("div",{class:"img-wrap has-text-centered"},[n("img",{class:"light-image",src:"/assets/languages.7b1df35e.svg",alt:""}),n("img",{class:"dark-image",src:"/assets/languages-dark.e1954b48.svg",alt:""})],-1);var ka=i({expose:[],setup(a){const{locale:i,t:s}=g();return(a,c)=>(e(),l("div",{id:"languages-panel",class:[["languages"===t(x)&&"is-active"],"right-panel-wrapper is-languages"]},[n("div",{class:"panel-overlay",onClick:c[1]||(c[1]=a=>x.value="none")}),n("div",I,[n("div",Q,[n("h3",null,d(t(s)("select-language")),1),n("a",{class:"close-panel",onClick:c[2]||(c[2]=a=>x.value="none")},[R])]),n("div",Z,[n("div",aa,[n("div",ia,[n("div",sa,[m(n("input",{"onUpdate:modelValue":c[3]||(c[3]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"en",checked:""},null,512),[[h,t(i)]]),ea])]),n("div",la,[n("div",na,[m(n("input",{"onUpdate:modelValue":c[4]||(c[4]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"fr"},null,512),[[h,t(i)]]),ta])]),n("div",ca,[n("div",oa,[m(n("input",{"onUpdate:modelValue":c[5]||(c[5]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"es"},null,512),[[h,t(i)]]),da])]),n("div",ra,[n("div",pa,[m(n("input",{"onUpdate:modelValue":c[6]||(c[6]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"de"},null,512),[[h,t(i)]]),va])]),n("div",ua,[n("div",ga,[m(n("input",{"onUpdate:modelValue":c[7]||(c[7]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"es-MX"},null,512),[[h,t(i)]]),ma])]),n("div",ha,[n("div",fa,[m(n("input",{"onUpdate:modelValue":c[8]||(c[8]=a=>f(i)?i.value=a:null),type:"radio",name:"language_selection",value:"zh-CN"},null,512),[[h,t(i)]]),ya])])]),ba])])],2))}});const wa={class:"right-panel"},ja={class:"right-panel-head"},xa=n("h3",null,"Activity",-1),Ca=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),_a={class:"tabs-wrapper is-triple-slider is-squared"},Ta={class:"tabs-inner"},Va={class:"tabs"},Sa=n("span",null,"Team",-1),Oa=n("span",null,"Projects",-1),za=n("span",null,"Schedule",-1),Aa=n("li",{class:"tab-naver"},null,-1),Ua={class:"right-panel-body"},Ma=c('<div class="team-card"><div class="meta"><span>Joshua S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Las Vegas, NV </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Melany W.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> San Jose, CA </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Esteban C.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> Miami, FL </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div><div class="team-card"><div class="meta"><span>Tara S.</span><span><i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i> New York, NY </span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',4),Na={class:"project-card"},Ea={class:"project-inner"},Ja=n("div",{class:"meta"},[n("span",null,"The slicer project"),n("span",null,"getslicer.io")],-1),Da=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),La=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"31",max:"100"}," 31% "),n("div",{class:"foot-stats"},[n("span",null,"5 / 24"),n("div",{class:"avatar-stack"})])],-1),Pa={class:"project-card"},Wa={class:"project-inner"},Ba=n("div",{class:"meta"},[n("span",null,"Metamovies reworked"),n("span",null,"metamovies.co")],-1),$a=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Fa=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"84",max:"100"}," 84% "),n("div",{class:"foot-stats"},[n("span",null,"28 / 31"),n("div",{class:"avatar-stack"})])],-1),Xa={class:"project-card"},Ya={class:"project-inner"},qa=n("div",{class:"meta"},[n("span",null,"Fast Pizza redesign"),n("span",null,"fastpizza.com")],-1),Ga=n("a",{class:"link"},[n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Ha=n("div",{class:"project-foot"},[n("progress",{class:"progress is-primary is-tiny",value:"60",max:"100"}," 60% "),n("div",{class:"foot-stats"},[n("span",null,"25 / 39"),n("div",{class:"avatar-stack"})])],-1),Ka=c('<div class="icon-timeline"><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div><div class="timeline-item"><div class="timeline-icon"></div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1);var Ia=i({expose:[],setup(a){const i=s("team");return(a,s)=>(e(),l("div",{id:"activity-panel",class:[["activity"===t(x)&&"is-active"],"right-panel-wrapper is-activity"]},[n("div",{class:"panel-overlay",onClick:s[1]||(s[1]=a=>x.value="none")}),n("div",wa,[n("div",ja,[xa,n("a",{class:"close-panel",onClick:s[2]||(s[2]=a=>x.value="none")},[Ca])]),n("div",_a,[n("div",Ta,[n("div",Va,[n("ul",null,[n("li",{class:["team"===i.value&&"is-active"]},[n("a",{onClick:s[3]||(s[3]=a=>i.value="team")},[Sa])],2),n("li",{class:["projects"===i.value&&"is-active"]},[n("a",{onClick:s[4]||(s[4]=a=>i.value="projects")},[Oa])],2),n("li",{class:["schedule"===i.value&&"is-active"]},[n("a",{onClick:s[5]||(s[5]=a=>i.value="schedule")},[za])],2),Aa])])]),n("div",Ua,[n("div",{id:"team-side-tab",class:["tab-content",["team"===i.value&&"is-active"]]},[Ma],2),n("div",{id:"projects-side-tab",class:["tab-content",["projects"===i.value&&"is-active"]]},[n("div",Na,[n("div",Ea,[n("img",{class:"project-avatar",src:C,alt:"",onErrorOnce:s[6]||(s[6]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ja,Da]),La]),n("div",Pa,[n("div",Wa,[n("img",{class:"project-avatar",src:_,alt:"",onErrorOnce:s[7]||(s[7]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),Ba,$a]),Fa]),n("div",Xa,[n("div",Ya,[n("img",{class:"project-avatar",src:T,alt:"",onErrorOnce:s[8]||(s[8]=a=>a.target.src="https://via.placeholder.com/150x150")},null,32),qa,Ga]),Ha])],2),n("div",{id:"schedule-side-tab",class:["tab-content",["schedule"===i.value&&"is-active"]]},[Ka],2)])])])],2))}});export{F as _,H as a,ka as b,Ia as c,z as d,E as e,K as f};
