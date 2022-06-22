import{_ as e}from"./V-Icon.vue_vue&type=script&setup=true&lang.3bbb02a2.js";import{d as a,r as t,b as s,w as i,o as l,i as n,k as r,S as d,U as o,E as u,H as c,T as g,j as p,G as v,L as b}from"./vendor.01c5c571.js";const f={class:"tabs-inner"},y={key:0,class:"tab-naver"},h={class:"tab-content is-active"};var m=a({expose:[],props:{tabs:{type:Array,required:!0},selected:{type:String,default:void 0},type:{type:String,default:void 0,validator:e=>-1!==[void 0,"boxed","toggle","rounded"].indexOf(e)||(console.warn(`V-Tabs: invalid "${e}" type. Should be boxed, toggle, rounded or undefined`),!1)},align:{type:String,default:void 0,validator:e=>-1!==[void 0,"centered","right"].indexOf(e)||(console.warn(`V-Tabs: invalid "${e}" align. Should be centered, right or undefined`),!1)},slider:{type:Boolean,default:!1},slow:{type:Boolean,default:!1}},emits:["changeTab"],setup(a,{emit:m}){const x=a,w=t(x.selected),k=s((()=>{if(!x.slider)return"";if("rounded"===x.type)return 3===x.tabs.length?"is-triple-slider":2===x.tabs.length?"is-slider":"";if(!x.type){if(3===x.tabs.length)return"is-squared is-triple-slider";if(2===x.tabs.length)return"is-squared is-slider"}return""}));return i(w,(e=>{m("changeTab",e)})),(t,s)=>{const i=e;return l(),n("div",{class:["tabs-wrapper",[u(k)]]},[r("div",f,[r("div",{class:["tabs",["centered"===x.align&&"is-centered","right"===x.align&&"is-right","rounded"===x.type&&!x.slider&&"is-toggle is-toggle-rounded","toggle"===x.type&&"is-toggle","boxed"===x.type&&"is-boxed"]]},[r("ul",null,[(l(!0),n(d,null,o(a.tabs,((e,a)=>(l(),n("li",{key:a,class:[w.value===e.value&&"is-active"]},[r("a",{onClick:a=>w.value=e.value},[e.icon?(l(),n(i,{key:0,icon:e.icon},null,8,["icon"])):c("v-if",!0),r("span",null,v(e.label),1)],8,["onClick"])],2)))),128)),u(k)?(l(),n("li",y)):c("v-if",!0)])],2)]),r("div",h,[r(g,{name:x.slow?"fade-slow":"fade-fast",mode:"out-in"},{default:p((()=>[b(t.$slots,"tab",{activeValue:w.value})])),_:3},8,["name"])])],2)}}});export{m as _};
