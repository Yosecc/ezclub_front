import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.a3c4bb44.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.76ff9fed.js";import{d as a,I as s,G as r,o,h as p,J as u,a2 as i,j as n,k as c}from"./vendor.2054a2d2.js";import{p as d}from"./sidebarLayoutState.cfaf0763.js";import{i as v,a as l,p as m}from"./Companies.f2eb7ee0.js";import{e as j,c as y,s as f,d as g}from"./config.6cdb67d8.js";import{a as _,s as b,p as V,h as x,n as S,c as h}from"./index.8c434b3c.js";import"./formLayaut.vue_vue&type=style&index=0&lang.84e6db57.js";import"./V-Placeload.5867cb2a.js";import"./V-Button.vue_vue&type=script&setup=true&lang.1ccc60b1.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.f5308578.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.510c180b.js";import"./useDropdown.b94ed7fe.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.3ec6c8cb.js";import"./V-Dropdown.ff90eac2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.886826dd.js";import"./activePanelState.cdb63acf.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.7acae3ca.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5d37b18d.js";import"./V-Message.vue_vue&type=script&setup=true&lang.9e78ae66.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.6c5205c5.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e0b8e159.js";import"./navbarLayoutState.18f60985.js";import"./video.e86a6479.js";import"./darkModeState.9a3e9ff8.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d79dd735.js";import"./AnimatedLogo.43add9ed.js";import"./V-Control.f38832cb.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a08d1dac.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.c4ce5663.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8ad13f5d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.36272e7b.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.d0a8d940.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.66af2a95.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7b2e6a30.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();d.value="Edit Locations",s({title:"Locations"});const k=u();r((()=>{null!=k.query.id&&(j().then((e=>{_(v,"city_id",y.value),_(v,"state_id",f.value),_(v,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(v,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(v.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)S.success("Succeeded"),h(v.value),P.back();else for(var t in S.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{S.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return o(),p(u,null,{default:n((()=>[c("div",L,[c(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;
