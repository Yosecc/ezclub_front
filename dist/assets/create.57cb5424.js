var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.3b593ee7.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27dfac85.js";import{d as n,L as l,a4 as c,O as v,H as f,r as m,o as d,i as y,j,G as b,k as g}from"./vendor.512b7acb.js";import{p as _}from"./sidebarLayoutState.08ab8119.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.2ff154a0.js";import{d as w,a as L,p as k,h as O,n as C}from"./index.839b10d7.js";import{b as A}from"./Companies.29e83f59.js";import{g as D,c as I,a as T,s as B,b as M,d as W}from"./config.f7f12d30.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.471307b0.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.aa5c0d97.js";import"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import"./V-Placeload.982e0955.js";import"./V-Control.5136ae9f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5cc17432.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.65c51667.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b069e1cd.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.46f55814.js";import"./formLayaut.vue_vue&type=style&index=0&lang.0872bfe2.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.82fbf6e3.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.2808a08d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.b8ef0579.js";import"./useDropdown.10df4d81.js";import"./V-Dropdown.b805b674.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f78f5288.js";import"./activePanelState.53d13aa7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.33cb9875.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.8ff326ca.js";import"./V-Message.vue_vue&type=script&setup=true&lang.4f410568.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.14f85ffe.js";import"./navbarLayoutState.3b049ce0.js";import"./video.81ca49e0.js";import"./darkModeState.8ae54720.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c6af2930.js";import"./AnimatedLogo.afd186e6.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33fcd2c5.js";import"./V-Block.vue_vue&type=script&setup=true&lang.7ac5b30d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9114be65.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.9d07b6d1.js";const z={class:"page-content-inner"},E={class:"columns is-multiline"},F={class:"column is-12"},$={key:0};var q=n({expose:[],setup(e){l();const t=c();_.value="New Staff",v({title:"Staffs"}),f((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{L(h,"locations",e.data.locations)})),D().then((e=>{L(V,"city_id",I.value)})),T().then((e=>{L(V,"state_id",B.value)})),M().then((e=>{L(V,"country_id",W.value)})),x().then((e=>{L(h,"staff_roles",e.data.staff_roles)}))}));const a=m(1);m([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},k(V.value)),k(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);O.value||P(s).then((e=>{if(e.data.status)C.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in C.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{C.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),y(n,null,{default:j((()=>[b(" Content Wrapper "),g("div",z,[g("div",E,[g("div",F,[b(' <transition name="fade" mode="out-in" appear> '),1==a.value||2==a.value?(d(),y("div",$,[g(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),g(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):b("v-if",!0),b(' <staffWaiver\n            type="create"\n            :buttons="[]"\n            :step="3"\n          /> '),b(" </transition> ")])])])])),_:1})}}});export default q;
