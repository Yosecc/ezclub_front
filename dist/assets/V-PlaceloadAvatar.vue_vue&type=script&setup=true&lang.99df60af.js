import{d as e,h as d,i as l}from"./vendor.3e3390b7.js";var a=e({expose:[],props:{size:{type:String,default:void 0,validator:e=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(e)||(console.warn(`V-PlaceloadAvatar: invalid "${e}" size. Should be small, medium, large, big, xl or undefined`),!1)},rounded:{type:String,default:"full",validator:e=>-1!==["full","xs","sm","md","lg","xl"].indexOf(e)||(console.warn(`V-PlaceloadAvatar: invalid "${e}" rounded. Should be xs, sm, md, lg, xl or full`),!1)},centered:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){const a=e;return(e,o)=>(d(),l("div",{class:["placeload-avatar",[!a.disabled&&"loads",a.size&&`is-${a.size}`,a.centered&&"is-centered",a.rounded&&`is-rounded-${a.rounded}`]]},null,2))}});export{a as _};
