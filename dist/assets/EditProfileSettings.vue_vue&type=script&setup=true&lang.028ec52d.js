import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{_ as e}from"./V-Control.46cc2837.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import{_ as s}from"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.27a5c777.js";import{d as u,aj as o,r as t,b as i,o as n,h as d,k as r,j as c,D as p,J as m,a8 as f,E as v}from"./vendor.d0c8bc4f.js";import{u as h}from"./useNotyf.6664a034.js";import{s as _}from"./sleep.2a252ff4.js";const y={class:"account-box is-form is-footerless"},b={class:"form-head-inner"},w=r("div",{class:"left"},[r("h3",null,"Settings"),r("p",null,"Edit your account prefs and settings")],-1),g={class:"right"},V={class:"buttons"},k=v(" Go Back "),j=v(" Save Changes "),C={class:"fieldset"},E=r("div",{class:"fieldset-heading"},[r("h4",null,"Change Password"),r("p",null,"For an improved account security")],-1),N={class:"columns is-multiline"},P={class:"column is-12"},S=r("input",{type:"password",class:"input",placeholder:"Old Password",autocomplete:"current-password"},null,-1),U={class:"column is-12"},x=r("input",{type:"password",class:"input",placeholder:"New Password",autocomplete:"new-password"},null,-1),B={class:"column is-12"},D=r("input",{type:"password",class:"input",placeholder:"Repeat New Password",autocomplete:"new-password"},null,-1),F={class:"fieldset"},A=r("div",{class:"fieldset-heading"},[r("h4",null,"2 Factor Auth"),r("p",null,"Enable or disable 2 factor auth")],-1),G={class:"columns is-multiline"},J={class:"column is-12"},M={key:0,class:"column is-12"},O=r("input",{type:"text",class:"input",placeholder:"Phone Number",autocomplete:"tel",inputmode:"tel"},null,-1),R={class:"fieldset"},Y=r("div",{class:"fieldset-heading"},[r("h4",null,"Notifications"),r("p",null,"Configure how you receive notifications")],-1),q={class:"columns is-multiline"},z={class:"column is-12"},H={class:"fieldset"},I=r("div",{class:"fieldset-heading"},[r("h4",null,"Marketing"),r("p",null,"Configure how you receive promotions")],-1),K={class:"columns is-multiline"},L={class:"column is-12"};var Q=u({expose:[],setup(u){const v=h(),{y:Q}=o(),T=t(!1),W=t(!0),X=t(!1),Z=t(!1),$=t(!1),ll=t(!1),el=i((()=>Q.value>30)),al=async()=>{T.value=!0,await _(),v.success("Your changes have been successfully saved!"),T.value=!1};return(u,o)=>{const t=l,i=e,v=a,h=s;return n(),d("div",y,[r("div",{class:["form-head stuck-header",[p(el)&&"is-stuck"]]},[r("div",b,[w,r("div",g,[r("div",V,[r(t,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:c((()=>[k])),_:1}),r(t,{color:"primary",raised:"",loading:T.value,onClick:al},{default:c((()=>[j])),_:1},8,["loading"])])])])],2),r("form",{class:"form-body",onSubmit:f(al,["prevent"])},[r("div",C,[E,r("div",N,[r("div",P,[r(v,null,{default:c((()=>[r(i,{icon:"feather:unlock"},{default:c((()=>[S])),_:1})])),_:1})]),r("div",U,[r(v,null,{default:c((()=>[r(i,{icon:"feather:lock"},{default:c((()=>[x])),_:1})])),_:1})]),r("div",B,[r(v,null,{default:c((()=>[r(i,{icon:"feather:lock"},{default:c((()=>[D])),_:1})])),_:1})])])]),r("div",F,[A,r("div",G,[r("div",J,[r(v,null,{default:c((()=>[r(i,null,{default:c((()=>[r(h,{modelValue:W.value,"onUpdate:modelValue":o[1]||(o[1]=l=>W.value=l),label:"Enable / disable 2 factor",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})]),W.value?(n(),d("div",M,[r(v,null,{default:c((()=>[r(i,{icon:"feather:smartphone"},{default:c((()=>[O])),_:1})])),_:1})])):m("",!0)])]),r("div",R,[Y,r("div",q,[r("div",z,[r(v,null,{default:c((()=>[r(i,null,{default:c((()=>[r(h,{modelValue:X.value,"onUpdate:modelValue":o[2]||(o[2]=l=>X.value=l),label:"Disable all notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),r(v,null,{default:c((()=>[r(i,null,{default:c((()=>[r(h,{modelValue:Z.value,"onUpdate:modelValue":o[3]||(o[3]=l=>Z.value=l),label:"Disable low priority notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])]),r("div",H,[I,r("div",K,[r("div",L,[r(v,null,{default:c((()=>[r(i,null,{default:c((()=>[r(h,{modelValue:$.value,"onUpdate:modelValue":o[4]||(o[4]=l=>$.value=l),label:"Enable marketing emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),r(v,null,{default:c((()=>[r(i,null,{default:c((()=>[r(h,{modelValue:ll.value,"onUpdate:modelValue":o[5]||(o[5]=l=>ll.value=l),label:"Enable partners emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])])],40,["onSubmit"])])}}});export{Q as _};
