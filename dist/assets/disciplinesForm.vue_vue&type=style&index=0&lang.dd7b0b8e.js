import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.9b8144d8.js";import{d as s,b as a,w as i,H as o,o as r,h as n,E as p,P as l,aa as d,j as u,k as c}from"./vendor.5767c02e.js";import{p as f,e as m,n as b,a as y}from"./index.800fdb40.js";import{i as v,s as g,e as j}from"./Diciplines.f9b9799b.js";import{c as _}from"./Companies.49f014f5.js";import{t as h}from"./Staffs.d66c41c0.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,E=l(),L=d(),k=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{y(v,"locations",_.value.locations)})),i(h,(()=>{y(v,"trainers",h.value)})),o((()=>{}));const w=()=>{const e=f(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(k),"is-loading":s.isLoading,onSaveData:w},{default:u((()=>[c(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
