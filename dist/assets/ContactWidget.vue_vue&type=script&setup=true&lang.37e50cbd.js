import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import{d as t,i as a,j as i,l as r,H as n}from"./vendor.b96c0b62.js";const s={class:"widget-content"},l={class:"left"},u={class:"right"},o={class:"company"},d={class:"contact-info"},p=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"},null,-1),c=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:phone"},null,-1),m={class:"email"};var f=t({expose:[],props:{picture:{type:String,required:!0,default:"https://via.placeholder.com/150x150"},username:{type:String,required:!0,default:"John D."},email:{type:String,required:!0,default:"john@gmail.com"},company:{type:String,required:!0,default:"Acme Inc."},position:{type:String,required:!0,default:"Developer"},location:{type:String,required:!0,default:"New York, NY"},phone:{type:String,required:!0,default:"+1 555 5554"},straight:{type:Boolean,default:!1},reversed:{type:Boolean,default:!1},squared:{type:Boolean,default:!1}},setup:t=>(f,g)=>{const h=e;return a(),i("div",{class:["widget contact-widget",[t.straight&&"is-straight",t.reversed&&"is-reversed"]]},[r("div",s,[r("div",l,[r(h,{size:"medium",picture:t.picture,squared:t.squared},null,8,["picture","squared"])]),r("div",u,[r("h3",null,n(t.username),1),r("div",o,[r("span",null,n(t.company),1),r("p",null,n(t.position),1)]),r("div",d,[r("span",null,[p,r("span",null,n(t.location),1)]),r("span",null,[c,r("span",null,n(t.phone),1)])])])]),r("p",m,n(t.email),1)],2)}});export{f as _};
