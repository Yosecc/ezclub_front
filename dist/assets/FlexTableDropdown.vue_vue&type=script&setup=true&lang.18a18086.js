import{_ as e}from"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import{_ as s}from"./V-Dropdown.2bdf3018.js";import{d as m,c as r,o as a,h as t,a4 as i,z as n,i as l,j as d,k as o,D as p,F as c,J as b}from"./vendor.c636f33b.js";const u={key:0},y={key:0,class:"text-center mb-4"},h=o("p",{class:"mt-3"},"Last payment attempt",-1),f={key:0},_={key:1},k=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),v=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),j=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),w=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var g=m({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(m){const g=m;i();const M=r((()=>{if(null!=g.member.membership_members&&g.member){let e=n(g.member.membership_members.payments[0].created_at),s=n();return n.duration(s.diff(e))._days}return""}));return(r,i)=>{const V=e,x=l("router-link"),C=s;return a(),t(C,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:d((()=>[m.member?(a(),t("div",u,[null==m.member.membership_members||m.member.membership_members.payments[0].status?b("",!0):(a(),t("div",y,[o(V,{color:"danger",label:"PAYMENT",class:""}),h,p(M)>0?(a(),t("p",f,c(p(M))+" days past due",1)):(a(),t("p",_,c(p(n)(g.member.membership_members.payments[0].created_at).format("yy/mm/d hh:mm:ss")),1))]))])):b("",!0),o(x,{to:{name:"members-profile",query:{id:m.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[k,v])),_:1},8,["to"]),o(x,{to:{name:"members-profile",query:{id:m.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[j,w])),_:1},8,["to"])])),_:1})}}});export{g as _};