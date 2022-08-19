import{_ as e}from"./V-Control.1c77a766.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.24d82d1d.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{_ as s}from"./V-IconButton.vue_vue&type=script&setup=true&lang.80ae16ed.js";import{_ as i}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.6614a034.js";import{d as l,r as o,b as r,o as n,h as d,k as c,j as u,E as m,ab as v,K as p,W as g,_ as h,R as b,S as f,G as k,F as x}from"./vendor.41bfc188.js";import{_ as y,a as w}from"./search-3-dark.822692f5.js";const E=[{id:"1",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."},{id:"2",logo:"/demo/photos/brands/hubspot.svg",title:"Project Manager for React Native Project",location:"Los Angeles",duration:"Part Time",requirements:"2 Years Exp."},{id:"3",logo:"/demo/photos/brands/slack.svg",title:"UI/UX Designer to Consolidate the UX Team 💪💪",location:"Los Angeles",duration:"Full Time",requirements:"3 Years Exp."},{id:"4",logo:"/demo/photos/brands/gitlab.svg",title:"IT Team Senior DevOps Manager",location:"Los Angeles",duration:"Full Time",requirements:"10 Years Exp."},{id:"5",logo:"/demo/photos/brands/google.svg",title:"Fullstack Developer With Solid MongoDB Skills",location:"San Francisco",duration:"Full Time",requirements:"5 Years Exp."},{id:"6",logo:"/demo/photos/brands/facebook.svg",title:"Fullstack Javascript and Node JS Developer",location:"Pasadena",duration:"Full Time",requirements:"4 Years Exp."},{id:"7",logo:"/demo/photos/brands/tnw.svg",title:"Product Owner for React Native Project",location:"Los Angeles",duration:"Full Time",requirements:"2 Years Exp."},{id:"8",logo:"/demo/photos/brands/dribbble.svg",title:"UI/UX Designer With Html5 and Sass Skills 👍",location:"San Diego",duration:"Full Time",requirements:"4 Years Exp."},{id:"9",logo:"/demo/photos/brands/atlassian.svg",title:"Experienced Senior UX Team Manager",location:"Melbourne",duration:"Full Time",requirements:"10 Years Exp."},{id:"10",logo:"/demo/photos/brands/github.svg",title:"Fullstack Javascript and Node JS Developer",location:"Los Angeles",duration:"Part Time",requirements:"1 Year Exp."},{id:"11",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."},{id:"12",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."}],S={class:"list-view-toolbar is-reversed"},F=c("div",{class:"form-icon"},[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})],-1),T={class:"tabs-inner"},_={class:"tabs"},q=c("span",null,"All",-1),D=c("span",null,"Saved",-1),j=c("li",{class:"tab-naver"},null,-1),Y={class:"page-content-inner"},P={class:"list-view list-view-v3"},N=c("img",{class:"light-image",src:y,alt:""},null,-1),R=c("img",{class:"dark-image",src:w,alt:""},null,-1),A={class:"list-view-inner"},J={class:"list-view-item-inner"},L={class:"meta-left"},U=c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"},null,-1),V=c("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1),I=c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:clock"},null,-1),M=c("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1),C=c("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check-circle"},null,-1),W={class:"meta-right"},X={class:"buttons"},B=x(" Apply Now "),O={class:"list-view-inner"},G=c("img",{class:"light-image",src:"/assets/thinking-canvas.4223f1d0.svg",alt:""},null,-1),H=c("img",{class:"dark-image",src:"/assets/thinking-canvas-dark.e6124f5e.svg",alt:""},null,-1);var K=l({expose:[],setup(l){const x=o("all"),y=o(""),w=r((()=>y.value?E.filter((e=>e.logo.match(new RegExp(y.value,"i"))||e.title.match(new RegExp(y.value,"i"))||e.location.match(new RegExp(y.value,"i"))||e.duration.match(new RegExp(y.value,"i"))||e.requirements.match(new RegExp(y.value,"i")))):E));return(l,o)=>{const r=e,E=a,K=t,z=s,Q=i;return n(),d("div",null,[c("div",S,[c(r,{icon:"feather:search"},{default:u((()=>[g(c("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search...","data-filter-target":".list-view-item"},null,512),[[h,y.value]]),F])),_:1}),c("div",T,[c("div",_,[c("ul",null,[c("li",{class:["all"===x.value&&"is-active"]},[c("a",{onClick:o[2]||(o[2]=e=>x.value="all")},[q])],2),c("li",{class:["saved"===x.value&&"is-active"]},[c("a",{onClick:o[3]||(o[3]=e=>x.value="saved")},[D])],2),j])])])]),c("div",Y,[c("div",P,[c(E,{class:[0!==m(w).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:u((()=>[N,R])),_:1},8,["class"]),c("div",{id:"active-items-tab",class:["tab-content",["all"===x.value&&"is-active"]]},[c("div",A,[c(v,{name:"list-complete",tag:"div"},{default:u((()=>[(n(!0),d(b,null,f(m(w),(e=>(n(),d("div",{key:e.id,class:"list-view-item"},[c("div",J,[c("img",{class:"avatar",src:e.logo,alt:"",onErrorOnce:o[4]||(o[4]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),c("div",L,[c("h3",null,k(e.title),1),c("span",null,[U,c("span",null,k(e.location),1),V,I,c("span",null,k(e.duration),1),M,C,c("span",null,k(e.requirements),1)])]),c("div",W,[c("div",X,[c(K,{color:"primary",outlined:"",raised:""},{default:u((()=>[B])),_:1}),c(z,{icon:"feather:bookmark",class:"hint--bubble hint--primary hint--top","data-hint":"Save",light:"",circle:""})])])])])))),128))])),_:1})]),m(w).length>5?(n(),d(Q,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):p("",!0)],2),c("div",{id:"inactive-items-tab",class:["tab-content",["saved"===x.value&&"is-active"]]},[c("div",O,[c(E,{title:"No saved jobs.",subtitle:"Looks like you don't have any saved jobs for the moment. It's\r\n                  also possible that some of your saved items expired."},{image:u((()=>[G,H])),_:1})])],2)])])])}}});export{K as _};
