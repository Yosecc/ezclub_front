import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.589b7465.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27dfac85.js";import{d as s,L as a,r,H as p,o as i,i as o,j as u,G as n,k as l}from"./vendor.512b7acb.js";import{b as c,d as m}from"./Companies.29e83f59.js";import{f as d,t as v}from"./config.f7f12d30.js";import{d as f,a as j,s as y,g}from"./index.839b10d7.js";import{g as _,r as b}from"./Recurrences.c702e7d3.js";import{i as V,b as h}from"./Memberships.4b071989.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.aa5c0d97.js";import"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import"./V-Placeload.982e0955.js";import"./V-Control.5136ae9f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5cc17432.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.65c51667.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b069e1cd.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.46f55814.js";import"./formLayaut.vue_vue&type=style&index=0&lang.0872bfe2.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.82fbf6e3.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.2808a08d.js";import"./Diciplines.19ed18a4.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.b8ef0579.js";import"./useDropdown.10df4d81.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.471307b0.js";import"./V-Dropdown.b805b674.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f78f5288.js";import"./activePanelState.53d13aa7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.33cb9875.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.8ff326ca.js";import"./V-Message.vue_vue&type=script&setup=true&lang.4f410568.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.14f85ffe.js";import"./navbarLayoutState.3b049ce0.js";import"./sidebarLayoutState.08ab8119.js";import"./video.81ca49e0.js";import"./darkModeState.8ae54720.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c6af2930.js";import"./AnimatedLogo.afd186e6.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33fcd2c5.js";import"./V-Block.vue_vue&type=script&setup=true&lang.7ac5b30d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9114be65.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.9d07b6d1.js";const x={class:"page-content-inner"};var L=s({expose:[],setup(s){const L=a(),S=r(!0);return p((()=>{let e=["all_diciplines"];f(V.value.filter((t=>!e.includes(t.name)))),d().then((()=>{j(V,"taxes_id",v)})),c().then((()=>{j(V,"locations",m)})),_().then((()=>{j(V,"amounts",b);let e={};b.value.forEach((t=>{e[t.id]=""})),y(V,"amounts",e),S.value=!1,h(L.query.id).then((e=>{for(var t in e.data)"amounts"==t?e.data[t].forEach((e=>{g(V.value,"amounts").model[e.recurrences_id]=e.amount})):"locations"==t?(g(V.value,"locations").model=[],e.data[t].forEach((e=>{g(V.value,"locations").model.push(e.companies_locations_id)}))):"membership_diciplines"==t?e.data[t].forEach((e=>{g(V.value,"diciplines").model.push(e.diciplines_id)})):y(V,t,e.data[t])}))}))})),(s,a)=>{const r=e,p=t;return i(),o(p,null,{default:u((()=>[n(" Content Wrapper "),l("div",x,[l(r,{"is-loading":S.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default L;
