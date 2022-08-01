import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import{i as t}from"./Reports.2148152a.js";import{d as s,r as a,H as r,o,h as u,j as p,k as l,R as i,S as n,G as c,E as d,A as v,K as m,F as f,O as y}from"./vendor.41bfc188.js";import{_ as j}from"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import{n as _}from"./index.621bc5a7.js";import{_ as g}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{_ as b}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.45ac185f.js";import{p as h}from"./sidebarLayoutState.454c18d7.js";import"./V-Placeload.f8b8ec60.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.63381cd7.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./Companies.6384ea5f.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const V={class:"mt-4"},S={class:"table is-hoverable is-fullwidth"},k=l("thead",null,[l("tr",null,[l("th",{scope:"col"},"Description"),l("th",{scope:"col"},"Amount"),l("th",{scope:"col"},"Customer"),l("th",{scope:"col"},"Status"),l("th",{scope:"col"},"Created At"),l("th",{scope:"col"},"Action")])],-1),x={key:0},C=f(" Pay "),P={key:1},A=l("tr",null,[l("td"),l("td",null,"No transactions"),l("td")],-1);var D=s({expose:[],setup(s){const f=a([]),y=a(!1);r((async()=>{b()}));const b=async(e={})=>{y.value=!0;try{const s=await t(e);f.value=s.data}catch(s){_.error(s.message)}finally{y.value=!1}};return(t,s)=>{const a=e;return o(),u(a,null,{default:p((()=>[l("div",V,[l(j,{class:"is-12",center:"",size:"small",active:y.value},{default:p((()=>[l("table",S,[k,f.value&&!y.value?(o(),u("tbody",x,[(o(!0),u(i,null,n(f.value.transactions,((e,t)=>(o(),u("tr",{key:`transaction-${t}`},[l("td",null,c(e.description),1),l("td",null,c(e.amount/100),1),l("td",null,c(e.customer),1),l("td",null,c(e.status),1),l("td",null,c(d(v)(e.created_at).format("MM/DD/YYYY")),1),l("td",null,[l(g,{color:"primary",onClick:t=>{return s=e.id,void console.log(s);var s},outlined:""},{default:p((()=>[C])),_:2},1032,["onClick"])])])))),128))])):m("",!0),f.value.length<1&&!y.value?(o(),u("tbody",P,[A])):m("",!0)])])),_:1},8,["active"])])])),_:1})}}});const w={class:"page-content-inner"},L={class:"columns is-multiline"};var I=s({expose:[],setup:e=>(h.value="Stripe Invoice Due",y({title:"Stripe Invoice Due"}),r((()=>{})),(e,t)=>{const s=D,a=b;return o(),u(a,null,{default:p((()=>[l("div",w,[l("div",L,[l(s)])])])),_:1})})});export default I;
