import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import{d as s,O as a,aa as i,b as o,w as r,I as n,o as p,i as l,E as u,j as d,k as c}from"./vendor.5bccebbb.js";import{a as f,p as m,e as b,n as y}from"./index.290e8cb0.js";import{i as v,s as g,e as j}from"./Diciplines.34d767ea.js";import{c as _}from"./Companies.515075e4.js";import{t as x}from"./Staffs.24479479.js";var h=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const h=s,E=a(),L=i(),k=o((()=>"create"==h.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{f(v,"locations",_.value.locations)})),r(x,(()=>{f(v,"trainers",x.value)})),n((()=>{}));const w=()=>{const e=m(v.value);console.log(e),"create"==h.type?g(e).then((e=>{b(v.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,r=t;return p(),l(r,{buttons:h.buttons,titles:u(k),"is-loading":s.isLoading,onSaveData:w},{default:d((()=>[c(o,{"inputs-step":u(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{h as _};
