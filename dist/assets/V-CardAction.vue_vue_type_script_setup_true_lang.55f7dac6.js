import{_ as f}from"./V-Avatar.vue_vue_type_script_setup_true_lang.b4183814.js";import{_ as m}from"./V-Block.vue_vue_type_script_setup_true_lang.00657afe.js";import{d as g,a6 as v,r as h,ax as b,o,e as n,f as r,w as s,z as u,y as p}from"./index.4457215e.js";const S={class:"card-head"},y={key:0,class:"card-inner"};var $=g({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},avatar:{type:String,default:void 0},badge:{type:String,default:void 0},content:{type:String,default:void 0},radius:{type:String,default:"regular",validator:e=>["regular","smooth","rounded"].indexOf(e)===-1?(console.warn(`V-CardAction: invalid "${e}" radius. Should be regular, smooth or rounded`),!1):!0}},setup(e){var i;const{slots:t}=v(),d=h(!!((i=t.default)!=null&&i.call(t)));return b(()=>{var a;d.value=!!((a=t.default)!=null&&a.call(t))}),(a,_)=>{const l=f,c=m;return o(),n("div",{class:["is-raised",[e.radius==="regular"&&"s-card",e.radius==="smooth"&&"r-card",e.radius==="rounded"&&"l-card"]]},[r("div",S,[r(c,{title:e.title,subtitle:e.subtitle,center:""},{icon:s(()=>[r(l,{picture:e.avatar,badge:e.badge},null,8,["picture","badge"])]),action:s(()=>[u(a.$slots,"action")]),_:1},8,["title","subtitle"])]),d.value?(o(),n("div",y,[u(a.$slots,"default")])):p("",!0)],2)}}});export{$ as _};
