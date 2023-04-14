import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as t}from"./V-Control.9f6b030b.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.c811f515.js";import{d as i,r,w as n,c as u,i as o,j as p,F as m,k as d,l as c,o as v,H as f,Q as y,I as b,S as g,U as _,W as h,_ as S,G as x,A as j,B as C,D as M,E as A,P,X as k}from"./vendor.b96c0b62.js";import{g as V,p as D,h as N,e as w,s as E,v as I,n as O,a as J}from"./index.bff4cc89.js";import{a2 as B,a3 as T,d as q,X as F,i as L,a4 as R,b as $,a5 as G,a6 as U,a7 as z,l as X,a8 as H,q as Q,v as W,a9 as K,aa as Y,c as Z,ab as ee,ac as te,ad as ae}from"./Members.26aaf2c4.js";import{_ as se}from"./SearchBar.vue_vue&type=style&index=0&lang.3875683b.js";import{_ as le}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{_ as ie}from"./V-Placeload.43c61814.js";import{a as re}from"./generateMember.vue_vue&type=script&setup=true&lang.255e3ec3.js";import{_ as ne}from"./Presupuesto.vue_vue&type=script&setup=true&lang.2cc6b731.js";import{_ as ue}from"./V-Progress.vue_vue&type=script&setup=true&lang.d732d180.js";import{_ as oe}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.0f2f174e.js";import{a as pe,m as me}from"./Memberships.d797f4f1.js";import{g as de}from"./Recurrences.0295c4a3.js";import{g as ce}from"./Discounts.69f6e8d1.js";import{e as ve,c as fe,s as ye,d as be}from"./config.2207a00d.js";import{g as ge}from"./Staffs.03142590.js";import{p as _e}from"./sidebarLayoutState.a7097173.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.72c1da57.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.905c9e6e.js";import"./Diciplines.fdd4fac7.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import"./Companies.f56345b4.js";import"./MemberCards.9fece164.js";import"./signComponent.vue_vue&type=script&setup=true&lang.feb5cdd2.js";import"./pdf_icon.d291625a.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.f66e3794.js";import"./useDropdown.51b21268.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";var he=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,i=r(!1);n((()=>a.inputs),((e,t)=>{v()}));const v=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},f=u((()=>{const e=a.inputs;return e.length&&null!=V(e,"country_id")&&(V(e,"country_id").model=34),console.log("data",e),y.value?e.filter((e=>e.typeMember.includes("Company"))):e.filter((e=>e.typeMember.includes("Individual")))})),y=r(!1),b=e=>{y.value=!e.input.model,v()},g=e=>{let a=D(f.value);N.value||(a.select_type=a.select_type?"Company":"Individual",T.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const r=s,n=l;return o(),p(n,{titles:{title:e.title},"is-loading":i.value,buttons:["next"],"buttons-disabled":m(B),step:1,onChangeStep:g},{default:d((()=>[c(r,{"inputs-step":m(f),onChangeSwitch:b},null,8,["inputs-step"])])),_:1},8,["titles","is-loading","buttons-disabled"])}}}),Se=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=r(null),i=r([]),u=e=>{t("changeStep",e)};v((()=>{i.value=[],V(q.value,"parent_email").disabled=!0})),n((()=>F.value),(()=>{F.value?(i.value=[],console.log(F.value),V(q.value,"member_id").model=F.value.id,V(q.value,"parent_email").model=F.value.email,V(q.value,"postal_code").model=F.value.postal_code,V(q.value,"city_id").model=F.value.city_id,V(q.value,"country_id").model=F.value.country_id,V(q.value,"state_id").model=F.value.state_id,V(q.value,"parent_name").model=F.value.name,V(q.value,"address").model=F.value.address,V(q.value,"parent_second_name").model=F.value.second_name,V(q.value,"parent_last_name").model=F.value.last_name,V(q.value,"parent_goverment_id").model=F.value.goverment_id,V(q.value,"parent_personal_identifications").model=F.value.personal_identifications,V(q.value,"parent_phone").model=F.value.phone,q.value.forEach((e=>{e.required=!1}))):(w(q.value),q.value.forEach((e=>{e.required=!0})))}));const g=e=>{!1===e?(i.value.push("next"),V(q.value,"parent_email").model=""):(i.value=[],V(q.value,"parent_email").model=e)};return(t,r)=>{const n=se,v=s,_=l;return o(),p(_,{titles:{title:e.title},buttons:["next","prev"],"buttons-disabled":i.value,step:2,onChangeStep:u},{default:d((()=>[c("p",null,f(a.value),1),c(n,{"is-head":!0,"place-holder":"Enter the guardian email",onOnSubmit:g,class:"",modelValue:m(F),"onUpdate:modelValue":r[1]||(r[1]=e=>y(F)?F.value=e:null)},null,8,["modelValue"]),b(' <div\n      v-if="!memberGuardian"\n      class="d-flex justify-content-center mt-5 w-100"\n      style="border-bottom: 1px solid rgba(0, 0, 0, 0.05)"\n    >\n      <p>Or</p>\n    </div> '),c(v,{"inputs-step":m(q)},null,8,["inputs-step"])])),_:1},8,["titles","buttons-disabled"])}}});const xe={key:0},je=x(" Remove Family Member "),Ce={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Me=x(" Add Another Family Member ");var Ae=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:v}){const f=i,y=r(!1);n((()=>f.inputs),((e,t)=>{x()}));const x=()=>{y.value=!0,setTimeout((()=>{y.value=!1}),500)},M=r([]);u((()=>(x(),M.value.forEach(((e,t)=>{P.value.includes(t)?M.value[t]=e.filter((e=>e.category.includes("Minor"))):M.value[t]=JSON.parse(JSON.stringify(f.inputs))})),M.value)));const A=e=>{v("returData",M),v("changeStep",e)},P=r([]),k=u((()=>M.value.length>0)),D=r(0),N=()=>{if(D.value>0)for(var e=0;e<D.value;++e){const e=j(JSON.parse(JSON.stringify(f.inputs)));V(e,"misma_direccion").change=J,V(e,"category").change=w,M.value.push(e)}},w=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(O(e),E(e,"email",`family_${C().format("hms")}_${I(L.value,"email")}`),E(e,"phone",I(L.value,"phone"))),console.log(this.model)},O=e=>{E(e,"address",I(L.value,"address")),E(e,"postal_code",I(L.value,"postal_code")),E(e,"country_id",I(L.value,"country_id")),E(e,"city_id",I(L.value,"city_id")),E(e,"state_id",I(L.value,"state_id"))},J=function(e){console.log("llejay"),this.model?(E(e,"postal_code",""),E(e,"country_id",""),E(e,"city_id",""),E(e,"state_id","")):O(e)};return(r,n)=>{const u=s,v=e,f=le,x=t,j=a,C=l;return o(),p(C,{titles:{title:i.title},"is-loading":y.value,buttons:["next","prev"],step:2,onChangeStep:A},{default:d((()=>[m(k)?(o(),p("div",xe,[(o(!0),p(g,null,_(M.value,((e,t)=>(o(),p(f,{key:t,class:"mb-4"},{default:d((()=>[c(u,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void P.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),c(v,{onClick:e=>M.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:d((()=>[je])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):b("v-if",!0),m(k)?b("v-if",!0):(o(),p("div",Ce,[c(j,{class:"mb-4"},{default:d((()=>[c(x,null,{default:d((()=>[h(c("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>D.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[S,D.value]])])),_:1})])),_:1}),c(v,{onClick:N,color:"info",icon:"fas fa-check",raised:""},{default:d((()=>[Me])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),Pe=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=r(!1);n((()=>a.inputs),((e,t)=>{f()}));const v=e=>{let a=[];y.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),R.value=a,t("returnData",a),t("changeStep",e)},f=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},y=u((()=>a.inputs)),b=r(!1),g=e=>{b.value=!e.input.model,f()};return(t,a)=>{const r=s,n=l;return o(),p(n,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:v},{default:d((()=>[c(r,{"inputs-step":m(y),onChangeSwitch:g},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const ke={class:""};var Ve=i({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=r(!1),y=r([]);n((()=>a.inputs),((e,t)=>{h()})),v((()=>{let e=$.findIndex((e=>"prorrateo"==e.name)),t=$.findIndex((e=>"schedules"==e.name));V($,"recurrence").class="is-12",-1!=e&&($.splice(e,1),h()),-1!=t&&($.splice(t,1),h())}));const h=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},S=e=>{let a=null;G.forEach(((e,t)=>{0==t?a=e.inputs:y.value.push(e)})),N.value||(U.value=a,t("returnData",{memberMembership:a,familyMembership:y}),t("changeStep",e))},x=u((()=>{const e=j([]);G.value=[];let t=[];$.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(C(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(C(a.familiares[s],JSON.parse(JSON.stringify(t))));return G.value=e,e})),C=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==z.value?(V(t,"recurrence").model=!1,V(t,"recurrence").display=!1,V(t,"is_initiation_fee").model=!0,V(t,"is_card_price").model=!0):(V(t,"recurrence").model=!0,V(t,"recurrence").display=!0,V(t,"is_initiation_fee").model=!1,V(t,"is_card_price").model=!1),s.member=e,s.membresia=t,X(s.membresia,s.member),s};return(t,a)=>{const r=s,n=le,u=l;return o(),p(u,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:S},{default:d((()=>[(o(!0),p(g,null,_(m(x),((e,t)=>(o(),p(n,{key:`ss${t}`,class:"mb-4"},{default:d((()=>[c("p",ke,[c("b",null,f(m(I)(e.member,"name"))+" "+f(m(I)(e.member,"second_name"))+" "+f(m(I)(e.member,"last_name")),1)]),c(r,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128)),b(' <V-Card class="mb-4">\n      <inputsLayaut :inputs-step="notes" />\n    </V-Card> ')])),_:1},8,["titles","isloading"])}}});const De={key:1},Ne={class:"d-flex justify-content-end w-100"},we={class:"d-flex justify-content-between w-100"},Ee=x(" Finish "),Ie=x(" Cancel "),Oe=x(" Register another member ");var Je=i({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){r(!1);const s=r(!1),i=u((()=>G.value[0])),n=u((()=>{let e=[];return G.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));v((()=>{V(H.value,"mismatarjeta").change=y,Q.value=[],i.value?(W(i.value.membresia,i.value.member),n.value.length&&n.value.forEach((e=>{W(e.membresia,e.member)}))):(console.error("No tiene membresia"),O.error("Membership is required"))}));const y=function(){this.model},h=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},S=u((()=>{let e=[];return Q.value.forEach((t=>{0==V(t.member,"is_family").model&&e.push(t)})),Q.value.forEach((t=>{1==V(t.member,"is_family").model&&e.push(t)})),e}));r([]);const x=()=>{window.location.reload()},j=r([]),C=e=>{j.value.push(e)};return(a,i)=>{const r=ie,n=re,u=ne,v=e,y=l;return o(),p(y,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:h},{default:d((()=>[b(' <div class="d-flex justify-content-end align-items-center mb-4">\n\n      <VButton @click="PaymentAllMembership" color="primary"\n        >Pay all memberships</VButton\n      >\n\n      <div v-if="miembrosNuevos.length">\n        <stripeAddCard\n          :amount="props.total"\n          :id="miembrosNuevos[0].idMember"\n          :member_membership="miembrosNuevos[0].idMemberMembership"\n          :variosMiembros="true"\n          :miembros="miembrosNuevos"\n          @PaymentAction="PaymentAction"\n        />\n      </div>\n      \n    </div> '),m(Q).length?b("v-if",!0):(o(),p(r,{key:0,height:"300px",class:"mb-4"})),m(Q)?(o(),p("div",De,[(o(!0),p(g,null,_(m(S),((e,t)=>(o(),p(u,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:d((()=>[c("div",Ne,[c("p",null,f(e.presupuesto_id),1),c(n,{member:e.member,membresia:e.membresia,contact:m(R),presupuesto_id:e.presupuesto_id,"categories-members":m(K),"notas-input":m(Y),total:e.total,presupuesto:e,onPaymentAction:C},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total","presupuesto"])])])),_:2},1032,["presupuesto"])))),128))])):b("v-if",!0),c("div",we,[m(S).length>0&&j.value.length==m(S).length?(o(),p(v,{key:0,color:"danger",to:{name:"index"}},{default:d((()=>[Ee])),_:1})):(o(),p(v,{key:1,color:"danger",to:{name:"index"}},{default:d((()=>[Ie])),_:1})),m(S).length>0&&j.value.length==m(S).length?(o(),p(v,{key:2,color:"success",onClick:x},{default:d((()=>[Oe])),_:1})):b("v-if",!0)])])),_:1},8,["titles","is-loading"])}}});M("data-v-5a5e3b40");const Be={class:"content"},Te={class:"content-text"};A();var qe=i({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=u((()=>t.active?100:0));return(t,s)=>{const l=ue;return o(),p("div",Be,[c("div",{class:["circle",e.active?"active":""]},null,2),c(l,{class:"progressbar",value:m(a),size:"smaller"},null,8,["value"]),c("div",Te,[c("p",null,"STEP "+f(e.step),1),c("p",null,[c("b",null,f(e.text),1)])])])}}});qe.__scopeId="data-v-5a5e3b40";const Fe={class:"columns is-multiline"},Le={class:"column is-12"},Re={class:"column is-9"},$e={class:"column is-3"};var Ge=i({expose:[],setup(s){_e.value="Add New members",P({title:"Members"}),v((()=>{T(),pe(1).then((e=>{J($,"memberships_id",e.data.memberships)})),V($,"memberships_id").disabled=!1,V($,"recurrences_id").disabled=!1,V($,"is_initiation_fee").disabled=!1,V($,"discount").disabled=!1,ce(1,"membership").then((e=>{J($,"discount",e.data.discounts)})),de(),ve().then((e=>{J(L,"city_id",fe.value),J(Z,"city_id",fe.value),J(q,"city_id",fe.value),J(L,"state_id",ye.value),J(Z,"state_id",ye.value),J(q,"state_id",ye.value),J(L,"country_id",be.value),V(L.value,"country_id").model=34,J(Z,"country_id",be.value),J(q,"country_id",be.value)})),ge().then((e=>{J($,"staff_id",e.data)}))}));const l=r(1),i=r([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),n=u((()=>L.value.filter((e=>e.categories.includes(K.value.model))))),y=u((()=>i.value.find((e=>e.step==l.value&&e.categories.includes(K.value.model))))),S=u((()=>i.value.filter((e=>e.categories.includes(K.value.model)))));u((()=>D(q.value)));const j=(e,t=3,a={})=>{K.value.model,6==e?sendData(t,a):l.value=e},C=r(null),M=e=>{C.value=e},A=r(null),N=e=>{A.value=e},E=r([]),I=e=>{E.value=e.value},O=r([]),B=e=>{O.value=e.familyMembership.value,U.value=e.memberMembership};r(null),r(null),r(null);const T=()=>{ee.value=null,te.value=null;let e=["is_family","principal_family"];w(L.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],w($.filter((t=>!e.includes(t.name)))),w(Y.value),w(q.value)};return(s,i)=>{const r=e,u=t,v=a,C=he,A=Se,P=Ae,V=Pe,D=Ve,w=Je,J=qe,T=oe;return o(),p(T,null,{default:d((()=>[b(" Display a payment form "),c("div",Fe,[c("div",Le,[1==l.value?(o(),p(v,{key:0,class:"w-100",addons:""},{default:d((()=>[(o(!0),p(g,null,_(m(K).values,((e,t)=>(o(),p(u,{key:`categoymember-${t}`},{default:d((()=>[c(r,{onClick:t=>m(K).model=e,color:m(K).model==e?"primary":void 0,rounded:""},{default:d((()=>[x(f("Prospect"==e?"Temporary Members":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):b("v-if",!0)]),c("div",Re,[b(" memberInformation "),h(c(C,{type:"create",title:m(y).text,inputs:m(n),onChangeStep:j,onReturData:M},null,8,["title","inputs"]),[[k,1==l.value]]),b(" parentGuardian "),h(c(A,{title:m(y).text,onChangeStep:j},null,8,["title"]),[[k,2==l.value&&"Minor"==m(K).model]]),b(" familyMembers "),h(c(P,{type:"create",title:m(y).text,inputs:m(Z),onChangeStep:j,onReturData:I},null,8,["title","inputs"]),[[k,2==l.value&&"Adult"==m(K).model]]),b(" contactPreference "),h(c(V,{type:"create",title:m(y).text,inputs:m(ae),onChangeStep:j,onReturnData:N},null,8,["title","inputs"]),[[k,3==l.value||2==l.value&&"Prospect"==m(K).model]]),b(" selectMembership "),h(c(D,{type:"create",member:m(n),familiares:E.value,title:m(y).text,inputs:m(G),memberships:m(me),notes:m(Y),onChangeStep:j,onReturnData:B},null,8,["member","familiares","title","inputs","memberships","notes"]),[[k,4==l.value]]),b(" paymentMethod "),5==l.value?(o(),p(w,{key:0,type:"create",title:m(y).text,member:m(n),familiares:E.value,inputs:m(G),"member-membership":m(U),"family-membership":O.value,onChangeStep:j},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):b("v-if",!0)]),c("div",$e,[(o(!0),p(g,null,_(m(S),((e,t)=>(o(),p(J,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default Ge;
