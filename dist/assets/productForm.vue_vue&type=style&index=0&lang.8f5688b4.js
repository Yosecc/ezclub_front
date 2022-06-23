import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.f850d095.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.ace90716.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.ec9ca61e.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.7f9fb723.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.1a6ab0fe.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.a76a96a0.js";import{d as o,a7 as c,b as i,o as u,i as n,k as p,j as d,H as f,G as v,E as m,S as h,U as y,A as b,F as _}from"./vendor.d343baf9.js";import{i as g,c as j,d as k,e as w,f as $,s as x}from"./Products.3214bf9c.js";import{b as A,v as C,g as E,n as P,p as V,e as D}from"./index.c9faec89.js";const S={class:"title is-4 mb-0"},Y=_(" Go Back "),B=_(" Save Changes "),F={class:"columns is-multiline mx-auto"},G={class:"p-6 column is-12"},M=p("h1",{class:"title is-5 mb-0"},"Product Picture",-1),T={class:"d-flex justify-content-center"},U={class:"text-center"},q={class:"column is-12"},z=p("h1",{class:"title is-5"},"Prices",-1),H={class:"table is-hoverable is-fullwidth"},L=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Price"),p("th",{scope:"col"},"Create Date"),p("th",{scope:"col"},"User")])],-1),I={class:"w-100 justify-content-center d-flex"},J=_(" Add Price ");var K=o({expose:[],props:{type:{type:String,default:"create"}},setup(o){const _=o,K=c(),N=i((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),O=i((()=>`${A.value}storage/${C(g.value,"photo")}`)),Q=()=>{""!=E(j.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(E(j.value,"price").model).then((e=>{P.success("success save"),window.location.reload()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))})):P.error("Price is required")},R=()=>{let e=V(g.value);e.price=E(j.value,"price").model;const t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==_.type&&$(t).then((e=>{P.success(e.data.message),D(g.value),K.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))})),"create"==_.type&&x(t).then((e=>{P.success(e.data.message),D(g.value),K.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))}))};return(c,i)=>{const _=e,w=t,$=s,x=a,A=r,C=l;return u(),n("div",null,[p(x,null,{"header-left":d((()=>[p("div",null,[p("h1",S,v(m(N).title),1),p("p",null,v(m(N).subtitle),1)])])),"header-right":d((()=>[p(_,{onClick:i[1]||(i[1]=e=>m(K).back()),class:"mr-3"},{default:d((()=>[Y])),_:1}),p(_,{onClick:R,color:"primary"},{default:d((()=>[B])),_:1})])),content:d((()=>[p("div",F,[p("div",G,[M,p("div",T,[p("div",U,[p(w,{picture:m(O),class:"mb-4",size:"xl"},null,8,["picture"]),p($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),p("div",q,[p($,{"inputs-step":m(g)},null,8,["inputs-step"]),"create"==o.type?(u(),n($,{key:0,"inputs-step":m(j)},null,8,["inputs-step"])):f("v-if",!0)])])])),_:1}),"edit"==o.type?(u(),n(C,{key:0,class:"mt-4"},{default:d((()=>[z,p("table",H,[L,p("tbody",null,[(u(!0),n(h,null,y(m(k).prices,((e,t)=>(u(),n("tr",{key:`price-${t}`},[p("td",null,[p(A,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),p("td",null,"$"+v(e.price),1),p("td",null,v(m(b)(e.created_at).format("MM-DD-YYYY")),1),p("td",null,v(e.user.name),1)])))),128))])]),p("div",I,[p($,{"inputs-step":m(j)},null,8,["inputs-step"]),p(_,{color:"info",onClick:Q,class:"mt-5 ml-3"},{default:d((()=>[J])),_:1})])])),_:1})):f("v-if",!0)])}}});export{K as _};
