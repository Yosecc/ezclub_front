import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.8e723d67.js";import{d as s,H as a,b as r,o,h as n,E as u,a9 as i,P as d,j as p,k as c}from"./vendor.c210e0cb.js";import{i as l,s as f,p as m}from"./Discounts.af874657.js";import{e as y,p as v,n as b}from"./index.0600ce68.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=i(),h=d();a((()=>{y(l.value)}));const x=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),E=()=>{const e=v(l.value);"create"==j.type?f(e).then((e=>{if(e.data.status)b.success("Success"),y(l.value),_.back();else for(var t in b.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{b.error(`${t} : ${e}`)}))})):"edit"==j.type&&m(h.query.id,e).then((e=>{if(e.data.status)b.success("Success"),y(l.value),_.back();else for(var t in b.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{b.error(`${t} : ${e}`)}))}))};return(s,a)=>{const r=e,i=t;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(x),onSaveData:E},{default:p((()=>[c(r,{"inputs-step":u(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
