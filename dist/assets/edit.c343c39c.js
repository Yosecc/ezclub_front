import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.855894d1.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.349ce3ae.js";import{d as s,L as a,G as r,o as p,h as u,O as o,j as i,k as c}from"./vendor.c636f33b.js";import{p as n}from"./sidebarLayoutState.7607026f.js";import{b as v,d}from"./Companies.a7e7eb18.js";import{a as l,s as m}from"./index.7c0b1480.js";import{i as j,a as y,b as f}from"./Products.5fb56715.js";import{f as g}from"./config.25e10515.js";import"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import"./V-Placeload.c195e33d.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f70b005e.js";import"./V-Control.237cc4d1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.32e67a93.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d231cd7d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9c624faa.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0c1f8e0b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import"./V-Card.vue_vue&type=script&setup=true&lang.513c973c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.59849456.js";import"./useDropdown.35c6b80e.js";import"./V-Dropdown.2bdf3018.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";import"./activePanelState.8d6f746c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.be5804c0.js";import"./V-Message.vue_vue&type=script&setup=true&lang.085649cc.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.63bdcb05.js";import"./navbarLayoutState.05e3153b.js";import"./video.c58ada5a.js";import"./darkModeState.77580bb1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cce55643.js";import"./AnimatedLogo.a42abb6a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e5a3139a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.29ae6253.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.068e83d3.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1e8fe599.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){n.value="New Product",a({title:"Products"});const b=o();return r((()=>{v().then((e=>{l(j,"locations",d.value)})),g().then((e=>{l(j,"taxes_id",e.value)})),y().then((e=>{l(j,"product_categories_id",e.data)})),f(b.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?m(j,"status",!0):m(j,"status",!1);else if("locations"==t){let s=[];e.data[t].forEach((e=>{s.push(e.locations_id)})),m(j,t,s)}else m(j,t,e.data[t]);console.log("inputsProducts",j.value)}))})),(s,a)=>{const r=e,o=t;return p(),u(o,null,{default:i((()=>[c("div",_,[c(r,{type:"edit"})])])),_:1})}}});export default b;