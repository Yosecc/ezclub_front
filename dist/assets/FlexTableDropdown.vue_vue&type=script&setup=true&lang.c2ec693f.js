import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import{_ as e}from"./V-Dropdown.20b61679.js";import{d as s,b as r,o as i,h as a,a9 as t,A as m,i as n,j as l,K as d,k as o}from"./vendor.853b0a2b.js";const p=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),u=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),c=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),b=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var h=s({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(s){const h=s;return t(),r((()=>{if(null!=h.member.membership_members&&h.member){let e=m(h.member.membership_members.payments[0].created_at),s=m();return m.duration(s.diff(e))._days}return""})),(r,t)=>{const m=n("router-link"),h=e;return i(),a(h,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l((()=>[d("",!0),o(m,{to:{name:"members-profile",query:{id:s.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:l((()=>[p,u])),_:1},8,["to"]),o(m,{to:{name:"members-profile",query:{id:s.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:l((()=>[c,b])),_:1},8,["to"])])),_:1})}}});export{h as _};
