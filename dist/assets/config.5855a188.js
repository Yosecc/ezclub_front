import{r as a,c as t}from"./vendor.b96c0b62.js";import{A as e}from"./index.91b9a95b.js";const s=a([]),i=a([]),n=a([]),c=a([]),u=t((()=>s.value)),v=t((()=>i.value)),l=t((()=>n.value)),o=t((()=>c.value)),r=async()=>(await e.get("cities").then((a=>{s.value=a.data})),u),w=async()=>(await e.get("states").then((a=>{i.value=a.data})),v),d=async()=>(await e.get("countries").then((a=>{n.value=a.data})),l),b=async()=>(await e.get("taxes").then((a=>{c.value=a.data.taxes})),o),g=async()=>(await r(),await w(),await d(),await b(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{w as a,d as b,u as c,l as d,g as e,b as f,r as g,v as s};
