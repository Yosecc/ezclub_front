import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.26d5e0c0.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.72c1da57.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f7a67280.js";import{d as o,u as n,r,c,P as u,ab as p,o as d,i as v,j as m,k as f,I as g,l as y,F as _,ac as b,S as j,U as h,H as x,a2 as V,W as k,_ as P,G as S}from"./vendor.b96c0b62.js";import{_ as w,a as I}from"./search-4-dark.12f0bf0d.js";import{p as L}from"./sidebarLayoutState.a7097173.js";import{l as C}from"./Inventory.29993c9e.js";import{a as z,e as D,l as T,s as B}from"./Companies.8caab400.js";import{a as A,g as E,i as U,n as F}from"./index.767fa190.js";import{g as N,p as W,h as M}from"./Products.75d12a25.js";import"./V-Control.9f6b030b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./V-Placeload.43c61814.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.56799f3f.js";import"./useDropdown.51b21268.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";const R={class:"page-content-inner"},$={class:"d-flex justify-content-between align-items-center"},G={class:"w-100"},H={key:0,class:"w-100"},q=y("h1",{class:"title is-4"},"Select a location",-1),J={class:"flex-list-wrapper flex-list-v1"},K=y("img",{class:"light-image",src:w,alt:""},null,-1),O=y("img",{class:"dark-image",src:I,alt:""},null,-1),Q={class:"flex-table"},X=y("span",{class:""},"ID",-1),Y=y("span",null,"Photo",-1),Z=y("span",null,"Name",-1),ee=y("span",{class:"justify-content-end"},"Stock",-1),te={class:"flex-list-inner"},ae={"data-th":"ID",class:"flex-table-cell"},se={class:"item-name dark-inverted"},le={class:"flex-table-cell"},ie={class:"flex-table-cell"},oe={class:"light-text"},ne={class:"flex-table-cell justify-content-end","data-th":"Date Close"},re=S("SAVE");var ce=o({expose:[],setup(o){const{cookies:S}=n(),w=r(""),I=c((()=>w.value?W.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.var_code.match(new RegExp(w.value,"i")))):W.value));L.value="Inventory",u({title:"Inventory"}),p(),r(!1),r(!1),r(""),r(null);const ce=r(!1);d((()=>{z().then((e=>{A(T,"locations_id",D.value),E(T.value,"locations_id").change=ue,null!=S.get("locations_id")&&(E(T.value,"locations_id").model=S.get("locations_id"),ue(S.get("locations_id"))),N(E(T.value,"locations_id").model,"active")}))}));const ue=function(e){ce.value=!0,B(E(T.value,"locations_id").model),N(E(T.value,"locations_id").model,"active").then((e=>{ce.value=!1}))};return(o,n)=>{const r=e,c=t,u=a,p=s,d=l,S=i;return v(),m(S,null,{default:f((()=>[g(" Content Wrapper "),y("div",R,[y(c,{class:"mb-6"},{default:f((()=>[y("div",$,[y("div",G,[_(C)?g("v-if",!0):(v(),m("div",H,[q])),y(r,{"inputs-step":_(T)},null,8,["inputs-step"])]),g(' <V-Button\n            v-if="!isLoaded && locationInventory"\n            color="primary"\n            @click="modalNewInventory = true"\n            raised\n            class="mb-4"\n            >New Inventory</V-Button\n          > ')])])),_:1}),y(d,{size:"large",active:ce.value},{default:f((()=>[y("div",J,[g("List Empty Search Placeholder "),y(u,{class:[0!==_(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:f((()=>[K,O])),_:1},8,["class"]),y("div",Q,[g("Table header"),y("div",{class:["flex-table-header",[0===_(I).length&&"is-hidden"]]},[X,Y,Z,ee],2),y("div",te,[y(b,{name:"list",tag:"div"},{default:f((()=>[g("Table item"),(v(!0),m(j,null,h(_(I),(e=>(v(),m("div",{key:e.id,class:"flex-table-item"},[y("div",ae,[y("div",null,[y("span",se,x(e.id),1)])]),y("div",le,[y("img",{class:"",style:{height:"60px"},src:`${_(U)}storage/${e.photo}`,alt:""},null,8,["src"])]),y("div",ie,[y("span",oe,x(e.name),1)]),y("div",ne,[y("form",{onSubmit:V((t=>(e=>{e.loading=!0,console.log(e),M({id:e.id,stock:e.stock}).then((t=>{e.classe="success",e.loading=!1,F.success(t.data)})).catch((e=>{F.error(e.response.data)}))})(e)),["prevent"]),class:"d-flex"},[k(y("input",{type:"text",class:"input h-100","onUpdate:modelValue":t=>e.stock=t},null,8,["onUpdate:modelValue"]),[[P,e.stock]]),y(d,{size:"small",active:e.loading},{default:f((()=>[y(p,{type:"submit",color:e.classe,class:"",style:{"font-size":"10px",height:"35px"},size:""},{default:f((()=>[re])),_:2},1032,["color"])])),_:2},1032,["active"])],40,["onSubmit"])])])))),128))])),_:1})])]),g("Table Pagination"),g(' <V-FlexPagination\n            v-if="filteredData.length > 5"\n            :item-per-page="10"\n            :total-items="873"\n            :current-page="42"\n            :max-links-displayed="7"\n          /> ')])])),_:1},8,["active"])])])),_:1})}}});export default ce;
