import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.2cda9ba9.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f5884ae1.js";import{d as a,O as s,H as r,o,h as p,P as u,aa as i,j as n,k as d}from"./vendor.41bfc188.js";import{p as c}from"./sidebarLayoutState.454c18d7.js";import{i as v,b as l,p as m}from"./Companies.81c401cf.js";import{e as f,c as j,s as y,d as g}from"./config.5dd7ea5b.js";import{a as _,s as b,p as V,h as x,n as h,e as S}from"./index.73a6d93b.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import"./V-Placeload.f8b8ec60.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.066d1ccf.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c86ababc.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();c.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(f().then((e=>{_(v,"city_id",j.value),_(v,"state_id",y.value),_(v,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(v,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(v.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),S(v.value),P.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[d("div",L,[d(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;
