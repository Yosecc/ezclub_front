import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.50bb1f04.js";import{_ as e}from"./formLayaut.vue_vue&type=style&index=0&lang.183ee30b.js";import{d as s,b as a,o as r,h as i,E as n,D as l,j as u,k as o,r as p,K as d,L as f,H as c}from"./vendor.e3a29b40.js";import{i as m,b as v,d as y,e as b}from"./Staffs.9ddb44ec.js";import{_ as g}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{_,i as S}from"./image_default.66ef4d3e.js";import{_ as w}from"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import{_ as h}from"./pdf_icon.0444a540.js";import{a as x}from"./index.e69f2eb2.js";import{n as j}from"./Mixin.788265f9.js";var k=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},emits:["changeStep","saveData"],setup(s,{emit:p}){const d=s;l();const f=a((()=>"create"==d.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"}));return(s,a)=>{const l=t,p=e;return r(),i(p,{buttons:d.buttons,step:d.step,titles:n(f),onSaveData:a[1]||(a[1]=t=>s.$emit("saveData"))},{default:u((()=>[o(l,{"inputs-step":n(m)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),A=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const p=s;l();const d=a((()=>"create"==p.type?{title:"Add a new staff",subtitle:"Add permitions and roles"}:{title:"Edit staff",subtitle:"Edit permitions and roles"}));return(s,a)=>{const l=t,f=e;return r(),i(f,{buttons:p.buttons,step:p.step,titles:n(d)},{default:u((()=>[o(l,{"inputs-step":n(v)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const $={class:"columns is-multiline"},E={class:"d-flex justify-content-center column is-12 mb-4"},D={key:0,class:"text-center mr-6"},W=o("img",{src:h,width:"40",alt:""},null,-1),V=c(" View PDF "),C={key:1,class:"text-center ml-6"},F=o("img",{src:h,width:"40",alt:""},null,-1),L=c(" View PDF "),N={key:1,class:"text-center mb-4 mt-5 mx-auto"},B=o("p",{class:"mb-4 title is-5"},"Saved signature",-1);var O=s({expose:[],props:{waiver:{type:String,default:null},urlWaiver:{type:String,default:null},contract:{type:String,default:null},urlContract:{type:String,default:null},isSign:{type:Boolean,default:!0}},emits:["onSign"],setup(t,{emit:e}){const s=p(!1),a=p(null),l=async t=>{a.value=t,s.value=!0,e("onSign",t)},c=()=>{l(S)};return(e,p)=>{const m=g,v=_,y=w;return r(),i(y,{radius:"small"},{default:u((()=>[o("div",$,[o("div",E,[t.contract?(r(),i("div",D,[o("a",{target:"_blank",href:`${n(x)}${t.urlContract}`},[W,o("p",null,d(t.contract),1),o(m,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[V])),_:1})],8,["href"])])):f("",!0),t.waiver?(r(),i("div",C,[o("a",{target:"_blank",href:`${n(x)}${t.urlWaiver}`},[F,o("p",null,d(t.waiver),1),o(m,{color:"success",outlined:"",class:"mt-4 py-1"},{default:u((()=>[L])),_:1})],8,["href"])])):f("",!0)]),t.isSign?(r(),i(v,{key:0,onSinFirmar:c,onOnSignYes:l})):f("",!0),s.value?(r(),i("div",N,[B,o("img",{src:a.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}}),P=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(t){const s=t;p([{name:"Waiver_010221.pdf",url:""}]);const l=a((()=>"create"==s.type?{title:"Add a new staff",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),o=t=>{b(t,y.value.id).then((t=>{if(t.data.status)j.success("Sign Success");else for(var e in j.error(t.data.mensaje),t.data.errores)t.data.errores[e].forEach((t=>{j.error(`${e} : ${t}`)}))})).catch((t=>{}))};return(t,a)=>{const p=O,d=e;return r(),i(d,{buttons:s.buttons,step:s.step,titles:n(l)},{default:u((()=>[n(y)?(r(),i(p,{key:0,onOnSign:o,"is-sign":"create"==s.type,waiver:`waiver_${n(y).id}.pdf`,"url-waiver":`staffs/generateWeiver/${n(y).id}`},null,8,["is-sign","waiver","url-waiver"])):f("",!0)])),_:1},8,["buttons","step","titles"])}}});export{k as _,A as a,P as b};
