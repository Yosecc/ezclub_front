import{h as e}from"./moment.08a7f518.js";import{N as a}from"./notyf.es.f84e4201.js";import{r as n,b as o}from"./vendor.3b9a49d2.js";const r=new a({duration:3e3,position:{x:"right",y:"top"}}),s=n([]),l=o((()=>s.value.includes(!0))),u=(e,a={anidados:!1,array:!0})=>{const n=e=>{((e,a=!0)=>{s.value=[],console.log(e),a?(e.forEach((e=>{!e.required||""!=e.model&&e.model?(s.value.push(!1),e.hasError=!1):(e.hasError=!0,s.value.push(!0))})),l.value):(""==e.model||null==e.model.length?(r.error(e.name+" is required"),e.hasError=!0,s.value.push(!0)):(s.value.push(!1),e.hasError=!1),l.value)})(e,a.array);const n={};return null!=e&&(a.array&&e.forEach((e=>{n[e.name]=e.model})),a.array||(n[e.name]=e.model)),n};if(!a.anidados)return n(e);if(a.anidados){const a=[];return e.forEach((e=>{null!=e.inputs?console.log("inputs",e.inputs):a.push(n(e))})),a}},d=e=>{const a=["checkbox","checkboxGroupSimple"];e.forEach((e=>{a.includes(e.typeInput)?e.model=[]:"inputsGroup"==e.typeInput?e.model={}:"checkboxGroup"==e.typeInput?e.values=[]:e.model=""}))},t=(e,a)=>e.find((e=>e.name==a)).model,i=(e,a)=>e.find((e=>e.name==a)),m=(e,a)=>(console.log(e),console.log(a),e.find((e=>e.name==a)).values.find((n=>n.id==t(e,a)))),c=(e,a,n)=>null==e.value?e.find((e=>e.name==a)).values=n:e.value.find((e=>e.name==a)).values=n,p=(e,a)=>["checkbox"].includes(e.typeInput)?(e.model=[],e.model.push(a),e):(e.model=a,e),f=(e,a,n)=>{if(null==e.value){if(null!=e.find((e=>e.name==a)))return p(e.find((e=>e.name==a)),n);console.warn(`no se agrego el valor de ${a}`)}if(null!=e.value.find((e=>e.name==a)))return p(e.value.find((e=>e.name==a)),n);console.warn(`no se agrego el valor de ${a}`)},h=e=>{const a=(e+="").split(".");let n=a[0];const o=a.length>1?","+a[1]:"",r=/(\d+)(\d{3})/;for(;r.test(n);)n=n.replace(r,"$1.$2");return"$"+n+o},v=a=>{const n=e(),o=e().add(a,"days");return Math.abs(Math.round(e.duration(n.diff(o)).asMonths()))};export{f as a,m as b,d as c,v as d,i as g,l as h,h as m,r as n,u as p,c as s,t as v};
