import{_ as t}from"./Companies.449438e9.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.f1db6743.js";import{d as s,z as a,c as r,o,h as n,D as u,B as i,A as d,j as p,k as c}from"./vendor.d1a3c89d.js";import{i as f,s as l,p as m}from"./Discounts.d990310b.js";import{c as b,p as v,n as y}from"./index.5b8a83ef.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const j=s,h=i(),_=d();a((()=>{b(f.value)}));const k=r((()=>"create"==j.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),x=()=>{const t=v(f.value);"create"==j.type?l(t).then((t=>{if(t.data.status)y.success("Success"),b(f.value),h.back();else for(var e in y.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{y.error(`${e} : ${t}`)}))})):"edit"==j.type&&m(_.query.id,t).then((t=>{if(t.data.status)y.success("Success"),b(f.value),h.back();else for(var e in y.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{y.error(`${e} : ${t}`)}))}))};return(s,a)=>{const r=t,i=e;return o(),n(i,{buttons:j.buttons,step:j.step,titles:u(k),onSaveData:x},{default:p((()=>[c(r,{"inputs-step":u(f)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{j as _};
