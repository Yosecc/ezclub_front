import{_ as e}from"./AnimatedLogo.afd186e6.js";import{_ as a}from"./V-Control.5136ae9f.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.5cc17432.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import{d as s,a4 as o,r,O as n,h as i,o as u,i as d,G as p,k as c,j as m,D as f,a9 as h,E as v}from"./vendor.512b7acb.js";import{u as _}from"./useNotyf.9ff35448.js";import{i as g}from"./darkModeState.8ae54720.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.982e0955.js";import"./themeColors.4f0e93f3.js";const b={class:"auth-wrapper-inner is-single"},k={class:"auth-nav"},w=c("div",{class:"left"},null,-1),j={class:"center"},x={class:"right"},S={class:"dark-mode ml-auto"},F=c("span",null,null,-1),I={class:"single-form-wrap"},V={class:"inner-wrap"},C={class:"auth-head"},A=c("h2",null,"Join Us Now.",-1),E=c("p",null,"Start by creating your account",-1),N=v(" I already have an account "),P={class:"form-card"},R={class:"login-form"},L=c("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),U=c("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),B=c("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),D=c("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),G=c("label",{for:"send-promotional",class:"form-switch is-primary"},[c("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),c("i",{"aria-hidden":"true"})],-1),J=c("div",{class:"setting-meta"},[c("label",{for:"send-promotional"},[c("span",null,"Receive promotional offers")])],-1),K=v(" Sign Up ");var M=s({expose:[],setup(s){const v=o(),M=_(),O=r(!1),T=async()=>{O.value||(O.value=!0,y(2e3),M.success("Welcome, Erik Kovalsky"),v.push({name:"sidebar-dashboards"}),O.value=!1)};return n({title:"Auth Signup 3 - Vuero"}),(s,o)=>{const r=e,n=i("RouterLink"),v=a,_=t,y=l;return u(),d("div",b,[p("Fake navigation"),c("div",k,[w,c("div",j,[c(n,{to:{name:"index"},class:"header-item"},{default:m((()=>[c(r,{width:"38px",height:"38px"})])),_:1})]),c("div",x,[c("label",S,[c("input",{type:"checkbox",checked:!f(g),onChange:o[1]||(o[1]=e=>{g.value=!e.target.checked})},null,40,["checked"]),F])])]),p("Single Centered Form"),c("div",I,[c("div",V,[p("Form Title"),c("div",C,[A,E,c(n,{to:{name:"auth"}},{default:m((()=>[N])),_:1})]),p("Form"),c("div",P,[c("form",{onSubmit:h(T,["prevent"])},[c("div",R,[p(" Input "),c(_,null,{default:m((()=>[c(v,{icon:"feather:user"},{default:m((()=>[L])),_:1})])),_:1}),p(" Input "),c(_,null,{default:m((()=>[c(v,{icon:"feather:mail"},{default:m((()=>[U])),_:1})])),_:1}),p(" Input "),c(_,null,{default:m((()=>[c(v,{icon:"feather:lock"},{default:m((()=>[B])),_:1})])),_:1}),p(" Input "),c(_,null,{default:m((()=>[c(v,{icon:"feather:lock"},{default:m((()=>[D])),_:1})])),_:1}),c(_,null,{default:m((()=>[c(v,{class:"setting-item"},{default:m((()=>[G,J])),_:1})])),_:1}),p(" Submit "),c(_,null,{default:m((()=>[c(v,{class:"login"},{default:m((()=>[c(y,{color:"primary",bold:"",fullwidth:"",raised:""},{default:m((()=>[K])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])}}});export default M;
