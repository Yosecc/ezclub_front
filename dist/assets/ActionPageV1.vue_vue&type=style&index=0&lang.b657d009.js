import{_ as e}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{d as t,r,h as o,i,l,k as n,G as p,ad as c,j as u,F as d}from"./vendor.4454b83d.js";import{s as v}from"./sleep.2a252ff4.js";import{u as m}from"./useNotyf.6f12e924.js";import{p as f}from"./userPopovers.f4b9fc60.js";const h={class:"action-page-wrapper action-page-v1"},b={class:"wrapper-inner"},g={class:"action-box"},y={class:"box-content"},k=l("h3",{class:"dark-inverted"},[p(" Jason G. has invited you to the "),l("span",{class:"is-dark-primary"},"Banking Solution Website"),p(" project. ")],-1),_=l("div",{class:"sender-message is-dark-card-bordered is-dark-bg-4"},[l("h4",{class:"dark-inverted"},"Message from Jason"),l("p",null," Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ")],-1),j={class:"people-wrap"},w={class:"people"},x=l("div",{class:"people-text"},[l("p",null,"And 5 others are already members of this project")],-1),A={class:"buttons"},B=p(" Decline "),C=p(" Accept ");var I=t({expose:[],setup(t){const p=m(),I=c(),S=r(!1),W=async()=>{S.value=!0,p.success("Invitation for Banking Solution Website accepted"),await v(),I.push({name:"sidebar-dashboards-banking-1"}),S.value=!1};return(t,r)=>{const p=e,c=u("tippy"),v=s,m=a;return o(),i("div",h,[l("div",b,[l("div",g,[l("div",y,[k,_,l("div",j,[l("div",w,[l(c,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:n((()=>[l(p,{user:d(f).user21},null,8,["user"])])),_:1}),l(c,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:n((()=>[l(p,{user:d(f).user120},null,8,["user"])])),default:n((()=>[l(v,{size:"small",color:"h-purple",initials:"SC"})])),_:1}),l(c,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:n((()=>[l(p,{user:d(f).user39},null,8,["user"])])),_:1})]),x]),l("div",A,[l(m,{"dark-outlined":""},{default:n((()=>[B])),_:1}),l(m,{color:"primary",loading:S.value,raised:"",onClick:W},{default:n((()=>[C])),_:1},8,["loading"])])])])])])}}});export{I as _};
