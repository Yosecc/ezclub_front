import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.8eeea7dc.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import{_ as a}from"./V-Placeload.35780b71.js";import{_ as l}from"./V-PlaceloadWrap.f2a1237f.js";import{_ as i}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.e3c7a988.js";import{_ as o}from"./V-Loader.vue_vue&type=script&setup=true&lang.f29df460.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27adbf0b.js";import{d as u,u as c,O as n,o as p,r as d,b as v,w as m,h as f,i as g,k as y,l as _,F as h,K as j,H as b,G as x}from"./vendor.6c78dc37.js";import{p as k}from"./sidebarLayoutState.b20c1332.js";import{a as V,g as P,m as w,b as S}from"./index.a01cdf46.js";import{a as A,e as C,l as I,s as L}from"./Companies.b586ed9b.js";import{g as D,p as E,t as T}from"./Products.c5aa4627.js";import{l as $}from"./Inventory.6133ce01.js";import"./V-Control.4e9f0bab.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6bc9f6e9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.22cd5f87.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.51c86d52.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.740c377e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.a448915e.js";import"./useDropdown.06fe74bc.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import"./V-Dropdown.57d0cfaf.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.2dced437.js";import"./activePanelState.4fc6f3e5.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d70704d6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.89a8bcfd.js";import"./video.b57e71ec.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.4b9b5c72.js";import"./darkModeState.dc4b3020.js";import"./AnimatedLogo.8e6d8d96.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.40e826fb.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8fe32076.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.bc7fc596.js";import"./userPopovers.f4b9fc60.js";const z={class:"d-flex justify-content-between align-items-center"},B={class:"w-100"},U={key:0,class:"w-100"},F=_("h1",{class:"title is-4"},"Select a location",-1),K=_("span",{class:"icon"},[_("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),M=_("span",null,"New Product",-1),N={key:0,class:"page-content-inner"},q={class:"columns is-multiline"},G={class:"is-4 column content-card"},H={class:"d-flex justify-content-between align-items-center"},O=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-list"})])],-1),Q={class:"text-right"},R=_("p",null,[x(" Unique Items "),_("br"),_("small",null,"According to active products")],-1),W={class:"title is-2"},J={class:"is-4 column content-card"},X={class:"d-flex justify-content-between align-items-center"},Y=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-shopping-bag"})])],-1),Z={class:"text-right"},ee=_("p",null,[x(" Total Quantity "),_("br"),_("small",null,"According to latest inventory")],-1),te={class:"title is-2"},se={class:"is-4 column content-card"},ae={class:"d-flex justify-content-between align-items-center"},le=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-comment-dollar"})])],-1),ie={class:"text-right"},oe=_("p",null,[x("Value"),_("br"),_("small",null,"According to latest inventory")],-1),re={class:"title is-2"},ue={style:{"min-height":"300px"}};var ce=u({expose:[],setup(u){const{cookies:x}=c();k.value="Products",n({title:"Products"}),p((()=>{A().then((e=>{V(I,"locations_id",C.value),P(I.value,"locations_id").change=ce,null!=x.get("locations_id")&&(P(I.value,"locations_id").model=x.get("locations_id"),ce(x.get("locations_id")))}))}));const ce=function(e){"object"==typeof e&&(e=this.model),pe.value=!0,$.value=e,L(e),D(e).then((e=>{pe.value=!1}))},ne=d(!1),pe=d(!1),de=v((()=>{let e=[];return E.value&&E.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,t.stockactive,t.category.name,t.status,t.id])})),e}));m(de,(e=>{pe.value=!0,ne.value=!1,setTimeout((()=>{ne.value=!0,pe.value=!1}),500)}));const ve=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${S.value}storage/${e}" alt="">`;function me(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}const fe=v((()=>{let e=0;return E.value.forEach((t=>{e+=t.stockactive})),e})),ge=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ve,sortable:!1},{select:4,render:w},{select:5},{select:8,render:me,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","stock","Category","Status","Actions"],data:de.value}})));return(u,c)=>{const n=e,p=t,d=s,v=a,m=l,x=i,k=o,V=r;return f(),g(V,null,{default:y((()=>[_(d,{class:"mb-6"},{default:y((()=>[_("div",z,[_("div",B,[h($)?j("",!0):(f(),g("div",U,[F])),_(n,{"inputs-step":h(I)},null,8,["inputs-step"])]),_(p,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[K,M])),_:1})])])),_:1}),h(E)?(f(),g("div",N,[_("div",q,[_("div",G,[pe.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",H,[O,_("div",Q,[R,_("h1",W,b(h(E).length),1)])])])),_:1}))]),_("div",J,[pe.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",X,[Y,_("div",Z,[ee,_("h1",te,b(h(fe)),1)])])])),_:1}))]),_("div",se,[pe.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",ae,[le,_("div",ie,[oe,_("h1",re,b(h(w)(h(T))),1)])])])),_:1}))])]),_(k,{size:"large",active:pe.value},{default:y((()=>[_("div",ue,[ne.value?(f(),g(x,{key:0,options:h(ge)},null,8,["options"])):j("",!0)])])),_:1},8,["active"])])):j("",!0)])),_:1})}}});export default ce;
