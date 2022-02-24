import{_ as s}from"./V-Control.7db53124.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.18737d13.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.c41077d9.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.1ea96d89.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.f4ce9877.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b97017d7.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.c1358fb9.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.b5370bd6.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.9e3f6ddf.js";import{d as c,r as o,b as d,o as p,h as m,k as v,j as f,D as g,a8 as h,K as x,F as b,R as _,L as y,N as k,J as j,G as w}from"./vendor.20c6e26b.js";import{_ as V,a as R}from"./search-4-dark.fb3880a5.js";import{u as A}from"./index.d9e84969.js";const E={class:"list-flex-toolbar flex-list-v1"},S=w(" Add User "),F={class:"page-content-inner"},L={class:"flex-list-wrapper flex-list-v1"},P=v("img",{class:"light-image",src:V,alt:""},null,-1),U=v("img",{class:"dark-image",src:R,alt:""},null,-1),z={class:"flex-table"},B=v("span",{class:"is-grow"},"User",-1),D=v("span",null,"Location",-1),I=v("span",null,"Industry",-1),O=v("span",null,"Status",-1),T=v("span",null,"Relations",-1),W=v("span",{class:"cell-end"},"Actions",-1),C={class:"flex-list-inner"},G={class:"flex-table-cell is-media is-grow"},J={class:"item-name dark-inverted"},K={class:"item-meta"},N={class:"flex-table-cell","data-th":"Location"},q={class:"light-text"},H={class:"flex-table-cell","data-th":"Industry"},M={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={key:0,class:"tag is-success is-rounded"},Y={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ss={class:"flex-table-cell","data-th":"Relations"},es={class:"flex-table-cell cell-end","data-th":"Actions"};var as=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?A.filter((s=>s.username.match(new RegExp(w.value,"i"))||s.position.match(new RegExp(w.value,"i"))||s.industry.match(new RegExp(w.value,"i"))||s.status.match(new RegExp(w.value,"i"))||s.location.match(new RegExp(w.value,"i")))):A));return(c,o)=>{const d=s,R=e,A=a,as=t,ts=l,ls=i,is=n,ns=r,rs=u;return p(),m("div",null,[v("div",E,[v(R,null,{default:f((()=>[v(d,{icon:"feather:search"},{default:f((()=>[b(v("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>w.value=s),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[_,w.value]])])),_:1})])),_:1}),v(as,null,{default:f((()=>[v(A,{color:"primary",icon:"fas fa-plus",elevated:""},{default:f((()=>[S])),_:1})])),_:1})]),v("div",F,[v("div",L,[v(ts,{class:[0!==g(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:f((()=>[P,U])),_:1},8,["class"]),v("div",z,[v("div",{class:["flex-table-header",[0===g(V).length&&"is-hidden"]]},[B,D,I,O,T,W],2),v("div",C,[v(h,{name:"list",tag:"div"},{default:f((()=>[(p(!0),m(y,null,k(g(V),(s=>(p(),m("div",{key:s.id,class:"flex-table-item"},[v("div",G,[v(ls,{picture:s.picture,badge:s.badge,color:s.color,initials:s.initials,size:"medium"},null,8,["picture","badge","color","initials"]),v("div",null,[v("span",J,j(s.username),1),v("span",K,[v("span",null,j(s.position),1)])])]),v("div",N,[v("span",q,j(s.location),1)]),v("div",H,[v("span",M,j(s.industry),1)]),v("div",Q,["Online"===s.status?(p(),m("span",X,j(s.status),1)):x("",!0),"Working"===s.status?(p(),m("span",Y,j(s.status),1)):x("",!0),"Suspended"===s.status?(p(),m("span",Z,j(s.status),1)):x("",!0),"Offline"===s.status?(p(),m("span",$,j(s.status),1)):x("",!0)]),v("div",ss,[v(is,{avatars:s.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),v("div",es,[v(ns)])])))),128))])),_:1})])]),g(V).length>5?(p(),m(rs,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])])}}});export{as as _};
