import{d as e,o as s,c as t,e as a,E as l,F as r,G as i}from"./vendor.777d9173.js";const o={class:"page-placeholder"},d={class:"placeholder-content"},p={class:"dark-inverted"};var c=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},larger:{type:Boolean,default:!1}},emits:["click"],setup:(e,{emit:c})=>(c,n)=>(s(),t("div",o,[a("div",d,[l(c.$slots,"image"),a("h3",p,r(e.title),1),e.subtitle?(s(),t("p",{key:0,class:[e.larger&&"is-larger"]},r(e.subtitle),3)):i("",!0),l(c.$slots,"action")])]))});export{c as _};
