import{i as t,_ as e}from"./Companies.7d0f7197.js";import{_ as a}from"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import{d as s,b as o,o as i,h as n,E as r,B as p,j as u,k as l}from"./vendor.e3a29b40.js";var d=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(s,{emit:d}){const m=s;p();const f=o((()=>"create"==m.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(s,o)=>{const p=e,d=a;return i(),n(d,{buttons:m.buttons,step:m.step,titles:r(f),onSaveData:o[1]||(o[1]=t=>s.$emit("saveData"))},{default:u((()=>[l(p,{"inputs-step":r(t)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{d as _};
