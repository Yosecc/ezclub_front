var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&n(e,t,a[t]);return e};import{g as d,A as o,n as p,s as c,a as m,c as u,b as y,p as h,d as b}from"./index.a01cdf46.js";import{g as v}from"./Diciplines.478c92d6.js";import{v as I}from"./Discounts.fd07ed15.js";import{g as f}from"./Memberships.33406660.js";import{r as _,b as g,B as L,A as M}from"./vendor.6c78dc37.js";const D=_([]),C=_(null),A=_([]),q=_(null),w=_(null);_(null),_(!1);const x=_(!1);_(null);const P=_(null),E=_(null),$=_(null),F=_(null),S=_([]),N=_({name:"category",values:["Adult","Minor"],model:"Adult",required:!0}),O=_([]),T=g((()=>N.value.model)),Y=_([{typeInput:"switchEventChangeInput",name:"mismatarjeta",values:["","Pay with the same card"],model:!0,required:!1,class:"is-12",isLabel:!0}]),R=_([{typeInput:"switchEventChangeInput",name:"prorrateo",values:["","Prorated Payment"],model:!0,required:!1,class:"is-4",isLabel:!0}]),j=_([{typeInput:"date",name:"schedules",placeholder:"Subscription Schedules",model:"",required:!1,class:"is-4",isLabel:!0}]),k=_([{typeInput:"text",name:"description",placeholder:"Transaction description",model:"",class:"is-12",required:!0,isLabel:!0},{typeInput:"select",name:"transaction_type",placeholder:"Transaction Type",model:"",class:"is-12",values:["Add Credit","Remove Credit"],isLabel:!0,required:!0},{typeInput:"number",name:"amount",placeholder:"Amount $",model:"",class:"is-12",isLabel:!0,required:!0}]),G=_([]),B=function(e,a){""!=d(U.value,"name").model&&""!=d(U.value,"last_name").model&&(async(e,a)=>await o.get(`validateNames?name=${e}&last_name=${a}`))(d(U.value,"name").model,d(U.value,"last_name").model).then((e=>{})).catch((e=>{for(const a in e.response.data)p.error(`${a} : ${e.response.data[a]}`)}))},U=_([{typeInput:"switchEventChangeInput",name:"category",values:["Minor","Adult"],placeholder:"Category",default:"Adult",model:"Adult",disabled:!1,class:"is-3",isLabel:!0,required:!0,categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual","Company"],change:function(e){this.model?d(e,"company_name").typeInput="hidden":d(e,"company_name").typeInput="text"}},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"is-12 d-flex justify-content-end",isLabel:!0,categories:["Adult","Minor"],typeMember:["Individual","Company"],camera:!0,modalName:"Miembro"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",isLabel:!0,categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],keyUp:function(e,a){},change:B},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],change:B},{typeInput:"text",name:"bar_code",placeholder:"Member ID Card",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],hasError:!1,keyUp:async(e,a)=>{a.model.length>=9&&await o.get(`searchmember/${a.model}?type=validate`).then((e=>{e.data.status?(a.hasError=!0,p.error("Barcode already exists")):a.hasError=!1})).catch((e=>{a.hasError=!1}))}},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==T.value?"is-6":"is-3",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],maxLength:10,maxDate:L().subtract(2,"years").format("YYYY-MM-DD"),keyUp:(e,a)=>{const t=["YYYY-MM-DD","YYYY/MM/DD"];a.model.length>=10&&(L(a.model,t,!0).isValid()?a.hasError=!1:(p.error("Date invalid"),a.hasError=!0))}},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female"],model:"",required:!0,class:"Prospect"==T.value?"is-6":"is-3",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!1,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"personal_identifications",placeholder:"ID #",model:"",required:!1,class:"is-8",isLabel:!0,categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"city_id",placeholder:"City",value:"",model:"",required:!0,values:[],valuesCalculated:[],class:"is-3",showList:!1,isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],selectOption:function(e,a){a.value=a.values.find((a=>a.id==e.target.value)).name,a.model=e.target.value,a.showList=!1}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"US",disabled:!0,required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],keyUp:function(e,a){},change:function(e,a){const t=a.model;if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(t))return p.error("email not valid");(async e=>await o.get(`validateEmail?email=${e}`))(t).then((e=>{G.value=[]})).catch((e=>{G.value.push("next");for(const a in e.response.data)p.error(`${a} : ${e.response.data[a]}`)}))}},{typeInput:"tel",name:"phone",placeholder:"Phone Numbers",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],mask:"(###) ###-####"},{typeInput:"switch",name:"leo_vet_fr",values:["","LAW ENFORCEMENT OFFICER"],html:'<div class="ml-4"><p><small>VETERAN</small></p><p><small>FIRTS RESPONDER</small></p></div>',model:!1,default:!1,required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:0,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"LEO / VET / FR ID#",model:1,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),V=_([{typeInput:"switchEventChangeInput",typeInputDefault:"switchEventChangeInput",name:"category",values:["Adult","Minor"],class:"is-6",isLabel:!0,model:!1,category:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"file",typeInputDefault:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",isLabel:!0,model:"",required:!1,category:["Adult","Minor"],camera:!0,modalName:"Familiar"},{typeInput:"select",typeInputDefault:"select",name:"relationships",placeholder:"Relationship",values:["Son","Daughter","Wife","Husband","Father","Mother","Brother","Sister","Other"],model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"bar_code",placeholder:"Member ID Card",model:"",class:"is-6",isLabel:!0,required:!1,category:["Adult","Minor"]},{typeInput:"date",typeInputDefault:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"],maxDate:L().subtract(2,"years").format("YYYY-MM-DD")},{typeInput:"select",typeInputDefault:"select",name:"gender",placeholder:"Gender",values:["Male","Female"],model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-4",isLabel:!0,required:!1,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"select",typeInputDefault:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",isLabel:!0,required:!1,category:["Adult"]},{typeInput:"text",typeInputDefault:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-8",isLabel:!0,required:!1,category:["Adult"]},{typeInput:"switchEventChangeInput",typeInputDefault:"switchEventChangeInput",name:"misma_direccion",values:["","Use the same address as the parent member"],model:!1,required:!1,class:"is-12",isLabel:!0,category:["Adult"]},{typeInput:"text",typeInputDefault:"text",name:"address",placeholder:"Address",model:"",class:"is-12",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"number",typeInputDefault:"number",name:"postal_code",placeholder:"Postal Code",model:"",class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"country_id",placeholder:"Country",model:34,values:[],class:"is-3",isLabel:!0,required:!1,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"email",typeInputDefault:"email",name:"email",placeholder:"Email",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"number",typeInputDefault:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"checkbox",typeInputDefault:"checkbox",name:"leo_vet_fr",placeholder:"LAW ENFORCEMENT OFFICER",html:"<p>Lorem</p>",model:[],required:!1,class:"is-6",isLabel:!0,category:["Adult"],typeMember:["Individual"]},{typeInput:"number",typeInputDefault:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",isLabel:!0,category:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",typeInputDefault:"hidden",name:"is_family",placeholder:"",model:1,class:"is-6",isLabel:!0,category:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"hidden",typeInputDefault:"hidden",name:"principal_family",placeholder:"",model:0,class:"is-6",isLabel:!0,category:["Adult","Minor"],typeMember:["Individual","Company"]}]),W=g((()=>V.value)),Z=_([{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]),H=M([{typeInput:"switchEventChangeInput",name:"recurrence",values:["Temporary","Subscription"],placeholder:"Recurrence",model:!0,disabled:!1,class:"is-12",display:!0,isLabel:!0},{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0,filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",required:!0,model:"",disabled:!1,class:"is-12",isLabel:!0},{typeInput:"hidden",name:"locations_id",placeholder:"Locations Sale",required:!1,values:[],model:"",disabled:!1,class:"is-4",isLabel:!0},{typeInput:"checkboxGroupSimple",name:"locations",placeholder:"Locations access",required:!0,values:[],model:"",disabled:!1,class:"is-4",isLabel:!0},{typeInput:"DropdownCheckbox",name:"diciplines",text:"Disciplines",placeholder:"Disciplines",required:!0,model:[],values:[],disabled:!1,class:"is-12",isLabel:!0,drop:!1},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",name:"is_initiation_fee",values:["YES","NO"],placeholder:"Initiation fee",default:!1,model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_card_price",placeholder:"Card",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_last_month",placeholder:"Last Month",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"DropdownCheckbox",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,required:!1,class:"is-12",drop:!1},{typeInput:"hidden",name:"initiation_fee",required:!0,placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4",isLabel:!0}]),z=_([{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12",isLabel:!0}]),J=_([{typeInput:"hidden",name:"member_id",placeholder:"",model:"",class:"is-12 d-flex justify-content-end",isLabel:!0,required:!1},{typeInput:"file",name:"parent_photo",placeholder:"Parent/Guardian Picture",model:"",class:"is-12 d-flex justify-content-end",isLabel:!0,required:!0,camera:!0},{typeInput:"select",name:"parent_relationships",placeholder:"Parent Relationships",values:["Father","Mother","Brother","Sister","Grandfather","Grandmother","Legal Guardian","Other"],model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_second_name",placeholder:"Middle Name",model:"",class:"is-4",isLabel:!0,required:!1},{typeInput:"text",name:"parent_last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"select",name:"parent_goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_personal_identifications",placeholder:"ID #",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"parent_email",placeholder:"Email",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_phone",placeholder:"Phone Number",model:"",class:"is-4",isLabel:!0,required:!0}]),K=_([{typeInput:"text",name:"first_name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"middle_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-8",isLabel:!0},{typeInput:"number",name:"phone_number",placeholder:"Phone",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-8",isLabel:!0},{typeInput:"select",name:"relationship",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",isLabel:!0,required:!1}]),Q=M([]),X=_(null),ee=async(e,a=1)=>o.post("recurrences_select",{memberships_id:e,is_recurrence:a}),ae=async e=>{const a=await o.get(`members/${e}/edit`);return X.value=a.data,a},te=async e=>await o.post("paymentStripe",e),se=async e=>await o.post(`members/updatePersonalInformation/${X.value.id}`,e),le=async e=>await o.post(`members/subscribeDebitAutomatic/${e}`),ie=async e=>await o.post(`members/sendEmailContractAndWaiver/${e}`),ne=async e=>await o.post(`members/updateMembershipMember/${Pe.value.id}`,e),re=async(e,a=null)=>await o.get(`members/pause_membership/${Pe.value.id}?fecha=${a}`),de=async(e,a=null,t=!0)=>await o.post(`members/hold_membership/${Pe.value.id}`,{fecha:a,prorrateo:t}),oe=async e=>o.get(`searchmember/${e}`),pe=async()=>await o.post(`members/cancelMembershipMember/${Pe.value.id}`),ce=async(e,a)=>await o.post(`members/update-membership-member/${e}`,a),me=async e=>await o.get(`get_presupuesto_membresia/${e}`),ue=async(e,a)=>await o.post("members/deletePaymentMethod",{id:e,paymentMethod:a}),ye=async(e,a)=>await o.post("members/defaultPaymentMethod",{id:e,paymentMethod:a}),he=async e=>await o.post(`members/contactEmergencystore/${X.value.id}`,e),be=async()=>await o.post(`members/addPenalty/${X.value.id}`),ve=async()=>await o.post(`syncStripeResource/${X.value.id}`),Ie=async(e,a)=>await o.post(`paymentCash/${e}`,a),fe=async e=>await o.post(`members/guardian/${X.value.id}`,e),_e=async e=>await o.post("newMembershipMember",e),ge=async(e,a)=>await o.post(`sign/${a}`,{sign:e}),Le=async(e,a)=>await o.get(`members/cards/${e}`),Me=async(e,a)=>{const t=await o.get(`members/list_invoices/${e}`,{params:a});return X.value.invoices=t.data.invoices,X.value.pagos=t.data.pagos,X.value.invoicesSistem=t.data.invoicesSistem,t},De=async e=>await o.get(`credit/${e}/balance`),Ce=async e=>{const a=await o.get(`credit/${e}`);return O.value=a.data,a},Ae=async(e,a)=>(await o.post(`/credit/${e}/add`,a)).data,qe=async(e,a)=>(await o.post(`/credit/${e}/remove`,a)).data,we=async()=>await o.post("members/subscriptions_create_stripe",{members:A.value,trial_end:1,trial:!1}),xe=async(e,a)=>await o.post(`paymentInvoice/${e}`,a),Pe=g((()=>X.value?X.value.membership_members:null)),Ee=g((()=>O.value?O.value:null)),$e=g((()=>X.value.membership_members_history)),Fe=g((()=>X.value.families_children)),Se=g((()=>X.value.family_parent?X.value.family_parent.pincipal_family:null));g((()=>X.value.emergency));const Ne=g((()=>X.value.accessDay)),Oe=g((()=>Pe.value.payments));g((()=>{let e=Pe.value.created_at;return Oe.value[0].status&&(e=Oe.value[0].created_at),L(e).add(Pe.value.recurrence.recurrence,"d")}));const Te=g((()=>X.value.isSolvente));g((()=>X.value.sinMembresia));const Ye=function(e){const a=this.values.find((e=>e.id==this.model));d(e,"recurrences_id").model="",c(e,"initiation_fee",a.initiation_fee);const t=[];a.locations.forEach((e=>{1==e.sale&&t.push(e.company_locations)})),m(e,"locations_id",t),m(e,"locations",t);let s=1;d(e,"recurrence").model||(s=0),"Prospect"==T.value&&(s=0),ee(this.model,s).then((a=>{d(e,"recurrences_id").values=a.data})),f(this.model).then((a=>{a.data.length&&(m(e,"diciplines",a.data),d(e,"diciplines").values.push({id:0,name:"All"}));const t=this.values.find((e=>e.id==this.model)).diciplines_number;d(e,"diciplines").required=0!=t,ke(e)}))},Re=function(e){c(e,"amount",this.values.find((e=>e.id==this.model)).amount)},je=function(e){v([this.model]).then((a=>{m(e,"diciplines",a.data)}))},ke=e=>{1==u(e,"memberships_id").all_diciplines?d(e,"diciplines").values.forEach((a=>{d(e,"diciplines").model.push(a.id)})):d(e,"diciplines").model=[]},Ge=function(e){""!=this.model?I(this.values.find((e=>e.id==this.model)).code,"membership").then((e=>{this.data=e.data,p.success("Discuount valid")})).catch((e=>{p.error(e.response.data),this.model=""})):this.data=null},Be=function(e){return`${e.name}`},Ue=function(e){return e.second_name?`${e.name} ${e.second_name} ${e.last_name}`:`${e.name}  ${e.last_name}`},Ve=function(e,a,t){const s=u(a,"memberships_id").diciplines_number;if(s>0&&(s<=this.model.length&&(e.returnValue=!1),s==this.model.length))if(this.model.includes(t)){const e=this.model.findIndex((e=>e==t)),a=[];this.model.forEach(((t,s)=>{e!=s&&a.push(t)})),this.model=a}else p.error("You must select a limit of "+s+" diciplines")},We=function(e){const a=d(e,"memberships_id").model;if(d(e,"recurrences_id").model="",d(e,"memberships_id").model="",""!=a){let t=null;t=this.model?0:1,"Prospect"==T.value&&(t=0),ee(a,t).then((a=>{d(e,"recurrences_id").values=a.data}))}},Ze=e=>{d(e,"memberships_id").change=Ye,d(e,"recurrences_id").change=Re,d(e,"locations_id").change=je,d(e,"locations").change=je,d(e,"discount").change=Ge,d(e,"discount").filter=Be,d(e,"staff_id").filter=Ue,d(e,"diciplines").change=function(e,a){},d(e,"recurrence").change=We,d(e,"diciplines").click=Ve},He=async e=>{const a=new FormData,t=h(e.member);b(a,t);for(let n=0;n<e.contact.length;n++){const t=e.contact[n];for(const e in t)a.append(`notifications[${n}][${e}]`,t[e])}const s=h(e.membresia);for(const n in s)if("diciplines"==n){const e=s[n];for(let t=0;t<e.length;++t)a.append("diciplines[]",e[t])}else a.append(n,s[n]);a.append("total",e.total),a.append("payment_type_id",3);const l=h(e.categoriesMembers,{array:!1});if("Minor"==l.category){a.append("address",d(J.value,"address").model),a.append("postal_code",d(J.value,"postal_code").model),a.append("city_id",d(J.value,"city_id").model),a.append("country_id",d(J.value,"country_id").model),a.append("state_id",d(J.value,"state_id").model),a.append("email",d(J.value,"parent_email").model);const e=h(J.value);for(const t in e)a.append(`guardian[${t}]`,e[t])}for(const n in l)a.append(n,l[n]);const i=h(e.notasInput);for(const n in i)a.append(n,i[n]);F.value&&a.append("id_principal",F.value);return await(async e=>{const a=await o.post("members",e);return e.value=a.data.member,a})(a).then((a=>(q.value=a.data.id,w.value=a.data.membership_members_id,0==d(e.member,"is_family").model&&(F.value=q.value),a))).catch((e=>{for(const a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{p.error(`${a}: ${e}`)}));return e}))},ze=async(e,s)=>{const l=r({},{memberships_id:d(i=e,"memberships_id").model,recurrences_id:d(i,"recurrences_id").model,is_initiation_fee:!d(i,"is_initiation_fee").model,is_card_price:d(i,"is_card_price").model,discount:d(i,"discount").data?d(i,"discount").data.code:null});var i;l.is_last_month=d(e,"is_last_month").model,"Minor"==T.value?l.email=d(J.value,"parent_email")?d(J.value,"parent_email").model:null:l.email=d(s,"email")?d(s,"email").model:null,l.leo_vet_fr=d(s,"leo_vet_fr")?d(s,"leo_vet_fr").model:null,null!=d(e,"prorrateo")&&(l.prorrateo=d(e,"prorrateo").model),null!=d(e,"schedules")&&(l.schedules=d(e,"schedules").model);return await(async e=>o.post("v1/presupuesto_member",e))(l).then((i=>{var n,d;S.value.push((n=r({},i.data),d={member:s,membresia:e,schedules:l.schedules?l.schedules:null},a(n,t(d))))})).catch((e=>{if("string"==typeof e.response.data)p.error(`${e.response.data}`);else for(const a in e.response.data)e.response.data[a].forEach((e=>{p.error(`${a}: ${e}`)}))}))},Je=e=>{const a=[];return e.forEach((e=>{a.push({id:e.id,picture:`${y}storage/${e.photo}`,initials:Ke(e.name,e.last_name),color:""})})),a},Ke=(e,a)=>e.substr(0,1)+a.substr(0,1);export{A as $,xe as A,be as B,ve as C,me as D,ie as E,le as F,Se as G,Fe as H,fe as I,K as J,he as K,Ne as L,Me as M,$e as N,k as O,Ae as P,qe as Q,Ce as R,De as S,Ee as T,ae as U,Te as V,F as W,C as X,te as Y,He as Z,_e as _,ye as a,D as a0,we as a1,G as a2,P as a3,E as a4,Q as a5,$ as a6,T as a7,Y as a8,N as a9,z as aa,q as ab,w as ac,Z as ad,oe as ae,H as b,W as c,J as d,Ke as e,Pe as f,Le as g,Ie as h,U as i,se as j,ee as k,Ze as l,X as m,R as n,j as o,x as p,S as q,Je as r,ue as s,ne as t,ce as u,ze as v,pe as w,ge as x,re as y,de as z};