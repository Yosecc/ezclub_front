import{d as e,o as a,h as o,J as d}from"./vendor.e3a29b40.js";var t=e({expose:[],props:{dark:{type:String,default:void 0,validator:e=>-1!==[void 0,"1","2","3","4","5","6"].indexOf(e)||(console.warn(`V-Action: invalid "${e}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1)},active:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},grey:{type:Boolean,default:!1}},setup:e=>(t,r)=>(a(),o("button",{class:["button v-action",[e.active&&"is-active",e.rounded&&"is-rounded",e.dark&&`is-dark-bg-${e.dark}`,e.hoverable&&"is-hoverable",e.grey&&"is-grey"]]},[d(t.$slots,"default")],2))});export{t as _};
