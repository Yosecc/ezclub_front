import{_ as e}from"./V-Placeload.c195e33d.js";import{d as t,o as a,h as l,Q as d,R as n,k as o}from"./vendor.c636f33b.js";const s={class:"content-shape-group"},i=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var c=t({expose:[],props:{width:{type:String,default:"100%",validator:e=>(null===e.match(i)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lastLineWidth:{type:String,default:"100%",validator:e=>(null===e.match(i)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lines:{type:Number,default:2},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(t){const i=t;return(t,c)=>{const r=e;return a(),l("div",s,[(a(!0),l(d,null,n(i.lines-1,(e=>(a(),l(r,{width:i.width,key:e,centered:i.centered},null,8,["width","centered"])))),128)),o(r,{width:i.lastLineWidth,centered:i.centered},null,8,["width","centered"])])}}});export{c as _};
