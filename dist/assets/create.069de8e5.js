import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.60ddda5a.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a24fd0ff.js";import{d as s,w as r,r as a,H as p,o as u,i,j as o,G as n,k as c}from"./vendor.1faf4f77.js";import{e as l,c as v}from"./Companies.6685ae15.js";import{e as m,a as d}from"./index.6fffb7e6.js";import{g as f,r as j}from"./Recurrences.03f3df7f.js";import{i as y,b,c as g,d as _,n as V}from"./Memberships.978d86c7.js";import{g as x}from"./Discounts.fc25d7f4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe437b85.js";import"./V-Button.vue_vue&type=script&setup=true&lang.94a80eab.js";import"./V-Placeload.410731c2.js";import"./V-Control.4a6c84b4.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e3fe440b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.1500d9d7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ac2f5202.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.42dfc6e9.js";import"./V-Card.vue_vue&type=script&setup=true&lang.bff7be9b.js";import"./formLayaut.vue_vue&type=style&index=0&lang.055824c1.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.cf9645bd.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4ed7b4e8.js";import"./Diciplines.f4e9dfba.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3629d2a1.js";import"./useDropdown.105a6322.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e1ab07d1.js";import"./V-Dropdown.1e9a7c40.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7e31a56.js";import"./activePanelState.c2741883.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.305eeb86.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4486146.js";import"./V-Message.vue_vue&type=script&setup=true&lang.78c2be1a.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.9823548d.js";import"./navbarLayoutState.3917eb04.js";import"./sidebarLayoutState.8ddd6cce.js";import"./video.06d66946.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c3ec473d.js";import"./darkModeState.b1f0037d.js";import"./AnimatedLogo.a3e359ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9224d628.js";import"./V-Block.vue_vue&type=script&setup=true&lang.95c8f17c.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c7cbfbbf.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.879bfb5b.js";const h={class:"page-content-inner"};var S=s({expose:[],setup(s){r((()=>v.value),(()=>{d(y,"locations",l.value.filter((e=>1==e.status)))}));const S=a(!0);return p((()=>{let e=["all_diciplines"];m(y.filter((t=>!e.includes(t.name)))),m(g),m(_),m(V),m(b),x(1,"membership").then((e=>{d(b,"descuento_vet",e.data.discounts)})),f().then((()=>{d(g,"amounts_recurring",j.value.filter((e=>1===e.is_recurrence))),d(_,"amounts_uniques",j.value.filter((e=>0===e.is_recurrence))),S.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":S.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default S;