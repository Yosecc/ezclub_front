<<<<<<< HEAD:dist/assets/index.2d6db813.js
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{t as u,u as i,h as c}from"./Reports.6096ba00.js";import{p as d,n as v}from"./index.3c26e2a1.js";import{d as m,h as y,i as f,l as j,k as b,F as _,R as g,G as h,r as w,o as x,H as V,S as P,B as D,K as O,O as S}from"./vendor.3e3390b7.js";import{_ as k}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{_ as C}from"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import{_ as L}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.83b20eb8.js";import{p as $}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Placeload.f3ddf6cd.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.49d34861.js";import"./useDropdown.fb013c95.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./Companies.6c6219d2.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const B={class:"is-12 d-flex justify-content-end"},I=h("Download Excel"),R={class:"is-12 d-flex justify-content-end"},A=h(" Search ");var M=m({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e,s=()=>{const e=d(u.value);t("download",e)},o=()=>{const e=d(u.value);t("search",e)};return(e,t)=>{const r=n,l=p;return y(),f(g,null,[j("div",B,[j(r,{color:"primary",onClick:s,loading:a.loading},{default:b((()=>[I])),_:1},8,["loading"])]),j(l,{"inputs-step":_(u)},null,8,["inputs-step"]),j("div",R,[j(r,{color:"primary",loading:a.loading,onClick:o},{default:b((()=>[A])),_:1},8,["loading"])])],64)}}});const T={class:"is-12 d-flex justify-content-end mt-5"},Y=j("strong",null,"Total:",-1),z={class:"mt-1"},E={class:"table is-hoverable is-fullwidth"},U=j("thead",null,[j("tr",null,[j("th",{scope:"col"},"ID"),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Member Card ID"),j("th",{scope:"col"},"Description"),j("th",{scope:"col"},"Date"),j("th",{scope:"col"},"Payment Type"),j("th",{scope:"col"},"Invoice Type"),j("th",{scope:"col"},"Amount")])],-1),F={key:0};var G=m({expose:[],setup(e){const n=w([]),p=w(!1);x((async()=>{d()}));const u=async e=>{d(e)},d=async(e={})=>{p.value=!0;try{const t=await i(e);n.value=t.data}catch(t){v.error(t.message)}finally{p.value=!1}},m=async(e={})=>{p.value=!0;try{const i=await c((n=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e),u={report_export_type:"Products"==e.report_type?"products":"memberships"},t(n,a(u)))),d=window.URL.createObjectURL(new Blob([i.data])),v=document.createElement("a");v.href=d,v.setAttribute("download","reports.xlsx"),document.body.appendChild(v),v.click()}catch(i){v.error(i.message)}finally{p.value=!1}var n,u};return(e,t)=>{const a=M,s=k;return y(),f(s,null,{default:b((()=>[j("div",null,[j(a,{onSearch:u,loading:p.value,onDownload:m},null,8,["loading"])]),j("div",T,[j("p",null,[Y,h(" "+V(n.value.total_amount),1)])]),j("div",z,[j(C,{class:"is-12",center:"",size:"small",active:p.value},{default:b((()=>[j("table",E,[U,n.value&&!p.value?(y(),f("tbody",F,[(y(!0),f(g,null,P(n.value.data,((e,t)=>(y(),f("tr",{key:`report-${t}`},[j("td",null,V(e.id),1),j("td",null,V(`${e.first_name} ${e.last_name}`),1),j("td",null,V(`${e.bar_code}`),1),j("td",null,V(`${e.description}`),1),j("td",null,V(_(D)(e.created_at).format("MM/DD/YYYY")),1),j("td",null,V(e.payment_type),1),j("td",null,V(e.invoice_type),1),j("td",null,V(`$ ${e.amount}`),1)])))),128))])):O("",!0)])])),_:1},8,["active"])])])),_:1})}}});const H={class:"page-content-inner"},K={class:"columns is-multiline"};var N=m({expose:[],setup:e=>($.value="Reports",S({title:"Reports"}),x((()=>{})),(e,t)=>{const a=G,s=L;return y(),f(s,null,{default:b((()=>[j("div",H,[j("div",K,[j(a)])])])),_:1})})});export default N;
=======
var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.dd846f77.js";import{t as u,u as i,h as c}from"./Reports.7f8131da.js";import{p as d,n as v}from"./index.16a56777.js";import{d as m,h as y,i as f,l as j,k as _,F as b,R as g,G as h,r as w,o as x,H as V,S as P,B as D,K as O,O as S}from"./vendor.5900a5e9.js";import{_ as k}from"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import{_ as C}from"./V-Loader.vue_vue&type=script&setup=true&lang.4aaf2044.js";import{_ as L}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.50ffd65d.js";import{p as $}from"./sidebarLayoutState.46a7a7b4.js";import"./V-Placeload.587d3033.js";import"./V-Control.e6c5ff74.js";import"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a5136f39.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0d618a83.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6cba1bd2.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c64ce976.js";import"./useDropdown.52632823.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bd3d0e81.js";import"./V-Dropdown.e1ce4f1b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1def27b8.js";import"./Companies.5c5a8844.js";import"./activePanelState.f79aea14.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a4cbd523.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.e475383e.js";import"./video.e1f95447.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.44a9072c.js";import"./darkModeState.2151b6b7.js";import"./AnimatedLogo.ec05a80c.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5b14f2f7.js";import"./V-Block.vue_vue&type=script&setup=true&lang.67c026d4.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.eaee0492.js";import"./userPopovers.f4b9fc60.js";const B={class:"is-12 d-flex justify-content-end"},I=h("Download Excel"),R={class:"is-12 d-flex justify-content-end"},A=h(" Search ");var M=m({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e,s=()=>{const e=d(u.value);t("download",e)},o=()=>{const e=d(u.value);t("search",e)};return(e,t)=>{const r=n,l=p;return y(),f(g,null,[j("div",B,[j(r,{color:"primary",onClick:s,loading:a.loading},{default:_((()=>[I])),_:1},8,["loading"])]),j(l,{"inputs-step":b(u)},null,8,["inputs-step"]),j("div",R,[j(r,{color:"primary",loading:a.loading,onClick:o},{default:_((()=>[A])),_:1},8,["loading"])])],64)}}});const T={class:"is-12 d-flex justify-content-end mt-5"},Y=j("strong",null,"Total:",-1),z={class:"mt-1"},E={class:"table is-hoverable is-fullwidth"},U=j("thead",null,[j("tr",null,[j("th",{scope:"col"},"ID"),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Member Card ID"),j("th",{scope:"col"},"Description"),j("th",{scope:"col"},"Date"),j("th",{scope:"col"},"Payment Type"),j("th",{scope:"col"},"Invoice Type"),j("th",{scope:"col"},"Amount")])],-1),F={key:0};var G=m({expose:[],setup(e){const n=w([]),p=w(!1);x((async()=>{d()}));const u=async e=>{d(e)},d=async(e={})=>{p.value=!0;try{const t=await i(e);n.value=t.data}catch(t){v.error(t.message)}finally{p.value=!1}},m=async(e={})=>{p.value=!0;try{const i=await c((n=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e),u={report_export_type:"Products"==e.report_type?"products":"memberships"},t(n,a(u)))),d=window.URL.createObjectURL(new Blob([i.data])),v=document.createElement("a");v.href=d,v.setAttribute("download","reports.xlsx"),document.body.appendChild(v),v.click()}catch(i){v.error(i.message)}finally{p.value=!1}var n,u};return(e,t)=>{const a=M,s=k;return y(),f(s,null,{default:_((()=>[j("div",null,[j(a,{onSearch:u,loading:p.value,onDownload:m},null,8,["loading"])]),j("div",T,[j("p",null,[Y,h(" "+V(n.value.total_amount),1)])]),j("div",z,[j(C,{class:"is-12",center:"",size:"small",active:p.value},{default:_((()=>[j("table",E,[U,n.value&&!p.value?(y(),f("tbody",F,[(y(!0),f(g,null,P(n.value.data,((e,t)=>(y(),f("tr",{key:`report-${t}`},[j("td",null,V(e.id),1),j("td",null,V(`${e.first_name} ${e.last_name}`),1),j("td",null,V(`${e.bar_code}`),1),j("td",null,V(`${e.description}`),1),j("td",null,V(b(D)(e.created_at).format("MM/DD/YYYY")),1),j("td",null,V(e.payment_type),1),j("td",null,V(e.invoice_type),1),j("td",null,V(`$ ${e.amount}`),1)])))),128))])):O("",!0)])])),_:1},8,["active"])])])),_:1})}}});const H={class:"page-content-inner"},K={class:"columns is-multiline"};var N=m({expose:[],setup:e=>($.value="Reports",S({title:"Reports"}),x((()=>{})),(e,t)=>{const a=G,s=L;return y(),f(s,null,{default:_((()=>[j("div",H,[j("div",K,[j(a)])])])),_:1})})});export default N;
>>>>>>> 577e70e0aca14702fdf4027e6116d43d016aadcf:dist/assets/index.6a68502b.js
