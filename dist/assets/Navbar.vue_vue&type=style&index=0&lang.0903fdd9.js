import{d as s,aj as a,b as e,o as t,h as l,k as i,K as r,D as n,Q as o}from"./vendor.d0c8bc4f.js";const c={class:"navbar-navbar-inner"},d={class:"left"},v=i("h1",{class:"title is-5"},"Page Title",-1),p={class:"center"},f=i("div",{class:"centered-links"},[i("a",{href:"/",class:"centered-link centered-link-toggle"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),i("span",null,"Homepage")])],-1),h={class:"right"};var u=s({expose:[],props:{theme:{type:String,default:"default"}},setup(s){const u=s,{y:b}=a(),g=e((()=>b.value>30));return(s,a)=>(t(),l(o,null,[i("div",{class:["navbar-navbar",[n(g)&&"is-scrolled","fade"===u.theme&&"is-transparent","colored"===u.theme&&"is-colored"]]},[i("div",c,[i("div",d,[r(s.$slots,"title",{},(()=>[v]))]),i("div",p,[r(s.$slots,"links",{},(()=>[f]))]),i("div",h,[r(s.$slots,"toolbar")])])],2),r(s.$slots,"subnav")],64))}});export{u as _};
