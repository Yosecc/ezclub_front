import{d as e,o as l,i as a,Q as o,k as t,F as s,K as d}from"./vendor.0a671356.js";const i={class:"field-label is-normal"},n={class:"label"},r={class:"field-body"},p={class:"label"};var u=e({expose:[],props:{label:{type:String,default:void 0},addons:{type:Boolean,default:!1},textaddon:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(e){const u=e;return(e,f)=>(l(),a("div",{class:["field",[u.addons&&"has-addons",u.textaddon&&"has-textarea-addon",u.grouped&&"is-grouped",u.grouped&&u.multiline&&"is-grouped-multiline",u.horizontal&&"is-horizontal"]]},["string"==typeof u.label&&u.horizontal?(l(),a(o,{key:0},[t("div",i,[t("label",n,s(u.label),1)]),t("div",r,[d(e.$slots,"default")])],64)):"string"==typeof u.label?(l(),a(o,{key:1},[t("label",p,s(u.label),1),d(e.$slots,"default")],64)):d(e.$slots,"default",{key:2})],2))}});export{u as _};
