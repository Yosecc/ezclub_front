import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import{d as a,O as s,b as o,o as i,i as n,E as r,j as p,k as u}from"./vendor.5bccebbb.js";import{i as l}from"./Companies.4241e8c8.js";var m=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:m}){const b=a;s();const d=o((()=>"create"==b.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const o=t,m=e;return i(),n(m,{buttons:b.buttons,step:b.step,titles:r(d),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(o,{"inputs-step":r(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{m as _};
