import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.d05b7a4e.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.55b319c3.js";import{d as a,O as s,H as r,o as p,h as u,a6 as o,P as i,j as n,k as v}from"./vendor.19da945b.js";import{p as c}from"./sidebarLayoutState.5b7e9825.js";import{i as d,s as l}from"./Companies.e19c0242.js";import{e as m,c as j,s as y,d as f}from"./config.81b8baa8.js";import{a as g,p as _,h as b,n as V,e as x}from"./index.1986d795.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import"./V-Placeload.b34646d0.js";import"./V-Control.0fd8783e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.fb54e505.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b1bf75d6.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.34a87e91.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e53206c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dcd607f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.fe212a1d.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.b04b1648.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.06155cf7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.645048f9.js";import"./useDropdown.1ca217ec.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import"./V-Dropdown.0bed1217.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e4a5434e.js";import"./activePanelState.8ece22de.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f7b76d8b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import"./V-Message.vue_vue&type=script&setup=true&lang.2369e680.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.978fec7a.js";import"./navbarLayoutState.f4449eea.js";import"./video.1d4909e1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.5fb2b479.js";import"./darkModeState.0ffb262a.js";import"./AnimatedLogo.0ab862f3.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9996a98c.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d8c448b1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5f93fd07.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.222d1a7f.js";const S={class:"page-content-inner"};var L=a({expose:[],setup(a){const L=o();c.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{g(d,"city_id",j.value),g(d,"state_id",y.value),g(d,"country_id",f.value)}))}));const h=()=>{const e=_(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),L.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,o=t;return p(),u(o,null,{default:n((()=>[v("div",S,[v(r,{type:"create",onSaveData:h})])])),_:1})}}});export default L;
