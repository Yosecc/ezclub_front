import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.87a4afde.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.f9d94dfe.js";import{d as a,b as s,w as i,G as o,o as r,h as n,D as p,O as l,a4 as d,j as u,k as f}from"./vendor.7d033f41.js";import{p as c,e as m,n as y,a as v}from"./index.7194d1c1.js";import{i as b,s as g,e as j}from"./Diciplines.f859084a.js";import{c as _}from"./Companies.e283cc7c.js";import{t as h}from"./Staffs.feeafc23.js";var x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const x=a,L=l(),k=d(),w=s((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{v(b,"locations",_.value.locations)})),i(h,(()=>{v(b,"trainers",h.value)})),o((()=>{}));const A=()=>{const e=c(b.value);console.log(e),"create"==x.type?g(e).then((e=>{m(b.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(w),"is-loading":a.isLoading,onSaveData:A},{default:u((()=>[f(o,{"inputs-step":p(b)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
