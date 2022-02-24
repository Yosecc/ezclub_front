import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import{_ as e}from"./V-IconButton.vue_vue&type=script&setup=true&lang.970e4355.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import{_ as s}from"./V-Control.70f7b974.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import{d as u,r as i,E as o,b as n,o as c,h as d,k as r,j as p,D as f,i as m,G as v}from"./vendor.3b9a49d2.js";import{u as h}from"./useNotyf.f1431f99.js";import{s as _}from"./sleep.2a252ff4.js";const b={class:"account-box is-form is-footerless"},y={class:"form-head-inner"},g=r("div",{class:"left"},[r("h3",null,"General Info"),r("p",null,"Edit your account's general information")],-1),V={class:"right"},x={class:"buttons"},k=v(" Go Back "),w=v(" Save Changes "),U={class:"form-body"},j={class:"fieldset"},L=r("div",{class:"fieldset-heading"},[r("h4",null,"Profile Picture"),r("p",null,"This is how others will recognize you")],-1),I={class:"fieldset"},N=r("div",{class:"fieldset-heading"},[r("h4",null,"Personal Info"),r("p",null,"Others diserve to know you more")],-1),R={class:"columns is-multiline"},C={class:"column is-6"},G=r("input",{type:"text",class:"input",placeholder:"First Name",autocomplete:"given-name"},null,-1),P={class:"column is-6"},S=r("input",{type:"text",class:"input",placeholder:"Last Name",autocomplete:"family-name"},null,-1),T={class:"column is-12"},z=r("input",{type:"text",class:"input",placeholder:"Job Title",autocomplete:"organization-title"},null,-1),A={class:"column is-12"},B=r("input",{type:"text",class:"input",placeholder:"Location",autocomplete:"country-name"},null,-1),E={class:"column is-12"},Y=r("textarea",{class:"textarea",rows:"4",placeholder:"About / Bio",autocomplete:"off",autocapitalize:"off",spellcheck:"true"},null,-1),D={class:"fieldset"},F=r("div",{class:"fieldset-heading"},[r("h4",null,"Professional Info"),r("p",null,"This can help you to win some opportunities")],-1),J={class:"columns is-multiline"},M={class:"column is-6"},O={class:"column is-6"},q={class:"column is-6"},H={class:"column is-6"},K={class:"column is-12"},Q={class:"fieldset"},W=r("div",{class:"fieldset-heading"},[r("h4",null,"Social Profiles"),r("p",null,"This can help others finding you on social media")],-1),X={class:"columns is-multiline"},Z={class:"column is-6"},$=r("input",{type:"text",class:"input",placeholder:"Facebook URL",inputmode:"url"},null,-1),ll={class:"column is-6"},el=r("input",{type:"text",class:"input",placeholder:"Twitter URL",inputmode:"url"},null,-1),al={class:"column is-6"},sl=r("input",{type:"text",class:"input",placeholder:"Dribbble URL",inputmode:"url"},null,-1),tl={class:"column is-6"},ul=r("input",{type:"text",class:"input",placeholder:"Instagram URL",inputmode:"url"},null,-1),il={class:"column is-6"},ol=r("input",{type:"text",class:"input",placeholder:"Github URL",inputmode:"url"},null,-1),nl={class:"column is-6"},cl=r("input",{type:"text",class:"input",placeholder:"Gitlab URL",inputmode:"url"},null,-1);var dl=u({expose:[],setup(u){const v=i(!1),dl=i(!1),rl=i(""),pl=i(""),fl=i(""),ml=i(""),vl=i(["software","saas","engineering"]),hl=[{value:"software",label:"Software"},{value:"saas",label:"SaaS"},{value:"engineering",label:"Engineering"}],_l=h(),{y:bl}=o(),yl=n((()=>bl.value>30)),gl=async()=>{dl.value=!0,await _(),_l.success("Your changes have been successfully saved!"),dl.value=!1};return(u,i)=>{const o=l,n=e,h=a,_=s,_l=t,bl=m("Multiselect");return c(),d("div",b,[r("div",{class:["form-head stuck-header",[f(yl)&&"is-stuck"]]},[r("div",y,[g,r("div",V,[r("div",x,[r(o,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:p((()=>[k])),_:1}),r(o,{color:"primary",raised:"",loading:dl.value,onClick:gl},{default:p((()=>[w])),_:1},8,["loading"])])])])],2),r("div",U,[r("div",j,[L,r(h,{size:"xl",class:"profile-v-avatar"},{avatar:p((()=>[v.value?(c(),d(n,{key:1,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",onClick:i[2]||(i[2]=l=>v.value=!1)})):(c(),d(n,{key:0,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",onClick:i[1]||(i[1]=l=>v.value=!0)}))])),_:1})]),r("div",I,[N,r("div",R,[r("div",C,[r(_l,null,{default:p((()=>[r(_,{icon:"feather:user"},{default:p((()=>[G])),_:1})])),_:1})]),r("div",P,[r(_l,null,{default:p((()=>[r(_,{icon:"feather:user"},{default:p((()=>[S])),_:1})])),_:1})]),r("div",T,[r(_l,null,{default:p((()=>[r(_,{icon:"feather:briefcase"},{default:p((()=>[z])),_:1})])),_:1})]),r("div",A,[r(_l,null,{default:p((()=>[r(_,{icon:"feather:map-pin"},{default:p((()=>[B])),_:1})])),_:1})]),r("div",E,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[Y])),_:1})])),_:1})])])]),r("div",D,[F,r("div",J,[r("div",M,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[r(bl,{modelValue:rl.value,"onUpdate:modelValue":i[3]||(i[3]=l=>rl.value=l),placeholder:"Experience",options:["0-2 years","2-5 years","5-10 years","10+ years"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",O,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[r(bl,{modelValue:pl.value,"onUpdate:modelValue":i[4]||(i[4]=l=>pl.value=l),placeholder:"Is this your first job?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",q,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[r(bl,{modelValue:fl.value,"onUpdate:modelValue":i[5]||(i[5]=l=>fl.value=l),placeholder:"Are you flexible?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",H,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[r(bl,{modelValue:ml.value,"onUpdate:modelValue":i[6]||(i[6]=l=>ml.value=l),placeholder:"Do you work remotely?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",K,[r(_l,null,{default:p((()=>[r(_,null,{default:p((()=>[r(bl,{modelValue:vl.value,"onUpdate:modelValue":i[7]||(i[7]=l=>vl.value=l),mode:"tags",searchable:!0,"create-tag":!0,options:hl,placeholder:"Add tags"},null,8,["modelValue"])])),_:1})])),_:1})])])]),r("div",Q,[W,r("div",X,[r("div",Z,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-facebook-f"},{default:p((()=>[$])),_:1})])),_:1})]),r("div",ll,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-twitter"},{default:p((()=>[el])),_:1})])),_:1})]),r("div",al,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-dribbble"},{default:p((()=>[sl])),_:1})])),_:1})]),r("div",tl,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-instagram"},{default:p((()=>[ul])),_:1})])),_:1})]),r("div",il,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-github"},{default:p((()=>[ol])),_:1})])),_:1})]),r("div",nl,[r(_l,null,{default:p((()=>[r(_,{icon:"fab fa-gitlab"},{default:p((()=>[cl])),_:1})])),_:1})])])])])])}}});export{dl as _};
