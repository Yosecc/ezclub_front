import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import{d as a,o as t,i,k as r,G as n}from"./vendor.5bccebbb.js";const s={class:"widget-content"},l={class:"left"},o={class:"right"},u={class:"company"},d={class:"contact-info"},p=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"},null,-1),c=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:phone"},null,-1),m={class:"email"};var f=a({expose:[],props:{picture:{type:String,required:!0,default:"https://via.placeholder.com/150x150"},username:{type:String,required:!0,default:"John D."},email:{type:String,required:!0,default:"john@gmail.com"},company:{type:String,required:!0,default:"Acme Inc."},position:{type:String,required:!0,default:"Developer"},location:{type:String,required:!0,default:"New York, NY"},phone:{type:String,required:!0,default:"+1 555 5554"},straight:{type:Boolean,default:!1},reversed:{type:Boolean,default:!1},squared:{type:Boolean,default:!1}},setup:a=>(f,g)=>{const h=e;return t(),i("div",{class:["widget contact-widget",[a.straight&&"is-straight",a.reversed&&"is-reversed"]]},[r("div",s,[r("div",l,[r(h,{size:"medium",picture:a.picture,squared:a.squared},null,8,["picture","squared"])]),r("div",o,[r("h3",null,n(a.username),1),r("div",u,[r("span",null,n(a.company),1),r("p",null,n(a.position),1)]),r("div",d,[r("span",null,[p,r("span",null,n(a.location),1)]),r("span",null,[c,r("span",null,n(a.phone),1)])])])]),r("p",m,n(a.email),1)],2)}});export{f as _};
