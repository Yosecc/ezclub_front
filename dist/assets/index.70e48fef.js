import{_ as e}from"./V-Control.4e9f0bab.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.418b624a.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import{d as l,o as i,r,b as n,h as u,i as p,l as c,k as o,F as d,ac as v,W as m,_ as f,R as g,S as b,H as h,O as y}from"./vendor.6c78dc37.js";import{_ as j,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.0e5929f0.js";import{b as V}from"./index.a01cdf46.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27adbf0b.js";import{p as k}from"./sidebarLayoutState.b20c1332.js";import"./V-Placeload.35780b71.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.a448915e.js";import"./useDropdown.06fe74bc.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.8eeea7dc.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6bc9f6e9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.22cd5f87.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.51c86d52.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.740c377e.js";import"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import"./V-Dropdown.57d0cfaf.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.2dced437.js";import"./Companies.b586ed9b.js";import"./activePanelState.4fc6f3e5.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d70704d6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.89a8bcfd.js";import"./video.b57e71ec.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.4b9b5c72.js";import"./darkModeState.dc4b3020.js";import"./AnimatedLogo.8e6d8d96.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.40e826fb.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8fe32076.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.bc7fc596.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},R=c("span",{class:"icon"},[c("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=c("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},C=c("img",{class:"light-image",src:j,alt:""},null,-1),L=c("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=c("span",{class:"is-grow"},"Staff Name",-1),$=c("span",null,"Role",-1),z=c("span",null,"Phone",-1),D=c("span",null,"Email",-1),F=c("span",null,"Status",-1),M=c("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},W={class:"item-name dark-inverted"},q={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=c("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[c("div",P,[c(r,{icon:"feather:search"},{default:o((()=>[m(c("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,y.value]])])),_:1}),c(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:o((()=>[R,A])),_:1})]),c("div",E,[c(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:o((()=>[C,L])),_:1},8,["class"]),c("div",I,[c("div",T,[c("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,$,z,D,F,M],2),c("div",N,[c(v,{name:"list",tag:"div"},{default:o((()=>[(u(!0),p(g,null,b(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[c("div",U,[c(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),c("div",null,[c("span",W,h(e.name)+" "+h(e.second_name)+" "+h(e.last_name),1)])]),c("div",q,[c("ul",null,[(u(!0),p(g,null,b(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[c("p",null,"- "+h(e.role.description),1)])))),128))])]),c("div",H,[c("span",O,h(e.phone),1)]),c("div",G,[c("span",J,h(e.email),1)]),c("div",K,[c("span",Q,h(e.status?"Active":"Inactive"),1)]),c("div",X,[c(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:o((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:o((()=>[c("div",ee,[c(a)])])),_:1})})});export default te;