import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.c41077d9.js";import{_ as a}from"./V-FilePond.vue_vue&type=script&setup=true&lang.9da7a006.js";import{_ as s}from"./V-Control.7db53124.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.18737d13.js";import{_ as i}from"./EditSettingItemDropdown.56e8c459.js";import{_ as n}from"./V-IconWrap.vue_vue&type=style&index=0&lang.36c5d387.js";import{d as t,r,E as o,b as d,o as c,h as u,k as p,j as v,D as m,a4 as f,L as g,i as h,_ as y,a9 as b,G as k}from"./vendor.20c6e26b.js";import{u as _}from"./useNotyf.f1431f99.js";import{s as w}from"./sleep.2a252ff4.js";const x={class:"account-box is-form is-footerless"},j={class:"form-head-inner"},V=p("div",{class:"left"},[p("h3",null,"Work Experience"),p("p",null,"Edit your work experience info")],-1),D={class:"right"},C={class:"buttons"},E=k(" Go Back "),J=k(" Save Changes "),W={class:"form-body"},A={class:"fieldset"},O={key:0,class:"fieldset-heading"},z=p("h4",null,"Previous Experiences",-1),S=p("p",null,"This will help others assess your experience",-1),G={key:1,class:"fieldset-heading"},P={class:"setting-list"},F={class:"field-wrap"},I={class:"columns is-multiline"},N={class:"column is-12"},B=p("div",{class:"button"},[p("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),M={class:"column is-6"},T=p("input",{type:"text",class:"input",placeholder:"Company Name",autocomplete:"organization"},null,-1),H={class:"column is-6"},L=p("input",{type:"text",class:"input",placeholder:"Job Title",autocomplete:"organization-title"},null,-1),Q={class:"column is-12"},R=k(" Add Work Experience "),U={class:"setting-item"},Y=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Airbnb HQ"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Product Manager")],-1),q={class:"end"},K={class:"setting-item"},X=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Facebook"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Product Manager")],-1),Z={class:"end"},$={class:"setting-item"},ee=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Atlassian"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Web Developer")],-1),ae={class:"end"},se={class:"setting-item"},le=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Github"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Web Developer")],-1),ie={class:"end"},ne={class:"setting-item"},te=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Slack"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Web Developer")],-1),re={class:"end"},oe={class:"setting-item"},de=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"Gitlab"),p("span",null,[p("span",null,"January 2018"),p("i",{"aria-hidden":"true",class:"fas fa-circle"}),p("span",null,"October 2020")]),p("span",null,"Web Developer")],-1),ce={class:"end"},ue={class:"setting-item is-create"},pe=p("div",{class:"meta"},[p("span",{class:"dark-inverted"},"New Item"),p("span",null,"Add a new work experience item")],-1),ve={class:"end"},me=k(" Add ");var fe=t({expose:[],setup(t){const k=r(!1),fe=r(!1),ge=_(),{y:he}=o();r({start:new Date,end:new Date});const ye=d((()=>he.value>30)),be=(e,a)=>{e?console.error(e):console.log("file added",a)},ke=(e,a)=>{e?console.error(e):console.log("file removed",a)},_e=async()=>{k.value=!1,we()},we=async()=>{fe.value=!0,await w(),ge.success("Your changes have been successfully saved!"),fe.value=!1};return(t,r)=>{const o=e,d=a,_=s,w=l,ge=h("v-date-picker"),he=i,xe=n;return c(),u("div",x,[p("div",{class:["form-head stuck-header",[m(ye)&&"is-stuck"]]},[p("div",j,[V,p("div",D,[p("div",C,[p(o,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:v((()=>[E])),_:1}),p(o,{color:"primary",raised:"",loading:fe.value,onClick:we},{default:v((()=>[J])),_:1},8,["loading"])])])])],2),p("div",W,[p("div",A,[k.value?(c(),u("div",G,[p("a",{class:"action-link",onClick:r[1]||(r[1]=e=>k.value=!1)},"Cancel")])):(c(),u("div",O,[z,S])),p("div",P,[k.value?(c(),u("form",{key:0,class:"setting-form",onSubmit:f(_e,["prevent"])},[p(d,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onAddfile:be,onRemovefile:ke}),p("div",F,[p("div",I,[p("div",N,[p(ge,{modelValue:t.range,"onUpdate:modelValue":r[2]||(r[2]=e=>t.range=e),"is-range":"",color:"green","trim-weeks":""},{default:v((({inputValue:e,inputEvents:a})=>[p(w,{addons:"",class:"has-addons-fullwidth"},{default:v((()=>[p(_,null,{default:v((()=>[p("input",y({value:e.start,class:"input"},b(a.start)),null,16,["value"])])),_:2},1024),p(_,{nogrow:""},{default:v((()=>[B])),_:1}),p(_,null,{default:v((()=>[p("input",y({value:e.end,class:"input"},b(a.end)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])]),p("div",M,[p(w,null,{default:v((()=>[p(_,{icon:"feather:box"},{default:v((()=>[T])),_:1})])),_:1})]),p("div",H,[p(w,null,{default:v((()=>[p(_,{icon:"feather:briefcase"},{default:v((()=>[L])),_:1})])),_:1})]),p("div",Q,[p(w,null,{default:v((()=>[p(_,null,{default:v((()=>[p(o,{color:"primary",raised:"",fullwidth:""},{default:v((()=>[R])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(c(),u(g,{key:1},[p("div",U,[Y,p("div",q,[p(he)])]),p("div",K,[X,p("div",Z,[p(he)])]),p("div",$,[ee,p("div",ae,[p(he)])]),p("div",se,[le,p("div",ie,[p(he)])]),p("div",ne,[te,p("div",re,[p(he)])]),p("div",oe,[de,p("div",ce,[p(he)])]),p("div",ue,[p(xe,{icon:"lnil lnil-circle-plus"}),pe,p("div",ve,[p(o,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:r[3]||(r[3]=e=>k.value=!0)},{default:v((()=>[me])),_:1})])])],64))])])])])}}});export{fe as _};
