import{X as s,Y as a,d as t,b as o,A as l,o as e,h as c,k as i,N as r,O as n,K as h,B as d,J as p,r as f,g as u}from"./vendor.494d8f4f.js";import{V as v}from"./vue-scrollto.db32488c.js";s("data-v-48f05996");const k={class:"toc"},m=i("strong",{class:"toc-title"},"Contents",-1),C=i("span",null,"Back To Top",-1);a();var T=t({expose:[],props:{toc:{type:Array}},setup(s){const a=h(),t=o((()=>s=>`#${s}`===a.hash)),f=s=>{v.scrollTo(s?`#${s}`:"#app",500,{offset:-30})};return l((()=>{a.hash&&!a.hash.startsWith("#&")?v.scrollTo(a.hash,0,{offset:-30}):v.scrollTo("#app",0,{offset:-30})})),(a,o)=>(e(),c("div",k,[m,i("ul",null,[(e(!0),c(r,null,n(s.toc,(s=>(e(),c("li",{key:s.id,class:[`toc-level-${s.level}`]},[i("a",{href:`#${s.id}`,class:[d(t)(s.id)&&"is-active"],onClick:()=>f(s.id)},p(s.title),11,["href","onClick"])],2)))),128)),i("li",null,[i("a",{class:"back-to-top",href:"#",onClick:o[1]||(o[1]=()=>f())},[C])])])]))}});T.__scopeId="data-v-48f05996";const y=["h1[id]","h2[id]","h3[id]","h4[id]","h5[id]","h6[id]"];function $(s){const a=f([]);return u((()=>{if(s.value){s.value.querySelectorAll(y.join(", ")).forEach((s=>{a.value.push({id:s.id,level:parseInt(s.tagName.replace(/[a-z]+/i,"")),title:s.textContent||""})}))}})),a}export{T as _,$ as u};
