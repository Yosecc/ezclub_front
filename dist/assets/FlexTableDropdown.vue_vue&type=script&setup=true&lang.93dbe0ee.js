import"./V-Tag.vue_vue&type=script&setup=true&lang.1a6ab0fe.js";import{_ as e}from"./V-Dropdown.7efd21c7.js";import{d as s,a7 as i,b as a,h as n,o as r,i as l,A as d,j as m,H as t,k as o}from"./vendor.d343baf9.js";const c=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),p=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),u=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),v=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var b=s({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(s){const b=s;return i(),a((()=>{if(null!=b.member.membership_members&&b.member){let e=d(b.member.membership_members.payments[0].created_at),s=d();return d.duration(s.diff(e))._days}return""})),(i,a)=>{const d=n("router-link"),b=e;return r(),l(b,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:m((()=>[t("v-if",!0),o(d,{to:{name:"members-profile",query:{id:s.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:m((()=>[c,p])),_:1},8,["to"]),o(d,{to:{name:"members-profile",query:{id:s.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:m((()=>[u,v])),_:1},8,["to"]),t(' <a role="menuitem" href="#" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-briefcase"></i>\n        </div>\n        <div class="meta">\n          <span>Projects</span>\n          <span>View user projects</span>\n        </div>\n      </a> '),t('  <a role="menuitem" href="#" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-calendar"></i>\n        </div>\n        <div class="meta">\n          <span>Schedule</span>\n          <span>Schedule a meeting</span>\n        </div>\n      </a> '),t(' <hr class="dropdown-divider" /> '),t(' <a role="menuitem" href="#" class="dropdown-item is-media">\n        <div class="icon">\n          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>\n        </div>\n        <div class="meta">\n          <span>Remove</span>\n          <span>Remove from list</span>\n        </div>\n      </a> ')])),_:1})}}});export{b as _};
