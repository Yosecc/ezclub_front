import{_ as e}from"./V-Tag.vue_vue&type=script&setup=true&lang.b4486146.js";import{_ as s}from"./V-Dropdown.1e9a7c40.js";import{d as a,a4 as r,b as i,h as n,o as m,i as t,z as l,j as d,k as o,D as c,F as p,G as u}from"./vendor.1faf4f77.js";const b={key:0},v={key:0,class:"text-center mb-4"},h=o("p",{class:"mt-3"},"Last payment attempt",-1),f={key:0},y={key:1},_=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),k=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),w=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),j=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var g=a({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(a){const g=a;r();const V=i((()=>{if(null!=g.member.membership_members&&g.member){let e=l(g.member.membership_members.payments[0].created_at),s=l();return l.duration(s.diff(e))._days}return""}));return(r,i)=>{const M=e,x=n("router-link"),C=s;return m(),t(C,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:d((()=>[a.member?(m(),t("div",b,[null==a.member.membership_members||a.member.membership_members.payments[0].status?u("v-if",!0):(m(),t("div",v,[o(M,{color:"danger",label:"PAYMENT",class:""}),h,c(V)>0?(m(),t("p",f,p(c(V))+" days past due",1)):(m(),t("p",y,p(c(l)(g.member.membership_members.payments[0].created_at).format("yy/mm/d hh:mm:ss")),1))]))])):u("v-if",!0),o(x,{to:{name:"members-profile",query:{id:a.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[_,k])),_:1},8,["to"]),o(x,{to:{name:"members-profile",query:{id:a.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[w,j])),_:1},8,["to"]),u(' <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-briefcase"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Projects</span>\r\n          <span>View user projects</span>\r\n        </div>\r\n      </a> '),u('  <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-calendar"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Schedule</span>\r\n          <span>Schedule a meeting</span>\r\n        </div>\r\n      </a> '),u(' <hr class="dropdown-divider" /> '),u(' <a role="menuitem" href="#" class="dropdown-item is-media">\r\n        <div class="icon">\r\n          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>\r\n        </div>\r\n        <div class="meta">\r\n          <span>Remove</span>\r\n          <span>Remove from list</span>\r\n        </div>\r\n      </a> ')])),_:1})}}});export{g as _};