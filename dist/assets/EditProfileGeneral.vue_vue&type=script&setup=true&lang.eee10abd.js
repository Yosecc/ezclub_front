import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as e}from"./V-IconButton.vue_vue&type=script&setup=true&lang.752beeab.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as s}from"./V-Control.c2f9b0a5.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import{d as u,r as i,a8 as o,b as n,h as c,i as d,l as r,k as f,F as p,j as m,G as v}from"./vendor.3e3390b7.js";import{u as h}from"./useNotyf.161c5bf9.js";import{s as _}from"./sleep.2a252ff4.js";const b={class:"account-box is-form is-footerless"},y={class:"form-head-inner"},g=r("div",{class:"left"},[r("h3",null,"General Info"),r("p",null,"Edit your account's general information")],-1),V={class:"right"},x={class:"buttons"},k=v(" Go Back "),w=v(" Save Changes "),U={class:"form-body"},j={class:"fieldset"},L=r("div",{class:"fieldset-heading"},[r("h4",null,"Profile Picture"),r("p",null,"This is how others will recognize you")],-1),I={class:"fieldset"},N=r("div",{class:"fieldset-heading"},[r("h4",null,"Personal Info"),r("p",null,"Others diserve to know you more")],-1),R={class:"columns is-multiline"},C={class:"column is-6"},G=r("input",{type:"text",class:"input",placeholder:"First Name",autocomplete:"given-name"},null,-1),P={class:"column is-6"},S=r("input",{type:"text",class:"input",placeholder:"Last Name",autocomplete:"family-name"},null,-1),T={class:"column is-12"},z=r("input",{type:"text",class:"input",placeholder:"Job Title",autocomplete:"organization-title"},null,-1),A={class:"column is-12"},B=r("input",{type:"text",class:"input",placeholder:"Location",autocomplete:"country-name"},null,-1),F={class:"column is-12"},Y=r("textarea",{class:"textarea",rows:"4",placeholder:"About / Bio",autocomplete:"off",autocapitalize:"off",spellcheck:"true"},null,-1),E={class:"fieldset"},D=r("div",{class:"fieldset-heading"},[r("h4",null,"Professional Info"),r("p",null,"This can help you to win some opportunities")],-1),J={class:"columns is-multiline"},M={class:"column is-6"},O={class:"column is-6"},q={class:"column is-6"},H={class:"column is-6"},K={class:"column is-12"},Q={class:"fieldset"},W=r("div",{class:"fieldset-heading"},[r("h4",null,"Social Profiles"),r("p",null,"This can help others finding you on social media")],-1),X={class:"columns is-multiline"},Z={class:"column is-6"},$=r("input",{type:"text",class:"input",placeholder:"Facebook URL",inputmode:"url"},null,-1),ll={class:"column is-6"},el=r("input",{type:"text",class:"input",placeholder:"Twitter URL",inputmode:"url"},null,-1),al={class:"column is-6"},sl=r("input",{type:"text",class:"input",placeholder:"Dribbble URL",inputmode:"url"},null,-1),tl={class:"column is-6"},ul=r("input",{type:"text",class:"input",placeholder:"Instagram URL",inputmode:"url"},null,-1),il={class:"column is-6"},ol=r("input",{type:"text",class:"input",placeholder:"Github URL",inputmode:"url"},null,-1),nl={class:"column is-6"},cl=r("input",{type:"text",class:"input",placeholder:"Gitlab URL",inputmode:"url"},null,-1);var dl=u({expose:[],setup(u){const v=i(!1),dl=i(!1),rl=i(""),fl=i(""),pl=i(""),ml=i(""),vl=i(["software","saas","engineering"]),hl=[{value:"software",label:"Software"},{value:"saas",label:"SaaS"},{value:"engineering",label:"Engineering"}],_l=h(),{y:bl}=o(),yl=n((()=>bl.value>30)),gl=async()=>{dl.value=!0,await _(),_l.success("Your changes have been successfully saved!"),dl.value=!1};return(u,i)=>{const o=l,n=e,h=a,_=s,_l=t,bl=m("Multiselect");return c(),d("div",b,[r("div",{class:["form-head stuck-header",[p(yl)&&"is-stuck"]]},[r("div",y,[g,r("div",V,[r("div",x,[r(o,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:f((()=>[k])),_:1}),r(o,{color:"primary",raised:"",loading:dl.value,onClick:gl},{default:f((()=>[w])),_:1},8,["loading"])])])])],2),r("div",U,[r("div",j,[L,r(h,{size:"xl",class:"profile-v-avatar"},{avatar:f((()=>[v.value?(c(),d(n,{key:1,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",onClick:i[2]||(i[2]=l=>v.value=!1)})):(c(),d(n,{key:0,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",onClick:i[1]||(i[1]=l=>v.value=!0)}))])),_:1})]),r("div",I,[N,r("div",R,[r("div",C,[r(_l,null,{default:f((()=>[r(_,{icon:"feather:user"},{default:f((()=>[G])),_:1})])),_:1})]),r("div",P,[r(_l,null,{default:f((()=>[r(_,{icon:"feather:user"},{default:f((()=>[S])),_:1})])),_:1})]),r("div",T,[r(_l,null,{default:f((()=>[r(_,{icon:"feather:briefcase"},{default:f((()=>[z])),_:1})])),_:1})]),r("div",A,[r(_l,null,{default:f((()=>[r(_,{icon:"feather:map-pin"},{default:f((()=>[B])),_:1})])),_:1})]),r("div",F,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[Y])),_:1})])),_:1})])])]),r("div",E,[D,r("div",J,[r("div",M,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[r(bl,{modelValue:rl.value,"onUpdate:modelValue":i[3]||(i[3]=l=>rl.value=l),placeholder:"Experience",options:["0-2 years","2-5 years","5-10 years","10+ years"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",O,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[r(bl,{modelValue:fl.value,"onUpdate:modelValue":i[4]||(i[4]=l=>fl.value=l),placeholder:"Is this your first job?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",q,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[r(bl,{modelValue:pl.value,"onUpdate:modelValue":i[5]||(i[5]=l=>pl.value=l),placeholder:"Are you flexible?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",H,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[r(bl,{modelValue:ml.value,"onUpdate:modelValue":i[6]||(i[6]=l=>ml.value=l),placeholder:"Do you work remotely?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",K,[r(_l,null,{default:f((()=>[r(_,null,{default:f((()=>[r(bl,{modelValue:vl.value,"onUpdate:modelValue":i[7]||(i[7]=l=>vl.value=l),mode:"tags",searchable:!0,"create-tag":!0,options:hl,placeholder:"Add tags"},null,8,["modelValue"])])),_:1})])),_:1})])])]),r("div",Q,[W,r("div",X,[r("div",Z,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-facebook-f"},{default:f((()=>[$])),_:1})])),_:1})]),r("div",ll,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-twitter"},{default:f((()=>[el])),_:1})])),_:1})]),r("div",al,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-dribbble"},{default:f((()=>[sl])),_:1})])),_:1})]),r("div",tl,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-instagram"},{default:f((()=>[ul])),_:1})])),_:1})]),r("div",il,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-github"},{default:f((()=>[ol])),_:1})])),_:1})]),r("div",nl,[r(_l,null,{default:f((()=>[r(_,{icon:"fab fa-gitlab"},{default:f((()=>[cl])),_:1})])),_:1})])])])])])}}});export{dl as _};
