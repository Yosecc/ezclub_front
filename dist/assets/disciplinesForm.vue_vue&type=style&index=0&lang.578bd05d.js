import{c as a,_ as s}from"./Companies.a4797ab3.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.de409503.js";import{d as t,c as o,w as i,z as r,o as n,h as p,D as l,A as d,B as u,j as c,k as f}from"./vendor.42a295ea.js";import{p as m,c as y,n as b,s as v}from"./index.1a06469b.js";import{i as g,s as j,e as h}from"./Diciplines.90191189.js";import{t as _}from"./Staffs.da0d2077.js";var x=t({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(t){const x=t,A=d(),k=u(),w=o((()=>"create"==x.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));i(a,(()=>{v(g,"locations",a.value.locations)})),i(_,(()=>{v(g,"trainers",_.value)})),r((()=>{}));const D=()=>{const a=m(g.value);console.log(a),"create"==x.type?j(a).then((a=>{y(g.value),k.back()})).catch((a=>{for(var s in a.response.data.errores)a.response.data.errores[s].forEach((a=>{b.error(`${s}: ${a}`)}))})):h(A.query.id,a).then((a=>{}))};return(a,o)=>{const i=s,r=e;return n(),p(r,{buttons:x.buttons,titles:l(w),"is-loading":t.isLoading,onSaveData:D},{default:c((()=>[f(i,{"inputs-step":l(g)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{x as _};
