import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{A as a}from"./index.607eaa23.js";import{d as e,o as s,h as o,i as r,l as n,af as d,D as i,G as c,E as p,P as l}from"./vendor.7d5213a2.js";import"./V-Placeload.d3fba449.js";const u=d();i("data-v-de601eb0");const f={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=c("Print");p();var _=e({expose:[],setup(e){const d=l();s((async()=>{let t=d.query.id;await a.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const i=()=>{window.print()};return(a,e)=>{const s=t;return o(),r("div",f,[n("div",m,[n(s,{onClick:i},{default:u((()=>[v])),_:1})])])}}});_.__scopeId="data-v-de601eb0";export default _;
