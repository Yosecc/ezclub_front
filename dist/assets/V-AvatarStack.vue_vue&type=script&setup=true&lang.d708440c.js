import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{d as s,h as i,i as e,L as t,R as l,S as r,l as n,H as o,K as u}from"./vendor.4454b83d.js";const d={class:"avatar-stack"},v={class:"avatar is-more"},p={class:"inner"};var c=s({expose:[],props:{avatars:{type:Array,required:!1},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(a)||(console.warn(`V-AvatarStack: invalid "${a}" size. Should be small, medium, large, big, xl or undefined`),!1)},limit:{type:Number,default:5}},setup:s=>(c,m)=>{const g=a;return i(),e("div",d,[t(c.$slots,"default",{},(()=>[(i(!0),e(l,null,r(s.avatars.slice(0,s.limit),((a,t)=>(i(),e(g,{key:t,size:s.size,picture:a.picture,initials:a.initials,color:a.color},null,8,["size","picture","initials","color"])))),128)),s.avatars.length>s.limit?(i(),e("div",{key:0,class:["v-avatar",[s.size&&"is-"+s.size]]},[n("span",v,[n("span",p,[n("span",null,"+"+o(s.avatars.length-s.limit),1)])])],2)):u("",!0)]))])}});export{c as _};