import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.ef80260d.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.837fe5b6.js";import{d as s,w as r,r as a,o as p,i as u,j as i,k as o,I as n,l as c}from"./vendor.84e48f7c.js";import{f as l,c as m}from"./Companies.9bf42d00.js";import{e as v,a as d}from"./index.7b297ef5.js";import{g as j,r as f}from"./Recurrences.c5a7ec40.js";import{i as y,b as g,c as _,d as b,n as V}from"./Memberships.0d03aea3.js";import{g as x}from"./Discounts.4a553121.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import"./V-Placeload.8fe4e440.js";import"./V-Control.b8a16a92.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.cc314943.js";import"./Diciplines.5e7d07fe.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5e609119.js";import"./useDropdown.3858e0aa.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.bceb862d.js";const h={class:"page-content-inner"};var C=s({expose:[],setup(s){r((()=>m.value),(()=>{d(y,"locations",l.value.filter((e=>1==e.status)))}));const C=a(!0);return p((()=>{let e=["all_diciplines"];v(y.filter((t=>!e.includes(t.name)))),v(_),v(b),v(V),v(g),x(1,"membership").then((e=>{d(g,"descuento_vet",e.data.discounts)})),j().then((()=>{d(_,"amounts_recurring",f.value.filter((e=>1===e.is_recurrence))),d(b,"amounts_uniques",f.value.filter((e=>0===e.is_recurrence))),C.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":C.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default C;