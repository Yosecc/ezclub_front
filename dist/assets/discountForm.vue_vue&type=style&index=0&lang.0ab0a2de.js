import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.70f5db92.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.ee130016.js";import{d as s,G as a,b as r,o,h as n,D as u,a4 as i,O as d,j as p,k as c}from"./vendor.f3aa4145.js";import{i as f,s as l,p as m}from"./Discounts.8a5f9f03.js";import{e as y,p as v,n as b}from"./index.12404dd8.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=i(),h=d();a((()=>{y(f.value)}));const x=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),k=()=>{const t=v(f.value);"create"==j.type?l(t).then((t=>{if(t.data.status)b.success("Success"),y(f.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))})):"edit"==j.type&&m(h.query.id,t).then((t=>{if(t.data.status)b.success("Success"),y(f.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))}))};return(s,a)=>{const r=t,i=e;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(x),onSaveData:k},{default:p((()=>[c(r,{"inputs-step":u(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
