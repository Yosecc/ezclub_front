import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{A as e}from"./index.f93c57bf.js";import{d as s,o as a,h as o,i as r,l as n,a3 as c,D as d,G as i,E as p,P as l}from"./vendor.4454b83d.js";import"./V-Placeload.28979271.js";const u=c();d("data-v-de601eb0");const f={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=i("Print");p();var b=s({expose:[],setup(s){const c=l();a((async()=>{let t=c.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const d=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",f,[n("div",m,[n(a,{onClick:d},{default:u((()=>[v])),_:1})])])}}});b.__scopeId="data-v-de601eb0";export default b;