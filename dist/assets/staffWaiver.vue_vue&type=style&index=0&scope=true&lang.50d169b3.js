import{_ as e}from"./inputsLayaut.vue_vue&type=script&setup=true&lang.2639f676.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.520d5e4d.js";import{d as s,b as a,r as l,o as n,h as o,B as r,D as i,j as p,k as d,N as u,O as m,J as c,G as f}from"./vendor.494d8f4f.js";import{_ as y}from"./V-Button.vue_vue&type=script&setup=true&lang.1dd5b110.js";import{_ as b}from"./pdf_icon.0444a540.js";var v=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const u=s;i();const m=a((()=>"create"==u.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),c=l([{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-6"},{typeInput:"text",name:"company_ein",placeholder:"Company EIN #",model:"",class:"is-6"},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"is-3"},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"is-3"},{typeInput:"text",name:"staff_id",placeholder:"Staff ID Card",model:"",class:"is-6"},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",class:"is-4"},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-8"},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]}]);return(s,a)=>{const l=e,i=t;return n(),o(i,{buttons:u.buttons,step:u.step,titles:r(m)},{default:p((()=>[d(l,{"inputs-step":c.value},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),I=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const u=s;i();const m=a((()=>"create"==u.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"})),c=l([{typeInput:"select",name:"role",placeholder:"Role",values:["",""],model:"",required:!0,class:"is-6"},{typeInput:"text",name:"user",placeholder:"User",model:"",class:"is-6"},{typeInput:"select",name:"work_location",placeholder:"Work Location",values:["location","location","location"],model:"",class:"is-12"},{typeInput:"password",name:"password",placeholder:"Password",model:"",class:"is-6"},{typeInput:"password",name:"confirm_password",placeholder:"Confirm Password",model:"",class:"is-6"},{typeInput:"checkboxGroupSimple",name:"permissions",model:[1,2],values:[{id:1,name:"Members"},{id:2,name:"Staff"},{id:3,name:"Company"}]}]);return(s,a)=>{const l=e,i=t;return n(),o(i,{buttons:u.buttons,step:u.step,titles:r(m)},{default:p((()=>[d(l,{"inputs-step":c.value},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const h={class:"columns is-multiline"},_={class:"columns is-multiline column is-10"},x={class:"border-1 document_box p-4 d-flex justify-content-center radius-small"},g={href:"234",class:"text-center"},w=d("img",{style:{width:"70px"},src:b,alt:""},null,-1),A={class:"firmas text-right column is-2"},q=f(" Sing "),N=f(" Print ");var C=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const s=e,i=l([{name:"Waiver_010221.pdf",url:""}]),f=a((()=>"create"==s.type?{title:"Add a new staff",subtitle:"Add information for a new staff"}:{title:"Edit staff",subtitle:"Edit information for a staff"}));return(e,a)=>{const l=y,b=t;return n(),o(b,{buttons:s.buttons,step:s.step,titles:r(f)},{default:p((()=>[d("div",h,[d("div",_,[(n(!0),o(u,null,m(i.value,((e,t)=>(n(),o("div",{class:"column is-3 mb-4",key:`family-${t}`},[d("div",x,[d("a",g,[w,d("p",null,c(e.name),1)])])])))),128))]),d("div",A,[d(l,{class:"mb-3 ",color:"success"},{default:p((()=>[q])),_:1}),d(l,{color:"info"},{default:p((()=>[N])),_:1})])])])),_:1},8,["buttons","step","titles"])}}});export{v as _,I as a,C as b};
