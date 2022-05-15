var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as s}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a857d93f.js";import{r as l,y as o,b as p,d as n,G as d,o as m,h as u,O as c,j as y,k as v}from"./vendor.ce9b165f.js";import{p as h}from"./PaymentMethodsData.1bcb764a.js";import{A as b}from"./index.8fcbf188.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5c439048.js";import"./useDropdown.8fc6e73f.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.6997ebf4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.82aafae5.js";import"./V-Button.vue_vue&type=script&setup=true&lang.2c6b8d85.js";import"./V-Placeload.47aacffe.js";import"./V-Control.0057af57.js";import"./V-Field.vue_vue&type=script&setup=true&lang.03c5873e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2ef57134.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.7317bbf9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3b04d82c.js";import"./V-Dropdown.ea9ea7d8.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.22d246c1.js";import"./Companies.2e58841c.js";import"./activePanelState.3fc2a6bd.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.79372dbb.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a9cbc0ec.js";import"./V-Message.vue_vue&type=script&setup=true&lang.214794cf.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.abe60888.js";import"./navbarLayoutState.bcc94df4.js";import"./sidebarLayoutState.73320808.js";import"./video.7ef65ba3.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.a2a555c5.js";import"./darkModeState.56630ad4.js";import"./AnimatedLogo.bcb183f5.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.f4ff5ff8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9c4c74e3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.b79e6020.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.109d881a.js";l(1);const I=l([]),f=o({active:!1,member_id:null});p((()=>f.member_id?I.value.find((e=>e.id==f.member_id)):null)),l([{step:1,text:"Member Information",categories:["Adult","Minor"]},{step:1,text:"Prospect Information",categories:["Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Add Payment Method",categories:["Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:3,text:"Sing Waiver",categories:["Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor"]}]),p((()=>_.value.find((e=>1==e.step)).data.find((e=>"select_type"==e.name)).model));const g=l({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0});l("data");const _=l([{step:1,data:[{typeInput:"switch",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",categories:["Adult"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"Minor"==g.value.model?"is-12":"is-6 d-flex justify-content-end",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",required:!0,class:"is-6",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==g.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"Prospect"==g.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!0,categories:["Adult","Minor","Prospect"]},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"text",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]}]},{step:2,family:[{family:1,data_1:[{typeInput:"switch",name:"category",values:["Adult","Minor"],class:"is-6",model:!1},{typeInput:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",class:"is-6",required:!1},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",required:!1},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-6",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",class:"is-6",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-6",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-6",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-6",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",required:!1}]}],parent:[{typeInput:"file",name:"photo",placeholder:"Parent/Guardian Picture",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!1}]},{step:3,data:[{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]},{step:4,data:[{member:{type:"principal"}}]},{step:5,data:[((e,s)=>{for(var l in s||(s={}))a.call(s,l)&&i(e,l,s[l]);if(t)for(var l of t(s))r.call(s,l)&&i(e,l,s[l]);return e})({member:{type:"principal"}},{data:h.value})]}]),M=v("div",{class:"page-content-inner d-flex"},[v("p",null,"Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quis quas tenetur animi facilis natus labore asperiores repudiandae accusamus repellendus, doloribus illo nam delectus quo eum ex officiis ea voluptatum inventore.")],-1);var j=n({expose:[],setup(e){const t=c();return l(t.query.member),d((()=>{(async e=>{f.value={active:!0,member_id:e},await b.get(`members/${e}`).then((e=>{I.value.push(e.data.member)}))})()})),(e,t)=>{const a=s;return m(),u(a,null,{default:y((()=>[M])),_:1})}}});export default j;
