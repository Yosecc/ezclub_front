import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as e,a as s}from"./pdf_icon.f89d27c8.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{d as l,r,i,j as n,k as u,l as c,F as o,H as m,I as p,G as d}from"./vendor.b96c0b62.js";import{b as f}from"./index.767fa190.js";import{i as v}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=c("img",{src:e,width:"40",alt:""},null,-1),b=d(" View PDF "),h={key:1,class:"text-center ml-6"},x=c("img",{src:e,width:"40",alt:""},null,-1),j=d(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=c("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=l({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:l}){const d=r(!1),F=r(null),V=async t=>{F.value=t,d.value=!0,l("onSign",t)},$=()=>{V(v)};return(l,r)=>{const v=t,C=s,B=a;return i(),n(B,null,{default:u((()=>[c("div",g,[c("div",y,[e.contract?(i(),n("div",_,[c("a",{target:"_blank",href:`${o(f)}${e.urlContract}`},[S,c("p",null,m(e.contract),1),c(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[b])),_:1})],8,["href"])])):p("v-if",!0),e.waiver?(i(),n("div",h,[c("a",{target:"_blank",href:`${o(f)}${e.urlWaiver}`},[x,c("p",null,m(e.waiver),1),c(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[j])),_:1})],8,["href"])])):p("v-if",!0)]),e.isSign?(i(),n(C,{key:0,onSinFirmar:$,onOnSignYes:V})):p("v-if",!0),d.value?(i(),n("div",w,[k,c("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):p("v-if",!0)])])),_:1})}}});export{F as _};
