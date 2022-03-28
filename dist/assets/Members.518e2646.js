import{A as e}from"./index.641e35de.js";import{r as a}from"./Recurrences.fda2ccb7.js";import{a as t}from"./Diciplines.51f82caa.js";import{v as i}from"./Discounts.8fe965b5.js";import{n as s,i as l,a as r,s as n,k as d}from"./ActivityPanel.vue_vue&type=style&index=0&lang.68e3ceb6.js";import{h as o}from"./moment.08a7f518.js";import{r as m,b as c}from"./vendor.685e53b0.js";const p=m(null),u=m(null);m(null);const y=m({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0}),h=c((()=>y.value.model)),I=m([{typeInput:"switchEventChange",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual","Company"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"is-12 d-flex justify-content-end",categories:["Adult","Minor"],typeMember:["Individual","Company"],camera:!0,modalName:"Miembro"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",required:!0,class:"is-6",categories:["Adult","Minor"],typeMember:["Individual","Company"],hasError:!1,keyUp:async(a,t)=>{t.model.length>=9&&await e.get(`searchmember/${t.model}`).then((e=>{e.data.status?(t.hasError=!0,s.error("Barcode already exists")):t.hasError=!1})).catch((e=>{t.hasError=!1}))}},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==h.value?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],maxLength:10,keyUp:(e,a)=>{const t=["YYYY-MM-DD","YYYY/MM/DD"];a.model.length>=10&&(o(a.model,t,!0).isValid()?a.hasError=!1:(s.error("Date invalid"),a.hasError=!0))}},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"Prospect"==h.value?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-8",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"LEO / VET / FR ID#",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),v=m([{typeInput:"switchEventChange",name:"category",values:["Adult","Minor"],class:"is-6",model:!1,category:["Adult","Minor"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",model:"",required:!1,category:["Adult","Minor"],camera:!0,modalName:"Familiar"},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",required:!1,category:["Adult"]},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-8",required:!1,category:["Adult"]},{typeInput:"switchEventChangeInput",name:"misma_direccion",values:["","Use the same address as the parent member"],model:!1,required:!1,class:"is-12"},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",model:"",class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-12",required:!1,category:["Adult"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-6",required:!1,category:["Adult"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",required:!1,category:["Adult"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:1,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),b=c((()=>v.value)),f=m([{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]),_=m([{typeInput:"checkbox",name:"recurrence",placeholder:"Recurrence",model:["recurrence"],disabled:!1,class:"is-12"},{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12"},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",required:!0,model:"",disabled:!1,class:"is-12"},{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Locations Sale",required:!0,values:[],model:"",disabled:!1,class:"is-4"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Diciplines",required:!0,model:[],values:[],disabled:!1,class:"is-12"},{typeInput:"number",name:"initiation_fee",required:!0,placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4"},{typeInput:"checkbox",name:"is_initiation_fee",placeholder:"No initiation fee",model:[],disabled:!1,class:"is-4"},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-6"},{typeInput:"selectData",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,required:!1,class:"is-6"}]),M=m([{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12"}]),g=m([{typeInput:"file",name:"parent_photo",placeholder:"Parent/Guardian Picture",model:"",class:"is-12 d-flex justify-content-end",required:!0},{typeInput:"select",name:"parent_relationships",placeholder:"Parent Relationships",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_name",placeholder:"First Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_second_name",placeholder:"Middle Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_last_name",placeholder:"Last Name",model:"",class:"is-4",required:!0},{typeInput:"select",name:"parent_goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",required:!0},{typeInput:"number",name:"parent_personal_identifications",placeholder:"ID #",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_address",placeholder:"Address",model:"",class:"is-4",required:!0},{typeInput:"email",name:"parent_email",placeholder:"Email",model:"",class:"is-4",required:!0},{typeInput:"number",name:"parent_phone",placeholder:"Phone Number",model:"",class:"is-4",required:!0}]),A=m([{typeInput:"text",name:"first_name",placeholder:"First Name",model:"",class:"is-4"},{typeInput:"text",name:"middle_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-8"},{typeInput:"number",name:"phone_number",placeholder:"Phone",model:"",class:"is-4"},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-8"},{typeInput:"select",name:"relationship",placeholder:"Relationship",values:["Sand","Sister","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",required:!1}]),q=m([]),C=m(),D=async a=>{const t=await e.post("members",a);return a.value=t.data.member,t},x=async a=>{const t=await e.get(`members/${a}/edit`);return C.value=t.data,t},P=async a=>await e.post(`members/updatePersonalInformation/${C.value.id}`,a),E=async a=>await e.post(`members/updateMembershipMember/${k.value.id}`,a),F=async a=>e.get(`searchmember/${a}`),N=async()=>await e.post(`members/cancelMembershipMember/${k.value.id}`),L=async a=>await e.post(`members/contactEmergencystore/${C.value.id}`,a),w=async(a,t)=>await e.post(`paymentCash/${a}`,t),S=async a=>await e.put(`members/guardian/${C.value.id}`,a),T=async a=>await e.post("newMembershipMember",a),$=async(a,t)=>await e.post(`sign/${t}`,{sign:a}),k=c((()=>C.value.membership_members)),O=c((()=>C.value.membership_members_history)),R=c((()=>C.value.families_children)),j=c((()=>C.value.family_parent?C.value.family_parent.pincipal_family:null));c((()=>C.value.emergency));const G=c((()=>C.value.access_day)),B=c((()=>k.value.payments)),Y=c((()=>{let e=k.value.created_at;return B.value[0].status&&(e=B.value[0].created_at),o(e).add(k.value.recurrence.recurrence,"d")})),V=c((()=>C.value.isSolvente)),W=c((()=>C.value.sinMembresia)),U=function(e){const t=this.values.find((e=>e.id==this.model));r(e,"initiation_fee",t.initiation_fee);const i=[];t.locations.forEach((e=>{1==e.sale&&i.push(e.company_locations)})),n(e,"locations_id",i);const s=[];t.amounts.forEach((e=>{const t=a.value.find((a=>a.id==e.recurrences_id));t.amount=e.amount,s.push(t)})),n(e,"recurrences_id",s);const d=this.values.find((e=>e.id==this.model)).diciplines_number;l(e,"diciplines").required=0!=d,J(e)},z=function(e){r(e,"amount",this.values.find((e=>e.id==this.model)).amount)},H=function(e){t([this.model]).then((a=>{l(e,"diciplines").model=[],n(e,"diciplines",a.data),J(e)}))},J=e=>{1==d(e,"memberships_id").all_diciplines?l(e,"diciplines").values.forEach((a=>{l(e,"diciplines").model.push(a.id)})):l(e,"diciplines").model=[]},K=function(e){""!=this.model?i(this.values.find((e=>e.id==this.model)).code,"membership").then((e=>{this.data=e.data,s.success("Discuount Apply")})).catch((e=>{s.error(e.response.data),this.model=""})):this.data=null},Q=function(e){return`${e.code}`},X=function(e){return`${e.name} ${e.second_name} ${e.last_name}`},Z=function(e,a,t){const i=d(a,"memberships_id").diciplines_number;if(i>0&&(i<=this.model.length&&(e.returnValue=!1),i==this.model.length))if(this.model.includes(t)){const e=this.model.findIndex((e=>e==t)),a=[];this.model.forEach(((t,i)=>{e!=i&&a.push(t)})),this.model=a}else s.error("You must select a limit of "+i+" diciplines")},ee=e=>{l(e,"memberships_id").change=U,l(e,"recurrences_id").change=z,l(e,"locations_id").change=H,l(e,"discount").change=K,l(e,"discount").filter=Q,l(e,"staff_id").filterOptionText=X,l(e,"diciplines").change=function(e,a){},l(e,"diciplines").click=Z};export{M as A,y as B,f as C,Y as D,D as E,F,k as a,_ as b,I as c,ee as d,O as e,E as f,N as g,$ as h,V as i,j,R as k,g as l,C as m,S as n,A as o,P as p,L as q,G as r,w as s,b as t,x as u,W as v,T as w,q as x,p as y,u as z};
