var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ede51957.js";import{r as s,a1 as o,b as d,d as p,A as n,o as m,h as u,B as c,j as y,k as v}from"./vendor.3b9a49d2.js";import{p as h}from"./PaymentMethodsData.d85f1d0f.js";import{A as I}from"./index.53d2d3d7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.78278b97.js";import"./useDropdown.4b88246a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import"./V-Placeload.ec1fe97e.js";import"./V-Dropdown.5634df5b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.725db5d0.js";import"./activePanelState.d422980e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ed930eff.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5554d4bf.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f4c30d64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.db2a2ca9.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.533d5625.js";import"./navbarLayoutState.a8e66516.js";import"./sidebarLayoutState.9d5a55d2.js";import"./video.7e4ace56.js";import"./darkModeState.9048b099.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.9336f53f.js";import"./AnimatedLogo.d39560aa.js";import"./V-Control.70f7b974.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5fbfe7cf.js";import"./V-Block.vue_vue&type=script&setup=true&lang.fd027cc2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.7c436ff6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b8cff140.js";s(1);const f=s([]),b=o({active:!1,member_id:null});d((()=>b.member_id?f.value.find((e=>e.id==b.member_id)):null)),s([{step:1,text:"Member Information",categories:["Adult","Minor"]},{step:1,text:"Prospect Information",categories:["Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Add Payment Method",categories:["Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:3,text:"Sing Waiver",categories:["Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor"]}]),d((()=>_.value.find((e=>1==e.step)).data.find((e=>"select_type"==e.name)).model));const g=s({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0});s("data");const _=s([{step:1,data:[{typeInput:"switch",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",categories:["Adult"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"Minor"==g.value.model?"is-12":"is-6 d-flex justify-content-end",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",required:!0,class:"is-6",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==g.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"Prospect"==g.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!0,categories:["Adult","Minor","Prospect"]},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"text",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]}]},{step:2,family:[{family:1,data_1:[{typeInput:"switch",name:"category",values:["Adult","Minor"],class:"is-6",model:!1},{typeInput:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",class:"is-6",required:!1},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",required:!1},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-6",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",class:"is-6",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-6",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-6",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-6",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",required:!1}]}],parent:[{typeInput:"file",name:"photo",placeholder:"Parent/Guardian Picture",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!1}]},{step:3,data:[{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]},{step:4,data:[{member:{type:"principal"}}]},{step:5,data:[((e,i)=>{for(var s in i||(i={}))a.call(i,s)&&l(e,s,i[s]);if(t)for(var s of t(i))r.call(i,s)&&l(e,s,i[s]);return e})({member:{type:"principal"}},{data:h.value})]}]),M=v("div",{class:"page-content-inner d-flex"},[v("p",null,"Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quis quas tenetur animi facilis natus labore asperiores repudiandae accusamus repellendus, doloribus illo nam delectus quo eum ex officiis ea voluptatum inventore.")],-1);var q=p({expose:[],setup(e){const t=c();return s(t.query.member),n((()=>{(async e=>{b.value={active:!0,member_id:e},await I.get(`members/${e}`).then((e=>{f.value.push(e.data.member)}))})()})),(e,t)=>{const a=i;return m(),u(a,null,{default:y((()=>[M])),_:1})}}});export default q;
