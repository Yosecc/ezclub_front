import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.8e723d67.js";import{d as s,H as a,b as r,o,h as n,E as u,a9 as i,P as d,j as p,k as c}from"./vendor.c210e0cb.js";import{i as f,s as l,p as m}from"./Discounts.f037534d.js";import{e as y,p as v,n as b}from"./index.c9d550f4.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,_=i(),h=d();a((()=>{y(f.value)}));const x=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),E=()=>{const t=v(f.value);"create"==j.type?l(t).then((t=>{if(t.data.status)b.success("Success"),y(f.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))})):"edit"==j.type&&m(h.query.id,t).then((t=>{if(t.data.status)b.success("Success"),y(f.value),_.back();else for(var e in b.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{b.error(`${e} : ${t}`)}))}))};return(s,a)=>{const r=t,i=e;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(x),onSaveData:E},{default:p((()=>[c(r,{"inputs-step":u(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
