import{d as a,o as d,h as e,I as o}from"./vendor.494d8f4f.js";var n=a({expose:[],props:{addons:{type:Boolean,default:!1},align:{type:String,default:void 0,validator:a=>-1!==[void 0,"centered","right"].indexOf(a)||(console.warn(`V-Buttons: invalid "${a}" align. Should be centered, right or undefined`),!1)}},setup(a){const n=a;return(a,s)=>(d(),e("div",{class:["buttons",[n.addons&&"has-addons",n.align&&`is-${n.align}`]]},[o(a.$slots,"default")],2))}});export{n as _};
