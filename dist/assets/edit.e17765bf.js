import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.8f5688b4.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.49f33864.js";import{d as a,P as s,O as r,I as p,o,i as u,j as i,H as n,k as c}from"./vendor.d343baf9.js";import{p as v}from"./sidebarLayoutState.5641ebe1.js";import{b as l,e as d}from"./Companies.984ea600.js";import{a as m,s as f}from"./index.c9faec89.js";import{i as j,a as y,b as g}from"./Products.3214bf9c.js";import{f as _}from"./config.915c9788.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f850d095.js";import"./V-Placeload.9f0459f0.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ace90716.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.ec9ca61e.js";import"./V-Control.41ba379d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c73a2a5f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.66ed88a9.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.50c44f0e.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.90661a21.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a76a96a0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.7f9fb723.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1a6ab0fe.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.aef3e716.js";import"./useDropdown.058e23b5.js";import"./V-Dropdown.7efd21c7.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.28f32a22.js";import"./activePanelState.5861ca88.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.63db2abf.js";import"./video.f7ef545f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f3fcc4ea.js";import"./darkModeState.423a928c.js";import"./AnimatedLogo.3101fbee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.8b6033b6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.606db9d9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35a108.js";import"./userPopovers.f4b9fc60.js";const b={class:"page-content-inner"};var V=a({expose:[],setup(a){v.value="New Product",s({title:"Products"});const V=r();return p((()=>{l().then((e=>{m(j,"locations",d.value)})),_().then((e=>{m(j,"taxes_id",e.value)})),y().then((e=>{m(j,"product_categories_id",e.data)})),g(V.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?f(j,"status",!0):f(j,"status",!1);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),f(j,t,a)}else f(j,t,e.data[t]);console.log("inputsProducts",j.value)}))})),(a,s)=>{const r=e,p=t;return o(),u(p,null,{default:i((()=>[n(" Content Wrapper "),c("div",b,[c(r,{type:"edit"})])])),_:1})}}});export default V;
