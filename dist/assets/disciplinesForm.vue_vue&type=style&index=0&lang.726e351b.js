import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import{_ as a}from"./formLayaut.vue_vue&type=style&index=0&lang.e2250c75.js";import{d as t,b as s,w as i,H as o,o as r,h as n,E as p,P as l,a9 as u,j as d,k as c}from"./vendor.853b0a2b.js";import{p as f,e as m,n as y,a as b}from"./index.8f8c2b3e.js";import{i as v,s as g,e as j}from"./Diciplines.52fc6279.js";import{c as _}from"./Companies.454fa4b6.js";import{t as h}from"./Staffs.2aac1a72.js";var x=t({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(t){const x=t,E=l(),L=u(),k=s((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{b(v,"locations",_.value.locations)})),i(h,(()=>{b(v,"trainers",h.value)})),o((()=>{}));const w=()=>{const e=f(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),L.back()})).catch((e=>{for(var a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{y.error(`${a}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,l=a;return r(),n(l,{buttons:x.buttons,titles:p(k),"is-loading":t.isLoading,onSaveData:w},{default:d((()=>[c(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
