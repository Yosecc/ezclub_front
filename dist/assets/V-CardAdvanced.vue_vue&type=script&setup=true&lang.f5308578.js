import{d as a,o as s,h as d,k as r,H as o}from"./vendor.2054a2d2.js";const e={class:"card-head"},t={class:"left"},l={class:"right"},i={class:"card-body"},c={class:"card-foot"},n={class:"left"},v={class:"right"};var u=a({expose:[],props:{radius:{type:String,default:"regular",validator:a=>-1!==["regular","smooth","rounded"].indexOf(a)||(console.warn(`V-CardAdvanced: invalid "${a}" radius. Should be regular, smooth or rounded`),!1)}},setup:a=>(u,h)=>(s(),d("div",{class:["regular"===a.radius&&"s-card-advanced","smooth"===a.radius&&"r-card-advanced","rounded"===a.radius&&"l-card-advanced"]},[r("div",e,[r("div",t,[o(u.$slots,"header-left")]),r("div",l,[o(u.$slots,"header-right")])]),r("div",i,[o(u.$slots,"content")]),r("div",c,[r("div",n,[o(u.$slots,"footer-left")]),r("div",v,[o(u.$slots,"footer-right")])])],2))});export{u as _};