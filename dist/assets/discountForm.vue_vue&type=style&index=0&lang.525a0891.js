import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.db4f1fa3.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.2ed213c2.js";import{d as s,G as a,b as r,o,h as n,D as u,a4 as i,O as d,j as p,k as c}from"./vendor.d0c8bc4f.js";import{i as f,s as l,p as m}from"./Discounts.e599278b.js";import{e as y,p as b,n as v}from"./index.12c5e549.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=i(),h=d();a((()=>{y(f.value)}));const x=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),k=()=>{const e=b(f.value);"create"==j.type?l(e).then((e=>{if(e.data.status)v.success("Success"),y(f.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))})):"edit"==j.type&&m(h.query.id,e).then((e=>{if(e.data.status)v.success("Success"),y(f.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))}))};return(s,a)=>{const r=e,i=t;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(x),onSaveData:k},{default:p((()=>[c(r,{"inputs-step":u(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
