<<<<<<< HEAD:dist/assets/Presupuesto.vue_vue&type=script&setup=true&lang.83a8be61.js
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.e0f8d5d5.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import{_ as s}from"./V-Control.c2f9b0a5.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import{d as n,r as u,b as i,h as o,i as c,l as m,k as p,R as d,H as v,F as b,G as y,S as _,W as f,_ as h,o as g,K as x,w as k,X as j,a2 as C,L as S}from"./vendor.3e3390b7.js";import{m as w,b as P,P as $,n as M,A,g as F,p as N}from"./index.3c26e2a1.js";import{c as q}from"./Companies.6c6219d2.js";import{_ as O}from"./MemberCards.vue_vue&type=script&setup=true&lang.139b70f4.js";import{_ as V}from"./V-Placeload.f3ddf6cd.js";import{_ as I}from"./signComponent.vue_vue&type=script&setup=true&lang.1f94fe98.js";import{V as T,W as E,t as R,d as z,X as B,Y as D,Z as L}from"./Members.985ec8a7.js";const U=m("p",{class:"title is-3"},[m("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),W={class:"title is-5"},X=y(" Cash "),Y={class:"d-flex mb-4 justify-content-between"},G={class:"title is-5"},H=y(" Total: "),K={class:"title is-5"},Q=y(" Cash Total: "),Z={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},J=m("p",{class:"title is-5 mb-4"},"Change Back:",-1),ee={class:"title is-3 mb-0"},te={class:"d-flex justify-content-center flex-wrap mb-4"},ae=m("div",{class:"w-100"},null,-1),se={class:"d-flex justify-content-center"},le=y("Reset"),re=y("Confirm");var ne=n({expose:[],props:{total:{type:[Number,String],default:0},margin:{type:String,default:"mx-2"},presupuesto:{type:Object,defaukt:{}}},emits:["onPaymentCash"],setup(t,{emit:n}){const g=t,x=u(!1),k=u(0),j=i((()=>{const e=parseFloat(k.value)-parseFloat(g.total/100);return e>0?e:0})),C=()=>{x.value=!1,n("onPaymentCash",{changeBack:j.value,cash:k.value,presupuesto:g.presupuesto})};return(n,u)=>{const i=a,g=e,S=s,P=l,$=r;return o(),c(d,null,[m(i,{color:"warning",class:["btn-card w-100 justify-content-center column is-4",t.margin],onClick:u[1]||(u[1]=e=>x.value=!0)},{default:p((()=>[U,m("p",W,[X,m("b",null,v(b(w)(t.total)),1)])])),_:1},8,["class"]),m($,{title:"",open:x.value,actions:"center",onClose:u[5]||(u[5]=e=>x.value=!1)},{content:p((()=>[m("div",Y,[m("p",G,[H,m("b",null,v(b(w)(t.total)),1)]),m("p",K,[Q,m("b",null,v(b(w)(k.value)),1)])]),m("div",Z,[J,m("p",ee,[m("b",null,v(b(w)(b(j))),1)])]),m("div",te,[m(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[2]||(u[2]=e=>k.value=Number.parseFloat(t.total).toFixed(2))},{default:p((()=>[y(" Full Payment "+v(b(w)(t.total)),1)])),_:1}),ae,(o(),c(d,null,_([5,10,20,50,100],((e,t)=>m(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{k.value=parseFloat(k.value)+parseFloat(e)})(e)},{default:p((()=>[y(" $"+v(e),1)])),_:2},1032,["onClick"]))),64))]),m("div",se,[m(P,null,{default:p((()=>[m(S,null,{default:p((()=>[f(m("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>k.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[h,k.value]])])),_:1})])),_:1})])])),action:p((()=>[m(g,{onClick:u[4]||(u[4]=e=>k.value=0),class:"d-flex justify-content-center",raised:""},{default:p((()=>[le])),_:1}),m(g,{color:"success",onClick:C,disabled:parseFloat(k.value)<parseFloat(parseFloat(t.total/100).toFixed(2)),class:"d-flex justify-content-center",raised:""},{default:p((()=>[re])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const ue={class:"d-flex justify-content-between align-items-start"},ie=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),m("p",{class:"title is-5",style:{color:"white !important"}},"View Order")],-1),oe={key:0,class:"title is-6"},ce=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var me=n({expose:[],props:{membership_member:{type:[Number,String],default:0},invoice_id:{type:[Number,String],default:0}},setup(e){const t=e,s=u(!1);return g((()=>{})),(e,l)=>{const n=a,u=r;return o(),c(d,null,[m(n,{style:{background:"#388e3c"},class:"mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center",onClick:l[1]||(l[1]=e=>s.value=!0)},{default:p((()=>[m("div",ue,[ie,e.openModalRecibo?(o(),c("p",oe,[ce])):x("",!0)])])),_:1}),m(u,{title:"",open:s.value,actions:"center",onClose:l[2]||(l[2]=e=>s.value=!1)},{content:p((()=>[m("iframe",{src:`${b(P)}ticket_membership/${t.membership_member}?companie_id=${b(q).id}&invoice_id=${t.invoice_id}`,width:"100%",height:"500px",frameborder:"0"},null,8,["src"]),m("a",{href:`${b(P)}ticket_membership/${t.membership_member}?companie_id=${b(q).id}&invoice_id=${t.invoice_id}`},"Open",8,["href"])])),action:p((()=>[])),_:1},8,["open"])],64)}}});const pe=m("div",{id:"payment-element"},null,-1),de=y("Pay now "),ve=m("div",{id:"payment-message",class:"hidden"},null,-1);var be=n({expose:[],props:{presupuesto:{type:Object,default:{}},amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=Stripe($.value);k((()=>r.id),(e=>{v.value=!0,F()}));const v=u(!0);u({id:r.id,amount:r.amount});const b=u(),y=i((()=>"stripe"!=r.url?{payment_type_id:3,amount:r.amount}:{id:r.id,member_mermship_id:r.member_membership,amount:r.amount,payment_type_id:1}));u(null);const _=u(null),S=u(null),w=u(!1),P=u(null),F=async()=>{let e=await A.post(r.url,y.value).then((e=>{_.value=e.data.clientSecret,P.value=e.data.user_id,b.value=n.elements({clientSecret:_.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),S.value=b.value.create("card",{classes:{base:"base_card"}}),S.value.mount("#payment-element")})).catch((e=>{v.value=!1}));return v.value=!1,e},N=u(null),q=async e=>{e.preventDefault(),w.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(_.value,{payment_method:{card:S.value,billing_details:{name:N.value}}});if(a)w.value=!1,M.error(a.message);else{const{payment_method:e}=t;r.variosMiembros?(r.miembros.forEach((t=>{A.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership,payment_type_id:3,presupuesto:r.presupuesto}).catch((e=>{w.value=!1}))})),response.then((e=>{l("PaymentAction",e.data),M.success("Success Payment")})).catch((e=>{w.value=!1}))):await A.post("paymentStripe",{payment_method:e,amount:r.amount,user_id:P.value,membership_member_id:r.member_membership,payment_type_id:3,presupuesto:r.presupuesto}).then((e=>{l("PaymentAction",e.data),M.success("Success Payment")})).catch((e=>{w.value=!1}))}w.value=!1};return g((()=>{w.value=!1,F(),new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("payment_stripe_channel").bind("payment_stripe_event",(function(e){M.error("ALERT PAYMENT: "+e.member+" "+e.message)}))})),(s,l)=>{const r=V,n=e,u=t,i=a;return o(),c(d,null,[v.value?(o(),c(r,{key:0,height:"200px",class:"mt-6"})):x("",!0),f(m(i,{class:"mt-6"},{default:p((()=>[m("form",{onSubmit:C(q,["prevent"]),id:"payment-form"},[f(m("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":l[1]||(l[1]=e=>N.value=e),placeholder:"Name",type:"text"},null,512),[[h,N.value]]),pe,m(u,{size:"small",active:w.value},{default:p((()=>[m(n,{id:"submit",class:"mt-4",color:"info"},{default:p((()=>[de])),_:1})])),_:1},8,["active"]),ve],40,["onSubmit"])])),_:1},512),[[j,!v.value]])],64)}}});const ye={class:"w-100"},_e={class:"my-4"},fe={key:0},he=m("small",null,"Register the principal first",-1),ge=y(" Process Membership "),xe=y(" Process Membership "),ke={key:0,class:"columns is-multiline justify-content-center mt-6"},je={class:"d-flex justify-content-between align-items-start"},Ce=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Debit Automatic")],-1),Se={key:0,class:"title is-6"},we=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Pe={class:"columns is-multiline justify-content-center mt-6"},$e=m("p",{class:"title is-4"},"Payment Success",-1);var Me=n({expose:[],props:{presupuesto:{type:Object,default:{}},member:{type:Array,required:!0},member_id:{type:Number,default:0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0},type:{type:String,default:"create"}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=u(null),d=u(!1),y=u(null),_=u(null);g((()=>{d.value=!1,h.value=!1}));const f=()=>{n.value=null,d.value=!0,y.value=r.member.id,_.value=null,console.log("props.membresia",r.membresia);const e=N(r.membresia);e.members_id=r.member_id,e.total=r.total,e.payment_type_id=3,console.log(e),L(e).then((e=>{y.value=e.data.id,_.value=e.data.membership_members_id,M.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{M.error(`${t}: ${e}`)}))}))},h=u(!1),k=e=>{"object"==typeof e&&(y.value=e.id,w.value=e.invoice_id,l("PaymentAction",y)),h.value=!0},j=i((()=>0==F(r.member,"is_family").model)),C=i((()=>!h.value&&!(!j.value&&!T.value))),S=e=>{R(e,_.value).then((e=>{if(e.data.status)M.success("Sign Success");else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))})).catch((e=>{}))},w=u(0),P=e=>{if(n.value=1,_.value){const t={cash:e.cash,payment_type_id:n.value,total:r.total,cash_back:e.changeBack,membership_member_id:_.value,presupuesto:r.presupuesto};console.log("datos",t),z(_.value,t).then((e=>{console.log("cash",e),k({id:e.data.member_id,invoice_id:e.data.invoice_id}),M.success("Success Payment")})).catch((e=>{console.log(e.response)}))}else M.error("The membership ID is required. Click on Process Membership to generate it automatically")},$=e=>{d.value=!0,B({payment_method:e,amount:r.total,user_id:y.value,membership_member_id:_.value,payment_type_id:3,presupuesto:r.presupuesto}).then((e=>{w.value=e.data.invoice_id,k(y.value),M.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{M.error(`${t}: ${e}`)}))}))};return(l,u)=>{const i=e,g=t,M=a,A=ne,N=me,q=O,V=be,R=I;return o(),c("div",ye,[m("div",_e,[m("p",null,v(b(F)(r.member,"name").model)+" "+v(b(F)(r.member,"last_name").model),1),m("p",null,[m("small",null,v(b(j)?"Main member":"Family"),1)]),b(j)||b(T)?x("",!0):(o(),c("p",fe,[he]))]),m(g,{size:"small",active:d.value},{default:p((()=>["create"==r.type?(o(),c(i,{key:0,color:"success",onClick:u[1]||(u[1]=e=>b(C)?(n.value=null,d.value=!0,y.value=null,_.value=null,D({member:r.member,contact:r.contact,membresia:r.membresia,total:r.total,categoriesMembers:r.categoriesMembers,notasInput:r.notasInput}).then((e=>{y.value=e.data.id,_.value=e.data.membership_members_id})).catch((e=>{})),void(d.value=!1)):null),style:b(C)?{}:{opacity:".5"}},{default:p((()=>[ge])),_:1},8,["style"])):(o(),c(i,{key:1,color:"success",onClick:f},{default:p((()=>[xe])),_:1}))])),_:1},8,["active"]),y.value&&!h.value?(o(),c("div",ke,[m(M,{color:"info",class:"mx-2 btn-card w-100 column is-4",style:1==n.value?{opacity:"0.4"}:{},onClick:u[2]||(u[2]=e=>n.value=3)},{default:p((()=>[m("div",je,[Ce,3==n.value?(o(),c("p",Se,[we])):x("",!0)])])),_:1},8,["style"]),m(A,{presupuesto:s.presupuesto,total:r.total,onOnPaymentCash:P},null,8,["presupuesto","total"])])):x("",!0),m("div",Pe,[_.value&&h.value?(o(),c(N,{key:0,membership_member:_.value,invoice_id:w.value},null,8,["membership_member","invoice_id"])):x("",!0)]),3!=n.value||h.value?x("",!0):(o(),c(q,{key:1,"show-new-card":!1,memberid:y.value,"member-guardian-id":b(E)?b(E).id:null,onOnMethodPayment:$},null,8,["memberid","member-guardian-id"])),3!=n.value||h.value?x("",!0):(o(),c(V,{key:2,amount:r.total,id:y.value,member_membership:_.value,presupuesto:s.presupuesto,onPaymentAction:k},null,8,["amount","id","member_membership","presupuesto"])),h.value?(o(),c(M,{key:3,color:"success",class:"my-6"},{default:p((()=>[$e])),_:1})):x("",!0),h.value?(o(),c(R,{key:4,onOnSign:S,"is-sign":!0,contract:`contract_${y.value}_${_.value}_${b(F)(r.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${y.value}`},null,8,["contract","url-contract"])):x("",!0)])}}});const Ae={class:"table is-hoverable is-striped is-fullwidth"},Fe=m("thead",null,[m("tr",null,[m("th",{scope:"col"},"Membership"),m("th",{scope:"col"},"Description"),m("th",{style:{"text-align":"center"},scope:"col"},"Quantity"),m("th",{style:{"text-align":"right"},scope:"col"},"Cost"),m("th",{style:{"text-align":"right"},scope:"col"},"Import")])],-1),Ne={key:0},qe={style:{"text-transform":"capitalize"}},Oe={style:{"text-align":"center"}},Ve={style:{"text-align":"right"}},Ie={style:{"text-align":"right"}},Te={key:0},Ee={style:{"text-align":"right"}},Re=m("td",{colspan:"4",style:{"text-align":"right"}},[m("b",null,"Subtotal")],-1),ze={style:{"text-align":"right"}},Be={colspan:"4",style:{"text-align":"right"}},De={style:{"text-align":"right"}},Le=m("td",{colspan:"4"},[m("b",null,"Total to pay today")],-1),Ue={style:{"text-align":"right"}},We={colspan:"4"},Xe=m("p",null,[m("b",null,"Recurring Payment")],-1);var Ye=n({expose:[],props:{presupuesto:{type:Object,required:!0}},setup(e){const t=e;return g((()=>{console.log(t.presupuesto)})),(t,s)=>{const l=a;return o(),c(l,{key:0,class:"mb-4"},{default:p((()=>[m("table",Ae,[Fe,m("tbody",null,[(o(!0),c(d,null,_(e.presupuesto.items,((e,t)=>(o(),c("tr",{key:`membresia-${t}`},[m("td",null,[m("p",null,v(e.description),1),e.date_between?(o(),c("p",Ne,[m("small",null,v(e.date_between.start)+" - "+v(e.date_between.end),1)])):x("",!0)]),m("td",qe,v(e.interval_count)+" "+v(e.type),1),m("td",Oe,v(e.quantity),1),m("td",Ve,v(b(w)(e.amount_subtotal)),1),m("td",Ie,[m("p",null,[e.discount?(o(),c("small",Te,"("+v(e.discount.value)+" off)",1)):x("",!0),y(" "+v(b(w)(e.amount_total)),1)])])])))),128)),m("tr",Ee,[Re,m("td",null,v(b(w)(e.presupuesto.subtotal)),1)]),m("tr",ze,[m("td",Be," Tax "+v(e.presupuesto.tax.percentage)+"% ",1),m("td",null,v(b(w)(e.presupuesto.tax.value)),1)]),m("tr",De,[Le,m("td",null,v(b(w)(e.presupuesto.total)),1)]),m("tr",Ue,[m("td",We,[Xe,m("p",null,[m("small",null,"Next payment date: "+v(e.presupuesto.fechas.next_payment_date),1)])]),m("td",null,v(b(w)(e.presupuesto.recurrente)),1)])])]),S(t.$slots,"default")])),_:3})}}});export{ne as _,Me as a,Ye as b};
=======
import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.4aaf2044.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.f1fd7e5c.js";import{_ as s}from"./V-Control.e6c5ff74.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.0d618a83.js";import{d as n,r as u,b as i,h as o,i as c,l as m,k as p,R as d,H as v,F as y,G as b,S as _,W as f,_ as h,o as g,K as x,w as k,X as j,a2 as C,L as S}from"./vendor.5900a5e9.js";import{m as w,b as P,P as $,n as M,A,g as F,p as N}from"./index.16a56777.js";import{c as q}from"./Companies.5c5a8844.js";import{_ as O}from"./MemberCards.vue_vue&type=script&setup=true&lang.05250052.js";import{_ as V}from"./V-Placeload.587d3033.js";import{_ as I}from"./signComponent.vue_vue&type=script&setup=true&lang.839ac2e3.js";import{V as T,W as E,t as R,d as z,X as B,Y as D,Z as L}from"./Members.7011874d.js";const U=m("p",{class:"title is-3"},[m("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),W={class:"title is-5"},X=b(" Cash "),Y={class:"d-flex mb-4 justify-content-between"},G={class:"title is-5"},H=b(" Total: "),K={class:"title is-5"},Q=b(" Cash Total: "),Z={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},J=m("p",{class:"title is-5 mb-4"},"Change Back:",-1),ee={class:"title is-3 mb-0"},te={class:"d-flex justify-content-center flex-wrap mb-4"},ae=m("div",{class:"w-100"},null,-1),se={class:"d-flex justify-content-center"},le=b("Reset"),re=b("Confirm");var ne=n({expose:[],props:{total:{type:[Number,String],default:0},margin:{type:String,default:"mx-2"},presupuesto:{type:Object,defaukt:{}}},emits:["onPaymentCash"],setup(t,{emit:n}){const g=t,x=u(!1),k=u(0),j=i((()=>{const e=parseFloat(k.value)-parseFloat(g.total/100);return e>0?e:0})),C=()=>{x.value=!1,n("onPaymentCash",{changeBack:j.value,cash:k.value,presupuesto:g.presupuesto})};return(n,u)=>{const i=a,g=e,S=s,P=l,$=r;return o(),c(d,null,[m(i,{color:"warning",class:["btn-card w-100 justify-content-center column is-4",t.margin],onClick:u[1]||(u[1]=e=>x.value=!0)},{default:p((()=>[U,m("p",W,[X,m("b",null,v(y(w)(t.total)),1)])])),_:1},8,["class"]),m($,{title:"",open:x.value,actions:"center",onClose:u[5]||(u[5]=e=>x.value=!1)},{content:p((()=>[m("div",Y,[m("p",G,[H,m("b",null,v(y(w)(t.total)),1)]),m("p",K,[Q,m("b",null,v(y(w)(k.value)),1)])]),m("div",Z,[J,m("p",ee,[m("b",null,v(y(w)(y(j))),1)])]),m("div",te,[m(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[2]||(u[2]=e=>k.value=Number.parseFloat(t.total).toFixed(2))},{default:p((()=>[b(" Full Payment "+v(y(w)(t.total)),1)])),_:1}),ae,(o(),c(d,null,_([5,10,20,50,100],((e,t)=>m(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{k.value=parseFloat(k.value)+parseFloat(e)})(e)},{default:p((()=>[b(" $"+v(e),1)])),_:2},1032,["onClick"]))),64))]),m("div",se,[m(P,null,{default:p((()=>[m(S,null,{default:p((()=>[f(m("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>k.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[h,k.value]])])),_:1})])),_:1})])])),action:p((()=>[m(g,{onClick:u[4]||(u[4]=e=>k.value=0),class:"d-flex justify-content-center",raised:""},{default:p((()=>[le])),_:1}),m(g,{color:"success",onClick:C,disabled:parseFloat(k.value)<parseFloat(parseFloat(t.total/100).toFixed(2)),class:"d-flex justify-content-center",raised:""},{default:p((()=>[re])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const ue={class:"d-flex justify-content-between align-items-start"},ie=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),m("p",{class:"title is-5",style:{color:"white !important"}},"View Order")],-1),oe={key:0,class:"title is-6"},ce=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var me=n({expose:[],props:{membership_member:{type:[Number,String],default:0},invoice_id:{type:[Number,String],default:0}},setup(e){const t=e,s=u(!1);return g((()=>{})),(e,l)=>{const n=a,u=r;return o(),c(d,null,[m(n,{style:{background:"#388e3c"},class:"mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center",onClick:l[1]||(l[1]=e=>s.value=!0)},{default:p((()=>[m("div",ue,[ie,e.openModalRecibo?(o(),c("p",oe,[ce])):x("",!0)])])),_:1}),m(u,{title:"",open:s.value,actions:"center",onClose:l[2]||(l[2]=e=>s.value=!1)},{content:p((()=>[m("iframe",{src:`${y(P)}ticket_membership/${t.membership_member}?companie_id=${y(q).id}&invoice_id=${t.invoice_id}`,width:"100%",height:"500px",frameborder:"0"},null,8,["src"]),m("a",{href:`${y(P)}ticket_membership/${t.membership_member}?companie_id=${y(q).id}&invoice_id=${t.invoice_id}`},"Open",8,["href"])])),action:p((()=>[])),_:1},8,["open"])],64)}}});const pe=m("div",{id:"payment-element"},null,-1),de=b("Pay now "),ve=m("div",{id:"payment-message",class:"hidden"},null,-1);var ye=n({expose:[],props:{presupuesto:{type:Object,default:{}},amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=Stripe($.value);k((()=>r.id),(e=>{v.value=!0,F()}));const v=u(!0);u({id:r.id,amount:r.amount});const y=u(),b=i((()=>"stripe"!=r.url?{payment_type_id:3,amount:r.amount}:{id:r.id,member_mermship_id:r.member_membership,amount:r.amount,payment_type_id:1}));u(null);const _=u(null),S=u(null),w=u(!1),P=u(null),F=async()=>{let e=await A.post(r.url,b.value).then((e=>{_.value=e.data.clientSecret,P.value=e.data.user_id,y.value=n.elements({clientSecret:_.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),S.value=y.value.create("card",{classes:{base:"base_card"}}),S.value.mount("#payment-element")})).catch((e=>{v.value=!1}));return v.value=!1,e},N=u(null),q=async e=>{e.preventDefault(),w.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(_.value,{payment_method:{card:S.value,billing_details:{name:N.value}}});if(a)w.value=!1,M.error(a.message);else{const{payment_method:e}=t;r.variosMiembros?(r.miembros.forEach((t=>{A.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership,payment_type_id:3,presupuesto:r.presupuesto}).catch((e=>{w.value=!1}))})),response.then((e=>{l("PaymentAction",e.data),M.success("Success Payment")})).catch((e=>{w.value=!1}))):await A.post("paymentStripe",{payment_method:e,amount:r.amount,user_id:P.value,membership_member_id:r.member_membership,payment_type_id:3,presupuesto:r.presupuesto}).then((e=>{l("PaymentAction",e.data),M.success("Success Payment")})).catch((e=>{w.value=!1}))}w.value=!1};return g((()=>{w.value=!1,F(),new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("payment_stripe_channel").bind("payment_stripe_event",(function(e){M.error("ALERT PAYMENT: "+e.member+" "+e.message)}))})),(s,l)=>{const r=V,n=e,u=t,i=a;return o(),c(d,null,[v.value?(o(),c(r,{key:0,height:"200px",class:"mt-6"})):x("",!0),f(m(i,{class:"mt-6"},{default:p((()=>[m("form",{onSubmit:C(q,["prevent"]),id:"payment-form"},[f(m("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":l[1]||(l[1]=e=>N.value=e),placeholder:"Name",type:"text"},null,512),[[h,N.value]]),pe,m(u,{size:"small",active:w.value},{default:p((()=>[m(n,{id:"submit",class:"mt-4",color:"info"},{default:p((()=>[de])),_:1})])),_:1},8,["active"]),ve],40,["onSubmit"])])),_:1},512),[[j,!v.value]])],64)}}});const be={class:"w-100"},_e={class:"my-4"},fe={key:0},he=m("small",null,"Register the principal first",-1),ge=b(" Process Membership "),xe=b(" Process Membership "),ke={key:0,class:"columns is-multiline justify-content-center mt-6"},je={class:"d-flex justify-content-between align-items-start"},Ce=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Debit Automatic")],-1),Se={key:0,class:"title is-6"},we=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Pe={class:"columns is-multiline justify-content-center mt-6"},$e=m("p",{class:"title is-4"},"Payment Success",-1);var Me=n({expose:[],props:{presupuesto:{type:Object,default:{}},member:{type:Array,required:!0},member_id:{type:Number,default:0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0},type:{type:String,default:"create"}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=u(null),d=u(!1),b=u(null),_=u(null);g((()=>{d.value=!1,h.value=!1}));const f=()=>{n.value=null,d.value=!0,b.value=r.member.id,_.value=null,console.log("props.membresia",r.membresia);const e=N(r.membresia);e.members_id=r.member_id,e.total=r.total,e.payment_type_id=3,console.log(e),L(e).then((e=>{b.value=e.data.id,_.value=e.data.membership_members_id,M.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{M.error(`${t}: ${e}`)}))}))},h=u(!1),k=e=>{"object"==typeof e&&(b.value=e.id,w.value=e.invoice_id,l("PaymentAction",b)),h.value=!0},j=i((()=>0==F(r.member,"is_family").model)),C=i((()=>!h.value&&!(!j.value&&!T.value))),S=e=>{R(e,_.value).then((e=>{if(e.data.status)M.success("Sign Success");else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))})).catch((e=>{}))},w=u(0),P=e=>{if(n.value=1,_.value){const t={cash:e.cash,payment_type_id:n.value,total:r.total,cash_back:e.changeBack,membership_member_id:_.value,presupuesto:r.presupuesto};console.log("datos",t),z(_.value,t).then((e=>{console.log("cash",e),k({id:e.data.member_id,invoice_id:e.data.invoice_id}),M.success("Success Payment")})).catch((e=>{console.log(e.response)}))}else M.error("The membership ID is required. Click on Process Membership to generate it automatically")},$=e=>{d.value=!0,B({payment_method:e,amount:r.total,user_id:b.value,membership_member_id:_.value,payment_type_id:3,presupuesto:r.presupuesto}).then((e=>{w.value=e.data.invoice_id,k(b.value),M.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{M.error(`${t}: ${e}`)}))}))};return(l,u)=>{const i=e,g=t,M=a,A=ne,N=me,q=O,V=ye,R=I;return o(),c("div",be,[m("div",_e,[m("p",null,v(y(F)(r.member,"name").model)+" "+v(y(F)(r.member,"last_name").model),1),m("p",null,[m("small",null,v(y(j)?"Main member":"Family"),1)]),y(j)||y(T)?x("",!0):(o(),c("p",fe,[he]))]),m(g,{size:"small",active:d.value},{default:p((()=>["create"==r.type?(o(),c(i,{key:0,color:"success",onClick:u[1]||(u[1]=e=>y(C)?(n.value=null,d.value=!0,b.value=null,_.value=null,D({member:r.member,contact:r.contact,membresia:r.membresia,total:r.total,categoriesMembers:r.categoriesMembers,notasInput:r.notasInput}).then((e=>{b.value=e.data.id,_.value=e.data.membership_members_id})).catch((e=>{})),void(d.value=!1)):null),style:y(C)?{}:{opacity:".5"}},{default:p((()=>[ge])),_:1},8,["style"])):(o(),c(i,{key:1,color:"success",onClick:f},{default:p((()=>[xe])),_:1}))])),_:1},8,["active"]),b.value&&!h.value?(o(),c("div",ke,[m(M,{color:"info",class:"mx-2 btn-card w-100 column is-4",style:1==n.value?{opacity:"0.4"}:{},onClick:u[2]||(u[2]=e=>n.value=3)},{default:p((()=>[m("div",je,[Ce,3==n.value?(o(),c("p",Se,[we])):x("",!0)])])),_:1},8,["style"]),m(A,{presupuesto:s.presupuesto,total:r.total,onOnPaymentCash:P},null,8,["presupuesto","total"])])):x("",!0),m("div",Pe,[_.value&&h.value?(o(),c(N,{key:0,membership_member:_.value,invoice_id:w.value},null,8,["membership_member","invoice_id"])):x("",!0)]),3!=n.value||h.value?x("",!0):(o(),c(q,{key:1,"show-new-card":!1,memberid:b.value,"member-guardian-id":y(E)?y(E).id:null,onOnMethodPayment:$},null,8,["memberid","member-guardian-id"])),3!=n.value||h.value?x("",!0):(o(),c(V,{key:2,amount:r.total,id:b.value,member_membership:_.value,presupuesto:s.presupuesto,onPaymentAction:k},null,8,["amount","id","member_membership","presupuesto"])),h.value?(o(),c(M,{key:3,color:"success",class:"my-6"},{default:p((()=>[$e])),_:1})):x("",!0),h.value?(o(),c(R,{key:4,onOnSign:S,"is-sign":!0,contract:`contract_${b.value}_${_.value}_${y(F)(r.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${b.value}`},null,8,["contract","url-contract"])):x("",!0)])}}});const Ae={class:"table is-hoverable is-striped is-fullwidth"},Fe=m("thead",null,[m("tr",null,[m("th",{scope:"col"},"Membership"),m("th",{scope:"col"},"Description"),m("th",{style:{"text-align":"center"},scope:"col"},"Quantity"),m("th",{style:{"text-align":"right"},scope:"col"},"Cost"),m("th",{style:{"text-align":"right"},scope:"col"},"Import")])],-1),Ne={key:0},qe={style:{"text-transform":"capitalize"}},Oe={style:{"text-align":"center"}},Ve={style:{"text-align":"right"}},Ie={style:{"text-align":"right"}},Te={key:0},Ee={style:{"text-align":"right"}},Re=m("td",{colspan:"4",style:{"text-align":"right"}},[m("b",null,"Subtotal")],-1),ze={style:{"text-align":"right"}},Be={colspan:"4",style:{"text-align":"right"}},De={style:{"text-align":"right"}},Le=m("td",{colspan:"4"},[m("b",null,"Total to pay today")],-1),Ue={style:{"text-align":"right"}},We={colspan:"4"},Xe=m("p",null,[m("b",null,"Recurring Payment")],-1);var Ye=n({expose:[],props:{presupuesto:{type:Object,required:!0}},setup(e){const t=e;return g((()=>{console.log(t.presupuesto)})),(t,s)=>{const l=a;return o(),c(l,{key:0,class:"mb-4"},{default:p((()=>[m("table",Ae,[Fe,m("tbody",null,[(o(!0),c(d,null,_(e.presupuesto.items,((e,t)=>(o(),c("tr",{key:`membresia-${t}`},[m("td",null,[m("p",null,v(e.description),1),e.date_between?(o(),c("p",Ne,[m("small",null,v(e.date_between.start)+" - "+v(e.date_between.end),1)])):x("",!0)]),m("td",qe,v(e.interval_count)+" "+v(e.type),1),m("td",Oe,v(e.quantity),1),m("td",Ve,v(y(w)(e.amount_subtotal)),1),m("td",Ie,[m("p",null,[e.discount?(o(),c("small",Te,"("+v(e.discount.value)+" off)",1)):x("",!0),b(" "+v(y(w)(e.amount_total)),1)])])])))),128)),m("tr",Ee,[Re,m("td",null,v(y(w)(e.presupuesto.subtotal)),1)]),m("tr",ze,[m("td",Be," Tax "+v(e.presupuesto.tax.percentage)+"% ",1),m("td",null,v(y(w)(e.presupuesto.tax.value)),1)]),m("tr",De,[Le,m("td",null,v(y(w)(e.presupuesto.total)),1)]),m("tr",Ue,[m("td",We,[Xe,m("p",null,[m("small",null,"Next payment date: "+v(e.presupuesto.fechas.next_payment_date),1)])]),m("td",null,v(y(w)(e.presupuesto.recurrente)),1)])])]),S(t.$slots,"default")])),_:3})}}});export{ne as _,Me as a,Ye as b};
>>>>>>> 577e70e0aca14702fdf4027e6116d43d016aadcf:dist/assets/Presupuesto.vue_vue&type=script&setup=true&lang.ec6301d5.js
