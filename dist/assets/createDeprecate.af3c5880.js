import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as t}from"./V-Control.63a8a239.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.26124ecb.js";import{g as u,p as i,h as r,e as n,s as o,v as m,m as p,b as c,P as d,n as v,A as y,a as f}from"./index.fdcc5e7e.js";import{J as b,K as _,d as h,L as g,i as S,M as x,b as j,N as k,O as C,P,k as M,Q as A,o as w,h as $,R as N,S as V,T as D,U as O,V as E,W as F,X as I,Y as q,c as R,Z as T,_ as J,$ as B}from"./Members.4b39a8d2.js";import{d as L,r as z,w as U,b as G,h as K,i as Q,F as W,k as X,l as Y,o as H,H as Z,Q as ee,R as te,S as ae,K as se,W as le,_ as ue,G as ie,A as re,B as ne,X as oe,a2 as me,D as pe,E as ce,O as de}from"./vendor.4454b83d.js";import{_ as ve}from"./SearchBar.vue_vue&type=style&index=0&lang.0f2e62dc.js";import{_ as ye}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as fe}from"./V-Placeload.28979271.js";import{_ as be}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";import{_ as _e}from"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import{c as he}from"./Companies.279c1d6f.js";import{_ as ge}from"./MemberCards.d0c4ad04.js";import{_ as Se}from"./signComponent.vue_vue&type=script&setup=true&lang.f8850092.js";import{_ as xe}from"./Presupuesto.vue_vue&type=script&setup=true&lang.b6048dbe.js";import{_ as je}from"./V-Progress.vue_vue&type=script&setup=true&lang.17630d6f.js";import{_ as ke}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e0bd75f.js";import{a as Ce,m as Pe}from"./Memberships.44604f02.js";import{g as Me}from"./Recurrences.0cb1ac3b.js";import{g as Ae}from"./Discounts.6be689e0.js";import{e as we,c as $e,s as Ne,d as Ve}from"./config.e4d9e7af.js";import{g as De}from"./Staffs.cf167df5.js";import{p as Oe}from"./sidebarLayoutState.66d5e66f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e9e50515.js";import"./Diciplines.04353873.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import"./pdf_icon.d81cf2a1.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d49a29d8.js";import"./useDropdown.659338b4.js";import"./V-Dropdown.f5015e73.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.62703a94.js";import"./activePanelState.06305d42.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.f6cfe36b.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import"./video.803b5c5c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.54bec82d.js";import"./darkModeState.f2041097.js";import"./AnimatedLogo.42cb9b3a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0069c349.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d0ef40a.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1cee2a1e.js";import"./userPopovers.f4b9fc60.js";var Ee=L({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,n=z(!1);U((()=>a.inputs),((e,t)=>{o()}));const o=()=>{n.value=!0,setTimeout((()=>{n.value=!1}),500)},m=G((()=>{const e=a.inputs;return e.length&&null!=u(e,"country_id")&&(u(e,"country_id").model=34),console.log("data",e),p.value?e.filter((e=>e.typeMember.includes("Company"))):e.filter((e=>e.typeMember.includes("Individual")))})),p=z(!1),c=e=>{p.value=!e.input.model,o()},d=e=>{let a=i(m.value);r.value||(a.select_type=a.select_type?"Company":"Individual",_.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const u=s,i=l;return K(),Q(i,{titles:{title:e.title},"is-loading":n.value,buttons:["next"],"buttons-disabled":W(b),step:1,onChangeStep:d},{default:X((()=>[Y(u,{"inputs-step":W(m),onChangeSwitch:c},null,8,["inputs-step"])])),_:1},8,["titles","is-loading","buttons-disabled"])}}}),Fe=L({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=z(null),i=z([]),r=e=>{t("changeStep",e)};H((()=>{i.value=[],u(h.value,"parent_email").disabled=!0})),U((()=>g.value),(()=>{g.value?(i.value=[],console.log(g.value),u(h.value,"member_id").model=g.value.id,u(h.value,"parent_email").model=g.value.email,u(h.value,"postal_code").model=g.value.postal_code,u(h.value,"city_id").model=g.value.city_id,u(h.value,"country_id").model=g.value.country_id,u(h.value,"state_id").model=g.value.state_id,u(h.value,"parent_name").model=g.value.name,u(h.value,"address").model=g.value.address,u(h.value,"parent_second_name").model=g.value.second_name,u(h.value,"parent_last_name").model=g.value.last_name,u(h.value,"parent_goverment_id").model=g.value.goverment_id,u(h.value,"parent_personal_identifications").model=g.value.personal_identifications,u(h.value,"parent_phone").model=g.value.phone,h.value.forEach((e=>{e.required=!1}))):(n(h.value),h.value.forEach((e=>{e.required=!0})))}));const o=e=>{!1===e?(i.value.push("next"),u(h.value,"parent_email").model=""):(i.value=[],u(h.value,"parent_email").model=e)};return(t,u)=>{const n=ve,m=s,p=l;return K(),Q(p,{titles:{title:e.title},buttons:["next","prev"],"buttons-disabled":i.value,step:2,onChangeStep:r},{default:X((()=>[Y("p",null,Z(a.value),1),Y(n,{"is-head":!0,"place-holder":"Enter the guardian email",onOnSubmit:o,class:"",modelValue:W(g),"onUpdate:modelValue":u[1]||(u[1]=e=>ee(g)?g.value=e:null)},null,8,["modelValue"]),Y(m,{"inputs-step":W(h)},null,8,["inputs-step"])])),_:1},8,["titles","buttons-disabled"])}}});const Ie={key:0},qe=ie(" Remove Family Member "),Re={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Te=ie(" Add Another Family Member ");var Je=L({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(i,{emit:r}){const n=i,p=z(!1);U((()=>n.inputs),((e,t)=>{c()}));const c=()=>{p.value=!0,setTimeout((()=>{p.value=!1}),500)},d=z([]);G((()=>(c(),d.value.forEach(((e,t)=>{y.value.includes(t)?d.value[t]=e.filter((e=>e.category.includes("Minor"))):d.value[t]=JSON.parse(JSON.stringify(n.inputs))})),d.value)));const v=e=>{r("returData",d),r("changeStep",e)},y=z([]),f=G((()=>d.value.length>0)),b=z(0),_=()=>{if(b.value>0)for(var e=0;e<b.value;++e){const e=re(JSON.parse(JSON.stringify(n.inputs)));u(e,"misma_direccion").change=x,u(e,"category").change=h,d.value.push(e)}},h=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(g(e),o(e,"email",`family_${ne().format("hms")}_${m(S.value,"email")}`),o(e,"phone",m(S.value,"phone"))),console.log(this.model)},g=e=>{o(e,"address",m(S.value,"address")),o(e,"postal_code",m(S.value,"postal_code")),o(e,"country_id",m(S.value,"country_id")),o(e,"city_id",m(S.value,"city_id")),o(e,"state_id",m(S.value,"state_id"))},x=function(e){console.log("llejay"),this.model?(o(e,"postal_code",""),o(e,"country_id",""),o(e,"city_id",""),o(e,"state_id","")):g(e)};return(u,r)=>{const n=s,o=e,m=ye,c=t,h=a,g=l;return K(),Q(g,{titles:{title:i.title},"is-loading":p.value,buttons:["next","prev"],step:2,onChangeStep:v},{default:X((()=>[W(f)?(K(),Q("div",Ie,[(K(!0),Q(te,null,ae(d.value,((e,t)=>(K(),Q(m,{key:t,class:"mb-4"},{default:X((()=>[Y(n,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void y.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),Y(o,{onClick:e=>d.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:X((()=>[qe])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):se("",!0),W(f)?se("",!0):(K(),Q("div",Re,[Y(h,{class:"mb-4"},{default:X((()=>[Y(c,null,{default:X((()=>[le(Y("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=e=>b.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[ue,b.value]])])),_:1})])),_:1}),Y(o,{onClick:_,color:"info",icon:"fas fa-check",raised:""},{default:X((()=>[Te])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),Be=L({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,u=z(!1);U((()=>a.inputs),((e,t)=>{r()}));const i=e=>{let a=[];n.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),x.value=a,t("returnData",a),t("changeStep",e)},r=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},n=G((()=>a.inputs)),o=z(!1),m=e=>{o.value=!e.input.model,r()};return(t,a)=>{const r=s,o=l;return K(),Q(o,{titles:{title:e.title},"is-loading":u.value,buttons:["next","prev"],step:3,onChangeStep:i},{default:X((()=>[Y(r,{"inputs-step":W(n),onChangeSwitch:m},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const Le={class:""};var ze=L({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,i=z(!1),n=z([]);U((()=>a.inputs),((e,t)=>{o()})),H((()=>{let e=j.findIndex((e=>"prorrateo"==e.name)),t=j.findIndex((e=>"schedules"==e.name));u(j,"recurrence").class="is-12",-1!=e&&(j.splice(e,1),o()),-1!=t&&(j.splice(t,1),o())}));const o=()=>{i.value=!0,setTimeout((()=>{i.value=!1}),500)},p=e=>{let a=null;k.forEach(((e,t)=>{0==t?a=e.inputs:n.value.push(e)})),r.value||(C.value=a,t("returnData",{memberMembership:a,familyMembership:n}),t("changeStep",e))},c=G((()=>{const e=re([]);k.value=[];let t=[];j.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(d(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(d(a.familiares[s],JSON.parse(JSON.stringify(t))));return k.value=e,e})),d=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==P.value?(u(t,"recurrence").model=!1,u(t,"recurrence").display=!1,u(t,"is_initiation_fee").model=!0,u(t,"is_card_price").model=!0):(u(t,"recurrence").model=!0,u(t,"recurrence").display=!0,u(t,"is_initiation_fee").model=!1,u(t,"is_card_price").model=!1),s.member=e,s.membresia=t,M(s.membresia,s.member),s};return(t,a)=>{const u=s,r=ye,n=l;return K(),Q(n,{titles:{title:e.title},isloading:i.value,buttons:["next","prev"],step:4,onChangeStep:p},{default:X((()=>[(K(!0),Q(te,null,ae(W(c),((e,t)=>(K(),Q(r,{key:`ss${t}`,class:"mb-4"},{default:X((()=>[Y("p",Le,[Y("b",null,Z(W(m)(e.member,"name"))+" "+Z(W(m)(e.member,"second_name"))+" "+Z(W(m)(e.member,"last_name")),1)]),Y(u,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128))])),_:1},8,["titles","isloading"])}}});const Ue=Y("p",{class:"title is-3"},[Y("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),Ge={class:"title is-5"},Ke=ie(" Cash "),Qe={class:"d-flex mb-4 justify-content-between"},We={class:"title is-5"},Xe=ie(" Total: "),Ye={class:"title is-5"},He=ie(" Cash Total: "),Ze={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},et=Y("p",{class:"title is-5 mb-4"},"Change Back:",-1),tt={class:"title is-3 mb-0"},at={class:"d-flex justify-content-center flex-wrap mb-4"},st=Y("div",{class:"w-100"},null,-1),lt={class:"d-flex justify-content-center"},ut=ie("Reset"),it=ie("Confirm");var rt=L({expose:[],props:{total:{type:[Number,String],default:0},margin:{type:String,default:"mx-2"},presupuesto:{type:Object,defaukt:{}}},emits:["onPaymentCash"],setup(s,{emit:l}){const u=s,i=z(!1),r=z(0),n=G((()=>{const e=parseFloat(r.value)-parseFloat(u.total/100);return e>0?e:0})),o=()=>{i.value=!1,l("onPaymentCash",{changeBack:n.value,cash:r.value,presupuesto:u.presupuesto})};return(l,u)=>{const m=ye,c=e,d=t,v=a,y=_e;return K(),Q(te,null,[Y(m,{color:"warning",class:["btn-card w-100 justify-content-center column is-4",s.margin],onClick:u[1]||(u[1]=e=>i.value=!0)},{default:X((()=>[Ue,Y("p",Ge,[Ke,Y("b",null,Z(W(p)(s.total)),1)])])),_:1},8,["class"]),Y(y,{title:"",open:i.value,actions:"center",onClose:u[5]||(u[5]=e=>i.value=!1)},{content:X((()=>[Y("div",Qe,[Y("p",We,[Xe,Y("b",null,Z(W(p)(s.total)),1)]),Y("p",Ye,[He,Y("b",null,Z(W(p)(r.value)),1)])]),Y("div",Ze,[et,Y("p",tt,[Y("b",null,Z(W(p)(W(n))),1)])]),Y("div",at,[Y(c,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[2]||(u[2]=e=>r.value=Number.parseFloat(s.total).toFixed(2))},{default:X((()=>[ie(" Full Payment "+Z(W(p)(s.total)),1)])),_:1}),st,(K(),Q(te,null,ae([5,10,20,50,100],((e,t)=>Y(c,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{r.value=parseFloat(r.value)+parseFloat(e)})(e)},{default:X((()=>[ie(" $"+Z(e),1)])),_:2},1032,["onClick"]))),64))]),Y("div",lt,[Y(v,null,{default:X((()=>[Y(d,null,{default:X((()=>[le(Y("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>r.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[ue,r.value]])])),_:1})])),_:1})])])),action:X((()=>[Y(c,{onClick:u[4]||(u[4]=e=>r.value=0),class:"d-flex justify-content-center",raised:""},{default:X((()=>[ut])),_:1}),Y(c,{color:"success",onClick:o,disabled:parseFloat(r.value)<parseFloat(parseFloat(s.total/100).toFixed(2)),class:"d-flex justify-content-center",raised:""},{default:X((()=>[it])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const nt={class:"d-flex justify-content-between align-items-start"},ot=Y("div",null,[Y("p",{class:"title is-3"},[Y("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),Y("p",{class:"title is-5",style:{color:"white !important"}},"View Order")],-1),mt={key:0,class:"title is-6"},pt=Y("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var ct=L({expose:[],props:{membership_member:{type:[Number,String],default:0},invoice_id:{type:[Number,String],default:0}},setup(e){const t=e,a=z(!1);return H((()=>{})),(e,s)=>{const l=ye,u=_e;return K(),Q(te,null,[Y(l,{style:{background:"#388e3c"},class:"mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center",onClick:s[1]||(s[1]=e=>a.value=!0)},{default:X((()=>[Y("div",nt,[ot,e.openModalRecibo?(K(),Q("p",mt,[pt])):se("",!0)])])),_:1}),Y(u,{title:"",open:a.value,actions:"center",onClose:s[2]||(s[2]=e=>a.value=!1)},{content:X((()=>[Y("iframe",{src:`${W(c)}ticket_membership/${t.membership_member}?companie_id=${W(he).id}&invoice_id=${t.invoice_id}`,width:"100%",height:"500px",frameborder:"0"},null,8,["src"]),Y("a",{href:`${W(c)}ticket_membership/${t.membership_member}?companie_id=${W(he).id}&invoice_id=${t.invoice_id}`},"Open",8,["href"])])),action:X((()=>[])),_:1},8,["open"])],64)}}});const dt=Y("div",{id:"payment-element"},null,-1),vt=ie("Pay now "),yt=Y("div",{id:"payment-message",class:"hidden"},null,-1);var ft=L({expose:[],props:{presupuesto:{type:Object,default:{}},amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(t,{emit:a}){const s=t,l=Stripe(d.value);U((()=>s.id),(e=>{u.value=!0,c()}));const u=z(!0);z({id:s.id,amount:s.amount});const i=z(),r=G((()=>"stripe"!=s.url?{payment_type_id:3,amount:s.amount}:{id:s.id,member_mermship_id:s.member_membership,amount:s.amount,payment_type_id:1}));z(null);const n=z(null),o=z(null),m=z(!1),p=z(null),c=async()=>{let e=await y.post(s.url,r.value).then((e=>{n.value=e.data.clientSecret,p.value=e.data.user_id,i.value=l.elements({clientSecret:n.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),o.value=i.value.create("card",{classes:{base:"base_card"}}),o.value.mount("#payment-element")})).catch((e=>{u.value=!1}));return u.value=!1,e},f=z(null),b=async e=>{e.preventDefault(),m.value=!0;const{setupIntent:t,error:u}=await l.confirmCardSetup(n.value,{payment_method:{card:o.value,billing_details:{name:f.value}}});if(u)m.value=!1,v.error(u.message);else{const{payment_method:e}=t;s.variosMiembros?(s.miembros.forEach((t=>{y.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership,payment_type_id:3,presupuesto:s.presupuesto}).catch((e=>{m.value=!1}))})),response.then((e=>{a("PaymentAction",e.data),v.success("Success Payment")})).catch((e=>{m.value=!1}))):await y.post("paymentStripe",{payment_method:e,amount:s.amount,user_id:p.value,membership_member_id:s.member_membership,payment_type_id:3,presupuesto:s.presupuesto}).then((e=>{a("PaymentAction",e.data),v.success("Success Payment")})).catch((e=>{m.value=!1}))}m.value=!1};return H((()=>{m.value=!1,c(),new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("payment_stripe_channel").bind("payment_stripe_event",(function(e){v.error("ALERT PAYMENT: "+e.member+" "+e.message)}))})),(t,a)=>{const s=fe,l=e,i=be,r=ye;return K(),Q(te,null,[u.value?(K(),Q(s,{key:0,height:"200px",class:"mt-6"})):se("",!0),le(Y(r,{class:"mt-6"},{default:X((()=>[Y("form",{onSubmit:me(b,["prevent"]),id:"payment-form"},[le(Y("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),placeholder:"Name",type:"text"},null,512),[[ue,f.value]]),dt,Y(i,{size:"small",active:m.value},{default:X((()=>[Y(l,{id:"submit",class:"mt-4",color:"info"},{default:X((()=>[vt])),_:1})])),_:1},8,["active"]),yt],40,["onSubmit"])])),_:1},512),[[oe,!u.value]])],64)}}});const bt={class:"w-100"},_t={class:"my-4"},ht={key:0},gt=Y("small",null,"Register the principal first",-1),St=ie(" Process Membership "),xt=ie(" Process Membership "),jt={key:0,class:"columns is-multiline justify-content-center mt-6"},kt={class:"d-flex justify-content-between align-items-start"},Ct=Y("div",null,[Y("p",{class:"title is-3"},[Y("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),Y("p",{class:"title is-5"},"Debit Automatic")],-1),Pt={key:0,class:"title is-6"},Mt=Y("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),At={class:"columns is-multiline justify-content-center mt-6"},wt=Y("p",{class:"title is-4"},"Payment Success",-1);var $t=L({expose:[],props:{presupuesto:{type:Object,default:{}},member:{type:Array,required:!0},member_id:{type:Number,default:0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0},type:{type:String,default:"create"}},emits:["PaymentAction"],setup(t,{emit:a}){const s=t,l=z(null),r=z(!1),n=z(null),o=z(null);H((()=>{r.value=!1,p.value=!1}));const m=()=>{l.value=null,r.value=!0,n.value=s.member.id,o.value=null,console.log("props.membresia",s.membresia);const e=i(s.membresia);e.members_id=s.member_id,e.total=s.total,e.payment_type_id=3,console.log(e),D(e).then((e=>{n.value=e.data.id,o.value=e.data.membership_members_id,v.success("Success"),r.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{v.error(`${t}: ${e}`)}))}))},p=z(!1),c=e=>{"object"==typeof e&&(n.value=e.id,b.value=e.invoice_id,a("PaymentAction",n)),p.value=!0},d=G((()=>0==u(s.member,"is_family").model)),y=G((()=>!p.value&&!(!d.value&&!A.value))),f=e=>{w(e,o.value).then((e=>{if(e.data.status)v.success("Sign Success");else for(var t in v.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{v.error(`${t} : ${e}`)}))})).catch((e=>{}))},b=z(0),_=e=>{if(l.value=1,o.value){const t={cash:e.cash,payment_type_id:l.value,total:s.total,cash_back:e.changeBack,membership_member_id:o.value,presupuesto:s.presupuesto};console.log("datos",t),$(o.value,t).then((e=>{console.log("cash",e),c({id:e.data.member_id,invoice_id:e.data.invoice_id}),v.success("Success Payment")})).catch((e=>{console.log(e.response)}))}else v.error("The membership ID is required. Click on Process Membership to generate it automatically")},h=e=>{r.value=!0,N({payment_method:e,amount:s.total,user_id:n.value,membership_member_id:o.value,payment_type_id:3,presupuesto:s.presupuesto}).then((e=>{b.value=e.data.invoice_id,c(n.value),v.success("Success"),r.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{v.error(`${t}: ${e}`)}))}))};return(a,i)=>{const v=e,S=be,x=ye,j=rt,k=ct,C=ge,P=ft,M=Se;return K(),Q("div",bt,[Y("div",_t,[Y("p",null,Z(W(u)(s.member,"name").model)+" "+Z(W(u)(s.member,"last_name").model),1),Y("p",null,[Y("small",null,Z(W(d)?"Main member":"Family"),1)]),W(d)||W(A)?se("",!0):(K(),Q("p",ht,[gt]))]),Y(S,{size:"small",active:r.value},{default:X((()=>["create"==s.type?(K(),Q(v,{key:0,color:"success",onClick:i[1]||(i[1]=e=>W(y)?(l.value=null,r.value=!0,n.value=null,o.value=null,V({member:s.member,contact:s.contact,membresia:s.membresia,total:s.total,categoriesMembers:s.categoriesMembers,notasInput:s.notasInput}).then((e=>{n.value=e.data.id,o.value=e.data.membership_members_id})).catch((e=>{})),void(r.value=!1)):null),style:W(y)?{}:{opacity:".5"}},{default:X((()=>[St])),_:1},8,["style"])):(K(),Q(v,{key:1,color:"success",onClick:m},{default:X((()=>[xt])),_:1}))])),_:1},8,["active"]),n.value&&!p.value?(K(),Q("div",jt,[Y(x,{color:"info",class:"mx-2 btn-card w-100 column is-4",style:1==l.value?{opacity:"0.4"}:{},onClick:i[2]||(i[2]=e=>l.value=3)},{default:X((()=>[Y("div",kt,[Ct,3==l.value?(K(),Q("p",Pt,[Mt])):se("",!0)])])),_:1},8,["style"]),Y(j,{presupuesto:t.presupuesto,total:s.total,onOnPaymentCash:_},null,8,["presupuesto","total"])])):se("",!0),Y("div",At,[o.value&&p.value?(K(),Q(k,{key:0,membership_member:o.value,invoice_id:b.value},null,8,["membership_member","invoice_id"])):se("",!0)]),3!=l.value||p.value?se("",!0):(K(),Q(C,{key:1,"show-new-card":!1,memberid:n.value,"member-guardian-id":W(g)?W(g).id:null,onOnMethodPayment:h},null,8,["memberid","member-guardian-id"])),3!=l.value||p.value?se("",!0):(K(),Q(P,{key:2,amount:s.total,id:n.value,member_membership:o.value,presupuesto:t.presupuesto,onPaymentAction:c},null,8,["amount","id","member_membership","presupuesto"])),p.value?(K(),Q(x,{key:3,color:"success",class:"my-6"},{default:X((()=>[wt])),_:1})):se("",!0),p.value?(K(),Q(M,{key:4,onOnSign:f,"is-sign":!0,contract:`contract_${n.value}_${o.value}_${W(u)(s.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${n.value}`},null,8,["contract","url-contract"])):se("",!0)])}}});const Nt={key:1},Vt={class:"d-flex justify-content-end w-100"},Dt={class:"d-flex justify-content-between w-100"},Ot=ie(" Finish "),Et=ie(" Cancel "),Ft=ie(" Register another member ");var It=L({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){z(!1);const s=z(!1),i=G((()=>k.value[0])),r=G((()=>{let e=[];return k.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));H((()=>{u(O.value,"mismatarjeta").change=n,E.value=[],i.value?(F(i.value.membresia,i.value.member),r.value.length&&r.value.forEach((e=>{F(e.membresia,e.member)}))):(console.error("No tiene membresia"),v.error("Membership is required"))}));const n=function(){this.model},o=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},m=G((()=>{let e=[];return E.value.forEach((t=>{0==u(t.member,"is_family").model&&e.push(t)})),E.value.forEach((t=>{1==u(t.member,"is_family").model&&e.push(t)})),e}));z([]);const p=()=>{window.location.reload()},c=z([]),d=e=>{c.value.push(e)};return(a,u)=>{const i=fe,r=$t,n=xe,v=e,y=l;return K(),Q(y,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:o},{default:X((()=>[W(E).length?se("",!0):(K(),Q(i,{key:0,height:"300px",class:"mb-4"})),W(E)?(K(),Q("div",Nt,[(K(!0),Q(te,null,ae(W(m),((e,t)=>(K(),Q(n,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:X((()=>[Y("div",Vt,[Y("p",null,Z(e.presupuesto_id),1),Y(r,{member:e.member,membresia:e.membresia,contact:W(x),presupuesto_id:e.presupuesto_id,"categories-members":W(I),"notas-input":W(q),total:e.total,presupuesto:e,onPaymentAction:d},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total","presupuesto"])])])),_:2},1032,["presupuesto"])))),128))])):se("",!0),Y("div",Dt,[W(m).length>0&&c.value.length==W(m).length?(K(),Q(v,{key:0,color:"danger",to:{name:"index"}},{default:X((()=>[Ot])),_:1})):(K(),Q(v,{key:1,color:"danger",to:{name:"index"}},{default:X((()=>[Et])),_:1})),W(m).length>0&&c.value.length==W(m).length?(K(),Q(v,{key:2,color:"success",onClick:p},{default:X((()=>[Ft])),_:1})):se("",!0)])])),_:1},8,["titles","is-loading"])}}});pe("data-v-915b2888");const qt={class:"content"},Rt={class:"content-text"};ce();var Tt=L({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=G((()=>t.active?100:0));return(t,s)=>{const l=je;return K(),Q("div",qt,[Y("div",{class:["circle",e.active?"active":""]},null,2),Y(l,{class:"progressbar",value:W(a),size:"smaller"},null,8,["value"]),Y("div",Rt,[Y("p",null,"STEP "+Z(e.step),1),Y("p",null,[Y("b",null,Z(e.text),1)])])])}}});Tt.__scopeId="data-v-915b2888";const Jt={class:"columns is-multiline"},Bt={class:"column is-12"},Lt={class:"column is-9"},zt={class:"column is-3"};var Ut=L({expose:[],setup(s){Oe.value="Add New members",de({title:"Members"}),H((()=>{M(),Ce(1).then((e=>{f(j,"memberships_id",e.data.memberships)})),u(j,"memberships_id").disabled=!1,u(j,"recurrences_id").disabled=!1,u(j,"is_initiation_fee").disabled=!1,u(j,"discount").disabled=!1,Ae(1,"membership").then((e=>{f(j,"discount",e.data.discounts)})),Me(),we().then((e=>{f(S,"city_id",$e.value),f(R,"city_id",$e.value),f(h,"city_id",$e.value),f(S,"state_id",Ne.value),f(R,"state_id",Ne.value),f(h,"state_id",Ne.value),f(S,"country_id",Ve.value),u(S.value,"country_id").model=34,f(R,"country_id",Ve.value),f(h,"country_id",Ve.value)})),De().then((e=>{f(j,"staff_id",e.data)}))}));const l=z(1),r=z([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:2,text:"Contact Preference",categories:["Prospect"]},{step:3,text:"Contact Preference",categories:["Adult","Minor"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]}]),o=G((()=>S.value.filter((e=>e.categories.includes(I.value.model))))),m=G((()=>r.value.find((e=>e.step==l.value&&e.categories.includes(I.value.model))))),p=G((()=>r.value.filter((e=>e.categories.includes(I.value.model)))));G((()=>i(h.value)));const c=(e,t=3,a={})=>{I.value.model,6==e?sendData(t,a):l.value=e},d=z(null),v=e=>{d.value=e},y=z(null),b=e=>{y.value=e},_=z([]),g=e=>{_.value=e.value},x=z([]),P=e=>{x.value=e.familyMembership.value,C.value=e.memberMembership};z(null),z(null),z(null);const M=()=>{T.value=null,J.value=null;let e=["is_family","principal_family"];n(S.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],n(j.filter((t=>!e.includes(t.name)))),n(q.value),n(h.value)};return(s,u)=>{const i=e,r=t,n=a,d=Ee,y=Fe,f=Je,h=Be,S=ze,j=It,M=Tt,A=ke;return K(),Q(A,null,{default:X((()=>[Y("div",Jt,[Y("div",Bt,[1==l.value?(K(),Q(n,{key:0,class:"w-100",addons:""},{default:X((()=>[(K(!0),Q(te,null,ae(W(I).values,((e,t)=>(K(),Q(r,{key:`categoymember-${t}`},{default:X((()=>[Y(i,{onClick:t=>W(I).model=e,color:W(I).model==e?"primary":void 0,rounded:""},{default:X((()=>[ie(Z("Prospect"==e?"":e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):se("",!0)]),Y("div",Lt,[le(Y(d,{type:"create",title:W(m).text,inputs:W(o),onChangeStep:c,onReturData:v},null,8,["title","inputs"]),[[oe,1==l.value]]),le(Y(y,{title:W(m).text,onChangeStep:c},null,8,["title"]),[[oe,2==l.value&&"Minor"==W(I).model]]),le(Y(f,{type:"create",title:W(m).text,inputs:W(R),onChangeStep:c,onReturData:g},null,8,["title","inputs"]),[[oe,2==l.value&&"Adult"==W(I).model]]),le(Y(h,{type:"create",title:W(m).text,inputs:W(B),onChangeStep:c,onReturnData:b},null,8,["title","inputs"]),[[oe,3==l.value||2==l.value&&"Prospect"==W(I).model]]),le(Y(S,{type:"create",member:W(o),familiares:_.value,title:W(m).text,inputs:W(k),memberships:W(Pe),notes:W(q),onChangeStep:c,onReturnData:P},null,8,["member","familiares","title","inputs","memberships","notes"]),[[oe,4==l.value]]),5==l.value?(K(),Q(j,{key:0,type:"create",title:W(m).text,member:W(o),familiares:_.value,inputs:W(k),"member-membership":W(C),"family-membership":x.value,onChangeStep:c},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):se("",!0)]),Y("div",zt,[(K(!0),Q(te,null,ae(W(p),((e,t)=>(K(),Q(M,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default Ut;
