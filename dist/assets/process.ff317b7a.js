import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as s,a}from"./pdf_icon.4aa835a4.js";import{b as r,A as i,F as n}from"./index.d8d46d91.js";import{i as l}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{d as u,H as m,r as p,o,h as c,j as d,k as v,E as _,G as y,K as f,F as b,O as g,P as j,a9 as h,R as x,S as V}from"./vendor.c210e0cb.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a00cd105.js";import{p as w}from"./sidebarLayoutState.56e6ff2f.js";import"./V-Placeload.141ef784.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.5bbcd2c4.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./Companies.38868a7c.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},P=v("p",null,null,-1),q={class:"text-center mr-6"},F=v("img",{src:s,width:"40",alt:""},null,-1),C=b(" View PDF "),A={class:"text-center ml-6"},D=v("img",{src:s,width:"40",alt:""},null,-1),B=b(" View PDF "),L={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var O=u({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(s){const n=s;m((()=>{}));const u=p(!1),b=p(!1),g=p(null);p();const j=async e=>(g.value=e,u.value=!0,i.post(`sign/${n.member.membership_members.id}`,{sign:e}).then((e=>{b.value=!0,u.value=!1}))),h=()=>{j(l)};return(i,n)=>{const l=t,u=a,m=e;return o(),c(m,{radius:"small"},{default:d((()=>[v("div",S,[s.loading?f("",!0):(o(),c("div",$,[P,v("div",q,[v("a",{target:"_blank",href:`${_(r)}generateContract/${s.member.id}`},[F,v("p",null," contract_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(l,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[C])),_:1})],8,["href"])]),v("div",A,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${s.member.id}`},[D,v("p",null," weiver_"+y(s.member.id)+"_"+y(s.member.membership_members.id)+"_"+y(s.member.personal_identifications)+".pdf ",1),v(l,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[B])),_:1})],8,["href"])])])),v(u,{onSinFirmar:h,onOnSignYes:j}),b.value?(o(),c("div",L,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});const z={class:"page-content-inner"},I=v("h1",{class:"title is-4"},"Successful Payment",-1),T={class:"title is-3"},E={key:1,class:"mt-6"},G={class:"title is-3"},H=b(" View and sign: Family ");var K=u({expose:[],setup(s){w.value="Add New members",g({title:"Members"});const a=j();h();const r=p([]),l=p(null),u=p(null),b=p(!0);let S=p([]);m((()=>{i.post(`payment/${a.query.id}`,{payment_intent_client_secret:a.query.payment_intent_client_secret,redirect_status:a.query.redirect_status,payment_type:a.query.payment_type,membership:a.query.membership}).then((e=>{e.data.status&&(l.value=a.query.redirect_status,u.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,b.value=!1)}))}));return(s,i)=>{const l=e,u=O,m=t,p=k;return o(),c(p,null,{default:d((()=>[v("div",z,[v("div",null,[v(l,{class:"mb-4",color:"success"},{default:d((()=>[I])),_:1}),v("h2",T," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(u,{key:0,loading:b.value,member:r.value},null,8,["loading","member"])):f("",!0),_(S).length>0?(o(),c("div",E,[(o(!0),c(x,null,V(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(l,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(m,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${n.value}members/process?id=${e.id}&payment_intent=${a.query.payment_intent}&payment_intent_client_secret=${a.query.payment_intent_client_secret}&redirect_status=${a.query.redirect_status}&payment_type=${a.query.payment_type}`})(e)},{default:d((()=>[H])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):f("",!0)])])])),_:1})}}});export default K;
