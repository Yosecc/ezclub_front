import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e447a11e.js";import{_ as a}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.02f17df9.js";import{_ as e}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.f6587e5e.js";import{d as t,o as l,h as i,S as r,R as c,k as u,G as d}from"./vendor.5767c02e.js";const n={class:"flex-table-cell is-media is-grow","data-th":"User"},o={class:"item-name"},p={class:"item-meta"},v={class:"flex-table-cell","data-th":"Location"},m={class:"light-text"},f={class:"flex-table-cell","data-th":"Industry"},b={class:"light-text"},x={class:"flex-table-cell","data-th":"Status"},g={class:"flex-table-cell","data-th":"Relations"},h={class:"flex-table-cell cell-end","data-th":"Actions"};var y=t({expose:[],props:{rows:{type:Array,required:!0}},setup:t=>(y,_)=>{const w=s,A=a,j=e;return l(!0),i(c,null,r(t.rows,(s=>(l(),i("div",{key:s.id,class:"flex-table-item"},[u("div",n,[u(w,{size:"medium",picture:s.picture,badge:s.badge},null,8,["picture","badge"]),u("div",null,[u("span",o,d(s.name),1),u("span",p,[u("span",null,d(s.position),1)])])]),u("div",v,[u("span",m,d(s.location),1)]),u("div",f,[u("span",b,d(s.industry),1)]),u("div",x,[u("span",{class:["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]]},d(s.status),3)]),u("div",g,[u(A,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),u("div",h,[u(j)])])))),128)}});export{y as _};