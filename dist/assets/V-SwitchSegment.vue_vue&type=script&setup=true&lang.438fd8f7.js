import{d as e,o as l,h as a,k as s,F as o,J as t,a2 as i}from"./vendor.d0c8bc4f.js";const r={class:"switch-segment"},n=s("i",{"aria-hidden":"true"},null,-1);let d=0;var c=e({expose:[],inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},labelTrue:{type:String,default:void 0},labelFalse:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-SwitchSegment: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)}},emits:["update:modelValue"],setup(e,{emit:c}){const u="segment-switch-"+ ++d;return(d,p)=>(l(),a("div",r,[e.labelFalse?(l(),a("label",{key:0,class:"is-label",for:u},[s("p",null,o(e.labelFalse),1)])):t("",!0),s("label",{for:u,class:["form-switch",[e.color&&`is-${e.color}`]]},[s("input",i({id:u,checked:e.modelValue},d.$attrs,{type:"checkbox",class:"is-switch",onChange:p[1]||(p[1]=l=>c("update:modelValue",!e.modelValue))}),null,16,["checked"]),n],2),e.labelTrue?(l(),a("label",{key:1,class:"is-label",for:u},[s("p",null,o(e.labelTrue),1)])):t("",!0)]))}});export{c as _};
