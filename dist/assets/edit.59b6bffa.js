import{_ as t}from"./productForm.vue_vue&type=style&index=0&lang.b4321386.js";import{_ as e}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f7a67280.js";import{d as s,P as a,O as r,o as p,i as o,j as u,k as i,I as n,l as c}from"./vendor.b96c0b62.js";import{p as d}from"./sidebarLayoutState.a7097173.js";import{a as v,f as l}from"./Companies.8caab400.js";import{a as m,s as f}from"./index.767fa190.js";import{i as j,a as y,b as g}from"./Products.75d12a25.js";import{f as _}from"./config.fb031bb0.js";import"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import"./V-Placeload.43c61814.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import"./V-Control.9f6b030b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.905c9e6e.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.56799f3f.js";import"./useDropdown.51b21268.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";const b={class:"page-content-inner"};var V=s({expose:[],setup(s){d.value="New Product",a({title:"Products"});const V=r();return p((()=>{v().then((t=>{m(j,"locations",l.value)})),_().then((t=>{m(j,"taxes_id",t.value)})),y().then((t=>{m(j,"product_categories_id",t.data)})),g(V.query.id).then((t=>{for(var e in t.data)if("status"==e)"active"==t.data[e]?f(j,"status",!0):f(j,"status",!1);else if("locations"==e){let s=[];t.data[e].forEach((t=>{s.push(t.locations_id)})),f(j,e,s)}else f(j,e,t.data[e]);console.log("inputsProducts",j.value)}))})),(s,a)=>{const r=t,p=e;return o(),u(p,null,{default:i((()=>[n(" Content Wrapper "),c("div",b,[c(r,{type:"edit"})])])),_:1})}}});export default V;
