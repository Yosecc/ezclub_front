import{d as e,o as l,h as a,J as s,K as o,k as t,_ as i}from"./vendor.20c6e26b.js";const r={class:"switch-segment"},n=t("i",{"aria-hidden":"true"},null,-1);let d=0;var c=e({expose:[],inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},labelTrue:{type:String,default:void 0},labelFalse:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-SwitchSegment: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)}},emits:["update:modelValue"],setup(e,{emit:c}){const u="segment-switch-"+ ++d;return(d,p)=>(l(),a("div",r,[e.labelFalse?(l(),a("label",{key:0,class:"is-label",for:u},s(e.labelFalse),1)):o("",!0),t("label",{for:u,class:["form-switch",[e.color&&`is-${e.color}`]]},[t("input",i({id:u,checked:e.modelValue},d.$attrs,{type:"checkbox",class:"is-switch",onChange:p[1]||(p[1]=l=>c("update:modelValue",!e.modelValue))}),null,16,["checked"]),n],2),e.labelTrue?(l(),a("label",{key:1,class:"is-label",for:u},s(e.labelTrue),1)):o("",!0)]))}});export{c as _};
