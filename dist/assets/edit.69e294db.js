import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.7dccd98b.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.47545b30.js";import{d as a,O as s,H as r,o,h as p,P as u,a9 as i,j as n,k as c}from"./vendor.853b0a2b.js";import{p as d}from"./sidebarLayoutState.68347789.js";import{i as v,b as l,p as m}from"./Companies.454fa4b6.js";import{e as j,c as y,s as f,d as b}from"./config.1fb69cd1.js";import{a as g,s as _,p as V,h as x,n as h,e as S}from"./index.8f8c2b3e.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import"./V-Button.vue_vue&type=script&setup=true&lang.3174687b.js";import"./V-Placeload.54ed2d56.js";import"./V-Control.bab08fd1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.57862c84.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a423434c.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f868e188.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3d4964e7.js";import"./V-Card.vue_vue&type=script&setup=true&lang.13431cdb.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e2250c75.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.eae7234f.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.07dcabec.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2625c997.js";import"./useDropdown.9fd8f548.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.1fe405fc.js";import"./V-Dropdown.20b61679.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cddd26f6.js";import"./activePanelState.9b514b5d.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.eb4f08be.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import"./video.5be088fe.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.624ff565.js";import"./darkModeState.6f39e39b.js";import"./AnimatedLogo.e7829b2f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.36c68532.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ee7d7200.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5ca17476.js";import"./userPopovers.f4b9fc60.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();d.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(j().then((e=>{g(v,"city_id",y.value),g(v,"state_id",f.value),g(v,"country_id",b.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)_(v,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(v.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),S(v.value),P.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[c("div",L,[c(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;