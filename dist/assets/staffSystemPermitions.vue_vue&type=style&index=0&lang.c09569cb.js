import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.743216be.js";import{d as a,b as r,h as p,i as n,F as u,ac as i,k as o,l as f}from"./vendor.3e3390b7.js";import{b as l,g as d}from"./index.f26114c9.js";import{f as c,h as m}from"./Staffs.fec2f66e.js";const b={class:"d-flex justify-content-center"};var y=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:m}){const y=a;i();const v=r((()=>"create"==y.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),_=r((()=>`${l.value}storage/${d(c.value,"photo").model}`));return(a,r)=>{const i=t,l=e,d=s;return p(),n(d,{buttons:y.buttons,step:y.step,titles:u(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:o((()=>[f("div",b,[f(i,{picture:u(_),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),f(l,{"inputs-step":u(c)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),v=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;i();const l=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const i=e,d=s;return p(),n(d,{buttons:a.buttons,step:a.step,titles:u(l)},{default:o((()=>[f(i,{"inputs-step":u(m)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{y as _,v as a};
