import{_ as e}from"./locationsForm.vue_vue&type=style&index=0&lang.1d87e6eb.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.178ecd78.js";import{d as a,O as s,o as r,h as p,i as o,ab as u,P as i,k as c,l as n}from"./vendor.f6529162.js";import{p as v}from"./sidebarLayoutState.c8581ef5.js";import{i as d,d as l}from"./Companies.a3ac253c.js";import{e as m,c as f,s as j,d as y}from"./config.3941fa2c.js";import{a as _,p as g,h as b,n as V,e as x}from"./index.b92f974c.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.96926cc9.js";import"./V-Button.vue_vue&type=script&setup=true&lang.ab2fa679.js";import"./V-Placeload.fcff0d17.js";import"./V-Control.06dbdf31.js";import"./V-Field.vue_vue&type=script&setup=true&lang.2ea96b7e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.5bd41c94.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0af97236.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.eac658fd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.8f5cfc5d.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e30dbc14.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.fba9be02.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.9fc4f7df.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7b1ab903.js";import"./useDropdown.a8f2ccfd.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.136df1e4.js";import"./V-Dropdown.4da156b3.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.5a6bc84a.js";import"./activePanelState.cd1f34a1.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6bba97a1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5b52e0b2.js";import"./video.25f5791f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.40ec76ad.js";import"./darkModeState.2811143e.js";import"./AnimatedLogo.2166ccdf.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14426616.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ec12757f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.995d3c8c.js";import"./userPopovers.f4b9fc60.js";const S={class:"page-content-inner"};var h=a({expose:[],setup(a){const h=u();v.value="Create Locations",s({title:"Locations"}),i(),r((()=>{m().then((e=>{_(d,"city_id",f.value),_(d,"state_id",j.value),_(d,"country_id",y.value)}))}));const L=()=>{const e=g(d.value),t=new FormData;for(var a in e)t.append(a,e[a]);b.value||l(t).then((e=>{if(e.data.status)V.success("Succeeded"),x(d.value),h.back();else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))}))};return(a,s)=>{const r=e,u=t;return p(),o(u,null,{default:c((()=>[n("div",S,[n(r,{type:"create",onSaveData:L})])])),_:1})}}});export default h;