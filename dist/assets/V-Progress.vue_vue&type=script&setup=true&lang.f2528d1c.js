import{d as e,o as a,i as r,G as s}from"./vendor.01c5c571.js";var o=e({expose:[],props:{value:{type:Number,default:void 0},max:{type:Number,default:100},size:{type:String,default:void 0,validator:e=>-1!==[void 0,"tiny","smaller","small"].indexOf(e)||(console.warn(`V-Progress: invalid "${e}" size. Should be tiny, smaller, small or undefined`),!1)},color:{type:String,default:"primary",validator:e=>-1!==["primary","success","info","warning","danger"].indexOf(e)||(console.warn(`V-Progress: invalid "${e}" color. Should be primary, success, info, warning, or danger`),!1)}},setup:e=>(o,i)=>(a(),r("progress",{class:["progress",[e.size&&`is-${e.size}`,e.color&&`is-${e.color}`]],value:e.value,max:e.max},s(e.value?e.value/e.max*100+"%":""),11,["value","max"]))});export{o as _};
