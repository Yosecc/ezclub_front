import{d as l,h as e,i as a,R as o,l as t,H as s,L as d}from"./vendor.4454b83d.js";const i={class:"field-label is-normal"},n={class:"label"},r={class:"field-body"},p={class:"label"};var u=l({expose:[],props:{label:{type:String,default:void 0},addons:{type:Boolean,default:!1},textaddon:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},multiline:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},setup(l){const u=l;return(l,f)=>(e(),a("div",{class:["field",[u.addons&&"has-addons",u.textaddon&&"has-textarea-addon",u.grouped&&"is-grouped",u.grouped&&u.multiline&&"is-grouped-multiline",u.horizontal&&"is-horizontal"]]},["string"==typeof u.label&&u.horizontal?(e(),a(o,{key:0},[t("div",i,[t("label",n,s(u.label),1)]),t("div",r,[d(l.$slots,"default")])],64)):"string"==typeof u.label?(e(),a(o,{key:1},[t("label",p,s(u.label),1),d(l.$slots,"default")],64)):d(l.$slots,"default",{key:2})],2))}});export{u as _};