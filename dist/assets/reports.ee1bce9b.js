import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{p as t,_ as s}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.9bc2ff5d.js";import{_ as a}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.3d3a0b47.js";import{d as o,O as i,r as u,w as n,o as l,b as r,h as p,i as c,P as v,k as m,l as d,H as f,R as y,S as j,F as b,K as g}from"./vendor.4454b83d.js";import{p as _}from"./sidebarLayoutState.66d5e66f.js";import{A as S}from"./index.bb46ca73.js";import{t as k}from"./themeColors.4f0e93f3.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.149fc8d7.js";import"./useDropdown.659338b4.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./Companies.1d517882.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";const x={data:{type:t(),columns:[],colors:{data1:k.accent,data2:k.primary,data3:k.orange,data4:k.purple}},bar:{width:{ratio:.5}},size:{height:280},padding:{bottom:20},title:{text:"",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{position:"inset"}};var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",options:x,onReady:e=>{setTimeout((()=>{}),1e3)}});const h={key:0,class:"columns is-multiline"},w={class:"column is-12"},C=d("p",{class:"title is-5 m-0"},"Subscriptions",-1),P={class:"title is-5 m-0"},O={class:"column is-12 columns is-multiline mb-0"},A={class:"title is-5 m-0"},J={class:"title is-5 m-0"},T={key:0,class:"column is-12 columns is-multiline"},z={class:"column is-6"},B={class:"column is-6"};var L=o({expose:[],setup(t){_.value="Suscriptions",i({title:"Reports"}),v();const o=u(null),k=u(null),x=u(!0);n(k,(()=>{x.value=!1,setTimeout((()=>{x.value=!0}),100)})),l((()=>{(async()=>{await S.get("v2/suscripcion/reports",{params:{}}).then((e=>{o.value=e.data.suscripciones})).catch((e=>{}))})()}));const L=r((()=>[{name:"Active",count:o.value.activas.count,key:"activas"},{name:"Inactive",count:o.value.inactivas.count,key:"inactivas"}])),M=r((()=>k.value?k.value.membresia:null)),N=r((()=>k.value?k.value.genero:null)),I=r((()=>{if(M.value){let t=[];for(var e in M.value)t.push([e,M.value[e].count]);const s=JSON.parse(JSON.stringify(V));return s.options.data.columns=t,s.options.title.text="Memberships",s.options.data.onclick=openSuscripcioness,s}return null})),R=r((()=>{if(N.value){let t=[];for(var e in N.value)t.push([e,N.value[e].count]);const s=JSON.parse(JSON.stringify(V));return s.options.data.columns=t,s.options.title.text="Gender",s}return null}));return(t,i)=>{const u=e,n=s,l=a;return p(),c(l,null,{default:m((()=>[o.value?(p(),c("div",h,[d("div",w,[d(u,{class:"d-flex justify-content-between"},{default:m((()=>[C,d("p",P,f(o.value.count),1)])),_:1})]),d("div",O,[(p(!0),c(y,null,j(b(L),((e,t)=>(p(),c("div",{key:`grupo${t}`,class:"column is-4 mb-0"},[d(u,{class:"mb-4 d-flex justify-content-between btn-card",onClick:t=>{return s=e,void(k.value=o.value[s.key]);var s}},{default:m((()=>[d("p",A,f(e.name),1),d("p",J,f(e.count),1)])),_:2},1032,["onClick"])])))),128))]),x.value?(p(),c("div",T,[d("div",z,[b(M)&&b(I)?(p(),c(u,{key:0},{default:m((()=>[d(n,{options:b(I).options},null,8,["options"])])),_:1})):g("",!0)]),d("div",B,[b(N)&&b(R)?(p(),c(u,{key:0},{default:m((()=>[d(n,{options:b(R).options},null,8,["options"])])),_:1})):g("",!0)])])):g("",!0)])):g("",!0)])),_:1})}}});export default L;
