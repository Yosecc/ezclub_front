var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.5ad7bfa4.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.279ba070.js";import{d as n,O as c,aa as l,P as v,I as d,r as m,o as f,i as y,j as b,H as j,k as g}from"./vendor.5bccebbb.js";import{p as _}from"./sidebarLayoutState.620c70af.js";import{b as S,e as V,f as h,h as x,k as P}from"./Staffs.cfb6dfed.js";import{e as k,a as w,p as C,h as O,n as L}from"./index.ce7c9574.js";import{a as I}from"./Companies.4f2d16d5.js";import{g as A,c as D,a as B,s as W,b as z,d as E}from"./config.8db08a5e.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import"./V-Placeload.8ccc7bfb.js";import"./V-Control.a9c2cbb9.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80224232.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5d45ce20.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3df65f9d.js";import"./V-Card.vue_vue&type=script&setup=true&lang.cb28cdf7.js";import"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.0bff9431.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0d0e2b74.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.1592ae44.js";import"./useDropdown.04bc7533.js";import"./V-Dropdown.e4c10296.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.c4247789.js";import"./activePanelState.5e0ea050.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.22802a6a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.df44a07c.js";import"./video.3bfbcca0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f802abe5.js";import"./darkModeState.ac3ed3a0.js";import"./AnimatedLogo.1a22360b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import"./userPopovers.f4b9fc60.js";const F={class:"page-content-inner"},M={class:"columns is-multiline"},T={class:"column is-12"},U={key:0};var $=n({expose:[],setup(e){c();const t=l();_.value="New Staff",v({title:"Staffs"}),d((()=>{S.value=null,k(V.value),k(h.value),I().then((e=>{w(h,"locations",e.data.locations)})),A().then((e=>{w(V,"city_id",D.value)})),B().then((e=>{w(V,"state_id",W.value)})),z().then((e=>{w(V,"country_id",E.value)})),x().then((e=>{w(h,"staff_roles",e.data.staff_roles)}))}));const a=m(1);m([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},C(V.value)),C(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);O.value||P(s).then((e=>{if(e.data.status)L.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in L.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{L.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return f(),y(n,null,{default:b((()=>[j(" Content Wrapper "),g("div",F,[g("div",M,[g("div",T,[j(' <transition name="fade" mode="out-in" appear> '),1==a.value||2==a.value?(f(),y("div",U,[g(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),g(o,{type:"create",buttons:[],step:2,class:"mb-3"}),j('  <staffUser \n            type="create"\n            :buttons="[]"\n            class="mb-3"\n          /> ')])):j("v-if",!0),j(' <staffWaiver\n            type="create"\n            :buttons="[]"\n            :step="3"\n          /> '),j(" </transition> ")])])])])),_:1})}}});export default $;
