import{_ as s}from"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import{_ as e}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.f1cce59c.js";import{d as a,o as i,i as l,S as t,U as n,k as r,j as d,G as o,H as c,L as u}from"./vendor.5bccebbb.js";import{_ as p}from"./V-Dropdown.e4c10296.js";const v={class:"flex-meta is-light"},m={href:"#"},f={key:0,class:"flex-end"};var g=a({expose:[],props:{topics:{type:Array,required:!0,default:[]},rounded:{type:Boolean,default:!1}},setup:a=>(u,p)=>{const g=s,h=e;return i(),l("div",null,[(i(!0),l(t,null,n(a.topics,(s=>(i(),l("div",{key:s.id,class:"inner-list-item media-flex-center"},[r(g,{rounded:a.rounded,color:s.color},{default:d((()=>[r("i",{"aria-hidden":"true",class:"iconify","data-icon":s.icon},null,8,["data-icon"])])),_:2},1032,["rounded","color"]),r("div",v,[r("a",m,o(s.name),1),r("span",null,o(s.category),1)]),s.users?(i(),l("div",f,[r(h,{avatars:s.users,size:"small",limit:3},null,8,["avatars"])])):c("v-if",!0)])))),128))])}});const h={},y=r("a",{href:"#",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-reload"})]),r("div",{class:"meta"},[r("span",null,"Reload"),r("span",null,"Reload Widget")])],-1),w=r("a",{href:"#",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-cogs"})]),r("div",{class:"meta"},[r("span",null,"Configure"),r("span",null,"Configure widget")])],-1),_=r("a",{href:"#",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-cog"})]),r("div",{class:"meta"},[r("span",null,"Settings"),r("span",null,"Widget Settings")])],-1),x=r("hr",{class:"dropdown-divider"},null,-1),j=r("a",{href:"#",class:"dropdown-item is-media"},[r("div",{class:"icon"},[r("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})]),r("div",{class:"meta"},[r("span",null,"Remove"),r("span",null,"Remove from view")])],-1);h.render=function(s,e){const a=p;return i(),l(a,{icon:"feather:more-vertical",dots:"",right:"",spaced:""},{content:d((()=>[y,w,_,x,j])),_:1})};const k={class:"widget-head"},S={class:"dark-inverted"},b={class:"inner-list"};var R=a({expose:[],props:{title:{type:String,required:!0,default:"List Widget"},straight:{type:Boolean,default:!1}},setup:s=>(e,a)=>{const t=h;return i(),l("div",{class:["list-widget",[s.straight&&"is-straight"]]},[r("div",k,[r("h3",S,o(s.title),1),r(t)]),r("div",b,[u(e.$slots,"default")])],2)}});export{R as _,g as a};
