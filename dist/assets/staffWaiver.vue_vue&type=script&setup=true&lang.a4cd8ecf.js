import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d0759f22.js";import{_ as e}from"./Companies.f500e17c.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.1bc281e3.js";import{d as a,c as r,o as i,h as n,B as p,a1 as u,j as o,k as l,r as d,K as f}from"./vendor.2e3b8db9.js";import{b as c,g as b,n as m}from"./index.ad9a25dd.js";import{i as v,b as y,d as g,e as _}from"./Staffs.1ba52c0f.js";import{_ as j}from"./signComponent.vue_vue&type=script&setup=true&lang.219e7623.js";const w={class:"d-flex justify-content-center"};var A=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:d}){const f=a;u();const m=r((()=>"create"==f.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),y=r((()=>`${c.value}storage/${b(v.value,"photo").model}`));return(a,r)=>{const u=t,d=e,c=s;return i(),n(c,{buttons:f.buttons,step:f.step,titles:p(m),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:o((()=>[l("div",w,[l(u,{picture:p(y),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),l(d,{"inputs-step":p(v)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),S=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;u();const d=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const u=e,f=s;return i(),n(f,{buttons:a.buttons,step:a.step,titles:p(d)},{default:o((()=>[l(u,{"inputs-step":p(y)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const e=t;d([{name:"Waiver_010221.pdf",url:""}]);const a=r((()=>"create"==e.type?{title:"Add a new staff",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),u=t=>{_(t,g.value.id).then((t=>{if(t.data.status)m.success("Sign Success");else for(var e in m.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{m.error(`${e} : ${t}`)}))})).catch((t=>{}))};return(t,r)=>{const l=j,d=s;return i(),n(d,{buttons:e.buttons,step:e.step,titles:p(a)},{default:o((()=>[p(g)?(i(),n(l,{key:0,onOnSign:u,"is-sign":"create"==e.type,waiver:`waiver_${p(g).id}.pdf`,"url-waiver":`staffs/generateWeiver/${p(g).id}`},null,8,["is-sign","waiver","url-waiver"])):f("",!0)])),_:1},8,["buttons","step","titles"])}}});export{A as _,S as a,x as b};
