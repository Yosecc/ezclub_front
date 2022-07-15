import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as t}from"./V-Control.45649f5a.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.6f13adaa.js";import{p as i,h as r,g as u,s as n,v as o,n as p,a as m,e as c}from"./index.66373693.js";import{X as d,z as v,i as f,Y as y,Z as g,_ as h,c as b,$ as _,f as S,a0 as j,k as x,o as C,a1 as k,a2 as M,M as A,a3 as P,a4 as D,a5 as V}from"./Members.0130208f.js";import{d as w,r as N,w as E,b as O,o as I,h as J,j as R,k as T,E as F,R as L,S as $,K as z,W as B,_ as q,F as G,z as U,A as X,G as H,H as K,B as W,D as Y,O as Z,X as Q}from"./vendor.c210e0cb.js";import{_ as ee}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{_ as te}from"./V-Placeload.141ef784.js";import{a as ae,b as se}from"./Presupuesto.vue_vue&type=script&setup=true&lang.715339e6.js";import{_ as le}from"./V-Progress.vue_vue&type=script&setup=true&lang.52747fd3.js";import{_ as ie}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.15516937.js";import{a as re,m as ue}from"./Memberships.d7d7dcc6.js";import{g as ne}from"./Recurrences.ba625944.js";import{g as oe}from"./Discounts.76908927.js";import{e as pe,c as me,s as ce,d as de}from"./config.2ea209a9.js";import{h as ve}from"./Staffs.719c3b45.js";import{p as fe}from"./sidebarLayoutState.56e6ff2f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.b6c72e1b.js";import"./Diciplines.9c50f04a.js";import"./Companies.a79e92c3.js";import"./MemberCards.vue_vue&type=script&setup=true&lang.5c10b7d0.js";import"./signComponent.vue_vue&type=script&setup=true&lang.41eb01d5.js";import"./pdf_icon.4aa835a4.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.af205aa2.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";var ye=w({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,u=N(!1);E((()=>a.inputs),((e,t)=>{n()}));const n=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},o=O((()=>p.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),p=N(!1),m=e=>{p.value=!e.input.model,n()},c=e=>{let a=i(o.value);r.value||(a.select_type=a.select_type?"Company":"Individual",d.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const i=s,r=l;return I(),J(r,{titles:{title:e.title},"is-loading":u.value,buttons:["next","back"],step:1,onChangeStep:c},{default:R((()=>[T(i,{"inputs-step":F(o),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),ge=w({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,i)=>{const r=s,u=l;return I(),J(u,{titles:{title:e.title},buttons:["next","prev"],step:2,onChangeStep:a},{default:R((()=>[T(r,{"inputs-step":F(v)},null,8,["inputs-step"])])),_:1},8,["titles"])}}});const he={key:0},be=G(" Remove Family Member "),_e={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Se=G(" Add Another Family Member ");var je=w({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:r}){const p=i,m=N(!1);E((()=>p.inputs),((e,t)=>{c()}));const c=()=>{m.value=!0,setTimeout((()=>{m.value=!1}),500)},d=N([]);O((()=>(c(),d.value.forEach(((e,t)=>{y.value.includes(t)?d.value[t]=e.filter((e=>e.category.includes("Minor"))):d.value[t]=JSON.parse(JSON.stringify(p.inputs))})),d.value)));const v=e=>{r("returData",d),r("changeStep",e)},y=N([]),g=O((()=>d.value.length>0)),h=N(0),b=()=>{if(h.value>0)for(var e=0;e<h.value;++e){const e=U(JSON.parse(JSON.stringify(p.inputs)));u(e,"misma_direccion").change=j,u(e,"category").change=_,d.value.push(e)}},_=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(S(e),n(e,"email",`family_${X().format("hms")}_${o(f.value,"email")}`),n(e,"phone",o(f.value,"phone"))),console.log(this.model)},S=e=>{n(e,"address",o(f.value,"address")),n(e,"postal_code",o(f.value,"postal_code")),n(e,"country_id",o(f.value,"country_id")),n(e,"city_id",o(f.value,"city_id")),n(e,"state_id",o(f.value,"state_id"))},j=function(e){console.log("llejay"),this.model?(n(e,"postal_code",""),n(e,"country_id",""),n(e,"city_id",""),n(e,"state_id","")):S(e)};return(r,u)=>{const n=s,o=e,p=ee,c=t,f=a,_=l;return I(),J(_,{titles:{title:i.title},"is-loading":m.value,buttons:["next","prev"],step:2,onChangeStep:v},{default:R((()=>[F(g)?(I(),J("div",he,[(I(!0),J(L,null,$(d.value,((e,t)=>(I(),J(p,{key:t,class:"mb-4"},{default:R((()=>[T(n,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void y.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),T(o,{onClick:e=>d.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:R((()=>[be])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):z("",!0),F(g)?z("",!0):(I(),J("div",_e,[T(f,{class:"mb-4"},{default:R((()=>[T(c,null,{default:R((()=>[B(T("input",{type:"number","onUpdate:modelValue":u[1]||(u[1]=e=>h.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[q,h.value]])])),_:1})])),_:1}),T(o,{onClick:b,color:"info",icon:"fas fa-check",raised:""},{default:R((()=>[Se])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),xe=w({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=N(!1);E((()=>a.inputs),((e,t)=>{u()}));const r=e=>{let a=[];n.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),y.value=a,t("returnData",a),t("changeStep",e)},u=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},n=O((()=>a.inputs)),o=N(!1),p=e=>{o.value=!e.input.model,u()};return(t,a)=>{const u=s,o=l;return I(),J(o,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:r},{default:R((()=>[T(u,{"inputs-step":F(n),onChangeSwitch:p},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const Ce={class:""};var ke=w({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=N(!1),n=N([]);E((()=>a.inputs),((e,t)=>{p()}));const p=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},m=e=>{let a=null;g.forEach(((e,t)=>{0==t?a=e.inputs:n.value.push(e)})),r.value||(h.value=a,t("returnData",{memberMembership:a,familyMembership:n}),t("changeStep",e))},c=O((()=>{const e=U([]);g.value=[];let t=[];b.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(d(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(d(a.familiares[s],JSON.parse(JSON.stringify(t))));return g.value=e,e})),d=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==_.value?(u(t,"recurrence").model=!1,u(t,"recurrence").display=!1,u(t,"is_initiation_fee").model=!0,u(t,"is_card_price").model=!0):(u(t,"recurrence").model=!0,u(t,"recurrence").display=!0,u(t,"is_initiation_fee").model=!1,u(t,"is_card_price").model=!1),s.member=e,s.membresia=t,S(s.membresia,s.member),s};return(t,a)=>{const r=s,u=ee,n=l;return I(),J(n,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:m},{default:R((()=>[(I(!0),J(L,null,$(F(c),((e,t)=>(I(),J(u,{key:`ss${t}`,class:"mb-4"},{default:R((()=>[T("p",Ce,[T("b",null,H(F(o)(e.member,"name"))+" "+H(F(o)(e.member,"second_name"))+" "+H(F(o)(e.member,"last_name")),1)]),T(r,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128)),T(u,{class:"mb-4"},{default:R((()=>[T(r,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","isloading"])}}});const Me={key:1},Ae={class:"d-flex justify-content-end w-100"},Pe={class:"d-flex justify-content-between w-100"},De=G(" Finish "),Ve=G(" Cancel "),we=G(" Register another member ");var Ne=w({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){N(!1);const s=N(!1),i=O((()=>g.value[0])),r=O((()=>{let e=[];return g.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));K((()=>{u(j.value,"mismatarjeta").change=n,x.value=[],i.value?(C(i.value.membresia,i.value.member),r.value.length&&r.value.forEach((e=>{C(e.membresia,e.member)}))):(console.error("No tiene membresia"),p.error("Membership is required"))}));const n=function(){this.model},o=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},m=O((()=>{let e=[];return x.value.forEach((t=>{0==u(t.member,"is_family").model&&e.push(t)})),x.value.forEach((t=>{1==u(t.member,"is_family").model&&e.push(t)})),e}));N([]);const c=()=>{window.location.reload()},d=N([]),v=e=>{d.value.push(e)};return(a,i)=>{const r=te,u=ae,n=se,p=e,f=l;return I(),J(f,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:o},{default:R((()=>[F(x).length?z("",!0):(I(),J(r,{key:0,height:"300px",class:"mb-4"})),F(x)?(I(),J("div",Me,[(I(!0),J(L,null,$(F(m),((e,t)=>(I(),J(n,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:R((()=>[T("div",Ae,[T(u,{member:e.member,membresia:e.membresia,contact:F(y),presupuesto_id:e.presupuesto_id,"categories-members":F(k),"notas-input":F(M),total:e.totales.upfront.amount_total,onPaymentAction:v},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total"])])])),_:2},1032,["presupuesto"])))),128))])):z("",!0),T("div",Pe,[F(m).length>0&&d.value.length==F(m).length?(I(),J(p,{key:0,color:"danger",to:{name:"index"}},{default:R((()=>[De])),_:1})):(I(),J(p,{key:1,color:"danger",to:{name:"index"}},{default:R((()=>[Ve])),_:1})),F(m).length>0&&d.value.length==F(m).length?(I(),J(p,{key:2,color:"success",onClick:c},{default:R((()=>[we])),_:1})):z("",!0)])])),_:1},8,["titles","is-loading"])}}});W("data-v-915b2888");const Ee={class:"content"},Oe={class:"content-text"};Y();var Ie=w({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=O((()=>t.active?100:0));return(t,s)=>{const l=le;return I(),J("div",Ee,[T("div",{class:["circle",e.active?"active":""]},null,2),T(l,{class:"progressbar",value:F(a),size:"smaller"},null,8,["value"]),T("div",Oe,[T("p",null,"STEP "+H(e.step),1),T("p",null,[T("b",null,H(e.text),1)])])])}}});Ie.__scopeId="data-v-915b2888";const Je={class:"columns is-multiline"},Re={class:"column is-12"},Te={class:"column is-9"},Fe={class:"column is-3"};var Le=w({expose:[],setup(s){fe.value="Add New members",Z({title:"Members"}),K((()=>{q(),re().then((e=>{m(b,"memberships_id",e.data.memberships)})),u(b,"memberships_id").disabled=!1,u(b,"recurrences_id").disabled=!1,u(b,"is_initiation_fee").disabled=!1,u(b,"discount").disabled=!1,oe(1,"membership").then((e=>{m(b,"discount",e.data.discounts)})),ne(),pe().then((e=>{m(f,"city_id",me.value),m(A,"city_id",me.value),m(v,"city_id",me.value),m(f,"state_id",ce.value),m(A,"state_id",ce.value),m(v,"state_id",ce.value),m(f,"country_id",de.value),m(A,"country_id",de.value),m(v,"country_id",de.value)})),ve().then((e=>{m(b,"staff_id",e.data)}))}));const l=N(1),r=N([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),n=O((()=>f.value.filter((e=>e.categories.includes(k.value.model))))),o=O((()=>r.value.find((e=>e.step==l.value&&e.categories.includes(k.value.model))))),p=O((()=>r.value.filter((e=>e.categories.includes(k.value.model)))));O((()=>i(v.value)));const d=(e,t=3,a={})=>{k.value.model,6==e?sendData(t,a):l.value=e},y=N(null),_=e=>{y.value=e},S=N(null),j=e=>{S.value=e},x=N([]),C=e=>{x.value=e.value},w=N([]),E=e=>{w.value=e.familyMembership.value,h.value=e.memberMembership};N(null),N(null),N(null);const q=()=>{P.value=null,D.value=null;let e=["is_family","principal_family"];c(f.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],c(b.filter((t=>!e.includes(t.name)))),c(M.value),c(v.value)};return(s,i)=>{const r=e,u=t,m=a,c=ye,v=ge,f=je,y=xe,b=ke,S=Ne,P=Ie,D=ie;return I(),J(D,null,{default:R((()=>[T("div",Je,[T("div",Re,[1==l.value?(I(),J(m,{key:0,class:"w-100",addons:""},{default:R((()=>[(I(!0),J(L,null,$(F(k).values,((e,t)=>(I(),J(u,{key:`categoymember-${t}`},{default:R((()=>[T(r,{onClick:t=>F(k).model=e,color:F(k).model==e?"primary":void 0,rounded:""},{default:R((()=>[G(H("Prospect"==e?"Temporary Members":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):z("",!0)]),T("div",Te,[B(T(c,{type:"create",title:F(o).text,inputs:F(n),onChangeStep:d,onReturData:_},null,8,["title","inputs"]),[[Q,1==l.value]]),B(T(v,{title:F(o).text,onChangeStep:d},null,8,["title"]),[[Q,2==l.value&&"Minor"==F(k).model]]),B(T(f,{type:"create",title:F(o).text,inputs:F(A),onChangeStep:d,onReturData:C},null,8,["title","inputs"]),[[Q,2==l.value&&"Adult"==F(k).model]]),B(T(y,{type:"create",title:F(o).text,inputs:F(V),onChangeStep:d,onReturnData:j},null,8,["title","inputs"]),[[Q,3==l.value||2==l.value&&"Prospect"==F(k).model]]),B(T(b,{type:"create",member:F(n),familiares:x.value,title:F(o).text,inputs:F(g),memberships:F(ue),notes:F(M),onChangeStep:d,onReturnData:E},null,8,["member","familiares","title","inputs","memberships","notes"]),[[Q,4==l.value]]),5==l.value?(I(),J(S,{key:0,type:"create",title:F(o).text,member:F(n),familiares:x.value,inputs:F(g),"member-membership":F(h),"family-membership":w.value,onChangeStep:d},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):z("",!0)]),T("div",Fe,[(I(!0),J(L,null,$(F(p),((e,t)=>(I(),J(P,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default Le;