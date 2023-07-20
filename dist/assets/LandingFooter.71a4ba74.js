import{_ as a}from"./AnimatedLogo.42cb9b3a.js";import{d as s,r as e,a9 as i,b as t,g as l,h as n,i as o,l as c,a2 as r,F as d,k as u,W as v,aa as p,Q as m,ab as h,ad as f,j as b,G as g,K as k,H as y}from"./vendor.4454b83d.js";import{i as j}from"./responsiveState.01a9db86.js";import{V as x}from"./vue-scrollto.19d6d14c.js";import{i as w}from"./darkModeState.f2041097.js";const S={class:"navbar-brand"},C={class:"brand-icon"},V=c("span",{"aria-hidden":"true"},null,-1),_=c("span",{"aria-hidden":"true"},null,-1),R=c("span",{"aria-hidden":"true"},null,-1),L={class:"navbar-start"},P=c("div",{class:"navbar-item"},[c("a",{href:"https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035",class:"nav-link is-active"}," Buy Now ")],-1),D={class:"navbar-item"},G=g(" Demos "),H={class:"navbar-item"},N=g(" UI Elements "),T=c("div",{class:"navbar-item"},[c("a",{href:"https://docs.cssninja.io/vuero",class:"nav-link"},"Docs")],-1),q=c("div",{class:"navbar-item"},[c("a",{href:"https://cssninja.io",class:"nav-link"},"Support")],-1),A={class:"navbar-end"},B={class:"navbar-item is-theme-toggle"},F={class:"theme-toggle"},I=h('<span class="toggler"><span class="dark"><i aria-hidden="true" class="iconify" data-icon="feather:moon"></i></span><span class="light"><i aria-hidden="true" class="iconify" data-icon="feather:sun"></i></span></span>',1),U={class:"navbar-item"},E=g(" Login "),K={class:"navbar-item"},M=c("strong",null,"Sign up",-1);var O=s({expose:[],setup(s){const h=e(!1);f();const g=x.scrollTo,{y:k}=i(),y=t((()=>k.value>30));return l((()=>{j.value&&(h.value=!1)})),(s,e)=>{const i=a,t=b("RouterLink");return n(),o("nav",{class:["navbar is-fixed-top is-transparent",[!d(y)&&"is-docked",h.value&&"is-solid"]],"aria-label":"main navigation"},[c("div",S,[c("a",{href:"/",class:"navbar-item",onClick:e[1]||(e[1]=r((a=>d(g)("#app",800)),["prevent"]))},[c("div",C,[c(i,{width:"34px",height:"34px"})])]),c("a",{role:"button",class:[[h.value&&"is-active"],"navbar-burger burger"],"aria-label":"menu","aria-expanded":"false",onClick:e[2]||(e[2]=a=>h.value=!h.value)},[V,_,R],2)]),c("div",{class:["navbar-menu",[h.value&&"is-active"]]},[c("div",L,[P,c("div",D,[c(t,{to:{name:"index",hash:"#vuero-demos"},class:"nav-link is-scroll",onClickPassive:e[3]||(e[3]=()=>{d(g)("#vuero-demos",800,{offset:-50}),h.value=!1})},{default:u((()=>[G])),_:1})]),c("div",H,[c(t,{to:{name:"index",hash:"#vuero-components"},class:"nav-link is-scroll",onClickPassive:e[4]||(e[4]=()=>{d(g)("#vuero-components",800,{offset:-50}),h.value=!1})},{default:u((()=>[N])),_:1})]),T,q]),c("div",A,[c("div",B,[c("label",F,[v(c("input",{id:"navbar-night-toggle--daynight","onUpdate:modelValue":e[5]||(e[5]=a=>m(w)?w.value=a:null),type:"checkbox"},null,512),[[p,d(w)]]),I])]),c("div",U,[c(t,{to:{name:"auth-login-1"},class:"nav-link"},{default:u((()=>[E])),_:1})]),c("div",K,[c(t,{to:{name:"auth-signup-1"},class:"button v-button is-rounded is-primary is-raised"},{default:u((()=>[M])),_:1})])])],2)],2)}}});const Q={class:"v-popover-profile has-loader"},W={class:"profile-popover-block"},z={class:"profile-popover-wrapper"},J={key:0,class:"popover-avatar"},X={class:"popover-meta"},Y={class:"stack-meta"},Z={class:"stackname dark-inverted"},$={key:0,class:"job-title mb-1"},aa={class:"bio"},sa={class:"popover-actions"},ea=c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:link"},null,-1),ia=c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:github"},null,-1);var ta=s({expose:[],props:{stack:{type:Object}},setup:a=>(s,e)=>(n(),o("div",Q,[c("div",W,[c("div",z,[a.stack.logo?(n(),o("div",J,[c("img",{class:"avatar",src:a.stack.logo,alt:""},null,8,["src"])])):k("",!0),c("div",X,[c("span",Y,[c("span",Z,y(a.stack.name),1)]),a.stack.subtitle?(n(),o("span",$,y(a.stack.subtitle),1)):k("",!0),c("span",aa,y(a.stack.description),1)])]),c("div",sa,[a.stack.homepage?(n(),o("a",{key:0,class:"popover-icon",href:a.stack.homepage},[ea],8,["href"])):k("",!0),a.stack.github?(n(),o("a",{key:1,class:"popover-icon",href:a.stack.github},[ia],8,["href"])):k("",!0)])])]))}),la="/images/icons/stacks/vuejs.svg",na="/images/icons/stacks/vite.svg",oa="/images/icons/stacks/bulma.svg",ca="/images/icons/stacks/sass.svg",ra="/images/icons/stacks/typescript.svg",da="/assets/feature-2.44e77a4f.svg",ua="/assets/feature-2-dark.1405b0d0.svg",va="/assets/feature-3.8f9973c0.svg",pa="/assets/feature-3-dark.64f75878.svg";const ma={},ha={class:"vuero-footer"},fa={class:"container"},ba=h('<div class="footer-head"><div class="head-text"><h3>Ready to get started?</h3><p>Get your Vuero copy now</p></div><div class="head-action"><div class="buttons"><a href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035" class="button v-button is-primary is-rounded raised action-button"> Buy Vuero </a><a href="https://cssninja.io" class="button chat-button"> Chat with us </a></div></div></div>',1),ga={class:"columns footer-body"},ka={class:"column is-4"},ya={class:"p-t-10 p-b-10"},ja=c("div",{class:"footer-description p-t-10 p-b-10"}," Vuero is built for developers and designers. It's modular approach lets you create awesome navbars with incredible layouts and elements. ",-1),xa=h('<div><span class="moto"> Designed and coded with <i aria-hidden="true" class="fas fa-heart text-danger"></i> by CSS Ninja.</span><div class="social-links p-t-10 p-b-10"><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-facebook"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-twitter"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-linkedin"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-dribbble"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-github"></i></span></a></div></div>',1),wa=h('<div class="column is-6 is-offset-2"><div class="columns is-flex-tablet-p"><div class="column"><ul class="footer-column"><li class="column-header">Vuero</li><li class="column-item"><a href="#">Home</a></li><li class="column-item"><a href="#">Pricing</a></li><li class="column-item"><a href="#">Get started</a></li><li class="column-item"><a href="#">Help</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">Resources</li><li class="column-item"><a href="#">Learning</a></li><li class="column-item"><a href="#">Support center</a></li><li class="column-item"><a href="#">Frequent questions</a></li><li class="column-item"><a href="#">Schedule a demo</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">Terms</li><li class="column-item"><a href="#">Terms of Service</a></li><li class="column-item"><a href="#">Privacy policy</a></li><li class="column-item"><a href="#">SaaS services</a></li></ul></div></div></div>',1),Sa=c("div",{class:"footer-copyright has-text-centered"},[c("p",null,[g(" © 2020-2021 | "),c("a",{href:"https://cssninja.io"},"Css Ninja"),g(" | All Rights Reserved. ")])],-1);ma.render=function(s,e){const i=a;return n(),o("footer",ha,[c("div",fa,[ba,c("div",ga,[c("div",ka,[c("div",ya,[c(i,{width:"36px",height:"36px"}),ja]),xa]),wa]),Sa])])};export{O as _,ma as a,la as b,na as c,oa as d,ca as e,ra as f,ta as g,da as h,ua as i,va as j,pa as k};
