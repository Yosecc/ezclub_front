import{_ as e}from"./V-Placeload.ec1fe97e.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.020cd487.js";import{d as s,o,h as l,U as n,j as u,k as i,J as r,D as c,K as p,G as d,I as m}from"./vendor.3b9a49d2.js";const y={class:"title is-4 mb-0"},f=d(" Go Back "),k=d(" Go Back "),b=d(" Next "),v=d(" Save Changes ");var _=s({expose:[],props:{buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1},titles:{type:Object,default:{title:"",subtitle:""}},newRoute:{type:Object,default:{name:"",to:""}},isLoading:{type:Boolean,default:!1}},emits:["changeStep","saveData"],setup(s,{emit:_}){const h=n();return(n,_)=>{const g=e,j=t,C=a;return s.isLoading?(o(),l(g,{key:0,height:"500px"})):(o(),l(C,{key:1},{"header-left":u((()=>[i("div",null,[i("h1",y,r(s.titles.title),1),i("p",null,r(s.titles.subtitle),1)])])),"header-right":u((()=>[s.buttons.includes("back")?(o(),l(j,{key:0,onClick:_[1]||(_[1]=e=>c(h).back()),class:"mr-3"},{default:u((()=>[f])),_:1})):p("",!0),s.buttons.includes("prev")?(o(),l(j,{key:1,onClick:_[2]||(_[2]=e=>n.$emit("changeStep",s.step-1)),class:"mr-3"},{default:u((()=>[k])),_:1})):p("",!0),s.buttons.includes("next")?(o(),l(j,{key:2,color:"primary",onClick:_[3]||(_[3]=e=>n.$emit("changeStep",s.step+1))},{default:u((()=>[b])),_:1})):p("",!0),s.buttons.includes("save")?(o(),l(j,{key:3,color:"primary",onClick:_[4]||(_[4]=e=>n.$emit("saveData"))},{default:u((()=>[v])),_:1})):p("",!0),s.buttons.includes("new")?(o(),l(j,{key:4,to:s.newRoute.to,color:"primary"},{default:u((()=>[d(r(s.newRoute.title),1)])),_:1},8,["to"])):p("",!0)])),content:u((()=>[m(n.$slots,"default")])),_:1}))}}});export{_};
