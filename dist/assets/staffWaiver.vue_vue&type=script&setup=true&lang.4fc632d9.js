import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.0d774617.js";import{_ as e}from"./Companies.3fb82902.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.853d6f33.js";import{d as a,c as r,o as i,h as n,D as p,a2 as u,j as o,k as l,r as f,L as d}from"./vendor.020847a3.js";import{b as c,g as m,n as v}from"./index.1c4602e1.js";import{i as b,b as y,d as g,e as _}from"./Staffs.229031a9.js";import{_ as j}from"./signComponent.vue_vue&type=script&setup=true&lang.a813c148.js";const w={class:"d-flex justify-content-center"};var A=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:f}){const d=a;u();const v=r((()=>"create"==d.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),y=r((()=>`${c.value}storage/${m(b.value,"photo").model}`));return(a,r)=>{const u=t,f=e,c=s;return i(),n(c,{buttons:d.buttons,step:d.step,titles:p(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:o((()=>[l("div",w,[l(u,{picture:p(y),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),l(f,{"inputs-step":p(b)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),S=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;u();const f=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const u=e,d=s;return i(),n(d,{buttons:a.buttons,step:a.step,titles:p(f)},{default:o((()=>[l(u,{"inputs-step":p(y)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const e=t;f([{name:"Waiver_010221.pdf",url:""}]);const a=r((()=>"create"==e.type?{title:"Add a new staff",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),u=t=>{_(t,g.value.id).then((t=>{if(t.data.status)v.success("Sign Success");else for(var e in v.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{v.error(`${e} : ${t}`)}))})).catch((t=>{}))};return(t,r)=>{const l=j,f=s;return i(),n(f,{buttons:e.buttons,step:e.step,titles:p(a)},{default:o((()=>[p(g)?(i(),n(l,{key:0,onOnSign:u,"is-sign":"create"==e.type,waiver:`waiver_${p(g).id}.pdf`,"url-waiver":`staffs/generateWeiver/${p(g).id}`},null,8,["is-sign","waiver","url-waiver"])):d("",!0)])),_:1},8,["buttons","step","titles"])}}});export{A as _,S as a,x as b};
