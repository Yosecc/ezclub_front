import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.7ecd5bd8.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c60a64ac.js";import{d as s,y as a,r as p,z as r,o as i,h as u,A as o,j as n,k as c}from"./vendor.42a295ea.js";import{p as d}from"./sidebarLayoutState.52178f66.js";import{a as l}from"./Companies.b849ea4f.js";import{h as v}from"./Staffs.31cccc8c.js";import{c as m,g as j,a as f}from"./index.d2859fa6.js";import{i as y,c as g}from"./Diciplines.12838c86.js";import"./formLayaut.vue_vue&type=style&index=0&lang.de409503.js";import"./V-Placeload.632826ef.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f7302fd6.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4e256e46.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.347d3264.js";import"./useDropdown.d90c2b4c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.05034d3a.js";import"./V-Dropdown.3b79d4cd.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.796e641d.js";import"./activePanelState.2211c9ac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.fbd52c8e.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import"./V-Message.vue_vue&type=script&setup=true&lang.29aa6339.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.18497c11.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.efd369c7.js";import"./navbarLayoutState.69d64d00.js";import"./video.0a3f5b0b.js";import"./darkModeState.d08d2b99.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.df39ff9a.js";import"./AnimatedLogo.d7113c02.js";import"./V-Control.c35d44b1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e8c1cc62.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e380e6f2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.965255fa.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.992cd783.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2c67469b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3856dadb.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.403db530.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){const b=o();d.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{m(y.value),l(),v().then((e=>{V.value=!1})),g(b.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?j(y.value,"status").model=["status"]:j(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{j(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{j(y.value,"trainers").model.push(e.staffs_id)})):f(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),u(r,null,{default:n((()=>[c("div",_,[c(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default b;