import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as l}from"./V-Control.a9c2cbb9.js";import{_ as s}from"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import{_ as a}from"./V-IconWrap.vue_vue&type=style&index=0&lang.0b9ca32b.js";import{_ as i}from"./EditSettingItemDropdown.3ffcc183.js";import{d as n,aj as t,r as c,b as o,h as d,o as u,i as v,k as r,j as m,E as p,H as g,a2 as f,S as k,G as b,F as h}from"./vendor.5bccebbb.js";import{u as y}from"./useNotyf.bc1d10bc.js";import{s as _}from"./sleep.2a252ff4.js";const S={class:"account-box is-form is-footerless"},x={class:"form-head-inner"},w=r("div",{class:"left"},[r("h3",null,"Skills and Tools"),r("p",null,"Edit your skills and tools")],-1),I={class:"right"},V={class:"buttons"},j=h(" Go Back "),C=h(" Save Changes "),A={class:"form-body"},Y={class:"fieldset"},E={key:0,class:"fieldset-heading"},F=r("h4",null,"Languages",-1),L=r("p",null,"How many languages do you speak?",-1),J={key:1,class:"fieldset-heading"},N={class:"setting-list"},U={class:"field-wrap"},B={class:"columns is-multiline"},G={class:"column is-6"},H={class:"multiselect-single-label"},T={class:"select-label-text"},M={class:"select-label-text"},O={class:"column is-6"},W={class:"column is-12"},q=r("input",{type:"text",class:"input",placeholder:"Write a quick comment...",autocomplete:"off"},null,-1),D={class:"column is-12"},P=h(" Add Language "),R={class:"setting-item"},z=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"English"),r("span",null,"Native Speaker, fluent")],-1),K={class:"end"},Q={class:"setting-item"},X=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"French"),r("span",null,"Fluent, written and spoken")],-1),Z={class:"end"},$={class:"setting-item"},ee=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"German"),r("span",null,"Beginner level")],-1),le={class:"end"},se={class:"setting-item"},ae=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"Spanish"),r("span",null,"Beginner level")],-1),ie={class:"end"},ne={class:"setting-item is-create"},te=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"New Item"),r("span",null,"Add a new language item")],-1),ce={class:"end"},oe=h(" Add "),de={class:"fieldset"},ue={key:0,class:"fieldset-heading"},ve=r("h4",null,"Skills",-1),re=r("p",null,"Add your best skills",-1),me={key:1,class:"fieldset-heading"},pe={class:"setting-list"},ge={class:"field-wrap"},fe={class:"columns is-multiline"},ke={class:"column is-6"},be={class:"multiselect-single-label"},he={class:"select-label-text"},ye={class:"select-label-text"},_e={class:"column is-6"},Se={class:"column is-12"},xe=h(" Add Skill "),we={class:"setting-item"},Ie=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"Javascript"),r("span",null,"7 years of experience")],-1),Ve={class:"end"},je={class:"setting-item"},Ce=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"Html5"),r("span",null,"10+ years of experience")],-1),Ae={class:"end"},Ye={class:"setting-item"},Ee=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"CSS3"),r("span",null,"10+ years of experience")],-1),Fe={class:"end"},Le={class:"setting-item is-create"},Je=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"New Item"),r("span",null,"Add a new skill item")],-1),Ne={class:"end"},Ue=h(" Add "),Be={class:"fieldset"},Ge={key:0,class:"fieldset-heading"},He=r("h4",null,"Tools",-1),Te=r("p",null,"Add the tools you work with",-1),Me={key:1,class:"fieldset-heading"},Oe={class:"setting-list"},We={class:"field-wrap"},qe={class:"columns is-multiline"},De={class:"column is-6"},Pe={class:"multiselect-single-label"},Re={class:"select-label-text"},ze={class:"select-label-text"},Ke={class:"column is-6"},Qe={class:"column is-12"},Xe=h(" Add Tool "),Ze={class:"setting-item"},$e=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"Illustrator"),r("span",null,"Advanced level")],-1),el={class:"end"},ll={class:"setting-item"},sl=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"Jira Software"),r("span",null,"Intermediate level")],-1),al={class:"end"},il={class:"setting-item"},nl=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"MS Office"),r("span",null,"Expert level")],-1),tl={class:"end"},cl={class:"setting-item is-create"},ol=r("div",{class:"meta"},[r("span",{class:"dark-inverted"},"New Item"),r("span",null,"Add a new tool item")],-1),dl={class:"end"},ul=h(" Add ");var vl=n({expose:[],setup(n){const h=y(),{y:vl}=t(),rl=c(!1),ml=c(!1),pl=c(!1),gl=c(!1),fl=c(""),kl=c(""),bl=c(""),hl=c(""),yl=c(""),_l=c(""),Sl=o((()=>vl.value>30)),xl=async()=>{ml.value=!1,await Vl(),fl.value="",kl.value=""},wl=async()=>{pl.value=!1,await Vl(),bl.value="",hl.value=""},Il=async()=>{gl.value=!1,await Vl(),yl.value="",_l.value=""},Vl=async()=>{rl.value=!0,await _(),h.success("Your changes have been successfully saved!"),rl.value=!1};return(n,t)=>{const c=e,o=d("Multiselect"),h=l,y=s,_=a,vl=i;return u(),v("div",S,[r("div",{class:["form-head stuck-header",[p(Sl)&&"is-stuck"]]},[r("div",x,[w,r("div",I,[r("div",V,[r(c,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:m((()=>[j])),_:1}),r(c,{color:"primary",raised:"",loading:rl.value,onClick:Vl},{default:m((()=>[C])),_:1},8,["loading"])])])])],2),r("div",A,[g("Fieldset"),r("div",Y,[ml.value?(u(),v("div",J,[r("a",{class:"action-link",onClick:t[1]||(t[1]=e=>ml.value=!1)},"Cancel")])):(u(),v("div",E,[F,L])),r("div",N,[g("Inner Form"),ml.value?(u(),v("form",{key:0,class:"setting-form",onSubmit:f(xl,["prevent"])},[r("div",U,[r("div",B,[r("div",G,[r(y,{class:"is-image-select"},{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:fl.value,"onUpdate:modelValue":t[2]||(t[2]=e=>fl.value=e),placeholder:"Select a language",label:"name",options:[{value:"english",name:"English",icon:"/images/icons/flags/united-states-of-america.svg"},{value:"french",name:"French",icon:"/images/icons/flags/france.svg"},{value:"german",name:"German",icon:"/images/icons/flags/germany.svg"},{value:"spanish",name:"Spanish",icon:"/images/icons/flags/spain.svg"}]},{singlelabel:m((({value:e})=>[r("div",H,[r("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),r("span",T,b(e.name),1)])])),option:m((({option:e})=>[r("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),r("span",M,b(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),r("div",O,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:kl.value,"onUpdate:modelValue":t[3]||(t[3]=e=>kl.value=e),placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"}]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",W,[r(y,null,{default:m((()=>[r(h,{icon:"feather:message-circle"},{default:m((()=>[q])),_:1})])),_:1})]),r("div",D,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:m((()=>[P])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),v(k,{key:1},[g("Experience Item"),r("div",R,[r(_,{picture:"/images/icons/flags/united-states-of-america.svg"}),z,r("div",K,[r(vl)])]),g("Experience Item"),r("div",Q,[r(_,{picture:"/images/icons/flags/france.svg"}),X,r("div",Z,[r(vl)])]),g("Experience Item"),r("div",$,[r(_,{picture:"/images/icons/flags/germany.svg"}),ee,r("div",le,[r(vl)])]),g("Experience Item"),r("div",se,[r(_,{picture:"/images/icons/flags/spain.svg"}),ae,r("div",ie,[r(vl)])]),g("Create Item"),r("div",ne,[r(_,{icon:"lnil lnil-circle-plus"}),te,r("div",ce,[r(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[4]||(t[4]=e=>ml.value=!0)},{default:m((()=>[oe])),_:1})])])],64))])]),g("Fieldset"),r("div",de,[pl.value?(u(),v("div",me,[r("a",{class:"action-link",onClick:t[5]||(t[5]=e=>pl.value=!1)},"Cancel")])):(u(),v("div",ue,[ve,re])),r("div",pe,[g("Inner Form"),pl.value?(u(),v("form",{key:0,class:"setting-form",onSubmit:f(wl,["prevent"])},[r("div",ge,[r("div",fe,[r("div",ke,[r(y,{class:"is-image-select"},{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:bl.value,"onUpdate:modelValue":t[6]||(t[6]=e=>bl.value=e),placeholder:"Select a Skill",label:"name",options:[{value:"html",name:"Html5",icon:"/images/icons/stacks/html5.svg"},{value:"css",name:"CSS3",icon:"/images/icons/stacks/css3.svg"},{value:"javascript",name:"Javascript",icon:"/images/icons/stacks/js.svg"},{value:"react",name:"React",icon:"/images/icons/stacks/reactjs.svg"},{value:"angular",name:"Angular",icon:"/images/icons/stacks/angular.svg"},{value:"vueJs",name:"VueJs",icon:"/images/icons/stacks/vuejs.svg"},{value:"nodejs",name:"NodeJS",icon:"/images/icons/stacks/nodejs.svg"},{value:"csharp",name:"C#",icon:"/images/icons/stacks/csharp.svg"}]},{singlelabel:m((({value:e})=>[r("div",be,[r("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),r("span",he,b(e.name),1)])])),option:m((({option:e})=>[r("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),r("span",ye,b(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),r("div",_e,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:hl.value,"onUpdate:modelValue":t[7]||(t[7]=e=>hl.value=e),placeholder:"Years of Exp.",options:[{value:"1",label:"1 Year of exp."},{value:"2",label:"2 Year of exp."},{value:"3",label:"3 Year of exp."},{value:"4",label:"4 Year of exp."},{value:"5",label:"5 Year of exp."},{value:"6",label:"6 Year of exp."},{value:"7",label:"7 Year of exp."},{value:"8",label:"8 Year of exp."},{value:"9",label:"9 Year of exp."},{value:"+10",label:"+10 Year of exp."}]},null,8,["modelValue","options"])])),_:1})])),_:1})]),r("div",Se,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:m((()=>[xe])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),v(k,{key:1},[g("Skill Item"),r("div",we,[r(_,{picture:"/images/icons/stacks/js.svg"}),Ie,r("div",Ve,[r(vl)])]),g("Skill Item"),r("div",je,[r(_,{picture:"/images/icons/stacks/html5.svg"}),Ce,r("div",Ae,[r(vl)])]),g("Skill Item"),r("div",Ye,[r(_,{picture:"/images/icons/stacks/css3.svg"}),Ee,r("div",Fe,[r(vl)])]),g("Create Item"),r("div",Le,[r(_,{icon:"lnil lnil-circle-plus"}),Je,r("div",Ne,[r(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[8]||(t[8]=e=>pl.value=!0)},{default:m((()=>[Ue])),_:1})])])],64))])]),g("Fieldset"),r("div",Be,[gl.value?(u(),v("div",Me,[r("a",{class:"action-link",onClick:t[9]||(t[9]=e=>gl.value=!1)},"Cancel")])):(u(),v("div",Ge,[He,Te])),r("div",Oe,[g("Inner Form"),gl.value?(u(),v("form",{key:0,class:"setting-form",onSubmit:f(Il,["prevent"])},[r("div",We,[r("div",qe,[r("div",De,[r(y,{class:"is-image-select"},{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:yl.value,"onUpdate:modelValue":t[10]||(t[10]=e=>yl.value=e),placeholder:"Select a Tool",label:"name",options:[{value:"illustrator",name:"Illustrator",icon:"/images/icons/stacks/illustrator.svg"},{value:"photoshop",name:"Photoshop",icon:"/images/icons/stacks/photoshop.svg"},{value:"jira",name:"Jira Software",icon:"/demo/photos/tools/jira.svg"},{value:"office",name:"MS Office",icon:"/demo/photos/tools/office.svg"}]},{singlelabel:m((({value:e})=>[r("div",Pe,[r("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,["src"]),r("span",Re,b(e.name),1)])])),option:m((({option:e})=>[r("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,["src"]),r("span",ze,b(e.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})]),r("div",Ke,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(o,{modelValue:_l.value,"onUpdate:modelValue":t[11]||(t[11]=e=>_l.value=e),placeholder:"Select your level",options:[{value:"1",label:"Level 1"},{value:"2",label:"Level 2"},{value:"3",label:"Level 3"},{value:"4",label:"Level 4"},{value:"5",label:"Level 5"}]},null,8,["modelValue"])])),_:1})])),_:1})]),r("div",Qe,[r(y,null,{default:m((()=>[r(h,null,{default:m((()=>[r(c,{color:"primary",icon:"fas fa-plus",raised:"",fullwidth:""},{default:m((()=>[Xe])),_:1})])),_:1})])),_:1})])])])],40,["onSubmit"])):(u(),v(k,{key:1},[g("Skill Item"),r("div",Ze,[r(_,{picture:"/images/icons/stacks/illustrator.svg"}),$e,r("div",el,[r(vl)])]),g("Skill Item"),r("div",ll,[r(_,{picture:"/demo/photos/tools/jira.svg"}),sl,r("div",al,[r(vl)])]),g("Skill Item"),r("div",il,[r(_,{picture:"/demo/photos/tools/office.svg"}),nl,r("div",tl,[r(vl)])]),g("Create Item"),r("div",cl,[r(_,{icon:"lnil lnil-circle-plus"}),ol,r("div",dl,[r(c,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",onClick:t[12]||(t[12]=e=>gl.value=!0)},{default:m((()=>[ul])),_:1})])])],64))])])])])}}});export{vl as _};
