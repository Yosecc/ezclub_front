import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{d as s,o as i,h as e,J as t,N as l,O as r,k as o,K as n,L as u}from"./vendor.e3a29b40.js";const v={class:"avatar-stack"},p={class:"avatar is-more"},c={class:"inner"};var d=s({expose:[],props:{avatars:{type:Array,required:!1},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(a)||(console.warn(`V-AvatarStack: invalid "${a}" size. Should be small, medium, large, big, xl or undefined`),!1)},limit:{type:Number,default:5}},setup:s=>(d,m)=>{const f=a;return i(),e("div",v,[t(d.$slots,"default",{},(()=>[(i(!0),e(l,null,r(s.avatars.slice(0,s.limit),((a,t)=>(i(),e(f,{key:t,size:s.size,picture:a.picture,initials:a.initials,color:a.color},null,8,["size","picture","initials","color"])))),128)),s.avatars.length>s.limit?(i(),e("div",{key:0,class:["v-avatar",[s.size&&"is-"+s.size]]},[o("span",p,[o("span",c,[o("span",null,"+"+n(s.avatars.length-s.limit),1)])])],2)):u("",!0)]))])}});export{d as _};
