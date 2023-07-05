var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as n}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{d as u,i,j as c,l as d,k as v,F as m,S as y,G as f,r as j,o as b,H as _,U as g,B as h,I as w,P as x}from"./vendor.84e48f7c.js";import{t as P,u as V,h as D}from"./Reports.b5a1e605.js";import{p as S,n as k}from"./index.8a348250.js";import{_ as C}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{_ as O}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{_ as I}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.0baad8e9.js";import{p as L}from"./sidebarLayoutState.bceb862d.js";import"./V-Placeload.8fe4e440.js";import"./V-Control.b8a16a92.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5739c56d.js";import"./useDropdown.3858e0aa.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./Companies.08f8191d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const $={class:"is-12 d-flex justify-content-end"},B=f("Download Excel"),A={class:"is-12 d-flex justify-content-end"},M=f(" Search ");var R=u({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:t}){const a=e,s=()=>{const e=S(P.value);t("download",e)},o=()=>{const e=S(P.value);t("search",e)};return(e,t)=>{const r=n,l=p;return i(),c(y,null,[d("div",$,[d(r,{color:"primary",onClick:s,loading:a.loading},{default:v((()=>[B])),_:1},8,["loading"])]),d(l,{"inputs-step":m(P)},null,8,["inputs-step"]),d("div",A,[d(r,{color:"primary",loading:a.loading,onClick:o},{default:v((()=>[M])),_:1},8,["loading"])])],64)}}});const T={class:"is-12 d-flex justify-content-end mt-5"},U=d("strong",null,"Total:",-1),Y={class:"mt-1"},z={class:"table is-hoverable is-fullwidth"},E=d("thead",null,[d("tr",null,[d("th",{scope:"col"},"ID"),d("th",{scope:"col"},"Name"),d("th",{scope:"col"},"Member Card ID"),d("th",{scope:"col"},"Description"),d("th",{scope:"col"},"Date"),d("th",{scope:"col"},"Payment Type"),d("th",{scope:"col"},"Invoice Type"),d("th",{scope:"col"},"Amount")])],-1),F={key:0};var G=u({expose:[],setup(e){const n=j([]),p=j(!1);b((async()=>{x()}));const u=async e=>{x(e)},x=async(e={})=>{p.value=!0;try{const t=await V(e);n.value=t.data}catch(t){k.error(t.message)}finally{p.value=!1}},P=async(e={})=>{p.value=!0;try{const i=await D((n=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e),u={report_export_type:"Products"==e.report_type?"products":"memberships"},t(n,a(u)))),c=window.URL.createObjectURL(new Blob([i.data])),d=document.createElement("a");d.href=c,d.setAttribute("download","reports.xlsx"),document.body.appendChild(d),d.click()}catch(i){k.error(i.message)}finally{p.value=!1}var n,u};return(e,t)=>{const a=R,s=C;return i(),c(s,null,{default:v((()=>[d("div",null,[d(a,{onSearch:u,loading:p.value,onDownload:P},null,8,["loading"])]),d("div",T,[d("p",null,[U,f(" "+_(n.value.total_amount),1)])]),d("div",Y,[d(O,{class:"is-12",center:"",size:"small",active:p.value},{default:v((()=>[d("table",z,[E,n.value&&!p.value?(i(),c("tbody",F,[(i(!0),c(y,null,g(n.value.data,((e,t)=>(i(),c("tr",{key:`report-${t}`},[d("td",null,_(e.id),1),d("td",null,_(`${e.first_name} ${e.last_name}`),1),d("td",null,_(`${e.bar_code}`),1),d("td",null,_(`${e.description}`),1),d("td",null,_(m(h)(e.created_at).format("MM/DD/YYYY")),1),d("td",null,_(e.payment_type),1),d("td",null,_(e.invoice_type),1),d("td",null,_(`$ ${e.amount}`),1)])))),128))])):w("v-if",!0)])])),_:1},8,["active"])])])),_:1})}}});const H={class:"page-content-inner"},N={class:"columns is-multiline"};var W=u({expose:[],setup:e=>(L.value="Reports",x({title:"Reports"}),b((()=>{})),(e,t)=>{const a=G,s=I;return i(),c(s,null,{default:v((()=>[w(" Content Wrapper "),d("div",H,[d("div",N,[d(a)])])])),_:1})})});export default W;
