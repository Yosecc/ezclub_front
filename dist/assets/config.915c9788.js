import{r as a,b as t}from"./vendor.d343baf9.js";import{A as e}from"./index.c9faec89.js";const s=a([]),i=a([]),n=a([]),c=a([]),u=t((()=>s.value)),v=t((()=>i.value)),l=t((()=>n.value)),o=t((()=>c.value)),r=async()=>(await e.get("cities").then((a=>{s.value=a.data})),u),d=async()=>(await e.get("states").then((a=>{i.value=a.data})),v),w=async()=>(await e.get("countries").then((a=>{n.value=a.data})),l),f=async()=>(await e.get("taxes").then((a=>{c.value=a.data.taxes})),o),g=async()=>(await r(),await d(),await w(),await f(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{d as a,w as b,u as c,l as d,g as e,f,r as g,v as s};
