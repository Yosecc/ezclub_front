import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.50bb1f04.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d27a24ca.js";import{d as r,b as o,o as i,h as n,D as u,j as p,k as l,K as c,E as d,H as m}from"./vendor.e3a29b40.js";import{i as f,c as v,s as b}from"./Products.1a2ef932.js";import{v as y,p as _,n as g}from"./Mixin.788265f9.js";import{a as h}from"./index.e69f2eb2.js";const j={class:"title is-4 mb-0"},x=m(" Go Back "),k=m(" Save Changes "),A={class:"column mx-auto"},C={class:"p-6"},E=l("h1",{class:"title is-5 mb-0"},"Product Picture",-1),w={class:"d-flex justify-content-center"},P={class:"text-center"};var V=r({expose:[],props:{type:{type:String,default:"create"}},setup(r){const m=r,V=u(),B=o((()=>"create"==m.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),D=o((()=>`${h.value}storage/${y(f.value,"photo")}`)),S=()=>{const t=_(f.value),e=new FormData;for(var s in t)"locations"==s?t[s].forEach((t=>{e.append("locations[]",t)})):e.append(s,t[s]);console.log(...e),"edit"==m.type&&v(e).then((t=>{g.success(t.data.message)})),"create"==m.type&&b(e).then((t=>{g.success(t.data.message)}))};return(r,o)=>{const u=t,m=e,v=s,b=a;return i(),n(b,null,{"header-left":p((()=>[l("div",null,[l("h1",j,c(d(B).title),1),l("p",null,c(d(B).subtitle),1)])])),"header-right":p((()=>[l(u,{onClick:o[1]||(o[1]=t=>d(V).back()),class:"mr-3"},{default:p((()=>[x])),_:1}),l(u,{onClick:S,color:"primary"},{default:p((()=>[k])),_:1})])),content:p((()=>[l("div",A,[l("div",C,[E,l("div",w,[l("div",P,[l(m,{picture:d(D),class:"mb-4",size:"xl"},null,8,["picture"]),l(v,{"inputs-step":r.input_image},null,8,["inputs-step"])])])]),l(v,{"inputs-step":d(f)},null,8,["inputs-step"])])])),_:1})}}});export{V as _};
