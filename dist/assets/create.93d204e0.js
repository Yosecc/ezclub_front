var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,p=(e,p)=>{for(var o in p||(p={}))a.call(p,o)&&r(e,o,p[o]);if(t)for(var o of t(p))s.call(p,o)&&r(e,o,p[o]);return e};import{_ as o,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.7af59f1d.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c4664a5c.js";import{d as c,I as l,G as v,r as f,o as m,h as d,J as y,j,k as b,L as g}from"./vendor.6f1ebb59.js";import{p as _}from"./sidebarLayoutState.f77399c8.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.6665f170.js";import{c as k,a as w,p as C,h as L,n as O}from"./index.1edc1641.js";import{b as I}from"./Companies.2734c5fb.js";import{g as A,c as D,a as T,s as B,b as M,d as z}from"./config.4b45059a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d48be775.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.07608343.js";import"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import"./V-Placeload.98b104a8.js";import"./V-Control.9d085c3f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.511e2268.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.711f7bfa.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.c37f85a5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.090ffe3f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3b90c42b.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.214b6561.js";import"./signComponent.vue_vue&type=script&setup=true&lang.df1a4c86.js";import"./pdf_icon.551549d4.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0cc151d4.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.4d1fc729.js";import"./useDropdown.054755a3.js";import"./V-Dropdown.2a04da02.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ef96ea8c.js";import"./activePanelState.3c211562.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.59d3014b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1c8c767a.js";import"./V-Message.vue_vue&type=script&setup=true&lang.0f275a15.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.28efd80f.js";import"./navbarLayoutState.3d5344b0.js";import"./video.11ba5555.js";import"./darkModeState.f6b1b75a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f027517e.js";import"./AnimatedLogo.d0948e72.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.660f76f8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.46343492.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.aed52bf0.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1340fdda.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var G=c({expose:[],setup(e){y(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),I().then((e=>{w(V,"locations",e.data.locations)})),A().then((e=>{w(S,"city_id",D.value)})),T().then((e=>{w(S,"state_id",B.value)})),M().then((e=>{w(S,"country_id",z.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=f(1);f([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=p(p({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);L.value||x(a).then((e=>{if(e.data.status)O.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=o,p=u,c=i,l=n;return m(),d(l,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(m(),d("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(p,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),d(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default G;
