import{n as e,A as a}from"./index.6baa4693.js";import{c as s}from"./Discounts.e3b5389b.js";import{r as t,A as i}from"./vendor.4454b83d.js";const n=t([{value:"All",name:"All"},{value:"COBRAR HOY",name:"Pay Day"},{value:"PENDIENTE",name:"Pending"},{value:"VENCIDO",name:"Due"},{value:"PAGADO",name:"Paid"},{value:"CANCELADO",name:"Canceled"},{value:"EXPIRADO",name:"Expired"},{value:"PROX. CANCELADO",name:"Prox. Expired"},{value:"HOLD",name:"Hold"}]),l=t([{value:"fallido",name:"Failed"},{value:"pagado",name:"Paid"}]),c=t(null),o=t([]),u={memberships_id:null,recurrences_id:null,is_initiation_fee:!0,is_card_price:!1,discount:null,is_last_month:!1,multigym:!1,prorrateo:!0,schedules:"",leo_vet_fr:!1,payment_type_id:3},p=i(JSON.parse(JSON.stringify(u))),r=()=>{Object.assign(p,JSON.parse(JSON.stringify(u)))},d=t([{typeInput:"switchEventChangeInput",name:"is_initiation_fee",values:["NO","YES"],placeholder:"Initiation fee",default:!0,model:p.is_initiation_fee,disabled:!1,class:"is-3 switch-button",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_card_price",placeholder:"Card",values:["NO","YES"],model:!1,disabled:!1,class:"is-3 switch-button",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_last_month",placeholder:"Last Month",values:["NO","YES"],model:!1,disabled:!1,class:"is-3 switch-button",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"multigym",placeholder:"MultiGym",values:["NO","YES"],model:!1,disabled:!1,class:"is-3 switch-button",isLabel:!0},{typeInput:"switchEventChangeInput",name:"prorrateo",values:["NO","YES"],placeholder:"Prorated Payment",model:!0,default:!0,required:!1,class:"is-3 switch-button",isLabel:!0},{typeInput:"switch",name:"leo_vet_fr",values:["NO","YES"],placeholder:"Member is: Law Enforcement Officer, Veteran o First Responder.",model:!1,default:!1,required:!1,class:"is-9 switch-button",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"schedules",placeholder:"Subscription Schedules",model:"",required:!1,class:"is-4",isLabel:!0},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-4",isLabel:!0,change:function(a){""!=this.model?s(this.values.find((e=>e.id==this.model)).code,"membership").then((a=>{this.data=a.data,e.success("Discuount valid")})).catch((a=>{e.error(a.response.data),this.model=""})):this.data=null}},{name:"payment_type_id",typeInput:"selectData",placeholder:"Payment Type",model:3,required:!0,values:[{id:1,name:"Cash"},{id:3,name:"Debit automatic"}],class:"is-4",isLabel:!0,filterOptionText:function(e){return e.name}}]);i({recurrence:!0,locations:[],diciplines:[],member:{}});const m=async()=>await a.get("v2/get_membership"),h=async(e=null,s=null)=>await a.get(`discounts?status=${e}&applies=${s}`),v=async e=>await a.post("v2/presupuesto_member",e),y=async e=>await a.post("v2/create_suscripcion",e),b=async(e,s)=>await a.post(`v2/suscripcion/remplace/${e}`,s),_=async(e,s=!0)=>await a.post(`v2/get_suscripcion/${e}?is_member=${s}`),w=async e=>await a.post(`v2/get_suscripcion/code/${e}`),f=async(e,s)=>await a.post(`v2/suscripcion/payment/${e}`,s),g=async(e,s)=>await a.post(`v2/suscripcion/cancel/${e}`,s),O=async(e,s)=>await a.post(`v2/suscripcion/upgrade/${e}`,s),E=async(e,s)=>await a.post(`v2/suscripcion/update/${e}`,s),I=async(e,s)=>await a.post(`v2/suscripcion/hold/${e}`,s),C=async(e,s)=>await a.post(`v2/suscripcion/process_multigym/${e}`,s),D=async(e,s)=>await a.post(`v2/suscripcion/get_amount_multigym/${e}`,s),N=async e=>await a.post(`v2/suscripcion/calculo_suscripcion_restante/${e}`),A=async e=>await a.post("v2/suscripcion/queuePayments",e);export{D as a,m as b,g as c,h as d,c as e,v as f,w as g,I as h,d as i,N as j,O as k,b as l,f as m,u as n,_ as o,C as p,l as q,r,p as s,A as t,E as u,o as v,n as w,y as x};
