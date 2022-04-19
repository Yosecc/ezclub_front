import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.49d2421a.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.244017f8.js";import{_ as t}from"./Companies.88ea1aa1.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b4c83a3f.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.012984ee.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.eccade9c.js";import{d as l,c,o as i,h as n,k as u,j as p,K as d,a0 as m,E as v,B as f,L as h,O as y,aa as b,D as _}from"./vendor.2a366383.js";import{i as g,c as j,d as k,e as w,f as $,s as x}from"./Products.28c6de8d.js";import{a as A,v as C,g as E,n as P,p as D,c as V}from"./index.8761bcab.js";const Y={class:"title is-4 mb-0"},B=_(" Go Back "),S=_(" Save Changes "),M={class:"columns is-multiline mx-auto"},T={class:"p-6 column is-12"},q=u("h1",{class:"title is-5 mb-0"},"Product Picture",-1),z={class:"d-flex justify-content-center"},F={class:"text-center"},G={class:"column is-12"},K=u("h1",{class:"title is-5"},"Prices",-1),L={class:"table is-hoverable is-fullwidth"},O=u("thead",null,[u("tr",null,[u("th",{scope:"col"},"Status"),u("th",{scope:"col"},"Price"),u("th",{scope:"col"},"Create Date"),u("th",{scope:"col"},"User")])],-1),U={class:"w-100 justify-content-center d-flex"},H=_(" Add Price ");var I=l({expose:[],props:{type:{type:String,default:"create"}},setup(l){const _=l,I=m(),J=c((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),N=c((()=>`${A.value}storage/${C(g.value,"photo")}`)),Q=()=>{""!=E(j.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(E(j.value,"price").model).then((e=>{P.success("success save"),window.location.reload()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{P.error(`${s}: ${e}`)}))})):P.error("Price is required")},R=()=>{let e=D(g.value);e.price=E(j.value,"price").model;const s=new FormData;for(var t in e)"locations"==t?e[t].forEach((e=>{s.append("locations[]",e)})):s.append(t,e[t]);console.log(...s),"edit"==_.type&&$(s).then((e=>{P.success(e.data.message),V(g.value),I.back()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{P.error(`${s}: ${e}`)}))})),"create"==_.type&&x(s).then((e=>{P.success(e.data.message),V(g.value),I.back()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{P.error(`${s}: ${e}`)}))}))};return(c,m)=>{const _=e,w=s,$=t,x=a,A=r,C=o;return i(),n("div",null,[u(x,null,{"header-left":p((()=>[u("div",null,[u("h1",Y,v(f(J).title),1),u("p",null,v(f(J).subtitle),1)])])),"header-right":p((()=>[u(_,{onClick:m[1]||(m[1]=e=>f(I).back()),class:"mr-3"},{default:p((()=>[B])),_:1}),u(_,{onClick:R,color:"primary"},{default:p((()=>[S])),_:1})])),content:p((()=>[u("div",M,[u("div",T,[q,u("div",z,[u("div",F,[u(w,{picture:f(N),class:"mb-4",size:"xl"},null,8,["picture"]),u($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),u("div",G,[u($,{"inputs-step":f(g)},null,8,["inputs-step"]),"create"==l.type?(i(),n($,{key:0,"inputs-step":f(j)},null,8,["inputs-step"])):d("",!0)])])])),_:1}),"edit"==l.type?(i(),n(C,{key:0,class:"mt-4"},{default:p((()=>[K,u("table",L,[O,u("tbody",null,[(i(!0),n(h,null,y(f(k).prices,((e,s)=>(i(),n("tr",{key:`price-${s}`},[u("td",null,[u(A,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),u("td",null,"$"+v(e.price),1),u("td",null,v(f(b)(e.created_at).format("MM-DD-YYYY")),1),u("td",null,v(e.user.name),1)])))),128))])]),u("div",U,[u($,{"inputs-step":f(j)},null,8,["inputs-step"]),u(_,{color:"info",onClick:Q,class:"mt-5 ml-3"},{default:p((()=>[H])),_:1})])])),_:1})):d("",!0)])}}});export{I as _};
