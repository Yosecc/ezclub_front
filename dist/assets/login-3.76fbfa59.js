import{_ as e}from"./AnimatedLogo.1cc94f36.js";import{_ as a}from"./V-Control.37224b15.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.4e36ac54.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import{d as l,r,a9 as o,P as i,h as n,o as u,i as c,H as d,k as m,j as p,E as f,a1 as h,F as v}from"./vendor.073d5183.js";import{i as g}from"./darkModeState.1faec688.js";import{u as b}from"./useNotyf.25a90747.js";import{s as k}from"./sleep.2a252ff4.js";import"./V-Placeload.4695e536.js";import"./themeColors.4f0e93f3.js";const _={class:"auth-wrapper-inner is-single"},w={class:"auth-nav"},y=m("div",{class:"left"},null,-1),j={class:"center"},x={class:"right"},F={class:"dark-mode ml-auto"},S=m("span",null,null,-1),P={class:"single-form-wrap"},V={class:"inner-wrap"},C={class:"auth-head"},L=m("h2",null,"Welcome Back.",-1),A=m("p",null,"Please sign in to your account",-1),B=v(" I do not have an account yet "),E={class:"form-card"},I={class:"login-form"},M=m("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),R=m("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),W=m("label",{for:"remember-me",class:"form-switch is-primary"},[m("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),m("i",{"aria-hidden":"true"})],-1),H=m("div",{class:"setting-meta"},[m("label",{for:"remember-me"},[m("span",null,"Remember Me")])],-1),K=v(" Sign In "),N=m("div",{class:"forgot-link has-text-centered"},[m("a",null,"Forgot Password?")],-1);var T=l({expose:[],setup(l){const v=r(!1),T=o(),U=b(),q=async()=>{v.value||(v.value=!0,await k(2e3),U.success("Welcome back, Erik Kovalsky"),T.push({name:"sidebar-dashboards"}),v.value=!1)};return i({title:"Auth Login 3 - Vuero"}),(l,r)=>{const o=e,i=n("RouterLink"),b=a,k=s,T=t;return u(),c("div",_,[d("Fake navigation"),m("div",w,[y,m("div",j,[m(i,{to:{name:"index"},class:"header-item"},{default:p((()=>[m(o,{width:"38px",height:"38px"})])),_:1})]),m("div",x,[m("label",F,[m("input",{type:"checkbox",checked:!f(g),onChange:r[1]||(r[1]=e=>{g.value=!e.target.checked})},null,40,["checked"]),S])])]),d("Single Centered Form"),m("div",P,[m("div",V,[d("Form Title"),m("div",C,[L,A,m(i,{to:{name:"auth-signup-3"}},{default:p((()=>[B])),_:1})]),d("Form"),m("div",E,[m("form",{onSubmit:h(q,["prevent"])},[m("div",I,[m(k,null,{default:p((()=>[m(b,{icon:"feather:user"},{default:p((()=>[M])),_:1})])),_:1}),m(k,null,{default:p((()=>[m(b,{icon:"feather:lock"},{default:p((()=>[R])),_:1})])),_:1}),d(" Switch "),m(b,{class:"setting-item"},{default:p((()=>[W,H])),_:1}),d(" Submit "),m(b,{class:"login"},{default:p((()=>[m(T,{loading:v.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:p((()=>[K])),_:1},8,["loading"])])),_:1})])],40,["onSubmit"])]),N])])])}}});export default T;
