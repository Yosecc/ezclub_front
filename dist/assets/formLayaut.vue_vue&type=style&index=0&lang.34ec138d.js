import{_ as e}from"./V-Placeload.c195e33d.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.a4702afa.js";import{_ as s}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0c1f8e0b.js";import{d as o,o as l,h as i,a4 as u,j as r,k as n,F as c,D as p,J as d,E as m,K as f}from"./vendor.c636f33b.js";const v={class:"title is-4 mb-0"},y=m(" Go Back "),b=m(" Go Back "),k=m(" Next "),_=m(" Save Changes ");var g=o({expose:[],props:{buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1}},emits:["changeStep","saveData"],setup(o,{emit:g}){const h=u();return(u,g)=>{const j=e,C=t,x=a,w=s;return o.isLoading?(l(),i(j,{key:0,height:"500px"})):(l(),i(w,{key:1},{"header-left":r((()=>[n("div",null,[n("h1",v,c(o.titles.title),1),n("p",null,c(o.titles.subtitle),1)])])),"header-right":r((()=>[n(x,{size:"small",active:u.isLoaderActive},{default:r((()=>[o.buttons.includes("back")?(l(),i(C,{key:0,onClick:g[1]||(g[1]=e=>p(h).back()),class:"mr-3"},{default:r((()=>[y])),_:1})):d("",!0),o.buttons.includes("prev")?(l(),i(C,{key:1,onClick:g[2]||(g[2]=e=>u.$emit("changeStep",o.step-1)),class:"mr-3"},{default:r((()=>[b])),_:1})):d("",!0),o.buttons.includes("next")?(l(),i(C,{key:2,color:"primary",onClick:g[3]||(g[3]=e=>u.$emit("changeStep",o.step+1))},{default:r((()=>[k])),_:1})):d("",!0),o.buttons.includes("save")?(l(),i(C,{key:3,color:"primary",onClick:g[4]||(g[4]=e=>u.$emit("saveData"))},{default:r((()=>[_])),_:1})):d("",!0),o.buttons.includes("new")?(l(),i(C,{key:4,to:o.newRoute.to,color:"primary"},{default:r((()=>[m(c(o.newRoute.title),1)])),_:1},8,["to"])):d("",!0)])),_:1},8,["active"])])),content:r((()=>[f(u.$slots,"default")])),_:1}))}}});export{g as _};
