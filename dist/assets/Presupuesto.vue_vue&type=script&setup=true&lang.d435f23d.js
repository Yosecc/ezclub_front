import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.4e35c32c.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.e7b64613.js";import{_ as s}from"./V-Control.f3c0402c.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.345ddd7c.js";import{d as n,r as u,b as i,o,h as c,k as m,j as p,Q as d,F as v,D as y,E as b,R as f,S as _,Y as h,G as g,J as x,w as k,U as j,a8 as C,K as S}from"./vendor.7d033f41.js";import{m as w,b as $,P,A as M,n as q,g as A,p as V}from"./index.025292ea.js";import{c as F}from"./Companies.a1438ed5.js";import{_ as I}from"./MemberCards.vue_vue&type=script&setup=true&lang.c194311f.js";import{_ as N}from"./V-Placeload.134a05d9.js";import{_ as O}from"./signComponent.vue_vue&type=script&setup=true&lang.30bcd111.js";import{G as z,q as B,d as E,H as R,I as T,J as D}from"./Members.fbbd125d.js";const U=m("p",{class:"title is-3"},[m("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),G={class:"title is-5"},J=b(" Cash "),Q={class:"d-flex mb-4 justify-content-between"},H={class:"title is-5"},K=b(" Total: "),L={class:"title is-5"},Y=b(" Cash Total: "),W={class:"\r\n          d-flex\r\n          justify-content-center\r\n          align-items-center\r\n          flex-column\r\n          mb-4\r\n        "},X=m("p",{class:"title is-5 mb-4"},"Change Back:",-1),Z={class:"title is-3 mb-0"},ee={class:"d-flex justify-content-center flex-wrap mb-4"},te=m("div",{class:"w-100"},null,-1),ae={class:"d-flex justify-content-center"},se=b("Reset"),le=b("Confirm");var re=n({expose:[],props:{total:{type:[Number,String],default:0},margin:{type:String,default:"mx-2"}},emits:["onPaymentCash"],setup(t,{emit:n}){const g=t,x=u(!1),k=u(0),j=i((()=>{const e=parseFloat(k.value)-parseFloat(g.total/100);return e>0?e:0})),C=()=>{x.value=!1,n("onPaymentCash",{changeBack:j.value,cash:k.value})};return(n,u)=>{const i=a,g=e,S=s,$=l,P=r;return o(),c(d,null,[m(i,{color:"warning",class:["btn-card w-100 justify-content-center column is-4",t.margin],onClick:u[1]||(u[1]=e=>x.value=!0)},{default:p((()=>[U,m("p",G,[J,m("b",null,v(y(w)(t.total/100)),1)])])),_:1},8,["class"]),m(P,{title:"",open:x.value,actions:"center",onClose:u[5]||(u[5]=e=>x.value=!1)},{content:p((()=>[m("div",Q,[m("p",H,[K,m("b",null,v(y(w)(t.total/100)),1)]),m("p",L,[Y,m("b",null,v(y(w)(k.value)),1)])]),m("div",W,[X,m("p",Z,[m("b",null,v(y(w)(y(j))),1)])]),m("div",ee,[m(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[2]||(u[2]=e=>k.value=t.total/100)},{default:p((()=>[b(" Full Payment "+v(y(w)(t.total/100)),1)])),_:1}),te,(o(),c(d,null,f([5,10,20,50,100],((e,t)=>m(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{k.value=parseFloat(k.value)+parseFloat(e)})(e)},{default:p((()=>[b(" $"+v(e),1)])),_:2},1032,["onClick"]))),64))]),m("div",ae,[m($,null,{default:p((()=>[m(S,null,{default:p((()=>[_(m("input",{"onUpdate:modelValue":u[3]||(u[3]=e=>k.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[h,k.value]])])),_:1})])),_:1})])])),action:p((()=>[m(g,{onClick:u[4]||(u[4]=e=>k.value=0),class:"d-flex justify-content-center",raised:""},{default:p((()=>[se])),_:1}),m(g,{color:"success",onClick:C,disabled:t.total/100>k.value,class:"d-flex justify-content-center",raised:""},{default:p((()=>[le])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const ne={class:"d-flex justify-content-between align-items-start"},ue=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),m("p",{class:"title is-5",style:{color:"white !important"}},"View Order")],-1),ie={key:0,class:"title is-6"},oe=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var ce=n({expose:[],props:{membership_member:{type:[Number,String],default:0}},setup(e){const t=e,s=u(!1);return g((()=>{})),(e,l)=>{const n=a,u=r;return o(),c(d,null,[m(n,{style:{background:"#388e3c"},class:"mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center",onClick:l[1]||(l[1]=e=>s.value=!0)},{default:p((()=>[m("div",ne,[ue,e.openModalRecibo?(o(),c("p",ie,[oe])):x("",!0)])])),_:1}),m(u,{title:"",open:s.value,actions:"center",onClose:l[2]||(l[2]=e=>s.value=!1)},{content:p((()=>[m("iframe",{src:`${y($)}ticket_membership/${t.membership_member}?companie_id=${y(F).id}`,width:"100%",height:"500px",frameborder:"0"},null,8,["src"]),m("a",{href:`${y($)}/ticket_membership/${t.membership_member}?companie_id=${y(F).id}`},"Open",8,["href"])])),action:p((()=>[])),_:1},8,["open"])],64)}}});const me=m("div",{id:"payment-element"},null,-1),pe=b("Pay now "),de=m("div",{id:"payment-message",class:"hidden"},null,-1);var ve=n({expose:[],props:{amount:{type:[Number,String],required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0},variosMiembros:{type:Boolean,default:!1},miembros:{type:Array,default:[]}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=Stripe(P.value);k((()=>r.id),(e=>{v.value=!0,A()}));const v=u(!0);u({id:r.id,amount:r.amount});const y=u(),b=i((()=>"stripe"!=r.url?{payment_type_id:3,amount:r.amount}:{id:r.id,member_mermship_id:r.member_membership,amount:r.amount,payment_type_id:1}));u(null);const f=u(null),S=u(null),w=u(!1),$=u(null),A=async()=>{let e=await M.post(r.url,b.value).then((e=>{f.value=e.data.clientSecret,$.value=e.data.user_id,y.value=n.elements({clientSecret:f.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),S.value=y.value.create("card",{classes:{base:"base_card"}}),S.value.mount("#payment-element")})).catch((e=>{v.value=!1}));return v.value=!1,e},V=u(null),F=async e=>{e.preventDefault(),w.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(f.value,{payment_method:{card:S.value,billing_details:{name:V.value}}});if(a)w.value=!1,q.error(a.message);else{const{payment_method:e}=t;r.variosMiembros?r.miembros.forEach((t=>{M.post("paymentStripe",{payment_method:e,user_id:t.idMember,membership_member_id:t.idMemberMembership,payment_type_id:3}).catch((e=>{w.value=!1}))})):await M.post("paymentStripe",{payment_method:e,amount:r.amount,user_id:$.value,membership_member_id:r.member_membership,payment_type_id:3}).catch((e=>{w.value=!1})),b.value&&(l("PaymentAction",b),q.success("Success Payment"))}w.value=!1};return g((()=>{w.value=!1,A()})),(s,l)=>{const r=N,n=e,u=t,i=a;return o(),c(d,null,[v.value?(o(),c(r,{key:0,height:"200px",class:"mt-6"})):x("",!0),_(m(i,{class:"mt-6"},{default:p((()=>[m("form",{onSubmit:C(F,["prevent"]),id:"payment-form"},[_(m("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),placeholder:"Name",type:"text"},null,512),[[h,V.value]]),me,m(u,{size:"small",active:w.value},{default:p((()=>[m(n,{id:"submit",class:"mt-4",color:"info"},{default:p((()=>[pe])),_:1})])),_:1},8,["active"]),de],40,["onSubmit"])])),_:1},512),[[j,!v.value]])],64)}}});const ye={class:"w-100"},be={class:"my-4"},fe={key:0},_e=m("small",null,"Register the principal first",-1),he=b(" Process Membership "),ge=b(" Process Membership "),xe={key:0,class:"columns is-multiline justify-content-center mt-6"},ke={class:"d-flex justify-content-between align-items-start"},je=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Debit Automatic")],-1),Ce={key:0,class:"title is-6"},Se=m("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),we={class:"columns is-multiline justify-content-center mt-6"},$e=m("p",{class:"title is-4"},"Payment Success",-1);var Pe=n({expose:[],props:{member:{type:Array,required:!0},member_id:{type:Number,default:0},membresia:{type:Array,required:!0},contact:{type:Array,required:!0},presupuesto_id:{type:String},total:{type:[String,Number],required:!0},categoriesMembers:{type:Object,required:!0},notasInput:{type:Object,required:!0},type:{type:String,default:"create"}},emits:["PaymentAction"],setup(s,{emit:l}){const r=s,n=u(null),d=u(!1),b=u(null),f=u(null);g((()=>{d.value=!1,h.value=!1}));const _=()=>{n.value=null,d.value=!0,b.value=r.member.id,f.value=null;const e=V(r.membresia);e.members_id=r.member_id,e.total=r.total,e.payment_type_id=3,D(e).then((e=>{b.value=e.data.id,f.value=e.data.membership_members_id,q.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{q.error(`${t}: ${e}`)}))}))},h=u(!1),k=e=>{h.value=!0,l("PaymentAction",e)},j=i((()=>0==A(r.member,"is_family").model)),C=i((()=>!h.value&&!(!j.value&&!z.value))),S=e=>{B(e,f.value).then((e=>{if(e.data.status)q.success("Sign Success");else for(var t in q.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{q.error(`${t} : ${e}`)}))})).catch((e=>{}))},w=e=>{if(n.value=1,f.value){const t={cash:e.cash,payment_type_id:n.value,total:r.total,cash_back:e.changeBack,membership_member_id:f.value};E(f.value,t).then((e=>{k(b.value),q.success("Success Payment")})).catch((e=>{console.log(e.response)}))}else q.error("The membership ID is required. Click on Process Membership to generate it automatically")},$=e=>{d.value=!0,R({payment_method:e,amount:r.total,user_id:b.value,membership_member_id:f.value,payment_type_id:3}).then((e=>{k(b.value),q.success("Success"),d.value=!1})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{q.error(`${t}: ${e}`)}))}))};return(s,l)=>{const u=e,i=t,g=a,P=re,M=ce,q=I,V=ve,F=O;return o(),c("div",ye,[m("div",be,[m("p",null,v(y(A)(r.member,"name").model)+" "+v(y(A)(r.member,"last_name").model),1),m("p",null,[m("small",null,v(y(j)?"Main member":"Family"),1)]),y(j)||y(z)?x("",!0):(o(),c("p",fe,[_e]))]),m(i,{size:"small",active:d.value},{default:p((()=>["create"==r.type?(o(),c(u,{key:0,color:"success",onClick:l[1]||(l[1]=e=>y(C)?(n.value=null,d.value=!0,b.value=null,f.value=null,T({member:r.member,contact:r.contact,membresia:r.membresia,total:r.total,categoriesMembers:r.categoriesMembers,notasInput:r.notasInput,presupuesto_id:r.presupuesto_id}).then((e=>{b.value=e.data.id,f.value=e.data.membership_members_id})).catch((e=>{})),void(d.value=!1)):null),style:y(C)?{}:{opacity:".5"}},{default:p((()=>[he])),_:1},8,["style"])):(o(),c(u,{key:1,color:"success",onClick:_},{default:p((()=>[ge])),_:1}))])),_:1},8,["active"]),b.value&&!h.value?(o(),c("div",xe,[m(g,{color:"info",class:"mx-2 btn-card w-100 column is-4",style:1==n.value?{opacity:"0.4"}:{},onClick:l[2]||(l[2]=e=>n.value=3)},{default:p((()=>[m("div",ke,[je,3==n.value?(o(),c("p",Ce,[Se])):x("",!0)])])),_:1},8,["style"]),m(P,{total:r.total,onOnPaymentCash:w},null,8,["total"])])):x("",!0),m("div",we,[f.value&&h.value?(o(),c(M,{key:0,membership_member:f.value},null,8,["membership_member"])):x("",!0)]),3!=n.value||h.value?x("",!0):(o(),c(q,{key:1,"show-new-card":!1,memberid:b.value,onOnMethodPayment:$},null,8,["memberid"])),3!=n.value||h.value?x("",!0):(o(),c(V,{key:2,amount:r.total,id:b.value,member_membership:f.value,onPaymentAction:l[3]||(l[3]=e=>k(b.value))},null,8,["amount","id","member_membership"])),h.value?(o(),c(g,{key:3,color:"success",class:"my-6"},{default:p((()=>[$e])),_:1})):x("",!0),h.value?(o(),c(F,{key:4,onOnSign:S,"is-sign":!0,contract:`contract_${b.value}_${f.value}_${y(A)(r.member,"personal_identifications").model}.pdf`,"url-contract":`generateContract/${b.value}`},null,8,["contract","url-contract"])):x("",!0)])}}});const Me={class:"table is-hoverable is-striped is-fullwidth"},qe=m("thead",null,[m("tr",null,[m("th",{scope:"col"},"Membership Name"),m("th",{scope:"col"},"Plan"),m("th",{scope:"col"},"Quantity"),m("th",{scope:"col"},"Cost"),m("th",{scope:"col"},"Import")])],-1),Ae={class:"text-capitalize"},Ve={style:{"text-align":"right"}},Fe={style:{"text-align":"right"}},Ie={style:{"text-align":"right"}},Ne=m("td",{colspan:"4",style:{"text-align":"right"}},[m("b",null,"Subtotal")],-1),Oe={key:0,style:{"text-align":"right"}},ze={colspan:"4"},Be={key:0},Ee={key:1},Re={style:{"text-align":"right"}},Te=m("td",{colspan:"4",style:{"text-align":"right"}},"Tax 7%",-1),De={style:{"text-align":"right"}},Ue=m("td",{colspan:"4",style:{"text-align":"right"}},[m("b",null,"Total to pay")],-1),Ge={key:1,style:{"text-align":"right"}},Je=m("td",{colspan:"4",style:{"text-align":"right"}},"Recurring total",-1);var Qe=n({expose:[],props:{presupuesto:{type:Object,required:!0}},setup:e=>(t,s)=>{const l=a;return e.presupuesto?(o(),c(l,{key:0,class:"mb-4"},{default:p((()=>[m("table",Me,[qe,m("tbody",null,[(o(!0),c(d,null,f(e.presupuesto.membresias,((e,t)=>(o(),c("tr",{key:`membresia-${t}`},[m("td",null,v(e.description),1),m("td",Ae,v(e.type?e.type:"Initiation Fee"),1),m("td",null,v(e.quantity),1),m("td",Ve,v(y(w)(e.amount_subtotal/e.quantity/100)),1),m("td",Fe,v(y(w)(e.amount_subtotal/100)),1)])))),128)),m("tr",Ie,[Ne,m("td",null,v(y(w)(e.presupuesto.totales.upfront.amount_subtotal/100)),1)]),e.presupuesto.discount?(o(),c("tr",Oe,[m("td",ze,[b(v(e.presupuesto.discount.name)+" ",1),"percentaje"==e.presupuesto.discount.type?(o(),c("span",Be," ( "+v(e.presupuesto.discount.value)+"% off ) ",1)):(o(),c("span",Ee," ( $"+v(e.presupuesto.discount.value)+" off ) ",1))]),m("td",null," - "+v(y(w)(e.presupuesto.totales.upfront.total_details.amount_discount/100)),1)])):x("",!0),m("tr",Re,[Te,m("td",null,v(y(w)(e.presupuesto.totales.upfront.total_details.amount_tax/100)),1)]),m("tr",De,[Ue,m("td",null,v(y(w)(e.presupuesto.totales.upfront.amount_total/100)),1)]),e.presupuesto.totales.recurring?(o(),c("tr",Ge,[Je,m("td",null,v(y(w)(e.presupuesto.totales.recurring.amount_total/100)),1)])):x("",!0)])]),S(t.$slots,"default")])),_:3})):x("",!0)}});export{re as _,Pe as a,Qe as b};
