import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import{d as s,o as a,b as r,h as o,i as n,F as u,ad as i,P as d,k as p,l as c}from"./vendor.4454b83d.js";import{i as l,s as f,p as m}from"./Discounts.6335aa19.js";import{e as y,p as v,n as b}from"./index.7241005a.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=i(),h=d();a((()=>{y(l.value)}));const x=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),k=()=>{const t=v(l.value);"create"==j.type?f(t).then((t=>{if(t.data.status)b.success("Success"),y(l.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))})):"edit"==j.type&&m(h.query.id,t).then((t=>{if(t.data.status)b.success("Success"),y(l.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))}))};return(s,a)=>{const r=t,i=e;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(x),onSaveData:k},{default:p((()=>[c(r,{"inputs-step":u(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
