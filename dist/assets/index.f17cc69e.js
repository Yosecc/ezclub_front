import{_ as e}from"./V-Placeload.410731c2.js";import{_ as s}from"./V-Control.4a6c84b4.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.94a80eab.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.9ccdab7a.js";import{d as r,o as i,i as p,k as l,D as o,F as u,G as n,j as c,a6 as m,r as d,b as v,aa as f,S as b,Y as h,Q as y,R as g,H as j}from"./vendor.1faf4f77.js";import{p as _,a as k,m as x}from"./Memberships.978d86c7.js";import{_ as V,a as P}from"./search-3-dark.822692f5.js";import{_ as S}from"./settingLayaout.vue_vue&type=script&setup=true&lang.f3239eb6.js";import"./index.6fffb7e6.js";import"./SidebarLayout.vue_vue&type=script&setup=true&lang.a24fd0ff.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3629d2a1.js";import"./useDropdown.105a6322.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e1ab07d1.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe437b85.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e3fe440b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.1500d9d7.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ac2f5202.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.42dfc6e9.js";import"./V-Card.vue_vue&type=script&setup=true&lang.bff7be9b.js";import"./V-Dropdown.1e9a7c40.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7e31a56.js";import"./Companies.6685ae15.js";import"./activePanelState.c2741883.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.305eeb86.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4486146.js";import"./V-Message.vue_vue&type=script&setup=true&lang.78c2be1a.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.9823548d.js";import"./navbarLayoutState.3917eb04.js";import"./sidebarLayoutState.8ddd6cce.js";import"./video.06d66946.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c3ec473d.js";import"./darkModeState.b1f0037d.js";import"./AnimatedLogo.a3e359ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9224d628.js";import"./V-Block.vue_vue&type=script&setup=true&lang.95c8f17c.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.c7cbfbbf.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.879bfb5b.js";const L={class:"d-flex justify-content-between"},M={class:"h-toggle"},w=m('<span class="toggler"><span class="active"><i aria-hidden="true" class="iconify" data-icon="feather:lock"></i></span><span class="inactive"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span></span>',1),A=l("div",{class:"cardBox mb-4"},[l("i",{class:"fas fa-dumbbell"})],-1),C={class:"mb-3"},B={class:"title is-4 mb-0"},T={class:"d-flex justify-content-end mt-5"},D=l("span",{class:"icon"},[l("i",{class:"fas fa-edit"})],-1),E=l("span",null,"Edit Membership",-1);var I=r({expose:[],props:{membership:{type:Object,default:{}}},setup:e=>(s,a)=>{const r=t;return i(),p("div",null,[l("div",L,[l("label",M,[l("input",{type:"checkbox",onChange:a[1]||(a[1]=s=>o(_)(e.membership)),checked:!e.membership.status},null,40,["checked"]),w])]),A,l("div",C,[l("h1",B,u(e.membership.name),1),n(" <p>{{ membership.description }}</p> ")]),n(' <div class="d-flex">\r\n      <VAvatar\r\n        v-tooltip="location.company_locations.name"\r\n        v-for="(location, key) in membership.locations"\r\n        :key="`membership_location-${key}`"\r\n        class="mr-3"\r\n        :picture="`${API_WEB_URL}storage/${location.company_locations.image}`"\r\n      />\r\n    </div> '),l("div",T,[l(r,{to:{name:"settings-memberships-edit",query:{id:e.membership.id}},raised:""},{default:c((()=>[D,E])),_:1},8,["to"])])])}});const U={class:"card-grid-toolbar"},$={class:"buttons"},z=l("span",{class:"icon"},[l("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),F=l("span",null,"New Membership",-1),R={class:"card-grid card-grid-v3"},W=l("img",{class:"light-image",src:V,alt:""},null,-1),q=l("img",{class:"dark-image",src:P,alt:""},null,-1);var G=r({expose:[],props:{memberships:{type:Array,default:[]}},setup(e){const r=e,u=d(""),m=v((()=>{if(!u.value)return r.memberships}));return(e,r)=>{const d=s,v=t,j=a,_=I;return i(),p("div",null,[l("div",U,[l(d,{icon:"feather:search"},{default:c((()=>[b(l("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>u.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[h,u.value]])])),_:1}),l("div",$,[l(v,{to:{name:"settings-memberships-create"},color:"primary",raised:""},{default:c((()=>[z,F])),_:1})])]),l("div",R,[n("List Empty Search Placeholder "),l(j,{class:[0!==o(m).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:c((()=>[W,q])),_:1},8,["class"]),n("  "),l(f,{name:"list",tag:"div",class:"columns is-multiline is-flex-tablet-p is-half-tablet-p"},{default:c((()=>[(i(!0),p(y,null,g(o(m),(e=>(i(),p("div",{key:e.id,class:"column is-4"},[l(_,{class:"card-grid-item",membership:e},null,8,["membership"])])))),128))])),_:1})])])}}}),H=r({expose:[],setup(s){const t=d(!1);return j((()=>{k().then((e=>{e.data.status&&(t.value=!0)}))})),(s,a)=>{const r=e,l=G,u=S;return i(),p(u,{title:"Memberships"},{default:c((()=>[t.value?n("v-if",!0):(i(),p(r,{key:0,height:"500px"})),t.value?(i(),p(l,{key:1,memberships:o(x)},null,8,["memberships"])):n("v-if",!0)])),_:1})}}});export default H;
