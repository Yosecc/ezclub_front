import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.52525acb.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.6556914c.js";import{d as s,O as a,H as r,o as p,h as o,P as u,j as i,k as n}from"./vendor.41bfc188.js";import{p as d}from"./sidebarLayoutState.454c18d7.js";import{a as c,e as v}from"./Companies.e8851def.js";import{a as l,s as m}from"./index.4bf796d7.js";import{i as f,a as j,b as y}from"./Products.0ae5e103.js";import{f as g}from"./config.315a705e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import"./V-Placeload.f8b8ec60.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.066d1ccf.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.059712b8.js";import"./useDropdown.83054731.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){d.value="New Product",a({title:"Products"});const b=u();return r((()=>{c().then((e=>{l(f,"locations",v.value)})),g().then((e=>{l(f,"taxes_id",e.value)})),j().then((e=>{l(f,"product_categories_id",e.data)})),y(b.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?m(f,"status",!0):m(f,"status",!1);else if("locations"==t){let s=[];e.data[t].forEach((e=>{s.push(e.locations_id)})),m(f,t,s)}else m(f,t,e.data[t]);console.log("inputsProducts",f.value)}))})),(s,a)=>{const r=e,u=t;return p(),o(u,null,{default:i((()=>[n("div",_,[n(r,{type:"edit"})])])),_:1})}}});export default b;
