import{d as r,b as e,o as a,i as o,L as d,E as n}from"./vendor.d343baf9.js";var s=r({expose:[],props:{radius:{type:String,default:"regular",validator:r=>-1!==["regular","smooth","rounded"].indexOf(r)||(console.warn(`V-Card: invalid "${r}" radius. Should be smooth, rounded or regular`),!1)},color:{type:String,default:void 0,validator:r=>-1!==[void 0,"primary","secondary","info","success","warning","danger"].indexOf(r)||(console.warn(`V-Card: invalid "${r}" color. Should be primary, secondary, info, \n          success, warning, danger or undefined`),!1)},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1}},setup(r){const s=r,i=e((()=>{if("smooth"===s.radius)return"s-card";if("rounded"===s.radius)return"l-card";let r="r-card";return s.outlined&&(r="r-card outlined"),r}));return(e,l)=>(a(),o("div",{class:[n(i),r.elevated&&"is-raised",s.color&&`is-${s.color}`]},[d(e.$slots,"default")],2))}});export{s as _};
