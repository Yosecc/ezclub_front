import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.5c5ecbb0.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7249f2df.js";import{f as s,c as a}from"./Companies.973933af.js";import{e as r,a as p,s as u}from"./index.63ee1d41.js";import{g as i,r as o}from"./Recurrences.a31c35fb.js";import{i as n,b as c,c as l,d,e as m,n as v}from"./Memberships.195d69fa.js";import{g as f}from"./Discounts.7fc444f5.js";import{d as j,r as y,w as g,o as _,h as b,i as V,P as x,k as h,l as P}from"./vendor.4454b83d.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e9e50515.js";import"./Diciplines.b9f130ea.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.cfbf419f.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.66d5e66f.js";const S={class:"page-content-inner"};var C=j({expose:[],setup(j){const C=x(),L=y(!0);return g((()=>a.value),(()=>{p(n,"locations",s.value.filter((e=>1==e.status)))})),_((()=>{let e=["all_diciplines"];r(n.filter((t=>!e.includes(t.name)))),r(l),r(d),r(v),r(c),f(1,"membership").then((e=>{p(c,"descuento_vet",e.data.discounts)})),i().then((()=>{p(l,"amounts_recurring",o.value.filter((e=>1===e.is_recurrence))),p(d,"amounts_uniques",o.value.filter((e=>0===e.is_recurrence))),L.value=!1,m(C.query.id).then((e=>{for(var t in console.log(e.data),e.data)u(n,t,e.data[t]),u(c,t,e.data[t]),u(v,t,e.data[t]),u(l,t,e.data[t]),u(d,t,e.data[t])}))}))})),(s,a)=>{const r=e,p=t;return b(),V(p,null,{default:h((()=>[P("div",S,[P(r,{"is-loading":L.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default C;
