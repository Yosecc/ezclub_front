import{r as a,z as e,b as s}from"./vendor.31bd1321.js";import{n as t,A as o,g as l}from"./index.70a15384.js";import{l as n}from"./Companies.c0591eaf.js";import{v as u}from"./Discounts.bfbb050b.js";const c=a([]),r=a(!1);a(!1);const i=a(1),d=a(null),v=a(!1),p=a(!1),m=a(null),_=a(null),h=a(!1),f=a=>{const e=c.value.findIndex((e=>e.product_id==a.id));if(a.stock&&a.stock.current_stock>0)if(-1==e)c.value.push({product_id:a.id,count:1,products_amount:a.price,name:a.name,stock:a.stock.current_stock});else{c.value.find((e=>e.product_id==a.id)).count+1<=a.stock.current_stock?c.value.find((e=>e.product_id==a.id)).count++:t.error("Sin Stock")}else t.error("Sin Stock")},y=e([{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-12",isLabel:!0,change:function(){""!=this.model?u(this.values.find((a=>a.id==this.model)).code,"membership").then((a=>{this.data=a.data,t.success("Discuount valid")})).catch((a=>{t.error(a.response.data),this.model=""})):this.data=null},filter:function(a){return`${a.name}`}}]),b=s((()=>{let a=0;c.value.forEach((e=>{a+=e.products_amount*e.count}));let e=0;return w.value&&(e="percentaje"==w.value.type?a*w.value.value/100:w.value.value),a-e})),k=s((()=>7*b.value/100)),w=s((()=>l(y,"discount").data?l(y,"discount").data:null)),g=s((()=>b.value+k.value)),S=(a,e,s)=>{"minus"==a?(e.count>0&&e.count--,0==e.count&&c.value.splice(s,1)):e.count+1<=e.stock?e.count++:t.error("Sin Stock")},j=a(0),x=s((()=>{const a=parseFloat(j.value)-parseFloat(g.value);return a>0?a:0})),D=a=>{j.value=parseFloat(j.value)+parseFloat(a)},F=a(null),A=a({email:null,phone:null,barcode:null}),C=()=>{const a={total:g.value,tax_id:1,payment_type_id:F.value,email:A.value.email,phone:A.value.phone,barcode:A.value.barcode,change_back:x.value,products:c.value,locations_id:l(n.value,"locations_id").model};w.value&&(a.discount=w.value.id),I(a).then((a=>{console.log(a.data),1==F.value&&(F.value=null,A.value.email=null,A.value.phone=null,A.value.barcode=null,j.value=0,c.value=[],i.value=3,r.value=!1),3==F.value&&(d.value=a.data.order),d.value=a.data.order,t.success("Success"),z({invoice_pdf:a.data.invoice_pdf,order:a.data.order})})).catch((a=>{t.error(a.response.data.message)}))},I=async a=>await o.post("orders",a),$=async a=>await o.post("orders/activate",{payment_intent_client_secret:a});a(""),a(null);const z=a=>{_.value=a.invoice_pdf,d.value=a.order,v.value=!0},q=async a=>await o.post("orders/store_debit_automatic",a),B=async a=>await o.post("orders/swipe_card",a),E=async a=>await o.post("orders/cancel_payment_intent",{id:a}),L=async(a,e)=>await o.post("orders/another_try",{id:a,terminal_id:e}),G=async a=>await o.post("orders/capture_payment",{id:a}),H=async(a,e)=>await o.post(`orders/send_receipt/${a}`,{email:e}),J=async(a,e,s)=>await o.post(`orders/send_invoice_mail/${a}`,{email:e,invoice_pdf:s});export{h as A,$ as B,p as C,f as a,c as b,S as c,g as d,r as e,j as f,x as g,D as h,z as i,q as j,y as k,_ as l,m,H as n,d as o,C as p,J as q,F as r,b as s,k as t,v as u,w as v,B as w,E as x,L as y,G as z};
