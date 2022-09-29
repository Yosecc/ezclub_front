import{_ as a}from"./AnimatedLogo.030703f2.js";import{_ as s}from"./V-Control.b1909844.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{d as t,aa as o,r as i,P as n,h as r,i as u,j as c,I as d,l as p,F as m,k as h,a2 as f,G as g}from"./vendor.435948fe.js";import{_ as v,a as b}from"./vuero-banking-dark.5abbd6fb.js";import{u as _}from"./useNotyf.0717b6da.js";import{i as y}from"./darkModeState.010a41bc.js";import{s as k}from"./sleep.2a252ff4.js";import"./V-Placeload.9c5aed6e.js";import"./themeColors.4f0e93f3.js";const w={class:"auth-wrapper-inner columns is-gapless"},j={class:"column is-5"},x={class:"hero is-fullheight is-white"},I={class:"hero-heading"},S={class:"dark-mode ml-auto"},V=p("span",null,null,-1),F={class:"auth-logo"},P={class:"hero-body"},A={class:"container"},C={class:"columns"},L={class:"column is-12"},N={class:"auth-content"},R=p("h2",null,"Join Us Now.",-1),E=p("p",null,"Start by creating your account",-1),U=g(" I already have an account "),B={class:"auth-form-wrapper"},G={id:"signin-form",class:"login-form"},J=p("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),K=p("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),M=p("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),W=p("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),q=p("label",{for:"send-promotional",class:"form-switch is-primary"},[p("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),p("i",{"aria-hidden":"true"})],-1),z=p("div",{class:"setting-meta"},[p("label",{for:"send-promotional"},[p("span",null,"Receive promotional offers")])],-1),D=g(" Sign Up "),H=p("div",{class:"column login-column is-7 is-hidden-mobile hero-banner"},[p("div",{class:"hero login-hero is-fullheight is-app-grey"},[p("div",{class:"hero-body"},[p("div",{class:"columns"},[p("div",{class:"column is-10 is-offset-1"},[p("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),p("img",{class:"dark-image has-light-shadow",src:b,alt:""})])])]),p("div",{class:"hero-footer"},[p("p",{class:"has-text-centered"})])])],-1);var O=t({expose:[],setup(t){const g=o(),v=_(),b=i(!1),O=async()=>{b.value||(b.value=!0,k(2e3),v.success("Welcome, Erik Kovalsky"),g.push({name:"sidebar-dashboards"}),b.value=!1)};return n({title:"Auth Signup 2 - Vuero"}),(t,o)=>{const i=a,n=r("RouterLink"),g=s,v=e,b=l;return u(),c("div",w,[d(" Form section "),p("div",j,[p("div",x,[p("div",I,[p("label",S,[p("input",{type:"checkbox",checked:!m(y),onChange:o[1]||(o[1]=a=>{y.value=!a.target.checked})},null,40,["checked"]),V]),p("div",F,[p(n,{to:{name:"index"}},{default:h((()=>[p(i,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),p("div",P,[p("div",A,[p("div",C,[p("div",L,[p("div",N,[R,E,p(n,{to:{name:"auth"}},{default:h((()=>[U])),_:1})]),p("div",B,[d(" Login Form "),p("form",{onSubmit:f(O,["prevent"])},[p("div",G,[d(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:user"},{default:h((()=>[J])),_:1})])),_:1}),d(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:mail"},{default:h((()=>[K])),_:1})])),_:1}),d(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:lock"},{default:h((()=>[M])),_:1})])),_:1}),d(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:lock"},{default:h((()=>[W])),_:1})])),_:1}),p(v,null,{default:h((()=>[p(g,{class:"setting-item"},{default:h((()=>[q,z])),_:1})])),_:1}),d(" Submit "),p(v,null,{default:h((()=>[p(g,{class:"login"},{default:h((()=>[p(b,{color:"primary",bold:"",fullwidth:"",raised:""},{default:h((()=>[D])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])])])]),d(" Image section (hidden on mobile) "),H])}}});export default O;
