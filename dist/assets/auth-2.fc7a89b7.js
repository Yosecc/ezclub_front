import{_ as e}from"./AnimatedLogo.a868a349.js";import{_ as s}from"./V-Control.d3cb8db2.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.4d1547e6.js";import{_ as o}from"./V-Button.vue_vue&type=script&setup=true&lang.86e7bf66.js";import{d as l,r as t,a4 as i,O as r,h as n,o as c,i as d,G as u,k as m,D as h,j as p,a9 as f,E as g}from"./vendor.0a671356.js";import{_ as v,a as b}from"./vuero-banking-dark.5abbd6fb.js";import{i as k}from"./darkModeState.add1dde1.js";import{u as w}from"./useNotyf.0cc3842f.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.e8ccb55e.js";import"./themeColors.4f0e93f3.js";const _={class:"auth-wrapper-inner columns is-gapless"},j=m("div",{class:"\n        column\n        login-column\n        is-8\n        h-hidden-mobile h-hidden-tablet-p\n        hero-banner\n      "},[m("div",{class:"hero login-hero is-fullheight is-app-grey"},[m("div",{class:"hero-body"},[m("div",{class:"columns"},[m("div",{class:"column is-10 is-offset-1"},[m("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),m("img",{class:"dark-image has-light-shadow",src:b,alt:""})])])]),m("div",{class:"hero-footer"},[m("p",{class:"has-text-centered"})])])],-1),x={class:"column is-4"},S={class:"hero is-fullheight is-white"},P={class:"hero-heading"},V={class:"dark-mode ml-auto"},F=m("span",null,null,-1),L={class:"auth-logo"},C={class:"hero-body"},I={class:"container"},A={class:"columns"},B={class:"column is-12"},E={class:"auth-content"},M=m("h2",null,"Welcome Back.",-1),R=m("p",null,"Please sign in to your account",-1),U=g(" I do not have an account yet "),W={class:"auth-form-wrapper"},D={class:"login-form"},G=m("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),K=m("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),N=m("label",{for:"remember-me",class:"form-switch is-primary"},[m("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),m("i",{"aria-hidden":"true"})],-1),O=m("div",{class:"setting-meta"},[m("label",{for:"remember-me"},[m("span",null,"Remember Me")])],-1),q=g(" Sign In "),z=m("div",{class:"forgot-link has-text-centered"},[m("a",null,"Forgot Password?")],-1);var H=l({expose:[],setup(l){const g=t(!1),v=i(),b=w(),H=async()=>{g.value||(g.value=!0,await y(2e3),b.success("Welcome back, Erik Kovalsky"),v.push({name:"sidebar-dashboards"}),g.value=!1)};return r({title:"Auth Login 2 - Vuero"}),(l,t)=>{const i=e,r=n("RouterLink"),v=s,b=a,w=o;return c(),d("div",_,[u(" Image section (hidden on mobile) "),j,u(" Form section "),m("div",x,[m("div",S,[m("div",P,[m("label",V,[m("input",{type:"checkbox",checked:!h(k),onChange:t[1]||(t[1]=e=>{k.value=!e.target.checked})},null,40,["checked"]),F]),m("div",L,[m(r,{to:{name:"index"}},{default:p((()=>[m(i,{width:"36px",height:"36px"})])),_:1})])]),m("div",C,[m("div",I,[m("div",A,[m("div",B,[m("div",E,[M,R,m(r,{to:{name:"auth-signup-2"}},{default:p((()=>[U])),_:1})]),m("div",W,[u(" Login Form "),m("form",{onSubmit:f(H,["prevent"])},[m("div",D,[u(" Username "),m(b,null,{default:p((()=>[m(v,{icon:"feather:user"},{default:p((()=>[G])),_:1})])),_:1}),u(" Password "),m(b,null,{default:p((()=>[m(v,{icon:"feather:lock"},{default:p((()=>[K])),_:1})])),_:1}),u(" Switch "),m(v,{class:"setting-item"},{default:p((()=>[N,O])),_:1}),u(" Submit "),m(v,{class:"login"},{default:p((()=>[m(w,{loading:g.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:p((()=>[q])),_:1},8,["loading"])])),_:1}),z])],40,["onSubmit"])])])])])])])])])}}});export default H;
