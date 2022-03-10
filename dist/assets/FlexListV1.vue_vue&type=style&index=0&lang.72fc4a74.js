import{_ as s}from"./V-Control.b36667bf.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.8d58eaae.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.814e506a.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.9f0db671.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.d309b490.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.5556d9f6.js";import{d as c,r as o,b as d,o as p,h as m,k as f,j as v,E as g,a8 as h,L as x,G as b,S as _,N as y,O as k,K as j,H as w}from"./vendor.e3a29b40.js";import{_ as V,a as R}from"./search-4-dark.fb3880a5.js";import{u as E}from"./index.d9e84969.js";const S={class:"list-flex-toolbar flex-list-v1"},A=w(" Add User "),L={class:"page-content-inner"},P={class:"flex-list-wrapper flex-list-v1"},F=f("img",{class:"light-image",src:V,alt:""},null,-1),O=f("img",{class:"dark-image",src:R,alt:""},null,-1),U={class:"flex-table"},z=f("span",{class:"is-grow"},"User",-1),B=f("span",null,"Location",-1),I=f("span",null,"Industry",-1),T=f("span",null,"Status",-1),W=f("span",null,"Relations",-1),C=f("span",{class:"cell-end"},"Actions",-1),D={class:"flex-list-inner"},G={class:"flex-table-cell is-media is-grow"},H={class:"item-name dark-inverted"},K={class:"item-meta"},N={class:"flex-table-cell","data-th":"Location"},q={class:"light-text"},J={class:"flex-table-cell","data-th":"Industry"},M={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={key:0,class:"tag is-success is-rounded"},Y={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ss={class:"flex-table-cell","data-th":"Relations"},es={class:"flex-table-cell cell-end","data-th":"Actions"};var as=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?E.filter((s=>s.username.match(new RegExp(w.value,"i"))||s.position.match(new RegExp(w.value,"i"))||s.industry.match(new RegExp(w.value,"i"))||s.status.match(new RegExp(w.value,"i"))||s.location.match(new RegExp(w.value,"i")))):E));return(c,o)=>{const d=s,R=e,E=a,as=t,ts=l,ls=i,is=n,ns=r,rs=u;return p(),m("div",null,[f("div",S,[f(R,null,{default:v((()=>[f(d,{icon:"feather:search"},{default:v((()=>[b(f("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>w.value=s),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[_,w.value]])])),_:1})])),_:1}),f(as,null,{default:v((()=>[f(E,{color:"primary",icon:"fas fa-plus",elevated:""},{default:v((()=>[A])),_:1})])),_:1})]),f("div",L,[f("div",P,[f(ts,{class:[0!==g(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:v((()=>[F,O])),_:1},8,["class"]),f("div",U,[f("div",{class:["flex-table-header",[0===g(V).length&&"is-hidden"]]},[z,B,I,T,W,C],2),f("div",D,[f(h,{name:"list",tag:"div"},{default:v((()=>[(p(!0),m(y,null,k(g(V),(s=>(p(),m("div",{key:s.id,class:"flex-table-item"},[f("div",G,[f(ls,{picture:s.picture,badge:s.badge,color:s.color,initials:s.initials,size:"medium"},null,8,["picture","badge","color","initials"]),f("div",null,[f("span",H,j(s.username),1),f("span",K,[f("span",null,j(s.position),1)])])]),f("div",N,[f("span",q,j(s.location),1)]),f("div",J,[f("span",M,j(s.industry),1)]),f("div",Q,["Online"===s.status?(p(),m("span",X,j(s.status),1)):x("",!0),"Working"===s.status?(p(),m("span",Y,j(s.status),1)):x("",!0),"Suspended"===s.status?(p(),m("span",Z,j(s.status),1)):x("",!0),"Offline"===s.status?(p(),m("span",$,j(s.status),1)):x("",!0)]),f("div",ss,[f(is,{avatars:s.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),f("div",es,[f(ns)])])))),128))])),_:1})])]),g(V).length>5?(p(),m(rs,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])])}}});export{as as _};
