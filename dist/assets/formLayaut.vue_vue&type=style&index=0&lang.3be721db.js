import{_ as e}from"./V-Placeload.9c5aed6e.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.e3659163.js";import{_ as s}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.7e9f57de.js";import{d as i,aa as l,i as o,j as u,k as n,l as d,H as r,F as c,I as p,G as b,L as f}from"./vendor.435948fe.js";const v={class:"title is-4 mb-0"},y=b(" Go Back "),m=b(" Go Back "),k=b(" Next "),_=b(" Save Changes ");var g=i({expose:[],props:{buttons:{type:Array,default:["save","back"]},buttonsDisabled:{type:Array,default:[]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1},isLoaderActive:{type:Boolean,default:!1},isCard:{type:Boolean,default:!0}},emits:["changeStep","saveData"],setup(i,{emit:g}){const h=l();return(l,g)=>{const C=e,j=t,x=a,L=s;return i.isLoading?(o(),u(C,{key:0,height:"500px"})):(o(),u(L,{key:1,style:i.isCard?{}:{backgroundColor:"transparent",border:"0px"}},{"header-left":n((()=>[d("div",null,[d("h1",v,r(i.titles.title),1),d("p",null,r(i.titles.subtitle),1)])])),"header-right":n((()=>[d(x,{size:"small",active:i.isLoaderActive},{default:n((()=>[i.buttons.includes("back")?(o(),u(j,{key:0,disabled:!!i.buttonsDisabled.includes("back"),onClick:g[1]||(g[1]=e=>c(h).back()),class:"mr-3"},{default:n((()=>[y])),_:1},8,["disabled"])):p("v-if",!0),i.buttons.includes("prev")?(o(),u(j,{key:1,disabled:!!i.buttonsDisabled.includes("prev"),onClick:g[2]||(g[2]=e=>l.$emit("changeStep",i.step-1)),class:"mr-3"},{default:n((()=>[m])),_:1},8,["disabled"])):p("v-if",!0),i.buttons.includes("next")?(o(),u(j,{key:2,disabled:!!i.buttonsDisabled.includes("next"),color:"primary",onClick:g[3]||(g[3]=e=>l.$emit("changeStep",i.step+1))},{default:n((()=>[k])),_:1},8,["disabled"])):p("v-if",!0),i.buttons.includes("save")?(o(),u(j,{key:3,color:"primary",onClick:g[4]||(g[4]=e=>l.$emit("saveData"))},{default:n((()=>[_])),_:1})):p("v-if",!0),i.buttons.includes("new")?(o(),u(j,{key:4,to:i.newRoute.to,color:"primary"},{default:n((()=>[b(r(i.newRoute.title),1)])),_:1},8,["to"])):p("v-if",!0)])),_:1},8,["active"])])),content:n((()=>[f(l.$slots,"default",{},(()=>[p(' <inputsLayaut\n          :inputs-step="inputs"\n        /> ')]))])),_:1},8,["style"]))}}});export{g as _};
