import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.4f3219f0.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8d78868c.js";import{d as a,ad as s,P as r,O as p,o,i as u,j as i,k as n,I as c,l as v}from"./vendor.84e48f7c.js";import{p as d}from"./sidebarLayoutState.bceb862d.js";import{i as l,d as m}from"./Companies.679555f4.js";import{e as j,c as y,s as f,d as _}from"./config.4c5cdc38.js";import{a as g,p as b,h as V,n as x,e as S}from"./index.5855fd6a.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import"./V-Placeload.8fe4e440.js";import"./V-Control.b8a16a92.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.cc314943.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3fa8e32c.js";import"./useDropdown.3858e0aa.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const C={class:"page-content-inner"};var L=a({expose:[],setup(a){const L=s();d.value="Create Locations",r({title:"Locations"}),p(),o((()=>{j().then((e=>{g(l,"city_id",y.value),g(l,"state_id",f.value),g(l,"country_id",_.value)}))}));const P=()=>{const e=b(l.value),t=new FormData;for(var a in e)t.append(a,e[a]);V.value||m(t).then((e=>{if(e.data.status)x.success("Succeeded"),S(l.value),L.back();else for(var t in x.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{x.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,p=t;return u(),i(p,null,{default:n((()=>[c(" Content Wrapper "),v("div",C,[v(r,{type:"create",onSaveData:P})])])),_:1})}}});export default L;