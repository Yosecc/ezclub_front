var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,p=(e,p)=>{for(var o in p||(p={}))a.call(p,o)&&r(e,o,p[o]);if(t)for(var o of t(p))s.call(p,o)&&r(e,o,p[o]);return e};import{_ as o,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.21c7b200.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.b8f434c4.js";import{d as c,z as l,A as v,o as m,h as d,B as f,D as j,j as b,k as y}from"./vendor.e3a29b40.js";import{p as _}from"./sidebarLayoutState.436b738a.js";import{a as g,i as V,b as h,c as S,p as x}from"./Staffs.4406aa2b.js";import{a as P,s as k,p as w,h as C,n as L}from"./Mixin.788265f9.js";import{a as O}from"./Companies.95f0a4bc.js";import{b as A,c as D,d as B,s as M,e as T,a as z}from"./config.cae2431b.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.50bb1f04.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import"./V-Placeload.9d0101ab.js";import"./V-Control.b36667bf.js";import"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.13bae167.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";import"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d27a24ca.js";import"./image_default.66ef4d3e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import"./pdf_icon.0444a540.js";import"./index.430aaeb5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c122a196.js";import"./useDropdown.dfad556c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import"./V-Dropdown.7404a3e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a89ef3a.js";import"./activePanelState.5a49edcb.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f55dcd08.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.eb96c098.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f3abd056.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.b59ccca7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5145729d.js";import"./navbarLayoutState.a69fd485.js";import"./video.674f0486.js";import"./darkModeState.a53f3c67.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2f79059e.js";import"./AnimatedLogo.e43df3fc.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5e6c3f74.js";import"./V-Block.vue_vue&type=script&setup=true&lang.f5251e79.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.16aa198e.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.c5504f9b.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const E={class:"page-content-inner"},I={class:"columns is-multiline"},q={class:"column is-12"};var F=c({expose:[],setup(e){const t=j(),a=f();_.value="Edit Staff",l({title:"Staffs"}),v((()=>{g(a.query.id).then((e=>{for(var t in e.data)P(V,t,e.data[t]),P(h,t,e.data[t])})),O().then((e=>{k(h,"locations_id",e.data.locations)})),A().then((e=>{k(V,"city_id",D.value)})),B().then((e=>{k(V,"state_id",M.value)})),T().then((e=>{k(V,"country_id",z.value)})),S().then((e=>{k(h,"staff_roles_id",e.data.staff_roles)}))}));const s=()=>{let e=p(p({},w(V.value)),w(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||x(a.query.id,s).then((e=>{if(e.data.status)L.success("Succeeded"),t.back();else for(var a in L.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{L.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=o,r=u,p=i,c=n;return m(),d(c,null,{default:b((()=>[y("div",E,[y("div",I,[y("div",q,[y(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),y(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),y(p,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
