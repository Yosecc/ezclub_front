import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.7486f97d.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.eb3aeb8b.js";import{d as s,b as a,w as i,A as o,o as n,h as r,D as p,B as l,U as u,j as d,k as f}from"./vendor.eb57aacd.js";import{p as c,c as m,s as b}from"./Mixin.cdfef6ee.js";import{i as y,s as v,c as g}from"./Diciplines.e51380f9.js";import{c as j}from"./Companies.0b0706a5.js";import{t as _}from"./Staffs.7e01bd75.js";var x=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(s){const x=s,A=l(),L=u(),h=a((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(j,(()=>{b(y,"locations",j.value.locations)})),i(_,(()=>{b(y,"trainers",_.value)})),o((()=>{}));const k=()=>{const t=c(y.value);console.log(t),"create"==x.type?v(t).then((t=>{m(y.value),L.back()})):g(A.query.id,t).then((t=>{}))};return(a,i)=>{const o=t,l=e;return n(),r(l,{buttons:x.buttons,titles:p(h),"is-loading":s.isLoading,onSaveData:k},{default:d((()=>[f(o,{"inputs-step":p(y)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
