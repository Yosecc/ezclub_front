import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.973b13a6.js";import{d as a,b as s,o,h as i,E as n,P as r,j as p,k as u}from"./vendor.41bfc188.js";import{i as l}from"./Companies.719eeaa1.js";var f=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:f}){const m=a;r();const d=s((()=>"create"==m.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const r=t,f=e;return o(),i(f,{buttons:m.buttons,step:m.step,titles:n(d),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(r,{"inputs-step":n(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{f as _};
