import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.0cc151d4.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import{_ as s,a}from"./pdf_icon.551549d4.js";import{b as r,A as i,F as u}from"./index.0a8619b7.js";import{i as n}from"./inputsLayaut.vue_vue&type=style&index=0&lang.07608343.js";import{d as l,G as p,r as m,o,h as c,j as d,k as v,D as _,F as y,L as f,E as b,I as g,J as j,a2 as h,O as V,P as x}from"./vendor.6f1ebb59.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.419ca451.js";import{p as w}from"./sidebarLayoutState.f77399c8.js";import"./V-Placeload.98b104a8.js";import"./V-Control.9d085c3f.js";import"./V-Field.vue_vue&type=script&setup=true&lang.511e2268.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.711f7bfa.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.c37f85a5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.090ffe3f.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.34a7238e.js";import"./useDropdown.054755a3.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d48be775.js";import"./V-Dropdown.2a04da02.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ef96ea8c.js";import"./Companies.41d94d6d.js";import"./activePanelState.3c211562.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.249b183c.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1c8c767a.js";import"./V-Message.vue_vue&type=script&setup=true&lang.0f275a15.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.28efd80f.js";import"./navbarLayoutState.ebe4daef.js";import"./video.11ba5555.js";import"./darkModeState.f6b1b75a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f027517e.js";import"./AnimatedLogo.d0948e72.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.660f76f8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.46343492.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.aed52bf0.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1340fdda.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},P=v("p",null,null,-1),q={class:"text-center mr-6"},F=v("img",{src:s,width:"40",alt:""},null,-1),C=b(" View PDF "),D={class:"text-center ml-6"},L=v("img",{src:s,width:"40",alt:""},null,-1),A=b(" View PDF "),B={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var T=l({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const u=s;p((()=>{}));const l=m(!1),b=m(!1),g=m(null);m();const j=async e=>(g.value=e,l.value=!0,i.post(`sign/${u.member.membership_members.id}`,{sign:e}).then((e=>{b.value=!0,l.value=!1}))),h=()=>{j(n)};return(i,u)=>{const n=t,l=a,p=e;return o(),c(p,{radius:"small"},{default:d((()=>[v("div",S,[s.loading?f("",!0):(o(),c("div",$,[P,v("div",q,[v("a",{target:"_blank",href:`${_(r)}generateContract/${s.member.id}`},[F,v("p",null," contract_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",D,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${s.member.id}`},[L,v("p",null," weiver_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[A])),_:1})],8,["href"])])])),v(l,{onSinFirmar:h,onOnSignYes:j}),b.value?(o(),c("div",B,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});const I={class:"page-content-inner"},O=v("h1",{class:"title is-4"},"Successful Payment",-1),z={class:"title is-3"},E={key:1,class:"mt-6"},G={class:"title is-3"},J=b(" View and sign: Family ");var N=l({expose:[],setup(s){w.value="Add New members",g({title:"Members"});const a=j();h();const r=m([]),n=m(null),l=m(null),b=m(!0);let S=m([]);p((()=>{i.post(`payment/${a.query.id}`,{payment_intent_client_secret:a.query.payment_intent_client_secret,redirect_status:a.query.redirect_status,payment_type:a.query.payment_type,membership:a.query.membership}).then((e=>{e.data.status&&(n.value=a.query.redirect_status,l.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,b.value=!1)}))}));return(s,i)=>{const n=e,l=T,p=t,m=k;return o(),c(m,null,{default:d((()=>[v("div",I,[v("div",null,[v(n,{class:"mb-4",color:"success"},{default:d((()=>[O])),_:1}),v("h2",z," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(l,{key:0,loading:b.value,member:r.value},null,8,["loading","member"])):f("",!0),_(S).length>0?(o(),c("div",E,[(o(!0),c(V,null,x(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(n,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(p,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${u.value}members/process?id=${e.id}&payment_intent=${a.query.payment_intent}&payment_intent_client_secret=${a.query.payment_intent_client_secret}&redirect_status=${a.query.redirect_status}&payment_type=${a.query.payment_type}`})(e)},{default:d((()=>[J])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):f("",!0)])])])),_:1})}}});export default N;
