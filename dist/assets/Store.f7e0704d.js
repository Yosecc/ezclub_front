import{r as a,c as e}from"./vendor.512b7acb.js";import{A as s,n as t,g as o}from"./index.839b10d7.js";import{l}from"./Companies.29e83f59.js";const n=a([]),r=a(!1);a(!1);const u=a(1),c=a(null),i=a(!1),d=a(!1),v=a(null),p=a(null),_=a(!1),m=a=>{const e=n.value.findIndex((e=>e.product_id==a.id));if(a.stock&&a.stock.current_stock>0)if(-1==e)n.value.push({product_id:a.id,count:1,products_amount:a.price,name:a.name,stock:a.stock.current_stock});else{n.value.find((e=>e.product_id==a.id)).count+1<=a.stock.current_stock?n.value.find((e=>e.product_id==a.id)).count++:t.error("Sin Stock")}else t.error("Sin Stock")},y=e((()=>{let a=0;return n.value.forEach((e=>{a+=e.products_amount*e.count})),a})),f=e((()=>$.value&&y.value?y.value/100*$.value.find((a=>1==a.id)).value:0)),k=e((()=>y.value+f.value)),w=(a,e,s)=>{"minus"==a?(e.count>0&&e.count--,0==e.count&&n.value.splice(s,1)):e.count+1<=e.stock?e.count++:t.error("Sin Stock")},h=a(0),b=e((()=>{const a=parseFloat(h.value)-parseFloat(k.value);return a>0?a:0})),x=a=>{h.value=parseFloat(h.value)+parseFloat(a)},S=a(null),g=a({email:null,phone:null,barcode:null}),j=()=>{const a={total:k.value,tax_id:1,payment_type_id:S.value,email:g.value.email,phone:g.value.phone,barcode:g.value.barcode,change_back:b.value,products:n.value,locations_id:o(l.value,"locations_id").model};F(a).then((a=>{console.log(a.data),1==S.value&&(S.value=null,g.value.email=null,g.value.phone=null,g.value.barcode=null,h.value=0,n.value=[],u.value=3,r.value=!1),3==S.value&&(c.value=a.data.order),c.value=a.data.order,t.success("Success"),z({invoice_pdf:a.data.invoice_pdf,order:a.data.order})})).catch((a=>{t.error(a.response.data.message)}))},F=async a=>await s.post("orders",a),A=async a=>await s.post("orders/activate",{payment_intent_client_secret:a});a("");const $=a(null),q=async()=>{const a=await s.get("taxes");return $.value=a.data.taxes,a},z=a=>{p.value=a.invoice_pdf,c.value=a.order,i.value=!0},B=async a=>await s.post("orders/store_debit_automatic",a),C=async a=>await s.post("orders/swipe_card",a),E=async a=>await s.post("orders/cancel_payment_intent",{id:a}),I=async(a,e)=>await s.post("orders/another_try",{id:a,terminal_id:e}),D=async a=>await s.post("orders/capture_payment",{id:a}),G=async(a,e)=>await s.post(`orders/send_receipt/${a}`,{email:e}),H=async(a,e,t)=>await s.post(`orders/send_invoice_mail/${a}`,{email:e,invoice_pdf:t});export{A,d as B,m as a,n as b,w as c,k as d,r as e,h as f,b as g,x as h,z as i,B as j,p as k,G as l,v as m,H as n,c as o,j as p,S as q,i as r,y as s,f as t,C as u,E as v,I as w,D as x,_ as y,q as z};
