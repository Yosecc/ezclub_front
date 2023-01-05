import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{a,b as s}from"./Reports.b87c78f3.js";import{p as r,n as l}from"./index.33070b22.js";import{d as o,h as u,i as n,l as p,F as i,k as c,R as d,G as v,r as m,w as f,o as g,j as y,S as j,H as _,B as b,K as h,O as x}from"./vendor.7d5213a2.js";import{_ as V}from"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import{_ as k}from"./V-Loader.vue_vue&type=script&setup=true&lang.8686426d.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.815aa716.js";import{p as P}from"./sidebarLayoutState.9426e5be.js";import"./V-Control.3e38bffa.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d6ccab4.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fa42be40.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.a80fc4a1.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a8dad8dd.js";import"./V-Placeload.d3fba449.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.97414b4a.js";import"./useDropdown.d4a254e8.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import"./V-Dropdown.9baccf1a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ba1cd7fa.js";import"./Companies.19eed36d.js";import"./activePanelState.4e56e973.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ae744ca1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5baca42f.js";import"./video.fb469c9d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.ae0cfa5f.js";import"./darkModeState.6047be35.js";import"./AnimatedLogo.1618784f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.4761d136.js";import"./userPopovers.f4b9fc60.js";const C={class:"is-12 d-flex justify-content-end"},w=v(" Search Transactions ");var A=o({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(s,{emit:l}){const o=s,v=()=>{const e=r(a.value);l("search",e)};return(s,r)=>{const l=e,m=t;return u(),n(d,null,[p(l,{"inputs-step":i(a)},null,8,["inputs-step"]),p("div",C,[p(m,{color:"primary",loading:o.loading,onClick:v},{default:c((()=>[w])),_:1},8,["loading"])])],64)}}});const B=v("Previus"),D=v("Next");var L=o({expose:[],props:{reports:{type:Object}},emits:{changePage:e=>e},setup(e,{emit:a}){const s=e,r=m(null),l=m(null),o=m(null),i=m([]),v=m(!1);f((()=>s.reports),(()=>{v.value||(i.value.push({index:s.reports.next_page,value:r.value}),v.value=!0),v.value&&i.value.push({index:o.value,value:r.value}),console.log(i.value)})),f((()=>s.reports),(()=>{if(s.reports&&s.reports.transactions.length>0){const e=i.value.filter((e=>e.index==r.value));l.value=e.length>0?e[0].value:null,o.value=s.reports.next_page}}));const g=e=>{const t={page:"next"===e?o.value:l.value};r.value=t.page,a("changePage",t)};return(a,s)=>{const r=t;return u(),n(d,null,[p(r,{disabled:!l.value,onClick:s[1]||(s[1]=e=>g("prev"))},{default:c((()=>[B])),_:1},8,["disabled"]),p(r,{disabled:!e.reports.has_more,onClick:s[2]||(s[2]=e=>g("next"))},{default:c((()=>[D])),_:1},8,["disabled"])],64)}}});const T={class:"mt-4"},M={class:"table is-hoverable is-fullwidth"},R=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Description"),p("th",{scope:"col"},"Amount"),p("th",{scope:"col"},"Customer"),p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Created At"),p("th",{scope:"col"},"Action")])],-1),Y={key:0},z=v(" Profile "),F={key:1},I=p("tr",null,[p("td"),p("td",null,"No transactions"),p("td")],-1);var N=o({expose:[],setup(e){const a=m([]),r=m(!1);g((async()=>{f()}));const o=async e=>{f(e)},v=e=>{f({next_page:e.page})},f=async(e={})=>{r.value=!0;try{const t=await s(e);a.value=t.data}catch(t){l.error(t.message)}finally{r.value=!1}};return(e,s)=>{const l=A,m=y("router-link"),f=L,g=V;return u(),n(g,null,{default:c((()=>[p("div",null,[p(l,{onSearch:o,loading:r.value},null,8,["loading"])]),p("div",T,[p(k,{class:"is-12",center:"",size:"small",active:r.value},{default:c((()=>[p("table",M,[R,a.value&&!r.value?(u(),n("tbody",Y,[(u(!0),n(d,null,j(a.value.transactions,((e,a)=>(u(),n("tr",{key:`transaction-${a}`},[p("td",null,_(e.description),1),p("td",null,_(e.amount/100),1),p("td",null,_(e.customer),1),p("td",null,_(e.status),1),p("td",null,_(i(b)(e.created_at).format("MM/DD/YYYY")),1),p("td",null,[e.customer?(u(),n(m,{key:0,to:{name:"members-profile",query:{id:e.customer}},class:"btn btn-primary"},{default:c((()=>[p(t,{color:"primary",outlined:""},{default:c((()=>[z])),_:1})])),_:2},1032,["to"])):h("",!0)])])))),128))])):h("",!0),a.value.length<1&&!r.value?(u(),n("tbody",F,[I])):h("",!0),a.value?(u(),n(f,{key:2,reports:a.value,onChangePage:v},null,8,["reports"])):h("",!0)])])),_:1},8,["active"])])])),_:1})}}});const O={class:"page-content-inner"},q={class:"columns is-multiline"};var G=o({expose:[],setup:e=>(P.value="Stripe Transaction Reports",x({title:"Stripe Transaction Reports"}),g((()=>{})),(e,t)=>{const a=N,s=S;return u(),n(s,null,{default:c((()=>[p("div",O,[p("div",q,[p(a)])])])),_:1})})});export default G;
