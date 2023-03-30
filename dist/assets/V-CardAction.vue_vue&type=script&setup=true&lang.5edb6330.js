import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import{_ as t}from"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import{d as e,aa as r,r as s,ak as d,i,j as l,l as u,k as o,L as n,I as c}from"./vendor.b96c0b62.js";const v={class:"card-head"},p={key:0,class:"card-inner"};var g=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},avatar:{type:String,default:void 0},badge:{type:String,default:void 0},content:{type:String,default:void 0},radius:{type:String,default:"regular",validator:a=>-1!==["regular","smooth","rounded"].indexOf(a)||(console.warn(`V-CardAction: invalid "${a}" radius. Should be regular, smooth or rounded`),!1)}},setup(e){var g;const{slots:f}=r(),b=s(!!(null==(g=f.default)?void 0:g.call(f)));return d((()=>{var a;b.value=!!(null==(a=f.default)?void 0:a.call(f))})),(r,s)=>{const d=a,g=t;return i(),l("div",{class:["is-raised",["regular"===e.radius&&"s-card","smooth"===e.radius&&"r-card","rounded"===e.radius&&"l-card"]]},[u("div",v,[u(g,{title:e.title,subtitle:e.subtitle,center:""},{icon:o((()=>[u(d,{picture:e.avatar,badge:e.badge},null,8,["picture","badge"])])),action:o((()=>[n(r.$slots,"action")])),_:1},8,["title","subtitle"])]),b.value?(i(),l("div",p,[n(r.$slots,"default")])):c("v-if",!0)],2)}}});export{g as _};
