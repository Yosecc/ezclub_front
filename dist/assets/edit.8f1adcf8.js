import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.a4c1dee8.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c307b4ef.js";import{d as s,L as a,O as p,r,H as i,o as u,i as o,j as n,G as l,k as v}from"./vendor.0b0c2a98.js";import{p as c}from"./sidebarLayoutState.80702fa9.js";import{b as d}from"./Companies.db0fbf04.js";import{h as m}from"./Staffs.c69f73e2.js";import{e as f,g as j,s as y}from"./index.a0e7911c.js";import{i as b,c as g}from"./Diciplines.6304d1d2.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.996de933.js";import"./V-Button.vue_vue&type=script&setup=true&lang.1a9fba1b.js";import"./V-Placeload.1f25c7c6.js";import"./V-Control.f5455229.js";import"./V-Field.vue_vue&type=script&setup=true&lang.676297a2.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80c67c71.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.8b9bb15d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.b96d8270.js";import"./formLayaut.vue_vue&type=style&index=0&lang.1dc86fff.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.c70b2f05.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.3772eeb5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5ba44edb.js";import"./useDropdown.ed8b3065.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e9f9f5bb.js";import"./V-Dropdown.78d32424.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.fb8eb841.js";import"./activePanelState.8fe80399.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.398f5ad6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.37834ed9.js";import"./V-Message.vue_vue&type=script&setup=true&lang.169dc9fd.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.ed4ec558.js";import"./navbarLayoutState.ed67ddfb.js";import"./video.e503358c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.21759115.js";import"./darkModeState.8b61e731.js";import"./AnimatedLogo.527cfb51.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.b806e884.js";import"./V-Block.vue_vue&type=script&setup=true&lang.88bfc070.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.be986058.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ccb3f0bf.js";const _={class:"page-content-inner"};var V=s({expose:[],setup(s){const V=a();c.value="Edit Discipline",p({title:"Disciplines"});const x=r(!0);return i((()=>{f(b.value),d(),m().then((e=>{x.value=!1})),g(V.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?j(b.value,"status").model=["status"]:j(b.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{j(b.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{j(b.value,"trainers").model.push(e.staffs_id)})):y(b,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return u(),o(r,null,{default:n((()=>[l(" Content Wrapper "),v("div",_,[v(p,{type:"edit","is-loading":x.value},null,8,["is-loading"])])])),_:1})}}});export default V;
