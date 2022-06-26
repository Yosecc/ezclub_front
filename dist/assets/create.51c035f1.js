import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.a5e89951.js";import{_ as t}from"./V-Control.37224b15.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.4e36ac54.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.e733a91e.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.8b612603.js";import{d as i,r,w as n,b as u,o,i as p,j as m,k as c,E as d,S as v,U as f,H as y,W as b,_ as g,F as h,z as _,A as S,G as j,I as x,B as C,D as M,P as A,X as k}from"./vendor.073d5183.js";import{p as P,h as D,g as V,s as N,v as w,n as E,a as I,e as J}from"./index.845d558b.js";import{X as O,z as T,i as B,Y as F,Z as R,_ as L,c as $,$ as z,f as q,a0 as G,k as U,o as X,a1 as H,a2 as W,M as Y,a3 as Z,a4 as K,a5 as Q}from"./Members.17f9c192.js";import{_ as ee}from"./V-Card.vue_vue&type=script&setup=true&lang.24389008.js";import{_ as te}from"./V-Placeload.4695e536.js";import{a as ae,b as se}from"./Presupuesto.vue_vue&type=script&setup=true&lang.69ac470f.js";import{_ as le}from"./V-Progress.vue_vue&type=script&setup=true&lang.9db154ee.js";import{_ as ie}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.c80d93e3.js";import{a as re,m as ne}from"./Memberships.7f99c534.js";import{g as ue}from"./Recurrences.9b43e512.js";import{g as oe}from"./Discounts.843311ce.js";import{e as pe,c as me,s as ce,d as de}from"./config.5caea121.js";import{h as ve}from"./Staffs.3d4432b0.js";import{p as fe}from"./sidebarLayoutState.e4d5b56e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b631b135.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.29e348bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.662fbc8e.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.adff0cc1.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.ef092ab3.js";import"./Diciplines.73a6e11e.js";import"./Companies.ca72e995.js";import"./MemberCards.vue_vue&type=script&setup=true&lang.d7022d68.js";import"./signComponent.vue_vue&type=script&setup=true&lang.607cd820.js";import"./pdf_icon.c564bb1d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.038e68d0.js";import"./useDropdown.c13972ea.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b94da949.js";import"./V-Dropdown.3dc4bc24.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.b93971f9.js";import"./activePanelState.c5eca1d9.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cc1307cb.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.6f7fb019.js";import"./video.969d11fd.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.8493da55.js";import"./darkModeState.1faec688.js";import"./AnimatedLogo.1cc94f36.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.9e6a0d72.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e2f5126f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.dc4fcfa1.js";import"./userPopovers.f4b9fc60.js";var ye=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,i=r(!1);n((()=>a.inputs),((e,t)=>{v()}));const v=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},f=u((()=>y.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),y=r(!1),b=e=>{y.value=!e.input.model,v()},g=e=>{let a=P(f.value);D.value||(a.select_type=a.select_type?"Company":"Individual",O.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const r=s,n=l;return o(),p(n,{titles:{title:e.title},"is-loading":i.value,buttons:["next","back"],step:1,onChangeStep:g},{default:m((()=>[c(r,{"inputs-step":d(f),onChangeSwitch:b},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),be=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,i)=>{const r=s,n=l;return o(),p(n,{titles:{title:e.title},buttons:["next","prev"],step:2,onChangeStep:a},{default:m((()=>[c(r,{"inputs-step":d(T)},null,8,["inputs-step"])])),_:1},8,["titles"])}}});const ge={key:0},he=h(" Remove Family Member "),_e={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Se=h(" Add Another Family Member ");var je=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:h}){const j=i,x=r(!1);n((()=>j.inputs),((e,t)=>{C()}));const C=()=>{x.value=!0,setTimeout((()=>{x.value=!1}),500)},M=r([]);u((()=>(C(),M.value.forEach(((e,t)=>{k.value.includes(t)?M.value[t]=e.filter((e=>e.category.includes("Minor"))):M.value[t]=JSON.parse(JSON.stringify(j.inputs))})),M.value)));const A=e=>{h("returData",M),h("changeStep",e)},k=r([]),P=u((()=>M.value.length>0)),D=r(0),E=()=>{if(D.value>0)for(var e=0;e<D.value;++e){const e=_(JSON.parse(JSON.stringify(j.inputs)));V(e,"misma_direccion").change=O,V(e,"category").change=I,M.value.push(e)}},I=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(J(e),N(e,"email",`family_${S().format("hms")}_${w(B.value,"email")}`),N(e,"phone",w(B.value,"phone"))),console.log(this.model)},J=e=>{N(e,"address",w(B.value,"address")),N(e,"postal_code",w(B.value,"postal_code")),N(e,"country_id",w(B.value,"country_id")),N(e,"city_id",w(B.value,"city_id")),N(e,"state_id",w(B.value,"state_id"))},O=function(e){console.log("llejay"),this.model?(N(e,"postal_code",""),N(e,"country_id",""),N(e,"city_id",""),N(e,"state_id","")):J(e)};return(r,n)=>{const u=s,h=e,_=ee,S=t,j=a,C=l;return o(),p(C,{titles:{title:i.title},"is-loading":x.value,buttons:["next","prev"],step:2,onChangeStep:A},{default:m((()=>[d(P)?(o(),p("div",ge,[(o(!0),p(v,null,f(M.value,((e,t)=>(o(),p(_,{key:t,class:"mb-4"},{default:m((()=>[c(u,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void k.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),c(h,{onClick:e=>M.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:m((()=>[he])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):y("v-if",!0),d(P)?y("v-if",!0):(o(),p("div",_e,[c(j,{class:"mb-4"},{default:m((()=>[c(S,null,{default:m((()=>[b(c("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>D.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[g,D.value]])])),_:1})])),_:1}),c(h,{onClick:E,color:"info",icon:"fas fa-check",raised:""},{default:m((()=>[Se])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),xe=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=r(!1);n((()=>a.inputs),((e,t)=>{f()}));const v=e=>{let a=[];y.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),F.value=a,t("returnData",a),t("changeStep",e)},f=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},y=u((()=>a.inputs)),b=r(!1),g=e=>{b.value=!e.input.model,f()};return(t,a)=>{const r=s,n=l;return o(),p(n,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:v},{default:m((()=>[c(r,{"inputs-step":d(y),onChangeSwitch:g},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const Ce={class:""};var Me=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=r(!1),y=r([]);n((()=>a.inputs),((e,t)=>{b()}));const b=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},g=e=>{let a=null;R.forEach(((e,t)=>{0==t?a=e.inputs:y.value.push(e)})),D.value||(L.value=a,t("returnData",{memberMembership:a,familyMembership:y}),t("changeStep",e))},h=u((()=>{const e=_([]);R.value=[];let t=[];$.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(S(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(S(a.familiares[s],JSON.parse(JSON.stringify(t))));return R.value=e,e})),S=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==z.value?(V(t,"recurrence").model=!1,V(t,"recurrence").display=!1,V(t,"is_initiation_fee").model=!0,V(t,"is_card_price").model=!0):(V(t,"recurrence").model=!0,V(t,"recurrence").display=!0,V(t,"is_initiation_fee").model=!1,V(t,"is_card_price").model=!1),s.member=e,s.membresia=t,q(s.membresia,s.member),s};return(t,a)=>{const r=s,n=ee,u=l;return o(),p(u,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:g},{default:m((()=>[(o(!0),p(v,null,f(d(h),((e,t)=>(o(),p(n,{key:`ss${t}`,class:"mb-4"},{default:m((()=>[c("p",Ce,[c("b",null,j(d(w)(e.member,"name"))+" "+j(d(w)(e.member,"second_name"))+" "+j(d(w)(e.member,"last_name")),1)]),c(r,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128)),c(n,{class:"mb-4"},{default:m((()=>[c(r,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","isloading"])}}});const Ae={key:1},ke={class:"d-flex justify-content-end w-100"},Pe={class:"d-flex justify-content-between w-100"},De=h(" Finish "),Ve=h(" Cancel "),Ne=h(" Register another member ");var we=i({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){r(!1);const s=r(!1),i=u((()=>R.value[0])),n=u((()=>{let e=[];return R.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));x((()=>{V(G.value,"mismatarjeta").change=b,U.value=[],i.value?(X(i.value.membresia,i.value.member),n.value.length&&n.value.forEach((e=>{X(e.membresia,e.member)}))):(console.error("No tiene membresia"),E.error("Membership is required"))}));const b=function(){this.model},g=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},h=u((()=>{let e=[];return U.value.forEach((t=>{0==V(t.member,"is_family").model&&e.push(t)})),U.value.forEach((t=>{1==V(t.member,"is_family").model&&e.push(t)})),e}));r([]);const _=()=>{window.location.reload()},S=r([]),j=e=>{S.value.push(e)};return(a,i)=>{const r=te,n=ae,u=se,b=e,x=l;return o(),p(x,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:g},{default:m((()=>[y(' <div class="d-flex justify-content-end align-items-center mb-4">\n\n      <VButton @click="PaymentAllMembership" color="primary"\n        >Pay all memberships</VButton\n      >\n\n      <div v-if="miembrosNuevos.length">\n        <stripeAddCard\n          :amount="props.total"\n          :id="miembrosNuevos[0].idMember"\n          :member_membership="miembrosNuevos[0].idMemberMembership"\n          :variosMiembros="true"\n          :miembros="miembrosNuevos"\n          @PaymentAction="PaymentAction"\n        />\n      </div>\n      \n    </div> '),d(U).length?y("v-if",!0):(o(),p(r,{key:0,height:"300px",class:"mb-4"})),d(U)?(o(),p("div",Ae,[(o(!0),p(v,null,f(d(h),((e,t)=>(o(),p(u,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:m((()=>[c("div",ke,[c(n,{member:e.member,membresia:e.membresia,contact:d(F),presupuesto_id:e.presupuesto_id,"categories-members":d(H),"notas-input":d(W),total:e.totales.upfront.amount_total,onPaymentAction:j},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total"])])])),_:2},1032,["presupuesto"])))),128))])):y("v-if",!0),c("div",Pe,[d(h).length>0&&S.value.length==d(h).length?(o(),p(b,{key:0,color:"danger",to:{name:"index"}},{default:m((()=>[De])),_:1})):(o(),p(b,{key:1,color:"danger",to:{name:"index"}},{default:m((()=>[Ve])),_:1})),d(h).length>0&&S.value.length==d(h).length?(o(),p(b,{key:2,color:"success",onClick:_},{default:m((()=>[Ne])),_:1})):y("v-if",!0)])])),_:1},8,["titles","is-loading"])}}});C("data-v-5a5e3b40");const Ee={class:"content"},Ie={class:"content-text"};M();var Je=i({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=u((()=>t.active?100:0));return(t,s)=>{const l=le;return o(),p("div",Ee,[c("div",{class:["circle",e.active?"active":""]},null,2),c(l,{class:"progressbar",value:d(a),size:"smaller"},null,8,["value"]),c("div",Ie,[c("p",null,"STEP "+j(e.step),1),c("p",null,[c("b",null,j(e.text),1)])])])}}});Je.__scopeId="data-v-5a5e3b40";const Oe={class:"columns is-multiline"},Te={class:"column is-12"},Be={class:"column is-9"},Fe={class:"column is-3"};var Re=i({expose:[],setup(s){fe.value="Add New members",A({title:"Members"}),x((()=>{z(),re().then((e=>{I($,"memberships_id",e.data.memberships)})),V($,"memberships_id").disabled=!1,V($,"recurrences_id").disabled=!1,V($,"is_initiation_fee").disabled=!1,V($,"discount").disabled=!1,oe(1,"membership").then((e=>{I($,"discount",e.data.discounts)})),ue(),pe().then((e=>{I(B,"city_id",me.value),I(Y,"city_id",me.value),I(T,"city_id",me.value),I(B,"state_id",ce.value),I(Y,"state_id",ce.value),I(T,"state_id",ce.value),I(B,"country_id",de.value),I(Y,"country_id",de.value),I(T,"country_id",de.value)})),ve().then((e=>{I($,"staff_id",e.data)}))}));const l=r(1),i=r([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),n=u((()=>B.value.filter((e=>e.categories.includes(H.value.model))))),g=u((()=>i.value.find((e=>e.step==l.value&&e.categories.includes(H.value.model))))),_=u((()=>i.value.filter((e=>e.categories.includes(H.value.model)))));u((()=>P(T.value)));const S=(e,t=3,a={})=>{H.value.model,6==e?sendData(t,a):l.value=e},C=r(null),M=e=>{C.value=e},D=r(null),N=e=>{D.value=e},w=r([]),E=e=>{w.value=e.value},O=r([]),F=e=>{O.value=e.familyMembership.value,L.value=e.memberMembership};r(null),r(null),r(null);const z=()=>{Z.value=null,K.value=null;let e=["is_family","principal_family"];J(B.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],J($.filter((t=>!e.includes(t.name)))),J(W.value),J(T.value)};return(s,i)=>{const r=e,u=t,x=a,C=ye,A=be,P=je,D=xe,V=Me,I=we,J=Je,T=ie;return o(),p(T,null,{default:m((()=>[y(" Display a payment form "),c("div",Oe,[c("div",Te,[1==l.value?(o(),p(x,{key:0,class:"w-100",addons:""},{default:m((()=>[(o(!0),p(v,null,f(d(H).values,((e,t)=>(o(),p(u,{key:`categoymember-${t}`},{default:m((()=>[c(r,{onClick:t=>d(H).model=e,color:d(H).model==e?"primary":void 0,rounded:""},{default:m((()=>[h(j("Prospect"==e?"Temporary Members":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):y("v-if",!0)]),c("div",Be,[y(" memberInformation "),b(c(C,{type:"create",title:d(g).text,inputs:d(n),onChangeStep:S,onReturData:M},null,8,["title","inputs"]),[[k,1==l.value]]),y(" parentGuardian "),b(c(A,{title:d(g).text,onChangeStep:S},null,8,["title"]),[[k,2==l.value&&"Minor"==d(H).model]]),y(" familyMembers "),b(c(P,{type:"create",title:d(g).text,inputs:d(Y),onChangeStep:S,onReturData:E},null,8,["title","inputs"]),[[k,2==l.value&&"Adult"==d(H).model]]),y(" contactPreference "),b(c(D,{type:"create",title:d(g).text,inputs:d(Q),onChangeStep:S,onReturnData:N},null,8,["title","inputs"]),[[k,3==l.value||2==l.value&&"Prospect"==d(H).model]]),y(" selectMembership "),b(c(V,{type:"create",member:d(n),familiares:w.value,title:d(g).text,inputs:d(R),memberships:d(ne),notes:d(W),onChangeStep:S,onReturnData:F},null,8,["member","familiares","title","inputs","memberships","notes"]),[[k,4==l.value]]),y(" paymentMethod "),5==l.value?(o(),p(I,{key:0,type:"create",title:d(g).text,member:d(n),familiares:w.value,inputs:d(R),"member-membership":d(L),"family-membership":O.value,onChangeStep:S},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):y("v-if",!0)]),c("div",Fe,[(o(!0),p(v,null,f(d(_),((e,t)=>(o(),p(J,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default Re;
