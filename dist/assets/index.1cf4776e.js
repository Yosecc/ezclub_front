var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as u}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{f as p,g as i,d as c}from"./Reports.09fa01cf.js";import{a as d,p as v,n as m}from"./index.63ee1d41.js";import{g as f}from"./Staffs.9bc46c8f.js";import{d as y,o as j,h as g,i as b,l as _,k as h,F as w,R as x,G as V,r as P,H as S,S as k,B as O,K as D,O as C}from"./vendor.4454b83d.js";import{_ as Y}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as L}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_ as M}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7249f2df.js";import{p as A}from"./sidebarLayoutState.66d5e66f.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.cfbf419f.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./Companies.973933af.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const B={class:"is-12 d-flex justify-content-end"},R=V("Download Excel"),T={class:"is-12 d-flex justify-content-end"},I=V(" Search Members ");var U=y({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e;j((async()=>{const e=await f();d(p,"trainer_id",e.data)}));const s=()=>{const e=v(p.value);t("download",e)},r=()=>{const e=v(p.value);t("search",e)};return(e,t)=>{const o=n,l=u;return g(),b(x,null,[_("div",B,[_(o,{color:"primary",onClick:s,loading:a.loading},{default:h((()=>[R])),_:1},8,["loading"])]),_(l,{"inputs-step":w(p)},null,8,["inputs-step"]),_("div",T,[_(o,{color:"primary",loading:a.loading,onClick:r},{default:h((()=>[I])),_:1},8,["loading"])])],64)}}});const $={class:"is-12 d-flex justify-content-end mt-5"},z=_("strong",null,"Total:",-1),E={class:"mt-1"},F={class:"table is-hoverable is-fullwidth"},N=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"ID"),_("th",{scope:"col"},"Name"),_("th",{scope:"col"},"Created At"),_("th",{scope:"col"},"Update At")])],-1),G={key:0},H={key:1},K=_("tr",null,[_("td"),_("td",null,"No members"),_("td")],-1);var q=y({expose:[],setup(e){const n=P([]),u=P(!1),p=async e=>{d(e)},d=async(e={})=>{u.value=!0;try{const t=await i(e);n.value=t.data}catch(t){m.error(t.message)}finally{u.value=!1}},v=async(e={})=>{u.value=!0;try{const i=await c((n=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&l(e,a,t[a]);return e})({},e),p={report_export_type:"memberships"},t(n,a(p)))),d=window.URL.createObjectURL(new Blob([i.data])),v=document.createElement("a");v.href=d,v.setAttribute("download","reports.xlsx"),document.body.appendChild(v),v.click()}catch(i){m.error(i.message)}finally{u.value=!1}var n,p};return(e,t)=>{const a=U,s=Y;return g(),b(s,null,{default:h((()=>[_("div",null,[_(a,{onSearch:p,loading:u.value,onDownload:v},null,8,["loading"])]),_("div",$,[_("p",null,[z,V(" "+S(n.value.length),1)])]),_("div",E,[_(L,{class:"is-12",center:"",size:"small",active:u.value},{default:h((()=>[_("table",F,[N,n.value&&!u.value?(g(),b("tbody",G,[(g(!0),b(x,null,k(n.value,((e,t)=>{var a;return g(),b("tr",{key:`report-${t}`},[_("td",null,S(e.id),1),_("td",null,S(`${e.name} ${null!=(a=e.second_name)?a:""} ${e.last_name}`),1),_("td",null,S(w(O)(e.created_at).format("MM/DD/YYYY")),1),_("td",null,S(w(O)(e.updated_at).format("MM/DD/YYYY")),1)])})),128))])):D("",!0),n.value.length<1&&!u.value?(g(),b("tbody",H,[K])):D("",!0)])])),_:1},8,["active"])])])),_:1})}}});const J={class:"page-content-inner"},Q={class:"columns is-multiline"};var W=y({expose:[],setup:e=>(A.value="Trainer Reports",C({title:"Trainer Reports"}),j((()=>{})),(e,t)=>{const a=q,s=M;return g(),b(s,null,{default:h((()=>[_("div",J,[_("div",Q,[_(a)])])])),_:1})})});export default W;
