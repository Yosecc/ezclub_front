import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b97017d7.js";import{_ as a}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.c1358fb9.js";import{_ as t}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.b5370bd6.js";import{d as e,o as l,h as i,N as r,L as c,k as u,J as d}from"./vendor.20c6e26b.js";const n={class:"flex-table-cell is-media is-grow","data-th":"User"},o={class:"item-name"},p={class:"item-meta"},v={class:"flex-table-cell","data-th":"Location"},m={class:"light-text"},b={class:"flex-table-cell","data-th":"Industry"},f={class:"light-text"},x={class:"flex-table-cell","data-th":"Status"},g={class:"flex-table-cell","data-th":"Relations"},h={class:"flex-table-cell cell-end","data-th":"Actions"};var y=e({expose:[],props:{rows:{type:Array,required:!0}},setup:e=>(y,_)=>{const w=s,A=a,j=t;return l(!0),i(c,null,r(e.rows,(s=>(l(),i("div",{key:s.id,class:"flex-table-item"},[u("div",n,[u(w,{size:"medium",picture:s.picture,badge:s.badge},null,8,["picture","badge"]),u("div",null,[u("span",o,d(s.name),1),u("span",p,[u("span",null,d(s.position),1)])])]),u("div",v,[u("span",m,d(s.location),1)]),u("div",b,[u("span",f,d(s.industry),1)]),u("div",x,[u("span",{class:["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]]},d(s.status),3)]),u("div",g,[u(A,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),u("div",h,[u(j)])])))),128)}});export{y as _};
