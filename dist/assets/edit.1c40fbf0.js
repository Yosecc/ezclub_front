var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,p=(e,p)=>{for(var o in p||(p={}))a.call(p,o)&&r(e,o,p[o]);if(t)for(var o of t(p))s.call(p,o)&&r(e,o,p[o]);return e};import{_ as o,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.7af59f1d.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c4664a5c.js";import{d as l,I as c,G as d,o as f,h as v,J as m,a2 as y,j,k as b}from"./vendor.6f1ebb59.js";import{p as _}from"./sidebarLayoutState.f77399c8.js";import{a as g,i as h,b as V,c as S,p as x}from"./Staffs.6665f170.js";import{s as P,a as k,p as w,h as C,n as L}from"./index.1edc1641.js";import{b as O}from"./Companies.2734c5fb.js";import{g as E,c as A,a as D,s as I,b as T,d as B}from"./config.4b45059a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d48be775.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.07608343.js";import"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import"./V-Placeload.98b104a8.js";import"./V-Control.9d085c3f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.511e2268.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.711f7bfa.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.c37f85a5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.090ffe3f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3b90c42b.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.214b6561.js";import"./signComponent.vue_vue&type=script&setup=true&lang.df1a4c86.js";import"./pdf_icon.551549d4.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0cc151d4.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.4d1fc729.js";import"./useDropdown.054755a3.js";import"./V-Dropdown.2a04da02.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ef96ea8c.js";import"./activePanelState.3c211562.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.59d3014b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1c8c767a.js";import"./V-Message.vue_vue&type=script&setup=true&lang.0f275a15.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.28efd80f.js";import"./navbarLayoutState.3d5344b0.js";import"./video.11ba5555.js";import"./darkModeState.f6b1b75a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f027517e.js";import"./AnimatedLogo.d0948e72.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.660f76f8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.46343492.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.aed52bf0.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1340fdda.js";const M={class:"page-content-inner"},q={class:"columns is-multiline"},z={class:"column is-12"};var F=l({expose:[],setup(e){const t=y(),a=m();_.value="Edit Staff",c({title:"Staffs"}),d((()=>{g(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)P(h,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)P(h,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)P(h,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)P(h,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),P(V,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),P(V,t,a)}else P(h,t,e.data[t]),P(V,t,e.data[t])})),O().then((e=>{k(V,"locations",e.data.locations)})),E().then((e=>{k(h,"city_id",A.value)})),D().then((e=>{k(h,"state_id",I.value)})),T().then((e=>{k(h,"country_id",B.value)})),S().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=p(p({},w(h.value)),w(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||x(a.query.id,s).then((e=>{if(e.data.status)L.success("Succeeded"),t.back();else for(var a in L.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{L.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=o,r=u,p=i,l=n;return f(),v(l,null,{default:j((()=>[b("div",M,[b("div",q,[b("div",z,[b(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(p,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
