import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as s}from"./V-Control.b8a16a92.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as l}from"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import{d as a,i as n,j as o,F as i,k as c,l as u,H as r,G as d,S as f,U as p,W as m,_ as v,Q as y,I as b}from"./vendor.84e48f7c.js";import{m as _}from"./index.910b1fa7.js";import{o as x,t as j,a as C,b as k,d as g,p as V}from"./Store.8b37302e.js";const h={class:"d-flex mb-4 justify-content-between"},w={class:"title is-5"},B=d(" Total: "),E={class:"title is-5"},F=d(" Cash Total: "),P={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},$=u("p",{class:"title is-5 mb-4"},"Change Back:",-1),z={class:"title is-3 mb-0"},S={class:"d-flex justify-content-center flex-wrap mb-4"},T=u("div",{class:"w-100"},null,-1),U={class:"d-flex justify-content-center"},G=d("Reset"),H=d("Confirm"),I=d("Confirm.");var M=a({expose:[],props:{isEvent:{type:Boolean,default:!1}},emits:["onPayment"],setup:(a,{emit:M})=>(M,Q)=>{const R=e,W=s,q=t,A=l;return n(),o(A,{title:"",open:i(x),actions:"center",onClose:Q[5]||(Q[5]=e=>x.value=!1)},{content:c((()=>[u("div",h,[u("p",w,[B,u("b",null,r(i(_)(i(j))),1)]),u("p",E,[F,u("b",null,r(i(_)(i(C))),1)])]),u("div",P,[$,u("p",z,[u("b",null,r(i(_)(i(k))),1)])]),u("div",S,[u(R,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:Q[1]||(Q[1]=e=>C.value=i(j))},{default:c((()=>[d(" Full Payment "+r(i(_)(i(j))),1)])),_:1}),T,(n(),o(f,null,p([5,10,20,50,100],((e,s)=>u(R,{key:`calculato-${s}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:s=>i(g)(e)},{default:c((()=>[d(" $"+r(e),1)])),_:2},1032,["onClick"]))),64))]),u("div",U,[u(q,null,{default:c((()=>[u(W,null,{default:c((()=>[m(u("input",{"onUpdate:modelValue":Q[2]||(Q[2]=e=>y(C)?C.value=e:null),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[v,i(C)]])])),_:1})])),_:1})])])),action:c((()=>[u(R,{onClick:Q[3]||(Q[3]=e=>C.value=0),class:"d-flex justify-content-center",raised:""},{default:c((()=>[G])),_:1}),a.isEvent?b("v-if",!0):(n(),o(R,{key:0,color:"success",onClick:i(V),disabled:i(j)>i(C),class:"d-flex justify-content-center",raised:""},{default:c((()=>[H])),_:1},8,["onClick","disabled"])),a.isEvent?(n(),o(R,{key:1,color:"success",onClick:Q[4]||(Q[4]=e=>M.$emit("onPayment")),disabled:i(j)>i(C),class:"d-flex justify-content-center",raised:""},{default:c((()=>[I])),_:1},8,["disabled"])):b("v-if",!0)])),_:1},8,["open"])}});export{M as _};
