import{d as e,s as t,e as s,l as a,f as i,q as l,_ as r}from"./Companies.f20c2d70.js";import{_ as o}from"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import{_ as u}from"./V-Card.vue_vue&type=script&setup=true&lang.e9093fe9.js";import{_ as n}from"./V-Placeload.e1b5c41e.js";import{_ as c}from"./V-PlaceloadWrap.61828b1c.js";import{_ as p}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.b6bf4b6a.js";import{_ as d}from"./V-Loader.vue_vue&type=script&setup=true&lang.bfc6d522.js";import{_ as v}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8c88ac36.js";import{d as m,u as f,y as g,z as y,r as j,b as _,w as h,o as b,h as x,j as V,k,D as P,K as w,J as S}from"./vendor.685e53b0.js";import{p as C}from"./sidebarLayoutState.b1e70c1b.js";import{a as I}from"./index.70f03363.js";import{g as T,p as D}from"./Products.41f18dce.js";import{l as L}from"./Inventory.2e3f38a7.js";import"./V-Control.2f65f00c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.c665bdc2.js";import"./useDropdown.0a27f828.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.119fc4d3.js";import"./V-Dropdown.4b56e22f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7327817.js";import"./activePanelState.618a6e66.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.3dfa460e.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.62f4b657.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8a404c76.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.5d7a09f8.js";import"./navbarLayoutState.fa41b219.js";import"./video.89824664.js";import"./darkModeState.ac572066.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.7abfdf0e.js";import"./AnimatedLogo.77bc3feb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0d63a362.js";import"./V-Block.vue_vue&type=script&setup=true&lang.218e9dd3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9f34b4f7.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.0749519e.js";const $={class:"d-flex justify-content-between align-items-center"},z={class:"w-100"},A={key:0,class:"w-100"},E=k("h1",{class:"title is-4"},"Select a location",-1),B=k("span",{class:"icon"},[k("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),K=k("span",null,"New Product",-1),M={key:0,class:"page-content-inner"},U={class:"columns is-multiline"},q={class:"is-4 column content-card"},N={class:"d-flex justify-content-between align-items-center"},F=k("div",{class:"icon"},[k("p",null,[k("i",{class:"fas fa-list"})])],-1),J={class:"text-right"},O=k("p",null,"Unique Items",-1),Q={class:"title is-2"},R={class:"is-4 column content-card"},W={class:"d-flex justify-content-between align-items-center"},G=k("div",{class:"icon"},[k("p",null,[k("i",{class:"fas fa-shopping-bag"})])],-1),H={class:"text-right"},X=k("p",null,"Total Quantity",-1),Y={class:"title is-2"},Z={class:"is-4 column content-card"},ee=k("div",{class:"d-flex justify-content-between align-items-center"},[k("div",{class:"icon"},[k("p",null,[k("i",{class:"fas fa-comment-dollar"})])]),k("div",{class:"text-right"},[k("p",null,"Value"),k("h1",{class:"title is-2"},"$6,800.00")])],-1),te={style:{"min-height":"300px"}};var se=m({expose:[],setup(m){const{cookies:se}=f();C.value="Products",g({title:"Products"}),y((()=>{e().then((e=>{t(a,"locations_id",s.value.locations),i(a.value,"locations_id").change=ae,null!=se.get("locations_id")&&(i(a.value,"locations_id").model=se.get("locations_id"),ae(se.get("locations_id")))}))}));const ae=function(e){"object"==typeof e&&(e=this.model),le.value=!0,L.value=e,T(e).then((e=>{le.value=!1}))},ie=j(!1),le=j(!1),re=_((()=>{let e=[];return D.value&&D.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,"stock",t.category.name,t.status,t.id])})),e}));h(re,(e=>{le.value=!0,ie.value=!1,setTimeout((()=>{ie.value=!0,le.value=!1}),500)}));const oe=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${I.value}storage/${e}" alt="">`;function ue(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}const ne=_((()=>{let e=0;return D.value.forEach((t=>{e+=t.price})),e})),ce=_((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:oe,sortable:!1},{select:4,render:l},{select:5,hidden:!0},{select:8,render:ue,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","STOCK","Category","Status","Actions"],data:re.value}})));return(e,t)=>{const s=r,i=o,m=u,f=n,g=c,y=p,j=d,_=v;return b(),x(_,null,{default:V((()=>[k(m,{class:"mb-6"},{default:V((()=>[k("div",$,[k("div",z,[P(L)?w("",!0):(b(),x("div",A,[E])),k(s,{"inputs-step":P(a)},null,8,["inputs-step"])]),k(i,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:V((()=>[B,K])),_:1})])])),_:1}),P(D)?(b(),x("div",M,[k("div",U,[k("div",q,[le.value?(b(),x(g,{key:0},{default:V((()=>[k(f,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(b(),x(m,{key:1,radius:"small"},{default:V((()=>[k("div",N,[F,k("div",J,[O,k("h1",Q,S(P(D).length),1)])])])),_:1}))]),k("div",R,[le.value?(b(),x(g,{key:0},{default:V((()=>[k(f,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(b(),x(m,{key:1,radius:"small"},{default:V((()=>[k("div",W,[G,k("div",H,[X,k("h1",Y,S(P(l)(P(ne))),1)])])])),_:1}))]),k("div",Z,[le.value?(b(),x(g,{key:0},{default:V((()=>[k(f,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(b(),x(m,{key:1,radius:"small"},{default:V((()=>[ee])),_:1}))])]),k(j,{size:"large",active:le.value},{default:V((()=>[k("div",te,[ie.value?(b(),x(y,{key:0,options:P(ce)},null,8,["options"])):w("",!0)])])),_:1},8,["active"])])):w("",!0)])),_:1})}}});export default se;
