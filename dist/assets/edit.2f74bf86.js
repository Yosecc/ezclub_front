var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.f2bb1ca3.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ef4fb6c6.js";import{d as l,y as c,z as d,o as f,h as v,A as m,B as y,j,k as b}from"./vendor.d1a3c89d.js";import{p as _}from"./sidebarLayoutState.a11d51b9.js";import{a as g,i as h,b as V,c as S,p as P}from"./Staffs.e8f2b87f.js";import{a as x,s as k,p as w,h as C,n as O}from"./index.a92ea6cf.js";import{a as A}from"./Companies.88697295.js";import{b as E,c as L,d as B,s as D,e as T,a as z}from"./config.41e7eb9b.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import"./formLayaut.vue_vue&type=style&index=0&lang.f1db6743.js";import"./V-Placeload.b897843c.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d3b6617e.js";import"./signComponent.vue_vue&type=script&setup=true&lang.c8c9b36b.js";import"./pdf_icon.0c7d2419.js";import"./V-Card.vue_vue&type=script&setup=true&lang.affa0552.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ca7aaffa.js";import"./useDropdown.c66a6279.js";import"./V-Dropdown.0747f2f0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e9b51ce1.js";import"./activePanelState.a69051ae.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.10056650.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fa5e9da0.js";import"./V-Message.vue_vue&type=script&setup=true&lang.21ae8775.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c7a6a0a8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e6f3ce98.js";import"./navbarLayoutState.f7f62a15.js";import"./video.d77d6f43.js";import"./darkModeState.a5b4739a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.60378128.js";import"./AnimatedLogo.95c4db45.js";import"./V-Control.61107fd4.js";import"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.32fadef6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.25e2a244.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2ff8f9c8.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.66536429.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7a5089bc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e028b39.js";const I={class:"page-content-inner"},M={class:"columns is-multiline"},q={class:"column is-12"};var F=l({expose:[],setup(e){const t=y(),a=m();_.value="Edit Staff",c({title:"Staffs"}),d((()=>{g(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),x(V,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),x(V,t,a)}else x(h,t,e.data[t]),x(V,t,e.data[t])})),A().then((e=>{k(V,"locations",e.data.locations)})),E().then((e=>{k(h,"city_id",L.value)})),B().then((e=>{k(h,"state_id",D.value)})),T().then((e=>{k(h,"country_id",z.value)})),S().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=o(o({},w(h.value)),w(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(a.query.id,s).then((e=>{if(e.data.status)O.success("Succeeded"),t.back();else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=p,r=u,o=i,l=n;return f(),v(l,null,{default:j((()=>[b("div",I,[b("div",M,[b("div",q,[b(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(o,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
