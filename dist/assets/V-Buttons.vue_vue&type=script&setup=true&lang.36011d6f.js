import{d as e,o as a,h as o,L as d}from"./vendor.5767c02e.js";var n=e({expose:[],props:{addons:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:e=>-1!==[void 0,"centered","right"].indexOf(e)||(console.warn(`V-Buttons: invalid "${e}" align. Should be centered, right or undefined`),!1)}},setup(e){const n=e;return(e,s)=>(a(),o("div",{class:["buttons",[n.addons&&"has-addons",n.align&&`is-${n.align}`]]},[d(e.$slots,"default")],2))}});export{n as _};