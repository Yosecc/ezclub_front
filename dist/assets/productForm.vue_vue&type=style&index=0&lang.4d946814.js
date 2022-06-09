import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.06155cf7.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.0dcd607f.js";import{d as o,b as c,o as i,h as u,k as n,j as p,K as d,a6 as m,G as v,E as f,R as h,S as y,A as b,F as _}from"./vendor.19da945b.js";import{i as g,c as j,d as k,e as w,f as $,s as x}from"./Products.6f36cb51.js";import{b as A,v as C,g as E,n as P,p as V,e as D}from"./index.7b1c874f.js";const S={class:"title is-4 mb-0"},Y=_(" Go Back "),B=_(" Save Changes "),F={class:"columns is-multiline mx-auto"},G={class:"p-6 column is-12"},M=n("h1",{class:"title is-5 mb-0"},"Product Picture",-1),T={class:"d-flex justify-content-center"},q={class:"text-center"},z={class:"column is-12"},K=n("h1",{class:"title is-5"},"Prices",-1),L={class:"table is-hoverable is-fullwidth"},R=n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Status"),n("th",{scope:"col"},"Price"),n("th",{scope:"col"},"Create Date"),n("th",{scope:"col"},"User")])],-1),U={class:"w-100 justify-content-center d-flex"},H=_(" Add Price ");var I=o({expose:[],props:{type:{type:String,default:"create"}},setup(o){const _=o,I=m(),J=c((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),N=c((()=>`${A.value}storage/${C(g.value,"photo")}`)),O=()=>{""!=E(j.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(E(j.value,"price").model).then((e=>{P.success("success save"),window.location.reload()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))})):P.error("Price is required")},Q=()=>{let e=V(g.value);e.price=E(j.value,"price").model;const t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==_.type&&$(t).then((e=>{P.success(e.data.message),D(g.value),I.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))})),"create"==_.type&&x(t).then((e=>{P.success(e.data.message),D(g.value),I.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{P.error(`${t}: ${e}`)}))}))};return(c,m)=>{const _=e,w=t,$=s,x=a,A=r,C=l;return i(),u("div",null,[n(x,null,{"header-left":p((()=>[n("div",null,[n("h1",S,v(f(J).title),1),n("p",null,v(f(J).subtitle),1)])])),"header-right":p((()=>[n(_,{onClick:m[1]||(m[1]=e=>f(I).back()),class:"mr-3"},{default:p((()=>[Y])),_:1}),n(_,{onClick:Q,color:"primary"},{default:p((()=>[B])),_:1})])),content:p((()=>[n("div",F,[n("div",G,[M,n("div",T,[n("div",q,[n(w,{picture:f(N),class:"mb-4",size:"xl"},null,8,["picture"]),n($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),n("div",z,[n($,{"inputs-step":f(g)},null,8,["inputs-step"]),"create"==o.type?(i(),u($,{key:0,"inputs-step":f(j)},null,8,["inputs-step"])):d("",!0)])])])),_:1}),"edit"==o.type?(i(),u(C,{key:0,class:"mt-4"},{default:p((()=>[K,n("table",L,[R,n("tbody",null,[(i(!0),u(h,null,y(f(k).prices,((e,t)=>(i(),u("tr",{key:`price-${t}`},[n("td",null,[n(A,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),n("td",null,"$"+v(e.price),1),n("td",null,v(f(b)(e.created_at).format("MM-DD-YYYY")),1),n("td",null,v(e.user.name),1)])))),128))])]),n("div",U,[n($,{"inputs-step":f(j)},null,8,["inputs-step"]),n(_,{color:"info",onClick:O,class:"mt-5 ml-3"},{default:p((()=>[H])),_:1})])])),_:1})):d("",!0)])}}});export{I as _};
