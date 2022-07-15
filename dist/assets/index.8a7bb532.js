import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{_ as s}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.b1a805d4.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.15516937.js";import{d as o,u as r,r as n,b as c,O as u,H as p,o as d,h as v,a9 as m,j as f,k as g,E as y,K as _,aa as j,R as h,S as b,G as x,a1 as V,W as k,_ as S,F as P}from"./vendor.c210e0cb.js";import{_ as w,a as I}from"./search-4-dark.12f0bf0d.js";import{p as z}from"./sidebarLayoutState.56e6ff2f.js";import{l as C}from"./Inventory.4ee5fd2e.js";import{a as L,d as D,l as A}from"./Companies.a79e92c3.js";import{a as E,g as B,i as R,n as T}from"./index.66373693.js";import{g as U,p as F,h as M}from"./Products.fe3bcd1c.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Placeload.141ef784.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.af205aa2.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const W={class:"page-content-inner"},$={class:"d-flex justify-content-between align-items-center"},G={class:"w-100"},H={key:0,class:"w-100"},K=g("h1",{class:"title is-4"},"Select a location",-1),N={class:"flex-list-wrapper flex-list-v1"},O=g("img",{class:"light-image",src:w,alt:""},null,-1),q=g("img",{class:"dark-image",src:I,alt:""},null,-1),J={class:"flex-table"},Q=g("span",{class:""},"ID",-1),X=g("span",null,"Photo",-1),Y=g("span",null,"Name",-1),Z=g("span",{class:"justify-content-end"},"Stock",-1),ee={class:"flex-list-inner"},te={"data-th":"ID",class:"flex-table-cell"},se={class:"item-name dark-inverted"},ae={class:"flex-table-cell"},le={class:"flex-table-cell"},ie={class:"light-text"},oe={class:"flex-table-cell justify-content-end","data-th":"Date Close"},re=P("SAVE");var ne=o({expose:[],setup(o){const{cookies:P}=r(),w=n(""),I=c((()=>w.value?F.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.var_code.match(new RegExp(w.value,"i")))):F.value));z.value="Inventory",u({title:"Inventory"}),m(),n(!1),n(!1),n(""),n(null);const ne=n(!1);p((()=>{L().then((e=>{E(A,"locations_id",D.value),B(A.value,"locations_id").change=ce,null!=P.get("locations_id")&&(B(A.value,"locations_id").model=P.get("locations_id"),ce(P.get("locations_id"))),U(B(A.value,"locations_id").model,"active")}))}));const ce=function(e){ne.value=!0,U(B(A.value,"locations_id").model,"active").then((e=>{ne.value=!1}))};return(o,r)=>{const n=e,c=t,u=s,p=a,m=l,P=i;return d(),v(P,null,{default:f((()=>[g("div",W,[g(c,{class:"mb-6"},{default:f((()=>[g("div",$,[g("div",G,[y(C)?_("",!0):(d(),v("div",H,[K])),g(n,{"inputs-step":y(A)},null,8,["inputs-step"])])])])),_:1}),g(m,{size:"large",active:ne.value},{default:f((()=>[g("div",N,[g(u,{class:[0!==y(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:f((()=>[O,q])),_:1},8,["class"]),g("div",J,[g("div",{class:["flex-table-header",[0===y(I).length&&"is-hidden"]]},[Q,X,Y,Z],2),g("div",ee,[g(j,{name:"list",tag:"div"},{default:f((()=>[(d(!0),v(h,null,b(y(I),(e=>(d(),v("div",{key:e.id,class:"flex-table-item"},[g("div",te,[g("div",null,[g("span",se,x(e.id),1)])]),g("div",ae,[g("img",{class:"",style:{height:"60px"},src:`${y(R)}storage/${e.photo}`,alt:""},null,8,["src"])]),g("div",le,[g("span",ie,x(e.name),1)]),g("div",oe,[g("form",{onSubmit:V((t=>(e=>{e.loading=!0,console.log(e),M({id:e.id,stock:e.stock}).then((t=>{e.classe="success",e.loading=!1,T.success(t.data)})).catch((e=>{T.error(e.response.data)}))})(e)),["prevent"]),class:"d-flex"},[k(g("input",{type:"text",class:"input h-100","onUpdate:modelValue":t=>e.stock=t},null,8,["onUpdate:modelValue"]),[[S,e.stock]]),g(m,{size:"small",active:e.loading},{default:f((()=>[g(p,{type:"submit",color:e.classe,class:"",style:{"font-size":"10px",height:"35px"},size:""},{default:f((()=>[re])),_:2},1032,["color"])])),_:2},1032,["active"])],40,["onSubmit"])])])))),128))])),_:1})])])])])),_:1},8,["active"])])])),_:1})}}});export default ne;