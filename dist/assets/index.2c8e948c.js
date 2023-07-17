import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as t}from"./V-IconWrap.vue_vue&type=style&index=0&lang.d8a62e5f.js";import{b as s}from"./index.7c7f3752.js";import{d as a,r as n,h as i,i as o,l as r,F as l,H as p,R as u,S as c,K as m,j as d,k as v}from"./vendor.4454b83d.js";import{_ as y}from"./settingLayaout.vue_vue&type=script&setup=true&lang.ffbbf301.js";import{c as g}from"./Companies.4f750920.js";import"./SidebarLayout.vue_vue&type=script&setup=true&lang.278da3b9.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.65345061.js";import"./useDropdown.659338b4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import"./V-Placeload.28979271.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.66d5e66f.js";const f={key:0,class:"profile-wrapper"},b={class:"profile-header has-text-centered"},j={class:"title is-4 is-narrow"},_=r("p",{class:"light-text"}," This are the main setting for your system, please select an option and work accordantly ",-1),h={class:"profile-body"},x={class:"settings-section"},V=r("div",{class:"edit-icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1);var k=a({expose:[],props:{company:{type:[Object,Array],default:null}},setup(a){const y=n([{name:"Memberships",subname:"Manage memberships",toName:"settings-memberships",icon:"lnil lnil-gift-alt-1"},{name:"Products",subname:"Manage products",toName:"settings-products",icon:"lnil lnil-package"},{name:"Inventory",subname:"Inventory products",toName:"settings-inventory",icon:"lnir lnir-tablet-alt"},{name:"Staff",subname:"Manage Team",toName:"settings-staff",icon:"lnil lnil-users"},{name:"Discounts",subname:"Manage discounts",toName:"settings-discounts",icon:"lnil lnil-customer"},{name:"Reports",subname:"Create reports",toName:"subscriptions-reportsv2",icon:"lnil lnil-stats-up"},{name:"Schedule",subname:"Create schedule",toName:"settings-schedule",icon:"lnil lnil-calender-alt-3"},{name:"Permissions",subname:"Manage permissions",toName:"settings-permissions",icon:"lnil lnil-block-user"},{name:"Club Profile",subname:"Manage club information",toName:"settings-clubinformation",icon:"lnil lnil-apartment"},{name:"Disciplines",subname:"Manage disciplines",toName:"settings-disciplines",icon:"lnil lnil-bi-cycle"}]);return(n,g)=>{const k=e,N=t,M=d("router-link");return a.company?(i(),o("div",f,[r("div",b,[r(k,{size:"xl",picture:`${l(s)}storage/${a.company.logo}`},null,8,["picture"]),r("h3",j,p(a.company.company_name),1),_]),r("div",h,[r("div",x,[(i(!0),o(u,null,c(y.value,((e,t)=>(i(),o(M,{to:{name:e.toName},key:`item-${t}`,class:"settings-box"},{default:v((()=>[V,r(N,{icon:e.icon},null,8,["icon"]),r("span",null,p(e.name),1),r("h3",null,p(e.subname),1)])),_:2},1032,["to"])))),128))])])])):m("",!0)}}}),N=a({expose:[],setup:e=>(e,t)=>{const s=k,a=y;return i(),o(a,null,{default:v((()=>[r(s,{company:l(g)},null,8,["company"])])),_:1})}});export default N;
