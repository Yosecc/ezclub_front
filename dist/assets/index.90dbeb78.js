import{_ as e}from"./MembersListV2.vue_vue&type=style&index=0&lang.d9d37baf.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a09b0b0e.js";import{d as s,A as a,w as r,z as p,r as u,b as o,o as i,h as n,j as m,k as c,B as l}from"./vendor.1ed36195.js";import{p as v}from"./sidebarLayoutState.18cc1e94.js";import{g as d,a as j}from"./Companies.6ff8f22e.js";import{A as f}from"./index.4aa3d7b1.js";import"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.1f8e2276.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.6ab49365.js";import"./V-IconButton.vue_vue&type=script&setup=true&lang.d3174e27.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.489ae55b.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f17c03d3.js";import"./V-Placeload.900d95a2.js";import"./V-Card.vue_vue&type=script&setup=true&lang.aba09015.js";import"./moment.08a7f518.js";import"./search-4-dark.fb3880a5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.4ba00991.js";import"./useDropdown.a0d0889f.js";import"./V-Dropdown.1574919e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6c749f0c.js";import"./activePanelState.f5c8fc6c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.19b980f4.js";import"./V-Message.vue_vue&type=script&setup=true&lang.34fe1a74.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.4e1235e8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2dd74ef2.js";import"./navbarLayoutState.9ea3a14f.js";import"./video.7495f6b6.js";import"./darkModeState.fe7b7276.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.85de3c19.js";import"./AnimatedLogo.04f6a731.js";import"./V-Control.596e5582.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8c96819a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.887eae11.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ad7ba52b.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35dc0c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.633c50cf.js";const y={class:"page-content-inner"};var g=s({expose:[],setup(s){a((()=>{d(),b()})),r(j,(()=>{v.value=j.value})),p({title:"Home"});const g=u([]),b=async(e,t="",s=null)=>{await f.get("accessday",{params:{page:s}}).then((e=>{g.value=e.data.members.data})).catch((e=>{console.log(e)}))},_=o((()=>{let e=[];return g.value.forEach((t=>{e.push(t.member)})),e}));return(s,a)=>{const r=e,p=t;return i(),n(p,null,{default:m((()=>[c("div",y,[c(r,{members:l(_)},null,8,["members"])])])),_:1})}}});export default g;