import{r as a,b as t}from"./vendor.0a671356.js";import{A as e}from"./index.9c671a97.js";const s=a([]),i=a([]),n=a([]),u=a([]),v=t((()=>s.value)),c=t((()=>i.value)),l=t((()=>n.value)),o=t((()=>u.value)),r=async()=>(await e.get("cities").then((a=>{s.value=a.data})),v),w=async()=>(await e.get("states").then((a=>{i.value=a.data})),c),d=async()=>(await e.get("countries").then((a=>{n.value=a.data})),l),g=async()=>(await e.get("taxes").then((a=>{u.value=a.data.taxes})),o),x=async()=>(await r(),await w(),await d(),await g(),{cities:v.value,states:c.value,contries:l.value,taxes:o.value});export{w as a,d as b,v as c,l as d,x as e,g as f,r as g,c as s,o as t};
