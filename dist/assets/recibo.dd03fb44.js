import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.b71f832b.js";import{A as e}from"./index.24bd633d.js";import{d as s,H as a,o,h as r,k as n,af as d,B as c,F as i,D as p,P as f}from"./vendor.41bfc188.js";import"./V-Placeload.f8b8ec60.js";const l=d();c("data-v-de601eb0");const u={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},b=i("Print");p();var v=s({expose:[],setup(s){const d=f();a((async()=>{let t=d.query.id;await e.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const c=()=>{window.print()};return(e,s)=>{const a=t;return o(),r("div",u,[n("div",m,[n(a,{onClick:c},{default:l((()=>[b])),_:1})])])}}});v.__scopeId="data-v-de601eb0";export default v;
