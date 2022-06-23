var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.d6fd62a8.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.9a2236be.js";import{d as n,O as l,H as c,r as v,o as d,h as f,P as m,a9 as y,j,k as g,K as b}from"./vendor.c210e0cb.js";import{p as _}from"./sidebarLayoutState.56e6ff2f.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.6b8ab422.js";import{e as w,a as k,p as O,h as C,n as L}from"./index.5f8bb506.js";import{a as A}from"./Companies.0d3f6ca4.js";import{g as D,c as I,a as B,s as z,b as E,d as F}from"./config.a54fea8a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import"./V-Placeload.141ef784.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import"./formLayaut.vue_vue&type=style&index=0&lang.8e723d67.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b6c72e1b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8af56ead.js";import"./useDropdown.d008e23c.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const M={class:"page-content-inner"},T={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var H=n({expose:[],setup(e){m();const t=y();_.value="New Staff",l({title:"Staffs"}),c((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{k(h,"locations",e.data.locations)})),D().then((e=>{k(V,"city_id",I.value)})),B().then((e=>{k(V,"state_id",z.value)})),E().then((e=>{k(V,"country_id",F.value)})),x().then((e=>{k(h,"staff_roles",e.data.staff_roles)}))}));const a=v(1);v([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},O(V.value)),O(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(s).then((e=>{if(e.data.status)L.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in L.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{L.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),f(n,null,{default:j((()=>[g("div",M,[g("div",T,[g("div",$,[1==a.value||2==a.value?(d(),f("div",q,[g(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),g(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):b("",!0)])])])])),_:1})}}});export default H;