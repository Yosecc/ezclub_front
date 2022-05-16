import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.eaaff5e4.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.eba1148c.js";import{_ as a,a as s}from"./pdf_icon.8800e24c.js";import{b as r,A as i,F as u}from"./index.8af0bfbd.js";import{i as n}from"./inputsLayaut.vue_vue&type=style&index=0&lang.70f5db92.js";import{d as l,G as p,r as m,o,h as c,j as d,k as v,D as _,F as y,J as b,E as f,L as g,O as j,a4 as h,Q as V,R as x}from"./vendor.f3aa4145.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f9b480d4.js";import{p as w}from"./sidebarLayoutState.1c67ab49.js";import"./V-Placeload.fdcac8e0.js";import"./V-Control.b8419f45.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d634e49.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.6e24c1ec.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.52196853.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2d65ef4c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.647e7fc8.js";import"./useDropdown.8ce53aab.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.8a941f7a.js";import"./V-Dropdown.f9a5cb09.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1054d6be.js";import"./Companies.b90f1bdc.js";import"./activePanelState.a8e3292b.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.749ab544.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.79e41b52.js";import"./V-Message.vue_vue&type=script&setup=true&lang.c7e1c1ee.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1ea131b1.js";import"./navbarLayoutState.0afb0a29.js";import"./video.726f585e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6b8bba48.js";import"./darkModeState.aba9ca80.js";import"./AnimatedLogo.136e20ca.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.146a556b.js";import"./V-Block.vue_vue&type=script&setup=true&lang.894ccaf7.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0655cbba.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.67ffc64b.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},q=v("p",null,null,-1),P={class:"text-center mr-6"},F=v("img",{src:a,width:"40",alt:""},null,-1),C=f(" View PDF "),D={class:"text-center ml-6"},L=v("img",{src:a,width:"40",alt:""},null,-1),A=f(" View PDF "),B={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var T=l({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(a){const u=a;p((()=>{}));const l=m(!1),f=m(!1),g=m(null);m();const j=async e=>(g.value=e,l.value=!0,i.post(`sign/${u.member.membership_members.id}`,{sign:e}).then((e=>{f.value=!0,l.value=!1}))),h=()=>{j(n)};return(i,u)=>{const n=t,l=s,p=e;return o(),c(p,{radius:"small"},{default:d((()=>[v("div",S,[a.loading?b("",!0):(o(),c("div",$,[q,v("div",P,[v("a",{target:"_blank",href:`${_(r)}generateContract/${a.member.id}`},[F,v("p",null," contract_"+y(a.member.id)+"_"+y(a.member.membership_members.id)+"_"+y(a.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",D,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${a.member.id}`},[L,v("p",null," weiver_"+y(a.member.id)+"_"+y(a.member.membership_members.id)+"_"+y(a.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[A])),_:1})],8,["href"])])])),v(l,{onSinFirmar:h,onOnSignYes:j}),f.value?(o(),c("div",B,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):b("",!0)])])),_:1})}}});const O={class:"page-content-inner"},z=v("h1",{class:"title is-4"},"Successful Payment",-1),I={class:"title is-3"},E={key:1,class:"mt-6"},G={class:"title is-3"},J=f(" View and sign: Family ");var N=l({expose:[],setup(a){w.value="Add New members",g({title:"Members"});const s=j();h();const r=m([]),n=m(null),l=m(null),f=m(!0);let S=m([]);p((()=>{i.post(`payment/${s.query.id}`,{payment_intent_client_secret:s.query.payment_intent_client_secret,redirect_status:s.query.redirect_status,payment_type:s.query.payment_type,membership:s.query.membership}).then((e=>{e.data.status&&(n.value=s.query.redirect_status,l.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,f.value=!1)}))}));return(a,i)=>{const n=e,l=T,p=t,m=k;return o(),c(m,null,{default:d((()=>[v("div",O,[v("div",null,[v(n,{class:"mb-4",color:"success"},{default:d((()=>[z])),_:1}),v("h2",I," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(l,{key:0,loading:f.value,member:r.value},null,8,["loading","member"])):b("",!0),_(S).length>0?(o(),c("div",E,[(o(!0),c(V,null,x(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(n,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(p,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${u.value}members/process?id=${e.id}&payment_intent=${s.query.payment_intent}&payment_intent_client_secret=${s.query.payment_intent_client_secret}&redirect_status=${s.query.redirect_status}&payment_type=${s.query.payment_type}`})(e)},{default:d((()=>[J])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):b("",!0)])])])),_:1})}}});export default N;
