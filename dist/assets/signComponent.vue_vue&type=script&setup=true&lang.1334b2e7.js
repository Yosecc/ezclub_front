import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.c30bd7ac.js";import{_ as e,a}from"./pdf_icon.d35eaac2.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.4157a476.js";import{b as l}from"./index.237f2b8c.js";import{i as r}from"./inputsLayaut.vue_vue&type=style&index=0&lang.0d5d75ea.js";import{d as n,r as i,o as u,h as c,j as o,k as d,E as m,G as p,K as f,F as v}from"./vendor.f713277a.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=d("img",{src:e,width:"40",alt:""},null,-1),h=v(" View PDF "),x={key:1,class:"text-center ml-6"},b=d("img",{src:e,width:"40",alt:""},null,-1),j=v(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=d("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=n({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:n}){const v=i(!1),F=i(null),V=async t=>{F.value=t,v.value=!0,n("onSign",t)},$=()=>{V(r)};return(r,n)=>{const i=t,C=a,B=s;return u(),c(B,null,{default:o((()=>[d("div",g,[d("div",y,[e.contract?(u(),c("div",_,[d("a",{target:"_blank",href:`${m(l)}${e.urlContract}`},[S,d("p",null,p(e.contract),1),d(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[h])),_:1})],8,["href"])])):f("",!0),e.waiver?(u(),c("div",x,[d("a",{target:"_blank",href:`${m(l)}${e.urlWaiver}`},[b,d("p",null,p(e.waiver),1),d(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[j])),_:1})],8,["href"])])):f("",!0)]),e.isSign?(u(),c(C,{key:0,onSinFirmar:$,onOnSignYes:V})):f("",!0),v.value?(u(),c("div",w,[k,d("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});export{F as _};
