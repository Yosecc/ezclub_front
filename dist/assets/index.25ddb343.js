import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import{_ as a}from"./V-Placeload.f8b8ec60.js";import{_ as l}from"./V-PlaceloadWrap.8462f923.js";import{_ as i}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.e156ea26.js";import{_ as o}from"./V-Loader.vue_vue&type=script&setup=true&lang.4e7db0f0.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.52ffe1d6.js";import{d as u,u as n,O as c,H as p,r as d,b as v,w as m,o as f,h as g,j as y,k as _,E as h,K as j,G as b,F as x}from"./vendor.41bfc188.js";import{p as k}from"./sidebarLayoutState.454c18d7.js";import{a as V,g as P,m as w,b as S}from"./index.6cb589a0.js";import{a as A,d as C,l as I}from"./Companies.f2733f75.js";import{g as E,p as L,t as D}from"./Products.230bdd1c.js";import{l as T}from"./Inventory.35b05093.js";import"./V-Control.1c77a766.js";import"./V-Field.vue_vue&type=script&setup=true&lang.76856fac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.705d779e.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f8514cb3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5c7c3de8.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8f956119.js";import"./useDropdown.83054731.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import"./V-Dropdown.badc33ca.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3a9e98a1.js";import"./activePanelState.64e8f3f7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d68564b0.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import"./video.97fb6e11.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.83e515e1.js";import"./darkModeState.fd1ad691.js";import"./AnimatedLogo.820f7b3b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.d9ddefd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.2cd1d3e1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c920d493.js";import"./userPopovers.f4b9fc60.js";const $={class:"d-flex justify-content-between align-items-center"},z={class:"w-100"},B={key:0,class:"w-100"},U=_("h1",{class:"title is-4"},"Select a location",-1),F=_("span",{class:"icon"},[_("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),K=_("span",null,"New Product",-1),M={key:0,class:"page-content-inner"},N={class:"columns is-multiline"},q={class:"is-4 column content-card"},G={class:"d-flex justify-content-between align-items-center"},H=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-list"})])],-1),O={class:"text-right"},Q=_("p",null,[x(" Unique Items "),_("br"),_("small",null,"According to active products")],-1),R={class:"title is-2"},W={class:"is-4 column content-card"},J={class:"d-flex justify-content-between align-items-center"},X=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-shopping-bag"})])],-1),Y={class:"text-right"},Z=_("p",null,[x(" Total Quantity "),_("br"),_("small",null,"According to latest inventory")],-1),ee={class:"title is-2"},te={class:"is-4 column content-card"},se={class:"d-flex justify-content-between align-items-center"},ae=_("div",{class:"icon"},[_("p",null,[_("i",{class:"fas fa-comment-dollar"})])],-1),le={class:"text-right"},ie=_("p",null,[x("Value"),_("br"),_("small",null,"According to latest inventory")],-1),oe={class:"title is-2"},re={style:{"min-height":"300px"}};var ue=u({expose:[],setup(u){const{cookies:x}=n();k.value="Products",c({title:"Products"}),p((()=>{A().then((e=>{V(I,"locations_id",C.value),P(I.value,"locations_id").change=ue,null!=x.get("locations_id")&&(P(I.value,"locations_id").model=x.get("locations_id"),ue(x.get("locations_id")))}))}));const ue=function(e){"object"==typeof e&&(e=this.model),ce.value=!0,T.value=e,E(e).then((e=>{ce.value=!1}))},ne=d(!1),ce=d(!1),pe=v((()=>{let e=[];return L.value&&L.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,t.stockactive,t.category.name,t.status,t.id])})),e}));m(pe,(e=>{ce.value=!0,ne.value=!1,setTimeout((()=>{ne.value=!0,ce.value=!1}),500)}));const de=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${S.value}storage/${e}" alt="">`;function ve(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}const me=v((()=>{let e=0;return L.value.forEach((t=>{e+=t.stockactive})),e})),fe=v((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:de,sortable:!1},{select:4,render:w},{select:5},{select:8,render:ve,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","stock","Category","Status","Actions"],data:pe.value}})));return(u,n)=>{const c=e,p=t,d=s,v=a,m=l,x=i,k=o,V=r;return f(),g(V,null,{default:y((()=>[_(d,{class:"mb-6"},{default:y((()=>[_("div",$,[_("div",z,[h(T)?j("",!0):(f(),g("div",B,[U])),_(c,{"inputs-step":h(I)},null,8,["inputs-step"])]),_(p,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:y((()=>[F,K])),_:1})])])),_:1}),h(L)?(f(),g("div",M,[_("div",N,[_("div",q,[ce.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",G,[H,_("div",O,[Q,_("h1",R,b(h(L).length),1)])])])),_:1}))]),_("div",W,[ce.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",J,[X,_("div",Y,[Z,_("h1",ee,b(h(me)),1)])])])),_:1}))]),_("div",te,[ce.value?(f(),g(m,{key:0},{default:y((()=>[_(v,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(f(),g(d,{key:1,radius:"small"},{default:y((()=>[_("div",se,[ae,_("div",le,[ie,_("h1",oe,b(h(w)(h(D))),1)])])])),_:1}))])]),_(k,{size:"large",active:ce.value},{default:y((()=>[_("div",re,[ne.value?(f(),g(x,{key:0,options:h(fe)},null,8,["options"])):j("",!0)])])),_:1},8,["active"])])):j("",!0)])),_:1})}}});export default ue;
