import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.10c92263.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8ee88925.js";import{d as a,y as s,z as r,o as p,h as u,A as o,j as i,k as n}from"./vendor.d1a3c89d.js";import{p as c}from"./sidebarLayoutState.a11d51b9.js";import{a as d,d as v}from"./Companies.449438e9.js";import{s as l,a as m}from"./index.5b8a83ef.js";import{i as j,a as f,b as y}from"./Products.ea5e92b1.js";import{f as g}from"./config.696a571e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import"./V-Placeload.b897843c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d3b6617e.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fa5e9da0.js";import"./V-Card.vue_vue&type=script&setup=true&lang.affa0552.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.9d8360fa.js";import"./useDropdown.c66a6279.js";import"./V-Dropdown.0747f2f0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e9b51ce1.js";import"./activePanelState.a69051ae.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.5d1c7dad.js";import"./V-Message.vue_vue&type=script&setup=true&lang.21ae8775.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c7a6a0a8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e6f3ce98.js";import"./navbarLayoutState.fb3b7d43.js";import"./video.d77d6f43.js";import"./darkModeState.a5b4739a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.60378128.js";import"./AnimatedLogo.95c4db45.js";import"./V-Control.61107fd4.js";import"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.32fadef6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.25e2a244.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2ff8f9c8.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.66536429.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7a5089bc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e028b39.js";const _={class:"page-content-inner"};var b=a({expose:[],setup(a){c.value="New Product",s({title:"Products"});const b=o();return r((()=>{d().then((e=>{l(j,"locations",v.value)})),g().then((e=>{l(j,"taxes_id",e.value)})),f().then((e=>{l(j,"product_categories_id",e.data)})),y(b.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?m(j,"status",!0):m(j,"status",!1);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),m(j,t,a)}else m(j,t,e.data[t]);console.log("inputsProducts",j.value)}))})),(a,s)=>{const r=e,o=t;return p(),u(o,null,{default:i((()=>[n("div",_,[n(r,{type:"edit"})])])),_:1})}}});export default b;
