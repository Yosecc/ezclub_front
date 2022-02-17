import{_ as e}from"./V-Control.596e5582.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.f17c03d3.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.1f8e2276.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.6ab49365.js";import{_ as l}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.2fb46fed.js";import{d as i,A as r,r as n,b as p,o as u,h as c,k as o,j as d,B as m,a8 as v,L as f,F as g,S as h,N as y,O as _,J as j,z as b}from"./vendor.1ed36195.js";import{_ as x,a as S}from"./search-4-dark.fb3880a5.js";import{s as w,g as V}from"./Staffs.607cedfb.js";import{_ as P}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.10a38e30.js";import{p as k}from"./sidebarLayoutState.18cc1e94.js";import"./V-Placeload.900d95a2.js";import"./index.813c5a45.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.bba534e9.js";import"./useDropdown.a0d0889f.js";import"./V-Dropdown.1574919e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6c749f0c.js";import"./activePanelState.f5c8fc6c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.c58ffd7f.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.489ae55b.js";import"./V-Message.vue_vue&type=script&setup=true&lang.34fe1a74.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.4e1235e8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2dd74ef2.js";import"./navbarLayoutState.82e1db9c.js";import"./video.7495f6b6.js";import"./darkModeState.fe7b7276.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.85de3c19.js";import"./AnimatedLogo.04f6a731.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8c96819a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.887eae11.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ad7ba52b.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35dc0c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.633c50cf.js";const E={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=o("span",null,"New Staff",-1),L={class:"flex-list-wrapper flex-list-v2"},T=o("img",{class:"light-image",src:x,alt:""},null,-1),B=o("img",{class:"dark-image",src:S,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},z={class:"flex-table"},F=o("span",{class:"is-grow"},"Staff Name",-1),M=o("span",null,"Role",-1),N=o("span",null,"Phone",-1),C=o("span",null,"Email",-1),D=o("span",null,"Status",-1),U=o("span",{class:"cell-end"},"Actions",-1),q={class:"flex-list-inner"},J={class:"flex-table-cell is-media is-grow"},O={class:"item-name dark-inverted"},W={class:"flex-table-cell","data-th":"Role"},G={class:"light-text"},H={class:"flex-table-cell","data-th":"Phone"},K={class:"light-text"},Q={class:"flex-table-cell","data-th":"Email"},X={class:"light-text"},Y={class:"flex-table-cell","data-th":"Status"},Z={class:"tag is-rounded"},$={class:"flex-table-cell cell-end","data-th":"Actions"},ee=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var te=i({expose:[],props:{activeTab:{type:String,default:"active"}},setup(i){r((()=>{}));const b=n(""),x=p((()=>b.value?w.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(b.value,"i"))||e.second_name.match(new RegExp(b.value,"i"))||e.last_name.match(new RegExp(b.value,"i"))||e.staff_roles.description.match(new RegExp(b.value,"i"))||e.phone.toString().match(new RegExp(b.value,"i"))||e.email.match(new RegExp(b.value,"i"))||t.match(new RegExp(b.value,"i"))})):w.value));return(i,r)=>{const n=e,p=t,S=a,w=s,V=t,P=l;return u(),c("div",null,[o("div",E,[o(n,{icon:"feather:search"},{default:d((()=>[g(o("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>b.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[h,b.value]])])),_:1}),o(p,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:d((()=>[R,A])),_:1})]),o("div",L,[o(S,{class:[0!==m(x).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:d((()=>[T,B])),_:1},8,["class"]),o("div",I,[o("div",z,[o("div",{class:["flex-table-header",[0===m(x).length&&"is-hidden"]]},[F,M,N,C,D,U],2),o("div",q,[o(v,{name:"list",tag:"div"},{default:d((()=>[(u(!0),c(y,null,_(m(x),(e=>(u(),c("div",{key:e.id,class:"flex-table-item"},[o("div",J,[o(w,{picture:e.photo},null,8,["picture"]),o("div",null,[o("span",O,j(e.name)+" "+j(e.second_name)+" "+j(e.last_name),1)])]),o("div",W,[o("span",G,j(e.staff_roles.description),1)]),o("div",H,[o("span",K,j(e.phone),1)]),o("div",Q,[o("span",X,j(e.email),1)]),o("div",Y,[o("span",Z,j(e.status?"Active":"Inactive"),1)]),o("div",$,[o(V,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:d((()=>[ee])),_:2},1032,["to"])])])))),128))])),_:1})])]),m(x).length>5?(u(),c(P,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):f("",!0)])])])}}});const ae={class:"page-content-inner"};var se=i({expose:[],setup:e=>(k.value="Staff",b({title:"Stasff"}),r((()=>{V()})),(e,t)=>{const a=te,s=P;return u(),c(s,null,{default:d((()=>[o("div",ae,[o(a)])])),_:1})})});export default se;
