import{A as e}from"./index.a9908f9a.js";import{r as a}from"./vendor.685e53b0.js";const t=a([]),s=async(a=null,s=null)=>{const l=await e.get(`products?locations_id=${a}&status=${s}`);return t.value=l.data,l},l=a({}),c=async a=>{const t=await e.get(`products/${a}`);return l.value=t.data,t},o=async a=>await e.post(`products/${l.value.id}/update`,a),p=async a=>await e.post(`products/${l.value.id}/newPrice`,{price:a}),r=async a=>await e.post("products",a),n=a(),d=async()=>{const a=await e.get("product_categories");return n.value=a.data,a},i=a([{typeInput:"number",name:"price",placeholder:"Price $",model:"",class:"is-12"}]),u=a([{typeInput:"switch",name:"status",values:["","Active"],placeholder:"Status",model:!0,default:!0,class:"is-6"},{typeInput:"file",name:"photo",placeholder:"Product Picture",model:"",class:"d-flex is-6 justify-content-end"},{typeInput:"text",name:"name",placeholder:"Product Name",model:"",class:"is-6"},{typeInput:"select",name:"aceptable_payment_types",placeholder:"Acceptable Payment Types",model:"",values:["All","Card","Cash","Bitcoin"],class:"is-3"},{typeInput:"text",name:"var_code",placeholder:"Barcode",model:"",class:"is-3"},{typeInput:"selectData",name:"product_categories_id",placeholder:"Category",model:"",values:[""],class:"is-3"},{typeInput:"select",name:"size",placeholder:"Zize",model:"",values:["XS","S","M","XL","XXL","XXXL"],class:"is-3"},{typeInput:"select",name:"color",placeholder:"Color",model:"",values:["red","blue","yellow","green","black","white"],class:"is-3"},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"textarea",name:"descriptions",placeholder:"Description",model:"",class:"is-12"}]);a([]);export{d as a,c as b,i as c,l as d,p as e,o as f,s as g,n as h,u as i,t as p,r as s};
