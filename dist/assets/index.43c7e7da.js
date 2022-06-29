import{d as e,o as t,h as a,k as s,G as l,E as n,j as o,R as r,F as i,r as u,H as p,K as c,S as d,A as v,O as m}from"./vendor.853b0a2b.js";import{_ as b}from"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import{_ as y}from"./V-Button.vue_vue&type=script&setup=true&lang.3174687b.js";import{a as f,b as j}from"./Reports.d4c36e00.js";import{p as g,n as _}from"./index.8f8c2b3e.js";import{_ as h}from"./V-Card.vue_vue&type=script&setup=true&lang.13431cdb.js";import{_ as k}from"./V-Loader.vue_vue&type=script&setup=true&lang.eae7234f.js";import{_ as V}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.47545b30.js";import{p as x}from"./sidebarLayoutState.68347789.js";import"./V-Control.bab08fd1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.57862c84.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a423434c.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f868e188.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3d4964e7.js";import"./V-Placeload.54ed2d56.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2625c997.js";import"./useDropdown.9fd8f548.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.1fe405fc.js";import"./V-Dropdown.20b61679.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cddd26f6.js";import"./Companies.454fa4b6.js";import"./activePanelState.9b514b5d.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.eb4f08be.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import"./video.5be088fe.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.624ff565.js";import"./darkModeState.6f39e39b.js";import"./AnimatedLogo.e7829b2f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.36c68532.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ee7d7200.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5ca17476.js";import"./userPopovers.f4b9fc60.js";const S={class:"banking-dashboard banking-dashboard-v3"},B={class:"columns"},P={class:"column is-12"},A={class:"dashboard-tiles"},C={class:"dashboard-tile"},w=s("span",null,"Balance Available",-1),D={class:"dark-inverted"},L={class:"dashboard-tile"},T=s("span",null,"Balance Instant",-1),I={class:"dark-inverted"},M={class:"dashboard-tile"},R=s("span",null,"Balance Pending",-1),Y={class:"dark-inverted"};var $=e({expose:[],props:{loading:{type:Boolean},balance:{type:Object}},setup:e=>(n,o)=>(t(),a("div",S,[s("div",B,[s("div",P,[s("div",A,[s("div",C,[w,s("span",D,"$ "+l(e.balance.balance_available/100),1)]),s("div",L,[T,s("span",I,"$ "+l(e.balance.instant_available/100),1)]),s("div",M,[R,s("span",Y,"$ "+l(e.balance.pending/100),1)])])])])]))});const z={class:"is-12 d-flex justify-content-end"},F=i(" Search Transactions ");var N=e({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(e,{emit:l}){const i=e,u=()=>{const e=g(f.value);l("search",e)};return(e,l)=>{const p=b,c=y;return t(),a(r,null,[s(p,{"inputs-step":n(f)},null,8,["inputs-step"]),s("div",z,[s(c,{color:"primary",loading:i.loading,onClick:u},{default:o((()=>[F])),_:1},8,["loading"])])],64)}}});const O={class:"mt-4"},E={class:"table is-hoverable is-fullwidth"},G=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"ID"),s("th",{scope:"col"},"Description"),s("th",{scope:"col"},"Amount"),s("th",{scope:"col"},"Fee"),s("th",{scope:"col"},"Net"),s("th",{scope:"col"},"Status"),s("th",{scope:"col"},"Created At")])],-1),H={key:0},K={key:1},U=s("tr",null,[s("td"),s("td",null,"No transactions"),s("td")],-1);var q=e({expose:[],setup(e){const i=u([]),m=u(!1);p((async()=>{y()}));const b=async e=>{y(e)},y=async(e={})=>{m.value=!0;try{const t=await j(e);i.value=t.data}catch(t){_.error(t.message)}finally{m.value=!1}};return(e,u)=>{const p=$,y=N,f=h;return t(),a(f,null,{default:o((()=>[i.value.balance?(t(),a(p,{key:0,balance:i.value.balance},null,8,["balance"])):c("",!0),s("div",null,[s(y,{onSearch:b,loading:m.value},null,8,["loading"])]),s("div",O,[s(k,{class:"is-12",center:"",size:"small",active:m.value},{default:o((()=>[s("table",E,[G,i.value&&!m.value?(t(),a("tbody",H,[(t(!0),a(r,null,d(i.value.transactions,((e,o)=>(t(),a("tr",{key:`transaction-${o}`},[s("td",null,l(e.id),1),s("td",null,l(e.description),1),s("td",null,l(e.amount/100),1),s("td",null,l(e.fee/100),1),s("td",null,l(e.net/100),1),s("td",null,l(e.status),1),s("td",null,l(n(v)(e.created_at).format("MM/DD/YYYY")),1)])))),128))])):c("",!0),i.value.length<1&&!m.value?(t(),a("tbody",K,[U])):c("",!0)])])),_:1},8,["active"])])])),_:1})}}});const J={class:"page-content-inner"},Q={class:"columns is-multiline"};var W=e({expose:[],setup:e=>(x.value="Stripe Transaction Reports",m({title:"Stripe Transaction Reports"}),p((()=>{})),(e,l)=>{const n=q,r=V;return t(),a(r,null,{default:o((()=>[s("div",J,[s("div",Q,[s(n)])])])),_:1})})});export default W;