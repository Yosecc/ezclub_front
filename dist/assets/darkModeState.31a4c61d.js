import{a5 as s,f as a,b as e,g as o}from"./vendor.3e3390b7.js";const t=s(),v=a("color-schema","auto"),l=e({get:()=>"auto"===v.value?t.value:"dark"===v.value,set(s){s===t.value?v.value="auto":v.value=s?"dark":"light"}});o((()=>{const s=document.body;l.value?s.classList.add("is-dark"):s.classList.remove("is-dark")}));const i=e((()=>l.value?"/@src/assets/logo_positive.svg":"/@src/assets/logo_negative.svg"));e((()=>l.value?"/@src/assets/iso_positive.svg":"/@src/assets/iso_negative.svg"));export{l as i,i as l};
