import{_ as e}from"./AnimatedLogo.030703f2.js";import{d as a,e as s,_ as t,a as i,b as l,c as n}from"./ActivityPanel.vue_vue&type=style&index=0&lang.fae29c22.js";import{b as r,c as o,d as c,e as u,_ as d,a as p}from"./TaskPanel.vue_vue&type=style&index=0&lang.e4d5431d.js";import{_ as v}from"./Toolbar.vue_vue&type=script&setup=true&lang.528c3bdc.js";import{_ as m}from"./LayoutSwitcher.vue_vue&type=script&setup=true&lang.d3ebf2e3.js";import{_ as f}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.b81553ca.js";import{_ as h}from"./V-IconButton.vue_vue&type=script&setup=true&lang.21c89a71.js";import{_ as b}from"./V-Dropdown.3004e9ea.js";import{_ as y}from"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import{d as g,O as j,aj as _,b as k,i as w,j as x,l as V,I as S,L as C,F as T,D as P,E as M,r as $,w as L,h as A,T as D,H as I,W as R,_ as z,S as B,U as E,af as F}from"./vendor.435948fe.js";import{p as H}from"./userPopovers.f4b9fc60.js";import{p as N}from"./navbarLayoutState.d0f074c2.js";import"./useDropdown.9dc4bfe3.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import"./index.45f98682.js";import"./Companies.6af0e74d.js";import"./activePanelState.66f70896.js";import"./fastpizza.1e58d0ec.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a5b69815.js";import"./video.413cf4d2.js";import"./darkModeState.010a41bc.js";import"./V-Message.vue_vue&type=script&setup=true&lang.552bfc6f.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c21d7702.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./sidebarLayoutState.c7ec3620.js";const J={class:"navbar-navbar-inner"},O={class:"left"},U=V("h1",{class:"title is-6"},"Page Title",-1),W={class:"center"},q={class:"right"},G={key:0,class:"left"},K={class:"welcome-text"},Q=V("div",{class:"buttons"},[V("a",{href:"/",class:"button"},"Homepage")],-1),X={class:"right"};var Y=g({expose:[],props:{theme:{type:String,default:"default"}},setup(e){const a=e;j();const{y:s}=_(),t=k((()=>s.value>30));return(e,s)=>(w(),x("div",{class:["navbar-navbar-clean",[T(t)&&"is-scrolled","fade"===a.theme&&"is-transparent"]]},[V("div",J,[S(" Title slot "),V("div",O,[C(e.$slots,"title",{},(()=>[U]))]),V("div",W,[C(e.$slots,"search")]),V("div",q,[S(" Toolbar slot "),C(e.$slots,"toolbar")])]),V("div",{class:["navbar-navbar-lower",["default"===a.theme&&"is-between","center"===a.theme&&"is-centered","fade"===a.theme&&"is-centered"]]},["default"!==a.theme?(w(),x("div",G,[V("div",K,[C(e.$slots,"subtitle")])])):S("v-if",!0),V("div",{class:["default"===a.theme&&"left","center"===a.theme&&"center","fade"===a.theme&&"center"]},[C(e.$slots,"links",{},(()=>[Q]))],2),V("div",X,[C(e.$slots,"toolbar-bottom")])],2)],2))}});const Z=F();P("data-v-12c68b21");const ee={class:"navbar-layout navbar-layout-search"},ae=V("div",{class:"app-overlay"},null,-1),se={class:"brand-end"},te=V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),ie=V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:grid"},null,-1),le=V("a",null,[V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:box"})],-1),ne=V("a",null,[V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:cpu"})],-1),re=V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:message-circle"},null,-1),oe=V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"},null,-1),ce=V("li",null,[V("a",{href:"#"},[V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"})])],-1),ue=V("div",{class:"separator"},null,-1),de={class:"title is-6"},pe=V("span",null,"February 22, 2021",-1),ve=V("a",{href:"#",class:"dropdown-item is-media"},[V("div",{class:"icon"},[V("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"})]),V("div",{class:"meta"},[V("span",null,"New Dashboard"),V("span",null,"Add a new dashboard")])],-1),me=V("a",{href:"#",class:"dropdown-item is-media"},[V("div",{class:"icon"},[V("i",{"aria-hidden":"true",class:"lnil lnil-users-alt"})]),V("div",{class:"meta"},[V("span",null,"Invite"),V("span",null,"Invite new members")])],-1),fe=V("a",{href:"#",class:"dropdown-item is-media"},[V("div",{class:"icon"},[V("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})]),V("div",{class:"meta"},[V("span",null,"New Project"),V("span",null,"Add a new project")])],-1),he=V("hr",{class:"dropdown-divider"},null,-1),be=V("a",{href:"#",class:"dropdown-item is-media"},[V("div",{class:"icon"},[V("i",{"aria-hidden":"true",class:"lnil lnil-cog"})]),V("div",{class:"meta"},[V("span",null,"Settings"),V("span",null,"Manage team settings")])],-1),ye={class:"centered-search"},ge={class:"field"},je={class:"control has-icon"},_e=V("div",{class:"form-icon"},[V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})],-1),ke=V("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),we={key:1,class:"search-results has-slimscroll is-active"},xe={class:"meta"},Ve=V("div",{class:"buttons"},[V("a",{class:"button"},"Dashboard"),V("a",{class:"button"},"Projects"),V("a",{class:"button"},"Team"),V("a",{class:"button"},"Reports"),V("a",{class:"button"},"Settings")],-1),Se={class:"view-wrapper has-top-nav"},Ce={class:"page-content-wrapper"},Te={key:1,class:"page-content is-relative"},Pe={class:"is-navbar-lg"},Me={class:"page-title has-text-centered"},$e={class:"title-wrap"},Le={class:"title is-4"};M();var Ae=g({expose:[],props:{theme:{type:String,default:"default"},nowrap:{type:Boolean,default:!1}},setup(g){const _=g,P=$(!1),M=$("dashboard"),F=j(),J=$(""),O=k((()=>J.value?Object.values(H).filter((e=>e.fullName.match(new RegExp(J.value,"i"))||e.position.match(new RegExp(J.value,"i")))):[])),U=[{id:5,picture:"/demo/avatars/12.jpg",initials:"JS",color:"info"},{id:22,picture:"",initials:"JH",color:"info"},{id:40,picture:"/demo/avatars/40.jpg",initials:"SM",color:"h-purple"}];return L((()=>F.fullPath),(()=>{P.value=!1})),(g,j)=>{const k=e,$=A("RouterLink"),L=a,F=s,H=t,W=i,q=r,G=o,K=c,Q=u,X=d,Ae=v,De=m,Ie=f,Re=h,ze=b,Be=y,Ee=Y,Fe=l,He=n,Ne=p;return w(),x("div",ee,[ae,S(" Mobile navigation "),V(H,{"is-open":P.value,onToggle:j[1]||(j[1]=e=>P.value=!P.value)},{brand:Z((()=>[V($,{to:{name:"index"},class:"navbar-item is-brand"},{default:Z((()=>[V(k,{width:"38px",height:"38px"})])),_:1}),V("div",se,[V(L),V(F)])])),_:1},8,["is-open"]),S(" Mobile sidebar links "),V(W,{"is-open":P.value,onToggle:j[7]||(j[7]=e=>P.value=!P.value)},{links:Z((()=>[V("li",null,[V("a",{class:["dashboard"===M.value&&"is-active"],onClick:j[2]||(j[2]=e=>M.value="dashboard")},[te],2)]),V("li",null,[V("a",{class:["layout"===M.value&&"is-active"],onClick:j[3]||(j[3]=e=>M.value="layout")},[ie],2)]),V("li",{class:["elements"===M.value&&"is-active"],onClick:j[4]||(j[4]=e=>M.value="elements")},[le],2),V("li",{class:["components"===M.value&&"is-active"],onClick:j[5]||(j[5]=e=>M.value="components")},[ne],2),V("li",null,[V($,{to:{name:"messaging-v1"}},{default:Z((()=>[re])),_:1})])])),"bottom-links":Z((()=>[V("li",null,[V("a",{onClick:j[6]||(j[6]=e=>g.activePanel="search")},[oe])]),ce])),_:1},8,["is-open"]),S(" Mobile subsidebar links "),V(D,{name:"slide-x"},{default:Z((()=>[P.value&&"layout"===M.value?(w(),x(q,{key:0})):P.value&&"dashboard"===M.value?(w(),x(G,{key:1})):P.value&&"components"===M.value?(w(),x(K,{key:2})):P.value&&"elements"===M.value?(w(),x(Q,{key:3})):S("v-if",!0)])),_:1}),S(" Desktop navigation "),V(Ee,{theme:_.theme},{title:Z((()=>[V($,{to:{name:"index"},class:"brand"},{default:Z((()=>[V(k,{width:"38px",height:"38px"})])),_:1}),ue,V(X),V("h1",de,I(T(N)),1)])),subtitle:Z((()=>[pe])),toolbar:Z((()=>[V(Ae,{class:"desktop-toolbar"}),V(De),V(F)])),"toolbar-bottom":Z((()=>[V(Ie,{avatars:U,limit:3,size:"small"}),V(ze,{spaced:"",right:""},{button:Z((({open:e})=>[V(Re,{icon:"feather:plus",circle:"",onClick:e},null,8,["onClick"])])),content:Z((()=>[ve,me,fe,he,be])),_:1})])),search:Z((()=>[V("div",ye,[V("div",ge,[V("div",je,[R(V("input",{"onUpdate:modelValue":j[8]||(j[8]=e=>J.value=e),type:"text",class:"input search-input",placeholder:"Search records..."},null,512),[[z,J.value]]),_e,J.value?(w(),x("div",{key:0,class:"form-icon is-right",onClick:j[9]||(j[9]=e=>J.value="")},[ke])):S("v-if",!0),T(O).length>0?(w(),x("div",we,[(w(!0),x(B,null,E(T(O),(e=>(w(),x("div",{key:e.id,class:"search-result"},[V(Be,{picture:e.avatar,initials:e.initials,color:e.color},null,8,["picture","initials","color"]),V("div",xe,[V("span",null,I(e.username),1),V("span",null,I(e.position),1)])])))),128))])):S("v-if",!0)])])])])),links:Z((()=>[Ve])),_:1},8,["theme"]),V(Fe),V(He),V(Ne),V("div",Se,[V("div",Ce,[_.nowrap?C(g.$slots,"default",{key:0},void 0,!0):(w(),x("div",Te,[V("div",Pe,[V("div",Me,[S(" Mobile Page Title "),V("div",$e,[V("h1",Le,I(T(N)),1)]),V(Ae,{class:"mobile-toolbar"})]),C(g.$slots,"default",{},void 0,!0)])]))])])])}}});Ae.__scopeId="data-v-12c68b21";export default Ae;
