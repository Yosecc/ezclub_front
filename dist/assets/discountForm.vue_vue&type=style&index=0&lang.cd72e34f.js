import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.50bb1f04.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import{d as s,b as a,o as r,h as o,E as n,D as u,j as i,k as p}from"./vendor.e3a29b40.js";import{i as d,s as f}from"./Discounts.fe35500e.js";import{p as c,c as l,n as m}from"./Mixin.788265f9.js";var y=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const y=s;u();const b=a((()=>"create"==y.type?{title:"Add a new discount",subtitle:"Add information for a new discount"}:{title:"Edit discount",subtitle:"Edit information for a discount"})),v=()=>{const t=c(d.value);"create"==y.type&&f(t).then((t=>{if(t.data.status)nofyf.success("Success"),l(d.value);else for(var e in m.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{m.error(`${e} : ${t}`)}))}))};return(s,a)=>{const u=t,f=e;return r(),o(f,{buttons:y.buttons,step:y.step,titles:n(b),onSaveData:v},{default:i((()=>[p(u,{"inputs-step":n(d)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{y as _};
