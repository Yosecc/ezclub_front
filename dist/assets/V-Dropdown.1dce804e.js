var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(o,r,a)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a;import{_ as n}from"./V-Icon.vue_vue&type=script&setup=true&lang.bf6e495a.js";import{u as s}from"./useDropdown.ed7de453.js";import{B as i,D as l,d,a8 as p,r as c,o as u,h as g,L as f,E as y,k as v,G as b,K as m}from"./vendor.f713277a.js";i("data-v-be1c09ba");const w={key:0},k={class:"dropdown-menu",role:"menu"},O={class:"dropdown-content"};l();var j=d({expose:[],props:{title:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-Dropdown: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)},icon:{type:String,default:void 0},up:{type:Boolean,default:!1},right:{type:Boolean,default:!1},modern:{type:Boolean,default:!1},spaced:{type:Boolean,default:!1}},setup(e){const i=e,{expose:l}=p(),d=c(null),j=s(d);return l(((e,n)=>{for(var s in n||(n={}))r.call(n,s)&&t(e,s,n[s]);if(o)for(var s of o(n))a.call(n,s)&&t(e,s,n[s]);return e})({},j)),(e,o)=>{const r=n;return u(),g("div",{ref:d,class:[[i.right&&"is-right",i.up&&"is-up",i.icon&&"is-dots",i.modern&&"is-modern",i.spaced&&"is-spaced"],"dropdown"]},[f(e.$slots,"button",y(j),(()=>[i.icon?(u(),g("a",{key:0,class:"is-trigger dropdown-trigger",onClick:o[1]||(o[1]=(...e)=>y(j).toggle&&y(j).toggle(...e))},[v(r,{icon:i.icon},null,8,["icon"])])):(u(),g("a",{key:1,class:["is-trigger button dropdown-trigger",[i.color&&`is-${i.color}`]],onClick:o[2]||(o[2]=(...e)=>y(j).toggle&&y(j).toggle(...e))},[i.title?(u(),g("span",w,b(i.title),1)):m("",!0),v("span",{class:[!i.modern&&"base-caret",i.modern&&"base-caret"]},[y(j).isOpen?(u(),g(r,{key:1,icon:"fa:angle-up"})):(u(),g(r,{key:0,icon:"fa:angle-down"}))],2)],2))]),!0),v("div",k,[v("div",O,[f(e.$slots,"content",y(j),void 0,!0)])])],2)}}});j.__scopeId="data-v-be1c09ba";export{j as _};
