var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.ec7ab4c0.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.b4377edc.js";import{d as n,O as c,o as l,r as v,h as d,i as m,P as f,ad as y,k as j,l as b,K as g}from"./vendor.4454b83d.js";import{p as _}from"./sidebarLayoutState.66d5e66f.js";import{c as S,f as h,h as V,j as x,l as P}from"./Staffs.fbfc13c4.js";import{e as w,a as k,p as O,h as C,n as L}from"./index.129f4881.js";import{a as A}from"./Companies.335d0f3d.js";import{g as D,c as I,a as B,s as z,b as E,d as F}from"./config.774b7aa7.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e9e50515.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c2baafce.js";import"./useDropdown.659338b4.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const M={class:"page-content-inner"},T={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var K=n({expose:[],setup(e){f();const t=y();_.value="New Staff",c({title:"Staffs"}),l((()=>{S.value=null,w(h.value),w(V.value),A().then((e=>{k(V,"locations",e.data.locations)})),D().then((e=>{k(h,"city_id",I.value)})),B().then((e=>{k(h,"state_id",z.value)})),E().then((e=>{k(h,"country_id",F.value)})),x().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const a=v(1);v([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},O(h.value)),O(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(s).then((e=>{if(e.data.status)L.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in L.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{L.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),m(n,null,{default:j((()=>[b("div",M,[b("div",T,[b("div",$,[1==a.value||2==a.value?(d(),m("div",q,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0)])])])])),_:1})}}});export default K;
