import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.8a96bba1.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ba1c4e11.js";import{d as a,O as s,o as r,h as p,i as o,ac as u,P as i,k as n,l as c}from"./vendor.3e3390b7.js";import{p as v}from"./sidebarLayoutState.46d3c8c9.js";import{i as d,d as l}from"./Companies.492667c4.js";import{e as m,c as f,s as j,d as y}from"./config.e7b8f1fe.js";import{a as _,p as g,h as b,n as V,e as x}from"./index.3cb8fbb0.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import"./V-Placeload.f3ddf6cd.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import"./formLayaut.vue_vue&type=style&index=0&lang.743216be.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.098ca06a.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.acc433da.js";import"./useDropdown.fb013c95.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{_(d,"city_id",f.value),_(d,"state_id",j.value),_(d,"country_id",y.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
