import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{d as s,r as a,h as i,i as o,S as u,R as r,l as p,k as l,H as n,K as c,O as v,w as m,o as d,A as y,P as f,F as j}from"./vendor.4454b83d.js";import{_ as g}from"./subscription-list.vue_vue&type=style&index=0&lang.6fef0ec3.js";import{_ as b}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_}from"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import{_ as x}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.b4377edc.js";import{p as k}from"./sidebarLayoutState.66d5e66f.js";import{A as V}from"./index.129f4881.js";import"./V-Placeload.28979271.js";import"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.9cf4b304.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./V-FlexPagination.vue_vue&type=script&setup=true&lang.2b60651d.js";import"./subscriptionIndex.vue_vue&type=script&setup=true&lang.0dae5b8e.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./Discounts.911286da.js";import"./Staffs.fbfc13c4.js";import"./Companies.335d0f3d.js";import"./Diciplines.670a4d57.js";import"./Subscriptions.17b0c784.js";import"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.32bcd9b0.js";import"./subscription-method-payment-posnet.vue_vue&type=script&setup=true&lang.a25a8349.js";import"./MemberCards.daa0852a.js";import"./Members.afbc11a1.js";import"./Memberships.5ac69d22.js";import"./Presupuesto.vue_vue&type=script&setup=true&lang.7779b61a.js";import"./search-4-dark.12f0bf0d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c2baafce.js";import"./useDropdown.659338b4.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const h={class:"d-flex justify-content-between w-100 mb-4"},S={class:"title is-5 m-0",style:{"text-transform":"uppercase"}},w={class:"title is-5 m-0",style:{"text-transform":"uppercase"}},P={class:"d-flex"},C={class:"title is-6 m-0"};var A=s({expose:[],props:{data:{default:[]}},emits:["onAction"],setup(s,{emit:v}){const m=(e,t)=>Math.random()*(t-e)+e,d=a(m(100,5e4)),y=a(m(100,3e4));return(a,m)=>{const f=t,j=e;return i(!0),o(r,null,u(s.data,((e,t)=>(i(),o("div",{key:`report-${t}-${d.value}`,class:"is-12 column"},[p(j,{class:""},{default:l((()=>[p("div",h,[p("p",S,n(t),1),p("p",w,n(e.count),1)]),p("div",P,[(i(!0),o(r,null,u(e,((e,t)=>(i(),o("div",{key:`list-button-${t}-${y.value}`},["count"!=t?(i(),o(f,{key:0,class:"mr-4",onClick:s=>(({itemKey:e,i:t})=>{v("onAction",{itemKey:e,i:t})})({itemKey:t,i:e})},{default:l((()=>[p("p",C,"View "+n(t),1)])),_:2},1032,["onClick"])):c("",!0)])))),128))])])),_:2},1024)])))),128)}}});const K={class:"page-content-inner"},L={key:0,class:"mb-5 columns is-multiline"},M=p("p",{class:"title is-5 m-0"},"Subcriptions",-1),B={class:"title is-5 m-0"},$={class:"column is-4"},z={class:"title is-5 m-0",style:{"text-transform":"uppercase"}},D={class:"column is-8 columns is-multiline"},I={key:0},F={key:1};var O=s({expose:[],setup(t){k.value="Suscriptions",v({title:"List Suscriptions"});const s=f(),h=a(!0);m((()=>s.query.page),(()=>{w()}));const S=a(null),w=async()=>{h.value=!0,await V.get("v2/suscripcion/reports",{params:{}}).then((e=>{console.log(e.data),S.value=e.data.suscripciones})).catch((e=>{h.value=!1,console.log(e)}))},P=a(!0),C=a([]);d((()=>{w()}));const O=a(null),T=a(!1),q=y({data:null,type:""}),H=({itemKey:e,i:t})=>{switch(console.log("onButton",{itemKey:e,i:t}),C.value=[],e){case"data":(async e=>{console.log(typeof e,e),P.value=!0,await V.post("v2/suscripcion/getIn",{data:e}).then((e=>{console.log("ressponse",e.data),C.value=e.data.suscripciones,P.value=!1})).catch((e=>{P.value=!1,console.log(e)}))})(t);break;default:q.data=t}T.value=!0,q.type=e};return(t,s)=>{const a=e,v=A,m=g,d=b,y=_,f=x;return i(),o(f,null,{default:l((()=>[p("div",K,[S.value?(i(),o("div",L,[p(a,{class:"d-flex justify-content-between column is-12 mb-4"},{default:l((()=>[M,p("p",B,n(S.value.count),1)])),_:1}),p("div",$,[p(a,{class:"d-flex justify-content-between flex-column"},{default:l((()=>[(i(!0),o(r,null,u(S.value,((e,t)=>(i(),o("div",{key:`grupo${t}`,onClick:t=>{return s=e,O.value=s,void console.log(O.value);var s}},["count"!=t?(i(),o(a,{key:0,class:"mb-4 btn-card"},{default:l((()=>[p("p",z,n(t),1)])),_:2},1024)):c("",!0)],8,["onClick"])))),128))])),_:1})]),p("div",D,[p(v,{data:O.value,onOnAction:H},null,8,["data"])])])):c("",!0)]),p(y,{open:T.value,actions:"center",size:"big",onClose:s[1]||(s[1]=e=>T.value=!1)},{content:l((()=>["data"==j(q).type?(i(),o("div",I,[p(d,{style:{"min-height":"300px"},size:"large",active:P.value},{default:l((()=>[C.value.length?(i(),o(m,{key:0,colgrid:"is-4",suscripciones:C.value,"filter-local":!0},null,8,["suscripciones"])):c("",!0)])),_:1},8,["active"])])):(i(),o("div",F,[p(v,{data:j(q).data,onOnAction:H},null,8,["data"])]))])),action:l((()=>[])),_:1},8,["open"])])),_:1})}}});export default O;