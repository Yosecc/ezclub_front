import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import{d as s,b as a,w as i,H as o,o as r,h as n,E as p,P as d,aa as l,j as u,k as f}from"./vendor.41bfc188.js";import{p as c,e as m,n as b,a as y}from"./index.24bd633d.js";import{i as v,s as g,e as j}from"./Diciplines.dd025b8f.js";import{c as _}from"./Companies.dfd930b8.js";import{t as h}from"./Staffs.fbef2b4b.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,E=d(),L=l(),k=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{y(v,"locations",_.value.locations)})),i(h,(()=>{y(v,"trainers",h.value)})),o((()=>{}));const w=()=>{const e=c(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,d=t;return r(),n(d,{buttons:x.buttons,titles:p(k),"is-loading":s.isLoading,onSaveData:w},{default:u((()=>[f(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
