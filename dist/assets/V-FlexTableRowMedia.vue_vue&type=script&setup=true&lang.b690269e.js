import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.3d19f6e0.js";import{_ as a}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.66eac6aa.js";import{_ as t}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.4c13d6a8.js";import{d as e,o as l,h as i,O as r,N as c,k as d,J as u}from"./vendor.494d8f4f.js";const n={class:"flex-table-cell is-media is-grow","data-th":"User"},o={class:"item-name"},p={class:"item-meta"},v={class:"flex-table-cell","data-th":"Location"},m={class:"light-text"},f={class:"flex-table-cell","data-th":"Industry"},b={class:"light-text"},x={class:"flex-table-cell","data-th":"Status"},g={class:"flex-table-cell","data-th":"Relations"},h={class:"flex-table-cell cell-end","data-th":"Actions"};var y=e({expose:[],props:{rows:{type:Array,required:!0}},setup:e=>(y,_)=>{const w=s,A=a,j=t;return l(!0),i(c,null,r(e.rows,(s=>(l(),i("div",{key:s.id,class:"flex-table-item"},[d("div",n,[d(w,{size:"medium",picture:s.picture,badge:s.badge},null,8,["picture","badge"]),d("div",null,[d("span",o,u(s.name),1),d("span",p,[d("span",null,u(s.position),1)])])]),d("div",v,[d("span",m,u(s.location),1)]),d("div",f,[d("span",b,u(s.industry),1)]),d("div",x,[d("span",{class:["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]]},u(s.status),3)]),d("div",g,[d(A,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),d("div",h,[d(j)])])))),128)}});export{y as _};
