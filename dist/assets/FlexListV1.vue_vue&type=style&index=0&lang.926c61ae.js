import{_ as e}from"./V-Control.37224b15.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.4e36ac54.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import{_ as t}from"./V-Buttons.vue_vue&type=script&setup=true&lang.76535c5a.js";import{_ as l}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.94be2051.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b94da949.js";import{_ as n}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.e1f27d15.js";import{_ as r}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.cbebc22d.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.b1d0da92.js";import{d as c,r as o,b as d,o as p,i as m,k as v,j as f,H as g,E as h,aa as b,W as x,_,S as y,U as k,G as j,F as w}from"./vendor.073d5183.js";import{_ as V,a as E}from"./search-4-dark.12f0bf0d.js";import{u as R}from"./index.d9e84969.js";const S={class:"list-flex-toolbar flex-list-v1"},P=w(" Add User "),A={class:"page-content-inner"},T={class:"flex-list-wrapper flex-list-v1"},F=v("img",{class:"light-image",src:V,alt:""},null,-1),L=v("img",{class:"dark-image",src:E,alt:""},null,-1),U={class:"flex-table"},W=v("span",{class:"is-grow"},"User",-1),z=v("span",null,"Location",-1),B=v("span",null,"Industry",-1),I=v("span",null,"Status",-1),O=v("span",null,"Relations",-1),C=v("span",{class:"cell-end"},"Actions",-1),D={class:"flex-list-inner"},G={class:"flex-table-cell is-media is-grow"},H={class:"item-name dark-inverted"},q={class:"item-meta"},J={class:"flex-table-cell","data-th":"Location"},K={class:"light-text"},M={class:"flex-table-cell","data-th":"Industry"},N={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={key:0,class:"tag is-success is-rounded"},Y={key:1,class:"tag is-info is-rounded"},Z={key:2,class:"tag is-danger is-rounded"},$={key:3,class:"tag is-rounded"},ee={class:"flex-table-cell","data-th":"Relations"},ae={class:"flex-table-cell cell-end","data-th":"Actions"};var se=c({expose:[],setup(c){const w=o(""),V=d((()=>w.value?R.filter((e=>e.username.match(new RegExp(w.value,"i"))||e.position.match(new RegExp(w.value,"i"))||e.industry.match(new RegExp(w.value,"i"))||e.status.match(new RegExp(w.value,"i"))||e.location.match(new RegExp(w.value,"i")))):R));return(c,o)=>{const d=e,E=a,R=s,se=t,te=l,le=i,ie=n,ne=r,re=u;return p(),m("div",null,[v("div",S,[v(E,null,{default:f((()=>[v(d,{icon:"feather:search"},{default:f((()=>[x(v("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>w.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[_,w.value]])])),_:1})])),_:1}),v(se,null,{default:f((()=>[v(R,{color:"primary",icon:"fas fa-plus",elevated:""},{default:f((()=>[P])),_:1})])),_:1})]),v("div",A,[v("div",T,[g("List Empty Search Placeholder "),v(te,{class:[0!==h(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:f((()=>[F,L])),_:1},8,["class"]),v("div",U,[g("Table header"),v("div",{class:["flex-table-header",[0===h(V).length&&"is-hidden"]]},[W,z,B,I,O,C],2),v("div",D,[v(b,{name:"list",tag:"div"},{default:f((()=>[g("Table item"),(p(!0),m(y,null,k(h(V),(e=>(p(),m("div",{key:e.id,class:"flex-table-item"},[v("div",G,[v(le,{picture:e.picture,badge:e.badge,color:e.color,initials:e.initials,size:"medium"},null,8,["picture","badge","color","initials"]),v("div",null,[v("span",H,j(e.username),1),v("span",q,[v("span",null,j(e.position),1)])])]),v("div",J,[v("span",K,j(e.location),1)]),v("div",M,[v("span",N,j(e.industry),1)]),v("div",Q,["Online"===e.status?(p(),m("span",X,j(e.status),1)):g("v-if",!0),"Working"===e.status?(p(),m("span",Y,j(e.status),1)):g("v-if",!0),"Suspended"===e.status?(p(),m("span",Z,j(e.status),1)):g("v-if",!0),"Offline"===e.status?(p(),m("span",$,j(e.status),1)):g("v-if",!0)]),v("div",ee,[v(ie,{avatars:e.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),v("div",ae,[v(ne)])])))),128))])),_:1})])]),g("Table Pagination"),h(V).length>5?(p(),m(re,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):g("v-if",!0)])])])}}});export{se as _};
