import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.91840735.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.100a6a71.js";import{d as s,O as a,r as p,H as r,o as i,h as u,P as o,j as n,k as l}from"./vendor.41bfc188.js";import{p as d}from"./sidebarLayoutState.454c18d7.js";import{a as c}from"./Companies.90875bf9.js";import{h as v}from"./Staffs.5e76ac22.js";import{e as m,g as f,s as j}from"./index.1a366333.js";import{i as y,c as g}from"./Diciplines.9f962cac.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import"./V-Placeload.f8b8ec60.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import"./formLayaut.vue_vue&type=style&index=0&lang.7cfff405.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.066d1ccf.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.193ae945.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){const b=o();d.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{m(y.value),c(),v().then((e=>{V.value=!1})),g(b.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?f(y.value,"status").model=["status"]:f(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{f(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{f(y.value,"trainers").model.push(e.staffs_id)})):j(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),u(r,null,{default:n((()=>[l("div",_,[l(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default b;
