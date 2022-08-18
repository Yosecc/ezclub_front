import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.cb28cdf7.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.438bbeab.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.0bff9431.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.72d242e7.js";import{d as o,u as n,r,b as c,P as u,aa as p,I as d,o as v,i as m,j as f,H as g,k as y,E as b,ab as _,S as j,U as h,G as x,a2 as V,W as k,_ as P,F as S}from"./vendor.5bccebbb.js";import{_ as w,a as I}from"./search-4-dark.12f0bf0d.js";import{p as L}from"./sidebarLayoutState.620c70af.js";import{l as C}from"./Inventory.d4d7a232.js";import{a as z,d as D,l as T}from"./Companies.4241e8c8.js";import{a as B,g as E,i as A,n as U}from"./index.0622f2b5.js";import{g as F,p as N,h as W}from"./Products.e16b524d.js";import"./V-Control.a9c2cbb9.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80224232.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5d45ce20.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3df65f9d.js";import"./V-Placeload.8ccc7bfb.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.241008cf.js";import"./useDropdown.04bc7533.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import"./V-Dropdown.e4c10296.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.c4247789.js";import"./activePanelState.5e0ea050.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.22802a6a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.df44a07c.js";import"./video.3bfbcca0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f802abe5.js";import"./darkModeState.ac3ed3a0.js";import"./AnimatedLogo.1a22360b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import"./userPopovers.f4b9fc60.js";const M={class:"page-content-inner"},R={class:"d-flex justify-content-between align-items-center"},$={class:"w-100"},G={key:0,class:"w-100"},H=y("h1",{class:"title is-4"},"Select a location",-1),q={class:"flex-list-wrapper flex-list-v1"},J=y("img",{class:"light-image",src:w,alt:""},null,-1),K=y("img",{class:"dark-image",src:I,alt:""},null,-1),O={class:"flex-table"},Q=y("span",{class:""},"ID",-1),X=y("span",null,"Photo",-1),Y=y("span",null,"Name",-1),Z=y("span",{class:"justify-content-end"},"Stock",-1),ee={class:"flex-list-inner"},te={"data-th":"ID",class:"flex-table-cell"},ae={class:"item-name dark-inverted"},se={class:"flex-table-cell"},le={class:"flex-table-cell"},ie={class:"light-text"},oe={class:"flex-table-cell justify-content-end","data-th":"Date Close"},ne=S("SAVE");var re=o({expose:[],setup(o){const{cookies:S}=n(),w=r(""),I=c((()=>w.value?N.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.var_code.match(new RegExp(w.value,"i")))):N.value));L.value="Inventory",u({title:"Inventory"}),p(),r(!1),r(!1),r(""),r(null);const re=r(!1);d((()=>{z().then((e=>{B(T,"locations_id",D.value),E(T.value,"locations_id").change=ce,null!=S.get("locations_id")&&(E(T.value,"locations_id").model=S.get("locations_id"),ce(S.get("locations_id"))),F(E(T.value,"locations_id").model,"active")}))}));const ce=function(e){re.value=!0,F(E(T.value,"locations_id").model,"active").then((e=>{re.value=!1}))};return(o,n)=>{const r=e,c=t,u=a,p=s,d=l,S=i;return v(),m(S,null,{default:f((()=>[g(" Content Wrapper "),y("div",M,[y(c,{class:"mb-6"},{default:f((()=>[y("div",R,[y("div",$,[b(C)?g("v-if",!0):(v(),m("div",G,[H])),y(r,{"inputs-step":b(T)},null,8,["inputs-step"])]),g(' <V-Button\n            v-if="!isLoaded && locationInventory"\n            color="primary"\n            @click="modalNewInventory = true"\n            raised\n            class="mb-4"\n            >New Inventory</V-Button\n          > ')])])),_:1}),y(d,{size:"large",active:re.value},{default:f((()=>[y("div",q,[g("List Empty Search Placeholder "),y(u,{class:[0!==b(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:f((()=>[J,K])),_:1},8,["class"]),y("div",O,[g("Table header"),y("div",{class:["flex-table-header",[0===b(I).length&&"is-hidden"]]},[Q,X,Y,Z],2),y("div",ee,[y(_,{name:"list",tag:"div"},{default:f((()=>[g("Table item"),(v(!0),m(j,null,h(b(I),(e=>(v(),m("div",{key:e.id,class:"flex-table-item"},[y("div",te,[y("div",null,[y("span",ae,x(e.id),1)])]),y("div",se,[y("img",{class:"",style:{height:"60px"},src:`${b(A)}storage/${e.photo}`,alt:""},null,8,["src"])]),y("div",le,[y("span",ie,x(e.name),1)]),y("div",oe,[y("form",{onSubmit:V((t=>(e=>{e.loading=!0,console.log(e),W({id:e.id,stock:e.stock}).then((t=>{e.classe="success",e.loading=!1,U.success(t.data)})).catch((e=>{U.error(e.response.data)}))})(e)),["prevent"]),class:"d-flex"},[k(y("input",{type:"text",class:"input h-100","onUpdate:modelValue":t=>e.stock=t},null,8,["onUpdate:modelValue"]),[[P,e.stock]]),y(d,{size:"small",active:e.loading},{default:f((()=>[y(p,{type:"submit",color:e.classe,class:"",style:{"font-size":"10px",height:"35px"},size:""},{default:f((()=>[ne])),_:2},1032,["color"])])),_:2},1032,["active"])],40,["onSubmit"])])])))),128))])),_:1})])]),g("Table Pagination"),g(' <V-FlexPagination\n            v-if="filteredData.length > 5"\n            :item-per-page="10"\n            :total-items="873"\n            :current-page="42"\n            :max-links-displayed="7"\n          /> ')])])),_:1},8,["active"])])])),_:1})}}});export default re;
