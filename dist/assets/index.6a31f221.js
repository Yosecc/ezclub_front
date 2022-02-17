import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.6ab49365.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.aba09015.js";import{_ as s}from"./V-Control.596e5582.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.1f8e2276.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a09b0b0e.js";import{d as i,z as l,A as u,r as o,b as c,o as p,h as n,K as m,j as d,k as v,N as g,O as f,F as j,S as y,B as _,a8 as b,J as h}from"./vendor.1ed36195.js";import{_ as V,a as x}from"./search-4-dark.fb3880a5.js";import{p as k}from"./sidebarLayoutState.18cc1e94.js";import{p as P}from"./index.577720aa.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.4ba00991.js";import"./useDropdown.a0d0889f.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f17c03d3.js";import"./V-Placeload.900d95a2.js";import"./V-Dropdown.1574919e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6c749f0c.js";import"./index.4aa3d7b1.js";import"./activePanelState.f5c8fc6c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.19b980f4.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.489ae55b.js";import"./V-Message.vue_vue&type=script&setup=true&lang.34fe1a74.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.4e1235e8.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2dd74ef2.js";import"./navbarLayoutState.9ea3a14f.js";import"./video.7495f6b6.js";import"./darkModeState.fe7b7276.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.85de3c19.js";import"./AnimatedLogo.04f6a731.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8c96819a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.887eae11.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ad7ba52b.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35dc0c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.633c50cf.js";const S={class:"page-content-inner columns is-multiline"},w={class:"column is-8"},L={class:"card-grid-toolbar"},z={class:"columns is-multiline w-100"},A=v("p",null,"Category Name",-1),C={class:"card-grid card-grid-v4"},E=v("img",{class:"light-image",src:V,alt:""},null,-1),T=v("img",{class:"dark-image",src:x,alt:""},null,-1),B={href:"#",class:"card-grid-item"},I={class:"card-grid-item-content"},M={class:"dark-inverted"},D={class:"card-grid-item-footer"},F={class:"meta"},N={class:"dark-inverted"},O={class:"column is-4 card_counte"},Q=v("p",null,"Pasos",-1),R=v("h3",{class:"title is-5 mb-2"},"Iam an S-Card",-1),U=v("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille ridens. ",-1);var q=i({expose:[],setup(i){k.value="Store",l({title:"Store"}),m(),u((()=>{}));const V=o(""),x=c((()=>V.value?P.filter((e=>e.title.match(new RegExp(V.value,"i"))||e.author.name.match(new RegExp(V.value,"i")))):P));return o(0),(i,l)=>{const u=e,o=t,c=s,m=a,k=e,P=r;return p(),n(P,null,{default:d((()=>[v("div",S,[v("div",w,[v("div",L,[v("div",z,[(p(),n(g,null,f(5,((e,t)=>v(o,{radius:"small",class:"column is-2 d-flex flex-column align-items-center justify-content-center text-center cursor-pointer"},{default:d((()=>[v(u,{size:"medium",picture:`https://picsum.photos/20${e}/300`},null,8,["picture"]),A])),_:2},1024))),64))]),v(c,{icon:"feather:search"},{default:d((()=>[j(v("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[y,V.value]])])),_:1})]),v("div",C,[v(m,{class:[0!==_(x).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n              search terms you've entered. Please try different search terms or\r\n              criteria.",larger:""},{image:d((()=>[E,T])),_:1},8,["class"]),v(b,{name:"list",tag:"div",class:"columns is-multiline"},{default:d((()=>[(p(!0),n(g,null,f(_(x),(e=>(p(),n("div",{key:e.id,class:"column is-3"},[v("a",B,[v("img",{src:e.image,alt:"",onErrorOnce:l[2]||(l[2]=e=>e.target.src="https://via.placeholder.com/400x300")},null,40,["src"]),v("div",I,[v("h3",M,h(e.title),1)]),v("div",D,[v(k,{picture:e.author.avatar,size:"small"},null,8,["picture"]),v("div",F,[v("span",N,h(e.author.name),1),v("span",null,h(e.published),1)])])])])))),128))])),_:1})])]),v("div",O,[v("div",null,[v(o,{class:"mb-4",radius:"small"},{default:d((()=>[Q])),_:1}),v(o,{radius:"small"},{default:d((()=>[R,U])),_:1})])])])])),_:1})}}});export default q;