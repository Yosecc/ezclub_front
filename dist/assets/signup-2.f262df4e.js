import{_ as a}from"./AnimatedLogo.2166ccdf.js";import{_ as s}from"./V-Control.06dbdf31.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.2ea96b7e.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.ab2fa679.js";import{d as t,r as o,O as i,h as r,i as n,l as u,F as c,k as d,a2 as p,j as m,ab as f,G as h}from"./vendor.f6529162.js";import{_ as v,a as g}from"./vuero-banking-dark.5abbd6fb.js";import{u as b}from"./useNotyf.fb6e4964.js";import{i as _}from"./darkModeState.2811143e.js";import{s as y}from"./sleep.2a252ff4.js";import"./V-Placeload.fcff0d17.js";import"./themeColors.4f0e93f3.js";const k={class:"auth-wrapper-inner columns is-gapless"},w={class:"column is-5"},j={class:"hero is-fullheight is-white"},x={class:"hero-heading"},S={class:"dark-mode ml-auto"},V=u("span",null,null,-1),A={class:"auth-logo"},C={class:"hero-body"},N={class:"container"},P={class:"columns"},R={class:"column is-12"},E={class:"auth-content"},F=u("h2",null,"Join Us Now.",-1),L=u("p",null,"Start by creating your account",-1),U=h(" I already have an account "),B={class:"auth-form-wrapper"},G={id:"signin-form",class:"login-form"},I=u("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),J=u("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),K=u("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),M=u("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),O=u("label",{for:"send-promotional",class:"form-switch is-primary"},[u("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),u("i",{"aria-hidden":"true"})],-1),W=u("div",{class:"setting-meta"},[u("label",{for:"send-promotional"},[u("span",null,"Receive promotional offers")])],-1),q=h(" Sign Up "),z=u("div",{class:"column login-column is-7 is-hidden-mobile hero-banner"},[u("div",{class:"hero login-hero is-fullheight is-app-grey"},[u("div",{class:"hero-body"},[u("div",{class:"columns"},[u("div",{class:"column is-10 is-offset-1"},[u("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),u("img",{class:"dark-image has-light-shadow",src:g,alt:""})])])]),u("div",{class:"hero-footer"},[u("p",{class:"has-text-centered"})])])],-1);var D=t({expose:[],setup(t){const h=f(),v=b(),g=o(!1),D=async()=>{g.value||(g.value=!0,y(2e3),v.success("Welcome, Erik Kovalsky"),h.push({name:"sidebar-dashboards"}),g.value=!1)};return i({title:"Auth Signup 2 - Vuero"}),(t,o)=>{const i=a,f=m("RouterLink"),h=s,v=e,g=l;return r(),n("div",k,[u("div",w,[u("div",j,[u("div",x,[u("label",S,[u("input",{type:"checkbox",checked:!c(_),onChange:o[1]||(o[1]=a=>{_.value=!a.target.checked})},null,40,["checked"]),V]),u("div",A,[u(f,{to:{name:"index"}},{default:d((()=>[u(i,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),u("div",C,[u("div",N,[u("div",P,[u("div",R,[u("div",E,[F,L,u(f,{to:{name:"auth"}},{default:d((()=>[U])),_:1})]),u("div",B,[u("form",{onSubmit:p(D,["prevent"])},[u("div",G,[u(v,null,{default:d((()=>[u(h,{icon:"feather:user"},{default:d((()=>[I])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:mail"},{default:d((()=>[J])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[K])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{icon:"feather:lock"},{default:d((()=>[M])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"setting-item"},{default:d((()=>[O,W])),_:1})])),_:1}),u(v,null,{default:d((()=>[u(h,{class:"login"},{default:d((()=>[u(g,{color:"primary",bold:"",fullwidth:"",raised:""},{default:d((()=>[q])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])])])]),z])}}});export default D;