import{_ as s}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.49471977.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.81a8ec12.js";import{d as t,o as e,i as l,U as c,S as i,k as r,G as d}from"./vendor.01c5c571.js";const o={class:"flex-table-cell is-bold","data-th":"Company"},p={class:"dark-text"},n={class:"flex-table-cell","data-th":"Type"},u={class:"light-text"},v={class:"flex-table-cell","data-th":"Industry"},x={class:"light-text"},m={class:"flex-table-cell","data-th":"Status"},b={class:"flex-table-cell","data-th":"Contacts"},f={class:"flex-table-cell cell-end","data-th":"Actions"};var y=t({expose:[],props:{rows:{type:Array,required:!0}},setup:t=>(y,h)=>{const g=s,_=a;return e(!0),l(i,null,c(t.rows,(s=>(e(),l("div",{key:s.id,class:"flex-table-item"},[r("div",o,[r("span",p,d(s.company),1)]),r("div",n,[r("span",u,d(s.type),1)]),r("div",v,[r("span",x,d(s.industry),1)]),r("div",m,[r("span",{class:["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]]},d(s.status),3)]),r("div",b,[r(g,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),r("div",f,[r(_)])])))),128)}});export{y as _};
