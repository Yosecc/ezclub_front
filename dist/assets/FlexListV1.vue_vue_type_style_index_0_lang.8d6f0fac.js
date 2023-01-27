import{_ as k}from"./V-Control.92200beb.js";import{_ as w}from"./V-Field.vue_vue_type_script_setup_true_lang.33752939.js";import{_ as V}from"./V-Button.vue_vue_type_script_setup_true_lang.72d178c7.js";import{_ as $}from"./V-Buttons.vue_vue_type_script_setup_true_lang.7da898fa.js";import{_ as R}from"./V-PlaceholderPage.vue_vue_type_script_setup_true_lang.7e747268.js";import{_ as F}from"./V-Avatar.vue_vue_type_script_setup_true_lang.b4183814.js";import{_ as L}from"./V-AvatarStack.vue_vue_type_script_setup_true_lang.1904e987.js";import{_ as S}from"./FlexTableDropdown.vue_vue_type_script_setup_true_lang.dc4f832c.js";import{_ as A}from"./V-FlexPagination.vue_vue_type_script_setup_true_lang.f736a510.js";import{d as E,r as T,c as B,o as a,e as n,f as s,w as i,u as _,a9 as C,y as c,H as D,L as P,F as N,G as U,t as o,i as z}from"./index.4457215e.js";import{_ as G,a as I}from"./search-4-dark.12f0bf0d.js";import{u}from"./index.d9e84969.js";const O={class:"list-flex-toolbar flex-list-v1"},W=z(" Add User "),H={class:"page-content-inner"},M={class:"flex-list-wrapper flex-list-v1"},j=s("img",{class:"light-image",src:G,alt:""},null,-1),q=s("img",{class:"dark-image",src:I,alt:""},null,-1),J={class:"flex-table"},K=s("span",{class:"is-grow"},"User",-1),Q=s("span",null,"Location",-1),X=s("span",null,"Industry",-1),Y=s("span",null,"Status",-1),Z=s("span",null,"Relations",-1),ss=s("span",{class:"cell-end"},"Actions",-1),ts={class:"flex-list-inner"},es={class:"flex-table-cell is-media is-grow"},as={class:"item-name dark-inverted"},ns={class:"item-meta"},os={class:"flex-table-cell","data-th":"Location"},ls={class:"light-text"},is={class:"flex-table-cell","data-th":"Industry"},cs={class:"light-text"},rs={class:"flex-table-cell","data-th":"Status"},_s={key:0,class:"tag is-success is-rounded"},ds={key:1,class:"tag is-info is-rounded"},us={key:2,class:"tag is-danger is-rounded"},ps={key:3,class:"tag is-rounded"},ms={class:"flex-table-cell","data-th":"Relations"},fs={class:"flex-table-cell cell-end","data-th":"Actions"};var Ss=E({expose:[],setup(hs){const e=T(""),r=B(()=>e.value?u.filter(l=>l.username.match(new RegExp(e.value,"i"))||l.position.match(new RegExp(e.value,"i"))||l.industry.match(new RegExp(e.value,"i"))||l.status.match(new RegExp(e.value,"i"))||l.location.match(new RegExp(e.value,"i"))):u);return(l,d)=>{const p=k,m=w,f=V,h=$,g=R,v=F,x=L,y=S,b=A;return a(),n("div",null,[s("div",O,[s(m,null,{default:i(()=>[s(p,{icon:"feather:search"},{default:i(()=>[D(s("input",{"onUpdate:modelValue":d[1]||(d[1]=t=>e.value=t),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[P,e.value]])]),_:1})]),_:1}),s(h,null,{default:i(()=>[s(f,{color:"primary",icon:"fas fa-plus",elevated:""},{default:i(()=>[W]),_:1})]),_:1})]),s("div",H,[s("div",M,[s(g,{class:[_(r).length!==0&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:`Too bad. Looks like we couldn't find any matching results for the\r
          search terms you've entered. Please try different search terms or\r
          criteria.`,larger:""},{image:i(()=>[j,q]),_:1},8,["class"]),s("div",J,[s("div",{class:["flex-table-header",[_(r).length===0&&"is-hidden"]]},[K,Q,X,Y,Z,ss],2),s("div",ts,[s(C,{name:"list",tag:"div"},{default:i(()=>[(a(!0),n(N,null,U(_(r),t=>(a(),n("div",{key:t.id,class:"flex-table-item"},[s("div",es,[s(v,{picture:t.picture,badge:t.badge,color:t.color,initials:t.initials,size:"medium"},null,8,["picture","badge","color","initials"]),s("div",null,[s("span",as,o(t.username),1),s("span",ns,[s("span",null,o(t.position),1)])])]),s("div",os,[s("span",ls,o(t.location),1)]),s("div",is,[s("span",cs,o(t.industry),1)]),s("div",rs,[t.status==="Online"?(a(),n("span",_s,o(t.status),1)):c("",!0),t.status==="Working"?(a(),n("span",ds,o(t.status),1)):c("",!0),t.status==="Suspended"?(a(),n("span",us,o(t.status),1)):c("",!0),t.status==="Offline"?(a(),n("span",ps,o(t.status),1)):c("",!0)]),s("div",ms,[s(x,{avatars:t.contacts,size:"small",limit:3,class:"is-pushed-mobile"},null,8,["avatars"])]),s("div",fs,[s(y)])]))),128))]),_:1})])]),_(r).length>5?(a(),n(b,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):c("",!0)])])])}}});export{Ss as _};
