import{r as a,A as e,c as s}from"./vendor.b96c0b62.js";import{n as t,A as l,g as o}from"./index.65e49cfc.js";import{l as u}from"./Companies.cfda0987.js";import{v as n}from"./Discounts.c793a56c.js";const c=a([]),i=a(!1);a(!1);const r=a(1),d=a(null),v=a(!1),p=a(!1),m=a(null),_=a(null),h=a(!1),f=a=>{const e=c.value.findIndex((e=>e.product_id==a.id));-1==e?c.value.push({product_id:a.id,count:1,products_amount:a.price,name:a.name,stock:a.stock,custom:a.custom}):(c.value[e].custom||c.value.find((e=>e.product_id==a.id)).count++,c.value[e].custom&&(c.value[e].products_amount=a.price,c.value[e].name=a.name))},y=e([{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-12",isLabel:!0,change:function(){""!=this.model?n(this.values.find((a=>a.id==this.model)).code,"membership").then((a=>{this.data=a.data,t.success("Discuount valid")})).catch((a=>{t.error(a.response.data),this.model=""})):this.data=null},filter:function(a){return`${a.name}`}}]),b=s((()=>{let a=0;c.value.forEach((e=>{a+=e.products_amount*e.count}));let e=0;return g.value&&(e="percentaje"==g.value.type?a*g.value.value/100:g.value.value),a-e})),w=s((()=>7*b.value/100)),g=s((()=>o(y,"discount").data?o(y,"discount").data:null)),j=s((()=>b.value+w.value)),k=(a,e,s)=>{"minus"==a?(e.count>0&&e.count--,0==e.count&&c.value.splice(s,1)):e.count+1<=e.stock?e.count++:t.error("Sin Stock")},x=a(0),A=s((()=>{const a=parseFloat(x.value)-parseFloat(j.value);return a>0?a:0})),D=a=>{x.value=parseFloat(x.value)+parseFloat(a)},F=a(null),C=a({email:null,phone:null,barcode:null}),I=()=>{const a={total:j.value,tax_id:1,payment_type_id:F.value,email:C.value.email,phone:C.value.phone,barcode:C.value.barcode,change_back:A.value,products:c.value,locations_id:o(u.value,"locations_id").model,member_id:m.value?m.value.id:null};g.value&&(a.discount=g.value.id),S(a).then((a=>{1==F.value&&(F.value=null,C.value.email=null,C.value.phone=null,C.value.barcode=null,x.value=0,c.value=[],r.value=3,i.value=!1),3==F.value&&(d.value=a.data.order),d.value=a.data.order,t.success("Success"),q({invoice_pdf:a.data.invoice_pdf,order:a.data.order})})).catch((a=>{t.error(a.response.data.message)}))},S=async a=>await l.post("orders",a),$=async a=>await l.post("orders/activate",{payment_intent_client_secret:a});a(""),a(null);const q=a=>{_.value=a.invoice_pdf,d.value=a.order,v.value=!0},z=async a=>await l.post("orders/store_debit_automatic",a),B=async a=>await l.post("orders/swipe_card",a),E=async a=>await l.post("orders/cancel_payment_intent",{id:a}),L=async(a,e)=>await l.post("orders/another_try",{id:a,terminal_id:e}),G=async a=>await l.post("orders/capture_payment",{id:a}),H=async(a,e)=>await l.post(`orders/send_receipt/${a}`,{email:e}),J=async(a,e,s)=>await l.post(`orders/send_invoice_mail/${a}`,{email:e,invoice_pdf:s});export{h as A,$ as B,p as C,x as a,A as b,c,D as d,d as e,f,k as g,w as h,q as i,z as j,y as k,_ as l,m,H as n,i as o,I as p,J as q,F as r,b as s,j as t,v as u,g as v,B as w,E as x,L as y,G as z};
