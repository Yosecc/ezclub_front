import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as a}from"./V-Placeload.28979271.js";import{_ as i}from"./V-PlaceloadWrap.9fc25d6d.js";import{_ as r}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.bec61e9a.js";import{_ as o}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_ as l}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.278da3b9.js";import{d as u,u as c,O as p,o as n,r as d,b as v,w as m,h as f,i as g,k as y,l as j,F as _,K as h,H as b,G as x}from"./vendor.4454b83d.js";import{p as V}from"./sidebarLayoutState.66d5e66f.js";import{a as k,g as P,m as S,b as w}from"./index.7c7f3752.js";import{a as C,e as I,l as A,s as L}from"./Companies.4f750920.js";import{g as D,p as E}from"./Products.3a065923.js";import{l as $}from"./Inventory.facaaf10.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.65345061.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const z={class:"d-flex justify-content-between align-items-center"},B={class:"w-100"},T={key:0,class:"w-100"},U=j("h1",{class:"title is-4"},"Select a location",-1),F=j("span",{class:"icon"},[j("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),K=j("span",null,"New Product",-1),M={key:0,class:"page-content-inner"},N={class:"columns is-multiline"},q={class:"is-4 column content-card"},G={class:"d-flex justify-content-between align-items-center"},H=j("div",{class:"icon"},[j("p",null,[j("i",{class:"fas fa-list"})])],-1),O={class:"text-right"},R=j("p",null,[x(" Unique Items "),j("br"),j("small",null,"According to active products")],-1),W={class:"title is-2"},J={style:{"min-height":"300px"}};var Q=u({expose:[],setup(u){const{cookies:x}=c();V.value="Products",p({title:"Products"}),n((()=>{C().then((e=>{k(A,"locations_id",I.value),P(A.value,"locations_id").change=Q,null!=x.get("locations_id")&&(P(A.value,"locations_id").model=x.get("locations_id"),Q(x.get("locations_id")))}))}));const Q=function(e){"object"==typeof e&&(e=this.model),Y.value=!0,$.value=e,L(e),D(e).then((e=>{Y.value=!1}))},X=d(!1),Y=d(!1),Z=v((()=>{let e=[];return E.value&&E.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,t.stockactive,t.category.name,t.status,t.id])})),e}));m(Z,(e=>{Y.value=!0,X.value=!1,setTimeout((()=>{X.value=!0,Y.value=!1}),500)}));const ee=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${w.value}storage/${e}" alt="">`;function te(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}v((()=>{let e=0;return E.value.forEach((t=>{e+=t.stockactive})),e}));const se=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ee,sortable:!1},{select:4,render:S},{select:5},{select:8,render:te,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","stock","Category","Status","Actions"],data:Z.value}})));return(u,c)=>{const p=e,n=t,d=s,v=a,m=i,x=r,V=o,k=l;return f(),g(k,null,{default:y((()=>[j(d,{class:"mb-6"},{default:y((()=>[j("div",z,[j("div",B,[_($)?h("",!0):(f(),g("div",T,[U])),j(p,{"inputs-step":_(A)},null,8,["inputs-step"])]),j(n,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[F,K])),_:1})])])),_:1}),_(E)?(f(),g("div",M,[j("div",N,[j("div",q,[Y.value?(f(),g(m,{key:0},{default:y((()=>[j(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[j("div",G,[H,j("div",O,[R,j("h1",W,b(_(E).length),1)])])])),_:1}))])]),j(V,{size:"large",active:Y.value},{default:y((()=>[j("div",J,[X.value?(f(),g(x,{key:0,options:_(se)},null,8,["options"])):h("",!0)])])),_:1},8,["active"])])):h("",!0)])),_:1})}}});export default Q;
