import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{A as e}from"./index.61d3e905.js";import{d as s,o as a,h as o,i as r,l as n,a3 as d,D as c,G as i,E as p,P as l}from"./vendor.4454b83d.js";import"./V-Placeload.28979271.js";const u=d();c("data-v-de601eb0");const m={class:"p-0"},f={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=i("Print");p();var _=s({expose:[],setup(s){const d=l();a((async()=>{let t=d.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const c=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",m,[n("div",f,[n(a,{onClick:c},{default:u((()=>[v])),_:1})])])}}});_.__scopeId="data-v-de601eb0";export default _;
