import{d as e,o as t,h as s,K as a,k as i,F as l,J as o}from"./vendor.c636f33b.js";const n={key:0},r={key:1},p={class:"flex-end"};var d=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},infratitle:{type:String,default:void 0},center:{type:Boolean,default:!1},lighter:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},mResponsive:{type:Boolean,default:!1},tResponsive:{type:Boolean,default:!1}},setup:e=>(d,f)=>(t(),s("div",{class:[!e.center&&"media-flex",e.center&&"media-flex-center",e.narrow&&"no-margin",e.mResponsive&&"is-responsive-mobile",e.tResponsive&&"is-responsive-tablet-p"]},[a(d.$slots,"icon"),i("div",{class:["flex-meta",[e.lighter&&"is-lighter"]]},[i("span",null,l(e.title),1),e.subtitle?(t(),s("span",n,l(e.subtitle),1)):o("",!0),e.infratitle?(t(),s("span",r,l(e.infratitle),1)):o("",!0),a(d.$slots,"default")],2),i("div",p,[a(d.$slots,"action")])],2))});export{d as _};
