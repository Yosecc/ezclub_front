import{d as e,o as a,h as t,a1 as d}from"./vendor.19da945b.js";const l=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var n=e({expose:[],props:{width:{type:String,default:"100%",validator:e=>(null===e.match(l)&&console.warn(`V-Placeload: invalid "${e}" width. Should be a valid css unit value.`),!0)},height:{type:String,default:"10px",validator:e=>(null===e.match(l)&&console.warn(`V-Placeload: invalid "${e}" height. Should be a valid css unit value.`),!0)},disabled:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup(e){const l=e;return d((a=>({"8ed867cc":l.width,"56ece995":e.height}))),(e,d)=>(a(),t("div",{class:["content-shape",[l.centered&&"is-centered",!l.disabled&&"loads"]]},null,2))}});n.__scopeId="data-v-f1183fc6";export{n as _};
