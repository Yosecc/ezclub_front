import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.397f88b3.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.20132096.js";import{d as s,O as a,r as p,H as r,o as i,h as u,P as o,j as n,k as l}from"./vendor.c210e0cb.js";import{p as d}from"./sidebarLayoutState.56e6ff2f.js";import{a as c}from"./Companies.a0ad3c72.js";import{h as v}from"./Staffs.bd6ad26d.js";import{e as m,g as f,s as j}from"./index.0dd75cf6.js";import{i as y,c as g}from"./Diciplines.688f39e2.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import"./V-Placeload.141ef784.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import"./formLayaut.vue_vue&type=style&index=0&lang.8e723d67.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b6c72e1b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7fec429f.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){const b=o();d.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{m(y.value),c(),v().then((e=>{V.value=!1})),g(b.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?f(y.value,"status").model=["status"]:f(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{f(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{f(y.value,"trainers").model.push(e.staffs_id)})):j(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),u(r,null,{default:n((()=>[l("div",_,[l(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default b;
