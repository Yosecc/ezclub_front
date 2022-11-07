var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,n=(e,a)=>{for(var s in a||(a={}))r.call(a,s)&&p(e,s,a[s]);if(t)for(var s of t(a))l.call(a,s)&&p(e,s,a[s]);return e},i=(e,t)=>a(e,s(t));import{r as o}from"./vendor.435948fe.js";import{A as d}from"./index.ff49a0f4.js";const c=async(e={})=>await d.get("reports",{params:e}),m=async(e={})=>await d.get("reports/stripe/transactions",{params:e}),y=async(e={})=>await d.get("reports/stripe/transactions/due",{params:e}),u=async(e={})=>await d.get("reports/download",{params:e,responseType:"arraybuffer"}),b=async(e={})=>await d.get("reports/memberships-cancelled",{params:i(n({},e),{status:!0})}),h=async(e={})=>await d.get("reports/members-with-out-payment-method",{params:i(n({},e),{no_payment_method:!0})}),f=async(e={})=>await d.get("reports/members",{params:e}),w=async(e={})=>await d.get("reports/trainers",{params:e}),_=async(e={})=>await d.get("reports/diciplines",{params:e}),g=async(e={})=>await d.get("reports/memberships",{params:e}),I=async(e={})=>await d.get("reports/download/memberships",{params:e,responseType:"arraybuffer"}),L=async(e={})=>await d.get("reports/download/disciplines",{params:e,responseType:"arraybuffer"}),D=async(e={})=>await d.get("reports/download/trainers",{params:e,responseType:"arraybuffer"}),v=o([{typeInput:"select",name:"report_type",placeholder:"All",values:["Memberships","Products"],model:"",class:"is-3",isLabel:!0},{typeInput:"select",name:"payment_type",label:"Payment Type",placeholder:"All",values:["Credit Card","Cash"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),S=o([{typeInput:"select",name:"status",label:"Status",placeholder:"All",values:["requires_payment_method","requires_confirmation","requires_action","processing","requires_capture","canceled","succeeded"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),j=o([{typeInput:"text",name:"search",placeholder:"search",model:"",class:"is-4",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),O=o([{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),P=o([{typeInput:"selectData",name:"trainer_id",label:"Trainers",placeholder:"Select Trainer",values:[],model:"",class:"is-3",isLabel:!0}]),T=o([{typeInput:"selectData",name:"dicipline_id",label:"Diciplines",placeholder:"Select Dicipline",values:[],model:"",class:"is-3",isLabel:!0}]),E=o([{typeInput:"select",name:"status_id",label:"Status",placeholder:"Select Status",values:["active","cancel","due","hold","status:0"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]);export{S as a,m as b,O as c,D as d,b as e,P as f,w as g,u as h,E as i,g as j,I as k,f as l,j as m,h as n,y as o,T as p,_ as q,L as r,v as s,c as t};
