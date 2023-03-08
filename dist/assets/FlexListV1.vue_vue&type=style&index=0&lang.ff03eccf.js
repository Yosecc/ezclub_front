import{_ as e}from"./V-Control.c2f9b0a5.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.2adbf847.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.708d2bbe.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.b8ea62c3.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.e70bcb47.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.47e5d9a4.js";import{d as c,r as o,b as d,h as p,i as m,l as f,k as v,F as g,ad as h,K as x,W as b,_,R as y,S as k,H as j,G as w}from"./vendor.3e3390b7.js";import{_ as V,a as R}from"./search-4-dark.12f0bf0d.js";import{u as S}from"./index.d9e84969.js";const A={class:"list-flex-toolbar flex-list-v1"},E=w(" Add User "),F={class:"page-content-inner"},P={class:"flex-list-wrapper flex-list-v1"},L=f("img",{class:"light-image",src:V,alt:""},null,-1),U=f("img",{class:"dark-image",src:R,alt:""},null,-1),W={class:"flex-table"},z=f("span",{class:"is-grow"},"User",-1),B=f("span",null,"Location",-1),I=f("span",null,"Industry",-1),O=f("span",null,"Status",-1),T=f("span",null,"Relations",-1),C=f("span",{class:"cell-end"},"Actions",-1),D={class:"flex-list-inner"},G={class:"flex-table-cell is-media is-grow"},H={class:"item-name dark-inverted"},K={class:"item-meta"},q={class:"flex-table-cell","data-th":"Location"},J={class:"light-text"},M={class:"flex-table-cell","data-th":"Industry"},N={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={key:0,class:"tag is-success is-rounded"},Y={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ee={class:"flex-table-cell","data-th":"Relations"},se={class:"flex-table-cell cell-end","data-th":"Actions"};var ae=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?S.filter((e=>e.username.match(new RegExp(w.value,"i"))||e.position.match(new RegExp(w.value,"i"))||e.industry.match(new RegExp(w.value,"i"))||e.status.match(new RegExp(w.value,"i"))||e.location.match(new RegExp(w.value,"i")))):S));return(c,o)=>{const d=e,R=s,S=a,ae=t,te=l,le=i,ie=n,ne=r,re=u;return p(),m("div",null,[f("div",A,[f(R,null,{default:v((()=>[f(d,{icon:"feather:search"},{default:v((()=>[b(f("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>w.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[_,w.value]])])),_:1})])),_:1}),f(ae,null,{default:v((()=>[f(S,{color:"primary",icon:"fas fa-plus",elevated:""},{default:v((()=>[E])),_:1})])),_:1})]),f("div",F,[f("div",P,[f(te,{class:[0!==g(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:v((()=>[L,U])),_:1},8,["class"]),f("div",W,[f("div",{class:["flex-table-header",[0===g(V).length&&"is-hidden"]]},[z,B,I,O,T,C],2),f("div",D,[f(h,{name:"list",tag:"div"},{default:v((()=>[(p(!0),m(y,null,k(g(V),(e=>(p(),m("div",{key:e.id,class:"flex-table-item"},[f("div",G,[f(le,{picture:e.picture,badge:e.badge,color:e.color,initials:e.initials,size:"medium"},null,8,["picture","badge","color","initials"]),f("div",null,[f("span",H,j(e.username),1),f("span",K,[f("span",null,j(e.position),1)])])]),f("div",q,[f("span",J,j(e.location),1)]),f("div",M,[f("span",N,j(e.industry),1)]),f("div",Q,["Online"===e.status?(p(),m("span",X,j(e.status),1)):x("",!0),"Working"===e.status?(p(),m("span",Y,j(e.status),1)):x("",!0),"Suspended"===e.status?(p(),m("span",Z,j(e.status),1)):x("",!0),"Offline"===e.status?(p(),m("span",$,j(e.status),1)):x("",!0)]),f("div",ee,[f(ie,{avatars:e.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),f("div",se,[f(ne)])])))),128))])),_:1})])]),g(V).length>5?(p(),m(re,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])])}}});export{ae as _};
