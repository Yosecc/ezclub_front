<<<<<<< HEAD:dist/assets/productForm.vue_vue&type=style&index=0&lang.939cd44c.js
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.098ca06a.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{d as o,b as c,h as i,i as u,l as n,k as p,F as d,K as m,ac as v,H as f,R as h,S as y,B as b,G as _}from"./vendor.3e3390b7.js";import{i as g,c as k,d as j,e as w,f as $,s as x}from"./Products.44a20162.js";import{g as A,b as C,v as P,n as E,p as V,e as D}from"./index.3c26e2a1.js";const S={class:"title is-4 mb-0"},Y=_(" Go Back "),B=_(" Save Changes "),F={class:"columns is-multiline mx-auto"},G={class:"p-6 column is-12"},M=n("h1",{class:"title is-5 mb-0"},"Product Picture",-1),T={class:"d-flex justify-content-center"},q={class:"text-center"},z={class:"column is-12"},H={key:0},K=n("h1",{class:"title is-5"},"Prices",-1),L={class:"table is-hoverable is-fullwidth"},R=n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Status"),n("th",{scope:"col"},"Price"),n("th",{scope:"col"},"Create Date"),n("th",{scope:"col"},"User")])],-1),U={class:"w-100 justify-content-center d-flex"},I=_(" Add Price ");var J=o({expose:[],props:{type:{type:String,default:"create"}},setup(o){const _=o,J=v(),N=c((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),O=c((()=>`${C.value}storage/${P(g.value,"photo")}`)),Q=()=>{""!=A(k.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(A(k.value,"price").model).then((e=>{E.success("success save"),window.location.reload()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})):E.error("Price is required")},W=()=>{let e=V(g.value);e.price=A(k.value,"price").model;const t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==_.type&&$(t).then((e=>{E.success(e.data.message),D(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})),"create"==_.type&&x(t).then((e=>{E.success(e.data.message),D(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))}))};return(c,v)=>{const _=e,w=t,$=s,x=a,C=r,P=l;return i(),u("div",null,[n(x,null,{"header-left":p((()=>[n("div",null,[n("h1",S,f(d(N).title),1),n("p",null,f(d(N).subtitle),1)])])),"header-right":p((()=>[n(_,{onClick:v[1]||(v[1]=e=>d(J).back()),class:"mr-3"},{default:p((()=>[Y])),_:1}),n(_,{onClick:W,color:"primary"},{default:p((()=>[B])),_:1})])),content:p((()=>[n("div",F,[n("div",G,[M,n("div",T,[n("div",q,[n(w,{picture:d(O),class:"mb-4",size:"xl"},null,8,["picture"]),n($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),n("div",z,[n($,{"inputs-step":d(g)},null,8,["inputs-step"]),"create"==o.type?(i(),u($,{key:0,"inputs-step":d(k)},null,8,["inputs-step"])):m("",!0)])])])),_:1}),d(A)(d(g),"custom").model?m("",!0):(i(),u("div",H,["edit"==o.type?(i(),u(P,{key:0,class:"mt-4"},{default:p((()=>[K,n("table",L,[R,n("tbody",null,[(i(!0),u(h,null,y(d(j).prices,((e,t)=>(i(),u("tr",{key:`price-${t}`},[n("td",null,[n(C,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),n("td",null,"$"+f(e.price),1),n("td",null,f(d(b)(e.created_at).format("MM-DD-YYYY")),1),n("td",null,f(e.user.name),1)])))),128))])]),n("div",U,[n($,{"inputs-step":d(k)},null,8,["inputs-step"]),n(_,{color:"info",onClick:Q,class:"mt-5 ml-3"},{default:p((()=>[I])),_:1})])])),_:1})):m("",!0)]))])}}});export{J as _};
=======
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bd3d0e81.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.dd846f77.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.14a038cf.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.e475383e.js";import{_ as l}from"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import{d as o,b as c,h as i,i as u,l as n,k as p,F as d,K as m,ac as v,H as f,R as h,S as y,B as b,G as _}from"./vendor.5900a5e9.js";import{i as g,c as k,d as j,e as w,f as $,s as x}from"./Products.de6d3b56.js";import{g as A,b as C,v as P,n as E,p as V,e as D}from"./index.16a56777.js";const S={class:"title is-4 mb-0"},Y=_(" Go Back "),B=_(" Save Changes "),F={class:"columns is-multiline mx-auto"},G={class:"p-6 column is-12"},M=n("h1",{class:"title is-5 mb-0"},"Product Picture",-1),T={class:"d-flex justify-content-center"},q={class:"text-center"},z={class:"column is-12"},H={key:0},K=n("h1",{class:"title is-5"},"Prices",-1),L={class:"table is-hoverable is-fullwidth"},R=n("thead",null,[n("tr",null,[n("th",{scope:"col"},"Status"),n("th",{scope:"col"},"Price"),n("th",{scope:"col"},"Create Date"),n("th",{scope:"col"},"User")])],-1),U={class:"w-100 justify-content-center d-flex"},I=_(" Add Price ");var J=o({expose:[],props:{type:{type:String,default:"create"}},setup(o){const _=o,J=v(),N=c((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),O=c((()=>`${C.value}storage/${P(g.value,"photo")}`)),Q=()=>{""!=A(k.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(A(k.value,"price").model).then((e=>{E.success("success save"),window.location.reload()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})):E.error("Price is required")},W=()=>{let e=V(g.value);e.price=A(k.value,"price").model;const t=new FormData;for(var s in e)"locations"==s?e[s].forEach((e=>{t.append("locations[]",e)})):t.append(s,e[s]);console.log(...t),"edit"==_.type&&$(t).then((e=>{E.success(e.data.message),D(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))})),"create"==_.type&&x(t).then((e=>{E.success(e.data.message),D(g.value),J.back()})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{E.error(`${t}: ${e}`)}))}))};return(c,v)=>{const _=e,w=t,$=s,x=a,C=r,P=l;return i(),u("div",null,[n(x,null,{"header-left":p((()=>[n("div",null,[n("h1",S,f(d(N).title),1),n("p",null,f(d(N).subtitle),1)])])),"header-right":p((()=>[n(_,{onClick:v[1]||(v[1]=e=>d(J).back()),class:"mr-3"},{default:p((()=>[Y])),_:1}),n(_,{onClick:W,color:"primary"},{default:p((()=>[B])),_:1})])),content:p((()=>[n("div",F,[n("div",G,[M,n("div",T,[n("div",q,[n(w,{picture:d(O),class:"mb-4",size:"xl"},null,8,["picture"]),n($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),n("div",z,[n($,{"inputs-step":d(g)},null,8,["inputs-step"]),"create"==o.type?(i(),u($,{key:0,"inputs-step":d(k)},null,8,["inputs-step"])):m("",!0)])])])),_:1}),d(A)(d(g),"custom").model?m("",!0):(i(),u("div",H,["edit"==o.type?(i(),u(P,{key:0,class:"mt-4"},{default:p((()=>[K,n("table",L,[R,n("tbody",null,[(i(!0),u(h,null,y(d(j).prices,((e,t)=>(i(),u("tr",{key:`price-${t}`},[n("td",null,[n(C,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),n("td",null,"$"+f(e.price),1),n("td",null,f(d(b)(e.created_at).format("MM-DD-YYYY")),1),n("td",null,f(e.user.name),1)])))),128))])]),n("div",U,[n($,{"inputs-step":d(k)},null,8,["inputs-step"]),n(_,{color:"info",onClick:Q,class:"mt-5 ml-3"},{default:p((()=>[I])),_:1})])])),_:1})):m("",!0)]))])}}});export{J as _};
>>>>>>> 577e70e0aca14702fdf4027e6116d43d016aadcf:dist/assets/productForm.vue_vue&type=style&index=0&lang.dc73608c.js
