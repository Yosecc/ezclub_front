import"./moment.08a7f518.js";import{N as e}from"./notyf.es.f84e4201.js";import{r as a,b as n}from"./vendor.e3a29b40.js";const o=new e({duration:3e3,position:{x:"right",y:"top"}}),r=a([]),l=n((()=>r.value.includes(!0))),s=(e,a={anidados:!1,array:!0})=>{const n=e=>{((e,a=!0)=>{r.value=[],a?(e.forEach((e=>{!e.required||""!=e.model&&e.model?(r.value.push(!1),e.hasError=!1):(e.hasError=!0,r.value.push(!0))})),l.value):(""==e.model||null==e.model.length?(o.error(e.name+" is required"),e.hasError=!0,r.value.push(!0)):(r.value.push(!1),e.hasError=!1),l.value)})(e,a.array);const n={};return null!=e&&(a.array&&e.forEach((e=>{n[e.name]=e.model})),a.array||(n[e.name]=e.model)),n};if(!a.anidados)return n(e);if(a.anidados){const a=[];return e.forEach((e=>{null!=e.inputs?console.log("inputs",e.inputs):a.push(n(e))})),a}},u=e=>{const a=["checkbox","checkboxGroupSimple"];e.forEach((e=>{a.includes(e.typeInput)?e.model=[]:"inputsGroup"==e.typeInput?e.model={}:"checkboxGroup"==e.typeInput?e.values=[]:e.model=""}))},d=(e,a)=>e.find((e=>e.name==a)).model,t=(e,a)=>e.find((e=>e.name==a)),i=(e,a)=>e.find((e=>e.name==a)).values.find((n=>n.id==d(e,a))),m=(e,a,n)=>null==e.value?e.find((e=>e.name==a)).values=n:e.value.find((e=>e.name==a)).values=n,p=(e,a)=>["checkbox"].includes(e.typeInput)?(e.model=[],e.model.push(a),e):(e.model=a,e),c=(e,a,n)=>{if(null==e.value){if(null!=e.find((e=>e.name==a)))return p(e.find((e=>e.name==a)),n);console.warn(`no se agrego el valor de ${a}`)}if(null!=e.value.find((e=>e.name==a)))return p(e.value.find((e=>e.name==a)),n);console.warn(`no se agrego el valor de ${a}`)},f=e=>{const a=(e+="").split(".");let n=a[0];const o=a.length>1?","+a[1]:"",r=/(\d+)(\d{3})/;for(;r.test(n);)n=n.replace(r,"$1.$2");return"$"+n+o};export{c as a,i as b,u as c,t as g,l as h,f as m,o as n,s as p,m as s,d as v};
