import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.02b2348e.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.52ffe1d6.js";import{d as a,O as s,H as r,o as p,h as o,aa as u,P as i,j as n,k as c}from"./vendor.41bfc188.js";import{p as v}from"./sidebarLayoutState.454c18d7.js";import{i as d,s as l}from"./Companies.f2733f75.js";import{e as m,c as f,s as j,d as y}from"./config.40482d91.js";import{a as _,p as g,h as b,n as V,e as x}from"./index.6cb589a0.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import"./V-Placeload.f8b8ec60.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.066d1ccf.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8f956119.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{_(d,"city_id",f.value),_(d,"state_id",j.value),_(d,"country_id",y.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
