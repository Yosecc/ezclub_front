import{A as a}from"./index.f07d4d50.js";import{r as t,b as e}from"./vendor.3e3390b7.js";const s=t([]),i=t([]),n=t([]),u=t([]),v=e((()=>s.value)),l=e((()=>i.value)),c=e((()=>n.value)),d=e((()=>u.value)),o=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),r=async()=>(await a.get("states").then((a=>{i.value=a.data})),l),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),c),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),d),x=async()=>(await o(),await r(),await w(),await g(),{cities:v.value,states:l.value,contries:c.value,taxes:d.value});export{r as a,w as b,v as c,c as d,x as e,g as f,o as g,l as s};
