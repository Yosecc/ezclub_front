import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f70b005e.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.1999c880.js";import{d as s,c as a,w as i,G as o,o as r,h as n,D as p,O as l,a4 as u,j as d,k as c}from"./vendor.c636f33b.js";import{p as f,d as m,n as y,a as v}from"./index.91d8990f.js";import{i as b,s as g,e as j}from"./Diciplines.8c60c32f.js";import{c as _}from"./Companies.66421503.js";import{t as h}from"./Staffs.a2b7a368.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,L=l(),k=u(),w=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{v(b,"locations",_.value.locations)})),i(h,(()=>{v(b,"trainers",h.value)})),o((()=>{}));const A=()=>{const t=f(b.value);console.log(t),"create"==x.type?g(t).then((t=>{m(b.value),k.back()})).catch((t=>{for(var e in t.response.data.errores)t.response.data.errores[e].forEach((t=>{y.error(`${e}: ${t}`)}))})):j(L.query.id,t).then((t=>{}))};return(a,i)=>{const o=t,l=e;return r(),n(l,{buttons:x.buttons,titles:p(w),"is-loading":s.isLoading,onSaveData:A},{default:d((()=>[c(o,{"inputs-step":p(b)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
