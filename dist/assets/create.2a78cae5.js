import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.683f2575.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c80d93e3.js";import{d as s,w as r,r as a,I as p,o as u,i,j as o,H as n,k as c}from"./vendor.073d5183.js";import{e as l,c as m}from"./Companies.ca72e995.js";import{e as v,a as d}from"./index.845d558b.js";import{g as j,r as f}from"./Recurrences.9b43e512.js";import{i as y,b as g,c as _,d as b,n as V}from"./Memberships.7f99c534.js";import{g as x}from"./Discounts.843311ce.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.e733a91e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import"./V-Placeload.4695e536.js";import"./V-Control.37224b15.js";import"./V-Field.vue_vue&type=script&setup=true&lang.4e36ac54.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b631b135.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.29e348bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.662fbc8e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.24389008.js";import"./formLayaut.vue_vue&type=style&index=0&lang.8b612603.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.adff0cc1.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.ef092ab3.js";import"./Diciplines.73a6e11e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.038e68d0.js";import"./useDropdown.c13972ea.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b94da949.js";import"./V-Dropdown.3dc4bc24.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.b93971f9.js";import"./activePanelState.c5eca1d9.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cc1307cb.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6f7fb019.js";import"./video.969d11fd.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.8493da55.js";import"./darkModeState.1faec688.js";import"./AnimatedLogo.1cc94f36.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9e6a0d72.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e2f5126f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.dc4fcfa1.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.e4d5b56e.js";const h={class:"page-content-inner"};var C=s({expose:[],setup(s){r((()=>m.value),(()=>{d(y,"locations",l.value.filter((e=>1==e.status)))}));const C=a(!0);return p((()=>{let e=["all_diciplines"];v(y.filter((t=>!e.includes(t.name)))),v(_),v(b),v(V),v(g),x(1,"membership").then((e=>{d(g,"descuento_vet",e.data.discounts)})),j().then((()=>{d(_,"amounts_recurring",f.value.filter((e=>1===e.is_recurrence))),d(b,"amounts_uniques",f.value.filter((e=>0===e.is_recurrence))),C.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":C.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default C;
