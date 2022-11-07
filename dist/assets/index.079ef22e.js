var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import{d as u,o as i,i as c,j as d,l as v,k as m,F as f,S as y,G as j,r as g,H as b,U as _,B as h,I as w,P as x}from"./vendor.435948fe.js";import{f as V,g as P,d as S}from"./Reports.f6acf496.js";import{a as k,p as C,n as D}from"./index.ff49a0f4.js";import{g as O}from"./Staffs.3297a4ff.js";import{_ as Y}from"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import{_ as L}from"./V-Loader.vue_vue&type=script&setup=true&lang.e3659163.js";import{_ as M}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.23edd7aa.js";import{p as A}from"./sidebarLayoutState.c7ec3620.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ec1ed57b.js";import"./useDropdown.9dc4bfe3.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import"./V-Dropdown.3004e9ea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./Companies.5246daaa.js";import"./activePanelState.66f70896.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e4d5431d.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a5b69815.js";import"./video.413cf4d2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3a098275.js";import"./darkModeState.010a41bc.js";import"./AnimatedLogo.030703f2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import"./userPopovers.f4b9fc60.js";const B={class:"is-12 d-flex justify-content-end"},I=j("Download Excel"),R={class:"is-12 d-flex justify-content-end"},T=j(" Search Members ");var U=u({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e;i((async()=>{const e=await O();k(V,"trainer_id",e.data)}));const s=()=>{const e=C(V.value);t("download",e)},r=()=>{const e=C(V.value);t("search",e)};return(e,t)=>{const o=n,l=p;return c(),d(y,null,[v("div",B,[v(o,{color:"primary",onClick:s,loading:a.loading},{default:m((()=>[I])),_:1},8,["loading"])]),v(l,{"inputs-step":f(V)},null,8,["inputs-step"]),v("div",R,[v(o,{color:"primary",loading:a.loading,onClick:r},{default:m((()=>[T])),_:1},8,["loading"])])],64)}}});const $={class:"is-12 d-flex justify-content-end mt-5"},z=v("strong",null,"Total:",-1),E={class:"mt-1"},F={class:"table is-hoverable is-fullwidth"},N=v("thead",null,[v("tr",null,[v("th",{scope:"col"},"ID"),v("th",{scope:"col"},"Name"),v("th",{scope:"col"},"Created At"),v("th",{scope:"col"},"Update At")])],-1),G={key:0},H={key:1},W=v("tr",null,[v("td"),v("td",null,"No members"),v("td")],-1);var q=u({expose:[],setup(e){const n=g([]),p=g(!1),u=async e=>{i(e)},i=async(e={})=>{p.value=!0;try{const t=await P(e);n.value=t.data}catch(t){D.error(t.message)}finally{p.value=!1}},x=async(e={})=>{p.value=!0;try{const i=await S((n=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&l(e,a,t[a]);return e})({},e),u={report_export_type:"memberships"},t(n,a(u)))),c=window.URL.createObjectURL(new Blob([i.data])),d=document.createElement("a");d.href=c,d.setAttribute("download","reports.xlsx"),document.body.appendChild(d),d.click()}catch(i){D.error(i.message)}finally{p.value=!1}var n,u};return(e,t)=>{const a=U,s=Y;return c(),d(s,null,{default:m((()=>[v("div",null,[v(a,{onSearch:u,loading:p.value,onDownload:x},null,8,["loading"])]),v("div",$,[v("p",null,[z,j(" "+b(n.value.length),1)])]),v("div",E,[v(L,{class:"is-12",center:"",size:"small",active:p.value},{default:m((()=>[v("table",F,[N,n.value&&!p.value?(c(),d("tbody",G,[(c(!0),d(y,null,_(n.value,((e,t)=>{var a;return c(),d("tr",{key:`report-${t}`},[v("td",null,b(e.id),1),v("td",null,b(`${e.name} ${null!=(a=e.second_name)?a:""} ${e.last_name}`),1),v("td",null,b(f(h)(e.created_at).format("MM/DD/YYYY")),1),v("td",null,b(f(h)(e.updated_at).format("MM/DD/YYYY")),1)])})),128))])):w("v-if",!0),n.value.length<1&&!p.value?(c(),d("tbody",H,[W])):w("v-if",!0)])])),_:1},8,["active"])])])),_:1})}}});const J={class:"page-content-inner"},K={class:"columns is-multiline"};var Q=u({expose:[],setup:e=>(A.value="Trainer Reports",x({title:"Trainer Reports"}),i((()=>{})),(e,t)=>{const a=q,s=M;return c(),d(s,null,{default:m((()=>[w(" Content Wrapper "),v("div",J,[v("div",K,[v(a)])])])),_:1})})});export default Q;
