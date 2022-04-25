import{_ as e}from"./V-Control.237cc4d1.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.c7dbe33c.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import{d as l,G as i,r,c as n,o as u,h as p,k as o,j as c,D as d,ab as v,S as m,Y as f,Q as g,R as b,F as h,L as y}from"./vendor.c636f33b.js";import{_ as j,a as _}from"./search-4-dark.fb3880a5.js";import{s as x,g as S}from"./Staffs.fab336e6.js";import{b as V}from"./index.b6984123.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.2a5a2aa8.js";import{p as k}from"./sidebarLayoutState.7607026f.js";import"./V-Placeload.c195e33d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.6f0feaa5.js";import"./useDropdown.35c6b80e.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.f70b005e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.32e67a93.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d231cd7d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9c624faa.js";import"./V-Dropdown.2bdf3018.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";import"./Companies.43db3c7a.js";import"./activePanelState.8d6f746c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.80613075.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import"./V-Message.vue_vue&type=script&setup=true&lang.085649cc.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.63bdcb05.js";import"./navbarLayoutState.6fb3987d.js";import"./video.c58ada5a.js";import"./darkModeState.77580bb1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cce55643.js";import"./AnimatedLogo.a42abb6a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e5a3139a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.29ae6253.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.068e83d3.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1e8fe599.js";const P={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),E=o("span",null,"New Staff",-1),A={class:"flex-list-wrapper flex-list-v2"},L=o("img",{class:"light-image",src:j,alt:""},null,-1),T=o("img",{class:"dark-image",src:_,alt:""},null,-1),C={id:"active-items-tab",class:"tab-content is-active"},I={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),D=o("span",null,"Role",-1),M=o("span",null,"Phone",-1),$=o("span",null,"Email",-1),z=o("span",null,"Status",-1),F=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},G={class:"flex-table-cell","data-th":"Role"},Q={class:"flex-table-cell","data-th":"Phone"},W={class:"light-text"},Y={class:"flex-table-cell","data-th":"Email"},H={class:"light-text"},J={class:"flex-table-cell","data-th":"Status"},K={class:"tag is-rounded"},O={class:"flex-table-cell cell-end","data-th":"Actions"},X=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.second_name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[m(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[R,E])),_:1})]),o("div",A,[o(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[L,T])),_:1},8,["class"]),o("div",C,[o("div",I,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,D,M,$,z,F],2),o("div",N,[o(v,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,b(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",q,h(e.name)+" "+h(e.second_name)+" "+h(e.last_name),1)])]),o("div",G,[o("ul",null,[(u(!0),p(g,null,b(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+h(e.role.description),1)])))),128))])]),o("div",Q,[o("span",W,h(e.phone),1)]),o("div",Y,[o("span",H,h(e.email),1)]),o("div",J,[o("span",K,h(e.status?"Active":"Inactive"),1)]),o("div",O,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[X])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;