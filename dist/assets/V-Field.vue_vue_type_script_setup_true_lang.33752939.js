import{d as r,o,e as t,F as d,f as l,t as n,z as s}from"./index.4457215e.js";const p={class:"field-label is-normal"},f={class:"label"},u={class:"field-body"},c={class:"label"};var h=r({expose:[],props:{label:{type:String,default:void 0},addons:{type:Boolean,default:!1},textaddon:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(i){const e=i;return(a,y)=>(o(),t("div",{class:["field",[e.addons&&"has-addons",e.textaddon&&"has-textarea-addon",e.grouped&&"is-grouped",e.grouped&&e.multiline&&"is-grouped-multiline",e.horizontal&&"is-horizontal"]]},[typeof e.label=="string"&&e.horizontal?(o(),t(d,{key:0},[l("div",p,[l("label",f,n(e.label),1)]),l("div",u,[s(a.$slots,"default")])],64)):typeof e.label=="string"?(o(),t(d,{key:1},[l("label",c,n(e.label),1),s(a.$slots,"default")],64)):s(a.$slots,"default",{key:2})],2))}});export{h as _};
