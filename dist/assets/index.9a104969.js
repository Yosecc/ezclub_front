import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.1fe405fc.js";import{_ as t}from"./V-IconWrap.vue_vue&type=style&index=0&lang.b7df7ba5.js";import{b as s}from"./index.8f8c2b3e.js";import{d as a,r as n,o as i,h as o,k as r,E as l,G as p,R as u,S as c,K as m,i as d,j as v}from"./vendor.853b0a2b.js";import{_ as b}from"./settingLayaout.vue_vue&type=script&setup=true&lang.fa4b67b8.js";import{c as g}from"./Companies.454fa4b6.js";import"./SidebarLayout.vue_vue&type=script&setup=true&lang.47545b30.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2625c997.js";import"./useDropdown.9fd8f548.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import"./V-Button.vue_vue&type=script&setup=true&lang.3174687b.js";import"./V-Placeload.54ed2d56.js";import"./V-Control.bab08fd1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.57862c84.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a423434c.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f868e188.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3d4964e7.js";import"./V-Card.vue_vue&type=script&setup=true&lang.13431cdb.js";import"./V-Dropdown.20b61679.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cddd26f6.js";import"./activePanelState.9b514b5d.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.eb4f08be.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import"./video.5be088fe.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.624ff565.js";import"./darkModeState.6f39e39b.js";import"./AnimatedLogo.e7829b2f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.36c68532.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ee7d7200.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5ca17476.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.68347789.js";const y={key:0,class:"profile-wrapper"},f={class:"profile-header has-text-centered"},j={class:"title is-4 is-narrow"},_=r("p",{class:"light-text"}," This are the main setting for your system, please select an option and work accordantly ",-1),h={class:"profile-body"},x={class:"settings-section"},V=r("div",{class:"edit-icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1);var k=a({expose:[],props:{company:{type:[Object,Array],default:null}},setup(a){const b=n([{name:"Memberships",subname:"Manage memberships",toName:"settings-memberships",icon:"lnil lnil-gift-alt-1"},{name:"Products",subname:"Manage products",toName:"settings-products",icon:"lnil lnil-package"},{name:"Inventory",subname:"Inventory products",toName:"settings-inventory",icon:"lnir lnir-tablet-alt"},{name:"Staff",subname:"Manage Team",toName:"settings-staff",icon:"lnil lnil-users"},{name:"Discounts",subname:"Manage discounts",toName:"settings-discounts",icon:"lnil lnil-customer"},{name:"Reports",subname:"Create reports",toName:"settings-reports",icon:"lnil lnil-stats-up"},{name:"Schedule",subname:"Create schedule",toName:"settings-schedule",icon:"lnil lnil-calender-alt-3"},{name:"Permissions",subname:"Manage permissions",toName:"settings-permissions",icon:"lnil lnil-block-user"},{name:"Club Profile",subname:"Manage club information",toName:"settings-clubinformation",icon:"lnil lnil-apartment"},{name:"Disciplines",subname:"Manage disciplines",toName:"settings-disciplines",icon:"lnil lnil-bi-cycle"}]);return(n,g)=>{const k=e,N=t,M=d("router-link");return a.company?(i(),o("div",y,[r("div",f,[r(k,{size:"xl",picture:`${l(s)}storage/${a.company.logo}`},null,8,["picture"]),r("h3",j,p(a.company.company_name),1),_]),r("div",h,[r("div",x,[(i(!0),o(u,null,c(b.value,((e,t)=>(i(),o(M,{to:{name:e.toName},key:`item-${t}`,class:"settings-box"},{default:v((()=>[V,r(N,{icon:e.icon},null,8,["icon"]),r("span",null,p(e.name),1),r("h3",null,p(e.subname),1)])),_:2},1032,["to"])))),128))])])])):m("",!0)}}}),N=a({expose:[],setup:e=>(e,t)=>{const s=k,a=b;return i(),o(a,null,{default:v((()=>[r(s,{company:l(g)},null,8,["company"])])),_:1})}});export default N;