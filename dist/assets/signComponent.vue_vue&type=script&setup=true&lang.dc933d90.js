import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import{_ as e,a}from"./pdf_icon.3322afd7.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.1618d39e.js";import{d as l,r,o as i,i as n,j as u,k as o,D as c,F as m,G as p,E as d}from"./vendor.512b7acb.js";import{b as f}from"./index.fa2868cb.js";import{i as v}from"./inputsLayaut.vue_vue&type=style&index=0&lang.b5a3a3a2.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=o("img",{src:e,width:"40",alt:""},null,-1),b=d(" View PDF "),h={key:1,class:"text-center ml-6"},x=o("img",{src:e,width:"40",alt:""},null,-1),j=d(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=o("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=l({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:l}){const d=r(!1),F=r(null),V=async t=>{F.value=t,d.value=!0,l("onSign",t)},$=()=>{V(v)};return(l,r)=>{const v=t,C=a,D=s;return i(),n(D,null,{default:u((()=>[o("div",g,[o("div",y,[e.contract?(i(),n("div",_,[o("a",{target:"_blank",href:`${c(f)}${e.urlContract}`},[S,o("p",null,m(e.contract),1),o(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[b])),_:1})],8,["href"])])):p("v-if",!0),e.waiver?(i(),n("div",h,[o("a",{target:"_blank",href:`${c(f)}${e.urlWaiver}`},[x,o("p",null,m(e.waiver),1),o(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[j])),_:1})],8,["href"])])):p("v-if",!0)]),e.isSign?(i(),n(C,{key:0,onSinFirmar:$,onOnSignYes:V})):p("v-if",!0),d.value?(i(),n("div",w,[k,o("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):p("v-if",!0)])])),_:1})}}});export{F as _};
