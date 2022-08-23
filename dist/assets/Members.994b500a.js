var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,r=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(s)for(var t of s(a))i.call(a,t)&&n(e,t,a[t]);return e};import{g as o,A as d,n as p,s as c,a as u,c as m,b as y,p as h,d as b}from"./index.befb032d.js";import{g as v}from"./Diciplines.507dd3a7.js";import{v as I}from"./Discounts.baeac7f7.js";import{g as f}from"./Memberships.0a62bd9f.js";import{r as _,b as g,A as L,z as M}from"./vendor.41bfc188.js";const D=_([]),C=_(null),A=_([]),q=_(null),w=_(null);_(null),_(!1);const P=_(!1);_(null);const x=_(null),$=_(null),E=_(null),F=_(null),S=_([]),O=_({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0}),N=_([]),Y=g((()=>O.value.model)),T=_([{typeInput:"switchEventChangeInput",name:"mismatarjeta",values:["","Pay with the same card"],model:!0,required:!1,class:"is-12",isLabel:!0}]),j=_([{typeInput:"switchEventChangeInput",name:"prorrateo",values:["","Prorated Payment"],model:!0,required:!1,class:"is-4",isLabel:!0}]),k=_([{typeInput:"date",name:"schedules",placeholder:"Subscription Schedules",model:"",required:!1,class:"is-4",isLabel:!0}]),R=_([{typeInput:"text",name:"description",placeholder:"Transaction description",model:"",class:"is-12",required:!0,isLabel:!0},{typeInput:"select",name:"transaction_type",placeholder:"Transaction Type",model:"",class:"is-12",values:["Add Credit","Remove Credit"],isLabel:!0,required:!0},{typeInput:"number",name:"amount",placeholder:"Amount $",model:"",class:"is-12",isLabel:!0,required:!0}]),G=_([]),U=function(e,a){""!=o(B.value,"name").model&&""!=o(B.value,"last_name").model&&(async(e,a)=>await d.get(`validateNames?name=${e}&last_name=${a}`))(o(B.value,"name").model,o(B.value,"last_name").model).then((e=>{})).catch((e=>{for(const a in e.response.data)p.error(`${a} : ${e.response.data[a]}`)}))},B=_([{typeInput:"switchEventChangeInput",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual","Company"],change:function(e){this.model?o(e,"company_name").typeInput="hidden":o(e,"company_name").typeInput="text"}},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"is-12 d-flex justify-content-end",isLabel:!0,categories:["Adult","Minor"],typeMember:["Individual","Company"],camera:!0,modalName:"Miembro"},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",isLabel:!0,categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],keyUp:function(e,a){},change:U},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],change:U},{typeInput:"text",name:"bar_code",placeholder:"Member ID Card",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],hasError:!1,keyUp:async(e,a)=>{a.model.length>=9&&await d.get(`searchmember/${a.model}?type=validate`).then((e=>{e.data.status?(a.hasError=!0,p.error("Barcode already exists")):a.hasError=!1})).catch((e=>{a.hasError=!1}))}},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==Y.value?"is-6":"is-3",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"],maxLength:10,maxDate:L().subtract(2,"years").format("YYYY-MM-DD"),keyUp:(e,a)=>{const t=["YYYY-MM-DD","YYYY/MM/DD"];a.model.length>=10&&(L(a.model,t,!0).isValid()?a.hasError=!1:(p.error("Date invalid"),a.hasError=!0))}},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female"],model:"",required:!0,class:"Prospect"==Y.value?"is-6":"is-3",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",required:!1,class:"is-4",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"personal_identifications",placeholder:"ID #",model:"",required:!1,class:"is-8",isLabel:!0,categories:["Adult","Prospect","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"keyInput",name:"city_id",placeholder:"City",value:"",model:"",required:!0,values:[],valuesCalculated:[],class:"is-3",showList:!1,isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],keyUp:function(e,a){a.values.length&&(a.valuesCalculated=a.values.filter((e=>e.name.match(new RegExp(a.value,"i"))))),a.valuesCalculated.length&&""!=a.value?a.showList=!0:a.showList=!1,40==e.keyCode&&a.values.length&&(a.showList=!0,document[`form-list-${a.name}`][`form-select-${a.name}`].focus()),""==a.value&&(a.showList=!1,a.model="")},selectOption:function(e,a){a.value=a.values.find((a=>a.id==e.target.value)).name,a.model=e.target.value,a.showList=!1},keyUpEnter:function(e,a){a.showList=!0}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"US",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],keyUp:function(e,a){},change:function(e,a){const t=a.model;if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(t))return p.error("email not valid");(async e=>await d.get(`validateEmail?email=${e}`))(t).then((e=>{G.value=[]})).catch((e=>{G.value.push("next");for(const a in e.response.data)p.error(`${a} : ${e.response.data[a]}`)}))}},{typeInput:"tel",name:"phone",placeholder:"Phone Numbers",model:"",required:!0,class:"is-6",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],mask:"(###) ###-####"},{typeInput:"switch",name:"leo_vet_fr",values:["","LEO / VET / FR"],model:!1,default:!1,required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",name:"is_family",placeholder:"",model:0,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"hidden",name:"principal_family",placeholder:"LEO / VET / FR ID#",model:1,class:"is-6",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12",isLabel:!0,categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]}]),V=_([{typeInput:"switchEventChangeInput",typeInputDefault:"switchEventChangeInput",name:"category",values:["Adult","Minor"],class:"is-6",isLabel:!0,model:!1,category:["Adult","Minor"]},{typeInput:"file",typeInputDefault:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",isLabel:!0,model:"",required:!1,category:["Adult","Minor"],camera:!0,modalName:"Familiar"},{typeInput:"select",typeInputDefault:"select",name:"relationships",placeholder:"Relationship",values:["Son","Daughter","Wife","Husband","Father","Mother","Brother","Sister","Other"],model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"bar_code",placeholder:"Member ID Card",model:"",class:"is-6",isLabel:!0,required:!1,category:["Adult","Minor"]},{typeInput:"date",typeInputDefault:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"],maxDate:L().subtract(2,"years").format("YYYY-MM-DD")},{typeInput:"select",typeInputDefault:"select",name:"gender",placeholder:"Gender",values:["Male","Female"],model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-4",isLabel:!0,required:!1,category:["Adult","Minor"]},{typeInput:"text",typeInputDefault:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0,required:!0,category:["Adult","Minor"]},{typeInput:"select",typeInputDefault:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",isLabel:!0,required:!1,category:["Adult"]},{typeInput:"number",typeInputDefault:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-8",isLabel:!0,required:!1,category:["Adult"]},{typeInput:"switchEventChangeInput",typeInputDefault:"switchEventChangeInput",name:"misma_direccion",values:["","Use the same address as the parent member"],model:!1,required:!1,class:"is-12",isLabel:!0,category:["Adult"]},{typeInput:"text",typeInputDefault:"text",name:"address",placeholder:"Address",model:"",class:"is-12",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"city_id",placeholder:"City",model:"",values:[""],class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"state_id",placeholder:"State",model:"",values:[""],class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"number",typeInputDefault:"number",name:"postal_code",placeholder:"Postal Code",model:"",class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"selectData",typeInputDefault:"selectData",name:"country_id",placeholder:"Country",model:"",values:[""],class:"is-3",isLabel:!0,required:!0,category:["Adult"],typeMember:["Individual","Company"]},{typeInput:"email",typeInputDefault:"email",name:"email",placeholder:"Email",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"number",typeInputDefault:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",isLabel:!0,required:!0,category:["Adult"]},{typeInput:"checkbox",typeInputDefault:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!1,class:"is-6",isLabel:!0,category:["Adult"],typeMember:["Individual"]},{typeInput:"number",typeInputDefault:"number",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!1,class:"is-6",isLabel:!0,category:["Adult"],typeMember:["Individual"]},{typeInput:"hidden",typeInputDefault:"hidden",name:"is_family",placeholder:"",model:1,class:"is-6",isLabel:!0,category:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"hidden",typeInputDefault:"hidden",name:"principal_family",placeholder:"",model:0,class:"is-6",isLabel:!0,category:["Adult","Minor"],typeMember:["Individual","Company"]}]),W=g((()=>V.value)),Z=_([{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]),z=M([{typeInput:"switchEventChangeInput",name:"recurrence",values:["","Recurrence"],placeholder:"Recurrence",model:!0,disabled:!1,class:"is-12",display:!0,isLabel:!0},{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0,filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",required:!0,model:"",disabled:!1,class:"is-12",isLabel:!0},{typeInput:"selectDataActionChangeInput",name:"locations_id",placeholder:"Locations Sale",required:!0,values:[],model:"",disabled:!1,class:"is-4",isLabel:!0},{typeInput:"DropdownCheckbox",name:"diciplines",text:"Disciplines",placeholder:"Disciplines",required:!0,model:[],values:[],disabled:!1,class:"is-12",isLabel:!0,drop:!1},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-6",isLabel:!0},{typeInput:"switchEventChangeInput",name:"is_initiation_fee",values:["YES","NO"],placeholder:"Initiation fee",default:!1,model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_card_price",placeholder:"Card",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"DropdownCheckbox",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,required:!1,class:"is-12",drop:!1},{typeInput:"hidden",name:"initiation_fee",required:!0,placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4",isLabel:!0}]),H=_([{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",disabled:!1,class:"is-12",isLabel:!0}]),J=_([{typeInput:"hidden",name:"member_id",placeholder:"",model:"",class:"is-12 d-flex justify-content-end",isLabel:!0,required:!1},{typeInput:"file",name:"parent_photo",placeholder:"Parent/Guardian Picture",model:"",class:"is-12 d-flex justify-content-end",isLabel:!0,required:!0,camera:!0},{typeInput:"select",name:"parent_relationships",placeholder:"Parent Relationships",values:["Father","Mother","Brother","Sister","Grandfather","Grandmother","Legal Guardian","Other"],model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_second_name",placeholder:"Middle Name",model:"",class:"is-4",isLabel:!0,required:!1},{typeInput:"text",name:"parent_last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"select",name:"parent_goverment_id",placeholder:"Goverment ID Type",values:["Florida Driver License","Other State ID","Florida ID Card","Passport","Foreing Country ID","Florida Personal Identification Card","Florida Learner License"],model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"number",name:"parent_personal_identifications",placeholder:"ID #",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"city_id",placeholder:"City",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"selectData",name:"state_id",placeholder:"State",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"number",name:"postal_code",placeholder:"Postal Code",required:!0,model:"",class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"selectData",name:"country_id",placeholder:"Country",model:"",required:!0,values:[""],class:"is-3",isLabel:!0,categories:["Adult","Prospect"],typeMember:["Individual","Company"],filterOptionText:function(e){return e.name}},{typeInput:"email",name:"parent_email",placeholder:"Email",model:"",class:"is-4",isLabel:!0,required:!0},{typeInput:"text",name:"parent_phone",placeholder:"Phone Number",model:"",class:"is-4",isLabel:!0,required:!0}]),K=_([{typeInput:"text",name:"first_name",placeholder:"First Name",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"middle_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4",isLabel:!0},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-8",isLabel:!0},{typeInput:"number",name:"phone_number",placeholder:"Phone",model:"",class:"is-4",isLabel:!0},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-8",isLabel:!0},{typeInput:"select",name:"relationship",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",isLabel:!0,required:!1}]),Q=M([]),X=_(),ee=async(e,a=1)=>d.post("recurrences_select",{memberships_id:e,is_recurrence:a}),ae=async e=>{const a=await d.get(`members/${e}/edit`);return X.value=a.data,a},te=async e=>await d.post("paymentStripe",e),se=async e=>await d.post(`members/updatePersonalInformation/${X.value.id}`,e),le=async e=>await d.post(`members/subscribeDebitAutomatic/${e}`),ie=async e=>await d.post(`members/sendEmailContractAndWaiver/${e}`),ne=async e=>await d.post(`members/updateMembershipMember/${xe.value.id}`,e),re=async(e,a=null)=>await d.get(`members/pause_membership/${xe.value.id}?fecha=${a}`),oe=async(e,a=null,t=!0)=>await d.post(`members/hold_membership/${xe.value.id}`,{fecha:a,prorrateo:t}),de=async e=>d.get(`searchmember/${e}`),pe=async()=>await d.post(`members/cancelMembershipMember/${xe.value.id}`),ce=async(e,a)=>await d.post(`members/update-membership-member/${e}`,a),ue=async e=>await d.get(`get_presupuesto_membresia/${e}`),me=async(e,a)=>await d.post("members/deletePaymentMethod",{id:e,paymentMethod:a}),ye=async(e,a)=>await d.post("members/defaultPaymentMethod",{id:e,paymentMethod:a}),he=async e=>await d.post(`members/contactEmergencystore/${X.value.id}`,e),be=async()=>await d.post(`members/addPenalty/${X.value.id}`),ve=async()=>await d.post(`syncStripeResource/${X.value.id}`),Ie=async(e,a)=>await d.post(`paymentCash/${e}`,a),fe=async e=>await d.post(`members/guardian/${X.value.id}`,e),_e=async e=>await d.post("newMembershipMember",e),ge=async(e,a)=>await d.post(`sign/${a}`,{sign:e}),Le=async e=>await d.get(`members/cards/${e}`),Me=async(e,a)=>{const t=await d.get(`members/list_invoices/${e}`,{params:a});return X.value.invoices=t.data.invoices,X.value.pagos=t.data.pagos,X.value.invoicesSistem=t.data.invoicesSistem,t},De=async e=>await d.get(`credit/${e}/balance`),Ce=async e=>{const a=await d.get(`credit/${e}`);return N.value=a.data,a},Ae=async(e,a)=>(await d.post(`/credit/${e}/add`,a)).data,qe=async(e,a)=>(await d.post(`/credit/${e}/remove`,a)).data,we=async()=>await d.post("members/subscriptions_create_stripe",{members:A.value,trial_end:1,trial:!1}),Pe=async(e,a)=>await d.post(`paymentInvoice/${e}`,a),xe=g((()=>X.value?X.value.membership_members:null)),$e=g((()=>N.value?N.value:null)),Ee=g((()=>X.value.membership_members_history)),Fe=g((()=>X.value.families_children)),Se=g((()=>X.value.family_parent?X.value.family_parent.pincipal_family:null));g((()=>X.value.emergency));const Oe=g((()=>X.value.accessDay)),Ne=g((()=>xe.value.payments));g((()=>{let e=xe.value.created_at;return Ne.value[0].status&&(e=Ne.value[0].created_at),L(e).add(xe.value.recurrence.recurrence,"d")}));const Ye=g((()=>X.value.isSolvente));g((()=>X.value.sinMembresia));const Te=function(e){const a=this.values.find((e=>e.id==this.model));c(e,"initiation_fee",a.initiation_fee);const t=[];a.locations.forEach((e=>{1==e.sale&&t.push(e.company_locations)})),u(e,"locations_id",t);let s=1;o(e,"recurrence").model||(s=0),"Prospect"==Y.value&&(s=0),ee(this.model,s).then((a=>{o(e,"recurrences_id").values=a.data})),f(this.model).then((a=>{a.data.length&&(u(e,"diciplines",a.data),o(e,"diciplines").values.push({id:0,name:"All"}));const t=this.values.find((e=>e.id==this.model)).diciplines_number;o(e,"diciplines").required=0!=t,Re(e)}))},je=function(e){c(e,"amount",this.values.find((e=>e.id==this.model)).amount)},ke=function(e){v([this.model]).then((a=>{u(e,"diciplines",a.data)}))},Re=e=>{1==m(e,"memberships_id").all_diciplines?o(e,"diciplines").values.forEach((a=>{o(e,"diciplines").model.push(a.id)})):o(e,"diciplines").model=[]},Ge=function(e){""!=this.model?I(this.values.find((e=>e.id==this.model)).code,"membership").then((e=>{this.data=e.data,p.success("Discuount valid")})).catch((e=>{p.error(e.response.data),this.model=""})):this.data=null},Ue=function(e){return`${e.name}`},Be=function(e){return e.second_name?`${e.name} ${e.second_name} ${e.last_name}`:`${e.name}  ${e.last_name}`},Ve=function(e,a,t){const s=m(a,"memberships_id").diciplines_number;if(s>0&&(s<=this.model.length&&(e.returnValue=!1),s==this.model.length))if(this.model.includes(t)){const e=this.model.findIndex((e=>e==t)),a=[];this.model.forEach(((t,s)=>{e!=s&&a.push(t)})),this.model=a}else p.error("You must select a limit of "+s+" diciplines")},We=function(e){const a=o(e,"memberships_id").model;if(""!=a){let t=null;t=this.model?0:1,"Prospect"==Y.value&&(t=0),ee(a,t).then((a=>{o(e,"recurrences_id").values=a.data}))}},Ze=e=>{o(e,"memberships_id").change=Te,o(e,"recurrences_id").change=je,o(e,"locations_id").change=ke,o(e,"discount").change=Ge,o(e,"discount").filter=Ue,o(e,"staff_id").filter=Be,o(e,"diciplines").change=function(e,a){},o(e,"recurrence").change=We,o(e,"diciplines").click=Ve},ze=async e=>{const a=new FormData,t=h(e.member);b(a,t);for(let n=0;n<e.contact.length;n++){const t=e.contact[n];for(const e in t)a.append(`notifications[${n}][${e}]`,t[e])}const s=h(e.membresia);for(const n in s)if("diciplines"==n){const e=s[n];for(let t=0;t<e.length;++t)a.append("diciplines[]",e[t])}else a.append(n,s[n]);a.append("total",e.total),a.append("payment_type_id",3);const l=h(e.categoriesMembers,{array:!1});if("Minor"==l.category){a.append("address",o(J.value,"address").model),a.append("postal_code",o(J.value,"postal_code").model),a.append("city_id",o(J.value,"city_id").model),a.append("country_id",o(J.value,"country_id").model),a.append("state_id",o(J.value,"state_id").model),a.append("email",o(J.value,"parent_email").model);const e=h(J.value);for(const t in e)a.append(`guardian[${t}]`,e[t])}for(const n in l)a.append(n,l[n]);const i=h(e.notasInput);for(const n in i)a.append(n,i[n]);a.append("presupuesto_id",e.presupuesto_id),F.value&&a.append("id_principal",F.value);return await(async e=>{const a=await d.post("members",e);return e.value=a.data.member,a})(a).then((a=>(q.value=a.data.id,w.value=a.data.membership_members_id,0==o(e.member,"is_family").model&&(F.value=q.value),a))).catch((e=>{for(const a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{p.error(`${a}: ${e}`)}));return e}))},He=async(e,s)=>{const l=r({},{memberships_id:o(i=e,"memberships_id").model,recurrences_id:o(i,"recurrences_id").model,is_initiation_fee:!o(i,"is_initiation_fee").model,is_card_price:o(i,"is_card_price").model,discount:o(i,"discount").data?o(i,"discount").data.code:null});var i;"Minor"==Y.value?l.email=o(J.value,"parent_email")?o(J.value,"parent_email").model:null:l.email=o(s,"email")?o(s,"email").model:null,l.leo_vet_fr=o(s,"leo_vet_fr")?o(s,"leo_vet_fr").model:null,null!=o(e,"prorrateo")&&(l.prorrateo=o(e,"prorrateo").model),null!=o(e,"schedules")&&(l.schedules=o(e,"schedules").model),console.log(l);return await(async e=>d.post("getPresupuesto",e))(l).then((i=>{var n,o;S.value.push((n=r({},i.data),o={member:s,membresia:e,schedules:l.schedules?l.schedules:null},a(n,t(o))))})).catch((e=>{if("string"==typeof e.response.data)p.error(`${e.response.data}`);else for(const a in e.response.data)e.response.data[a].forEach((e=>{p.error(`${a}: ${e}`)}))}))},Je=e=>{const a=[];return e.forEach((e=>{a.push({id:e.id,picture:`${y}storage/${e.photo}`,initials:Ke(e.name,e.last_name),color:""})})),a},Ke=(e,a)=>e.substr(0,1)+a.substr(0,1);export{D as $,ue as A,ie as B,le as C,J as D,Se as E,Fe as F,fe as G,K as H,he as I,Oe as J,Me as K,Ee as L,R as M,Ae as N,qe as O,Ce as P,De as Q,$e as R,W as S,ae as T,Ye as U,F as V,C as W,te as X,ze as Y,_e as Z,A as _,ye as a,we as a0,Ke as a1,G as a2,x as a3,$ as a4,Q as a5,E as a6,Y as a7,T as a8,O as a9,H as aa,q as ab,w as ac,Z as ad,de as ae,xe as b,z as c,Ie as d,se as e,ee as f,Le as g,Ze as h,B as i,j,k,S as l,X as m,Je as n,ne as o,P as p,He as q,pe as r,me as s,ge as t,ce as u,re as v,oe as w,Pe as x,be as y,ve as z};