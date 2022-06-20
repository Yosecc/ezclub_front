import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import{_ as l}from"./V-Control.0fd8783e.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.fb54e505.js";import{_ as a}from"./V-IconWrap.vue_vue&type=style&index=0&lang.e93b15a7.js";import{_ as i}from"./EditSettingItemDropdown.b1ce9a21.js";import{d as n,ak as t,r as c,b as o,o as u,h as d,k as v,j as r,E as m,a9 as p,R as g,i as f,G as k,F as h}from"./vendor.19da945b.js";import{u as b}from"./useNotyf.a2fec919.js";import{s as y}from"./sleep.2a252ff4.js";const _={class:"account-box is-form is-footerless"},S={class:"form-head-inner"},x=v("div",{class:"left"},[v("h3",null,"Skills and Tools"),v("p",null,"Edit your skills and tools")],-1),w={class:"right"},V={class:"buttons"},j=h(" Go Back "),C=h(" Save Changes "),A={class:"form-body"},Y={class:"fieldset"},L={key:0,class:"fieldset-heading"},I=v("h4",null,"Languages",-1),E=v("p",null,"How many languages do you speak?",-1),J={key:1,class:"fieldset-heading"},N={class:"setting-list"},U={class:"field-wrap"},F={class:"columns is-multiline"},B={class:"column is-6"},G={class:"multiselect-single-label"},T={class:"select-label-text"},H={class:"select-label-text"},M={class:"column is-6"},O={class:"column is-12"},R=v("input",{type:"text",class:"input",placeholder:"Write a quick comment...",autocomplete:"off"},null,-1),W={class:"column is-12"},q=h(" Add Language "),D={class:"setting-item"},P=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"English"),v("span",null,"Native Speaker, fluent")],-1),z={class:"end"},K={class:"setting-item"},Q=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"French"),v("span",null,"Fluent, written and spoken")],-1),X={class:"end"},Z={class:"setting-item"},$=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"German"),v("span",null,"Beginner level")],-1),ee={class:"end"},le={class:"setting-item"},se=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"Spanish"),v("span",null,"Beginner level")],-1),ae={class:"end"},ie={class:"setting-item is-create"},ne=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"New Item"),v("span",null,"Add a new language item")],-1),te={class:"end"},ce=h(" Add "),oe={class:"fieldset"},ue={key:0,class:"fieldset-heading"},de=v("h4",null,"Skills",-1),ve=v("p",null,"Add your best skills",-1),re={key:1,class:"fieldset-heading"},me={class:"setting-list"},pe={class:"field-wrap"},ge={class:"columns is-multiline"},fe={class:"column is-6"},ke={class:"multiselect-single-label"},he={class:"select-label-text"},be={class:"select-label-text"},ye={class:"column is-6"},_e={class:"column is-12"},Se=h(" Add Skill "),xe={class:"setting-item"},we=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"Javascript"),v("span",null,"7 years of experience")],-1),Ve={class:"end"},je={class:"setting-item"},Ce=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"Html5"),v("span",null,"10+ years of experience")],-1),Ae={class:"end"},Ye={class:"setting-item"},Le=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"CSS3"),v("span",null,"10+ years of experience")],-1),Ie={class:"end"},Ee={class:"setting-item is-create"},Je=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"New Item"),v("span",null,"Add a new skill item")],-1),Ne={class:"end"},Ue=h(" Add "),Fe={class:"fieldset"},Be={key:0,class:"fieldset-heading"},Ge=v("h4",null,"Tools",-1),Te=v("p",null,"Add the tools you work with",-1),He={key:1,class:"fieldset-heading"},Me={class:"setting-list"},Oe={class:"field-wrap"},Re={class:"columns is-multiline"},We={class:"column is-6"},qe={class:"multiselect-single-label"},De={class:"select-label-text"},Pe={class:"select-label-text"},ze={class:"column is-6"},Ke={class:"column is-12"},Qe=h(" Add Tool "),Xe={class:"setting-item"},Ze=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"Illustrator"),v("span",null,"Advanced level")],-1),$e={class:"end"},el={class:"setting-item"},ll=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"Jira Software"),v("span",null,"Intermediate level")],-1),sl={class:"end"},al={class:"setting-item"},il=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"MS Office"),v("span",null,"Expert level")],-1),nl={class:"end"},tl={class:"setting-item is-create"},cl=v("div",{class:"meta"},[v("span",{class:"dark-inverted"},"New Item"),v("span",null,"Add a new tool item")],-1),ol={class:"end"},ul=h(" Add ");var dl=n({expose:[],setup(n){const h=b(),{y:dl}=t(),vl=c(!1),rl=c(!1),ml=c(!1),pl=c(!1),gl=c(""),fl=c(""),kl=c(""),hl=c(""),bl=c(""),yl=c(""),_l=o((()=>dl.value>30)),Sl=async()=>{rl.value=!1,await Vl(),gl.value="",fl.value=""},xl=async()=>{ml.value=!1,await Vl(),kl.value="",hl.value=""},wl=async()=>{pl.value=!1,await Vl(),bl.value="",yl.value=""},Vl=async()=>{vl.value=!0,await y(),h.success("Your changes have been successfully saved!"),vl.value=!1};return(n,t)=>{const c=e,o=f("Multiselect"),h=l,b=s,y=a,dl=i;return u(),d("div",_,[v("div",{class:["form-head stuck-header",[m(_l)&&"is-stuck"]]},[v("div",S,[x,v("div",w,[v("div",V,[v(c,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:r((()=>[j])),_:1}),v(c,{color:"primary",raised:"",loading:vl.value,onClick:Vl},{default:r((()=>[C])),_:1},8,["loading"])])])])],2),v("div",A,[v("div",Y,[rl.value?(u(),d("div",J,[v("a",{class:"action-link",onClick:t[1]||(t[1]=e=>rl.value=!1)},"Cancel")])):(u(),d("div",L,[I,E])),v("div",N,[rl.value?(u(),d("form",{key:0,class:"setting-form",onSubmit:p(Sl,["prevent"])},[v("div",U,[v("div",F,[v("div",B,[v(b,{class:"is-image-select"},{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:gl.value,"onUpdate:modelValue":t[2]||(t[2]=e=>gl.value=e),placeholder:"Select a language",label:"name",options:[{value:"english",name:"English",icon:"/images/icons/flags/united-states-of-america.svg"},{value:"french",name:"French",icon:"/images/icons/flags/france.svg"},{value:"german",name:"German",icon:"/images/icons/flags/germany.svg"},{value:"spanish",name:"Spanish",icon:"/images/icons/flags/spain.svg"}]},{singlelabel:r((({value:e})=>[v("div",G,[v("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),v("span",T,k(e.name),1)])])),option:r((({option:e})=>[v("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),v("span",H,k(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),v("div",M,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:fl.value,"onUpdate:modelValue":t[3]||(t[3]=e=>fl.value=e),placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"}]},null,8,["modelValue"])])),_:1})])),_:1})]),v("div",O,[v(b,null,{default:r((()=>[v(h,{icon:"feather:message-circle"},{default:r((()=>[R])),_:1})])),_:1})]),v("div",W,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:r((()=>[q])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),d(g,{key:1},[v("div",D,[v(y,{picture:"/images/icons/flags/united-states-of-america.svg"}),P,v("div",z,[v(dl)])]),v("div",K,[v(y,{picture:"/images/icons/flags/france.svg"}),Q,v("div",X,[v(dl)])]),v("div",Z,[v(y,{picture:"/images/icons/flags/germany.svg"}),$,v("div",ee,[v(dl)])]),v("div",le,[v(y,{picture:"/images/icons/flags/spain.svg"}),se,v("div",ae,[v(dl)])]),v("div",ie,[v(y,{icon:"lnil lnil-circle-plus"}),ne,v("div",te,[v(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[4]||(t[4]=e=>rl.value=!0)},{default:r((()=>[ce])),_:1})])])],64))])]),v("div",oe,[ml.value?(u(),d("div",re,[v("a",{class:"action-link",onClick:t[5]||(t[5]=e=>ml.value=!1)},"Cancel")])):(u(),d("div",ue,[de,ve])),v("div",me,[ml.value?(u(),d("form",{key:0,class:"setting-form",onSubmit:p(xl,["prevent"])},[v("div",pe,[v("div",ge,[v("div",fe,[v(b,{class:"is-image-select"},{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:kl.value,"onUpdate:modelValue":t[6]||(t[6]=e=>kl.value=e),placeholder:"Select a Skill",label:"name",options:[{value:"html",name:"Html5",icon:"/images/icons/stacks/html5.svg"},{value:"css",name:"CSS3",icon:"/images/icons/stacks/css3.svg"},{value:"javascript",name:"Javascript",icon:"/images/icons/stacks/js.svg"},{value:"react",name:"React",icon:"/images/icons/stacks/reactjs.svg"},{value:"angular",name:"Angular",icon:"/images/icons/stacks/angular.svg"},{value:"vueJs",name:"VueJs",icon:"/images/icons/stacks/vuejs.svg"},{value:"nodejs",name:"NodeJS",icon:"/images/icons/stacks/nodejs.svg"},{value:"csharp",name:"C#",icon:"/images/icons/stacks/csharp.svg"}]},{singlelabel:r((({value:e})=>[v("div",ke,[v("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),v("span",he,k(e.name),1)])])),option:r((({option:e})=>[v("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),v("span",be,k(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),v("div",ye,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:hl.value,"onUpdate:modelValue":t[7]||(t[7]=e=>hl.value=e),placeholder:"Years of Exp.",options:[{value:"1",label:"1 Year of exp."},{value:"2",label:"2 Year of exp."},{value:"3",label:"3 Year of exp."},{value:"4",label:"4 Year of exp."},{value:"5",label:"5 Year of exp."},{value:"6",label:"6 Year of exp."},{value:"7",label:"7 Year of exp."},{value:"8",label:"8 Year of exp."},{value:"9",label:"9 Year of exp."},{value:"+10",label:"+10 Year of exp."}]},null,8,["modelValue","options"])])),_:1})])),_:1})]),v("div",_e,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:r((()=>[Se])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),d(g,{key:1},[v("div",xe,[v(y,{picture:"/images/icons/stacks/js.svg"}),we,v("div",Ve,[v(dl)])]),v("div",je,[v(y,{picture:"/images/icons/stacks/html5.svg"}),Ce,v("div",Ae,[v(dl)])]),v("div",Ye,[v(y,{picture:"/images/icons/stacks/css3.svg"}),Le,v("div",Ie,[v(dl)])]),v("div",Ee,[v(y,{icon:"lnil lnil-circle-plus"}),Je,v("div",Ne,[v(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[8]||(t[8]=e=>ml.value=!0)},{default:r((()=>[Ue])),_:1})])])],64))])]),v("div",Fe,[pl.value?(u(),d("div",He,[v("a",{class:"action-link",onClick:t[9]||(t[9]=e=>pl.value=!1)},"Cancel")])):(u(),d("div",Be,[Ge,Te])),v("div",Me,[pl.value?(u(),d("form",{key:0,class:"setting-form",onSubmit:p(wl,["prevent"])},[v("div",Oe,[v("div",Re,[v("div",We,[v(b,{class:"is-image-select"},{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:bl.value,"onUpdate:modelValue":t[10]||(t[10]=e=>bl.value=e),placeholder:"Select a Tool",label:"name",options:[{value:"illustrator",name:"Illustrator",icon:"/images/icons/stacks/illustrator.svg"},{value:"photoshop",name:"Photoshop",icon:"/images/icons/stacks/photoshop.svg"},{value:"jira",name:"Jira Software",icon:"/demo/photos/tools/jira.svg"},{value:"office",name:"MS Office",icon:"/demo/photos/tools/office.svg"}]},{singlelabel:r((({value:e})=>[v("div",qe,[v("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),v("span",De,k(e.name),1)])])),option:r((({option:e})=>[v("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),v("span",Pe,k(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),v("div",ze,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(o,{modelValue:yl.value,"onUpdate:modelValue":t[11]||(t[11]=e=>yl.value=e),placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"},{value:"5",label:"Level 5"}]},null,8,["modelValue"])])),_:1})])),_:1})]),v("div",Ke,[v(b,null,{default:r((()=>[v(h,null,{default:r((()=>[v(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:r((()=>[Qe])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),d(g,{key:1},[v("div",Xe,[v(y,{picture:"/images/icons/stacks/illustrator.svg"}),Ze,v("div",$e,[v(dl)])]),v("div",el,[v(y,{picture:"/demo/photos/tools/jira.svg"}),ll,v("div",sl,[v(dl)])]),v("div",al,[v(y,{picture:"/demo/photos/tools/office.svg"}),il,v("div",nl,[v(dl)])]),v("div",tl,[v(y,{icon:"lnil lnil-circle-plus"}),cl,v("div",ol,[v(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[12]||(t[12]=e=>pl.value=!0)},{default:r((()=>[ul])),_:1})])])],64))])])])])}}});export{dl as _};