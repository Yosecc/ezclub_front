import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.aa32f7eb.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.86bc661e.js";import{_ as s}from"./Companies.347b8efe.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.de315ae9.js";import{d as r,b as o,o as n,h as c,B as i,j as p,k as u,J as l,D as d,G as m}from"./vendor.15a9fac9.js";import{i as f,c as v,s as b}from"./Products.bc339715.js";import{v as h,p as y,n as _,c as g}from"./ActivityPanel.vue_vue&type=style&index=0&lang.0d03e53b.js";import{a as j}from"./index.dff6e6d0.js";const x={class:"title is-4 mb-0"},k=m(" Go Back "),$=m(" Save Changes "),A={class:"column mx-auto"},C={class:"p-6"},E=u("h1",{class:"title is-5 mb-0"},"Product Picture",-1),P={class:"d-flex justify-content-center"},w={class:"text-center"};var B=r({expose:[],props:{type:{type:String,default:"create"}},setup(r){const m=r,B=i(),V=o((()=>"create"==m.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),D=o((()=>`${j.value}storage/${h(f.value,"photo")}`)),G=()=>{const e=y(f.value),t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==m.type&&v(t).then((e=>{_.success(e.data.message),g(f.value),B.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{_.error(`${t}: ${e}`)}))})),"create"==m.type&&b(t).then((e=>{_.success(e.data.message),g(f.value),B.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{_.error(`${t}: ${e}`)}))}))};return(r,o)=>{const i=e,m=t,v=s,b=a;return n(),c(b,null,{"header-left":p((()=>[u("div",null,[u("h1",x,l(d(V).title),1),u("p",null,l(d(V).subtitle),1)])])),"header-right":p((()=>[u(i,{onClick:o[1]||(o[1]=e=>d(B).back()),class:"mr-3"},{default:p((()=>[k])),_:1}),u(i,{onClick:G,color:"primary"},{default:p((()=>[$])),_:1})])),content:p((()=>[u("div",A,[u("div",C,[E,u("div",P,[u("div",w,[u(m,{picture:d(D),class:"mb-4",size:"xl"},null,8,["picture"]),u(v,{"inputs-step":r.input_image},null,8,["inputs-step"])])])]),u(v,{"inputs-step":d(f)},null,8,["inputs-step"])])])),_:1})}}});export{B as _};
