import{A as a}from"./index.a01cdf46.js";import{r as t,b as e}from"./vendor.6c78dc37.js";const s=t([]),i=t([]),c=t([]),n=t([]),u=e((()=>s.value)),v=e((()=>i.value)),l=e((()=>c.value)),d=e((()=>n.value)),o=async()=>(await a.get("cities").then((a=>{s.value=a.data})),u),r=async()=>(await a.get("states").then((a=>{i.value=a.data})),v),w=async()=>(await a.get("countries").then((a=>{c.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{n.value=a.data.taxes})),d),x=async()=>(await o(),await r(),await w(),await g(),{cities:u.value,states:v.value,contries:l.value,taxes:d.value});export{r as a,w as b,u as c,l as d,x as e,g as f,o as g,v as s};
