var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.c31b716d.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8debf0aa.js";import{d as c,y as l,z as v,r as f,o as m,h as d,A as b,j,k as y,K as g}from"./vendor.685e53b0.js";import{p as _}from"./sidebarLayoutState.b1e70c1b.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.43cf5db0.js";import{c as k,s as w,p as C,h as O,n as A}from"./ActivityPanel.vue_vue&type=style&index=0&lang.73e782c5.js";import{a as L}from"./Companies.14c7bc66.js";import{b as D,c as I,d as T,s as z,e as B,a as M}from"./config.ebac126a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.119fc4d3.js";import"./formLayaut.vue_vue&type=style&index=0&lang.efe54a19.js";import"./V-Placeload.e1b5c41e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.fc314ba9.js";import"./index.8906c91d.js";import"./signComponent.vue_vue&type=script&setup=true&lang.f4a64fcb.js";import"./pdf_icon.4b8e9b3e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9093fe9.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.b3f50b9e.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.62f4b657.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8a404c76.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.5d7a09f8.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7327817.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import"./navbarLayoutState.8d9f9f4b.js";import"./V-Dropdown.4b56e22f.js";import"./useDropdown.0a27f828.js";import"./video.89824664.js";import"./activePanelState.618a6e66.js";import"./darkModeState.ac572066.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.7abfdf0e.js";import"./AnimatedLogo.77bc3feb.js";import"./V-Control.2f65f00c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0d63a362.js";import"./V-Block.vue_vue&type=script&setup=true&lang.218e9dd3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9f34b4f7.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.0749519e.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./fastpizza.1e58d0ec.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var K=c({expose:[],setup(e){b(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),L().then((e=>{w(V,"locations",e.data.locations)})),D().then((e=>{w(S,"city_id",I.value)})),T().then((e=>{w(S,"state_id",z.value)})),B().then((e=>{w(S,"country_id",M.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=f(1);f([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);O.value||x(a).then((e=>{if(e.data.status)A.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in A.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{A.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,c=i,l=n;return m(),d(l,null,{default:j((()=>[y("div",E,[y("div",F,[y("div",W,[1==t.value||2==t.value?(m(),d("div",$,[y(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),y(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),d(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default K;
