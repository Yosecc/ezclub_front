import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.0767d47c.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.da156ba3.js";import{d as s,O as a,L as r,H as p,o as u,i as o,j as i,G as n,k as c}from"./vendor.0b0c2a98.js";import{p as v}from"./sidebarLayoutState.80702fa9.js";import{b as d,d as l}from"./Companies.03cc5ca3.js";import{a as m,s as j}from"./index.2e49ceae.js";import{i as f,a as y,b}from"./Products.ca403007.js";import{f as g}from"./config.41037f45.js";import"./V-Button.vue_vue&type=script&setup=true&lang.1a9fba1b.js";import"./V-Placeload.1f25c7c6.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e9f9f5bb.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.996de933.js";import"./V-Control.f5455229.js";import"./V-Field.vue_vue&type=script&setup=true&lang.676297a2.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80c67c71.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.8b9bb15d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.b96d8270.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.3772eeb5.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.37834ed9.js";import"./V-Card.vue_vue&type=script&setup=true&lang.6199c77d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.6926d818.js";import"./useDropdown.ed8b3065.js";import"./V-Dropdown.78d32424.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.fb8eb841.js";import"./activePanelState.8fe80399.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.adb17f0e.js";import"./V-Message.vue_vue&type=script&setup=true&lang.169dc9fd.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.ed4ec558.js";import"./navbarLayoutState.8180f86d.js";import"./video.e503358c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.21759115.js";import"./darkModeState.8b61e731.js";import"./AnimatedLogo.527cfb51.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.b806e884.js";import"./V-Block.vue_vue&type=script&setup=true&lang.88bfc070.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.be986058.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ccb3f0bf.js";const _={class:"page-content-inner"};var V=s({expose:[],setup(s){v.value="New Product",a({title:"Products"});const V=r();return p((()=>{d().then((e=>{m(f,"locations",l.value)})),g().then((e=>{m(f,"taxes_id",e.value)})),y().then((e=>{m(f,"product_categories_id",e.data)})),b(V.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?j(f,"status",!0):j(f,"status",!1);else if("locations"==t){let s=[];e.data[t].forEach((e=>{s.push(e.locations_id)})),j(f,t,s)}else j(f,t,e.data[t]);console.log("inputsProducts",f.value)}))})),(s,a)=>{const r=e,p=t;return u(),o(p,null,{default:i((()=>[n(" Content Wrapper "),c("div",_,[c(r,{type:"edit"})])])),_:1})}}});export default V;
