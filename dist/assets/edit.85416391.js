import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.c40e0cf9.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f7a67280.js";import{d as s,O as a,r,w as p,o as u,i,j as o,k as n,I as c,l}from"./vendor.b96c0b62.js";import{f as d,c as m}from"./Companies.8caab400.js";import{e as v,a as j,s as f}from"./index.767fa190.js";import{g as y,r as g}from"./Recurrences.3de81760.js";import{i as _,b,c as V,d as x,e as h,n as C}from"./Memberships.b7504d37.js";import{g as P}from"./Discounts.34037752.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import"./V-Placeload.43c61814.js";import"./V-Control.9f6b030b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import"./formLayaut.vue_vue&type=style&index=0&lang.c811f515.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.72c1da57.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.905c9e6e.js";import"./Diciplines.8c9d5677.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.56799f3f.js";import"./useDropdown.51b21268.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.a7097173.js";const S={class:"page-content-inner"};var L=s({expose:[],setup(s){const L=a(),k=r(!0);return p((()=>m.value),(()=>{j(_,"locations",d.value.filter((e=>1==e.status)))})),u((()=>{let e=["all_diciplines"];v(_.filter((t=>!e.includes(t.name)))),v(V),v(x),v(C),v(b),P(1,"membership").then((e=>{j(b,"descuento_vet",e.data.discounts)})),y().then((()=>{j(V,"amounts_recurring",g.value.filter((e=>1===e.is_recurrence))),j(x,"amounts_uniques",g.value.filter((e=>0===e.is_recurrence))),k.value=!1,h(L.query.id).then((e=>{for(var t in console.log(e.data),e.data)f(_,t,e.data[t]),f(b,t,e.data[t]),f(C,t,e.data[t]),f(V,t,e.data[t]),f(x,t,e.data[t])}))}))})),(s,a)=>{const r=e,p=t;return i(),o(p,null,{default:n((()=>[c(" Content Wrapper "),l("div",S,[l(r,{"is-loading":k.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default L;
