import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as e,a}from"./pdf_icon.e9ac200a.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{d as l,r,i,j as n,k as u,l as c,F as o,H as f,I as m,G as p}from"./vendor.b96c0b62.js";import{b as d}from"./index.f75fb3ff.js";import{i as v}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},b=c("img",{src:e,width:"40",alt:""},null,-1),S=p(" View PDF "),h={key:1,class:"text-center ml-6"},x=c("img",{src:e,width:"40",alt:""},null,-1),j=p(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=c("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=l({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:l}){const p=r(!1),F=r(null),V=async t=>{F.value=t,p.value=!0,l("onSign",t)},$=()=>{V(v)};return(l,r)=>{const v=t,C=a,B=s;return i(),n(B,null,{default:u((()=>[c("div",g,[c("div",y,[e.contract?(i(),n("div",_,[c("a",{target:"_blank",href:`${o(d)}${e.urlContract}`},[b,c("p",null,f(e.contract),1),c(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[S])),_:1})],8,["href"])])):m("v-if",!0),e.waiver?(i(),n("div",h,[c("a",{target:"_blank",href:`${o(d)}${e.urlWaiver}`},[x,c("p",null,f(e.waiver),1),c(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[j])),_:1})],8,["href"])])):m("v-if",!0)]),e.isSign?(i(),n(C,{key:0,onSinFirmar:$,onOnSignYes:V})):m("v-if",!0),p.value?(i(),n("div",w,[k,c("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):m("v-if",!0)])])),_:1})}}});export{F as _};
