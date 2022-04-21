import{_ as s}from"./V-Control.237cc4d1.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.a81781e9.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.c7dbe33c.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.eaa45404.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.18a18086.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.9a971c58.js";import{d as c,r as o,c as d,o as p,h as m,k as v,j as f,D as g,ab as h,J as x,S as _,Y as y,Q as b,R as k,F as j,E as w}from"./vendor.c636f33b.js";import{_ as V,a as R}from"./search-4-dark.fb3880a5.js";import{u as E}from"./index.d9e84969.js";const S={class:"list-flex-toolbar flex-list-v1"},A=w(" Add User "),F={class:"page-content-inner"},P={class:"flex-list-wrapper flex-list-v1"},L=v("img",{class:"light-image",src:V,alt:""},null,-1),U=v("img",{class:"dark-image",src:R,alt:""},null,-1),z={class:"flex-table"},B=v("span",{class:"is-grow"},"User",-1),D=v("span",null,"Location",-1),I=v("span",null,"Industry",-1),O=v("span",null,"Status",-1),T=v("span",null,"Relations",-1),W=v("span",{class:"cell-end"},"Actions",-1),C={class:"flex-list-inner"},J={class:"flex-table-cell is-media is-grow"},Q={class:"item-name dark-inverted"},Y={class:"item-meta"},q={class:"flex-table-cell","data-th":"Location"},G={class:"light-text"},H={class:"flex-table-cell","data-th":"Industry"},K={class:"light-text"},M={class:"flex-table-cell","data-th":"Status"},N={key:0,class:"tag is-success is-rounded"},X={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ss={class:"flex-table-cell","data-th":"Relations"},es={class:"flex-table-cell cell-end","data-th":"Actions"};var as=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?E.filter((s=>s.username.match(new RegExp(w.value,"i"))||s.position.match(new RegExp(w.value,"i"))||s.industry.match(new RegExp(w.value,"i"))||s.status.match(new RegExp(w.value,"i"))||s.location.match(new RegExp(w.value,"i")))):E));return(c,o)=>{const d=s,R=e,E=a,as=t,ts=l,ls=i,is=n,ns=r,rs=u;return p(),m("div",null,[v("div",S,[v(R,null,{default:f((()=>[v(d,{icon:"feather:search"},{default:f((()=>[_(v("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>w.value=s),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[y,w.value]])])),_:1})])),_:1}),v(as,null,{default:f((()=>[v(E,{color:"primary",icon:"fas fa-plus",elevated:""},{default:f((()=>[A])),_:1})])),_:1})]),v("div",F,[v("div",P,[v(ts,{class:[0!==g(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:f((()=>[L,U])),_:1},8,["class"]),v("div",z,[v("div",{class:["flex-table-header",[0===g(V).length&&"is-hidden"]]},[B,D,I,O,T,W],2),v("div",C,[v(h,{name:"list",tag:"div"},{default:f((()=>[(p(!0),m(b,null,k(g(V),(s=>(p(),m("div",{key:s.id,class:"flex-table-item"},[v("div",J,[v(ls,{picture:s.picture,badge:s.badge,color:s.color,initials:s.initials,size:"medium"},null,8,["picture","badge","color","initials"]),v("div",null,[v("span",Q,j(s.username),1),v("span",Y,[v("span",null,j(s.position),1)])])]),v("div",q,[v("span",G,j(s.location),1)]),v("div",H,[v("span",K,j(s.industry),1)]),v("div",M,["Online"===s.status?(p(),m("span",N,j(s.status),1)):x("",!0),"Working"===s.status?(p(),m("span",X,j(s.status),1)):x("",!0),"Suspended"===s.status?(p(),m("span",Z,j(s.status),1)):x("",!0),"Offline"===s.status?(p(),m("span",$,j(s.status),1)):x("",!0)]),v("div",ss,[v(is,{avatars:s.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),v("div",es,[v(ns)])])))),128))])),_:1})])]),g(V).length>5?(p(),m(rs,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])])}}});export{as as _};