import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.a38c6329.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.edb12b4f.js";import{d as s,w as r,r as a,H as p,o as u,i,j as o,G as n,k as c}from"./vendor.0b0c2a98.js";import{d as l,c as v}from"./Companies.510526e3.js";import{e as m,a as d}from"./index.c3166c79.js";import{g as j,r as f}from"./Recurrences.1a863280.js";import{i as y,b,d as g,e as _,n as V}from"./Memberships.865482da.js";import{g as x}from"./Discounts.86f8744a.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.996de933.js";import"./V-Button.vue_vue&type=script&setup=true&lang.1a9fba1b.js";import"./V-Placeload.1f25c7c6.js";import"./V-Control.f5455229.js";import"./V-Field.vue_vue&type=script&setup=true&lang.676297a2.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80c67c71.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.8b9bb15d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.b96d8270.js";import"./formLayaut.vue_vue&type=style&index=0&lang.1dc86fff.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.c70b2f05.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.3772eeb5.js";import"./Diciplines.9733cea6.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d65bd59b.js";import"./useDropdown.ed8b3065.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e9f9f5bb.js";import"./V-Dropdown.78d32424.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.fb8eb841.js";import"./activePanelState.8fe80399.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf8889e8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.37834ed9.js";import"./V-Message.vue_vue&type=script&setup=true&lang.169dc9fd.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.ed4ec558.js";import"./navbarLayoutState.ac9b34c9.js";import"./sidebarLayoutState.80702fa9.js";import"./video.e503358c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.21759115.js";import"./darkModeState.8b61e731.js";import"./AnimatedLogo.527cfb51.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.b806e884.js";import"./V-Block.vue_vue&type=script&setup=true&lang.88bfc070.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.be986058.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ccb3f0bf.js";const h={class:"page-content-inner"};var S=s({expose:[],setup(s){r((()=>v.value),(()=>{d(y,"locations",l.value.filter((e=>1==e.status)))}));const S=a(!0);return p((()=>{let e=["all_diciplines"];m(y.filter((t=>!e.includes(t.name)))),m(g),m(_),m(V),m(b),x(1,"membership").then((e=>{d(b,"descuento_vet",e.data.discounts)})),j().then((()=>{d(g,"amounts_recurring",f.value.filter((e=>e.days>=30))),d(_,"amounts_uniques",f.value.filter((e=>e.days<=30))),S.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":S.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default S;
