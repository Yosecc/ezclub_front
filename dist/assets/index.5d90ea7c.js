import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.70f5db92.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.eba1148c.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.eaaff5e4.js";import{_ as a}from"./V-Placeload.fdcac8e0.js";import{_ as i}from"./V-PlaceloadWrap.9312f0c7.js";import{_ as l}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.d2cf1456.js";import{_ as u}from"./V-Loader.vue_vue&type=script&setup=true&lang.4de6e38d.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f9b480d4.js";import{d as o,u as c,L as n,G as p,r as d,b as v,w as m,o as f,h as g,j as y,k as b,D as j,J as _,F as h}from"./vendor.f3aa4145.js";import{p as x}from"./sidebarLayoutState.1c67ab49.js";import{a as V,g as k,m as P,b as w}from"./index.8af0bfbd.js";import{b as S,c as C,l as I}from"./Companies.b90f1bdc.js";import{g as L,p as T}from"./Products.d1999397.js";import{l as D}from"./Inventory.6207444d.js";import"./V-Control.b8419f45.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d634e49.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.6e24c1ec.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.52196853.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2d65ef4c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.647e7fc8.js";import"./useDropdown.8ce53aab.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.8a941f7a.js";import"./V-Dropdown.f9a5cb09.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1054d6be.js";import"./activePanelState.a8e3292b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.749ab544.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.79e41b52.js";import"./V-Message.vue_vue&type=script&setup=true&lang.c7e1c1ee.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1ea131b1.js";import"./navbarLayoutState.0afb0a29.js";import"./video.726f585e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6b8bba48.js";import"./darkModeState.aba9ca80.js";import"./AnimatedLogo.136e20ca.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.146a556b.js";import"./V-Block.vue_vue&type=script&setup=true&lang.894ccaf7.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0655cbba.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.67ffc64b.js";const $={class:"d-flex justify-content-between align-items-center"},A={class:"w-100"},E={key:0,class:"w-100"},z=b("h1",{class:"title is-4"},"Select a location",-1),B=b("span",{class:"icon"},[b("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),M=b("span",null,"New Product",-1),U={key:0,class:"page-content-inner"},F={class:"columns is-multiline"},K={class:"is-4 column content-card"},N={class:"d-flex justify-content-between align-items-center"},q=b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-list"})])],-1),G={class:"text-right"},J=b("p",null,"Unique Items",-1),O={class:"title is-2"},Q={class:"is-4 column content-card"},R=b("div",{class:"d-flex justify-content-between align-items-center"},[b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-shopping-bag"})])]),b("div",{class:"text-right"},[b("p",null,"Total Quantity"),b("h1",{class:"title is-2"},"0")])],-1),W={class:"is-4 column content-card"},H=b("div",{class:"d-flex justify-content-between align-items-center"},[b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-comment-dollar"})])]),b("div",{class:"text-right"},[b("p",null,"Value"),b("h1",{class:"title is-2"},"$0.00")])],-1),X={style:{"min-height":"300px"}};var Y=o({expose:[],setup(o){const{cookies:Y}=c();x.value="Products",n({title:"Products"}),p((()=>{S().then((e=>{V(I,"locations_id",C.value.locations),k(I.value,"locations_id").change=Z,null!=Y.get("locations_id")&&(k(I.value,"locations_id").model=Y.get("locations_id"),Z(Y.get("locations_id")))}))}));const Z=function(e){"object"==typeof e&&(e=this.model),te.value=!0,D.value=e,L(e).then((e=>{te.value=!1}))},ee=d(!1),te=d(!1),se=v((()=>{let e=[];return T.value&&T.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,"stock",t.category.name,t.status,t.id])})),e}));m(se,(e=>{te.value=!0,ee.value=!1,setTimeout((()=>{ee.value=!0,te.value=!1}),500)}));const ae=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${w.value}storage/${e}" alt="">`;function ie(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}v((()=>{let e=0;return T.value.forEach((t=>{e+=t.price})),e}));const le=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ae,sortable:!1},{select:4,render:P},{select:5,hidden:!0},{select:8,render:ie,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","STOCK","Category","Status","Actions"],data:se.value}})));return(o,c)=>{const n=e,p=t,d=s,v=a,m=i,x=l,V=u,k=r;return f(),g(k,null,{default:y((()=>[b(d,{class:"mb-6"},{default:y((()=>[b("div",$,[b("div",A,[j(D)?_("",!0):(f(),g("div",E,[z])),b(n,{"inputs-step":j(I)},null,8,["inputs-step"])]),b(p,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[B,M])),_:1})])])),_:1}),j(T)?(f(),g("div",U,[b("div",F,[b("div",K,[te.value?(f(),g(m,{key:0},{default:y((()=>[b(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[b("div",N,[q,b("div",G,[J,b("h1",O,h(j(T).length),1)])])])),_:1}))]),b("div",Q,[te.value?(f(),g(m,{key:0},{default:y((()=>[b(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[R])),_:1}))]),b("div",W,[te.value?(f(),g(m,{key:0},{default:y((()=>[b(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[H])),_:1}))])]),b(V,{size:"large",active:te.value},{default:y((()=>[b("div",X,[ee.value?(f(),g(x,{key:0,options:j(le)},null,8,["options"])):_("",!0)])])),_:1},8,["active"])])):_("",!0)])),_:1})}}});export default Y;
