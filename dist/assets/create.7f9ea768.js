import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.21a19eb7.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.50ffd65d.js";import{d as a,O as s,o as r,h as p,i as o,ac as u,P as i,k as n,l as c}from"./vendor.5900a5e9.js";import{p as v}from"./sidebarLayoutState.46a7a7b4.js";import{i as d,d as l}from"./Companies.5c5a8844.js";import{e as m,c as f,s as j,d as y}from"./config.b1c5a6df.js";import{a as _,p as g,h as b,n as V,e as x}from"./index.16a56777.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.dd846f77.js";import"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import"./V-Placeload.587d3033.js";import"./V-Control.e6c5ff74.js";import"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a5136f39.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0d618a83.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6cba1bd2.js";import"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import"./formLayaut.vue_vue&type=style&index=0&lang.55893cfa.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4aaf2044.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.14a038cf.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c64ce976.js";import"./useDropdown.52632823.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bd3d0e81.js";import"./V-Dropdown.e1ce4f1b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1def27b8.js";import"./activePanelState.f79aea14.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a4cbd523.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.e475383e.js";import"./video.e1f95447.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.44a9072c.js";import"./darkModeState.2151b6b7.js";import"./AnimatedLogo.ec05a80c.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5b14f2f7.js";import"./V-Block.vue_vue&type=script&setup=true&lang.67c026d4.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.eaee0492.js";import"./userPopovers.f4b9fc60.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{_(d,"city_id",f.value),_(d,"state_id",j.value),_(d,"country_id",y.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:n((()=>[c("div",S,[c(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;
