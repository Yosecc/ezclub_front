import{_ as e}from"./V-Placeload.141ef784.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import{_ as s}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b6c72e1b.js";import{d as o,o as l,h as r,a9 as i,j as u,k as n,G as c,E as p,K as d,F as m,L as y}from"./vendor.c210e0cb.js";const f={class:"title is-4 mb-0"},b=m(" Go Back "),v=m(" Go Back "),k=m(" Next "),_=m(" Save Changes ");var g=o({expose:[],props:{buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1},isLoaderActive:{type:Boolean,default:!1},isCard:{type:Boolean,default:!0}},emits:["changeStep","saveData"],setup(o,{emit:g}){const h=i();return(i,g)=>{const C=e,j=t,x=a,B=s;return o.isLoading?(l(),r(C,{key:0,height:"500px"})):(l(),r(B,{key:1,style:o.isCard?{}:{backgroundColor:"transparent",border:"0px"}},{"header-left":u((()=>[n("div",null,[n("h1",f,c(o.titles.title),1),n("p",null,c(o.titles.subtitle),1)])])),"header-right":u((()=>[n(x,{size:"small",active:o.isLoaderActive},{default:u((()=>[o.buttons.includes("back")?(l(),r(j,{key:0,onClick:g[1]||(g[1]=e=>p(h).back()),class:"mr-3"},{default:u((()=>[b])),_:1})):d("",!0),o.buttons.includes("prev")?(l(),r(j,{key:1,onClick:g[2]||(g[2]=e=>i.$emit("changeStep",o.step-1)),class:"mr-3"},{default:u((()=>[v])),_:1})):d("",!0),o.buttons.includes("next")?(l(),r(j,{key:2,color:"primary",onClick:g[3]||(g[3]=e=>i.$emit("changeStep",o.step+1))},{default:u((()=>[k])),_:1})):d("",!0),o.buttons.includes("save")?(l(),r(j,{key:3,color:"primary",onClick:g[4]||(g[4]=e=>i.$emit("saveData"))},{default:u((()=>[_])),_:1})):d("",!0),o.buttons.includes("new")?(l(),r(j,{key:4,to:o.newRoute.to,color:"primary"},{default:u((()=>[m(c(o.newRoute.title),1)])),_:1},8,["to"])):d("",!0)])),_:1},8,["active"])])),content:u((()=>[y(i.$slots,"default")])),_:1},8,["style"]))}}});export{g as _};