import{d as s,aj as a,c as e,h as t,i as l,l as i,L as r,F as n,R as o}from"./vendor.b43d5946.js";const c={class:"navbar-navbar-inner"},d={class:"left"},v=i("h1",{class:"title is-5"},"Page Title",-1),p={class:"center"},h=i("div",{class:"centered-links"},[i("a",{href:"/",class:"centered-link centered-link-toggle"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),i("span",null,"Homepage")])],-1),u={class:"right"};var f=s({expose:[],props:{theme:{type:String,default:"default"}},setup(s){const f=s,{y:b}=a(),g=e((()=>b.value>30));return(s,a)=>(t(),l(o,null,[i("div",{class:["navbar-navbar",[n(g)&&"is-scrolled","fade"===f.theme&&"is-transparent","colored"===f.theme&&"is-colored"]]},[i("div",c,[i("div",d,[r(s.$slots,"title",{},(()=>[v]))]),i("div",p,[r(s.$slots,"links",{},(()=>[h]))]),i("div",u,[r(s.$slots,"toolbar")])])],2),r(s.$slots,"subnav")],64))}});export{f as _};
