import{_ as e}from"./AnimatedLogo.3baf4ecb.js";import{_ as s}from"./V-Control.9f6b030b.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{d as o,r as t,ab as i,P as r,h as n,i as c,j as u,I as d,l as m,F as h,k as p,a2 as f,G as g}from"./vendor.b96c0b62.js";import{_ as b,a as v}from"./vuero-banking-dark.5abbd6fb.js";import{i as k}from"./darkModeState.1cad08fb.js";import{u as w}from"./useNotyf.fe715992.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.43c61814.js";import"./themeColors.4f0e93f3.js";const _={class:"auth-wrapper-inner columns is-gapless"},j=m("div",{class:"\r\n        column\r\n        login-column\r\n        is-8\r\n        h-hidden-mobile h-hidden-tablet-p\r\n        hero-banner\r\n      "},[m("div",{class:"hero login-hero is-fullheight is-app-grey"},[m("div",{class:"hero-body"},[m("div",{class:"columns"},[m("div",{class:"column is-10 is-offset-1"},[m("img",{class:"light-image has-light-shadow has-light-border",src:b,alt:""}),m("img",{class:"dark-image has-light-shadow",src:v,alt:""})])])]),m("div",{class:"hero-footer"},[m("p",{class:"has-text-centered"})])])],-1),x={class:"column is-4"},P={class:"hero is-fullheight is-white"},S={class:"hero-heading"},F={class:"dark-mode ml-auto"},V=m("span",null,null,-1),I={class:"auth-logo"},L={class:"hero-body"},C={class:"container"},A={class:"columns"},B={class:"column is-12"},M={class:"auth-content"},R=m("h2",null,"Welcome Back.",-1),U=m("p",null,"Please sign in to your account",-1),W=g(" I do not have an account yet "),E={class:"auth-form-wrapper"},G={class:"login-form"},K=m("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),N=m("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),q=m("label",{for:"remember-me",class:"form-switch is-primary"},[m("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),m("i",{"aria-hidden":"true"})],-1),z=m("div",{class:"setting-meta"},[m("label",{for:"remember-me"},[m("span",null,"Remember Me")])],-1),D=g(" Sign In "),H=m("div",{class:"forgot-link has-text-centered"},[m("a",null,"Forgot Password?")],-1);var J=o({expose:[],setup(o){const g=t(!1),b=i(),v=w(),J=async()=>{g.value||(g.value=!0,await y(2e3),v.success("Welcome back, Erik Kovalsky"),b.push({name:"sidebar-dashboards"}),g.value=!1)};return r({title:"Auth Login 2 - Vuero"}),(o,t)=>{const i=e,r=n("RouterLink"),b=s,v=a,w=l;return c(),u("div",_,[d(" Image section (hidden on mobile) "),j,d(" Form section "),m("div",x,[m("div",P,[m("div",S,[m("label",F,[m("input",{type:"checkbox",checked:!h(k),onChange:t[1]||(t[1]=e=>{k.value=!e.target.checked})},null,40,["checked"]),V]),m("div",I,[m(r,{to:{name:"index"}},{default:p((()=>[m(i,{width:"36px",height:"36px"})])),_:1})])]),m("div",L,[m("div",C,[m("div",A,[m("div",B,[m("div",M,[R,U,m(r,{to:{name:"auth-signup-2"}},{default:p((()=>[W])),_:1})]),m("div",E,[d(" Login Form "),m("form",{onSubmit:f(J,["prevent"])},[m("div",G,[d(" Username "),m(v,null,{default:p((()=>[m(b,{icon:"feather:user"},{default:p((()=>[K])),_:1})])),_:1}),d(" Password "),m(v,null,{default:p((()=>[m(b,{icon:"feather:lock"},{default:p((()=>[N])),_:1})])),_:1}),d(" Switch "),m(b,{class:"setting-item"},{default:p((()=>[q,z])),_:1}),d(" Submit "),m(b,{class:"login"},{default:p((()=>[m(w,{loading:g.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:p((()=>[D])),_:1},8,["loading"])])),_:1}),H])],40,["onSubmit"])])])])])])])])])}}});export default J;
