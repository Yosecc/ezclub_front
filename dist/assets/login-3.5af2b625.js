import{_ as e}from"./AnimatedLogo.2dcbd823.js";import{_ as a}from"./V-Control.b8a16a92.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{d as l,r,ad as o,P as i,h as n,i as u,j as c,I as d,l as m,k as p,F as f,a2 as h,G as v}from"./vendor.84e48f7c.js";import{i as g}from"./darkModeState.0452d175.js";import{u as b}from"./useNotyf.c0628090.js";import{s as k}from"./sleep.2a252ff4.js";import"./V-Placeload.8fe4e440.js";import"./themeColors.4f0e93f3.js";const _={class:"auth-wrapper-inner is-single"},w={class:"auth-nav"},y=m("div",{class:"left"},null,-1),j={class:"center"},x={class:"right"},F={class:"dark-mode ml-auto"},S=m("span",null,null,-1),P={class:"single-form-wrap"},V={class:"inner-wrap"},C={class:"auth-head"},I=m("h2",null,"Welcome Back.",-1),L=m("p",null,"Please sign in to your account",-1),A=v(" I do not have an account yet "),B={class:"form-card"},M={class:"login-form"},R=m("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),W=m("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),E=m("label",{for:"remember-me",class:"form-switch is-primary"},[m("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),m("i",{"aria-hidden":"true"})],-1),G=m("div",{class:"setting-meta"},[m("label",{for:"remember-me"},[m("span",null,"Remember Me")])],-1),K=v(" Sign In "),N=m("div",{class:"forgot-link has-text-centered"},[m("a",null,"Forgot Password?")],-1);var T=l({expose:[],setup(l){const v=r(!1),T=o(),U=b(),q=async()=>{v.value||(v.value=!0,await k(2e3),U.success("Welcome back, Erik Kovalsky"),T.push({name:"sidebar-dashboards"}),v.value=!1)};return i({title:"Auth Login 3 - Vuero"}),(l,r)=>{const o=e,i=n("RouterLink"),b=a,k=s,T=t;return u(),c("div",_,[d("Fake navigation"),m("div",w,[y,m("div",j,[m(i,{to:{name:"index"},class:"header-item"},{default:p((()=>[m(o,{width:"38px",height:"38px"})])),_:1})]),m("div",x,[m("label",F,[m("input",{type:"checkbox",checked:!f(g),onChange:r[1]||(r[1]=e=>{g.value=!e.target.checked})},null,40,["checked"]),S])])]),d("Single Centered Form"),m("div",P,[m("div",V,[d("Form Title"),m("div",C,[I,L,m(i,{to:{name:"auth-signup-3"}},{default:p((()=>[A])),_:1})]),d("Form"),m("div",B,[m("form",{onSubmit:h(q,["prevent"])},[m("div",M,[m(k,null,{default:p((()=>[m(b,{icon:"feather:user"},{default:p((()=>[R])),_:1})])),_:1}),m(k,null,{default:p((()=>[m(b,{icon:"feather:lock"},{default:p((()=>[W])),_:1})])),_:1}),d(" Switch "),m(b,{class:"setting-item"},{default:p((()=>[E,G])),_:1}),d(" Submit "),m(b,{class:"login"},{default:p((()=>[m(T,{loading:v.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:p((()=>[K])),_:1},8,["loading"])])),_:1})])],40,["onSubmit"])]),N])])])}}});export default T;
