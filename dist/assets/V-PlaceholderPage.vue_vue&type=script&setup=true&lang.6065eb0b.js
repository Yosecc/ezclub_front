import{d as e,o as s,h as t,k as a,K as l,F as r,J as i}from"./vendor.f3aa4145.js";const o={class:"page-placeholder"},p={class:"placeholder-content"},d={class:"dark-inverted"};var c=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},larger:{type:Boolean,default:!1}},emits:["click"],setup:(e,{emit:c})=>(c,n)=>(s(),t("div",o,[a("div",p,[l(c.$slots,"image"),a("h3",d,r(e.title),1),e.subtitle?(s(),t("p",{key:0,class:[e.larger&&"is-larger"]},r(e.subtitle),3)):i("",!0),l(c.$slots,"action")])]))});export{c as _};
