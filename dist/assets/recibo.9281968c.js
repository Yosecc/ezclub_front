import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{A as e}from"./index.59a944bb.js";import{d as s,G as a,o,h as r,k as n,ae as c,A as d,E as i,B as p,O as f}from"./vendor.d0c8bc4f.js";import"./V-Placeload.ba28fd33.js";const l=c();d("data-v-2e86b2f0");const u={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=i("Print");p();var b=s({expose:[],setup(s){const c=f();a((async()=>{let t=c.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const d=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",u,[n("div",m,[n(a,{onClick:d},{default:l((()=>[v])),_:1})])])}}});b.__scopeId="data-v-2e86b2f0";export default b;