import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import{d as a,b as s,w as i,o,h as r,i as n,F as p,P as l,ad as d,k as u,l as c}from"./vendor.4454b83d.js";import{p as f,e as m,n as b,a as y}from"./index.bb46ca73.js";import{i as v,s as g,e as j}from"./Diciplines.110957c4.js";import{c as _}from"./Companies.1d517882.js";import{t as h}from"./Staffs.0dabc329.js";var x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const x=a,L=l(),k=d(),w=s((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(_,(()=>{y(v,"locations",_.value.locations)})),i(h,(()=>{y(v,"trainers",h.value)})),o((()=>{}));const A=()=>{const e=f(v.value);console.log(e),"create"==x.type?g(e).then((e=>{m(v.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,l=t;return r(),n(l,{buttons:x.buttons,titles:p(w),"is-loading":a.isLoading,onSaveData:A},{default:u((()=>[c(o,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
