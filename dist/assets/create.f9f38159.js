import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.5ec91607.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.32d14edc.js";import{e as s,c as r}from"./Companies.7a4af379.js";import{e as a,a as p}from"./index.80cb2235.js";import{g as u,r as i}from"./Recurrences.b75717e5.js";import{i as o,b as n,c,d as l,n as d}from"./Memberships.e153e796.js";import{g as m}from"./Discounts.3568c4dd.js";import{d as v,w as j,r as f,H as y,o as g,h as _,j as b,k as V}from"./vendor.7aabbf00.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.2cdbc45d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.9e06e290.js";import"./V-Placeload.6188fd5c.js";import"./V-Control.d3abcde5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.42a65dca.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7aefa753.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d3c32992.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f9b158b7.js";import"./V-Card.vue_vue&type=script&setup=true&lang.618f40b5.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e2ad0985.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.face5b60.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.ac72699d.js";import"./Diciplines.4d5b4f8c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.85c473df.js";import"./useDropdown.2853e52d.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.f9fa4384.js";import"./V-Dropdown.8482ec92.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.d053576d.js";import"./activePanelState.fd2c0dac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ec192743.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.0642f61b.js";import"./video.d6b6055c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.b447994e.js";import"./darkModeState.07e06db8.js";import"./AnimatedLogo.dd19f461.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.70241fa9.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2694bb1a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2a8e293e.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.9a2c2a97.js";const x={class:"page-content-inner"};var h=v({expose:[],setup(v){j((()=>r.value),(()=>{p(o,"locations",s.value.filter((e=>1==e.status)))}));const h=f(!0);return y((()=>{let e=["all_diciplines"];a(o.filter((t=>!e.includes(t.name)))),a(c),a(l),a(d),a(n),m(1,"membership").then((e=>{p(n,"descuento_vet",e.data.discounts)})),u().then((()=>{p(c,"amounts_recurring",i.value.filter((e=>1===e.is_recurrence))),p(l,"amounts_uniques",i.value.filter((e=>0===e.is_recurrence))),h.value=!1}))})),(s,r)=>{const a=e,p=t;return g(),_(p,null,{default:b((()=>[V("div",x,[V(a,{"is-loading":h.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default h;
