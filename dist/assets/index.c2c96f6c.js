<<<<<<< HEAD:dist/assets/index.c2c96f6c.js
import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{a,b as s}from"./Reports.6096ba00.js";import{p as r,n as l}from"./index.3c26e2a1.js";import{d as o,h as u,i as n,l as p,F as i,k as c,R as d,G as v,r as m,w as f,o as g,j as y,S as j,H as _,B as b,K as h,O as x}from"./vendor.3e3390b7.js";import{_ as V}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{_ as k}from"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.83b20eb8.js";import{p as P}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Placeload.f3ddf6cd.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.49d34861.js";import"./useDropdown.fb013c95.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./Companies.6c6219d2.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const C={class:"is-12 d-flex justify-content-end"},w=v(" Search Transactions ");var A=o({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(s,{emit:l}){const o=s,v=()=>{const e=r(a.value);l("search",e)};return(s,r)=>{const l=e,m=t;return u(),n(d,null,[p(l,{"inputs-step":i(a)},null,8,["inputs-step"]),p("div",C,[p(m,{color:"primary",loading:o.loading,onClick:v},{default:c((()=>[w])),_:1},8,["loading"])])],64)}}});const B=v("Previus"),D=v("Next");var L=o({expose:[],props:{reports:{type:Object}},emits:{changePage:e=>e},setup(e,{emit:a}){const s=e,r=m(null),l=m(null),o=m(null),i=m([]),v=m(!1);f((()=>s.reports),(()=>{v.value||(i.value.push({index:s.reports.next_page,value:r.value}),v.value=!0),v.value&&i.value.push({index:o.value,value:r.value}),console.log(i.value)})),f((()=>s.reports),(()=>{if(s.reports&&s.reports.transactions.length>0){const e=i.value.filter((e=>e.index==r.value));l.value=e.length>0?e[0].value:null,o.value=s.reports.next_page}}));const g=e=>{const t={page:"next"===e?o.value:l.value};r.value=t.page,a("changePage",t)};return(a,s)=>{const r=t;return u(),n(d,null,[p(r,{disabled:!l.value,onClick:s[1]||(s[1]=e=>g("prev"))},{default:c((()=>[B])),_:1},8,["disabled"]),p(r,{disabled:!e.reports.has_more,onClick:s[2]||(s[2]=e=>g("next"))},{default:c((()=>[D])),_:1},8,["disabled"])],64)}}});const T={class:"mt-4"},M={class:"table is-hoverable is-fullwidth"},R=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Description"),p("th",{scope:"col"},"Amount"),p("th",{scope:"col"},"Customer"),p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Created At"),p("th",{scope:"col"},"Action")])],-1),Y={key:0},z=v(" Profile "),F={key:1},I=p("tr",null,[p("td"),p("td",null,"No transactions"),p("td")],-1);var N=o({expose:[],setup(e){const a=m([]),r=m(!1);g((async()=>{f()}));const o=async e=>{f(e)},v=e=>{f({next_page:e.page})},f=async(e={})=>{r.value=!0;try{const t=await s(e);a.value=t.data}catch(t){l.error(t.message)}finally{r.value=!1}};return(e,s)=>{const l=A,m=y("router-link"),f=L,g=V;return u(),n(g,null,{default:c((()=>[p("div",null,[p(l,{onSearch:o,loading:r.value},null,8,["loading"])]),p("div",T,[p(k,{class:"is-12",center:"",size:"small",active:r.value},{default:c((()=>[p("table",M,[R,a.value&&!r.value?(u(),n("tbody",Y,[(u(!0),n(d,null,j(a.value.transactions,((e,a)=>(u(),n("tr",{key:`transaction-${a}`},[p("td",null,_(e.description),1),p("td",null,_(e.amount/100),1),p("td",null,_(e.customer),1),p("td",null,_(e.status),1),p("td",null,_(i(b)(e.created_at).format("MM/DD/YYYY")),1),p("td",null,[e.customer?(u(),n(m,{key:0,to:{name:"members-profile",query:{id:e.customer}},class:"btn btn-primary"},{default:c((()=>[p(t,{color:"primary",outlined:""},{default:c((()=>[z])),_:1})])),_:2},1032,["to"])):h("",!0)])])))),128))])):h("",!0),a.value.length<1&&!r.value?(u(),n("tbody",F,[I])):h("",!0),a.value?(u(),n(f,{key:2,reports:a.value,onChangePage:v},null,8,["reports"])):h("",!0)])])),_:1},8,["active"])])])),_:1})}}});const O={class:"page-content-inner"},q={class:"columns is-multiline"};var G=o({expose:[],setup:e=>(P.value="Stripe Transaction Reports",x({title:"Stripe Transaction Reports"}),g((()=>{})),(e,t)=>{const a=N,s=S;return u(),n(s,null,{default:c((()=>[p("div",O,[p("div",q,[p(a)])])])),_:1})})});export default G;
=======
import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.dd846f77.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{a,b as s}from"./Reports.7f8131da.js";import{p as r,n as l}from"./index.16a56777.js";import{d as o,h as u,i as n,l as p,F as i,k as c,R as v,G as d,r as m,w as f,o as g,j as y,S as j,H as _,B as b,K as h,O as x}from"./vendor.5900a5e9.js";import{_ as V}from"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import{_ as k}from"./V-Loader.vue_vue&type=script&setup=true&lang.4aaf2044.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.50ffd65d.js";import{p as P}from"./sidebarLayoutState.46a7a7b4.js";import"./V-Control.e6c5ff74.js";import"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a5136f39.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0d618a83.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6cba1bd2.js";import"./V-Placeload.587d3033.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c64ce976.js";import"./useDropdown.52632823.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bd3d0e81.js";import"./V-Dropdown.e1ce4f1b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1def27b8.js";import"./Companies.5c5a8844.js";import"./activePanelState.f79aea14.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a4cbd523.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.e475383e.js";import"./video.e1f95447.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.44a9072c.js";import"./darkModeState.2151b6b7.js";import"./AnimatedLogo.ec05a80c.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5b14f2f7.js";import"./V-Block.vue_vue&type=script&setup=true&lang.67c026d4.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.eaee0492.js";import"./userPopovers.f4b9fc60.js";const C={class:"is-12 d-flex justify-content-end"},w=d(" Search Transactions ");var A=o({expose:[],props:{loading:{type:Boolean}},emits:{search:e=>e,download:e=>e},setup(s,{emit:l}){const o=s,d=()=>{const e=r(a.value);l("search",e)};return(s,r)=>{const l=e,m=t;return u(),n(v,null,[p(l,{"inputs-step":i(a)},null,8,["inputs-step"]),p("div",C,[p(m,{color:"primary",loading:o.loading,onClick:d},{default:c((()=>[w])),_:1},8,["loading"])])],64)}}});const B=d("Previus"),D=d("Next");var L=o({expose:[],props:{reports:{type:Object}},emits:{changePage:e=>e},setup(e,{emit:a}){const s=e,r=m(null),l=m(null),o=m(null),i=m([]),d=m(!1);f((()=>s.reports),(()=>{d.value||(i.value.push({index:s.reports.next_page,value:r.value}),d.value=!0),d.value&&i.value.push({index:o.value,value:r.value}),console.log(i.value)})),f((()=>s.reports),(()=>{if(s.reports&&s.reports.transactions.length>0){const e=i.value.filter((e=>e.index==r.value));l.value=e.length>0?e[0].value:null,o.value=s.reports.next_page}}));const g=e=>{const t={page:"next"===e?o.value:l.value};r.value=t.page,a("changePage",t)};return(a,s)=>{const r=t;return u(),n(v,null,[p(r,{disabled:!l.value,onClick:s[1]||(s[1]=e=>g("prev"))},{default:c((()=>[B])),_:1},8,["disabled"]),p(r,{disabled:!e.reports.has_more,onClick:s[2]||(s[2]=e=>g("next"))},{default:c((()=>[D])),_:1},8,["disabled"])],64)}}});const T={class:"mt-4"},M={class:"table is-hoverable is-fullwidth"},R=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Description"),p("th",{scope:"col"},"Amount"),p("th",{scope:"col"},"Customer"),p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Created At"),p("th",{scope:"col"},"Action")])],-1),Y={key:0},z=d(" Profile "),F={key:1},I=p("tr",null,[p("td"),p("td",null,"No transactions"),p("td")],-1);var N=o({expose:[],setup(e){const a=m([]),r=m(!1);g((async()=>{f()}));const o=async e=>{f(e)},d=e=>{f({next_page:e.page})},f=async(e={})=>{r.value=!0;try{const t=await s(e);a.value=t.data}catch(t){l.error(t.message)}finally{r.value=!1}};return(e,s)=>{const l=A,m=y("router-link"),f=L,g=V;return u(),n(g,null,{default:c((()=>[p("div",null,[p(l,{onSearch:o,loading:r.value},null,8,["loading"])]),p("div",T,[p(k,{class:"is-12",center:"",size:"small",active:r.value},{default:c((()=>[p("table",M,[R,a.value&&!r.value?(u(),n("tbody",Y,[(u(!0),n(v,null,j(a.value.transactions,((e,a)=>(u(),n("tr",{key:`transaction-${a}`},[p("td",null,_(e.description),1),p("td",null,_(e.amount/100),1),p("td",null,_(e.customer),1),p("td",null,_(e.status),1),p("td",null,_(i(b)(e.created_at).format("MM/DD/YYYY")),1),p("td",null,[e.customer?(u(),n(m,{key:0,to:{name:"members-profile",query:{id:e.customer}},class:"btn btn-primary"},{default:c((()=>[p(t,{color:"primary",outlined:""},{default:c((()=>[z])),_:1})])),_:2},1032,["to"])):h("",!0)])])))),128))])):h("",!0),a.value.length<1&&!r.value?(u(),n("tbody",F,[I])):h("",!0),a.value?(u(),n(f,{key:2,reports:a.value,onChangePage:d},null,8,["reports"])):h("",!0)])])),_:1},8,["active"])])])),_:1})}}});const O={class:"page-content-inner"},q={class:"columns is-multiline"};var G=o({expose:[],setup:e=>(P.value="Stripe Transaction Reports",x({title:"Stripe Transaction Reports"}),g((()=>{})),(e,t)=>{const a=N,s=S;return u(),n(s,null,{default:c((()=>[p("div",O,[p("div",q,[p(a)])])])),_:1})})});export default G;
>>>>>>> 577e70e0aca14702fdf4027e6116d43d016aadcf:dist/assets/index.4725f7ee.js
