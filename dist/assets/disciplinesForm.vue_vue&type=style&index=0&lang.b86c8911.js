import{p as e,c as s,n as t,s as a,e as o,_ as i}from"./Companies.b2d14667.js";import{_ as r}from"./formLayaut.vue_vue&type=style&index=0&lang.efe54a19.js";import{d as n,b as p,w as l,z as d,o as u,h as c,D as f,A as b,B as m,j as y,k as v}from"./vendor.685e53b0.js";import{i as g,s as j,e as h}from"./Diciplines.88b84a85.js";import{t as _}from"./Staffs.c67b23eb.js";var A=n({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(n){const A=n,k=b(),w=m(),x=p((()=>"create"==A.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));l(o,(()=>{a(g,"locations",o.value.locations)})),l(_,(()=>{a(g,"trainers",_.value)})),d((()=>{}));const D=()=>{const a=e(g.value);console.log(a),"create"==A.type?j(a).then((e=>{s(g.value),w.back()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{t.error(`${s}: ${e}`)}))})):h(k.query.id,a).then((e=>{}))};return(e,s)=>{const t=i,a=r;return u(),c(a,{buttons:A.buttons,titles:f(x),"is-loading":n.isLoading,onSaveData:D},{default:y((()=>[v(t,{"inputs-step":f(g)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{A as _};
