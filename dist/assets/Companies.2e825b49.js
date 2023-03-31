import{A as e,P as a,g as t}from"./index.87d4477d.js";import{u as l,r as s,c as o}from"./vendor.b43d5946.js";const{cookies:n}=l(),i=s(null);o((()=>i.value?i.value.company_name:"")),s(null);const c=s({});s(n.get("locations_id"));const p=o((()=>i.value?i.value.locations:[])),d=o((()=>i.value?i.value.locations.filter((e=>1==e.status)):[])),m=o((()=>{if(i.value){const e=[];return i.value.locations.forEach((a=>{a.terminales.forEach((t=>{e.push({locations_id:a.id,id:t.id,label:t.label,serial_number:t.serial_number,status:t.status})}))})),e.filter((e=>e.locations_id==t(x.value,"locations_id").model))}return[]})),r=async a=>{const t=await e.get(`get_location/${a}`);return c.value=t.data,t},u=async()=>{const a=await e.get("company/get");return i.value=a.data,h(),a},y=e=>{n.set("locations_id",e),h()},_=o((()=>n.get("locations_id")?n.get("locations_id"):null)),h=()=>{const t=n.get("locations_id");if(t){const l=p.value.find((e=>e.id==t));return l&&(n.set("location_name",l.name),a.value=l.key_stripe_public,e.defaults.headers.common["x-location"]=n.get("locations_id")),l}return null},b=async a=>{const t=await e.get(`company/${a}`);return i.value=t.data,t},I=async a=>await e.post(`companies/updatecompany/${i.value.id}`,a),L=async a=>await e.post(`companies/updateCompanyContact/${i.value.id}`,a),v=async(a,t)=>await e.post(`companies/updatelocation/${a}`,t),C=async a=>await e.post("companies/storeLocation",a),x=s([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-4",change:null}]),f=s([{typeInput:"file",name:"logo",placeholder:"Company logo",model:"",class:"is-12"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-6"},{typeInput:"email",name:"company_email",placeholder:"Company email",model:"",class:"is-6"},{typeInput:"text",name:"EIN",placeholder:"EIN",model:"",class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Company Phone",model:"",class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Company Principal Address",model:"",class:"is-8"},{typeInput:"number",name:"company_postal_code",placeholder:"Company Postal Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_country_id",placeholder:"Company Country Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_city_id",placeholder:"Company City",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_state_id",placeholder:"Company State",model:"",class:"is-4"}]),q=s([{typeInput:"file",name:"logo",placeholder:"Company Logo",model:""}]),g=s([{typeInput:"text",name:"company_name",placeholder:"Club Name",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"number",name:"EIN",placeholder:"EIN",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Club Address",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"selectData",name:"company_city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"company_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"company_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"company_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"email",name:"company_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Club phone",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"textarea",name:"note",placeholder:"Notes",isLabel:!0,model:"",required:!0,class:"is-12"}]),D=s([{typeInput:"text",name:"contact_name",placeholder:"Represetative First Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_middle_name",placeholder:"Represetative Middle Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_last_name",placeholder:"Represetative Last Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"email",name:"contact_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",required:!0,class:"is-3"},{typeInput:"selectData",name:"contact_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_city_id",isLabel:!0,placeholder:"City",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"text",name:"contact_address",placeholder:"Club Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"select",name:"contact_goverment_id",placeholder:"Goverment ID Type",isLabel:!0,values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_personal_identifications",placeholder:"ID #",isLabel:!0,model:"",required:!0,class:"is-8"}]),N=s([{typeInput:"checkbox",name:"pincipal_address",placeholder:"Principal Address",isLabel:!0,model:[""],required:!1,class:"is-4"},{typeInput:"checkbox",name:"status",placeholder:"status",isLabel:!0,model:[],required:!1,class:"is-4"},{typeInput:"file",name:"image",placeholder:"Location image",isLabel:!0,model:"",required:!0,class:"is-4 d-flex justify-content-end"},{typeInput:"text",name:"name",placeholder:"Location Name",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"text",name:"address",placeholder:"Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"selectData",name:"city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"text",name:"map",placeholder:"Location map (URL)",isLabel:!0,model:"",required:!1,class:"is-6"}]);export{u as a,r as b,i as c,C as d,d as e,p as f,b as g,g as h,N as i,q as j,I as k,x as l,D as m,L as n,_ as o,v as p,f as q,y as s,m as t};
