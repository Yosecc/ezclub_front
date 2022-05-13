import{_ as e}from"./V-Control.f5455229.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.676297a2.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.1a9fba1b.js";import{_ as i}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.719e3119.js";import{_ as n}from"./FileTileDropdown.ca71a919.js";import{d as t,r as l,b as o,h as d,o as c,i as r,k as m,j as u,G as g,D as p,aa as f,S as v,Y as h,Q as B,R as z,F as y}from"./vendor.0b0c2a98.js";import{_,a as b}from"./search-4-dark.fb3880a5.js";const M=[{id:1,icon:"/images/icons/files/pdf.svg",name:"Company UX Guide",updated:"2 days ago",size:"4.7 MB"},{id:2,icon:"/images/icons/files/sheet.svg",name:"Tech Summit Expenses",updated:"1 week ago",size:"34 KB"},{id:3,icon:"/images/icons/files/doc-2.svg",name:"Project Outline",updated:"2 weeks ago",size:"77 KB"},{id:4,icon:"/images/icons/files/ppt.svg",name:"UX Presentation",updated:"4 days ago",size:"2.3 MB"},{id:5,icon:"/images/icons/files/ai.svg",name:"Website Homepage Redesign",updated:"3 hours ago",size:"4.8 MB"},{id:6,icon:"/images/icons/files/doc-2.svg",name:"UX Ramp Up for Interns",updated:"6 hours ago",size:"1.8 MB"},{id:7,icon:"/images/icons/files/pdf.svg",name:"2020 Projects Digest",updated:"2 days ago",size:"8.9 MB"},{id:8,icon:"/images/icons/files/doc-2.svg",name:"Financial Report - 2020",updated:"2 months ago",size:"1.2 MB"},{id:9,icon:"/images/icons/files/sheet.svg",name:"2020 Supplier Expenses",updated:"2 weeks ago",size:"250 KB"},{id:10,icon:"/images/icons/files/ai.svg",name:"Website About Page Redesign",updated:"2 months ago",size:"3.9 MB"},{id:11,icon:"/images/icons/files/ai.svg",name:"Website Pricing Page Redesign",updated:"2 months ago",size:"2.6 MB"},{id:12,icon:"/images/icons/files/doc-2.svg",name:"Financial Report - 2019",updated:"8 months ago",size:"1.1 MB"},{id:13,icon:"/images/icons/files/sheet.svg",name:"2019 Supplier Expenses",updated:"8 months ago",size:"250 KB"},{id:14,icon:"/images/icons/files/ai.svg",name:"Website Contact Page Redesign",updated:"3 months ago",size:"5.8 MB"},{id:15,icon:"/images/icons/files/pdf.svg",name:"Company Brand Book",updated:"3 weeks ago",size:"5.3 MB"},{id:16,icon:"/images/icons/files/pdf.svg",name:"2019 Projects Digest",updated:"9 months ago",size:"4.7 MB"}],k={class:"tile-grid-toolbar"},P={class:"buttons"},j=m("span",{class:"icon"},[m("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),R=m("span",null,"Add File",-1),x={class:"tile-grid tile-grid-v2"},F=m("img",{class:"light-image",src:_,alt:""},null,-1),w=m("img",{class:"dark-image",src:b,alt:""},null,-1),U={class:"tile-grid-item"},V={class:"tile-grid-item-inner"},E={class:"meta"},S={class:"dark-inverted"},D=m("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1);var T=t({expose:[],setup(t){const _=l(""),b=o((()=>_.value?M.filter((e=>e.name.match(new RegExp(_.value,"i"))||e.size.match(new RegExp(_.value,"i")))):M)),T=l(0),W=["All Files","Recently Updated","My Files","Team Files","Deprecated"];return(t,l)=>{const o=e,M=d("Multiselect"),C=s,G=a,K=i,A=n;return c(),r("div",null,[m("div",k,[m(o,{icon:"feather:search"},{default:u((()=>[v(m("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>_.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[h,_.value]])])),_:1}),m("div",P,[m(C,{class:"h-hidden-mobile"},{default:u((()=>[m(o,null,{default:u((()=>[m(M,{modelValue:T.value,"onUpdate:modelValue":l[2]||(l[2]=e=>T.value=e),options:W,"max-height":145,placeholder:"Select an option"},null,8,["modelValue"])])),_:1})])),_:1}),m(G,{color:"primary",raised:""},{default:u((()=>[j,R])),_:1})])]),m("div",x,[g("List Empty Search Placeholder "),m(K,{class:[0!==p(b).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:u((()=>[F,w])),_:1},8,["class"]),g("Tile Grid v1"),m(f,{name:"list",tag:"div",class:"columns is-multiline"},{default:u((()=>[g("Grid item"),(c(!0),r(B,null,z(p(b),(e=>(c(),r("div",{key:e.id,class:"column is-4"},[m("div",U,[m("div",V,[m("img",{src:e.icon,alt:"",onErrorOnce:l[3]||(l[3]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),m("div",E,[m("span",S,y(e.name),1),m("span",null,[m("span",null,y(e.size),1),D,m("span",null,"Updated "+y(e.updated),1)])]),m(A)])])])))),128))])),_:1})])])}}});export{T as _};
