import{d as e,o as s,h as o,Y as a,I as l,k as i,G as r}from"./vendor.55fe8080.js";const n={class:"message-body"};var d=e({expose:[],props:{color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","success","info","warning","danger","white"].indexOf(e)||(console.warn(`V-Message: invalid "${e}" color. Should be primary, success, info, warning, danger, white or undefined`),!1)},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,{emit:d})=>(c,t)=>(s(),o("div",{class:["message",[e.color&&`is-${e.color}`]]},[e.closable?(s(),o("a",{key:0,class:"delete",onClick:t[1]||(t[1]=a((e=>d("close")),["prevent"]))})):l("",!0),i("div",n,[r(c.$slots,"default")])],2))});export{d as _};
