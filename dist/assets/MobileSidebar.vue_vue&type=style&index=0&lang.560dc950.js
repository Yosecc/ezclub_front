import{u as s}from"./useDropdown.cf66f780.js";import{d as a,y as i,o as l,c as n,e,t as o,K as t,b as d,B as r,E as c,G as u,L as p}from"./vendor.777d9173.js";import{_ as m}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9dd90b.js";import{_ as v}from"./V-Dropdown.de8a3395.js";const f=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),g=e("span",{class:"new-indicator pulsate"},null,-1),h=t('<div class="navbar-dropdown is-boxed is-right"><div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div><div class="inner has-slimscroll"><ul class="notification-list"><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Alice C.</span> left a comment. </p><p class="time">1 hour ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Joshua S.</span> uploaded a file. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Tara S.</span> sent you a message. </p><p class="time">2 hours ago</p></div></a></li><li><a class="notification-item"><div class="img-left"></div><div class="user-content"><p class="user-info"><span class="name">Melany W.</span> left a comment. </p><p class="time">3 hours ago</p></div></a></li></ul></div></div>',1);var b=a({expose:[],setup(a){const t=i(null),d=s(t);return(s,a)=>(l(),n("div",{ref:t,class:"\n      navbar-item\n      has-dropdown\n      is-notification is-hidden-tablet is-hidden-desktop\n    "},[e("a",{class:"navbar-link is-arrowless",onClick:a[1]||(a[1]=(...s)=>o(d).toggle&&o(d).toggle(...s))},[f,g]),h],512))}});const w={},y=e("div",{class:"dropdown-head"},[e("div",{class:"meta"},[e("span",null,"Erik Kovalsky"),e("span",null,"Product Manager")])],-1),k=e("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[e("div",{class:"icon"},[e("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),e("div",{class:"meta"},[e("span",null,"Profile"),e("span",null,"View your profile")])],-1),j=e("hr",{class:"dropdown-divider"},null,-1),C=e("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[e("div",{class:"icon"},[e("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})]),e("div",{class:"meta"},[e("span",null,"Projects"),e("span",null,"All my projects")])],-1),_=e("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[e("div",{class:"icon"},[e("i",{"aria-hidden":"true",class:"lnil lnil-users-alt"})]),e("div",{class:"meta"},[e("span",null,"Team"),e("span",null,"Manage your team")])],-1),x=e("hr",{class:"dropdown-divider"},null,-1),O=e("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[e("div",{class:"icon"},[e("i",{"aria-hidden":"true",class:"lnil lnil-cog"})]),e("div",{class:"meta"},[e("span",null,"Settings"),e("span",null,"Account settings")])],-1),B=e("hr",{class:"dropdown-divider"},null,-1),S={class:"dropdown-item is-button"},A=r(" Logout ");w.render=function(s,a){const i=m,o=v;return l(),n(o,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:d((({toggle:s})=>[e("a",{class:"is-trigger dropdown-trigger","aria-haspopup":"true",onClick:s},null,8,["onClick"])])),content:d((()=>[y,k,j,C,_,x,O,B,e("div",S,[e(i,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:""},{default:d((()=>[A])),_:1})])])),_:1})};const M={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},P={class:"container"},V={class:"navbar-brand"},$={class:"brand-start"},D=e("span",null,null,-1),E=e("span",null,null,-1),K=e("span",null,null,-1);var L=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(s,{emit:a}){const i=s;return(s,o)=>(l(),n("nav",M,[e("div",P,[e("div",V,[e("div",$,[e("div",{class:["navbar-burger",[i.isOpen&&"is-active"]],onClick:o[1]||(o[1]=s=>a("toggle"))},[D,E,K],2)]),c(s.$slots,"brand")])])]))}});const T={class:"inner"},G={class:"icon-side-menu"},J=e("li",null,[e("a",{href:"/"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),N={class:"bottom-icon-side-menu"};var W=a({expose:[],props:{isOpen:{type:Boolean,default:!1}},emits:["toggle"],setup(s,{emit:a}){const i=s;return(s,o)=>(l(),n(p,null,[e("div",{class:[[i.isOpen&&"is-active"],"mobile-main-sidebar"]},[e("div",T,[e("ul",G,[c(s.$slots,"links",{},(()=>[J]))]),e("ul",N,[c(s.$slots,"bottom-links")])])],2),i.isOpen?(l(),n("div",{key:0,class:"mobile-overlay",onClick:o[1]||(o[1]=s=>a("toggle"))})):u("",!0)],64))}});export{L as _,W as a,b,w as c};
