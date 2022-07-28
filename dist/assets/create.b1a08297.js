import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.386dddea.js";import{_ as t}from"./V-Control.b7d7754b.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.dedb284a.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.6c1d2b3d.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.9b8144d8.js";import{p as i,h as u,g as r,s as n,v as o,n as p,a as m,e as c}from"./index.800fdb40.js";import{Z as d,_ as v,z as f,i as y,$ as g,a0 as b,a1 as h,c as _,a2 as S,f as j,a3 as x,k as C,o as k,a4 as A,a5 as M,O as P,a6 as D,a7 as V,a8 as w}from"./Members.1e1b8cba.js";import{d as N,r as E,w as O,b as I,o as J,h as R,E as T,j as F,k as L,R as $,S as z,K as B,W as q,_ as G,F as U,z as H,A as K,G as W,H as X,B as Z,D as Q,O as Y,X as ee}from"./vendor.5767c02e.js";import{_ as te}from"./V-Card.vue_vue&type=script&setup=true&lang.69c4989e.js";import{_ as ae}from"./V-Placeload.7bee3ecb.js";import{a as se,b as le}from"./Presupuesto.vue_vue&type=script&setup=true&lang.dc9d4dad.js";import{_ as ie}from"./V-Progress.vue_vue&type=script&setup=true&lang.fc49f0d9.js";import{_ as ue}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.6167a593.js";import{a as re,m as ne}from"./Memberships.680bb286.js";import{g as oe}from"./Recurrences.f70ab774.js";import{g as pe}from"./Discounts.f2b37116.js";import{e as me,c as ce,s as de,d as ve}from"./config.2c2c2259.js";import{g as fe}from"./Staffs.d66c41c0.js";import{p as ye}from"./sidebarLayoutState.c56511ff.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fc0df7c0.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.25468f0d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.0f03dbf2.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.97520a28.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.24ba0064.js";import"./Diciplines.f9b9799b.js";import"./Companies.49f014f5.js";import"./MemberCards.vue_vue&type=script&setup=true&lang.741eb2e3.js";import"./signComponent.vue_vue&type=script&setup=true&lang.b5f0c668.js";import"./pdf_icon.55a84d95.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0260a5d5.js";import"./useDropdown.9a90cff0.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e447a11e.js";import"./V-Dropdown.02e4adea.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f92a1957.js";import"./activePanelState.a44bb85f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.e45b24ed.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.2b1a2cd8.js";import"./video.48e91f43.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.6512652b.js";import"./darkModeState.6890654d.js";import"./AnimatedLogo.f5f87178.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eaebe978.js";import"./V-Block.vue_vue&type=script&setup=true&lang.05f2e1a3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.ed6fa709.js";import"./userPopovers.f4b9fc60.js";var ge=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,r=E(!1);O((()=>a.inputs),((e,t)=>{n()}));const n=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},o=I((()=>p.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),p=E(!1),m=e=>{p.value=!e.input.model,n()},c=e=>{let a=i(o.value);u.value||(a.select_type=a.select_type?"Company":"Individual",v.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const i=s,u=l;return J(),R(u,{titles:{title:e.title},"is-loading":r.value,buttons:["next","back"],"buttons-disabled":T(d),step:1,onChangeStep:c},{default:F((()=>[L(i,{"inputs-step":T(o),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading","buttons-disabled"])}}}),be=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,i)=>{const u=s,r=l;return J(),R(r,{titles:{title:e.title},buttons:["next","prev"],step:2,onChangeStep:a},{default:F((()=>[L(u,{"inputs-step":T(f)},null,8,["inputs-step"])])),_:1},8,["titles"])}}});const he={key:0},_e=U(" Remove Family Member "),Se={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},je=U(" Add Another Family Member ");var xe=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:u}){const p=i,m=E(!1);O((()=>p.inputs),((e,t)=>{c()}));const c=()=>{m.value=!0,setTimeout((()=>{m.value=!1}),500)},d=E([]);I((()=>(c(),d.value.forEach(((e,t)=>{f.value.includes(t)?d.value[t]=e.filter((e=>e.category.includes("Minor"))):d.value[t]=JSON.parse(JSON.stringify(p.inputs))})),d.value)));const v=e=>{u("returData",d),u("changeStep",e)},f=E([]),g=I((()=>d.value.length>0)),b=E(0),h=()=>{if(b.value>0)for(var e=0;e<b.value;++e){const e=H(JSON.parse(JSON.stringify(p.inputs)));r(e,"misma_direccion").change=j,r(e,"category").change=_,d.value.push(e)}},_=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(S(e),n(e,"email",`family_${K().format("hms")}_${o(y.value,"email")}`),n(e,"phone",o(y.value,"phone"))),console.log(this.model)},S=e=>{n(e,"address",o(y.value,"address")),n(e,"postal_code",o(y.value,"postal_code")),n(e,"country_id",o(y.value,"country_id")),n(e,"city_id",o(y.value,"city_id")),n(e,"state_id",o(y.value,"state_id"))},j=function(e){console.log("llejay"),this.model?(n(e,"postal_code",""),n(e,"country_id",""),n(e,"city_id",""),n(e,"state_id","")):S(e)};return(u,r)=>{const n=s,o=e,p=te,c=t,y=a,_=l;return J(),R(_,{titles:{title:i.title},"is-loading":m.value,buttons:["next","prev"],step:2,onChangeStep:v},{default:F((()=>[T(g)?(J(),R("div",he,[(J(!0),R($,null,z(d.value,((e,t)=>(J(),R(p,{key:t,class:"mb-4"},{default:F((()=>[L(n,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void f.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),L(o,{onClick:e=>d.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:F((()=>[_e])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):B("",!0),T(g)?B("",!0):(J(),R("div",Se,[L(y,{class:"mb-4"},{default:F((()=>[L(c,null,{default:F((()=>[q(L("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=e=>b.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[G,b.value]])])),_:1})])),_:1}),L(o,{onClick:h,color:"info",icon:"fas fa-check",raised:""},{default:F((()=>[je])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),Ce=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=E(!1);O((()=>a.inputs),((e,t)=>{r()}));const u=e=>{let a=[];n.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),g.value=a,t("returnData",a),t("changeStep",e)},r=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},n=I((()=>a.inputs)),o=E(!1),p=e=>{o.value=!e.input.model,r()};return(t,a)=>{const r=s,o=l;return J(),R(o,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:u},{default:F((()=>[L(r,{"inputs-step":T(n),onChangeSwitch:p},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const ke={class:""};var Ae=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=E(!1),n=E([]);O((()=>a.inputs),((e,t)=>{p()}));const p=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},m=e=>{let a=null;b.forEach(((e,t)=>{0==t?a=e.inputs:n.value.push(e)})),u.value||(h.value=a,t("returnData",{memberMembership:a,familyMembership:n}),t("changeStep",e))},c=I((()=>{const e=H([]);b.value=[];let t=[];_.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(d(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(d(a.familiares[s],JSON.parse(JSON.stringify(t))));return b.value=e,e})),d=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==S.value?(r(t,"recurrence").model=!1,r(t,"recurrence").display=!1,r(t,"is_initiation_fee").model=!0,r(t,"is_card_price").model=!0):(r(t,"recurrence").model=!0,r(t,"recurrence").display=!0,r(t,"is_initiation_fee").model=!1,r(t,"is_card_price").model=!1),s.member=e,s.membresia=t,j(s.membresia,s.member),s};return(t,a)=>{const u=s,r=te,n=l;return J(),R(n,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:m},{default:F((()=>[(J(!0),R($,null,z(T(c),((e,t)=>(J(),R(r,{key:`ss${t}`,class:"mb-4"},{default:F((()=>[L("p",ke,[L("b",null,W(T(o)(e.member,"name"))+" "+W(T(o)(e.member,"second_name"))+" "+W(T(o)(e.member,"last_name")),1)]),L(u,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128)),L(r,{class:"mb-4"},{default:F((()=>[L(u,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","isloading"])}}});const Me={key:1},Pe={class:"d-flex justify-content-end w-100"},De={class:"d-flex justify-content-between w-100"},Ve=U(" Finish "),we=U(" Cancel "),Ne=U(" Register another member ");var Ee=N({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){E(!1);const s=E(!1),i=I((()=>b.value[0])),u=I((()=>{let e=[];return b.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));X((()=>{r(x.value,"mismatarjeta").change=n,C.value=[],i.value?(k(i.value.membresia,i.value.member),u.value.length&&u.value.forEach((e=>{k(e.membresia,e.member)}))):(console.error("No tiene membresia"),p.error("Membership is required"))}));const n=function(){this.model},o=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},m=I((()=>{let e=[];return C.value.forEach((t=>{0==r(t.member,"is_family").model&&e.push(t)})),C.value.forEach((t=>{1==r(t.member,"is_family").model&&e.push(t)})),e}));E([]);const c=()=>{window.location.reload()},d=E([]),v=e=>{d.value.push(e)};return(a,i)=>{const u=ae,r=se,n=le,p=e,f=l;return J(),R(f,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:o},{default:F((()=>[T(C).length?B("",!0):(J(),R(u,{key:0,height:"300px",class:"mb-4"})),T(C)?(J(),R("div",Me,[(J(!0),R($,null,z(T(m),((e,t)=>(J(),R(n,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:F((()=>[L("div",Pe,[L(r,{member:e.member,membresia:e.membresia,contact:T(g),presupuesto_id:e.presupuesto_id,"categories-members":T(A),"notas-input":T(M),total:e.totales.upfront.amount_total,onPaymentAction:v},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total"])])])),_:2},1032,["presupuesto"])))),128))])):B("",!0),L("div",De,[T(m).length>0&&d.value.length==T(m).length?(J(),R(p,{key:0,color:"danger",to:{name:"index"}},{default:F((()=>[Ve])),_:1})):(J(),R(p,{key:1,color:"danger",to:{name:"index"}},{default:F((()=>[we])),_:1})),T(m).length>0&&d.value.length==T(m).length?(J(),R(p,{key:2,color:"success",onClick:c},{default:F((()=>[Ne])),_:1})):B("",!0)])])),_:1},8,["titles","is-loading"])}}});Z("data-v-915b2888");const Oe={class:"content"},Ie={class:"content-text"};Q();var Je=N({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=I((()=>t.active?100:0));return(t,s)=>{const l=ie;return J(),R("div",Oe,[L("div",{class:["circle",e.active?"active":""]},null,2),L(l,{class:"progressbar",value:T(a),size:"smaller"},null,8,["value"]),L("div",Ie,[L("p",null,"STEP "+W(e.step),1),L("p",null,[L("b",null,W(e.text),1)])])])}}});Je.__scopeId="data-v-915b2888";const Re={class:"columns is-multiline"},Te={class:"column is-12"},Fe={class:"column is-9"},Le={class:"column is-3"};var $e=N({expose:[],setup(s){ye.value="Add New members",Y({title:"Members"}),X((()=>{O(),re().then((e=>{m(_,"memberships_id",e.data.memberships)})),r(_,"memberships_id").disabled=!1,r(_,"recurrences_id").disabled=!1,r(_,"is_initiation_fee").disabled=!1,r(_,"discount").disabled=!1,pe(1,"membership").then((e=>{m(_,"discount",e.data.discounts)})),oe(),me().then((e=>{m(y,"city_id",ce.value),m(P,"city_id",ce.value),m(f,"city_id",ce.value),m(y,"state_id",de.value),m(P,"state_id",de.value),m(f,"state_id",de.value),m(y,"country_id",ve.value),m(P,"country_id",ve.value),m(f,"country_id",ve.value)})),fe().then((e=>{m(_,"staff_id",e.data)}))}));const l=E(1),u=E([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),n=I((()=>y.value.filter((e=>e.categories.includes(A.value.model))))),o=I((()=>u.value.find((e=>e.step==l.value&&e.categories.includes(A.value.model))))),p=I((()=>u.value.filter((e=>e.categories.includes(A.value.model)))));I((()=>i(f.value)));const d=(e,t=3,a={})=>{A.value.model,6==e?sendData(t,a):l.value=e},v=E(null),g=e=>{v.value=e},S=E(null),j=e=>{S.value=e},x=E([]),C=e=>{x.value=e.value},k=E([]),N=e=>{k.value=e.familyMembership.value,h.value=e.memberMembership};E(null),E(null),E(null);const O=()=>{D.value=null,V.value=null;let e=["is_family","principal_family"];c(y.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],c(_.filter((t=>!e.includes(t.name)))),c(M.value),c(f.value)};return(s,i)=>{const u=e,r=t,m=a,c=ge,v=be,f=xe,y=Ce,_=Ae,S=Ee,D=Je,V=ue;return J(),R(V,null,{default:F((()=>[L("div",Re,[L("div",Te,[1==l.value?(J(),R(m,{key:0,class:"w-100",addons:""},{default:F((()=>[(J(!0),R($,null,z(T(A).values,((e,t)=>(J(),R(r,{key:`categoymember-${t}`},{default:F((()=>[L(u,{onClick:t=>T(A).model=e,color:T(A).model==e?"primary":void 0,rounded:""},{default:F((()=>[U(W("Prospect"==e?"Temporary Members":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):B("",!0)]),L("div",Fe,[q(L(c,{type:"create",title:T(o).text,inputs:T(n),onChangeStep:d,onReturData:g},null,8,["title","inputs"]),[[ee,1==l.value]]),q(L(v,{title:T(o).text,onChangeStep:d},null,8,["title"]),[[ee,2==l.value&&"Minor"==T(A).model]]),q(L(f,{type:"create",title:T(o).text,inputs:T(P),onChangeStep:d,onReturData:C},null,8,["title","inputs"]),[[ee,2==l.value&&"Adult"==T(A).model]]),q(L(y,{type:"create",title:T(o).text,inputs:T(w),onChangeStep:d,onReturnData:j},null,8,["title","inputs"]),[[ee,3==l.value||2==l.value&&"Prospect"==T(A).model]]),q(L(_,{type:"create",member:T(n),familiares:x.value,title:T(o).text,inputs:T(b),memberships:T(ne),notes:T(M),onChangeStep:d,onReturnData:N},null,8,["member","familiares","title","inputs","memberships","notes"]),[[ee,4==l.value]]),5==l.value?(J(),R(S,{key:0,type:"create",title:T(o).text,member:T(n),familiares:x.value,inputs:T(b),"member-membership":T(h),"family-membership":k.value,onChangeStep:d},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):B("",!0)]),L("div",Le,[(J(!0),R($,null,z(T(p),((e,t)=>(J(),R(D,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default $e;
