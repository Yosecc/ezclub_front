import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.996de933.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.1dc86fff.js";import{d as a,L as s,a4 as i,b as o,w as r,H as n,o as p,i as l,D as u,j as c,k as d}from"./vendor.0b0c2a98.js";import{a as f,p as m,e as y,n as b}from"./index.2e49ceae.js";import{i as v,s as g,e as j}from"./Diciplines.69cbb266.js";import{c as _}from"./Companies.03cc5ca3.js";import{t as x}from"./Staffs.0bc63451.js";var L=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const L=a,h=s(),k=i(),w=o((()=>"create"==L.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{f(v,"locations",_.value.locations)})),r(x,(()=>{f(v,"trainers",x.value)})),n((()=>{}));const A=()=>{const e=m(v.value);console.log(e),"create"==L.type?g(e).then((e=>{y(v.value),k.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(h.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,r=t;return p(),l(r,{buttons:L.buttons,titles:u(w),"is-loading":a.isLoading,onSaveData:A},{default:c((()=>[d(o,{"inputs-step":u(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{L as _};
