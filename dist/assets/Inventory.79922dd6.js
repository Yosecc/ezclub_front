import{A as a}from"./index.958da6e5.js";import{r as o}from"./vendor.5767c02e.js";const e=o([]),n=o(null),r=async o=>{if(!o)return void console.error("la locacion es requerida");const n=await a.get(`inventory?location=${o}`);return e.value=n.data,n},t=async()=>{if(!n.value)return void console.error("la locacion es requerida");return await a.post("inventory",{locations_id:n.value})},s=async o=>await a.post(`inventory/close_inventory/${o}`),i=o({}),c=async o=>{const e=await a.get(`inventory/${o}`);return i.value=e.data,e},l=async o=>await a.post(`inventory_products/${i.value.id}`,o);export{c as a,i as b,s as c,l as d,r as g,e as i,n as l,t as s};
