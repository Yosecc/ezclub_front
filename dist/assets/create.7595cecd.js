var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.9568c407.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.56a6fc43.js";import{d as n,L as c,G as l,r as v,o as d,h as m,O as f,a4 as y,j,k as b,J as g}from"./vendor.c636f33b.js";import{p as _}from"./sidebarLayoutState.7607026f.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.6ee2e842.js";import{d as w,a as L,p as k,h as O,n as C}from"./index.56773f49.js";import{b as A}from"./Companies.257787d6.js";import{g as D,c as I,a as T,s as B,b as M,d as z}from"./config.8ebe5154.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.7c99132b.js";import"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import"./V-Placeload.c195e33d.js";import"./V-Control.237cc4d1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.32e67a93.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d231cd7d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.b041b4d1.js";import"./formLayaut.vue_vue&type=style&index=0&lang.34ec138d.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.a4702afa.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0c1f8e0b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d7fa5c56.js";import"./useDropdown.35c6b80e.js";import"./V-Dropdown.2bdf3018.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";import"./activePanelState.8d6f746c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6004025a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import"./V-Message.vue_vue&type=script&setup=true&lang.085649cc.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.63bdcb05.js";import"./navbarLayoutState.0b2c05f7.js";import"./video.c58ada5a.js";import"./darkModeState.77580bb1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cce55643.js";import"./AnimatedLogo.a42abb6a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e5a3139a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.29ae6253.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.068e83d3.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1e8fe599.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var G=n({expose:[],setup(e){f();const t=y();_.value="New Staff",c({title:"Staffs"}),l((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{L(h,"locations",e.data.locations)})),D().then((e=>{L(V,"city_id",I.value)})),T().then((e=>{L(V,"state_id",B.value)})),M().then((e=>{L(V,"country_id",z.value)})),x().then((e=>{L(h,"staff_roles",e.data.staff_roles)}))}));const a=v(1);v([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},k(V.value)),k(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);O.value||P(s).then((e=>{if(e.data.status)C.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in C.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{C.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),m(n,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",$,[1==a.value||2==a.value?(d(),m("div",q,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0)])])])])),_:1})}}});export default G;
