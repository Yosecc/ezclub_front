import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{d as t,r as s,o as a,i as r,j as o,k as u,l,S as p,U as i,H as n,F as c,B as v,I as d,G as m,P as y}from"./vendor.84e48f7c.js";import{o as f,p as j}from"./Reports.3160d015.js";import{_ as g}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{n as _}from"./index.7b297ef5.js";import{_ as b}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as h}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.837fe5b6.js";import{p as V}from"./sidebarLayoutState.bceb862d.js";import"./V-Placeload.8fe4e440.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5e609119.js";import"./useDropdown.3858e0aa.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-Control.b8a16a92.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./Companies.9bf42d00.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const S={class:"mt-4"},k={class:"table is-hoverable is-fullwidth"},x=l("thead",null,[l("tr",null,[l("th",{scope:"col"},"Description"),l("th",{scope:"col"},"Amount"),l("th",{scope:"col"},"Customer"),l("th",{scope:"col"},"Status"),l("th",{scope:"col"},"Created At"),l("th",{scope:"col"},"Action")])],-1),C={key:0},P=m(" Pay "),D={key:1},w=l("tr",null,[l("td"),l("td",null,"No transactions"),l("td")],-1);var A=t({expose:[],setup(t){const m=s([]),y=s(!1),h=s(!1);a((async()=>{V()}));const V=async(e={})=>{y.value=!0;try{const t=await f(e);m.value=t.data}catch(t){_.error(t.message)}finally{y.value=!1}};return(t,s)=>{const a=e;return r(),o(a,null,{default:u((()=>[l("div",S,[l(g,{class:"is-12",center:"",size:"small",active:y.value},{default:u((()=>[l("table",k,[x,m.value&&!y.value?(r(),o("tbody",C,[(r(!0),o(p,null,i(m.value.transactions,((e,t)=>(r(),o("tr",{key:`transaction-${t}`},[l("td",null,n(e.description),1),l("td",null,n(e.amount/100),1),l("td",null,n(e.customer),1),l("td",null,n(e.status),1),l("td",null,n(c(v)(e.created_at).format("MM/DD/YYYY")),1),l("td",null,[l(b,{color:"primary",onClick:t=>(async e=>{h.value=!0;try{await j(e),_.success("Success"),V()}catch(t){_.error(t.message)}finally{h.value=!1}})(e.id),outlined:"",loading:h.value},{default:u((()=>[P])),_:2},1032,["onClick","loading"])])])))),128))])):d("v-if",!0),m.value.length<1&&!y.value?(r(),o("tbody",D,[w])):d("v-if",!0)])])),_:1},8,["active"])])])),_:1})}}});const I={class:"page-content-inner"},L={class:"columns is-multiline"};var B=t({expose:[],setup:e=>(V.value="Stripe Invoice Due",y({title:"Stripe Invoice Due"}),a((()=>{})),(e,t)=>{const s=A,a=h;return r(),o(a,null,{default:u((()=>[d(" Content Wrapper "),l("div",I,[l("div",L,[l(s)])])])),_:1})})});export default B;