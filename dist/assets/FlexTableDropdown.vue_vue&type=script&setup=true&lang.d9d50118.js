import{_ as e}from"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import{_ as s}from"./V-Dropdown.3b79d4cd.js";import{d as m,c as a,o as r,h as t,B as i,aa as n,i as l,j as d,k as o,D as p,J as b,K as c}from"./vendor.42a295ea.js";const u={key:0},y={key:0,class:"text-center mb-4"},h=o("p",{class:"mt-3"},"Last payment attempt",-1),_={key:0},f={key:1},k=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),v=o("div",{class:"meta"},[o("span",null,"View/Edit"),o("span",null,"View member details")],-1),j=o("div",{class:"icon"},[o("i",{class:"lnir lnir-list-alt-1","aria-hidden":"true"})],-1),w=o("div",{class:"meta"},[o("span",null,"Ckeck-in"),o("span",null,"Ckeck-in details")],-1);var g=m({expose:[],props:{idMember:{type:Number},member:{type:Object}},setup(m){const g=m;i();const M=a((()=>{if(null!=g.member.membership_members&&g.member){let e=n(g.member.membership_members.payments[0].created_at),s=n();return n.duration(s.diff(e))._days}return""}));return(a,i)=>{const V=e,x=l("router-link"),C=s;return r(),t(C,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:d((()=>[m.member?(r(),t("div",u,[null==m.member.membership_members||m.member.membership_members.payments[0].status?c("",!0):(r(),t("div",y,[o(V,{color:"danger",label:"PAYMENT",class:""}),h,p(M)>0?(r(),t("p",_,b(p(M))+" days past due",1)):(r(),t("p",f,b(p(n)(g.member.membership_members.payments[0].created_at).format("yy/mm/d hh:mm:ss")),1))]))])):c("",!0),o(x,{to:{name:"members-profile",query:{id:m.idMember}},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[k,v])),_:1},8,["to"]),o(x,{to:{name:"members-profile",query:{id:m.idMember},hash:"#memberCheckins"},role:"menuitem",class:"dropdown-item is-media"},{default:d((()=>[j,w])),_:1},8,["to"])])),_:1})}}});export{g as _};
