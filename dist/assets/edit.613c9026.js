import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.cb961b93.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.3a1c1013.js";import{d as s,z as a,r as p,A as r,o as i,h as o,B as u,j as n,k as l}from"./vendor.e3a29b40.js";import{p as c}from"./sidebarLayoutState.436b738a.js";import{a as v}from"./Companies.af753083.js";import{h as m}from"./Staffs.9ddb44ec.js";import{c as d,g as f,a as j}from"./Mixin.788265f9.js";import{i as y,b}from"./Diciplines.5162bc80.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.50bb1f04.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import"./V-Placeload.9d0101ab.js";import"./V-Control.b36667bf.js";import"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.13bae167.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";import"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d27a24ca.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8ee67bc5.js";import"./useDropdown.dfad556c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import"./V-Dropdown.7404a3e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a89ef3a.js";import"./index.e69f2eb2.js";import"./activePanelState.5a49edcb.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a1fc41b2.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.eb96c098.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f3abd056.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.b59ccca7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5145729d.js";import"./navbarLayoutState.e25d577c.js";import"./video.674f0486.js";import"./darkModeState.a53f3c67.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2f79059e.js";import"./AnimatedLogo.e43df3fc.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5e6c3f74.js";import"./V-Block.vue_vue&type=script&setup=true&lang.f5251e79.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.16aa198e.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.c5504f9b.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const g={class:"page-content-inner"};var _=s({expose:[],setup(s){const _=u();c.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{d(y.value),v(),m().then((e=>{V.value=!1})),b(_.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?f(y.value,"status").model=["status"]:f(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{f(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{f(y.value,"trainers").model.push(e.staffs_id)})):j(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),o(r,null,{default:n((()=>[l("div",g,[l(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default _;
