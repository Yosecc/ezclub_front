import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.9b8144d8.js";import{d as a,b as s,w as i,H as o,o as r,h as n,E as p,P as l,aa as d,j as u,k as f}from"./vendor.5767c02e.js";import{p as c,e as m,n as y,a as b}from"./index.3c66f81b.js";import{i as v,s as g,e as j}from"./Diciplines.e93e8df6.js";import{c as _}from"./Companies.74490ba2.js";import{t as h}from"./Staffs.589ff36a.js";var x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const x=a,E=l(),L=d(),k=s((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{b(v,"locations",_.value.locations)})),i(h,(()=>{b(v,"trainers",h.value)})),o((()=>{}));const w=()=>{const e=c(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(k),"is-loading":a.isLoading,onSaveData:w},{default:u((()=>[f(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
