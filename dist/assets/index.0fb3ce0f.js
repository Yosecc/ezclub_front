var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{_ as p}from"./memberFilterReportsTable.vue_vue&type=script&setup=true&lang.e4529b18.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as i}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{l as n,h as c}from"./Reports.6007a0e6.js";import{d,r as m,o as v,h as y,i as f,j as b,k as j,l as _,R as g,S as h,H as w,F as V,B as P,K as x,G as O,O as k}from"./vendor.4454b83d.js";import{_ as S}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{n as D}from"./index.fdcc5e7e.js";import{_ as L}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e0bd75f.js";import{p as M}from"./sidebarLayoutState.66d5e66f.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Placeload.28979271.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d49a29d8.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./Companies.279c1d6f.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const R={class:"mt-4"},C={class:"table is-hoverable is-fullwidth"},B=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"ID"),_("th",{scope:"col"},"Name"),_("th",{scope:"col"},"Membership"),_("th",{scope:"col"},"Date"),_("th",{scope:"col"},"Profile")])],-1),A={key:0},I=O(" Profile "),Y={key:1},$=_("tr",null,[_("td"),_("td",null,"No members"),_("td")],-1);var z=d({expose:[],setup(e){const d=m([]),O=m(!1);v((async()=>{L()}));const k=async e=>{L(e)},L=async(e={})=>{O.value=!0;try{const t=await n(e);d.value=t.data}catch(t){D.error(t.message)}finally{O.value=!1}},M=async(e={})=>{O.value=!0;try{const i=await c((p=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e})({},e),u={report_export_type:"members"},t(p,r(u)))),n=window.URL.createObjectURL(new Blob([i.data])),d=document.createElement("a");d.href=n,d.setAttribute("download","reports.xlsx"),document.body.appendChild(d),d.click()}catch(i){D.error(i.message)}finally{O.value=!1}var p,u};return(e,t)=>{const r=p,a=u,s=b("router-link"),o=i;return y(),f(o,null,{default:j((()=>[_("div",null,[_(r,{onSearch:k,loading:O.value,onDownload:M},null,8,["loading"])]),_("div",R,[_(S,{class:"is-12",center:"",size:"small",active:O.value},{default:j((()=>[_("table",C,[B,d.value&&!O.value?(y(),f("tbody",A,[(y(!0),f(g,null,h(d.value,((e,t)=>{var r;return y(),f("tr",{key:`report-${t}`},[_("td",null,w(e.id),1),_("td",null,w(`${e.first_name} ${null!=(r=e.second_name)?r:""} ${e.last_name}`),1),_("td",null,w(e.membership),1),_("td",null,w(V(P)(e.created_at).format("MM/DD/YYYY")),1),_("td",null,[_(s,{to:{name:"members-profile",query:{id:e.id}},class:"btn btn-primary"},{default:j((()=>[_(a,{color:"primary",outlined:""},{default:j((()=>[I])),_:1})])),_:2},1032,["to"])])])})),128))])):x("",!0),d.value.length<1&&!O.value?(y(),f("tbody",Y,[$])):x("",!0)])])),_:1},8,["active"])])])),_:1})}}});const F={class:"page-content-inner"},T={class:"columns is-multiline"};var U=d({expose:[],setup:e=>(M.value="Member's Reports",k({title:"Member's Reports"}),v((()=>{})),(e,t)=>{const r=z,a=L;return y(),f(a,null,{default:j((()=>[_("div",F,[_("div",T,[_(r)])])])),_:1})})});export default U;
