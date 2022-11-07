import{d as e,b as s,h as t,i as a,j as r,l,k as i,L as o,I as n,F as c,r as u,S as d,U as p,H as v,W as m,_ as f}from"./vendor.435948fe.js";import{i as h}from"./darkModeState.010a41bc.js";import{_}from"./AnimatedLogo.030703f2.js";import{_ as b}from"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import{_ as g}from"./V-Control.b1909844.js";import{_ as y}from"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import{_ as k}from"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import{_ as j}from"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import{_ as w}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import{a as x}from"./activePanelState.66f70896.js";import{p as S}from"./userPopovers.f4b9fc60.js";var B="/assets/iso_positive.a7bea5f4.svg";const U={class:"sidebar-brand"},V={key:0,src:B,width:"250",class:"d-block mr-auto ml-auto",alt:""},C={key:1,src:"/assets/iso_negative.9062e1d8.svg",width:"250",class:"d-block mr-auto ml-auto",alt:""},O={class:"sidebar-inner"},P=l("div",{class:"naver"},null,-1),R={class:"icon-menu"},A={class:"bottom-menu"};var I=e({expose:[],props:{theme:{type:String,default:"default"},isOpen:{type:Boolean,default:!1}},setup(e){const u=e,d=s((()=>{switch(u.theme){case"color":return"is-colored";case"labels":return"has-labels";case"labels-hover":return"has-labels-hover";case"float":return u.isOpen?"is-float is-bordered":"is-float";case"curved":return u.isOpen?"":"is-curved";case"color-curved":return u.isOpen?"is-colored":"is-colored is-curved";default:return""}}));return(e,s)=>{const u=t("RouterLink");return a(),r("div",{class:["main-sidebar",[c(d)]]},[l("div",U,[l(u,{to:{name:"index"}},{default:i((()=>[c(h)?(a(),r("img",V)):(a(),r("img",C))])),_:1})]),l("div",O,[P,l("ul",R,[o(e.$slots,"links")]),n(" User account "),l("ul",A,[o(e.$slots,"bottom-links")])])],2)}}});const z={class:"right-panel"},E={class:"right-panel-head"},L=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),M={class:"right-panel-body has-slimscroll"},F={key:0,class:"is-active search-results has-slimscroll"},H={class:"meta"},T={class:"recent"},$=l("h4",null,"Recently viewed",-1),D={class:"recent-block"},J=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chrome"},null,-1),N=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:tv"},null,-1),W=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:twitter"},null,-1),X={class:"recent"},q=l("h4",null,"Recent Members",-1),G={class:"recent-block"};var K=e({expose:[],setup(e){const o=u(""),h=s((()=>o.value?Object.values(S).filter((e=>e.fullName.match(new RegExp(o.value,"i"))||e.position.match(new RegExp(o.value,"i")))):[]));return(e,s)=>{const u=_,B=b,U=g,V=y,C=k,O=j,P=w,R=t("tippy");return a(),r("div",{id:"search-panel",class:[["search"===c(x)&&"is-active"],"right-panel-wrapper is-search is-left"]},[l("div",{class:"panel-overlay",onClick:s[1]||(s[1]=e=>x.value="none")}),l("div",z,[l("div",E,[l(u,{width:"38px",height:"38px"}),l("a",{class:"close-panel",onClick:s[2]||(s[2]=e=>x.value="none")},[L])]),l("div",M,[l(V,null,{default:i((()=>[l(U,{icon:"feather:search"},{extra:i((()=>[c(h).length>0?(a(),r("div",F,[(a(!0),r(d,null,p(c(h),(e=>(a(),r("div",{key:e.id,class:"search-result"},[l(B,{picture:e.avatar,initials:e.initials,color:e.color},null,8,["picture","initials","color"]),l("div",H,[l("span",null,v(e.username),1),l("span",null,v(e.position),1)])])))),128))])):n("v-if",!0)])),default:i((()=>[m(l("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>o.value=e),type:"text",class:"input is-rounded search-input",placeholder:"Search..."},null,512),[[f,o.value]])])),_:1})])),_:1}),l("div",T,[$,l("div",D,[l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"info",rounded:""},{default:i((()=>[J])),_:1})])),_:1}),l(O,{title:"Twitch API",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"orange",rounded:""},{default:i((()=>[N])),_:1})])),_:1}),l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"green",rounded:""},{default:i((()=>[W])),_:1})])),_:1})])]),l("div",X,[q,l("div",G,[l(O,{title:"Alice C.",subtitle:"Software Engineer",center:""},{icon:i((()=>[l(R,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:c(S).user7},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Tara S.",subtitle:"UI/UX Designer",center:""},{icon:i((()=>[l(R,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:c(S).user13},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Jimmy H.",subtitle:"Project Manager",center:""},{icon:i((()=>[l(R,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:c(S).user22},null,8,["user"])])),_:1})])),_:1})])])])])],2)}}});export{I as _,K as a,B as b};
