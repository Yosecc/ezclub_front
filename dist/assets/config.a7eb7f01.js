import{A as a}from"./index.fc85b2ef.js";import{r as t,b as e}from"./vendor.4454b83d.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),c=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),f=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),g=async()=>(await r(),await d(),await w(),await f(),{cities:v.value,states:c.value,contries:l.value,taxes:o.value});export{d as a,w as b,v as c,l as d,g as e,f,r as g,c as s};
