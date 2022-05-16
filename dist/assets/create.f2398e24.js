var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.c34628aa.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.acff82bb.js";import{d as n,L as c,G as l,r as v,o as m,h as d,O as f,a4 as y,j as b,k as j,J as g}from"./vendor.f3aa4145.js";import{p as _}from"./sidebarLayoutState.1c67ab49.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.7b59333d.js";import{e as w,a as L,p as k,h as O,n as C}from"./index.12404dd8.js";import{b as A}from"./Companies.3ed9f88d.js";import{g as D,c as I,a as T,s as B,b as M,d as z}from"./config.a589873a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.8a941f7a.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.70f5db92.js";import"./V-Button.vue_vue&type=script&setup=true&lang.eba1148c.js";import"./V-Placeload.fdcac8e0.js";import"./V-Control.b8419f45.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d634e49.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.6e24c1ec.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.52196853.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2d65ef4c.js";import"./formLayaut.vue_vue&type=style&index=0&lang.ee130016.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4de6e38d.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.f04f6282.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0e847bc8.js";import"./useDropdown.8ce53aab.js";import"./V-Dropdown.f9a5cb09.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1054d6be.js";import"./activePanelState.a8e3292b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.dd715d2a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.79e41b52.js";import"./V-Message.vue_vue&type=script&setup=true&lang.c7e1c1ee.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1ea131b1.js";import"./navbarLayoutState.d384bc21.js";import"./video.726f585e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6b8bba48.js";import"./darkModeState.aba9ca80.js";import"./AnimatedLogo.136e20ca.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.146a556b.js";import"./V-Block.vue_vue&type=script&setup=true&lang.894ccaf7.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0655cbba.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.67ffc64b.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var G=n({expose:[],setup(e){f();const t=y();_.value="New Staff",c({title:"Staffs"}),l((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{L(h,"locations",e.data.locations)})),D().then((e=>{L(V,"city_id",I.value)})),T().then((e=>{L(V,"state_id",B.value)})),M().then((e=>{L(V,"country_id",z.value)})),x().then((e=>{L(h,"staff_roles",e.data.staff_roles)}))}));const a=v(1);v([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},k(V.value)),k(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);O.value||P(s).then((e=>{if(e.data.status)C.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in C.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{C.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return m(),d(n,null,{default:b((()=>[j("div",E,[j("div",F,[j("div",$,[1==a.value||2==a.value?(m(),d("div",q,[j(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),j(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0)])])])])),_:1})}}});export default G;
