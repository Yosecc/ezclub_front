import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.dd846f77.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import{_ as s}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.590504bb.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.4aaf2044.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.50ffd65d.js";import{d as o,u as r,r as n,b as u,O as c,o as p,h as d,i as v,ac as m,k as f,l as g,F as _,K as y,ad as j,R as h,S as b,H as x,a2 as V,W as k,_ as S,G as P}from"./vendor.5900a5e9.js";import{_ as w,a as I}from"./search-4-dark.12f0bf0d.js";import{p as z}from"./sidebarLayoutState.46a7a7b4.js";import{l as C}from"./Inventory.e9b4e074.js";import{a as L,e as D,l as A,s as B}from"./Companies.5c5a8844.js";import{a as E,g as R,i as T,n as U}from"./index.16a56777.js";import{g as F,p as M,h as W}from"./Products.de6d3b56.js";import"./V-Control.e6c5ff74.js";import"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a5136f39.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0d618a83.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6cba1bd2.js";import"./V-Placeload.587d3033.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c64ce976.js";import"./useDropdown.52632823.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bd3d0e81.js";import"./V-Dropdown.e1ce4f1b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1def27b8.js";import"./activePanelState.f79aea14.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a4cbd523.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.e475383e.js";import"./video.e1f95447.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.44a9072c.js";import"./darkModeState.2151b6b7.js";import"./AnimatedLogo.ec05a80c.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5b14f2f7.js";import"./V-Block.vue_vue&type=script&setup=true&lang.67c026d4.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.eaee0492.js";import"./userPopovers.f4b9fc60.js";const $={class:"page-content-inner"},G={class:"d-flex justify-content-between align-items-center"},H={class:"w-100"},K={key:0,class:"w-100"},N=g("h1",{class:"title is-4"},"Select a location",-1),O={class:"flex-list-wrapper flex-list-v1"},q=g("img",{class:"light-image",src:w,alt:""},null,-1),J=g("img",{class:"dark-image",src:I,alt:""},null,-1),Q={class:"flex-table"},X=g("span",{class:""},"ID",-1),Y=g("span",null,"Photo",-1),Z=g("span",null,"Name",-1),ee=g("span",{class:"justify-content-end"},"Stock",-1),te={class:"flex-list-inner"},se={"data-th":"ID",class:"flex-table-cell"},ae={class:"item-name dark-inverted"},le={class:"flex-table-cell"},ie={class:"flex-table-cell"},oe={class:"light-text"},re={class:"flex-table-cell justify-content-end","data-th":"Date Close"},ne=P("SAVE");var ue=o({expose:[],setup(o){const{cookies:P}=r(),w=n(""),I=u((()=>w.value?M.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.var_code.match(new RegExp(w.value,"i")))):M.value));z.value="Inventory",c({title:"Inventory"}),m(),n(!1),n(!1),n(""),n(null);const ue=n(!1);p((()=>{L().then((e=>{E(A,"locations_id",D.value),R(A.value,"locations_id").change=ce,null!=P.get("locations_id")&&(R(A.value,"locations_id").model=P.get("locations_id"),ce(P.get("locations_id"))),F(R(A.value,"locations_id").model,"active")}))}));const ce=function(e){ue.value=!0,B(R(A.value,"locations_id").model),F(R(A.value,"locations_id").model,"active").then((e=>{ue.value=!1}))};return(o,r)=>{const n=e,u=t,c=s,p=a,m=l,P=i;return d(),v(P,null,{default:f((()=>[g("div",$,[g(u,{class:"mb-6"},{default:f((()=>[g("div",G,[g("div",H,[_(C)?y("",!0):(d(),v("div",K,[N])),g(n,{"inputs-step":_(A)},null,8,["inputs-step"])])])])),_:1}),g(m,{size:"large",active:ue.value},{default:f((()=>[g("div",O,[g(c,{class:[0!==_(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:f((()=>[q,J])),_:1},8,["class"]),g("div",Q,[g("div",{class:["flex-table-header",[0===_(I).length&&"is-hidden"]]},[X,Y,Z,ee],2),g("div",te,[g(j,{name:"list",tag:"div"},{default:f((()=>[(d(!0),v(h,null,b(_(I),(e=>(d(),v("div",{key:e.id,class:"flex-table-item"},[g("div",se,[g("div",null,[g("span",ae,x(e.id),1)])]),g("div",le,[g("img",{class:"",style:{height:"60px"},src:`${_(T)}storage/${e.photo}`,alt:""},null,8,["src"])]),g("div",ie,[g("span",oe,x(e.name),1)]),g("div",re,[g("form",{onSubmit:V((t=>(e=>{e.loading=!0,console.log(e),W({id:e.id,stock:e.stock}).then((t=>{e.classe="success",e.loading=!1,U.success(t.data)})).catch((e=>{U.error(e.response.data)}))})(e)),["prevent"]),class:"d-flex"},[k(g("input",{type:"text",class:"input h-100","onUpdate:modelValue":t=>e.stock=t},null,8,["onUpdate:modelValue"]),[[S,e.stock]]),g(m,{size:"small",active:e.loading},{default:f((()=>[g(p,{type:"submit",color:e.classe,class:"",style:{"font-size":"10px",height:"35px"},size:""},{default:f((()=>[ne])),_:2},1032,["color"])])),_:2},1032,["active"])],40,["onSubmit"])])])))),128))])),_:1})])])])])),_:1},8,["active"])])])),_:1})}}});export default ue;
