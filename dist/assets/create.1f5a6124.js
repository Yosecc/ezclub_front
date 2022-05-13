import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.1a9fba1b.js";import{_ as t}from"./V-Control.f5455229.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.676297a2.js";import{_ as s}from"./inputsLayaut.vue_vue&type=style&index=0&lang.996de933.js";import{_ as l}from"./formLayaut.vue_vue&type=style&index=0&lang.1dc86fff.js";import{d as r,r as u,w as i,b as n,o,i as p,j as m,k as c,D as d,Q as v,R as y,G as f,S as b,Y as g,E as h,y as _,z as S,F as x,H as j,U as M,a8 as A,K as k,A as C,B as P,O as N}from"./vendor.0b0c2a98.js";import{p as D,h as V,g as w,s as I,v as q,P as E,A as O,n as $,m as J,a as R,e as T}from"./index.6309fa0f.js";import{D as F,q as B,c as L,E as z,F as G,G as U,b as Q,H,e as K,I as W,k as Y,J as X,K as Z,L as ee,M as te,N as ae,O as se,y as le,P as re,Q as ue,R as ie}from"./Members.702ef5a5.js";import{_ as ne}from"./V-Card.vue_vue&type=script&setup=true&lang.6199c77d.js";import{_ as oe}from"./V-Placeload.1f25c7c6.js";import{_ as pe}from"./V-Loader.vue_vue&type=script&setup=true&lang.c70b2f05.js";import{_ as me}from"./signComponent.vue_vue&type=script&setup=true&lang.0962446d.js";import{_ as ce}from"./V-Progress.vue_vue&type=script&setup=true&lang.1c50d9df.js";import{_ as de}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.149988d3.js";import{a as ve,m as ye}from"./Memberships.1b7802c9.js";import{g as fe}from"./Recurrences.99935bf3.js";import{g as be}from"./Discounts.17f41d6c.js";import{e as ge,c as he,s as _e,d as Se}from"./config.fe115337.js";import{h as xe}from"./Staffs.aa98a4fb.js";import{p as je}from"./sidebarLayoutState.80702fa9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80c67c71.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.8b9bb15d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.b96d8270.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.3772eeb5.js";import"./pdf_icon.708d4b0e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2e09e6f0.js";import"./useDropdown.ed8b3065.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.e9f9f5bb.js";import"./V-Dropdown.78d32424.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.fb8eb841.js";import"./Companies.8eb8c471.js";import"./activePanelState.8fe80399.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.758e233f.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.37834ed9.js";import"./V-Message.vue_vue&type=script&setup=true&lang.169dc9fd.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.ed4ec558.js";import"./navbarLayoutState.64d71dd1.js";import"./video.e503358c.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.21759115.js";import"./darkModeState.8b61e731.js";import"./AnimatedLogo.527cfb51.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.b806e884.js";import"./V-Block.vue_vue&type=script&setup=true&lang.88bfc070.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.be986058.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.ccb3f0bf.js";var Me=r({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e,r=u(!1);i((()=>a.inputs),((e,t)=>{v()}));const v=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},y=n((()=>f.value?a.inputs.filter((e=>e.typeMember.includes("Company"))):a.inputs.filter((e=>e.typeMember.includes("Individual"))))),f=u(!1),b=e=>{f.value=!e.input.model,v()},g=e=>{let a=D(y.value);V.value||(a.select_type=a.select_type?"Company":"Individual",F.value=a,t("returData",a),t("changeStep",e))};return(t,a)=>{const u=s,i=l;return o(),p(i,{titles:{title:e.title},"is-loading":r.value,buttons:["next","back"],step:1,onChangeStep:g},{default:m((()=>[c(u,{"inputs-step":d(y),onChangeSwitch:b},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}}),Ae=r({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(e,{emit:t}){const a=e=>{t("changeStep",e)};return(t,r)=>{const u=s,i=l;return o(),p(i,{titles:{title:e.title},buttons:["next","prev"],step:2,onChangeStep:a},{default:m((()=>[c(u,{"inputs-step":d(B)},null,8,["inputs-step"])])),_:1},8,["titles"])}}});const ke={key:0},Ce=h(" Remove Family Member "),Pe={key:1,class:"column d-flex justify-content-center flex-column is-4 mx-auto"},Ne=h(" Add Another Family Member ");var De=r({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep","returData"],setup(r,{emit:h}){const x=r,j=u(!1);i((()=>x.inputs),((e,t)=>{M()}));const M=()=>{j.value=!0,setTimeout((()=>{j.value=!1}),500)},A=u([]);n((()=>(M(),A.value.forEach(((e,t)=>{C.value.includes(t)?A.value[t]=e.filter((e=>e.category.includes("Minor"))):A.value[t]=JSON.parse(JSON.stringify(x.inputs))})),A.value)));const k=e=>{h("returData",A),h("changeStep",e)},C=u([]),P=n((()=>A.value.length>0)),N=u(0),D=()=>{if(N.value>0)for(var e=0;e<N.value;++e){const e=_(JSON.parse(JSON.stringify(x.inputs)));w(e,"misma_direccion").change=O,w(e,"category").change=V,A.value.push(e)}},V=function(e){console.log(e),e.forEach((e=>{this.model?e.category.includes("Adult")&&(e.typeInput=e.typeInputDefault):e.category.includes("Minor")||(e.typeInput="hidden")})),this.model||(E(e),I(e,"email",`family_${S().format("hms")}_${q(L.value,"email")}`),I(e,"phone",q(L.value,"phone"))),console.log(this.model)},E=e=>{I(e,"address",q(L.value,"address")),I(e,"postal_code",q(L.value,"postal_code")),I(e,"country_id",q(L.value,"country_id")),I(e,"city_id",q(L.value,"city_id")),I(e,"state_id",q(L.value,"state_id"))},O=function(e){console.log("llejay"),this.model?(I(e,"postal_code",""),I(e,"country_id",""),I(e,"city_id",""),I(e,"state_id","")):E(e)};return(u,i)=>{const n=s,h=e,_=ne,S=t,x=a,M=l;return o(),p(M,{titles:{title:r.title},"is-loading":j.value,buttons:["next","prev"],step:2,onChangeStep:k},{default:m((()=>[d(P)?(o(),p("div",ke,[(o(!0),p(v,null,y(A.value,((e,t)=>(o(),p(_,{key:t,class:"mb-4"},{default:m((()=>[c(n,{"inputs-step":e,onChangeSwitch:e=>{return a=t,void C.value.findIndex((e=>e==a));var a}},null,8,["inputs-step","onChangeSwitch"]),c(h,{onClick:e=>A.value.splice(t,1),color:"danger",class:"mx-auto",icon:"fas fa-times"},{default:m((()=>[Ce])),_:2},1032,["onClick"])])),_:2},1024)))),128))])):f("v-if",!0),d(P)?f("v-if",!0):(o(),p("div",Pe,[c(x,{class:"mb-4"},{default:m((()=>[c(S,null,{default:m((()=>[b(c("input",{type:"number","onUpdate:modelValue":i[1]||(i[1]=e=>N.value=e),class:"input text-center",placeholder:"Family quantity"},null,512),[[g,N.value]])])),_:1})])),_:1}),c(h,{onClick:D,color:"info",icon:"fas fa-check",raised:""},{default:m((()=>[Ne])),_:1})]))])),_:1},8,["titles","is-loading"])}}}),Ve=r({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""}},emits:["changeStep"],setup(e,{emit:t}){const a=e,r=u(!1);i((()=>a.inputs),((e,t)=>{y()}));const v=e=>{let a=[];f.value.forEach((e=>{e.values.forEach((e=>{let t=e.values.find((e=>"sms"==e.name)).model.length,s=e.values.find((e=>"email"==e.name)).model.length;a.push({[e.name]:e.value,sms:t>0,email:s>0})}))})),z.value=a,t("returnData",a),t("changeStep",e)},y=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},f=n((()=>a.inputs)),b=u(!1),g=e=>{b.value=!e.input.model,y()};return(t,a)=>{const u=s,i=l;return o(),p(i,{titles:{title:e.title},"is-loading":r.value,buttons:["next","prev"],step:3,onChangeStep:v},{default:m((()=>[c(u,{"inputs-step":d(f),onChangeSwitch:g},null,8,["inputs-step"])])),_:1},8,["titles","is-loading"])}}});const we={class:""};var Ie=r({expose:[],props:{type:{type:String,default:"create"},inputs:{type:Array,default:[]},title:{type:String,default:""},member:{type:Array,default:[]},familiares:{type:Array,default:[]},memberships:{type:Array,default:[]},notes:{type:Array,default:[]}},emits:["changeStep","returnData"],setup(e,{emit:t}){const a=e,r=u(!1),f=u([]);i((()=>a.inputs),((e,t)=>{b()}));const b=()=>{r.value=!0,setTimeout((()=>{r.value=!1}),500)},g=e=>{let a=null;G.forEach(((e,t)=>{0==t?a=e.inputs:f.value.push(e)})),V.value||(U.value=a,t("returnData",{memberMembership:a,familyMembership:f}),t("changeStep",e))},h=n((()=>{const e=_([]);G.value=[];let t=[];Q.forEach((e=>{t.push(JSON.parse(JSON.stringify(e)))})),e.push(S(a.member,JSON.parse(JSON.stringify(t))));for(var s=0;s<a.familiares.length;++s)e.push(S(a.familiares[s],JSON.parse(JSON.stringify(t))));return G.value=e,e})),S=(e,t,a)=>{const s={member:null,membresia:null};return"Prospect"==H.value?w(t,"recurrence").model=!1:w(t,"recurrence").model=!0,s.member=e,s.membresia=t,K(s.membresia,s.member),s};return(t,a)=>{const u=s,i=ne,n=l;return o(),p(n,{titles:{title:e.title},isloading:r.value,buttons:["next","prev"],step:4,onChangeStep:g},{default:m((()=>[(o(!0),p(v,null,y(d(h),((e,t)=>(o(),p(i,{key:`ss${t}`,class:"mb-4"},{default:m((()=>[c("p",we,[c("b",null,x(d(q)(e.member,"name"))+" "+x(d(q)(e.member,"second_name"))+" "+x(d(q)(e.member,"last_name")),1)]),c(u,{"inputs-step":e.membresia},null,8,["inputs-step"])])),_:2},1024)))),128)),c(i,{class:"mb-4"},{default:m((()=>[c(u,{"inputs-step":e.notes},null,8,["inputs-step"])])),_:1})])),_:1},8,["titles","isloading"])}}});const qe=c("div",{id:"payment-element"},[f("Stripe.js injects the Payment Element")],-1),Ee=h("Pay now "),Oe=c("div",{id:"payment-message",class:"hidden"},null,-1);var $e=r({expose:[],props:{amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(t,{emit:a}){const s=t,l=Stripe(E.value);i((()=>s.id),(e=>{r.value=!0,k()}));const r=u(!0);u({id:s.id,amount:s.amount});const d=u(),y=n((()=>"stripe"!=s.url?{payment_type_id:3,amount:s.amount}:{id:s.id,member_mermship_id:s.member_membership,amount:s.amount,payment_type_id:1}));u(null);const h=u(null),_=u(null),S=u(!1),x=u(null),k=async()=>{let e=await O.post(s.url,y.value).then((e=>{h.value=e.data.clientSecret,x.value=e.data.user_id,d.value=l.elements({clientSecret:h.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),_.value=d.value.create("card",{classes:{base:"base_card"}}),_.value.mount("#payment-element")})).catch((e=>{r.value=!1}));return r.value=!1,e},C=u(null),P=async e=>{e.preventDefault(),S.value=!0;const{setupIntent:t,error:r}=await l.confirmCardSetup(h.value,{payment_method:{card:_.value,billing_details:{name:C.value}}});if(r)S.value=!1,$.error(r.message);else{const{payment_method:e}=t;s.variosMiembros?s.miembros.forEach((t=>{O.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership}).catch((e=>{S.value=!1}))})):await O.post("paymentStripe",{payment_method:e,amount:s.amount,user_id:x.value,membership_member_id:s.member_membership}).catch((e=>{S.value=!1})),y.value&&(a("PaymentAction",y),$.success("Success Payment"))}S.value=!1};return j((()=>{S.value=!1,k()})),(t,a)=>{const s=oe,l=e,u=pe,i=ne;return o(),p(v,null,[r.value?(o(),p(s,{key:0,height:"200px",class:"mt-6"})):f("v-if",!0),b(c(i,{class:"mt-6"},{default:m((()=>[c("form",{onSubmit:A(P,["prevent"]),id:"payment-form"},[b(c("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":a[1]||(a[1]=e=>C.value=e),placeholder:"Name",type:"text"},null,512),[[g,C.value]]),qe,c(u,{size:"small",active:S.value},{default:m((()=>[c(l,{id:"submit",class:"mt-4",color:"info"},{default:m((()=>[Ee])),_:1})])),_:1},8,["active"]),Oe],40,["onSubmit"])])),_:1},512),[[M,!r.value]])],64)}}});const Je={class:"w-100"},Re={class:"my-4"},Te={key:0},Fe=c("small",null,"Register the principal first",-1),Be=h(" Process Membership "),Le=c("p",{class:"title is-4"},"Payment Success",-1);var ze=r({expose:[],props:{member:{type:Array,required:!0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0}},emits:["PaymentAction"],setup(t,{emit:a}){const s=t,l=u(!1),r=u(null),i=u(null);j((()=>{l.value=!1,v.value=!1}));const v=u(!1),y=n((()=>0==w(s.member,"is_family").model)),b=n((()=>!v.value&&!(!y.value&&!W.value))),g=e=>{Y(e,i.value).then((e=>{if(e.data.status)$.success("Sign Success");else for(var t in $.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{$.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(t,u)=>{const n=e,h=pe,_=$e,S=ne,j=me;return o(),p("div",Je,[c("div",Re,[c("p",null,x(d(w)(s.member,"name").model)+" "+x(d(w)(s.member,"last_name").model),1),c("p",null,[c("small",null,x(d(y)?"Main member":"Family"),1)]),d(y)||d(W)?f("v-if",!0):(o(),p("p",Te,[Fe]))]),c(h,{size:"small",active:l.value},{default:m((()=>[c(n,{color:"success",onClick:u[1]||(u[1]=e=>d(b)?(l.value=!0,r.value=null,i.value=null,X({member:s.member,contact:s.contact,membresia:s.membresia,total:s.total,categoriesMembers:s.categoriesMembers,notasInput:s.notasInput,presupuesto_id:s.presupuesto_id}).then((e=>{r.value=e.data.id,i.value=e.data.membership_members_id})).catch((e=>{})),void(l.value=!1)):null),style:d(b)?{}:{opacity:".5"}},{default:m((()=>[Be])),_:1},8,["style"])])),_:1},8,["active"]),r.value&&!v.value?(o(),p(_,{key:0,amount:s.total,id:r.value,member_membership:i.value,onPaymentAction:u[2]||(u[2]=e=>{return t=r.value,v.value=!0,void a("PaymentAction",t);var t})},null,8,["amount","id","member_membership"])):f("v-if",!0),v.value?(o(),p(S,{key:1,color:"success",class:"my-6"},{default:m((()=>[Le])),_:1})):f("v-if",!0),v.value?(o(),p(j,{key:2,onOnSign:g,"is-sign":!0,contract:`contract_${r.value}_${i.value}_${d(w)(s.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${r.value}`},null,8,["contract","url-contract"])):f("v-if",!0)])}}});const Ge=c("h1",{class:"title is-6"},null,-1),Ue={class:"table is-hoverable is-striped is-fullwidth"},Qe=c("thead",null,[c("tr",null,[c("th",{scope:"col"},"Membership Name"),c("th",{scope:"col"},"Plan"),c("th",{scope:"col"},"Quantity"),c("th",{scope:"col"},"Cost"),c("th",{scope:"col"},"Import")])],-1),He={class:"text-capitalize"},Ke={style:{"text-align":"right"}},We={style:{"text-align":"right"}},Ye={style:{"text-align":"right"}},Xe=c("td",{colspan:"4",style:{"text-align":"right"}},[c("b",null,"Subtotal")],-1),Ze={key:0,style:{"text-align":"right"}},et={colspan:"4"},tt={key:0},at={key:1},st={style:{"text-align":"right"}},lt=c("td",{colspan:"4",style:{"text-align":"right"}},"Tax 7%",-1),rt={style:{"text-align":"right"}},ut=c("td",{colspan:"4",style:{"text-align":"right"}},[c("b",null,"Total to pay")],-1),it={key:1,style:{"text-align":"right"}},nt=c("td",{colspan:"4",style:{"text-align":"right"}},"Recurring total",-1);var ot=r({expose:[],props:{presupuesto:{type:Object,required:!0}},setup:e=>(t,a)=>{const s=ne;return e.presupuesto?(o(),p(s,{key:0,class:"mb-4"},{default:m((()=>[Ge,c("table",Ue,[Qe,c("tbody",null,[(o(!0),p(v,null,y(e.presupuesto.membresias,((e,t)=>(o(),p("tr",{key:`membresia-${t}`},[c("td",null,x(e.description),1),c("td",He,x(e.type?e.type:"Initiation Fee"),1),c("td",null,x(e.quantity),1),c("td",Ke,x(d(J)(e.amount_subtotal/e.quantity/100)),1),c("td",We,x(d(J)(e.amount_subtotal/100)),1)])))),128)),c("tr",Ye,[Xe,c("td",null,x(d(J)(e.presupuesto.totales.upfront.amount_subtotal/100)),1)]),e.presupuesto.discount?(o(),p("tr",Ze,[c("td",et,[h(x(e.presupuesto.discount.name)+" ",1),"percentaje"==e.presupuesto.discount.type?(o(),p("span",tt," ( "+x(e.presupuesto.discount.value)+"% off ) ",1)):(o(),p("span",at," ( $"+x(e.presupuesto.discount.value)+" off ) ",1))]),c("td",null," - "+x(d(J)(e.presupuesto.totales.upfront.total_details.amount_discount/100)),1)])):f("v-if",!0),c("tr",st,[lt,c("td",null,x(d(J)(e.presupuesto.totales.upfront.total_details.amount_tax/100)),1)]),c("tr",rt,[ut,c("td",null,x(d(J)(e.presupuesto.totales.upfront.amount_total/100)),1)]),e.presupuesto.totales.recurring?(o(),p("tr",it,[nt,c("td",null,x(d(J)(e.presupuesto.totales.recurring.amount_total/100)),1)])):f("v-if",!0)])]),k(t.$slots,"default")])),_:3})):f("v-if",!0)}});const pt={key:1},mt={class:"d-flex justify-content-end w-100"},ct={class:"d-flex justify-content-between w-100"},dt=h(" Finish "),vt=h(" Cancel "),yt=h(" Register another member ");var ft=r({expose:[],props:{type:{type:String,default:"create"},title:{type:String,default:""}},emits:["changeStep","returnData"],setup(t,{emit:a}){u(!1);const s=u(!1),r=n((()=>G.value[0])),i=n((()=>{let e=[];return G.value.forEach(((t,a)=>{a>0&&e.push(t)})),e}));j((()=>{w(Z.value,"mismatarjeta").change=b,ee.value=[],r.value?(te(r.value.membresia,r.value.member),i.value.length&&i.value.forEach((e=>{te(e.membresia,e.member)}))):(console.error("No tiene membresia"),$.error("Membership is required"))}));const b=function(){this.model},g=(e,t=3,s)=>{a("returnData",{total:s}),a("changeStep",e,t,{})},h=n((()=>{let e=[];return ee.value.forEach((t=>{0==w(t.member,"is_family").model&&e.push(t)})),ee.value.forEach((t=>{1==w(t.member,"is_family").model&&e.push(t)})),e}));u([]);const _=()=>{window.location.reload()},S=u([]),x=e=>{S.value.push(e)};return(a,r)=>{const u=oe,i=ze,n=ot,b=e,j=l;return o(),p(j,{titles:{title:t.title},"is-loading":s.value,buttons:["prev"],step:5,onChangeStep:g},{default:m((()=>[f(' <div class="d-flex justify-content-end align-items-center mb-4">\n\n      <VButton @click="PaymentAllMembership" color="primary"\n        >Pay all memberships</VButton\n      >\n\n      <div v-if="miembrosNuevos.length">\n        <stripeAddCard\n          :amount="props.total"\n          :id="miembrosNuevos[0].idMember"\n          :member_membership="miembrosNuevos[0].idMemberMembership"\n          :variosMiembros="true"\n          :miembros="miembrosNuevos"\n          @PaymentAction="PaymentAction"\n        />\n      </div>\n      \n    </div> '),d(ee).length?f("v-if",!0):(o(),p(u,{key:0,height:"300px",class:"mb-4"})),d(ee)?(o(),p("div",pt,[(o(!0),p(v,null,y(d(h),((e,t)=>(o(),p(n,{key:`presupuesto-${t}`,class:"mb-4",presupuesto:e},{default:m((()=>[c("div",mt,[c(i,{member:e.member,membresia:e.membresia,contact:d(z),presupuesto_id:e.presupuesto_id,"categories-members":d(ae),"notas-input":d(se),total:e.totales.upfront.amount_total,onPaymentAction:x},null,8,["member","membresia","contact","presupuesto_id","categories-members","notas-input","total"])])])),_:2},1032,["presupuesto"])))),128))])):f("v-if",!0),c("div",ct,[d(h).length>0&&S.value.length==d(h).length?(o(),p(b,{key:0,color:"danger",to:{name:"index"}},{default:m((()=>[dt])),_:1})):(o(),p(b,{key:1,color:"danger",to:{name:"index"}},{default:m((()=>[vt])),_:1})),d(h).length>0&&S.value.length==d(h).length?(o(),p(b,{key:2,color:"success",onClick:_},{default:m((()=>[yt])),_:1})):f("v-if",!0)])])),_:1},8,["titles","is-loading"])}}});C("data-v-5a5e3b40");const bt={class:"content"},gt={class:"content-text"};P();var ht=r({expose:[],props:{active:{type:Boolean,default:!1,required:!0},step:{type:Number,default:0,required:!0},text:{type:String,default:""}},setup(e){const t=e,a=n((()=>t.active?100:0));return(t,s)=>{const l=ce;return o(),p("div",bt,[c("div",{class:["circle",e.active?"active":""]},null,2),c(l,{class:"progressbar",value:d(a),size:"smaller"},null,8,["value"]),c("div",gt,[c("p",null,"STEP "+x(e.step),1),c("p",null,[c("b",null,x(e.text),1)])])])}}});ht.__scopeId="data-v-5a5e3b40";const _t={class:"columns is-multiline"},St={class:"column is-12"},xt={class:"column is-9"},jt={class:"column is-3"};var Mt=r({expose:[],setup(s){je.value="Add New members",N({title:"Members"}),j((()=>{O(),ve().then((e=>{R(Q,"memberships_id",e.data.memberships)})),w(Q,"memberships_id").disabled=!1,w(Q,"recurrences_id").disabled=!1,w(Q,"is_initiation_fee").disabled=!1,w(Q,"discount").disabled=!1,be(1,"membership").then((e=>{R(Q,"discount",e.data.discounts)})),fe(),ge().then((e=>{R(L,"city_id",he.value),R(le,"city_id",he.value),R(B,"city_id",he.value),R(L,"state_id",_e.value),R(le,"state_id",_e.value),R(B,"state_id",_e.value),R(L,"country_id",Se.value),R(le,"country_id",Se.value),R(B,"country_id",Se.value)})),xe().then((e=>{R(Q,"staff_id",e.data)}))}));const l=u(1),r=u([{step:1,text:"Member Information",categories:["Adult","Minor","Prospect"]},{step:2,text:"Add Family Member",categories:["Adult","Prospect"]},{step:2,text:"Parent / Guardian",categories:["Minor"]},{step:3,text:"Contact Preference",categories:["Adult","Minor","Prospect"]},{step:4,text:"Select membership",categories:["Adult","Minor","Prospect"]},{step:5,text:"Add Payment Method",categories:["Adult","Minor","Prospect"]},{step:6,text:"Sign Contract & Waiver",categories:["Adult","Minor","Prospect"]}]),i=n((()=>L.value.filter((e=>e.categories.includes(ae.value.model))))),g=n((()=>r.value.find((e=>e.step==l.value&&e.categories.includes(ae.value.model))))),_=n((()=>r.value.filter((e=>e.categories.includes(ae.value.model)))));n((()=>D(B.value)));const S=(e,t=3,a={})=>{ae.value.model,6==e?sendData(t,a):l.value=e},A=u(null),k=e=>{A.value=e},C=u(null),P=e=>{C.value=e},V=u([]),I=e=>{V.value=e.value},q=u([]),E=e=>{q.value=e.familyMembership.value,U.value=e.memberMembership};u(null),u(null),u(null);const O=()=>{re.value=null,ue.value=null;let e=["is_family","principal_family"];T(L.value.filter((t=>!e.includes(t.name)))),e=["recurrence"],T(Q.filter((t=>!e.includes(t.name)))),T(se.value),T(B.value)};return(s,r)=>{const u=e,n=t,j=a,A=Me,C=Ae,N=De,D=Ve,w=Ie,O=ft,$=ht,J=de;return o(),p(J,null,{default:m((()=>[f(" Display a payment form "),c("div",_t,[c("div",St,[1==l.value?(o(),p(j,{key:0,class:"w-100",addons:""},{default:m((()=>[(o(!0),p(v,null,y(d(ae).values,((e,t)=>(o(),p(n,{key:`categoymember-${t}`},{default:m((()=>[c(u,{onClick:t=>d(ae).model=e,color:d(ae).model==e?"primary":void 0,rounded:""},{default:m((()=>[h(x(e),1)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})):f("v-if",!0)]),c("div",xt,[f(" memberInformation "),b(c(A,{type:"create",title:d(g).text,inputs:d(i),onChangeStep:S,onReturData:k},null,8,["title","inputs"]),[[M,1==l.value]]),f(" parentGuardian "),b(c(C,{title:d(g).text,onChangeStep:S},null,8,["title"]),[[M,2==l.value&&"Minor"==d(ae).model]]),f(" familyMembers "),b(c(N,{type:"create",title:d(g).text,inputs:d(le),onChangeStep:S,onReturData:I},null,8,["title","inputs"]),[[M,2==l.value&&("Adult"==d(ae).model||"Prospect"==d(ae).model)]]),f(" contactPreference "),b(c(D,{type:"create",title:d(g).text,inputs:d(ie),onChangeStep:S,onReturnData:P},null,8,["title","inputs"]),[[M,3==l.value]]),f(" selectMembership "),b(c(w,{type:"create",member:d(i),familiares:V.value,title:d(g).text,inputs:d(G),memberships:d(ye),notes:d(se),onChangeStep:S,onReturnData:E},null,8,["member","familiares","title","inputs","memberships","notes"]),[[M,4==l.value]]),f(" paymentMethod "),5==l.value?(o(),p(O,{key:0,type:"create",title:d(g).text,member:d(i),familiares:V.value,inputs:d(G),"member-membership":d(U),"family-membership":q.value,onChangeStep:S},null,8,["title","member","familiares","inputs","member-membership","family-membership"])):f("v-if",!0)]),c("div",jt,[(o(!0),p(v,null,y(d(_),((e,t)=>(o(),p($,{key:t,active:e.step<=l.value,step:e.step,text:e.text},null,8,["active","step","text"])))),128))])])])),_:1})}}});export default Mt;
