import{d as e,b as l,h as a,i as o,l as s,a7 as i,F as n,H as u,K as d}from"./vendor.4454b83d.js";const r=s("span",null,null,-1),t={key:0};var c=e({expose:[],props:{value:{type:[String,Number],required:!0},label:{type:String,default:void 0},isLabel:{type:Boolean,default:!0},modelValue:{type:Array,default:[]},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-Checkbox: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)},circle:{type:Boolean,default:!1},solid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:c}){const p=e,v=l((()=>p.modelValue.includes(p.value)));function f(){const e=[...p.modelValue];v.value?e.splice(e.indexOf(p.value),1):e.push(p.value),c("update:modelValue",e)}return(l,c)=>(a(),o("label",{class:["checkbox",[p.solid?"is-solid":"is-outlined",p.circle&&"is-circle",p.color&&`is-${p.color}`]]},[s("input",i({type:"checkbox",checked:n(v),value:p.value},l.$attrs,{onChange:f}),null,16,["checked","value"]),r,e.isLabel?(a(),o("span",t,u(p.label||p.value),1)):d("",!0)],2))}});export{c as _};
