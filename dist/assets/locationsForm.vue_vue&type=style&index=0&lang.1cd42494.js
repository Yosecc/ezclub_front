import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.51c40874.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.401987ae.js";import{d as a,b as s,h as o,i,F as n,P as r,k as p,l as u}from"./vendor.97519523.js";import{i as l}from"./Companies.ca2ccc6e.js";var m=a({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["saveData"],setup(a,{emit:m}){const c=a;r();const d=s((()=>"create"==c.type?{title:"Add a new location",subtitle:"Add information for a new location"}:{title:"Edit location",subtitle:"Edit information for a location"}));return(a,s)=>{const r=t,m=e;return o(),i(m,{buttons:c.buttons,step:c.step,titles:n(d),onSaveData:s[1]||(s[1]=t=>a.$emit("saveData"))},{default:p((()=>[u(r,{"inputs-step":n(l)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{m as _};
