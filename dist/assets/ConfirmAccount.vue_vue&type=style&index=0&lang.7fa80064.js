import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.b455daa2.js";import{_ as s}from"./V-Loader.vue_vue&type=script&setup=true&lang.fbbd0b75.js";import{d as e,a6 as t,r as o,o as r,i as c,k as i,j as l,F as u}from"./vendor.01c5c571.js";import{s as n}from"./sleep.2a252ff4.js";import{u as d}from"./useNotyf.2a70446e.js";const p={class:"confirm-account-wrapper"},v={class:"wrapper-inner"},m={class:"action-box"},f={class:"box-content"},g=i("img",{class:"light-image",src:"/assets/launch.8f1e6384.svg",alt:""},null,-1),b=i("img",{class:"dark-image",src:"/assets/launch-dark.d9c8568e.svg",alt:""},null,-1),h=i("h3",{class:"dark-inverted"},"Please confirm your account",-1),y=i("p",null," Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ",-1),k={class:"buttons"},j=u(" Confirm Account ");var _=e({expose:[],setup(e){const u=d(),_=t(),w=o(!1),x=async()=>{w.value=!0,u.success("Your account is confirmed Erik !"),await n(),_.push({name:"sidebar-dashboards"}),await n(),w.value=!1};return(e,t)=>{const o=a,u=s;return r(),c("div",p,[i("div",v,[i("div",m,[i(u,{active:w.value},{default:l((()=>[i("div",f,[g,b,h,y,i("div",k,[i(o,{color:"primary",raised:"",onClick:x},{default:l((()=>[j])),_:1})])])])),_:1},8,["active"])])])])}}});export{_};
