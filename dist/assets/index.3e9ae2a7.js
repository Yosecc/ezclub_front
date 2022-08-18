import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.cb28cdf7.js";import{d as t,r as s,I as a,o as r,i as o,j as u,k as p,S as l,U as i,G as c,E as n,A as v,H as d,F as m,P as y}from"./vendor.5bccebbb.js";import{i as f}from"./Reports.2cc22c2d.js";import{_ as j}from"./V-Loader.vue_vue&type=script&setup=true&lang.0bff9431.js";import{n as _}from"./index.0622f2b5.js";import{_ as b}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as g}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.72d242e7.js";import{p as V}from"./sidebarLayoutState.620c70af.js";import"./V-Placeload.8ccc7bfb.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.241008cf.js";import"./useDropdown.04bc7533.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import"./V-Control.a9c2cbb9.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80224232.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5d45ce20.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3df65f9d.js";import"./V-Dropdown.e4c10296.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.c4247789.js";import"./Companies.4241e8c8.js";import"./activePanelState.5e0ea050.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.22802a6a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.df44a07c.js";import"./video.3bfbcca0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f802abe5.js";import"./darkModeState.ac3ed3a0.js";import"./AnimatedLogo.1a22360b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import"./userPopovers.f4b9fc60.js";const h={class:"mt-4"},S={class:"table is-hoverable is-fullwidth"},k=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Description"),p("th",{scope:"col"},"Amount"),p("th",{scope:"col"},"Customer"),p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Created At"),p("th",{scope:"col"},"Action")])],-1),x={key:0},C=m(" Pay "),P={key:1},A=p("tr",null,[p("td"),p("td",null,"No transactions"),p("td")],-1);var D=t({expose:[],setup(t){const m=s([]),y=s(!1);a((async()=>{g()}));const g=async(e={})=>{y.value=!0;try{const t=await f(e);m.value=t.data}catch(t){_.error(t.message)}finally{y.value=!1}};return(t,s)=>{const a=e;return r(),o(a,null,{default:u((()=>[p("div",h,[p(j,{class:"is-12",center:"",size:"small",active:y.value},{default:u((()=>[p("table",S,[k,m.value&&!y.value?(r(),o("tbody",x,[(r(!0),o(l,null,i(m.value.transactions,((e,t)=>(r(),o("tr",{key:`transaction-${t}`},[p("td",null,c(e.description),1),p("td",null,c(e.amount/100),1),p("td",null,c(e.customer),1),p("td",null,c(e.status),1),p("td",null,c(n(v)(e.created_at).format("MM/DD/YYYY")),1),p("td",null,[p(b,{color:"primary",onClick:t=>{return s=e.id,void console.log(s);var s},outlined:""},{default:u((()=>[C])),_:2},1032,["onClick"])])])))),128))])):d("v-if",!0),m.value.length<1&&!y.value?(r(),o("tbody",P,[A])):d("v-if",!0)])])),_:1},8,["active"])])])),_:1})}}});const w={class:"page-content-inner"},I={class:"columns is-multiline"};var L=t({expose:[],setup:e=>(V.value="Stripe Invoice Due",y({title:"Stripe Invoice Due"}),a((()=>{})),(e,t)=>{const s=D,a=g;return r(),o(a,null,{default:u((()=>[d(" Content Wrapper "),p("div",w,[p("div",I,[p(s)])])])),_:1})})});export default L;
