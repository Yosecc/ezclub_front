import{d as e,z as l,o as a,c as o,e as s,a0 as i,t as u,B as n,F as d}from"./vendor.777d9173.js";const r=s("span",null,null,-1);var t=e({expose:[],props:{value:{type:[String,Number],required:!0},label:{type:String,default:void 0},modelValue:{type:Array,default:[]},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-Checkbox: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)},circle:{type:Boolean,default:!1},solid:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const c=e,p=l((()=>c.modelValue.includes(c.value)));function v(){const e=[...c.modelValue];p.value?e.splice(e.indexOf(c.value),1):e.push(c.value),t("update:modelValue",e)}return(e,l)=>(a(),o("label",{class:["checkbox",[c.solid?"is-solid":"is-outlined",c.circle&&"is-circle",c.color&&`is-${c.color}`]]},[s("input",i({type:"checkbox",checked:u(p),value:c.value},e.$attrs,{onChange:v}),null,16,["checked","value"]),r,n(" "+d(c.label||c.value),1)],2))}});export{t as _};
