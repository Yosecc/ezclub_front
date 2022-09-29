import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{D as a,E as e,d as n,O as s,o as u,b as o,i as r,j as d,l as i,F as c,H as p,S as m,U as y,I as g,af as f,G as v,w as b}from"./vendor.435948fe.js";import{m as x,b as h,A as _}from"./index.45f98682.js";import{e as j}from"./Store.c12522c4.js";import"./V-Placeload.9c5aed6e.js";import"./Companies.6af0e74d.js";import"./Discounts.ea495135.js";const k=f();a("data-v-89a6fb92");const w={class:"p-0"},P={class:"d-flex align-items-center"},$={class:"title is-6"},S={class:"mt-5 ml-4"},A={class:"title is-2"},D={class:"mt-5"},I=i("td",null,"Receipt number",-1),T={style:{"text-align":"right"}},V=i("td",null,"Invoice number",-1),C={style:{"text-align":"right"}},F=i("td",null,"Payment method",-1),O={style:{"text-align":"right"}},R={class:"mt-5 border"},q={style:{"text-align":"right"}},z={style:{"text-align":"right"}},B=i("td",null,[i("b",null,"Subtotal")],-1),E=i("td",null,null,-1),G={style:{"text-align":"right"}},H={key:0},Q=i("td",null,[i("b",null,"Discount")],-1),U={key:0},J={key:1},K={style:{"text-align":"right"}},L=i("td",null,"Sales Tax - Florida (7%)",-1),M=i("td",null,null,-1),N={style:{"text-align":"right"}},W=i("td",null,[i("b",null,"Total")],-1),X=i("td",null,null,-1),Y={style:{"text-align":"right"}},Z=i("td",null,[i("b",null,"Amount Paid")],-1),tt=i("td",null,null,-1),lt={style:{"text-align":"right"}},at={id:"print",class:"justify-content-center d-flex w-100 mt-4"},et=v("Print");e();var nt=n({expose:[],props:{data:{type:Object,default:{logo:"",company_name:"",monto:0,fecha:"",numero:"",factura:"",products:[{name:"",precio:0,cantidad:1}],tax:0,subtotal:0,type_amount:"",change_back:0,cash_tender:0,invoice_pdf:null,discount:{id:0,name:"",type:"",value:0},disc:0}}},setup(a){const e=a;s(),u((async()=>{}));const n=o((()=>{let t=e.data;return t.logo=`${h.value}storage/${t.logo}`,t})),f=()=>{window.print()};return(a,e)=>{const s=t,u=l;return r(),d("div",w,[i("div",P,[i(s,{picture:c(n).logo,class:"mr-3",size:"small"},null,8,["picture"]),i("p",$,p(c(n).company_name),1)]),i("div",S,[i("table",null,[i("tbody",null,[i("tr",null,[i("td",null,"Receipt from "+p(c(n).company_name),1)]),i("tr",null,[i("td",null,[i("p",A,p(c(x)(c(n).monto)),1)])]),i("tr",null,[i("td",null,"Paid "+p(c(n).fecha),1)])])]),i("table",D,[i("tbody",null,[i("tr",null,[I,i("td",T,p(c(n).numero),1)]),i("tr",null,[V,i("td",C,p(c(n).factura),1)]),i("tr",null,[F,i("td",O,p(c(n).type_amount),1)])])]),i("table",R,[i("tbody",null,[(r(!0),d(m,null,y(c(n).products,((t,l)=>(r(),d("tr",{key:`product-${l}`},[i("td",null,p(t.name),1),i("td",q,"Qty. "+p(t.cantidad),1),i("td",z,p(c(x)(t.precio*t.cantidad)),1)])))),128)),i("tr",null,[B,E,i("td",G,p(c(x)(c(n).subtotal)),1)]),c(n).discount?(r(),d("tr",H,[Q,i("td",null,["percentaje"==c(n).discount.type?(r(),d("span",U,p(c(n).discount.name)+" ("+p(c(n).discount.value)+"% off ) ",1)):(r(),d("span",J,p(c(n).discount.name)+" ( - "+p(c(n).discount.value)+"$ ) ",1))]),i("td",K,"-"+p(c(x)(c(n).disc)),1)])):g("v-if",!0),i("tr",null,[L,M,i("td",N,p(c(x)(c(n).tax)),1)]),i("tr",null,[W,X,i("td",Y,p(c(x)(c(n).monto)),1)]),i("tr",null,[Z,tt,i("td",lt,p(c(x)(c(n).monto)),1)])])])]),i("div",at,[i(u,{onClick:f},{default:k((()=>[et])),_:1})])])}}});nt.__scopeId="data-v-89a6fb92";const st={key:0,class:"p-0"};var ut=n({expose:[],setup(t){const l=s();return u((async()=>{let t=l.query.order;await _.get(`orders/${t}`).then((t=>{j.value=t.data})).catch((t=>{notyf.error(t.response.data)}))})),b((()=>j.value),(()=>{setTimeout((()=>{window.print()}),"1000")})),(t,l)=>{const a=nt;return c(j)?(r(),d("div",st,[i(a,{data:c(j)},null,8,["data"])])):g("v-if",!0)}}});export default ut;
