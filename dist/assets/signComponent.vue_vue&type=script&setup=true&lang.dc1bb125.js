import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as t,a}from"./pdf_icon.4e54e04e.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.e7b64613.js";import{b as l}from"./index.b8e520c6.js";import{i as r}from"./inputsLayaut.vue_vue&type=style&index=0&lang.87a4afde.js";import{d as n,r as i,o as u,h as o,j as c,k as m,D as p,F as d,J as f,E as v}from"./vendor.7d033f41.js";const g={class:"columns is-multiline"},y={class:"d-flex justify-content-center column is-12 mb-4"},_={key:0,class:"text-center mr-6"},S=m("img",{src:t,width:"40",alt:""},null,-1),h=v(" View PDF "),b={key:1,class:"text-center ml-6"},x=m("img",{src:t,width:"40",alt:""},null,-1),j=v(" View PDF "),w={key:1,class:"text-center mb-4 mt-5 mx-auto"},k=m("p",{class:"mb-4 title is-5"},"Saved signature",-1);var F=n({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(t,{emit:n}){const v=i(!1),F=i(null),V=async e=>{F.value=e,v.value=!0,n("onSign",e)},$=()=>{V(r)};return(r,n)=>{const i=e,C=a,D=s;return u(),o(D,null,{default:c((()=>[m("div",g,[m("div",y,[t.contract?(u(),o("div",_,[m("a",{target:"_blank",href:`${p(l)}${t.urlContract}`},[S,m("p",null,d(t.contract),1),m(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:c((()=>[h])),_:1})],8,["href"])])):f("",!0),t.waiver?(u(),o("div",b,[m("a",{target:"_blank",href:`${p(l)}${t.urlWaiver}`},[x,m("p",null,d(t.waiver),1),m(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:c((()=>[j])),_:1})],8,["href"])])):f("",!0)]),t.isSign?(u(),o(C,{key:0,onSinFirmar:$,onOnSignYes:V})):f("",!0),v.value?(u(),o("div",w,[k,m("img",{src:F.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});export{F as _};