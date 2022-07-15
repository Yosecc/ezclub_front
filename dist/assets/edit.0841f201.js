var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&r(e,o,i[o]);return e};import{_ as o,a as p}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.5c6777ef.js";import{_ as u}from"./signComponent.vue_vue&type=script&setup=true&lang.41eb01d5.js";import{_ as n}from"./formLayaut.vue_vue&type=style&index=0&lang.6f13adaa.js";import{a as l,b as c,c as d,i as f,d as v,e as m,p as y}from"./Staffs.719c3b45.js";import{n as j,s as b,a as _,p as g,h}from"./index.66373693.js";import{d as S,r as V,b as x,o as w,h as P,E as k,j as E,K as C,O,H as A,P as D,a9 as L,k as $}from"./vendor.c210e0cb.js";import{_ as W}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.15516937.js";import{p as q}from"./sidebarLayoutState.56e6ff2f.js";import{a as B}from"./Companies.a79e92c3.js";import{g as I,c as z,a as F,s as M,b as T,d as H}from"./config.2ea209a9.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import"./V-Placeload.141ef784.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import"./pdf_icon.4aa835a4.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b6c72e1b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.af205aa2.js";import"./useDropdown.d008e23c.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";var K=S({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;V([{name:"Waiver_010221.pdf",url:""}]);const a=x((()=>"create"==t.type?{title:"Create staff waiver",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),s=e=>{c(e,l.value.id).then((e=>{if(e.data.status)j.success("Sign Success");else for(var t in j.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{j.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(e,r)=>{const i=u,o=n;return w(),P(o,{buttons:t.buttons,step:t.step,titles:k(a)},{default:E((()=>[k(l)?(w(),P(i,{key:0,onOnSign:s,"is-sign":"create"==t.type,waiver:`waiver_${k(l).id}.pdf`,"url-waiver":`staffs/generateWeiver/${k(l).id}`},null,8,["is-sign","waiver","url-waiver"])):C("",!0)])),_:1},8,["buttons","step","titles"])}}});const N={class:"page-content-inner"},U={class:"columns is-multiline"};var G=S({expose:[],setup(e){const t=L(),a=D();q.value="Edit Staff",O({title:"Staffs"}),A((()=>{d(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)b(f,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)b(f,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)b(f,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)b(f,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),b(v,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),b(v,t,a)}else b(f,t,e.data[t]),b(v,t,e.data[t])})),B().then((e=>{_(v,"locations",e.data.locations)})),I().then((e=>{_(f,"city_id",z.value)})),F().then((e=>{_(f,"state_id",M.value)})),T().then((e=>{_(f,"country_id",H.value)})),m().then((e=>{_(v,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=i(i({},g(f.value)),g(v.value));const s=new FormData;for(var r in e)s.append(r,e[r]);h.value||y(a.query.id,s).then((e=>{if(e.data.status)j.success("Succeeded"),t.back();else for(var a in j.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{j.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=o,i=p,u=K,n=W;return w(),P(n,null,{default:E((()=>{var e;return[$("div",N,[$("div",U,[$("div",{class:"column is-12",style:[{display:"flex"},(null==(e=k(a).query)?void 0:e.sign)?{flexDirection:"column-reverse"}:{flexDirection:"column"}]},[$(r,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),$(i,{type:"edit",buttons:[],step:2,class:"mb-3"}),k(l)?(w(),P(u,{key:0,class:"mb-4",type:k(l).sign?"edit":"create",buttons:[],step:3},null,8,["type"])):C("",!0)],4)])])]})),_:1})}}});export default G;
