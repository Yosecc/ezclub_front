import{d as e,h as o,i as r,L as d}from"./vendor.4454b83d.js";var i=e({expose:[],props:{size:{type:String,default:void 0,validator:e=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(e)||(console.warn(`V-IconBox: invalid "${e}" size. Should be small, medium, large, big, xl or undefined`),!1)},color:{type:String,default:void 0,validator:e=>!e||(-1!==["primary","info","success","warning","danger","purple","yellow","orange","green","red","blue"].indexOf(e)||(console.warn(`V-IconBox: invalid "${e}" color. Should be primary, info, success, warning, danger, purple, yellow, orange, green, red, blue or undefined`),!1))},rounded:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup:e=>(i,l)=>(o(),r("div",{class:["v-icon",[e.size&&"is-"+e.size,e.color&&"is-"+e.color,e.rounded&&"is-rounded",e.bordered&&"is-bordered"]]},[d(i.$slots,"default")],2))});export{i as _};
