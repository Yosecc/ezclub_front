import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.965a77f7.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.5b40823f.js";import{d as a,O as s,H as r,o,h as p,P as u,aa as i,j as n,k as d}from"./vendor.5767c02e.js";import{p as v}from"./sidebarLayoutState.c56511ff.js";import{i as c,b as l,p as m}from"./Companies.74490ba2.js";import{e as f,c as j,s as y,d as g}from"./config.c0465da0.js";import{a as _,s as b,p as V,h as x,n as h,e as S}from"./index.3c66f81b.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import"./V-Button.vue_vue&type=script&setup=true&lang.386dddea.js";import"./V-Placeload.7bee3ecb.js";import"./V-Control.b7d7754b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.dedb284a.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fc0df7c0.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.25468f0d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.0f03dbf2.js";import"./V-Card.vue_vue&type=script&setup=true&lang.69c4989e.js";import"./formLayaut.vue_vue&type=style&index=0&lang.9b8144d8.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.97520a28.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.24ba0064.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.76d7d595.js";import"./useDropdown.9a90cff0.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e447a11e.js";import"./V-Dropdown.02e4adea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f92a1957.js";import"./activePanelState.a44bb85f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e45b24ed.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.2b1a2cd8.js";import"./video.48e91f43.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6512652b.js";import"./darkModeState.6890654d.js";import"./AnimatedLogo.f5f87178.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eaebe978.js";import"./V-Block.vue_vue&type=script&setup=true&lang.05f2e1a3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.ed6fa709.js";import"./userPopovers.f4b9fc60.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();v.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(f().then((e=>{_(c,"city_id",j.value),_(c,"state_id",y.value),_(c,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(c,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(c.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),S(c.value),P.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[d("div",L,[d(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;
