import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.5d930131.js";import{A as e}from"./index.1320c21c.js";import{d as s,o as a,h as o,i as r,l as n,af as c,D as d,G as i,E as p,P as l}from"./vendor.97519523.js";import"./V-Placeload.00784b47.js";const u=c();d("data-v-de601eb0");const m={class:"p-0"},f={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=i("Print");p();var _=s({expose:[],setup(s){const c=l();a((async()=>{let t=c.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const d=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",m,[n("div",f,[n(a,{onClick:d},{default:u((()=>[v])),_:1})])])}}});_.__scopeId="data-v-de601eb0";export default _;
