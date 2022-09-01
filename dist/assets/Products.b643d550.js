import{A as e,g as a}from"./index.ca56f9d7.js";import{r as t,z as s}from"./vendor.41bfc188.js";const l=t([]),o=t(0);s({id:"CUSTOM",companies_id:1,name:"",sku:"",price:null,retail_price:null,taxes_id:1,aceptable_payment_types:"All",photo:"",color:null,size:null,var_code:"custom",descriptions:null,product_categories_id:7,user_id:0,stock:1,status:"active",stripe_id:"",loading:!1,classe:"primary",category:{id:7,companies_id:1,name:"Miscellaneous",description:"Miscellaneous",image:"product_categories/misselaniuss.png",status:"active"},locations:[{id:85,locations_id:1,products_id:88}]});const c=async(a=null,t=null)=>{const s=await e.get(`products?locations_id=${a}&status=${t}`),c=s.data.products.map((function(e){return e.custom&&(e.price="",e.name=""),e}));return l.value=c,o.value=s.data.total,s},i=t({}),p=async a=>{const t=await e.get(`products/${a}`);return i.value=t.data,t},n=async a=>await e.post(`products/${i.value.id}/update`,a),r=async a=>await e.post(`products/${i.value.id}/newPrice`,{price:a}),u=async a=>await e.post("products",a),d=t(),m=async()=>{const a=await e.get("product_categories");return d.value=a.data,a},y=t([{typeInput:"number",name:"price",placeholder:"Price $",model:"",class:"is-12"}]),v=t([{typeInput:"switch",name:"status",values:["Inactive","Active"],placeholder:"Status",isLabel:!0,model:!0,default:!0,class:"is-2"},{typeInput:"switchEventChangeInput",name:"custom",values:["NO","YES"],placeholder:"Price Custom",isLabel:!0,model:!1,default:!1,class:"is-2",change:function(){!this.model?(a(y.value,"price").model=1,a(y.value,"price").typeInput="hidden"):(a(y.value,"price").model=null,a(y.value,"price").typeInput="number")}},{typeInput:"file",name:"photo",placeholder:"Product Picture",model:"",class:"d-flex is-8 justify-content-end"},{typeInput:"text",name:"name",placeholder:"Product Name",model:"",class:"is-6"},{typeInput:"select",name:"aceptable_payment_types",placeholder:"Acceptable Payment Types",model:"",values:["All","Card","Cash","Bitcoin"],class:"is-3"},{typeInput:"text",name:"var_code",placeholder:"Barcode",model:"",class:"is-3"},{typeInput:"selectData",name:"product_categories_id",placeholder:"Category",model:"",values:[""],class:"is-3"},{typeInput:"select",name:"size",placeholder:"Size",model:"",values:["4XS","3XS","XXS","XS","S","M","L","XL","XXL","6oz","8oz","10oz","12oz","14oz","16oz","Speed","Heavy","Senior","Junior"],class:"is-3"},{typeInput:"color",name:"color",placeholder:"Color",model:"",values:["red","blue","yellow","green","black","white"],class:"is-3"},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"textarea",name:"descriptions",placeholder:"Description",model:"",class:"is-12"}]);t([]);const h=async a=>await e.post("products/product_updated_stock",a);export{m as a,p as b,y as c,i as d,r as e,n as f,c as g,h,v as i,d as j,l as p,u as s,o as t};
