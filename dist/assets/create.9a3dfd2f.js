import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.476cdb6c.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.02a6ae8d.js";import{d as a,I as s,G as r,o as p,h as o,a2 as u,J as i,j as c,k as n}from"./vendor.020847a3.js";import{p as v}from"./sidebarLayoutState.b80e4aa7.js";import{i as d,s as l}from"./Companies.3fb82902.js";import{e as m,c as j,s as y,d as f}from"./config.569250df.js";import{a as b,p as g,h as _,n as V,c as x}from"./index.1c4602e1.js";import"./formLayaut.vue_vue&type=style&index=0&lang.853d6f33.js";import"./V-Placeload.643ab16e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a2676413.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4942b14b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7e9c5294.js";import"./useDropdown.dab445c8.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.0d774617.js";import"./V-Dropdown.c24aed71.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a38ed7e8.js";import"./activePanelState.570bd0f8.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6b6e3edd.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.8ca56bab.js";import"./V-Message.vue_vue&type=script&setup=true&lang.7bfdd0eb.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0dd88ca7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.27893404.js";import"./navbarLayoutState.f8e26459.js";import"./video.f966c499.js";import"./darkModeState.1bd2c1f2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cf85c95a.js";import"./AnimatedLogo.d1752403.js";import"./V-Control.d0a1f920.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6be6c11f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33a8aac4.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e07d9ced.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.57cbc3a5.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.f1fbccad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b2bcd2ae.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a4ce6817.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{b(d,"city_id",j.value),b(d,"state_id",y.value),b(d,"country_id",f.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);_.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:c((()=>[n("div",S,[n(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
