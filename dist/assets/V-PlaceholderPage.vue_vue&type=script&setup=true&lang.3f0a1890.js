import{d as e,i as s,j as t,l as a,L as l,H as i,I as r}from"./vendor.84e48f7c.js";const o={class:"page-placeholder"},p={class:"placeholder-content"},c={class:"dark-inverted"};var d=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},larger:{type:Boolean,default:!1}},emits:["click"],setup:(e,{emit:d})=>(d,n)=>(s(),t("div",o,[a("div",p,[l(d.$slots,"image"),a("h3",c,i(e.title),1),e.subtitle?(s(),t("p",{key:0,class:[e.larger&&"is-larger"]},i(e.subtitle),3)):r("v-if",!0),l(d.$slots,"action")])]))});export{d as _};