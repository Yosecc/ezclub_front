import{i as e}from"./darkModeState.ddf8736e.js";import{d as s,b as t,o as a,h as r,k as l,j as i,L as o,E as n,i as c,r as u,R as d,S as p,G as v,K as f,W as m,_ as h}from"./vendor.f713277a.js";import{_ as b}from"./AnimatedLogo.a7f258fd.js";import{_}from"./V-Avatar.vue_vue&type=script&setup=true&lang.43349f84.js";import{_ as g}from"./V-Control.cd8653b7.js";import{_ as y}from"./V-Field.vue_vue&type=script&setup=true&lang.a3d5e9c0.js";import{_ as k}from"./V-IconBox.vue_vue&type=script&setup=true&lang.9fe3c8b3.js";import{_ as j}from"./V-Block.vue_vue&type=script&setup=true&lang.ab4b414f.js";import{_ as w}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d2e8235d.js";import{a as x}from"./activePanelState.4a6c12dd.js";import{p as S}from"./userPopovers.f4b9fc60.js";var B="/assets/iso_positive.a7bea5f4.svg";const R={class:"sidebar-brand"},V={key:0,src:B,width:"250",class:"d-block mr-auto ml-auto",alt:""},C={key:1,src:"/assets/iso_negative.9062e1d8.svg",width:"250",class:"d-block mr-auto ml-auto",alt:""},O={class:"sidebar-inner"},P=l("div",{class:"naver"},null,-1),A={class:"icon-menu"},E={class:"bottom-menu"};var U=s({expose:[],props:{theme:{type:String,default:"default"},isOpen:{type:Boolean,default:!1}},setup(s){const u=s,d=t((()=>{switch(u.theme){case"color":return"is-colored";case"labels":return"has-labels";case"labels-hover":return"has-labels-hover";case"float":return u.isOpen?"is-float is-bordered":"is-float";case"curved":return u.isOpen?"":"is-curved";case"color-curved":return u.isOpen?"is-colored":"is-colored is-curved";default:return""}}));return(s,t)=>{const u=c("RouterLink");return a(),r("div",{class:["main-sidebar",[n(d)]]},[l("div",R,[l(u,{to:{name:"index"}},{default:i((()=>[n(e)?(a(),r("img",V)):(a(),r("img",C))])),_:1})]),l("div",O,[P,l("ul",A,[o(s.$slots,"links")]),l("ul",E,[o(s.$slots,"bottom-links")])])],2)}}});const z={class:"right-panel"},I={class:"right-panel-head"},L=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),M={class:"right-panel-body has-slimscroll"},T={key:0,class:"is-active search-results has-slimscroll"},$={class:"meta"},D={class:"recent"},F=l("h4",null,"Recently viewed",-1),G={class:"recent-block"},H=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chrome"},null,-1),J=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:tv"},null,-1),K=l("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:twitter"},null,-1),N={class:"recent"},W=l("h4",null,"Recent Members",-1),X={class:"recent-block"};var q=s({expose:[],setup(e){const s=u(""),o=t((()=>s.value?Object.values(S).filter((e=>e.fullName.match(new RegExp(s.value,"i"))||e.position.match(new RegExp(s.value,"i")))):[]));return(e,t)=>{const u=b,B=_,R=g,V=y,C=k,O=j,P=w,A=c("tippy");return a(),r("div",{id:"search-panel",class:[["search"===n(x)&&"is-active"],"right-panel-wrapper is-search is-left"]},[l("div",{class:"panel-overlay",onClick:t[1]||(t[1]=e=>x.value="none")}),l("div",z,[l("div",I,[l(u,{width:"38px",height:"38px"}),l("a",{class:"close-panel",onClick:t[2]||(t[2]=e=>x.value="none")},[L])]),l("div",M,[l(V,null,{default:i((()=>[l(R,{icon:"feather:search"},{extra:i((()=>[n(o).length>0?(a(),r("div",T,[(a(!0),r(d,null,p(n(o),(e=>(a(),r("div",{key:e.id,class:"search-result"},[l(B,{picture:e.avatar,initials:e.initials,color:e.color},null,8,["picture","initials","color"]),l("div",$,[l("span",null,v(e.username),1),l("span",null,v(e.position),1)])])))),128))])):f("",!0)])),default:i((()=>[m(l("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e),type:"text",class:"input is-rounded search-input",placeholder:"Search..."},null,512),[[h,s.value]])])),_:1})])),_:1}),l("div",D,[F,l("div",G,[l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"info",rounded:""},{default:i((()=>[H])),_:1})])),_:1}),l(O,{title:"Twitch API",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"orange",rounded:""},{default:i((()=>[J])),_:1})])),_:1}),l(O,{title:"Browser Support",subtitle:"Blog post",center:""},{icon:i((()=>[l(C,{size:"small",color:"green",rounded:""},{default:i((()=>[K])),_:1})])),_:1})])]),l("div",N,[W,l("div",X,[l(O,{title:"Alice C.",subtitle:"Software Engineer",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user7},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Tara S.",subtitle:"UI/UX Designer",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user13},null,8,["user"])])),_:1})])),_:1}),l(O,{title:"Jimmy H.",subtitle:"Project Manager",center:""},{icon:i((()=>[l(A,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"top-start"},{content:i((()=>[l(P,{user:n(S).user22},null,8,["user"])])),_:1})])),_:1})])])])])],2)}}});export{U as _,q as a,B as b};
