<<<<<<< HEAD:dist/assets/create.635edd02.js
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.c41077d9.js";import{_ as t}from"./V-Control.7db53124.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.18737d13.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.ab886c12.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.e1e53d60.js";import{p as i,h as n,s as r,v as u,a as p,d as o,b as m,m as d}from"./Mixin.d9b7e9cd.js";import{d as c,r as v,w as f,b as y,o as b,h,j as g,k as _,D as S,L as x,N as j,K as C,G as M,J as k,Y as A,Z as D,z as P,A as $,F as I,Q as T}from"./vendor.20c6e26b.js";import{r as V,c as N,t as w,e as R,d as J,o as O,u as E,v as F,w as L,x as B}from"./Members.65d4646f.js";import{_ as z}from"./V-Card.vue_vue&type=script&setup=true&lang.a84d607f.js";import{g as G}from"./Diciplines.3bd6a96b.js";import{r as q,g as K}from"./Recurrences.657c0f8a.js";import{m as Q,g as U}from"./Memberships.b802f458.js";import{d as W,_ as Y,g as Z}from"./Discounts.786a9cee.js";import{t as H,f as X}from"./Staffs.99d407b8.js";import{h as ee}from"./moment.08a7f518.js";import{_ as te}from"./V-Progress.vue_vue&type=script&setup=true&lang.d60f2cc6.js";import{_ as ae}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.40c42c62.js";import{g as se,c as le,s as ie,a as ne}from"./config.a76e1fb8.js";import{o as re}from"./PaymentMethodsData.013b199b.js";import{p as ue}from"./sidebarLayoutState.7d86b71a.js";import"./V-Placeload.6f1c2f39.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b988b66a.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1ef81034.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.400f7249.js";import"./notyf.es.f84e4201.js";import"./index.ea01e17d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7d4827c8.js";import"./useDropdown.296ecd62.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b97017d7.js";import"./V-Dropdown.25b41d6f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.be9dc2bf.js";import"./activePanelState.e4b2eb10.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.84c97654.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.62bd7bda.js";import"./V-Message.vue_vue&type=script&setup=true&lang.239e9299.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.f516ac94.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.dc615be5.js";import"./navbarLayoutState.e74fe37d.js";import"./video.68ca51b7.js";import"./darkModeState.e43684e5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.34db0522.js";import"./AnimatedLogo.825190b0.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.7215798f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.55c6c502.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f03ca1ec.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b2ba4054.js";var pe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,r=v(!1);f((()=>a.inputs),((e,t)=>{u()}));const u=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},p=y((()=>o.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),o=v(!1),m=e=>{o.value=!e.input.model,u()},d=e=>{let a=i(p.value);n.value||(a.select_type=a.select_type?"Company":"Individual",t("returData",a),t("changeStep",e))};return(t,a)=>{const i=s,n=l;return b(),h(n,{titles:{title:e.title},"is-loading":r.value,buttons:["next","back"],step:1,onChangeStep:d},{default:g((()=>[_(i,{"inputs-step":S(p),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),oe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,i)=>{const n=s,r=l;return b(),h(r,{titles:{title:e.title},"is-loading":t.isLoading,buttons:["next","prev"],step:2,onChangeStep:a},{default:g((()=>[_(n,{"inputs-step":S(V)},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const me=M(" Remove Family Member "),de={class:"column d-flex justify-content-center is-12"},ce=M(" Add Another Family Member ");var ve=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(t,{emit:a}){const i=t,n=v(!1);f((()=>i.inputs),((e,t)=>{r()}));const r=()=>{n.value=!0,setTimeout((()=>{n.value=!1}),500)},u=v([JSON.parse(JSON.stringify(i.inputs))]),p=y((()=>(r(),u.value.forEach(((e,t)=>{d.value.includes(t)?u.value[t]=e.filter((e=>e.category.includes("Minor"))):u.value[t]=JSON.parse(JSON.stringify(i.inputs))})),u.value))),o=()=>{u.value.push(JSON.parse(JSON.stringify(i.inputs)))},m=e=>{a("returData",u),a("changeStep",e)},d=v([]);return(a,i)=>{const r=s,c=e,v=z,f=l;return b(),h(f,{titles:{title:t.title},"is-loading":n.value,buttons:["next","prev"],step:2,onChangeStep:m},{default:g((()=>[(b(!0),h(x,null,j(S(p),((e,t)=>(b(),h(v,{key:t,class:"mb-4"},{default:g((()=>[_(r,{"inputs-step":e,onChangeSwitch:e=>{return a=t,console.log("es este"),console.log(a),console.log(p.value),void d.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),t>0?(b(),h(c,{key:0,onClick:e=>u.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:g((()=>[me])),_:2},1032,["onClick"])):C("",!0)])),_:2},1024)))),128)),_("div",de,[_(c,{onClick:o,color:"info",icon:"fas fa-check",raised:""},{default:g((()=>[ce])),_:1})])])),_:1},8,["titles","is-loading"])}}}),fe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=v(!1);f((()=>a.inputs),((e,t)=>{r()}));const n=e=>{let a=[];u.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),t("returnData",a),t("changeStep",e)},r=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},u=y((()=>a.inputs)),p=v(!1),o=e=>{p.value=!e.input.model,r()};return(t,a)=>{const r=s,p=l;return b(),h(p,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:n},{default:g((()=>[_(r,{"inputs-step":S(u),onChangeSwitch:o},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const ye={class:""},be={class:"mb-5"};var he=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=v(!1);f((()=>a.inputs),((e,t)=>{n()}));const n=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},o=y((()=>a.inputs)),m=[{typeInput:"checkbox",name:"recurrence",placeholder:"Recurrence",model:["recurrence"],disabled:!1,class:"is-12"},{typeInput:"selectDataActionChange",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,class:"is-12"},{typeInput:"radioBoxs",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,class:"is-12",filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",model:"",disabled:!1,class:"is-12"},{typeInput:"selectDataActionChange",name:"locations_id",placeholder:"Locations Sale",values:[],model:"",disabled:!1,class:"is-4"},{typeInput:"checkboxGroupSimple",name:"diciplines",text:"Diciplines",model:[],values:[],disabled:!1,class:"is-12"},{typeInput:"number",name:"initiation_fee",placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4"},{typeInput:"checkbox",name:"is_initiation_fee",placeholder:"No initiation fee",model:[],disabled:!1,class:"is-4"},{typeInput:"selectData",name:"discount",placeholder:"Discount",values:[],model:"",disabled:!1,class:"is-6"},{typeInput:"selectData",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,class:"is-6",filterOptionText:function(e){return`${e.name} ${e.second_name} ${e.last_name}`}}];y((()=>JSON.parse(JSON.stringify(m))));const d=y((()=>{let e=[];return a.familiares.forEach((t=>{if(""!=t.find((e=>"name"==e.name)).model){let a=JSON.parse(JSON.stringify(m));r(a,"memberships_id",Q.value),r(a,"discount",W.value),r(a,"staff_id",H.value),e.push({family:t,inputs:a})}})),e})),c=e=>{t("returnData",{memberMembership:o,familyMembership:d}),t("changeStep",e)},C=e=>{if("memberships_id"==e.input.name){let t=e.input.values.find((t=>t.id==e.input.model));p(e.inputsStep,"initiation_fee",t.initiation_fee);let a=[];t.locations.forEach((e=>{1==e.sale&&a.push(e.company_locations)})),r(e.inputsStep,"locations_id",a);let s=[];t.amounts.forEach((e=>{let t=q.value.find((t=>t.id==e.recurrences_id));t.amount=e.amount,s.push(t)})),r(e.inputsStep,"recurrences_id",s),n()}"locations_id"==e.input.name&&G([e.input.model]).then((t=>{r(e.inputsStep,"diciplines",t.data),n()}))},M=(e,t)=>{p(o,"amount",e.values.find((t=>t.id==e.model)).amount)},A=(e,t)=>{p(t,"amount",e.values.find((t=>t.id==e.model)).amount)};return(t,a)=>{const r=s,p=z,m=l;return b(),h(m,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:4,onChangeStep:c},{default:g((()=>[_(p,{class:"mb-4"},{default:g((()=>[_("p",ye,[_("b",null,k(S(u)(e.member,"name"))+" "+k(S(u)(e.member,"second_name"))+" "+k(S(u)(e.member,"last_name")),1)]),_(r,{"inputs-step":S(o),onChangeSelect:C,onChangeRadio:M},null,8,["inputs-step"])])),_:1}),(b(!0),h(x,null,j(S(d),((e,t)=>(b(),h(p,{class:"mb-4",key:`da${t}`},{default:g((()=>[_("p",be,[_("b",null,k(S(u)(e.family,"name"))+" "+k(S(u)(e.family,"second_name"))+" "+k(S(u)(e.family,"last_name")),1)]),_(r,{"inputs-step":e.inputs,onChangeSelect:C,onChangeRadio:A,onChangeCheckbox:n},null,8,["inputs-step"])])),_:2},1024)))),128)),_(p,{class:"mb-4"},{default:g((()=>[_(r,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","is-loading"])}}});const ge={class:"table is-hoverable is-striped is-fullwidth"},_e=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Members"),_("th",{scope:"col"},"Membership Name"),_("th",{scope:"col"},"Recurrence"),_("th",{scope:"col"},"Prorated"),_("th",{scope:"col"},"Membership Cost"),_("th",{scope:"col"},"Initiation Fee"),_("th",{scope:"col"},"Taxes"),_("th",{scope:"col"},"Sub Total")])],-1),Se={key:0},xe={key:1},je={key:2},Ce={key:0},Me=_("br",null,null,-1),ke={key:1},Ae={key:0},De=_("br",null,null,-1),Pe={key:1},$e=_("td",{style:{"text-align":"right"},colspan:"7"},"Total",-1),Ie={class:"is-end"},Te={class:"d-flex justify-content-between"},Ve=M(" Card Payment "),Ne=M(" Cash Payment ");var we=c({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberMembership:{type:Array,default:[]},familyMembership:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(t,{emit:a}){const s=t,i=v(!1),n=e=>{a("returnData",{total:V}),a("changeStep",e)},r=y((()=>{let e=o(s.memberMembership,"memberships_id");return null!=e?e:[]})),p=y((()=>{let e=o(s.memberMembership,"recurrences_id");return null!=e?e:[]})),c=y((()=>{let e=u(s.memberMembership,"initiation_fee");return null!=e?e:[]})),A=y((()=>{let e=parseFloat(ee().format("DD")),t=0,a=0;return p.value.days>=30&&(a=e-p.value.payday,t=p.value.amount/30*a),{days:a,amount:Math.abs(Math.round(t))}})),D=e=>{let t=parseFloat(ee().format("DD")),a=0,s=0;return e.days>=30&&(s=t-e.payday,a=e.amount/30*s),{days:s,amount:Math.abs(Math.round(a))}},P=e=>"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:d(e.tax.value),value:e.tax.value},$=y((()=>P(r))),I=e=>m(e.days)>0?e.amount*m(e.days):e.amount,T=y((()=>{let e=0;return e+=p.value.amount*m(p.value.days),e+=c.value,e-=A.value.amount,e=e/100*$.value.value+e,e})),V=y((()=>{let e=0;return e+=T.value,e+=J.value,e})),R=e=>{let t=0;return t+=e.membershipCost,t+=e.initiation_fee,t-=e.prorated,t=t/100*e.objTax.value+t,t},J=y((()=>{let e=0;return s.familyMembership.forEach((t=>{let a=R({membershipCost:I(o(t.inputs,"recurrences_id")),initiation_fee:u(t.inputs,"initiation_fee"),objTax:P(o(t.inputs,"memberships_id")),prorated:D(o(t.inputs,"recurrences_id")).amount});e+=a})),e})),O=v(!1);return f((()=>N),((e,t)=>{O.value=!0})),(a,m)=>{const v=e,f=Y,y=l;return b(),h(y,{titles:{title:t.title},"is-loading":i.value,buttons:["prev"],step:5,onChangeStep:n},{default:g((()=>[_("table",ge,[_e,_("tbody",null,[_("tr",null,[_("td",null,[_("p",null,[_("b",null,k(S(u)(t.member,"name"))+" "+k(S(u)(t.member,"second_name"))+" "+k(S(u)(t.member,"last_name")),1)])]),0!=S(r).legnth?(b(),h("td",Se,k(S(r).name),1)):C("",!0),0!=S(p).length?(b(),h("td",xe,k(S(p).descriptions),1)):C("",!0),0!=S(p).length?(b(),h("td",je,[S(p).days>=30?(b(),h("span",Ce,[M(k(S(A).days)+" days : ",1),Me,M(" - "+k(S(d)(S(A).amount)),1)])):(b(),h("span",ke,"-"))])):C("",!0),_("td",null,k(S(d)(I(S(p)))),1),_("td",null,k(S(d)(S(c))),1),_("td",null,k(S($).text),1),_("td",null,k(S(d)(S(T))),1)]),(b(!0),h(x,null,j(s.familyMembership,((e,t)=>(b(),h("tr",{key:`familiar${t}`},[_("td",null,k(S(u)(e.family,"name")),1),_("td",null,k(S(o)(e.inputs,"memberships_id").name),1),_("td",null,k(S(o)(e.inputs,"recurrences_id").descriptions),1),_("td",null,[S(o)(e.inputs,"recurrences_id").days>=30?(b(),h("span",Ae,[M(k(D(S(o)(e.inputs,"recurrences_id")).days)+" days : ",1),De,M(" - "+k(S(d)(D(S(o)(e.inputs,"recurrences_id")).amount)),1)])):(b(),h("span",Pe,"-"))]),_("td",null,k(S(d)(I(S(o)(e.inputs,"recurrences_id")))),1),_("td",null,k(S(d)(S(u)(e.inputs,"initiation_fee"))),1),_("td",null,k(P(S(o)(e.inputs,"memberships_id")).text),1),_("td",null,k(S(d)(R({membershipCost:I(S(o)(e.inputs,"recurrences_id")),initiation_fee:S(u)(e.inputs,"initiation_fee"),objTax:P(S(o)(e.inputs,"memberships_id")),prorated:D(S(o)(e.inputs,"recurrences_id")).amount}))),1)])))),128)),_("tr",null,[$e,_("td",Ie,k(S(d)(S(V))),1)])])]),_("div",Te,[_(v,{color:"success",onClick:m[1]||(m[1]=e=>n(6))},{default:g((()=>[Ve])),_:1}),_(v,{color:"warning"},{default:g((()=>[Ne])),_:1})]),S(N)&&S(w)?(b(),h(f,{key:0,amount:S(V),id:S(N),member_membership:S(w)},null,8,["amount","id","member_membership"])):C("",!0)])),_:1},8,["titles","is-loading"])}}});A("data-v-915b2888");const Re={class:"content"},Je={class:"content-text"};D();var Oe=c({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=y((()=>t.active?100:0));return(t,s)=>{const l=te;return b(),h("div",Re,[_("div",{class:["circle",e.active?"active":""]},null,2),_(l,{class:"progressbar",value:S(a),size:"smaller"},null,8,["value"]),_("div",Je,[_("p",null,"STEP "+k(e.step),1),_("p",null,[_("b",null,k(e.text),1)])])])}}});Oe.__scopeId="data-v-915b2888";const Ee={class:"columns is-multiline"},Fe={class:"column is-12"},Le={class:"column is-9"},Be={class:"column is-3"};var ze=c({expose:[],setup(s){ue.value="Add New members",P({title:"Members"}),$((()=>{U().then((e=>{r(R,"memberships_id",e.data.memberships)})),Z().then((e=>{r(R,"discount",e.data.discounts)})),K().then((e=>{})),se().then((e=>{r(J,"city_id",le.value),r(O,"city_id",le.value),r(J,"state_id",ie.value),r(O,"state_id",ie.value),r(J,"country_id",ne.value),r(O,"country_id",ne.value)})),X().then((e=>{r(R,"staff_id",e.data)}))}));const l=v(1),n=v([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult","Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor","Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor","Prospect"]}]),u=y((()=>J.value.filter((e=>e.categories.includes(E.value.model))))),p=y((()=>n.value.find((e=>e.step==l.value&&e.categories.includes(E.value.model))))),o=y((()=>n.value.filter((e=>e.categories.includes(E.value.model))))),m=y((()=>i(V.value))),d=e=>{console.log(e),E.value.model,6==e?te():l.value=e},c=v(null),f=e=>{c.value=e},A=v(null),D=e=>{A.value=e},z=v([]),G=e=>{z.value=e.value},q=v([]),W=v([]),Y=e=>{W.value=e.familyMembership.value,q.value=e.memberMembership.value};v(null),v(null);const H=v(null),ee=e=>{H.value=e.total.value},te=()=>{const e=new FormData;((e,t)=>{for(var a in t)e.append(a,t[a])})(e,c.value);let t=A.value;for(var a=0;a<t.length;a++){var s=t[a];for(var l in s)e.append(`notifications[${a}][${l}]`,s[l])}let n=i(q.value);for(var a in n)if("diciplines"==a){let t=n[a];for(var r=0;r<t.length;++r)e.append("diciplines[]",t[r])}else e.append(a,n[a]);e.append("total",H.value);let u=i(E.value,{array:!1});for(var a in u)e.append(a,u[a]);let p=i(L.value);for(var a in p)e.append(a,p[a]);let o=i(re.value);for(var a in o)e.append(a,o[a]);for(var a in W.value.forEach(((t,a)=>{let s=i(t.family);for(var l in s)"category"==l&&(s[l]?s[l]="Minor":s[l]="Adult"),e.append(`familiares[${a}][${l}]`,s[l]);let n=A.value;for(l=0;l<n.length;l++){var r=n[l];for(var u in r)e.append(`familiares[${a}][notifications][${l}][${u}]`,r[u])}let p=i(t.inputs);for(var l in p)if("diciplines"==l){let t=p[l];for(var o=0;o<t.length;++o)e.append(`familiares[${a}][diciplines][]`,t[o])}else e.append(`familiares[${a}][${l}]`,p[l]);e.append(`familiares[${a}][total]`,H.value);let m=i(L.value);for(var l in m)e.append(`familiares[${a}][${l}]`,m[l]);let d=i(re.value);for(var l in d)e.append(`familiares[${a}][${l}]`,d[l])})),m.value)e.append(a,m.value[a]);B(e).then((e=>{N.value=e.data.member.id,console.log("este",e.data.member.membership_members.id),w.value=e.data.member.membership_members.id}))};return(s,i)=>{const n=e,r=t,m=a,c=pe,v=oe,y=ve,A=fe,P=he,$=we,V=Oe,N=ae;return b(),h(N,null,{default:g((()=>[_("div",Ee,[_("div",Fe,[1==l.value?(b(),h(m,{key:0,class:"w-100",addons:""},{default:g((()=>[(b(!0),h(x,null,j(S(E).values,((e,t)=>(b(),h(r,{key:`categoymember-${t}`},{default:g((()=>[_(n,{onClick:t=>S(E).model=e,color:S(E).model==e?"primary":void 0,rounded:""},{default:g((()=>[M(k(e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):C("",!0)]),_("div",Le,[I(_(c,{type:"create",title:S(p).text,inputs:S(u),onChangeStep:d,onReturData:f},null,8,["title","inputs"]),[[T,1==l.value]]),I(_(v,{title:S(p).text,onChangeStep:d},null,8,["title"]),[[T,2==l.value&&"Minor"==S(E).model]]),I(_(y,{type:"create",title:S(p).text,inputs:S(O),onChangeStep:d,onReturData:G},null,8,["title","inputs"]),[[T,2==l.value]]),I(_(A,{type:"create",title:S(p).text,inputs:S(F),onChangeStep:d,onReturnData:D},null,8,["title","inputs"]),[[T,3==l.value]]),4==l.value?(b(),h(P,{key:0,type:"create",member:S(u),familiares:z.value,title:S(p).text,inputs:S(R),memberships:S(Q),notes:S(L),onChangeStep:d,onReturnData:Y},null,8,["member","familiares","title","inputs","memberships","notes"])):C("",!0),5==l.value?(b(),h($,{key:1,type:"create",title:S(p).text,member:S(u),familiares:z.value,inputs:S(R),"member-membership":q.value,"family-membership":W.value,onChangeStep:d,onReturnData:ee},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):C("",!0)]),_("div",Be,[(b(!0),h(x,null,j(S(o),((e,t)=>(b(),h(V,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default ze;
=======
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.d3c931ae.js";import{_ as t}from"./V-Control.fd746f55.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.4ddc63d2.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.7486f97d.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.eb3aeb8b.js";import{p as i,h as n,s as r,v as u,a as p,d as o,b as m,m as d}from"./Mixin.cdfef6ee.js";import{d as c,r as v,w as f,b as y,o as b,h,j as g,k as _,D as S,L as x,N as j,K as C,G as M,J as k,Y as A,Z as D,z as P,A as $,F as I,Q as T}from"./vendor.eb57aacd.js";import{r as V,c as N,t as w,e as R,d as J,o as O,u as E,v as F,w as L,x as B}from"./Members.17586495.js";import{_ as z}from"./V-Card.vue_vue&type=script&setup=true&lang.ef82cbbe.js";import{g as G}from"./Diciplines.e51380f9.js";import{r as q,g as K}from"./Recurrences.93c3a798.js";import{m as Q,g as U}from"./Memberships.d95891db.js";import{d as W,_ as Y,g as Z}from"./Discounts.6ac16cb0.js";import{t as H,f as X}from"./Staffs.7e01bd75.js";import{h as ee}from"./moment.08a7f518.js";import{_ as te}from"./V-Progress.vue_vue&type=script&setup=true&lang.e8edc000.js";import{_ as ae}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f68710aa.js";import{g as se,c as le,s as ie,a as ne}from"./config.f4c6d1ad.js";import{o as re}from"./PaymentMethodsData.8ca78263.js";import{p as ue}from"./sidebarLayoutState.854f6bf1.js";import"./V-Placeload.c6d3ce72.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.ba30fecd.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.5ba6b9d3.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.42802031.js";import"./notyf.es.f84e4201.js";import"./index.86279b2e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.1284fa7a.js";import"./useDropdown.95668737.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e24b863c.js";import"./V-Dropdown.a6217aee.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.407b0470.js";import"./activePanelState.dd6309d6.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.72074133.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.091565db.js";import"./V-Message.vue_vue&type=script&setup=true&lang.607b67b4.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.6b692137.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.afde1f4e.js";import"./navbarLayoutState.aa42df06.js";import"./video.3ff6aecb.js";import"./darkModeState.62a6b645.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.24b43449.js";import"./AnimatedLogo.bf038341.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.f60ee0a8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.c6aac4f1.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.bd95a3d2.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.41901023.js";var pe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,r=v(!1);f((()=>a.inputs),((e,t)=>{u()}));const u=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},p=y((()=>o.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),o=v(!1),m=e=>{o.value=!e.input.model,u()},d=e=>{let a=i(p.value);n.value||(a.select_type=a.select_type?"Company":"Individual",t("returData",a),t("changeStep",e))};return(t,a)=>{const i=s,n=l;return b(),h(n,{titles:{title:e.title},"is-loading":r.value,buttons:["next","back"],step:1,onChangeStep:d},{default:g((()=>[_(i,{"inputs-step":S(p),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),oe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,i)=>{const n=s,r=l;return b(),h(r,{titles:{title:e.title},"is-loading":t.isLoading,buttons:["next","prev"],step:2,onChangeStep:a},{default:g((()=>[_(n,{"inputs-step":S(V)},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const me=M(" Remove Family Member "),de={class:"column d-flex justify-content-center is-12"},ce=M(" Add Another Family Member ");var ve=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(t,{emit:a}){const i=t,n=v(!1);f((()=>i.inputs),((e,t)=>{r()}));const r=()=>{n.value=!0,setTimeout((()=>{n.value=!1}),500)},u=v([JSON.parse(JSON.stringify(i.inputs))]),p=y((()=>(r(),u.value.forEach(((e,t)=>{d.value.includes(t)?u.value[t]=e.filter((e=>e.category.includes("Minor"))):u.value[t]=JSON.parse(JSON.stringify(i.inputs))})),u.value))),o=()=>{u.value.push(JSON.parse(JSON.stringify(i.inputs)))},m=e=>{a("returData",u),a("changeStep",e)},d=v([]);return(a,i)=>{const r=s,c=e,v=z,f=l;return b(),h(f,{titles:{title:t.title},"is-loading":n.value,buttons:["next","prev"],step:2,onChangeStep:m},{default:g((()=>[(b(!0),h(x,null,j(S(p),((e,t)=>(b(),h(v,{key:t,class:"mb-4"},{default:g((()=>[_(r,{"inputs-step":e,onChangeSwitch:e=>{return a=t,console.log("es este"),console.log(a),console.log(p.value),void d.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),t>0?(b(),h(c,{key:0,onClick:e=>u.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:g((()=>[me])),_:2},1032,["onClick"])):C("",!0)])),_:2},1024)))),128)),_("div",de,[_(c,{onClick:o,color:"info",icon:"fas fa-check",raised:""},{default:g((()=>[ce])),_:1})])])),_:1},8,["titles","is-loading"])}}}),fe=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,i=v(!1);f((()=>a.inputs),((e,t)=>{r()}));const n=e=>{let a=[];u.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),t("returnData",a),t("changeStep",e)},r=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},u=y((()=>a.inputs)),p=v(!1),o=e=>{p.value=!e.input.model,r()};return(t,a)=>{const r=s,p=l;return b(),h(p,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:3,onChangeStep:n},{default:g((()=>[_(r,{"inputs-step":S(u),onChangeSwitch:o},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const ye={class:""},be={class:"mb-5"};var he=c({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=v(!1);f((()=>a.inputs),((e,t)=>{n()}));const n=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},o=y((()=>a.inputs)),m=[{typeInput:"checkbox",name:"recurrence",placeholder:"Recurrence",model:["recurrence"],disabled:!1,class:"is-12"},{typeInput:"selectDataActionChange",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,class:"is-12"},{typeInput:"radioBoxs",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,class:"is-12",filterName:"descriptions",otros:"amount"},{typeInput:"hidden",name:"amount",placeholder:"Amount",model:"",disabled:!1,class:"is-12"},{typeInput:"selectDataActionChange",name:"locations_id",placeholder:"Locations Sale",values:[],model:"",disabled:!1,class:"is-4"},{typeInput:"checkboxGroupSimple",name:"diciplines",text:"Diciplines",model:[],values:[],disabled:!1,class:"is-12"},{typeInput:"number",name:"initiation_fee",placeholder:"Initiation fee",model:[],disabled:!0,class:"is-4"},{typeInput:"checkbox",name:"is_initiation_fee",placeholder:"No initiation fee",model:[],disabled:!1,class:"is-4"},{typeInput:"selectData",name:"discount",placeholder:"Discount",values:[],model:"",disabled:!1,class:"is-6"},{typeInput:"selectData",name:"staff_id",placeholder:"Trainer",values:[],model:"",disabled:!1,class:"is-6",filterOptionText:function(e){return`${e.name} ${e.second_name} ${e.last_name}`}}];y((()=>JSON.parse(JSON.stringify(m))));const d=y((()=>{let e=[];return a.familiares.forEach((t=>{if(""!=t.find((e=>"name"==e.name)).model){let a=JSON.parse(JSON.stringify(m));r(a,"memberships_id",Q.value),r(a,"discount",W.value),r(a,"staff_id",H.value),e.push({family:t,inputs:a})}})),e})),c=e=>{t("returnData",{memberMembership:o,familyMembership:d}),t("changeStep",e)},C=e=>{if("memberships_id"==e.input.name){let t=e.input.values.find((t=>t.id==e.input.model));p(e.inputsStep,"initiation_fee",t.initiation_fee);let a=[];t.locations.forEach((e=>{1==e.sale&&a.push(e.company_locations)})),r(e.inputsStep,"locations_id",a);let s=[];t.amounts.forEach((e=>{let t=q.value.find((t=>t.id==e.recurrences_id));t.amount=e.amount,s.push(t)})),r(e.inputsStep,"recurrences_id",s),n()}"locations_id"==e.input.name&&G([e.input.model]).then((t=>{r(e.inputsStep,"diciplines",t.data),n()}))},M=(e,t)=>{p(o,"amount",e.values.find((t=>t.id==e.model)).amount)},A=(e,t)=>{p(t,"amount",e.values.find((t=>t.id==e.model)).amount)};return(t,a)=>{const r=s,p=z,m=l;return b(),h(m,{titles:{title:e.title},"is-loading":i.value,buttons:["next","prev"],step:4,onChangeStep:c},{default:g((()=>[_(p,{class:"mb-4"},{default:g((()=>[_("p",ye,[_("b",null,k(S(u)(e.member,"name"))+" "+k(S(u)(e.member,"second_name"))+" "+k(S(u)(e.member,"last_name")),1)]),_(r,{"inputs-step":S(o),onChangeSelect:C,onChangeRadio:M},null,8,["inputs-step"])])),_:1}),(b(!0),h(x,null,j(S(d),((e,t)=>(b(),h(p,{class:"mb-4",key:`da${t}`},{default:g((()=>[_("p",be,[_("b",null,k(S(u)(e.family,"name"))+" "+k(S(u)(e.family,"second_name"))+" "+k(S(u)(e.family,"last_name")),1)]),_(r,{"inputs-step":e.inputs,onChangeSelect:C,onChangeRadio:A,onChangeCheckbox:n},null,8,["inputs-step"])])),_:2},1024)))),128)),_(p,{class:"mb-4"},{default:g((()=>[_(r,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","is-loading"])}}});const ge={class:"table is-hoverable is-striped is-fullwidth"},_e=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Members"),_("th",{scope:"col"},"Membership Name"),_("th",{scope:"col"},"Recurrence"),_("th",{scope:"col"},"Prorated"),_("th",{scope:"col"},"Membership Cost"),_("th",{scope:"col"},"Initiation Fee"),_("th",{scope:"col"},"Taxes"),_("th",{scope:"col"},"Sub Total")])],-1),Se={key:0},xe={key:1},je={key:2},Ce={key:0},Me=_("br",null,null,-1),ke={key:1},Ae={key:0},De=_("br",null,null,-1),Pe={key:1},$e=_("td",{style:{"text-align":"right"},colspan:"7"},"Total",-1),Ie={class:"is-end"},Te={class:"d-flex justify-content-between"},Ve=M(" Card Payment "),Ne=M(" Cash Payment ");var we=c({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberMembership:{type:Array,default:[]},familyMembership:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(t,{emit:a}){const s=t,i=v(!1),n=e=>{a("returnData",{total:V}),a("changeStep",e)},r=y((()=>{let e=o(s.memberMembership,"memberships_id");return null!=e?e:[]})),p=y((()=>{let e=o(s.memberMembership,"recurrences_id");return null!=e?e:[]})),c=y((()=>{let e=u(s.memberMembership,"initiation_fee");return null!=e?e:[]})),A=y((()=>{let e=parseFloat(ee().format("DD")),t=0,a=0;return p.value.days>=30&&(a=e-p.value.payday,t=p.value.amount/30*a),{days:a,amount:Math.abs(Math.round(t))}})),D=e=>{let t=parseFloat(ee().format("DD")),a=0,s=0;return e.days>=30&&(s=t-e.payday,a=e.amount/30*s),{days:s,amount:Math.abs(Math.round(a))}},P=e=>"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:d(e.tax.value),value:e.tax.value},$=y((()=>P(r))),I=e=>m(e.days)>0?e.amount*m(e.days):e.amount,T=y((()=>{let e=0;return e+=p.value.amount*m(p.value.days),e+=c.value,e-=A.value.amount,e=e/100*$.value.value+e,e})),V=y((()=>{let e=0;return e+=T.value,e+=J.value,e})),R=e=>{let t=0;return t+=e.membershipCost,t+=e.initiation_fee,t-=e.prorated,t=t/100*e.objTax.value+t,t},J=y((()=>{let e=0;return s.familyMembership.forEach((t=>{let a=R({membershipCost:I(o(t.inputs,"recurrences_id")),initiation_fee:u(t.inputs,"initiation_fee"),objTax:P(o(t.inputs,"memberships_id")),prorated:D(o(t.inputs,"recurrences_id")).amount});e+=a})),e})),O=v(!1);return f((()=>N),((e,t)=>{O.value=!0})),(a,m)=>{const v=e,f=Y,y=l;return b(),h(y,{titles:{title:t.title},"is-loading":i.value,buttons:["prev"],step:5,onChangeStep:n},{default:g((()=>[_("table",ge,[_e,_("tbody",null,[_("tr",null,[_("td",null,[_("p",null,[_("b",null,k(S(u)(t.member,"name"))+" "+k(S(u)(t.member,"second_name"))+" "+k(S(u)(t.member,"last_name")),1)])]),0!=S(r).legnth?(b(),h("td",Se,k(S(r).name),1)):C("",!0),0!=S(p).length?(b(),h("td",xe,k(S(p).descriptions),1)):C("",!0),0!=S(p).length?(b(),h("td",je,[S(p).days>=30?(b(),h("span",Ce,[M(k(S(A).days)+" days : ",1),Me,M(" - "+k(S(d)(S(A).amount)),1)])):(b(),h("span",ke,"-"))])):C("",!0),_("td",null,k(S(d)(I(S(p)))),1),_("td",null,k(S(d)(S(c))),1),_("td",null,k(S($).text),1),_("td",null,k(S(d)(S(T))),1)]),(b(!0),h(x,null,j(s.familyMembership,((e,t)=>(b(),h("tr",{key:`familiar${t}`},[_("td",null,k(S(u)(e.family,"name")),1),_("td",null,k(S(o)(e.inputs,"memberships_id").name),1),_("td",null,k(S(o)(e.inputs,"recurrences_id").descriptions),1),_("td",null,[S(o)(e.inputs,"recurrences_id").days>=30?(b(),h("span",Ae,[M(k(D(S(o)(e.inputs,"recurrences_id")).days)+" days : ",1),De,M(" - "+k(S(d)(D(S(o)(e.inputs,"recurrences_id")).amount)),1)])):(b(),h("span",Pe,"-"))]),_("td",null,k(S(d)(I(S(o)(e.inputs,"recurrences_id")))),1),_("td",null,k(S(d)(S(u)(e.inputs,"initiation_fee"))),1),_("td",null,k(P(S(o)(e.inputs,"memberships_id")).text),1),_("td",null,k(S(d)(R({membershipCost:I(S(o)(e.inputs,"recurrences_id")),initiation_fee:S(u)(e.inputs,"initiation_fee"),objTax:P(S(o)(e.inputs,"memberships_id")),prorated:D(S(o)(e.inputs,"recurrences_id")).amount}))),1)])))),128)),_("tr",null,[$e,_("td",Ie,k(S(d)(S(V))),1)])])]),_("div",Te,[_(v,{color:"success",onClick:m[1]||(m[1]=e=>n(6))},{default:g((()=>[Ve])),_:1}),_(v,{color:"warning"},{default:g((()=>[Ne])),_:1})]),S(N)&&S(w)?(b(),h(f,{key:0,amount:S(V),id:S(N),member_membership:S(w)},null,8,["amount","id","member_membership"])):C("",!0)])),_:1},8,["titles","is-loading"])}}});A("data-v-915b2888");const Re={class:"content"},Je={class:"content-text"};D();var Oe=c({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=y((()=>t.active?100:0));return(t,s)=>{const l=te;return b(),h("div",Re,[_("div",{class:["circle",e.active?"active":""]},null,2),_(l,{class:"progressbar",value:S(a),size:"smaller"},null,8,["value"]),_("div",Je,[_("p",null,"STEP "+k(e.step),1),_("p",null,[_("b",null,k(e.text),1)])])])}}});Oe.__scopeId="data-v-915b2888";const Ee={class:"columns is-multiline"},Fe={class:"column is-12"},Le={class:"column is-9"},Be={class:"column is-3"};var ze=c({expose:[],setup(s){ue.value="Add New members",P({title:"Members"}),$((()=>{U().then((e=>{r(R,"memberships_id",e.data.memberships)})),Z().then((e=>{r(R,"discount",e.data.discounts)})),K().then((e=>{})),se().then((e=>{r(J,"city_id",le.value),r(O,"city_id",le.value),r(J,"state_id",ie.value),r(O,"state_id",ie.value),r(J,"country_id",ne.value),r(O,"country_id",ne.value)})),X().then((e=>{r(R,"staff_id",e.data)}))}));const l=v(1),n=v([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult","Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor","Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor","Prospect"]}]),u=y((()=>J.value.filter((e=>e.categories.includes(E.value.model))))),p=y((()=>n.value.find((e=>e.step==l.value&&e.categories.includes(E.value.model))))),o=y((()=>n.value.filter((e=>e.categories.includes(E.value.model))))),m=y((()=>i(V.value))),d=e=>{console.log(e),E.value.model,6==e?te():l.value=e},c=v(null),f=e=>{c.value=e},A=v(null),D=e=>{A.value=e},z=v([]),G=e=>{z.value=e.value},q=v([]),W=v([]),Y=e=>{W.value=e.familyMembership.value,q.value=e.memberMembership.value};v(null),v(null);const H=v(null),ee=e=>{H.value=e.total.value},te=()=>{const e=new FormData;((e,t)=>{for(var a in t)e.append(a,t[a])})(e,c.value);let t=A.value;for(var a=0;a<t.length;a++){var s=t[a];for(var l in s)e.append(`notifications[${a}][${l}]`,s[l])}let n=i(q.value);for(var a in n)if("diciplines"==a){let t=n[a];for(var r=0;r<t.length;++r)e.append("diciplines[]",t[r])}else e.append(a,n[a]);e.append("total",H.value);let u=i(E.value,{array:!1});for(var a in u)e.append(a,u[a]);let p=i(L.value);for(var a in p)e.append(a,p[a]);let o=i(re.value);for(var a in o)e.append(a,o[a]);for(var a in W.value.forEach(((t,a)=>{let s=i(t.family);for(var l in s)"category"==l&&(s[l]?s[l]="Minor":s[l]="Adult"),e.append(`familiares[${a}][${l}]`,s[l]);let n=A.value;for(l=0;l<n.length;l++){var r=n[l];for(var u in r)e.append(`familiares[${a}][notifications][${l}][${u}]`,r[u])}let p=i(t.inputs);for(var l in p)if("diciplines"==l){let t=p[l];for(var o=0;o<t.length;++o)e.append(`familiares[${a}][diciplines][]`,t[o])}else e.append(`familiares[${a}][${l}]`,p[l]);e.append(`familiares[${a}][total]`,H.value);let m=i(L.value);for(var l in m)e.append(`familiares[${a}][${l}]`,m[l]);let d=i(re.value);for(var l in d)e.append(`familiares[${a}][${l}]`,d[l])})),m.value)e.append(a,m.value[a]);B(e).then((e=>{N.value=e.data.member.id,console.log("este",e.data.member.membership_members.id),w.value=e.data.member.membership_members.id}))};return(s,i)=>{const n=e,r=t,m=a,c=pe,v=oe,y=ve,A=fe,P=he,$=we,V=Oe,N=ae;return b(),h(N,null,{default:g((()=>[_("div",Ee,[_("div",Fe,[1==l.value?(b(),h(m,{key:0,class:"w-100",addons:""},{default:g((()=>[(b(!0),h(x,null,j(S(E).values,((e,t)=>(b(),h(r,{key:`categoymember-${t}`},{default:g((()=>[_(n,{onClick:t=>S(E).model=e,color:S(E).model==e?"primary":void 0,rounded:""},{default:g((()=>[M(k(e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):C("",!0)]),_("div",Le,[I(_(c,{type:"create",title:S(p).text,inputs:S(u),onChangeStep:d,onReturData:f},null,8,["title","inputs"]),[[T,1==l.value]]),I(_(v,{title:S(p).text,onChangeStep:d},null,8,["title"]),[[T,2==l.value&&"Minor"==S(E).model]]),I(_(y,{type:"create",title:S(p).text,inputs:S(O),onChangeStep:d,onReturData:G},null,8,["title","inputs"]),[[T,2==l.value]]),I(_(A,{type:"create",title:S(p).text,inputs:S(F),onChangeStep:d,onReturnData:D},null,8,["title","inputs"]),[[T,3==l.value]]),4==l.value?(b(),h(P,{key:0,type:"create",member:S(u),familiares:z.value,title:S(p).text,inputs:S(R),memberships:S(Q),notes:S(L),onChangeStep:d,onReturnData:Y},null,8,["member","familiares","title","inputs","memberships","notes"])):C("",!0),5==l.value?(b(),h($,{key:1,type:"create",title:S(p).text,member:S(u),familiares:z.value,inputs:S(R),"member-membership":q.value,"family-membership":W.value,onChangeStep:d,onReturnData:ee},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):C("",!0)]),_("div",Be,[(b(!0),h(x,null,j(S(o),((e,t)=>(b(),h(V,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default ze;
>>>>>>> 4d6c8f042779fb7780963bc48ad59415eb6ca886:dist/assets/create.f3219e3d.js
