import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.3d19f6e0.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.d0454139.js";import{d as l,z as a,b as s,r as n,o as r,h as o,j as i,k as p,N as u,O as c,J as m,B as d,L as h,G as v,K as y,F as b,ab as _}from"./vendor.494d8f4f.js";import{p as f}from"./sidebarLayoutState.ecb5eb38.js";import{_ as g}from"./V-Button.vue_vue&type=script&setup=true&lang.1dd5b110.js";import{_ as x}from"./inputsLayaut.vue_vue&type=script&setup=true&lang.2639f676.js";import{_ as I}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.a4cd9f2f.js";import{_ as C}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.802003b9.js";import{_ as j}from"./pdf_icon.0444a540.js";import{_ as M}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.4c13d6a8.js";import{_ as w}from"./V-Block.vue_vue&type=script&setup=true&lang.42a301f5.js";import{_ as D}from"./V-Control.508a4b0d.js";import{_ as E}from"./V-Field.vue_vue&type=script&setup=true&lang.85691950.js";import{_ as A}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a3c3f046.js";import"./V-Placeload.982737c7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3bdb91dc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2af065f6.js";import"./V-Dropdown.2022fe5f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.09e8c3be.js";import"./useDropdown.8ea1ab42.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.93c62a5e.js";import"./index.57a6a6f4.js";import"./activePanelState.9146e99c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0b8cd665.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.e5741dd6.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8b2b266a.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.00195a25.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.728d7802.js";import"./navbarLayoutState.9bc71a3b.js";import"./video.d6c5bf95.js";import"./darkModeState.3bab660d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c9c80bf7.js";import"./AnimatedLogo.55110e35.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.8f35f595.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.81990723.js";import"./userPopovers.d692847d.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.05e43d7f.js";const S={class:"d-flex"},P=p("div",{class:"ml-3"},[p("h2",{class:"title is-4 is-narrow "},"Name Member"),p("p",null,"#76545678"),p("p",null,[p("small",null,"Member since. Sep, 10, 2020")])],-1),k={class:"w-100 mt-5"},V=p("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var T=l({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(l,{emit:h}){const v=l;f.value="Member Profile",a({title:"Members"});const y=[{name:"Personal Information",component:"personalInformation"},{name:"Credit Card",component:"memberCreditCard"},{name:"Membership/Contract",component:"memberMembership"},{name:"Family Members",component:"memberFamily"},{name:"Emergency",component:"memberEmergency"},{name:"Check-ins",component:"memberCheckins"},{name:"Purchases",component:"memberPurchases"}],b=[{name:"Personal Information",component:"personalInformation"},{name:"Waiver",component:"memberWaiver"}],_=s((()=>["Adult","Minor"].includes(v.category)?y:b)),g=n(0),x=n(null),I=s((()=>null!=_.value[g.value]?_.value[g.value].component:x.value));return(l,a)=>{const s=e,n=t;return r(),o(n,null,{default:i((()=>[p("div",S,[p(s,{picture:"https://picsum.photos/150/151",size:"large"}),P]),p("div",k,[p("ul",null,[(r(!0),o(u,null,c(d(_),((e,t)=>(r(),o("li",{key:`item-${t}`},[p(n,{class:["mb-3 item_menu d-flex justify-content-between align-items-center",g.value==t?"active":""],color:g.value==t?"warning":void 0,elevated:g.value==t,onClick:e=>(e=>{g.value=e,h("changeMenu",I)})(t)},{default:i((()=>[p("p",null,m(e.name),1),V])),_:2},1032,["class","color","elevated","onClick"])])))),128))])])])),_:1})}}});const L=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Personal Information "),p("p",null,"Edit member's personal information")],-1),F=v(" Save Changes "),N=v(" Convert to Members "),B={class:"p-6"},W=p("h1",{class:"title is-5 mb-0"},"Profile Picture",-1),U=p("p",null,"This is how other will recognize the member",-1),z={class:"d-flex justify-content-center"},R={class:"text-center"};var $=l({expose:[],props:{category:{type:String,default:"Adult"}},setup(t){const l=t,a=n([{typeInput:"text",name:"name",placeholder:"First Name",model:"",class:"is-4"},{typeInput:"text",name:"second_name",placeholder:"Middle Name",model:"",class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"select",name:"gender",placeholder:"Gender",values:["Male","Female","Binario"],model:"",class:"is-4"},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:""},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-12"},{typeInput:"text",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12"},{typeInput:"date",name:"date_birth",placeholder:"Date of Birth",model:"",class:"is-4"},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-4"},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",class:"is-4"},{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",class:"is-12"}]),u=n([{typeInput:"file",name:"photo",placeholder:"Member Picture",model:""}]);return s((()=>"Prospect"==l.category)),(t,s)=>{const n=g,c=e,m=x,d=I;return r(),o(d,null,{"header-left":i((()=>[L])),"header-right":i((()=>[p(n,{color:"primary"},{default:i((()=>[F])),_:1}),"Prospect"==l.category?(r(),o(n,{key:0,color:"info",class:"ml-3"},{default:i((()=>[N])),_:1})):h("",!0)])),content:i((()=>[p("div",B,[W,U,p("div",z,[p("div",R,[p(c,{picture:"https://picsum.photos/150/151",class:"mb-4",size:"xl"}),p(m,{"inputs-step":u.value},null,8,["inputs-step"])])])]),p(m,{"inputs-step":a.value},null,8,["inputs-step"])])),_:1})}}});const q=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Credit Card Information "),p("p",null,"Edit member's payment information")],-1),G=v(" Save Changes "),Y={class:"column is-8 mx-auto"};var H=l({expose:[],setup(e){const t=n([{typeInput:"text",name:"name_card",placeholder:"Name Card",model:"",class:"is-12",keyUp:(e,t)=>{a.value=!1}},{typeInput:"text",name:"number_card",placeholder:"Number Card",model:"",class:"is-12",maxLength:19,keyUp:(e,t)=>{a.value=!1;var l=e.which?e.which:e.keyCode;return 8==l||(l>=48&&l<=57?void(t.model=t.model.replace(/[^\dA-Z]/g,"").replace(/(.{4})/g,"$1 ").trim()):(t.model=t.model.substr(0,t.model.length-1),!1))}},{typeInput:"text",name:"expiration_date",placeholder:"Expiration Date",model:"",class:"is-6",maxLength:5,keyUp:(e,t)=>{a.value=!1;var l=e.which?e.which:e.keyCode;return 8==l||(l>=48&&l<=57?void(t.model.length<4&&(t.model=t.model.replace(/[^\dA-Z]/g,"").replace(/(.{2})/g,"$1/").trim())):(t.model=t.model.substr(0,t.model.length-1),!1))}},{typeInput:"text",name:"password_card",placeholder:"CVC",model:"",class:"is-6",maxLength:3,keyUp:(e,t)=>{a.value=!0;var l=e.which?e.which:e.keyCode;return 8==l||(l>=48&&l<=57||(t.model=t.model.substr(0,t.model.length-1),!1))}}]),l=e=>t.value.find((t=>t.name==e)),a=n(!1);return(e,s)=>{const n=g,u=C,c=x,m=I;return r(),o(m,null,{"header-left":i((()=>[q])),"header-right":i((()=>[p(n,{color:"primary"},{default:i((()=>[G])),_:1})])),content:i((()=>[p(u,{color:"orange",number:l("number_card").model,name:l("name_card").model,expiry:l("expiration_date").model,cvc:l("password_card").model,flipped:a.value,onFlip:s[1]||(s[1]=e=>a.value=!a.value),class:"mb-6"},null,8,["number","name","expiry","cvc","flipped"]),p("div",Y,[p(c,{"inputs-step":t.value},null,8,["inputs-step"])])])),_:1})}}});const O=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Membership / Contract "),p("p",null,"Edit member's membership and contract information")],-1),Z=v(" Save Changes "),J=p("h1",{class:"title is-6"},"Active Contract Information",-1),K={class:"columns is-multiline"},Q=p("div",{class:"column is-2 text-center"},[p("img",{src:j,width:"40",alt:""}),p("br"),p("a",{href:"#"},"Contract")],-1),X={class:"column is-10"},ee=p("h1",{class:"title is-6"},"Inactive Contract Information",-1),te={class:"table is-hoverable is-fullwidth"},le=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"Contract"),p("th",{scope:"col"},"Agreement Date"),p("th",{scope:"col"},"Sold By"),p("th",{scope:"col"},"Membership Type"),p("th",{scope:"col"},"Decipline"),p("th",{scope:"col"},"Start Date"),p("th",{scope:"col"},"End Date"),p("th",{scope:"col"},"Auto Renew"),p("th",{scope:"col"},"Discount Type")])],-1),ae=p("img",{src:j,width:"40",alt:""},null,-1),se=p("h1",{class:"title is-6"},"Active Waiver Information",-1),ne=p("div",{class:"text-center column is-4"},[p("a",{href:""},[p("img",{src:j,width:"40",alt:""}),p("p",null,"Waiver_1234567.pdf")])],-1);var re=l({expose:[],setup(e){const l=n([{typeInput:"text",name:"agreement_date",placeholder:"Agreement Date",model:"",class:"is-3"},{typeInput:"text",name:"sold_by",placeholder:"Sold By",model:"",class:"is-3"},{typeInput:"text",name:"membership_type",placeholder:"Membership Type",model:"",class:"is-3"},{typeInput:"text",name:"deciplines",placeholder:"Deciplines",model:"",class:"is-3"},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3"},{typeInput:"date",name:"end_type",placeholder:"End Date",model:"",class:"is-3"},{typeInput:"text",name:"auto_renew",placeholder:"Auto Renew",model:"",class:"is-3"},{typeInput:"text",name:"discount_type",placeholder:"Discount Type",model:"",class:"is-3"}]),a=n([{contract:"URL",agreement_date:"01/01/2021",sold_by:"Diego Valera",membership_type:"1 Martial Art",deciplines:"Boxing",start_date:"01/01/2021",end_type:"01/01/2021",auto_renew:"YES",discount_type:"10%"},{contract:"URL",agreement_date:"01/01/2021",sold_by:"Diego Valera",membership_type:"1 Martial Art",deciplines:"Boxing",start_date:"01/01/2021",end_type:"01/01/2021",auto_renew:"YES",discount_type:"10%"},{contract:"URL",agreement_date:"01/01/2021",sold_by:"Diego Valera",membership_type:"1 Martial Art",deciplines:"Boxing",start_date:"01/01/2021",end_type:"01/01/2021",auto_renew:"YES",discount_type:"10%"}]);return(e,s)=>{const n=g,d=x,h=t,v=I;return r(),o(v,null,{"header-left":i((()=>[O])),"header-right":i((()=>[p(n,{color:"primary"},{default:i((()=>[Z])),_:1})])),content:i((()=>[p(h,{class:"mb-4"},{default:i((()=>[J,p("div",K,[Q,p("div",X,[p(d,{"inputs-step":l.value},null,8,["inputs-step"])])])])),_:1}),p(h,{class:"mb-4"},{default:i((()=>[ee,p("table",te,[le,p("tbody",null,[(r(!0),o(u,null,c(a.value,((e,t)=>(r(),o("tr",{key:`item-${t}`},[p("td",null,[p("a",{href:e.contract},[ae],8,["href"])]),p("td",null,m(e.agreement_date),1),p("td",null,m(e.sold_by),1),p("td",null,m(e.membership_type),1),p("td",null,m(e.deciplines),1),p("td",null,m(e.start_date),1),p("td",null,m(e.end_type),1),p("td",null,m(e.auto_renew),1),p("td",null,m(e.discount_type),1)])))),128))])])])),_:1}),p(h,{class:"mb-4"},{default:i((()=>[se,ne])),_:1})])),_:1})}}});const oe=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Family Members "),p("p",null,"Edit member's family members")],-1),ie={class:"columns is-multiline"};var pe=l({expose:[],setup(t){n([{typeInput:"text",name:"agreement_date",placeholder:"Agreement Date",model:"",class:"is-3"},{typeInput:"text",name:"sold_by",placeholder:"Sold By",model:"",class:"is-3"},{typeInput:"text",name:"membership_type",placeholder:"Membership Type",model:"",class:"is-3"},{typeInput:"text",name:"deciplines",placeholder:"Deciplines",model:"",class:"is-3"},{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",class:"is-3"},{typeInput:"date",name:"end_type",placeholder:"End Date",model:"",class:"is-3"},{typeInput:"text",name:"auto_renew",placeholder:"Auto Renew",model:"",class:"is-3"},{typeInput:"text",name:"discount_type",placeholder:"Discount Type",model:"",class:"is-3"}]);const l=n([{id:1,name:"Wonder Woman",subtitle:"Mother/Adult",img:"https://picsum.photos/150/150"},{id:2,name:"Lionel Messi",subtitle:"Father/Minor",img:"https://picsum.photos/150/151"}]);return(t,a)=>{const s=e,n=M,m=w,d=I;return r(),o(d,null,{"header-left":i((()=>[oe])),"header-right":i((()=>[])),content:i((()=>[p("div",ie,[(r(!0),o(u,null,c(l.value,((e,t)=>(r(),o("div",{class:"column is-4 mb-4",key:`family-${t}`},[p(m,{title:e.name,subtitle:e.subtitle,class:"border-1 p-4 radius-small"},{icon:i((()=>[p(s,{size:"medium",picture:e.img},null,8,["picture"])])),action:i((()=>[p(n)])),_:2},1032,["title","subtitle"])])))),128))])])),_:1})}}});const ue=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Emergency Contact "),p("p",null,"Edit member's emergency contact ")],-1),ce=v(" Save Changes "),me={class:"p-6"},de=p("h1",{class:"title is-5 "}," Emergency Contact Information",-1);var he=l({expose:[],setup(e){const t=n([{typeInput:"text",name:"first_name",placeholder:"First Name",model:"",class:"is-4"},{typeInput:"text",name:"middle_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",class:"is-4"},{typeInput:"email",name:"email",placeholder:"Email",model:"",class:"is-8"},{typeInput:"number",name:"phone",placeholder:"phone",model:"",class:"is-4"},{typeInput:"text",name:"address",placeholder:"Address",model:"",class:"is-8"},{typeInput:"select",name:"relationships",placeholder:"Relationship",values:["Sand","Dother","Wife","Girlfriend","Boyfriend","Father","Mother"],model:"",class:"is-4",required:!1}]);return(e,l)=>{const a=g,s=x,n=I;return r(),o(n,null,{"header-left":i((()=>[ue])),"header-right":i((()=>[p(a,{color:"primary"},{default:i((()=>[ce])),_:1})])),content:i((()=>[p("div",me,[de,p(s,{"inputs-step":t.value},null,8,["inputs-step"])])])),_:1})}}});const ve=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Check-ins History "),p("p",null,"Edit member's check-ins history")],-1),ye={class:"p-6"},be={class:"d-flex"},_e=p("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),fe=p("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),ge=v(" Export "),xe={class:"mt-4"},Ie={class:"table is-hoverable is-fullwidth"},Ce=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"DATE"),p("th",{scope:"col"},"TIME"),p("th",{scope:"col"},"STAFF")])],-1),je=p("td",null,"01/01/2021",-1),Me=p("td",null,"12:00 pm",-1),we=p("td",null,"Diego Vera",-1);var De=l({expose:[],setup:e=>(e,t)=>{const l=D,a=E,s=g,n=I;return r(),o(n,null,{"header-left":i((()=>[ve])),"header-right":i((()=>[])),content:i((()=>[p("div",ye,[p("div",be,[p(a,{class:"field mr-3"},{default:i((()=>[p(l,null,{default:i((()=>[_e])),_:1})])),_:1}),p(a,{class:"field mr-3"},{default:i((()=>[p(l,null,{default:i((()=>[fe])),_:1})])),_:1}),p(s,{color:"primary"},{default:i((()=>[ge])),_:1})]),p("div",xe,[p("table",Ie,[Ce,p("tbody",null,[(r(),o(u,null,c(20,(e=>p("tr",null,[je,Me,we]))),64))])])])])])),_:1})}});const Ee=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Purchases History "),p("p",null,"Edit member's purchases history")],-1),Ae={class:"p-6"},Se={class:"mt-4"},Pe={class:"table is-hoverable is-fullwidth"},ke=p("thead",null,[p("tr",null,[p("th",{scope:"col"},"DATE"),p("th",{scope:"col"},"TIME"),p("th",{scope:"col"},"AMOUNT"),p("th",{scope:"col"},"PAYMENT TYPE"),p("th",{scope:"col"},"ITEMS")])],-1),Ve=p("td",null,"01/01/2021",-1),Te=p("td",null,"12:00 pm",-1),Le=p("td",null,"****** 4787",-1),Fe=p("td",null,"Gym Access Membership",-1);var Ne=l({expose:[],setup:e=>(e,t)=>{const l=I;return r(),o(l,null,{"header-left":i((()=>[Ee])),"header-right":i((()=>[])),content:i((()=>[p("div",Ae,[p("div",Se,[p("table",Pe,[ke,p("tbody",null,[(r(),o(u,null,c(20,(e=>p("tr",null,[Ve,Te,p("td",null,"$"+m(e)+"07",1),Le,Fe]))),64))])])])])])),_:1})}});const Be=p("div",null,[p("h1",{class:"title is-4 mb-0"}," Waiver "),p("p",null,"Edit member's waiver information")],-1),We=v(" Convert to Members "),Ue={class:"columns is-multiline"},ze={class:"border-1 document_box p-4 d-flex justify-content-center radius-small"},Re={href:"234",class:"text-center"},$e=p("img",{style:{width:"70px"},src:j,alt:""},null,-1);var qe=l({expose:[],setup(e){const t=n([{name:"Waiver_010221.pdf",url:""},{name:"Waiver_010221.pdf",url:""}]);return(e,l)=>{const a=g,s=I;return r(),o(s,null,{"header-left":i((()=>[Be])),"header-right":i((()=>[p(a,{color:"info"},{default:i((()=>[We])),_:1})])),content:i((()=>[p("div",Ue,[(r(!0),o(u,null,c(t.value,((e,t)=>(r(),o("div",{class:"column is-2 mb-4",key:`family-${t}`},[p("div",ze,[p("a",Re,[$e,p("p",null,m(e.name),1)])])])))),128))])])),_:1})}}});const Ge={class:"columns is-multiline"},Ye={class:"column is-3"},He={class:"column is-9"};var Oe=l({expose:[],setup(e){const t=y();f.value="Member Profile",a({title:"Members"});const l=n("personalInformation"),s=e=>{l.value=e.value};return(e,a)=>{const n=T,u=$,c=H,m=re,h=pe,v=he,y=De,f=Ne,g=qe,x=A;return r(),o(x,null,{default:i((()=>[p("div",Ge,[p("div",Ye,[p(n,{category:d(t).query.category,onChangeMenu:s},null,8,["category"])]),p("div",He,[b(p(u,{category:d(t).query.category},null,8,["category"]),[[_,"personalInformation"==l.value]]),b(p(c,null,null,512),[[_,"memberCreditCard"==l.value]]),b(p(m,null,null,512),[[_,"memberMembership"==l.value]]),b(p(h,null,null,512),[[_,"memberFamily"==l.value]]),b(p(v,null,null,512),[[_,"memberEmergency"==l.value]]),b(p(y,null,null,512),[[_,"memberCheckins"==l.value]]),b(p(f,null,null,512),[[_,"memberPurchases"==l.value]]),b(p(g,null,null,512),[[_,"memberWaiver"==l.value]])])])])),_:1})}}});export default Oe;
