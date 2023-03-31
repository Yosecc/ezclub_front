import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.33b246e2.js";import{m as e}from"./index.87d4477d.js";import{d as l,o as s,h as a,i as n,k as o,l as r,R as u,S as p,H as i,K as c,F as d,G as y,L as g}from"./vendor.b43d5946.js";const h={class:"table is-hoverable is-striped is-fullwidth"},m=r("thead",null,[r("tr",null,[r("th",{scope:"col"},"Membership"),r("th",{scope:"col"},"Description"),r("th",{style:{"text-align":"center"},scope:"col"},"Quantity"),r("th",{style:{"text-align":"right"},scope:"col"},"Cost"),r("th",{style:{"text-align":"right"},scope:"col"},"Import")])],-1),x={key:0},b={style:{"text-transform":"capitalize"}},f={style:{"text-align":"center"}},_={style:{"text-align":"right"}},v={style:{"text-align":"right"}},k={key:0},w={style:{"text-align":"right"}},j=r("td",{colspan:"4",style:{"text-align":"right"}},[r("b",null,"Subtotal")],-1),q={style:{"text-align":"right"}},z={colspan:"4",style:{"text-align":"right"}},C={style:{"text-align":"right"}},R=r("td",{style:{color:"#f39c12"},colspan:"4"},[r("b",null,"Total to pay today")],-1),S={style:{"font-size":"20px","font-weight":"900",color:"#f39c12"}},T={style:{"text-align":"right"}},$={colspan:"4"},D=r("p",null,[r("b",null,"Recurring Payment")],-1);var F=l({expose:[],props:{presupuesto:{type:Object,required:!0}},setup(l){const F=l;return s((()=>{console.log(F.presupuesto)})),(s,F)=>{const G=t;return a(),n(G,{key:0,class:"mb-4"},{default:o((()=>[r("table",h,[m,r("tbody",null,[(a(!0),n(u,null,p(l.presupuesto.items,((t,l)=>(a(),n("tr",{key:`membresia-${l}`},[r("td",null,[r("p",null,i(t.description),1),t.date_between?(a(),n("p",x,[r("small",null,i(t.date_between.start)+" - "+i(t.date_between.end),1)])):c("",!0)]),r("td",b,i(t.interval_count)+" "+i(t.type),1),r("td",f,i(t.quantity),1),r("td",_,i(d(e)(t.amount_subtotal)),1),r("td",v,[r("p",null,[t.discount?(a(),n("small",k,"("+i(t.discount.value)+" off)",1)):c("",!0),y(" "+i(d(e)(t.amount_total)),1)])])])))),128)),r("tr",w,[j,r("td",null,i(d(e)(l.presupuesto.subtotal)),1)]),r("tr",q,[r("td",z," Tax "+i(l.presupuesto.tax.percentage)+"% ",1),r("td",null,i(d(e)(l.presupuesto.tax.value)),1)]),r("tr",C,[R,r("td",S,i(d(e)(l.presupuesto.total)),1)]),r("tr",T,[r("td",$,[D,r("p",null,[r("small",null,"Next payment date: "+i(l.presupuesto.fechas.next_payment_date),1)])]),r("td",null,i(d(e)(l.presupuesto.recurrente)),1)])])]),g(s.$slots,"default")])),_:3})}}});export{F as _};
