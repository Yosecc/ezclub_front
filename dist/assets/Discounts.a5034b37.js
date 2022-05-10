import{A as e,g as a}from"./index.5656e9e1.js";import{r as s}from"./vendor.a238d640.js";const t=s([]),i=s({}),n=async(a=null,s=null)=>{const i=await e.get(`discounts?status=${a}&applies=${s}`);return t.value=i.data.discounts,i},l=async a=>await e.post("discounts",a),d=async(a,s)=>await e.put(`discounts/${a}`,s),r=async a=>{const s=await e.get(`discounts/${a}/edit`);return i.value=s.data,s},o=async a=>await e.delete(`/discounts/destroy/${a}`),u=async(a,s)=>await e.get(`discounts/validateCupon/${a}?applies=${s}`),p=s([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,required:!1,class:"is-12",isLabel:!0},{typeInput:"text",name:"code",placeholder:"Discount Code",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"name",placeholder:"Name",model:"",required:!0,class:"is-4",isLabel:!0,maxLength:40},{typeInput:"select",name:"type",placeholder:"Discount Type",values:["dolar","percentaje"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"value",placeholder:"Discount Value",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"applies",placeholder:"Applies to",values:["All","membership","product"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"duration",placeholder:"Duration",values:["once","repeating","forever"],model:"",required:!0,class:"is-4",isLabel:!0,change:function(e,s){"repeating"==this.model?(a(s,"duration_in_months").typeInput="number",a(s,"duration_in_months").required=!0):(a(s,"duration_in_months").typeInput="hidden",a(s,"duration_in_months").required=!1)}},{typeInput:"number",name:"max_redemptions",placeholder:"Usage limit num",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"date",name:"date_expired",placeholder:"End Date",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"time",name:"time_expired",placeholder:"End Time",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"hidden",name:"duration_in_months",placeholder:"Duration in months",model:"",required:!1,class:"is-3",isLabel:!0}]);export{o as a,r as b,t as d,n as g,p as i,d as p,l as s,u as v};
