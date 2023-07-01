import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{a as s,b as a}from"./Reports.c5d1ac9f.js";import{p as r,n as l}from"./index.c1337d84.js";import{d as o,h as u,i as n,l as p,F as i,k as c,R as d,G as v,r as m,w as f,o as g,j as y,S as j,H as _,B as b,K as h,O as x}from"./vendor.3e3390b7.js";import{_ as V}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{_ as k}from"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e08d02df.js";import{p as P}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Placeload.f3ddf6cd.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d7be9bd2.js";import"./useDropdown.fb013c95.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./Companies.3008024c.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const C={class:"is-12 d-flex justify-content-end"},w=v(" Search Transactions ");var A=o({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(a,{emit:l}){const o=a,v=()=>{const e=r(s.value);l("search",e)};return(a,r)=>{const l=e,m=t;return u(),n(d,null,[p(l,{"inputs-step":i(s)},null,8,["inputs-step"]),p("div",C,[p(m,{color:"primary",loading:o.loading,onClick:v},{default:c((()=>[w])),_:1},8,["loading"])])],64)}}});const B=v("Previus"),D=v("Next");var L=o({expose:[],props:{reports:{type:Object}},emits:{changePage:e=>e},setup(e,{emit:s}){const a=e,r=m(null),l=m(null),o=m(null),i=m([]),v=m(!1);f((()=>a.reports),(()=>{v.value||(i.value.push({index:a.reports.next_page,value:r.value}),v.value=!0),v.value&&i.value.push({index:o.value,value:r.value}),console.log(i.value)})),f((()=>a.reports),(()=>{if(a.reports&&a.reports.transactions.length>0){const e=i.value.filter((e=>e.index==r.value));l.value=e.length>0?e[0].value:null,o.value=a.reports.next_page}}));const g=e=>{const t={page:"next"===e?o.value:l.value};r.value=t.page,s("changePage",t)};return(s,a)=>{const r=t;return u(),n(d,null,[p(r,{disabled:!l.value,onClick:a[1]||(a[1]=e=>g("prev"))},{default:c((()=>[B])),_:1},8,["disabled"]),p(r,{disabled:!e.reports.has_more,onClick:a[2]||(a[2]=e=>g("next"))},{default:c((()=>[D])),_:1},8,["disabled"])],64)}}});const T={class:"mt-4"},M={class:"table is-hoverable is-fullwidth"},R=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Description"),p("th",{scope:"col"},"Amount"),p("th",{scope:"col"},"Customer"),p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Created At"),p("th",{scope:"col"},"Action")])],-1),Y={key:0},z=v(" Profile "),F={key:1},I=p("tr",null,[p("td"),p("td",null,"No transactions"),p("td")],-1);var N=o({expose:[],setup(e){const s=m([]),r=m(!1);g((async()=>{f()}));const o=async e=>{f(e)},v=e=>{f({next_page:e.page})},f=async(e={})=>{r.value=!0;try{const t=await a(e);s.value=t.data}catch(t){l.error(t.message)}finally{r.value=!1}};return(e,a)=>{const l=A,m=y("router-link"),f=L,g=V;return u(),n(g,null,{default:c((()=>[p("div",null,[p(l,{onSearch:o,loading:r.value},null,8,["loading"])]),p("div",T,[p(k,{class:"is-12",center:"",size:"small",active:r.value},{default:c((()=>[p("table",M,[R,s.value&&!r.value?(u(),n("tbody",Y,[(u(!0),n(d,null,j(s.value.transactions,((e,s)=>(u(),n("tr",{key:`transaction-${s}`},[p("td",null,_(e.description),1),p("td",null,_(e.amount/100),1),p("td",null,_(e.customer),1),p("td",null,_(e.status),1),p("td",null,_(i(b)(e.created_at).format("MM/DD/YYYY")),1),p("td",null,[e.customer?(u(),n(m,{key:0,to:{name:"members-profile",query:{id:e.customer}},class:"btn btn-primary"},{default:c((()=>[p(t,{color:"primary",outlined:""},{default:c((()=>[z])),_:1})])),_:2},1032,["to"])):h("",!0)])])))),128))])):h("",!0),s.value.length<1&&!r.value?(u(),n("tbody",F,[I])):h("",!0),s.value?(u(),n(f,{key:2,reports:s.value,onChangePage:v},null,8,["reports"])):h("",!0)])])),_:1},8,["active"])])])),_:1})}}});const O={class:"page-content-inner"},q={class:"columns is-multiline"};var G=o({expose:[],setup:e=>(P.value="Stripe Transaction Reports",x({title:"Stripe Transaction Reports"}),g((()=>{})),(e,t)=>{const s=N,a=S;return u(),n(a,null,{default:c((()=>[p("div",O,[p("div",q,[p(s)])])])),_:1})})});export default G;
