<<<<<<< HEAD:dist/assets/Products.48262a12.js
import{A as e}from"./index.ea01e17d.js";import{r as a}from"./vendor.20c6e26b.js";const t=a([]),s=async()=>{const a=await e.get("products");return t.value=a.data,a},l=a({}),c=async a=>{const t=await e.get(`products/${a}`);return l.value=t.data,t},o=async a=>{const s=await e.post(`products/${l.value.id}/update`,a);return t.value=s.data,s},p=async a=>{const s=await e.post("products",a);return t.value=s.data,s},r=a(),n=async()=>{const a=await e.get("product_categories");return r.value=a.data,a},d=a([{typeInput:"checkbox",name:"status",placeholder:"Status",model:[""],class:"is-6"},{typeInput:"file",name:"photo",placeholder:"Product Picture",model:"",class:"d-flex is-6 justify-content-end"},{typeInput:"text",name:"name",placeholder:"Product Name",model:"",class:"is-12"},{typeInput:"number",name:"retail_price",placeholder:"Retail Price $",model:"",class:"is-4"},{typeInput:"number",name:"price",placeholder:"Product Cost $",model:"",class:"is-4"},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[""],class:"is-4",filterOptionText:e=>e.name},{typeInput:"select",name:"aceptable_payment_types",placeholder:"Acceptable Payment Types",model:"",values:["All","Card","Cash","Bitcoin"],class:"is-4"},{typeInput:"text",name:"var_code",placeholder:"Barcode",model:"",class:"is-4"},{typeInput:"selectData",name:"product_categories_id",placeholder:"Category",model:"",values:[""],class:"is-4"},{typeInput:"select",name:"size",placeholder:"Zize",model:"",values:["XS","S","M","XL","XXL","XXXL"],class:"is-4"},{typeInput:"select",name:"color",placeholder:"Color",model:"",values:["red","blue","yellow","green","black","white"],class:"is-4"},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"textarea",name:"descriptions",placeholder:"Description",model:"",class:"is-12"}]);a([]);export{n as a,c as b,o as c,r as d,s as g,d as i,t as p,p as s};
=======
import{A as e}from"./index.86279b2e.js";import{r as a}from"./vendor.eb57aacd.js";const t=a([]),s=async()=>{const a=await e.get("products");return t.value=a.data,a},l=a({}),c=async a=>{const t=await e.get(`products/${a}`);return l.value=t.data,t},o=async a=>{const s=await e.post(`products/${l.value.id}/update`,a);return t.value=s.data,s},p=async a=>{const s=await e.post("products",a);return t.value=s.data,s},r=a(),n=async()=>{const a=await e.get("product_categories");return r.value=a.data,a},d=a([{typeInput:"checkbox",name:"status",placeholder:"Status",model:[""],class:"is-6"},{typeInput:"file",name:"photo",placeholder:"Product Picture",model:"",class:"d-flex is-6 justify-content-end"},{typeInput:"text",name:"name",placeholder:"Product Name",model:"",class:"is-12"},{typeInput:"number",name:"retail_price",placeholder:"Retail Price $",model:"",class:"is-4"},{typeInput:"number",name:"price",placeholder:"Product Cost $",model:"",class:"is-4"},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[""],class:"is-4",filterOptionText:e=>e.name},{typeInput:"select",name:"aceptable_payment_types",placeholder:"Acceptable Payment Types",model:"",values:["All","Card","Cash","Bitcoin"],class:"is-4"},{typeInput:"text",name:"var_code",placeholder:"Barcode",model:"",class:"is-4"},{typeInput:"selectData",name:"product_categories_id",placeholder:"Category",model:"",values:[""],class:"is-4"},{typeInput:"select",name:"size",placeholder:"Zize",model:"",values:["XS","S","M","XL","XXL","XXXL"],class:"is-4"},{typeInput:"select",name:"color",placeholder:"Color",model:"",values:["red","blue","yellow","green","black","white"],class:"is-4"},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"textarea",name:"descriptions",placeholder:"Description",model:"",class:"is-12"}]);a([]);export{n as a,c as b,o as c,r as d,s as g,d as i,t as p,p as s};
>>>>>>> 4d6c8f042779fb7780963bc48ad59415eb6ca886:dist/assets/Products.4b734fc6.js
