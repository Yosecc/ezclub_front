import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.8067a4fb.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c80d93e3.js";import{d as a,a9 as s,P as r,O as p,I as o,o as u,i,j as n,H as c,k as d}from"./vendor.073d5183.js";import{p as v}from"./sidebarLayoutState.e4d5b56e.js";import{i as l,b as m,p as j}from"./Companies.ca72e995.js";import{e as y,c as f,s as g,d as _}from"./config.5caea121.js";import{a as b,s as V,p as x,h as S,n as h,e as L}from"./index.845d558b.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.e733a91e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import"./V-Placeload.4695e536.js";import"./V-Control.37224b15.js";import"./V-Field.vue_vue&type=script&setup=true&lang.4e36ac54.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b631b135.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.29e348bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.662fbc8e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.24389008.js";import"./formLayaut.vue_vue&type=style&index=0&lang.8b612603.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.adff0cc1.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.ef092ab3.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.038e68d0.js";import"./useDropdown.c13972ea.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b94da949.js";import"./V-Dropdown.3dc4bc24.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.b93971f9.js";import"./activePanelState.c5eca1d9.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cc1307cb.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6f7fb019.js";import"./video.969d11fd.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.8493da55.js";import"./darkModeState.1faec688.js";import"./AnimatedLogo.1cc94f36.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9e6a0d72.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e2f5126f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.dc4fcfa1.js";import"./userPopovers.f4b9fc60.js";const P={class:"page-content-inner"};var C=a({expose:[],setup(a){const C=s();v.value="Edit Locations",r({title:"Locations"});const k=p();o((()=>{null!=k.query.id&&(y().then((e=>{b(l,"city_id",f.value),b(l,"state_id",g.value),b(l,"country_id",_.value)})),m(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)V(l,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const w=()=>{const e=x(l.value),t=new FormData;for(var a in e)t.append(a,e[a]);S.value||j(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),L(l.value),C.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,p=t;return u(),i(p,null,{default:n((()=>[c(" Content Wrapper "),d("div",P,[d(r,{type:"edit",onSaveData:w})])])),_:1})}}});export default C;
