import{_ as e}from"./V-Placeload.47aacffe.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.2c6b8d85.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.f5a0fe26.js";import{_ as s}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.9dc062fa.js";import{d as o,o as l,h as i,a4 as u,j as r,k as n,F as c,D as p,J as d,E as f,K as m}from"./vendor.ce9b165f.js";const v={class:"title is-4 mb-0"},y=f(" Go Back "),b=f(" Go Back "),k=f(" Next "),_=f(" Save Changes ");var g=o({expose:[],props:{buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1},isLoaderActive:{type:Boolean,default:!1}},emits:["changeStep","saveData"],setup(o,{emit:g}){const h=u();return(u,g)=>{const j=e,C=t,x=a,B=s;return o.isLoading?(l(),i(j,{key:0,height:"500px"})):(l(),i(B,{key:1},{"header-left":r((()=>[n("div",null,[n("h1",v,c(o.titles.title),1),n("p",null,c(o.titles.subtitle),1)])])),"header-right":r((()=>[n(x,{size:"small",active:o.isLoaderActive},{default:r((()=>[o.buttons.includes("back")?(l(),i(C,{key:0,onClick:g[1]||(g[1]=e=>p(h).back()),class:"mr-3"},{default:r((()=>[y])),_:1})):d("",!0),o.buttons.includes("prev")?(l(),i(C,{key:1,onClick:g[2]||(g[2]=e=>u.$emit("changeStep",o.step-1)),class:"mr-3"},{default:r((()=>[b])),_:1})):d("",!0),o.buttons.includes("next")?(l(),i(C,{key:2,color:"primary",onClick:g[3]||(g[3]=e=>u.$emit("changeStep",o.step+1))},{default:r((()=>[k])),_:1})):d("",!0),o.buttons.includes("save")?(l(),i(C,{key:3,color:"primary",onClick:g[4]||(g[4]=e=>u.$emit("saveData"))},{default:r((()=>[_])),_:1})):d("",!0),o.buttons.includes("new")?(l(),i(C,{key:4,to:o.newRoute.to,color:"primary"},{default:r((()=>[f(c(o.newRoute.title),1)])),_:1},8,["to"])):d("",!0)])),_:1},8,["active"])])),content:r((()=>[m(u.$slots,"default")])),_:1}))}}});export{g as _};
