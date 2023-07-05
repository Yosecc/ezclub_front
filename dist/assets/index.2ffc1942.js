var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{t as u,u as i,h as c}from"./Reports.57bade75.js";import{p as d,n as v}from"./index.129f4881.js";import{d as m,h as y,i as f,l as j,k as b,F as _,R as g,G as h,r as w,o as x,H as V,S as P,B as D,K as O,O as S}from"./vendor.4454b83d.js";import{_ as k}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as C}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_ as L}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.b4377edc.js";import{p as $}from"./sidebarLayoutState.66d5e66f.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c2baafce.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./Companies.335d0f3d.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const B={class:"is-12 d-flex justify-content-end"},I=h("Download Excel"),R={class:"is-12 d-flex justify-content-end"},A=h(" Search ");var M=m({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e,s=()=>{const e=d(u.value);t("download",e)},o=()=>{const e=d(u.value);t("search",e)};return(e,t)=>{const r=n,l=p;return y(),f(g,null,[j("div",B,[j(r,{color:"primary",onClick:s,loading:a.loading},{default:b((()=>[I])),_:1},8,["loading"])]),j(l,{"inputs-step":_(u)},null,8,["inputs-step"]),j("div",R,[j(r,{color:"primary",loading:a.loading,onClick:o},{default:b((()=>[A])),_:1},8,["loading"])])],64)}}});const T={class:"is-12 d-flex justify-content-end mt-5"},Y=j("strong",null,"Total:",-1),z={class:"mt-1"},E={class:"table is-hoverable is-fullwidth"},U=j("thead",null,[j("tr",null,[j("th",{scope:"col"},"ID"),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Member Card ID"),j("th",{scope:"col"},"Description"),j("th",{scope:"col"},"Date"),j("th",{scope:"col"},"Payment Type"),j("th",{scope:"col"},"Invoice Type"),j("th",{scope:"col"},"Amount")])],-1),F={key:0};var G=m({expose:[],setup(e){const n=w([]),p=w(!1);x((async()=>{d()}));const u=async e=>{d(e)},d=async(e={})=>{p.value=!0;try{const t=await i(e);n.value=t.data}catch(t){v.error(t.message)}finally{p.value=!1}},m=async(e={})=>{p.value=!0;try{const i=await c((n=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e),u={report_export_type:"Products"==e.report_type?"products":"memberships"},t(n,a(u)))),d=window.URL.createObjectURL(new Blob([i.data])),v=document.createElement("a");v.href=d,v.setAttribute("download","reports.xlsx"),document.body.appendChild(v),v.click()}catch(i){v.error(i.message)}finally{p.value=!1}var n,u};return(e,t)=>{const a=M,s=k;return y(),f(s,null,{default:b((()=>[j("div",null,[j(a,{onSearch:u,loading:p.value,onDownload:m},null,8,["loading"])]),j("div",T,[j("p",null,[Y,h(" "+V(n.value.total_amount),1)])]),j("div",z,[j(C,{class:"is-12",center:"",size:"small",active:p.value},{default:b((()=>[j("table",E,[U,n.value&&!p.value?(y(),f("tbody",F,[(y(!0),f(g,null,P(n.value.data,((e,t)=>(y(),f("tr",{key:`report-${t}`},[j("td",null,V(e.id),1),j("td",null,V(`${e.first_name} ${e.last_name}`),1),j("td",null,V(`${e.bar_code}`),1),j("td",null,V(`${e.description}`),1),j("td",null,V(_(D)(e.created_at).format("MM/DD/YYYY")),1),j("td",null,V(e.payment_type),1),j("td",null,V(e.invoice_type),1),j("td",null,V(`$ ${e.amount}`),1)])))),128))])):O("",!0)])])),_:1},8,["active"])])])),_:1})}}});const H={class:"page-content-inner"},K={class:"columns is-multiline"};var N=m({expose:[],setup:e=>($.value="Reports",S({title:"Reports"}),x((()=>{})),(e,t)=>{const a=G,s=L;return y(),f(s,null,{default:b((()=>[j("div",H,[j("div",K,[j(a)])])])),_:1})})});export default N;
