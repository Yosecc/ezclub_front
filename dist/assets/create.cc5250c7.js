import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.de488758.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a08069e8.js";import{d as a,L as s,G as r,o as p,h as u,a4 as o,O as i,j as n,k as c}from"./vendor.7d033f41.js";import{p as v}from"./sidebarLayoutState.66c24736.js";import{i as d,s as l}from"./Companies.e283cc7c.js";import{e as m,c as j,s as y,d as f}from"./config.19a3a647.js";import{a as g,p as _,h as b,n as V,e as x}from"./index.7194d1c1.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.87a4afde.js";import"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import"./V-Placeload.134a05d9.js";import"./V-Control.f3c0402c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.867c7ae8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.345ddd7c.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9e628ea0.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e7b64613.js";import"./formLayaut.vue_vue&type=style&index=0&lang.f9d94dfe.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e35c32c.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e6c5b514.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.beba5e13.js";import"./useDropdown.216b8c2e.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import"./V-Dropdown.fdfb8a5a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cb218406.js";import"./activePanelState.4624fcc4.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.15568ead.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fe421256.js";import"./V-Message.vue_vue&type=script&setup=true&lang.e3b595c4.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0ce2c394.js";import"./navbarLayoutState.035f5ae4.js";import"./video.3ed9ceae.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d069f918.js";import"./darkModeState.b2a23e7f.js";import"./AnimatedLogo.707bad0f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.336954e9.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.95b9c245.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.4e8b4716.js";const L={class:"page-content-inner"};var S=a({expose:[],setup(a){const S=o();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{g(d,"city_id",j.value),g(d,"state_id",y.value),g(d,"country_id",f.value)}))}));const h=()=>{const e=_(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),S.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,o=t;return p(),u(o,null,{default:n((()=>[c("div",L,[c(r,{type:"create",onSaveData:h})])])),_:1})}}});export default S;
