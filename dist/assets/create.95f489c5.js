var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.f2d5b429.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c482bc24.js";import{d as c,y as l,z as v,r as m,o as d,h as f,A as b,j,k as y,K as g}from"./vendor.e90c84d1.js";import{p as _}from"./sidebarLayoutState.3b70282d.js";import{i as S,c as V,d as h,h as x,e as P}from"./Staffs.5058c6bd.js";import{c as k,d as w,s as C,p as O,h as A,n as L}from"./Companies.ae68c98c.js";import{b as D,c as I,d as T,s as z,e as B,a as M}from"./config.93109a66.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.8953bb92.js";import"./formLayaut.vue_vue&type=style&index=0&lang.82e2dd0c.js";import"./V-Placeload.ee7f8c5b.js";import"./V-Button.vue_vue&type=script&setup=true&lang.ef7eac27.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4a853f54.js";import"./index.79a34d92.js";import"./signComponent.vue_vue&type=script&setup=true&lang.a3064b84.js";import"./pdf_icon.b2e4c849.js";import"./V-Card.vue_vue&type=script&setup=true&lang.09c80a75.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0c171bd7.js";import"./useDropdown.bb1e43af.js";import"./V-Dropdown.fac6589e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.7dfb8fd1.js";import"./activePanelState.65accda4.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f65bb1a7.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.ece0b95a.js";import"./V-Message.vue_vue&type=script&setup=true&lang.78823b18.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.72eabd2d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.8396b95a.js";import"./navbarLayoutState.d323cef1.js";import"./video.7dbe223b.js";import"./darkModeState.bdd06e14.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.defa02c1.js";import"./AnimatedLogo.c5c08509.js";import"./V-Control.4bf5f307.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9c03a03a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.cb671742.js";import"./V-Block.vue_vue&type=script&setup=true&lang.dac3de8e.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.a25f6c2f.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.d0f677b0.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8421cb72.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.e4271b36.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var K=c({expose:[],setup(e){b(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),w().then((e=>{C(V,"locations",e.data.locations)})),D().then((e=>{C(S,"city_id",I.value)})),T().then((e=>{C(S,"state_id",z.value)})),B().then((e=>{C(S,"country_id",M.value)})),h().then((e=>{C(V,"staff_roles",e.data.staff_roles)}))}));const t=m(1);m([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},O(S.value)),O(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);A.value||x(a).then((e=>{if(e.data.status)L.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in L.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{L.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,c=i,l=n;return d(),f(l,null,{default:j((()=>[y("div",E,[y("div",F,[y("div",W,[1==t.value||2==t.value?(d(),f("div",$,[y(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),y(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(d(),f(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default K;
