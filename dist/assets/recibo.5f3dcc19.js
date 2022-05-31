import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{m as e,b as a,A as n}from"./index.59a944bb.js";import{A as s,B as u,d as o,G as d,b as r,o as i,h as c,k as p,D as m,F as y,Q as g,R as b,J as f,ae as v,E as x,O as h,w as _}from"./vendor.d0c8bc4f.js";import{o as j}from"./Store.07f71b96.js";import"./V-Placeload.ba28fd33.js";import"./Companies.ec51e1d8.js";import"./Discounts.2492e471.js";const k=v();s("data-v-3dd3f202");const w={class:"p-0"},P={class:"d-flex align-items-center"},$={class:"title is-6"},A={class:"mt-5 ml-4"},D={class:"title is-2"},R={class:"mt-5"},S=p("td",null,"Receipt number",-1),T={style:{"text-align":"right"}},V=p("td",null,"Invoice number",-1),B={style:{"text-align":"right"}},C=p("td",null,"Payment method",-1),F={style:{"text-align":"right"}},I={class:"mt-5 border"},O={style:{"text-align":"right"}},Q={style:{"text-align":"right"}},q=p("td",null,[p("b",null,"Subtotal")],-1),z=p("td",null,null,-1),E={style:{"text-align":"right"}},G={key:0},J=p("td",null,[p("b",null,"Discount")],-1),H={key:0},K={key:1},L={style:{"text-align":"right"}},M=p("td",null,"Sales Tax - Florida (7%)",-1),N=p("td",null,null,-1),U={style:{"text-align":"right"}},W=p("td",null,[p("b",null,"Total")],-1),X=p("td",null,null,-1),Y={style:{"text-align":"right"}},Z=p("td",null,[p("b",null,"Amount Paid")],-1),tt=p("td",null,null,-1),lt={style:{"text-align":"right"}},et={id:"print",class:"justify-content-center d-flex w-100 mt-4"},at=x("Print");u();var nt=o({expose:[],props:{data:{type:Object,default:{logo:"",company_name:"",monto:0,fecha:"",numero:"",factura:"",products:[{name:"",precio:0,cantidad:1}],tax:0,subtotal:0,type_amount:"",change_back:0,cash_tender:0,invoice_pdf:null,discount:{id:0,name:"",type:"",value:0},disc:0}}},setup(n){const s=n;h(),d((async()=>{}));const u=r((()=>{let t=s.data;return t.logo=`${a.value}storage/${t.logo}`,t})),o=()=>{window.print()};return(a,n)=>{const s=t,d=l;return i(),c("div",w,[p("div",P,[p(s,{picture:m(u).logo,class:"mr-3",size:"small"},null,8,["picture"]),p("p",$,y(m(u).company_name),1)]),p("div",A,[p("table",null,[p("tbody",null,[p("tr",null,[p("td",null,"Receipt from "+y(m(u).company_name),1)]),p("tr",null,[p("td",null,[p("p",D,y(m(e)(m(u).monto)),1)])]),p("tr",null,[p("td",null,"Paid "+y(m(u).fecha),1)])])]),p("table",R,[p("tbody",null,[p("tr",null,[S,p("td",T,y(m(u).numero),1)]),p("tr",null,[V,p("td",B,y(m(u).factura),1)]),p("tr",null,[C,p("td",F,y(m(u).type_amount),1)])])]),p("table",I,[p("tbody",null,[(i(!0),c(g,null,b(m(u).products,((t,l)=>(i(),c("tr",{key:`product-${l}`},[p("td",null,y(t.name),1),p("td",O,"Qty. "+y(t.cantidad),1),p("td",Q,y(m(e)(t.precio*t.cantidad)),1)])))),128)),p("tr",null,[q,z,p("td",E,y(m(e)(m(u).subtotal)),1)]),m(u).discount?(i(),c("tr",G,[J,p("td",null,["percentaje"==m(u).discount.type?(i(),c("span",H,y(m(u).discount.name)+" ("+y(m(u).discount.value)+"% off ) ",1)):(i(),c("span",K,y(m(u).discount.name)+" ( - "+y(m(u).discount.value)+"$ ) ",1))]),p("td",L," -"+y(m(e)(m(u).disc)),1)])):f("",!0),p("tr",null,[M,N,p("td",U,y(m(e)(m(u).tax)),1)]),p("tr",null,[W,X,p("td",Y,y(m(e)(m(u).monto)),1)]),p("tr",null,[Z,tt,p("td",lt,y(m(e)(m(u).monto)),1)])])])]),p("div",et,[p(d,{onClick:o},{default:k((()=>[at])),_:1})])])}}});nt.__scopeId="data-v-3dd3f202";const st={key:0,class:"p-0"};var ut=o({expose:[],setup(t){const l=h();return d((async()=>{let t=l.query.order;await n.get(`orders/${t}`).then((t=>{j.value=t.data})).catch((t=>{notyf.error(t.response.data)}))})),_((()=>j.value),(()=>{setTimeout((()=>{window.print()}),"1000")})),(t,l)=>{const e=nt;return m(j)?(i(),c("div",st,[p(e,{data:m(j)},null,8,["data"])])):f("",!0)}}});export default ut;