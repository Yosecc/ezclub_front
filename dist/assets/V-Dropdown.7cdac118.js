var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;import{_ as n}from"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import{D as s,E as i,d as l,ac as d,r as c,i as p,j as u,L as g,F as f,l as y,H as v,I as m}from"./vendor.84e48f7c.js";import{u as b}from"./useDropdown.3858e0aa.js";s("data-v-32397c58");const w={key:0},j={class:"dropdown-menu",role:"menu"},O={class:"dropdown-content"};i();var k=l({expose:[],props:{title:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","info","success","warning","danger"].indexOf(e)||(console.warn(`V-Dropdown: invalid "${e}" color. Should be primary, info, success, warning, danger or undefined`),!1)},icon:{type:String,default:void 0},up:{type:Boolean,default:!1},right:{type:Boolean,default:!1},modern:{type:Boolean,default:!1},spaced:{type:Boolean,default:!1}},setup(e){const s=e,{expose:i}=d(),l=c(null),k=b(l);return i(((e,n)=>{for(var s in n||(n={}))r.call(n,s)&&a(e,s,n[s]);if(o)for(var s of o(n))t.call(n,s)&&a(e,s,n[s]);return e})({},k)),(e,o)=>{const r=n;return p(),u("div",{ref:l,class:[[s.right&&"is-right",s.up&&"is-up",s.icon&&"is-dots",s.modern&&"is-modern",s.spaced&&"is-spaced"],"dropdown"]},[g(e.$slots,"button",f(k),(()=>[s.icon?(p(),u("a",{key:0,class:"is-trigger dropdown-trigger",onClick:o[1]||(o[1]=(...e)=>f(k).toggle&&f(k).toggle(...e))},[y(r,{icon:s.icon},null,8,["icon"])])):(p(),u("a",{key:1,class:["is-trigger button dropdown-trigger",[s.color&&`is-${s.color}`]],onClick:o[2]||(o[2]=(...e)=>f(k).toggle&&f(k).toggle(...e))},[s.title?(p(),u("span",w,v(s.title),1)):m("v-if",!0),y("span",{class:[!s.modern&&"base-caret",s.modern&&"base-caret"]},[f(k).isOpen?(p(),u(r,{key:1,icon:"fa:angle-up"})):(p(),u(r,{key:0,icon:"fa:angle-down"}))],2)],2))]),!0),y("div",j,[y("div",O,[g(e.$slots,"content",f(k),void 0,!0)])])],2)}}});k.__scopeId="data-v-32397c58";export{k as _};
