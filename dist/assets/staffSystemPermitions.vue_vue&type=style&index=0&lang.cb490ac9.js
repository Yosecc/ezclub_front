import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import{d as a,b as r,o as p,h as n,E as o,aa as u,j as i,k as f}from"./vendor.41bfc188.js";import{b as l,g as d}from"./index.1121a635.js";import{e as m,f as c}from"./Staffs.f132cc0f.js";const b={class:"d-flex justify-content-center"};var y=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:c}){const y=a;u();const v=r((()=>"create"==y.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),_=r((()=>`${l.value}storage/${d(m.value,"photo").model}`));return(a,r)=>{const u=t,l=e,d=s;return p(),n(d,{buttons:y.buttons,step:y.step,titles:o(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:i((()=>[f("div",b,[f(u,{picture:o(_),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),f(l,{"inputs-step":o(m)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),v=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;u();const l=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const u=e,d=s;return p(),n(d,{buttons:a.buttons,step:a.step,titles:o(l)},{default:i((()=>[f(u,{"inputs-step":o(c)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{y as _,v as a};
