import{A as a}from"./index.5656e9e1.js";import{r as t,b as e}from"./vendor.a238d640.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),l=e((()=>i.value)),c=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),l),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),c),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),x=async()=>(await r(),await d(),await w(),await g(),{cities:v.value,states:l.value,contries:c.value,taxes:o.value});export{d as a,w as b,v as c,c as d,x as e,g as f,r as g,l as s,o as t};
