import{_ as e}from"./productForm.vue_vue&type=style&index=0&lang.5f1e5f3e.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.658f7d6b.js";import{d as s,z as a,A as r,o as p,h as o,B as u,j as i,k as n}from"./vendor.4ba27c77.js";import{p as c}from"./sidebarLayoutState.55cd5050.js";import{a as d,d as v}from"./Companies.348315e6.js";import{s as l,a as m}from"./ActivityPanel.vue_vue&type=style&index=0&lang.f7592d78.js";import{i as f,a as j,b as y}from"./Products.6ebd15a5.js";import{f as g}from"./config.af04cec7.js";import"./V-Button.vue_vue&type=script&setup=true&lang.5f9c764e.js";import"./V-Placeload.adf21333.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac975f99.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.3d5a19bf.js";import"./index.43edf206.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.5fe41f63.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.99b1f6f5.js";import"./V-Message.vue_vue&type=script&setup=true&lang.df5cb107.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.25b4aa80.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e0d63001.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.fcf68654.js";import"./navbarLayoutState.860c98f9.js";import"./V-Dropdown.ea48537b.js";import"./useDropdown.c23e5449.js";import"./video.9e077ad4.js";import"./activePanelState.f03c5b9d.js";import"./darkModeState.3898067a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.8098016a.js";import"./AnimatedLogo.8b77bee1.js";import"./V-Control.030725e1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.23d307a9.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e369e531.js";import"./V-Block.vue_vue&type=script&setup=true&lang.b193ddb2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.44fd60ce.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.46dc5620.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.120483b5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7aa5a07a.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./fastpizza.c9124eb0.js";const _={class:"page-content-inner"};var b=s({expose:[],setup(s){c.value="New Product",a({title:"Products"});const b=u();return r((()=>{d().then((e=>{l(f,"locations",v.value)})),g().then((e=>{l(f,"taxes_id",e.value)})),j().then((e=>{l(f,"product_categories_id",e.data)})),y(b.query.id).then((e=>{for(var t in e.data)if("status"==t)"active"==e.data[t]?m(f,"status",!0):m(f,"status",!1);else if("locations"==t){let s=[];e.data[t].forEach((e=>{s.push(e.locations_id)})),m(f,t,s)}else m(f,t,e.data[t]);console.log("inputsProducts",f.value)}))})),(s,a)=>{const r=e,u=t;return p(),o(u,null,{default:i((()=>[n("div",_,[n(r,{type:"edit"})])])),_:1})}}});export default b;
