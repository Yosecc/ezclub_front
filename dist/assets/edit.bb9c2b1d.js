import{_ as e,a as t,b as s}from"./staffWaiver.vue_vue&type=style&index=0&scope=true&lang.be95db0f.js";import{_ as a}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a09b0b0e.js";import{d as p,z as r,A as i,r as u,o,h as n,K as c,j as v,k as m}from"./vendor.1ed36195.js";import{p as l}from"./sidebarLayoutState.18cc1e94.js";import{a as d,i as f,b as j,c as y}from"./Staffs.246264fc.js";import{s as g,a as b}from"./Mixin.0f379aaa.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.cc6b43e6.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f17c03d3.js";import"./V-Placeload.900d95a2.js";import"./V-Control.596e5582.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8c96819a.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.23a210d3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.091fe488.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.6ab49365.js";import"./formLayaut.vue_vue&type=style&index=0&lang.86bdaa84.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.ff4733db.js";import"./V-Card.vue_vue&type=script&setup=true&lang.aba09015.js";import"./pdf_icon.0444a540.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.4ba00991.js";import"./useDropdown.a0d0889f.js";import"./V-Dropdown.1574919e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6c749f0c.js";import"./index.4aa3d7b1.js";import"./activePanelState.f5c8fc6c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.19b980f4.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.489ae55b.js";import"./V-Message.vue_vue&type=script&setup=true&lang.34fe1a74.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.4e1235e8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2dd74ef2.js";import"./navbarLayoutState.9ea3a14f.js";import"./video.7495f6b6.js";import"./darkModeState.fe7b7276.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.85de3c19.js";import"./AnimatedLogo.04f6a731.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.887eae11.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ad7ba52b.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35dc0c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.633c50cf.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const _={class:"page-content-inner "},V={class:"columns is-multiline"},x={class:"column is-9"};var S=p({expose:[],setup(p){const S=c();return l.value="New Staff",r({title:"Staffs"}),i((()=>{d().then((e=>{g(f,"staff_roles_id",e.data.staff_roles)})),j(S.query.id).then((e=>{for(var t in e.data)b(y,t,e.data[t]),b(f,t,e.data[t])}))})),u(1),u([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]),(p,r)=>{const i=e,u=t,c=s,l=a;return o(),n(l,null,{default:v((()=>[m("div",_,[m("div",V,[m("div",x,[m(i,{type:"edit",buttons:["save"],step:1,class:"mb-3"}),m(u,{type:"edit",buttons:[],step:2,class:"mb-3"}),m(c,{type:"edit",buttons:[],step:3})])])])])),_:1})}}});export default S;