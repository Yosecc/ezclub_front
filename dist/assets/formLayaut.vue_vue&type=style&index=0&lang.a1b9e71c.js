import{_ as e}from"./V-Placeload.e8ccb55e.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.86e7bf66.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.1e63c2f8.js";import{_ as s}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.a264e612.js";import{d as i,a4 as o,r as u,o as l,i as n,j as r,k as p,F as c,D as d,G as f,E as m,K as v}from"./vendor.0a671356.js";const y={class:"title is-4 mb-0"},b=m(" Go Back "),k=m(" Go Back "),_=m(" Next "),g=m(" Save Changes ");var h=i({expose:[],props:{buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1}},emits:["changeStep","saveData"],setup(i,{emit:h}){const j=o(),C=u(!1);return(o,u)=>{const h=e,x=t,w=a,B=s;return i.isLoading?(l(),n(h,{key:0,height:"500px"})):(l(),n(B,{key:1},{"header-left":r((()=>[p("div",null,[p("h1",y,c(i.titles.title),1),p("p",null,c(i.titles.subtitle),1)])])),"header-right":r((()=>[p(w,{size:"small",active:C.value},{default:r((()=>[i.buttons.includes("back")?(l(),n(x,{key:0,onClick:u[1]||(u[1]=e=>d(j).back()),class:"mr-3"},{default:r((()=>[b])),_:1})):f("v-if",!0),i.buttons.includes("prev")?(l(),n(x,{key:1,onClick:u[2]||(u[2]=e=>o.$emit("changeStep",i.step-1)),class:"mr-3"},{default:r((()=>[k])),_:1})):f("v-if",!0),i.buttons.includes("next")?(l(),n(x,{key:2,color:"primary",onClick:u[3]||(u[3]=e=>o.$emit("changeStep",i.step+1))},{default:r((()=>[_])),_:1})):f("v-if",!0),i.buttons.includes("save")?(l(),n(x,{key:3,color:"primary",onClick:u[4]||(u[4]=e=>o.$emit("saveData"))},{default:r((()=>[g])),_:1})):f("v-if",!0),i.buttons.includes("new")?(l(),n(x,{key:4,to:i.newRoute.to,color:"primary"},{default:r((()=>[m(c(i.newRoute.title),1)])),_:1},8,["to"])):f("v-if",!0)])),_:1},8,["active"])])),content:r((()=>[v(o.$slots,"default",{},(()=>[f(' <inputsLayaut\n          :inputs-step="inputs"\n        /> ')]))])),_:1}))}}});export{h as _};
