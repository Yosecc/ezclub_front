import{_ as e}from"./V-Control.2afc087f.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.5d930131.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.26bcd1be.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.9eb855e5.js";import{d as l,o as i,r,b as n,h as u,i as c,l as p,k as o,F as d,ac as v,W as m,_ as f,R as g,S as h,H as b,O as y}from"./vendor.97519523.js";import{_ as j,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.f6142d38.js";import{b as V}from"./index.1320c21c.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.2f217346.js";import{p as k}from"./sidebarLayoutState.d754385c.js";import"./V-Placeload.00784b47.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0007fb50.js";import"./useDropdown.f83c3b21.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.51c40874.js";import"./V-Field.vue_vue&type=script&setup=true&lang.f8c64211.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.dfdb978d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0778ef70.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5a9870aa.js";import"./V-Card.vue_vue&type=script&setup=true&lang.c2cf409c.js";import"./V-Dropdown.2518b711.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.dd8914c5.js";import"./Companies.ca2ccc6e.js";import"./activePanelState.5cb7bbf7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1d9f762a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b9be9a92.js";import"./video.1510d057.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.33cd8c01.js";import"./darkModeState.c47abdb5.js";import"./AnimatedLogo.8c1c7d9d.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.59062aea.js";import"./V-Block.vue_vue&type=script&setup=true&lang.4df19e33.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.cb8ad7f8.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},R=p("span",{class:"icon"},[p("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=p("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},C=p("img",{class:"light-image",src:j,alt:""},null,-1),L=p("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=p("span",{class:"is-grow"},"Staff Name",-1),$=p("span",null,"Role",-1),z=p("span",null,"Phone",-1),D=p("span",null,"Email",-1),F=p("span",null,"Status",-1),M=p("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},W={class:"item-name dark-inverted"},q={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=p("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),c("div",null,[p("div",P,[p(r,{icon:"feather:search"},{default:o((()=>[m(p("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,y.value]])])),_:1}),p(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:o((()=>[R,A])),_:1})]),p("div",E,[p(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:o((()=>[C,L])),_:1},8,["class"]),p("div",I,[p("div",T,[p("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,$,z,D,F,M],2),p("div",N,[p(v,{name:"list",tag:"div"},{default:o((()=>[(u(!0),c(g,null,h(d(j),(e=>(u(),c("div",{key:e.id,class:"flex-table-item"},[p("div",U,[p(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),p("div",null,[p("span",W,b(e.name)+" "+b(e.second_name)+" "+b(e.last_name),1)])]),p("div",q,[p("ul",null,[(u(!0),c(g,null,h(e.staff_roles,((e,t)=>(u(),c("li",{key:`staff-role-${t}`},[p("p",null,"- "+b(e.role.description),1)])))),128))])]),p("div",H,[p("span",O,b(e.phone),1)]),p("div",G,[p("span",J,b(e.email),1)]),p("div",K,[p("span",Q,b(e.status?"Active":"Inactive"),1)]),p("div",X,[p(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:o((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),c(s,null,{default:o((()=>[p("div",ee,[p(a)])])),_:1})})});export default te;
