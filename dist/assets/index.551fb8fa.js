import{_ as e}from"./V-Control.61107fd4.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.802f4410.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import{d as l,z as i,r,c as n,o as u,h as p,k as o,j as c,D as d,a8 as f,F as v,S as m,L as g,O as h,J as j,y}from"./vendor.d1a3c89d.js";import{_,a as b}from"./search-4-dark.12f0bf0d.js";import{s as x,g as S}from"./Staffs.e8f2b87f.js";import{b as V}from"./index.a92ea6cf.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ef4fb6c6.js";import{p as k}from"./sidebarLayoutState.a11d51b9.js";import"./V-Placeload.b897843c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ca7aaffa.js";import"./useDropdown.c66a6279.js";import"./Companies.88697295.js";import"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7a5089bc.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.e6f3ce98.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e028b39.js";import"./V-Dropdown.0747f2f0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e9b51ce1.js";import"./activePanelState.a69051ae.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.10056650.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fa5e9da0.js";import"./V-Message.vue_vue&type=script&setup=true&lang.21ae8775.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c7a6a0a8.js";import"./navbarLayoutState.f7f62a15.js";import"./video.d77d6f43.js";import"./darkModeState.a5b4739a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.60378128.js";import"./AnimatedLogo.95c4db45.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.32fadef6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.25e2a244.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2ff8f9c8.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.66536429.js";const P={class:"d-flex mb-6 justify-content-between"},E=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),R=o("span",null,"New Staff",-1),A={class:"flex-list-wrapper flex-list-v2"},L=o("img",{class:"light-image",src:_,alt:""},null,-1),T=o("img",{class:"dark-image",src:b,alt:""},null,-1),C={id:"active-items-tab",class:"tab-content is-active"},I={class:"flex-table"},z=o("span",{class:"is-grow"},"Staff Name",-1),B=o("span",null,"Role",-1),D=o("span",null,"Phone",-1),M=o("span",null,"Email",-1),$=o("span",null,"Status",-1),F=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},J={class:"flex-table-cell","data-th":"Role"},O={class:"flex-table-cell","data-th":"Phone"},W={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},H={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),_=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.second_name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,b=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[v(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[E,R])),_:1})]),o("div",A,[o(b,{class:[0!==d(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[L,T])),_:1},8,["class"]),o("div",C,[o("div",I,[o("div",{class:["flex-table-header",[0===d(_).length&&"is-hidden"]]},[z,B,D,M,$,F],2),o("div",N,[o(f,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,h(d(_),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",q,j(e.name)+" "+j(e.second_name)+" "+j(e.last_name),1)])]),o("div",J,[o("ul",null,[(u(!0),p(g,null,h(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+j(e.role.description),1)])))),128))])]),o("div",O,[o("span",W,j(e.phone),1)]),o("div",G,[o("span",H,j(e.email),1)]),o("div",K,[o("span",Q,j(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;
