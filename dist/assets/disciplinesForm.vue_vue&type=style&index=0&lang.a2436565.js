import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.743216be.js";import{d as s,b as a,w as i,o,h as r,i as n,F as p,P as l,ac as d,k as u,l as c}from"./vendor.3e3390b7.js";import{p as f,e as m,n as b,a as y}from"./index.3cb8fbb0.js";import{i as v,s as g,e as j}from"./Diciplines.8d322e7f.js";import{c as _}from"./Companies.492667c4.js";import{t as h}from"./Staffs.b44dd4a4.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,L=l(),k=d(),w=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{y(v,"locations",_.value.locations)})),i(h,(()=>{y(v,"trainers",h.value)})),o((()=>{}));const A=()=>{const e=f(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(w),"is-loading":s.isLoading,onSaveData:A},{default:u((()=>[c(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
