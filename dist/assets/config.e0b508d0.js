import{A as a}from"./index.2d583c73.js";import{r as t,b as e}from"./vendor.7d5213a2.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),c=e((()=>i.value)),l=e((()=>n.value)),d=e((()=>u.value)),o=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),r=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),l),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),d),x=async()=>(await o(),await r(),await w(),await g(),{cities:v.value,states:c.value,contries:l.value,taxes:d.value});export{r as a,w as b,v as c,l as d,x as e,g as f,o as g,c as s};
