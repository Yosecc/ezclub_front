import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.84a88df1.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.23edd7aa.js";import{d as s,w as r,r as a,o as p,i as u,j as i,k as o,I as n,l as c}from"./vendor.435948fe.js";import{h as l,c as m}from"./Companies.5246daaa.js";import{e as v,a as d}from"./index.ff49a0f4.js";import{g as j,r as y}from"./Recurrences.5bf25c34.js";import{i as f,b as g,c as _,d as b,n as V}from"./Memberships.cda5e210.js";import{g as x}from"./Discounts.bbc39830.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3be721db.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.e3659163.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.7e9f57de.js";import"./Diciplines.7c6b12a7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ec1ed57b.js";import"./useDropdown.9dc4bfe3.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import"./V-Dropdown.3004e9ea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./activePanelState.66f70896.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e4d5431d.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a5b69815.js";import"./video.413cf4d2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3a098275.js";import"./darkModeState.010a41bc.js";import"./AnimatedLogo.030703f2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.c7ec3620.js";const h={class:"page-content-inner"};var C=s({expose:[],setup(s){r((()=>m.value),(()=>{d(f,"locations",l.value.filter((e=>1==e.status)))}));const C=a(!0);return p((()=>{let e=["all_diciplines"];v(f.filter((t=>!e.includes(t.name)))),v(_),v(b),v(V),v(g),x(1,"membership").then((e=>{d(g,"descuento_vet",e.data.discounts)})),j().then((()=>{d(_,"amounts_recurring",y.value.filter((e=>1===e.is_recurrence))),d(b,"amounts_uniques",y.value.filter((e=>0===e.is_recurrence))),C.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":C.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default C;
