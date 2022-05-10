import{_ as e}from"./V-Control.d3cb8db2.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.86e7bf66.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.430bd846.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5a91b6d4.js";import{d as l,H as i,r,b as n,o as p,i as u,k as o,j as c,G as d,D as m,ab as v,S as f,Y as g,Q as b,R as h,F as y,O as j}from"./vendor.0a671356.js";import{_,a as x}from"./search-4-dark.fb3880a5.js";import{s as S,g as V}from"./Staffs.c386945a.js";import{b as w}from"./index.9c671a97.js";import{_ as P}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e259bc31.js";import{p as k}from"./sidebarLayoutState.0f6bbf54.js";import"./V-Placeload.e8ccb55e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2af384cd.js";import"./useDropdown.77607dc4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.5a3d9cb5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.4d1547e6.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.16a3568a.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d6a8ea7a.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5966f04d.js";import"./V-Dropdown.8f29eb52.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.45d94437.js";import"./Companies.c77a53e7.js";import"./activePanelState.ab4ec9b0.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d3f66c4b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.c0be394c.js";import"./V-Message.vue_vue&type=script&setup=true&lang.3ad842d5.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.a1bc703a.js";import"./navbarLayoutState.98178e29.js";import"./video.55233430.js";import"./darkModeState.add1dde1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.0988a64b.js";import"./AnimatedLogo.a868a349.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9a482478.js";import"./V-Block.vue_vue&type=script&setup=true&lang.343d5064.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9a71d015.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.9494640c.js";const R={class:"d-flex mb-6 justify-content-between"},T=o("span",{class:"icon"},[o("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),A=o("span",null,"New Staff",-1),E={class:"flex-list-wrapper flex-list-v2"},L=o("img",{class:"light-image",src:_,alt:""},null,-1),C=o("img",{class:"dark-image",src:x,alt:""},null,-1),D={id:"active-items-tab",class:"tab-content is-active"},I={class:"flex-table"},B=o("span",{class:"is-grow"},"Staff Name",-1),F=o("span",null,"Role",-1),M=o("span",null,"Phone",-1),U=o("span",null,"Email",-1),$=o("span",null,"Status",-1),z=o("span",{class:"cell-end"},"Actions",-1),N={class:"flex-list-inner"},W={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},G={class:"flex-table-cell","data-th":"Role"},H={class:"flex-table-cell","data-th":"Phone"},O={class:"light-text"},Q={class:"flex-table-cell","data-th":"Email"},Y={class:"light-text"},J={class:"flex-table-cell","data-th":"Status"},K={class:"tag is-rounded"},X={class:"flex-table-cell cell-end","data-th":"Actions"},Z=o("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var ee=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const j=r(""),_=n((()=>j.value?S.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(j.value,"i"))||e.second_name.match(new RegExp(j.value,"i"))||e.last_name.match(new RegExp(j.value,"i"))||e.phone.toString().match(new RegExp(j.value,"i"))||e.email.match(new RegExp(j.value,"i"))||t.match(new RegExp(j.value,"i"))})):S.value));return(l,i)=>{const r=e,n=t,x=a,S=s,V=t;return p(),u("div",null,[o("div",R,[o(r,{icon:"feather:search"},{default:c((()=>[f(o("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>j.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[g,j.value]])])),_:1}),o(n,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[T,A])),_:1})]),o("div",E,[d("List Empty Search Placeholder "),o(x,{class:[0!==m(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[L,C])),_:1},8,["class"]),d("Active Tab"),o("div",D,[o("div",I,[d("Table header"),o("div",{class:["flex-table-header",[0===m(_).length&&"is-hidden"]]},[B,d(" <span>Staff ID #</span> "),F,M,U,$,z],2),o("div",N,[o(v,{name:"list",tag:"div"},{default:c((()=>[d("Table item"),(p(!0),u(b,null,h(m(_),(e=>(p(),u("div",{key:e.id,class:"flex-table-item"},[o("div",W,[o(S,{picture:`${m(w)}storage/${e.photo}`},null,8,["picture"]),d(" <p>{{ API_URL+item.photo }}</p> "),o("div",null,[o("span",q,y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1)])]),d(' <div class="flex-table-cell" data-th="Customer">\n                  <span class="light-text">{{ item.id }}</span>\n                </div> '),o("div",G,[o("ul",null,[(p(!0),u(b,null,h(e.staff_roles,((e,t)=>(p(),u("li",{key:`staff-role-${t}`},[o("p",null,"- "+y(e.role.description),1)])))),128))])]),o("div",H,[o("span",O,y(e.phone),1)]),o("div",Q,[o("span",Y,y(e.email),1)]),o("div",J,[o("span",K,y(e.status?"Active":"Inactive"),1)]),o("div",X,[d(" <staffDropdown /> "),o(V,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Z])),_:2},1032,["to"])])])))),128))])),_:1})])]),d("Table Pagination"),d('  <V-FlexPagination\n          v-if="filteredData.length > 5"\n          :item-per-page="10"\n          :total-items="873"\n          :current-page="42"\n          :max-links-displayed="7"\n        /> ')])])])}}});const te={class:"page-content-inner"};var ae=l({expose:[],setup:e=>(k.value="Staff",j({title:"Stasff"}),i((()=>{V()})),(e,t)=>{const a=ee,s=P;return p(),u(s,null,{default:c((()=>[d(" Content Wrapper "),o("div",te,[o(a)])])),_:1})})});export default ae;
