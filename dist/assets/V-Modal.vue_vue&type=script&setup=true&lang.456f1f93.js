import{d as e,r as o,g as a,a0 as l,o as s,i as t,k as n,G as d,L as c,a5 as i}from"./vendor.01c5c571.js";const r={class:"modal-content"},u={class:"modal-card"},m={class:"modal-card-head"},v=n("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),p={class:"inner-content"};var f=e({expose:[],props:{title:{type:String,required:!1},size:{type:String,default:void 0,validator:e=>-1!==[void 0,"small","medium","large","big"].indexOf(e)||(console.warn(`V-Modal: invalid "${e}" size. Should be small, medium, large, big or undefined`),!1)},actions:{type:String,default:void 0,validator:e=>-1!==[void 0,"center","right"].indexOf(e)||(console.warn(`V-Modal: invalid "${e}" actions. Should be center, right or undefined`),!1)},open:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},noscroll:{type:Boolean,default:!1},noclose:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:f}){const b=e,g=o(!1);return a((()=>{b.noscroll&&b.open?(document.documentElement.classList.add("no-scroll"),g.value=!0):g.value&&b.noscroll&&!b.open&&(document.documentElement.classList.remove("no-scroll"),g.value=!1)})),l((()=>{document.documentElement.classList.remove("no-scroll")})),(o,a)=>(s(),t(i,{to:"body"},[n("div",{class:[[e.open&&"is-active",e.size&&`is-${e.size}`],"modal v-modal"]},[n("div",{class:"modal-background v-modal-close",onClick:a[1]||(a[1]=()=>!1===e.noclose&&f("close"))}),n("div",r,[n("div",u,[n("header",m,[n("h3",null,d(e.title),1),n("button",{class:"v-modal-close ml-auto","aria-label":"close",onClick:a[2]||(a[2]=e=>f("close"))},[v])]),n("div",{class:["modal-card-body",[b.tabs&&"has-tabs"]]},[n("div",p,[c(o.$slots,"content")])],2),n("div",{class:["modal-card-foot",["center"===e.actions&&"is-centered","right"===e.actions&&"is-end"]]},[c(o.$slots,"cancel",{},(()=>[n("a",{class:["button v-button v-modal-close",[e.rounded&&"is-rounded"]],onClick:a[3]||(a[3]=e=>f("close"))}," Cancel ",2)])),c(o.$slots,"action")],2)])])],2)]))}});export{f as _};
