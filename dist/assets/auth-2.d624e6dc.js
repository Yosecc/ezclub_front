import{_ as e}from"./AnimatedLogo.a42abb6a.js";import{_ as s}from"./V-Control.237cc4d1.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{d as t,r as o,L as i,o as r,h as n,k as c,D as d,j as u,a9 as m,i as h,a4 as p,E as f}from"./vendor.c636f33b.js";import{_ as g,a as v}from"./vuero-banking-dark.5abbd6fb.js";import{i as b}from"./darkModeState.77580bb1.js";import{u as k}from"./useNotyf.99679076.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.c195e33d.js";import"./themeColors.4f0e93f3.js";const _={class:"auth-wrapper-inner columns is-gapless"},w=c("div",{class:"\n        column\n        login-column\n        is-8\n        h-hidden-mobile h-hidden-tablet-p\n        hero-banner\n      "},[c("div",{class:"hero login-hero is-fullheight is-app-grey"},[c("div",{class:"hero-body"},[c("div",{class:"columns"},[c("div",{class:"column is-10 is-offset-1"},[c("img",{class:"light-image has-light-shadow has-light-border",src:g,alt:""}),c("img",{class:"dark-image has-light-shadow",src:v,alt:""})])])]),c("div",{class:"hero-footer"},[c("p",{class:"has-text-centered"})])])],-1),j={class:"column is-4"},x={class:"hero is-fullheight is-white"},V={class:"hero-heading"},L={class:"dark-mode ml-auto"},P=c("span",null,null,-1),S={class:"auth-logo"},C={class:"hero-body"},A={class:"container"},B={class:"columns"},E={class:"column is-12"},F={class:"auth-content"},I=c("h2",null,"Welcome Back.",-1),M=c("p",null,"Please sign in to your account",-1),R=f(" I do not have an account yet "),W={class:"auth-form-wrapper"},D={class:"login-form"},K=c("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),N=c("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),U=c("label",{for:"remember-me",class:"form-switch is-primary"},[c("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),c("i",{"aria-hidden":"true"})],-1),q=c("div",{class:"setting-meta"},[c("label",{for:"remember-me"},[c("span",null,"Remember Me")])],-1),z=f(" Sign In "),G=c("div",{class:"forgot-link has-text-centered"},[c("a",null,"Forgot Password?")],-1);var H=t({expose:[],setup(t){const f=o(!1),g=p(),v=k(),H=async()=>{f.value||(f.value=!0,await y(2e3),v.success("Welcome back, Erik Kovalsky"),g.push({name:"sidebar-dashboards"}),f.value=!1)};return i({title:"Auth Login 2 - Vuero"}),(t,o)=>{const i=e,p=h("RouterLink"),g=s,v=a,k=l;return r(),n("div",_,[w,c("div",j,[c("div",x,[c("div",V,[c("label",L,[c("input",{type:"checkbox",checked:!d(b),onChange:o[1]||(o[1]=e=>{b.value=!e.target.checked})},null,40,["checked"]),P]),c("div",S,[c(p,{to:{name:"index"}},{default:u((()=>[c(i,{width:"36px",height:"36px"})])),_:1})])]),c("div",C,[c("div",A,[c("div",B,[c("div",E,[c("div",F,[I,M,c(p,{to:{name:"auth-signup-2"}},{default:u((()=>[R])),_:1})]),c("div",W,[c("form",{onSubmit:m(H,["prevent"])},[c("div",D,[c(v,null,{default:u((()=>[c(g,{icon:"feather:user"},{default:u((()=>[K])),_:1})])),_:1}),c(v,null,{default:u((()=>[c(g,{icon:"feather:lock"},{default:u((()=>[N])),_:1})])),_:1}),c(g,{class:"setting-item"},{default:u((()=>[U,q])),_:1}),c(g,{class:"login"},{default:u((()=>[c(k,{loading:f.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:u((()=>[z])),_:1},8,["loading"])])),_:1}),G])],40,["onSubmit"])])])])])])])])])}}});export default H;
