import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.3cbf900e.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.084e159c.js";import{d as a,y as s,z as r,o as p,h as o,B as u,A as i,j as n,k as c}from"./vendor.9b3dcac4.js";import{p as v}from"./sidebarLayoutState.f248b5df.js";import{i as d,s as l}from"./Companies.612c55ca.js";import{g as m,c as j,s as f,a as y}from"./config.ec631f27.js";import{s as g,p as _,h as b,n as V,c as x}from"./index.ce008232.js";import"./formLayaut.vue_vue&type=style&index=0&lang.97a3214d.js";import"./V-Placeload.c1ea57dd.js";import"./V-Button.vue_vue&type=script&setup=true&lang.75bfbbbd.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.243e6bbe.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.213b7b8a.js";import"./useDropdown.9e78c75e.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.fbee71d9.js";import"./V-Dropdown.a5ec7ba6.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.d7d70284.js";import"./activePanelState.361fa067.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ac867459.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.0a21f1c9.js";import"./V-Message.vue_vue&type=script&setup=true&lang.99710929.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1f69cb04.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2fea259d.js";import"./navbarLayoutState.9391fded.js";import"./video.4ec3e36a.js";import"./darkModeState.88cf3bf6.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.65a1d80b.js";import"./AnimatedLogo.d5741cf2.js";import"./V-Control.1394aaca.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8dbce097.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.59a18dd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.6846fe7f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9210e6fa.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.49de4d23.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.79bd5af3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6280e35f.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{g(d,"city_id",j.value),g(d,"state_id",f.value),g(d,"country_id",y.value)}))}));const L=()=>{const e=_(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
