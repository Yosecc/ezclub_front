import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{_ as e,a as s}from"./pdf_icon.e835dc0f.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.11c3a205.js";import{b as l}from"./index.ccf6e592.js";import{i as r}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67d0f0f9.js";import{d as n,r as i,o as u,h as c,j as o,k as m,E as p,G as d,K as f,F as v}from"./vendor.41bfc188.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=m("img",{src:e,width:"40",alt:""},null,-1),h=v(" View PDF "),b={key:1,class:"text-center ml-6"},x=m("img",{src:e,width:"40",alt:""},null,-1),j=v(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=m("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=n({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:n}){const v=i(!1),F=i(null),V=async t=>{F.value=t,v.value=!0,n("onSign",t)},$=()=>{V(r)};return(r,n)=>{const i=t,C=s,B=a;return u(),c(B,null,{default:o((()=>[m("div",g,[m("div",y,[e.contract?(u(),c("div",_,[m("a",{target:"_blank",href:`${p(l)}${e.urlContract}`},[S,m("p",null,d(e.contract),1),m(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[h])),_:1})],8,["href"])])):f("",!0),e.waiver?(u(),c("div",b,[m("a",{target:"_blank",href:`${p(l)}${e.urlWaiver}`},[x,m("p",null,d(e.waiver),1),m(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[j])),_:1})],8,["href"])])):f("",!0)]),e.isSign?(u(),c(C,{key:0,onSinFirmar:$,onOnSignYes:V})):f("",!0),v.value?(u(),c("div",w,[k,m("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});export{F as _};
