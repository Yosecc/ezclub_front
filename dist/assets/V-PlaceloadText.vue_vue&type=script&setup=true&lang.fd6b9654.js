import{_ as e}from"./V-Placeload.01e1da42.js";import{d as a,o as t,c as l,L as d,N as n,e as o}from"./vendor.777d9173.js";const s={class:"content-shape-group"},i=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var r=a({expose:[],props:{width:{type:String,default:"100%",validator:e=>(null===e.match(i)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lastLineWidth:{type:String,default:"100%",validator:e=>(null===e.match(i)&&console.warn(`V-PlaceloadText: invalid "${e}" placeload. Should be a valid css unit value.`),!0)},lines:{type:Number,default:2},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(a){const i=a;return(a,r)=>{const c=e;return t(),l("div",s,[(t(!0),l(d,null,n(i.lines-1,(e=>(t(),l(c,{width:i.width,key:e,centered:i.centered},null,8,["width","centered"])))),128)),o(c,{width:i.lastLineWidth,centered:i.centered},null,8,["width","centered"])])}}});export{r as _};
