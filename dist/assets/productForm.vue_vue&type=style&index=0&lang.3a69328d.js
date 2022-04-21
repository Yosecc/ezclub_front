import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d48be775.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.07608343.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.214b6561.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.1c8c767a.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.0cc151d4.js";import{d as o,c,o as i,h as u,k as n,j as p,L as d,a2 as m,F as v,D as f,O as h,P as y,z as b,E as _}from"./vendor.6f1ebb59.js";import{i as g,c as j,d as k,e as w,f as $,s as x}from"./Products.9ea753af.js";import{b as A,v as P,g as C,n as E,p as D,c as V}from"./index.0a8619b7.js";const Y={class:"title is-4 mb-0"},S=_(" Go Back "),z=_(" Save Changes "),B={class:"columns is-multiline mx-auto"},F={class:"p-6 column is-12"},L=n("h1",{class:"title is-5 mb-0"},"Product Picture",-1),M={class:"d-flex justify-content-center"},T={class:"text-center"},q={class:"column is-12"},G=n("h1",{class:"title is-5"},"Prices",-1),O={class:"table is-hoverable is-fullwidth"},U=n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Status"),n("th",{scope:"col"},"Price"),n("th",{scope:"col"},"Create Date"),n("th",{scope:"col"},"User")])],-1),H={class:"w-100 justify-content-center d-flex"},I=_(" Add Price ");var J=o({expose:[],props:{type:{type:String,default:"create"}},setup(o){const _=o,J=m(),K=c((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),N=c((()=>`${A.value}storage/${P(g.value,"photo")}`)),Q=()=>{""!=C(j.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(C(j.value,"price").model).then((e=>{E.success("success save"),window.location.reload()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})):E.error("Price is required")},R=()=>{let e=D(g.value);e.price=C(j.value,"price").model;const t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==_.type&&$(t).then((e=>{E.success(e.data.message),V(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})),"create"==_.type&&x(t).then((e=>{E.success(e.data.message),V(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))}))};return(c,m)=>{const _=e,w=t,$=s,x=a,A=r,P=l;return i(),u("div",null,[n(x,null,{"header-left":p((()=>[n("div",null,[n("h1",Y,v(f(K).title),1),n("p",null,v(f(K).subtitle),1)])])),"header-right":p((()=>[n(_,{onClick:m[1]||(m[1]=e=>f(J).back()),class:"mr-3"},{default:p((()=>[S])),_:1}),n(_,{onClick:R,color:"primary"},{default:p((()=>[z])),_:1})])),content:p((()=>[n("div",B,[n("div",F,[L,n("div",M,[n("div",T,[n(w,{picture:f(N),class:"mb-4",size:"xl"},null,8,["picture"]),n($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),n("div",q,[n($,{"inputs-step":f(g)},null,8,["inputs-step"]),"create"==o.type?(i(),u($,{key:0,"inputs-step":f(j)},null,8,["inputs-step"])):d("",!0)])])])),_:1}),"edit"==o.type?(i(),u(P,{key:0,class:"mt-4"},{default:p((()=>[G,n("table",O,[U,n("tbody",null,[(i(!0),u(h,null,y(f(k).prices,((e,t)=>(i(),u("tr",{key:`price-${t}`},[n("td",null,[n(A,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),n("td",null,"$"+v(e.price),1),n("td",null,v(f(b)(e.created_at).format("MM-DD-YYYY")),1),n("td",null,v(e.user.name),1)])))),128))])]),n("div",H,[n($,{"inputs-step":f(j)},null,8,["inputs-step"]),n(_,{color:"info",onClick:Q,class:"mt-5 ml-3"},{default:p((()=>[I])),_:1})])])),_:1})):d("",!0)])}}});export{J as _};
