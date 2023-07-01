var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;import{_ as n}from"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import{u as s}from"./useDropdown.fb013c95.js";import{D as i,E as l,d,ab as c,r as p,h as u,i as g,L as f,F as b,l as y,H as v,K as m}from"./vendor.3e3390b7.js";i("data-v-be1c09ba");const w={key:0},O={class:"dropdown-menu",role:"menu"},j={class:"dropdown-content"};l();var k=d({expose:[],props:{title:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-Dropdown: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)},icon:{type:String,default:void 0},up:{type:Boolean,default:!1},right:{type:Boolean,default:!1},modern:{type:Boolean,default:!1},spaced:{type:Boolean,default:!1}},setup(e){const i=e,{expose:l}=c(),d=p(null),k=s(d);return l(((e,n)=>{for(var s in n||(n={}))r.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))t.call(n,s)&&a(e,s,n[s]);return e})({},k)),(e,o)=>{const r=n;return u(),g("div",{ref:d,class:[[i.right&&"is-right",i.up&&"is-up",i.icon&&"is-dots",i.modern&&"is-modern",i.spaced&&"is-spaced"],"dropdown"]},[f(e.$slots,"button",b(k),(()=>[i.icon?(u(),g("a",{key:0,class:"is-trigger dropdown-trigger",onClick:o[1]||(o[1]=(...e)=>b(k).toggle&&b(k).toggle(...e))},[y(r,{icon:i.icon},null,8,["icon"])])):(u(),g("a",{key:1,class:["is-trigger button dropdown-trigger",[i.color&&`is-${i.color}`]],onClick:o[2]||(o[2]=(...e)=>b(k).toggle&&b(k).toggle(...e))},[i.title?(u(),g("span",w,v(i.title),1)):m("",!0),y("span",{class:[!i.modern&&"base-caret",i.modern&&"base-caret"]},[b(k).isOpen?(u(),g(r,{key:1,icon:"fa:angle-up"})):(u(),g(r,{key:0,icon:"fa:angle-down"}))],2)],2))]),!0),y("div",O,[y("div",j,[f(e.$slots,"content",b(k),void 0,!0)])])],2)}}});k.__scopeId="data-v-be1c09ba";export{k as _};
