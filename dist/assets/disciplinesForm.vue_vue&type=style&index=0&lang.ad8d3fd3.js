import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.ab886c12.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.e1e53d60.js";import{d as e,b as a,w as i,A as o,o as n,h as r,D as p,B as l,U as u,j as d,k as c}from"./vendor.20c6e26b.js";import{p as f,c as m,s as b}from"./Mixin.d9b7e9cd.js";import{i as y,s as v,c as g}from"./Diciplines.3bd6a96b.js";import{c as j}from"./Companies.2b75c20c.js";import{t as _}from"./Staffs.99d407b8.js";var x=e({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(e){const x=e,A=l(),L=u(),h=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(j,(()=>{b(y,"locations",j.value.locations)})),i(_,(()=>{b(y,"trainers",_.value)})),o((()=>{}));const k=()=>{const t=f(y.value);console.log(t),"create"==x.type?v(t).then((t=>{m(y.value),L.back()})):g(A.query.id,t).then((t=>{}))};return(a,i)=>{const o=t,l=s;return n(),r(l,{buttons:x.buttons,titles:p(h),"is-loading":e.isLoading,onSaveData:k},{default:d((()=>[c(o,{"inputs-step":p(y)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
