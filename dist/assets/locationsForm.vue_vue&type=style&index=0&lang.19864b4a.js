import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.567c3df7.js";import{d as a,b as s,h as o,i,F as n,P as r,k as p,l as u}from"./vendor.7d5213a2.js";import{i as l}from"./Companies.19eed36d.js";var d=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:d}){const m=a;r();const f=s((()=>"create"==m.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const r=t,d=e;return o(),i(d,{buttons:m.buttons,step:m.step,titles:n(f),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(r,{"inputs-step":n(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{d as _};
