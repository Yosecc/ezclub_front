import{d as e,c as a,r as l,g as s,o as c,h as o,k as u,a2 as i,D as r}from"./vendor.c636f33b.js";const d=u("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[u("circle",{class:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),u("path",{class:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1);let n=0;var t=e({expose:[],props:{value:{type:[String,Number],default:void 0},modelValue:{type:Array,default:[]},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger","purple"].indexOf(e)||(console.warn(`V-AnimatedCheckbox: invalid "${e}" color. Should be primary, info, success, warning, danger, purple or undefined`),!1)}},emits:["update:modelValue"],setup(e,{emit:t}){const v=e,p="animated-checkbox-"+ ++n,m=a((()=>v.modelValue.includes(v.value))),h=l(null),k=l(null);function f(){const e=[...v.modelValue];m.value?e.splice(e.indexOf(v.value),1):e.push(v.value),t("update:modelValue",e)}return s((()=>{h.value&&k.value&&(m.value?(h.value.classList.add("is-checked"),k.value.classList.add("is-opaque"),setTimeout((()=>{var e;null==(e=h.value)||e.classList.remove("is-unchecked")}),150)):(h.value.classList.add("is-unchecked"),h.value.classList.remove("is-checked"),setTimeout((()=>{var e;null==(e=k.value)||e.classList.remove("is-opaque")}),150)))})),(a,l)=>(c(),o("div",{ref:h,class:["animated-checkbox",[e.color&&"is-"+e.color]]},[u("input",i({id:p,type:"checkbox",checked:r(m),value:v.value},a.$attrs,{onChange:f}),null,16,["checked","value"]),u("label",{for:p,class:"checkmark-wrap"},[u("div",{ref:k,class:"shadow-circle"},null,512),d])],2))}});export{t as _};
