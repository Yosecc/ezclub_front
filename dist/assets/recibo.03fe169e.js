import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{A as e}from"./index.d32ed65a.js";import{d as a,o as s,h as o,i as r,l as d,af as n,D as i,G as c,E as p,P as l}from"./vendor.7d5213a2.js";import"./V-Placeload.d3fba449.js";const u=n();i("data-v-de601eb0");const f={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=c("Print");p();var _=a({expose:[],setup(a){const n=l();s((async()=>{let t=n.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const i=()=>{window.print()};return(e,a)=>{const s=t;return o(),r("div",f,[d("div",m,[d(s,{onClick:i},{default:u((()=>[v])),_:1})])])}}});_.__scopeId="data-v-de601eb0";export default _;