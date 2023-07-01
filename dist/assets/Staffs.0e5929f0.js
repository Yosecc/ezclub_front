import{A as e}from"./index.a01cdf46.js";import{r as a}from"./vendor.6c78dc37.js";const s=a([]),t=async()=>{const a=await e.get("get_trainers");return s.value=a.data,a},l=a([]),r=async()=>{const a=await e.get("staffs");return l.value=a.data.staffs,a},i=a(null),n=async a=>{const s=await e.get(`staffs/${a}/edit`);return i.value=s.data,s},d=a(),o=async a=>{const s=await e.get("staffRoles");return d.value=s.data,s},p=async a=>await e.get(`staff/user/${a}`),c=async a=>await e.post(`staff/user/store/${i.value.id}`,a),m=async(a,s)=>await e.post(`staffs/update/${a}`,s),u=async a=>await e.post("staffs",a),y=async(a,s)=>await e.post(`staff/sign/${s}`,{sign:a}),f=a([{typeInput:"file",name:"photo",placeholder:"Staff Picture",model:"",required:!1,camera:!0,class:"is-12 d-flex justify-content-end"},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,isLabel:!0,class:"is-4"},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1,isLabel:!0,class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,isLabel:!0,class:"is-4"},{typeInput:"text",name:"company_name_staff",placeholder:"Company Name",model:"",isLabel:!0,class:"is-6"},{typeInput:"text",name:"ein",placeholder:"Company EIN #",model:"",isLabel:!0,class:"is-6"},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!1,isLabel:!0,class:"is-3"},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female"],model:"",required:!1,isLabel:!0,class:"is-3"},{typeInput:"text",name:"var_code",placeholder:"Staff ID Card",model:"",isLabel:!0,class:"is-6"},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"personal_identifications",placeholder:"ID #",model:"",required:!1,class:"is-8",isLabel:!0},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",isLabel:!0,filterOptionText:e=>e.name},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",isLabel:!0,filterOptionText:e=>e.name},{typeInput:"number",name:"code_postal",placeholder:"Postal Code",model:"",class:"is-3",isLabel:!0},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",values:[""],class:"is-3",isLabel:!0,filterOptionText:e=>e.name},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,isLabel:!0,class:"is-6"},{typeInput:"select",name:"recurrence",placeholder:"Recurrence",values:["bi-weekly","monthly","weekly","yearly","hourly"],model:"",required:!1,isLabel:!0,class:"is-3"},{typeInput:"number",name:"salary",placeholder:"Salary",model:"",required:!1,isLabel:!0,class:"is-4"},{typeInput:"switch",name:"rent_space",placeholder:"Rent Space",values:["","Rent Space"],model:!1,default:!1,class:"is-4",required:!1},{typeInput:"number",name:"price_rent",placeholder:"Price Rent",model:"",required:!1,isLabel:!0,class:"is-4"}]),h=a([{typeInput:"checkboxGroupSimple",name:"locations",text:"Locations",values:[],model:[],disabled:!1,class:"is-12"},{typeInput:"checkboxGroupSimple",name:"staff_roles",text:"Role",values:[],model:[],required:!0,class:"is-12",filter:e=>e.description}]);a({typeInput:"hidden",name:"waiver",placeholder:"First Name",model:"",required:!1,class:"is-4"});const I=a([{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,isLabel:!0,class:"is-4"},{typeInput:"password",name:"password",placeholder:"Password",model:"",required:!0,isLabel:!0,class:"is-4"}]);export{r as a,c as b,i as c,y as d,n as e,f,t as g,h,I as i,o as j,p as k,u as l,m as p,l as s,s as t};
