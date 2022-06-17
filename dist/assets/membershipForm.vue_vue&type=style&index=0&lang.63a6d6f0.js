var e=Object.defineProperty,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(s,a,t)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,n=(e,n)=>{for(var o in n||(n={}))a.call(n,o)&&l(e,o,n[o]);if(s)for(var o of s(n))t.call(n,o)&&l(e,o,n[o]);return e};import{_ as o}from"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import{_ as i}from"./formLayaut.vue_vue&type=style&index=0&lang.fe212a1d.js";import{d as r,b as p,w as c,r as u,o as d,h as m,E as f,P as v,a6 as b,j as h,k as y}from"./vendor.19da945b.js";import{i as g,s as j,f as _,c as E,d as O,b as w,n as A}from"./Memberships.2c087b30.js";import{g as S}from"./Diciplines.c1363d1d.js";import{p as $,h as x,n as L,a as P,g as k}from"./index.1986d795.js";const D={class:"columns is-multiline"},q={class:"column is-12"},B={class:"column is-6"},I={class:"column is-6"},M={class:"column is-12"},z={class:"column is-12"};var C=r({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},isLoading:{type:Boolean,default:!1}},setup(e){const s=e,a=v(),t=b(),l=p((()=>"create"==s.type?{title:"Add a new membership",subtitle:"Add information for a new club membership"}:{title:"Edit membership",subtitle:"Edit information for a club membership"})),r=p((()=>g.find((e=>"locations_options"==e.name)))),C=p((()=>g.find((e=>"locations"==e.name))));c(C.value,(e=>{F(e)}));const F=e=>{let a=[];e.model.length>0&&(e.model.forEach((t=>{let l=e.values.find((e=>e.id==t));"create"==s.type&&a.push({name:"locationsSaleOrAccess",value:l.id,placeholder:l.name,values:[{placeholder:"Access",name:"access",model:["access"]},{placeholder:"Sale",name:"sale",model:["sale"]}]})})),P(g,"locations_options",a)),S(C.value.model).then((e=>{P(g,"diciplines",e.data),k(g,"diciplines").values.push({id:0,name:"All"})}))};p((()=>g.find((e=>"diciplines"==e.name))));const G=u(!1),H=()=>{G.value=!0;let e=n(n(n(n(n({},$(g)),$(E)),$(O)),$(A)),$(w)),l=[];"create"==s.type&&e.locations.length>0&&(e.locations.forEach((e=>{let s=r.value.values.find((s=>s.value==e));l.push({id:e,access:s.values.find((e=>"access"==e.name)).model.length?1:0,sale:s.values.find((e=>"sale"==e.name)).model.length?1:0})})),e.locations=l,delete e.locations_options),x.value||("create"==s.type?j(e).then((e=>{G.value=!1,t.back()})).catch((e=>{if(G.value=!1,"string"!=typeof e.response.data)for(var s in e.response.data)e.response.data[s].forEach((e=>{L.error(`${e}: ${s}`)}));else L.error(`${e.response.data}`)})):_(a.query.id,e).then((e=>{L.success("Success"),G.value=!1})).catch((e=>{if(G.value=!1,"string"!=typeof e.response.data)for(var s in e.response.data)e.response.data[s].forEach((e=>{L.error(`${e}: ${s}`)}));else L.error(`${e.response.data}`)})))};return(a,t)=>{const n=o,r=i;return d(),m(r,{buttons:s.buttons,titles:f(l),"is-loading":e.isLoading,"is-loader-active":G.value,onSaveData:H},{default:h((()=>[y("div",D,[y("div",q,[y(n,{"inputs-step":f(g)},null,8,["inputs-step"])]),y("div",B,[y(n,{"inputs-step":f(E)},null,8,["inputs-step"])]),y("div",I,[y(n,{"inputs-step":f(O)},null,8,["inputs-step"])]),y("div",M,[y(n,{"inputs-step":f(w)},null,8,["inputs-step"])]),y("div",z,[y(n,{"inputs-step":f(A)},null,8,["inputs-step"])])])])),_:1},8,["buttons","titles","is-loading","is-loader-active"])}}});export{C as _};
