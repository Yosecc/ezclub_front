import{A as a}from"./index.eccf6e2f.js";import{r as s,b as e}from"./vendor.55fe8080.js";const t=s([]),i=s([]),n=s([]),r=e((()=>JSON.parse(JSON.stringify(t.value)))),c=e((()=>JSON.parse(JSON.stringify(i.value)))),f=e((()=>JSON.parse(JSON.stringify(n.value)))),g=async()=>(await a.get("cities").then((a=>{t.value=a.data})),r),v=async()=>(await a.get("states").then((a=>{i.value=a.data})),c),o=async()=>(await a.get("countries").then((a=>{n.value=a.data})),f),u=s([]),d=async()=>(await a.get("services_packs/get").then((a=>{u.value=a.data})),u);export{v as a,o as b,d as c,r as d,f as e,u as f,g,c as s};
