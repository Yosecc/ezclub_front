import{_ as e}from"./AnimatedLogo.04f6a731.js";import{_ as a}from"./V-Control.596e5582.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.8c96819a.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.f17c03d3.js";import{d as t,r as o,z as r,o as i,h as n,k as u,j as d,B as c,a4 as p,i as f,D as m,G as h}from"./vendor.1ed36195.js";import{u as v}from"./useNotyf.f1431f99.js";import{i as _}from"./darkModeState.fe7b7276.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.900d95a2.js";import"./notyf.es.f84e4201.js";import"./themeColors.4f0e93f3.js";const g={class:"auth-wrapper-inner is-single"},w={class:"auth-nav"},k=u("div",{class:"left"},null,-1),b={class:"center"},j={class:"right"},x={class:"dark-mode ml-auto"},S=u("span",null,null,-1),V={class:"single-form-wrap"},A={class:"inner-wrap"},C={class:"auth-head"},N=u("h2",null,"Join Us Now.",-1),P=u("p",null,"Start by creating your account",-1),R=h(" I already have an account "),B={class:"form-card"},E={class:"login-form"},L=u("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),U=u("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),z=u("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),D=u("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),F=u("label",{for:"send-promotional",class:"form-switch is-primary"},[u("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),u("i",{"aria-hidden":"true"})],-1),G=u("div",{class:"setting-meta"},[u("label",{for:"send-promotional"},[u("span",null,"Receive promotional offers")])],-1),I=h(" Sign Up ");var J=t({expose:[],setup(t){const h=m(),J=v(),K=o(!1),M=async()=>{K.value||(K.value=!0,y(2e3),J.success("Welcome, Erik Kovalsky"),h.push({name:"sidebar-dashboards"}),K.value=!1)};return r({title:"Auth Signup 3 - Vuero"}),(t,o)=>{const r=e,m=f("RouterLink"),h=a,v=s,y=l;return i(),n("div",g,[u("div",w,[k,u("div",b,[u(m,{to:{name:"index"},class:"header-item"},{default:d((()=>[u(r,{width:"38px",height:"38px"})])),_:1})]),u("div",j,[u("label",x,[u("input",{type:"checkbox",checked:!c(_),onChange:o[1]||(o[1]=e=>{_.value=!e.target.checked})},null,40,["checked"]),S])])]),u("div",V,[u("div",A,[u("div",C,[N,P,u(m,{to:{name:"auth"}},{default:d((()=>[R])),_:1})]),u("div",B,[u("form",{onSubmit:p(M,["prevent"])},[u("div",E,[u(v,null,{default:d((()=>[u(h,{icon:"feather:user"},{default:d((()=>[L])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:mail"},{default:d((()=>[U])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[z])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[D])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"setting-item"},{default:d((()=>[F,G])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"login"},{default:d((()=>[u(y,{color:"primary",bold:"",fullwidth:"",raised:""},{default:d((()=>[I])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])}}});export default J;