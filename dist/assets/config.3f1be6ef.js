import{A as a}from"./index.8761bcab.js";import{r as t,c as e}from"./vendor.2a366383.js";const s=t([]),i=t([]),n=t([]),c=t([]),u=e((()=>s.value)),v=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>c.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),u),w=async()=>(await a.get("states").then((a=>{i.value=a.data})),v),d=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{c.value=a.data.taxes})),o),x=async()=>(await r(),await w(),await d(),await g(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{l as a,r as b,u as c,w as d,d as e,g as f,x as g,v as s,o as t};
