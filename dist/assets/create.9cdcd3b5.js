import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import{_ as t}from"./V-Control.61107fd4.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import{_ as l}from"./Companies.88697295.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.f1db6743.js";import{p as u,h as n,g as i,a as r,v as o,P as p,A as m,n as c,e as d,f as v,m as f,s as y,c as b}from"./index.a92ea6cf.js";import{d as h,r as _,w as g,c as x,o as S,h as j,j as C,k,D as A,L as M,O as P,K as D,F as w,S as V,G as $,J as T,z as N,R as F,a4 as q,aa as I,B as E,Y as z,Z as B,y as J}from"./vendor.d1a3c89d.js";import{n as O,c as R,z as L,b as U,d as G,f as K,A as W,B as Y,C as Z,w as H,D as Q,E as X,F as ee,G as te,m as ae}from"./Members.10b15448.js";import{_ as le}from"./V-Card.vue_vue&type=script&setup=true&lang.affa0552.js";import{_ as se}from"./V-Loader.vue_vue&type=script&setup=true&lang.df588183.js";import{_ as ue}from"./V-Placeload.b897843c.js";import{_ as ne}from"./V-Modal.vue_vue&type=script&setup=true&lang.e6f3ce98.js";import{_ as ie}from"./V-Progress.vue_vue&type=script&setup=true&lang.e1e76694.js";import{_ as re}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ef4fb6c6.js";import{g as oe,m as pe}from"./Memberships.b84be09d.js";import{g as me}from"./Recurrences.8750532a.js";import{g as ce}from"./Discounts.23a33d27.js";import{g as de,c as ve,s as fe,a as ye}from"./config.41e7eb9b.js";import{h as be}from"./Staffs.e8f2b87f.js";import{o as he}from"./PaymentMethodsData.f5699deb.js";import{p as _e}from"./sidebarLayoutState.a11d51b9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7a5089bc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e028b39.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d3b6617e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ca7aaffa.js";import"./useDropdown.c66a6279.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import"./V-Dropdown.0747f2f0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e9b51ce1.js";import"./activePanelState.a69051ae.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.10056650.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fa5e9da0.js";import"./V-Message.vue_vue&type=script&setup=true&lang.21ae8775.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c7a6a0a8.js";import"./navbarLayoutState.f7f62a15.js";import"./video.d77d6f43.js";import"./darkModeState.a5b4739a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.60378128.js";import"./AnimatedLogo.95c4db45.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.32fadef6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.25e2a244.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2ff8f9c8.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.66536429.js";var ge=h({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,i=_(!1);g((()=>a.inputs),((e,t)=>{r()}));const r=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},o=x((()=>p.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),p=_(!1),m=e=>{p.value=!e.input.model,r()},c=e=>{let a=u(o.value);n.value||(a.select_type=a.select_type?"Company":"Individual",t("returData",a),t("changeStep",e))};return(t,a)=>{const u=l,n=s;return S(),j(n,{titles:{title:e.title},"is-loading":i.value,buttons:["next","back"],step:1,onChangeStep:c},{default:C((()=>[k(u,{"inputs-step":A(o),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),xe=h({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,u)=>{const n=l,i=s;return S(),j(i,{titles:{title:e.title},buttons:["next","prev"],step:2,onChangeStep:a},{default:C((()=>[k(n,{"inputs-step":A(O)},null,8,["inputs-step"])])),_:1},8,["titles"])}}});const Se={key:0},je=$(" Remove Family Member "),Ce={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},ke=$(" Add Another Family Member ");var Ae=h({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(u,{emit:n}){const p=u,m=_(!1);g((()=>p.inputs),((e,t)=>{c()}));const c=()=>{m.value=!0,setTimeout((()=>{m.value=!1}),500)},d=_([]);x((()=>(c(),d.value.forEach(((e,t)=>{f.value.includes(t)?d.value[t]=e.filter((e=>e.category.includes("Minor"))):d.value[t]=JSON.parse(JSON.stringify(p.inputs))})),d.value)));const v=e=>{n("returData",d),n("changeStep",e)},f=_([]),y=x((()=>d.value.length>0)),b=_(0),h=()=>{if(b.value>0)for(var e=0;e<b.value;++e){const e=_(JSON.parse(JSON.stringify(p.inputs)));i(e.value,"misma_direccion").change=$,d.value.push(e.value)}},$=function(e){this.model?(r(e,"postal_code",""),r(e,"country_id",""),r(e,"city_id",""),r(e,"state_id","")):(r(e,"postal_code",o(R.value,"postal_code")),r(e,"country_id",o(R.value,"country_id")),r(e,"city_id",o(R.value,"city_id")),r(e,"state_id",o(R.value,"state_id")))};return(n,i)=>{const r=l,o=e,p=le,c=t,_=a,g=s;return S(),j(g,{titles:{title:u.title},"is-loading":m.value,buttons:["next","prev"],step:2,onChangeStep:v},{default:C((()=>[A(y)?(S(),j("div",Se,[(S(!0),j(M,null,P(d.value,((e,t)=>(S(),j(p,{key:t,class:"mb-4"},{default:C((()=>[k(r,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void f.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),k(o,{onClick:e=>d.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:C((()=>[je])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):D("",!0),A(y)?D("",!0):(S(),j("div",Ce,[k(_,{class:"mb-4"},{default:C((()=>[k(c,null,{default:C((()=>[w(k("input",{type:"number","onUpdate:modelValue":i[1]||(i[1]=e=>b.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[V,b.value]])])),_:1})])),_:1}),k(o,{onClick:h,color:"info",icon:"fas fa-check",raised:""},{default:C((()=>[ke])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),Me=h({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,u=_(!1);g((()=>a.inputs),((e,t)=>{i()}));const n=e=>{let a=[];r.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,l=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:l>0})}))})),t("returnData",a),t("changeStep",e)},i=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},r=x((()=>a.inputs)),o=_(!1),p=e=>{o.value=!e.input.model,i()};return(t,a)=>{const i=l,o=s;return S(),j(o,{titles:{title:e.title},"is-loading":u.value,buttons:["next","prev"],step:3,onChangeStep:n},{default:C((()=>[k(i,{"inputs-step":A(r),onChangeSwitch:p},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const Pe={class:""};var De=h({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,u=_(!1),i=_([]);g((()=>a.inputs),((e,t)=>{r()}));const r=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},p=e=>{let a=null;L.value.forEach(((e,t)=>{0==t?a=e.inputs:i.value.push(e)})),n.value||(t("returnData",{memberMembership:a,familyMembership:i}),t("changeStep",e))},m=x((()=>{L.value=[];const e=_(JSON.parse(JSON.stringify(U.value)));G(e.value),L.value.push({member:a.member,inputs:e.value});for(var t=0;t<a.familiares.length;++t){const e=_(JSON.parse(JSON.stringify(U.value)));G(e.value),L.value.push({member:a.familiares[t],inputs:e.value})}return L.value}));return(t,a)=>{const n=l,i=le,r=s;return S(),j(r,{titles:{title:e.title},isloading:u.value,buttons:["next","prev"],step:4,onChangeStep:p},{default:C((()=>[(S(!0),j(M,null,P(A(m),((e,t)=>(S(),j(i,{key:`ss${t}`,class:"mb-4"},{default:C((()=>[k("p",Pe,[k("b",null,T(A(o)(e.member,"name"))+" "+T(A(o)(e.member,"second_name"))+" "+T(A(o)(e.member,"last_name")),1)]),k(n,{"inputs-step":e.inputs},null,8,["inputs-step"])])),_:2},1024)))),128)),k(i,{class:"mb-4"},{default:C((()=>[k(n,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","isloading"])}}});const we=k("div",{id:"payment-element"},null,-1),Ve=$("Pay now "),$e=k("div",{id:"payment-message",class:"hidden"},null,-1);var Te=h({expose:[],props:{amount:{type:Number,required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0}},emits:["PaymentAction"],setup(t,{emit:a}){const l=t,s=Stripe(p.value);g((()=>l.id),(e=>{console.log("cambio"),u.value=!0,f()}));const u=_(!0);_({id:l.id,amount:l.amount});const n=_(),i=x((()=>"stripe"!=l.url?{payment_type_id:3,amount:l.amount}:{id:l.id,member_mermship_id:l.member_membership,amount:l.amount,payment_type_id:1}));_(null);const r=_(null),o=_(null),d=_(!1),v=_(null),f=async()=>{let e=await m.post(l.url,i.value).then((e=>{r.value=e.data.clientSecret,v.value=e.data.user_id,n.value=s.elements({clientSecret:r.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),o.value=n.value.create("card",{classes:{base:"base_card"}}),o.value.mount("#payment-element")})).catch((e=>{u.value=!1}));return u.value=!1,e},y=_(null),b=async e=>{e.preventDefault(),d.value=!0;const{setupIntent:t,error:u}=await s.confirmCardSetup(r.value,{payment_method:{card:o.value,billing_details:{name:y.value}}});if(u)d.value=!1,console.log(),c.error(u.message);else{const{payment_method:e}=t,{data:s}=await m.post("paymentStripe",{payment_method:e,amount:l.amount,user_id:v.value,membership_member_id:l.member_membership}).catch((e=>{d.value=!1}));s&&(a("PaymentAction",s),c.success("Success Payment"))}d.value=!1};return N((()=>{d.value=!1,f()})),(t,a)=>{const l=ue,s=e,n=se,i=le;return S(),j(M,null,[u.value?(S(),j(l,{key:0,height:"500px"})):D("",!0),w(k(i,{class:"mt-6"},{default:C((()=>[k("form",{onSubmit:q(b,["prevent"]),id:"payment-form"},[w(k("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),placeholder:"Name",type:"text"},null,512),[[V,y.value]]),we,k(n,{size:"small",active:d.value},{default:C((()=>[k(s,{id:"submit",class:"mt-4",color:"info"},{default:C((()=>[Ve])),_:1})])),_:1},8,["active"]),$e],40,["onSubmit"])])),_:1},512),[[F,!u.value]])],64)}}});const Ne=k("p",{class:"title is-3"},"Payment Success",-1),Fe=k("h1",{class:"title is-6"},null,-1),qe={class:"table is-hoverable is-striped is-fullwidth"},Ie=k("thead",null,[k("tr",null,[k("th",{scope:"col"},"Membership Name"),k("th",{scope:"col"},"Plan"),k("th",{scope:"col"},"Cost"),k("th",{scope:"col"},"Import")])],-1),Ee={style:{"text-align":"right"}},ze={key:0},Be=k("td",null,"Initiation Fee",-1),Je={style:{"text-align":"right"}},Oe={style:{"text-align":"right"}},Re=k("td",{colspan:"3",style:{"text-align":"right"}},[k("b",null,"Subtotal")],-1),Le={style:{"text-align":"right"}},Ue={colspan:"3",style:{"text-align":"right"}},Ge={style:{"text-align":"right"}},Ke=k("td",{colspan:"3",style:{"text-align":"right"}},[k("b",null,"Total")],-1),We={style:{"text-align":"right"}},Ye=k("td",{colspan:"3",style:{"text-align":"right"}},"Total recurrente",-1),Ze={key:2,class:"d-flex justify-content-between"},He=$(" Card Payment "),Qe={class:"d-flex mb-4 justify-content-between"},Xe={class:"title is-5"},et=$(" Total: "),tt={class:"title is-5"},at=$(" Cash Total: "),lt={class:"\r\n            d-flex\r\n            justify-content-center\r\n            align-items-center\r\n            flex-column\r\n            mb-4\r\n          "},st=k("p",{class:"title is-5 mb-4"},"Change Back:",-1),ut={class:"title is-3 mb-0"},nt={class:"d-flex justify-content-center flex-wrap mb-4"},it=k("div",{class:"w-100"},null,-1),rt={class:"d-flex justify-content-center"},ot=$("Reset"),pt=$("Confirm");var mt=h({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberMembership:{type:Array,default:[]},familyMembership:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(l,{emit:u}){N((()=>{r()}));const n=_(null),r=async()=>{let e={memberships_id:i(c.value.inputs,"memberships_id").model,recurrences_id:i(c.value.inputs,"recurrences_id").model,is_initiation_fee:0==i(c.value.inputs,"is_initiation_fee").model.length};K(e).then((e=>{n.value=e.data}))},p=_(!1),m=(e,t=3)=>{u("returnData",{total:R}),u("changeStep",e,t,{cash:X.value,changeBack:ee.value})},c=x((()=>L.value[0])),y=x((()=>{let e=d(c.value.inputs,"memberships_id");return null!=e?e:[]})),b=x((()=>{let e=d(c.value.inputs,"recurrences_id");return null!=e?e:[]})),h=x((()=>{let e=o(c.value.inputs,"initiation_fee");return null!=e?e:[]})),F=x((()=>{let e=i(c.value.inputs,"discount");return null!=e?e:[]})),q=x((()=>{let e=parseFloat(I().format("DD")),t=0,a=0;return b.value.days>=30&&(a=e-b.value.payday,t=b.value.amount/b.value.days*a),{days:a,amount:Math.abs(Math.round(t))}})),z=e=>{let t=parseFloat(I().format("DD")),a=0,l=0;return e.days>=30&&(l=t-e.payday,a=e.amount/e.days*l),{days:l,amount:Math.abs(Math.round(a))}},B=e=>{if(""!=o(c.value.inputs,"memberships_id"))return"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:f(e.tax.value),value:e.tax.value}},J=x((()=>B(y))),O=x((()=>{let e=0;return e+=b.value.amount,o(c.value.inputs,"is_initiation_fee").length||(e+=h.value),e-=q.value.amount,F.value.data&&("dolar"==F.value.data.type?e-=F.value.data.value:"percentaje"==F.value.data.type&&(e-=e/100*F.value.data.value)),e+=e/100*J.value.value,o(c.value.member,"leo_vet_fr").length&&(e-=e/100*y.value.descuento_vet),e})),R=x((()=>{let e=0;return e+=O.value,e+=G.value,e})),U=x((()=>{let e=[];return L.value.forEach(((t,a)=>{a>0&&(console.log(t),e.push(t))})),e})),G=x((()=>{let e=0;return U.value.forEach((t=>{if(""!=o(t.inputs,"memberships_id")&&""!=o(t.inputs,"recurrences_id")){let l=(e=>{let t=0;return t+=e.membershipCost,e.is_initiation_fee.length||(t+=e.initiation_fee),t-=e.prorated,null!=e.discount&&("dolar"==e.discount.type?t-=e.discount.value:"percentaje"==e.discount.type&&(t-=t/100*e.discount.value)),t+=t/100*e.objTax.value,e.is_vet&&(t-=t/100*e.discount_vet),t})({membershipCost:(a=d(t.inputs,"recurrences_id"),a.amount),is_initiation_fee:o(t.inputs,"is_initiation_fee"),initiation_fee:o(t.inputs,"initiation_fee"),objTax:B(d(t.inputs,"memberships_id")),prorated:z(d(t.inputs,"recurrences_id")).amount,discount:i(t.inputs,"discount").data,is_vet:i(t.member,"leo_vet_fr").model.length,discount_vet:d(t.inputs,"memberships_id").descuento_vet});e+=l}var a})),e})),H=_(!1);g((()=>Y),((e,t)=>{H.value=!0,oe.value=!1})),g(W.value,(()=>{W.value||(oe.value=!1)}));const Q=_(!1),X=_(0),ee=x((()=>{const e=parseFloat(X.value)-parseFloat(R.value);return e>0?e:0})),te=_(3),ae=x((()=>null!=Y.value&&null!=Z.value&&3==te.value)),ue=E(),ie=_(!0),re=e=>{ue.push({name:"members-profile",query:{id:Y.value},hash:"#memberMembership"}),te.value=0,ie.value=!1};_(!1);const oe=_(!1);return _(!1),(u,r)=>{const d=le,y=e,b=se,h=Te,_=t,g=a,x=ne,N=s;return""!=A(o)(A(c).inputs,"memberships_id")?(S(),j(N,{key:0,titles:{title:l.title},"is-loading":p.value,buttons:["prev"],step:5,onChangeStep:m},{default:C((()=>[ie.value?D("",!0):(S(),j(d,{key:0,color:"success",class:"mb-3"},{default:C((()=>[Ne])),_:1})),n.value?(S(),j(d,{key:1,class:"mb-4"},{default:C((()=>[Fe,k("table",qe,[Ie,k("tbody",null,[k("tr",null,[k("td",null,T(n.value.membership.name),1),k("td",null,T(n.value.quote.computed.recurring.interval),1),k("td",null,T(A(v)(10*n.value.quote.computed.recurring.amount_subtotal)),1),k("td",Ee,T(A(v)(10*n.value.quote.computed.recurring.amount_subtotal)),1)]),0==A(i)(A(c).inputs,"is_initiation_fee").model.length?(S(),j("tr",ze,[k("td",null,T(n.value.membership.name),1),Be,k("td",null,T(A(v)(n.value.membership.initiation_fee)),1),k("td",Je,T(n.value.membership.initiation_fee),1)])):D("",!0),k("tr",Oe,[Re,k("td",null,T(A(v)(10*n.value.quote.amount_subtotal)),1)]),k("tr",Le,[k("td",Ue," Tax "+T(n.value.tax.percentage)+"% ",1),k("td",null,T(A(v)(10*n.value.quote.total_details.amount_tax)),1)]),k("tr",Ge,[Ke,k("td",null,T(A(v)(10*n.value.quote.amount_total)),1)]),k("tr",We,[Ye,k("td",null,T(A(v)(10*n.value.quote.computed.recurring.amount_total)),1)])])])])),_:1})):D("",!0),ie.value?(S(),j("div",Ze,[k(b,{size:"small",active:oe.value},{default:C((()=>[k(y,{color:"success",onClick:r[1]||(r[1]=e=>(m(6,3),te.value=3,oe.value=!0))},{default:C((()=>[He])),_:1})])),_:1},8,["active"])])):D("",!0),A(ae)?(S(),j(h,{key:3,amount:A(R),id:A(Y),member_membership:A(Z),onPaymentAction:re},null,8,["amount","id","member_membership"])):D("",!0),k(x,{open:Q.value,actions:"center",onClose:r[6]||(r[6]=e=>Q.value=!1)},{content:C((()=>[k("div",Qe,[k("p",Xe,[et,k("b",null,T(A(f)(A(R))),1)]),k("p",tt,[at,k("b",null,T(A(f)(X.value)),1)])]),k("div",lt,[st,k("p",ut,[k("b",null,T(A(f)(A(ee))),1)])]),k("div",nt,[k(y,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:r[2]||(r[2]=e=>X.value=A(R))},{default:C((()=>[$(" Full Payment "+T(A(f)(A(R))),1)])),_:1}),it,(S(),j(M,null,P([5,10,20,50,100],((e,t)=>k(y,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>X.value+=e},{default:C((()=>[$(" $"+T(e),1)])),_:2},1032,["onClick"]))),64))]),k("div",rt,[k(g,null,{default:C((()=>[k(_,null,{default:C((()=>[w(k("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>X.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[V,X.value]])])),_:1})])),_:1})])])),action:C((()=>[k(y,{color:void 0,onClick:r[4]||(r[4]=e=>X.value=0),class:"d-flex justify-content-center",raised:""},{default:C((()=>[ot])),_:1}),k(y,{color:"success",onClick:r[5]||(r[5]=e=>(m(6,1),te.value=1)),disabled:A(R)>X.value,class:"d-flex justify-content-center",raised:""},{default:C((()=>[pt])),_:1},8,["disabled"])])),_:1},8,["open"])])),_:1},8,["titles","is-loading"])):D("",!0)}}});z("data-v-915b2888");const ct={class:"content"},dt={class:"content-text"};B();var vt=h({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=x((()=>t.active?100:0));return(t,l)=>{const s=ie;return S(),j("div",ct,[k("div",{class:["circle",e.active?"active":""]},null,2),k(s,{class:"progressbar",value:A(a),size:"smaller"},null,8,["value"]),k("div",dt,[k("p",null,"STEP "+T(e.step),1),k("p",null,[k("b",null,T(e.text),1)])])])}}});vt.__scopeId="data-v-915b2888";const ft={class:"columns is-multiline"},yt={class:"column is-12"},bt={class:"column is-9"},ht={class:"column is-3"};var _t=h({expose:[],setup(l){_e.value="Add New members",J({title:"Members"}),N((()=>{le(),oe().then((e=>{y(U,"memberships_id",e.data.memberships)})),i(U.value,"memberships_id").disabled=!1,i(U.value,"recurrences_id").disabled=!1,i(U.value,"is_initiation_fee").disabled=!1,i(U.value,"discount").disabled=!1,ce(1,"membership").then((e=>{y(U,"discount",e.data.discounts)})),me().then((e=>{})),de().then((e=>{y(R,"city_id",ve.value),y(H,"city_id",ve.value),y(R,"state_id",fe.value),y(H,"state_id",fe.value),y(R,"country_id",ye.value),y(H,"country_id",ye.value)})),be().then((e=>{y(U,"staff_id",e.data)}))}));const s=_(1),n=_([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult","Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor","Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]},{step:6,text:"Sing Contract & Waiver",categories:["Adult","Minor","Prospect"]}]),r=x((()=>R.value.filter((e=>e.categories.includes(X.value.model))))),o=x((()=>n.value.find((e=>e.step==s.value&&e.categories.includes(X.value.model))))),p=x((()=>n.value.filter((e=>e.categories.includes(X.value.model))))),m=x((()=>u(O.value))),d=(e,t=3,a={})=>{X.value.model,6==e?K(t,a):s.value=e},v=_(null),f=e=>{v.value=e},h=_(null),g=e=>{h.value=e},V=_([]),q=e=>{V.value=e.value},I=_([]),E=_([]),z=e=>{E.value=e.familyMembership.value,I.value=e.memberMembership};_(null),_(null);const B=_(null),G=e=>{B.value=e.total.value},K=(e,t)=>{const a=new FormData;((e,t)=>{for(var a in t)e.append(a,t[a])})(a,v.value);let l=h.value;for(var s=0;s<l.length;s++){var n=l[s];for(var i in n)a.append(`notifications[${s}][${i}]`,n[i])}let r=u(I.value);for(var s in r)if("diciplines"==s){let e=r[s];for(var o=0;o<e.length;++o)a.append("diciplines[]",e[o])}else a.append(s,r[s]);a.append("total",B.value),a.append("payment_type_id",e),1==e&&(a.append("cash",t.cash),a.append("cash_back",t.changeBack));let p=u(X.value,{array:!1});for(var s in p)a.append(s,p[s]);let d=u(Q.value);for(var s in d)a.append(s,d[s]);let f=u(he.value);for(var s in f)a.append(s,f[s]);for(var s in E.value.forEach(((e,t)=>{let l=u(e.member);for(var s in l)"category"==s&&(l[s]?l[s]="Minor":l[s]="Adult"),a.append(`familiares[${t}][${s}]`,l[s]);let n=h.value;for(s=0;s<n.length;s++){var i=n[s];for(var r in i)a.append(`familiares[${t}][notifications][${s}][${r}]`,i[r])}let o=u(e.inputs);for(var s in o)if("diciplines"==s){let e=o[s];for(var p=0;p<e.length;++p)a.append(`familiares[${t}][diciplines][]`,e[p])}else a.append(`familiares[${t}][${s}]`,o[s]);a.append(`familiares[${t}][total]`,B.value);let m=u(Q.value);for(var s in m)a.append(`familiares[${t}][${s}]`,m[s]);let c=u(he.value);for(var s in c)a.append(`familiares[${t}][${s}]`,c[s])})),m.value)a.append(s,m.value[s]);te(a).then((e=>{W.value=!1,console.log(e),Y.value=e.data.member.id,Z.value=e.data.member.membership_members.id,ae.value=e.data.member,console.log(ae.value)})).catch((e=>{for(var t in console.log(e),e.value=!0,e.response.data.errores)e.response.data.errores[t].forEach((e=>{c.error(`${t}: ${e}`)}))}))},le=()=>{Y.value=null,Z.value=null;let e=["is_family","principal_family"];b(R.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],b(U.value.filter((t=>!e.includes(t.name)))),b(Q.value),b(O.value)};return(l,u)=>{const n=e,i=t,m=a,c=ge,v=xe,y=Ae,b=Me,h=De,_=mt,x=vt,N=re;return S(),j(N,null,{default:C((()=>[k("div",ft,[k("div",yt,[1==s.value?(S(),j(m,{key:0,class:"w-100",addons:""},{default:C((()=>[(S(!0),j(M,null,P(A(X).values,((e,t)=>(S(),j(i,{key:`categoymember-${t}`},{default:C((()=>[k(n,{onClick:t=>A(X).model=e,color:A(X).model==e?"primary":void 0,rounded:""},{default:C((()=>[$(T(e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):D("",!0)]),k("div",bt,[w(k(c,{type:"create",title:A(o).text,inputs:A(r),onChangeStep:d,onReturData:f},null,8,["title","inputs"]),[[F,1==s.value]]),w(k(v,{title:A(o).text,onChangeStep:d},null,8,["title"]),[[F,2==s.value&&"Minor"==A(X).model]]),w(k(y,{type:"create",title:A(o).text,inputs:A(H),onChangeStep:d,onReturData:q},null,8,["title","inputs"]),[[F,2==s.value&&("Adult"==A(X).model||"Prospect"==A(X).model)]]),w(k(b,{type:"create",title:A(o).text,inputs:A(ee),onChangeStep:d,onReturnData:g},null,8,["title","inputs"]),[[F,3==s.value]]),w(k(h,{type:"create",member:A(r),familiares:V.value,title:A(o).text,inputs:A(L),memberships:A(pe),notes:A(Q),onChangeStep:d,onReturnData:z},null,8,["member","familiares","title","inputs","memberships","notes"]),[[F,4==s.value]]),5==s.value?(S(),j(_,{key:0,type:"create",title:A(o).text,member:A(r),familiares:V.value,inputs:A(L),"member-membership":I.value,"family-membership":E.value,onChangeStep:d,onReturnData:G},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):D("",!0)]),k("div",ht,[(S(!0),j(M,null,P(A(p),((e,t)=>(S(),j(x,{key:t,active:e.step<=s.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default _t;
