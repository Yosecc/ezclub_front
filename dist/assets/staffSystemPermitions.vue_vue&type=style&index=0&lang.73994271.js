import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import{d as a,b as r,h as p,i as n,F as u,ad as i,k as o,l}from"./vendor.4454b83d.js";import{b as f,g as d}from"./index.7c7f3752.js";import{f as m,h as c}from"./Staffs.89bc2a28.js";const b={class:"d-flex justify-content-center"};var y=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:c}){const y=a;i();const v=r((()=>"create"==y.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),_=r((()=>`${f.value}storage/${d(m.value,"photo").model}`));return(a,r)=>{const i=t,f=e,d=s;return p(),n(d,{buttons:y.buttons,step:y.step,titles:u(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:o((()=>[l("div",b,[l(i,{picture:u(_),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),l(f,{"inputs-step":u(m)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),v=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;i();const f=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const i=e,d=s;return p(),n(d,{buttons:a.buttons,step:a.step,titles:u(f)},{default:o((()=>[l(i,{"inputs-step":u(c)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{y as _,v as a};
