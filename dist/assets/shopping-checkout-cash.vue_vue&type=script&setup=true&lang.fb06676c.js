import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.9e06e290.js";import{_ as s}from"./V-Control.d3abcde5.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.42a65dca.js";import{_ as l}from"./V-Modal.vue_vue&type=script&setup=true&lang.d3c32992.js";import{d as a,o as n,h as o,E as c,j as i,k as u,G as d,F as r,R as p,S as f,W as m,_ as b,Q as v,K as y}from"./vendor.7aabbf00.js";import{m as _}from"./index.80cb2235.js";import{o as x,t as j,a as C,b as k,d as g,p as h}from"./Store.b83c543c.js";const V={class:"d-flex mb-4 justify-content-between"},E={class:"title is-5"},w=r(" Total: "),B={class:"title is-5"},F=r(" Cash Total: "),P={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},$=u("p",{class:"title is-5 mb-4"},"Change Back:",-1),z={class:"title is-3 mb-0"},R={class:"d-flex justify-content-center flex-wrap mb-4"},S=u("div",{class:"w-100"},null,-1),T={class:"d-flex justify-content-center"},G=r("Reset"),K=r("Confirm"),M=r("Confirm.");var Q=a({expose:[],props:{isEvent:{type:Boolean,default:!1}},emits:["onPayment"],setup:(a,{emit:Q})=>(Q,U)=>{const W=e,q=s,A=t,D=l;return n(),o(D,{title:"",open:c(x),actions:"center",onClose:U[5]||(U[5]=e=>x.value=!1)},{content:i((()=>[u("div",V,[u("p",E,[w,u("b",null,d(c(_)(c(j))),1)]),u("p",B,[F,u("b",null,d(c(_)(c(C))),1)])]),u("div",P,[$,u("p",z,[u("b",null,d(c(_)(c(k))),1)])]),u("div",R,[u(W,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:U[1]||(U[1]=e=>C.value=c(j))},{default:i((()=>[r(" Full Payment "+d(c(_)(c(j))),1)])),_:1}),S,(n(),o(p,null,f([5,10,20,50,100],((e,s)=>u(W,{key:`calculato-${s}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:s=>c(g)(e)},{default:i((()=>[r(" $"+d(e),1)])),_:2},1032,["onClick"]))),64))]),u("div",T,[u(A,null,{default:i((()=>[u(q,null,{default:i((()=>[m(u("input",{"onUpdate:modelValue":U[2]||(U[2]=e=>v(C)?C.value=e:null),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[b,c(C)]])])),_:1})])),_:1})])])),action:i((()=>[u(W,{onClick:U[3]||(U[3]=e=>C.value=0),class:"d-flex justify-content-center",raised:""},{default:i((()=>[G])),_:1}),a.isEvent?y("",!0):(n(),o(W,{key:0,color:"success",onClick:c(h),disabled:c(j)>c(C),class:"d-flex justify-content-center",raised:""},{default:i((()=>[K])),_:1},8,["onClick","disabled"])),a.isEvent?(n(),o(W,{key:1,color:"success",onClick:U[4]||(U[4]=e=>Q.$emit("onPayment")),disabled:c(j)>c(C),class:"d-flex justify-content-center",raised:""},{default:i((()=>[M])),_:1},8,["disabled"])):y("",!0)])),_:1},8,["open"])}});export{Q as _};
