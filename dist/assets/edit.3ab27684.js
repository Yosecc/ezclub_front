import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.059651f2.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.5b4b6e20.js";import{a as s,d as a}from"./Companies.8c109ea8.js";import{f as r,t as i}from"./config.b5eb5144.js";import{c as o,s as p,a as u,g as n}from"./index.88b8084c.js";import{g as c,r as l}from"./Recurrences.660c3ad0.js";import{i as m,a as d}from"./Memberships.b87eadce.js";import{d as v,r as f,z as j,o as y,h as g,A as _,j as b,k as h}from"./vendor.43011f2e.js";import"./formLayaut.vue_vue&type=style&index=0&lang.6c4cccad.js";import"./V-Placeload.1fc21f89.js";import"./V-Button.vue_vue&type=script&setup=true&lang.74b30255.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.83f9c995.js";import"./Diciplines.15da6e16.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8e9f3fd9.js";import"./useDropdown.7aea973c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.22baf8ef.js";import"./V-Dropdown.3c8fd6fe.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e0b1edfe.js";import"./activePanelState.9c864b87.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.700a0df8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.19e342ce.js";import"./V-Message.vue_vue&type=script&setup=true&lang.a51db370.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.d3111455.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e92b7ac3.js";import"./navbarLayoutState.2e75c5e4.js";import"./sidebarLayoutState.2ee4b9b3.js";import"./video.d21f8e37.js";import"./darkModeState.15767848.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.8c83f643.js";import"./AnimatedLogo.ad2ced16.js";import"./V-Control.30f0c4b9.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8b597476.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.fce52792.js";import"./V-Block.vue_vue&type=script&setup=true&lang.6fb31d94.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2dc0c640.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2e29e91f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.d186278c.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.db8ac076.js";const V={class:"page-content-inner"};var x=v({expose:[],setup(v){const x=_(),S=f(!0);return j((()=>{let e=["all_diciplines"];o(m.value.filter((t=>!e.includes(t.name)))),r().then((()=>{p(m,"taxes_id",i)})),s().then((()=>{p(m,"locations",a)})),c().then((()=>{p(m,"amounts",l);let e={};l.value.forEach((t=>{e[t.id]=""})),u(m,"amounts",e),S.value=!1,d(x.query.id).then((e=>{for(var t in e.data)"amounts"==t?e.data[t].forEach((e=>{n(m.value,"amounts").model[e.recurrences_id]=e.amount})):"locations"==t?(n(m.value,"locations").model=[],e.data[t].forEach((e=>{n(m.value,"locations").model.push(e.companies_locations_id)}))):"membership_diciplines"==t?e.data[t].forEach((e=>{n(m.value,"diciplines").model.push(e.diciplines_id)})):u(m,t,e.data[t])}))}))})),(s,a)=>{const r=e,i=t;return y(),g(i,null,{default:b((()=>[h("div",V,[h(r,{"is-loading":S.value,type:"edit"},null,8,["is-loading"])])])),_:1})}}});export default x;
