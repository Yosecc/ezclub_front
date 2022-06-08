import{r as e,b as a}from"./vendor.1faf4f77.js";import{A as l,P as t,g as s}from"./index.6fffb7e6.js";const n=e(null);a((()=>n.value?n.value.company_name:"")),e(null);const o=e({}),i=a((()=>n.value?n.value.locations:[])),p=a((()=>n.value?n.value.locations.filter((e=>1==e.status)):[])),c=a((()=>{if(n.value){const e=[];return n.value.locations.forEach((a=>{a.terminales.forEach((l=>{e.push({locations_id:a.id,id:l.id,label:l.label,serial_number:l.serial_number,status:l.status})}))})),e.filter((e=>e.locations_id==s(b.value,"locations_id").model))}return[]})),d=async e=>{const a=await l.get(`get_location/${e}`);return o.value=a.data,a},m=async()=>{const e=await l.get("company/get");return n.value=e.data,t.value=e.data.dev_key_stripe_public,e},r=async e=>{const a=await l.get(`company/${e}`);return n.value=a.data,a},u=async e=>await l.post(`companies/updatecompany/${n.value.id}`,e),y=async e=>await l.post(`companies/updateCompanyContact/${n.value.id}`,e),h=async(e,a)=>await l.post(`companies/updatelocation/${e}`,a),_=async e=>await l.post("companies/storeLocation",e),b=e([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-4",change:null}]),I=e([{typeInput:"file",name:"logo",placeholder:"Company logo",model:"",class:"is-12"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-6"},{typeInput:"email",name:"company_email",placeholder:"Company email",model:"",class:"is-6"},{typeInput:"text",name:"EIN",placeholder:"EIN",model:"",class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Company Phone",model:"",class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Company Principal Address",model:"",class:"is-8"},{typeInput:"number",name:"company_postal_code",placeholder:"Company Postal Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_country_id",placeholder:"Company Country Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_city_id",placeholder:"Company City",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_state_id",placeholder:"Company State",model:"",class:"is-4"}]),L=e([{typeInput:"file",name:"logo",placeholder:"Company Logo",model:""}]),v=e([{typeInput:"text",name:"company_name",placeholder:"Club Name",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"number",name:"EIN",placeholder:"EIN",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Club Address",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"selectData",name:"company_city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"company_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"company_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"company_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"email",name:"company_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Club phone",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"textarea",name:"note",placeholder:"Notes",isLabel:!0,model:"",required:!0,class:"is-12"}]),C=e([{typeInput:"text",name:"contact_name",placeholder:"Represetative First Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_middle_name",placeholder:"Represetative Middle Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_last_name",placeholder:"Represetative Last Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"email",name:"contact_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",required:!0,class:"is-3"},{typeInput:"selectData",name:"contact_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_city_id",isLabel:!0,placeholder:"City",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"text",name:"contact_address",placeholder:"Club Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"select",name:"contact_goverment_id",placeholder:"Goverment ID Type",isLabel:!0,values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_personal_identifications",placeholder:"ID #",isLabel:!0,model:"",required:!0,class:"is-8"}]),f=e([{typeInput:"checkbox",name:"pincipal_address",placeholder:"Principal Address",isLabel:!0,model:[""],required:!1,class:"is-4"},{typeInput:"checkbox",name:"status",placeholder:"status",isLabel:!0,model:[],required:!1,class:"is-4"},{typeInput:"file",name:"image",placeholder:"Location image",isLabel:!0,model:"",required:!0,class:"is-4 d-flex justify-content-end"},{typeInput:"text",name:"name",placeholder:"Location Name",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"text",name:"address",placeholder:"Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"selectData",name:"city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"text",name:"map",placeholder:"Location map (URL)",isLabel:!0,model:"",required:!1,class:"is-6"}]);export{d as a,m as b,n as c,p as d,i as e,v as f,r as g,L as h,f as i,u as j,C as k,b as l,y as m,I as n,h as p,_ as s,c as t};