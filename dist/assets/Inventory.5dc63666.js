import{A as a}from"./index.1d7f2af1.js";import{r as o}from"./vendor.19da945b.js";const n=o([]),r=o(null),e=async o=>{if(!o)return void console.error("la locacion es requerida");const r=await a.get(`inventory?location=${o}`);return n.value=r.data,r},t=async()=>{if(!r.value)return void console.error("la locacion es requerida");return await a.post("inventory",{locations_id:r.value})},s=async o=>await a.post(`inventory/close_inventory/${o}`),i=o({}),c=async o=>{const n=await a.get(`inventory/${o}`);return i.value=n.data,n},l=async o=>await a.post(`inventory_products/${i.value.id}`,o);export{c as a,i as b,s as c,l as d,e as g,n as i,r as l,t as s};