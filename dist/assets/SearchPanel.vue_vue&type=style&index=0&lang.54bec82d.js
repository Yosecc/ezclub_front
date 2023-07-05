import{i as e}from"./darkModeState.f2041097.js";import{d as s,b as t,h as a,i as r,l,k as i,L as o,F as n,j as c,r as u,R as d,S as p,H as v,K as m,W as h,_ as f}from"./vendor.4454b83d.js";import{_ as b}from"./AnimatedLogo.42cb9b3a.js";import{_}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as g}from"./V-Control.63a8a239.js";import{_ as y}from"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import{_ as k}from"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import{_ as j}from"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import{_ as w}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import{a as x}from"./activePanelState.06305d42.js";import{p as S}from"./userPopovers.f4b9fc60.js";var B="/assets/iso_positive.a7bea5f4.svg";const R={class:"sidebar-brand"},V={key:0,src:B,width:"250",class:"d-block mr-auto ml-auto",alt:""},C={key:1,src:"/assets/iso_negative.9062e1d8.svg",width:"250",class:"d-block mr-auto ml-auto",alt:""},O={class:"sidebar-inner"},P=l("div",{class:"naver"},null,-1),A={class:"icon-menu"},U={class:"bottom-menu"};var z=s({expose:[],props:{theme:{type:String,default:"default"},isOpen:{type:Boolean,default:!1}},setup(s){const u=s,d=t((()=>{switch(u.theme){case"color":return"is-colored";case"labels":return"has-labels";case"labels-hover":return"has-labels-hover";case"float":return u.isOpen?"is-float is-bordered":"is-float";case"curved":return u.isOpen?"":"is-curved";case"color-curved":return u.isOpen?"is-colored":"is-colored is-curved";default:return""}}));return(s,t)=>{const u=c("RouterLink");return a(),r("div",{class:["main-sidebar",[n(d)]]},[l("div",R,[l(u,{to:{name:"index"}},{default:i((()=>[n(e)?(a(),r("img",V)):(a(),r("img",C))])),_:1})]),l("div",O,[P,l("ul",A,[o(s.$slots,"links")]),l("ul",U,[o(s.$slots,"bottom-links")])])],2)}}});const E={class:"right-panel"},I={class:"right-panel-head"},L=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),M={class:"right-panel-body has-slimscroll"},F={key:0,class:"is-active search-results has-slimscroll"},H={class:"meta"},T={class:"recent"},$=l("h4",null,"Recently viewed",-1),D={class:"recent-block"},J=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chrome"},null,-1),K=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:tv"},null,-1),N=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:twitter"},null,-1),W={class:"recent"},X=l("h4",null,"Recent Members",-1),q={class:"recent-block"};var G=s({expose:[],setup(e){const s=u(""),o=t((()=>s.value?Object.values(S).filter((e=>e.fullName.match(new RegExp(s.value,"i"))||e.position.match(new RegExp(s.value,"i")))):[]));return(e,t)=>{const u=b,B=_,R=g,V=y,C=k,O=j,P=w,A=c("tippy");return a(),r("div",{id:"search-panel",class:[["search"===n(x)&&"is-active"],"right-panel-wrapper is-search is-left"]},[l("div",{class:"panel-overlay",onClick:t[1]||(t[1]=e=>x.value="none")}),l("div",E,[l("div",I,[l(u,{width:"38px",height:"38px"}),l("a",{class:"close-panel",onClick:t[2]||(t[2]=e=>x.value="none")},[L])]),l("div",M,[l(V,null,{default:i((()=>[l(R,{icon:"feather:search"},{extra:i((()=>[n(o).length>0?(a(),r("div",F,[(a(!0),r(d,null,p(n(o),(e=>(a(),r("div",{key:e.id,class:"search-result"},[l(B,{picture:e.avatar,initials:e.initials,color:e.color},null,8,["picture","initials","color"]),l("div",H,[l("span",null,v(e.username),1),l("span",null,v(e.position),1)])])))),128))])):m("",!0)])),default:i((()=>[h(l("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e),type:"text",class:"input is-rounded search-input",placeholder:"Search..."},null,512),[[f,s.value]])])),_:1})])),_:1}),l("div",T,[$,l("div",D,[l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"info",rounded:""},{default:i((()=>[J])),_:1})])),_:1}),l(O,{title:"Twitch API",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"orange",rounded:""},{default:i((()=>[K])),_:1})])),_:1}),l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"green",rounded:""},{default:i((()=>[N])),_:1})])),_:1})])]),l("div",W,[X,l("div",q,[l(O,{title:"Alice C.",subtitle:"Software Engineer",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user7},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Tara S.",subtitle:"UI/UX Designer",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user13},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Jimmy H.",subtitle:"Project Manager",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user22},null,8,["user"])])),_:1})])),_:1})])])])])],2)}}});export{z as _,G as a,B as b};
