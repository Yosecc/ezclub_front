import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.3f068fa5.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.3d1329ae.js";import{d as s,c as r}from"./Companies.8be077da.js";import{e as a,a as p}from"./index.8e1175a7.js";import{g as u,r as i}from"./Recurrences.d5451bf0.js";import{i as o,b as n,c,d as l,n as v}from"./Memberships.1a2a63df.js";import{g as d}from"./Discounts.0ab65dca.js";import{d as m,w as j,r as f,G as y,o as g,h as b,j as _,k as V}from"./vendor.d0c8bc4f.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.7f55e2b2.js";import"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import"./V-Placeload.ba28fd33.js";import"./V-Control.46cc2837.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.438fd8f7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b53d2d79.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3464e18c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.3e73d9de.js";import"./formLayaut.vue_vue&type=style&index=0&lang.2ed213c2.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.ee9a9239.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.6ebe6131.js";import"./Diciplines.953cf753.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.b43c3499.js";import"./useDropdown.6d34f9a4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import"./V-Dropdown.7e196bf4.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.84f721dd.js";import"./activePanelState.b9e0947e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.aece0df6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.39ace96b.js";import"./V-Message.vue_vue&type=script&setup=true&lang.9d01539d.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.12102989.js";import"./navbarLayoutState.13ef676b.js";import"./sidebarLayoutState.24ad74be.js";import"./video.6d0592c0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.bd4b68fd.js";import"./darkModeState.2cf6bce9.js";import"./AnimatedLogo.7babd236.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e23c671a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e2962b14.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.67afcfe6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ff5e9d07.js";const x={class:"page-content-inner"};var h=m({expose:[],setup(m){j((()=>r.value),(()=>{p(o,"locations",s.value.filter((e=>1==e.status)))}));const h=f(!0);return y((()=>{let e=["all_diciplines"];a(o.filter((t=>!e.includes(t.name)))),a(c),a(l),a(v),a(n),d(1,"membership").then((e=>{p(n,"descuento_vet",e.data.discounts)})),u().then((()=>{p(c,"amounts_recurring",i.value.filter((e=>1===e.is_recurrence))),p(l,"amounts_uniques",i.value.filter((e=>0===e.is_recurrence))),h.value=!1}))})),(s,r)=>{const a=e,p=t;return g(),b(p,null,{default:_((()=>[V("div",x,[V(a,{"is-loading":h.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default h;
