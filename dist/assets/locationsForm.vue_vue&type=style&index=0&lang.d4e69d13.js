import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.e35c9b92.js";import{d as a,O as s,b as o,i,j as n,F as r,k as p,l as u}from"./vendor.84e48f7c.js";import{i as l}from"./Companies.3207b006.js";var m=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:m}){const d=a;s();const f=o((()=>"create"==d.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const o=t,m=e;return i(),n(m,{buttons:d.buttons,step:d.step,titles:r(f),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(o,{"inputs-step":r(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{m as _};
