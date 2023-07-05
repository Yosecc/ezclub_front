import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as a}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.cc314943.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{d as l,ad as c,b as i,i as u,j as n,l as p,k as d,F as v,I as m,H as f,S as h,U as y,B as b,G as _}from"./vendor.84e48f7c.js";import{i as g,c as k,d as j,e as w,f as $,s as x}from"./Products.4ce8bdc7.js";import{g as A,b as C,v as P,n as E,p as V,e as D}from"./index.8a348250.js";const S={class:"title is-4 mb-0"},Y=_(" Go Back "),B=_(" Save Changes "),F={class:"columns is-multiline mx-auto"},G={class:"p-6 column is-12"},M=p("h1",{class:"title is-5 mb-0"},"Product Picture",-1),T={class:"d-flex justify-content-center"},U={class:"text-center"},q={class:"column is-12"},z={key:0},H=p("h1",{class:"title is-5"},"Prices",-1),I={class:"table is-hoverable is-fullwidth"},L=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Status"),p("th",{scope:"col"},"Price"),p("th",{scope:"col"},"Create Date"),p("th",{scope:"col"},"User")])],-1),J={key:0},K={class:"w-100 justify-content-center d-flex"},N=_(" Add Price ");var O=l({expose:[],props:{type:{type:String,default:"create"}},setup(l){const _=l,O=c(),Q=i((()=>"create"==_.type?{title:"Add a new product",subtitle:"Add information for a new product"}:{title:"Edit product",subtitle:"Edit information for a product"})),R=i((()=>`${C.value}storage/${P(g.value,"photo")}`)),W=()=>{""!=A(k.value,"price").model?confirm("Are you sure you want to add a new price? This action will disable the previous price and it cannot be restored")&&w(A(k.value,"price").model).then((e=>{E.success("success save"),window.location.reload()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{E.error(`${s}: ${e}`)}))})):E.error("Price is required")},X=()=>{let e=V(g.value);e.price=A(k.value,"price").model;const s=new FormData;for(var t in e)"locations"==t?e[t].forEach((e=>{s.append("locations[]",e)})):s.append(t,e[t]);console.log(...s),"edit"==_.type&&$(s).then((e=>{E.success(e.data.message),D(g.value),O.back()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{E.error(`${s}: ${e}`)}))})),"create"==_.type&&x(s).then((e=>{E.success(e.data.message),D(g.value),O.back()})).catch((e=>{for(var s in e.response.data.errores)e.response.data.errores[s].forEach((e=>{E.error(`${s}: ${e}`)}))}))};return(c,i)=>{const _=e,w=s,$=t,x=a,C=r,P=o;return u(),n("div",null,[p(x,null,{"header-left":d((()=>[p("div",null,[p("h1",S,f(v(Q).title),1),p("p",null,f(v(Q).subtitle),1)])])),"header-right":d((()=>[p(_,{onClick:i[1]||(i[1]=e=>v(O).back()),class:"mr-3"},{default:d((()=>[Y])),_:1}),p(_,{onClick:X,color:"primary"},{default:d((()=>[B])),_:1})])),content:d((()=>[p("div",F,[p("div",G,[M,p("div",T,[p("div",U,[p(w,{picture:v(R),class:"mb-4",size:"xl"},null,8,["picture"]),p($,{"inputs-step":c.input_image},null,8,["inputs-step"])])])]),p("div",q,[p($,{"inputs-step":v(g)},null,8,["inputs-step"]),"create"==l.type?(u(),n($,{key:0,"inputs-step":v(k)},null,8,["inputs-step"])):m("v-if",!0)])])])),_:1}),v(A)(v(g),"custom").model?m("v-if",!0):(u(),n("div",z,["edit"==l.type?(u(),n(P,{key:0,class:"mt-4"},{default:d((()=>[H,p("table",I,[L,p("tbody",null,[(u(!0),n(h,null,y(v(j).prices,((e,s)=>(u(),n("tr",{key:`price-${s}`},[p("td",null,[p(C,{color:e.status?"success":"danger",label:e.status?"Active":"Archived",rounded:""},null,8,["color","label"])]),p("td",null,"$"+f(e.price),1),p("td",null,f(v(b)(e.created_at).format("MM-DD-YYYY")),1),e.user?(u(),n("td",J,f(e.user.name),1)):m("v-if",!0)])))),128))])]),p("div",K,[p($,{"inputs-step":v(k)},null,8,["inputs-step"]),p(_,{color:"info",onClick:W,class:"mt-5 ml-3"},{default:d((()=>[N])),_:1})])])),_:1})):m("v-if",!0)]))])}}});export{O as _};
