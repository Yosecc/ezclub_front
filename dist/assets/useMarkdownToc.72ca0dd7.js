import{D as s,E as a,d as t,O as l,c as o,o as e,i as c,j as i,l as r,S as n,U as d,F as h,H as p,r as u,g as f}from"./vendor.b96c0b62.js";import{V as v}from"./vue-scrollto.599f0d9d.js";s("data-v-49561080");const k={class:"toc"},m=r("strong",{class:"toc-title"},"Contents",-1),C=r("span",null,"Back To Top",-1);a();var T=t({expose:[],props:{toc:{type:Array}},setup(s){const a=l(),t=o((()=>s=>`#${s}`===a.hash)),u=s=>{v.scrollTo(s?`#${s}`:"#app",500,{offset:-30})};return e((()=>{a.hash&&!a.hash.startsWith("#&")?v.scrollTo(a.hash,0,{offset:-30}):v.scrollTo("#app",0,{offset:-30})})),(a,l)=>(c(),i("div",k,[m,r("ul",null,[(c(!0),i(n,null,d(s.toc,(s=>(c(),i("li",{key:s.id,class:[`toc-level-${s.level}`]},[r("a",{href:`#${s.id}`,class:[h(t)(s.id)&&"is-active"],onClick:()=>u(s.id)},p(s.title),11,["href","onClick"])],2)))),128)),r("li",null,[r("a",{class:"back-to-top",href:"#",onClick:l[1]||(l[1]=()=>u())},[C])])])]))}});T.__scopeId="data-v-49561080";const j=["h1[id]","h2[id]","h3[id]","h4[id]","h5[id]","h6[id]"];function y(s){const a=u([]);return f((()=>{if(s.value){s.value.querySelectorAll(j.join(", ")).forEach((s=>{a.value.push({id:s.id,level:parseInt(s.tagName.replace(/[a-z]+/i,"")),title:s.textContent||""})}))}})),a}export{T as _,y as u};
