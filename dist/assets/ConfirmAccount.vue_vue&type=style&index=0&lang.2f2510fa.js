import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.5f9c764e.js";import{_ as s}from"./V-Loader.vue_vue&type=script&setup=true&lang.2fb8b24e.js";import{d as e,r as t,o,h as r,k as c,j as i,D as l,H as u}from"./vendor.4ba27c77.js";import{s as n}from"./sleep.2a252ff4.js";import{u as d}from"./useNotyf.f1431f99.js";const p={class:"confirm-account-wrapper"},v={class:"wrapper-inner"},f={class:"action-box"},m={class:"box-content"},g=c("img",{class:"light-image",src:"/assets/launch.8f1e6384.svg",alt:""},null,-1),h=c("img",{class:"dark-image",src:"/assets/launch-dark.d9c8568e.svg",alt:""},null,-1),y=c("h3",{class:"dark-inverted"},"Please confirm your account",-1),b=c("p",null," Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ",-1),k={class:"buttons"},j=u(" Confirm Account ");var _=e({expose:[],setup(e){const u=d(),_=l(),w=t(!1),x=async()=>{w.value=!0,u.success("Your account is confirmed Erik !"),await n(),_.push({name:"sidebar-dashboards"}),await n(),w.value=!1};return(e,t)=>{const l=a,u=s;return o(),r("div",p,[c("div",v,[c("div",f,[c(u,{active:w.value},{default:i((()=>[c("div",m,[g,h,y,b,c("div",k,[c(l,{color:"primary",raised:"",onClick:x},{default:i((()=>[j])),_:1})])])])),_:1},8,["active"])])])])}}});export{_};
