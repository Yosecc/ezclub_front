import{_ as e}from"./disciplinesForm.vue_vue&type=style&index=0&lang.bfbb65c6.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.46761ad3.js";import{d as s,y as a,r as p,z as r,o as i,h as o,A as u,j as n,k as l}from"./vendor.685e53b0.js";import{p as v}from"./sidebarLayoutState.b1e70c1b.js";import{c,d as m,f as d,a as f}from"./Companies.27240485.js";import{h as j}from"./Staffs.1bae2333.js";import{i as y,c as g}from"./Diciplines.7d36a97f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.efe54a19.js";import"./V-Placeload.e1b5c41e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.fc314ba9.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.e57f1a66.js";import"./useDropdown.0a27f828.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.119fc4d3.js";import"./V-Dropdown.4b56e22f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7327817.js";import"./index.6232fcd1.js";import"./activePanelState.618a6e66.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.acdd413a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.62f4b657.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8a404c76.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.5d7a09f8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import"./navbarLayoutState.00429138.js";import"./video.89824664.js";import"./darkModeState.ac572066.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.7abfdf0e.js";import"./AnimatedLogo.77bc3feb.js";import"./V-Control.2f65f00c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0d63a362.js";import"./V-Block.vue_vue&type=script&setup=true&lang.218e9dd3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9f34b4f7.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.0749519e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){const b=u();v.value="Edit Discipline",a({title:"Disciplines"});const V=p(!0);return r((()=>{c(y.value),m(),j().then((e=>{V.value=!1})),g(b.query.id).then((e=>{for(var t in e.data)"status"==t?1==e.data[t]?d(y.value,"status").model=["status"]:d(y.value,"status").model=[]:"locations"==t?e.data[t].forEach((e=>{d(y.value,"locations").model.push(e.companies_locations_id)})):"diciplines_staffs"==t?e.data[t].forEach((e=>{d(y.value,"trainers").model.push(e.staffs_id)})):f(y,t,e.data[t])}))})),(s,a)=>{const p=e,r=t;return i(),o(r,null,{default:n((()=>[l("div",_,[l(p,{type:"edit","is-loading":V.value},null,8,["is-loading"])])])),_:1})}}});export default b;
