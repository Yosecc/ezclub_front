import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.e2250c75.js";import{d as a,b as s,o,h as i,E as n,P as r,j as p,k as u}from"./vendor.853b0a2b.js";import{i as l}from"./Companies.454fa4b6.js";var m=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:m}){const d=a;r();const f=s((()=>"create"==d.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const r=t,m=e;return o(),i(m,{buttons:d.buttons,step:d.step,titles:n(f),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(r,{"inputs-step":n(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{m as _};