import{_ as e}from"./V-Placeload.e8ccb55e.js";import{d as a,o as t,i as l,Q as d,R as n,k as i}from"./vendor.0a671356.js";const o={class:"content-shape-group"},s=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var c=a({expose:[],props:{width:{type:String,default:"100%",validator:e=>(null===e.match(s)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lastLineWidth:{type:String,default:"100%",validator:e=>(null===e.match(s)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lines:{type:Number,default:2},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(a){const s=a;return(a,c)=>{const r=e;return t(),l("div",o,[(t(!0),l(d,null,n(s.lines-1,(e=>(t(),l(r,{width:s.width,key:e,centered:s.centered},null,8,["width","centered"])))),128)),i(r,{width:s.lastLineWidth,centered:s.centered},null,8,["width","centered"])])}}});export{c as _};
