<<<<<<< HEAD:dist/assets/Inventory.47e6830f.js
import{A as a}from"./index.5855fd6a.js";import{r as o}from"./vendor.84e48f7c.js";const n=o([]),r=o(null),e=async o=>{if(!o)return void console.error("la locacion es requerida");const r=await a.get(`inventory?location=${o}`);return n.value=r.data,r},t=async()=>{if(!r.value)return void console.error("la locacion es requerida");return await a.post("inventory",{locations_id:r.value})},s=async o=>await a.post(`inventory/close_inventory/${o}`),i=o({}),c=async o=>{const n=await a.get(`inventory/${o}`);return i.value=n.data,n},l=async o=>await a.post(`inventory_products/${i.value.id}`,o);export{c as a,i as b,s as c,l as d,e as g,n as i,r as l,t as s};
=======
import{A as a}from"./index.fc85b2ef.js";import{r as o}from"./vendor.4454b83d.js";const n=o([]),r=o(null),e=async o=>{if(!o)return void console.error("la locacion es requerida");const r=await a.get(`inventory?location=${o}`);return n.value=r.data,r},t=async()=>{if(!r.value)return void console.error("la locacion es requerida");return await a.post("inventory",{locations_id:r.value})},s=async o=>await a.post(`inventory/close_inventory/${o}`),i=o({}),c=async o=>{const n=await a.get(`inventory/${o}`);return i.value=n.data,n},l=async o=>await a.post(`inventory_products/${i.value.id}`,o);export{c as a,i as b,s as c,l as d,e as g,n as i,r as l,t as s};
>>>>>>> 983790ce92d3afaf021ffc83a7bdeefcd7b23b25:dist/assets/Inventory.39289a95.js
