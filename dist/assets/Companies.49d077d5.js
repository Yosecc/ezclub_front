import{u as e,r as a,b as t}from"./vendor.84e48f7c.js";import{A as l,P as s,g as o}from"./index.160bf48b.js";const{cookies:n}=e(),i=a(null);t((()=>i.value?i.value.company_name:"")),a(null);const c=a({});a(n.get("locations_id"));const p=t((()=>i.value?i.value.locations:[])),d=t((()=>i.value?i.value.locations.filter((e=>1==e.status)):[])),m=t((()=>{if(i.value){const e=[];return i.value.locations.forEach((a=>{a.terminales.forEach((t=>{e.push({locations_id:a.id,id:t.id,label:t.label,serial_number:t.serial_number,status:t.status})}))})),e.filter((e=>e.locations_id==o(f.value,"locations_id").model))}return[]})),r=async e=>{const a=await l.get(`get_location/${e}`);return c.value=a.data,a},u=async()=>{const e=await l.get("company/get");return i.value=e.data,h(),e},y=e=>{n.set("locations_id",e),h()},_=t((()=>n.get("locations_id")?n.get("locations_id"):null)),h=()=>{const e=n.get("locations_id");if(e){const a=p.value.find((a=>a.id==e));return a&&(n.set("location_name",a.name),s.value=a.dev_key_stripe_public,l.defaults.headers.common["x-location"]=n.get("locations_id")),a}return null},b=async e=>{const a=await l.get(`company/${e}`);return i.value=a.data,a},I=async e=>await l.post(`companies/updatecompany/${i.value.id}`,e),L=async e=>await l.post(`companies/updateCompanyContact/${i.value.id}`,e),v=async(e,a)=>await l.post(`companies/updatelocation/${e}`,a),C=async e=>await l.post("companies/storeLocation",e),f=a([{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Location",model:"",values:[],class:"is-4",change:null}]),x=a([{typeInput:"file",name:"logo",placeholder:"Company logo",model:"",class:"is-12"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-6"},{typeInput:"email",name:"company_email",placeholder:"Company email",model:"",class:"is-6"},{typeInput:"text",name:"EIN",placeholder:"EIN",model:"",class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Company Phone",model:"",class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Company Principal Address",model:"",class:"is-8"},{typeInput:"number",name:"company_postal_code",placeholder:"Company Postal Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_country_id",placeholder:"Company Country Code",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_city_id",placeholder:"Company City",model:"",class:"is-4"},{typeInput:"selectData",values:[""],name:"company_state_id",placeholder:"Company State",model:"",class:"is-4"}]),q=a([{typeInput:"file",name:"logo",placeholder:"Company Logo",model:""}]),g=a([{typeInput:"text",name:"company_name",placeholder:"Club Name",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"number",name:"EIN",placeholder:"EIN",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"text",name:"company_principal_address",placeholder:"Club Address",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"selectData",name:"company_city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"company_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"company_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"company_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"email",name:"company_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"number",name:"company_phone",placeholder:"Club phone",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"textarea",name:"note",placeholder:"Notes",isLabel:!0,model:"",required:!0,class:"is-12"}]),D=a([{typeInput:"text",name:"contact_name",placeholder:"Represetative First Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_middle_name",placeholder:"Represetative Middle Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"text",name:"contact_last_name",placeholder:"Represetative Last Name",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"email",name:"contact_email",placeholder:"Club Email",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_postal_code",placeholder:"Postal Code",isLabel:!0,model:"",required:!0,class:"is-3"},{typeInput:"selectData",name:"contact_country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_city_id",isLabel:!0,placeholder:"City",model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"contact_state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"text",name:"contact_address",placeholder:"Club Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"select",name:"contact_goverment_id",placeholder:"Goverment ID Type",isLabel:!0,values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!0,class:"is-4"},{typeInput:"number",name:"contact_personal_identifications",placeholder:"ID #",isLabel:!0,model:"",required:!0,class:"is-8"}]),N=a([{typeInput:"checkbox",name:"pincipal_address",placeholder:"Principal Address",isLabel:!0,model:[""],required:!1,class:"is-4"},{typeInput:"checkbox",name:"status",placeholder:"status",isLabel:!0,model:[],required:!1,class:"is-4"},{typeInput:"file",name:"image",placeholder:"Location image",isLabel:!0,model:"",required:!0,class:"is-4 d-flex justify-content-end"},{typeInput:"text",name:"name",placeholder:"Location Name",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"text",name:"address",placeholder:"Address",isLabel:!0,model:"",required:!0,class:"is-12"},{typeInput:"selectData",name:"city_id",placeholder:"City",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"selectData",name:"state_id",placeholder:"State",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",isLabel:!0,model:"",class:"is-3"},{typeInput:"selectData",name:"country_id",placeholder:"Country",isLabel:!0,model:"",values:[""],class:"is-3",filterOptionText:e=>e.name},{typeInput:"number",name:"phone",placeholder:"Phone Number",isLabel:!0,model:"",required:!0,class:"is-6"},{typeInput:"text",name:"map",placeholder:"Location map (URL)",isLabel:!0,model:"",required:!1,class:"is-6"}]);export{u as a,r as b,i as c,C as d,d as e,p as f,b as g,g as h,N as i,q as j,I as k,f as l,D as m,L as n,_ as o,v as p,x as q,y as s,m as t};
