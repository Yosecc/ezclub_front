import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import{d as s,aa as a,O as r,I as o,b as n,o as u,i,E as p,j as d,k as c}from"./vendor.5bccebbb.js";import{i as f,s as l,p as b}from"./Discounts.04f18224.js";import{e as m,p as y,n as v}from"./index.0622f2b5.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=a(),x=r();o((()=>{m(f.value)}));const E=n((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),h=()=>{const t=y(f.value);"create"==j.type?l(t).then((t=>{if(t.data.status)v.success("Success"),m(f.value),_.back();else for(var e in v.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{v.error(`${e} : ${t}`)}))})):"edit"==j.type&&b(x.query.id,t).then((t=>{if(t.data.status)v.success("Success"),m(f.value),_.back();else for(var e in v.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{v.error(`${e} : ${t}`)}))}))};return(s,a)=>{const r=t,o=e;return u(),i(o,{buttons:j.buttons,step:j.step,titles:p(E),onSaveData:h},{default:d((()=>[c(r,{"inputs-step":p(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
