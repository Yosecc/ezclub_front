import{_ as o}from"./V-Avatar.vue_vue_type_script_setup_true_lang.b4183814.js";import{d as c,o as a,e as t,z as d,F as m,G as u,f as s,t as f,y as v}from"./index.4457215e.js";const g={class:"avatar-stack"},y={class:"avatar is-more"},z={class:"inner"};var S=c({expose:[],props:{avatars:{type:Array,required:!1},size:{type:String,default:void 0,validator:e=>[void 0,"small","medium","large","big","xl"].indexOf(e)===-1?(console.warn(`V-AvatarStack: invalid "${e}" size. Should be small, medium, large, big, xl or undefined`),!1):!0},limit:{type:Number,default:5}},setup(e){return(r,h)=>{const l=o;return a(),t("div",g,[d(r.$slots,"default",{},()=>[(a(!0),t(m,null,u(e.avatars.slice(0,e.limit),(i,n)=>(a(),t(l,{key:n,size:e.size,picture:i.picture,initials:i.initials,color:i.color},null,8,["size","picture","initials","color"]))),128)),e.avatars.length>e.limit?(a(),t("div",{key:0,class:["v-avatar",[e.size&&"is-"+e.size]]},[s("span",y,[s("span",z,[s("span",null,"+"+f(e.avatars.length-e.limit),1)])])],2)):v("",!0)])])}}});export{S as _};
