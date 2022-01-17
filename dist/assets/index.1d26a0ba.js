import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.3d19f6e0.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.d0454139.js";import{d as s,r as l,b as a,o as n,h as u,j as i,k as o,N as r,O as p,J as c,B as d,D as m,G as b,z as v,A as y,F as f,ab as h}from"./vendor.494d8f4f.js";import{_ as g}from"./inputsLayaut.vue_vue&type=script&setup=true&lang.2639f676.js";import{_}from"./formLayaut.vue_vue&type=style&index=0&lang.520d5e4d.js";import{_ as x}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.802003b9.js";import{_ as j}from"./V-Button.vue_vue&type=script&setup=true&lang.1dd5b110.js";import{_ as C}from"./V-Tag.vue_vue&type=script&setup=true&lang.e5741dd6.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a3c3f046.js";import{p as I}from"./sidebarLayoutState.ecb5eb38.js";import"./V-Control.508a4b0d.js";import"./V-Field.vue_vue&type=script&setup=true&lang.85691950.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3bdb91dc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2af065f6.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.a4cd9f2f.js";import"./V-Placeload.982737c7.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.93c62a5e.js";import"./useDropdown.8ea1ab42.js";import"./V-Dropdown.2022fe5f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.09e8c3be.js";import"./index.57a6a6f4.js";import"./activePanelState.9146e99c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0b8cd665.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8b2b266a.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.00195a25.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.728d7802.js";import"./navbarLayoutState.9bc71a3b.js";import"./video.d6c5bf95.js";import"./darkModeState.3bab660d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c9c80bf7.js";import"./AnimatedLogo.55110e35.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.8f35f595.js";import"./V-Block.vue_vue&type=script&setup=true&lang.42a301f5.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.81990723.js";import"./userPopovers.d692847d.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.05e43d7f.js";const S={class:"d-flex"},N=o("div",{class:"ml-3"},[o("h2",{class:"title is-4 is-narrow "},"Club Name"),o("p",null,"Club ID# 76545678")],-1),L={class:"w-100 mt-5"},M=o("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var k=s({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(s,{emit:d}){const m=[{name:"Club Information",component:"clubInformation"},{name:"Club Representatives",component:"clubRepresentatives"},{name:"Club Payment Methods",component:"clubPayment"},{name:"Club Subscription",component:"clubSubscription"},{name:"Club Locations",component:"clubLocation"}],b=l(0),v=l(null),y=a((()=>null!=m[b.value]?m[b.value].component:v.value));return(s,l)=>{const a=e,v=t;return n(),u(v,null,{default:i((()=>[o("div",S,[o(a,{picture:"https://picsum.photos/150/151",size:"large"}),N]),o("div",L,[o("ul",null,[(n(),u(r,null,p(m,((e,t)=>o("li",{key:`item-${t}`},[o(v,{class:["mb-3 item_menu d-flex justify-content-between align-items-center",b.value==t?"active":""],color:b.value==t?"warning":void 0,elevated:b.value==t,onClick:e=>(e=>{b.value=e,d("changeMenu",y)})(t)},{default:i((()=>[o("p",null,c(e.name),1),M])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const A={class:"mb-4"},P=o("h1",{class:"title is-5 mb-0"},"Club Logo",-1),V=o("p",null,"This in how club is recognize",-1),q={class:"d-flex justify-content-center"},R={class:"text-center"},D={class:"mb-4"},E=o("h1",{class:"title is-5"},"Slogan",-1),T=o("h1",{class:"title is-5"},"Club Information",-1);var $=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(t){const s=t;m();const r=a((()=>({title:"Club General Information",subtitle:"Edit Club information"}))),p=l([{typeInput:"text",name:"name",placeholder:"Club Name",model:"",required:!0,class:"is-12"},{typeInput:"text",name:"address",placeholder:"Club Address",model:"",required:!0,class:"is-12"},{typeInput:"email",name:"email",placeholder:"Club Email",model:"",required:!0,class:"is-6"},{typeInput:"number",name:"phone",placeholder:"Club phone",model:"",required:!0,class:"is-6"},{typeInput:"textarea",name:"notes",placeholder:"Notex",model:"",required:!0,class:"is-12"}]),c=l([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]),b=l([{typeInput:"file",name:"photo",placeholder:"Member Picture",model:""}]);return(t,l)=>{const a=e,m=g,v=_;return n(),u(v,{buttons:s.buttons,step:s.step,titles:d(r)},{default:i((()=>[o("div",A,[P,V,o("div",q,[o("div",R,[o(a,{picture:"https://picsum.photos/150/151",class:"mb-4",size:"xl"}),o(m,{"inputs-step":b.value},null,8,["inputs-step"])])])]),o("div",D,[E,o(m,{"inputs-step":c.value},null,8,["inputs-step"])]),T,o(m,{"inputs-step":p.value},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),z=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;m();const s=a((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),r=l([{typeInput:"text",name:"represetative_first_name",placeholder:"Represetative First Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"RepresetativeMiddleName",placeholder:"Represetative Middle Name",model:"",required:!0,class:"is-4"},{typeInput:"text",name:"RepresetativeLastName",placeholder:"Represetative Last Name",model:"",required:!0,class:"is-4"},{typeInput:"email",name:"email",placeholder:"Club Email",model:"",required:!0,class:"is-6"},{typeInput:"number",name:"phone",placeholder:"Phone Number",model:"",required:!0,class:"is-6"},{typeInput:"select",name:"goverment_id",placeholder:"Goverment ID Type",values:["Card ID","Identification ID","Passport"],model:"",required:!0,class:"is-4"},{typeInput:"number",name:"personal_identifications",placeholder:"ID #",model:"",required:!0,class:"is-8"},{typeInput:"text",name:"title",placeholder:"Title",model:"",required:!0,class:"is-6"},{typeInput:"date",name:"birth_date",placeholder:"Birth Date",model:"",required:!0,class:"is-6"},{typeInput:"textarea",name:"notes",placeholder:"Notes",model:"",required:!0,class:"is-12"}]);return(e,l)=>{const a=g,p=_;return n(),u(p,{buttons:t.buttons,step:t.step,titles:d(s)},{default:i((()=>[o(a,{"inputs-step":r.value},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const F=o("br",null,null,-1),G=o("h1",{class:"title is-5"},"Transaction History",-1),U=o("table",{class:"table is-hoverable is-fullwidth"},[o("thead",null,[o("tr",null,[o("th",{scope:"col"},"Date"),o("th",{scope:"col"},"Type"),o("th",{scope:"col"},"Transaction id #"),o("th",{scope:"col",class:"is-end"}," Amount ")])]),o("tbody",null,[o("tr",null,[o("td",null,"01/01/2021"),o("td",null,"Started Subcription"),o("td",null,"09876543234567"),o("td",null,"$149.99")])])],-1);var B=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;m();const s=a((()=>({title:"Club Payment Method",subtitle:"Edit Club Payment Method"}))),r=l([{typeInput:"text",name:"name_card",placeholder:"Name Card",model:"",class:"is-12",keyUp:(e,t)=>{c.value=!1}},{typeInput:"text",name:"number_card",placeholder:"Number Card",model:"",class:"is-12",maxLength:19,keyUp:(e,t)=>{c.value=!1;var s=e.which?e.which:e.keyCode;return 8==s||(s>=48&&s<=57?void(t.model=t.model.replace(/[^\dA-Z]/g,"").replace(/(.{4})/g,"$1 ").trim()):(t.model=t.model.substr(0,t.model.length-1),!1))}},{typeInput:"text",name:"expiration_date",placeholder:"Expiration Date",model:"",class:"is-6",maxLength:5,keyUp:(e,t)=>{c.value=!1;var s=e.which?e.which:e.keyCode;return 8==s||(s>=48&&s<=57?void(t.model.length<4&&(t.model=t.model.replace(/[^\dA-Z]/g,"").replace(/(.{2})/g,"$1/").trim())):(t.model=t.model.substr(0,t.model.length-1),!1))}},{typeInput:"text",name:"password_card",placeholder:"CVC",model:"",class:"is-6",maxLength:3,keyUp:(e,t)=>{c.value=!0;var s=e.which?e.which:e.keyCode;return 8==s||(s>=48&&s<=57||(t.model=t.model.substr(0,t.model.length-1),!1))}}]),p=e=>r.value.find((t=>t.name==e)),c=l(!1);return(e,l)=>{const a=x,m=g,b=_;return n(),u(b,{buttons:t.buttons,step:t.step,titles:d(s)},{default:i((()=>[o(a,{color:"orange",number:p("number_card").model,name:p("name_card").model,expiry:p("expiration_date").model,cvc:p("password_card").model,flipped:c.value,onFlip:l[1]||(l[1]=e=>c.value=!c.value),class:"mb-6"},null,8,["number","name","expiry","cvc","flipped"]),o(m,{"inputs-step":r.value},null,8,["inputs-step"]),F,G,U])),_:1},8,["buttons","step","titles"])}}});const Q={class:"standard-onboarding"},J={class:"onboarding-wrap"},W={class:"onboarding-wrap-inner"},Z={class:"onboarding-card active"},H=o("h1",{class:"title is-3"},"Starter",-1),O=o("p",{class:"mb-6"},"Get everything you need, when you need it",-1),K=o("div",{class:"d-flex justify-content-center"},[o("h1",{class:"title is-1"},"$189"),o("p",{class:"text-scpecial"},[o("small",null,[b("per "),o("br"),b(" Month")])])],-1),X=o("p",{class:"font-weight-bold mb-6"},"Annual Plan 10% Discount - $170/mo",-1),Y=o("ul",{class:"list"},[o("li",null,[o("p",null,"Staff Management")]),o("li",null,[o("p",null,"Point Management")]),o("li",null,[o("p",null,"Schedule Management")]),o("li",null,[o("p",null,"Members Management")]),o("li",null,[o("p",null,"Reports")])],-1),ee={class:"button-wrap"},te=b(" Active "),se={class:"onboarding-card "},le=o("h1",{class:"title is-3"},"Growing",-1),ae=o("p",{class:"mb-6"},"Get the full package, plus 3 locations",-1),ne=o("div",{class:"d-flex justify-content-center"},[o("h1",{class:"title is-1"},"$370"),o("p",{class:"text-scpecial"},[o("small",null,[b("per "),o("br"),b(" Month")])])],-1),ue=o("p",{class:"font-weight-bold mb-6"},"Annual Plan 10% Discount - $333/mo",-1),ie=o("p",{class:"font-weight-bold mb-6"},"Everything on Starter package + Up to 3 Locations",-1),oe={class:"button-wrap"},re=b(" Subscribe "),pe={class:"onboarding-card "},ce=o("h1",{class:"title is-3"},"Advance",-1),de=o("p",{class:"mb-6"},"For the savviest of fitness businesses",-1),me=o("div",{class:"d-flex justify-content-center"},[o("h1",{class:"title is-1"},"$592"),o("p",{class:"text-scpecial"},[o("small",null,[b("per "),o("br"),b(" Month")])])],-1),be=o("p",{class:"font-weight-bold mb-6"},"Annual Plan 10% Discount - $533/mo",-1),ve=o("p",{class:"font-weight-bold mb-6"},"Everthing on Growing package + up to 8 locations",-1),ye={class:"button-wrap"},fe=b(" Subscribe ");var he=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:[]},step:{type:Number,default:1}},setup(e){const t=e;m();const s=a((()=>({title:"Club Subscription",subtitle:"Edit Club Subscription"})));return(e,l)=>{const a=j,r=_;return n(),u(r,{buttons:t.buttons,step:t.step,titles:d(s)},{default:i((()=>[o("div",Q,[o("div",J,[o("div",W,[o("div",Z,[H,O,K,X,Y,o("div",ee,[o(a,{color:"success",class:"justify-content-center",rounded:"",raised:""},{default:i((()=>[te])),_:1})])]),o("div",se,[le,ae,ne,ue,ie,o("div",oe,[o(a,{color:"success",class:"justify-content-center",rounded:"",raised:"",outlined:""},{default:i((()=>[re])),_:1})])]),o("div",pe,[ce,de,me,be,ve,o("div",ye,[o(a,{color:"success",class:"justify-content-center",rounded:"",outlined:"",raised:""},{default:i((()=>[fe])),_:1})])])])])])])),_:1},8,["buttons","step","titles"])}}});const ge={class:"columns is-multilinea"},_e={class:"d-flex mb-3"},xe={class:"title is-5 mb-1"},je=o("i",{class:"fas fa-map-marker-alt"},null,-1),Ce=b(" View map "),we={class:"d-flex justify-content-end align-items-center"},Ie=b(" Edit ");var Se=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(s){const b=s;m();const v=a((()=>({title:"Club Locations",subtitle:"Edit Club Locations"}))),y=l([{img:"https://picsum.photos/150/153",name:"Location Name",address:"5555 NW 13 St Miami Fl 33145",id:"09876543",url:"https://goo.gl/maps/p3QNRiQ5LbwER47J7",status:!0},{img:"https://picsum.photos/151/153",name:"Location Name",address:"5555 NW 13 St Miami Fl 33145",id:"09876543",url:"https://goo.gl/maps/p3QNRiQ5LbwER47J7",status:!1}]);return(s,l)=>{const a=C,m=e,f=j,h=t,g=_;return n(),u(g,{buttons:b.buttons,titles:d(v),newRoute:{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:i((()=>[o("div",ge,[(n(!0),u(r,null,p(y.value,((e,t)=>(n(),u("div",{key:t,class:"column is-6"},[o(h,null,{default:i((()=>[o(a,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),o("div",_e,[o(m,{squared:"",class:"mr-3",picture:e.img,size:"xl"},null,8,["picture"]),o("div",null,[o("p",null,[o("small",null,c(e.id),1)]),o("h2",xe,c(e.name),1),o("p",null,c(e.address),1),o("a",{target:"_blank",href:e.url},[je,Ce],8,["href"])])]),o("div",we,[o(f,{to:{name:"settings-clubinformation-locations-edit"}},{default:i((()=>[Ie])),_:1})])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const Ne={class:"page-content-inner "},Le={class:"columns is-multiline"},Me={class:"column is-3"},ke={class:"column is-9"};var Ae=s({expose:[],setup(e){I.value="Club Profile",v({title:"Club"}),y((()=>{}));const t=l("clubInformation"),s=e=>{t.value=e.value};return(e,l)=>{const a=k,r=$,p=z,c=B,d=he,m=Se,b=w;return n(),u(b,null,{default:i((()=>[o("div",Ne,[o("div",Le,[o("div",Me,[o(a,{onChangeMenu:s})]),o("div",ke,[f(o(r,null,null,512),[[h,"clubInformation"==t.value]]),f(o(p,null,null,512),[[h,"clubRepresentatives"==t.value]]),f(o(c,null,null,512),[[h,"clubPayment"==t.value]]),f(o(d,null,null,512),[[h,"clubSubscription"==t.value]]),f(o(m,null,null,512),[[h,"clubLocation"==t.value]])])])])])),_:1})}}});export default Ae;
