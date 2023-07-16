import{_ as e}from"./V-Control.b8a16a92.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{d as t,r as s,P as n,A as o,h as i,i as u,j as c,l as d,k as m,a2 as r,W as p,_ as f,F as v,H as y,G as h}from"./vendor.84e48f7c.js";import{p as g}from"./sidebarLayoutState.bceb862d.js";import"./V-Placeload.8fe4e440.js";const b={class:"page-content-inner"},_={class:"form-outer"},V={class:"form-body"},x={class:"form-section"},U={class:"form-section-inner has-padding-bottom"},S=d("div",null,"Logo",-1),j=d("h3",{class:"has-text-centered"},"Personal Information",-1),F={class:"columns is-multiline"},L={class:"column is-6"},P=d("label",null,"First Name",-1),C={class:"column is-6"},E=d("label",null,"Last Name",-1),G={class:"column is-12"},I=d("label",null,"Email Address",-1),N={class:"column is-12"},w=d("label",null,"Street",-1),A={class:"column is-12"},B=d("label",null,"Postal Code",-1),k={class:"column is-6"},H=d("label",null,"City",-1),M={class:"column is-12"},W=d("label",null,"State",-1),q={class:"column is-6"},z=d("label",null,"Country",-1),D={class:"multiselect-single-label"},J={class:"select-label-text"},K={class:"select-label-text"},O={class:"column is-12"},Q=d("label",null,"Phone",-1),R={class:"button-wrap,"},T=h(" SIGN UP ");var X=t({expose:[],setup(t){s(""),g.value="Form Layouts 3",n({title:"Form Layouts 3 - Sidebar - Vuero"});const h=o({firstname:"",lastname:"",email:"",street:"",postalcode:"",city:"",state:"",country:"",phone:""}),X=()=>{var e;for(var l in h)""==h[l]&&(null==(e=document.getElementById(l))||e.classList.add("campoempty"))};return(t,s)=>{const n=e,o=l,g=i("Multiselect"),Y=a;return u(),c("div",b,[d("form",{class:"form-layout is-separate",onSubmit:r(X,["prevent"])},[d("div",_,[d("div",V,[d("div",x,[d("div",U,[S,j,d("div",F,[d("div",L,[d(o,null,{default:m((()=>[P,d(n,{icon:"feather:user"},{default:m((()=>[p(d("input",{type:"text",id:"firstname",class:"input","onUpdate:modelValue":s[1]||(s[1]=e=>v(h).firstname=e),placeholder:"",autocomplete:"given-name"},null,512),[[f,v(h).firstname]])])),_:1})])),_:1})]),d("div",C,[d(o,null,{default:m((()=>[E,d(n,{icon:"feather:user"},{default:m((()=>[p(d("input",{type:"text",id:"lastname",class:"input","onUpdate:modelValue":s[2]||(s[2]=e=>v(h).lastname=e),placeholder:"",autocomplete:"family-name"},null,512),[[f,v(h).lastname]])])),_:1})])),_:1})]),d("div",G,[d(o,null,{default:m((()=>[I,d(n,{icon:"feather:mail"},{default:m((()=>[p(d("input",{type:"email",id:"email",class:"input","onUpdate:modelValue":s[3]||(s[3]=e=>v(h).email=e),placeholder:"",autocomplete:"email",inputmode:"email"},null,512),[[f,v(h).email]])])),_:1})])),_:1})]),d("div",N,[d(o,null,{default:m((()=>[w,d(n,{icon:"feather:map-pin"},{default:m((()=>[p(d("input",{type:"text",id:"street",class:"input","onUpdate:modelValue":s[4]||(s[4]=e=>v(h).street=e),placeholder:"",autocomplete:"street-address"},null,512),[[f,v(h).street]])])),_:1})])),_:1})]),d("div",A,[d(o,null,{default:m((()=>[B,d(n,{icon:"feather:map-pin"},{default:m((()=>[p(d("input",{type:"text",id:"postalcode",class:"input","onUpdate:modelValue":s[5]||(s[5]=e=>v(h).postalcode=e),placeholder:"",autocomplete:"street-address"},null,512),[[f,v(h).postalcode]])])),_:1})])),_:1})]),d("div",k,[d(o,null,{default:m((()=>[H,d(n,{icon:"feather:map-pin"},{default:m((()=>[p(d("input",{type:"text",id:"city",class:"input","onUpdate:modelValue":s[6]||(s[6]=e=>v(h).city=e),placeholder:"",autocomplete:"address-level2"},null,512),[[f,v(h).city]])])),_:1})])),_:1})]),d("div",M,[d(o,null,{default:m((()=>[W,d(n,{icon:"feather:map-pin"},{default:m((()=>[p(d("input",{type:"text",id:"state",class:"input","onUpdate:modelValue":s[7]||(s[7]=e=>v(h).state=e),placeholder:"",autocomplete:"street-address"},null,512),[[f,v(h).state]])])),_:1})])),_:1})]),d("div",q,[d(o,{class:"is-image-select"},{default:m((()=>[z,d(n,null,{default:m((()=>[d(g,{modelValue:v(h).country,"onUpdate:modelValue":s[8]||(s[8]=e=>v(h).country=e),placeholder:"Select a country",id:"country",autocomplete:"country",label:"name",options:[{value:"english",name:"English",icon:"/images/icons/flags/united-states-of-america.svg"},{value:"french",name:"French",icon:"/images/icons/flags/france.svg"},{value:"german",name:"German",icon:"/images/icons/flags/germany.svg"},{value:"spanish",name:"Spanish",icon:"/images/icons/flags/spain.svg"}]},{singlelabel:m((({value:e})=>[d("div",D,[d("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),d("span",J,y(e.name),1)])])),option:m((({option:e})=>[d("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),d("span",K,y(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),d("div",O,[d(o,null,{default:m((()=>[Q,d(n,{icon:"feather:phone"},{default:m((()=>[p(d("input",{type:"tel",id:"phone",class:"input","onUpdate:modelValue":s[9]||(s[9]=e=>v(h).phone=e),placeholder:"",autocomplete:"tel",inputmode:"tel"},null,512),[[f,v(h).phone]])])),_:1})])),_:1}),d("div",R,[d(Y,{style:{"justify-content":"center"},color:"primary",bold:"",type:"submit",raised:"",fullwidth:""},{default:m((()=>[T])),_:1})])])])])])])])],40,["onSubmit"])])}}});export default X;