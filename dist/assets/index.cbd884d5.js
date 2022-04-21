import{b as e,c as t,l as s,_ as a}from"./Companies.f2eb7ee0.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.1ccc60b1.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.41ce1566.js";import{_ as r}from"./V-Placeload.5867cb2a.js";import{_ as u}from"./V-PlaceloadWrap.ba6ffb06.js";import{_ as o}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.5838e035.js";import{_ as c}from"./V-Loader.vue_vue&type=script&setup=true&lang.1700d4a4.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.76ff9fed.js";import{d as p,u as d,I as v,G as m,r as f,c as g,w as y,o as j,h as _,j as h,k as b,D as x,L as V,F as k}from"./vendor.2054a2d2.js";import{p as P}from"./sidebarLayoutState.cfaf0763.js";import{a as w,g as S,m as C,b as I}from"./index.8c434b3c.js";import{g as T,p as L}from"./Products.7d8509eb.js";import{l as D}from"./Inventory.7be42181.js";import"./V-Control.f38832cb.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a08d1dac.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.66af2a95.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e0b8e159.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7b2e6a30.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.510c180b.js";import"./useDropdown.b94ed7fe.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.3ec6c8cb.js";import"./V-Dropdown.ff90eac2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.886826dd.js";import"./activePanelState.cdb63acf.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.7acae3ca.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5d37b18d.js";import"./V-Message.vue_vue&type=script&setup=true&lang.9e78ae66.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.6c5205c5.js";import"./navbarLayoutState.18f60985.js";import"./video.e86a6479.js";import"./darkModeState.9a3e9ff8.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d79dd735.js";import"./AnimatedLogo.43add9ed.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.c4ce5663.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8ad13f5d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.36272e7b.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.d0a8d940.js";const $={class:"d-flex justify-content-between align-items-center"},A={class:"w-100"},E={key:0,class:"w-100"},z=b("h1",{class:"title is-4"},"Select a location",-1),B=b("span",{class:"icon"},[b("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),M=b("span",null,"New Product",-1),U={key:0,class:"page-content-inner"},F={class:"columns is-multiline"},K={class:"is-4 column content-card"},N={class:"d-flex justify-content-between align-items-center"},q=b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-list"})])],-1),G={class:"text-right"},O=b("p",null,"Unique Items",-1),Q={class:"title is-2"},R={class:"is-4 column content-card"},W={class:"d-flex justify-content-between align-items-center"},H=b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-shopping-bag"})])],-1),J={class:"text-right"},X=b("p",null,"Total Quantity",-1),Y={class:"title is-2"},Z={class:"is-4 column content-card"},ee=b("div",{class:"d-flex justify-content-between align-items-center"},[b("div",{class:"icon"},[b("p",null,[b("i",{class:"fas fa-comment-dollar"})])]),b("div",{class:"text-right"},[b("p",null,"Value"),b("h1",{class:"title is-2"},"$6,800.00")])],-1),te={style:{"min-height":"300px"}};var se=p({expose:[],setup(p){const{cookies:se}=d();P.value="Products",v({title:"Products"}),m((()=>{e().then((e=>{w(s,"locations_id",t.value.locations),S(s.value,"locations_id").change=ae,null!=se.get("locations_id")&&(S(s.value,"locations_id").model=se.get("locations_id"),ae(se.get("locations_id")))}))}));const ae=function(e){"object"==typeof e&&(e=this.model),le.value=!0,D.value=e,T(e).then((e=>{le.value=!1}))},ie=f(!1),le=f(!1),re=g((()=>{let e=[];return L.value&&L.value.forEach((t=>{e.push([t.id,t.photo,t.name,t.sku,t.price,"stock",t.category.name,t.status,t.id])})),e}));y(re,(e=>{le.value=!0,ie.value=!1,setTimeout((()=>{ie.value=!0,le.value=!1}),500)}));const ue=(e,t,s)=>`<img class="" style="height: 60px" height="10px" src="${I.value}storage/${e}" alt="">`;function oe(e,t,s){return`<div class="has-text-right"><a href="/settings/products/edit?id=${e}" class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Edit</a></div>`}const ce=g((()=>{let e=0;return L.value.forEach((t=>{e+=t.price})),e})),ne=g((()=>({perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:ue,sortable:!1},{select:4,render:C},{select:5,hidden:!0},{select:8,render:oe,sortable:!1}],data:{headings:["ID","Picture","Name","SKU","PRICE","STOCK","Category","Status","Actions"],data:re.value}})));return(e,t)=>{const p=a,d=i,v=l,m=r,f=u,g=o,y=c,P=n;return j(),_(P,null,{default:h((()=>[b(v,{class:"mb-6"},{default:h((()=>[b("div",$,[b("div",A,[x(D)?V("",!0):(j(),_("div",E,[z])),b(p,{"inputs-step":x(s)},null,8,["inputs-step"])]),b(d,{to:{name:"settings-products-create"},color:"primary",raised:""},{default:h((()=>[B,M])),_:1})])])),_:1}),x(L)?(j(),_("div",U,[b("div",F,[b("div",K,[le.value?(j(),_(f,{key:0},{default:h((()=>[b(m,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(j(),_(v,{key:1,radius:"small"},{default:h((()=>[b("div",N,[q,b("div",G,[O,b("h1",Q,k(x(L).length),1)])])])),_:1}))]),b("div",R,[le.value?(j(),_(f,{key:0},{default:h((()=>[b(m,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(j(),_(v,{key:1,radius:"small"},{default:h((()=>[b("div",W,[H,b("div",J,[X,b("h1",Y,k(x(C)(x(ce))),1)])])])),_:1}))]),b("div",Z,[le.value?(j(),_(f,{key:0},{default:h((()=>[b(m,{height:"110px",width:"100%",class:"mx-2"})])),_:1})):(j(),_(v,{key:1,radius:"small"},{default:h((()=>[ee])),_:1}))])]),b(y,{size:"large",active:le.value},{default:h((()=>[b("div",te,[ie.value?(j(),_(g,{key:0,options:x(ne)},null,8,["options"])):V("",!0)])])),_:1},8,["active"])])):V("",!0)])),_:1})}}});export default se;