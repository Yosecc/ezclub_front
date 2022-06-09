var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.b79b7205.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.adc56dd9.js";import{d as n,O as l,H as v,r as c,o as d,h as m,P as f,a6 as y,j,k as b,K as g}from"./vendor.19da945b.js";import{p as _}from"./sidebarLayoutState.5b7e9825.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.ea757223.js";import{e as w,a as k,p as L,h as O,n as C}from"./index.7b1c874f.js";import{b as A}from"./Companies.4c6a9643.js";import{g as D,c as I,a as T,s as B,b as M,d as z}from"./config.81d7f4cf.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import"./V-Placeload.b34646d0.js";import"./V-Control.0fd8783e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.fb54e505.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b1bf75d6.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.34a87e91.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e53206c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dcd607f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.fe212a1d.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.b04b1648.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.06155cf7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2e7ec7eb.js";import"./useDropdown.1ca217ec.js";import"./V-Dropdown.0bed1217.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e4a5434e.js";import"./activePanelState.8ece22de.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.37b35fd1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import"./V-Message.vue_vue&type=script&setup=true&lang.2369e680.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.978fec7a.js";import"./navbarLayoutState.71d2a290.js";import"./video.1d4909e1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.5fb2b479.js";import"./darkModeState.0ffb262a.js";import"./AnimatedLogo.0ab862f3.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9996a98c.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d8c448b1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5f93fd07.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.222d1a7f.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var H=n({expose:[],setup(e){f();const t=y();_.value="New Staff",l({title:"Staffs"}),v((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{k(h,"locations",e.data.locations)})),D().then((e=>{k(V,"city_id",I.value)})),T().then((e=>{k(V,"state_id",B.value)})),M().then((e=>{k(V,"country_id",z.value)})),x().then((e=>{k(h,"staff_roles",e.data.staff_roles)}))}));const a=c(1);c([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},L(V.value)),L(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);O.value||P(s).then((e=>{if(e.data.status)C.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in C.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{C.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),m(n,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",$,[1==a.value||2==a.value?(d(),m("div",q,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0)])])])])),_:1})}}});export default H;
