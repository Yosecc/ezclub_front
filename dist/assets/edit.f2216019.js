import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.b4511feb.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e08d02df.js";import{d as s,O as a,o as r,h as p,i as o,P as u,k as i,l as n}from"./vendor.3e3390b7.js";import{p as c}from"./sidebarLayoutState.46d3c8c9.js";import{a as d,f as v}from"./Companies.3008024c.js";import{a as l,s as m}from"./index.c1337d84.js";import{i as f,a as j,b as y}from"./Products.ca5f145f.js";import{f as g}from"./config.991304f8.js";import"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import"./V-Placeload.f3ddf6cd.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.098ca06a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d7be9bd2.js";import"./useDropdown.fb013c95.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){c.value="New Product",a({title:"Products"});const b=u();return r((()=>{d().then((e=>{l(f,"locations",v.value)})),g().then((e=>{l(f,"taxes_id",e.value)})),j().then((e=>{l(f,"product_categories_id",e.data)})),y(b.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?m(f,"status",!0):m(f,"status",!1);else if("locations"==t){let s=[];e.data[t].forEach((e=>{s.push(e.locations_id)})),m(f,t,s)}else m(f,t,e.data[t]);console.log("inputsProducts",f.value)}))})),(s,a)=>{const r=e,u=t;return p(),o(u,null,{default:i((()=>[n("div",_,[n(r,{type:"edit"})])])),_:1})}}});export default b;