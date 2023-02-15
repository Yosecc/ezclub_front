import{_ as e}from"./V-Control.c2f9b0a5.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.708d2bbe.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{d as l,o as i,r,b as n,h as u,i as p,l as o,k as c,F as d,ad as f,W as v,_ as m,R as g,S as h,H as b,O as y}from"./vendor.3e3390b7.js";import{_ as j,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.b44dd4a4.js";import{b as V}from"./index.3cb8fbb0.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ba1c4e11.js";import{p as k}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Placeload.f3ddf6cd.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.acc433da.js";import"./useDropdown.fb013c95.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import"./V-Dropdown.c9869f47.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./Companies.492667c4.js";import"./activePanelState.686e994b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.8dd0557a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import"./video.8eecfa41.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.897288d9.js";import"./darkModeState.31a4c61d.js";import"./AnimatedLogo.ba173867.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=o("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},C=o("img",{class:"light-image",src:j,alt:""},null,-1),L=o("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),$=o("span",null,"Role",-1),z=o("span",null,"Phone",-1),D=o("span",null,"Email",-1),F=o("span",null,"Status",-1),M=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},W={class:"item-name dark-inverted"},q={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[v(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[R,A])),_:1})]),o("div",E,[o(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,L])),_:1},8,["class"]),o("div",I,[o("div",T,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,$,z,D,F,M],2),o("div",N,[o(f,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,h(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",W,b(e.name)+" "+b(e.second_name)+" "+b(e.last_name),1)])]),o("div",q,[o("ul",null,[(u(!0),p(g,null,h(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+b(e.role.description),1)])))),128))])]),o("div",H,[o("span",O,b(e.phone),1)]),o("div",G,[o("span",J,b(e.email),1)]),o("div",K,[o("span",Q,b(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;
