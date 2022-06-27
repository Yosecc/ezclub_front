import{_ as a}from"./AnimatedLogo.24dfbe8f.js";import{_ as s}from"./Toolbar.vue_vue&type=script&setup=true&lang.09f24fe6.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import{d as e,o as i,h as l,R as c,S as n,k as o,G as d,a7 as v,r,b as h,O as g,j as m,E as u,F as p}from"./vendor.c210e0cb.js";import{_ as f}from"./MinimalLayout.vue_vue&type=script&setup=true&lang.4bff63f4.js";import{u as b}from"./useDropdown.d008e23c.js";import"./darkModeState.1bbf1abb.js";const y={class:"conversation-detail"},x={class:"conversation-username"},w={class:"conversation-content"},M={class:"conversation-message"},k={class:"conversation-date"};var C=e({expose:[],props:{conversationId:{type:Number,default:0},mobileConversationListOpen:{type:Boolean,default:!1},conversations:{type:Array,default:()=>[]}},emits:["update:conversationId","toggleMobileConversation"],setup:(a,{emit:s})=>(e,v)=>{const r=t;return i(),l("div",{class:[[a.mobileConversationListOpen&&"is-active"],"conversation-area"],"data-simplebar":""},[(i(!0),l(c,null,n(a.conversations,(t=>(i(),l("div",{key:t.id,class:["conversation",[a.conversationId===t.id&&"active"]],onClick:()=>{s("update:conversationId",t.id),s("toggleMobileConversation")}},[o(r,{picture:t.avatar.picture,color:t.avatar.color,initials:t.avatar.initials},null,8,["picture","color","initials"]),o("div",y,[o("div",x,d(t.name),1),o("div",w,[o("span",M,d(t.lastMessagePreview),1),o("span",k,d(t.lastMessage),1)])])],10,["onClick"])))),128))],2)}});const S={id:"navbar-conversation-1",class:"chat-area-content"},I={class:"chat-area-header"},P=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),T=o("div",{class:"chat-area-title"},"Kelly M.",-1),j=o("div",{class:"chat-area-group"},null,-1),W=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 1:03pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">hey Erik, what&#39;s up?</div><div class="chat-msg-text"></div><div class="chat-msg-text"> I think it&#39;s time to review those slides we talked about. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 1:22pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Yeah I know, well I feel a bit miserable about that 😂. </div><div class="chat-msg-text">I was working on that till 4:00 am.</div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 1:22pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Oh my god! Don&#39;t push youself that much! </div><div class="chat-msg-text">You got to take some rest tomorrow.</div><div class="chat-msg-text"> What time was our meeting scheduled for? </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 1:23pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">3:15 pm I believe.</div><div class="chat-msg-text">Let me check the schedule</div></div></div></div>',1);var L=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",S,[o("div",I,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[P]),T,j]),W]))});const A={id:"navbar-conversation-2",class:"chat-area-content"},E={class:"chat-area-header"},H=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),G=o("div",{class:"chat-area-title"},"Alejandro B.",-1),_=o("div",{class:"chat-area-group"},null,-1),D=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:34am</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Hey Erik, I have some feedback to share with you. </div><div class="chat-msg-text"></div><div class="chat-msg-text"> Although, Iam not a specialist, but I reviewed those and they look great. </div><div class="chat-msg-text"> We should make a couple of changes though. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:42am</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Sounds good. Wanna meet or just go through it here? </div><div class="chat-msg-text">I mean Iam free right now.</div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:43am</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Nah, I have a meeting that starts in 5. </div><div class="chat-msg-text"> Let&#39;s schedule something for this afternoon. </div><div class="chat-msg-text">And send me a calendar invite.</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:43am</div></div><div class="chat-msg-content"><div class="chat-msg-text">Sounds good. Will do.</div><div class="chat-msg-text">Done.</div></div></div></div>',1);var O=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",A,[o("div",E,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[H]),G,_]),D]))});const U={id:"navbar-conversation-3",class:"chat-area-content"},V={class:"chat-area-header"},Y=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),K=o("div",{class:"chat-area-title"},"Work Group",-1),B=o("div",{class:"chat-area-group"},[o("span",null,[o("span",null,"4")])],-1),J=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:15pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Just found this marketing tool.</div><div class="chat-msg-text"></div><div class="chat-msg-text"> Features look nice. We could give it a try? Anyone want to review? </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:15pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Sure, I&#39;ll take a look real quick.</div><div class="chat-msg-text"> Iam also going to look at the available plans. </div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:27pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> I know this one, we were using it in my previous company. It&#39;s reliable and fast 😊. </div><div class="chat-msg-text"> I mean it&#39;s worth a try and we&#39;re in need right now. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:31pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Yeah but I need to test some use cases. </div><div class="chat-msg-text">Can&#39;t sign up before being sure.</div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:32pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Haha, don&#39;t be scare Erik</div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:32pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Yay, Erik going chicken mode again 😂😂😂 </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:33pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Omg, I just can&#39;t help it 😂</div></div></div><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 4:39pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> This is getting funnier and funnier. You gotta love dat team 🥰 </div></div></div></div>',1);var N=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",U,[o("div",V,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[Y]),K,B]),J]))});const F={id:"navbar-conversation-4",class:"chat-area-content"},z={class:"chat-area-header"},R=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),X=o("div",{class:"chat-area-title"},"Alice C.",-1),q=o("div",{class:"chat-area-group"},null,-1),Q=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 10:11am</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Hey erik I have a couple of screens to show you. </div><div class="chat-msg-text"></div><div class="chat-msg-text"> This one is pretty colorful, I like it. </div><div class="chat-msg-text"></div><div class="chat-msg-text">I like the curves in this one.</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 10:44am</div></div><div class="chat-msg-content"><div class="chat-msg-text">Looks Good.</div><div class="chat-msg-text">Want to sync?</div></div></div></div>',1);var Z=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",F,[o("div",z,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[R]),X,q]),Q]))});const $={id:"navbar-conversation-5",class:"chat-area-content"},aa={class:"chat-area-header"},sa=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),ta=o("div",{class:"chat-area-title"},"Irina V.",-1),ea=o("div",{class:"chat-area-group"},null,-1),ia=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 11:12am</div></div><div class="chat-msg-content"><div class="chat-msg-text">Do you have a moment?</div><div class="chat-msg-text"> I need some help on something Iam working on. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 11:14am</div></div><div class="chat-msg-content"><div class="chat-msg-text">Sure</div><div class="chat-msg-text">I&#39;ll drop by your office.</div></div></div></div>',1);var la=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",$,[o("div",aa,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[sa]),ta,ea]),ia]))});const ca={id:"navbar-conversation-6",class:"chat-area-content"},na={class:"chat-area-header"},oa=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),da=o("div",{class:"chat-area-title"},"Mary L.",-1),va=o("div",{class:"chat-area-group"},null,-1),ra=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 12:14pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Hey Erik!.</div><div class="chat-msg-text">Still down for that movie?</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 12:14pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Of course, yeah!</div><div class="chat-msg-text">Can&#39;t wait!</div></div></div></div>',1);var ha=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",ca,[o("div",na,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[oa]),da,va]),ra]))});const ga={id:"navbar-conversation-7",class:"chat-area-content"},ma={class:"chat-area-header"},ua=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),pa=o("div",{class:"chat-area-title"},"Mary L.",-1),fa=o("div",{class:"chat-area-group"},null,-1),ba=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 2:32pm</div></div><div class="chat-msg-content"><div class="chat-msg-text"> Look at those screens, just finished them. </div><div class="chat-msg-text"></div><div class="chat-msg-text"></div><div class="chat-msg-text"></div><div class="chat-msg-text">I can send you the files.</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 2:37pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Looks great.</div><div class="chat-msg-text">Let me review this in details.</div></div></div></div>',1);var ya=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",ga,[o("div",ma,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[ua]),pa,fa]),ba]))});const xa={id:"navbar-conversation-8",class:"chat-area-content"},wa={class:"chat-area-header"},Ma=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),ka=o("div",{class:"chat-area-title"},"Melany W.",-1),Ca=o("div",{class:"chat-area-group"},null,-1),Sa=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:43pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Just finished implementing this one.</div><div class="chat-msg-text"></div><div class="chat-msg-text"> I has some issues with the headers tough. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:43pmpm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Just in time, thanks.</div><div class="chat-msg-text">You have an open PR for that one?</div></div></div></div>',1);var Ia=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",xa,[o("div",wa,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[Ma]),ka,Ca]),Sa]))});const Pa={id:"navbar-conversation-9",class:"chat-area-content"},Ta={class:"chat-area-header"},ja=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),Wa=o("div",{class:"chat-area-title"},"Jimmy H.",-1),La=o("div",{class:"chat-area-group"},null,-1),Aa=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:12am</div></div><div class="chat-msg-content"><div class="chat-msg-text">We sould sync sometime today.</div><div class="chat-msg-text">When are you available?</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 9:13am</div></div><div class="chat-msg-content"><div class="chat-msg-text">Probably in the afternoon.</div><div class="chat-msg-text">I&#39;ll let you know.</div></div></div></div>',1);var Ea=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",Pa,[o("div",Ta,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[ja]),Wa,La]),Aa]))});const Ha={id:"navbar-conversation-10",class:"chat-area-content"},Ga={class:"chat-area-header"},_a=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),Da=o("div",{class:"chat-area-title"},"Greta K.",-1),Oa=o("div",{class:"chat-area-group"},null,-1),Ua=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 5:19pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">I had a great time yesterday.</div><div class="chat-msg-text"> Thank you for you clean presentation, it was stunning. </div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 6:32pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Wow, don&#39;t mention it.</div><div class="chat-msg-text">So happy it made you feel like that.</div></div></div></div>',1);var Va=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",Ha,[o("div",Ga,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[_a]),Da,Oa]),Ua]))});const Ya={id:"navbar-conversation-11",class:"chat-area-content"},Ka={class:"chat-area-header"},Ba=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:menu"},null,-1),Ja=o("div",{class:"chat-area-title"},"Greta K.",-1),Na=o("div",{class:"chat-area-group"},null,-1),Fa=v('<div class="chat-area-main"><div class="chat-msg"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 7:48pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">Here are some screenshots.</div><div class="chat-msg-text"></div><div class="chat-msg-text"></div><div class="chat-msg-text"></div><div class="chat-msg-text">Hope you like them.</div></div></div><div class="chat-msg owner"><div class="chat-msg-profile"><div class="chat-msg-date">Sent at 10:21pm</div></div><div class="chat-msg-content"><div class="chat-msg-text">They look great!</div><div class="chat-msg-text">Thanks for sharing this!</div></div></div></div>',1);var za=e({expose:[],emits:["toggleMobileConversation"],setup:(a,{emit:s})=>(a,t)=>(i(),l("div",Ya,[o("div",Ka,[o("button",{class:"\r\n          trigger\r\n          conversations-mobile-trigger\r\n          h-only-mobile h-only-tablet-p h-only-tablet-l\r\n        ",onClick:t[1]||(t[1]=a=>s("toggleMobileConversation"))},[Ba]),Ja,Na]),Fa]))});const Ra={class:"chat-app-wrapper"},Xa={class:"chat-app-header"},qa={class:"logo"},Qa=o("div",{class:"search-bar"},[o("div",{class:"field"},[o("div",{class:"control has-icon"},[o("input",{type:"text",class:"input search-input",placeholder:"Search..."}),o("div",{class:"form-icon"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})]),o("div",{class:"search-results has-slimscroll"})])])],-1),Za={class:"user-settings"},$a=o("div",{class:"profile-avatar"},null,-1),as=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-down"},null,-1),ss=o("div",{class:"dropdown-menu",role:"menu"},[o("div",{class:"dropdown-content"},[o("div",{class:"dropdown-item"},[o("p",{class:"is-size-7"},"Erik Kovalsky")]),o("a",{href:"#",class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:user"}),o("span",null,"Profile")]),o("a",{class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"}),o("span",null,"Edit Profile")]),o("a",{class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"}),o("span",null,"Projects")]),o("a",{class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"}),o("span",null,"Settings")]),o("hr",{class:"dropdown-divider"}),o("a",{href:"#",class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:log-out"}),o("span",null,"Sign Out")])])],-1),ts={class:"wrapper"},es={class:"chat-area is-active","data-simplebar":""},is={class:"chat-area-footer"},ls={class:"add-content"},cs=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),ns=o("div",{class:"dropdown-menu",role:"menu"},[o("div",{class:"dropdown-content"},[o("a",{class:"dropdown-item"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:video"}),o("div",{class:"meta"},[o("span",null,"Video"),o("span",null,"Embed a video")])]),o("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:image"}),o("div",{class:"meta"},[o("span",null,"Images"),o("span",null,"Upload pictures")])]),o("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:link"}),o("div",{class:"meta"},[o("span",null,"Link"),o("span",null,"Post a link")])]),o("hr",{class:"dropdown-divider"}),o("a",{href:"#",class:"dropdown-item kill-drop v-modal-trigger"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:file"}),o("div",{class:"meta"},[o("span",null,"File"),o("span",null,"Upload a file")])])])],-1),os=o("div",{class:"add-emoji"},[o("div",{class:"button"},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:smile"})])],-1),ds=o("input",{type:"text",placeholder:"Type something here..."},null,-1),vs={class:"detail-area","data-simplebar":""},rs={class:"chat-side-content is-single"},hs={id:"user-details-name",class:"user-name"},gs={id:"user-details-title",class:"user-job-title"},ms=o("div",{class:"side-actions"},[o("a",{class:"button v-button is-rounded"},[o("span",{class:"icon is-small"},[o("i",{"aria-hidden":"true",class:"fas fa-phone"})]),o("span",null,"Audio Call")]),o("a",{class:"button v-button is-rounded"},[o("span",{class:"icon is-small"},[o("i",{"aria-hidden":"true",class:"fas fa-video"})]),o("span",null,"Video Call")])],-1),us=o("div",{class:"detail-photos"},[o("div",{class:"detail-photo-title"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-image"},[o("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o("path",{d:"M21 15l-5-5L5 21"})]),p(" Shared photos ")]),o("div",{class:"detail-photo-grid"}),o("a",{class:"view-more"},"View More")],-1);var ps=e({expose:[],setup(e){const c=[{id:1,name:"Kelly Marston",role:"Product Manager",avatar:{picture:"marketing-2.vue"},lastMessage:"20m",lastMessagePreview:"What time was our meeting scheduled for?"},{id:2,name:"Alejandro Badajoz",role:"Business Analyst",avatar:{picture:""},lastMessage:"24m",lastMessagePreview:"Nah, I have a meeting that starts in 5."},{id:3,name:"Work Group",role:"7 people are chatting",avatar:{color:"h-purple",initials:"WG"},lastMessage:"31m",lastMessagePreview:"This is getting funnier and funnier. You gotta love dat team 🥰"},{id:4,name:"Alice Carasca",role:"Software Engineer",avatar:{picture:""},lastMessage:"47m",lastMessagePreview:"I like the curves in this one."},{id:5,name:"Irina Vierbovsky",role:"Project Manager",avatar:{picture:""},lastMessage:"56m",lastMessagePreview:"I need some help on something Iam working on."},{id:6,name:"Mary Lebowski",role:"Project Manager",avatar:{picture:""},lastMessage:"1h",lastMessagePreview:"Still down for that movie?"},{id:7,name:"Esteban Castellanos",role:"UI/UX Designer",avatar:{picture:""},lastMessage:"1h",lastMessagePreview:"I can send you the files."},{id:8,name:"Melany Wallace",role:"Web Developer",avatar:{picture:""},lastMessage:"2h",lastMessagePreview:"I has some issues with the headers tough."},{id:9,name:"Jimmy Hector",role:"Project Manager",avatar:{picture:""},lastMessage:"3h",lastMessagePreview:"When are you available?"},{id:10,name:"Greta Kroppfer",role:"Sales Manager",avatar:{picture:""},lastMessage:"3h",lastMessagePreview:"Thank you for you clean presentation, it was stunning."},{id:11,name:"Tara Svenson",role:"UI/UX Designer",avatar:{picture:""},lastMessage:"9h",lastMessagePreview:"Hope you like them."}],n=r(3),v=r(!1),p=h((()=>{const a=c.find((a=>a.id===n.value));return a||c[0]})),y=r(null),x=b(y),w=r(null),M=b(w);return g({title:"Messaging chat - Navbar - Vuero"}),(e,r)=>{const h=a,g=s,b=C,k=L,S=O,I=N,P=Z,T=la,j=ha,W=ya,A=Ia,E=Ea,H=Va,G=za,_=t,D=f;return i(),l(D,null,{default:m((()=>[o("div",Ra,[o("div",Xa,[o("div",qa,[o(h,{width:"38px",height:"38px"})]),Qa,o("div",Za,[o(g,{class:"desktop-toolbar"}),o("div",{ref:y,class:"dropdown is-right dropdown-trigger user-dropdown"},[o("div",{class:"is-trigger","aria-haspopup":"true",onClick:r[1]||(r[1]=(...a)=>u(x).toggle&&u(x).toggle(...a))},[$a,as]),ss],512)])]),o("div",ts,[o(b,{conversationId:n.value,"onUpdate:conversationId":r[2]||(r[2]=a=>n.value=a),"mobile-conversation-list-open":v.value,conversations:c,onToggleMobileConversation:r[3]||(r[3]=a=>v.value=!v.value)},null,8,["conversationId","mobile-conversation-list-open"]),o("div",es,[o(k,{class:[1===n.value&&"is-active"],onToggleMobileConversation:r[4]||(r[4]=a=>v.value=!v.value)},null,8,["class"]),o(S,{class:[2===n.value&&"is-active"],onToggleMobileConversation:r[5]||(r[5]=a=>v.value=!v.value)},null,8,["class"]),o(I,{class:[3===n.value&&"is-active"],onToggleMobileConversation:r[6]||(r[6]=a=>v.value=!v.value)},null,8,["class"]),o(P,{class:[4===n.value&&"is-active"],onToggleMobileConversation:r[7]||(r[7]=a=>v.value=!v.value)},null,8,["class"]),o(T,{class:[5===n.value&&"is-active"],onToggleMobileConversation:r[8]||(r[8]=a=>v.value=!v.value)},null,8,["class"]),o(j,{class:[6===n.value&&"is-active"],onToggleMobileConversation:r[9]||(r[9]=a=>v.value=!v.value)},null,8,["class"]),o(W,{class:[7===n.value&&"is-active"],onToggleMobileConversation:r[10]||(r[10]=a=>v.value=!v.value)},null,8,["class"]),o(A,{class:[8===n.value&&"is-active"],onToggleMobileConversation:r[11]||(r[11]=a=>v.value=!v.value)},null,8,["class"]),o(E,{class:[9===n.value&&"is-active"],onToggleMobileConversation:r[12]||(r[12]=a=>v.value=!v.value)},null,8,["class"]),o(H,{class:[10===n.value&&"is-active"],onToggleMobileConversation:r[13]||(r[13]=a=>v.value=!v.value)},null,8,["class"]),o(G,{class:[11===n.value&&"is-active"],onToggleMobileConversation:r[14]||(r[14]=a=>v.value=!v.value)},null,8,["class"]),o("div",is,[o("div",ls,[o("div",{ref:w,class:"dropdown dropdown-trigger is-up"},[o("div",null,[o("div",{class:"button","aria-haspopup":"true",onClick:r[15]||(r[15]=(...a)=>u(M).toggle&&u(M).toggle(...a))},[cs])]),ns],512)]),os,ds])]),o("div",vs,[o("div",rs,[o(_,{picture:u(p).avatar.picture,color:u(p).avatar.color,initials:u(p).avatar.initials},null,8,["picture","color","initials"]),o("h4",hs,d(u(p).name),1),o("p",gs,d(u(p).role),1),ms,us])])])])])),_:1})}}});export default ps;
