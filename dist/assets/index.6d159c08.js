import{_ as e}from"./V-Control.46cc2837.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.e0366c94.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{d as l,G as i,r,b as n,o as u,h as p,k as o,j as c,D as d,aa as v,S as m,Y as f,Q as g,R as b,F as h,L as y}from"./vendor.d0c8bc4f.js";import{_ as j,a as _}from"./search-4-dark.fb3880a5.js";import{s as x,g as S}from"./Staffs.1221532a.js";import{b as V}from"./index.59a944bb.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.cbc96d75.js";import{p as k}from"./sidebarLayoutState.24ad74be.js";import"./V-Placeload.ba28fd33.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.36fea1c2.js";import"./useDropdown.6d34f9a4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f4c5944d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.438fd8f7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b53d2d79.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3464e18c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.3e73d9de.js";import"./V-Dropdown.7e196bf4.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.84f721dd.js";import"./Companies.ec51e1d8.js";import"./activePanelState.b9e0947e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f776c2fb.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.39ace96b.js";import"./V-Message.vue_vue&type=script&setup=true&lang.9d01539d.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.12102989.js";import"./navbarLayoutState.4be54aeb.js";import"./video.6d0592c0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.bd4b68fd.js";import"./darkModeState.2cf6bce9.js";import"./AnimatedLogo.7babd236.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e23c671a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e2962b14.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.67afcfe6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ff5e9d07.js";const P={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),E=o("span",null,"New Staff",-1),A={class:"flex-list-wrapper flex-list-v2"},L=o("img",{class:"light-image",src:j,alt:""},null,-1),T=o("img",{class:"dark-image",src:_,alt:""},null,-1),C={id:"active-items-tab",class:"tab-content is-active"},I={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),D=o("span",null,"Role",-1),M=o("span",null,"Phone",-1),$=o("span",null,"Email",-1),z=o("span",null,"Status",-1),F=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},G={class:"flex-table-cell","data-th":"Role"},Q={class:"flex-table-cell","data-th":"Phone"},W={class:"light-text"},Y={class:"flex-table-cell","data-th":"Email"},H={class:"light-text"},J={class:"flex-table-cell","data-th":"Status"},K={class:"tag is-rounded"},O={class:"flex-table-cell cell-end","data-th":"Actions"},X=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.second_name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[m(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[R,E])),_:1})]),o("div",A,[o(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[L,T])),_:1},8,["class"]),o("div",C,[o("div",I,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,D,M,$,z,F],2),o("div",N,[o(v,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,b(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",q,h(e.name)+" "+h(e.second_name)+" "+h(e.last_name),1)])]),o("div",G,[o("ul",null,[(u(!0),p(g,null,b(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+h(e.role.description),1)])))),128))])]),o("div",Q,[o("span",W,h(e.phone),1)]),o("div",Y,[o("span",H,h(e.email),1)]),o("div",J,[o("span",K,h(e.status?"Active":"Inactive"),1)]),o("div",O,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[X])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;