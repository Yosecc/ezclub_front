import{_ as e}from"./V-Control.3e38bffa.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.d47cc176.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import{d as l,o as i,r,b as n,h as u,i as p,l as o,k as c,F as d,ab as f,W as v,_ as m,R as g,S as h,H as b,O as y}from"./vendor.7d5213a2.js";import{_ as j,a as _}from"./search-4-dark.12f0bf0d.js";import{s as x,a as S}from"./Staffs.321229a5.js";import{b as V}from"./index.33070b22.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.815aa716.js";import{p as k}from"./sidebarLayoutState.9426e5be.js";import"./V-Placeload.d3fba449.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.97414b4a.js";import"./useDropdown.d4a254e8.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d6ccab4.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fa42be40.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.a80fc4a1.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a8dad8dd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import"./V-Dropdown.9baccf1a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ba1cd7fa.js";import"./Companies.19eed36d.js";import"./activePanelState.4e56e973.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ae744ca1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5baca42f.js";import"./video.fb469c9d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.ae0cfa5f.js";import"./darkModeState.6047be35.js";import"./AnimatedLogo.1618784f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.4761d136.js";import"./userPopovers.f4b9fc60.js";const P={class:"d-flex mb-6 justify-content-between"},R=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=o("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},C=o("img",{class:"light-image",src:j,alt:""},null,-1),L=o("img",{class:"dark-image",src:_,alt:""},null,-1),I={id:"active-items-tab",class:"tab-content is-active"},T={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),$=o("span",null,"Role",-1),z=o("span",null,"Phone",-1),D=o("span",null,"Email",-1),F=o("span",null,"Status",-1),M=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},U={class:"flex-table-cell is-media is-grow"},W={class:"item-name dark-inverted"},q={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},G={class:"flex-table-cell","data-th":"Email"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Status"},Q={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Y=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var Z=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const y=r(""),j=n((()=>y.value?x.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(y.value,"i"))||e.last_name.match(new RegExp(y.value,"i"))||e.phone.toString().match(new RegExp(y.value,"i"))||e.email.match(new RegExp(y.value,"i"))||t.match(new RegExp(y.value,"i"))})):x.value));return(l,i)=>{const r=e,n=t,_=a,x=s,S=t;return u(),p("div",null,[o("div",P,[o(r,{icon:"feather:search"},{default:c((()=>[v(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[m,y.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[R,A])),_:1})]),o("div",E,[o(_,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,L])),_:1},8,["class"]),o("div",I,[o("div",T,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[B,$,z,D,F,M],2),o("div",N,[o(f,{name:"list",tag:"div"},{default:c((()=>[(u(!0),p(g,null,h(d(j),(e=>(u(),p("div",{key:e.id,class:"flex-table-item"},[o("div",U,[o(x,{picture:`${d(V)}storage/${e.photo}`},null,8,["picture"]),o("div",null,[o("span",W,b(e.name)+" "+b(e.second_name)+" "+b(e.last_name),1)])]),o("div",q,[o("ul",null,[(u(!0),p(g,null,h(e.staff_roles,((e,t)=>(u(),p("li",{key:`staff-role-${t}`},[o("p",null,"- "+b(e.role.description),1)])))),128))])]),o("div",H,[o("span",O,b(e.phone),1)]),o("div",G,[o("span",J,b(e.email),1)]),o("div",K,[o("span",Q,b(e.status?"Active":"Inactive"),1)]),o("div",X,[o(S,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Y])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])}}});const ee={class:"page-content-inner"};var te=l({expose:[],setup:e=>(k.value="Staff",y({title:"Stasff"}),i((()=>{S()})),(e,t)=>{const a=Z,s=w;return u(),p(s,null,{default:c((()=>[o("div",ee,[o(a)])])),_:1})})});export default te;
