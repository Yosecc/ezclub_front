import{_ as a}from"./AnimatedLogo.d5741cf2.js";import{_ as s}from"./V-Control.1394aaca.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.8dbce097.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.75bfbbbd.js";import{d as o,r as t,y as i,o as r,h as n,k as d,D as c,j as u,a4 as p,i as m,B as h,G as f}from"./vendor.9b3dcac4.js";import{_ as v,a as g}from"./vuero-banking-dark.5abbd6fb.js";import{u as b}from"./useNotyf.0f0ddd5d.js";import{i as _}from"./darkModeState.88cf3bf6.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.c1ea57dd.js";import"./themeColors.4f0e93f3.js";const k={class:"auth-wrapper-inner columns is-gapless"},w={class:"column is-5"},j={class:"hero is-fullheight is-white"},x={class:"hero-heading"},S={class:"dark-mode ml-auto"},V=d("span",null,null,-1),A={class:"auth-logo"},C={class:"hero-body"},N={class:"container"},P={class:"columns"},R={class:"column is-12"},B={class:"auth-content"},E=d("h2",null,"Join Us Now.",-1),L=d("p",null,"Start by creating your account",-1),U=f(" I already have an account "),D={class:"auth-form-wrapper"},F={id:"signin-form",class:"login-form"},G=d("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),I=d("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),J=d("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),K=d("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),M=d("label",{for:"send-promotional",class:"form-switch is-primary"},[d("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),d("i",{"aria-hidden":"true"})],-1),W=d("div",{class:"setting-meta"},[d("label",{for:"send-promotional"},[d("span",null,"Receive promotional offers")])],-1),q=f(" Sign Up "),z=d("div",{class:"column login-column is-7 is-hidden-mobile hero-banner"},[d("div",{class:"hero login-hero is-fullheight is-app-grey"},[d("div",{class:"hero-body"},[d("div",{class:"columns"},[d("div",{class:"column is-10 is-offset-1"},[d("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),d("img",{class:"dark-image has-light-shadow",src:g,alt:""})])])]),d("div",{class:"hero-footer"},[d("p",{class:"has-text-centered"})])])],-1);var H=o({expose:[],setup(o){const f=h(),v=b(),g=t(!1),H=async()=>{g.value||(g.value=!0,y(2e3),v.success("Welcome, Erik Kovalsky"),f.push({name:"sidebar-dashboards"}),g.value=!1)};return i({title:"Auth Signup 2 - Vuero"}),(o,t)=>{const i=a,h=m("RouterLink"),f=s,v=e,g=l;return r(),n("div",k,[d("div",w,[d("div",j,[d("div",x,[d("label",S,[d("input",{type:"checkbox",checked:!c(_),onChange:t[1]||(t[1]=a=>{_.value=!a.target.checked})},null,40,["checked"]),V]),d("div",A,[d(h,{to:{name:"index"}},{default:u((()=>[d(i,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),d("div",C,[d("div",N,[d("div",P,[d("div",R,[d("div",B,[E,L,d(h,{to:{name:"auth"}},{default:u((()=>[U])),_:1})]),d("div",D,[d("form",{onSubmit:p(H,["prevent"])},[d("div",F,[d(v,null,{default:u((()=>[d(f,{icon:"feather:user"},{default:u((()=>[G])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(f,{icon:"feather:mail"},{default:u((()=>[I])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(f,{icon:"feather:lock"},{default:u((()=>[J])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(f,{icon:"feather:lock"},{default:u((()=>[K])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(f,{class:"setting-item"},{default:u((()=>[M,W])),_:1})])),_:1}),d(v,null,{default:u((()=>[d(f,{class:"login"},{default:u((()=>[d(g,{color:"primary",bold:"",fullwidth:"",raised:""},{default:u((()=>[q])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])])])]),z])}}});export default H;
