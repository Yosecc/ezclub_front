import{_ as s}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.38d4d5c1.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.8a14b49c.js";import{d as t,o as e,h as l,R as c,Q as d,k as i,F as r}from"./vendor.d0c8bc4f.js";const o={class:"flex-table-cell is-bold","data-th":"Company"},p={class:"dark-text"},n={class:"flex-table-cell","data-th":"Type"},u={class:"light-text"},v={class:"flex-table-cell","data-th":"Industry"},b={class:"light-text"},x={class:"flex-table-cell","data-th":"Status"},f={class:"flex-table-cell","data-th":"Contacts"},m={class:"flex-table-cell cell-end","data-th":"Actions"};var y=t({expose:[],props:{rows:{type:Array,required:!0}},setup:t=>(y,h)=>{const g=s,_=a;return e(!0),l(d,null,c(t.rows,(s=>(e(),l("div",{key:s.id,class:"flex-table-item"},[i("div",o,[i("span",p,r(s.company),1)]),i("div",n,[i("span",u,r(s.type),1)]),i("div",v,[i("span",b,r(s.industry),1)]),i("div",x,[i("span",{class:["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]]},r(s.status),3)]),i("div",f,[i(g,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),i("div",m,[i(_)])])))),128)}});export{y as _};
