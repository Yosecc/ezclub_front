import{A as a}from"./index.8b775b30.js";import{r as t,b as e}from"./vendor.e3a29b40.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),l=e((()=>i.value)),c=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),w=async()=>(await a.get("states").then((a=>{i.value=a.data})),l),d=async()=>(await a.get("countries").then((a=>{n.value=a.data})),c),b=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),g=async()=>(await r(),await w(),await d(),await b(),{cities:v.value,states:l.value,contries:c.value,taxes:o.value});export{c as a,r as b,v as c,w as d,d as e,b as f,g,l as s,o as t};
