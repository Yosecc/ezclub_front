var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&r(e,o,i[o]);return e};import{_ as o,a as p}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.620d08d4.js";import{_ as u}from"./signComponent.vue_vue&type=script&setup=true&lang.dc1bb125.js";import{_ as n}from"./formLayaut.vue_vue&type=style&index=0&lang.f9d94dfe.js";import{a as l,b as c,c as d,i as v,d as f,e as m,p as y}from"./Staffs.623dca0f.js";import{n as b,s as j,a as _,p as g,h}from"./index.b8e520c6.js";import{d as S,r as V,b as x,o as w,h as P,D as k,j as C,J as E,L,G as O,O as D,a4 as A,k as $}from"./vendor.7d033f41.js";import{_ as T}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.d8995268.js";import{p as W}from"./sidebarLayoutState.66c24736.js";import{b as q}from"./Companies.00c103d8.js";import{g as B,c as I,a as M,s as z,b as F,d as G}from"./config.f8474841.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.87a4afde.js";import"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import"./V-Placeload.134a05d9.js";import"./V-Control.f3c0402c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.867c7ae8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.345ddd7c.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9e628ea0.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e7b64613.js";import"./pdf_icon.4e54e04e.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.4e35c32c.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e6c5b514.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ba8ab2ec.js";import"./useDropdown.216b8c2e.js";import"./V-Dropdown.fdfb8a5a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cb218406.js";import"./activePanelState.4624fcc4.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.def389d9.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fe421256.js";import"./V-Message.vue_vue&type=script&setup=true&lang.e3b595c4.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0ce2c394.js";import"./navbarLayoutState.a94caac3.js";import"./video.3ed9ceae.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d069f918.js";import"./darkModeState.b2a23e7f.js";import"./AnimatedLogo.707bad0f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.336954e9.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.95b9c245.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.4e8b4716.js";var J=S({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;V([{name:"Waiver_010221.pdf",url:""}]);const a=x((()=>"create"==t.type?{title:"Create staff waiver",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),s=e=>{c(e,l.value.id).then((e=>{if(e.data.status)b.success("Sign Success");else for(var t in b.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{b.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(e,r)=>{const i=u,o=n;return w(),P(o,{buttons:t.buttons,step:t.step,titles:k(a)},{default:C((()=>[k(l)?(w(),P(i,{key:0,onOnSign:s,"is-sign":"create"==t.type,waiver:`waiver_${k(l).id}.pdf`,"url-waiver":`staffs/generateWeiver/${k(l).id}`},null,8,["is-sign","waiver","url-waiver"])):E("",!0)])),_:1},8,["buttons","step","titles"])}}});const N={class:"page-content-inner"},U={class:"columns is-multiline"};var H=S({expose:[],setup(e){const t=A(),a=D();W.value="Edit Staff",L({title:"Staffs"}),O((()=>{d(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)j(v,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)j(v,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)j(v,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)j(v,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),j(f,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),j(f,t,a)}else j(v,t,e.data[t]),j(f,t,e.data[t])})),q().then((e=>{_(f,"locations",e.data.locations)})),B().then((e=>{_(v,"city_id",I.value)})),M().then((e=>{_(v,"state_id",z.value)})),F().then((e=>{_(v,"country_id",G.value)})),m().then((e=>{_(f,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=i(i({},g(v.value)),g(f.value));const s=new FormData;for(var r in e)s.append(r,e[r]);h.value||y(a.query.id,s).then((e=>{if(e.data.status)b.success("Succeeded"),t.back();else for(var a in b.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{b.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=o,i=p,u=J,n=T;return w(),P(n,null,{default:C((()=>{var e;return[$("div",N,[$("div",U,[$("div",{class:"column is-12",style:[{display:"flex"},(null==(e=k(a).query)?void 0:e.sign)?{flexDirection:"column-reverse"}:{flexDirection:"column"}]},[$(r,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),$(i,{type:"edit",buttons:[],step:2,class:"mb-3"}),k(l)?(w(),P(u,{key:0,class:"mb-4",type:k(l).sign?"edit":"create",buttons:[],step:3},null,8,["type"])):E("",!0)],4)])])]})),_:1})}}});export default H;