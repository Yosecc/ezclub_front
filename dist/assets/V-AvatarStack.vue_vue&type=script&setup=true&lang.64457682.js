import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import{d as s,h as i,i as e,L as t,R as l,S as r,l as n,H as o,K as u}from"./vendor.7d5213a2.js";const v={class:"avatar-stack"},d={class:"avatar is-more"},p={class:"inner"};var c=s({expose:[],props:{avatars:{type:Array,required:!1},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(a)||(console.warn(`V-AvatarStack: invalid "${a}" size. Should be small, medium, large, big, xl or undefined`),!1)},limit:{type:Number,default:5}},setup:s=>(c,m)=>{const f=a;return i(),e("div",v,[t(c.$slots,"default",{},(()=>[(i(!0),e(l,null,r(s.avatars.slice(0,s.limit),((a,t)=>(i(),e(f,{key:t,size:s.size,picture:a.picture,initials:a.initials,color:a.color},null,8,["size","picture","initials","color"])))),128)),s.avatars.length>s.limit?(i(),e("div",{key:0,class:["v-avatar",[s.size&&"is-"+s.size]]},[n("span",d,[n("span",p,[n("span",null,"+"+o(s.avatars.length-s.limit),1)])])],2)):u("",!0)]))])}});export{c as _};
