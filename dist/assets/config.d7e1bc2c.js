import{A as a}from"./index.f48ba294.js";import{r as t,b as e}from"./vendor.41bfc188.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),c=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),w=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),d=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),f=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),g=async()=>(await r(),await w(),await d(),await f(),{cities:v.value,states:c.value,contries:l.value,taxes:o.value});export{w as a,d as b,v as c,l as d,g as e,f,r as g,c as s};
