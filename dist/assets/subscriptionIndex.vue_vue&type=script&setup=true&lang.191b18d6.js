import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import{_ as t}from"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.8eeea7dc.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as a}from"./V-Loader.vue_vue&type=script&setup=true&lang.f29df460.js";import{g as n,a as i,p as o,m as u,n as c,b as r}from"./index.a01cdf46.js";import{g as d}from"./Discounts.fd07ed15.js";import{g as p}from"./Staffs.0e5929f0.js";import{a as m,f as v}from"./Companies.b586ed9b.js";import{g as b}from"./Diciplines.478c92d6.js";import{u as _,c as y,p as f,a as h,_ as g,b as x,h as k,d as D,e as Y,i as M,f as C,s as j,j as O,k as z,r as A,l as P,m as V,n as w,o as L,q,t as S,g as R}from"./subscription-method-stripe-checkout.vue_vue&type=script&setup=true&lang.c4cc63dd.js";import{d as N,r as E,o as I,h as T,i as U,B as H,k as B,l as $,G,b as X,F,W as K,X as Q,H as W,K as J,R as Z,_ as ee,w as te,P as se,S as le,A as ae,U as ne,L as ie}from"./vendor.6c78dc37.js";import{_ as oe}from"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.c78b8053.js";import{_ as ue}from"./V-Control.4e9f0bab.js";import{_ as ce}from"./V-Field.vue_vue&type=script&setup=true&lang.6bc9f6e9.js";import{_ as re}from"./V-Modal.vue_vue&type=script&setup=true&lang.51c86d52.js";import{_ as de}from"./Presupuesto.vue_vue&type=script&setup=true&lang.8fe9fce4.js";import{a as pe,g as me}from"./MemberCards.73525e7e.js";import{e as ve}from"./Members.4056a12c.js";const be=G("Save");var _e=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:u}){const c=e,r=E(!1),y=E(!1),f=E([{typeInput:"checkboxGroupSimpleEventInput",name:"locations",placeholder:"Locations access",text:"Locations access",required:!0,values:[],model:"",disabled:!1,class:"is-12",isLabel:!0,change:function(e,t){b(this.model).then((e=>{e.data.length&&i(t,"diciplines",e.data)}))},click:function(){}},{typeInput:"DropdownCheckbox",name:"diciplines",text:"Disciplines",placeholder:"Disciplines",required:!1,model:[],values:[],disabled:!1,class:"is-12",isLabel:!0,drop:!1},{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-12",isLabel:!0},{typeInput:"DropdownCheckbox",name:"staff_id",placeholder:"Trainer",values:[],model:[],disabled:!1,required:!1,class:"is-12",isLabel:!0,drop:!1},{typeInput:"date",typeInputDefault:"date",name:"fecha_vencimiento",placeholder:"Next payment date",model:"",class:"is-6",isLabel:!0,required:!0},{name:"payment_type_id",typeInput:"selectData",placeholder:"Payment Type",model:"",required:!0,values:[{id:1,name:"Cash"},{id:3,name:"Debit automatic"}],class:"is-6",isLabel:!0,filterOptionText:function(e){return e.name}}]);I((()=>{(async()=>{y.value=!0,n(f.value,"fecha_vencimiento").model=H(c.suscripcion.estado.fecha_vencimiento,"YYYY-MM-DD").format("YYYY-MM-DD"),n(f.value,"payment_type_id").model=c.suscripcion.payment_type_id,c.suscripcion.memberships_members&&c.suscripcion.memberships_members.diciplines.length&&(n(f.value,"diciplines").model=c.suscripcion.memberships_members.diciplines.map((e=>e.diciplines_id))),c.suscripcion.member&&c.suscripcion.member.trainers.length&&(n(f.value,"staff_id").model=c.suscripcion.member.trainers.map((e=>e.staffs_id))),c.suscripcion.discount&&(n(f.value,"discount").model=c.suscripcion.discount.id),await m().then((e=>{if(i(f,"locations",v.value),c.suscripcion&&c.suscripcion.memberships_members&&c.suscripcion.memberships_members.locaciones.length){const e=c.suscripcion.memberships_members.locaciones.map((e=>e.companies_locations_id));n(f.value,"locations").model=e,b(e).then((e=>{e.data.length&&i(f,"diciplines",e.data)}))}})),await d().then((e=>{i(f,"discount",e.data.discounts)})),await p().then((e=>{i(f,"staff_id",e.data)})),y.value=!1})()}));const h=async()=>{const e=o(f.value);r.value=!0,await _(c.suscripcion.id,e).then((e=>{r.value=!1,u("reload")}))};return(e,n)=>{const i=s,o=l,u=a,c=t;return T(),U(u,{class:"h-100",size:"small",active:y.value},{default:B((()=>[$(c,{class:""},{default:B((()=>[$(i,{"inputs-step":f.value},null,8,["inputs-step"]),$(u,{class:"h-100",size:"small",active:r.value},{default:B((()=>[$(o,{color:"primary",onClick:h,size:"small"},{default:B((()=>[be])),_:1})])),_:1},8,["active"])])),_:1})])),_:1},8,["active"])}}});const ye=$("p",null,[$("b",null,"Cancel Suscription")],-1);var fe=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:s}){const l=e,n=E(!1),i=()=>{n.value=!0,y(l.suscripcion.id,{}).then((e=>{n.value=!1,s("reload")})).catch((e=>{n.value=!1}))};return I((()=>{})),(e,s)=>{const l=t,o=a;return T(),U(o,{class:"h-100",size:"small",active:n.value},{default:B((()=>[$(l,{color:"danger",outlined:"",onClick:i,class:"\n        mr-4\n        btn-card\n        text-center\n        px-2\n        h-100\n        d-flex\n        align-items-center\n        justify-content-center\n      ",style:{"font-size":"14px"}},{default:B((()=>[ye])),_:1})])),_:1},8,["active"])}}});const he={key:0},ge={key:1},xe=$("small",null,"by default it will be scheduled for the next payment",-1),ke={class:"columns is-multiline"},De={class:"column is-4"},Ye=$("p",{class:"title is-6 mb-1"},[$("b",null,"Total")],-1),Me={class:"title is-3 mb-0"},Ce={class:"is-4 column mx-auto"},je={class:"is-4 column mx-auto"};var Oe=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:s}){const l=e,n=E(!0),i=E(!1),o=(e=null)=>{i.value=!0,e&&(e.isProrrateo=n.value),f(l.suscripcion.id,e).then((e=>{i.value=!1,r.value=!1,c.success("Success"),s("reload")})).catch((e=>{console.log(e),c.error("Error"),i.value=!1,r.value=!1}))},r=E(!1),d=()=>{r.value=!1},p=X((()=>l.suscripcion.memberships_members.multigym));X((()=>l.suscripcion.presupuesto));const m=X((()=>l.suscripcion.user)),v=E(0),b=()=>{p.value?(n.value=!1,o()):(h(l.suscripcion.id,{}).then((e=>{v.value=e.data})),n.value=!0,r.value=!0)};return(e,s)=>{const l=t,c=oe,_=ue,y=ce,f=a,h=g,k=x,D=re;return T(),U(f,{class:"h-100",size:"small",active:i.value},{default:B((()=>[$(l,{color:"info",outlined:!F(p),onClick:b,class:"\n        mr-4\n        btn-card\n        text-center\n        px-2\n        h-100\n        d-flex\n        align-items-center\n        justify-content-center\n      ",style:{"font-size":"14px"}},{default:B((()=>[$("p",null,[F(p)?(T(),U("b",ge,"Disable MultiGym ")):(T(),U("b",he,"Activate MultiGym "))])])),_:1},8,["outlined"]),$(D,{open:r.value,size:"big",actions:"center",noscroll:"",onClose:d},{content:B((()=>[$(y,null,{default:B((()=>[$(_,null,{default:B((()=>[$(c,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),label:"Make the prorated charge",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),K($("p",null,[xe],512),[[Q,!n.value]]),n.value?(T(),U(l,{key:0,style:{"margin-bottom":"24px"}},{default:B((()=>[$("div",ke,[$("div",De,[$(f,{size:"small",class:"h-100",active:i.value},{default:B((()=>[$(l,{class:"mb-4 h-100"},{default:B((()=>[$("div",null,[Ye,$("p",Me,W(F(u)(v.value)),1)])])),_:1})])),_:1},8,["active"])]),$("div",Ce,[$(f,{size:"small",active:i.value},{default:B((()=>[$(h,{total:v.value,user:F(m),onOnPayment:o},null,8,["total","user"])])),_:1},8,["active"])]),$("div",je,[$(f,{size:"small",active:i.value},{default:B((()=>[$(k,{total:v.value,onOnPayment:o},null,8,["total"])])),_:1},8,["active"])])])])),_:1})):J("",!0)])),action:B((()=>[])),_:1},8,["open"])])),_:1},8,["active"])}}});const ze=$("p",null,[$("b",null,"HOLD Membership")],-1),Ae={key:0},Pe=G("Active until: "),Ve=$("br",null,null,-1),we=$("label",{for:"hold_date_start"},[$("p",null,"Hold date start")],-1),Le=$("label",{for:"hold_date_end"},[$("p",null,"Hold date end")],-1),qe=G("Confirm");var Se=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:s}){const n=e,i=E(!1),o=E(!1),u=E(H(n.suscripcion.hold_date_start).format("YYYY-MM-DD")),r=E(H(n.suscripcion.hold_date_end).format("YYYY-MM-DD")),d=()=>{k(n.suscripcion.id,{hold_date_start:u.value,hold_date_end:r.value}).then((e=>{o.value=!1,c.success("success"),s("reload")})).catch((e=>{o.value=!1}))},p=X((()=>n.suscripcion.isHold));return I((()=>{})),(e,s)=>{const c=t,m=a,v=l,b=re;return T(),U(Z,null,[$(m,{size:"small",class:"h-100",active:i.value},{default:B((()=>[$(c,{color:"warning",outlined:null==n.suscripcion.hold_date_end,onClick:s[1]||(s[1]=e=>F(p)?d():o.value=!0),class:"\n        mr-4\n        btn-card\n        text-center\n        h-100\n        px-2\n        d-flex\n        align-items-center\n        justify-content-center\n      ",style:{"font-size":"14px"}},{default:B((()=>[ze,$("p",null,[null!=n.suscripcion.hold_date_end?(T(),U("span",Ae,[Pe,Ve,G(" "+W(F(H)(n.suscripcion.hold_date_start).format("MM/DD/YYYY"))+" - "+W(F(H)(n.suscripcion.hold_date_end).format("MM/DD/YYYY")),1)])):J("",!0)])])),_:1},8,["outlined"])])),_:1},8,["active"]),$(b,{open:o.value,actions:"center",onClose:s[4]||(s[4]=e=>o.value=!1)},{content:B((()=>[we,K($("input",{type:"date","onUpdate:modelValue":s[2]||(s[2]=e=>u.value=e),class:"input mt-2 mb-4"},null,512),[[ee,u.value]]),Le,K($("input",{type:"date","onUpdate:modelValue":s[3]||(s[3]=e=>r.value=e),class:"input mt-2 mb-4"},null,512),[[ee,r.value]])])),action:B((()=>[$(v,{onClick:d,color:"primary",raised:""},{default:B((()=>[qe])),_:1})])),_:1},8,["open"])],64)}}});const Re={class:"columns is-multiline"},Ne={class:"title is-4"},Ee={class:"title is-5 text-left mt-2"},Ie={class:"d-flex justify-content-end mb-4"},Te={key:0},Ue={key:1},He=G("Accept and continue ");var Be=N({expose:[],props:{suscripcion:{type:Object,default:{}},is_config:{type:Boolean,default:!0},is_recurrence:{type:Boolean,default:!0},restar:{type:Number,default:{text:"",amount:""}},amounts_not_ids:{type:Array,default:[]}},emits:["update:modelValue","reload","onReady","changeMembership"],setup(e,{emit:o}){const r=e;se();const d=E([]),p=E(!0),m=E(!1),v=E(!1);I((()=>{f.value=!0,D().then((e=>{d.value=e.data})),Y(1,"membership").then((e=>{i(M,"discount",e.data.discounts)}))}));const b=X((()=>{const e=d.value.find((e=>e.id==j.memberships_id));return null==e?void 0:e.amounts.filter((e=>e.is_recurrence==p.value&&null!=e.recurrencia))})),_=X((()=>{for(var e in j)null!=n(M.value,e)&&(j[e]=n(M.value,e).model);return j})),y=()=>{C.value=null,v.value=!1,m.value=!0,f.value=!0,O(_.value).then((e=>{C.value=e.data,o("update:modelValue",C.value),f.value=!0,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight),m.value=!1}),300)})).catch((e=>{const t=e.response.data;for(var s in m.value=!1,t)if("object"==typeof t[s]&&"object"==typeof t[s])for(var l in t[s])c.error(t[s][l])}))},f=E(!0),h=()=>{v.value=!0;let e=_.value;o("onReady",e),f.value=!1};return te((()=>j.memberships_id),(()=>{C.value=null,o("changeMembership")})),(e,n)=>{const i=t,o=a,v=oe,_=ue,g=ce,x=s,k=l,D=de;return T(),U(Z,null,[$(i,{class:"mb-4"},{default:B((()=>[$(o,{size:"large",active:!d.value.length},{default:B((()=>[$("div",Re,[(T(!0),U(Z,null,le(d.value,((e,t)=>(T(),U("div",{key:`membership-${t}`,class:"column is-4 btn btn-card",onClick:t=>F(j).memberships_id=e.id},[$(i,{color:F(j).memberships_id==e.id?"primary":void 0,class:"h-100"},{default:B((()=>[$("div",null,[$("h1",Ne,W(e.name),1)])])),_:2},1032,["color"])],8,["onClick"])))),128))])])),_:1},8,["active"])])),_:1}),$(i,{class:"mb-4"},{default:B((()=>[$("div",null,[r.is_recurrence?(T(),U(g,{key:0},{default:B((()=>[$(_,null,{default:B((()=>[$(v,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=e=>p.value=e),label:"Recurring Subscription",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1})):J("",!0),(T(!0),U(Z,null,le(F(b),((e,t)=>(T(),U("div",{key:`membership-precios-${t}`,class:"btn btn-card",onClick:t=>(e=>{r.amounts_not_ids.includes(e.id)?c.error("Select a membership with a higher price than the current one"):j.recurrences_id=e.id})(e)},[$(i,{color:F(j).recurrences_id==e.id?"primary":void 0,class:"mb-3 py-4"},{default:B((()=>[$("p",null,W(e.recurrencia.descriptions),1),$("p",Ee,W(F(u)(e.amount)),1)])),_:2},1032,["color"])],8,["onClick"])))),128))])])),_:1}),r.is_config?(T(),U(i,{key:0,class:""},{default:B((()=>[$(x,{"inputs-step":F(M)},null,8,["inputs-step"])])),_:1})):J("",!0),$("div",Ie,[$(o,{size:"large",active:m.value},{default:B((()=>[$(k,{onClick:y,color:F(C)?void 0:"primary",class:"d-flex justify-content-center mt-6 py-5 w-100",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:B((()=>[F(C)?(T(),U("span",Ue," restart")):(T(),U("span",Te,"start subscription"))])),_:1},8,["color"])])),_:1},8,["active"])]),F(C)?(T(),U(i,{key:1,class:"mb-4"},{default:B((()=>[$(D,{presupuesto:F(C),restar:r.restar},null,8,["presupuesto","restar"])])),_:1})):J("",!0),F(C)&&f.value?(T(),U(k,{key:2,onClick:h,color:"primary",class:"d-flex justify-content-center py-5 px-6 ml-auto",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:B((()=>[He])),_:1})):J("",!0)],64)}}});const $e={class:"columns is-multiline"},Ge={class:"column is-4"},Xe=$("p",{class:"title is-6 mb-1"},[$("b",null,"Total")],-1),Fe={class:"title is-3 mb-0"},Ke={key:0,class:"is-4 column mx-auto"},Qe={key:1,class:"is-4 column mx-auto"};var We=N({expose:[],props:{suscripcion:{type:Object,required:!0},amount:{type:Number,default:0},methods:{type:Array,default:[]},isLoaderActive:{type:Boolean,default:!1}},emits:["onPayment"],setup(e,{emit:s}){const l=e,n=X((()=>l.suscripcion.user)),i=(e=null)=>{s("onPayment",e)};return(s,o)=>{const c=t,r=a,d=g,p=x;return T(),U(c,{style:{"margin-bottom":"24px"}},{default:B((()=>[$("div",$e,[$("div",Ge,[$(r,{size:"small",class:"h-100",active:e.isLoaderActive},{default:B((()=>[$(c,{class:"mb-4 h-100"},{default:B((()=>[$("div",null,[Xe,$("p",Fe,W(F(u)(l.amount)),1)])])),_:1})])),_:1},8,["active"])]),l.methods.includes("debit_automatic")?(T(),U("div",Ke,[$(r,{size:"small",active:e.isLoaderActive},{default:B((()=>[$(d,{total:e.amount,user:F(n),onOnPayment:i},null,8,["total","user"])])),_:1},8,["active"])])):J("",!0),l.methods.includes("cash")?(T(),U("div",Qe,[$(r,{size:"small",active:e.isLoaderActive},{default:B((()=>[$(p,{total:e.amount,onOnPayment:i},null,8,["total"])])),_:1},8,["active"])])):J("",!0)])])),_:1})}}});const Je=$("p",null,[$("b",null,"Upgrade Subscription")],-1),Ze={class:"title is-7 mb-2"},et=$("p",{class:"title is-7 mb-2"},"Remaining Amount",-1),tt={class:"title is-3"};var st=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:s}){const l=e,a=E(!1),n=ae({next_payment_date:"",amount:0,amounts_not_ids:[]}),i=()=>{o.value=!0,z(l.suscripcion.id).then((e=>{n.next_payment_date=e.data.next_payment_date,n.amount=e.data.amount,n.amounts_not_ids=e.data.amounts_not_ids})).catch((e=>{}))};I((()=>{}));const o=E(!1),c=()=>{o.value=!1},r=E(null),d=e=>{r.value=e,console.log("ready",e),m.value=!0},p=E(null),m=E(!1),v=X((()=>{let e=p.value.total;return e-=n.amount,e<-0&&(e=0),e}));te((()=>p.value),(e=>{m.value=!1})),te(o,(e=>{console.log("cambia",e),A()}));const b=()=>{m.value=!1},_=e=>{const t=Object.assign({},e,r.value);a.value=!0,P(l.suscripcion.id,t).then((e=>{a.value=!1,c(),s("reload")})).catch((e=>{a.value=!1}))};return(e,s)=>{const r=t,y=Be,f=We,h=re;return T(),U(Z,null,[$(r,{color:"primary",outlined:"",onClick:i,class:"\n      mr-4\n      btn-card\n      text-center\n      px-2\n      h-100\n      d-flex\n      align-items-center\n      justify-content-center\n    ",style:{"font-size":"14px"}},{default:B((()=>[Je])),_:1}),$(h,{open:o.value,size:"big",actions:"center",noscroll:"",onClose:c},{content:B((()=>[$("div",null,[$(r,{class:"mb-4"},{default:B((()=>[$("p",Ze," Next payment date: "+W(F(H)(F(n).next_payment_date,"MM-DD-YYYY").format("MM-DD-YYYY")),1),et,$("p",tt,W(F(u)(F(n).amount)),1)])),_:1}),$(y,{onOnReady:d,modelValue:p.value,"onUpdate:modelValue":s[1]||(s[1]=e=>p.value=e),onChangeMembership:b,is_config:!1,is_recurrence:!1,restar:{text:"Remaining Amount",amount:F(n).amount},amounts_not_ids:F(n).amounts_not_ids,class:"mb-4"},null,8,["modelValue","restar","amounts_not_ids"]),m.value?(T(),U(f,{key:0,methods:["debit_automatic","cash","terminal"],suscripcion:l.suscripcion,amount:F(v),"is-loader-active":a.value,onOnPayment:_,class:"mt-4"},null,8,["suscripcion","amount","is-loader-active"])):J("",!0)])])),action:B((()=>[])),_:1},8,["open"])],64)}}});const lt=$("p",null,[$("b",null," Balances ")],-1),at={class:"columns"},nt={class:"column is-4"},it=$("p",{class:"title is-6 mb-1"},[$("b",null,"Total")],-1),ot={class:"title is-3 mb-0"},ut=$("label",{for:""},[$("p",null,"Amount")],-1),ct={class:"columns is-multiline"},rt={class:"column is-4"},dt=$("p",{class:"title is-6 mb-1"},[$("b",null,"Total")],-1),pt={class:"title is-3 mb-0"},mt={class:"is-4 column mx-auto"},vt={class:"is-4 column mx-auto"},bt={class:"table is-hoverable is-fullwidth"},_t=$("thead",null,[$("tr",null,[$("th",{scope:"col"},"Amount"),$("th",{scope:"col"},"Date")])],-1);var yt=N({expose:[],props:{suscripcion:{type:Object,required:!0}},emits:["reload"],setup(e,{emit:s}){const l=e,n=E(null),i=E(!1),o=(e=null)=>{i.value=!0,e.amount=n.value,console.log(e),pe(p.value.id,e).then((e=>{i.value=!1,r.value=!1,c.success("Success"),s("reload")})).catch((e=>{e=e.response.data,i.value=!1,r.value=!1}))},r=E(!1),d=()=>{r.value=!1},p=X((()=>l.suscripcion.user)),m=E(0),v=E([]),b=()=>{me(p.value.id).then((e=>{m.value=e.data.saldo,v.value=e.data.saldos,r.value=!0}))};return(e,s)=>{const l=t,c=a,_=ue,y=ce,f=g,h=x,k=re;return T(),U(c,{class:"h-100",size:"small",active:i.value},{default:B((()=>[$(l,{color:"info",outlined:!0,onClick:b,class:"\n        mr-4\n        btn-card\n        text-center\n        px-2\n        h-100\n        d-flex\n        align-items-center\n        justify-content-center\n      ",style:{"font-size":"14px"}},{default:B((()=>[lt])),_:1}),$(k,{open:r.value,size:"big",actions:"center",noscroll:"",onClose:d},{content:B((()=>[$("div",at,[$("div",nt,[$(c,{size:"small",class:"h-100",active:i.value},{default:B((()=>[$(l,{class:"mb-4 h-100"},{default:B((()=>[$("div",null,[it,$("p",ot,W(F(u)(m.value)),1)])])),_:1})])),_:1},8,["active"])]),$(y,{class:"is-8 column"},{default:B((()=>[$(_,{style:{height:"100%"}},{default:B((()=>[ut,K($("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),class:"input mt-4",placeholder:"0.00",style:{height:"60%","font-size":"20px"}},null,512),[[ee,n.value]])])),_:1})])),_:1})]),$(l,{style:{"margin-bottom":"24px"}},{default:B((()=>[$("div",ct,[$("div",rt,[$(c,{size:"small",class:"h-100",active:i.value},{default:B((()=>[$(l,{class:"mb-4 h-100"},{default:B((()=>[$("div",null,[dt,$("p",pt,W(F(u)(n.value)),1)])])),_:1})])),_:1},8,["active"])]),$("div",mt,[$(c,{size:"small",active:i.value},{default:B((()=>[$(f,{total:n.value,user:F(p),onOnPayment:o},null,8,["total","user"])])),_:1},8,["active"])]),$("div",vt,[$(c,{size:"small",active:i.value},{default:B((()=>[$(h,{total:n.value,onOnPayment:o},null,8,["total"])])),_:1},8,["active"])])])])),_:1}),$(l,null,{default:B((()=>[$("table",bt,[_t,$("tbody",null,[(T(!0),U(Z,null,le(v.value,((e,t)=>(T(),U("tr",{key:`saldo-${t}`},[$("td",null,W(F(u)(e.monto)),1),$("td",null,W(F(H)(e.created_at).format("MM-DD-YYYY")),1)])))),128))])])])),_:1})])),action:B((()=>[])),_:1},8,["open"])])),_:1},8,["active"])}}});const ft=$("p",null,[$("b",null," Invoices ")],-1),ht=$("p",{class:"title is-5"},"Invoices",-1),gt={class:"table is-hoverable is-fullwidth"},xt=$("thead",null,[$("tr",{class:"has-background-grey-dark"},[$("th",{scope:"col"},"ID"),$("th",{scope:"col"},"Date Start"),$("th",{scope:"col"},"Date End"),$("th",{scope:"col"},"Date create"),$("th",{scope:"col"},"Status"),$("th",{scope:"col"},"Amount"),$("th",{scope:"col",colspan:"3"},"Action")])],-1),kt={colspan:"3"},Dt=$("i",{class:"fa fa-eye"},null,-1),Yt=$("td",{colspan:"9"},null,-1),Mt=$("td",{colspan:"9",style:{"text-align":"center"}},"Items",-1),Ct={class:"has-background-grey-dark"},jt=$("th",{scope:"col",colspan:"6"},"Description",-1),Ot=$("th",{scope:"col"},"Quantity",-1),zt=$("th",{scope:"col"},"Subtotal",-1),At=$("th",{scope:"col"},"Amount",-1),Pt={colspan:"6"},Vt={key:0,style:{"font-size":"10px"}},wt=$("td",{colspan:"9",style:{"text-align":"center"}},"Payment",-1),Lt={class:"has-background-grey-dark"},qt=$("th",{scope:"col"},"Create",-1),St=$("th",{scope:"col"},"Payment type",-1),Rt=$("th",{scope:"col"},"Status",-1),Nt=$("th",{scope:"col"},"Subtotal",-1),Et=$("th",{scope:"col"},"Tax",-1),It=$("th",{scope:"col"},"Total",-1),Tt=$("th",{scope:"col"},"Cash",-1),Ut=$("th",{scope:"col"},"Cash Back",-1),Ht=$("th",{scope:"col"},"Action",-1),Bt={key:0},$t=$("td",{colspan:"9"},null,-1);var Gt=N({expose:[],props:{suscripcion:{type:Object,required:!0}},setup(e){const s=e,n=E(!1),i=E(!1),o=()=>{n.value=!1},c=X((()=>s.suscripcion.memberships_members&&s.suscripcion.memberships_members.invoice?s.suscripcion.memberships_members.invoice:[])),r=E(null);return(e,s)=>{const d=t,p=l,m=re,v=a,b=ne("tooltip");return T(),U(v,{class:"h-100",size:"small",active:i.value},{default:B((()=>[$(d,{color:"orange",outlined:!0,onClick:s[1]||(s[1]=e=>n.value=!0),class:"\n        mr-4\n        btn-card\n        text-center\n        px-2\n        h-100\n        d-flex\n        align-items-center\n        justify-content-center\n      ",style:{"font-size":"14px"}},{default:B((()=>[ft])),_:1}),$(m,{open:n.value,size:"big",actions:"center",onClose:o},{content:B((()=>[$("div",null,[ht,$("table",gt,[xt,(T(!0),U(Z,null,le(F(c),((e,t)=>(T(),U("tbody",{key:`invoice-${t}`},[$("tr",null,[$("td",null,W(e.id),1),$("td",null,W(F(H)(e.period_start).format("MM-DD-Y")),1),$("td",null,W(F(H)(e.period_end).format("MM-DD-Y")),1),$("td",null,W(F(H)(e.created_at).format("MM-DD-Y")),1),$("td",null,W(e.status?"Payment":""),1),$("td",null,W(F(u)(e.amount)),1),$("td",kt,[K($(p,{color:"info",onClick:t=>r.value?r.value=null:r.value=e.id},{default:B((()=>[Dt])),_:2},1032,["onClick"]),[[b,"View payment",void 0,{top:!0}]])])]),K($("tr",null,[Yt],512),[[Q,r.value==e.id]]),K($("tr",null,[Mt],512),[[Q,r.value==e.id]]),K($("tr",Ct,[jt,Ot,zt,At],512),[[Q,r.value==e.id]]),(T(!0),U(Z,null,le(e.items,((t,s)=>K((T(),U("tr",{key:`payment-item-${s}`},[$("td",Pt,[G(W(t.description)+" - "+W(t.type)+" ",1),t.date_start?(T(),U("small",Vt," - "+W(F(H)(t.date_start).format("MM-DD-Y"))+" - "+W(F(H)(t.date_end).format("MM-DD-Y")),1)):J("",!0)]),$("td",null,W(t.quantity),1),$("td",null,W(F(u)(t.amount_subtotal)),1),$("td",null,W(F(u)(t.amount_total)),1)],512)),[[Q,r.value==e.id]]))),128)),K($("tr",null,[wt],512),[[Q,r.value==e.id]]),K($("tr",Lt,[qt,St,Rt,Nt,Et,It,Tt,Ut,Ht],512),[[Q,r.value==e.id]]),e.membership_payment?K((T(),U("tr",Bt,[$("td",null,W(F(H)(e.membership_payment.created_at).format("MM-DD-Y")),1),$("td",null,W(e.membership_payment.payment_type.name),1),$("td",null,W(e.membership_payment.status?"Payment":"")+" "+W(e.membership_payment.status_description),1),$("td",null,W(F(u)(e.membership_payment.subtotal)),1),$("td",null,W(F(u)(e.membership_payment.tax)),1),$("td",null,W(F(u)(e.membership_payment.amount)),1),$("td",null,W(F(u)(e.membership_payment.cash)),1),$("td",null,W(F(u)(e.membership_payment.cash_back)),1),$("td",null,[$("a",{href:e.membership_payment.url_pdf,target:"_blank",rel:"noopener noreferrer"},"View Pdf",8,["href"])])],512)),[[Q,r.value==e.id]]):J("",!0),K($("tr",null,[$t],512),[[Q,r.value==e.id]])])))),128))])])])),action:B((()=>[])),_:1},8,["open"])])),_:1},8,["active"])}}});const Xt=$("p",{class:"title is-4 mt-4"},"New subscription",-1);var Ft=N({expose:[],props:{suscripcion:{type:Object,required:!0},type:{type:String,default:"new"}},emits:["reload"],setup(e,{emit:t}){const s=e,l=E(!1),a=ae({next_payment_date:"",amount:0,amounts_not_ids:[]}),n=E(null),i=e=>{n.value=e,console.log("ready",e),u.value=!0},o=E(null),u=E(!1);X((()=>{let e=o.value.total;return e-=a.amount,e<-0&&(e=0),e})),te((()=>o.value),(e=>{u.value=!1}));const c=()=>{u.value=!1},r=e=>{const a=Object.assign({},e,n.value);l.value=!0,"reprocess"==s.type&&V(s.suscripcion.id,a).then((e=>{l.value=!1,t("reload")})).catch((e=>{}))};return(e,t)=>{const a=Be,n=We;return T(),U("div",null,[Xt,$(a,{onOnReady:i,modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),onChangeMembership:c,class:"mb-4"},null,8,["modelValue"]),u.value&&o.value?(T(),U(n,{key:0,methods:["debit_automatic","cash","terminal"],suscripcion:s.suscripcion,amount:o.value.total,"is-loader-active":l.value,onOnPayment:r,class:"mt-4"},null,8,["suscripcion","amount","is-loader-active"])):J("",!0)])}}});const Kt={class:"columns is-multiline",style:{"min-height":"350px"}},Qt={class:"column is-3"},Wt=$("p",{class:"title is-6 mb-1"},[$("b",null,"Total")],-1),Jt={key:0,class:"title is-3 mb-0"},Zt={key:1,class:"title is-3 mb-0"},es=$("div",{class:"column is-9"},null,-1),ts=G("] "),ss={key:0,class:"is-4 column mx-auto"},ls={key:1,class:"is-4 column mx-auto"},as={key:2,class:"is-4 column mx-auto"},ns=$("div",{class:"mb-4 column is-12"},null,-1);var is=N({expose:[],props:{total:{type:Number,default:0,required:!0},user:{type:Object,default:{},required:!0},suscripcion_id:{type:Number,required:!0},metodos:{type:Array,default:["stripe-debit","cash"]}},emits:["proccessCheckout","reload"],setup(e,{emit:s}){const l=e;se();const n=E(!1),i=e=>{n.value=!0,w(l.suscripcion_id,e).then((e=>{n.value=!1,s("proccessCheckout")})).catch((e=>{if(n.value=!1,s("reload"),"object"==typeof e.response.data)for(var t in e.response.data)if("object"==typeof e.response.data[t])for(var l in e.response.data[t]){if("object"==typeof e.response.data[t][l])for(var a in e.response.data[t][l])c.error(e.response.data[t][l][a]);"string"==typeof e.response.data[t][l]&&c.error(e.response.data[t][l])}}))};return(s,o)=>{const c=t,r=a,d=g,p=L,m=x;return T(),U("div",Kt,[$("div",Qt,[$(r,{size:"small",active:n.value},{default:B((()=>[$(c,{class:"mb-4"},{default:B((()=>[ie(s.$slots,"default"),$("div",null,[Wt,s.order?(T(),U("p",Jt,W(F(u)(e.total)),1)):(T(),U("p",Zt,W(F(u)(e.total)),1))])])),_:3})])),_:1},8,["active"])]),es,ts,l.metodos.includes("stripe-debit")?(T(),U("div",ss,[$(r,{size:"small",active:n.value},{default:B((()=>[$(d,{total:l.total,user:l.user,onOnPayment:i},null,8,["total","user"])])),_:1},8,["active"])])):J("",!0),l.metodos.includes("stripe-checkout")?(T(),U("div",ls,[$(r,{size:"small",active:n.value},{default:B((()=>[$(p,{total:l.total,onOnPayment:i},null,8,["total"])])),_:1},8,["active"])])):J("",!0),l.metodos.includes("cash")?(T(),U("div",as,[$(r,{size:"small",active:n.value},{default:B((()=>[$(m,{total:l.total,onOnPayment:i},null,8,["total"])])),_:1},8,["active"])])):J("",!0),ns])}}});const os={class:"w-100",style:{"min-height":"200px"}},us={key:0,class:"h-100 w-100"},cs={key:0},rs={key:0,class:""},ds={style:{"font-size":"12px"}},ps={style:{"font-size":"12px"}},ms={key:1,class:""},vs={style:{"font-size":"12px"}},bs={style:{"font-size":"12px"}},_s={class:"d-flex justify-content-between"},ys={class:"title is-5 mb-0"},fs=G("Membership: "),hs=G(" Current billing location: "),gs={class:"title is-4 mb-0"},xs={key:0},ks={class:"text-right"},Ds=$("b",null,"Payment Method:",-1),Ys={key:0},Ms={key:0,class:"title is-4 mb-0"},Cs=$("br",null,null,-1),js={key:1,class:"title is-4 mb-0"},Os=$("br",null,null,-1),zs={key:2,class:"title is-6"},As=$("br",null,null,-1),Ps={key:1},Vs=$("p",null,"no tiene presupuesto",-1),ws={class:"d-flex flex-row mt-4"},Ls={class:"mr-3"},qs=$("b",null,"Consultation date: ",-1),Ss={class:"mr-3"},Rs=$("b",null,"Month: ",-1),Ns={key:0,class:"mr-3"},Es=$("b",null,"Start: ",-1),Is={class:"mr-3"},Ts=$("b",null,"Next payment date: ",-1),Us={key:1,class:"mr-3"},Hs=$("b",null,"Cancellation Date: ",-1),Bs={key:2,class:"mr-3"},$s=$("b",null,"Last payment attempt: ",-1),Gs={key:3,class:"mr-3"},Xs=$("b",null,"Status Last payment attempt: ",-1),Fs={key:4,class:"d-flex"},Ks={class:"mr-3"},Qs=$("b",null,"Months late: ",-1),Ws={class:"mr-3"},Js=$("b",null,"Days late: ",-1),Zs={class:"mr-3"},el=$("b",null,"Hours late: ",-1),tl={key:0,class:"columns"},sl={class:"column is-8 pt-0"},ll={class:"column is-4"},al={class:"column is-12"},nl={class:"column is-12"},il={class:"column is-12"},ol={class:"column is-12"},ul={class:"column is-12"},cl={class:"column is-12"},rl={class:"column is-12"},dl={key:2};var pl=N({expose:[],props:{suscripcion:{type:Object,default:null},suscripcion_id:{type:Number,default:null},member_id:{type:Number,default:null},code:{type:String,default:null}},setup(s){const l=s,n=se(),i=E(null),o=E(!1),c=E(!1),d=()=>{Object.assign(j,q),c.value=!0;let e=null;n.query.id&&(e=n.query.id),l.member_id&&(e=l.member_id),l.suscripcion_id?S(l.suscripcion_id,!1).then((e=>{i.value=e.data.suscripcion,c.value=!1})):null==e&&l.code?R(l.code).then((e=>{i.value=e.data.suscripcion,c.value=!1})):S(e,!0).then((e=>{i.value=e.data.suscripcion,c.value=!1}))},p=X((()=>l.suscripcion?l.suscripcion:i.value));I((()=>{d()})),te((()=>l.member_id),(()=>{d()}));const m=()=>{d()};return(s,l)=>{const n=e,i=t,v=_e,b=fe,_=Oe,y=Se,f=st,h=yt,x=g,k=a,D=Gt,Y=Ft,M=is,C=de;return T(),U(k,{size:"small",active:c.value},{default:B((()=>[$("div",os,[F(p)?(T(),U("div",us,[$(i,{class:"mb-4 d-flex align-items-center"},{default:B((()=>[F(p).member?(T(),U("div",cs,[$(n,{picture:`${F(r)}storage/${F(p).member.photo}`,color:"primary",initials:F(ve)(F(p).member.name,F(p).member.last_name),size:"medium",class:"mr-4 mb-4"},null,8,["picture","initials"])])):J("",!0),$("div",null,[F(p).member?(T(),U("div",ms,[$("p",vs,W(F(p).member.name)+" "+W(F(p).member.last_name),1),$("p",bs,W(F(p).member.email),1)])):(T(),U("div",rs,[$("p",ds," Username: "+W(F(p).user.name),1),$("p",ps," Email: "+W(F(p).user.email),1)]))])])),_:1}),$(i,{class:"mb-5",style:{background:F(p).estado.color}},{default:B((()=>[$("div",_s,[$("span",null,[$("p",ys," ESTADO : "+W(F(p).estado.estado_pago),1),$("p",null,[$("small",null,[fs,$("small",null,[hs,$("b",null,W(F(p).memberships_members.location.name),1)])])]),$("p",gs,W(F(p).membership.name),1),F(p).recurrence?(T(),U("p",xs,W(F(p).recurrence.recurrencia.descriptions),1)):J("",!0)]),$("span",ks,[$("p",null,[$("small",null,[Ds,G(" "+W(F(p).payment_type.name),1)])]),$("p",null,[$("small",null,W(F(p).is_recurrence?"Recurrence":"no recurrence"),1)]),F(p).presupuesto?(T(),U("span",Ys,[F(p).discount?(T(),U("p",js,[G(W(F(u)(F(p).presupuesto.total)),1),Os])):(T(),U("p",Ms,[G(W(F(u)(F(p).presupuesto.recurrente)),1),Cs])),F(p).discount?(T(),U("p",zs,[$("small",null,W(F(p).discount.name),1),G(" : "+W(F(u)(F(p).presupuesto.total)),1),As])):J("",!0)])):(T(),U("span",Ps,[Vs]))])]),$("div",ws,[$("p",Ls,[qs,G(" "+W(F(H)(F(p).estado.fecha_validacion,"YYYY-MM-DD").format("MM-DD-YYYY")),1)]),$("p",Ss,[Rs,G(" "+W(F(p).estado.meses_pagados),1)]),F(p).schedules_start?(T(),U("p",Ns,[Es,G(" "+W(F(H)(F(p).schedules_start,"YYYY-MM-DD").format("MM-DD-YYYY")),1)])):J("",!0),$("p",Is,[Ts,G(" "+W(F(H)(F(p).estado.fecha_vencimiento,"YYYY-MM-DD").format("MM-DD-YYYY")),1)]),F(p).estado.fecha_suspencion?(T(),U("p",Us,[Hs,G(" "+W(F(H)(F(p).estado.fecha_suspencion,"YYYY-MM-DD").format("MM-DD-YYYY")),1)])):J("",!0),F(p).memberships_members.payments.length?(T(),U("p",Bs,[$s,G(" "+W(F(H)(F(p).memberships_members.payments[0].created_at).format("MM-DD-YYYY")),1)])):J("",!0),F(p).memberships_members.payments.length?(T(),U("p",Gs,[Xs,G(" "+W(F(p).memberships_members.payments[0].status)+" / "+W(F(p).memberships_members.payments[0].status_description),1)])):J("",!0),"VENCIDO"==F(p).estado.estado_pago?(T(),U("div",Fs,[$("p",Ks,[Qs,G(" "+W(F(p).estado.meses_retraso),1)]),$("p",Ws,[Js,G(" "+W(F(p).estado.dias_retraso),1)]),$("p",Zs,[el,G(" "+W(F(p).estado.horas_retraso),1)])])):J("",!0)])])),_:1},8,["style"]),["PROX. CANCELADO","CANCELADO"].includes(F(p).estado.estado_pago)?J("",!0):(T(),U("div",tl,[$("div",sl,[$(v,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",ll,["CANCELADO"!=F(p).estado.estado_pago?(T(),U(i,{key:0,class:"columns is-multiline p-1"},{default:B((()=>[$("div",al,[$(b,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",nl,[$(_,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",il,[$(y,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",ol,[$(f,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",ul,[$(h,{suscripcion:F(p),onReload:d},null,8,["suscripcion"])]),$("div",cl,[$(k,{size:"small",active:o.value},{default:B((()=>[$(x,{total:0,card:!0,user:F(p).user,onOnPayment:d},null,8,["user"])])),_:1},8,["active"])]),$("div",rl,[$(D,{suscripcion:F(p)},null,8,["suscripcion"])])])),_:1})):J("",!0)])])),F(p)&&["CANCELADO","PROX. CANCELADO"].includes(F(p).estado.estado_pago)?(T(),U(Y,{key:1,suscripcion:F(p),type:"reprocess",onReload:d},null,8,["suscripcion"])):J("",!0),["CANCELADO","PROX. CANCELADO","HOLD"].includes(F(p).estado.estado_pago)?J("",!0):(T(),U("div",dl,[F(p)&&F(p).presupuesto&&"PAGADO"!=F(p).estado.estado_pago?(T(),U(M,{key:0,total:F(p).presupuesto.total,user:F(p).user,suscripcion_id:F(p).id,onProccessCheckout:m,onReload:d},null,8,["total","user","suscripcion_id"])):J("",!0),F(p)&&F(p).presupuesto&&"PAGADO"!=F(p).estado.estado_pago?(T(),U(i,{key:1},{default:B((()=>[$(C,{presupuesto:F(p).presupuesto},null,8,["presupuesto"])])),_:1})):J("",!0)]))])):J("",!0)])])),_:1},8,["active"])}}});export{pl as _};
