import{_ as e}from"./V-Control.45649f5a.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.b1a805d4.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import{d as l,H as i,r,b as n,o as u,h as p,k as o,j as c,E as d,aa as v,W as f,_ as m,R as g,S as h,G as y,O as j}from"./vendor.c210e0cb.js";import{_ as b,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,g as S}from"./Staffs.31a64bf0.js";import{b as V}from"./index.d8d46d91.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a00cd105.js";import{p as k}from"./sidebarLayoutState.56e6ff2f.js";import"./V-Placeload.141ef784.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5bbcd2c4.js";import"./useDropdown.d008e23c.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./Companies.38868a7c.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},E=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),R=o("span",null,"New Staff",-1),A={class:"flex-list-wrapper flex-list-v2"},C=o("img",{class:"light-image",src:b,alt:""},null,-1),L=o("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),$=o("span",null,"Role",-1),z=o("span",null,"Phone",-1),D=o("span",null,"Email",-1),M=o("span",null,"Status",-1),N=o("span",{class:"cell-end"},"Actions",-1),U={class:"flex-list-inner"},W={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},F={class:"flex-table-cell","data-th":"Role"},G={class:"flex-table-cell","data-th":"Phone"},H={class:"light-text"},O={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const j=r(""),b=n((()=>j.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(j.value,"i"))||e.last_name.match(new RegExp(j.value,"i"))||e.phone.toString().match(new RegExp(j.value,"i"))||e.email.match(new RegExp(j.value,"i"))||t.match(new RegExp(j.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[f(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>j.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,j.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[E,R])),_:1})]),o("div",A,[o(_,{class:[0!==d(b).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,L])),_:1},8,["class"]),o("div",I,[o("div",T,[o("div",{class:["flex-table-header",[0===d(b).length&&"is-hidden"]]},[B,$,z,D,M,N],2),o("div",U,[o(v,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,h(d(b),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",W,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",q,y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1)])]),o("div",F,[o("ul",null,[(u(!0),p(g,null,h(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+y(e.role.description),1)])))),128))])]),o("div",G,[o("span",H,y(e.phone),1)]),o("div",O,[o("span",J,y(e.email),1)]),o("div",K,[o("span",Q,y(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",j({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;
