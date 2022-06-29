var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&r(e,o,i[o]);return e};import{_ as o,a as p}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.11428d90.js";import{_ as u}from"./signComponent.vue_vue&type=script&setup=true&lang.96ae2997.js";import{_ as n}from"./formLayaut.vue_vue&type=style&index=0&lang.e2250c75.js";import{a as l,b as c,c as d,i as f,d as v,e as m,p as y}from"./Staffs.2aac1a72.js";import{n as b,s as j,a as _,p as g,h}from"./index.8f8c2b3e.js";import{d as S,r as V,b as x,o as w,h as P,E as k,j as E,K as C,O,H as A,P as D,a9 as L,k as $}from"./vendor.853b0a2b.js";import{_ as W}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.47545b30.js";import{p as q}from"./sidebarLayoutState.68347789.js";import{a as B}from"./Companies.454fa4b6.js";import{g as I,c as z,a as F,s as M,b as T,d as H}from"./config.1fb69cd1.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.1fe405fc.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import"./V-Button.vue_vue&type=script&setup=true&lang.3174687b.js";import"./V-Placeload.54ed2d56.js";import"./V-Control.bab08fd1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.57862c84.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a423434c.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f868e188.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3d4964e7.js";import"./V-Card.vue_vue&type=script&setup=true&lang.13431cdb.js";import"./pdf_icon.1badb487.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.eae7234f.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.07dcabec.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2625c997.js";import"./useDropdown.9fd8f548.js";import"./V-Dropdown.20b61679.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cddd26f6.js";import"./activePanelState.9b514b5d.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.eb4f08be.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import"./video.5be088fe.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.624ff565.js";import"./darkModeState.6f39e39b.js";import"./AnimatedLogo.e7829b2f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.36c68532.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ee7d7200.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5ca17476.js";import"./userPopovers.f4b9fc60.js";var K=S({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;V([{name:"Waiver_010221.pdf",url:""}]);const a=x((()=>"create"==t.type?{title:"Create staff waiver",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),s=e=>{c(e,l.value.id).then((e=>{if(e.data.status)b.success("Sign Success");else for(var t in b.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{b.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(e,r)=>{const i=u,o=n;return w(),P(o,{buttons:t.buttons,step:t.step,titles:k(a)},{default:E((()=>[k(l)?(w(),P(i,{key:0,onOnSign:s,"is-sign":"create"==t.type,waiver:`waiver_${k(l).id}.pdf`,"url-waiver":`staffs/generateWeiver/${k(l).id}`},null,8,["is-sign","waiver","url-waiver"])):C("",!0)])),_:1},8,["buttons","step","titles"])}}});const N={class:"page-content-inner"},U={class:"columns is-multiline"};var G=S({expose:[],setup(e){const t=L(),a=D();q.value="Edit Staff",O({title:"Staffs"}),A((()=>{d(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)j(f,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)j(f,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)j(f,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)j(f,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),j(v,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),j(v,t,a)}else j(f,t,e.data[t]),j(v,t,e.data[t])})),B().then((e=>{_(v,"locations",e.data.locations)})),I().then((e=>{_(f,"city_id",z.value)})),F().then((e=>{_(f,"state_id",M.value)})),T().then((e=>{_(f,"country_id",H.value)})),m().then((e=>{_(v,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=i(i({},g(f.value)),g(v.value));const s=new FormData;for(var r in e)s.append(r,e[r]);h.value||y(a.query.id,s).then((e=>{if(e.data.status)b.success("Succeeded"),t.back();else for(var a in b.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{b.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=o,i=p,u=K,n=W;return w(),P(n,null,{default:E((()=>{var e;return[$("div",N,[$("div",U,[$("div",{class:"column is-12",style:[{display:"flex"},(null==(e=k(a).query)?void 0:e.sign)?{flexDirection:"column-reverse"}:{flexDirection:"column"}]},[$(r,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),$(i,{type:"edit",buttons:[],step:2,class:"mb-3"}),k(l)?(w(),P(u,{key:0,class:"mb-4",type:k(l).sign?"edit":"create",buttons:[],step:3},null,8,["type"])):C("",!0)],4)])])]})),_:1})}}});export default G;
