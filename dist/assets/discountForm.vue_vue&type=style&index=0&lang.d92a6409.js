import{_ as e}from"./Companies.f2eb7ee0.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.84e6db57.js";import{d as s,G as a,c as r,o,h as n,D as u,a2 as i,J as d,j as c,k as p}from"./vendor.2054a2d2.js";import{i as f,s as l,p as m}from"./Discounts.be904b97.js";import{c as b,p as v,n as y}from"./index.8c434b3c.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,h=i(),_=d();a((()=>{b(f.value)}));const k=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),x=()=>{const e=v(f.value);"create"==j.type?l(e).then((e=>{if(e.data.status)y.success("Success"),b(f.value),h.back();else for(var t in y.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{y.error(`${t} : ${e}`)}))})):"edit"==j.type&&m(_.query.id,e).then((e=>{if(e.data.status)y.success("Success"),b(f.value),h.back();else for(var t in y.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{y.error(`${t} : ${e}`)}))}))};return(s,a)=>{const r=e,i=t;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(k),onSaveData:x},{default:c((()=>[p(r,{"inputs-step":u(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
