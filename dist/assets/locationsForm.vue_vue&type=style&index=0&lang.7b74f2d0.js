import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import{d as a,b as s,h as o,i,F as n,P as r,k as p,l as u}from"./vendor.4454b83d.js";import{i as l}from"./Companies.279c1d6f.js";var d=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:d}){const f=a;r();const m=s((()=>"create"==f.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const r=t,d=e;return o(),i(d,{buttons:f.buttons,step:f.step,titles:n(m),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(r,{"inputs-step":n(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{d as _};
