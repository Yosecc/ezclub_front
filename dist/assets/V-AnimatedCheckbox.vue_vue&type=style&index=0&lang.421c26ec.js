import{d as e,b as a,r as l,g as s,o as c,i,k as o,a2 as u,D as r}from"./vendor.1faf4f77.js";const d=o("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[o("circle",{class:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),o("path",{class:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1);let n=0;var t=e({expose:[],props:{value:{type:[String,Number],default:void 0},modelValue:{type:Array,default:[]},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger","purple"].indexOf(e)||(console.warn(`V-AnimatedCheckbox: invalid "${e}" color. Should be primary, info, success, warning, danger, purple or undefined`),!1)}},emits:["update:modelValue"],setup(e,{emit:t}){const v=e,p="animated-checkbox-"+ ++n,m=a((()=>v.modelValue.includes(v.value))),h=l(null),k=l(null);function f(){const e=[...v.modelValue];m.value?e.splice(e.indexOf(v.value),1):e.push(v.value),t("update:modelValue",e)}return s((()=>{h.value&&k.value&&(m.value?(h.value.classList.add("is-checked"),k.value.classList.add("is-opaque"),setTimeout((()=>{var e;null==(e=h.value)||e.classList.remove("is-unchecked")}),150)):(h.value.classList.add("is-unchecked"),h.value.classList.remove("is-checked"),setTimeout((()=>{var e;null==(e=k.value)||e.classList.remove("is-opaque")}),150)))})),(a,l)=>(c(),i("div",{ref:h,class:["animated-checkbox",[e.color&&"is-"+e.color]]},[o("input",u({id:p,type:"checkbox",checked:r(m),value:v.value},a.$attrs,{onChange:f}),null,16,["checked","value"]),o("label",{for:p,class:"checkmark-wrap"},[o("div",{ref:k,class:"shadow-circle"},null,512),d])],2))}});export{t as _};