import{_ as e}from"./V-Tag.vue_vue&type=script&setup=true&lang.62bd7bda.js";import{_ as s}from"./V-Dropdown.f9cda024.js";import{d as m,b as r,o as a,h as t,U as i,i as n,j as l,k as d,D as o,J as p,K as b}from"./vendor.20c6e26b.js";import{h as c}from"./moment.08a7f518.js";const u={key:0},y={key:0,class:"text-center mb-4"},h=d("p",{class:"mt-3"},"Last payment attempt",-1),f={key:0},_={key:1},k=d("div",{class:"icon"},[d("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),v=d("div",{class:"meta"},[d("span",null,"View/Edit"),d("span",null,"View member details")],-1),j=d("div",{class:"icon"},[d("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),w=d("div",{class:"meta"},[d("span",null,"Ckeck-in"),d("span",null,"Ckeck-in details")],-1);var g=m({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(m){const g=m;i();const M=r((()=>{if(null!=g.member.membership_members&&g.member){let e=c(g.member.membership_members.payments[0].created_at),s=c();return c.duration(s.diff(e))._days}return""}));return(r,i)=>{const V=e,x=n("router-link"),C=s;return a(),t(C,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l((()=>[m.member?(a(),t("div",u,[null==m.member.membership_members||m.member.membership_members.payments[0].status?b("",!0):(a(),t("div",y,[d(V,{color:"danger",label:"PAYMENT",class:""}),h,o(M)>0?(a(),t("p",f,p(o(M))+" days past due",1)):(a(),t("p",_,p(o(c)(g.member.membership_members.payments[0].created_at).format("yy/mm/d hh:mm:ss")),1))]))])):b("",!0),d(x,{to:{name:"members-profile",query:{id:m.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:l((()=>[k,v])),_:1},8,["to"]),d(x,{to:{name:"members-profile",query:{id:m.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:l((()=>[j,w])),_:1},8,["to"])])),_:1})}}});export{g as _};
