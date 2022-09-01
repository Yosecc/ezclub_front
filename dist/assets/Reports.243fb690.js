var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,p=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&p(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&p(e,t,a[t]);return e},i=(e,s)=>a(e,t(s));import{A as d}from"./index.ca56f9d7.js";import{r as c}from"./vendor.41bfc188.js";const o=async(e={})=>await d.get("reports",{params:e}),m=async(e={})=>await d.get("reports/stripe/transactions",{params:e}),u=async(e={})=>await d.get("reports/stripe/transactions/due",{params:e}),y=async(e={})=>await d.get("reports/download",{params:e,responseType:"arraybuffer"}),b=async(e={})=>await d.get("reports/memberships-cancelled",{params:i(n({},e),{status:!0})}),h=async(e={})=>await d.get("reports/members-with-out-payment-method",{params:i(n({},e),{no_payment_method:!0})}),_=async(e={})=>await d.get("reports/members",{params:e}),I=async(e={})=>await d.get("reports/trainers",{params:e}),L=async(e={})=>await d.get("reports/diciplines",{params:e}),w=async(e={})=>await d.get("reports/memberships",{params:e}),D=c([{typeInput:"select",name:"report_type",placeholder:"All",values:["Memberships","Products"],model:"",class:"is-3",isLabel:!0},{typeInput:"select",name:"payment_type",label:"Payment Type",placeholder:"All",values:["Credit Card","Cash"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),f=c([{typeInput:"select",name:"status",label:"Status",placeholder:"All",values:["requires_payment_method","requires_confirmation","requires_action","processing","requires_capture","canceled","succeeded"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),g=c([{typeInput:"text",name:"search",placeholder:"search",model:"",class:"is-4",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),v=c([{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]),S=c([{typeInput:"selectData",name:"trainer_id",label:"Trainers",placeholder:"Select Trainer",values:[],model:"",class:"is-3",isLabel:!0}]),j=c([{typeInput:"selectData",name:"dicipline_id",label:"Diciplines",placeholder:"Select Dicipline",values:[],model:"",class:"is-3",isLabel:!0}]),O=c([{typeInput:"selectData",name:"status_id",label:"Status",placeholder:"Select Status",values:["cancel","active","due","hold"],model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"End Date",model:"",class:"is-3",isLabel:!0}]);export{f as a,m as b,v as c,y as d,b as e,S as f,I as g,O as h,w as i,_ as j,g as k,h as l,u as m,j as n,L as o,D as p,o as q};
