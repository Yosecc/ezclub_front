import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.acfceffc.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.23edd7aa.js";import{d as a,aa as s,P as r,O as p,o,i as u,j as i,k as n,I as d,l as c}from"./vendor.435948fe.js";import{p as v}from"./sidebarLayoutState.c7ec3620.js";import{i as l,b as m,p as j}from"./Companies.5246daaa.js";import{e as y,c as f,s as g,d as _}from"./config.2f9cdde3.js";import{a as b,s as V,p as x,h as S,n as h,e as L}from"./index.ff49a0f4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3be721db.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.e3659163.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.7e9f57de.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ec1ed57b.js";import"./useDropdown.9dc4bfe3.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import"./V-Dropdown.3004e9ea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./activePanelState.66f70896.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e4d5431d.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a5b69815.js";import"./video.413cf4d2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3a098275.js";import"./darkModeState.010a41bc.js";import"./AnimatedLogo.030703f2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import"./userPopovers.f4b9fc60.js";const P={class:"page-content-inner"};var C=a({expose:[],setup(a){const C=s();v.value="Edit Locations",r({title:"Locations"});const k=p();o((()=>{null!=k.query.id&&(y().then((e=>{b(l,"city_id",f.value),b(l,"state_id",g.value),b(l,"country_id",_.value)})),m(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)V(l,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const w=()=>{const e=x(l.value),t=new FormData;for(var a in e)t.append(a,e[a]);S.value||j(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),L(l.value),C.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,p=t;return u(),i(p,null,{default:n((()=>[d(" Content Wrapper "),c("div",P,[c(r,{type:"edit",onSaveData:w})])])),_:1})}}});export default C;
