import{d as e,o as s,i as a,a8 as o,G as i,k as l,K as r}from"./vendor.1faf4f77.js";const n={class:"message-body"};var d=e({expose:[],props:{color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","success","info","warning","danger","white"].indexOf(e)||(console.warn(`V-Message: invalid "${e}" color. Should be primary, success, info, warning, danger, white or undefined`),!1)},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,{emit:d})=>(c,t)=>(s(),a("div",{class:["message",[e.color&&`is-${e.color}`]]},[e.closable?(s(),a("a",{key:0,class:"delete",onClick:t[1]||(t[1]=o((e=>d("close")),["prevent"]))})):i("v-if",!0),l("div",n,[r(c.$slots,"default")])],2))});export{d as _};
