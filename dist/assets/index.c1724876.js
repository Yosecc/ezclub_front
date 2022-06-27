var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as l}from"./memberFilterReportsTable.vue_vue&type=script&setup=true&lang.d332a7fe.js";import{_ as u}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{a as n,d as i}from"./Reports.6512c74c.js";import{d as c,r as d,H as v,o as m,h as y,j as f,k as j,R as b,S as _,G as g,E as h,A as w,K as V,O as x}from"./vendor.c210e0cb.js";import{_ as P}from"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import{n as O}from"./index.0dd75cf6.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.20132096.js";import{p as k}from"./sidebarLayoutState.56e6ff2f.js";import"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import"./V-Placeload.141ef784.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7fec429f.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./Companies.a0ad3c72.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const D={class:"mt-4"},L={class:"table is-hoverable is-fullwidth"},R=j("thead",null,[j("tr",null,[j("th",{scope:"col"},"ID"),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Date")])],-1),C={key:0},M={key:1},A=j("tr",null,[j("td"),j("td",null,"No members"),j("td")],-1);var B=c({expose:[],setup(e){const c=d([]),x=d(!1);v((async()=>{k()}));const S=async e=>{k(e)},k=async(e={})=>{x.value=!0;try{const t=await n(e);c.value=t.data}catch(t){O.error(t.message)}finally{x.value=!1}},B=async(e={})=>{x.value=!0;try{const n=await i((l=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&p(e,a,t[a]);return e})({},e),u={report_export_type:"members"},t(l,a(u)))),c=window.URL.createObjectURL(new Blob([n.data])),d=document.createElement("a");d.href=c,d.setAttribute("download","reports.xlsx"),document.body.appendChild(d),d.click()}catch(n){O.error(n.message)}finally{x.value=!1}var l,u};return(e,t)=>{const a=l,r=u;return m(),y(r,null,{default:f((()=>[j("div",null,[j(a,{onSearch:S,loading:x.value,onDownload:B},null,8,["loading"])]),j("div",D,[j(P,{class:"is-12",center:"",size:"small",active:x.value},{default:f((()=>[j("table",L,[R,c.value&&!x.value?(m(),y("tbody",C,[(m(!0),y(b,null,_(c.value,((e,t)=>{var a;return m(),y("tr",{key:`report-${t}`},[j("td",null,g(e.id),1),j("td",null,g(`${e.first_name} ${null!=(a=e.second_name)?a:""} ${e.last_name}`),1),j("td",null,g(h(w)(e.created_at).format("MM/DD/YYYY")),1)])})),128))])):V("",!0),c.value.length<1&&!x.value?(m(),y("tbody",M,[A])):V("",!0)])])),_:1},8,["active"])])])),_:1})}}});const I={class:"page-content-inner"},Y={class:"columns is-multiline"};var $=c({expose:[],setup:e=>(k.value="Member's Reports",x({title:"Member's Reports"}),v((()=>{})),(e,t)=>{const a=B,r=S;return m(),y(r,null,{default:f((()=>[j("div",I,[j("div",Y,[j(a)])])])),_:1})})});export default $;
