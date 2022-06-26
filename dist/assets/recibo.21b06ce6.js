import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b94da949.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import{B as a,D as e,d as n,O as s,I as u,b as o,o as r,i as d,k as i,E as c,G as p,S as m,U as y,H as g,ae as b,F as v,w as f}from"./vendor.073d5183.js";import{m as x,b as h,A as _}from"./index.845d558b.js";import{o as j}from"./Store.718b9348.js";import"./V-Placeload.4695e536.js";import"./Companies.ca72e995.js";import"./Discounts.843311ce.js";const k=b();a("data-v-89a6fb92");const w={class:"p-0"},P={class:"d-flex align-items-center"},$={class:"title is-6"},S={class:"mt-5 ml-4"},A={class:"title is-2"},D={class:"mt-5"},I=i("td",null,"Receipt number",-1),T={style:{"text-align":"right"}},V=i("td",null,"Invoice number",-1),B={style:{"text-align":"right"}},C=i("td",null,"Payment method",-1),F={style:{"text-align":"right"}},O={class:"mt-5 border"},R={style:{"text-align":"right"}},q={style:{"text-align":"right"}},z=i("td",null,[i("b",null,"Subtotal")],-1),E=i("td",null,null,-1),G={style:{"text-align":"right"}},H={key:0},Q=i("td",null,[i("b",null,"Discount")],-1),U={key:0},J={key:1},K={style:{"text-align":"right"}},L=i("td",null,"Sales Tax - Florida (7%)",-1),M=i("td",null,null,-1),N={style:{"text-align":"right"}},W=i("td",null,[i("b",null,"Total")],-1),X=i("td",null,null,-1),Y={style:{"text-align":"right"}},Z=i("td",null,[i("b",null,"Amount Paid")],-1),tt=i("td",null,null,-1),lt={style:{"text-align":"right"}},at={id:"print",class:"justify-content-center d-flex w-100 mt-4"},et=v("Print");e();var nt=n({expose:[],props:{data:{type:Object,default:{logo:"",company_name:"",monto:0,fecha:"",numero:"",factura:"",products:[{name:"",precio:0,cantidad:1}],tax:0,subtotal:0,type_amount:"",change_back:0,cash_tender:0,invoice_pdf:null,discount:{id:0,name:"",type:"",value:0},disc:0}}},setup(a){const e=a;s(),u((async()=>{}));const n=o((()=>{let t=e.data;return t.logo=`${h.value}storage/${t.logo}`,t})),b=()=>{window.print()};return(a,e)=>{const s=t,u=l;return r(),d("div",w,[i("div",P,[i(s,{picture:c(n).logo,class:"mr-3",size:"small"},null,8,["picture"]),i("p",$,p(c(n).company_name),1)]),i("div",S,[i("table",null,[i("tbody",null,[i("tr",null,[i("td",null,"Receipt from "+p(c(n).company_name),1)]),i("tr",null,[i("td",null,[i("p",A,p(c(x)(c(n).monto)),1)])]),i("tr",null,[i("td",null,"Paid "+p(c(n).fecha),1)])])]),i("table",D,[i("tbody",null,[i("tr",null,[I,i("td",T,p(c(n).numero),1)]),i("tr",null,[V,i("td",B,p(c(n).factura),1)]),i("tr",null,[C,i("td",F,p(c(n).type_amount),1)])])]),i("table",O,[i("tbody",null,[(r(!0),d(m,null,y(c(n).products,((t,l)=>(r(),d("tr",{key:`product-${l}`},[i("td",null,p(t.name),1),i("td",R,"Qty. "+p(t.cantidad),1),i("td",q,p(c(x)(t.precio*t.cantidad)),1)])))),128)),i("tr",null,[z,E,i("td",G,p(c(x)(c(n).subtotal)),1)]),c(n).discount?(r(),d("tr",H,[Q,i("td",null,["percentaje"==c(n).discount.type?(r(),d("span",U,p(c(n).discount.name)+" ("+p(c(n).discount.value)+"% off ) ",1)):(r(),d("span",J,p(c(n).discount.name)+" ( - "+p(c(n).discount.value)+"$ ) ",1))]),i("td",K,"-"+p(c(x)(c(n).disc)),1)])):g("v-if",!0),i("tr",null,[L,M,i("td",N,p(c(x)(c(n).tax)),1)]),i("tr",null,[W,X,i("td",Y,p(c(x)(c(n).monto)),1)]),i("tr",null,[Z,tt,i("td",lt,p(c(x)(c(n).monto)),1)])])])]),i("div",at,[i(u,{onClick:b},{default:k((()=>[et])),_:1})])])}}});nt.__scopeId="data-v-89a6fb92";const st={key:0,class:"p-0"};var ut=n({expose:[],setup(t){const l=s();return u((async()=>{let t=l.query.order;await _.get(`orders/${t}`).then((t=>{j.value=t.data})).catch((t=>{notyf.error(t.response.data)}))})),f((()=>j.value),(()=>{setTimeout((()=>{window.print()}),"1000")})),(t,l)=>{const a=nt;return c(j)?(r(),d("div",st,[i(a,{data:c(j)},null,8,["data"])])):g("v-if",!0)}}});export default ut;
