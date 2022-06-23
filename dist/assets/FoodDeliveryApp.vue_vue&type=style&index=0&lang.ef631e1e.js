import{_ as i}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.58484945.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.ace90716.js";import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.f850d095.js";import{_ as o}from"./UIWidgetToolbarDropdown.vue_vue&type=script&setup=true&lang.70762942.js";import{_ as a,a as c}from"./IllustrationWidget.vue_vue&type=script&setup=true&lang.dbc50fb6.js";import{_ as t}from"./UIWidget.vue_vue&type=script&setup=true&lang.8c17a225.js";import{_ as l}from"./UIWidgetToolbarIcon.vue_vue&type=script&setup=true&lang.6237f4a1.js";import{_ as n}from"./ContactWidget.vue_vue&type=script&setup=true&lang.91f302af.js";import{i as r,_ as d}from"./menuList.8851037d.js";import{d as g,r as v,I as m,a0 as u,o as p,i as f,H as h,k as y,S as b,U as k,E as j,j as T,a8 as _,G as w,F as C}from"./vendor.d343baf9.js";import{t as x}from"./tiny-slider.3c41456c.js";import{a as F}from"./followers.e3342b9c.js";var S="/assets/cart-placeholder.95c4f12d.svg";var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",foodPills:[{id:0,icon:"/images/icons/food/icon-1.svg",label:"All"},{id:1,icon:"/images/icons/food/icon-2.svg",label:"Pizza"},{id:2,icon:"/images/icons/food/icon-3.svg",label:"Asian"},{id:3,icon:"/images/icons/food/icon-4.svg",label:"Fast"},{id:4,icon:"/images/icons/food/icon-5.svg",label:"Grills"},{id:5,icon:"/images/icons/food/icon-6.svg",label:"Cakes"},{id:6,icon:"/images/icons/food/icon-7.svg",label:"Thai"},{id:7,icon:"/images/icons/food/icon-8.svg",label:"Sushi"},{id:8,icon:"/images/icons/food/icon-9.svg",label:"Fruits"},{id:9,icon:"/images/icons/food/icon-10.svg",label:"Veggie"},{id:10,icon:"/images/icons/food/icon-11.svg",label:"Brunch"},{id:11,icon:"/images/icons/food/icon-12.svg",label:"Pasta"},{id:12,icon:"/images/icons/food/icon-13.svg",label:"Fish"},{id:0,icon:"/images/icons/food/icon-1.svg",label:"All"},{id:1,icon:"/images/icons/food/icon-2.svg",label:"Pizza"},{id:2,icon:"/images/icons/food/icon-3.svg",label:"Asian"},{id:3,icon:"/images/icons/food/icon-4.svg",label:"Fast"},{id:4,icon:"/images/icons/food/icon-5.svg",label:"Grills"},{id:5,icon:"/images/icons/food/icon-6.svg",label:"Cakes"},{id:6,icon:"/images/icons/food/icon-7.svg",label:"Thai"},{id:7,icon:"/images/icons/food/icon-8.svg",label:"Sushi"},{id:8,icon:"/images/icons/food/icon-9.svg",label:"Fruits"},{id:9,icon:"/images/icons/food/icon-10.svg",label:"Veggie"},{id:10,icon:"/images/icons/food/icon-11.svg",label:"Brunch"},{id:11,icon:"/images/icons/food/icon-12.svg",label:"Pasta"},{id:12,icon:"/images/icons/food/icon-13.svg",label:"Fish"}],restaurants:[{id:0,name:"Mario's place",picture:"/demo/photos/food/1.jpg",deliveryTime:45,category:"Pizza",icon:"/images/icons/food/icon-2.svg",rating:4.9},{id:1,name:"Jimmy's Downtown",picture:"/demo/photos/food/2.jpg",deliveryTime:30,category:"Fast",icon:"/images/icons/food/icon-4.svg",rating:4.5},{id:2,name:"Fruity Loops",picture:"/demo/photos/food/3.jpg",deliveryTime:45,category:"Fruits",icon:"/images/icons/food/icon-9.svg",rating:4.8},{id:3,name:"The Green Heaven",picture:"/demo/photos/food/4.jpg",deliveryTime:20,category:"Veggie",icon:"/images/icons/food/icon-10.svg",rating:5},{id:4,name:"Salad Bar",picture:"/demo/photos/food/5.jpg",deliveryTime:30,category:"Veggie",icon:"/images/icons/food/icon-10.svg",rating:4.8},{id:5,name:"Little Italy",picture:"/demo/photos/food/6.jpg",deliveryTime:50,category:"Pasta",icon:"/images/icons/food/icon-12.svg",rating:1.1},{id:6,name:"The Noodle Bar",picture:"/demo/photos/food/7.jpg",deliveryTime:15,category:"Thai",icon:"/images/icons/food/icon-7.svg",rating:4.9},{id:7,name:"Jerry's Epic Burger",picture:"/demo/photos/food/8.jpg",deliveryTime:20,category:"Fast",icon:"/images/icons/food/icon-4.svg",rating:5},{id:8,name:"Meals From The Sea",picture:"/demo/photos/food/9.jpg",deliveryTime:55,category:"Fish",icon:"/images/icons/food/icon-13.svg",rating:1.7},{id:9,name:"Delicious Little Things",picture:"/demo/photos/food/10.jpg",deliveryTime:45,category:"Cakes",icon:"/images/icons/food/icon-6.svg",rating:5},{id:10,name:"Pollos Hermanos",picture:"/demo/photos/food/11.jpg",deliveryTime:15,category:"Fast",icon:"/images/icons/food/icon-4.svg",rating:5},{id:11,name:"Iced & Delicious",picture:"/demo/photos/food/12.jpg",deliveryTime:30,category:"Cakes",icon:"/images/icons/food/icon-6.svg",rating:4.2},{id:12,name:"Osaka Sushi",picture:"/demo/photos/food/13.jpg",deliveryTime:30,category:"Sushi",icon:"/images/icons/food/icon-8.svg",rating:4.9},{id:13,name:"Quick Treats",picture:"/demo/photos/food/14.jpg",deliveryTime:10,category:"Veggie",icon:"/images/icons/food/icon-10.svg",rating:3.8},{id:14,name:"Sam' Dwich",picture:"/demo/photos/food/15.jpg",deliveryTime:30,category:"Veggie",icon:"/images/icons/food/icon-10.svg",rating:4.5},{id:15,name:"Sunchine Cookies",picture:"/demo/photos/food/16.jpg",deliveryTime:45,category:"Cakes",icon:"/images/icons/food/icon-6.svg",rating:4.9},{id:16,name:"O' Fried Chicken",picture:"/demo/photos/food/17.jpg",deliveryTime:45,category:"Fast",icon:"/images/icons/food/icon-4.svg",rating:1},{id:17,name:"Bangkok Woks",picture:"/demo/photos/food/18.jpg",deliveryTime:30,category:"Thai",icon:"/images/icons/food/icon-7.svg",rating:4.5}]});const P={class:"food-delivery-dashboard"},A={class:"left"},B=y("div",{class:"left-header"},[y("div",{class:"header-image"},[y("img",{src:"/assets/header.daf7d924.svg",alt:""})]),y("div",{class:"header-meta"},[y("h3",null,"$0 delivery for 30 days! 🎉"),y("p",null,"$0 delivery fee for orders over $10 for 30 days"),y("a",{class:"action-link"},[y("span",null,"Learn More"),y("i",{"aria-hidden":"true",class:"fas fa-arrow-right"})])])],-1),I={class:"left-body"},z={class:"restaurants"},V=y("div",{class:"restaurants-toolbar"},[y("div",{class:"left"},[y("h3",null,"Restaurants")]),y("div",{class:"right"})],-1),D={class:"food-pills"},E=y("i",{"aria-hidden":"true",class:"fas fa-angle-left"},null,-1),M=y("i",{"aria-hidden":"true",class:"fas fa-angle-right"},null,-1),W={class:"food-pill-icon"},$={class:"restaurants-list"},O={class:"columns is-multiline"},q={class:"restaurants-list-item"},G={class:"image-container"},U={class:"timer"},H=y("span",null,"Min",-1),K={class:"meta-container"},J={class:"meta-icon"},N={class:"meta-content"},R=y("i",{"aria-hidden":"true",class:"fas fa-circle"},null,-1),Y={class:"rating"},Q=y("i",{"aria-hidden":"true",class:"fas fa-star"},null,-1),X={class:"ml-1"},Z={class:"right fixed-parent"},ii={class:"sticky-panel fixed-child"},si={class:"widget icon-toolbar-widget"},ei={class:"icon-toolbar"},oi={class:"toolbar-icon"},ai=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:shopping-cart"},null,-1),ci={class:"toolbar-icon"},ti=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),li={class:"toolbar-icon"},ni=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"},null,-1),ri={class:"toolbar-icon"},di=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"},null,-1),gi=_('<div class="widget-toolbar"><div class="left"><h3 class="is-bigger">My Order</h3></div><div class="right"><span class="tag is-curved">0 items</span></div></div>',1),vi=y("img",{class:"light-image",src:S,alt:""},null,-1),mi=y("img",{class:"dark-image",src:S,alt:""},null,-1),ui={class:"cart-items has-slimscroll is-hidden"},pi={class:"cart-item"},fi=y("div",{class:"meta"},[y("span",{class:"text"}," Double XL Burger "),y("span",{class:"price"},"$15.50 x 1")],-1),hi={class:"cart-item"},yi=y("div",{class:"meta"},[y("span",{class:"text"}," Cherry Cupcakes "),y("span",{class:"price"},"$8.00 x 3")],-1),bi={class:"cart-item"},ki=y("div",{class:"meta"},[y("span",{class:"text"}," Extra Fries "),y("span",{class:"price"},"$7.90 x 2")],-1),ji={class:"cart-button"},Ti=y("div",{class:"total"},[y("span",{class:"label"},"Total"),y("span",null,"$0.00")],-1),_i=C(" Start Checkout "),wi=y("div",{class:"widget-content"},[y("p",null,"Erik Kovalsky"),y("p",null,"38, Suite B2 Parkman Avenue"),y("p",null,"Los Angeles, CA")],-1);var Ci=g({expose:[],setup(g){const _=v("cart");let C;const S=v(null),Ci=v(null),xi=v(null),Fi=i=>{const s=i.indexCached,e=i.index;i.slideItems[s].classList.remove("active"),i.slideItems[e].classList.add("active")};m((()=>{S.value&&Ci.value&&xi.value&&(C=x({container:S.value,controls:!0,nav:!1,mouseDrag:!0,nextButton:Ci.value,prevButton:xi.value,fixedWidth:98,swipeAngle:!1,items:1,center:!1,loop:!0}),C.events.on("indexChanged",Fi))}));return u((()=>{C&&(C.events.off("indexChanged",Fi),C.destroy())})),(g,v)=>{const m=i,u=s,x=e,Fi=o,Si=c,Li=t,Pi=a,Ai=l,Bi=n,Ii=d;return p(),f("div",P,[h("Left"),y("div",A,[B,y("div",I,[y("div",z,[V,y("div",D,[y("div",{ref:xi,class:"slick-custom is-prev slick-arrow"},[E],512),y("div",{ref:Ci,class:"slick-custom is-next slick-arrow"},[M],512),y("div",{ref:S,class:"food-pills-inner pill-carousel"},[h("Pills Loop"),(p(!0),f(b,null,k(j(L).foodPills,((i,s)=>(p(),f("div",{key:i.id,class:"food-pill",onClick:i=>(i=>{C&&C.goTo(i)})(s)},[y("div",W,[y("img",{src:i.icon,alt:""},null,8,["src"])]),y("span",null,w(i.label),1)],8,["onClick"])))),128))],512)]),y("div",$,[y("div",O,[h("Restaurants Loop"),(p(!0),f(b,null,k(j(L).restaurants,(i=>(p(),f("div",{key:i.id,class:"column is-4"},[y("div",q,[y("div",G,[y("img",{src:i.picture,alt:"",onErrorOnce:v[1]||(v[1]=i=>i.target.src="https://via.placeholder.com/800x450")},null,40,["src"]),y("div",U,[y("div",null,[y("span",null,w(i.deliveryTime),1),H])])]),y("div",K,[y("div",J,[y("img",{src:i.icon,alt:"",onErrorOnce:v[2]||(v[2]=i=>i.target.src="https://via.placeholder.com/800x450")},null,40,["src"])]),y("div",N,[y("h4",null,w(i.name),1),y("p",null,[y("span",null,w(i.category),1),R,y("span",Y,[Q,y("span",X,w(i.rating),1)])])])])])])))),128))])])])])]),y("div",Z,[y("div",ii,[y("div",si,[y("div",ei,[y("div",oi,[y("a",{class:["inner-icon",["cart"===_.value&&"is-active"]],onClick:v[3]||(v[3]=i=>_.value="cart")},[ai],2)]),y("div",ci,[y("a",{class:["inner-icon",["activity"===_.value&&"is-active"]],onClick:v[4]||(v[4]=i=>_.value="activity")},[ti],2)]),y("div",li,[y("a",{class:["inner-icon",["address"===_.value&&"is-active"]],onClick:v[5]||(v[5]=i=>_.value="address")},[ni],2)]),y("div",ri,[y("a",{class:["inner-icon",["settings"===_.value&&"is-active"]],onClick:v[6]||(v[6]=i=>_.value="settings")},[di],2)])])]),y("div",{class:["cart-widget side-section",["cart"===_.value&&"is-active"]]},[gi,y(m,{title:"No Items",subtitle:"Your cart is currently empty. Start adding products."},{image:T((()=>[vi,mi])),_:1}),y("div",ui,[y("div",pi,[y(u,{picture:"/demo/photos/food/1.jpg",size:"medium",squared:""}),fi]),y("div",hi,[y(u,{picture:"/demo/photos/food/2.jpg",size:"medium",squared:""}),yi]),y("div",bi,[y(u,{picture:"/demo/photos/food/3.jpg",size:"medium",squared:""}),ki])]),y("div",ji,[Ti,y(x,{color:"primary",raised:"",bold:"",fullwidth:""},{default:T((()=>[_i])),_:1})])],2),y("div",{class:["side-section",["activity"===_.value&&"is-active"]]},[y(Li,{class:"followers-widget"},{header:T((()=>[y(Fi,{title:"Followers"})])),body:T((()=>[y(Si,{channels:j(F)},null,8,["channels"])])),_:1}),y(Pi,{class:"illustration-widget-v2",title:"You unlocked 2 new Achievements",text:"Congrats, your efforts have been rewarded. Keep up like this!",picture:"/@src/assets/illustrations/dashboards/food/widget.svg"})],2),y("div",{class:["side-section",["address"===_.value&&"is-active"]]},[y(Li,{class:"text-widget"},{header:T((()=>[y(Ai,{title:"Deliver to",icon:"feather:map-pin"})])),body:T((()=>[wi])),_:1}),y(Bi,{picture:"/demo/avatars/8.jpg",username:"Erik K.",email:"erikkovalsky@vuero.io",company:"Vuero Ltd.",position:"Product Manager",location:"Los Angeles, CA",phone:"+1 444-5156",squared:"",reversed:""})],2),y("div",{class:["side-section",["settings"===_.value&&"is-active"]]},[y(Li,{class:"icon-list-widget"},{body:T((()=>[y(Ii,{list:j(r)},null,8,["list"])])),_:1})],2)])])])}}});export{Ci as _};
