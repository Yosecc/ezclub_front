import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.d7cb543a.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.89cc6b21.js";import{d as a,L as s,O as p,r,H as i,o as u,i as o,j as n,G as l,k as c}from"./vendor.512b7acb.js";import{p as v}from"./sidebarLayoutState.08ab8119.js";import{b as d}from"./Companies.153102da.js";import{h as m}from"./Staffs.8d9da3eb.js";import{d as j,g as f,s as y}from"./index.fa2868cb.js";import{i as g,c as _}from"./Diciplines.39f84b46.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.b5a3a3a2.js";import"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import"./V-Placeload.982e0955.js";import"./V-Control.5136ae9f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5cc17432.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.65c51667.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b069e1cd.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.ba945660.js";import"./formLayaut.vue_vue&type=style&index=0&lang.7c51b340.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.2808a08d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.913acdcb.js";import"./useDropdown.10df4d81.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.471307b0.js";import"./V-Dropdown.b805b674.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f78f5288.js";import"./activePanelState.53d13aa7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.65aad7e6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.8ff326ca.js";import"./V-Message.vue_vue&type=script&setup=true&lang.4f410568.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.14f85ffe.js";import"./navbarLayoutState.a9abea7f.js";import"./video.81ca49e0.js";import"./darkModeState.8ae54720.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c6af2930.js";import"./AnimatedLogo.afd186e6.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33fcd2c5.js";import"./V-Block.vue_vue&type=script&setup=true&lang.7ac5b30d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9114be65.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.9d07b6d1.js";const b={class:"page-content-inner"};var V=a({expose:[],setup(a){const V=s();v.value="Edit Discipline",p({title:"Disciplines"});const x=r(!0);return i((()=>{j(g.value),d(),m().then((e=>{x.value=!1})),_(V.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?f(g.value,"status").model=["status"]:f(g.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{f(g.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{f(g.value,"trainers").model.push(e.staffs_id)})):y(g,t,e.data[t])}))})),(a,s)=>{const p=e,r=t;return u(),o(r,null,{default:n((()=>[l(" Content Wrapper "),c("div",b,[c(p,{type:"edit","is-loading":x.value},null,8,["is-loading"])])])),_:1})}}});export default V;
