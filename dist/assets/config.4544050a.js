import{A as a}from"./index.ca56f9d7.js";import{r as t,b as e}from"./vendor.41bfc188.js";const s=t([]),i=t([]),n=t([]),c=t([]),u=e((()=>s.value)),v=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>c.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),u),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),v),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),f=async()=>(await a.get("taxes").then((a=>{c.value=a.data.taxes})),o),g=async()=>(await r(),await d(),await w(),await f(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{d as a,w as b,u as c,l as d,g as e,f,r as g,v as s};