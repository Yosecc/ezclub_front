import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import{d as a,aa as r,b as p,o as n,i as o,E as u,j as i,k as l}from"./vendor.5bccebbb.js";import{b as f,g as d}from"./index.0622f2b5.js";import{e as b,f as c}from"./Staffs.1204b2fe.js";const m={class:"d-flex justify-content-center"};var y=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:c}){const y=a;r();const v=p((()=>"create"==y.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),_=p((()=>`${f.value}storage/${d(b.value,"photo").model}`));return(a,r)=>{const p=t,f=e,d=s;return n(),o(d,{buttons:y.buttons,step:y.step,titles:u(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:i((()=>[l("div",m,[l(p,{picture:u(_),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),l(f,{"inputs-step":u(b)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),v=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;r();const f=p((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const p=e,d=s;return n(),o(d,{buttons:a.buttons,step:a.step,titles:u(f)},{default:i((()=>[l(p,{"inputs-step":u(c)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{y as _,v as a};
