import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.386dddea.js";import{_ as e,a as s}from"./pdf_icon.bbc04d2c.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.69c4989e.js";import{b as l}from"./index.e42e1764.js";import{i as r}from"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import{d as n,r as i,o as u,h as c,j as o,k as d,E as m,G as p,K as v,F as f}from"./vendor.5767c02e.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=d("img",{src:e,width:"40",alt:""},null,-1),h=f(" View PDF "),b={key:1,class:"text-center ml-6"},x=d("img",{src:e,width:"40",alt:""},null,-1),j=f(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=d("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=n({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(e,{emit:n}){const f=i(!1),F=i(null),V=async t=>{F.value=t,f.value=!0,n("onSign",t)},$=()=>{V(r)};return(r,n)=>{const i=t,C=s,B=a;return u(),c(B,null,{default:o((()=>[d("div",g,[d("div",y,[e.contract?(u(),c("div",_,[d("a",{target:"_blank",href:`${m(l)}${e.urlContract}`},[S,d("p",null,p(e.contract),1),d(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[h])),_:1})],8,["href"])])):v("",!0),e.waiver?(u(),c("div",b,[d("a",{target:"_blank",href:`${m(l)}${e.urlWaiver}`},[x,d("p",null,p(e.waiver),1),d(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:o((()=>[j])),_:1})],8,["href"])])):v("",!0)]),e.isSign?(u(),c(C,{key:0,onSinFirmar:$,onOnSignYes:V})):v("",!0),f.value?(u(),c("div",w,[k,d("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):v("",!0)])])),_:1})}}});export{F as _};
