var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{_ as p}from"./memberFilterReportsTable.vue_vue&type=script&setup=true&lang.374542b7.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{_ as i}from"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import{c as n,d as c}from"./Reports.24b498ef.js";import{d,r as m,H as v,o as f,h as y,i as b,j,k as _,R as g,S as h,G as w,E as V,A as P,K as x,F as O,O as k}from"./vendor.41bfc188.js";import{_ as S}from"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import{n as D}from"./index.4bf796d7.js";import{_ as L}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.6556914c.js";import{p as M}from"./sidebarLayoutState.454c18d7.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Placeload.f8b8ec60.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.059712b8.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./Companies.e8851def.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const R={class:"mt-4"},C={class:"table is-hoverable is-fullwidth"},A=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"ID"),_("th",{scope:"col"},"Name"),_("th",{scope:"col"},"Membership"),_("th",{scope:"col"},"Date"),_("th",{scope:"col"},"Profile")])],-1),B={key:0},I=O(" Profile "),Y={key:1},$=_("tr",null,[_("td"),_("td",null,"No members"),_("td")],-1);var z=d({expose:[],setup(e){const d=m([]),O=m(!1);v((async()=>{L()}));const k=async e=>{L(e)},L=async(e={})=>{O.value=!0;try{const t=await n(e);d.value=t.data}catch(t){D.error(t.message)}finally{O.value=!1}},M=async(e={})=>{O.value=!0;try{const i=await c((p=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e})({},e),u={report_export_type:"members"},t(p,r(u)))),n=window.URL.createObjectURL(new Blob([i.data])),d=document.createElement("a");d.href=n,d.setAttribute("download","reports.xlsx"),document.body.appendChild(d),d.click()}catch(i){D.error(i.message)}finally{O.value=!1}var p,u};return(e,t)=>{const r=p,a=u,s=b("router-link"),o=i;return f(),y(o,null,{default:j((()=>[_("div",null,[_(r,{onSearch:k,loading:O.value,onDownload:M},null,8,["loading"])]),_("div",R,[_(S,{class:"is-12",center:"",size:"small",active:O.value},{default:j((()=>[_("table",C,[A,d.value&&!O.value?(f(),y("tbody",B,[(f(!0),y(g,null,h(d.value,((e,t)=>{var r;return f(),y("tr",{key:`report-${t}`},[_("td",null,w(e.id),1),_("td",null,w(`${e.first_name} ${null!=(r=e.second_name)?r:""} ${e.last_name}`),1),_("td",null,w(e.membership),1),_("td",null,w(V(P)(e.created_at).format("MM/DD/YYYY")),1),_("td",null,[_(s,{to:{name:"members-profile",query:{id:e.id}},class:"btn btn-primary"},{default:j((()=>[_(a,{color:"primary",outlined:""},{default:j((()=>[I])),_:1})])),_:2},1032,["to"])])])})),128))])):x("",!0),d.value.length<1&&!O.value?(f(),y("tbody",Y,[$])):x("",!0)])])),_:1},8,["active"])])])),_:1})}}});const E={class:"page-content-inner"},F={class:"columns is-multiline"};var T=d({expose:[],setup:e=>(M.value="Member's Reports",k({title:"Member's Reports"}),v((()=>{})),(e,t)=>{const r=z,a=L;return f(),y(a,null,{default:j((()=>[_("div",E,[_("div",F,[_(r)])])])),_:1})})});export default T;
