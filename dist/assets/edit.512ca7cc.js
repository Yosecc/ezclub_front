var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.b4901005.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f9411205.js";import{d as l,z as c,A as f,o as d,h as v,B as m,D as j,j as y,k as b}from"./vendor.e3a29b40.js";import{p as _}from"./sidebarLayoutState.436b738a.js";import{a as g,i as h,b as V,c as S,p as P}from"./Staffs.f1713628.js";import{a as x,s as k,p as w,h as C,n as O}from"./ActivityPanel.vue_vue&type=style&index=0&lang.1e718eba.js";import{a as A}from"./Companies.57563fa8.js";import{b as D,c as E,d as L,s as B,e as T,a as z}from"./config.14df10d0.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import"./V-Placeload.9d0101ab.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d27a24ca.js";import"./index.4e4bd47d.js";import"./signComponent.vue_vue&type=script&setup=true&lang.8b246cb0.js";import"./pdf_icon.78cddeed.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.7f2f91ae.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.eb96c098.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f3abd056.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.b59ccca7.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a89ef3a.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.daae4ec3.js";import"./navbarLayoutState.37063f98.js";import"./V-Dropdown.7404a3e2.js";import"./useDropdown.dfad556c.js";import"./video.674f0486.js";import"./activePanelState.5a49edcb.js";import"./darkModeState.a53f3c67.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2f79059e.js";import"./AnimatedLogo.e43df3fc.js";import"./V-Control.b36667bf.js";import"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5e6c3f74.js";import"./V-Block.vue_vue&type=script&setup=true&lang.f5251e79.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.16aa198e.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.c5504f9b.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./fastpizza.1e58d0ec.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.16e258e3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";const I={class:"page-content-inner"},M={class:"columns is-multiline"},q={class:"column is-12"};var F=l({expose:[],setup(e){const t=j(),a=m();_.value="Edit Staff",c({title:"Staffs"}),f((()=>{g(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),x(V,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),x(V,t,a)}else x(h,t,e.data[t]),x(V,t,e.data[t])})),A().then((e=>{k(V,"locations",e.data.locations)})),D().then((e=>{k(h,"city_id",E.value)})),L().then((e=>{k(h,"state_id",B.value)})),T().then((e=>{k(h,"country_id",z.value)})),S().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=o(o({},w(h.value)),w(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(a.query.id,s).then((e=>{if(e.data.status)O.success("Succeeded"),t.back();else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=p,r=u,o=i,l=n;return d(),v(l,null,{default:y((()=>[b("div",I,[b("div",M,[b("div",q,[b(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(o,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
