import{d as a,h as s,i as e,l as r,K as o,H as i,a8 as l}from"./vendor.7d5213a2.js";const c={class:"v-popover-profile has-loader"},p={class:"profile-popover-block"},t={class:"profile-popover-wrapper"},n={key:0,class:"popover-avatar"},d={class:"fake-avatar"},v={class:"popover-meta"},u={class:"user-meta"},b={class:"username"},f={class:"location"},m={class:"job-title mb-1"},g={class:"bio"},h=l('<div class="popover-actions"><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:user"></i></a></div>',1);var y=a({expose:[],props:{user:{type:Object}},setup:a=>(l,y)=>(s(),e("div",c,[r("div",p,[r("div",t,[a.user.avatar?(s(),e("div",n,[r("img",{class:"avatar",src:a.user.avatar,alt:""},null,8,["src"]),a.user.badge?(s(),e("img",{key:0,class:"badge",src:a.user.badge,alt:""},null,8,["src"])):o("",!0)])):(s(),e("div",{key:1,class:["popover-fake-avatar",[a.user.color&&`is-${a.user.color}`]]},[r("div",d,[r("span",null,i(a.user.initials),1)]),a.user.badge?(s(),e("img",{key:0,class:"badge",src:a.user.badge,alt:""},null,8,["src"])):o("",!0)],2)),r("div",v,[r("span",u,[r("span",b,i(a.user.username),1),r("span",f,i(a.user.location),1)]),r("span",m,i(a.user.position),1),r("span",g,i(a.user.bio),1)])]),h])]))});export{y as _};
