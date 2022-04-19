import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.eccade9c.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.49d2421a.js";import{_ as s,a}from"./pdf_icon.6c783634.js";import{a as r,A as i,F as n}from"./index.8761bcab.js";import{d as u}from"./Companies.88ea1aa1.js";import{d as l,F as m,r as p,o,h as c,j as d,k as v,B as _,E as y,K as b,D as f,H as g,I as j,a0 as h,L as V,O as x}from"./vendor.2a366383.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.6b7b3feb.js";import{p as w}from"./sidebarLayoutState.823a976e.js";import"./V-Placeload.3e8532b9.js";import"./V-Control.823aa060.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c857efc5.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdf55a69.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f51ce7a5.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9b481892.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3dbf491e.js";import"./useDropdown.5d4b83cd.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.244017f8.js";import"./V-Dropdown.7f68fdc5.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a7aaf8b.js";import"./activePanelState.a01282c8.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d3ad3e35.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.012984ee.js";import"./V-Message.vue_vue&type=script&setup=true&lang.7325de64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.09560c7d.js";import"./navbarLayoutState.e7107be4.js";import"./video.05dc7c38.js";import"./darkModeState.5fa7e1b9.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f6698f09.js";import"./AnimatedLogo.b4f93b2c.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e08f534d.js";import"./V-Block.vue_vue&type=script&setup=true&lang.63467624.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.402d4ac4.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.95e430b8.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},q=v("p",null,null,-1),P={class:"text-center mr-6"},F=v("img",{src:s,width:"40",alt:""},null,-1),C=f(" View PDF "),D={class:"text-center ml-6"},A=v("img",{src:s,width:"40",alt:""},null,-1),B=f(" View PDF "),L={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var T=l({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const n=s;m((()=>{}));const l=p(!1),f=p(!1),g=p(null);p();const j=async e=>(g.value=e,l.value=!0,i.post(`sign/${n.member.membership_members.id}`,{sign:e}).then((e=>{f.value=!0,l.value=!1}))),h=()=>{j(u)};return(i,n)=>{const u=t,l=a,m=e;return o(),c(m,{radius:"small"},{default:d((()=>[v("div",S,[s.loading?b("",!0):(o(),c("div",$,[q,v("div",P,[v("a",{target:"_blank",href:`${_(r)}generateContract/${s.member.id}`},[F,v("p",null," contract_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(u,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",D,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${s.member.id}`},[A,v("p",null," weiver_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(u,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[B])),_:1})],8,["href"])])])),v(l,{onSinFirmar:h,onOnSignYes:j}),f.value?(o(),c("div",L,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):b("",!0)])])),_:1})}}});const I={class:"page-content-inner"},O=v("h1",{class:"title is-4"},"Successful Payment",-1),z={class:"title is-3"},E={key:1,class:"mt-6"},H={class:"title is-3"},K=f(" View and sign: Family ");var N=l({expose:[],setup(s){w.value="Add New members",g({title:"Members"});const a=j();h();const r=p([]),u=p(null),l=p(null),f=p(!0);let S=p([]);m((()=>{i.post(`payment/${a.query.id}`,{payment_intent_client_secret:a.query.payment_intent_client_secret,redirect_status:a.query.redirect_status,payment_type:a.query.payment_type,membership:a.query.membership}).then((e=>{e.data.status&&(u.value=a.query.redirect_status,l.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,f.value=!1)}))}));return(s,i)=>{const u=e,l=T,m=t,p=k;return o(),c(p,null,{default:d((()=>[v("div",I,[v("div",null,[v(u,{class:"mb-4",color:"success"},{default:d((()=>[O])),_:1}),v("h2",z," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(l,{key:0,loading:f.value,member:r.value},null,8,["loading","member"])):b("",!0),_(S).length>0?(o(),c("div",E,[(o(!0),c(V,null,x(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(u,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",H," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(m,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${n.value}members/process?id=${e.id}&payment_intent=${a.query.payment_intent}&payment_intent_client_secret=${a.query.payment_intent_client_secret}&redirect_status=${a.query.redirect_status}&payment_type=${a.query.payment_type}`})(e)},{default:d((()=>[K])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):b("",!0)])])])),_:1})}}});export default N;
