import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.56502a24.js";import{_ as e}from"./V-Control.cd7a7d2f.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.68f25869.js";import{_ as s}from"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.e48c04e6.js";import{d as u,ak as o,r as i,b as t,o as n,i as d,k as r,j as c,E as p,H as m,a9 as f,F as v}from"./vendor.31bd1321.js";import{u as h}from"./useNotyf.5de06661.js";import{s as _}from"./sleep.2a252ff4.js";const y={class:"account-box is-form is-footerless"},b={class:"form-head-inner"},w=r("div",{class:"left"},[r("h3",null,"Settings"),r("p",null,"Edit your account prefs and settings")],-1),g={class:"right"},V={class:"buttons"},F=v(" Go Back "),k=v(" Save Changes "),j={class:"fieldset"},C=r("div",{class:"fieldset-heading"},[r("h4",null,"Change Password"),r("p",null,"For an improved account security")],-1),E={class:"columns is-multiline"},N={class:"column is-12"},P=r("input",{type:"password",class:"input",placeholder:"Old Password",autocomplete:"current-password"},null,-1),S={class:"column is-12"},U=r("input",{type:"password",class:"input",placeholder:"New Password",autocomplete:"new-password"},null,-1),x={class:"column is-12"},B=r("input",{type:"password",class:"input",placeholder:"Repeat New Password",autocomplete:"new-password"},null,-1),D={class:"fieldset"},A=r("div",{class:"fieldset-heading"},[r("h4",null,"2 Factor Auth"),r("p",null,"Enable or disable 2 factor auth")],-1),G={class:"columns is-multiline"},H={class:"column is-12"},M={key:0,class:"column is-12"},O=r("input",{type:"text",class:"input",placeholder:"Phone Number",autocomplete:"tel",inputmode:"tel"},null,-1),R={class:"fieldset"},Y=r("div",{class:"fieldset-heading"},[r("h4",null,"Notifications"),r("p",null,"Configure how you receive notifications")],-1),q={class:"columns is-multiline"},z={class:"column is-12"},I={class:"fieldset"},J=r("div",{class:"fieldset-heading"},[r("h4",null,"Marketing"),r("p",null,"Configure how you receive promotions")],-1),K={class:"columns is-multiline"},L={class:"column is-12"};var Q=u({expose:[],setup(u){const v=h(),{y:Q}=o(),T=i(!1),W=i(!0),X=i(!1),Z=i(!1),$=i(!1),ll=i(!1),el=t((()=>Q.value>30)),al=async()=>{T.value=!0,await _(),v.success("Your changes have been successfully saved!"),T.value=!1};return(u,o)=>{const i=l,t=e,v=a,h=s;return n(),d("div",y,[r("div",{class:["form-head stuck-header",[p(el)&&"is-stuck"]]},[r("div",b,[w,r("div",g,[r("div",V,[r(i,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:c((()=>[F])),_:1}),r(i,{color:"primary",raised:"",loading:T.value,onClick:al},{default:c((()=>[k])),_:1},8,["loading"])])])])],2),r("form",{class:"form-body",onSubmit:f(al,["prevent"])},[m("Fieldset"),r("div",j,[C,r("div",E,[m("Field"),r("div",N,[r(v,null,{default:c((()=>[r(t,{icon:"feather:unlock"},{default:c((()=>[P])),_:1})])),_:1})]),m("Field"),r("div",S,[r(v,null,{default:c((()=>[r(t,{icon:"feather:lock"},{default:c((()=>[U])),_:1})])),_:1})]),m("Field"),r("div",x,[r(v,null,{default:c((()=>[r(t,{icon:"feather:lock"},{default:c((()=>[B])),_:1})])),_:1})])])]),m("Fieldset"),r("div",D,[A,r("div",G,[m("Field"),r("div",H,[r(v,null,{default:c((()=>[r(t,null,{default:c((()=>[r(h,{modelValue:W.value,"onUpdate:modelValue":o[1]||(o[1]=l=>W.value=l),label:"Enable / disable 2 factor",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})]),m("Field"),W.value?(n(),d("div",M,[r(v,null,{default:c((()=>[r(t,{icon:"feather:smartphone"},{default:c((()=>[O])),_:1})])),_:1})])):m("v-if",!0)])]),m("Fieldset"),r("div",R,[Y,r("div",q,[m("Field"),r("div",z,[r(v,null,{default:c((()=>[r(t,null,{default:c((()=>[r(h,{modelValue:X.value,"onUpdate:modelValue":o[2]||(o[2]=l=>X.value=l),label:"Disable all notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),r(v,null,{default:c((()=>[r(t,null,{default:c((()=>[r(h,{modelValue:Z.value,"onUpdate:modelValue":o[3]||(o[3]=l=>Z.value=l),label:"Disable low priority notifications",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])]),m("Fieldset"),r("div",I,[J,r("div",K,[m("Field"),r("div",L,[r(v,null,{default:c((()=>[r(t,null,{default:c((()=>[r(h,{modelValue:$.value,"onUpdate:modelValue":o[4]||(o[4]=l=>$.value=l),label:"Enable marketing emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),r(v,null,{default:c((()=>[r(t,null,{default:c((()=>[r(h,{modelValue:ll.value,"onUpdate:modelValue":o[5]||(o[5]=l=>ll.value=l),label:"Enable partners emails",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})])])])],40,["onSubmit"])])}}});export{Q as _};
