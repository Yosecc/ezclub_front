<<<<<<< HEAD:dist/assets/Discounts.5a427a3a.js
import{r as e}from"./vendor.84e48f7c.js";import{A as a,g as s}from"./index.5855fd6a.js";const t=e([]),i=e({}),n=async(e=null,s=null)=>{const i=await a.get(`discounts?status=${e}&applies=${s}`);return t.value=i.data.discounts,i},l=async e=>await a.post("discounts",e),d=async(e,s)=>await a.put(`discounts/${e}`,s),o=async e=>{const s=await a.get(`discounts/${e}/edit`);return i.value=s.data,s},r=async e=>await a.delete(`/discounts/destroy/${e}`),u=async(e,s)=>await a.get(`discounts/validateCupon/${e}?applies=${s}`),p=async(e,s)=>await a.get(`v2/discounts/validateCupon/${e}?applies=${s}`),c=e([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,required:!1,class:"is-12",isLabel:!0},{typeInput:"text",name:"code",placeholder:"Discount Code",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"name",placeholder:"Name",model:"",required:!0,class:"is-4",isLabel:!0,maxLength:40},{typeInput:"select",name:"type",placeholder:"Discount Type",values:["dolar","percentaje"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"value",placeholder:"Discount Value",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"applies",placeholder:"Applies to",values:["All","membership","product"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"duration",placeholder:"Duration",values:["once","repeating","forever"],model:"",required:!0,class:"is-4",isLabel:!0,change:function(e,a){"repeating"==this.model?(s(a,"duration_in_months").typeInput="number",s(a,"duration_in_months").required=!0):(s(a,"duration_in_months").typeInput="hidden",s(a,"duration_in_months").required=!1)}},{typeInput:"number",name:"max_redemptions",placeholder:"Usage limit num",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"date",name:"date_expired",placeholder:"End Date",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"time",name:"time_expired",placeholder:"End Time",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"hidden",name:"duration_in_months",placeholder:"Duration in months",model:"",required:!1,class:"is-3",isLabel:!0}]);export{r as a,o as b,p as c,t as d,n as g,c as i,d as p,l as s,u as v};
=======
import{A as e,g as a}from"./index.fc85b2ef.js";import{r as s}from"./vendor.4454b83d.js";const t=s([]),i=s({}),n=async(a=null,s=null)=>{const i=await e.get(`discounts?status=${a}&applies=${s}`);return t.value=i.data.discounts,i},l=async a=>await e.post("discounts",a),d=async(a,s)=>await e.put(`discounts/${a}`,s),o=async a=>{const s=await e.get(`discounts/${a}/edit`);return i.value=s.data,s},r=async a=>await e.delete(`/discounts/destroy/${a}`),u=async(a,s)=>await e.get(`discounts/validateCupon/${a}?applies=${s}`),p=async(a,s)=>await e.get(`v2/discounts/validateCupon/${a}?applies=${s}`),c=s([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,required:!1,class:"is-12",isLabel:!0},{typeInput:"text",name:"code",placeholder:"Discount Code",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"name",placeholder:"Name",model:"",required:!0,class:"is-4",isLabel:!0,maxLength:40},{typeInput:"select",name:"type",placeholder:"Discount Type",values:["dolar","percentaje"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"text",name:"value",placeholder:"Discount Value",model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"applies",placeholder:"Applies to",values:["All","membership","product"],model:"",required:!0,class:"is-4",isLabel:!0},{typeInput:"select",name:"duration",placeholder:"Duration",values:["once","repeating","forever"],model:"",required:!0,class:"is-4",isLabel:!0,change:function(e,s){"repeating"==this.model?(a(s,"duration_in_months").typeInput="number",a(s,"duration_in_months").required=!0):(a(s,"duration_in_months").typeInput="hidden",a(s,"duration_in_months").required=!1)}},{typeInput:"number",name:"max_redemptions",placeholder:"Usage limit num",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"date",name:"date_expired",placeholder:"End Date",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"time",name:"time_expired",placeholder:"End Time",model:"",required:!1,class:"is-3",isLabel:!0},{typeInput:"hidden",name:"duration_in_months",placeholder:"Duration in months",model:"",required:!1,class:"is-3",isLabel:!0}]);export{r as a,o as b,p as c,t as d,n as g,c as i,d as p,l as s,u as v};
>>>>>>> 983790ce92d3afaf021ffc83a7bdeefcd7b23b25:dist/assets/Discounts.9a0ecf1b.js