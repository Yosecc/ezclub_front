import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67fcb901.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.da5097dd.js";import{d as a,O as s,a6 as i,b as o,w as r,I as n,o as p,i as d,E as l,j as u,k as c}from"./vendor.01c5c571.js";import{a as f,p as m,e as y,n as b}from"./index.ac5a5b37.js";import{i as v,s as g,e as j}from"./Diciplines.d932f21d.js";import{c as _}from"./Companies.6a501d7e.js";import{t as x}from"./Staffs.362f7cdb.js";var h=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},isLoading:{type:Boolean,default:!1}},setup(a){const h=a,E=s(),L=i(),k=o((()=>"create"==h.type?{title:"Add a new discipline",subtitle:"Add information for a new discipline"}:{title:"Edit discipline",subtitle:"Edit information for a discipline"}));r(_,(()=>{f(v,"locations",_.value.locations)})),r(x,(()=>{f(v,"trainers",x.value)})),n((()=>{}));const w=()=>{const e=m(v.value);console.log(e),"create"==h.type?g(e).then((e=>{y(v.value),L.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{b.error(`${t}: ${e}`)}))})):j(E.query.id,e).then((e=>{}))};return(s,i)=>{const o=e,r=t;return p(),d(r,{buttons:h.buttons,titles:l(k),"is-loading":a.isLoading,onSaveData:w},{default:u((()=>[c(o,{"inputs-step":l(v)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{h as _};
