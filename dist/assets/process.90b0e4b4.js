import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.0dcd607f.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.4abe3a2e.js";import{_ as s,a}from"./pdf_icon.9993139f.js";import{b as r,A as i,F as u}from"./index.1d7f2af1.js";import{i as n}from"./inputsLayaut.vue_vue&type=style&index=0&lang.d16e2fed.js";import{d as l,H as p,r as m,o,h as c,j as d,k as v,E as _,G as y,K as b,F as f,O as g,P as j,a6 as h,R as V,S as x}from"./vendor.19da945b.js";import{_ as S}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c58d0b00.js";import{p as k}from"./sidebarLayoutState.5b7e9825.js";import"./V-Placeload.b34646d0.js";import"./V-Control.0fd8783e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.fb54e505.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b1bf75d6.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.34a87e91.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e53206c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.34023ae5.js";import"./useDropdown.1ca217ec.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import"./V-Dropdown.0bed1217.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e4a5434e.js";import"./Companies.fb190344.js";import"./activePanelState.8ece22de.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.84814204.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import"./V-Message.vue_vue&type=script&setup=true&lang.2369e680.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.978fec7a.js";import"./navbarLayoutState.17611508.js";import"./video.1d4909e1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.5fb2b479.js";import"./darkModeState.0ffb262a.js";import"./AnimatedLogo.0ab862f3.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9996a98c.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d8c448b1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5f93fd07.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.222d1a7f.js";const w={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},P=v("p",null,null,-1),q={class:"text-center mr-6"},F=v("img",{src:s,width:"40",alt:""},null,-1),C=f(" View PDF "),A={class:"text-center ml-6"},D=v("img",{src:s,width:"40",alt:""},null,-1),L=f(" View PDF "),B={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var T=l({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const u=s;p((()=>{}));const l=m(!1),f=m(!1),g=m(null);m();const j=async e=>(g.value=e,l.value=!0,i.post(`sign/${u.member.membership_members.id}`,{sign:e}).then((e=>{f.value=!0,l.value=!1}))),h=()=>{j(n)};return(i,u)=>{const n=t,l=a,p=e;return o(),c(p,{radius:"small"},{default:d((()=>[v("div",w,[s.loading?b("",!0):(o(),c("div",$,[P,v("div",q,[v("a",{target:"_blank",href:`${_(r)}generateContract/${s.member.id}`},[F,v("p",null," contract_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",A,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${s.member.id}`},[D,v("p",null," weiver_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(n,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[L])),_:1})],8,["href"])])])),v(l,{onSinFirmar:h,onOnSignYes:j}),f.value?(o(),c("div",B,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):b("",!0)])])),_:1})}}});const O={class:"page-content-inner"},z=v("h1",{class:"title is-4"},"Successful Payment",-1),I={class:"title is-3"},E={key:1,class:"mt-6"},G={class:"title is-3"},H=f(" View and sign: Family ");var K=l({expose:[],setup(s){k.value="Add New members",g({title:"Members"});const a=j();h();const r=m([]),n=m(null),l=m(null),f=m(!0);let w=m([]);p((()=>{i.post(`payment/${a.query.id}`,{payment_intent_client_secret:a.query.payment_intent_client_secret,redirect_status:a.query.redirect_status,payment_type:a.query.payment_type,membership:a.query.membership}).then((e=>{e.data.status&&(n.value=a.query.redirect_status,l.value=e.data.urlPDF,r.value=e.data.member,w.value=e.data.familiares,f.value=!1)}))}));return(s,i)=>{const n=e,l=T,p=t,m=S;return o(),c(m,null,{default:d((()=>[v("div",O,[v("div",null,[v(n,{class:"mb-4",color:"success"},{default:d((()=>[z])),_:1}),v("h2",I," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(l,{key:0,loading:f.value,member:r.value},null,8,["loading","member"])):b("",!0),_(w).length>0?(o(),c("div",E,[(o(!0),c(V,null,x(_(w),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(n,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(p,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${u.value}members/process?id=${e.id}&payment_intent=${a.query.payment_intent}&payment_intent_client_secret=${a.query.payment_intent_client_secret}&redirect_status=${a.query.redirect_status}&payment_type=${a.query.payment_type}`})(e)},{default:d((()=>[H])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):b("",!0)])])])),_:1})}}});export default K;
