import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{_ as a,a as s}from"./pdf_icon.dfc778b2.js";import{d as r,o as n,r as i,i as l,j as u,k as m,l as o,F as c,H as p,I as d,G as v,P as _,O as y,aa as f,S as g,U as b}from"./vendor.435948fe.js";import{b as j,A as h,F as x}from"./index.ff49a0f4.js";import{i as V}from"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import{_ as w}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.23edd7aa.js";import{p as S}from"./sidebarLayoutState.c7ec3620.js";import"./V-Placeload.9c5aed6e.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ec1ed57b.js";import"./useDropdown.9dc4bfe3.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.46d03776.js";import"./V-Dropdown.3004e9ea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3f5189ae.js";import"./Companies.5246daaa.js";import"./activePanelState.66f70896.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e4d5431d.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a5b69815.js";import"./video.413cf4d2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3a098275.js";import"./darkModeState.010a41bc.js";import"./AnimatedLogo.030703f2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.a93691d2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.0c445522.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.d358ddae.js";import"./userPopovers.f4b9fc60.js";const k={class:"columns is-multiline"},P={key:0,class:"d-flex justify-content-center column is-12 mb-4"},$=o("p",null,null,-1),C={class:"text-center mr-6"},q=o("img",{src:a,width:"40",alt:""},null,-1),F=v(" View PDF "),B={class:"text-center ml-6"},D=o("img",{src:a,width:"40",alt:""},null,-1),A=v(" View PDF "),L={key:1,class:"text-center mb-4 mt-5 mx-auto"},I=o("p",{class:"mb-4 title is-5"},"Saved signature",-1);var M=r({expose:[],props:{member:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(a){const r=a;n((()=>{}));const v=i(!1),_=i(!1),y=i(null);i();const f=async e=>(y.value=e,v.value=!0,h.post(`sign/${r.member.membership_members.id}`,{sign:e}).then((e=>{_.value=!0,v.value=!1}))),g=()=>{f(V)};return(r,n)=>{const i=t,v=s,b=e;return l(),u(b,{radius:"small"},{default:m((()=>[o("div",k,[a.loading?d("v-if",!0):(l(),u("div",P,[$,o("div",C,[o("a",{target:"_blank",href:`${c(j)}generateContract/${a.member.id}`},[q,o("p",null," contract_"+p(a.member.id)+"_"+p(a.member.membership_members.id)+"_"+p(a.member.personal_identifications)+".pdf ",1),o(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:m((()=>[F])),_:1})],8,["href"])]),o("div",B,[o("a",{target:"_blank",href:`${c(j)}generateWeiver/${a.member.id}`},[D,o("p",null," weiver_"+p(a.member.id)+"_"+p(a.member.membership_members.id)+"_"+p(a.member.personal_identifications)+".pdf ",1),o(i,{color:"success",outlined:"",class:"mt-4 py-1"},{default:m((()=>[A])),_:1})],8,["href"])])])),d(' <VPlaceload\r\n        v-if="load && !firmado"\r\n        width="400px"\r\n        height="135px"\r\n        style="margin-top: 10px"\r\n        class="mx-auto"\r\n      /> '),d(' <VueDrawingCanvas\r\n        v-if="!firmado && !load"\r\n        class="column is-6 mx-auto"\r\n        ref="VueCanvasDrawing"\r\n        save-as="jpeg"\r\n        width="600"\r\n        height="200"\r\n      /> '),o(v,{onSinFirmar:g,onOnSignYes:f}),_.value?(l(),u("div",L,[I,o("img",{src:y.value,width:"400",height:"135",alt:""},null,8,["src"])])):d("v-if",!0),d(' <div\r\n        v-if="!firmado"\r\n        class="column is-12 mx-auto d-flex justify-content-center"\r\n      >\r\n        <V-Button color="info" class="text-center mx-auto" @click="viewFirma">\r\n          Sign and save\r\n        </V-Button>\r\n        <V-Button\r\n          color="danger"\r\n          class="text-center mx-auto"\r\n          @click="VueCanvasDrawing.reset()"\r\n        >\r\n          Reset\r\n        </V-Button>\r\n      </div> ')])])),_:1})}}});const O={class:"page-content-inner"},z=o("h1",{class:"title is-4"},"Successful Payment",-1),T={class:"title is-3"},U={key:1,class:"mt-6"},W={class:"title is-3"},G=v(" View and sign: Family ");var H=r({expose:[],setup(a){S.value="Add New members",_({title:"Members"});const s=y();f();const r=i([]),v=i(null),j=i(null),V=i(!0);let k=i([]);n((()=>{h.post(`payment/${s.query.id}`,{payment_intent_client_secret:s.query.payment_intent_client_secret,redirect_status:s.query.redirect_status,payment_type:s.query.payment_type,membership:s.query.membership}).then((e=>{e.data.status&&(v.value=s.query.redirect_status,j.value=e.data.urlPDF,r.value=e.data.member,k.value=e.data.familiares,V.value=!1)}))}));return(a,n)=>{const i=e,v=M,_=t,y=w;return l(),u(y,null,{default:m((()=>[d(" Content Wrapper "),o("div",O,[d(' <VPlaceload v-if="paymentStatus == null" height="500px" /> '),d(" v-if=\"paymentStatus == 'succeeded'\" "),o("div",null,[o(i,{class:"mb-4",color:"success"},{default:m((()=>[z])),_:1}),o("h2",T," Sign "+p(r.value.name)+" "+p(r.value.second_name)+" "+p(r.value.last_name),1),r.value?(l(),u(v,{key:0,loading:V.value,member:r.value},null,8,["loading","member"])):d("v-if",!0),c(k).length>0?(l(),u("div",U,[(l(!0),u(g,null,b(c(k),((e,t)=>(l(),u("div",{key:`familu${t}`},[o(i,{class:"mb-4",radius:"small"},{default:m((()=>[o("h2",W," Sign Family: "+p(e.name)+" "+p(e.second_name)+" "+p(e.last_name),1),o(_,{color:"warning",class:"text-center mx-auto",onClick:t=>(e=>{window.location.href=`${x.value}members/process?id=${e.id}&payment_intent=${s.query.payment_intent}&payment_intent_client_secret=${s.query.payment_intent_client_secret}&redirect_status=${s.query.redirect_status}&payment_type=${s.query.payment_type}`})(e)},{default:m((()=>[G])),_:2},1032,["onClick"])])),_:2},1024)])))),128))])):d("v-if",!0)])])])),_:1})}}});export default H;
