import{_ as a}from"./AnimatedLogo.a868a349.js";import{_ as e}from"./V-Control.d3cb8db2.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.4d1547e6.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.86e7bf66.js";import{d as o,a4 as t,r as i,O as n,h as r,o as u,i as d,G as c,k as p,D as m,j as h,a9 as f,E as g}from"./vendor.0a671356.js";import{_ as v,a as b}from"./vuero-banking-dark.5abbd6fb.js";import{u as _}from"./useNotyf.0cc3842f.js";import{i as y}from"./darkModeState.add1dde1.js";import{s as k}from"./sleep.2a252ff4.js";import"./V-Placeload.e8ccb55e.js";import"./themeColors.4f0e93f3.js";const w={class:"auth-wrapper-inner columns is-gapless"},j={class:"column is-5"},x={class:"hero is-fullheight is-white"},S={class:"hero-heading"},I={class:"dark-mode ml-auto"},V=p("span",null,null,-1),A={class:"auth-logo"},C={class:"hero-body"},E={class:"container"},F={class:"columns"},L={class:"column is-12"},N={class:"auth-content"},P=p("h2",null,"Join Us Now.",-1),R=p("p",null,"Start by creating your account",-1),U=g(" I already have an account "),B={class:"auth-form-wrapper"},D={id:"signin-form",class:"login-form"},G=p("input",{class:"input",type:"text",placeholder:"Name",autocomplete:"name"},null,-1),J=p("input",{class:"input",type:"text",placeholder:"Email Address",autocomplete:"email"},null,-1),K=p("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"new-password"},null,-1),M=p("input",{class:"input",type:"password",placeholder:"Repeat Password"},null,-1),O=p("label",{for:"send-promotional",class:"form-switch is-primary"},[p("input",{id:"send-promotional",type:"checkbox",class:"is-switch"}),p("i",{"aria-hidden":"true"})],-1),W=p("div",{class:"setting-meta"},[p("label",{for:"send-promotional"},[p("span",null,"Receive promotional offers")])],-1),q=g(" Sign Up "),z=p("div",{class:"column login-column is-7 is-hidden-mobile hero-banner"},[p("div",{class:"hero login-hero is-fullheight is-app-grey"},[p("div",{class:"hero-body"},[p("div",{class:"columns"},[p("div",{class:"column is-10 is-offset-1"},[p("img",{class:"light-image has-light-shadow has-light-border",src:v,alt:""}),p("img",{class:"dark-image has-light-shadow",src:b,alt:""})])])]),p("div",{class:"hero-footer"},[p("p",{class:"has-text-centered"})])])],-1);var H=o({expose:[],setup(o){const g=t(),v=_(),b=i(!1),H=async()=>{b.value||(b.value=!0,k(2e3),v.success("Welcome, Erik Kovalsky"),g.push({name:"sidebar-dashboards"}),b.value=!1)};return n({title:"Auth Signup 2 - Vuero"}),(o,t)=>{const i=a,n=r("RouterLink"),g=e,v=s,b=l;return u(),d("div",w,[c(" Form section "),p("div",j,[p("div",x,[p("div",S,[p("label",I,[p("input",{type:"checkbox",checked:!m(y),onChange:t[1]||(t[1]=a=>{y.value=!a.target.checked})},null,40,["checked"]),V]),p("div",A,[p(n,{to:{name:"index"}},{default:h((()=>[p(i,{class:"top-logo",width:"36px",height:"36px"})])),_:1})])]),p("div",C,[p("div",E,[p("div",F,[p("div",L,[p("div",N,[P,R,p(n,{to:{name:"auth"}},{default:h((()=>[U])),_:1})]),p("div",B,[c(" Login Form "),p("form",{onSubmit:f(H,["prevent"])},[p("div",D,[c(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:user"},{default:h((()=>[G])),_:1})])),_:1}),c(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:mail"},{default:h((()=>[J])),_:1})])),_:1}),c(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:lock"},{default:h((()=>[K])),_:1})])),_:1}),c(" Input "),p(v,null,{default:h((()=>[p(g,{icon:"feather:lock"},{default:h((()=>[M])),_:1})])),_:1}),p(v,null,{default:h((()=>[p(g,{class:"setting-item"},{default:h((()=>[O,W])),_:1})])),_:1}),c(" Submit "),p(v,null,{default:h((()=>[p(g,{class:"login"},{default:h((()=>[p(b,{color:"primary",bold:"",fullwidth:"",raised:""},{default:h((()=>[q])),_:1})])),_:1})])),_:1})])],40,["onSubmit"])])])])])])])]),c(" Image section (hidden on mobile) "),z])}}});export default H;
