import{_ as e}from"./V-Control.b8a16a92.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.3f0a1890.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import{d as l,o as i,r as n,b as r,i as p,j as o,l as u,k as c,I as d,F as m,ae as v,W as f,_ as g,S as h,U as b,H as y,P as j}from"./vendor.84e48f7c.js";import{_,a as x}from"./search-4-dark.12f0bf0d.js";import{s as S,a as P}from"./Staffs.01f7ac3b.js";import{b as V}from"./index.8a348250.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.0baad8e9.js";import{p as k}from"./sidebarLayoutState.bceb862d.js";import"./V-Placeload.8fe4e440.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5739c56d.js";import"./useDropdown.3858e0aa.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./Companies.08f8191d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const A={class:"d-flex mb-6 justify-content-between"},E=u("span",{class:"icon"},[u("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),R=u("span",null,"New Staff",-1),T={class:"flex-list-wrapper flex-list-v2"},C=u("img",{class:"light-image",src:_,alt:""},null,-1),I=u("img",{class:"dark-image",src:x,alt:""},null,-1),L={id:"active-items-tab",class:"tab-content is-active"},D={class:"flex-table"},U=u("span",{class:"is-grow"},"Staff Name",-1),B=u("span",null,"Role",-1),F=u("span",null,"Phone",-1),W=u("span",null,"Email",-1),$=u("span",null,"Status",-1),z=u("span",{class:"cell-end"},"Actions",-1),M={class:"flex-list-inner"},N={class:"flex-table-cell is-media is-grow"},q={class:"item-name dark-inverted"},H={class:"flex-table-cell","data-th":"Role"},G={class:"flex-table-cell","data-th":"Phone"},J={class:"light-text"},K={class:"flex-table-cell","data-th":"Email"},O={class:"light-text"},Q={class:"flex-table-cell","data-th":"Status"},X={class:"tag is-rounded"},Y={class:"flex-table-cell cell-end","data-th":"Actions"},Z=u("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1);var ee=l({expose:[],props:{activeTab:{type:String,default:"active"}},setup(l){i((()=>{}));const j=n(""),_=r((()=>j.value?S.value.filter((e=>{let t=1==e.status?"Active":"Inactive";return e.name.match(new RegExp(j.value,"i"))||e.last_name.match(new RegExp(j.value,"i"))||e.phone.toString().match(new RegExp(j.value,"i"))||e.email.match(new RegExp(j.value,"i"))||t.match(new RegExp(j.value,"i"))})):S.value));return(l,i)=>{const n=e,r=t,x=a,S=s,P=t;return p(),o("div",null,[u("div",A,[u(n,{icon:"feather:search"},{default:c((()=>[f(u("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>j.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[g,j.value]])])),_:1}),u(r,{to:{name:"settings-staff-create"},color:"primary",raised:""},{default:c((()=>[E,R])),_:1})]),u("div",T,[d("List Empty Search Placeholder "),u(x,{class:[0!==m(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:c((()=>[C,I])),_:1},8,["class"]),d("Active Tab"),u("div",L,[u("div",D,[d("Table header"),u("div",{class:["flex-table-header",[0===m(_).length&&"is-hidden"]]},[U,d(" <span>Staff ID #</span> "),B,F,W,$,z],2),u("div",M,[u(v,{name:"list",tag:"div"},{default:c((()=>[d("Table item"),(p(!0),o(h,null,b(m(_),(e=>(p(),o("div",{key:e.id,class:"flex-table-item"},[u("div",N,[u(S,{picture:`${m(V)}storage/${e.photo}`},null,8,["picture"]),d(" <p>{{ API_URL+item.photo }}</p> "),u("div",null,[u("span",q,y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1)])]),d(' <div class="flex-table-cell" data-th="Customer">\n                  <span class="light-text">{{ item.id }}</span>\n                </div> '),u("div",H,[u("ul",null,[(p(!0),o(h,null,b(e.staff_roles,((e,t)=>(p(),o("li",{key:`staff-role-${t}`},[u("p",null,"- "+y(e.role.description),1)])))),128))])]),u("div",G,[u("span",J,y(e.phone),1)]),u("div",K,[u("span",O,y(e.email),1)]),u("div",Q,[u("span",X,y(e.status?"Active":"Inactive"),1)]),u("div",Y,[d(" <staffDropdown /> "),u(P,{to:{name:"settings-staff-edit",query:{id:e.id}},color:"warning"},{default:c((()=>[Z])),_:2},1032,["to"])])])))),128))])),_:1})])]),d("Table Pagination"),d('  <V-FlexPagination\n          v-if="filteredData.length > 5"\n          :item-per-page="10"\n          :total-items="873"\n          :current-page="42"\n          :max-links-displayed="7"\n        /> ')])])])}}});const te={class:"page-content-inner"};var ae=l({expose:[],setup:e=>(k.value="Staff",j({title:"Stasff"}),i((()=>{P()})),(e,t)=>{const a=ee,s=w;return p(),o(s,null,{default:c((()=>[d(" Content Wrapper "),u("div",te,[u(a)])])),_:1})})});export default ae;
