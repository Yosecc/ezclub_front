import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import{d as a,b as s,w as i,H as o,o as r,h as n,E as p,P as l,aa as d,j as u,k as f}from"./vendor.41bfc188.js";import{p as c,e as m,n as y,a as v}from"./index.ca56f9d7.js";import{i as b,s as g,e as j}from"./Diciplines.c503e288.js";import{c as _}from"./Companies.1f1e929d.js";import{t as h}from"./Staffs.8160599e.js";var x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const x=a,E=l(),L=d(),k=s((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{v(b,"locations",_.value.locations)})),i(h,(()=>{v(b,"trainers",h.value)})),o((()=>{}));const w=()=>{const e=c(b.value);console.log(e),"create"==x.type?g(e).then((e=>{m(b.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(k),"is-loading":a.isLoading,onSaveData:w},{default:u((()=>[f(o,{"inputs-step":p(b)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};