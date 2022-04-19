import{_ as a}from"./AnimatedLogo.d1752403.js";import{_ as s}from"./V-Control.d0a1f920.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.6be6c11f.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.a2676413.js";import{d as o,r as t,I as i,o as r,h as n,k as u,D as c,j as d,a7 as p,i as m,a2 as h,E as f}from"./vendor.020847a3.js";import{_ as v,a as g}from"./vuero-banking-dark.5abbd6fb.js";import{u as b}from"./useNotyf.ee7b1089.js";import{i as _}from"./darkModeState.1bd2c1f2.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.643ab16e.js";import"./themeColors.4f0e93f3.js";const k={class:"auth-wrapper-inner columns is-gapless"},w={class:"column is-5"},j={class:"hero is-fullheight is-white"},x={class:"hero-heading"},S={class:"dark-mode ml-auto"},V=u("span",null,null,-1),A={class:"auth-logo"},C={class:"hero-body"},E={class:"container"},N={class:"columns"},P={class:"column is-12"},R={class:"auth-content"},I=u("h2",null,"Join Us Now.",-1),L=u("p",null,"Start by creating your account",-1),U=f(" I already have an account "),B={class:"auth-form-wrapper"},D={id:"signin-form",class:"login-form"},F=u("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),J=u("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),K=u("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),M=u("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),W=u("label",{for:"send-promotional",class:"form-switch is-primary"},[u("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),u("i",{"aria-hidden":"true"})],-1),q=u("div",{class:"setting-meta"},[u("label",{for:"send-promotional"},[u("span",null,"Receive promotional offers")])],-1),z=f(" Sign Up "),G=u("div",{class:"column login-column is-7 is-hidden-mobile hero-banner"},[u("div",{class:"hero login-hero is-fullheight is-app-grey"},[u("div",{class:"hero-body"},[u("div",{class:"columns"},[u("div",{class:"column is-10 is-offset-1"},[u("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),u("img",{class:"dark-image has-light-shadow",src:g,alt:""})])])]),u("div",{class:"hero-footer"},[u("p",{class:"has-text-centered"})])])],-1);var H=o({expose:[],setup(o){const f=h(),v=b(),g=t(!1),H=async()=>{g.value||(g.value=!0,y(2e3),v.success("Welcome, Erik Kovalsky"),f.push({name:"sidebar-dashboards"}),g.value=!1)};return i({title:"Auth Signup 2 - Vuero"}),(o,t)=>{const i=a,h=m("RouterLink"),f=s,v=e,g=l;return r(),n("div",k,[u("div",w,[u("div",j,[u("div",x,[u("label",S,[u("input",{type:"checkbox",checked:!c(_),onChange:t[1]||(t[1]=a=>{_.value=!a.target.checked})},null,40,["checked"]),V]),u("div",A,[u(h,{to:{name:"index"}},{default:d((()=>[u(i,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),u("div",C,[u("div",E,[u("div",N,[u("div",P,[u("div",R,[I,L,u(h,{to:{name:"auth"}},{default:d((()=>[U])),_:1})]),u("div",B,[u("form",{onSubmit:p(H,["prevent"])},[u("div",D,[u(v,null,{default:d((()=>[u(f,{icon:"feather:user"},{default:d((()=>[F])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(f,{icon:"feather:mail"},{default:d((()=>[J])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(f,{icon:"feather:lock"},{default:d((()=>[K])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(f,{icon:"feather:lock"},{default:d((()=>[M])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(f,{class:"setting-item"},{default:d((()=>[W,q])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(f,{class:"login"},{default:d((()=>[u(g,{color:"primary",bold:"",fullwidth:"",raised:""},{default:d((()=>[z])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])])])]),G])}}});export default H;
