import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.488392c5.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.03c1ef2b.js";import{a as s,l as a}from"./Companies.1540d521.js";import{f as o,t as r}from"./config.9b6de6e5.js";import{c as p,s as u,a as i,g as n}from"./Mixin.dd32d622.js";import{g as d,r as l}from"./Recurrences.5bb747fe.js";import{i as m,a as c}from"./Memberships.4380e979.js";import{d as v,r as f,A as j,o as y,h as g,B as _,j as b,k as h}from"./vendor.3b9a49d2.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.57a8bd27.js";import"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import"./V-Placeload.ec1fe97e.js";import"./V-Control.70f7b974.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.441d7520.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.360f6b50.js";import"./formLayaut.vue_vue&type=style&index=0&lang.90f77f15.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.020cd487.js";import"./Diciplines.82ad42cc.js";import"./index.111a2eb1.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.1af5c6c5.js";import"./useDropdown.4b88246a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import"./V-Dropdown.5634df5b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.725db5d0.js";import"./activePanelState.d422980e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.729240c7.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5554d4bf.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f4c30d64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.db2a2ca9.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.533d5625.js";import"./navbarLayoutState.607bf9e0.js";import"./sidebarLayoutState.9d5a55d2.js";import"./video.7e4ace56.js";import"./darkModeState.9048b099.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.9336f53f.js";import"./AnimatedLogo.d39560aa.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5fbfe7cf.js";import"./V-Block.vue_vue&type=script&setup=true&lang.fd027cc2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.7c436ff6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b8cff140.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const V={class:"page-content-inner"};var x=v({expose:[],setup(v){const x=_(),S=f(!0);return j((()=>{p(m.value),o().then((()=>{u(m,"taxes_id",r)})),s().then((()=>{u(m,"locations",a)})),d().then((()=>{u(m,"amounts",l);let e={};l.value.forEach((t=>{e[t.id]=""})),i(m,"amounts",e),S.value=!1,c(x.query.id).then((e=>{for(var t in console.log("response",e.data),e.data)"amounts"==t?e.data[t].forEach((e=>{n(m.value,"amounts").model[e.recurrences_id]=e.amount})):"locations"==t?e.data[t].forEach((e=>{n(m.value,"locations").model=[],n(m.value,"locations").model.push(e.companies_locations_id)})):"membership_diciplines"==t?e.data[t].forEach((e=>{n(m.value,"diciplines").model.push(e.diciplines_id)})):"status"==t?1==e.data[t]||"1"==e.data[t]?(n(m.value,"status").model=[],n(m.value,"status").model.push("status")):n(m.value,"status").model=[]:i(m,t,e.data[t])}))}))})),(s,a)=>{const o=e,r=t;return y(),g(r,null,{default:b((()=>[h("div",V,[h(o,{"is-loading":S.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default x;
