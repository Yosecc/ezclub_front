import{n as a,A as e,g as s}from"./index.fc85b2ef.js";import{l as t}from"./Companies.de583021.js";import{v as l}from"./Discounts.9a0ecf1b.js";import{r as o,A as u,b as n}from"./vendor.4454b83d.js";const c=o([]),i=o(!1);o(!1);const r=o(1),d=o(null),v=o(!1),p=o(!1),m=o(null),_=o(null),h=o(!1),f=a=>{const e=c.value.findIndex((e=>e.product_id==a.id));-1==e?c.value.push({product_id:a.id,count:1,products_amount:a.price,name:a.name,stock:a.stock,custom:a.custom}):(c.value[e].custom||c.value.find((e=>e.product_id==a.id)).count++,c.value[e].custom&&(c.value[e].products_amount=a.price,c.value[e].name=a.name))},y=u([{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-12",isLabel:!0,change:function(){""!=this.model?l(this.values.find((a=>a.id==this.model)).code,"membership").then((e=>{this.data=e.data,a.success("Discuount valid")})).catch((e=>{a.error(e.response.data),this.model=""})):this.data=null},filter:function(a){return`${a.name}`}}]),b=n((()=>{let a=0;c.value.forEach((e=>{a+=e.products_amount*e.count}));let e=0;return g.value&&(e="percentaje"==g.value.type?a*g.value.value/100:g.value.value),a-e})),w=n((()=>7*b.value/100)),g=n((()=>s(y,"discount").data?s(y,"discount").data:null)),j=n((()=>b.value+w.value)),k=(e,s,t)=>{"minus"==e?(s.count>0&&s.count--,0==s.count&&c.value.splice(t,1)):s.count+1<=s.stock?s.count++:a.error("Sin Stock")},x=o(0),A=n((()=>{const a=parseFloat(x.value)-parseFloat(j.value);return a>0?a:0})),D=a=>{x.value=parseFloat(x.value)+parseFloat(a)},F=o(null),C=o({email:null,phone:null,barcode:null}),I=()=>{const e={total:j.value,tax_id:1,payment_type_id:F.value,email:C.value.email,phone:C.value.phone,barcode:C.value.barcode,change_back:A.value,products:c.value,locations_id:s(t.value,"locations_id").model,member_id:m.value?m.value.id:null};g.value&&(e.discount=g.value.id),S(e).then((e=>{1==F.value&&(F.value=null,C.value.email=null,C.value.phone=null,C.value.barcode=null,x.value=0,c.value=[],r.value=3,i.value=!1),3==F.value&&(d.value=e.data.order),d.value=e.data.order,a.success("Success"),q({invoice_pdf:e.data.invoice_pdf,order:e.data.order})})).catch((e=>{a.error(e.response.data.message)}))},S=async a=>await e.post("orders",a),$=async a=>await e.post("orders/activate",{payment_intent_client_secret:a});o(""),o(null);const q=a=>{_.value=a.invoice_pdf,d.value=a.order,v.value=!0},z=async a=>await e.post("orders/store_debit_automatic",a),B=async a=>await e.post("orders/swipe_card",a),E=async a=>await e.post("orders/cancel_payment_intent",{id:a}),L=async(a,s)=>await e.post("orders/another_try",{id:a,terminal_id:s}),G=async a=>await e.post("orders/capture_payment",{id:a}),H=async(a,s)=>await e.post(`orders/send_receipt/${a}`,{email:s}),J=async(a,s,t)=>await e.post(`orders/send_invoice_mail/${a}`,{email:s,invoice_pdf:t});export{h as A,$ as B,p as C,x as a,A as b,c,D as d,d as e,f,k as g,w as h,q as i,z as j,y as k,_ as l,m,H as n,i as o,I as p,J as q,F as r,b as s,j as t,v as u,g as v,B as w,E as x,L as y,G as z};
