var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.4fc632d9.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.02a6ae8d.js";import{d as c,I as l,G as v,r as d,o as m,h as f,J as j,j as y,k as b,L as g}from"./vendor.020847a3.js";import{p as _}from"./sidebarLayoutState.b80e4aa7.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.229031a9.js";import{c as k,a as w,p as C,h as L,n as O}from"./index.1c4602e1.js";import{b as I}from"./Companies.3fb82902.js";import{g as A,c as D,a as T,s as B,b as M,d as z}from"./config.569250df.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.0d774617.js";import"./formLayaut.vue_vue&type=style&index=0&lang.853d6f33.js";import"./V-Placeload.643ab16e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a2676413.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4942b14b.js";import"./signComponent.vue_vue&type=script&setup=true&lang.a813c148.js";import"./pdf_icon.77411678.js";import"./V-Card.vue_vue&type=script&setup=true&lang.4216e99a.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7e9c5294.js";import"./useDropdown.dab445c8.js";import"./V-Dropdown.c24aed71.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a38ed7e8.js";import"./activePanelState.570bd0f8.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6b6e3edd.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.8ca56bab.js";import"./V-Message.vue_vue&type=script&setup=true&lang.7bfdd0eb.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0dd88ca7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.27893404.js";import"./navbarLayoutState.f8e26459.js";import"./video.f966c499.js";import"./darkModeState.1bd2c1f2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cf85c95a.js";import"./AnimatedLogo.d1752403.js";import"./V-Control.d0a1f920.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6be6c11f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33a8aac4.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e07d9ced.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.57cbc3a5.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.f1fbccad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b2bcd2ae.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a4ce6817.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var G=c({expose:[],setup(e){j(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),I().then((e=>{w(V,"locations",e.data.locations)})),A().then((e=>{w(S,"city_id",D.value)})),T().then((e=>{w(S,"state_id",B.value)})),M().then((e=>{w(S,"country_id",z.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=d(1);d([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);L.value||x(a).then((e=>{if(e.data.status)O.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,c=i,l=n;return m(),f(l,null,{default:y((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(m(),f("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),f(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default G;
