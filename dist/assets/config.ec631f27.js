import{A as a}from"./index.ce008232.js";import{r as t,c as e}from"./vendor.9b3dcac4.js";const s=t([]),i=t([]),c=t([]),n=t([]),u=e((()=>s.value)),v=e((()=>i.value)),l=e((()=>c.value)),o=e((()=>n.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),u),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),v),w=async()=>(await a.get("countries").then((a=>{c.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{n.value=a.data.taxes})),o),x=async()=>(await r(),await d(),await w(),await g(),{cities:u.value,states:v.value,contries:l.value,taxes:o.value});export{l as a,r as b,u as c,d,w as e,g as f,x as g,v as s,o as t};
