import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.93e88a3c.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import{d as a,b as r,o as i,h as n,E as u,D as p,j as o,k as l,r as f,L as d}from"./vendor.e3a29b40.js";import{a as c}from"./index.a5fdae58.js";import{i as b,b as v,d as m,e as y}from"./Staffs.ebaf88b1.js";import{v as g,n as _}from"./Mixin.4fbb484e.js";import{_ as j}from"./signComponent.vue_vue&type=script&setup=true&lang.33b9a88e.js";const w={class:"d-flex justify-content-center"};var x=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(a,{emit:f}){const d=a;p();const v=r((()=>"create"==d.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),m=r((()=>`${c.value}storage/${g(b.value,"photo")}`));return(a,r)=>{const p=t,f=e,c=s;return i(),n(c,{buttons:d.buttons,step:d.step,titles:u(v),onSaveData:r[1]||(r[1]=t=>a.$emit("saveData"))},{default:o((()=>[l("div",w,[l(p,{picture:u(m),class:"mb-4 mr-5",size:"xl"},null,8,["picture"])]),l(f,{"inputs-step":u(b)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),A=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const a=t;p();const f=r((()=>"create"==a.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(t,r)=>{const p=e,d=s;return i(),n(d,{buttons:a.buttons,step:a.step,titles:u(f)},{default:o((()=>[l(p,{"inputs-step":u(v)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),S=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const e=t;f([{name:"Waiver_010221.pdf",url:""}]);const a=r((()=>"create"==e.type?{title:"Add a new staff",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),p=t=>{y(t,m.value.id).then((t=>{if(t.data.status)_.success("Sign Success");else for(var e in _.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{_.error(`${e} : ${t}`)}))})).catch((t=>{}))};return(t,r)=>{const l=j,f=s;return i(),n(f,{buttons:e.buttons,step:e.step,titles:u(a)},{default:o((()=>[u(m)?(i(),n(l,{key:0,onOnSign:p,"is-sign":"create"==e.type,waiver:`waiver_${u(m).id}.pdf`,"url-waiver":`staffs/generateWeiver/${u(m).id}`},null,8,["is-sign","waiver","url-waiver"])):d("",!0)])),_:1},8,["buttons","step","titles"])}}});export{x as _,A as a,S as b};