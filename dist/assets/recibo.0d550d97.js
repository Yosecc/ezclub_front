import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.9e06e290.js";import{A as e}from"./index.80cb2235.js";import{d as s,H as a,o,h as r,k as n,ae as c,B as d,F as i,D as p,P as l}from"./vendor.7aabbf00.js";import"./V-Placeload.6188fd5c.js";const u=c();d("data-v-de601eb0");const f={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=i("Print");p();var b=s({expose:[],setup(s){const c=l();a((async()=>{let t=c.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const d=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",f,[n("div",m,[n(a,{onClick:d},{default:u((()=>[v])),_:1})])])}}});b.__scopeId="data-v-de601eb0";export default b;
