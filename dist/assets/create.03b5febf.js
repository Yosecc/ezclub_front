var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,p=(e,p)=>{for(var o in p||(p={}))a.call(p,o)&&r(e,o,p[o]);if(t)for(var o of t(p))s.call(p,o)&&r(e,o,p[o]);return e};import{_ as o,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.7e0579cf.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e509fcc.js";import{d as c,L as l,G as v,r as m,o as d,h as f,O as y,j,k as b,J as g}from"./vendor.19059cc4.js";import{p as _}from"./sidebarLayoutState.efc25bb1.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.cc15c8e4.js";import{d as k,a as w,p as C,h as L,n as O}from"./index.baf361a5.js";import{b as A}from"./Companies.c782ca78.js";import{g as D,c as I,a as T,s as B,b as M,d as z}from"./config.b36841be.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf625c73.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.89489468.js";import"./V-Button.vue_vue&type=script&setup=true&lang.9233a2bf.js";import"./V-Placeload.72e6de58.js";import"./V-Control.e16eda34.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7ab7a74f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2af61529.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.47db5da5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.53f2a136.js";import"./formLayaut.vue_vue&type=style&index=0&lang.3fe24cd0.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.527b59b9.js";import"./signComponent.vue_vue&type=script&setup=true&lang.5614f9a1.js";import"./pdf_icon.ccbb02dc.js";import"./V-Card.vue_vue&type=script&setup=true&lang.3fb23d8a.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d8328939.js";import"./useDropdown.63c50e3d.js";import"./V-Dropdown.fd74f7e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.4b194de7.js";import"./activePanelState.922a5593.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0cc73652.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6a87dd80.js";import"./V-Message.vue_vue&type=script&setup=true&lang.6b830a51.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.7cc10ad0.js";import"./navbarLayoutState.9c1af26a.js";import"./video.00981ddd.js";import"./darkModeState.192f5f6e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2089f3a0.js";import"./AnimatedLogo.496829ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.cc282596.js";import"./V-Block.vue_vue&type=script&setup=true&lang.bfd23873.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.8511020c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.a82f9e10.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var G=c({expose:[],setup(e){y(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),A().then((e=>{w(V,"locations",e.data.locations)})),D().then((e=>{w(S,"city_id",I.value)})),T().then((e=>{w(S,"state_id",B.value)})),M().then((e=>{w(S,"country_id",z.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=m(1);m([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=p(p({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);L.value||x(a).then((e=>{if(e.data.status)O.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=o,p=u,c=i,l=n;return d(),f(l,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(d(),f("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(p,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(d(),f(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default G;
