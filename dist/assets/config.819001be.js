import{A as a}from"./index.cc4d62c2.js";import{r as t,b as e}from"./vendor.41bfc188.js";const s=t([]),i=t([]),c=t([]),n=t([]),u=e((()=>s.value)),v=e((()=>i.value)),l=e((()=>c.value)),o=e((()=>n.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),u),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),v),w=async()=>(await a.get("countries").then((a=>{c.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{n.value=a.data.taxes})),o),x=async()=>(await r(),await d(),await w(),await g(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{d as a,w as b,u as c,l as d,x as e,g as f,r as g,v as s};
