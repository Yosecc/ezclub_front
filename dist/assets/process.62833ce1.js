import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.4157a476.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.c30bd7ac.js";import{_ as s,a}from"./pdf_icon.d35eaac2.js";import{b as r,A as i,F as n}from"./index.237f2b8c.js";import{i as l}from"./inputsLayaut.vue_vue&type=style&index=0&lang.0d5d75ea.js";import{d as u,H as m,r as p,o,h as c,j as d,k as v,E as _,G as y,K as b,F as f,O as g,P as j,a6 as h,R as x,S as V}from"./vendor.f713277a.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.22321809.js";import{p as w}from"./sidebarLayoutState.d8642b5c.js";import"./V-Placeload.181aa88a.js";import"./V-Control.cd8653b7.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a3d5e9c0.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.9231dd70.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.da49873f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.84be5322.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.489451c8.js";import"./useDropdown.ed7de453.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.43349f84.js";import"./V-Dropdown.1dce804e.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.bf6e495a.js";import"./Companies.16eee700.js";import"./activePanelState.4a6c12dd.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.b1da095c.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.60ada3d6.js";import"./video.75de616e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2bb6ede1.js";import"./darkModeState.ddf8736e.js";import"./AnimatedLogo.a7f258fd.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9fe3c8b3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ab4b414f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d2e8235d.js";import"./userPopovers.f4b9fc60.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},P=v("p",null,null,-1),q={class:"text-center mr-6"},F=v("img",{src:s,width:"40",alt:""},null,-1),C=f(" View PDF "),A={class:"text-center ml-6"},D=v("img",{src:s,width:"40",alt:""},null,-1),B=f(" View PDF "),L={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var O=u({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const n=s;m((()=>{}));const u=p(!1),f=p(!1),g=p(null);p();const j=async e=>(g.value=e,u.value=!0,i.post(`sign/${n.member.membership_members.id}`,{sign:e}).then((e=>{f.value=!0,u.value=!1}))),h=()=>{j(l)};return(i,n)=>{const l=t,u=a,m=e;return o(),c(m,{radius:"small"},{default:d((()=>[v("div",S,[s.loading?b("",!0):(o(),c("div",$,[P,v("div",q,[v("a",{target:"_blank",href:`${_(r)}generateContract/${s.member.id}`},[F,v("p",null," contract_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(l,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",A,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${s.member.id}`},[D,v("p",null," weiver_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(l,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[B])),_:1})],8,["href"])])])),v(u,{onSinFirmar:h,onOnSignYes:j}),f.value?(o(),c("div",L,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):b("",!0)])])),_:1})}}});const z={class:"page-content-inner"},I=v("h1",{class:"title is-4"},"Successful Payment",-1),T={class:"title is-3"},E={key:1,class:"mt-6"},G={class:"title is-3"},H=f(" View and sign: Family ");var K=u({expose:[],setup(s){w.value="Add New members",g({title:"Members"});const a=j();h();const r=p([]),l=p(null),u=p(null),f=p(!0);let S=p([]);m((()=>{i.post(`payment/${a.query.id}`,{payment_intent_client_secret:a.query.payment_intent_client_secret,redirect_status:a.query.redirect_status,payment_type:a.query.payment_type,membership:a.query.membership}).then((e=>{e.data.status&&(l.value=a.query.redirect_status,u.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,f.value=!1)}))}));return(s,i)=>{const l=e,u=O,m=t,p=k;return o(),c(p,null,{default:d((()=>[v("div",z,[v("div",null,[v(l,{class:"mb-4",color:"success"},{default:d((()=>[I])),_:1}),v("h2",T," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(u,{key:0,loading:f.value,member:r.value},null,8,["loading","member"])):b("",!0),_(S).length>0?(o(),c("div",E,[(o(!0),c(x,null,V(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(l,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(m,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${n.value}members/process?id=${e.id}&payment_intent=${a.query.payment_intent}&payment_intent_client_secret=${a.query.payment_intent_client_secret}&redirect_status=${a.query.redirect_status}&payment_type=${a.query.payment_type}`})(e)},{default:d((()=>[H])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):b("",!0)])])])),_:1})}}});export default K;
