import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.bbaf7fe4.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ebc43b58.js";import{d as a,O as s,o as r,h as o,i as p,P as u,ad as i,k as n,l as c}from"./vendor.4454b83d.js";import{p as d}from"./sidebarLayoutState.66d5e66f.js";import{i as v,b as l,p as m}from"./Companies.de583021.js";import{e as y,c as f,s as j,d as g}from"./config.a7eb7f01.js";import{a as _,s as b,p as V,h as x,n as h,e as S}from"./index.fc85b2ef.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e9e50515.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.fb53b986.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();d.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(y().then((e=>{_(v,"city_id",f.value),_(v,"state_id",j.value),_(v,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(v,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(v.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),S(v.value),P.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[c("div",L,[c(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;
