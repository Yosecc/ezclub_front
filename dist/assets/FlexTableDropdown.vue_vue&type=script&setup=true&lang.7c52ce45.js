import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import{_ as e}from"./V-Dropdown.7cdac118.js";import{d as s,ad as i,b as r,h as a,i as n,j as l,B as d,k as m,I as t,l as o}from"./vendor.84e48f7c.js";const c=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),p=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),u=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),v=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var b=s({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(s){const b=s;return i(),r((()=>{if(null!=b.member.membership_members&&b.member){let e=d(b.member.membership_members.payments[0].created_at),s=d();return d.duration(s.diff(e))._days}return""})),(i,r)=>{const d=a("router-link"),b=e;return n(),l(b,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:m((()=>[t("v-if",!0),o(d,{to:{name:"members-profile",query:{id:s.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:m((()=>[c,p])),_:1},8,["to"]),o(d,{to:{name:"members-profile",query:{id:s.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:m((()=>[u,v])),_:1},8,["to"]),t(' <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-briefcase"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Projects</span>\r\n          <span>View user projects</span>\r\n        </div>\r\n      </a> '),t('  <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-calendar"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Schedule</span>\r\n          <span>Schedule a meeting</span>\r\n        </div>\r\n      </a> '),t(' <hr class="dropdown-divider" /> '),t(' <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Remove</span>\r\n          <span>Remove from list</span>\r\n        </div>\r\n      </a> ')])),_:1})}}});export{b as _};
