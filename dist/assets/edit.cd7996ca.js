import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.5fb2bb74.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c58d0b00.js";import{d as a,O as s,H as r,o as p,h as u,P as o,a6 as i,j as n,k as v}from"./vendor.19da945b.js";import{p as d}from"./sidebarLayoutState.5b7e9825.js";import{i as c,a as l,p as m}from"./Companies.fb190344.js";import{e as j,c as y,s as f,d as g}from"./config.0e12de9a.js";import{a as _,s as b,p as V,h as x,n as S,e as h}from"./index.1d7f2af1.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import"./V-Placeload.b34646d0.js";import"./V-Control.0fd8783e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.fb54e505.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b1bf75d6.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.34a87e91.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e53206c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dcd607f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.fe212a1d.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.b04b1648.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.06155cf7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.34023ae5.js";import"./useDropdown.1ca217ec.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import"./V-Dropdown.0bed1217.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e4a5434e.js";import"./activePanelState.8ece22de.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.84814204.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import"./V-Message.vue_vue&type=script&setup=true&lang.2369e680.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.978fec7a.js";import"./navbarLayoutState.17611508.js";import"./video.1d4909e1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.5fb2b479.js";import"./darkModeState.0ffb262a.js";import"./AnimatedLogo.0ab862f3.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9996a98c.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d8c448b1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5f93fd07.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.222d1a7f.js";const L={class:"page-content-inner"};var P=a({expose:[],setup(a){const P=i();d.value="Edit Locations",s({title:"Locations"});const k=o();r((()=>{null!=k.query.id&&(j().then((e=>{_(c,"city_id",y.value),_(c,"state_id",f.value),_(c,"country_id",g.value)})),l(k.query.id).then((e=>{for(var t in console.log(e.data),e.data)b(c,t,"status"==t?1==e.data[t]?"status":[]:e.data[t])})))}));const C=()=>{const e=V(c.value),t=new FormData;for(var a in e)t.append(a,e[a]);x.value||m(k.query.id,t).then((e=>{if(e.data.status)S.success("Succeeded"),h(c.value),P.back();else for(var t in S.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{S.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,o=t;return p(),u(o,null,{default:n((()=>[v("div",L,[v(r,{type:"edit",onSaveData:C})])])),_:1})}}});export default P;