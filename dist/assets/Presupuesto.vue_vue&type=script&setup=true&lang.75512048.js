import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{m as e}from"./index.c3b2fa6a.js";import{d as l,o as s,b as a,h as r,i as n,k as o,l as u,R as p,S as i,H as c,K as d,F as y,G as g,L as x}from"./vendor.4454b83d.js";const m={class:"table is-hoverable is-striped is-fullwidth"},h=u("thead",null,[u("tr",null,[u("th",{scope:"col"},"Membership"),u("th",{scope:"col"},"Description"),u("th",{style:{"text-align":"center"},scope:"col"},"Quantity"),u("th",{style:{"text-align":"right"},scope:"col"},"Cost"),u("th",{style:{"text-align":"right"},scope:"col"},"Import")])],-1),b={key:0},f={style:{"text-transform":"capitalize"}},_={style:{"text-align":"center"}},v={style:{"text-align":"right"}},k={style:{"text-align":"right"}},w={key:0},j={style:{"text-align":"right"}},q=u("td",{colspan:"4",style:{"text-align":"right"}},[u("b",null,"Subtotal")],-1),z={style:{"text-align":"right"}},C={colspan:"4",style:{"text-align":"right"}},N={key:0},R={style:{"text-align":"right"},colspan:"4"},S={style:{"text-align":"right"}},T={style:{"text-align":"right"}},$=u("td",{style:{color:"#f39c12"},colspan:"4"},[u("b",null,"Total to pay today")],-1),D={style:{"font-size":"20px","font-weight":"900",color:"#f39c12"}},F={style:{"text-align":"right"}},G={colspan:"4"},H=u("p",null,[u("b",null,"Recurring Payment")],-1);var I=l({expose:[],props:{presupuesto:{type:Object,required:!0},restar:{type:Number,default:{text:"",amount:""}}},setup(l){const I=l;s((()=>{}));const K=a((()=>{let t=I.presupuesto.total;return""!=I.restar.text&&(t-=I.restar.amount,t<-0&&(t=0)),t}));return(s,a)=>{const L=t;return r(),n(L,{key:0,class:"mb-4"},{default:o((()=>[u("table",m,[h,u("tbody",null,[(r(!0),n(p,null,i(l.presupuesto.items,((t,l)=>(r(),n("tr",{key:`membresia-${l}`},[u("td",null,[u("p",null,c(t.description),1),t.date_between?(r(),n("p",b,[u("small",null,c(t.date_between.start)+" - "+c(t.date_between.end),1)])):d("",!0)]),u("td",f,c(t.interval_count)+" "+c(t.type),1),u("td",_,c(t.quantity),1),u("td",v,c(y(e)(t.amount_subtotal)),1),u("td",k,[u("p",null,[t.discount?(r(),n("small",w,"("+c(t.discount.value)+" off)",1)):d("",!0),g(" "+c(y(e)(t.amount_total)),1)])])])))),128)),u("tr",j,[q,u("td",null,c(y(e)(l.presupuesto.subtotal)),1)]),u("tr",z,[u("td",C," Tax "+c(l.presupuesto.tax.percentage)+"% ",1),u("td",null,c(y(e)(l.presupuesto.tax.value)),1)]),""!=I.restar.text?(r(),n("tr",N,[u("td",R,[u("p",null,c(I.restar.text),1)]),u("td",S,[u("p",null,[u("b",null,"- "+c(y(e)(I.restar.amount)),1)])])])):d("",!0),u("tr",T,[$,u("td",D,c(y(e)(y(K))),1)]),u("tr",F,[u("td",G,[H,u("p",null,[u("small",null,"Next payment date: "+c(l.presupuesto.fechas.next_payment_date),1)])]),u("td",null,c(y(e)(l.presupuesto.recurrente)),1)])])]),x(s.$slots,"default")])),_:3})}}});export{I as _};
