import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{_ as t}from"./V-Control.3e38bffa.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.3d6ccab4.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.567c3df7.js";import{g as u,p as i,h as r,e as n,s as o,v as p,n as m,a as d}from"./index.8bb1040f.js";import{a2 as c,a3 as v,D as f,W as y,i as _,a4 as g,c as b,a5 as h,a6 as S,a7 as x,h as j,a8 as C,l as A,q as M,a9 as k,aa as D,S as P,ab as V,ac as w,ad as E}from"./Members.b9e71967.js";import{d as N,r as I,w as O,b as J,h as R,i as T,F as q,k as F,l as B,o as L,H as $,Q as z,R as U,S as G,K as W,W as H,_ as K,G as Q,A as X,B as Y,D as Z,E as ee,O as te,X as ae}from"./vendor.7d5213a2.js";import{_ as se}from"./SearchBar.vue_vue&type=style&index=0&lang.f5a08910.js";import{_ as le}from"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import{_ as ue}from"./V-Placeload.d3fba449.js";import{a as ie,b as re}from"./Presupuesto.vue_vue&type=script&setup=true&lang.cd21241c.js";import{_ as ne}from"./V-Progress.vue_vue&type=script&setup=true&lang.6413a6bc.js";import{_ as oe}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.35b87413.js";import{a as pe,m as me}from"./Memberships.cad00a18.js";import{g as de}from"./Recurrences.37dfc9ae.js";import{g as ce}from"./Discounts.0b7e0fe3.js";import{e as ve,c as fe,s as ye,d as _e}from"./config.992773be.js";import{g as ge}from"./Staffs.baf73254.js";import{p as be}from"./sidebarLayoutState.9426e5be.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fa42be40.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.a80fc4a1.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a8dad8dd.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.8686426d.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.5d78dab1.js";import"./Diciplines.e7eeb21e.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import"./Companies.1bccd83f.js";import"./MemberCards.vue_vue&type=script&setup=true&lang.9d39e390.js";import"./signComponent.vue_vue&type=script&setup=true&lang.314c21b3.js";import"./pdf_icon.a6f908d2.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.591623d5.js";import"./useDropdown.d4a254e8.js";import"./V-Dropdown.9baccf1a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ba1cd7fa.js";import"./activePanelState.4e56e973.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ae744ca1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5baca42f.js";import"./video.fb469c9d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.ae0cfa5f.js";import"./darkModeState.6047be35.js";import"./AnimatedLogo.1618784f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.4761d136.js";import"./userPopovers.f4b9fc60.js";var he=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,n=I(!1);O((()=>a.inputs),((e,t)=>{o()}));const o=()=>{n.value=!0,setTimeout((()=>{n.value=!1}),500)},p=J((()=>{const e=a.inputs;return e.length&&null!=u(e,"country_id")&&(u(e,"country_id").model=34),console.log("data",e),m.value?e.filter((e=>e.typeMember.includes("Company"))):e.filter((e=>e.typeMember.includes("Individual")))})),m=I(!1),d=e=>{m.value=!e.input.model,o()},f=e=>{let a=i(p.value);r.value||(a.select_type=a.select_type?"Company":"Individual",v.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const u=s,i=l;return R(),T(i,{titles:{title:e.title},"is-loading":n.value,buttons:["next"],"buttons-disabled":q(c),step:1,onChangeStep:f},{default:F((()=>[B(u,{"inputs-step":q(p),onChangeSwitch:d},null,8,["inputs-step"])])),_:1},8,["titles","is-loading","buttons-disabled"])}}}),Se=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=I(null),i=I([]),r=e=>{t("changeStep",e)};L((()=>{i.value=[],u(f.value,"parent_email").disabled=!0})),O((()=>y.value),(()=>{y.value?(i.value=[],console.log(y.value),u(f.value,"member_id").model=y.value.id,u(f.value,"parent_email").model=y.value.email,u(f.value,"postal_code").model=y.value.postal_code,u(f.value,"city_id").model=y.value.city_id,u(f.value,"country_id").model=y.value.country_id,u(f.value,"state_id").model=y.value.state_id,u(f.value,"parent_name").model=y.value.name,u(f.value,"address").model=y.value.address,u(f.value,"parent_second_name").model=y.value.second_name,u(f.value,"parent_last_name").model=y.value.last_name,u(f.value,"parent_goverment_id").model=y.value.goverment_id,u(f.value,"parent_personal_identifications").model=y.value.personal_identifications,u(f.value,"parent_phone").model=y.value.phone,f.value.forEach((e=>{e.required=!1}))):(n(f.value),f.value.forEach((e=>{e.required=!0})))}));const o=e=>{!1===e?(i.value.push("next"),u(f.value,"parent_email").model=""):(i.value=[],u(f.value,"parent_email").model=e)};return(t,u)=>{const n=se,p=s,m=l;return R(),T(m,{titles:{title:e.title},buttons:["next","prev"],"buttons-disabled":i.value,step:2,onChangeStep:r},{default:F((()=>[B("p",null,$(a.value),1),B(n,{"is-head":!0,"place-holder":"Enter the guardian email",onOnSubmit:o,class:"",modelValue:q(y),"onUpdate:modelValue":u[1]||(u[1]=e=>z(y)?y.value=e:null)},null,8,["modelValue"]),B(p,{"inputs-step":q(f)},null,8,["inputs-step"])])),_:1},8,["titles","buttons-disabled"])}}});const xe={key:0},je=Q(" Remove Family Member "),Ce={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Ae=Q(" Add Another Family Member ");var Me=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:r}){const n=i,m=I(!1);O((()=>n.inputs),((e,t)=>{d()}));const d=()=>{m.value=!0,setTimeout((()=>{m.value=!1}),500)},c=I([]);J((()=>(d(),c.value.forEach(((e,t)=>{f.value.includes(t)?c.value[t]=e.filter((e=>e.category.includes("Minor"))):c.value[t]=JSON.parse(JSON.stringify(n.inputs))})),c.value)));const v=e=>{r("returData",c),r("changeStep",e)},f=I([]),y=J((()=>c.value.length>0)),g=I(0),b=()=>{if(g.value>0)for(var e=0;e<g.value;++e){const e=X(JSON.parse(JSON.stringify(n.inputs)));u(e,"misma_direccion").change=x,u(e,"category").change=h,c.value.push(e)}},h=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(S(e),o(e,"email",`family_${Y().format("hms")}_${p(_.value,"email")}`),o(e,"phone",p(_.value,"phone"))),console.log(this.model)},S=e=>{o(e,"address",p(_.value,"address")),o(e,"postal_code",p(_.value,"postal_code")),o(e,"country_id",p(_.value,"country_id")),o(e,"city_id",p(_.value,"city_id")),o(e,"state_id",p(_.value,"state_id"))},x=function(e){console.log("llejay"),this.model?(o(e,"postal_code",""),o(e,"country_id",""),o(e,"city_id",""),o(e,"state_id","")):S(e)};return(u,r)=>{const n=s,o=e,p=le,d=t,_=a,h=l;return R(),T(h,{titles:{title:i.title},"is-loading":m.value,buttons:["next","prev"],step:2,onChangeStep:v},{default:F((()=>[q(y)?(R(),T("div",xe,[(R(!0),T(U,null,G(c.value,((e,t)=>(R(),T(p,{key:t,class:"mb-4"},{default:F((()=>[B(n,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void f.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),B(o,{onClick:e=>c.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:F((()=>[je])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):W("",!0),q(y)?W("",!0):(R(),T("div",Ce,[B(_,{class:"mb-4"},{default:F((()=>[B(d,null,{default:F((()=>[H(B("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=e=>g.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[K,g.value]])])),_:1})])),_:1}),B(o,{onClick:b,color:"info",icon:"fas fa-check",raised:""},{default:F((()=>[Ae])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),ke=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,u=I(!1);O((()=>a.inputs),((e,t)=>{r()}));const i=e=>{let a=[];n.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),g.value=a,t("returnData",a),t("changeStep",e)},r=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},n=J((()=>a.inputs)),o=I(!1),p=e=>{o.value=!e.input.model,r()};return(t,a)=>{const r=s,o=l;return R(),T(o,{titles:{title:e.title},"is-loading":u.value,buttons:["next","prev"],step:3,onChangeStep:i},{default:F((()=>[B(r,{"inputs-step":q(n),onChangeSwitch:p},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const De={class:""};var Pe=N({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=I(!1),n=I([]);O((()=>a.inputs),((e,t)=>{o()})),L((()=>{let e=b.findIndex((e=>"prorrateo"==e.name)),t=b.findIndex((e=>"schedules"==e.name));u(b,"recurrence").class="is-12",-1!=e&&(b.splice(e,1),o()),-1!=t&&(b.splice(t,1),o())}));const o=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},m=e=>{let a=null;h.forEach(((e,t)=>{0==t?a=e.inputs:n.value.push(e)})),r.value||(S.value=a,t("returnData",{memberMembership:a,familyMembership:n}),t("changeStep",e))},d=J((()=>{const e=X([]);h.value=[];let t=[];b.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(c(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(c(a.familiares[s],JSON.parse(JSON.stringify(t))));return h.value=e,e})),c=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==x.value?(u(t,"recurrence").model=!1,u(t,"recurrence").display=!1,u(t,"is_initiation_fee").model=!0,u(t,"is_card_price").model=!0):(u(t,"recurrence").model=!0,u(t,"recurrence").display=!0,u(t,"is_initiation_fee").model=!1,u(t,"is_card_price").model=!1),s.member=e,s.membresia=t,j(s.membresia,s.member),s};return(t,a)=>{const u=s,r=le,n=l;return R(),T(n,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:m},{default:F((()=>[(R(!0),T(U,null,G(q(d),((e,t)=>(R(),T(r,{key:`ss${t}`,class:"mb-4"},{default:F((()=>[B("p",De,[B("b",null,$(q(p)(e.member,"name"))+" "+$(q(p)(e.member,"second_name"))+" "+$(q(p)(e.member,"last_name")),1)]),B(u,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128))])),_:1},8,["titles","isloading"])}}});const Ve={key:1},we={class:"d-flex justify-content-end w-100"},Ee={class:"d-flex justify-content-between w-100"},Ne=Q(" Finish "),Ie=Q(" Cancel "),Oe=Q(" Register another member ");var Je=N({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){I(!1);const s=I(!1),i=J((()=>h.value[0])),r=J((()=>{let e=[];return h.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));L((()=>{u(C.value,"mismatarjeta").change=n,A.value=[],i.value?(M(i.value.membresia,i.value.member),r.value.length&&r.value.forEach((e=>{M(e.membresia,e.member)}))):(console.error("No tiene membresia"),m.error("Membership is required"))}));const n=function(){this.model},o=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},p=J((()=>{let e=[];return A.value.forEach((t=>{0==u(t.member,"is_family").model&&e.push(t)})),A.value.forEach((t=>{1==u(t.member,"is_family").model&&e.push(t)})),e}));I([]);const d=()=>{window.location.reload()},c=I([]),v=e=>{c.value.push(e)};return(a,u)=>{const i=ue,r=ie,n=re,m=e,f=l;return R(),T(f,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:o},{default:F((()=>[q(A).length?W("",!0):(R(),T(i,{key:0,height:"300px",class:"mb-4"})),q(A)?(R(),T("div",Ve,[(R(!0),T(U,null,G(q(p),((e,t)=>(R(),T(n,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:F((()=>[B("div",we,[B(r,{member:e.member,membresia:e.membresia,contact:q(g),presupuesto_id:e.presupuesto_id,"categories-members":q(k),"notas-input":q(D),total:e.totales.upfront.amount_total,presupuesto:e,onPaymentAction:v},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total","presupuesto"])])])),_:2},1032,["presupuesto"])))),128))])):W("",!0),B("div",Ee,[q(p).length>0&&c.value.length==q(p).length?(R(),T(m,{key:0,color:"danger",to:{name:"index"}},{default:F((()=>[Ne])),_:1})):(R(),T(m,{key:1,color:"danger",to:{name:"index"}},{default:F((()=>[Ie])),_:1})),q(p).length>0&&c.value.length==q(p).length?(R(),T(m,{key:2,color:"success",onClick:d},{default:F((()=>[Oe])),_:1})):W("",!0)])])),_:1},8,["titles","is-loading"])}}});Z("data-v-915b2888");const Re={class:"content"},Te={class:"content-text"};ee();var qe=N({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=J((()=>t.active?100:0));return(t,s)=>{const l=ne;return R(),T("div",Re,[B("div",{class:["circle",e.active?"active":""]},null,2),B(l,{class:"progressbar",value:q(a),size:"smaller"},null,8,["value"]),B("div",Te,[B("p",null,"STEP "+$(e.step),1),B("p",null,[B("b",null,$(e.text),1)])])])}}});qe.__scopeId="data-v-915b2888";const Fe={class:"columns is-multiline"},Be={class:"column is-12"},Le={class:"column is-9"},$e={class:"column is-3"};var ze=N({expose:[],setup(s){be.value="Add New members",te({title:"Members"}),L((()=>{N(),pe().then((e=>{d(b,"memberships_id",e.data.memberships)})),u(b,"memberships_id").disabled=!1,u(b,"recurrences_id").disabled=!1,u(b,"is_initiation_fee").disabled=!1,u(b,"discount").disabled=!1,ce(1,"membership").then((e=>{d(b,"discount",e.data.discounts)})),de(),ve().then((e=>{d(_,"city_id",fe.value),d(P,"city_id",fe.value),d(f,"city_id",fe.value),d(_,"state_id",ye.value),d(P,"state_id",ye.value),d(f,"state_id",ye.value),d(_,"country_id",_e.value),u(_.value,"country_id").model=34,d(P,"country_id",_e.value),d(f,"country_id",_e.value)})),ge().then((e=>{d(b,"staff_id",e.data)}))}));const l=I(1),r=I([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),o=J((()=>_.value.filter((e=>e.categories.includes(k.value.model))))),p=J((()=>r.value.find((e=>e.step==l.value&&e.categories.includes(k.value.model))))),m=J((()=>r.value.filter((e=>e.categories.includes(k.value.model)))));J((()=>i(f.value)));const c=(e,t=3,a={})=>{k.value.model,6==e?sendData(t,a):l.value=e},v=I(null),y=e=>{v.value=e},g=I(null),x=e=>{g.value=e},j=I([]),C=e=>{j.value=e.value},A=I([]),M=e=>{A.value=e.familyMembership.value,S.value=e.memberMembership};I(null),I(null),I(null);const N=()=>{V.value=null,w.value=null;let e=["is_family","principal_family"];n(_.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],n(b.filter((t=>!e.includes(t.name)))),n(D.value),n(f.value)};return(s,u)=>{const i=e,r=t,n=a,d=he,v=Se,f=Me,_=ke,g=Pe,b=Je,V=qe,w=oe;return R(),T(w,null,{default:F((()=>[B("div",Fe,[B("div",Be,[1==l.value?(R(),T(n,{key:0,class:"w-100",addons:""},{default:F((()=>[(R(!0),T(U,null,G(q(k).values,((e,t)=>(R(),T(r,{key:`categoymember-${t}`},{default:F((()=>[B(i,{onClick:t=>q(k).model=e,color:q(k).model==e?"primary":void 0,rounded:""},{default:F((()=>[Q($("Prospect"==e?"Temporary Members":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):W("",!0)]),B("div",Le,[H(B(d,{type:"create",title:q(p).text,inputs:q(o),onChangeStep:c,onReturData:y},null,8,["title","inputs"]),[[ae,1==l.value]]),H(B(v,{title:q(p).text,onChangeStep:c},null,8,["title"]),[[ae,2==l.value&&"Minor"==q(k).model]]),H(B(f,{type:"create",title:q(p).text,inputs:q(P),onChangeStep:c,onReturData:C},null,8,["title","inputs"]),[[ae,2==l.value&&"Adult"==q(k).model]]),H(B(_,{type:"create",title:q(p).text,inputs:q(E),onChangeStep:c,onReturnData:x},null,8,["title","inputs"]),[[ae,3==l.value||2==l.value&&"Prospect"==q(k).model]]),H(B(g,{type:"create",member:q(o),familiares:j.value,title:q(p).text,inputs:q(h),memberships:q(me),notes:q(D),onChangeStep:c,onReturnData:M},null,8,["member","familiares","title","inputs","memberships","notes"]),[[ae,4==l.value]]),5==l.value?(R(),T(b,{key:0,type:"create",title:q(p).text,member:q(o),familiares:j.value,inputs:q(h),"member-membership":q(S),"family-membership":A.value,onChangeStep:c},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):W("",!0)]),B("div",$e,[(R(!0),T(U,null,G(q(m),((e,t)=>(R(),T(V,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default ze;
