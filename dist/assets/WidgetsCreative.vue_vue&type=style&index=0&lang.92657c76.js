import{_ as e,a as t}from"./IllustrationWidget.vue_vue&type=script&setup=true&lang.39947d37.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{d as a,o as i,h as r,k as l,Q as o,R as n,a6 as u,F as d,D as c,j as p}from"./vendor.7d033f41.js";import{_ as v}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.7c026092.js";import{_ as g}from"./UIWidget.vue_vue&type=script&setup=true&lang.58f77d3e.js";import{_ as f}from"./V-Tag.vue_vue&type=script&setup=true&lang.fe421256.js";import{_ as m}from"./UIWidgetToolbarIcon.vue_vue&type=script&setup=true&lang.549d9d7f.js";import{a as b}from"./followers.e3342b9c.js";const h=u('<div class="field"><div class="control"><input type="text" class="input" placeholder="Search..."><button class="searcv-button"><i aria-hidden="true" class="iconify" data-icon="feather:search"></i></button></div></div>',1),w={class:"avatar-list"},y={class:"meta"};var k=a({expose:[],props:{avatars:{type:Array,required:!0},squared:{type:Boolean,default:!1},straight:{type:Boolean,default:!1}},setup:e=>(t,a)=>{const u=s;return i(),r("div",{class:["widget avatar-list-widget",[e.straight&&"is-straight"]]},[h,l("div",w,[(i(!0),r(o,null,n(e.avatars,(t=>(i(),r("div",{key:t.id,class:"avatar-list-item"},[l(u,{picture:t.picture,squared:e.squared},null,8,["picture","squared"]),l("div",y,[l("span",null,d(t.name),1)])])))),128))])],2)}});const _={class:"social-buttons"};var j=a({expose:[],props:{buttons:{type:Array,required:!0},currentTab:{type:Number,default:0},rounded:{type:Boolean,default:!1},straight:{type:Boolean,default:!1}},setup:e=>(t,s)=>(i(),r("div",{class:["widget social-buttons-widget",[e.straight&&"is-straight"]]},[l("div",_,[(i(!0),r(o,null,n(e.buttons,((t,s)=>(i(),r("div",{key:t.id,class:"social-button"},[l("a",{class:["inner-button is-facebook",[e.currentTab===s&&"is-active","is-"+t.network,e.rounded&&"is-rounded"]],onClick:t=>e.currentTab=s},[l("i",{"aria-hidden":"true",class:t.icon},null,2)],10,["onClick"])])))),128))])],2))});const q={class:"widget-toolbar"},C=l("div",{class:"left"},[l("h3",null,"Your Cart")],-1),x={class:"right"},A={class:"cart-items"},W={class:"meta"},K={class:"text"},T={class:"price"},B=l("div",{class:"cart-button"},[l("div",{class:"button v-button is-primary is-raised is-bold is-fullwidth"}," Start Checkout ")],-1);var Y=a({expose:[],props:{products:{type:Array,required:!0},straight:{type:Boolean,default:!1}},setup:e=>(t,a)=>{const u=f,c=s;return i(),r("div",{class:["cart-widget",[e.straight&&"is-straight"]]},[l("div",q,[C,l("div",x,[l(u,{label:e.products.length+" items",color:"orange",curved:""},null,8,["label"])])]),l("div",A,[(i(!0),r(o,null,n(e.products,(e=>(i(),r("div",{key:e.id,class:"cart-item"},[l(c,{picture:e.picture,size:"large",squared:""},null,8,["picture"]),l("div",W,[l("span",K,d(e.name),1),l("span",T,"$"+d(e.price),1)])])))),128))]),B],2)}});const F={class:"creative-list"},I={class:"meta"};var D=a({expose:[],props:{list:{type:Array,required:!0},squared:{type:Boolean,default:!1}},setup:e=>(t,a)=>{const u=s;return i(),r("div",F,[(i(!0),r(o,null,n(e.list,(t=>(i(),r("div",{key:t.id,class:["creative-list-item","is-"+t.color]},[l(u,{picture:t.picture,squared:e.squared},null,8,["picture","squared"]),l("div",I,[l("span",null,d(t.name),1)])],2)))),128))])}});const S=[{id:0,picture:"/demo/avatars/26.jpg",name:"Courtney W."},{id:1,picture:"/demo/avatars/7.jpg",name:"Alice C."},{id:2,picture:"/demo/avatars/8.jpg",name:"Erik K."}],U=[{id:0,picture:"/demo/avatars/26.jpg",name:"Courtney W.",color:"orange"},{id:1,picture:"/demo/avatars/7.jpg",name:"Alice C.",color:"purple"},{id:2,picture:"/demo/avatars/8.jpg",name:"Erik K.",color:"green"}],V=[{id:0,icon:"fab fa-facebook-f",network:"facebook"},{id:1,icon:"fab fa-linkedin-in",network:"linkedin"},{id:2,icon:"fab fa-twitter",network:"twitter"},{id:3,icon:"fab fa-instagram",network:"instagram"}],$=[{id:0,icon:"fab fa-invision",network:"invision"},{id:1,icon:"fab fa-github",network:"github"},{id:2,icon:"fab fa-atlassian",network:"atlassian"},{id:3,icon:"fab fa-bootstrap",network:"bootstrap"}],E=[{id:0,picture:"https://fossil.scene7.com/is/image/FossilPartners/FTW4025_main?$sfcc_fos_large$",name:"5th Gen Connected Watch",price:319.29},{id:1,picture:"https://dyw7ncnq1en5l.cloudfront.net/optim/produits/1739/29391/fossil-q-founder_3ccf4c8115134000__450_400.jpg",name:"Leather Coated F-28 Analogic",price:259.49}],z={class:"columns is-multiline widget-demo-columns"},G={class:"column is-3"},L={class:"column is-3"},N={class:"column is-3"},P=l("div",{class:"widget-content"},[l("p",null," Vuero will be released very soon, probably around the end of the year of the Christmas holidays. "),l("p",{class:"hashtags"},[l("a",null,"#uikit"),l("a",null,"#dashboards"),l("a",null,"#bulma")])],-1),Q={class:"column is-3"};var R=a({expose:[],setup:s=>(s,a)=>{const o=e,n=k,u=j,d=v,f=t,h=g,w=Y,y=m,_=D;return i(),r("div",z,[l("div",G,[l(o,{class:"illustration-widget-v1",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/widgets/1.svg","badge-left":"/@src/assets/illustrations/widgets/2.svg","badge-right":"/@src/assets/illustrations/widgets/3.svg"}),l(o,{class:"illustration-widget-v2",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/widgets/7.svg"}),l(n,{avatars:c(S),squared:""},null,8,["avatars"])]),l("div",L,[l(o,{class:"illustration-widget-v2",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/widgets/4.svg"}),l(u,{buttons:c(V)},null,8,["buttons"]),l(n,{avatars:c(S)},null,8,["avatars"]),l(h,{class:"followers-widget"},{header:p((()=>[l(d,{title:"Followers"})])),body:p((()=>[l(f,{channels:c(b)},null,8,["channels"])])),_:1}),l(w,{products:c(E)},null,8,["products"])]),l("div",N,[l(h,{class:"text-widget"},{header:p((()=>[l(y,{title:"@cssninjaStudio",icon:"feather:twitter"})])),body:p((()=>[P])),_:1}),l(o,{class:"illustration-widget-v3",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/widgets/5.svg"}),l(u,{buttons:c($),rounded:""},null,8,["buttons"]),l(h,{class:"creative-list-widget"},{header:p((()=>[l(d,{title:"Designers"})])),body:p((()=>[l(_,{list:c(U),squared:""},null,8,["list"])])),_:1})]),l("div",Q,[l(h,{class:"creative-list-widget"},{header:p((()=>[l(d,{title:"Designers"})])),body:p((()=>[l(_,{list:c(U)},null,8,["list"])])),_:1}),l(o,{class:"illustration-widget-v2",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/widgets/8.svg"})])])}});export{R as _};