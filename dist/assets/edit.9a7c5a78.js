var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&r(e,o,i[o]);return e};import{_ as o,a as p}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.c362b3ec.js";import{_ as u}from"./signComponent.vue_vue&type=script&setup=true&lang.6b1de5b3.js";import{_ as n}from"./formLayaut.vue_vue&type=style&index=0&lang.055824c1.js";import{d as l,r as c,b as d,o as f,i as v,D as m,j as y,G as b,a4 as j,L as _,O as g,H as h,k as S}from"./vendor.1faf4f77.js";import{a as V,b as x,c as w,i as P,d as k,e as C,p as E}from"./Staffs.8d5d37cf.js";import{n as L,s as O,a as D,p as A,h as $}from"./index.6fffb7e6.js";import{_ as W}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a24fd0ff.js";import{p as T}from"./sidebarLayoutState.8ddd6cce.js";import{b as q}from"./Companies.6685ae15.js";import{g as B,c as I,a as M,s as z,b as F,d as G}from"./config.ab652609.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e1ab07d1.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe437b85.js";import"./V-Button.vue_vue&type=script&setup=true&lang.94a80eab.js";import"./V-Placeload.410731c2.js";import"./V-Control.4a6c84b4.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e3fe440b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.1500d9d7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ac2f5202.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.42dfc6e9.js";import"./V-Card.vue_vue&type=script&setup=true&lang.bff7be9b.js";import"./pdf_icon.9f85fd04.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.cf9645bd.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4ed7b4e8.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3629d2a1.js";import"./useDropdown.105a6322.js";import"./V-Dropdown.1e9a7c40.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7e31a56.js";import"./activePanelState.c2741883.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.305eeb86.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4486146.js";import"./V-Message.vue_vue&type=script&setup=true&lang.78c2be1a.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.9823548d.js";import"./navbarLayoutState.3917eb04.js";import"./video.06d66946.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c3ec473d.js";import"./darkModeState.b1f0037d.js";import"./AnimatedLogo.a3e359ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9224d628.js";import"./V-Block.vue_vue&type=script&setup=true&lang.95c8f17c.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c7cbfbbf.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.879bfb5b.js";var H=l({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;c([{name:"Waiver_010221.pdf",url:""}]);const a=d((()=>"create"==t.type?{title:"Create staff waiver",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),s=e=>{x(e,V.value.id).then((e=>{if(e.data.status)L.success("Sign Success");else for(var t in L.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{L.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(e,r)=>{const i=u,o=n;return f(),v(o,{buttons:t.buttons,step:t.step,titles:m(a)},{default:y((()=>[m(V)?(f(),v(i,{key:0,onOnSign:s,"is-sign":"create"==t.type,waiver:`waiver_${m(V).id}.pdf`,"url-waiver":`staffs/generateWeiver/${m(V).id}`},null,8,["is-sign","waiver","url-waiver"])):b("v-if",!0)])),_:1},8,["buttons","step","titles"])}}});const N={class:"page-content-inner"},U={class:"columns is-multiline"};var J=l({expose:[],setup(e){const t=j(),a=_();T.value="Edit Staff",g({title:"Staffs"}),h((()=>{w(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)O(P,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)O(P,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)O(P,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)O(P,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),O(k,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),O(k,t,a)}else O(P,t,e.data[t]),O(k,t,e.data[t])})),q().then((e=>{D(k,"locations",e.data.locations)})),B().then((e=>{D(P,"city_id",I.value)})),M().then((e=>{D(P,"state_id",z.value)})),F().then((e=>{D(P,"country_id",G.value)})),C().then((e=>{D(k,"staff_roles",e.data.staff_roles)}))}));const s=()=>{let e=i(i({},A(P.value)),A(k.value));const s=new FormData;for(var r in e)s.append(r,e[r]);$.value||E(a.query.id,s).then((e=>{if(e.data.status)L.success("Succeeded"),t.back();else for(var a in L.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{L.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=o,i=p,u=H,n=W;return f(),v(n,null,{default:y((()=>{var e;return[b(" Content Wrapper "),S("div",N,[S("div",U,[S("div",{class:"column is-12",style:[{display:"flex"},(null==(e=m(a).query)?void 0:e.sign)?{flexDirection:"column-reverse"}:{flexDirection:"column"}]},[S(r,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),S(i,{type:"edit",buttons:[],step:2,class:"mb-3"}),m(V)?(f(),v(u,{key:0,class:"mb-4",type:m(V).sign?"edit":"create",buttons:[],step:3},null,8,["type"])):b("v-if",!0)],4)])])]})),_:1})}}});export default J;