import{A as a}from"./index.e01ed873.js";import{r as e,b as t}from"./vendor.4454b83d.js";const s=e([]),i=e([]),n=e([]),u=e([]),v=t((()=>s.value)),l=t((()=>i.value)),c=t((()=>n.value)),d=t((()=>u.value)),o=async()=>(await a.get("cities").then((a=>{s.value=a.data})),v),r=async()=>(await a.get("states").then((a=>{i.value=a.data})),l),w=async()=>(await a.get("countries").then((a=>{n.value=a.data})),c),g=async()=>(await a.get("taxes").then((a=>{u.value=a.data.taxes})),d),x=async()=>(await o(),await r(),await w(),await g(),{cities:v.value,states:l.value,contries:c.value,taxes:d.value});export{r as a,w as b,v as c,c as d,x as e,g as f,o as g,l as s};
