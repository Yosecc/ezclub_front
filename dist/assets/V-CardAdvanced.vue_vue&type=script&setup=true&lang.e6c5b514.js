import{d as s,o as a,h as d,k as r,K as o}from"./vendor.7d033f41.js";const e={class:"card-head"},t={class:"left"},l={class:"right"},i={class:"card-body"},c={class:"card-foot"},n={class:"left"},v={class:"right"};var u=s({expose:[],props:{radius:{type:String,default:"regular",validator:s=>-1!==["regular","smooth","rounded"].indexOf(s)||(console.warn(`V-CardAdvanced: invalid "${s}" radius. Should be regular, smooth or rounded`),!1)}},setup:s=>(u,h)=>(a(),d("div",{class:["regular"===s.radius&&"s-card-advanced","smooth"===s.radius&&"r-card-advanced","rounded"===s.radius&&"l-card-advanced"]},[r("div",e,[r("div",t,[o(u.$slots,"header-left")]),r("div",l,[o(u.$slots,"header-right")])]),r("div",i,[o(u.$slots,"content")]),r("div",c,[r("div",n,[o(u.$slots,"footer-left")]),r("div",v,[o(u.$slots,"footer-right")])])],2))});export{u as _};
