import{_ as e}from"./V-Control.f3c0402c.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.e662762e.js";import{_ as n}from"./FileTileDropdown.756866de.js";import{d as t,r as l,b as o,o as d,h as c,k as r,j as m,D as u,aa as g,i as p,S as f,Y as v,Q as h,R as B,F as z}from"./vendor.7d033f41.js";import{_ as y,a as _}from"./search-4-dark.12f0bf0d.js";const b=[{id:1,icon:"/images/icons/files/pdf.svg",name:"Company UX Guide",updated:"2 days ago",size:"4.7 MB"},{id:2,icon:"/images/icons/files/sheet.svg",name:"Tech Summit Expenses",updated:"1 week ago",size:"34 KB"},{id:3,icon:"/images/icons/files/doc-2.svg",name:"Project Outline",updated:"2 weeks ago",size:"77 KB"},{id:4,icon:"/images/icons/files/ppt.svg",name:"UX Presentation",updated:"4 days ago",size:"2.3 MB"},{id:5,icon:"/images/icons/files/ai.svg",name:"Website Homepage Redesign",updated:"3 hours ago",size:"4.8 MB"},{id:6,icon:"/images/icons/files/doc-2.svg",name:"UX Ramp Up for Interns",updated:"6 hours ago",size:"1.8 MB"},{id:7,icon:"/images/icons/files/pdf.svg",name:"2020 Projects Digest",updated:"2 days ago",size:"8.9 MB"},{id:8,icon:"/images/icons/files/doc-2.svg",name:"Financial Report - 2020",updated:"2 months ago",size:"1.2 MB"},{id:9,icon:"/images/icons/files/sheet.svg",name:"2020 Supplier Expenses",updated:"2 weeks ago",size:"250 KB"},{id:10,icon:"/images/icons/files/ai.svg",name:"Website About Page Redesign",updated:"2 months ago",size:"3.9 MB"},{id:11,icon:"/images/icons/files/ai.svg",name:"Website Pricing Page Redesign",updated:"2 months ago",size:"2.6 MB"},{id:12,icon:"/images/icons/files/doc-2.svg",name:"Financial Report - 2019",updated:"8 months ago",size:"1.1 MB"},{id:13,icon:"/images/icons/files/sheet.svg",name:"2019 Supplier Expenses",updated:"8 months ago",size:"250 KB"},{id:14,icon:"/images/icons/files/ai.svg",name:"Website Contact Page Redesign",updated:"3 months ago",size:"5.8 MB"},{id:15,icon:"/images/icons/files/pdf.svg",name:"Company Brand Book",updated:"3 weeks ago",size:"5.3 MB"},{id:16,icon:"/images/icons/files/pdf.svg",name:"2019 Projects Digest",updated:"9 months ago",size:"4.7 MB"}],M={class:"tile-grid-toolbar"},k={class:"buttons"},j=r("span",{class:"icon"},[r("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),P=r("span",null,"Add File",-1),R={class:"tile-grid tile-grid-v2"},x=r("img",{class:"light-image",src:y,alt:""},null,-1),F=r("img",{class:"dark-image",src:_,alt:""},null,-1),w={class:"tile-grid-item"},U={class:"tile-grid-item-inner"},V={class:"meta"},E={class:"dark-inverted"},S=r("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1);var D=t({expose:[],setup(t){const y=l(""),_=o((()=>y.value?b.filter((e=>e.name.match(new RegExp(y.value,"i"))||e.size.match(new RegExp(y.value,"i")))):b)),D=l(0),W=["All Files","Recently Updated","My Files","Team Files","Deprecated"];return(t,l)=>{const o=e,b=p("Multiselect"),C=s,K=i,T=a,A=n;return d(),c("div",null,[r("div",M,[r(o,{icon:"feather:search"},{default:m((()=>[f(r("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[v,y.value]])])),_:1}),r("div",k,[r(C,{class:"h-hidden-mobile"},{default:m((()=>[r(o,null,{default:m((()=>[r(b,{modelValue:D.value,"onUpdate:modelValue":l[2]||(l[2]=e=>D.value=e),options:W,"max-height":145,placeholder:"Select an option"},null,8,["modelValue"])])),_:1})])),_:1}),r(K,{color:"primary",raised:""},{default:m((()=>[j,P])),_:1})])]),r("div",R,[r(T,{class:[0!==u(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:m((()=>[x,F])),_:1},8,["class"]),r(g,{name:"list",tag:"div",class:"columns is-multiline"},{default:m((()=>[(d(!0),c(h,null,B(u(_),(e=>(d(),c("div",{key:e.id,class:"column is-4"},[r("div",w,[r("div",U,[r("img",{src:e.icon,alt:"",onErrorOnce:l[3]||(l[3]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),r("div",V,[r("span",E,z(e.name),1),r("span",null,[r("span",null,z(e.size),1),S,r("span",null,"Updated "+z(e.updated),1)])]),r(A)])])])))),128))])),_:1})])])}}});export{D as _};
