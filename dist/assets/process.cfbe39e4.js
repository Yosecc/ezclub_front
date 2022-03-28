import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.b7c0032f.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.aa32f7eb.js";import{_ as a,a as s}from"./pdf_icon.f75696e1.js";import{a as r,A as i,F as n}from"./index.dff6e6d0.js";import{d as u}from"./Companies.347b8efe.js";import{d as l,z as m,r as p,o,h as c,j as d,k as v,D as _,J as y,K as f,G as b,y as g,A as j,B as h,L as V,N as x}from"./vendor.15a9fac9.js";import{_ as k}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7841d6ec.js";import{p as w}from"./sidebarLayoutState.07b70d9b.js";import"./V-Placeload.8eafe621.js";import"./V-Control.44d5206e.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8a6b4e24.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.43522877.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.7adf508e.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.29ad23e5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0d03e53b.js";import"./useDropdown.d78aaa92.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.86bc661e.js";import"./V-Dropdown.a43ac3a4.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.97f8985a.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./activePanelState.0fff4eb9.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.a2bba20a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.15dd1b45.js";import"./V-Message.vue_vue&type=script&setup=true&lang.a28c7ad5.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.34f8ccc5.js";import"./navbarLayoutState.28124102.js";import"./video.df5a6d79.js";import"./darkModeState.618bc3a7.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.24f1a137.js";import"./AnimatedLogo.f5a41950.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e1402ad6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ea79e4d6.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.fe4374a2.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.a386568b.js";const S={class:"columns is-multiline"},$={key:0,class:"d-flex justify-content-center column is-12 mb-4"},q=v("p",null,null,-1),P={class:"text-center mr-6"},C=v("img",{src:a,width:"40",alt:""},null,-1),F=b(" View PDF "),A={class:"text-center ml-6"},D=v("img",{src:a,width:"40",alt:""},null,-1),B=b(" View PDF "),L={key:1,class:"text-center mb-4 mt-5 mx-auto"},M=v("p",{class:"mb-4 title is-5"},"Saved signature",-1);var T=l({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(a){const n=a;m((()=>{}));const l=p(!1),b=p(!1),g=p(null);p();const j=async e=>(g.value=e,l.value=!0,i.post(`sign/${n.member.membership_members.id}`,{sign:e}).then((e=>{b.value=!0,l.value=!1}))),h=()=>{j(u)};return(i,n)=>{const u=t,l=s,m=e;return o(),c(m,{radius:"small"},{default:d((()=>[v("div",S,[a.loading?f("",!0):(o(),c("div",$,[q,v("div",P,[v("a",{target:"_blank",href:`${_(r)}generateContract/${a.member.id}`},[C,v("p",null," contract_"+y(a.member.id)+"_"+y(a.member.membership_members.id)+"_"+y(a.member.personal_identifications)+".pdf ",1),v(u,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[F])),_:1})],8,["href"])]),v("div",A,[v("a",{target:"_blank",href:`${_(r)}generateWeiver/${a.member.id}`},[D,v("p",null," weiver_"+y(a.member.id)+"_"+y(a.member.membership_members.id)+"_"+y(a.member.personal_identifications)+".pdf ",1),v(u,{color:"success",outlined:"",class:"mt-4 py-1"},{default:d((()=>[B])),_:1})],8,["href"])])])),v(l,{onSinFirmar:h,onOnSignYes:j}),b.value?(o(),c("div",L,[M,v("img",{src:g.value,width:"400",height:"135",alt:""},null,8,["src"])])):f("",!0)])])),_:1})}}});const z={class:"page-content-inner"},I=v("h1",{class:"title is-4"},"Successful Payment",-1),N={class:"title is-3"},O={key:1,class:"mt-6"},G={class:"title is-3"},J=b(" View and sign: Family ");var K=l({expose:[],setup(a){w.value="Add New members",g({title:"Members"});const s=j();h();const r=p([]),u=p(null),l=p(null),b=p(!0);let S=p([]);m((()=>{i.post(`payment/${s.query.id}`,{payment_intent_client_secret:s.query.payment_intent_client_secret,redirect_status:s.query.redirect_status,payment_type:s.query.payment_type,membership:s.query.membership}).then((e=>{e.data.status&&(u.value=s.query.redirect_status,l.value=e.data.urlPDF,r.value=e.data.member,S.value=e.data.familiares,b.value=!1)}))}));return(a,i)=>{const u=e,l=T,m=t,p=k;return o(),c(p,null,{default:d((()=>[v("div",z,[v("div",null,[v(u,{class:"mb-4",color:"success"},{default:d((()=>[I])),_:1}),v("h2",N," Sign "+y(r.value.name)+" "+y(r.value.second_name)+" "+y(r.value.last_name),1),r.value?(o(),c(l,{key:0,loading:b.value,member:r.value},null,8,["loading","member"])):f("",!0),_(S).length>0?(o(),c("div",O,[(o(!0),c(V,null,x(_(S),((e,t)=>(o(),c("div",{key:`familu${t}`},[v(u,{class:"mb-4",radius:"small"},{default:d((()=>[v("h2",G," Sign Family: "+y(e.name)+" "+y(e.second_name)+" "+y(e.last_name),1),v(m,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${n.value}members/process?id=${e.id}&payment_intent=${s.query.payment_intent}&payment_intent_client_secret=${s.query.payment_intent_client_secret}&redirect_status=${s.query.redirect_status}&payment_type=${s.query.payment_type}`})(e)},{default:d((()=>[J])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):f("",!0)])])])),_:1})}}});export default K;
