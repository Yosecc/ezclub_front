import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.7f49863d.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.12f27a68.js";import{d as s,O as a,r,w as p,o as u,i,j as o,k as n,I as c,l as d}from"./vendor.84e48f7c.js";import{f as l,c as m}from"./Companies.5af72a07.js";import{e as v,a as j,s as f}from"./index.46ea8f6b.js";import{g as y,r as g}from"./Recurrences.9c7058d2.js";import{i as _,b,c as V,d as x,e as h,n as C}from"./Memberships.bc47030e.js";import{g as P}from"./Discounts.a575d4d9.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import"./V-Placeload.8fe4e440.js";import"./V-Control.b8a16a92.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.cc314943.js";import"./Diciplines.9072b775.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.de0d6a06.js";import"./useDropdown.3858e0aa.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.bceb862d.js";const S={class:"page-content-inner"};var L=s({expose:[],setup(s){const L=a(),k=r(!0);return p((()=>m.value),(()=>{j(_,"locations",l.value.filter((e=>1==e.status)))})),u((()=>{let e=["all_diciplines"];v(_.filter((t=>!e.includes(t.name)))),v(V),v(x),v(C),v(b),P(1,"membership").then((e=>{j(b,"descuento_vet",e.data.discounts)})),y().then((()=>{j(V,"amounts_recurring",g.value.filter((e=>1===e.is_recurrence))),j(x,"amounts_uniques",g.value.filter((e=>0===e.is_recurrence))),k.value=!1,h(L.query.id).then((e=>{for(var t in console.log(e.data),e.data)f(_,t,e.data[t]),f(b,t,e.data[t]),f(C,t,e.data[t]),f(V,t,e.data[t]),f(x,t,e.data[t])}))}))})),(s,a)=>{const r=e,p=t;return i(),o(p,null,{default:n((()=>[c(" Content Wrapper "),d("div",S,[d(r,{"is-loading":k.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default L;
