import{_ as e}from"./AnimatedLogo.275b93b5.js";import{_ as a}from"./V-Control.2ec22d08.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.b6f1277a.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.69608fa2.js";import{d as t,r as o,a4 as r,o as i,h as n,k as u,j as d,z as c,Y as p,i as f,a0 as m,E as h}from"./vendor.55fe8080.js";import{u as v}from"./useNotyf.f1431f99.js";import{i as _}from"./darkModeState.11b3c70a.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.6b460306.js";import"./notyf.es.f84e4201.js";import"./themeColors.4f0e93f3.js";const b={class:"auth-wrapper-inner is-single"},g={class:"auth-nav"},w=u("div",{class:"left"},null,-1),k={class:"center"},j={class:"right"},x={class:"dark-mode ml-auto"},S=u("span",null,null,-1),V={class:"single-form-wrap"},A={class:"inner-wrap"},C={class:"auth-head"},E=u("h2",null,"Join Us Now.",-1),N=u("p",null,"Start by creating your account",-1),P=h(" I already have an account "),R={class:"form-card"},L={class:"login-form"},U=u("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),z=u("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),B=u("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),F=u("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),I=u("label",{for:"send-promotional",class:"form-switch is-primary"},[u("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),u("i",{"aria-hidden":"true"})],-1),J=u("div",{class:"setting-meta"},[u("label",{for:"send-promotional"},[u("span",null,"Receive promotional offers")])],-1),K=h(" Sign Up ");var M=t({expose:[],setup(t){const h=m(),M=v(),W=o(!1),Y=async()=>{W.value||(W.value=!0,y(2e3),M.success("Welcome, Erik Kovalsky"),h.push({name:"sidebar-dashboards"}),W.value=!1)};return r({title:"Auth Signup 3 - Vuero"}),(t,o)=>{const r=e,m=f("RouterLink"),h=a,v=s,y=l;return i(),n("div",b,[u("div",g,[w,u("div",k,[u(m,{to:{name:"index"},class:"header-item"},{default:d((()=>[u(r,{width:"38px",height:"38px"})])),_:1})]),u("div",j,[u("label",x,[u("input",{type:"checkbox",checked:!c(_),onChange:o[1]||(o[1]=e=>{_.value=!e.target.checked})},null,40,["checked"]),S])])]),u("div",V,[u("div",A,[u("div",C,[E,N,u(m,{to:{name:"auth"}},{default:d((()=>[P])),_:1})]),u("div",R,[u("form",{onSubmit:p(Y,["prevent"])},[u("div",L,[u(v,null,{default:d((()=>[u(h,{icon:"feather:user"},{default:d((()=>[U])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:mail"},{default:d((()=>[z])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[B])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[F])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"setting-item"},{default:d((()=>[I,J])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"login"},{default:d((()=>[u(y,{color:"primary",bold:"",fullwidth:"",raised:""},{default:d((()=>[K])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])}}});export default M;
