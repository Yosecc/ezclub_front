import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import{d as s,aa as a,O as r,I as o,b as n,o as u,i,E as d,j as p,k as c}from"./vendor.5bccebbb.js";import{i as f,s as l,p as b}from"./Discounts.e789ebef.js";import{e as m,p as y,n as v}from"./index.f3d47fcf.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=a(),x=r();o((()=>{m(f.value)}));const E=n((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),h=()=>{const e=y(f.value);"create"==j.type?l(e).then((e=>{if(e.data.status)v.success("Success"),m(f.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))})):"edit"==j.type&&b(x.query.id,e).then((e=>{if(e.data.status)v.success("Success"),m(f.value),_.back();else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))}))};return(s,a)=>{const r=e,o=t;return u(),i(o,{buttons:j.buttons,step:j.step,titles:d(E),onSaveData:h},{default:p((()=>[c(r,{"inputs-step":d(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
