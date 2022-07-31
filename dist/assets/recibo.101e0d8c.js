import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{m as a,b as e,A as n}from"./index.1121a635.js";import{B as s,D as u,d as o,H as r,b as d,o as i,h as c,k as p,E as m,G as y,R as g,S as f,K as b,af as v,F as x,P as h,w as _}from"./vendor.41bfc188.js";import{e as j}from"./Store.bd3f82c5.js";import"./V-Placeload.f8b8ec60.js";import"./Companies.dc423912.js";import"./Discounts.080726af.js";const k=v();s("data-v-12e69972");const w={class:"p-0"},P={class:"d-flex align-items-center"},$={class:"title is-6"},S={class:"mt-5 ml-4"},A={class:"title is-2"},D={class:"mt-5"},R=p("td",null,"Receipt number",-1),T={style:{"text-align":"right"}},V=p("td",null,"Invoice number",-1),B={style:{"text-align":"right"}},C=p("td",null,"Payment method",-1),F={style:{"text-align":"right"}},I={class:"mt-5 border"},q={style:{"text-align":"right"}},z={style:{"text-align":"right"}},E=p("td",null,[p("b",null,"Subtotal")],-1),G=p("td",null,null,-1),H={style:{"text-align":"right"}},K={key:0},O=p("td",null,[p("b",null,"Discount")],-1),Q={key:0},J={key:1},L={style:{"text-align":"right"}},M=p("td",null,"Sales Tax - Florida (7%)",-1),N=p("td",null,null,-1),U={style:{"text-align":"right"}},W=p("td",null,[p("b",null,"Total")],-1),X=p("td",null,null,-1),Y={style:{"text-align":"right"}},Z=p("td",null,[p("b",null,"Amount Paid")],-1),tt=p("td",null,null,-1),lt={style:{"text-align":"right"}},at={id:"print",class:"justify-content-center d-flex w-100 mt-4"},et=x("Print");u();var nt=o({expose:[],props:{data:{type:Object,default:{logo:"",company_name:"",monto:0,fecha:"",numero:"",factura:"",products:[{name:"",precio:0,cantidad:1}],tax:0,subtotal:0,type_amount:"",change_back:0,cash_tender:0,invoice_pdf:null,discount:{id:0,name:"",type:"",value:0},disc:0}}},setup(n){const s=n;h(),r((async()=>{}));const u=d((()=>{let t=s.data;return t.logo=`${e.value}storage/${t.logo}`,t})),o=()=>{window.print()};return(e,n)=>{const s=t,r=l;return i(),c("div",w,[p("div",P,[p(s,{picture:m(u).logo,class:"mr-3",size:"small"},null,8,["picture"]),p("p",$,y(m(u).company_name),1)]),p("div",S,[p("table",null,[p("tbody",null,[p("tr",null,[p("td",null,"Receipt from "+y(m(u).company_name),1)]),p("tr",null,[p("td",null,[p("p",A,y(m(a)(m(u).monto)),1)])]),p("tr",null,[p("td",null,"Paid "+y(m(u).fecha),1)])])]),p("table",D,[p("tbody",null,[p("tr",null,[R,p("td",T,y(m(u).numero),1)]),p("tr",null,[V,p("td",B,y(m(u).factura),1)]),p("tr",null,[C,p("td",F,y(m(u).type_amount),1)])])]),p("table",I,[p("tbody",null,[(i(!0),c(g,null,f(m(u).products,((t,l)=>(i(),c("tr",{key:`product-${l}`},[p("td",null,y(t.name),1),p("td",q,"Qty. "+y(t.cantidad),1),p("td",z,y(m(a)(t.precio*t.cantidad)),1)])))),128)),p("tr",null,[E,G,p("td",H,y(m(a)(m(u).subtotal)),1)]),m(u).discount?(i(),c("tr",K,[O,p("td",null,["percentaje"==m(u).discount.type?(i(),c("span",Q,y(m(u).discount.name)+" ("+y(m(u).discount.value)+"% off ) ",1)):(i(),c("span",J,y(m(u).discount.name)+" ( - "+y(m(u).discount.value)+"$ ) ",1))]),p("td",L,"-"+y(m(a)(m(u).disc)),1)])):b("",!0),p("tr",null,[M,N,p("td",U,y(m(a)(m(u).tax)),1)]),p("tr",null,[W,X,p("td",Y,y(m(a)(m(u).monto)),1)]),p("tr",null,[Z,tt,p("td",lt,y(m(a)(m(u).monto)),1)])])])]),p("div",at,[p(r,{onClick:o},{default:k((()=>[et])),_:1})])])}}});nt.__scopeId="data-v-12e69972";const st={key:0,class:"p-0"};var ut=o({expose:[],setup(t){const l=h();return r((async()=>{let t=l.query.order;await n.get(`orders/${t}`).then((t=>{j.value=t.data})).catch((t=>{notyf.error(t.response.data)}))})),_((()=>j.value),(()=>{setTimeout((()=>{window.print()}),"1000")})),(t,l)=>{const a=nt;return m(j)?(i(),c("div",st,[p(a,{data:m(j)},null,8,["data"])])):b("",!0)}}});export default ut;
