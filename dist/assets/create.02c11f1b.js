var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.e5ef1ab4.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e01fb9f2.js";import{d as c,y as l,z as v,r as d,o as m,h as f,A as y,j,k as b,K as g}from"./vendor.42a295ea.js";import{p as _}from"./sidebarLayoutState.52178f66.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.da0d2077.js";import{c as k,s as w,p as C,h as O,n as A}from"./index.1a06469b.js";import{a as L}from"./Companies.a4797ab3.js";import{b as D,c as I,d as T,s as z,e as B,a as M}from"./config.f27f03f5.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.05034d3a.js";import"./formLayaut.vue_vue&type=style&index=0&lang.de409503.js";import"./V-Placeload.632826ef.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f7302fd6.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4e256e46.js";import"./signComponent.vue_vue&type=script&setup=true&lang.5212070a.js";import"./pdf_icon.bc2c5bad.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a7cae2c2.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8a055d59.js";import"./useDropdown.d90c2b4c.js";import"./V-Dropdown.3b79d4cd.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.796e641d.js";import"./activePanelState.2211c9ac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.3096b4c8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import"./V-Message.vue_vue&type=script&setup=true&lang.29aa6339.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.18497c11.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.efd369c7.js";import"./navbarLayoutState.5c37b211.js";import"./video.0a3f5b0b.js";import"./darkModeState.d08d2b99.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.df39ff9a.js";import"./AnimatedLogo.d7113c02.js";import"./V-Control.c35d44b1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e8c1cc62.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e380e6f2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.965255fa.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.992cd783.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2c67469b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3856dadb.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.403db530.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var K=c({expose:[],setup(e){y(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),L().then((e=>{w(V,"locations",e.data.locations)})),D().then((e=>{w(S,"city_id",I.value)})),T().then((e=>{w(S,"state_id",z.value)})),B().then((e=>{w(S,"country_id",M.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=d(1);d([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);O.value||x(a).then((e=>{if(e.data.status)A.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in A.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{A.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,c=i,l=n;return m(),f(l,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(m(),f("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),f(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default K;
