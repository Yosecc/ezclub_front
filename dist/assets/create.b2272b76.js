import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.4b8f2324.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.4e85ad8a.js";import{e as s,c as r}from"./Companies.a136b23c.js";import{e as a,a as p}from"./index.95d72d05.js";import{g as u,r as i}from"./Recurrences.ea6e5fa1.js";import{i as o,b as n,c,d as l,n as d}from"./Memberships.0384ff88.js";import{g as m}from"./Discounts.82b17667.js";import{d as v,w as f,r as j,H as y,o as g,h as _,j as b,k as V}from"./vendor.41bfc188.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import"./V-Placeload.f8b8ec60.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.066d1ccf.js";import"./Diciplines.438f5761.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.f973f2d5.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.454c18d7.js";const x={class:"page-content-inner"};var h=v({expose:[],setup(v){f((()=>r.value),(()=>{p(o,"locations",s.value.filter((e=>1==e.status)))}));const h=j(!0);return y((()=>{let e=["all_diciplines"];a(o.filter((t=>!e.includes(t.name)))),a(c),a(l),a(d),a(n),m(1,"membership").then((e=>{p(n,"descuento_vet",e.data.discounts)})),u().then((()=>{p(c,"amounts_recurring",i.value.filter((e=>1===e.is_recurrence))),p(l,"amounts_uniques",i.value.filter((e=>0===e.is_recurrence))),h.value=!1}))})),(s,r)=>{const a=e,p=t;return g(),_(p,null,{default:b((()=>[V("div",x,[V(a,{"is-loading":h.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default h;
