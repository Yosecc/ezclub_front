import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.099150f2.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e509fcc.js";import{d as s,L as a,r as p,G as r,o as i,h as u,O as o,j as n,k as l}from"./vendor.19059cc4.js";import{p as c}from"./sidebarLayoutState.efc25bb1.js";import{b as v}from"./Companies.c782ca78.js";import{h as d}from"./Staffs.cc15c8e4.js";import{d as m,g as f,s as j}from"./index.baf361a5.js";import{i as y,c as g}from"./Diciplines.f0e1d61d.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.89489468.js";import"./V-Button.vue_vue&type=script&setup=true&lang.9233a2bf.js";import"./V-Placeload.72e6de58.js";import"./V-Control.e16eda34.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7ab7a74f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2af61529.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.47db5da5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.53f2a136.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3fe24cd0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.527b59b9.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d8328939.js";import"./useDropdown.63c50e3d.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf625c73.js";import"./V-Dropdown.fd74f7e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.4b194de7.js";import"./activePanelState.922a5593.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0cc73652.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6a87dd80.js";import"./V-Message.vue_vue&type=script&setup=true&lang.6b830a51.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.7cc10ad0.js";import"./navbarLayoutState.9c1af26a.js";import"./video.00981ddd.js";import"./darkModeState.192f5f6e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2089f3a0.js";import"./AnimatedLogo.496829ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.cc282596.js";import"./V-Block.vue_vue&type=script&setup=true&lang.bfd23873.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.8511020c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.a82f9e10.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){const b=o();c.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{m(y.value),v(),d().then((e=>{V.value=!1})),g(b.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?f(y.value,"status").model=["status"]:f(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{f(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{f(y.value,"trainers").model.push(e.staffs_id)})):j(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),u(r,null,{default:n((()=>[l("div",_,[l(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default b;
