import{d as a,i as s,j as e,l as r,I as i,H as o,ab as c}from"./vendor.84e48f7c.js";const l={class:"v-popover-profile has-loader"},p={class:"profile-popover-block"},t={class:"profile-popover-wrapper"},n={key:0,class:"popover-avatar"},v={class:"fake-avatar"},d={class:"popover-meta"},u={class:"user-meta"},f={class:"username"},b={class:"location"},m={class:"job-title mb-1"},g={class:"bio"},h=c('<div class="popover-actions"><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="popover-icon"><i aria-hidden="true" class="iconify" data-icon="feather:user"></i></a></div>',1);var y=a({expose:[],props:{user:{type:Object}},setup:a=>(c,y)=>(s(),e("div",l,[r("div",p,[r("div",t,[a.user.avatar?(s(),e("div",n,[r("img",{class:"avatar",src:a.user.avatar,alt:""},null,8,["src"]),a.user.badge?(s(),e("img",{key:0,class:"badge",src:a.user.badge,alt:""},null,8,["src"])):i("v-if",!0)])):(s(),e("div",{key:1,class:["popover-fake-avatar",[a.user.color&&`is-${a.user.color}`]]},[r("div",v,[r("span",null,o(a.user.initials),1)]),a.user.badge?(s(),e("img",{key:0,class:"badge",src:a.user.badge,alt:""},null,8,["src"])):i("v-if",!0)],2)),r("div",d,[r("span",u,[r("span",f,o(a.user.username),1),r("span",b,o(a.user.location),1)]),r("span",m,o(a.user.position),1),r("span",g,o(a.user.bio),1)])]),h])]))});export{y as _};
