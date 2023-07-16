import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as s}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.9cf4b304.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.861c5f50.js";import{d as o,u as r,r as n,b as c,O as u,o as p,h as d,i as v,ad as m,k as f,l as g,F as _,K as y,ae as j,R as h,S as b,H as x,a2 as V,W as k,_ as S,G as P}from"./vendor.4454b83d.js";import{_ as w,a as I}from"./search-4-dark.12f0bf0d.js";import{p as z}from"./sidebarLayoutState.66d5e66f.js";import{l as C}from"./Inventory.62f56c88.js";import{a as L,e as D,l as A,s as B}from"./Companies.145e38df.js";import{a as E,g as R,i as T,n as U}from"./index.f93c57bf.js";import{g as F,p as M,h as W}from"./Products.cc23f778.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Placeload.28979271.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.e5a48aef.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const $={class:"page-content-inner"},G={class:"d-flex justify-content-between align-items-center"},H={class:"w-100"},K={key:0,class:"w-100"},N=g("h1",{class:"title is-4"},"Select a location",-1),O={class:"flex-list-wrapper flex-list-v1"},q=g("img",{class:"light-image",src:w,alt:""},null,-1),J=g("img",{class:"dark-image",src:I,alt:""},null,-1),Q={class:"flex-table"},X=g("span",{class:""},"ID",-1),Y=g("span",null,"Photo",-1),Z=g("span",null,"Name",-1),ee=g("span",{class:"justify-content-end"},"Stock",-1),te={class:"flex-list-inner"},se={"data-th":"ID",class:"flex-table-cell"},ae={class:"item-name dark-inverted"},le={class:"flex-table-cell"},ie={class:"flex-table-cell"},oe={class:"light-text"},re={class:"flex-table-cell justify-content-end","data-th":"Date Close"},ne=P("SAVE");var ce=o({expose:[],setup(o){const{cookies:P}=r(),w=n(""),I=c((()=>w.value?M.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.var_code.match(new RegExp(w.value,"i")))):M.value));z.value="Inventory",u({title:"Inventory"}),m(),n(!1),n(!1),n(""),n(null);const ce=n(!1);p((()=>{L().then((e=>{E(A,"locations_id",D.value),R(A.value,"locations_id").change=ue,null!=P.get("locations_id")&&(R(A.value,"locations_id").model=P.get("locations_id"),ue(P.get("locations_id"))),F(R(A.value,"locations_id").model,"active")}))}));const ue=function(e){ce.value=!0,B(R(A.value,"locations_id").model),F(R(A.value,"locations_id").model,"active").then((e=>{ce.value=!1}))};return(o,r)=>{const n=e,c=t,u=s,p=a,m=l,P=i;return d(),v(P,null,{default:f((()=>[g("div",$,[g(c,{class:"mb-6"},{default:f((()=>[g("div",G,[g("div",H,[_(C)?y("",!0):(d(),v("div",K,[N])),g(n,{"inputs-step":_(A)},null,8,["inputs-step"])])])])),_:1}),g(m,{size:"large",active:ce.value},{default:f((()=>[g("div",O,[g(u,{class:[0!==_(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:f((()=>[q,J])),_:1},8,["class"]),g("div",Q,[g("div",{class:["flex-table-header",[0===_(I).length&&"is-hidden"]]},[X,Y,Z,ee],2),g("div",te,[g(j,{name:"list",tag:"div"},{default:f((()=>[(d(!0),v(h,null,b(_(I),(e=>(d(),v("div",{key:e.id,class:"flex-table-item"},[g("div",se,[g("div",null,[g("span",ae,x(e.id),1)])]),g("div",le,[g("img",{class:"",style:{height:"60px"},src:`${_(T)}storage/${e.photo}`,alt:""},null,8,["src"])]),g("div",ie,[g("span",oe,x(e.name),1)]),g("div",re,[g("form",{onSubmit:V((t=>(e=>{e.loading=!0,console.log(e),W({id:e.id,stock:e.stock}).then((t=>{e.classe="success",e.loading=!1,U.success(t.data)})).catch((e=>{U.error(e.response.data)}))})(e)),["prevent"]),class:"d-flex"},[k(g("input",{type:"text",class:"input h-100","onUpdate:modelValue":t=>e.stock=t},null,8,["onUpdate:modelValue"]),[[S,e.stock]]),g(m,{size:"small",active:e.loading},{default:f((()=>[g(p,{type:"submit",color:e.classe,class:"",style:{"font-size":"10px",height:"35px"},size:""},{default:f((()=>[ne])),_:2},1032,["color"])])),_:2},1032,["active"])],40,["onSubmit"])])])))),128))])),_:1})])])])])),_:1},8,["active"])])])),_:1})}}});export default ce;
