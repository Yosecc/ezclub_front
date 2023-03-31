import{_ as e}from"./V-Control.af2aba53.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.af6d6e1f.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.a9a0a2e9.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.aa6c719b.js";import{d as l,o as i,r,c as n,h as u,i as p,l as o,k as c,F as d,ac as f,W as v,_ as m,R as g,S as h,H as y,O as j}from"./vendor.b43d5946.js";import{_,a as b}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.19c6a3d5.js";import{b as V}from"./index.87d4477d.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.22f88900.js";import{p as k}from"./sidebarLayoutState.0e0214cd.js";import"./V-Placeload.f49c87c1.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.fc44684f.js";import"./useDropdown.13fbf150.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.65eea50d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6dd2fdc7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.611dfb74.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.18b88a36.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.8008f57c.js";import"./V-Card.vue_vue&type=script&setup=true&lang.33b246e2.js";import"./V-Dropdown.af8b8ce0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a5a51296.js";import"./Companies.2e825b49.js";import"./activePanelState.fc83f415.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.9988cf02.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.3635de8f.js";import"./video.d2a65d22.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f0b7309b.js";import"./darkModeState.f17b0c9a.js";import"./AnimatedLogo.0dc817d8.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.1d910296.js";import"./V-Block.vue_vue&type=script&setup=true&lang.61639f04.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e9114c30.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=o("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},C=o("img",{class:"light-image",src:_,alt:""},null,-1),L=o("img",{class:"dark-image",src:b,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),$=o("span",null,"Role",-1),z=o("span",null,"Phone",-1),D=o("span",null,"Email",-1),F=o("span",null,"Status",-1),M=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},W={class:"item-name dark-inverted"},q={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const j=r(""),_=n((()=>j.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(j.value,"i"))||e.last_name.match(new RegExp(j.value,"i"))||e.phone.toString().match(new RegExp(j.value,"i"))||e.email.match(new RegExp(j.value,"i"))||t.match(new RegExp(j.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,b=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[v(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>j.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,j.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[R,A])),_:1})]),o("div",E,[o(b,{class:[0!==d(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,L])),_:1},8,["class"]),o("div",I,[o("div",T,[o("div",{class:["flex-table-header",[0===d(_).length&&"is-hidden"]]},[B,$,z,D,F,M],2),o("div",N,[o(f,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,h(d(_),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",W,y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1)])]),o("div",q,[o("ul",null,[(u(!0),p(g,null,h(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+y(e.role.description),1)])))),128))])]),o("div",H,[o("span",O,y(e.phone),1)]),o("div",G,[o("span",J,y(e.email),1)]),o("div",K,[o("span",Q,y(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",j({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;
