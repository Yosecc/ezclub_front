var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.3e1f64f7.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f83ebd7e.js";import{d as c,y as l,z as d,o as v,h as f,A as m,B as y,j,k as b}from"./vendor.42a295ea.js";import{p as _}from"./sidebarLayoutState.52178f66.js";import{a as g,i as h,b as V,c as S,p as P}from"./Staffs.382cd55e.js";import{a as x,s as k,p as w,h as C,n as O}from"./index.c184ab17.js";import{a as A}from"./Companies.63a96538.js";import{b as E,c as L,d as B,s as D,e as T,a as z}from"./config.28546639.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.05034d3a.js";import"./formLayaut.vue_vue&type=style&index=0&lang.de409503.js";import"./V-Placeload.632826ef.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f7302fd6.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4e256e46.js";import"./signComponent.vue_vue&type=script&setup=true&lang.25c28d22.js";import"./pdf_icon.bc2c5bad.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a7cae2c2.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.85fb960b.js";import"./useDropdown.d90c2b4c.js";import"./V-Dropdown.3b79d4cd.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.796e641d.js";import"./activePanelState.2211c9ac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a2c6532d.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import"./V-Message.vue_vue&type=script&setup=true&lang.29aa6339.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.18497c11.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.efd369c7.js";import"./navbarLayoutState.0663f3f5.js";import"./video.0a3f5b0b.js";import"./darkModeState.d08d2b99.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.df39ff9a.js";import"./AnimatedLogo.d7113c02.js";import"./V-Control.c35d44b1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e8c1cc62.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e380e6f2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.965255fa.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.992cd783.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2c67469b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3856dadb.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.403db530.js";const I={class:"page-content-inner"},M={class:"columns is-multiline"},q={class:"column is-12"};var F=c({expose:[],setup(e){const t=y(),a=m();_.value="Edit Staff",l({title:"Staffs"}),d((()=>{g(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),x(V,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),x(V,t,a)}else x(h,t,e.data[t]),x(V,t,e.data[t])})),A().then((e=>{k(V,"locations",e.data.locations)})),E().then((e=>{k(h,"city_id",L.value)})),B().then((e=>{k(h,"state_id",D.value)})),T().then((e=>{k(h,"country_id",z.value)})),S().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=o(o({},w(h.value)),w(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(a.query.id,s).then((e=>{if(e.data.status)O.success("Succeeded"),t.back();else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=p,r=u,o=i,c=n;return v(),f(c,null,{default:j((()=>[b("div",I,[b("div",M,[b("div",q,[b(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(o,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
