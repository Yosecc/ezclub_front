import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import{d as s,ad as a,O as r,o,b as n,i as u,j as i,F as d,k as p,l as c}from"./vendor.84e48f7c.js";import{i as l,s as f,p as m}from"./Discounts.a88e7bd5.js";import{e as y,p as b,n as v}from"./index.8a348250.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=a(),x=r();o((()=>{y(l.value)}));const h=n((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),k=()=>{const e=b(l.value);"create"==j.type?f(e).then((e=>{if(e.data.status)v.success("Success"),y(l.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))})):"edit"==j.type&&m(x.query.id,e).then((e=>{if(e.data.status)v.success("Success"),y(l.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))}))};return(s,a)=>{const r=e,o=t;return u(),i(o,{buttons:j.buttons,step:j.step,titles:d(h),onSaveData:k},{default:p((()=>[c(r,{"inputs-step":d(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
