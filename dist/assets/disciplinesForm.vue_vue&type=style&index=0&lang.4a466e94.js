import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.743216be.js";import{d as s,b as a,w as i,o,h as r,i as n,F as p,P as l,ac as u,k as d,l as c}from"./vendor.3e3390b7.js";import{p as f,e as m,n as y,a as v}from"./index.20a0a132.js";import{i as b,s as g,e as j}from"./Diciplines.8c39d92c.js";import{c as _}from"./Companies.30e296d5.js";import{t as h}from"./Staffs.ee753251.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,L=l(),k=u(),w=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{v(b,"locations",_.value.locations)})),i(h,(()=>{v(b,"trainers",h.value)})),o((()=>{}));const A=()=>{const e=f(b.value);console.log(e),"create"==x.type?g(e).then((e=>{m(b.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(w),"is-loading":s.isLoading,onSaveData:A},{default:d((()=>[c(o,{"inputs-step":p(b)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
