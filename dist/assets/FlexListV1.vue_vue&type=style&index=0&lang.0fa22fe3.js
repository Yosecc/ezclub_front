import{_ as s}from"./V-Control.61107fd4.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.fabf2cf1.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.802f4410.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.f66e4476.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.d740cac0.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.775811c0.js";import{d as c,r as o,c as d,o as p,h as m,k as f,j as v,D as g,a8 as h,K as x,F as _,S as y,L as b,O as k,J as j,G as w}from"./vendor.d1a3c89d.js";import{_ as V,a as R}from"./search-4-dark.12f0bf0d.js";import{u as S}from"./index.d9e84969.js";const A={class:"list-flex-toolbar flex-list-v1"},E=w(" Add User "),F={class:"page-content-inner"},L={class:"flex-list-wrapper flex-list-v1"},P=f("img",{class:"light-image",src:V,alt:""},null,-1),O=f("img",{class:"dark-image",src:R,alt:""},null,-1),U={class:"flex-table"},z=f("span",{class:"is-grow"},"User",-1),B=f("span",null,"Location",-1),D=f("span",null,"Industry",-1),I=f("span",null,"Status",-1),T=f("span",null,"Relations",-1),W=f("span",{class:"cell-end"},"Actions",-1),C={class:"flex-list-inner"},G={class:"flex-table-cell is-media is-grow"},J={class:"item-name dark-inverted"},K={class:"item-meta"},q={class:"flex-table-cell","data-th":"Location"},H={class:"light-text"},M={class:"flex-table-cell","data-th":"Industry"},N={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={key:0,class:"tag is-success is-rounded"},Y={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ss={class:"flex-table-cell","data-th":"Relations"},es={class:"flex-table-cell cell-end","data-th":"Actions"};var as=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?S.filter((s=>s.username.match(new RegExp(w.value,"i"))||s.position.match(new RegExp(w.value,"i"))||s.industry.match(new RegExp(w.value,"i"))||s.status.match(new RegExp(w.value,"i"))||s.location.match(new RegExp(w.value,"i")))):S));return(c,o)=>{const d=s,R=e,S=a,as=t,ts=l,ls=i,is=n,ns=r,rs=u;return p(),m("div",null,[f("div",A,[f(R,null,{default:v((()=>[f(d,{icon:"feather:search"},{default:v((()=>[_(f("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>w.value=s),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[y,w.value]])])),_:1})])),_:1}),f(as,null,{default:v((()=>[f(S,{color:"primary",icon:"fas fa-plus",elevated:""},{default:v((()=>[E])),_:1})])),_:1})]),f("div",F,[f("div",L,[f(ts,{class:[0!==g(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:v((()=>[P,O])),_:1},8,["class"]),f("div",U,[f("div",{class:["flex-table-header",[0===g(V).length&&"is-hidden"]]},[z,B,D,I,T,W],2),f("div",C,[f(h,{name:"list",tag:"div"},{default:v((()=>[(p(!0),m(b,null,k(g(V),(s=>(p(),m("div",{key:s.id,class:"flex-table-item"},[f("div",G,[f(ls,{picture:s.picture,badge:s.badge,color:s.color,initials:s.initials,size:"medium"},null,8,["picture","badge","color","initials"]),f("div",null,[f("span",J,j(s.username),1),f("span",K,[f("span",null,j(s.position),1)])])]),f("div",q,[f("span",H,j(s.location),1)]),f("div",M,[f("span",N,j(s.industry),1)]),f("div",Q,["Online"===s.status?(p(),m("span",X,j(s.status),1)):x("",!0),"Working"===s.status?(p(),m("span",Y,j(s.status),1)):x("",!0),"Suspended"===s.status?(p(),m("span",Z,j(s.status),1)):x("",!0),"Offline"===s.status?(p(),m("span",$,j(s.status),1)):x("",!0)]),f("div",ss,[f(is,{avatars:s.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),f("div",es,[f(ns)])])))),128))])),_:1})])]),g(V).length>5?(p(),m(rs,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])])}}});export{as as _};
