import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{d as s,O as a,o as e,i as o,j as r,l as n,a3 as c,D as i,G as d,E as p}from"./vendor.84e48f7c.js";import{A as l}from"./index.160bf48b.js";import"./V-Placeload.8fe4e440.js";const f=c();i("data-v-5786a320");const u={class:"p-0"},m={id:"print",class:"justify-content-center d-flex w-100 mt-4"},v=d("Print");p();var j=s({expose:[],setup(s){const c=a();e((async()=>{let t=c.query.id;await l.get(`ticket_membership/${t}`).then((t=>{console.log(t.data)})).catch((t=>{notyf.error(t.response.data)}))}));const i=()=>{window.print()};return(s,a)=>{const e=t;return o(),r("div",u,[n("div",m,[n(e,{onClick:i},{default:f((()=>[v])),_:1})])])}}});j.__scopeId="data-v-5786a320";export default j;
