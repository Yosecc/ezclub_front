import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.0188511c.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.22f88900.js";import{d as a,O as s,o as r,h as p,i as o,ab as u,P as i,k as n,l as c}from"./vendor.b43d5946.js";import{p as v}from"./sidebarLayoutState.0e0214cd.js";import{i as d,d as l}from"./Companies.2e825b49.js";import{e as m,c as f,s as j,d as y}from"./config.68ac2c01.js";import{a as _,p as g,h as b,n as V,e as x}from"./index.87d4477d.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.65eea50d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.af6d6e1f.js";import"./V-Placeload.f49c87c1.js";import"./V-Control.af2aba53.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6dd2fdc7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.611dfb74.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.18b88a36.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.8008f57c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.33b246e2.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3e328cbe.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.429db7ee.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d02bd300.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.fc44684f.js";import"./useDropdown.13fbf150.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.aa6c719b.js";import"./V-Dropdown.af8b8ce0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a5a51296.js";import"./activePanelState.fc83f415.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.9988cf02.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.3635de8f.js";import"./video.d2a65d22.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f0b7309b.js";import"./darkModeState.f17b0c9a.js";import"./AnimatedLogo.0dc817d8.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.1d910296.js";import"./V-Block.vue_vue&type=script&setup=true&lang.61639f04.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e9114c30.js";import"./userPopovers.f4b9fc60.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{_(d,"city_id",f.value),_(d,"state_id",j.value),_(d,"country_id",y.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
