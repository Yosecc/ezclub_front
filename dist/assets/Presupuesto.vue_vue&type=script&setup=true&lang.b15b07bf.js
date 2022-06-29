import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{_ as s}from"./V-Control.45649f5a.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import{d as n,r as u,b as i,o,h as c,k as m,j as p,R as d,G as v,E as y,F as b,S as f,W as _,_ as h,H as g,K as x,w as k,X as j,a1 as C,A as S,L as w}from"./vendor.c210e0cb.js";import{m as M,b as P,P as $,A as F,n as q,g as A,p as N}from"./index.06b27ed3.js";import{c as V}from"./Companies.4dbb569c.js";import{_ as I}from"./MemberCards.vue_vue&type=script&setup=true&lang.ef745d00.js";import{_ as O}from"./V-Placeload.141ef784.js";import{_ as R}from"./signComponent.vue_vue&type=script&setup=true&lang.3056cbd6.js";import{P as z,r as B,d as D,Q as E,R as T,S as Y}from"./Members.3cf17dd8.js";const L=m("p",{class:"title is-3"},[m("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),Q={class:"title is-5"},U=b(" Cash "),G={class:"d-flex mb-4 justify-content-between"},H={class:"title is-5"},K=b(" Total: "),W={class:"title is-5"},X=b(" Cash Total: "),J={class:"\n          d-flex\n          justify-content-center\n          align-items-center\n          flex-column\n          mb-4\n        "},Z=m("p",{class:"title is-5 mb-4"},"Change Back:",-1),ee={class:"title is-3 mb-0"},te={class:"d-flex justify-content-center flex-wrap mb-4"},ae=m("div",{class:"w-100"},null,-1),se={class:"d-flex justify-content-center"},le=b("Reset"),re=b("Confirm");var ne=n({expose:[],props:{total:{type:[Number,String],default:0},margin:{type:String,default:"mx-2"}},emits:["onPaymentCash"],setup(t,{emit:n}){const g=t,x=u(!1),k=u(0),j=i((()=>{const e=parseFloat(k.value)-parseFloat(g.total/100);return e>0?e:0})),C=()=>{x.value=!1,n("onPaymentCash",{changeBack:j.value,cash:k.value})};return(n,u)=>{const i=a,g=e,S=s,w=l,P=r;return o(),c(d,null,[m(i,{color:"warning",class:["btn-card w-100 justify-content-center column is-4",t.margin],onClick:u[1]||(u[1]=e=>x.value=!0)},{default:p((()=>[L,m("p",Q,[U,m("b",null,v(y(M)(t.total/100)),1)])])),_:1},8,["class"]),m(P,{title:"",open:x.value,actions:"center",onClose:u[5]||(u[5]=e=>x.value=!1)},{content:p((()=>[m("div",G,[m("p",H,[K,m("b",null,v(y(M)(t.total/100)),1)]),m("p",W,[X,m("b",null,v(y(M)(k.value)),1)])]),m("div",J,[Z,m("p",ee,[m("b",null,v(y(M)(y(j))),1)])]),m("div",te,[m(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[2]||(u[2]=e=>k.value=Number.parseFloat(t.total/100).toFixed(2))},{default:p((()=>[b(" Full Payment "+v(y(M)(t.total/100)),1)])),_:1}),ae,(o(),c(d,null,f([5,10,20,50,100],((e,t)=>m(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{k.value=parseFloat(k.value)+parseFloat(e)})(e)},{default:p((()=>[b(" $"+v(e),1)])),_:2},1032,["onClick"]))),64))]),m("div",se,[m(w,null,{default:p((()=>[m(S,null,{default:p((()=>[_(m("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>k.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[h,k.value]])])),_:1})])),_:1})])])),action:p((()=>[m(g,{onClick:u[4]||(u[4]=e=>k.value=0),class:"d-flex justify-content-center",raised:""},{default:p((()=>[le])),_:1}),m(g,{color:"success",onClick:C,disabled:parseFloat(k.value)<parseFloat(parseFloat(t.total/100).toFixed(2)),class:"d-flex justify-content-center",raised:""},{default:p((()=>[re])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const ue={class:"d-flex justify-content-between align-items-start"},ie=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),m("p",{class:"title is-5",style:{color:"white !important"}},"View Order")],-1),oe={key:0,class:"title is-6"},ce=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var me=n({expose:[],props:{membership_member:{type:[Number,String],default:0}},setup(e){const t=e,s=u(!1);return g((()=>{})),(e,l)=>{const n=a,u=r;return o(),c(d,null,[m(n,{style:{background:"#388e3c"},class:"mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center",onClick:l[1]||(l[1]=e=>s.value=!0)},{default:p((()=>[m("div",ue,[ie,e.openModalRecibo?(o(),c("p",oe,[ce])):x("",!0)])])),_:1}),m(u,{title:"",open:s.value,actions:"center",onClose:l[2]||(l[2]=e=>s.value=!1)},{content:p((()=>[m("iframe",{src:`${y(P)}ticket_membership/${t.membership_member}?companie_id=${y(V).id}`,width:"100%",height:"500px",frameborder:"0"},null,8,["src"]),m("a",{href:`${y(P)}/ticket_membership/${t.membership_member}?companie_id=${y(V).id}`},"Open",8,["href"])])),action:p((()=>[])),_:1},8,["open"])],64)}}});const pe=m("div",{id:"payment-element"},null,-1),de=b("Pay now "),ve=m("div",{id:"payment-message",class:"hidden"},null,-1);var ye=n({expose:[],props:{amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=Stripe($.value);k((()=>r.id),(e=>{v.value=!0,P()}));const v=u(!0);u({id:r.id,amount:r.amount});const y=u(),b=i((()=>"stripe"!=r.url?{payment_type_id:3,amount:r.amount}:{id:r.id,member_mermship_id:r.member_membership,amount:r.amount,payment_type_id:1}));u(null);const f=u(null),S=u(null),w=u(!1),M=u(null),P=async()=>{let e=await F.post(r.url,b.value).then((e=>{f.value=e.data.clientSecret,M.value=e.data.user_id,y.value=n.elements({clientSecret:f.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),S.value=y.value.create("card",{classes:{base:"base_card"}}),S.value.mount("#payment-element")})).catch((e=>{v.value=!1}));return v.value=!1,e},A=u(null),N=async e=>{e.preventDefault(),w.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(f.value,{payment_method:{card:S.value,billing_details:{name:A.value}}});if(a)w.value=!1,q.error(a.message);else{const{payment_method:e}=t;r.variosMiembros?r.miembros.forEach((t=>{F.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership,payment_type_id:3}).catch((e=>{w.value=!1}))})):await F.post("paymentStripe",{payment_method:e,amount:r.amount,user_id:M.value,membership_member_id:r.member_membership,payment_type_id:3}).catch((e=>{w.value=!1})),b.value&&(l("PaymentAction",b),q.success("Success Payment"))}w.value=!1};return g((()=>{w.value=!1,P()})),(s,l)=>{const r=O,n=e,u=t,i=a;return o(),c(d,null,[v.value?(o(),c(r,{key:0,height:"200px",class:"mt-6"})):x("",!0),_(m(i,{class:"mt-6"},{default:p((()=>[m("form",{onSubmit:C(N,["prevent"]),id:"payment-form"},[_(m("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":l[1]||(l[1]=e=>A.value=e),placeholder:"Name",type:"text"},null,512),[[h,A.value]]),pe,m(u,{size:"small",active:w.value},{default:p((()=>[m(n,{id:"submit",class:"mt-4",color:"info"},{default:p((()=>[de])),_:1})])),_:1},8,["active"]),ve],40,["onSubmit"])])),_:1},512),[[j,!v.value]])],64)}}});const be={class:"w-100"},fe={class:"my-4"},_e={key:0},he=m("small",null,"Register the principal first",-1),ge=b(" Process Membership "),xe=b(" Process Membership "),ke={key:0,class:"columns is-multiline justify-content-center mt-6"},je={class:"d-flex justify-content-between align-items-start"},Ce=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Debit Automatic")],-1),Se={key:0,class:"title is-6"},we=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Me={class:"columns is-multiline justify-content-center mt-6"},Pe=m("p",{class:"title is-4"},"Payment Success",-1);var $e=n({expose:[],props:{member:{type:Array,required:!0},member_id:{type:Number,default:0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0},type:{type:String,default:"create"}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=u(null),d=u(!1),b=u(null),f=u(null);g((()=>{d.value=!1,h.value=!1}));const _=()=>{n.value=null,d.value=!0,b.value=r.member.id,f.value=null;const e=N(r.membresia);e.members_id=r.member_id,e.total=r.total,e.payment_type_id=3,Y(e).then((e=>{b.value=e.data.id,f.value=e.data.membership_members_id,q.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{q.error(`${t}: ${e}`)}))}))},h=u(!1),k=e=>{h.value=!0,l("PaymentAction",e)},j=i((()=>0==A(r.member,"is_family").model)),C=i((()=>!h.value&&!(!j.value&&!z.value))),S=e=>{B(e,f.value).then((e=>{if(e.data.status)q.success("Sign Success");else for(var t in q.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{q.error(`${t} : ${e}`)}))})).catch((e=>{}))},w=e=>{if(n.value=1,f.value){const t={cash:e.cash,payment_type_id:n.value,total:r.total,cash_back:e.changeBack,membership_member_id:f.value};D(f.value,t).then((e=>{k(b.value),q.success("Success Payment")})).catch((e=>{console.log(e.response)}))}else q.error("The membership ID is required. Click on Process Membership to generate it automatically")},M=e=>{d.value=!0,E({payment_method:e,amount:r.total,user_id:b.value,membership_member_id:f.value,payment_type_id:3}).then((e=>{k(b.value),q.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{q.error(`${t}: ${e}`)}))}))};return(s,l)=>{const u=e,i=t,g=a,P=ne,$=me,F=I,q=ye,N=R;return o(),c("div",be,[m("div",fe,[m("p",null,v(y(A)(r.member,"name").model)+" "+v(y(A)(r.member,"last_name").model),1),m("p",null,[m("small",null,v(y(j)?"Main member":"Family"),1)]),y(j)||y(z)?x("",!0):(o(),c("p",_e,[he]))]),m(i,{size:"small",active:d.value},{default:p((()=>["create"==r.type?(o(),c(u,{key:0,color:"success",onClick:l[1]||(l[1]=e=>y(C)?(n.value=null,d.value=!0,b.value=null,f.value=null,T({member:r.member,contact:r.contact,membresia:r.membresia,total:r.total,categoriesMembers:r.categoriesMembers,notasInput:r.notasInput,presupuesto_id:r.presupuesto_id}).then((e=>{b.value=e.data.id,f.value=e.data.membership_members_id})).catch((e=>{})),void(d.value=!1)):null),style:y(C)?{}:{opacity:".5"}},{default:p((()=>[ge])),_:1},8,["style"])):(o(),c(u,{key:1,color:"success",onClick:_},{default:p((()=>[xe])),_:1}))])),_:1},8,["active"]),b.value&&!h.value?(o(),c("div",ke,[m(g,{color:"info",class:"mx-2 btn-card w-100 column is-4",style:1==n.value?{opacity:"0.4"}:{},onClick:l[2]||(l[2]=e=>n.value=3)},{default:p((()=>[m("div",je,[Ce,3==n.value?(o(),c("p",Se,[we])):x("",!0)])])),_:1},8,["style"]),m(P,{total:r.total,onOnPaymentCash:w},null,8,["total"])])):x("",!0),m("div",Me,[f.value&&h.value?(o(),c($,{key:0,membership_member:f.value},null,8,["membership_member"])):x("",!0)]),3!=n.value||h.value?x("",!0):(o(),c(F,{key:1,"show-new-card":!1,memberid:b.value,onOnMethodPayment:M},null,8,["memberid"])),3!=n.value||h.value?x("",!0):(o(),c(q,{key:2,amount:r.total,id:b.value,member_membership:f.value,onPaymentAction:l[3]||(l[3]=e=>k(b.value))},null,8,["amount","id","member_membership"])),h.value?(o(),c(g,{key:3,color:"success",class:"my-6"},{default:p((()=>[Pe])),_:1})):x("",!0),h.value?(o(),c(N,{key:4,onOnSign:S,"is-sign":!0,contract:`contract_${b.value}_${f.value}_${y(A)(r.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${b.value}`},null,8,["contract","url-contract"])):x("",!0)])}}});const Fe={class:"table is-hoverable is-striped is-fullwidth"},qe=m("thead",null,[m("tr",null,[m("th",{scope:"col"},"Membership Name"),m("th",{scope:"col"},"Plan"),m("th",{scope:"col"},"Quantity"),m("th",{scope:"col"},"Cost"),m("th",{scope:"col"},"Import")])],-1),Ae={class:"text-capitalize"},Ne={style:{"text-align":"right"}},Ve={style:{"text-align":"right"}},Ie={style:{"text-align":"right"}},Oe=m("td",{colspan:"4",style:{"text-align":"right"}},[m("b",null,"Subtotal")],-1),Re={key:0,style:{"text-align":"right"}},ze={colspan:"4"},Be={key:0},De={key:1},Ee={style:{"text-align":"right"}},Te=m("td",{colspan:"4",style:{"text-align":"right"}},"Tax 7%",-1),Ye={style:{"text-align":"right"}},Le={colspan:"4",style:{"text-align":"right"}},Qe={key:0},Ue=m("b",null,"Total to pay",-1),Ge={key:1,style:{"text-align":"right"}},He=m("td",{colspan:"4",style:{"text-align":"right"}},"Recurring total",-1);var Ke=n({expose:[],props:{presupuesto:{type:Object,required:!0}},setup:e=>(t,s)=>{const l=a;return e.presupuesto?(o(),c(l,{key:0,class:"mb-4"},{default:p((()=>[m("table",Fe,[qe,m("tbody",null,[(o(!0),c(d,null,f(e.presupuesto.membresias,((e,t)=>(o(),c("tr",{key:`membresia-${t}`},[m("td",null,v(e.description),1),m("td",Ae,v(e.interval_count)+" "+v(e.type?e.type:"Initiation Fee"),1),m("td",null,v(e.quantity),1),m("td",Ne,v(y(M)(e.amount_subtotal/e.quantity/100)),1),m("td",Ve,v(y(M)(e.amount_subtotal/100)),1)])))),128)),m("tr",Ie,[Oe,m("td",null,v(y(M)(e.presupuesto.totales.upfront.amount_subtotal/100)),1)]),e.presupuesto.discount?(o(),c("tr",Re,[m("td",ze,[b(v(e.presupuesto.discount.name)+" ",1),"percentaje"==e.presupuesto.discount.type?(o(),c("span",Be," ( "+v(e.presupuesto.discount.value)+"% off ) ",1)):(o(),c("span",De," ( $"+v(e.presupuesto.discount.value)+" off ) ",1))]),m("td",null," - "+v(y(M)(e.presupuesto.totales.upfront.total_details.amount_discount/100)),1)])):x("",!0),m("tr",Ee,[Te,m("td",null,v(y(M)(e.presupuesto.totales.upfront.total_details.amount_tax/100)),1)]),m("tr",Ye,[m("td",Le,[e.presupuesto.schedules?(o(),c("p",Qe,[m("small",null,"Scheduled Membership: "+v(y(S)(e.presupuesto.schedules).format("MM-DD-YYYY")),1)])):x("",!0),Ue]),m("td",null,v(y(M)(e.presupuesto.totales.upfront.amount_total/100)),1)]),e.presupuesto.totales.recurring?(o(),c("tr",Ge,[He,m("td",null,v(y(M)(e.presupuesto.totales.recurring.amount_total/100)),1)])):x("",!0)])]),w(t.$slots,"default")])),_:3})):x("",!0)}});export{ne as _,$e as a,Ke as b};
