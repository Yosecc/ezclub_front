import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.7b98cb8a.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e509fcc.js";import{d as a,L as s,G as r,o as p,h as o,a4 as u,O as i,j as n,k as c}from"./vendor.19059cc4.js";import{p as v}from"./sidebarLayoutState.efc25bb1.js";import{i as d,s as l}from"./Companies.c782ca78.js";import{e as m,c as j,s as y,d as f}from"./config.b36841be.js";import{a as g,p as _,h as b,n as V,d as x}from"./index.baf361a5.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.89489468.js";import"./V-Button.vue_vue&type=script&setup=true&lang.9233a2bf.js";import"./V-Placeload.72e6de58.js";import"./V-Control.e16eda34.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7ab7a74f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2af61529.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.47db5da5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.53f2a136.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3fe24cd0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.527b59b9.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d8328939.js";import"./useDropdown.63c50e3d.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf625c73.js";import"./V-Dropdown.fd74f7e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.4b194de7.js";import"./activePanelState.922a5593.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0cc73652.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6a87dd80.js";import"./V-Message.vue_vue&type=script&setup=true&lang.6b830a51.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.7cc10ad0.js";import"./navbarLayoutState.9c1af26a.js";import"./video.00981ddd.js";import"./darkModeState.192f5f6e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2089f3a0.js";import"./AnimatedLogo.496829ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.cc282596.js";import"./V-Block.vue_vue&type=script&setup=true&lang.bfd23873.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.8511020c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.a82f9e10.js";const S={class:"page-content-inner"};var L=a({expose:[],setup(a){const L=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{g(d,"city_id",j.value),g(d,"state_id",y.value),g(d,"country_id",f.value)}))}));const h=()=>{const e=_(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),L.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:h})])])),_:1})}}});export default L;
