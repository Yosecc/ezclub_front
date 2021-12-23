import{_ as e}from"./V-Control.5caaa2ce.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.8a92c374.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9dd90b.js";import{_ as s}from"./V-IconButton.vue_vue&type=script&setup=true&lang.d8303532.js";import{_ as i}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.cab1c620.js";import{d as l,y as o,z as r,o as n,c,e as d,b as u,t as m,W as v,G as p,A as g,X as h,L as b,N as f,F as k,B as x}from"./vendor.777d9173.js";import{_ as y,a as w}from"./search-3-dark.7ce838c0.js";const E=[{id:"1",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."},{id:"2",logo:"/demo/photos/brands/hubspot.svg",title:"Project Manager for React Native Project",location:"Los Angeles",duration:"Part Time",requirements:"2 Years Exp."},{id:"3",logo:"/demo/photos/brands/slack.svg",title:"UI/UX Designer to Consolidate the UX Team 💪💪",location:"Los Angeles",duration:"Full Time",requirements:"3 Years Exp."},{id:"4",logo:"/demo/photos/brands/gitlab.svg",title:"IT Team Senior DevOps Manager",location:"Los Angeles",duration:"Full Time",requirements:"10 Years Exp."},{id:"5",logo:"/demo/photos/brands/google.svg",title:"Fullstack Developer With Solid MongoDB Skills",location:"San Francisco",duration:"Full Time",requirements:"5 Years Exp."},{id:"6",logo:"/demo/photos/brands/facebook.svg",title:"Fullstack Javascript and Node JS Developer",location:"Pasadena",duration:"Full Time",requirements:"4 Years Exp."},{id:"7",logo:"/demo/photos/brands/tnw.svg",title:"Product Owner for React Native Project",location:"Los Angeles",duration:"Full Time",requirements:"2 Years Exp."},{id:"8",logo:"/demo/photos/brands/dribbble.svg",title:"UI/UX Designer With Html5 and Sass Skills 👍",location:"San Diego",duration:"Full Time",requirements:"4 Years Exp."},{id:"9",logo:"/demo/photos/brands/atlassian.svg",title:"Experienced Senior UX Team Manager",location:"Melbourne",duration:"Full Time",requirements:"10 Years Exp."},{id:"10",logo:"/demo/photos/brands/github.svg",title:"Fullstack Javascript and Node JS Developer",location:"Los Angeles",duration:"Part Time",requirements:"1 Year Exp."},{id:"11",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."},{id:"12",logo:"/demo/photos/brands/airbnb.svg",title:"Node JS Fullstack Developer wanted 👌",location:"San Diego",duration:"Full Time",requirements:"3 Years Exp."}],F={class:"list-view-toolbar is-reversed"},S=d("div",{class:"form-icon"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:search"})],-1),T={class:"tabs-inner"},_={class:"tabs"},q=d("span",null,"All",-1),D=d("span",null,"Saved",-1),j=d("li",{class:"tab-naver"},null,-1),Y={class:"page-content-inner"},P={class:"list-view list-view-v3"},N=d("img",{class:"light-image",src:y,alt:""},null,-1),A=d("img",{class:"dark-image",src:w,alt:""},null,-1),L={class:"list-view-inner"},J={class:"list-view-item-inner"},R={class:"meta-left"},U=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"},null,-1),V=d("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1),I=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:clock"},null,-1),M=d("i",{"aria-hidden":"true",class:"fas fa-circle icon-separator"},null,-1),X=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check-circle"},null,-1),B={class:"meta-right"},C={class:"buttons"},W=x(" Apply Now "),O={class:"list-view-inner"},z=d("img",{class:"light-image",src:"/assets/thinking-canvas.6e639b9a.svg",alt:""},null,-1),G=d("img",{class:"dark-image",src:"/assets/thinking-canvas-dark.3bdce730.svg",alt:""},null,-1);var H=l({expose:[],setup(l){const x=o("all"),y=o(""),w=r((()=>y.value?E.filter((e=>e.logo.match(new RegExp(y.value,"i"))||e.title.match(new RegExp(y.value,"i"))||e.location.match(new RegExp(y.value,"i"))||e.duration.match(new RegExp(y.value,"i"))||e.requirements.match(new RegExp(y.value,"i")))):E));return(l,o)=>{const r=e,E=a,H=t,K=s,Q=i;return n(),c("div",null,[d("div",F,[d(r,{icon:"feather:search"},{default:u((()=>[g(d("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>y.value=e),class:"input custom-text-filter",placeholder:"Search...","data-filter-target":".list-view-item"},null,512),[[h,y.value]]),S])),_:1}),d("div",T,[d("div",_,[d("ul",null,[d("li",{class:["all"===x.value&&"is-active"]},[d("a",{onClick:o[2]||(o[2]=e=>x.value="all")},[q])],2),d("li",{class:["saved"===x.value&&"is-active"]},[d("a",{onClick:o[3]||(o[3]=e=>x.value="saved")},[D])],2),j])])])]),d("div",Y,[d("div",P,[d(E,{class:[0!==m(w).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:u((()=>[N,A])),_:1},8,["class"]),d("div",{id:"active-items-tab",class:["tab-content",["all"===x.value&&"is-active"]]},[d("div",L,[d(v,{name:"list-complete",tag:"div"},{default:u((()=>[(n(!0),c(b,null,f(m(w),(e=>(n(),c("div",{key:e.id,class:"list-view-item"},[d("div",J,[d("img",{class:"avatar",src:e.logo,alt:"",onErrorOnce:o[4]||(o[4]=e=>e.target.src="https://via.placeholder.com/150x150")},null,40,["src"]),d("div",R,[d("h3",null,k(e.title),1),d("span",null,[U,d("span",null,k(e.location),1),V,I,d("span",null,k(e.duration),1),M,X,d("span",null,k(e.requirements),1)])]),d("div",B,[d("div",C,[d(H,{color:"primary",outlined:"",raised:""},{default:u((()=>[W])),_:1}),d(K,{icon:"feather:bookmark",class:"hint--bubble hint--primary hint--top","data-hint":"Save",light:"",circle:""})])])])])))),128))])),_:1})]),m(w).length>5?(n(),c(Q,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):p("",!0)],2),d("div",{id:"inactive-items-tab",class:["tab-content",["saved"===x.value&&"is-active"]]},[d("div",O,[d(E,{title:"No saved jobs.",subtitle:"Looks like you don't have any saved jobs for the moment. It's\n                  also possible that some of your saved items expired."},{image:u((()=>[z,G])),_:1})])],2)])])])}}});export{H as _};
