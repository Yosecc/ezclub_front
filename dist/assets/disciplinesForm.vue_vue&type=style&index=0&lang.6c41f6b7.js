import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.44773cfb.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.ce6d3f04.js";import{d as a,O as s,ab as i,b as o,w as r,o as n,i as p,j as l,F as d,k as u,l as f}from"./vendor.b81f4189.js";import{a as c,p as m,e as b,n as y}from"./index.dc1bd4a0.js";import{i as v,s as g,e as j}from"./Diciplines.90f47ae1.js";import{c as _}from"./Companies.8cbd9e1a.js";import{t as x}from"./Staffs.0f12eb3f.js";var h=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const h=a,L=s(),k=i(),w=o((()=>"create"==h.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{c(v,"locations",_.value.locations)})),r(x,(()=>{c(v,"trainers",x.value)})),n((()=>{}));const A=()=>{const e=m(v.value);console.log(e),"create"==h.type?g(e).then((e=>{b(v.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,r=t;return p(),l(r,{buttons:h.buttons,titles:d(w),"is-loading":a.isLoading,onSaveData:A},{default:u((()=>[f(o,{"inputs-step":d(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{h as _};
