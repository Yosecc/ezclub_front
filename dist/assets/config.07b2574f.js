import{A as a}from"./index.f73f4f00.js";import{r as t,b as e}from"./vendor.4454b83d.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),l=e((()=>i.value)),c=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),l),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),c),f=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),g=async()=>(await r(),await d(),await w(),await f(),{cities:v.value,states:l.value,contries:c.value,taxes:o.value});export{d as a,w as b,v as c,c as d,g as e,f,r as g,l as s};
