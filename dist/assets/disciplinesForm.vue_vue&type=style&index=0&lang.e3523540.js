import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import{d as s,O as a,ad as i,b as o,w as r,o as n,i as p,j as l,F as d,k as u,l as c}from"./vendor.84e48f7c.js";import{a as f,p as m,e as y,n as v}from"./index.5855fd6a.js";import{i as b,s as g,e as j}from"./Diciplines.6c8947e5.js";import{c as _}from"./Companies.679555f4.js";import{t as x}from"./Staffs.6305c347.js";var h=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const h=s,L=a(),k=i(),w=o((()=>"create"==h.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{f(b,"locations",_.value.locations)})),r(x,(()=>{f(b,"trainers",x.value)})),n((()=>{}));const A=()=>{const e=m(b.value);console.log(e),"create"==h.type?g(e).then((e=>{y(b.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{v.error(`${t}: ${e}`)}))})):j(L.query.id,e).then((e=>{}))};return(a,i)=>{const o=e,r=t;return p(),l(r,{buttons:h.buttons,titles:d(w),"is-loading":s.isLoading,onSaveData:A},{default:u((()=>[c(o,{"inputs-step":d(b)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{h as _};
