import{A as a,B as o,d as e,b as i,o as s,h as n,K as d,D as t,J as l,k as r}from"./vendor.7d033f41.js";a("data-v-b8b2e458");const c={key:0,class:"form-icon"},u={key:1,class:"validation-icon is-success"},f=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"},null,-1),p={key:2,class:"validation-icon is-error"},h=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1);o();var y=e({expose:[],props:{icon:{type:String,default:void 0},isValid:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},textaddon:{type:Boolean,default:!1},nogrow:{type:Boolean,default:!1},subcontrol:{type:Boolean,default:!1}},setup(a){const o=a,e=i((()=>o.icon&&-1!==o.icon.indexOf(":")));return(o,i)=>(s(),n("div",{class:["control",[a.icon&&"has-icon",a.loading&&"is-loading",a.expanded&&"is-expanded",a.nogrow&&"is-nogrow",a.textaddon&&"is-textarea-addon",a.isValid&&"has-validation has-success",a.hasError&&"has-validation has-error",a.subcontrol&&"subcontrol"]]},[d(o.$slots,"default",{},void 0,!0),a.icon?(s(),n("div",c,[t(e)?(s(),n("i",{key:0,"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])):(s(),n("i",{key:1,"aria-hidden":"true",class:a.icon},null,2))])):l("",!0),a.isValid?(s(),n("div",u,[f])):a.hasError?(s(),n("div",p,[h])):l("",!0),d(o.$slots,"extra",{},void 0,!0)],2))}});y.__scopeId="data-v-b8b2e458";export{y as _};