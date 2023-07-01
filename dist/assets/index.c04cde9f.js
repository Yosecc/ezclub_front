import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{_ as a}from"./V-Placeload.f3ddf6cd.js";import{_ as i}from"./V-PlaceloadWrap.0e5f466a.js";import{_ as r}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.a89e07cd.js";import{_ as o}from"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import{_ as l}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e08d02df.js";import{d as u,u as c,O as p,o as n,r as d,b as v,w as m,h as f,i as g,k as y,l as j,F as _,K as h,H as b,G as x}from"./vendor.3e3390b7.js";import{p as V}from"./sidebarLayoutState.46d3c8c9.js";import{a as k,g as P,m as S,b as w}from"./index.c1337d84.js";import{a as C,e as I,l as A,s as L}from"./Companies.3008024c.js";import{g as D,p as E}from"./Products.ca5f145f.js";import{l as $}from"./Inventory.08bf0621.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d7be9bd2.js";import"./useDropdown.fb013c95.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const z={class:"d-flex justify-content-between align-items-center"},B={class:"w-100"},T={key:0,class:"w-100"},U=j("h1",{class:"title is-4"},"Select a location",-1),F=j("span",{class:"icon"},[j("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),K=j("span",null,"New Product",-1),M={key:0,class:"page-content-inner"},N={class:"columns is-multiline"},q={class:"is-4 column content-card"},G={class:"d-flex justify-content-between align-items-center"},H=j("div",{class:"icon"},[j("p",null,[j("i",{class:"fas fa-list"})])],-1),O={class:"text-right"},R=j("p",null,[x(" Unique Items "),j("br"),j("small",null,"According to active products")],-1),W={class:"title is-2"},J={style:{"min-height":"300px"}};var Q=u({expose:[],setup(u){const{cookies:x}=c();V.value="Products",p({title:"Products"}),n((()=>{C().then((e=>{k(A,"locations_id",I.value),P(A.value,"locations_id").change=Q,null!=x.get("locations_id")&&(P(A.value,"locations_id").model=x.get("locations_id"),Q(x.get("locations_id")))}))}));const Q=function(e){"object"==typeof e&&(e=this.model),Y.value=!0,$.value=e,L(e),D(e).then((e=>{Y.value=!1}))},X=d(!1),Y=d(!1),Z=v((()=>{let e=[];return E.value&&E.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,t.stockactive,t.category.name,t.status,t.id])})),e}));m(Z,(e=>{Y.value=!0,X.value=!1,setTimeout((()=>{X.value=!0,Y.value=!1}),500)}));const ee=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${w.value}storage/${e}" alt="">`;function te(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}v((()=>{let e=0;return E.value.forEach((t=>{e+=t.stockactive})),e}));const se=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ee,sortable:!1},{select:4,render:S},{select:5},{select:8,render:te,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","stock","Category","Status","Actions"],data:Z.value}})));return(u,c)=>{const p=e,n=t,d=s,v=a,m=i,x=r,V=o,k=l;return f(),g(k,null,{default:y((()=>[j(d,{class:"mb-6"},{default:y((()=>[j("div",z,[j("div",B,[_($)?h("",!0):(f(),g("div",T,[U])),j(p,{"inputs-step":_(A)},null,8,["inputs-step"])]),j(n,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[F,K])),_:1})])])),_:1}),_(E)?(f(),g("div",M,[j("div",N,[j("div",q,[Y.value?(f(),g(m,{key:0},{default:y((()=>[j(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[j("div",G,[H,j("div",O,[R,j("h1",W,b(_(E).length),1)])])])),_:1}))])]),j(V,{size:"large",active:Y.value},{default:y((()=>[j("div",J,[X.value?(f(),g(x,{key:0,options:_(se)},null,8,["options"])):h("",!0)])])),_:1},8,["active"])])):h("",!0)])),_:1})}}});export default Q;
