import{A as a}from"./index.298ad949.js";import{r as t,b as e}from"./vendor.41bfc188.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),c=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),x=async()=>(await r(),await d(),await w(),await g(),{cities:v.value,states:c.value,contries:l.value,taxes:o.value});export{d as a,w as b,v as c,l as d,x as e,g as f,r as g,c as s};
