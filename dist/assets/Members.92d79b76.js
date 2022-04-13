import{A as e,n as a,g as t,a as s,s as i,e as l}from"./index.88b8084c.js";import{r}from"./Recurrences.660c3ad0.js";import{v as n}from"./Discounts.a7279ec5.js";import{c as d}from"./Memberships.b87eadce.js";import{r as o,c,aa as m}from"./vendor.43011f2e.js";const p=o(null),u=o(null);o(null);const y=o(!1),h=o({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0}),I=c((()=>h.value.model)),v=o([{typeInput:"switchEventChange",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual","Company"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!1,class:"is-12 d-flex justify-content-end",categories:["Adult","Minor"],typeMember:["Individual","Company"],camera:!0,modalName:"Miembro"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",required:!0,class:"is-6",categories:["Adult","Minor"],typeMember:["Individual","Company"],hasError:!1,keyUp:async(t,s)=>{s.model.length>=9&&await e.get(`searchmember/${s.model}`).then((e=>{e.data.status?(s.hasError=!0,a.error("Barcode already exists")):s.hasError=!1})).catch((e=>{s.hasError=!1}))}},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==I.value?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],maxLength:10,keyUp:(e,t)=>{const s=["YYYY-MM-DD","YYYY/MM/DD"];t.model.length>=10&&(m(t.model,s,!0).isValid()?t.hasError=!1:(a.error("Date invalid"),t.hasError=!0))}},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"Prospect"==I.value?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!1,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"personal_identifications",placeholder:"ID #",model:"",required:!1,class:"is-8",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",required:!0,values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"LEO / VET / FR ID#",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),b=o([{typeInput:"switchEventChange",name:"category",values:["Adult","Minor"],class:"is-6",model:!1,category:["Adult","Minor"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",model:"",required:!1,category:["Adult","Minor"],camera:!0,modalName:"Familiar"},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-6",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",required:!1,category:["Adult","Minor"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",required:!1,category:["Adult"]},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-8",required:!1,category:["Adult"]},{typeInput:"switchEventChangeInput",name:"misma_direccion",values:["","Use the same address as the parent member"],model:!1,required:!1,class:"is-12"},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",model:"",class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-12",required:!1,category:["Adult"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-6",required:!1,category:["Adult"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",required:!1,category:["Adult"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:1,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"",model:0,class:"is-6",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),_=c((()=>b.value)),f=o([{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]),M=o([{typeInput:"switch",name:"recurrence",values:["","Recurrence"],placeholder:"Recurrence",model:!0,disabled:!1,class:"is-12"},{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12"},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",required:!0,model:"",disabled:!1,class:"is-12"},{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Locations Sale",required:!0,values:[],model:"",disabled:!1,class:"is-4"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Diciplines",required:!0,model:[],values:[],disabled:!1,class:"is-12"},{typeInput:"number",name:"initiation_fee",required:!0,placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4"},{typeInput:"checkbox",name:"is_initiation_fee",placeholder:"No initiation fee",model:[],disabled:!1,class:"is-4"},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-6"},{typeInput:"selectData",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,required:!1,class:"is-6"}]),g=o([{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12"}]),A=o([{typeInput:"file",name:"parent_photo",placeholder:"Parent/Guardian Picture",model:"",class:"is-12 d-flex justify-content-end",required:!0},{typeInput:"select",name:"parent_relationships",placeholder:"Parent Relationships",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_name",placeholder:"First Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_second_name",placeholder:"Middle Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_last_name",placeholder:"Last Name",model:"",class:"is-4",required:!0},{typeInput:"select",name:"parent_goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",required:!0},{typeInput:"number",name:"parent_personal_identifications",placeholder:"ID #",model:"",class:"is-4",required:!0},{typeInput:"text",name:"parent_address",placeholder:"Address",model:"",class:"is-4",required:!0},{typeInput:"email",name:"parent_email",placeholder:"Email",model:"",class:"is-4",required:!0},{typeInput:"number",name:"parent_phone",placeholder:"Phone Number",model:"",class:"is-4",required:!0}]),q=o([{typeInput:"text",name:"first_name",placeholder:"First Name",model:"",class:"is-4"},{typeInput:"text",name:"middle_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-8"},{typeInput:"number",name:"phone_number",placeholder:"Phone",model:"",class:"is-4"},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-8"},{typeInput:"select",name:"relationship",placeholder:"Relationship",values:["Sand","Sister","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",required:!1}]),C=o([]),D=o(),P=async a=>e.post("getPresupuesto",a),x=async a=>{const t=await e.post("members",a);return a.value=t.data.member,t},E=async a=>{const t=await e.get(`members/${a}/edit`);return D.value=t.data,t},F=async a=>await e.post(`members/updatePersonalInformation/${D.value.id}`,a),N=async a=>await e.post(`members/updateMembershipMember/${O.value.id}`,a),L=async a=>e.get(`searchmember/${a}`),w=async()=>await e.post(`members/cancelMembershipMember/${O.value.id}`),S=async a=>await e.post(`members/contactEmergencystore/${D.value.id}`,a),T=async(a,t)=>await e.post(`paymentCash/${a}`,t),$=async a=>await e.put(`members/guardian/${D.value.id}`,a),R=async a=>await e.post("newMembershipMember",a),G=async(a,t)=>await e.post(`sign/${t}`,{sign:a}),O=c((()=>D.value.membership_members)),k=c((()=>D.value.membership_members_history)),B=c((()=>D.value.families_children)),j=c((()=>D.value.family_parent?D.value.family_parent.pincipal_family:null));c((()=>D.value.emergency));const Y=c((()=>D.value.access_day)),V=c((()=>O.value.payments)),W=c((()=>{let e=O.value.created_at;return V.value[0].status&&(e=V.value[0].created_at),m(e).add(O.value.recurrence.recurrence,"d")})),U=c((()=>D.value.isSolvente)),z=c((()=>D.value.sinMembresia)),H=function(e){const a=this.values.find((e=>e.id==this.model));s(e,"initiation_fee",a.initiation_fee);const l=[];a.locations.forEach((e=>{1==e.sale&&l.push(e.company_locations)})),i(e,"locations_id",l);const n=[];a.amounts.forEach((e=>{const a=r.value.find((a=>a.id==e.recurrences_id));a.amount=e.amount,n.push(a)})),i(e,"recurrences_id",n),d(this.model).then((a=>{i(e,"diciplines",a.data),t(e,"diciplines").values.push({id:0,name:"All"});const s=this.values.find((e=>e.id==this.model)).diciplines_number;t(e,"diciplines").required=0!=s,Q(e)}))},J=function(e){s(e,"amount",this.values.find((e=>e.id==this.model)).amount)},K=function(e){},Q=e=>{1==l(e,"memberships_id").all_diciplines?t(e,"diciplines").values.forEach((a=>{t(e,"diciplines").model.push(a.id)})):t(e,"diciplines").model=[]},X=function(e){""!=this.model?n(this.values.find((e=>e.id==this.model)).code,"membership").then((e=>{this.data=e.data,a.success("Discuount Apply")})).catch((e=>{a.error(e.response.data),this.model=""})):this.data=null},Z=function(e){return`${e.code}`},ee=function(e){return`${e.name} ${e.second_name} ${e.last_name}`},ae=function(e,t,s){const i=l(t,"memberships_id").diciplines_number;if(i>0&&(i<=this.model.length&&(e.returnValue=!1),i==this.model.length))if(this.model.includes(s)){const e=this.model.findIndex((e=>e==s)),a=[];this.model.forEach(((t,s)=>{e!=s&&a.push(t)})),this.model=a}else a.error("You must select a limit of "+i+" diciplines")},te=e=>{t(e,"memberships_id").change=H,t(e,"recurrences_id").change=J,t(e,"locations_id").change=K,t(e,"discount").change=X,t(e,"discount").filter=Z,t(e,"staff_id").filterOptionText=ee,t(e,"diciplines").change=function(e,a){},t(e,"diciplines").click=ae};export{p as A,u as B,g as C,W as D,h as E,f as F,x as G,L as H,O as a,M as b,v as c,te as d,k as e,N as f,w as g,P as h,U as i,R as j,G as k,j as l,D as m,B as n,A as o,F as p,$ as q,q as r,T as s,S as t,Y as u,_ as v,E as w,z as x,C as y,y as z};
