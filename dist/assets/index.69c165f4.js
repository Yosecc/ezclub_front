import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{_ as a}from"./V-Placeload.43c61814.js";import{_ as i}from"./V-PlaceloadWrap.40d3f736.js";import{_ as l}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.ca9dac93.js";import{_ as o}from"./V-Loader.vue_vue&type=script&setup=true&lang.72c1da57.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7939d52c.js";import{d as u,u as c,P as n,o as p,r as d,c as v,w as m,i as f,j as g,k as y,I as _,l as j,F as h,H as b,G as x}from"./vendor.b96c0b62.js";import{p as k}from"./sidebarLayoutState.a7097173.js";import{a as V,g as P,m as w,b as S}from"./index.65e49cfc.js";import{a as C,e as I,l as A,s as L}from"./Companies.cfda0987.js";import{g as D,p as E,t as T}from"./Products.4ba43599.js";import{l as $}from"./Inventory.d044168d.js";import"./V-Control.9f6b030b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ce6cc8c6.js";import"./useDropdown.51b21268.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";const z={class:"d-flex justify-content-between align-items-center"},B={class:"w-100"},U={key:0,class:"w-100"},F=j("h1",{class:"title is-4"},"Select a location",-1),M=j("span",{class:"icon"},[j("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),N=j("span",null,"New Product",-1),W={key:0,class:"page-content-inner"},q={class:"columns is-multiline"},G={class:"is-4 column content-card"},H={class:"d-flex justify-content-between align-items-center"},K=j("div",{class:"icon"},[j("p",null,[j("i",{class:"fas fa-list"})])],-1),Q={class:"text-right"},R=j("p",null,[x(" Unique Items "),j("br"),j("small",null,"According to active products")],-1),J={class:"title is-2"},O={class:"is-4 column content-card"},X={class:"d-flex justify-content-between align-items-center"},Y=j("div",{class:"icon"},[j("p",null,[j("i",{class:"fas fa-shopping-bag"})])],-1),Z={class:"text-right"},ee=j("p",null,[x(" Total Quantity "),j("br"),j("small",null,"According to latest inventory")],-1),te={class:"title is-2"},se={class:"is-4 column content-card"},ae={class:"d-flex justify-content-between align-items-center"},ie=j("div",{class:"icon"},[j("p",null,[j("i",{class:"fas fa-comment-dollar"})])],-1),le={class:"text-right"},oe=j("p",null,[x("Value"),j("br"),j("small",null,"According to latest inventory")],-1),re={class:"title is-2"},ue={style:{"min-height":"300px"}};var ce=u({expose:[],setup(u){const{cookies:x}=c();k.value="Products",n({title:"Products"}),p((()=>{C().then((e=>{V(A,"locations_id",I.value),P(A.value,"locations_id").change=ce,null!=x.get("locations_id")&&(P(A.value,"locations_id").model=x.get("locations_id"),ce(x.get("locations_id")))}))}));const ce=function(e){"object"==typeof e&&(e=this.model),pe.value=!0,$.value=e,L(e),D(e).then((e=>{pe.value=!1}))},ne=d(!1),pe=d(!1),de=v((()=>{let e=[];return E.value&&E.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,t.stockactive,t.category.name,t.status,t.id])})),e}));m(de,(e=>{pe.value=!0,ne.value=!1,setTimeout((()=>{ne.value=!0,pe.value=!1}),500)}));const ve=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${S.value}storage/${e}" alt="">`;function me(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}const fe=v((()=>{let e=0;return E.value.forEach((t=>{e+=t.stockactive})),e})),ge=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ve,sortable:!1},{select:4,render:w},{select:5},{select:8,render:me,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","stock","Category","Status","Actions"],data:de.value}})));return(u,c)=>{const n=e,p=t,d=s,v=a,m=i,x=l,k=o,V=r;return f(),g(V,null,{default:y((()=>[_(" Content Wrapper "),j(d,{class:"mb-6"},{default:y((()=>[j("div",z,[j("div",B,[h($)?_("v-if",!0):(f(),g("div",U,[F])),j(n,{"inputs-step":h(A)},null,8,["inputs-step"])]),j(p,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[M,N])),_:1})])])),_:1}),h(E)?(f(),g("div",W,[j("div",q,[j("div",G,[pe.value?(f(),g(m,{key:0},{default:y((()=>[j(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[j("div",H,[K,j("div",Q,[R,j("h1",J,b(h(E).length),1)])])])),_:1}))]),j("div",O,[pe.value?(f(),g(m,{key:0},{default:y((()=>[j(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[j("div",X,[Y,j("div",Z,[ee,j("h1",te,b(h(fe)),1)])])])),_:1}))]),j("div",se,[pe.value?(f(),g(m,{key:0},{default:y((()=>[j(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[j("div",ae,[ie,j("div",le,[oe,j("h1",re,b(h(w)(h(T))),1)])])])),_:1}))])]),j(k,{size:"large",active:pe.value},{default:y((()=>[j("div",ue,[ne.value?(f(),g(x,{key:0,options:h(ge)},null,8,["options"])):_("v-if",!0)])])),_:1},8,["active"])])):_("v-if",!0)])),_:1})}}});export default ce;
