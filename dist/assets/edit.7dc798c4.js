var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.27120e4e.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.0d4f6fbe.js";import{d as l,y as c,z as f,o as d,h as v,A as m,B as j,j as y,k as b}from"./vendor.685e53b0.js";import{p as _}from"./sidebarLayoutState.b1e70c1b.js";import{a as g,i as h,b as V,c as S,p as P}from"./Staffs.061d426c.js";import{a as x,s as k,p as w,h as C,n as O}from"./ActivityPanel.vue_vue&type=style&index=0&lang.4c69e724.js";import{a as A}from"./Companies.071a68fa.js";import{b as E,c as L,d as B,s as D,e as T,a as z}from"./config.c4fee93d.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.119fc4d3.js";import"./formLayaut.vue_vue&type=style&index=0&lang.efe54a19.js";import"./V-Placeload.e1b5c41e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.fc314ba9.js";import"./index.2562c924.js";import"./signComponent.vue_vue&type=script&setup=true&lang.106e4371.js";import"./pdf_icon.4b8e9b3e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9093fe9.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.fd9171a8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.62f4b657.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8a404c76.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.5d7a09f8.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7327817.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import"./navbarLayoutState.71e0a28d.js";import"./V-Dropdown.4b56e22f.js";import"./useDropdown.0a27f828.js";import"./video.89824664.js";import"./activePanelState.618a6e66.js";import"./darkModeState.ac572066.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.7abfdf0e.js";import"./AnimatedLogo.77bc3feb.js";import"./V-Control.2f65f00c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0d63a362.js";import"./V-Block.vue_vue&type=script&setup=true&lang.218e9dd3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9f34b4f7.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.0749519e.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./fastpizza.1e58d0ec.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";const I={class:"page-content-inner"},M={class:"columns is-multiline"},q={class:"column is-12"};var F=l({expose:[],setup(e){const t=j(),a=m();_.value="Edit Staff",c({title:"Staffs"}),f((()=>{g(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)x(h,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),x(V,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),x(V,t,a)}else x(h,t,e.data[t]),x(V,t,e.data[t])})),A().then((e=>{k(V,"locations",e.data.locations)})),E().then((e=>{k(h,"city_id",L.value)})),B().then((e=>{k(h,"state_id",D.value)})),T().then((e=>{k(h,"country_id",z.value)})),S().then((e=>{k(V,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=o(o({},w(h.value)),w(V.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(a.query.id,s).then((e=>{if(e.data.status)O.success("Succeeded"),t.back();else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const a=p,r=u,o=i,l=n;return d(),v(l,null,{default:y((()=>[b("div",I,[b("div",M,[b("div",q,[b(a,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(r,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(o,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default F;
