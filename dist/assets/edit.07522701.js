var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as l}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.49f33864.js";import{r as s,z as o,b as p,d as n,O as d,I as m,o as u,i as c,j as y,H as v,k as h}from"./vendor.d343baf9.js";import{p as I}from"./PaymentMethodsData.63a4119b.js";import{A as f}from"./index.c9faec89.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.aef3e716.js";import"./useDropdown.058e23b5.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ace90716.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.ec9ca61e.js";import"./V-Button.vue_vue&type=script&setup=true&lang.f850d095.js";import"./V-Placeload.9f0459f0.js";import"./V-Control.41ba379d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c73a2a5f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.66ed88a9.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.50c44f0e.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.90661a21.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a76a96a0.js";import"./V-Dropdown.7efd21c7.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.28f32a22.js";import"./Companies.984ea600.js";import"./activePanelState.5861ca88.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.63db2abf.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1a6ab0fe.js";import"./video.f7ef545f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f3fcc4ea.js";import"./darkModeState.423a928c.js";import"./AnimatedLogo.3101fbee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.8b6033b6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.606db9d9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6c35a108.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.5641ebe1.js";s(1);const b=s([]),g=o({active:!1,member_id:null});p((()=>g.member_id?b.value.find((e=>e.id==g.member_id)):null)),s([{step:1,text:"Member Information",categories:["Adult","Minor"]},{step:1,text:"Prospect Information",categories:["Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Add Payment Method",categories:["Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:3,text:"Sing Waiver",categories:["Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor"]}]),p((()=>M.value.find((e=>1==e.step)).data.find((e=>"select_type"==e.name)).model));const _=s({name:"category",values:["Adult","Minor","Prospect"],model:"Adult",required:!0});s("data");const M=s([{step:1,data:[{typeInput:"switch",name:"select_type",values:["Individual","Company"],model:!1,required:!1,class:"is-6",categories:["Adult"]},{typeInput:"file",name:"photo",placeholder:"Member Picture",model:"",required:!0,class:"Minor"==_.value.model?"is-12":"is-6 d-flex justify-content-end",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"text",name:"company_name",placeholder:"Company Name",model:"",class:"is-12",categories:["Adult"],typeMember:["Company"]},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-4",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",required:!0,class:"is-6",categories:["Adult","Minor"],typeMember:["Individual","Company"]},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",required:!0,class:"Prospect"==_.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",required:!0,class:"Prospect"==_.value.model?"is-6":"is-3",categories:["Adult","Minor","Prospect"],typeMember:["Individual","Company"]},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!0,categories:["Adult","Minor","Prospect"]},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6",categories:["Adult","Prospect"],typeMember:["Individual","Company"]},{typeInput:"checkbox",name:"leo_vet_fr",placeholder:"LEO / VET / FR",model:[],required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]},{typeInput:"text",name:"id_leo_vet_fr",placeholder:"LEO / VET / FR ID#",model:"",required:!0,class:"is-6",categories:["Adult"],typeMember:["Individual"]}]},{step:2,family:[{family:1,data_1:[{typeInput:"switch",name:"category",values:["Adult","Minor"],class:"is-6",model:!1},{typeInput:"file",name:"photo",placeholder:"Member Picture",class:"is-6 d-flex justify-content-end",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"bar_code",placeholder:"Client ID Card",model:"",class:"is-6",required:!1},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-6",required:!1},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-6",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-6",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-6",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",class:"is-6",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",class:"is-6",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-6",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-6",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-6",required:!1}]}],parent:[{typeInput:"file",name:"photo",placeholder:"Parent/Guardian Picture",model:"",required:!1},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",required:!1},{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!1},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",required:!1},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!1},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!1},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!1},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!1},{typeInput:"email",name:"email",placeholder:"Email",model:"",required:!1},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!1}]},{step:3,data:[{typeInput:"checkboxGroup",name:"notifications",text:"When you ask clients to opt in, remind them that we'll still send receipts and anything critical",values:[{name:"notifications_types_id",value:1,placeholder:"Account Information",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:2,placeholder:"Reminders and schedule changes",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]},{name:"notifications_types_id",value:3,placeholder:"News and promos",values:[{placeholder:"Email",name:"email",model:["email"]},{placeholder:"SMS",name:"sms",model:["sms"]}]}]}]},{step:4,data:[{member:{type:"principal"}}]},{step:5,data:[((e,l)=>{for(var s in l||(l={}))a.call(l,s)&&i(e,s,l[s]);if(t)for(var s of t(l))r.call(l,s)&&i(e,s,l[s]);return e})({member:{type:"principal"}},{data:I.value})]}]),q=h("div",{class:"page-content-inner d-flex"},[h("p",null,"Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Quis quas tenetur animi facilis natus labore asperiores repudiandae accusamus repellendus, doloribus illo nam delectus quo eum ex officiis ea voluptatum inventore.")],-1);var x=n({expose:[],setup(e){const t=d();return s(t.query.member),m((()=>{(async e=>{g.value={active:!0,member_id:e},await f.get(`members/${e}`).then((e=>{b.value.push(e.data.member)}))})()})),(e,t)=>{const a=l;return u(),c(a,null,{default:y((()=>[v(" Content Wrapper "),v("  "),q])),_:1})}}});export default x;
