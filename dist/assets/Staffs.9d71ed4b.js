import{A as e}from"./index.c1ae2e2e.js";import{r as a}from"./vendor.20c6e26b.js";const t=a([]),s=async()=>{const a=await e.get("get_trainers");return t.value=a.data,a},l=a([]),n=async()=>{const a=await e.get("staffs");return l.value=a.data.staffs,a},r=a(),i=async a=>{const t=await e.get(`staffs/${a}/edit`);return r.value=t.data,t};a();const d=async a=>{const t=await e.get("staffRoles");return r.value=t.data,t},o=async(a,t)=>await e.put(`staffs/${a}`,t),p=async a=>await e.post("staffs",a),c=a([{typeInput:"file",name:"photo",placeholder:"Staff Picture",model:"",required:!0,class:"is-12 d-flex justify-content-end"},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"company_name_staff",placeholder:"Company Name",model:"",class:"is-6"},{typeInput:"text",name:"ein",placeholder:"Company EIN #",model:"",class:"is-6"},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"is-3"},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"is-3"},{typeInput:"text",name:"var_code",placeholder:"Staff ID Card",model:"",class:"is-6"},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",class:"is-4"},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-8"},{typeInput:"number",name:"code_postal",placeholder:"Postal Code",model:"",class:"is-3"},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12"},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6"},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6"},{typeInput:"selectData",name:"type_trainer",placeholder:"Type",values:[{description:"tipo 1",id:1},{description:"tipo 0",id:0}],model:"",required:!0,class:"is-4"},{typeInput:"number",name:"working_hours",placeholder:"Working Hours",model:"",required:!0,class:"is-4"},{typeInput:"number",name:"salary",placeholder:"Salary",model:"",required:!1,class:"is-4"},{typeInput:"number",name:"rent_space",placeholder:"Rent Space",model:"",required:!1,class:"is-4"},{typeInput:"number",name:"price_rent",placeholder:"Price Rent",model:"",required:!1,class:"is-4"}]),m=a([{typeInput:"selectDataActionChange",name:"locations_id",placeholder:"Locations",values:[],model:"",disabled:!1,class:"is-4"},{typeInput:"selectData",name:"staff_roles_id",placeholder:"Role",values:[],model:"",required:!0,class:"is-6",filterOptionText:e=>e.description}]),u=a({typeInput:"hidden",name:"waiver",placeholder:"First Name",model:"",required:!1,class:"is-4"});export{c as a,d as b,i as c,u as d,p as e,s as f,n as g,m as i,o as p,l as s,t};
