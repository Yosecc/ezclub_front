import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import{d as s,O as a,ad as i,b as o,w as r,o as n,i as p,j as l,F as d,k as u,l as f}from"./vendor.84e48f7c.js";import{a as c,p as m,e as b,n as y}from"./index.160bf48b.js";import{i as v,s as g,e as j}from"./Diciplines.7b409772.js";import{c as _}from"./Companies.49d077d5.js";import{t as x}from"./Staffs.8bfb5625.js";var h=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const h=s,L=a(),k=i(),w=o((()=>"create"==h.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{c(v,"locations",_.value.locations)})),r(x,(()=>{c(v,"trainers",x.value)})),n((()=>{}));const A=()=>{const e=m(v.value);console.log(e),"create"==h.type?g(e).then((e=>{b(v.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{y.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,r=t;return p(),l(r,{buttons:h.buttons,titles:d(w),"is-loading":s.isLoading,onSaveData:A},{default:u((()=>[f(o,{"inputs-step":d(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{h as _};
