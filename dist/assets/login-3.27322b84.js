import{_ as e}from"./AnimatedLogo.d0948e72.js";import{_ as a}from"./V-Control.9d085c3f.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.511e2268.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import{d as l,r,I as o,o as i,h as n,k as u,j as c,D as d,a7 as m,i as p,a2 as f,E as h}from"./vendor.6f1ebb59.js";import{i as v}from"./darkModeState.f6b1b75a.js";import{u as b}from"./useNotyf.8db9fc0f.js";import{s as g}from"./sleep.2a252ff4.js";import"./V-Placeload.98b104a8.js";import"./themeColors.4f0e93f3.js";const k={class:"auth-wrapper-inner is-single"},_={class:"auth-nav"},y=u("div",{class:"left"},null,-1),w={class:"center"},j={class:"right"},x={class:"dark-mode ml-auto"},V=u("span",null,null,-1),P={class:"single-form-wrap"},S={class:"inner-wrap"},C={class:"auth-head"},I=u("h2",null,"Welcome Back.",-1),L=u("p",null,"Please sign in to your account",-1),A=h(" I do not have an account yet "),B={class:"form-card"},E={class:"login-form"},F=u("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),M=u("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),R=u("label",{for:"remember-me",class:"form-switch is-primary"},[u("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),u("i",{"aria-hidden":"true"})],-1),W=u("div",{class:"setting-meta"},[u("label",{for:"remember-me"},[u("span",null,"Remember Me")])],-1),D=h(" Sign In "),K=u("div",{class:"forgot-link has-text-centered"},[u("a",null,"Forgot Password?")],-1);var N=l({expose:[],setup(l){const h=r(!1),N=f(),U=b(),q=async()=>{h.value||(h.value=!0,await g(2e3),U.success("Welcome back, Erik Kovalsky"),N.push({name:"sidebar-dashboards"}),h.value=!1)};return o({title:"Auth Login 3 - Vuero"}),(l,r)=>{const o=e,f=p("RouterLink"),b=a,g=s,N=t;return i(),n("div",k,[u("div",_,[y,u("div",w,[u(f,{to:{name:"index"},class:"header-item"},{default:c((()=>[u(o,{width:"38px",height:"38px"})])),_:1})]),u("div",j,[u("label",x,[u("input",{type:"checkbox",checked:!d(v),onChange:r[1]||(r[1]=e=>{v.value=!e.target.checked})},null,40,["checked"]),V])])]),u("div",P,[u("div",S,[u("div",C,[I,L,u(f,{to:{name:"auth-signup-3"}},{default:c((()=>[A])),_:1})]),u("div",B,[u("form",{onSubmit:m(q,["prevent"])},[u("div",E,[u(g,null,{default:c((()=>[u(b,{icon:"feather:user"},{default:c((()=>[F])),_:1})])),_:1}),u(g,null,{default:c((()=>[u(b,{icon:"feather:lock"},{default:c((()=>[M])),_:1})])),_:1}),u(b,{class:"setting-item"},{default:c((()=>[R,W])),_:1}),u(b,{class:"login"},{default:c((()=>[u(N,{loading:h.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:c((()=>[D])),_:1},8,["loading"])])),_:1})])],40,["onSubmit"])]),K])])])}}});export default N;
