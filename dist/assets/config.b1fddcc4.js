import{A as a}from"./index.d2859fa6.js";import{r as t,c as e}from"./vendor.42a295ea.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),c=e((()=>i.value)),l=e((()=>n.value)),o=e((()=>u.value)),r=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),d=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),o),x=async()=>(await r(),await d(),await w(),await g(),{cities:v.value,states:c.value,contries:l.value,taxes:o.value});export{l as a,r as b,v as c,d,w as e,g as f,x as g,c as s,o as t};
