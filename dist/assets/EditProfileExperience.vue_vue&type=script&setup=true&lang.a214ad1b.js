import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.e19b34ca.js";import{_ as a}from"./V-FilePond.vue_vue&type=script&setup=true&lang.08f59643.js";import{_ as s}from"./V-Control.8bcd59c1.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.9f88cb19.js";import{_ as n}from"./EditSettingItemDropdown.35b39745.js";import{_ as t}from"./V-IconWrap.vue_vue&type=style&index=0&lang.596910b0.js";import{d as r,r as i,aj as o,b as c,h as d,i as u,j as p,l as m,k as v,F as f,I as g,a2 as h,S as b,a7 as y,ai as k,G as _}from"./vendor.b81f4189.js";import{u as x}from"./useNotyf.4c4aa8b0.js";import{s as w}from"./sleep.2a252ff4.js";const j={class:"account-box is-form is-footerless"},E={class:"form-head-inner"},I=m("div",{class:"left"},[m("h3",null,"Work Experience"),m("p",null,"Edit your work experience info")],-1),V={class:"right"},C={class:"buttons"},D=_(" Go Back "),J=_(" Save Changes "),W={class:"form-body"},A={class:"fieldset"},F={key:0,class:"fieldset-heading"},O=m("h4",null,"Previous Experiences",-1),S=m("p",null,"This will help others assess your experience",-1),$={key:1,class:"fieldset-heading"},z={class:"setting-list"},G={class:"field-wrap"},P={class:"columns is-multiline"},N={class:"column is-12"},B=m("div",{class:"button"},[m("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),M={class:"column is-6"},T=m("input",{type:"text",class:"input",placeholder:"Company Name",autocomplete:"organization"},null,-1),H={class:"column is-6"},Q=m("input",{type:"text",class:"input",placeholder:"Job Title",autocomplete:"organization-title"},null,-1),R={class:"column is-12"},U=_(" Add Work Experience "),Y={class:"setting-item"},q=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Airbnb HQ"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Product Manager")],-1),K={class:"end"},L={class:"setting-item"},X=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Facebook"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Product Manager")],-1),Z={class:"end"},ee={class:"setting-item"},ae=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Atlassian"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Web Developer")],-1),se={class:"end"},le={class:"setting-item"},ne=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Github"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Web Developer")],-1),te={class:"end"},re={class:"setting-item"},ie=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Slack"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Web Developer")],-1),oe={class:"end"},ce={class:"setting-item"},de=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"Gitlab"),m("span",null,[m("span",null,"January 2018"),m("i",{"aria-hidden":"true",class:"fas fa-circle"}),m("span",null,"October 2020")]),m("span",null,"Web Developer")],-1),ue={class:"end"},pe={class:"setting-item is-create"},me=m("div",{class:"meta"},[m("span",{class:"dark-inverted"},"New Item"),m("span",null,"Add a new work experience item")],-1),ve={class:"end"},fe=_(" Add ");var ge=r({expose:[],setup(r){const _=i(!1),ge=i(!1),he=x(),{y:be}=o();i({start:new Date,end:new Date});const ye=c((()=>be.value>30)),ke=(e,a)=>{e?console.error(e):console.log("file added",a)},_e=(e,a)=>{e?console.error(e):console.log("file removed",a)},xe=async()=>{_.value=!1,we()},we=async()=>{ge.value=!0,await w(),he.success("Your changes have been successfully saved!"),ge.value=!1};return(r,i)=>{const o=e,c=a,x=s,w=l,he=d("v-date-picker"),be=n,je=t;return u(),p("div",j,[m("div",{class:["form-head stuck-header",[f(ye)&&"is-stuck"]]},[m("div",E,[I,m("div",V,[m("div",C,[m(o,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:v((()=>[D])),_:1}),m(o,{color:"primary",raised:"",loading:ge.value,onClick:we},{default:v((()=>[J])),_:1},8,["loading"])])])])],2),m("div",W,[g("Fieldset"),m("div",A,[_.value?(u(),p("div",$,[m("a",{class:"action-link",onClick:i[1]||(i[1]=e=>_.value=!1)},"Cancel")])):(u(),p("div",F,[O,S])),m("div",z,[g("Inner Form"),_.value?(u(),p("form",{key:0,class:"setting-form",onSubmit:h(xe,["prevent"])},[m(c,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onAddfile:ke,onRemovefile:_e}),m("div",G,[m("div",P,[m("div",N,[m(he,{modelValue:r.range,"onUpdate:modelValue":i[2]||(i[2]=e=>r.range=e),"is-range":"",color:"green","trim-weeks":""},{default:v((({inputValue:e,inputEvents:a})=>[m(w,{addons:"",class:"has-addons-fullwidth"},{default:v((()=>[m(x,null,{default:v((()=>[m("input",y({value:e.start,class:"input"},k(a.start)),null,16,["value"])])),_:2},1024),m(x,{nogrow:""},{default:v((()=>[B])),_:1}),m(x,null,{default:v((()=>[m("input",y({value:e.end,class:"input"},k(a.end)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])]),m("div",M,[m(w,null,{default:v((()=>[m(x,{icon:"feather:box"},{default:v((()=>[T])),_:1})])),_:1})]),m("div",H,[m(w,null,{default:v((()=>[m(x,{icon:"feather:briefcase"},{default:v((()=>[Q])),_:1})])),_:1})]),m("div",R,[m(w,null,{default:v((()=>[m(x,null,{default:v((()=>[m(o,{color:"primary",raised:"",fullwidth:""},{default:v((()=>[U])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),p(b,{key:1},[g("Experience Item"),m("div",Y,[g(' <img\r\n                src="/demo/photos/brands/airbnb.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),q,m("div",K,[m(be)])]),g("Experience Item"),m("div",L,[g(' <img\r\n                src="/demo/photos/brands/facebook.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),X,m("div",Z,[m(be)])]),g("Experience Item"),m("div",ee,[g('  <img\r\n                src="/demo/photos/brands/atlassian.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),ae,m("div",se,[m(be)])]),g("Experience Item"),m("div",le,[g(' <img\r\n                src="/demo/photos/brands/github.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),ne,m("div",te,[m(be)])]),g("Experience Item"),m("div",re,[g('  <img\r\n                src="/demo/photos/brands/slack.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),ie,m("div",oe,[m(be)])]),g("Experience Item"),m("div",ce,[g(' <img\r\n                src="/demo/photos/brands/gitlab.svg"\r\n                alt=""\r\n                @error.once="\r\n                  $event.target.src = \'https://via.placeholder.com/50x50\'\r\n                "\r\n              /> '),de,m("div",ue,[m(be)])]),g("Create Item"),m("div",pe,[m(je,{icon:"lnil lnil-circle-plus"}),me,m("div",ve,[m(o,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:i[3]||(i[3]=e=>_.value=!0)},{default:v((()=>[fe])),_:1})])])],64))])])])])}}});export{ge as _};
