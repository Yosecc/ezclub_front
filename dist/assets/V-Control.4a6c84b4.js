import{A as a,B as o,d as i,b as e,o as s,i as n,K as d,D as t,G as l,k as r}from"./vendor.1faf4f77.js";a("data-v-6a506fd9");const c={key:0,class:"form-icon"},f={key:1,class:"validation-icon is-success"},u=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"},null,-1),p={key:2,class:"validation-icon is-error"},v=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1);o();var y=i({expose:[],props:{icon:{type:String,default:void 0},isValid:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},textaddon:{type:Boolean,default:!1},nogrow:{type:Boolean,default:!1},subcontrol:{type:Boolean,default:!1}},setup(a){const o=a,i=e((()=>o.icon&&-1!==o.icon.indexOf(":")));return(o,e)=>(s(),n("div",{class:["control",[a.icon&&"has-icon",a.loading&&"is-loading",a.expanded&&"is-expanded",a.nogrow&&"is-nogrow",a.textaddon&&"is-textarea-addon",a.isValid&&"has-validation has-success",a.hasError&&"has-validation has-error",a.subcontrol&&"subcontrol"]]},[d(o.$slots,"default",{},void 0,!0),a.icon?(s(),n("div",c,[t(i)?(s(),n("i",{key:0,"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])):(s(),n("i",{key:1,"aria-hidden":"true",class:a.icon},null,2))])):l("v-if",!0),a.isValid?(s(),n("div",f,[u])):a.hasError?(s(),n("div",p,[v])):l("v-if",!0),d(o.$slots,"extra",{},void 0,!0)],2))}});y.__scopeId="data-v-6a506fd9";export{y as _};
