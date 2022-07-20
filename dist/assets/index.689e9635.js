import{_ as e}from"./V-Control.b7d7754b.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.386dddea.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.f9b33ff7.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e447a11e.js";import{d as l,H as i,r,b as n,o as u,h as p,k as o,j as c,E as d,ac as f,W as v,_ as m,R as g,S as b,G as h,O as y}from"./vendor.5767c02e.js";import{_ as j,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.d6da410f.js";import{b as V}from"./index.2b51c424.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.23aa480b.js";import{p as k}from"./sidebarLayoutState.c56511ff.js";import"./V-Placeload.7bee3ecb.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.b6c3b87e.js";import"./useDropdown.9a90cff0.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.dedb284a.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fc0df7c0.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.25468f0d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.0f03dbf2.js";import"./V-Card.vue_vue&type=script&setup=true&lang.69c4989e.js";import"./V-Dropdown.02e4adea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f92a1957.js";import"./Companies.001a585f.js";import"./activePanelState.a44bb85f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e45b24ed.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.2b1a2cd8.js";import"./video.48e91f43.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6512652b.js";import"./darkModeState.6890654d.js";import"./AnimatedLogo.f5f87178.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eaebe978.js";import"./V-Block.vue_vue&type=script&setup=true&lang.05f2e1a3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.ed6fa709.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},E=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),R=o("span",null,"New Staff",-1),A={class:"flex-list-wrapper flex-list-v2"},C=o("img",{class:"light-image",src:j,alt:""},null,-1),L=o("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),$=o("span",null,"Role",-1),z=o("span",null,"Phone",-1),D=o("span",null,"Email",-1),M=o("span",null,"Status",-1),N=o("span",{class:"cell-end"},"Actions",-1),U={class:"flex-list-inner"},W={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},F={class:"flex-table-cell","data-th":"Role"},G={class:"flex-table-cell","data-th":"Phone"},H={class:"light-text"},O={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[v(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[E,R])),_:1})]),o("div",A,[o(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,L])),_:1},8,["class"]),o("div",I,[o("div",T,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,$,z,D,M,N],2),o("div",U,[o(f,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,b(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",W,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",q,h(e.name)+" "+h(e.second_name)+" "+h(e.last_name),1)])]),o("div",F,[o("ul",null,[(u(!0),p(g,null,b(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+h(e.role.description),1)])))),128))])]),o("div",G,[o("span",H,h(e.phone),1)]),o("div",O,[o("span",J,h(e.email),1)]),o("div",K,[o("span",Q,h(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;