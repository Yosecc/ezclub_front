var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.524ba226.js";import{_ as c}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.76ff9fed.js";import{d as n,I as l,G as v,r as d,o as m,h as f,J as j,j as y,k as b,L as g}from"./vendor.2054a2d2.js";import{p as _}from"./sidebarLayoutState.cfaf0763.js";import{i as S,c as V,d as h,h as x,e as P}from"./Staffs.058b5080.js";import{c as k,a as w,p as C,h as L,n as O}from"./index.8c434b3c.js";import{b as I}from"./Companies.f2eb7ee0.js";import{g as A,c as D,a as T,s as B,b as M,d as z}from"./config.6cdb67d8.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.3ec6c8cb.js";import"./formLayaut.vue_vue&type=style&index=0&lang.84e6db57.js";import"./V-Placeload.5867cb2a.js";import"./V-Button.vue_vue&type=script&setup=true&lang.1ccc60b1.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.f5308578.js";import"./signComponent.vue_vue&type=script&setup=true&lang.3de885cb.js";import"./pdf_icon.732577d2.js";import"./V-Card.vue_vue&type=script&setup=true&lang.41ce1566.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.510c180b.js";import"./useDropdown.b94ed7fe.js";import"./V-Dropdown.ff90eac2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.886826dd.js";import"./activePanelState.cdb63acf.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.7acae3ca.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5d37b18d.js";import"./V-Message.vue_vue&type=script&setup=true&lang.9e78ae66.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.6c5205c5.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e0b8e159.js";import"./navbarLayoutState.18f60985.js";import"./video.e86a6479.js";import"./darkModeState.9a3e9ff8.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d79dd735.js";import"./AnimatedLogo.43add9ed.js";import"./V-Control.f38832cb.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a08d1dac.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.c4ce5663.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8ad13f5d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.36272e7b.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.d0a8d940.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.66af2a95.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7b2e6a30.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var G=n({expose:[],setup(e){j(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),I().then((e=>{w(V,"locations",e.data.locations)})),A().then((e=>{w(S,"city_id",D.value)})),T().then((e=>{w(S,"state_id",B.value)})),M().then((e=>{w(S,"country_id",z.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=d(1);d([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);L.value||x(a).then((e=>{if(e.data.status)O.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in O.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{O.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,n=i,l=c;return m(),f(l,null,{default:y((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(m(),f("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),f(n,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default G;