import{d as e,o as a,h as d,$ as t}from"./vendor.3b9a49d2.js";const l=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var n=e({expose:[],props:{width:{type:String,default:"100%",validator:e=>(null===e.match(l)&&console.warn(`V-Placeload: invalid "${e}" width. Should be a valid css unit value.`),!0)},height:{type:String,default:"10px",validator:e=>(null===e.match(l)&&console.warn(`V-Placeload: invalid "${e}" height. Should be a valid css unit value.`),!0)},disabled:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup(e){const l=e;return t((a=>({"22c9dd45":l.width,"7b54ecec":e.height}))),(e,t)=>(a(),d("div",{class:["content-shape",[l.centered&&"is-centered",!l.disabled&&"loads"]]},null,2))}});n.__scopeId="data-v-76e0cf44";export{n as _};
