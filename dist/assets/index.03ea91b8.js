import{_ as e}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.10bd3bfc.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import{_ as a}from"./V-Modal.vue_vue&type=script&setup=true&lang.533d5625.js";import{_ as s}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.6d7d3022.js";import{_ as l}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.da3e9e6f.js";import{_ as r}from"./V-Loader.vue_vue&type=script&setup=true&lang.3671997b.js";import{_ as o}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.fcfdfec1.js";import{d as i,r as n,b as u,z as c,A as p,w as d,o as v,h as m,U as f,j as y,k as g,J as h,K as b,D as _,a8 as j,L as x,N as k,G as w}from"./vendor.3b9a49d2.js";import{_ as V,a as P}from"./search-4-dark.fb3880a5.js";import{p as C}from"./sidebarLayoutState.9d5a55d2.js";import{g as D,i as I,c as S,s as T}from"./Inventory.8ca2a4dc.js";import{n as A}from"./Mixin.66e291cf.js";import{h as M}from"./moment.08a7f518.js";import{u as Y}from"./index.d9e84969.js";import"./V-Placeload.ec1fe97e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2f39a4f2.js";import"./useDropdown.4b88246a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import"./V-Dropdown.5634df5b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.725db5d0.js";import"./index.642b26dd.js";import"./activePanelState.d422980e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.4fb3e6c0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5554d4bf.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f4c30d64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.db2a2ca9.js";import"./navbarLayoutState.f8577b9e.js";import"./video.7e4ace56.js";import"./darkModeState.9048b099.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.9336f53f.js";import"./AnimatedLogo.d39560aa.js";import"./V-Control.70f7b974.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5fbfe7cf.js";import"./V-Block.vue_vue&type=script&setup=true&lang.fd027cc2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.7c436ff6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b8cff140.js";import"./notyf.es.f84e4201.js";const L={class:"page-content-inner"},E=w("Confirm"),R=w("Confirm"),z={key:0,class:"title is-4"},B={class:"d-flex justify-content-end mb-6"},q=w("New Inventory"),F={class:"flex-list-wrapper flex-list-v1"},N=g("img",{class:"light-image",src:V,alt:""},null,-1),O=g("img",{class:"dark-image",src:P,alt:""},null,-1),U={class:"flex-table"},G=g("span",{class:""},"ID",-1),J=g("span",null,"Status",-1),K=g("span",null,"Date Open",-1),W=g("span",null,"Date Close",-1),H=g("span",null,"Products Total",-1),Q=g("span",{class:""},"Actions",-1),X={class:"flex-list-inner"},Z={"data-th":"ID",class:"flex-table-cell"},$={class:"item-name dark-inverted"},ee={class:"flex-table-cell","data-th":"Status"},te={key:0,class:"tag is-success is-rounded"},ae={key:1,class:"tag is-rounded"},se={key:2,class:"tag is-info is-rounded"},le={class:"flex-table-cell","data-th":"Date Open"},re={class:"light-text"},oe={class:"flex-table-cell","data-th":"Date Close"},ie={class:"light-text"},ne={class:"flex-table-cell","data-th":"Products Total"},ue={class:"light-text"},ce={class:"flex-table-cell","data-th":"Actions"},pe=w("Close Inventory"),de=w("View");var ve=i({expose:[],setup(i){const w=n(""),V=u((()=>w.value?Y.filter((e=>e.username.match(new RegExp(w.value,"i"))||e.position.match(new RegExp(w.value,"i"))||e.industry.match(new RegExp(w.value,"i"))||e.status.match(new RegExp(w.value,"i"))||e.location.match(new RegExp(w.value,"i")))):I.value));C.value="Inventory",c({title:"Inventory"});const P=f(),ve=n(!1),me=n(!1),fe=n(""),ye=n(null),ge=n(!0);p((()=>{D().then((e=>{console.log(e.data),ge.value=!1}))}));const he=()=>{console.log(ye.value),me.value=!1,ge.value=!0,fe.value="Processing Inventory... Please do not close the browser window until the process is complete",S(ye.value).then((e=>{A.success("Success"),ge.value=!1,fe.value="",D()})).catch((e=>{A.error(e.response.data),ge.value=!1,fe.value=""}))},be=()=>{ve.value=!1,ge.value=!0,fe.value="wait a moment, you will be redirected",T().then((e=>{P.push({name:"settings-inventory-create",query:{id:e.data.inventory}})})).catch((e=>{A.error(e.response.data.message),ge.value=!1,fe.value=e.response.data.message}))},_e=u((()=>{let e=[];return I.value.forEach((t=>{e.push([t.id,t.status,t.created_at,t.updated_at,100,1])})),e}));return d(_e,(e=>{ge.value=!0,setTimeout((()=>{ge.value=!1}),500)})),(i,n)=>{const u=e,c=t,p=a,d=s,f=l,w=r,P=o;return v(),m(P,null,{default:y((()=>[g("div",L,[g(p,{open:me.value,actions:"center",onClose:n[1]||(n[1]=e=>me.value=!1)},{content:y((()=>[g(u,{title:" Are you sure you want to close inventory?",subtitle:"This action will modify the stock of all products for sale and cannot be undone"})])),action:y((()=>[g(c,{color:"primary",onClick:he,raised:""},{default:y((()=>[E])),_:1})])),_:1},8,["open"]),g(p,{open:ve.value,actions:"center",onClose:n[2]||(n[2]=e=>ve.value=!1)},{content:y((()=>[g(u,{title:" Are you sure to create a new inventory?",subtitle:"This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."})])),action:y((()=>[g(c,{color:"primary",onClick:be,raised:""},{default:y((()=>[R])),_:1})])),_:1},8,["open"]),ge.value?(v(),m("h1",z,h(fe.value),1)):b("",!0),g("div",B,[ge.value?b("",!0):(v(),m(c,{key:0,color:"primary",onClick:n[3]||(n[3]=e=>ve.value=!0),raised:"",class:"mb-4"},{default:y((()=>[q])),_:1}))]),g(w,{size:"large",active:ge.value},{default:y((()=>[g("div",F,[g(d,{class:[0!==_(V).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:y((()=>[N,O])),_:1},8,["class"]),g("div",U,[g("div",{class:["flex-table-header",[0===_(V).length&&"is-hidden"]]},[G,J,K,W,H,Q],2),g("div",X,[g(j,{name:"list",tag:"div"},{default:y((()=>[(v(!0),m(x,null,k(_(V),(e=>(v(),m("div",{key:e.id,class:"flex-table-item"},[g("div",Z,[g("div",null,[g("span",$,h(e.id),1)])]),g("div",ee,[1===e.status?(v(),m("span",te,"Active")):b("",!0),0===e.status?(v(),m("span",ae,"Close")):b("",!0),2===e.status?(v(),m("span",se,"Process")):b("",!0)]),g("div",le,[g("span",re,h(_(M)(e.created_at).format("dd - DD/MM/YYYY")),1)]),g("div",oe,[g("span",ie,h(_(M)(e.updated_at).format("dd - DD/MM/YYYY")),1)]),g("div",ne,[g("span",ue,h(e.products.length),1)]),g("div",ce,[1==e.status?(v(),m(c,{key:0,color:"success",onClick:t=>{me.value=!0,ye.value=e.id},raised:"",class:"mr-4"},{default:y((()=>[pe])),_:2},1032,["onClick"])):b("",!0),g(c,{to:{name:"settings-inventory-create",query:{id:e.id}}},{default:y((()=>[de])),_:2},1032,["to"])])])))),128))])),_:1})])]),_(V).length>5?(v(),m(f,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):b("",!0)])])),_:1},8,["active"])])])),_:1})}}});export default ve;
