import{_ as e}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.81990723.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.3d19f6e0.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.1dd5b110.js";import{d as t,r,o,h as i,k as n,j as l,G as p,D as u,i as c,B as d}from"./vendor.494d8f4f.js";import{s as v}from"./sleep.2a252ff4.js";import{u as m}from"./useNotyf.f1431f99.js";import{p as f}from"./userPopovers.d692847d.js";const h={class:"action-page-wrapper action-page-v1"},b={class:"wrapper-inner"},g={class:"action-box"},y={class:"box-content"},k=n("h3",{class:"dark-inverted"},[p(" Jason G. has invited you to the "),n("span",{class:"is-dark-primary"},"Banking Solution Website"),p(" project. ")],-1),_=n("div",{class:"sender-message is-dark-card-bordered is-dark-bg-4"},[n("h4",{class:"dark-inverted"},"Message from Jason"),n("p",null," Hey Erik, It would be really cool if you could give us a hand on this project. There are a lot of tasks popping out every day and I feel the team is getting a bit overwhelmed. We'd love to have you board. ")],-1),j={class:"people-wrap"},w={class:"people"},x=n("div",{class:"people-text"},[n("p",null,"And 5 others are already members of this project")],-1),B={class:"buttons"},A=p(" Decline "),C=p(" Accept ");var I=t({expose:[],setup(t){const p=m(),I=u(),S=r(!1),W=async()=>{S.value=!0,p.success("Invitation for Banking Solution Website accepted"),await v(),I.push({name:"sidebar-dashboards-banking-1"}),S.value=!1};return(t,r)=>{const p=e,u=c("tippy"),v=s,m=a;return o(),i("div",h,[n("div",b,[n("div",g,[n("div",y,[k,_,n("div",j,[n("div",w,[n(u,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:l((()=>[n(p,{user:d(f).user21},null,8,["user"])])),_:1}),n(u,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:l((()=>[n(p,{user:d(f).user120},null,8,["user"])])),default:l((()=>[n(v,{size:"small",color:"h-purple",initials:"SC"})])),_:1}),n(u,{class:"has-help-cursor",interactive:"",placement:"bottom"},{content:l((()=>[n(p,{user:d(f).user39},null,8,["user"])])),_:1})]),x]),n("div",B,[n(m,{"dark-outlined":""},{default:l((()=>[A])),_:1}),n(m,{color:"primary",loading:S.value,raised:"",onClick:W},{default:l((()=>[C])),_:1},8,["loading"])])])])])])}}});export{I as _};
