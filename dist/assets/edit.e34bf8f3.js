import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.a0533b25.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.fe5b8425.js";import{d as a,O as s,o as r,h as o,i as p,P as u,aa as i,k as n,l as d}from"./vendor.7d5213a2.js";import{p as c}from"./sidebarLayoutState.9426e5be.js";import{i as v,b as l,p as m}from"./Companies.83de6f65.js";import{e as f,c as y,s as j,d as g}from"./config.c427c926.js";import{a as _,s as b,p as V,h as x,n as h,e as S}from"./index.2a6b37df.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import"./V-Placeload.d3fba449.js";import"./V-Control.3e38bffa.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d6ccab4.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fa42be40.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.a80fc4a1.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a8dad8dd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import"./formLayaut.vue_vue&type=style&index=0&lang.567c3df7.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.8686426d.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.5d78dab1.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.1180adb8.js";import"./useDropdown.d4a254e8.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import"./V-Dropdown.9baccf1a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ba1cd7fa.js";import"./activePanelState.4e56e973.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ae744ca1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5baca42f.js";import"./video.fb469c9d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.ae0cfa5f.js";import"./darkModeState.6047be35.js";import"./AnimatedLogo.1618784f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.4761d136.js";import"./userPopovers.f4b9fc60.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();c.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(f().then((e=>{_(v,"city_id",y.value),_(v,"state_id",j.value),_(v,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(v,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(v.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)h.success("Succeeded"),S(v.value),P.back();else for(var t in h.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{h.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[d("div",L,[d(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;
